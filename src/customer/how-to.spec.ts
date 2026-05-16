import { Locator, test } from '@playwright/test'
import { Context } from '../Context.ts'
import { initializeFirebaseApp } from '../utils/initialize'
import { initializePage } from '../utils/initializePage.ts'
const db = initializeFirebaseApp().db

const port = '7174'
const baseUrl = `http://localhost:${port}` // playwright team
const root = 'docs/app/customer/how-to'
const customerId = 'admin'


let locator: Locator

test.describe('Customer How-To', async () => {
  test('Create a Theme', async ({ page }) => {
    const context = new Context(root, page)
    context.setName('create-theme')

    await initializePage(page, baseUrl, `customer/${customerId}/portal/theme`)
    await page.waitForTimeout(1000)

    locator = page.locator('md-list-item').filter({ hasText: 'Customize the Look and Feel' }).getByRole('listitem')
    await context.annotatedScreenshot(locator, 'step-1-open-theme-settings')

    // Step 1: Open the theme gallery and click edit
    locator = page.getByRole('button', { name: 'Edit' })
    await context.annotatedScreenshot(locator, 'step-1-edit')
    await locator.click()


    // Step 2: Select a Seed color - the seed color will be used to generate the rest of the theme colors (primary, secondary, tertiary, etc.). 
    // It is the main color that represents your brand, so choose a color that best reflects your brand identity. 
    locator = page.locator('.field > .container').first()
    await context.annotatedScreenshot(locator, 'step-2-seed-color')

    locator = page.locator('lapp-filled-field').filter({ hasText: 'palette HCT Color Picker Hex Color Hue Chroma Tone Cancel Apply Seed Color Seed' }).getByLabel('Color swatch, click to open')
    await locator.click()

    // picker is open
    locator = page.locator('.menu.open > .items > .item-padding')
    await context.annotatedScreenshot(locator, 'step-2-seed-color-picker')
    await page.locator('#entityForm').getByRole('button', { name: 'Cancel' }).click()

    // possibly, modify the contrast settings to ensure the theme is accessible (e.g. for users with visual impairments).
    locator = page.locator('label').filter({ hasText: 'Adjust contrast for color derivation' })
    await context.annotatedScreenshot(locator, 'step-2-contrast-settings')

    // Step 3: Customize your theme (e.g. change primary color, tertiary color)
    // Expand the "Tertiary Colors" section and click on the color swatch to open the color picker.
    locator = page.getByRole('button', { name: 'Tertiary Colors Colors used' })
    await context.annotatedScreenshot(locator, 'step-3-customize-theme')
    await locator.click()

    locator = page.locator('#content-vaadin-details-4 > vaadin-card > div > div > lapp-color-input > .lapp-color-input-field > .field > .container > #swatch-anchor').first()
    await locator.click()

    // adjust chrome
    locator = page.getByRole('slider', { name: 'Chroma slider' })
    await locator.fill('95')
    await context.annotatedScreenshot(locator, 'step-3-chroma-slider')

    // adjust hue
    locator = page.getByRole('slider', { name: 'Hue slider' })
    await locator.fill('15')
    await context.annotatedScreenshot(locator, 'step-3-hue-slider')

    // apply the color
    locator = page.getByRole('button', { name: 'Apply' })
    await context.annotatedScreenshot(locator, 'step-3-apply-color')
    await locator.click()

    // see other colors auto-updated based on the seed color and contrast settings
    locator = page.getByRole('button', { name: 'Surface Colors Colors used' })
    await context.annotatedScreenshot(locator, 'step-3-surface-colors')
    await locator.click()

    locator = page.locator('div').filter({ hasText: 'palette HCT Color Picker Hex Color Hue Chroma Tone Cancel Apply Surface Surface' }).nth(4)
    await context.annotatedScreenshot(locator, 'step-3-surface-colors-expanded')
    await locator.click()

    // Step 4: Activate the theme 

    locator = page.getByText('Active', { exact: true })
    await context.annotatedScreenshot(locator, 'step-4-activate-theme')
    // Step 5: Save - theme will be applied to all users that use objects (for instance, surveys) belonging to the customer.
    locator = page.getByRole('button', { name: 'Save' })
    await context.annotatedScreenshot(locator, 'step-5-save-theme')
  })
  test('Manage Channels', async ({ page }) => {
  })
  test('Create a new Team', async ({ page }) => {
  })
  test('Manage Team Members', async ({ page }) => {
  })
})
