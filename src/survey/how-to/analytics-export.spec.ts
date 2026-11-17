import { test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializeSignedInPage } from '../../utils/initializeSignedInPage.ts'

const port = process.env.PLAYWRIGHT_PORT || '7174'
const baseUrl = `http://localhost:${port}`
const surveyId = '3BBFzJneqakYoyDu02c2'
const analyticsPath = `s/analyze/survey/${surveyId}/default/analyze`
const mainPath = 'docs/app/survey/how-to'
const surveyHabitsLabel = 'How many surveys do you run in a typical year?'

test.describe('Exporting survey data', async () => {
  test('Export dataset workflow', async ({ page }) => {
    test.setTimeout(120_000)
    const context = new Context(mainPath, page)
    context.setName('exporting-survey-data')

    await initializeSignedInPage(page, baseUrl, analyticsPath)
    await page.getByTestId('analytics-row-counter').waitFor()

    await test.step('Locate the export button in the toolbar', async () => {
      const exportButton = page.getByTestId('analytics-export-button')
      await context.annotatedScreenshot(exportButton, 'step-1-export-button', 40)
    })

    await test.step('Open the export dataset dialog', async () => {
      await page.getByTestId('analytics-export-button').click()
      const dialog = page.getByRole('dialog', { name: 'Export dataset' })
      await dialog.waitFor()
      await context.annotatedScreenshot(dialog, 'step-2-export-dialog', 20)
      await page.getByRole('button', { name: 'Cancel' }).click()
      await page.waitForTimeout(300)
    })

    await test.step('Export a filtered cohort', async () => {
      const barCard = page
        .locator('lapp-analytics-card')
        .filter({ has: page.getByRole('heading', { name: surveyHabitsLabel }) })
      const bar = barCard.locator('plot-chart svg[role="img"] rect[data-key]').first()
      await bar.evaluate((element) => element.scrollIntoView({ block: 'center' }))
      await page.waitForTimeout(300)

      const box = await bar.boundingBox()
      if (!box) throw new Error('Chart bar has no bounding box')
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2)
      await page.getByTestId('analytics-active-filter-badge').waitFor()

      await page.getByTestId('analytics-export-button').click()
      const dialog = page.getByRole('dialog', { name: 'Export dataset' })
      await dialog.waitFor()
      await context.annotatedScreenshot(dialog, 'step-3-filtered-export', 20)
      await page.getByRole('button', { name: 'Cancel' }).click()
      await page.getByTestId('analytics-reset-filters').click()
    })
  })
})
