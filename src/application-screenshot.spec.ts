import { test, expect } from '@playwright/test';
const port = process.env.PLAYWRIGHT_PORT || '7173';
const surveyId = 'tENAtrUDB11Wy2YWYoq9';


let hasRunFirst = false;

test.describe('Survey Builder Screenshots', () => {
  test.beforeEach(async ({ page }) => {
    if (!hasRunFirst) {
      page.on('console', msg => console.log(msg.type(), msg.text()));
      await page.goto(`http://localhost:${port}/`);
      await page.waitForTimeout(2000);
    } else {
      console.info('Skipping login, already done');
    }
    hasRunFirst = true;
  });

  const baseUrl = `http://localhost:${port}`;
  const suffix = `s/edit/survey/${surveyId}`;
  const locations = [
  // 'pricing',
  // 'features',
    'build/compose',
    'build/behavior',
    // 'build/localize',
    // 'test',
    // 'share/status',
    // 'share/publish',
  ];

  for (const location of locations) {
    test(`should take a screenshot of ${location}`, async ({ page }) => {
      page.on('console', msg => console.log(msg.type(), msg.text()));

      const url = `${baseUrl}/${suffix}/${location}`;
      await page.goto(url);
      await page.waitForTimeout(4000);
      await page.screenshot({ path: `screenshots/${location.replace(/\//g, '-')}.png`, fullPage: true });
    });
  }
});
