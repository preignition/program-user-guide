import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const mainPath = 'docs/app/listserv/how-to'

let locator: Locator

test.describe('Listserv How-To: Analyzing Broadcast Performance', () => {

  test('How to view per-broadcast analytics', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('viewing-broadcast-analytics')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: View the list of all broadcasts with their lifecycle states
    locator = page.locator('listserv-admin-broadcast')
    await context.annotatedScreenshot(locator, 'step-1-broadcasts-grid')
  })

  test('How to view delivery statistics for a broadcast', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('viewing-delivery-stats')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: Click on a sent broadcast to view its detail
    const gridCell = page.locator('vaadin-grid-cell-content').first()
    await context.annotatedScreenshot(gridCell, 'step-1-click-broadcast')
    await gridCell.click()
    await page.waitForTimeout(500)

    // Step 2: View the broadcast detail with analytics
    locator = page.locator('listserv-broadcast-detail')
    await context.annotatedScreenshot(locator, 'step-2-broadcast-detail-analytics')

    // Step 3: View lifecycle state and statistics
    locator = page.locator('actor-actions')
    await context.annotatedScreenshot(locator, 'step-3-broadcast-lifecycle-state')
  })

  test('How to filter analytics by language segment', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('filtering-analytics-by-language')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: Open a broadcast to view language-segmented stats
    const gridCell = page.locator('vaadin-grid-cell-content').first()
    await context.annotatedScreenshot(gridCell, 'step-1-select-broadcast')
    await gridCell.click()
    await page.waitForTimeout(500)

    // Step 2: View language-specific delivery data
    locator = page.locator('listserv-broadcast-detail')
    await context.annotatedScreenshot(locator, 'step-2-language-segmented-analytics')
  })
})
