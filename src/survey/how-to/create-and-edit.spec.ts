import { expect, Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializeFirebaseApp } from '../../utils/initialize'
import { initializePage } from '../../utils/initializePage.ts'
const db = initializeFirebaseApp().db

const port = '7173'
const a11yPort = '7174'
const baseUrl = `http://localhost:${port}` // playwright team
const a11yBaseUrl = `http://localhost:${a11yPort}` // accessible data team
const satisfactionSurveyId = '3BBFzJneqakYoyDu02c2'

let locator: Locator
const suffix = ``
let surveyId: string = ''

let formId: string = ''
let surveyName = 'My New Survey'

test.describe('How-To', async () => {
  // try {
  test('Create and Edit', async ({ page }) => {
    const context = new Context(
      'app/survey/how-to',
      page
    )
    await page.setViewportSize({ width: 1600, height: 1080 })
    await page.goto(baseUrl)

    // Navigate to Survey
    await page.getByRole('link', { name: 'Survey', exact: true }).click()
    await page.waitForTimeout(1000)

    // ## Create a new survey
    context.setName('creating-a-new-survey')
    // ### Step 1: Click on Create Survey button
    locator = page.getByRole('button', { name: 'New Survey' })
    await context.annotatedScreenshot(locator, 'step-1-click-new-survey')
    await locator.click()

    // ### Step 2: Give a name and description 
    await page.getByRole('textbox', { name: 'name' }).click()
    await page.getByRole('textbox', { name: 'name' }).fill(surveyName)
    await page.getByRole('textbox', { name: 'name' }).press('Tab')
    await page.getByRole('textbox', { name: 'description' }).fill('this survey will be accessible')

    locator = page.getByRole('dialog', { name: 'Create a new Survey' })
    await context.annotatedScreenshot(locator, 'step-2-fill-name-and-description')

    locator = page.getByRole('button', { name: 'Next' })
    await context.annotatedScreenshot(locator, 'step-2-press-next')
    await locator.click()

    // ### Step 3: Click Next and decide the type of Form (new form, import or create content)
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

    // ### Step 4: Confirm
    locator = page.getByRole('dialog', { name: 'Create a new Survey' })
    await context.annotatedScreenshot(locator, 'step-4-confirm')

    locator = page.getByRole('button', { name: 'Confirm' })
    await context.annotatedScreenshot(locator, 'step-4-press-confirm')
    await locator.click()
    await page.waitForTimeout(2000)
    // ## Edit the survey
    context.setName('editing-a-new-survey')

    // ### Step 1: Click on the survey to edit
    await page.getByText('My New Survey').first().click()
    locator = page.locator('vaadin-grid-cell-content').filter({ hasText: 'Status Overview of main' })
    await context.annotatedScreenshot(locator, 'step-1-expand-survey-row')
    locator = page.getByRole('button', { name: 'Edit Survey' })
    await context.annotatedScreenshot(locator, 'step-1-click-edit-survey')
    await locator.click()

    // ### Step 2: Navigate to Build and the tree view
    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'Overall Structure Introduction Page Form Page 1 Submit Message Thank You Page' })
    await context.annotatedScreenshot(locator, 'step-2-grid-structure')

    locator = page.locator('vaadin-grid-cell-content').filter({ hasText: 'Form' })
    await locator.click()

    const currentUrl = page.url()
    const surveyIdMatch = currentUrl.match(/\/survey\/([^/]+)\/build/)
    if (surveyIdMatch) {
      surveyId = surveyIdMatch[1]
    }
    const formIdMatch = currentUrl.match(/\/form\/([^/]+)$/)
    if (formIdMatch) {
      formId = formIdMatch[1]
    }
    expect(surveyId).toBeTruthy()
    expect(formId).toBeTruthy()


    locator = page.locator('vaadin-grid-cell-content').filter({ hasText: 'Page 1' })
    await context.annotatedScreenshot(locator, 'step-2-click-page-1')
    await locator.click()

    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'Page 1 title used in the page' })
    await context.annotatedScreenshot(locator, 'step-2-page-1-title')


    // ### Step 3: Navigate the content view
    locator = page.getByRole('button', { name: 'Add Content Mode' })
    await context.annotatedScreenshot(locator, 'step-3-click-add-content-mode')
    await locator.click()

    // ## Add Content to the survey
    context.setName('adding-content-to-a-survey')

    // go back to the tree view / settings mode

    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Page 1' }).click()
    await page.locator('vaadin-grid-cell-content:nth-child(7) > vaadin-grid-tree-toggle > span:nth-child(2)').click()

    // ### Step 1: Activate Section
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Section' }).dblclick()
    locator = page.locator('.app-drawer > .mdc-drawer-app-content')
    await context.annotatedScreenshot(locator, 'step-1-section-view')

    // ### Step 2: Add question
    locator = page.getByRole('button', { name: 'Add a new Question' })
    await context.annotatedScreenshot(locator, 'step-2-add-question-button')
    await locator.click()

    locator = page.getByRole('dialog', { name: 'Confirm Action' })
    await context.annotatedScreenshot(locator, 'step-2-confirm-add-question-dialog')

    locator = page.getByRole('button', { name: 'ok' })
    await context.annotatedScreenshot(locator, 'step-2-confirm-add-question-dialog-ok')
    await locator.click()

    await page.locator('div:nth-child(3) > md-filled-button > lapp-icon > svg > path').click()
    await page.locator('vaadin-grid-cell-content:nth-child(8) > vaadin-grid-tree-toggle > span:nth-child(2)').click()
    await page.getByText('question label').click()
    await page.getByRole('textbox', { name: 'label' }).click()
    await page.getByRole('textbox', { name: 'label' }).press('ControlOrMeta+Shift+ArrowLeft')
    await page.getByRole('textbox', { name: 'label' }).press('ControlOrMeta+Shift+ArrowLeft')
    await page.getByRole('textbox', { name: 'label' }).fill('What is your name')
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Section' }).click()
    await page.getByRole('button', { name: 'Add a new Question' }).click()
    await page.locator('lapp-choice-radio:nth-child(2) > .radio-field > .field > #list > lapp-choice-list-item:nth-child(3) > lapp-radio > .container > .touch-target').click()
    await page.getByRole('button', { name: 'OK' }).click()
    await page.locator('vaadin-grid-cell-content:nth-child(8) > vaadin-grid-tree-toggle > span:nth-child(2)').click()
    await page.getByText('question label').click()
    await page.getByRole('textbox', { name: 'label' }).click()
    await page.getByRole('textbox', { name: 'label' }).press('ControlOrMeta+Shift+ArrowLeft')
    await page.getByRole('textbox', { name: 'label' }).press('ControlOrMeta+Shift+ArrowLeft')
    await page.getByRole('textbox', { name: 'label' }).fill('How old are you')

    // ## Mark as favorite
    context.setName('marking-a-survey-as-favorite')
    await page.goto(`${baseUrl}/s/workspace`)
    // ### Step 1: Click on the star icon to mark as favorite
    await page.getByText('My New Survey').first().click({
      button: 'right'
    })
    locator = page.locator('md-list-item')
      .filter({ hasText: 'star' }).getByRole('listitem')
    await context.annotatedScreenshot(locator, 'step-1-right-click-survey')


    // ## Delete the survey
    context.setName('deleting-a-survey')
    await page.goto(`${baseUrl}/s/workspace`)
    // ### Step 1: Click on the survey to delete
    await page.getByText('My New Survey').first().click({
      button: 'right'
    })
    locator = page.locator('md-list-item')
      .filter({ hasText: 'delete survey' }).getByRole('listitem')
    await context.annotatedScreenshot(locator, 'step-1-right-click-survey')
    await locator.click()

    // ### Step 2: Confirm deletion
    locator = page.getByText('Confirm Action')
    await context.annotatedScreenshot(locator, 'step-2-confirm-deletion')

    locator = page.getByRole('button', { name: 'Confirm Action' })
    await context.annotatedScreenshot(locator, 'step-2-click-confirm-deletion')
    // we do not want to delete the survey here as we want to use it for the next steps, so we won't click on confirm, but in a real test, we would click and then verify that the survey is deleted
    // the survey is deleted at the en d of the test suite in a cleanup step
    return
  })

  test('How to activate accessibility modes', async ({ page }) => {

    const context = new Context(
      'app/survey/how-to',
      page
    )
    context.setName('activating-accessibility-modes')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/behavior`)

    // ### Step 1: Navigate to Behavior
    locator = page.getByTestId('page-drawer-menu')
    console.log('locator', locator)
    await context.annotatedScreenshot(locator, 'step-1-navigate-to-form-behaviour')

    // Step 2: Enable different accessibility modes
    locator = page.getByRole('listbox', { name: 'Modes Activated' })
    await context.annotatedScreenshot(locator, 'step-2-form-behaviour')

    // Step 3: got back to compose mode and Toggle between the different accessibility modes 
    return
  })

  test('Logic', async ({ page }) => {

    const context = new Context(
      'app/survey/how-to',
      page
    )
    await page.setViewportSize({ width: 1600, height: 1080 })
    await page.goto(baseUrl)
    await page.goto(`${baseUrl}/s/edit/survey/${surveyId}/build/compose`)

    // ## Form Logic
    context.setName('form-logic')

    // ### Step 1: Activate Visibility Mode
    locator = page.getByRole('button', { name: 'Visibility Mode' })
    await context.annotatedScreenshot(locator, 'step-1-activate-visibility-mode')
    await locator.click()

    // ### Step 2: Create Logic Expressions
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'What is your name' }).click()
    locator = page.getByRole('button', { name: 'Create hidden logic' })
    await context.annotatedScreenshot(locator, 'step-2-create-logic-expression')
    await locator.click()

    locator = page.locator('#input')
    await locator.click()
    await locator.locator('#input').fill('1 ==0')
    await context.annotatedScreenshot(locator, 'step-2-fill-logic-expression')


    // ### Step 3: Test Logic Expressions
    locator = page.getByRole('button', { name: 'Test the Current Expression' })
    await context.annotatedScreenshot(locator, 'step-3-test-logic-expression')
    await locator.click()

    locator = page.getByRole('table')
    await context.annotatedScreenshot(locator, 'step-3-logic-expression-test-result')

    // ## Advanced Logic
    context.setName('advanced-logic')


    await page.getByText('== "0"').click()
    await page.getByText('== "0"').fill('\n')

  })
  test('Accessibility', async ({ page }) => {

    const context = new Context(
      'app/survey/how-to',
      page
    )
    await page.setViewportSize({ width: 1600, height: 1080 })
    await page.goto(baseUrl)

    // ## Adding accessibility menu
    context.setName('adding-an-accessibility-menu')

    // ### Step 1: Click on the accessibility menu button

    // ### Step 2: Click on the "Add Accessibility Menu" option



    return
  })

  test('Localization', async ({ page }) => {

    const context = new Context(
      'app/survey/how-to',
      page
    )
    await page.setViewportSize({ width: 1600, height: 1080 })
    await page.goto(baseUrl)

    // ## Translate Forms
    context.setName('translate-forms')

    // ### Step 1: Activate Languages

    // ### Step 2: Run Automatic Translation

    // ### Step 3: Review and Edit translated Text

    // ### Step 4: Review Sign Language Videos

    return
  })




  test('Distribution & Data', async ({ page }) => {

    const context = new Context(
      'app/survey/how-to',
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
      'app/survey/how-to',
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


  // } finally {
  //   // Delete the survey and the form
  //   if (surveyId) await db.collection('app/data/survey').doc(surveyId).delete()
  //   if (formId) await db.collection('app/data/form').doc(formId).delete()
  // }
})