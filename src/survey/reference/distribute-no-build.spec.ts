import { expect, test } from '@playwright/test'
import { Context } from '../../Context.ts'
import { initializePage } from '../../utils/initializePage.ts'
import { referenceRoot } from './constants.ts'

// The Distribute page of a survey that was never built: the test link is
// inactive and the build-first warning is shown. The fixture is the
// never-built `Survey Habits and Experience (draft)` in the playwright team
// (port 7173); recreate it by copying the reference survey without building it.
const playwrightBaseUrl = 'http://localhost:7173'
const draftSurveyId = 'ePT1JK7BtJkz3CVYmY2N'

test.describe('Survey Reference - Distribute without a build', () => {
  test('Distribute a survey that has no build', async ({ page }) => {
    const context = new Context(referenceRoot, page)
    await initializePage(
      page,
      playwrightBaseUrl,
      `s/edit/survey/${draftSurveyId}/share/distribute`,
    )

    // The quota card reads the customer's quota document on this page; wait
    // for it to resolve before capturing (same wait as
    // sharing-distribution.spec.ts).
    await page.getByText(/surveys used|surveys left on your plan|No survey quota/).waitFor()

    await expect(page.getByText('Build the survey first')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Display link for Test' })).toBeDisabled()

    await context.setPath('share').setPath('distribute').setName('distribute-no-build').screenshot()
  })
})
