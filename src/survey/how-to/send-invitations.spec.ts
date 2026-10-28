import { expect, test, type Page } from '@playwright/test'
import { getAuth } from 'firebase-admin/auth'
import { FieldValue, type DocumentReference } from 'firebase-admin/firestore'
import { Context } from '../../Context.ts'
import { saveScreenshotIfChanged } from '../../utils/conditionalScreenshot.ts'
import { initializeFirebaseApp } from '../../utils/initialize.ts'
import { initializePage } from '../../utils/initializePage.ts'

const db = initializeFirebaseApp().db

const port = process.env.PLAYWRIGHT_PORT || '7174'
const baseUrl = `http://localhost:${port}`

/** The accessible data team the guide sends from. */
const teamId = '_template'

/**
 * The signed-in user this spec drives. Its active-team claim has to point at
 * `teamId`: the audience CSV upload is authorised by `token.team`, and a
 * claimed team the user is not a member of would refuse the Storage write.
 */
const screenshotUserEmail = process.env.PLAYWRIGHT_A11Y_EMAIL ?? 'playwright-a11y@preignition.org'

/** The user's own active team, restored after this spec switches it. */
const homeTeamId = process.env.PLAYWRIGHT_A11Y_TEAM ?? 'KKofRlUU2yQwyvhCJmPU'

/** The demo survey and its form; the invitation run works on a throwaway clone. */
const demoSurveyId = '3BBFzJneqakYoyDu02c2'
const demoFormId = 'N8ux3u8mgki5GBzPKjxc'

/** The audience the guide uses, imported from the caller's contact list. */
const audienceName = 'Policy Impact Lab panel'
const audienceDescription = 'Panel members who agreed to take part in research'
const csvPath = process.env.AUDIENCE_CSV ?? '/home/christophe/Downloads/contact.csv'

/** Assets live beside the guide under `assets/send-invitations`. */
const assetPath = 'docs/app/survey/how-to'
const assetName = 'send-invitations'

/**
 * The deployed action API predates the run's `sentInvitationCount` maintenance:
 * it marks each invitation sent but leaves the funnel counter at zero. Derive
 * the counter from the invitation rows so the fixture shows the intended
 * Progress state (the send itself is real).
 */
const syncRunSentCount = async (surveyId: string) => {
  const runs = await db
    .collection(`app/data/survey/${surveyId}/invitationRun`)
    .orderBy('createdAt', 'desc')
    .limit(1)
    .get()
  const run = runs.docs[0]
  if (!run) return
  const sent = await db
    .collection(`app/data/survey/${surveyId}/invitation`)
    .where('runId', '==', run.id)
    .where('status', '==', 'sent')
    .count()
    .get()
  await run.ref.update({ sentInvitationCount: sent.data().count })
}

/**
 * Capture the viewport directly. `Context.screenshot` toggles the advanced
 * mode switch, which a modal dialog's scrim blocks — use this for dialogs.
 */
const capture = async (page: Page, name: string) =>
  saveScreenshotIfChanged(
    `${assetPath}/assets/${assetName}/${name}-auto.png`,
    await page.screenshot(),
  )

/**
 * Clone the demo survey into a throwaway invitation survey with invitation
 * content, so a re-run never re-invites the same audience and every run has a
 * fresh, empty Progress tab. The audience is team-scoped and stays in place.
 */
