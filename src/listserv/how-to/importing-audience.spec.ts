import { expect, test, type Page } from '@playwright/test'
import { getAuth } from 'firebase-admin/auth'
import { Timestamp } from 'firebase-admin/firestore'
import { Context } from '../../Context.ts'
import { saveScreenshotIfChanged } from '../../utils/conditionalScreenshot.ts'
import { initializeFirebaseApp } from '../../utils/initialize.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath } from '../reference/constants.ts'

const db = initializeFirebaseApp().db

/** Assets live beside the guide under `assets/importing-a-team-audience`. */
const assetPath = 'docs/app/listserv/how-to'
const assetName = 'importing-a-team-audience'

/** The channel the guide imports into; the same channel the listserv specs use. */
const channelId = 'listserv-playwright'
const teamId = 'KKofRlUU2yQwyvhCJmPU'
const screenshotUserEmail = process.env.PLAYWRIGHT_EMAIL ?? 'playwright@preignition.org'

/** The audience the guide imports; the id keeps re-runs on the same document. */
const audienceId = 'docs-import-demo'
const audienceName = 'Accessibility partners'

/** Addresses the import creates on its first run and a reset removes. */
const createdEmails = ['ada@partner.example', 'grace@partner.example', 'linus@partner.example']

/** A recipient that already has an account: the preview reports it as Linked. */
const linkedEmail = 'playwright-a11y@preignition.org'

/**
 * Capture the viewport directly. `Context.screenshot` toggles the advanced
 * mode switch, which a modal dialog's scrim blocks — use this for dialogs.
 */
const capture = async (page: Page, name: string) =>
  saveScreenshotIfChanged(
    `${assetPath}/assets/${assetName}/${name}-auto.png`,
    await page.screenshot(),
  )

/**
 * Put the audience, its recipients and the two existing subscribers back into
 * the state the guide describes, and clear the previous run's import so the
 * preview counts and the history stay stable across re-runs.
 */
const resetFixture = async (actorUid: string) => {
  const access = {
    status: 'private',
    user: { owner: actorUid },
    userById: { [actorUid]: ['owner'] },
  }
  const timestamp = Timestamp.fromDate(new Date('2026-11-02T10:00:00Z'))

  const recipients = [
    { id: 'rec-ada', email: 'ada@partner.example', name: 'Ada' },
    { id: 'rec-grace', email: 'grace@partner.example', name: 'Grace' },
    { id: 'rec-linus', email: 'linus@partner.example', name: 'Linus' },
    { id: 'rec-mary', email: 'mary@partner.example', name: 'Mary' },
    { id: 'rec-ravi', email: 'ravi@partner.example', name: 'Ravi' },
    { id: 'rec-linked', email: linkedEmail },
    { id: 'rec-missing', email: '' },
    { id: 'rec-malformed', email: 'not-an-email' },
  ]

  await db.doc(`app/customer/team/${teamId}/audience/${audienceId}`).set(
    {
      createdAt: timestamp,
      updatedAt: timestamp,
      name: audienceName,
      description: 'Partner contacts used for the listserv import documentation',
      status: 'active',
      recipientCount: recipients.length,
      createdBy: actorUid,
    },
    { merge: true },
  )

  for (const recipient of recipients) {
    await db.doc(`app/customer/team/${teamId}/recipient/${recipient.id}`).set(
      {
        createdAt: timestamp,
        updatedAt: timestamp,
        email: recipient.email,
        ...(recipient.name ? { name: recipient.name } : {}),
        status: 'active',
        audienceIds: [audienceId],
        createdBy: actorUid,
      },
      { merge: true },
    )
  }

  const subscriber = (email: string, name: string, status: 'active' | 'unsubscribed') => ({
    name,
    metaData: { timestamp, deleted: false, access, type: 'subscriber' },
    ref: { user: actorUid, channelId, team: teamId },
    email,
    languages: ['en'],
    status,
    digestMode: false,
    vacationMode: false,
    bounceCount: 0,
  })
  await db
    .doc('app/listserv/subscriber/docs-demo-mary')
    .set(subscriber('mary@partner.example', 'Mary Partner', 'active'), { merge: true })
  await db
    .doc('app/listserv/subscriber/docs-demo-ravi')
    .set(subscriber('ravi@partner.example', 'Ravi Partner', 'unsubscribed'), { merge: true })

  const subscribers = await db
    .collection('app/listserv/subscriber')
    .where('ref.channelId', '==', channelId)
    .get()
  const importedEmails = new Set([...createdEmails, linkedEmail])
  for (const doc of subscribers.docs) {
    if (importedEmails.has(doc.data().email)) await doc.ref.delete()
  }

  const guards = await db
    .collection('app/listserv/subscriberEmail')
    .where('ref.channelId', '==', channelId)
    .get()
  await Promise.all(guards.docs.map((doc) => doc.ref.delete()))

  const imports = await db
    .collection('app/listserv/subscriberImport')
    .where('ref.channelId', '==', channelId)
    .get()
  await Promise.all(imports.docs.map((doc) => doc.ref.delete()))

  // The import creates Auth users for the created addresses. Removing them
  // keeps the preview on "New" instead of turning them into "Linked".
  for (const email of createdEmails) {
    const user = await getAuth()
      .getUserByEmail(email)
      .catch(() => undefined)
    if (user) await getAuth().deleteUser(user.uid)
  }
}

