import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'

const a11yPort = '7174'
const a11yBaseUrl = `http://localhost:${a11yPort}` // accessible data team
const satisfactionSurveyId = '3BBFzJneqakYoyDu02c2'
const mainPath = 'docs/app/survey/how-to'

let locator: Locator

test.describe('Survey Localization How-To', async () => {
  test('how to localize a survey', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('localize-survey')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/compose`)


    // ## Translate Forms
    context.setName('localize-survey')

    // ### Step 1: Activate Languages
    // navigate to localizationlocator.click()
    locator = page.locator('md-list-item').filter({ hasText: 'Make Form Multilingual' }).getByRole('listitem')
    await context.annotatedScreenshot(locator, 'step-1-navigate-to-localization')
    await locator.click()


    locator = page.getByText('Activate Localization')
    await context.annotatedScreenshot(locator, 'step-1-activate-localization')

    locator = page.getByText('spanish french activated.')
    await context.annotatedScreenshot(locator, 'step-1-select-languages')

    // ### Step 2: Go back to the form
    await page.locator('md-list-item').filter({ hasText: 'Build, organize Content' }).getByRole('listitem').click()
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Form' }).click()

    // activate the localization mode and the active translated language
    locator = page.getByRole('button', { name: 'Localize Mode' })
    await context.annotatedScreenshot(locator, 'step-2-activate-localize-mode')
    await locator.click()

    locator = page.getByRole('button', { name: 'arabic' })
    await context.annotatedScreenshot(locator, 'step-2-select-active-language')
    await locator.click()

    // Option 1: manual translation: edit each field and add the translation for each language in the localization section of the field properties

    await page.getByText('Survey habits', { exact: true }).click()
    locator = page.locator('lapp-field-translate').filter({ hasText: 'page title page title' })
    await context.annotatedScreenshot(locator, 'step-2-click-translate-field')
    await locator.click()

    // the tree grid displays the original text and the translation for each activated language to easily compare them and edit the translation if needed.
    locator = page.locator('vaadin-split-layout div').filter({ hasText: 'Overall Structure Introduction Page Form Survey habits Section 1 Experience' })
    await context.annotatedScreenshot(locator, 'step-2-click-overall-structure', undefined, 400)

    // Option 2: run an automatic translation (either only for empty fields, or override all fields) and then review and edit the translated text as the automatic translation might not be accurate

    locator = page.getByRole('button', { name: 'Translate' })
    await context.annotatedScreenshot(locator, 'step-2-click-translate-button')
    await locator.click()

    // write `override` to confirm that this is the intent
    locator = page.locator('#confirmDialog')
    await context.annotatedScreenshot(locator, 'step-2-confirm-dialog')

    locator = page.getByRole('button', { name: 'start translation' })
    await context.annotatedScreenshot(locator, 'step-2-start-translation')

    // ### Step 3: Review and Edit translated Text
    // browse the survey to check, or render the survey in test mode

    return
  })

  test('How to import/export', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('import-export')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/share/import-export`)

    // ## Step 1: Export the form in a format that can be translated (e.g. Excel, CSV, etc.)
    locator = page.getByRole('button', { name: 'Export Survey Definition' })
    await context.annotatedScreenshot(locator, 'step-1-export-survey-definition')
    await locator.click()

    locator = page.getByText('arabic', { exact: true })
    await context.annotatedScreenshot(locator, 'step-1-select-language-for-export')
    await locator.click()

    locator = page.getByRole('button', { name: 'Create the Export' })
    await context.annotatedScreenshot(locator, 'step-1-create-export')
    // await locator.click() // we do not create the export but close the dialog instead
    await page.getByRole('button', { name: 'Cancel' }).click()

    // ## Step 2: Translate the form in the exported file
    locator = page.getByTestId('grid for export')
    await context.annotatedScreenshot(locator, 'step-2-translated-file')

    // ## Step 3: Import the translated file back to the platform and map the translated fields with the original fields to update the form with the translated text

    locator = page.getByRole('button', { name: 'Import Survey Definition' })
    await context.annotatedScreenshot(locator, 'step-3-import-translated-form')
    await locator.click()

    locator = page.getByRole('button', { name: 'Upload File...' })
    await context.annotatedScreenshot(locator, 'step-3-upload-translated-file')

    locator = page.getByText('arabic', { exact: true })
    await context.annotatedScreenshot(locator, 'step-3-select-language-for-import')
    await locator.click()

    locator = page.getByRole('dialog', { name: 'Import the Survey' })
    await context.annotatedScreenshot(locator, 'step-3-import-survey-dialog')

    // we do not click on the button to avoid importing a file in the test, but in a real test, we would click and then upload a translated file
    // await locator.click()
    return

  })
})
