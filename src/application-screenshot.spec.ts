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
    if (!hasRunFirst) {
      page.on('console', msg => {
        if (msg.type() === 'error') {
          console.error(msg.text());
        }
      });
      await page.goto(`http://localhost:${port}/`);
      await page.waitForTimeout(2000);
    } else {
      console.info('Skipping login, already done');
    }
    hasRunFirst = true;
  });

  const baseUrl = `http://localhost:${port}`;
  const suffix = `s/edit/survey/${surveyId}`;
  const locations: LocationT[] = [
    // { url: '', filePath: 'home' },
    { url: 'overview/analytics', filePath: 'overview-analytics' },
    { url: 'build/compose', filePath: 'build/compose' },
    { url: 'build/behavior', filePath: 'build/behavior' },
    { url: 'build/localize', filePath: 'build' },
    { url: 'build/library', filePath: 'build' },
    { url: 'build/prompt', filePath: 'build' },
    // { url: '', name: 'dummy1', filePath: 'home', skip: true },
    { url: 'build/deleted-items', filePath: 'build' },
    { url: 'test', filePath: 'test' },
    { url: 'share/status', filePath: 'share' },
    { url: 'share/build', filePath: 'share' },
    { url: 'share/distribute', filePath: 'share' },
    { url: 'share/account', filePath: 'share' },
    { url: 'share/redirection', filePath: 'share' },
    { url: 'share/access', filePath: 'share' },
    { url: 'share/message', filePath: 'share' },
    { url: 'test1', filePath: 'home', skip: true },
    // { url: '', name: 'dummy2', filePath: 'home', skip: true },
    { url: 'share/batch', filePath: 'share' },
    { url: 'share/webhook', filePath: 'share' },
    { url: 'share/terms', filePath: 'share' },
  ];

  for (const location of locations) {
    test(`should take a screenshot of ${location.url} ${location.name || ''}`, async ({ page }) => {
      page.on('console', msg => {
        if (msg.type() === 'error') {
          
          console.error(location.url + ':' + msg.text());
          expect(true, 'failing for ' + location.url).toBe(false);
          
        }
      });
  

      const url = location.url ? `${baseUrl}/${suffix}/${location.url}` : '';
      await page.goto(url);
      if (location.skip) {
        await page.waitForTimeout(1000);
        return 
      }
      await page.waitForTimeout(4000);
      await page.screenshot({ path: `accessible-data/survey/${location.filePath}/assets/${location.url.replace(/\//g, '-')}.png`, fullPage: true });
    });
  }
});
