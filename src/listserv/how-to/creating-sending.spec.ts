import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const mainPath = 'docs/app/listserv/how-to'

let locator: Locator

test.describe('Listserv How-To: Creating & Sending Broadcasts', () => {

  test('How to create a new broadcast', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('creating-a-broadcast')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: View the broadcasts list
    locator = page.locator('listserv-admin-broadcast')
    await context.annotatedScreenshot(locator, 'step-1-broadcasts-list')

    // Step 2: Click to create a new broadcast
    locator = page.getByRole('button', { name: 'New Broadcast' })
    await context.annotatedScreenshot(locator, 'step-2-click-new-broadcast')
    await locator.click()
    await page.waitForTimeout(500)

    // Step 3: Fill in broadcast details (subject, body, language)
    locator = page.locator('listserv-broadcast-detail')
    await context.annotatedScreenshot(locator, 'step-3-broadcast-editor')

    // Step 4: Select primary language for the broadcast
    locator = page.getByRole('combobox', { name: 'Primary Language' })
    await context.annotatedScreenshot(locator, 'step-4-select-primary-language')
  })

  test('How to use email templates', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('using-email-templates')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: Start creating a new broadcast to see template options
    locator = page.getByRole('button', { name: 'New Broadcast' })
    await context.annotatedScreenshot(locator, 'step-1-click-new-broadcast')
    await locator.click()
    await page.waitForTimeout(500)

    // Step 2: Select a template from the broadcast editor
    locator = page.getByRole('combobox', { name: 'Template' })
    await context.annotatedScreenshot(locator, 'step-2-select-template')

    // Step 3: View the rich text editor with template content
    locator = page.locator('listserv-broadcast-detail')
    await context.annotatedScreenshot(locator, 'step-3-template-content')
  })

  test('How to manage attachments on a broadcast', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('managing-attachments')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/broadcast`)
    await page.waitForTimeout(500)

    // Step 1: Open a broadcast in edit mode
    locator = page.getByRole('button', { name: 'New Broadcast' })
    await context.annotatedScreenshot(locator, 'step-1-click-new-broadcast')
    await locator.click()
    await page.waitForTimeout(500)

    // Step 2: Locate the attachment section in the broadcast editor
    locator = page.locator('listserv-broadcast-detail')
    await context.annotatedScreenshot(locator, 'step-2-broadcast-editor-with-attachments')

    // Step 3: Add an attachment button
    locator = page.getByRole('button', { name: 'Attach' }).first()
    await context.annotatedScreenshot(locator, 'step-3-add-attachment-button')
  })
})
