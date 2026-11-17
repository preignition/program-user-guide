import { test, type Page } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializeSignedInPage } from '../../utils/initializeSignedInPage.ts'

const port = process.env.PLAYWRIGHT_PORT || '7174'
const baseUrl = `http://localhost:${port}`
const surveyId = '3BBFzJneqakYoyDu02c2'
const overviewPath = `s/analyze/survey/${surveyId}/default/overview`
const analyticsPath = `s/analyze/survey/${surveyId}/default/analyze`
const mainPath = 'docs/app/survey/how-to'
const surveyHabitsLabel = 'How many surveys do you run in a typical year?'

const cardByLabel = (page: Page, label: string) =>
  page.locator('lapp-analytics-card').filter({ has: page.getByRole('heading', { name: label }) })

const takeViewportScreenshot = async (page: Page, name: string) => {
  const context = new Context(mainPath, page).setName(`survey-analytics/${name}`)
  await context.screenshot()
}

test.describe('Survey analytics', async () => {
  test('Read and filter survey responses', async ({ page }) => {
    test.setTimeout(120_000)
    const context = new Context(mainPath, page)
    context.setName('survey-analytics')
    await initializeSignedInPage(page, baseUrl, overviewPath)

    await test.step('Open the analytics page', async () => {
      const viewAnalytics = page.getByRole('link', { name: 'View Analytics' })
      await context.annotatedScreenshot(viewAnalytics, 'step-1-open-analytics', 60)
      await viewAnalytics.click()
      await page.getByTestId('analytics-row-counter').waitFor()
    })

    await context.screenshot()

    await test.step('Selection summary', async () => {
      const summary = page.getByRole('region', { name: 'Selection summary and controls' })
      await context.annotatedScreenshot(summary, 'step-2-selection-summary', 20)
    })

    await test.step('Record context and metadata', async () => {
      const metaBand = page.getByTestId('analytics-meta-band')
      await metaBand.waitFor({ state: 'visible' })
      await page.waitForTimeout(300)
      await context.annotatedScreenshot(metaBand, 'step-3-record-context', 20)

      const bandToggle = page.getByRole('button', { name: /Record Context & Metadata/ })
      await bandToggle.click()
      await page.waitForTimeout(300)
      await context.annotatedScreenshot(metaBand, 'step-3-record-context-collapsed', 20)
      await bandToggle.click()
      await page.waitForTimeout(300)
    })

    await test.step('Switch between survey pages', async () => {
      const pageTabs = page.getByRole('tablist', { name: 'Dataset pages' })
      await context.annotatedScreenshot(pageTabs, 'step-4-page-tabs', 20)

      await page.getByRole('tab', { name: /Experience/ }).click()
      await page.waitForTimeout(500)
      await context.annotatedScreenshot(
        page.getByTestId('analytics-page-chart-grid').first(),
        'step-4-experience-charts',
        20,
      )
      await page.getByRole('tab', { name: /Survey habits/ }).click()
      await page.waitForTimeout(500)
    })

    await test.step('Cross-filter the dataset from a chart', async () => {
      const barCard = cardByLabel(page, surveyHabitsLabel)
      const bar = barCard.locator('plot-chart svg[role="img"] rect[data-key]').first()
      await bar.evaluate((element) => element.scrollIntoView({ block: 'center' }))
      await page.waitForTimeout(300)
      await context.annotatedScreenshot(barCard, 'step-5-click-chart-bar', 20)

      const box = await bar.boundingBox()
      if (!box) throw new Error('Chart bar has no bounding box')
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2)
      await page.getByTestId('analytics-active-filter-badge').waitFor()

      const summary = page.getByRole('region', { name: 'Selection summary and controls' })
      await context.annotatedScreenshot(summary, 'step-5-active-filter', 20)
      await context.annotatedScreenshot(barCard, 'step-5-filtered-chart', 20)

      await page.getByTestId('analytics-reset-filters').click()
      await page.waitForTimeout(700)
    })

    await test.step('Read and inspect responses', async () => {
      const grid = page.getByTestId('analytics-response-grid')
      await grid.scrollIntoViewIfNeeded()
      await context.annotatedScreenshot(grid, 'step-6-response-grid', 20)

      await grid.getByRole('gridcell').first().click()
      const inspector = page.getByRole('dialog', { name: /Response #/ })
      await inspector.waitFor({ state: 'visible' })
      await context.annotatedScreenshot(inspector, 'step-7-response-details', 20)
      await page.getByTestId('inspector-close').click()
    })
  })

  test('Customise the analytics view', async ({ page }) => {
    test.setTimeout(120_000)
    const context = new Context(mainPath, page)
    context.setName('survey-analytics')
    await initializeSignedInPage(page, baseUrl, analyticsPath)
    await page.getByTestId('analytics-row-counter').waitFor()

    const languageCard = page.locator('lapp-analytics-card[data-field-id="language"]')

    await test.step('Pin a chart to the top band', async () => {
      const pin = languageCard.getByRole('button', { name: 'Pin Language to top band' })
      await languageCard.hover()
      await page.waitForTimeout(250)
      await context.annotatedScreenshot(pin, 'step-8-pin-chart', 60)
      await pin.click()
      await page.waitForTimeout(500)
      await context.annotatedScreenshot(page.getByTestId('analytics-pinned-grid'), 'step-8-pinned-chart', 20)
      await page.getByRole('button', { name: 'Unpin Language from top band' }).click()
      await page.waitForTimeout(300)
    })

    await test.step('Change a chart through its options menu', async () => {
      const menuButton = languageCard.getByRole('button', { name: 'Chart options for Language' })
      await menuButton.click()
      await page.waitForTimeout(300)
      await takeViewportScreenshot(page, 'step-9-chart-options')

      await page.locator('md-menu[open]').getByText('Horizontal bar', { exact: true }).click()
      await page.waitForTimeout(500)
      await context.annotatedScreenshot(languageCard, 'step-9-bar-chart', 20)
    })

    await test.step('Change the grid layout', async () => {
      await page.getByTestId('analytics-columns-2').click()
      await page.waitForTimeout(500)
      await context.annotatedScreenshot(
        page.getByTestId('analytics-page-chart-grid').first(),
        'step-10-two-columns',
        20,
      )

      await page.getByTestId('analytics-columns-4').click()
      await page.waitForTimeout(500)
      await context.annotatedScreenshot(
        page.getByTestId('analytics-page-chart-grid').first(),
        'step-10-four-columns',
        20,
      )

      await page.getByTestId('analytics-columns-3').click()
      await page.waitForTimeout(300)
    })

    await test.step('Export the filtered dataset', async () => {
      await page.getByTestId('analytics-export-button').click()
      const dialog = page.getByRole('dialog', { name: 'Export dataset' })
      await dialog.waitFor()
      await context.annotatedScreenshot(dialog, 'step-11-export-dataset', 20)
      await page.getByRole('button', { name: 'Cancel' }).click()
    })

    await test.step('Manage saved views', async () => {
      const viewManager = page.locator('app-survey-view-manager')
      await context.annotatedScreenshot(viewManager, 'step-12-view-selector', 40)

      await page.getByRole('button', { name: 'View actions' }).click()
      await page.waitForTimeout(300)
      await takeViewportScreenshot(page, 'step-12-view-actions')
      await page.keyboard.press('Escape')
    })

    await test.step('Show advanced statistics', async () => {
      await page.getByRole('switch', { name: 'toggle advanced mode' }).check()
      await page.waitForTimeout(700)
      await context.annotatedScreenshot(
        cardByLabel(page, surveyHabitsLabel),
        'step-13-advanced-statistics',
        20,
      )
      await context.annotatedScreenshot(page.getByTestId('analytics-hidden-fields'), 'step-13-hidden-charts', 50)
      await page.getByRole('switch', { name: 'toggle advanced mode' }).uncheck()
    })
  })
})
