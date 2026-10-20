import { expect, test } from '@playwright/test'
import { FieldValue, type DocumentReference } from 'firebase-admin/firestore'
import { Context } from '../../../Context.ts'
import { initializeFirebaseApp } from '../../../utils/initialize.ts'
import { initializePage } from '../../../utils/initializePage.ts'
import { baseUrl, referenceRoot } from '../constants.ts'

const db = initializeFirebaseApp().db

/**
 * The demo survey has no email field, so its Email page is empty. Clone its
 * form skeleton into a small public survey with one email field and sample
 * confirmation/reminder/follow-up content, and delete it after the screenshots.
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

  const survey = { ...demoSurvey }
  delete survey.latestBuild
  delete survey.latestBuildVersion
  delete survey.productionAt
  await surveyRef.set({
    ...survey,
    name: 'Email reference',
    shortDesc: 'Email reference',
    items: [],
    ref: { ...demoSurvey.ref, form: formRef },
    metaData: { ...demoSurvey.metaData, timestamp },
    email: {
      defaultPurposes: ['dataset', 'confirmation'],
      confirmation: {
        en: {
          subject: 'Thank you for completing our survey',
          body: 'Hello,\n\nThank you for taking the time to share your experience. Your answers help us improve accessibility for everyone.',
        },
      },
      reminder: {
        en: {
          subject: 'Your survey is still waiting',
          body: 'Hello,\n\nWe noticed you have not finished the survey yet. Your answers are saved, and you can pick up where you left off.',
        },
      },
      followUp: {
        results: {
          en: {
            subject: 'The survey results are ready',
            body: 'Hello,\n\nThank you for your interest. The results and recommendations are now available.',
          },
        },
        followUpSurvey: {
          en: {
            subject: 'A follow-up survey for you',
            body: 'Hello,\n\nWe would value your views again in a short follow-up survey.',
          },
        },
      },
      schedule: { count: 2, delays: [3, 7] },
      consents: true,
      retentionDays: 180,
    },
  })

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
    let surveyId: string | undefined

    try {
      surveyId = await cloneEmailSurvey()

      await initializePage(page, baseUrl, `/s/edit/survey/${surveyId}/build/compose`)
      await page.waitForTimeout(1000)
      await page.getByRole('link', { name: 'share' }).click()
      await page.waitForTimeout(1000)
      await page.getByRole('switch', { name: 'toggle advanced mode' }).check()
      await page.waitForTimeout(100)
      await page.getByText('Email', { exact: true }).first().click()

      await expect(page.getByRole('heading', { name: 'Email', exact: true })).toBeVisible()
      await page.getByText('Confirmation', { exact: true }).click()
      await page.getByRole('combobox', { name: 'Language' }).click()
      await page.getByRole('option', { name: /English/ }).click()
      await expect(page.getByRole('textbox', { name: 'subject' })).toHaveValue(
        'Thank you for completing our survey',
      )

      const context = new Context(referenceRoot + '/share/email', page)
      await context.setName('email').screenshot(true)

      // The page is only reachable in advanced mode; the context's basic pass
      // hides it. Save the advanced viewport under both names used by the docs.
      await page.screenshot({ path: `${referenceRoot}/share/email/assets/email-auto.png` })
      await page.screenshot({
        path: `${referenceRoot}/share/email/assets/email-advanced-auto.png`,
      })
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
