import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const mainPath = 'docs/app/listserv/how-to'

let locator: Locator

test.describe('Listserv How-To: Browsing Archives', () => {

  test('How to browse past broadcasts', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('browsing-archives')
    await initializePage(page, baseUrl, `${listservAppPath}/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: View the public broadcast archive listing
    locator = page.locator('a11y-listserv-broadcast')
    await context.annotatedScreenshot(locator, 'step-1-broadcast-archive-listing')

    // Step 2: View privacy notice on the archive page
    locator = page.locator('.privacy-note')
    await context.annotatedScreenshot(locator, 'step-2-privacy-notice')

    // Step 3: Navigate from archives to subscribe
    locator = page.getByRole('link', { name: 'Subscribe' })
    await context.annotatedScreenshot(locator, 'step-3-subscribe-link-from-archive')
  })

  test('How to search broadcasts', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('searching-broadcasts')
    await initializePage(page, baseUrl, `${listservAppPath}/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: View the broadcast cards and filters available
    locator = page.locator('a11y-listserv-broadcast')
    await context.annotatedScreenshot(locator, 'step-1-archive-overview')

    // Step 2: Browse individual broadcast cards
    locator = page.locator('vaadin-card').first()
    await context.annotatedScreenshot(locator, 'step-2-broadcast-card')
  })
})
