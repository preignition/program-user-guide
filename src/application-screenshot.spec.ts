import { test, expect, type PageScreenshotOptions } from '@playwright/test';
type LocationT = {
  url?: string;
  filePath?: string;
  click?: [x: number, y: number] | [x: number, y: number][];
  skip?: boolean;
  name?: string;
  options?: PageScreenshotOptions;
  children?: LocationT[];
}

const port = process.env.PLAYWRIGHT_PORT || '7173';
const surveyId = 'tENAtrUDB11Wy2YWYoq9';

const clipMenu: PageScreenshotOptions['clip'] = {
  x: 0,
  y: 64,
  width: 256,
  height: 500,
};
const clipTreeViewContent: PageScreenshotOptions['clip'] = {
  x: 290,
  y: 64,
  width: 337,
  height: 500,
};
const clipBuildContent: PageScreenshotOptions['clip'] = {
  x: 635,
  y: 64,
  width: 730,
  height: 800,
};

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
    // this fits the documentation app layout
    await page.setViewportSize({ width: 1400, height: 1000 });
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
    { url: '', filePath: 'home', name: 'home' },
    { filePath: 'home', name: 'survey' },
    {
      url: 'share',
      filePath: 'share',
      children: [
        { url: 'status', },
        { url: 'build', },
        { url: 'distribute', },
        { url: 'account', },
        { url: 'redirection', },
        { url: 'access', },
        { url: 'message', },
        { url: 'batch', },
        { url: 'webhook', },
        { url: 'terms', },
      ]
    },
    {
      url: 'build',
      filePath: 'build',
      children: [
        {
          url: 'compose',
          filePath: 'compose',
          name: 'compose',
          children: [
            { url: '', name: 'menu', options: { clip: clipMenu } },
            { url: '', name: 'tree-view', options: { clip: clipTreeViewContent } },
            { url: '', name: 'content-area', options: { clip: clipBuildContent } },
            {
              url: 'form/N8ux3u8mgki5GBzPKjxc',
              filePath: 'form',
              // click: [457, 340],
              name: 'form',
            },
            {
              url: 'page/N8ux3u8mgki5GBzPKjxc.Eyi74XJczgc8RMoEDRgY',
              filePath: 'page',
              name: 'page',
              click: [508, 345]
            },
            {
              url: 'section/N8ux3u8mgki5GBzPKjxc.uWCJafUg2HUZkwtpLAoj',
              filePath: 'section',
              name: 'section',
              click: [[500, 490], [500, 453], [500, 419], [500, 374]]
            },
            {
              url: 'question',
              filePath: 'question',
              options: { clip: clipBuildContent }, 
              children: [
                { url: 'N8ux3u8mgki5GBzPKjxc.OhpUogRZt1il1w4KJxvv', name: 'text-field', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.2NBT47FzQ2CfC0gsBQYE', name: 'text-area', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.KvB7rG5TCstJt5T3NauQ', name: 'radio-group', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.J43w6usp0oXkOeHoIXiu', name: 'checkbox-group', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.PoghswH2B0P8z7802NcQ', name: 'dropdown', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.55DtOAMIE1AFW06dicWl', name: 'rating', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.wbydeWDhmjPAYlAZOfpH', name: 'ranking', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.WZN5YIgY9fRo8qjnTskc', name: 'checkbox', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.yN8XCA276dwVWRWtq0Lz', name: 'switch', options: { clip: clipBuildContent } },
                { url: 'N8ux3u8mgki5GBzPKjxc.6Sajv6yNRzu2NV9FLnKz', name: 'media', options: { clip: clipBuildContent } },
              ]
            }

              
          ]
        },
        { url: 'behavior', },
        { url: 'localize', },
        { url: 'library', },
        { url: 'prompt', },
        { url: 'deleted-items', name: 'restore' },
      ]
    },
   
    { url: 'overview/analytics', filePath: 'overview-analytics' }, ,
  ];

  test.skip(`should take a screenshot of all locations}`, async ({ page }) => {
    let l: LocationT;
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error(l.url + ':' + msg.text());
        // expect(true, 'failing for ' + l.url).toBe(false);
      }
    });
    
    
    
    async function processLocations(currentLocations: LocationT[], parentUrl: string = '', parentFilePath: string = '') {
      for (const location of currentLocations) {
        l = location;
        const segments = [baseUrl, suffix];
        if (parentUrl) {
          segments.push(parentUrl);
        }
        if (location.url) {
          segments.push(location.url);
        }
        const fullUrl = segments.join('/');
        const fullFilePath = `${parentFilePath}/${location.filePath || ''}`;

        console.info('Navigating to ', fullUrl);
        console.info('Saving to  ', fullFilePath);
        await page.goto(fullUrl);
        if (location.click) {
          if (Array.isArray(location.click[0])) {
            for (const click of location.click as [x: number, y: number][]) {
              await page.mouse.click(click[0], click[1]);
              await page.waitForTimeout(100);
            }
          } else {
            const click = location.click as [x: number, y: number];
            await page.mouse.click(click[0], click[1]);
            await page.waitForTimeout(100);
          }
        } 
        if (location.skip) {
          await page.waitForTimeout(100);
          continue;
        }
        await page.waitForTimeout(1200);
        await page.screenshot({
          path: `accessible-data/survey/${fullFilePath}/assets/auto-${location.name ?
            `${location.name}` :
            location.url.split('/').pop()}.png`,
          fullPage: false,
          ...(location.options || {})
        });
      

        if (location.children) {
          await processLocations(location.children, `${parentUrl}${location.url ? ('/' + location.url) : ''}`, fullFilePath);
        }
      }
    }

    await processLocations(locations);
  });
}, 120000
);
