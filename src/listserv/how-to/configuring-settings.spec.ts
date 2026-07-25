import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const mainPath = 'docs/app/listserv/how-to'

let locator: Locator

test.describe('Listserv How-To: Configuring Channel Settings', () => {

  test('How to configure channel settings', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('configuring-channel')
    await initializePage(page, baseUrl, `${listservAppPath}/settings/channel`)
    await page.waitForTimeout(500)

    // Step 1: Configure channel title, description, and admin contact
    locator = page.locator('listserv-settings-channel')
    await context.annotatedScreenshot(locator, 'step-1-channel-configuration-form')

    // Step 2: Set rate limits and attachment restrictions
    locator = page.locator('lapp-entity-holder').first()
    await context.annotatedScreenshot(locator, 'step-2-rate-limits-and-restrictions')
  })

  test('How to configure active languages', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('configuring-languages')
    await initializePage(page, baseUrl, `${listservAppPath}/settings/language`)
    await page.waitForTimeout(500)

    // Step 1: View the active languages settings
    locator = page.locator('listserv-settings-language')
    await context.annotatedScreenshot(locator, 'step-1-active-languages-overview')

    // Step 2: Toggle a language on/off
    locator = page.locator('md-switch').first()
    await context.annotatedScreenshot(locator, 'step-2-toggle-language')
  })

  test('How to configure automatic bounce handling', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('configuring-bounce-handling')
    await initializePage(page, baseUrl, `${listservAppPath}/settings/bounce`)
    await page.waitForTimeout(500)

    // Step 1: View bounce handling settings
    locator = page.locator('listserv-settings-bounce')
    await context.annotatedScreenshot(locator, 'step-1-bounce-handling-overview')

    // Step 2: Toggle automatic bounce cleaning
    locator = page.locator('md-switch').first()
    await context.annotatedScreenshot(locator, 'step-2-toggle-automatic-bounce-cleaning')

    // Step 3: Set bounce threshold
    locator = page.getByRole('textbox').first()
    await context.annotatedScreenshot(locator, 'step-3-set-bounce-threshold')

    // Step 4: Clean subscriber list button
    locator = page.getByRole('button', { name: 'Clean List' })
    await context.annotatedScreenshot(locator, 'step-4-clean-subscriber-list')
  })

  test('How to manage user access for the listserv', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('managing-user-access')
    await initializePage(page, baseUrl, `${listservAppPath}/settings/user`)
    await page.waitForTimeout(500)

    // Step 1: View user management page
    locator = page.locator('listserv-settings-user')
    await context.annotatedScreenshot(locator, 'step-1-user-management-overview')

    // Step 2: View admin members list
    locator = page.locator('lapp-access-entity')
    await context.annotatedScreenshot(locator, 'step-2-admin-members-list')

    // Step 3: Add a member button
    locator = page.getByRole('button', { name: 'Add Members' })
    await context.annotatedScreenshot(locator, 'step-3-add-members-button')
  })
})
