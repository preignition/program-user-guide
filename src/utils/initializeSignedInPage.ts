import { type Page } from '@playwright/test'
import { pushState } from './historyState.ts'

/**
 * Initializes the page and waits for the playwright auto-login before pushing
 * the target path, so a slow auth round-trip cannot land on the login screen.
 */
export async function initializeSignedInPage(page: Page, root: string, path?: string) {
  await page.setViewportSize({ width: 1600, height: 1080 })
  const signedIn = page
    .waitForEvent('console', {
      predicate: (message) => /signed in as/i.test(message.text()),
      timeout: 15_000,
    })
    .catch(() => undefined)
  await page.goto(root)
  await signedIn
  await pushState(page, path || '')
}