test.describe('Listserv How-To: Importing a team audience', () => {
  test('Import a team audience, preview, warranty and history', async ({ page }) => {
    test.setTimeout(180_000)
    const context = new Context(assetPath, page).setName(assetName)
    const actor = await getAuth().getUserByEmail(screenshotUserEmail)
    await resetFixture(actor.uid)

    await initializePage(page, baseUrl, `${listservAppPath}/settings/import`)
    await expect(page.getByRole('button', { name: 'Import a team audience' })).toBeVisible()
    await expect(page.getByRole('region', { name: 'Import history' })).toBeVisible()

    // ## 1. The import lives in Channel Settings → Audience Import
    await capture(page, 'step-1-open-audience-import')

    // ## 2. Pick the team audience
    await page.getByRole('button', { name: 'Import a team audience' }).click()
    await expect(page.getByRole('dialog', { name: 'Import a team audience' })).toBeVisible()
    // Scope to the dialog element, not the `dialog` role node: the content is
    // slotted into it, so it is not a DOM descendant of the inner md-dialog.
    const dialog = page.locator('listserv-audience-import-dialog')
    const audienceRow = dialog.locator('md-list-item').filter({ hasText: audienceName })
    await expect(audienceRow).toBeVisible({ timeout: 30_000 })
    await capture(page, 'step-2-pick-an-audience')

    // ## 3. The preview counts, with nothing written yet
    await audienceRow.click()
    await expect(dialog.getByText('unique recipients in this audience')).toBeVisible()
    await expect(dialog.getByText('Invalid', { exact: true })).toBeVisible()
    await capture(page, 'step-3-preview-the-outcome')

    // ## 4. The warranty gates the import
    const warranty = dialog.getByRole('checkbox')
    await expect(dialog.getByRole('button', { name: /^Import \d+ recipients$/ })).toBeDisabled()
    await context.annotatedScreenshot(
      dialog.locator('lapp-checkbox-field'),
      'step-4-accept-the-warranty',
      24,
    )
    await warranty.click()
    const importButton = dialog.getByRole('button', { name: /^Import \d+ recipients$/ })
    await expect(importButton).toBeEnabled()

    // ## 5. Run the import and read the result
    await importButton.click()
    await expect(dialog.getByRole('heading', { name: 'Import completed' })).toBeVisible({
      timeout: 120_000,
    })
    await expect(dialog.getByRole('button', { name: 'Download error report' })).toBeVisible()
    await capture(page, 'step-5-import-result')

    // ## 6. The import history on the same page
    await dialog.getByRole('button', { name: 'Done' }).click()
    const historyAudience = page.getByRole('gridcell', { name: audienceName })
    await expect(historyAudience).toBeVisible({ timeout: 30_000 })
    await context.annotatedScreenshot(
      page.getByRole('treegrid', { name: 'grid for subscriberImport' }),
      'step-6-import-history',
      24,
    )

    // ## 7. Expand a row for the record's details
    await historyAudience.click()
    await expect(
      page.getByText('Per-row errors are not stored', { exact: false }).first(),
    ).toBeVisible()
    await context.annotatedScreenshot(
      page.getByRole('treegrid', { name: 'grid for subscriberImport' }),
      'step-7-import-history-details',
      24,
    )
  })
})
