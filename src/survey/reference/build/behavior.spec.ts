import { test } from '@playwright/test'
import { Context } from '../../../Context.ts'
import { initializePage } from '../../../utils/initializePage.ts'
import { baseUrl, referenceRoot, pageContent, suffix } from '../constants.ts'

test.describe('Survey Reference - Form Behavior', () => {

  test('Form Behavior Tabs', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    context
      .setPath('build')
      .addArea('content', pageContent)
    await initializePage(page, baseUrl, suffix)
    await page.waitForTimeout(1000)

    await page.getByRole('link', { name: 'build' }).click()
    await page.waitForTimeout(1000)
    await page.getByText('Form Behavior').click()
    await page.waitForTimeout(1000)

    console.info(`Capturing behavior-accessibility`)
    await context
      .setName('behavior-accessibility')
      .screenshot()
    console.info(`Capturing behavior-layout`)
    await page.locator('#layout-tab > .button').click()
    await context
      .setName('behavior-layout')
      .screenshot()
    console.info(`Capturing behavior-style`)
    await page.locator('#style-tab > .button').click()
    await context
      .setName('behavior-style')
      .screenshot()
  })
})
