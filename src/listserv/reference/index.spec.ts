import { test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { baseUrl, listservAppPath, pageContent, referenceRoot } from './constants.ts'

test.describe('Listserv Reference', () => {

  test('Public Pages', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    await initializePage(page, baseUrl, `${listservAppPath}/broadcast`)
    await page.waitForTimeout(2500)

    // BROADCAST (public archive)
    console.info('Capturing broadcast-archive')
    await context
      .setPath('public')
      .setName('broadcast-archive')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // SUBSCRIBE
    await page.getByRole('link', { name: 'Subscribe' }).click()
    await page.waitForTimeout(500)
    console.info('Capturing subscribe')
    await context
      .setName('subscribe')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')
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
    await page.getByText('Moderation').first().click()
    await page.waitForTimeout(500)
    console.info('Capturing admin-moderation')
    await context
      .setName('admin-moderation')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // BROADCASTS LIST
    await page.getByText('Broadcasts').first().click()
    await page.waitForTimeout(500)
    console.info('Capturing admin-broadcasts')
    await context
      .setName('admin-broadcasts')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // SUBSCRIBERS LIST
    await page.getByText('Subscribers').first().click()
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
    await page.getByText('User Management').first().click()
    await page.waitForTimeout(500)
    console.info('Capturing settings-user')
    await context
      .setName('settings-user')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // CHANNEL CONFIGURATION
    await page.getByText('Channel Configuration').first().click()
    await page.waitForTimeout(500)
    console.info('Capturing settings-channel')
    await context
      .setName('settings-channel')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // ACTIVE LANGUAGES
    await page.getByText('Active Languages').first().click()
    await page.waitForTimeout(500)
    console.info('Capturing settings-language')
    await context
      .setName('settings-language')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')

    // BOUNCE HANDLING
    await page.getByText('Bounce Handling').first().click()
    await page.waitForTimeout(500)
    console.info('Capturing settings-bounce')
    await context
      .setName('settings-bounce')
      .setArea([{ name: 'content', clip: pageContent }])
      .screenshot()
    context.removeArea('content')
  })
})