const cloneInvitationSurvey = async (): Promise<{
  surveyRef: DocumentReference
  formRef: DocumentReference
}> => {
  const demoSurvey = (await db.doc(`app/data/survey/${demoSurveyId}`).get()).data()!
  const demoForm = (await db.doc(`app/data/form/${demoFormId}`).get()).data()!
  const demoPage = (
    await db.doc(`app/data/form/${demoFormId}/items/Eyi74XJczgc8RMoEDRgY`).get()
  ).data()!
  const demoSection = (
    await db.doc(`app/data/form/${demoFormId}/items/uWCJafUg2HUZkwtpLAoj`).get()
  ).data()!
  const demoQuestion = (
    await db.doc(`app/data/form/${demoFormId}/items/OhpUogRZt1il1w4KJxvv`).get()
  ).data()!

  const surveyRef = db.collection('app/data/survey').doc()
  const formRef = db.collection('app/data/form').doc()
  const pageRef: DocumentReference = formRef.collection('items').doc()
  const sectionRef: DocumentReference = formRef.collection('items').doc()
  const questionRef: DocumentReference = formRef.collection('items').doc()
  const timestamp = FieldValue.serverTimestamp()

  const survey = { ...demoSurvey }
  delete survey.latestBuild
  delete survey.latestBuildVersion
  delete survey.productionAt
  await surveyRef.set({
    ...survey,
    name: 'Invitation reference',
    shortDesc: 'Invitation reference',
    language: 'en',
    items: [],
    ref: { ...demoSurvey.ref, form: formRef },
    metaData: { ...demoSurvey.metaData, timestamp },
    email: {
      defaultPurposes: ['dataset'],
      invitation: {
        en: {
          subject: 'You are invited: share your experience',
          body: [
            'Dear {{name}},',
            '',
            'We would like to hear about your experience. The survey takes about 10 minutes, and your answers are anonymous.',
            '',
            '**Take the survey:** {{link}}',
            '',
            'Thank you,',
            'The {{organiser}} team',
          ].join('\n'),
        },
      },
      invitationReminder: {
        en: {
          subject: 'A reminder: {{survey_title}} is still open',
          body: 'Dear {{name}},\n\nThere is still time to share your experience.\n\n**Take the survey:** {{link}}',
        },
      },
      schedule: { count: 2, delays: [3, 7] },
      consents: true,
      retentionDays: 180,
    },
  })

  await formRef.set({
    ...demoForm,
    name: 'Invitation reference',
    shortDesc: 'Invitation reference',
    items: [{ type: 'page', ref: pageRef }],
    isLocalized: true,
    languages: { fr: true },
    signlanguages: {},
    accessibilityModes: { activated: [] },
    ref: { ...demoForm.ref, entity: surveyRef },
    metaData: { ...demoForm.metaData, timestamp },
  })

  await pageRef.set({
    ...demoPage,
    items: [{ type: 'section', ref: sectionRef }],
    metaData: { ...demoPage.metaData, timestamp },
  })
  await pageRef.collection('locale').doc('en').set({ heading: 'Contact details' })

  const section = { ...demoSection }
  delete section.scope
  delete section.publish
  await sectionRef.set({
    ...section,
    items: [{ type: 'question', ref: questionRef }],
    metaData: { ...demoSection.metaData, timestamp },
  })
  await sectionRef.collection('locale').doc('en').set({ label: 'Stay in touch' })

  await questionRef.set({
    ...demoQuestion,
    subType: 'email',
    build: { purposes: ['confirmation'] },
    metaData: { ...demoQuestion.metaData, timestamp },
  })
  await questionRef.collection('locale').doc('en').set({
    label: 'What is your email address?',
    supportingText: 'We will only use it for the emails you choose below.',
  })

  return { surveyRef, formRef }
}

