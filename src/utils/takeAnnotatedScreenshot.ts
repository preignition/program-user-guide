import { ElementHandle, Locator, Page } from '@playwright/test'
import { saveScreenshotIfChanged } from "./conditionalScreenshot.ts"

type ScreenShotType = {
  page: Page,
  locator: Locator,
  outputPath: string,
  padding?: number,
  paddingX?: number,
  paddingY?: number,
  outlineStyle: {
    outline: string,
    outlineOffset: string,
  },
  maxHeight?: number,
  /**
   * CSS selector for an ancestor (or the element itself) to highlight instead
   * of the locator element, e.g. `'md-list-item'` for a drawer menu row. The
   * search climbs across shadow roots, so a locator pointing inside a
   * component's shadow DOM still finds the surrounding row.
   */
  highlightAncestor?: string
}
/**
 * Highlights an element and takes a cropped screenshot with surrounding context.
 *
 * @param page The Playwright page object
 * @param locator The Playwright locator for the element to highlight
 * @param outputPath Where to save the image
 * @param padding The amount of context (in pixels) to include around the element
 * @param paddingX The amount of horizontal context (in pixels) to include around the element
 * @param paddingY The amount of vertical context (in pixels) to include around the element
  */
export async function takeAnnotatedScreenshot(
  { page,
    locator,
    outputPath,
    padding = 50,
    paddingX,
    paddingY = 30,
    outlineStyle = { outline: '4px solid #bc004b', outlineOffset: '4px' },
    maxHeight = Infinity,
    highlightAncestor
  }: ScreenShotType
) {
  // 1. Resolve the element to highlight (and crop around) and inject CSS to
  // highlight it (e.g., a thick red border)
  const target = await locator.evaluateHandle((node, { outlineStyle, highlightAncestor }) => {
    const findTarget = (element: Element): HTMLElement => {
      // Keep the legacy behaviour of highlighting the host of a slotted button.
      const host = (element.parentNode as ShadowRoot)?.host as HTMLElement
      if (!highlightAncestor) {
        return element instanceof HTMLButtonElement && host
          ? host
          : element as HTMLElement
      }

      let current: Element | null = element
      while (current) {
        if (current.matches(highlightAncestor)) {
          return current as HTMLElement
        }
        if (current.parentElement) {
          current = current.parentElement
        } else {
          const root = current.getRootNode()
          current = root instanceof ShadowRoot ? root.host : null
        }
      }

      return element instanceof HTMLButtonElement && host
        ? host
        : element as HTMLElement
    }

    const targetNode = findTarget(node)

    // Save original styles if you need to revert them later
    targetNode.dataset.originalOutline = targetNode.style.outline
    targetNode.dataset.originalOutlineOffset = targetNode.style.outlineOffset
    // Apply the highlight
    targetNode.style.outline = outlineStyle.outline
    targetNode.style.outlineOffset = outlineStyle.outlineOffset

    return targetNode
  }, { outlineStyle, highlightAncestor }) as ElementHandle<HTMLElement>

  // Wait a brief moment for styles to paint
  await page.waitForTimeout(100)

  // 2. Get the exact bounding box of the element. When highlighting an
  // ancestor (e.g. a menu row), crop around that ancestor; otherwise keep
  // cropping around the locator element itself.
  const box = highlightAncestor
    ? await target.boundingBox()
    : await locator.boundingBox()
  if (!box) throw new Error('Element not visible, cannot take screenshot')

  const viewportSize = page.viewportSize() || { width: 1920, height: 1080 }

  const pX = paddingX ?? padding
  const pY = paddingY

  const startX = Math.max(0, box.x - pX)
  const startY = Math.max(0, box.y - pY)
  const height = Math.min(box.height, maxHeight)
  const endX = Math.min(viewportSize.width, box.x + box.width + pX)
  const endY = Math.min(viewportSize.height, box.y + height + pY)

  // 3. Take a screenshot cropped to the element + padding into a buffer
  const buffer = await page.screenshot({
    clip: {
      x: startX,
      y: startY,
      width: endX - startX,
      height: endY - startY
    }
  })

  // 4. Save conditionally
  saveScreenshotIfChanged(outputPath, buffer)

  // 4. (Optional) Revert the styling so the test can continue cleanly
  await target.evaluate((targetNode) => {
    targetNode.style.outline = targetNode.dataset.originalOutline || ''
    targetNode.style.outlineOffset = targetNode.dataset.originalOutlineOffset || ''
  })
}
