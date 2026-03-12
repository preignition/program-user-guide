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

test.describe('How-To: create and edit survey', async () => {
  let context: Context
  try {
    test('create a new survey', async ({ page }) => {
      context = new Context(
        `http://localhost:${port}/${suffix}`,
        'accessible-data/survey/how-to/create-and-edit',
        page
      )
      context.setName('creating-a-new-survey')
      await page.setViewportSize({ width: 1600, height: 1080 })
      await page.goto(baseUrl)

      // Navigate to Survey
      await page.getByRole('link', { name: 'Survey', exact: true }).click()
      await page.waitForTimeout(1000)

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

      return
    })
    test('edit an existing survey', async ({ page }) => {

      context
        .resetPath('accessible-data/survey/how-to/create-and-edit')
        .setName('editing-an-existing-survey')

      // Step 1: Click on the survey to edit

      // Step 2: Navigate to Build 

      // Step 3: Navigate the tree view

      return
    })
    test
  } finally {
    // Delete the survey and the form
    if (surveyId) await db.collection('app/data/survey').doc(surveyId).delete()
    if (formId) await db.collection('app/data/form').doc(formId).delete()
  }
})