import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { pushState } from '../../utils/historyState.ts'

const a11yPort = '7174'
const a11yBaseUrl = `http://localhost:${a11yPort}` // accessible data team
const satisfactionSurveyId = '3BBFzJneqakYoyDu02c2'
const mainPath = 'docs/app/survey/how-to'

let locator: Locator

test.describe('Survey Accessibility How-To', async () => {
  test('How to add an accessibility menu', async ({ page }) => {

    const context = new Context(mainPath, page)
    context.setName('adding-accessibility-menu')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/compose`)

    // ## Adding accessibility menu
    await page.locator('vaadin-grid-tree-toggle > span:nth-child(2)').first().click()
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'intro 3' }).click()

    // ### Step 1: Focus on mardown editor, for instance in the survey introduction 
    // add a `<a11y-menu></a11y-menu>` tag in the markdown content to activate the accessibility menu for this item

    await page.waitForTimeout(1000)
    locator = page.locator('textarea')
    await context.annotatedScreenshot(locator, 'step-1-focus-on-mardown-editor')
    await locator.click()


    // ### Step 2: Preview how the accessibility menu will look like for the respondents by clicking on the field "Preview" tab

    await page.locator('md-secondary-tab:nth-child(2) > .button > .content').click()
    locator = page.locator('#markdown')
    await context.annotatedScreenshot(locator, 'step-2-preview-accessibility-menu')

  })


  test('How to activate accessibility modes', async ({ page }) => {

    const context = new Context(mainPath, page)
    context.setName('activating-accessibility-modes')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/behavior`)

    // ### Step 1: Navigate to Behavior
    locator = page.getByTestId('page-drawer-menu')
    await context.annotatedScreenshot(locator, 'step-1-navigate-to-form-behaviour')

    // Step 2: Enable different accessibility modes
    locator = page.getByRole('listbox', { name: 'Modes Activated' })
    await context.annotatedScreenshot(locator, 'step-2-form-behaviour')

    // Step 3: got back to compose mode and Toggle between the different accessibility modes 
    return
  })

  test('How to use Easy Read', async ({ page }) => {

    const context = new Context(mainPath, page)
    context.setName('use-easy-read')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/behavior`)

    // ### Step 1: easyread must be enabled in the survey
    context.setName('use-easy-read')
    locator = page.getByRole('listbox', { name: 'Modes Activated' })
    await context.annotatedScreenshot(locator, 'step-1-easyread-mode-not-activated')


    // ### Step 2: Activate easyread mode
    await pushState(page, 'compose')
    await page.waitForTimeout(1000)
    locator = page.getByRole('button', { name: 'Easy Read Mode' })
    await context.annotatedScreenshot(locator, 'step-2-activate-easyread-mode')
    await locator.click()

    // ### Step 3: Navigate through the form and add easyread content (e.g. images)  when relevant
    await page.getByText('Survey habits', { exact: true }).click()
    await page.getByText('Section 1').click()
    await page.getByText('How many surveys do you run').click()
    await page.waitForTimeout(1500)

    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'How many surveys do you run in a typical year? Add Media for Easyread Mode' })

    await context.annotatedScreenshot(locator, 'step-3-add-media-for-easyread-mode')

    // items with easyread content have a specific icon in the tree view to easily identify them
    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'Overall Structure Introduction Page Form Survey habits Section 1 Page 1 intro' })
    await context.annotatedScreenshot(locator, 'step-3-easyread-content-icon')

    // ### Step 4 (Optional): amend / simplify the text of the questions and answer options to make them easier to understand for people with cognitive disabilities
    // best practices is to use plain language for all content. 

    locator = page.getByText('sentiment_neutral sentiment_satisfied label label easyread version for "label"')
    await context.annotatedScreenshot(locator, 'step-4-easyread-version-for-label')

    // ### Step 5 (Optional): make some part of the content visible od hidden only for the easy read mode 
    // activate the visibility mode
    locator = page.getByRole('button', { name: 'Visibility Mode' })
    await context.annotatedScreenshot(locator, 'step-5-activate-visibility-mode')
    await locator.click()

    // activate the advanced mode
    locator = page.getByText('toggle advanced mode Advanced')
    await context.annotatedScreenshot(locator, 'step-5-toggle-advanced-mode')
    await locator.click()

    // activate the easyread-only visibility for a specific field
    locator = page.getByText('Make this field visible for')
    await context.annotatedScreenshot(locator, 'step-5-easyread-only-visibility')
    await locator.click()


  })

  test('How to use Sign Language', async ({ page }) => {

    const context = new Context(mainPath, page)
    context.setName('use-sign-language')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/behavior`)

    // ### Step 1: sign language must be enabled in the survey
    context.setName('use-sign-language')
    locator = page.getByRole('listbox', { name: 'Modes Activated' })
    await context.annotatedScreenshot(locator, 'step-1-sign-language-mode-not-activated')


    // ### Step 2: Activate sign language mode
    await pushState(page, 'compose')
    await page.waitForTimeout(1000)
    locator = page.getByRole('button', { name: 'Sign Language Mode' })
    await context.annotatedScreenshot(locator, 'step-2-activate-sign-language-mode')
    await locator.click()

    // ### Step 3: Navigate through the form and add sign language content (e.g. videos)  when relevant

    await page.getByText('Survey habits', { exact: true }).click()
    await page.getByText('Section 1').click()
    await page.getByText('How many surveys do you run').click()
    await page.waitForTimeout(1000)


    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'How many surveys do you run in a typical year? Add a Sign Language Video' })

    await context.annotatedScreenshot(locator, 'step-3-add-media-for-sign-language-mode')

    // set videoId - which is the youtube videoId

    locator = page.getByRole('textbox', { name: 'Enter a youtube video ID' })
    await context.annotatedScreenshot(locator, 'step-3-set-video-id')

    // items with sign language content have a specific icon in the tree view to easily identify them
    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'Overall Structure Introduction Page Form Survey habits Section 1 Page 1 intro' })
    await context.annotatedScreenshot(locator, 'step-3-sign-language-content-icon')

    // ### Step 4 (Advanced): make some part of the content visible or hidden only for the sign language mode 
    // activate the visibility mode
    locator = page.getByRole('button', { name: 'Visibility Mode' })
    await context.annotatedScreenshot(locator, 'step-4-activate-visibility-mode')
    await locator.click()

    // activate the advanced mode
    locator = page.getByText('toggle advanced mode Advanced')
    await context.annotatedScreenshot(locator, 'step-4-toggle-advanced-mode')
    await locator.click()

    // activate the sign language-only visibility for a specific field
    locator = page.getByText('Make this field visible for')
    await context.annotatedScreenshot(locator, 'step-4-sign-language-only-visibility')
    await locator.click()

  })

  test('How to use tooltips', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('use-tooltips')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/compose`)

    // ### Step 1: Simple tooltips (via editor)
    // limitations: can only be used once - difficult to handle localization    
    await page.locator('vaadin-grid-tree-toggle > span:nth-child(2)').first().click()
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'intro 3' }).click()

    // ### Step 1: Focus on markdown editor, for instance in the survey introduction 
    // add a `<a11y-menu></a11y-menu>` tag in the markdown content to activate the accessibility menu for this item
    await page.waitForTimeout(1000)

    await page.getByRole('button', { name: 'add Content', exact: true }).click()
    locator = page.locator('#add-content-menu').getByText('Tooltip', { exact: true })
    await context.annotatedScreenshot(locator, 'step-1-add-tooltip-via-editor')
    await locator.click()

    locator = page.locator('textarea')
    await locator.press('Home')
    await locator.press('Shift+ArrowDown')
    await locator.fill('This would be a tooltip: \n\n <lapp-tooltip term="tootipId" >Tooltip Content</lapp-tooltip>\n')

    locator = page.locator('textarea')
    await context.annotatedScreenshot(locator, 'step-1-tooltip-in-markdown-editor')
    await locator.fill('This survey supports a number of accessibility options which can be turned on and off from the menu below.\n\n<a11y-menu ></a11y-menu>\n')

    // ### Step 2: create a new term definition
    locator = page.locator('vaadin-grid-cell-content').filter({ hasText: 'Glossary' })
    await context.annotatedScreenshot(locator, 'step-2-glossary-in-tree-view')
    await locator.click()

    locator = page.getByRole('button', { name: 'Add a new Glossary Item' })
    await context.annotatedScreenshot(locator, 'step-2-add-new-glossary-item')
    await locator.click()

    // give a name and a definition
    locator = page.locator('lapp-dialog').getByText('Add a new Glossary Item')
    await context.annotatedScreenshot(locator, 'step-2-add-new-glossary-item-dialog')
    await locator.click()

    // ### Step 3: Use the definition 
    // reuse the name for the tooltip content and see the definition in the tooltip when hovering over the term in the form
    // <lapp-tooltip term="name" ></lapp-tooltip>

  })
})
