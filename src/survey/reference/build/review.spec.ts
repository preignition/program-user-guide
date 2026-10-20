import { expect, test } from '@playwright/test'
import { FieldValue, type DocumentReference } from 'firebase-admin/firestore'
import { Context } from '../../../Context.ts'
import { initializeFirebaseApp } from '../../../utils/initialize.ts'
import { initializePage } from '../../../utils/initializePage.ts'
import { baseUrl, pageContent, referenceRoot } from '../constants.ts'

const db = initializeFirebaseApp().db

/**
 * The demo survey is large and localized; its review rebuild reads hundreds of
 * documents and takes minutes. The screenshots only need one question, so clone
 * its form skeleton into a tiny public survey instead. No cloud function is
 * involved: the rule checks run in the browser on these documents.
 */
const cloneSkeleton = async (): Promise<{
  readonly surveyId: string
  readonly questionPath: string
}> => {
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
    name: 'Review reference',
    shortDesc: 'Review reference',
    items: [],
    ref: { ...demoSurvey.ref, form: formRef },
    metaData: { ...demoSurvey.metaData, timestamp },
  })

  await formRef.set({
    ...demoForm,
    name: 'Review reference',
    shortDesc: 'Review reference',
    items: [{ type: 'page', ref: pageRef }],
    isLocalized: false,
    languages: {},
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
  await pageRef.collection('locale').doc('en').set({ heading: 'Review page' })

  const section = { ...demoSection }
  delete section.scope
  delete section.publish
  await sectionRef.set({
    ...section,
    items: [{ type: 'question', ref: questionRef }],
    metaData: { ...demoSection.metaData, timestamp },
  })
  await sectionRef.collection('locale').doc('en').set({ label: 'Review section' })

  await questionRef.set({
    ...demoQuestion,
    metaData: { ...demoQuestion.metaData, timestamp },
  })
  await questionRef.collection('locale').doc('en').set({
    label: 'What did you like about the survey?',
  })

  return { surveyId: surveyRef.id, questionPath: questionRef.path }
}

test.describe('Survey Reference - Review', () => {
  test('Review panel', async ({ page }) => {
    test.setTimeout(90_000)
    let surveyId: string | undefined

    try {
      const fixture = await cloneSkeleton()
      surveyId = fixture.surveyId

      await initializePage(page, baseUrl, `/s/edit/survey/${surveyId}/build/compose`)
      await page.waitForTimeout(500)
      await page.getByRole('navigation').getByText('Review', { exact: true }).click()

      const context = new Context(referenceRoot + '/build', page)
      await expect(page.getByRole('heading', { name: 'Review', exact: true })).toBeVisible()
      await expect(page.getByText('No findings yet')).toBeVisible({ timeout: 30_000 })

      // The clean panel: the run affordance and the empty state.
      await context.setName('review-empty').addArea('content', pageContent).screenshot()

      // Seed one real rule finding: a hidden slot pointing at no expression.
      await db.doc(fixture.questionPath).update({ logic: { hidden: 'missing-expression' } })
      await page.getByRole('navigation').getByText('Compose', { exact: true }).click()
      await page.waitForTimeout(300)
      await page.getByRole('navigation').getByText('Review', { exact: true }).click()

      await expect(page.getByText('Logic points at a missing expression').first()).toBeVisible({
        timeout: 30_000,
      })
      await context.setName('review').screenshot()

      // The severity filter keeps the error and drops any other severity.
      await page.locator('md-filter-chip').filter({ hasText: 'Errors' }).click()
      await page.waitForTimeout(200)
      await context.setName('review-errors').screenshot()
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
