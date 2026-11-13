import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const mainPath = 'docs/app/listserv/how-to'

let locator: Locator

test.describe('Listserv How-To: Creating & Sending Broadcasts', () => {
  test('How to create a new broadcast', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('creating-a-broadcast')
    await initializePage(page, baseUrl, `${listservAppPath}/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: View the broadcast archive
    locator = page.getByRole('heading', { name: /Broadcasts/ })
    await context.annotatedScreenshot(locator, 'step-1-broadcasts-list')

    // Step 2: Open the new-broadcast form
    locator = page.getByRole('link', { name: 'New Broadcast' })
    await context.annotatedScreenshot(locator, 'step-2-click-new-broadcast')
    await locator.click()
    await page.waitForTimeout(500)

    // Step 3: Compose the broadcast
    locator = page.locator('listserv-broadcast-detail')
    await context.annotatedScreenshot(locator, 'step-3-broadcast-editor')

    await page.getByRole('textbox', { name: 'Title' }).fill('Community update')
    await page.getByRole('textbox', { name: 'Subject' }).fill('Community update')
    await page
      .getByRole('textbox', { name: 'Content' })
      .fill('Hello everyone,\n\nHere is the latest update from the channel.')

    // Step 4: Create the draft and land in its editor
    locator = page.getByRole('button', { name: 'Create broadcast' })
    await context.annotatedScreenshot(locator, 'step-4-create-broadcast')
    await locator.click()
    await page.waitForTimeout(500)

    locator = page.locator('listserv-broadcast-detail')
    await context.annotatedScreenshot(locator, 'step-5-draft-editor')
  })
})
