import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializeFirebaseApp } from '../../utils/initialize'
const db = initializeFirebaseApp().db

const port = process.env.PLAYWRIGHT_PORT || '7173'
const baseUrl = `http://localhost:${port}`
// const surveyId = '3BBFzJneqakYoyDu02c2'

let locator: Locator
const suffix = ``
let surveyId: string = ''
let formId: string = ''
let surveyName = 'My New Survey'

test.describe('How-To', async () => {
  try {
    test('Create and Edit', async ({ page }) => {
      const context = new Context(
        `http://localhost:${port}/${suffix}`,
        'accessible-data/survey/how-to/create-and-edit',
        page
      )
      await page.setViewportSize({ width: 1600, height: 1080 })
      await page.goto(baseUrl)

      // Navigate to Survey
      await page.getByRole('link', { name: 'Survey', exact: true }).click()
      await page.waitForTimeout(1000)

      // ## Create a new survey
      context.setName('creating-a-new-survey')
      // Step 1: Click on Create Survey button
      locator = page.getByRole('button', { name: 'New Survey' })
      await context.annotatedScreenshot(locator, 'step-1-click-new-survey')
      await locator.click()

      // Step 2: Give a name and description 
      await page.getByRole('textbox', { name: 'name' }).click()
      await page.getByRole('textbox', { name: 'name' }).fill(surveyName)
      await page.getByRole('textbox', { name: 'name' }).press('Tab')
      await page.getByRole('textbox', { name: 'description' }).fill('this survey will be accessible')

      locator = page.getByRole('dialog', { name: 'Create a new Survey' })
      await context.annotatedScreenshot(locator, 'step-2-fill-name-and-description')

      locator = page.getByRole('button', { name: 'Next' })
      await context.annotatedScreenshot(locator, 'step-2-press-next')
      await locator.click()

      // Step 3: Click Next and decide the type of Form (new form, import or create content)
      locator = page.getByRole('radiogroup')
      await context.annotatedScreenshot(locator, 'step-3-choose-type-of-form')
      await page.getByRole('textbox', { name: 'name' }).click()
      await page.getByRole('textbox', { name: 'name' }).fill('my new form')
      await page.getByRole('textbox', { name: 'name' }).press('Tab')
      await page.getByRole('textbox', { name: 'description' }).fill('a for to collect data')
      await page.getByRole('textbox', { name: 'description' }).press('Tab')
      await page.getByRole('textbox', { name: 'first page title' }).fill('Page 1')

      locator = page.getByRole('dialog', { name: 'Create a new Survey' })
      await context.annotatedScreenshot(locator, 'step-3-fill-form-details')

      locator = page.getByRole('button', { name: 'Next' })
      await context.annotatedScreenshot(locator, 'step-3-press-next')
      await locator.click()

      // Step 4: Confirm
      locator = page.getByRole('dialog', { name: 'Create a new Survey' })
      await context.annotatedScreenshot(locator, 'step-4-confirm')

      locator = page.getByRole('button', { name: 'Confirm' })
      await context.annotatedScreenshot(locator, 'step-4-press-confirm')
      await locator.click()

      // ## Edit the survey
      context.setName('editing-a-new-survey')
      // Step 1: Click on the survey to edit

      // Step 2: Navigate to Build 

      // Step 3: Navigate the tree view

      // ## Delete the survey
      context.setName('deleting-a-survey')
      // Step 1: Click on the survey to delete

      // Step 2: Click on the delete button

      // Step 3: Confirm deletion

      // ## Mark as favorite
      context.setName('marking-a-survey-as-favorite')
      // Step 1: Click on the star icon to mark as favorite


      return
    })
    test('Accessibility', async ({ page }) => {

      const context = new Context(
        `http://localhost:${port}/${suffix}`,
        'accessible-data/survey/how-to/accessibility',
        page
      )
      await page.setViewportSize({ width: 1600, height: 1080 })
      await page.goto(baseUrl)

      // ## Adding accessibility menu
      context.setName('adding-an-accessibility-menu')

      // Step 1: Click on the accessibility menu button

      // Step 2: Click on the "Add Accessibility Menu" option



      return
    })

    test('Localization', async ({ page }) => {

      const context = new Context(
        `http://localhost:${port}/${suffix}`,
        'accessible-data/survey/how-to/localization',
        page
      )
      await page.setViewportSize({ width: 1600, height: 1080 })
      await page.goto(baseUrl)

      // ## Translate Forms
      context.setName('translate-forms')

      // Step 1: Activate Languages

      // Step 2: Run Automatic Translation

      // Step 3: Review and Edit translated Text

      // Step 4: Review Sign Language Videos

      return
    })

    test('Logic and Behavior', async ({ page }) => {

      const context = new Context(
        `http://localhost:${port}/${suffix}`,
        'accessible-data/survey/how-to/logic-and-behavior',
        page
      )
      await page.setViewportSize({ width: 1600, height: 1080 })
      await page.goto(baseUrl)

      // ## Form Logic
      context.setName('form-logic')

      // Step 1: Activate Logic Editor

      // Step 2: Create Logic Expressions

      // Step 3: Test Logic Expressions

      // ## Advanced Logic
      context.setName('advanced-logic')

      // ## Form Behaviour
      context.setName('form-behaviour')


      return
    })


    test('Distribution & Data', async ({ page }) => {

      const context = new Context(
        `http://localhost:${port}/${suffix}`,
        'accessible-data/survey/how-to/distribution-and-data',
        page
      )
      await page.setViewportSize({ width: 1600, height: 1080 })
      await page.goto(baseUrl)

      // ## Distributing the survey
      context.setName('generating-survey-link')


      // ## Alias
      context.setName('creating-alias')

      // ## Form Behaviour
      context.setName('form-behaviour')

      // ## Batches
      context.setName('using-survey-batches')

      // ## Respondent accounts
      context.setName('survey-respondent-accounts')

      // ## Redirection after completing survey
      context.setName('redirection-after-completing-survey')

      // Terms and Conditions
      context.setName('survey-terms')
      return
    })

    test('Analytics & Export', async ({ page }) => {

      const context = new Context(
        `http://localhost:${port}/${suffix}`,
        'accessible-data/survey/how-to/distribution-and-data',
        page
      )
      await page.setViewportSize({ width: 1600, height: 1080 })
      await page.goto(baseUrl)

      // ## Survey Analytics
      context.setName('survey-analytics')

      // ## Exporting Survey Data
      context.setName('exporting-survey-data')

      return
    })


  } finally {
    // Delete the survey and the form
    if (surveyId) await db.collection('app/data/survey').doc(surveyId).delete()
    if (formId) await db.collection('app/data/form').doc(formId).delete()
  }
})