import { test } from '@playwright/test'
import { Context } from '../../../Context.ts'
import { initializePage } from '../../../utils/initializePage.ts'
import { baseUrl, referenceRoot, suffix } from '../constants.ts'

test.describe('Survey Reference - Other Build Features', () => {

  test('Localize, Library, Prompt, Restore', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    context
      .setPath('build')
    await initializePage(page, baseUrl, suffix)
    await page.waitForTimeout(2000)

    // LOCALIZE
    await page.getByText('Localize').click()
    console.info(`Capturing localize`)
    await context
      .setName('localize')
      .screenshot(true)

    // IMAGE LIBRARY
    await page.getByText('Image Library').click()
    console.info(`Capturing image library`)
    await context
      .setName('image-library')
      .screenshot(true)

    await page.getByRole('switch', { name: 'toggle advanced mode' }).check()
    await page.waitForTimeout(50)

    // PROMPT
    await page.getByText('Prompt').first().click()
    console.info(`Capturing prompt`)
    await context
      .setName('prompt')
      .screenshot(true)


    // RESTORE

    await page.locator('#list').getByText('Restore', { exact: true }).click()
    console.info(`Capturing restore`)
    await context
      .setName('restore')
      .screenshot(true)


    await page.getByRole('switch', { name: 'toggle advanced mode' }).uncheck()
    await page.waitForTimeout(50)
  })
})
