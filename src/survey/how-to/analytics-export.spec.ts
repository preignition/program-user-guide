import { test } from '@playwright/test'
import { Context } from '../../Context.ts'

const port = '7173'
const baseUrl = `http://localhost:${port}` // playwright team

test.describe('Survey Analytics & Export How-To', async () => {
  test('Analytics & Export', async ({ page }) => {

    const context = new Context(
      'app/survey/how-to',
      page
    )
    await page.setViewportSize({ width: 1600, height: 1080 })
    await page.goto(baseUrl)

    // ## Survey Analytics
    context.setName('survey-analytics')

    // ## Exporting Survey Data
    context.setName('exporting-survey-data')

    return
  })
})
