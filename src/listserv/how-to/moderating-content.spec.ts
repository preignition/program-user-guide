import { Locator, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const mainPath = 'docs/app/listserv/how-to'

let locator: Locator

test.describe('Listserv How-To: Moderating Content', () => {

  test('How to review community submissions in the moderation queue', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('moderating-submissions')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/moderation`)
    await page.waitForTimeout(500)

    // Step 1: View the list of pending submissions
    locator = page.locator('listserv-admin-moderation')
    await context.annotatedScreenshot(locator, 'step-1-moderation-queue-list')

    // Step 2: Click on a submission to review it
    const gridCell = page.locator('vaadin-grid-cell-content').filter({ hasText: '' }).first()
    await context.annotatedScreenshot(gridCell, 'step-2-click-submission-to-review')

    // Step 3: View the submission detail with moderation actions
    locator = page.locator('listserv-broadcast-detail')
    await context.annotatedScreenshot(locator, 'step-3-submission-detail-view')

    // Step 4: Locate the moderation action buttons (Approve/Reject)
    locator = page.locator('actor-actions')
    await context.annotatedScreenshot(locator, 'step-4-moderation-actions')
  })

  test('How to approve a submission for broadcast', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('approving-submission')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/moderation`)
    await page.waitForTimeout(500)

    // Step 1: Click on a moderated submission
    locator = page.locator('vaadin-grid-cell-content').first()
    await context.annotatedScreenshot(locator, 'step-1-click-submission')
    await locator.click()
    await page.waitForTimeout(500)

    // Step 2: View the Approve action
    locator = page.getByRole('button', { name: 'Approve' })
    await context.annotatedScreenshot(locator, 'step-2-approve-button')

    // Step 3: View the Reject action
    locator = page.getByRole('button', { name: 'Reject' })
    await context.annotatedScreenshot(locator, 'step-3-reject-button')
  })

  test('How to edit and approve a submission', async ({ page }) => {
    const context = new Context(mainPath, page)
    context.setName('editing-approving-submission')
    await initializePage(page, baseUrl, `${listservAppPath}/admin/moderation`)
    await page.waitForTimeout(500)

    // Step 1: View the moderation queue overview
    locator = page.locator('listserv-admin-moderation')
    await context.annotatedScreenshot(locator, 'step-1-moderation-queue')

    // Step 2: Open a submission to edit before approving
    const gridRow = page.locator('vaadin-grid-cell-content').first()
    await context.annotatedScreenshot(gridRow, 'step-2-select-submission')
  })
})
