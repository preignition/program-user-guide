import { Locator, test } from '@playwright/test'
import { Context } from '../Context.ts'
import { ClipT } from '../types.ts'
import { pushState } from '../utils/historyState.ts'
import { initializePage } from '../utils/initializePage.ts'

const port = process.env.PLAYWRIGHT_PORT || '7174'
const baseUrl = `http://localhost:${port}`
const customerId = 'admin'
const teamId = 'KKofRlUU2yQwyvhCJmPU'
const referenceRoot = 'docs/app/customer/reference'
let locator: Locator

test.describe('Customer App Reference', () => {

  test('Customer', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    context
      .setPath('customer')
    await initializePage(page, baseUrl, `customer/${customerId}/portal/profile`)
    await page.waitForTimeout(1000);

    // menu
    (await context.addArea('menu', menu)
      .setName('menu')
      .screenshot()
    ).removeArea('menu')

    // add page content
    context.addArea('content', pageContent)

    // profile 
    await pushState(page, 'profile')
    await context
      .setName('profile')
      .screenshot()

    // subscription 
    await pushState(page, 'subscription')
    await page.waitForTimeout(1000)
    await context
      .setName('subscription')
      .screenshot()

    // members 
    await pushState(page, 'members')
    await page.waitForTimeout(1000)
    await context
      .setName('members')
      .screenshot()

    // team 
    await pushState(page, 'team')
    await page.waitForTimeout(1000)
    await context
      .setName('team')
      .screenshot()

    // theme 
    await pushState(page, 'theme')
    await page.waitForTimeout(1000)
    await context
      .setName('theme')
      .screenshot()

    // set color
    locator = page.getByRole('button', { name: 'edit' })
    await locator.click()
    locator = page.locator('lapp-filled-field').filter({ hasText: 'palette HCT Color Picker Hex Color Hue Chroma Tone Cancel Apply Seed Color Seed' }).locator('#swatch-anchor')
    await locator.click()
    await page.waitForTimeout(50)
    await context.setName('theme-color').screenshot()
    locator = page.locator('.menu.open > .items > .item-padding')
    await page.waitForTimeout(50)
    context.setName('') // do not store under its own folder
    await context.annotatedScreenshot(locator, 'theme-color-picker', 2)

    // storagelocation 
    await pushState(page, 'storage-location')
    await page.waitForTimeout(1000)
    await context
      .setName('storage-location')
      .screenshot()

    // referral 
    await pushState(page, 'referral')
    await page.waitForTimeout(1000)
    await context
      .setName('referral')
      .screenshot()

    // apps -- only owner
    // await pushState(page, 'apps')
    // await page.waitForTimeout(1000)
    // await context
    //   .setName('apps')
    //   .screenshot()

    // danger -- only owner
    // await pushState(page, 'danger')
    // await page.waitForTimeout(1000)
    // await context
    //   .setName('danger')
    //   .screenshot()


  })

  test('Team', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    context
      .setPath('team')
    await initializePage(page, baseUrl, `customer/${teamId}/team/profile`)
    await page.waitForTimeout(1000);

    // menu
    (await context.addArea('menu', menu)
      .setName('menu')
      .screenshot()
    ).removeArea('menu')

    // add page content
    context.addArea('content', pageContent)

    //profile
    await pushState(page, 'profile')
    await context
      .setName('profile')
      .screenshot()

    //presentation
    await pushState(page, 'presentation')
    await page.waitForTimeout(1000)
    await context
      .setName('presentation')
      .screenshot()

    //members
    await pushState(page, 'members')
    await page.waitForTimeout(2000)
    await context
      .setName('members')
      .screenshot()

    //communication
    await pushState(page, 'communication')
    await page.waitForTimeout(1000)
    await context
      .setName('communication')
      .screenshot()

    //channel
    await pushState(page, 'channel')
    await page.waitForTimeout(1000)
    await context
      .setName('channel')
      .screenshot()

    //app-settings


    //danger
    await pushState(page, 'danger')
    await page.waitForTimeout(1000)
    await context
      .setName('danger')
      .screenshot()

  })

})



const menu: ClipT = {
  x: 0,
  y: 64,
  width: 256,
  height: 660,
}

// full content without menu
const pageContent: ClipT = {
  x: 292,
  y: 84,
  height: 976,
  width: 1272,
}

