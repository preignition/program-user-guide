import { Locator, Page } from '@playwright/test'

type ScreenShotType = {
  page: Page,
  locator: Locator,
  outputPath: string,
  padding?: number,
  outlineStyle: {
    outline: string,
    outlineOffset: string,
  }
}
/**
 * Highlights an element and takes a cropped screenshot with surrounding context.
 *
 * @param page The Playwright page object
 * @param locator The Playwright locator for the element to highlight
 * @param outputPath Where to save the image
 * @param padding The amount of context (in pixels) to include around the element
  */
export async function takeAnnotatedScreenshot(
  { page,
    locator,
    outputPath,
    padding = 50,
    outlineStyle = { outline: '4px solid #bc004b', outlineOffset: '4px' }
  }: ScreenShotType
) {
  // 1. Inject CSS to highlight the element (e.g., a thick red border)
  await locator.evaluate((node, outlineStyle) => {
    // Save original styles if you need to revert them later
    node.dataset.originalOutline = node.style.outline
    node.dataset.originalOutlineOffset = node.style.outlineOffset
    // Apply the highlight
    node.style.outline = outlineStyle.outline
    node.style.outlineOffset = outlineStyle.outlineOffset
  }, outlineStyle)

  // Wait a brief moment for styles to paint
  await page.waitForTimeout(100)

  // 2. Get the exact bounding box of the element
  const box = await locator.boundingBox()
  if (!box) throw new Error('Element not visible, cannot take screenshot')

  // 3. Take a screenshot cropped to the element + padding
  await page.screenshot({
    path: outputPath,
    clip: {
      x: Math.max(0, box.x - padding),
      y: Math.max(0, box.y - padding),
      width: box.width + (padding * 2),
      height: box.height + (padding * 2)
    }
  })

  // 4. (Optional) Revert the styling so the test can continue cleanly
  await locator.evaluate((node) => {
    node.style.outline = node.dataset.originalOutline || ''
    node.style.outlineOffset = node.dataset.originalOutlineOffset || ''
  })
}

