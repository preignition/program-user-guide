import { Locator, Page } from "@playwright/test"
import path from "path"
import { AreaT, ClipT, ContextT, OutlineStyleT, ScreenshotOptionsT } from "./types.ts"
import { saveScreenshotIfChanged } from "./utils/conditionalScreenshot.ts"
import { takeAnnotatedScreenshot } from "./utils/takeAnnotatedScreenshot.ts"

/**
 * Context class to manage screenshot contexts, including page, areas of interest, and outline styles.
 * Provides methods to set up the context and take annotated screenshots of specific elements or areas on the page.
 * Example usage:
 * const context = new Context('path/to/screenshots', page)
 *   .setName('my-test')
 *   .addArea('header', { x: 0, y: 0, width: 800, height: 100 })
 *   .addArea('footer', { x: 0, y: 500, width: 800, height: 100 }, true)
 *   .setOutlineStyle({ outline: '2px dashed blue', outlineOffset: '2px' })
 * await context.screenshot()
 * await context.annotatedScreenshot(page.locator('#main-content'), 'main-content')
 *
 * This will take screenshots of the entire page and the specified areas, as well as an annotated screenshot of the main content element.
 */
export class Context implements ContextT {
  name!: string
  path: string
  page!: Page
  area: AreaT[] = []
  outlineStyle: OutlineStyleT = {
    outline: '4px solid #bc004b',
    outlineOffset: '4px',
  }
  /**
   * Initializes a new Context instance with the given path and optional page.
   * @param path The base path where screenshots will be saved
   * @param page Optional Playwright Page object to associate with this context
   */
  constructor(
    path: string,
    page?: Page
  ) {
    this.path = path
    if (page) {
      this.setPage(page)
    }
  }

  setArea(area: AreaT[]) {
    this.area = area
    return this
  }

  addArea(name: string, clip?: ClipT, advanced?: boolean) {
    this.area.push({ name, clip, advanced })
    return this
  }
  removeArea(name: string) {
    this.area = this.area.filter(a => a.name !== name)
    return this
  }

  setName(name: string) {
    this.name = name
    return this
  }

  setPath(segment: string) {
    this.path = path.join(this.path, segment)
    return this
  }
  resetPath(path: string) {
    this.path = path
    return this
  }

  setPage(page: Page) {
    this.page = page
    return this
  }

  setOutlineStyle(outlineStyle: OutlineStyleT) {
    this.outlineStyle = outlineStyle
    return this
  }

  /**
   * Takes a screenshot of the given locator, highlighting it with a red border and including some padding around it for context.
   *
   * @param locator The Playwright locator for the element to screenshot
   * @param name A name for the screenshot file (without extension)
   * @param padding Optional padding in pixels to include around the element (default: 100)
   * @param maxHeight Optional maximum height for the screenshot (default: Infinity)
   * @param options Optional outline override or ancestor to highlight
   */
  async annotatedScreenshot(
    locator: Locator,
    name: string,
    padding: number = 100,
    maxHeight: number = Infinity,
    { outlineStyle = this.outlineStyle, highlightAncestor }: ScreenshotOptionsT = {}
  ) {
    const { page } = this
    await locator.scrollIntoViewIfNeeded()
    const outputPath = `${this.path}/assets/${this.name ? this.name + '/' : ''}${name}.png`

    return await takeAnnotatedScreenshot({
      page,
      locator,
      outputPath,
      padding,
      outlineStyle,
      maxHeight,
      highlightAncestor
    })
  }

  /**
   * Takes a screenshot of a drawer menu item or context-menu entry, highlighting
   * the whole row.
   *
   * A `getByText` (or `getByRole('listitem')`) locator resolves inside the row,
   * so highlighting it directly only outlines the text (and the menu clips the
   * edges, leaving a stray line). Highlight the enclosing `md-list-item` instead
   * so the outline rings the whole row. The menu clips anything drawn outside
   * the row, so the outline is inset.
   *
   * @param locator The Playwright locator for the menu label (or its row)
   * @param name A name for the screenshot file (without extension)
   * @param padding Optional padding in pixels to include around the row (default: 20)
   */
  async annotatedMenuItemScreenshot(locator: Locator, name: string, padding: number = 20) {
    return this.annotatedScreenshot(locator, name, padding, Infinity, {
      outlineStyle: { ...this.outlineStyle, outlineOffset: '-4px' },
      highlightAncestor: 'md-list-item',
    })
  }



  async screenshot(advanced?: boolean, delay: number = 50) {
    const name = this.name ? this.name + '-' : ''
    const advancedModeSwitch = (await this.page.getByRole('switch', { name: 'toggle advanced mode' }).isVisible())
      ? this.page.getByRole('switch', { name: 'toggle advanced mode' })
      : undefined
    const isAdvancedMode = await advancedModeSwitch?.isChecked() || false
    let pageIsLargerThanViewport = await this.page.evaluate(() => {
      return document.body.scrollHeight > window.innerHeight || document.body.scrollWidth > window.innerWidth
    })
    await advancedModeSwitch?.uncheck()
    await this.page.waitForTimeout(delay)

    await Promise.all([
      this.page.screenshot().then(b => saveScreenshotIfChanged(`${this.path}/assets/${name}auto.png`, b)),
      pageIsLargerThanViewport &&
      this.page.screenshot({ fullPage: true }).then(b => saveScreenshotIfChanged(`${this.path}/assets/${name}full-auto.png`, b)),
      ...this.area.map(a => this.page.screenshot({ clip: a.clip }).then(b => saveScreenshotIfChanged(`${this.path}/assets/${name}${a.name}-auto.png`, b)))
    ])

    if (advanced) {
      // click advanced
      await advancedModeSwitch?.check()
      await this.page.waitForTimeout(50)
      pageIsLargerThanViewport = await this.page.evaluate(() => {
        return document.body.scrollHeight > window.innerHeight || document.body.scrollWidth > window.innerWidth
      })
      await Promise.all([
        this.page.screenshot().then(b => saveScreenshotIfChanged(`${this.path}/assets/${name}advanced-auto.png`, b)),
        pageIsLargerThanViewport &&
        this.page.screenshot({ fullPage: true }).then(b => saveScreenshotIfChanged(`${this.path}/assets/${name}advanced-full-auto.png`, b)),
        ...this.area
          .filter(a => a.advanced === true)
          .map(a => this.page.screenshot({ clip: a.clip }).then(b => saveScreenshotIfChanged(`${this.path}/assets/${name}${a.name}-advanced-auto.png`, b)))
      ])

    }
    if (isAdvancedMode) {
      await advancedModeSwitch?.check()
    } else {
      await advancedModeSwitch?.uncheck()

    }
    await this.page.waitForTimeout(50)
    return this
  }
} 