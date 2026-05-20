import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, referenceRoot, suffix } from './constants.ts'

let locator: Locator

test.describe('Survey Reference - Share', () => {

  test('Share Options', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    await initializePage(page, baseUrl, suffix)
    await page.waitForTimeout(2000)
    // SHARE

    await page.getByRole('link', { name: 'share' }).click()
    console.info(`Capturing share`)
    await context
      .setPath('share')
      .setName('share')
      .screenshot(true)

    // STATUS
    await page.getByText('Status').first().click()
    console.info(`Capturing status`)
    await context
      .setPath('status')
      .setName('status')
      .screenshot(true)

    // PUBLISH
    await page.getByText('Publish').first().click()
    console.info(`Capturing publish`)
    await context
      .setPath('../publish')
      .setName('publish')
      .screenshot(true)

    await page.getByText('Distribute').first().click()
    console.info(`Capturing distribute`)
    await context
      .setPath('../distribute')
      .setName('distribute')
      .screenshot(true)

    // SETTINGS
    await page.getByText('Account type').click()
    console.info(`Capturing account type`)
    await context
      .setPath('../account-type')
      .setName('account-type')
      .screenshot(true)

    await page.getByText('Redirection').click()
    console.info(`Capturing redirection`)
    await context
      .setPath('../redirection')
      .setName('redirection')
      .screenshot(true)

    await page.getByText('Access', { exact: true }).click()
    console.info(`Capturing access`)
    await context
      .setPath('../access')
      .setName('access')
      .screenshot(true)

    await page.getByRole('switch', { name: 'toggle advanced mode' }).check()
    await page.waitForTimeout(50)

    // EMAIL
    await page.getByText('Email').first().click()
    console.info(`Capturing email`)
    await context
      .setPath('../email')
      .setName('email')
      .screenshot(true)

    // BATCH
    await page.getByText('Batch').first().click()
    console.info(`Capturing batch`)
    await context
      .setPath('../batch')
      .setName('batch')
      .screenshot(true)

    // WEBHOOK
    await page.getByText('Webhook').first().click()
    console.info(`Capturing webhook`)
    await context
      .setPath('../webhook')
      .setName('webhook')
      .screenshot(true)

    // IMPORT/EXPORT
    await page.getByText('Import/Export').first().click()
    console.info(`Capturing import/export`)
    await context
      .setPath('../import-export')
      .setName('')
      .screenshot(true)

    await page.getByRole('button', { name: 'Export Survey Definition' }).click()
    locator = page.getByRole('dialog', { name: 'Export the Survey' })
    await context.annotatedScreenshot(locator, 'export-survey')
    await page.getByRole('button', { name: 'Cancel' }).click()

    await page.getByRole('button', { name: 'Import Survey Definition' }).click()
    locator = page.getByRole('dialog', { name: 'Import the Survey' })
    await context.annotatedScreenshot(locator, 'import-survey')
    await page.getByRole('button', { name: 'Cancel' }).click()

    // TERMS
    await page.locator('#list').getByText('Terms', { exact: true, }).click()
    console.info(`Capturing terms`)
    await context
      .setPath('../terms')
      .setName('terms')
      .screenshot(true)

    await page.getByRole('switch', { name: 'toggle advanced mode' }).uncheck()
    await page.waitForTimeout(50)
  })
})
