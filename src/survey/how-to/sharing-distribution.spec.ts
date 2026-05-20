import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'

const port = '7173'
const a11yPort = '7174'
const baseUrl = `http://localhost:${port}` // playwright team
const a11yBaseUrl = `http://localhost:${a11yPort}` // accessible data team
const satisfactionSurveyId = '3BBFzJneqakYoyDu02c2'
const mainPath = 'docs/app/survey/how-to'

let locator: Locator

test.describe('Survey Sharing & Distribution How-To', async () => {
  test('How to publish a survey', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('publishing-a-survey')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/share/status`)

    // ## Step 1: Set the strategy for making the survey active (immediate, manual, scheduled)
    locator = page.getByRole('radiogroup', { name: 'Choose the strategy for' })
    await context.annotatedScreenshot(locator, 'step-1-choose-strategy-for-publishing')


    // ## Step 2: Navigate to the share view / build - build a version of the form before sharing

    locator = page.getByText('Publish', { exact: true })
    await context.annotatedScreenshot(locator, 'step-2-click-publish-link')
    await locator.click()


    locator = page.getByRole('button', { name: 'Create a new Version of the' })
    await context.annotatedScreenshot(locator, 'step-2-click-create-new-version')
    await locator.click()

    await page.locator('.input-wrapper').click()
    await page.getByRole('textbox', { name: 'Versioning Message' }).fill('A new version to share')
    locator = page.getByRole('dialog', { name: 'Build the Survey' })
    await context.annotatedScreenshot(locator, 'step-2-click-build-the-survey-dialog')
    // we need to close the dialog
    page.getByRole('button', { name: 'Cancel' }).click()


    // ## Step 3: Share the survey with other team members by generating a shareable link or by adding their email to share directly with them
    locator = page.getByText('Distribute', { exact: true })
    await context.annotatedScreenshot(locator, 'step-3-click-distribute')
    await locator.click()
    locator = page.getByRole('button', { name: 'Display Link for Production' })
    await context.annotatedScreenshot(locator, 'step-3-click-display-link-for-production')
    await locator.click()
    locator = page.getByText('Displaying Production Link Use Production Link for the real survey data')
    await context.annotatedScreenshot(locator, 'step-3-display-production-link')


    // Step 4 (Optional): Preselect accessibility modes or language for the respondents when sharing the link
    locator = page.getByRole('radiogroup', { name: 'Select a language for the' })
    await context.annotatedScreenshot(locator, 'step-4-select-language-for-sharing')
    await locator.click()
    locator = page.getByRole('radiogroup', { name: 'Select a sign language for' })
    await context.annotatedScreenshot(locator, 'step-4-select-sign-language-for-sharing')
    await locator.click()
    locator = page.getByRole('listbox', { name: 'Select accessibility modes to' })
    await context.annotatedScreenshot(locator, 'step-4-select-accessibility-modes-for-sharing')
    await locator.click()

    // Step 5: copy the link to share
    locator = page.getByRole('link', { name: 'http://localhost:7174/v2/3BBFzJneqakYoyDu02c2?' })
    await context.annotatedScreenshot(locator, 'step-5-copy-link-to-share')
    await locator.click()

  })

  test('How to configure redirection', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('configure-redirection')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/share/redirection`)

    // ## Explore different redirection options (e.g. redirect to a specific URL, redirect to a specific page in the form, etc.)
    // 1. Application home page (accessiblesurveys.com)
    locator = page.getByText('homeApplication\'s home page (')
    await locator.click()
    await context.annotatedScreenshot(locator, 'click-home-page-link')

    await page.waitForTimeout(500)
    locator = page.locator('app-survey-deploy-redirection')
    await context.annotatedScreenshot(locator, 'home-page-redirection-option')

    // 2. No Redirection
    locator = page.getByText('No redirection.Respondents')
    await locator.click()
    await context.annotatedScreenshot(locator, 'no-redirection-option')

    await page.waitForTimeout(500)
    locator = page.locator('app-survey-deploy-redirection')
    await context.annotatedScreenshot(locator, 'no-redirection-option-selected')

    // 3. A page dedicated to the survey
    locator = page.getByText('A page dedicated to this survey. Respondents are re-directed out of the survey')
    await locator.click()
    await context.annotatedScreenshot(locator, 'page-dedicated-to-survey-option')
    await page.waitForTimeout(500)

    locator = page.locator('app-survey-deploy-redirection')
    await context.annotatedScreenshot(locator, 'page-dedicated-to-survey-option-selected')
    await page.getByText('A page dedicated to this survey. Respondents are re-directed out of the survey').click()
    // 4. user space - no yet available

    // reset initial config
    await page.getByText('A page dedicated to this survey. Respondents are re-directed out of the survey').click()
  })

  test('Distribution & Data', async ({ page }) => {

    const context = new Context(
      'app/survey/how-to',
      page
    )
    await page.setViewportSize({ width: 1600, height: 1080 })
    await page.goto(baseUrl)


    // ## Alias
    context.setName('creating-alias')

    // ## Form Behaviour
    context.setName('form-behaviour')

    // ## Batches
    context.setName('using-survey-batches')

    // ## Respondent accounts
    context.setName('survey-respondent-accounts')



    // Terms and Conditions
    context.setName('survey-terms')
    return
  })
})
