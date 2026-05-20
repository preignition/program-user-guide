import { test } from '@playwright/test'
import { Context } from '../../../Context.ts'
import { initializePage } from '../../../utils/initializePage.ts'
import { baseUrl, referenceRoot, fabBar, dialog, toolbar, menu, suffix } from '../constants.ts'

test.describe('Survey Reference - Build Index', () => {

  test('Create Survey', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    await page.setViewportSize({ width: 1600, height: 1080 })
    await page.goto(baseUrl)
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'Survey', exact: true }).click()
    await page.waitForTimeout(1000)

    // WORKSPACE
    await context
      .setName('workspace')
      .setArea([{ name: 'fab', clip: fabBar }])
      .screenshot()
    context.removeArea('fab')

    // CREATE SURVEY
    await page.getByRole('button', { name: 'New Survey' }).click()
    await page.getByRole('textbox', { name: 'name', exact: true }).click()
    await page.getByRole('textbox', { name: 'name', exact: true }).fill('test')
    await page.getByRole('textbox', { name: 'name', exact: true }).press('Tab')
    await page.getByRole('textbox', { name: 'description', exact: true }).fill('test')
    await page.getByRole('textbox', { name: 'description', exact: true }).click()
    await page.getByRole('textbox', { name: 'description', exact: true }).fill('test description')
    await context
      .setName('create-survey')
      .setArea([{ name: 'dialog', clip: dialog }])
      .screenshot()

    await page.getByRole('button', { name: 'Form', exact: true }).click()
    await page.locator('#form-create > .layout > lapp-text-field > .text-field > .field > .input-wrapper').first().click()
    await page.getByRole('textbox', { name: 'name', exact: true }).fill('Form 1')
    await page.getByRole('textbox', { name: 'name', exact: true }).press('Tab')
    await page.getByRole('textbox', { name: 'description', exact: true }).fill('Form description')
    await context
      .setName('create-form')
      .screenshot()
    await page.getByRole('button', { name: 'Summary' }).click()

    // WORKSPACE
    await context
      .setName('create-summary')
      .screenshot()

    context.removeArea('dialog')
    await page.getByRole('button', { name: 'Summary' }).press('Escape')
  })

  test('App and Build', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    await initializePage(page, baseUrl, suffix)
    await page.waitForTimeout(2000)

    // APP
    await context
      .setName('app')
      .setArea([{ name: 'toolbar', clip: toolbar }])
      .screenshot()
    context.removeArea('toolbar')
      .addArea('menu', menu)

    // BUILD
    await page.getByText('Compose').click();
    (await context
      .setPath('build')
      .setName('build')
      .addArea('menu', menu)
      .screenshot()
    ).removeArea('menu')
  })
})
