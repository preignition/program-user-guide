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
const testSurveyId = 'ufPnZmyEOqZIokmDYuT0' // import content
const mainPath = 'docs/app/survey/how-to'

let locator: Locator
let surveyId: string = ''
let formId: string = ''
const surveyName = 'My New Survey'

test.describe('Survey Creating & Editing', async () => {
  test('Survey and Form Management', async ({ page }) => {
    const context = new Context(mainPath, page)
    await page.setViewportSize({ width: 1600, height: 1080 })
    await page.goto(baseUrl)

    // Navigate to Survey
    await page.getByRole('link', { name: 'Survey', exact: true }).click()
    await page.waitForTimeout(1000)

    test.step('How to create a new survey', async () => {
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

    })

    test.step('How to edit a survey', async () => {
      // ## Edit the survey
      context.setName('editing-a-survey')

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
    })

    test.step('How to test a form', async () => {
      context.setName('testing-a-form')
      await initializePage(page, a11yBaseUrl, `s/edit/survey/${satisfactionSurveyId}/build/test`)

      // ## Step 1: Navigate to the test view. This is rendering the form as a respondent would see it, 
      // but in a separate environment that allows to test the form with assistive technologies and different accessibility modes without affecting the form being edited.

      locator = page.getByRole('link', { name: 'test' })
      await locator.click()
      await page.waitForTimeout(2000)
      await context.annotatedScreenshot(locator, 'step-1-click-test-link')


      // ## Step 2: Navigate through the form as a respondent would do and test the different functionalities (e.g. logic expressions, accessibility modes, etc.)
      // use the test toolbar for this
      const toolbarButtons = [
        { name: 'test the form in different', screenshot: 'step-2-test-toolbar-language' },
        { name: 'activate read aloud', screenshot: 'step-2-test-toolbar-read-aloud' },
        { name: 'activate sign language', screenshot: 'step-2-test-toolbar-sign-language' },
        { name: 'activate Easyread emulate mode', screenshot: 'step-2-test-toolbar-easyread' },
        { name: 'activate voice recording', screenshot: 'step-2-test-toolbar-voice-recording' },
        { name: 'view all items (regardless of', screenshot: 'step-2-test-toolbar-view-all-items' },
        { name: 'adjust zoom level', screenshot: 'step-2-test-toolbar-adjust-zoom' },
        { name: 'activate edit mode', screenshot: 'step-2-test-toolbar-activate-edit-mode' },
        { name: 'View how the form data is', screenshot: 'step-2-test-toolbar-view-form-data' },
        { name: 'open accessibility menu', screenshot: 'step-2-test-toolbar-open-accessibility-menu' }
      ]
      for (const btn of toolbarButtons) {
        const button = page.getByRole('button', { name: btn.name })
        await context.annotatedScreenshot(button, btn.screenshot, 11)
      }

      // ## Step 3: Edit the form while in test mode and see the changes applied in real time in the test view
      locator = page.getByRole('button', { name: 'activate edit mode' })
      await context.annotatedScreenshot(locator, 'step-3-click-activate-edit-mode')
      await locator.click()

      locator = page.getByRole('button', { name: 'Edit Does your' })
      await context.annotatedScreenshot(locator, 'step-3-click-edit-question')
      await locator.click()

      locator = page.getByRole('dialog')
      await context.annotatedScreenshot(locator, 'step-3-edit-question-dialog')

      await page.getByRole('dialog').press('Escape')
    })

    test.step('How to mark a survey as favorite', async () => {
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

    })

    test.step('How to delete a survey', async () => {

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
    })
  })

  test('How to add content to a form', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('adding-content-to-a-form')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/compose`)

    // # Option A: dragging and dropping content in the `add content` mode
    // ## Step 1: Activate Add Content Mode
    locator = page.getByRole('button', { name: 'Add Content Mode' })
    await context.annotatedScreenshot(locator, 'step-A-1-click-add-content-mode')
    //await locator.click()

    // ## Step 2: Drag and drop content from the left panel to the form
    // image is a gif showing the drag and drop action,

    // # Option B: using the + buttons in the tree view to add content in specific places of the form
    // ## Step 1: right-Click on the + button in the tree view menu to add content in a specific place of the form
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Survey habits' }).click()
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Survey habits' }).click({
      button: 'right'
    })
    locator = page.locator('md-list-item').filter({ hasText: 'Add new Section' }).getByRole('listitem')
    // getByLabel('Add new Section').getByRole('listitem')
    await context.annotatedScreenshot(locator, 'step-B-1-right-click-add-section')
    // we do not clic to not add a new section , but we need to close the context menu
    // await locator.click()
    await page.locator('md-list-item').filter({ hasText: 'Survey habits' }).getByRole('listitem').press('Escape')

    // ## Step 2: set the details of the content (e.g. question label, options, etc.) in the pop-up dialog

    locator = page.locator('vaadin-grid-cell-content').filter({ hasText: 'Section 1' })
    await context.annotatedScreenshot(locator, 'step-B-2-click-newly-added-section-in-tree-view')
    await locator.click()
    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'Section 1 Section Name for' })
    await context.annotatedScreenshot(locator, 'step-B-2-click-newly-added-section')
    await locator.click()

    // # Option C: using `add (page/section/question)` buttons in the content view to add content in a sequential way
    // ## Step 1: Activate the parent element of the content you want to add (e.g. click on a page to add a section in this page, click on a section to add a question in this section)
    locator = page.locator('vaadin-grid-cell-content').filter({ hasText: 'Form' })
    await context.annotatedScreenshot(locator, 'step-C-1-click-form-in-tree-view')
    locator.click()

    // ## Step 2: Click on the `add (page/section/question)` button that appears in the content view
    locator = page.getByRole('button', { name: 'Add a new Page' })
    await context.annotatedScreenshot(locator, 'step-C-2-click-add-new-page')
    // locator.click()

    // ## Step 3: set the details of the content (e.g. question label, options, etc.) in detail view
    locator = page.locator('vaadin-grid-cell-content').filter({ hasText: 'Survey habits' })
    await context.annotatedScreenshot(locator, 'step-C-3-click-newly-added-page')
    locator.click()
    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'Survey habits title used in the' })
    await context.annotatedScreenshot(locator, 'step-C-3-click-newly-added-page-title')

  })

  test('How to provide rich formatting', async ({ page }) => {
  })

  test('How to use form logic', async ({ page }) => {

    const context = new Context(mainPath, page)
    context.setName('logic-expression')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/compose`)

    // ## Step 1: Activate Visibility Mode
    locator = page.getByRole('button', { name: 'Visibility Mode' })
    await context.annotatedScreenshot(locator, 'step-1-activate-visibility-mode')
    await locator.click()

    // ## Step 2: activate the item you want to apply the logic to (by clicking on the grid cell of the item) 
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Survey habits' }).click()
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Section' }).click()
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'How many surveys do you run' }).click()

    // ## Step 3: create the logical expression
    locator = page.getByRole('button', { name: 'Create hidden logic' })
    await context.annotatedScreenshot(locator, 'step-2-create-logic-expression')
    await locator.click()

    // ## Step 4 (optional): lock the grid to avoid accidentally clicking on other items while creating the logic expression
    locator = page.getByRole('button', { name: 'Lock tree grid' })
    await context.annotatedScreenshot(locator, 'step-4-lock-tree-grid')

    // ## Step 5: Write the logic expression by dragging and dropping the different elements (e.g. question, answer options) and see the expression being built in real time
    // image coming from shared folder

    // ## Step 6 (optional): test the logic expression with the test tool to see if it works as expected

    await page.locator('#input').click()
    await page.locator('#input').fill('1 == 2')
    locator = page.getByRole('button', { name: 'Test the Current Expression' })
    await context.annotatedScreenshot(locator, 'step-6-test-logic-expression')

    // ## Step 7 (optional): unlock the grid after creating the logic expression or remove the logic expression if you don't need it anymore

    locator = page.getByRole('button', { name: 'Lock tree grid' })
    await context.annotatedScreenshot(locator, 'step-7-unlock-tree-grid')
    await locator.click()
    locator = page.getByRole('button', { name: 'Remove this logic expression' })
    await context.annotatedScreenshot(locator, 'step-7-remove-logic-expression')
    await locator.click()

  })

  test('How to add images to the image library', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('adding-images-to-library')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/library`)

    // ## Step 1: Click on the "Image Library" button in the image library view
    locator = page.getByTestId('page-drawer-menu').getByText('Image Library')
    await context.annotatedScreenshot(locator, 'step-1-image-library')
    await locator.click()

    // ## Step 2: Click on the "Upload Image" button and fill the details of the image (e.g. name, description, etc.) in the pop-up dialog
    locator = page.getByRole('button', { name: 'Upload Images' })
    await context.annotatedScreenshot(locator, 'step-2-upload-image')

  })

  test('How to style a survey', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('styling-a-survey')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/behavior`)

    // ## Step 1: Navigate to the styling view by clicking on the "Style" tab in the build view
    locator = page.locator('#style-tab > .button > .content')
    await context.annotatedScreenshot(locator, 'step-1-navigate-to-style-tab')
    await locator.click()

    // ## Step 2: arrange the different styling options
    locator = page.locator('#content-vaadin-details-0')
    await context.annotatedScreenshot(locator, 'step-2-arrange-styling-options')
    await locator.click()

    // ## Step 3 ()optional): override for small screens or one question per page (when active)

  })

  test('How to share options across multiple questions', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('sharing-options')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${testSurveyId}/build/compose`)

    // ## Step 1: Create a question with options that you want to share across multiple questions
    await page.getByText('Universal Health Coverage').click()
    await page.getByText('Health Situation').click()
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'How often do you visit a' }).click()
    locator = page.getByRole('textbox', { name: 'Make options shared' })
    await context.annotatedScreenshot(locator, 'step-1-add-options-to-share')
    locator.click()

    // ## Step 2: Give a name to the shared options and save them in the library to make them available for other questions
    await page.getByRole('textbox', { name: 'Make options shared' }).fill('shared frequency')
    await context.annotatedScreenshot(locator, 'step-2-add-options-give-a-name')

    // ## Step 3: Select another question where you want to reuse the options and select the shared options.
    await page.getByText('Do you have any chronic').click()
    locator = page.getByRole('combobox', { name: 'Use Shared' }).locator('#label')
    await context.annotatedScreenshot(locator, 'step-3-select-shared-options')
    await locator.click()
    await page.getByRole('option').first().press('Escape')
    await page.getByText('How often do you visit a').click()
    await page.getByRole('textbox', { name: 'Make options shared' }).click()
    await page.getByRole('textbox', { name: 'Make options shared' }).fill('')

  })

  test('How to share logical expressions across multiple items', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('sharing-logical-expressions')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${testSurveyId}/build/compose`)

    // ## Step 1: Navigate to a question with an exiting logical expression that you want to share across multiple questions
    await page.getByText('Universal Health Coverage').click()
    await page.getByText('Satisfaction Factors').click()
    await page.getByText('Management & Leadership').click()
    await page.getByText('Never visible').click()
    await page.getByRole('button', { name: 'Visibility Mode' }).click()
    await page.getByRole('textbox', { name: 'Name' }).click()
    locator = page.getByRole('textbox', { name: 'Name' })
    await locator.fill('share this')
    await context.annotatedScreenshot(locator, 'step-1-logical-expression-to-share')
    locator = page.getByRole('textbox', { name: 'Description' })
    await context.annotatedScreenshot(locator, 'step-1-logical-expression-description')

    // Step 2: Re-use the logical expression in other items 

    await page.getByText('Senior leadership effectively').click()
    locator = await page.getByRole('combobox', { name: 'Select an existing expression' })
    await context.annotatedScreenshot(locator, 'step-2-reuse-logical-expression')

    // cleanup

    await page.getByText('Never visible').click()
    await page.getByRole('textbox', { name: 'Name' }).click()
    await page.getByRole('textbox', { name: 'Name' }).press('Enter')

  })

  test('How to share content across multiple forms and surveys', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('sharing-content')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${testSurveyId}/build/compose`)

    // ## Step 1: Navigate to a question with an exiting logical expression that you want to share across multiple questions

  })

  test('How to set access rights for forms', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('access-rights')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/share/access`)

    // ## Step 1: Navigate to the access view
    locator = page.getByTestId('page-drawer-menu').getByText('Access')
    await context.annotatedScreenshot(locator, 'step-1-navigate-to-access-view')
    await locator.click()

    // ## Step 2: Set access rights for different team members by adding their email and selecting the right access level (e.g. read, write, admin)
    locator = page.getByRole('button', { name: 'Add Members' })
    await context.annotatedScreenshot(locator, 'step-2-add-members')
    await locator.click()

    locator = page.getByRole('combobox', { name: 'select user' }).locator('#label')
    await context.annotatedScreenshot(locator, 'step-2-select-user')
    await locator.click()
    await page.locator('lapp-user-name').filter({ hasText: 'Jerry' }).click()

    locator = page.getByRole('combobox', { name: 'Select Role' }).locator('#label')
    await context.annotatedScreenshot(locator, 'step-2-select-role')
    await locator.click()
    await page.locator('lapp-access-add-role').getByText('admin').click()
    // once details are set, 
    locator = page.getByRole('button', { name: 'Add Access' })
    await context.annotatedScreenshot(locator, 'step-2-add-access')
    // await locator.click()

    // ## Step 3 (Optional): Set Ownership of the survey to a specific team member
    locator = page.getByRole('button', { name: 'Modify Ownership' })
    await context.annotatedScreenshot(locator, 'step-3-modify-ownership')

  })

  test('How to set randomize for items', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('randomize-items')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/compose/question/N8ux3u8mgki5GBzPKjxc.EBAwoyMLkkgOLPMQbtbX`)

    // ## Step 1: Activate advanced mode
    locator = page.getByRole('switch', { name: 'toggle advanced mode' })
    await context.annotatedScreenshot(locator, 'step-1-activate-advanced-mode')
    await locator.check()



    // ## Step 2: mark the randomize switch to true - note: it only appears for specific item types (e.g. question with options, section with sub-items, etc.)
    // Warning: randomization is only applied to build forms - not when testing in design mode

    locator = page.locator('label').filter({ hasText: 'Randomize Options (off -' })
    await context.annotatedScreenshot(locator, 'step-2-randomize-options')


    // Step 3 (Optional): set the `Fixed Position` to true if you want to fix the position of specific options/items while randomizing the others (e.g. "None of the above" option, etc.)
    locator = page.locator('label').filter({ hasText: 'Fixed Position (off - this' })
    await context.annotatedScreenshot(locator, 'step-3-fixed-position')



  })
})