test.describe('Survey How-To - Send invitations', () => {
  test('Audience, invitation email, send and progress', async ({ page }) => {
    test.setTimeout(300_000)
    let surveyRef: DocumentReference | undefined
    let formRef: DocumentReference | undefined
    const context = new Context(assetPath, page).setName(assetName)

    // Point the test user's active-team claim at the team the guide uses, so
    // the audience import (authorised by `token.team`) can write to Storage.
    // The claim is restored below; the user is a member of both teams.
    const screenshotUser = await getAuth().getUserByEmail(screenshotUserEmail)
    const previousClaims = screenshotUser.customClaims ?? {}
    await getAuth().setCustomUserClaims(screenshotUser.uid, {
      ...previousClaims,
      team: teamId,
    })

    try {
      // ## 1. Add a new audience to the team
      await initializePage(page, baseUrl, `customer/${teamId}/team/audiences`)
      await expect(page.getByRole('heading', { name: 'Audiences' })).toBeVisible()

      const audienceCard = page
        .locator('vaadin-card.audience-card')
        .filter({ hasText: audienceName })

      await page.getByRole('button', { name: 'New audience' }).click()
      await expect(page.getByRole('dialog', { name: 'New audience' })).toBeVisible()
      await page.getByRole('textbox', { name: 'Name', exact: true }).fill(audienceName)
      const descriptionField = page.getByRole('textbox', { name: 'Description (optional)' })
      await descriptionField.fill(audienceDescription)
      await expect(descriptionField).toHaveValue(audienceDescription)
      // Let the dialog finish its open animation before capturing it.
      await page.waitForTimeout(500)
      await context
        .setName(`${assetName}/audience-new`)
        .screenshot()
      // A re-run keeps the audience the first run created; the dialog is only
      // captured again so the guide's create step stays reproducible.
      if ((await audienceCard.count()) === 0) {
        await page.getByRole('button', { name: 'Create', exact: true }).click()
        await expect(audienceCard).toBeVisible()
      } else {
        await page.getByRole('button', { name: 'Cancel', exact: true }).click()
        await expect(audienceCard).toBeVisible()
      }

      // ## 2. Import the CSV and review the preview
      await audienceCard.click()
      await expect(page.locator('#recipient-grid')).toBeVisible()
      await page
        .locator('lapp-upload-document input[type=file]')
        .first()
        .setInputFiles(csvPath)

      const importDialog = page.locator('customer-audience-import-dialog')
      await expect(importDialog.getByText(/rows read/)).toBeVisible({ timeout: 60_000 })
      await context
        .setName(`${assetName}/audience-import-preview`)
        .screenshot()

      // The warranty is part of the flow: tick it and commit the import. A
      // re-import is idempotent — the recipients already exist in the team.
      await importDialog.getByRole('checkbox').click()
      await importDialog.getByRole('button', { name: 'Import', exact: true }).click()
      // Wait for the dialog to leave the DOM, not just to be hidden: it can
      // still be on screen while the commit is in flight.
      await expect(importDialog).toHaveCount(0, { timeout: 180_000 })
      await expect(page.locator('#recipient-grid')).toContainText('christophe@preignition.org', {
        timeout: 30_000,
      })
      // The page keeps the uploaded file in the drop zone for a few seconds;
      // let it clear so the capture shows the steady state.
      await page.waitForTimeout(6500)
      await page.evaluate(() => window.scrollTo({ top: 0 }))

      await context.setName(`${assetName}/audience`).screenshot()

      // ## 3. Write the invitation email on the Email page's Invitation tab
      const { surveyRef: createdSurvey, formRef: createdForm } = await cloneInvitationSurvey()
      surveyRef = createdSurvey
      formRef = createdForm
      const surveyId = surveyRef.id

      await initializePage(page, baseUrl, `/s/edit/survey/${surveyId}/build/compose`)
      await page.getByRole('link', { name: 'share' }).click()
      await page.getByRole('switch', { name: 'toggle advanced mode' }).check()
      await page.getByText('Email', { exact: true }).first().click()

      await expect(page.getByRole('heading', { name: 'Email', exact: true })).toBeVisible()
      await page.getByText('Invitation', { exact: true }).click()
      await expect(page.locator('#invitation-panel')).toBeVisible()
      await expect(page.getByRole('textbox', { name: 'subject' }).first()).toHaveValue(
        'You are invited: share your experience',
      )

      await context
        .setName(`${assetName}/email-invitation`)
        .screenshot()

      // The test mail goes to the signed-in editor and creates no invitation.
      await page.getByRole('button', { name: 'Send test' }).click()
      await expect(page.getByText('Test invitation sent.')).toBeVisible({ timeout: 60_000 })
      await context
        .setName(`${assetName}/email-test-sent`)
        .screenshot()

      // ## 4. Send the invitations from Share / Distribute
      // Let the "test invitation sent" toast expire so it does not sit in the
      // screenshots that follow. Notifications live for ~5 s; waiting on the
      // text is not enough because a hidden copy of it stays in the DOM.
      await page.waitForTimeout(6000)

      await page.getByText('Distribute', { exact: true }).click()
      const composer = page.locator('app-survey-invitation-composer')
      await expect(composer.getByRole('combobox', { name: 'Audience' })).toBeVisible({
        timeout: 30_000,
      })

      await composer.getByRole('combobox', { name: 'Audience' }).click()
      await page.getByRole('option', { name: new RegExp(audienceName) }).click()
      await expect(
        composer.getByRole('button', { name: 'Review and send' }),
      ).toBeEnabled({ timeout: 60_000 })

      await composer.scrollIntoViewIfNeeded()
      await context
        .setName(`${assetName}/distribute-invitations`)
        .screenshot()

      await composer.getByRole('button', { name: 'Review and send' }).click()
      await expect(page.getByRole('dialog', { name: 'Send invitations?' })).toBeVisible()
      await page.waitForTimeout(300)
      await capture(page, 'distribute-review')

      await page
        .getByRole('button', { name: 'Send', exact: true })
        .click({ timeout: 30_000 })

      // ## 5. Follow the run in Analytics / Progress
      // The send redirects to the analytics root; the Progress tab itself is
      // one segment further, so open it directly.
      await page.waitForURL(`**/s/analyze/survey/${surveyId}/progress**`, { timeout: 180_000 })
      // A hard navigation straight after the redirect can fire the survey reads
      // before the auth session is restored; the page's own bootstrap does the
      // sign-in handshake first.
      await initializePage(page, baseUrl, `/s/analyze/survey/${surveyId}/progress/progress`)
      await expect(page.getByRole('heading', { name: 'Progress' })).toBeVisible({
        timeout: 60_000,
      })
      await expect(page.getByText(audienceName).first()).toBeVisible({ timeout: 60_000 })

      // Wait for the send's batch to mark the invitations, then refresh until
      // the funnel shows them.
      await page.waitForTimeout(3000)
      await syncRunSentCount(surveyId)
      await expect(async () => {
        await page.getByRole('button', { name: 'Refresh' }).click()
        await expect(
          page.locator('lapp-stat').filter({ hasText: 'Sent' }).first(),
        ).toContainText('2')
      }).toPass({ timeout: 60_000, intervals: [2000] })

      await context
        .setName(`${assetName}/progress`)
        .screenshot()

      await page.getByRole('button', { name: 'Load details' }).click()
      await expect(page.locator('#recipient-grid')).toBeVisible({ timeout: 60_000 })
      // Keep the page heading and the run card in frame with the table.
      await page.evaluate(() => window.scrollTo({ top: 0 }))
      await context
        .setName(`${assetName}/progress-details`)
        .screenshot()
    } finally {
      if (surveyRef !== undefined) await db.recursiveDelete(surveyRef)
      if (formRef !== undefined) await db.recursiveDelete(formRef)
      await getAuth().setCustomUserClaims(screenshotUser.uid, {
        ...previousClaims,
        team: homeTeamId,
      })
    }
  })
})
