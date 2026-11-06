import { expect, test } from '@playwright/test'
import { getAuth } from 'firebase-admin/auth'
import { FieldValue, type DocumentReference } from 'firebase-admin/firestore'
import { Context } from '../../../Context.ts'
import { initializeFirebaseApp } from '../../../utils/initialize.ts'
import { initializePage } from '../../../utils/initializePage.ts'
import { baseUrl, pageContent, referenceRoot } from '../constants.ts'

const db = initializeFirebaseApp().db
const screenshotUserEmail = process.env.PLAYWRIGHT_A11Y_EMAIL ?? 'playwright-a11y@preignition.org'

/**
 * The demo survey has no email field, so its Email page has no purpose items by
 * default. Clone its form skeleton into a small public survey with one email
 * field and sample email items (invitation, invitation reminder, confirmation,
 * reminder, results and follow-up survey), and delete it after the screenshots.
 */
const cloneEmailSurvey = async (): Promise<string> => {
  const demoSurvey = (await db.doc('app/data/survey/3BBFzJneqakYoyDu02c2').get()).data()!
  const demoFormId = 'N8ux3u8mgki5GBzPKjxc'
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

  const messages = [
    {
      subType: 'invitation',
      name: 'Invitation',
      subject: 'You are invited: share your experience',
      body: 'Dear {{name}},\n\nWe would like to hear about your experience. The survey takes about 10 minutes, and your answers are anonymous.\n\n**Take the survey:** {{link}}\n\nThank you,\nThe {{organiser}} team',
    },
    {
      subType: 'invitationReminder',
      name: 'Invitation reminder',
      subject: 'A reminder: {{survey_title}} is still open',
      body: 'Dear {{name}},\n\nThere is still time to share your experience.\n\n**Take the survey:** {{link}}',
    },
    {
      subType: 'confirmation',
      name: 'Submission confirmation',
      subject: 'Thank you for completing our survey',
      body: 'Hello,\n\nThank you for taking the time to share your experience. Your answers help us improve accessibility for everyone.',
    },
    {
      subType: 'reminder',
      name: 'Reminder',
      subject: 'Your survey is still waiting',
      body: 'Hello,\n\nWe noticed you have not finished the survey yet. Your answers are saved, and you can pick up where you left off.',
    },
    {
      subType: 'results',
      name: 'Results and reports',
      subject: 'The survey results are ready',
      body: 'Hello,\n\nThank you for your interest. The results and recommendations are now available.',
    },
    {
      subType: 'followUpSurvey',
      name: 'Follow-up survey',
      subject: 'A follow-up survey for you',
      body: 'Hello,\n\nWe would value your views again in a short follow-up survey.',
    },
  ] as const

  const emailItems = messages.map((message) => ({
    ...message,
    ref: surveyRef.collection('items').doc(`email-${message.subType}`),
  }))

  const survey = { ...demoSurvey }
  delete survey.latestBuild
  delete survey.latestBuildVersion
  delete survey.productionAt
  await surveyRef.set({
    ...survey,
    name: 'Email reference',
    shortDesc: 'Email reference',
    language: 'en',
    items: emailItems.map((item) => ({ type: 'email', ref: item.ref })),
    ref: { ...demoSurvey.ref, form: formRef },
    metaData: { ...demoSurvey.metaData, timestamp },
    email: {
      invitationEnabled: true,
      defaultPurposes: ['dataset', 'confirmation', 'reminder', 'results', 'follow-up-survey'],
      invitationSchedule: { count: 2, delays: [3, 7] },
      schedule: { count: 2, delays: [3, 7] },
      consents: true,
      retentionDays: 180,
    },
  })

  for (const item of emailItems) {
    await item.ref.set({
      name: item.name,
      subType: item.subType,
      metaData: {
        ...demoSurvey.metaData,
        type: 'email',
        deleted: false,
        timestamp,
      },
    })
    await item.ref.collection('locale').doc('en').set({
      subject: item.subject,
      body: item.body,
    })
  }

  await formRef.set({
    ...demoForm,
    name: 'Email reference',
    shortDesc: 'Email reference',
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
    build: { purposes: ['confirmation', 'reminder', 'results', 'follow-up-survey'] },
    metaData: { ...demoQuestion.metaData, timestamp },
  })
  await questionRef.collection('locale').doc('en').set({
    label: 'What is your email address?',
    supportingText: 'We will only use it for the emails you choose below.',
  })

  return surveyRef.id
}

test.describe('Survey Reference - Email', () => {
  test('Email page', async ({ page }) => {
    test.setTimeout(90_000)
    page.on('console', (msg) => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        console.log('PAGE CONSOLE:', msg.type(), msg.text())
      }
    })
    page.on('pageerror', (err) => console.log('PAGE ERROR:', err))
    let surveyId: string | undefined

    try {
      const screenshotUser = await getAuth().getUserByEmail(screenshotUserEmail)
      await getAuth().setCustomUserClaims(screenshotUser.uid, {
        ...(screenshotUser.customClaims ?? {}),
        team: '_template',
      })
      surveyId = await cloneEmailSurvey()

      await initializePage(page, baseUrl, `/s/edit/survey/${surveyId}/share/message`)
      await expect(page.getByRole('heading', { name: 'Email', exact: true })).toBeVisible()
      await page.getByRole('tab', { name: 'Submission confirmation' }).click()
      await expect(page.getByRole('textbox', { name: 'Subject' })).toHaveValue(
        'Thank you for completing our survey',
      )

      const context = new Context(referenceRoot + '/share/email', page).addArea(
        'content',
        pageContent,
        true,
      )
      await context.setName('email').screenshot(true)
    } finally {
      if (surveyId !== undefined) {
        const survey = await db.collection('app/data/survey').doc(surveyId).get()
        const form = survey.get('ref.form') as DocumentReference | undefined
        await db.recursiveDelete(survey.ref)
        if (form !== undefined) await db.recursiveDelete(form)
      }
    }
  })
})
