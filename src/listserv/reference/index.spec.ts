import { test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath, pageContent, referenceRoot } from './constants.ts'

function navigate(page: import('@playwright/test').Page, path: string) {
  return page.evaluate((p) => {
    window.history.pushState({}, '', `/${p}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }, path)
}

test.describe('Listserv Reference', () => {

  test('Public Pages', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    await initializePage(page, baseUrl, `${listservAppPath}/broadcast`)
    await page.waitForTimeout(1500)

    // BROADCAST (public archive)
    console.info('Capturing broadcast-archive')
    await context
      .setPath('public')
      .setName('broadcast-archive')
      .screenshot()

    // SUBSCRIBE
    await page.getByRole('link', { name: 'Subscribe' }).click()
    await page.waitForTimeout(500)
    console.info('Capturing subscribe')
    await context
      .setName('subscribe')
      .screenshot()
  })

  test('Admin Pages', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    await initializePage(page, baseUrl, `${listservAppPath}/admin/welcome`)
    await page.waitForTimeout(1000)
    context.setPath('admin')

    // ADMIN WELCOME
    console.info('Capturing admin-welcome')
    await context
      .setName('admin-welcome')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // MODERATION QUEUE
    await navigate(page, `${listservAppPath}/admin/moderation`)
    await page.waitForTimeout(500)
    console.info('Capturing admin-moderation')
    await context
      .setName('admin-moderation')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // BROADCASTS LIST
    await navigate(page, `${listservAppPath}/admin/broadcast`)
    await page.waitForTimeout(500)
    console.info('Capturing admin-broadcasts')
    await context
      .setName('admin-broadcasts')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // SUBSCRIBERS LIST
    await navigate(page, `${listservAppPath}/admin/subscriber`)
    await page.waitForTimeout(500)
    console.info('Capturing admin-subscribers')
    await context
      .setName('admin-subscribers')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')
  })

  test('Settings Pages', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    await initializePage(page, baseUrl, `${listservAppPath}/settings/welcome`)
    await page.waitForTimeout(1000)
    context.setPath('settings')

    // SETTINGS WELCOME
    console.info('Capturing settings-welcome')
    await context
      .setName('settings-welcome')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // USER MANAGEMENT
    await navigate(page, `${listservAppPath}/settings/user`)
    await page.waitForTimeout(500)
    console.info('Capturing settings-user')
    await context
      .setName('settings-user')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // CHANNEL CONFIGURATION
    await navigate(page, `${listservAppPath}/settings/channel`)
    await page.waitForTimeout(500)
    console.info('Capturing settings-channel')
    await context
      .setName('settings-channel')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // ACTIVE LANGUAGES
    await navigate(page, `${listservAppPath}/settings/language`)
    await page.waitForTimeout(500)
    console.info('Capturing settings-language')
    await context
      .setName('settings-language')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // BOUNCE HANDLING
    await navigate(page, `${listservAppPath}/settings/bounce`)
    await page.waitForTimeout(500)
    console.info('Capturing settings-bounce')
    await context
      .setName('settings-bounce')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')
  })
})
