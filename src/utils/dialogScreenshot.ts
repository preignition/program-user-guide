import type { Locator, Page } from '@playwright/test'

const DEFAULT_VIEWPORT = { width: 1600, height: 1080 }

/**
 * Material caps dialogs at 560px, which hides most of the export options behind
 * an inner scroll. Grow the dialog and the viewport so one screenshot documents
 * every field, then restore the viewport for the following steps.
 */
export async function growDialogForScreenshot(page: Page, dialog: Locator): Promise<void> {
  await page.setViewportSize({ width: 1600, height: 1800 })
  await dialog.evaluate((element) => {
    const host = (element.getRootNode() as ShadowRoot).host as HTMLElement | undefined
    if (!host) return
    host.style.maxHeight = 'none'
    host.style.height = 'fit-content'
  })
  await page.waitForTimeout(300)
}

export async function restoreDialogAfterScreenshot(page: Page, dialog: Locator): Promise<void> {
  await dialog.evaluate((element) => {
    const host = (element.getRootNode() as ShadowRoot).host as HTMLElement | undefined
    if (!host) return
    host.style.removeProperty('max-height')
    host.style.removeProperty('height')
  })
  await page.setViewportSize(DEFAULT_VIEWPORT)
  await page.waitForTimeout(300)
}
