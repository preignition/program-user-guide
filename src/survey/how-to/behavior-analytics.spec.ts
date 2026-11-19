import { test, type Page } from '@playwright/test'
import { Context } from '../../Context.ts'
import { growDialogForScreenshot, restoreDialogAfterScreenshot } from '../../utils/dialogScreenshot.ts'
import { initializeSignedInPage } from '../../utils/initializeSignedInPage.ts'

const port = process.env.PLAYWRIGHT_PORT || '7174'
const baseUrl = `http://localhost:${port}`
const surveyId = '3BBFzJneqakYoyDu02c2'
const analyticsPath = `s/analyze/survey/${surveyId}/default/analyze`
const behaviorPath = `s/analyze/survey/${surveyId}/default/behavior`
const mainPath = 'docs/app/survey/how-to'

const confidenceCard = (page: Page) =>
  page.locator('lapp-analytics-card[data-field-id="behavior.confidenceScore"]')
const qualityCard = (page: Page) =>
  page.locator('lapp-analytics-card[data-field-id="behavior.qualityFlags"]')
const dropOffCard = (page: Page) =>
  page.locator(
    'lapp-analytics-card[data-field-id="behavior.dropOffPage"], lapp-analytics-card[data-field-id="behavior.dropOffQuestion"]',
  )

const takeViewportScreenshot = async (page: Page, name: string) => {
  const context = new Context(mainPath, page).setName(`behavior-analytics/${name}`)
  await context.screenshot()
}

