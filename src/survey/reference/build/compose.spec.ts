import { test } from '@playwright/test'
import { Context } from '../../../Context.ts'
import { initializePage } from '../../../utils/initializePage.ts'
import { takeScreenshotAllModes } from '../../../utils/takeScreenshotAllModes.ts'
import { baseUrl, fabBar, pageContent, referenceRoot, suffix, treeGrid, treeView } from '../constants.ts'

test.describe('Survey Reference - Compose', () => {

  test('Compose and Items', async ({ page }) => {
    const context = new Context(referenceRoot + '/build', page)
    await initializePage(page, baseUrl, suffix)
    await page.waitForTimeout(2000)

    // COMPOSE
    console.info(`Capturing compose`);
    (await context
      .setPath('compose')
      .setName('compose')
      .addArea('modes', fabBar)
      .addArea('grid', treeGrid)
      .screenshot()
    ).removeArea('modes').removeArea('grid')


    context
      .addArea('content', pageContent)
      .addArea('grid', treeGrid, true)
      .addArea('view', treeView, true)


    // INFO PAGE
    await page.getByText('Introduction Page').first().click()
    console.info(`Capturing page intro`)
    await context
      .setName('intro')
      .setPath('.')
      .screenshot()

    await page.getByText('intro 1').first().click()
    console.info(`Capturing page intro 1`)
    await context
      .setName('intro-item')
      .screenshot()

    // FORM
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Form' }).first().click()
    console.info(`Capturing form`)
    await context
      .setPath('.')
      .setName('form')
      .screenshot()

    // PAGE
    await page.getByText('Content Page for documentation').click()
    console.info(`Capturing page intro`)
    await context
      .setPath('.')
      .setName('page')
      .screenshot()

    // SECTION
    await page.getByText('text-based fields').click()
    console.info(`Capturing section`)
    await context
      .setPath('.')
      .setName('section')
      .screenshot()

    // QUESTION
    await page.getByText('Text field').click()
    console.info(`Capturing question`)
    await context
      .setPath('.')
      .setName('question')
      .screenshot()
    await takeScreenshotAllModes(context)

    context
      .setName('text-field')

    await page.getByText('Text area field').click()
    await context
      .setName('text-area')
      .screenshot(true)


    await page.getByText('text-based fields').click()
    await page.waitForTimeout(50)
    await page.getByText('choice-based fields').click()

    await page.getByText('Radio group').click()
    console.info(`Capturing choice-based fields`)
    await context
      .setName('radio-group')
      .screenshot(true)

    await page.getByText('Checkbox group').first().click()
    await context
      .setName('checkbox-group')
      .screenshot(true)

    await page.getByText('Dropdown').click()
    await context
      .setName('dropdown')
      .screenshot(true)

    await page.getByText('Rating').click()
    await context
      .setName('rating')
      .screenshot(true)

    await page.getByText('Ranking').click()
    await context
      .setName('ranking')
      .screenshot(true)

    await page.getByText('choice-based fields').click()
    await page.waitForTimeout(50)
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Boolean fields' }).first().click()

    await page.getByText('Checkbox field').click()
    console.info(`Capturing boolean fields`)
    await context
      .setName('checkbox')
      .screenshot(true)

    await page.getByText('Switch field').click()
    await context
      .setName('switch')
      .screenshot(true)

    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Boolean fields' }).first().click()
    await page.waitForTimeout(50)
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Media Based Fields' }).first().click()

    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'File Upload field' }).click()
    console.info(`Capturing media based fields`)
    await context
      .setName('media')
      .screenshot(true)
  })
})
