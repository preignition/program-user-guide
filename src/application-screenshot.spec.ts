import { test, expect } from '@playwright/test';
type LocationT = {
  url: string;
  filePath: string;
  skip?: boolean;
  name?: string;
}

const port = process.env.PLAYWRIGHT_PORT || '7173';
const surveyId = 'tENAtrUDB11Wy2YWYoq9';


let hasRunFirst = false;

test.describe('Survey Builder Screenshots', () => {
  test.beforeEach(async ({ page }) => {
    console.info('Running before each');
    // if (!hasRunFirst) {
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error(msg.text());
      }
    });
    await page.goto(`http://localhost:${port}/`);
    await page.waitForTimeout(2000);
    // } else {
    //   console.info('Skipping login, already done');
    // }
    // hasRunFirst = true;
  });

  const baseUrl = `http://localhost:${port}`;
  const suffix = `s/edit/survey/${surveyId}`;
  const locations: LocationT[] = [
    { url: '', filePath: 'home' },
    { url: 'overview/analytics', filePath: 'overview-analytics' },
    { url: 'build/compose', filePath: 'build/compose' },
    { url: 'build/behavior', filePath: 'build/behavior' },
    { url: 'build/localize', filePath: 'build' },
    { url: 'build/library', filePath: 'build' },
    { url: 'build/prompt', filePath: 'build' },
    { url: 'build/deleted-items', filePath: 'build', name: 'restore' },
    { url: 'share/status', filePath: 'share' },
    { url: 'share/build', filePath: 'share' },
    { url: 'share/distribute', filePath: 'share' },
    { url: 'share/account', filePath: 'share' },
    { url: 'share/redirection', filePath: 'share' },
    { url: 'share/access', filePath: 'share' },
    { url: 'share/message', filePath: 'share' },
    { url: 'share/batch', filePath: 'share' },
    { url: 'share/webhook', filePath: 'share' },
    { url: 'share/terms', filePath: 'share' },
  ];

  test(`should take a screenshot of all locations}`, async ({ page }) => {
    let l: LocationT;
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error(l.url + ':' + msg.text());
        // expect(true, 'failing for ' + l.url).toBe(false);
      }
    });
    
    
    for (const location of locations) {
      l = location;
      console.info('Navigating to ', location.url);
      const url = location.url ? `${baseUrl}/${suffix}/${location.url}` : '';
      await page.goto(url);
      if (location.skip) {
        await page.waitForTimeout(500);
        return 
      }
      await page.waitForTimeout(2000);
      await page.screenshot({
        path: `accessible-data/survey/${location.filePath}/assets/${location.name ? 
          `${location.filePath}-${location.name}` : 
          location.url.replace(/\//g, '-')}.png`, fullPage: true
      });
    }
  });
}
);