test.describe('Behavioral analytics', async () => {
  test('Read respondent behavior', async ({ page }) => {
    test.setTimeout(120_000)
    const context = new Context(mainPath, page)
    context.setName('behavior-analytics')
    await initializeSignedInPage(page, baseUrl, analyticsPath)
    await page.getByTestId('analytics-row-counter').waitFor()

    await test.step('Open the Behavior tab', async () => {
      const behaviorTab = page.getByRole('link', { name: 'Behavior', exact: true })
      // The tab bar clips an outer ring on the last tab; ring the tab inside it.
      await context.annotatedScreenshot(behaviorTab, 'step-1-open-behavior', 60, Infinity, {
        outlineStyle: { ...context.outlineStyle, outlineOffset: '-4px' },
      })
      await behaviorTab.click()
      await page.getByTestId('behavioral-kpi-strip').waitFor()
    })

    await context.screenshot()

    await test.step('Key behavioral metrics', async () => {
      await context.annotatedScreenshot(
        page.getByRole('region', { name: 'Selection summary and controls' }),
        'step-2-selection-summary',
        20,
      )
      await context.annotatedScreenshot(page.getByTestId('behavioral-kpi-strip'), 'step-2-kpi-strip', 20)
    })

    await test.step('Response quality charts', async () => {
      await context.annotatedScreenshot(confidenceCard(page), 'step-3-confidence-index', 20)
      await context.annotatedScreenshot(qualityCard(page), 'step-3-quality-signals', 20)
    })

    await test.step('Drop-off breakdown by page and question', async () => {
      await context.annotatedScreenshot(dropOffCard(page), 'step-4-dropoff-by-page', 20)
      await page.getByTestId('dropoff-mode-question').click()
      await page.waitForTimeout(500)
      await context.annotatedScreenshot(dropOffCard(page), 'step-4-dropoff-by-question', 20)
      await page.getByTestId('dropoff-mode-page').click()
      await page.waitForTimeout(300)
    })

    await test.step('Per-question attention and friction', async () => {
      const friction = page.getByTestId('behavioral-friction-card')
      await context.annotatedScreenshot(friction, 'step-5-friction-median', 20, 760)

      await page.getByTestId('friction-mode-boxplot').click()
      await page.waitForTimeout(500)
      await context.annotatedScreenshot(friction, 'step-5-friction-boxplot', 20, 760)

      await page.getByTestId('friction-sort-survey').click()
      await page.waitForTimeout(500)
      await context.annotatedScreenshot(friction, 'step-5-friction-survey-order', 20, 760)

      await page.getByTestId('friction-mode-median').click()
      await page.getByTestId('friction-sort-slowest').click()
      await page.waitForTimeout(300)

      await page
        .getByRole('button', { name: 'Chart options for Per-Question Attention & Friction' })
        .click()
      await page.waitForTimeout(300)
      await takeViewportScreenshot(page, 'step-5-friction-options')
      await page.keyboard.press('Escape')
    })

    await test.step('Cross-filter from a friction hotspot', async () => {
      const bar = page.locator('#friction-chart').locator('svg[role="img"] rect[data-key]').first()
      await bar.evaluate((element) => element.scrollIntoView({ block: 'center' }))
      await page.waitForTimeout(300)
      const box = await bar.boundingBox()
      if (!box) throw new Error('Friction bar has no bounding box')
      await page.mouse.click(box.x + box.width / 2, box.y + box.height * 0.75)
      await page.getByTestId('analytics-active-filter-badge').waitFor()

      await context.annotatedScreenshot(
        page.getByRole('region', { name: 'Selection summary and controls' }),
        'step-6-filtered-summary',
        20,
      )
      await context.annotatedScreenshot(page.getByTestId('behavioral-kpi-strip'), 'step-6-filtered-kpis', 20)
      await page.getByTestId('analytics-reset-filters').click()
      await page.waitForTimeout(500)
    })

    await test.step('Inspect a respondent', async () => {
      const grid = page.getByRole('region', { name: 'Behavioral respondent breakdown' })
      await grid.scrollIntoViewIfNeeded()
      await context.annotatedScreenshot(grid, 'step-7-respondent-log', 20)

      await grid.getByText('Attentive', { exact: false }).filter({ visible: true }).first().click()
      const inspector = page.getByTestId('behavioral-inspector-dialog').locator('dialog')
      await inspector.waitFor({ state: 'visible' })
      await context.annotatedScreenshot(inspector, 'step-8-respondent-details', 20)
      await page.getByTestId('behavioral-inspector-dialog').getByRole('button', { name: 'Close' }).click()
    })

    await test.step('Select a respondent for removal', async () => {
      const grid = page.getByRole('region', { name: 'Behavioral respondent breakdown' })
      const firstCheckbox = grid.getByRole('checkbox', { name: /Select Row/ }).first()
      await firstCheckbox.click()

      const selectionBar = page.getByTestId('behavioral-selection-bar')
      await selectionBar.waitFor()
      await context.annotatedScreenshot(selectionBar, 'step-9-select-responses', 30)

      await page.getByTestId('behavioral-remove-selected').click()
      const dialog = page.getByRole('dialog', {
        name: /Remove responses from the analytics dataset/,
      })
      await dialog.waitFor({ state: 'visible' })
      await context.annotatedScreenshot(dialog, 'step-9-exclusion-dialog', 20)
      await page.getByRole('button', { name: 'Cancel' }).click()
      await page.waitForTimeout(300)
      await firstCheckbox.click()
    })
  })

  test('Explore advanced behavioral metrics', async ({ page }) => {
    test.setTimeout(120_000)
    const context = new Context(mainPath, page)
    context.setName('behavior-analytics')
    await initializeSignedInPage(page, baseUrl, behaviorPath)
    await page.getByTestId('behavioral-kpi-strip').waitFor()

    await test.step('Show advanced statistics on behavior charts', async () => {
      await page.getByRole('switch', { name: 'toggle advanced mode' }).check()
      await page.waitForTimeout(700)
      await context.annotatedScreenshot(confidenceCard(page), 'step-9-advanced-confidence', 20)
      await context.annotatedScreenshot(qualityCard(page), 'step-9-advanced-quality', 20)
    })

    await test.step('Export the behavioral dataset', async () => {
      await page.getByTestId('analytics-export-button').click()
      const dialog = page.getByRole('dialog', { name: 'Export dataset' })
      await dialog.waitFor()
      await context.annotatedScreenshot(dialog, 'step-10-export-dataset', 20)
      await growDialogForScreenshot(page, dialog)
      await context.annotatedScreenshot(dialog, 'step-10-export-dataset-options', 30)
      await restoreDialogAfterScreenshot(page, dialog)
      await page.getByRole('button', { name: 'Cancel' }).click()
      await page.getByRole('switch', { name: 'toggle advanced mode' }).uncheck()
    })
  })
})
