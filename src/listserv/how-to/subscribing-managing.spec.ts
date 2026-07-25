import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const mainPath = 'docs/app/listserv/how-to'

let locator: Locator

test.describe('Listserv How-To: Subscribing & Preferences', () => {

  test('How to subscribe to a listserv channel', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('subscribing-to-a-channel')
    await initializePage(page, baseUrl, `${listservAppPath}/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: Navigate to the Subscribe page
    locator = page.getByRole('link', { name: 'Subscribe' })
    await context.annotatedScreenshot(locator, 'step-1-click-subscribe-link')
    await locator.click()
    await page.waitForTimeout(500)

    // Step 2: Fill in your email address
    locator = page.getByRole('textbox', { name: 'Email address' })
    await context.annotatedScreenshot(locator, 'step-2-enter-email')
    await locator.click()
    await locator.fill('subscriber@example.com')

    // Step 3: Select your preferred language
    locator = page.locator('lapp-choice-radio').filter({ hasText: 'Preferred Language' })
    await context.annotatedScreenshot(locator, 'step-3-select-preferred-language')

    // Step 4: Choose delivery mode (individual or digest)
    locator = page.locator('lapp-checkbox-field').filter({ hasText: 'weekly digest' })
    await context.annotatedScreenshot(locator, 'step-4-choose-delivery-mode')

    // Step 5: Submit the subscription form
    locator = page.getByRole('button', { name: 'Subscribe' })
    await context.annotatedScreenshot(locator, 'step-5-click-subscribe-button')
  })

  test('How to manage delivery preferences', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('managing-delivery-preferences')
    await initializePage(page, baseUrl, `${listservAppPath}/subscribe`)
    await page.waitForTimeout(500)

    // Step 1: Toggle between individual emails and weekly digest
    locator = page.locator('lapp-checkbox-field').filter({ hasText: 'weekly digest' })
    await context.annotatedScreenshot(locator, 'step-1-toggle-digest-mode')

    // Step 2: View the digest explanation
    await locator.click()
    await page.waitForTimeout(300)
    locator = page.locator('.note')
    await context.annotatedScreenshot(locator, 'step-2-digest-explanation')
  })
})
