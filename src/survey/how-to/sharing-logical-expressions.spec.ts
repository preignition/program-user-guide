import { expect, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { saveScreenshotIfChanged } from '../../utils/conditionalScreenshot.ts'
import { initializePage } from '../../utils/initializePage.ts'

const a11yBaseUrl = 'http://localhost:7174'
const testSurveyId = 'ufPnZmyEOqZIokmDYuT0' // import content
const mainPath = 'docs/app/survey/how-to'
const assets = `${mainPath}/assets/sharing-logical-expressions`

/**
 * The Expressions page is advanced-mode only. This spec opens it from a known
 * survey and captures the page and one expanded row; it does not edit or
 * delete anything, so it is safe to re-run.
 */
test.describe('Survey Expressions Page', () => {
  test('Expressions page and row details', async ({ page }) => {
    const context = new Context(mainPath, page).setName('sharing-logical-expressions')
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${testSurveyId}/build/compose`)
    await page.waitForTimeout(1500)

    const advanced = page.getByRole('switch', { name: 'toggle advanced mode' })
    await advanced.check()
    await page.waitForTimeout(300)

    // Step 3: open Build -> Expressions from the advanced drawer.
    const menuItem = page.locator('#list md-list-item').filter({ hasText: 'Expressions' })
    await expect(menuItem).toBeVisible()
    await context.annotatedScreenshot(menuItem, 'step-3-expressions-menu', 20)
    await menuItem.click()

    const grid = page.locator('app-survey-build-expressions vaadin-grid')
    await expect(grid).toBeVisible()
    await page.waitForTimeout(1000)

    // The page lists every expression; capture it with advanced mode on.
    saveScreenshotIfChanged(`${assets}/step-3-expressions-page.png`, await page.screenshot())

    // Step 4: expand a used, named expression to show its usage and the
    // Open in compose action.
    const nameCell = grid.getByText('share this', { exact: true })
    await expect(nameCell).toBeVisible()
    await nameCell.click()

    // The details host has no box of its own (its content is slotted into the
    // grid's details cell); annotate the visible cell instead.
    const detailsCell = page
      .locator('vaadin-grid-cell-content')
      .filter({ hasText: 'Delete expression' })
      .first()
    await expect(detailsCell).toBeVisible()
    await page.waitForTimeout(500)
    await context.annotatedScreenshot(detailsCell, 'step-4-expression-details', 20)
  })
})
