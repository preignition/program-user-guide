import { Locator, Page } from "@playwright/test"
import path from "path"
import { AreaT, ClipT, ContextT, OutlineStyleT } from "./types.ts"
import { takeAnnotatedScreenshot } from "./utils/takeAnnotatedScreenshot.ts"

export class Context implements ContextT {
  name!: string
  path: string
  page!: Page
  area: AreaT[] = []
  outlineStyle: OutlineStyleT = {
    outline: '4px solid #bc004b',
    outlineOffset: '4px',
  }
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
   */
  async annotatedScreenshot(locator: Locator, name: string, padding: number = 100) {
    const { page, outlineStyle } = this
    const outputPath = `${this.path}/assets/${this.name ? this.name + '/' : ''}${name}.png`
    return await takeAnnotatedScreenshot({
      page,
      locator,
      outputPath,
      padding,
      outlineStyle
    })
  }



  async screenshot(advanced?: boolean) {
    const name = this.name
    const advancedModeSwitch = (await this.page.getByRole('switch', { name: 'toggle advanced mode' }).isVisible())
      ? this.page.getByRole('switch', { name: 'toggle advanced mode' })
      : undefined
    const isAdvancedMode = await advancedModeSwitch?.isChecked() || false
    let pageIsLargerThanViewport = await this.page.evaluate(() => {
      return document.body.scrollHeight > window.innerHeight || document.body.scrollWidth > window.innerWidth
    })
    // await this.page.waitForTimeout(50);
    await advancedModeSwitch?.uncheck()
    await this.page.waitForTimeout(50)

    await Promise.all(

      [this.page.screenshot({
        path: `${this.path}/assets/${name}-auto.png`,
      }),
      pageIsLargerThanViewport &&
      this.page.screenshot({
        path: `${this.path}/assets/${name}-full-auto.png`,
        fullPage: true,
      }),
      this.area.map(a => this.page.screenshot({
        path: `${this.path}/assets/${name}-${a.name}-auto.png`,
        clip: a.clip,
      }))
      ]
    )

    if (advanced) {
      // click advanced
      await advancedModeSwitch?.check()
      await this.page.waitForTimeout(50)
      pageIsLargerThanViewport = await this.page.evaluate(() => {
        return document.body.scrollHeight > window.innerHeight || document.body.scrollWidth > window.innerWidth
      })
      await Promise.all(

        [this.page.screenshot({
          path: `${this.path}/assets/${name}-advanced-auto.png`,
        }),
        pageIsLargerThanViewport &&
        this.page.screenshot({
          path: `${this.path}/assets/${name}-advanced-full-auto.png`,
          fullPage: true,
        }),
        this.area
          .filter(a => a.advanced === true)
          .map(a => this.page.screenshot({
            path: `${this.path}/assets/${name}-${a.name}-advanced-auto.png`,
            clip: a.clip,
          }))
        ]
      )

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