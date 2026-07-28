import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const mainPath = 'docs/app/listserv/how-to'

let locator: Locator

test.describe('Listserv How-To: Analyzing Broadcast Performance', () => {

  test('How to view the analytics dashboard', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('viewing-analytics-dashboard')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/analytics`)
    await page.waitForTimeout(500)

    // Step 1: View the aggregate summary header
    locator = page.locator('listserv-admin-analytics .aggregate-header')
    await context.annotatedScreenshot(locator, 'step-1-aggregate-summary')

    // Step 2: View the per-broadcast delivery table
    locator = page.locator('listserv-admin-analytics vaadin-grid')
    await context.annotatedScreenshot(locator, 'step-2-delivery-table')
  })

  test('How to view per-broadcast stats in the broadcast list', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('viewing-broadcast-list-stats')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: View the broadcast list with delivery stat columns
    locator = page.locator('listserv-admin-broadcast')
    await context.annotatedScreenshot(locator, 'step-1-broadcasts-grid-with-stats')
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

  test('How to view aggregate delivery metrics', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('viewing-aggregate-metrics')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/analytics`)
    await page.waitForTimeout(500)

    // Step 1: Navigate to the analytics dashboard
    locator = page.locator('listserv-admin-analytics')
    await context.annotatedScreenshot(locator, 'step-1-analytics-dashboard')

    // Step 2: View delivery rate bar + percentage per broadcast
    locator = page.locator('listserv-admin-analytics vaadin-grid')
    await context.annotatedScreenshot(locator, 'step-2-delivery-rate-bars')
  })
})
