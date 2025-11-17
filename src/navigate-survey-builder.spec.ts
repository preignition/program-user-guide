import { test, expect, type PageScreenshotOptions, type Page } from '@playwright/test';
import * as path from 'path';

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

// full content without menu
const clipFullContent: PageScreenshotOptions['clip'] = {
  height: 896,
  y: 84,
  width: 1072.4705810546875,
  x: 292
}

type ContextT = {
  url: string;
  page: Page;
  name: string;
  path: string;
  screenshotType: 'fullPage' | 'viewport' | 'clip';
}

class Context implements ContextT {
  url: string;
  name: string;
  path: string;
  page: Page;
  screenshotType: 'fullPage' | 'viewport' | 'clip';
  options?: Partial<PageScreenshotOptions>;
  constructor(
    url: string,
    path: string,
    
  ) {
    this.path = path;
    this.url = url;
  } 
  
  setName(name: string) {
    this.name = name;
    return this;
  }
  
  setPath(segment: string) {
    this.path = path.join(this.path, segment);
    return this;
  }

  setPage(page: Page) {
    this.page = page;
    return this;
  }

  async screenshot(name: string, options?: Partial<PageScreenshotOptions>) {
    await this.page.waitForTimeout(100);
    return this.page.screenshot({
      path: `${this.path}/assets/auto-${name}.png`,
      ...options,
    })
  }
}

const port = process.env.PLAYWRIGHT_PORT || '7173';
const baseUrl = `http://localhost:${port}`;
const surveyId = '3BBFzJneqakYoyDu02c2';

const suffix = `s/edit/survey/${surveyId}/build/compose/survey/intro`;
const context = new Context(
  `http://localhost:${port}/${suffix}`,
  'accessible-data/survey/',
);

const screenshotAllSize = async (context: Context) => {  
  await context.screenshot(`${context.name}`, { fullPage: false });
  await context.screenshot(`${context.name}-fullpage`, { fullPage: true });
  await context.screenshot(`${context.name}-clip`, { clip: clipBuildContent });
}

const screenshotAllModes = async (context: Context) => {
  const page = context.page;
  await page.getByRole('button', { name: 'Settings Mode' }).click();
  await context.screenshot(`${context.name}`);
  await context.screenshot(`${context.name}-clip`, { clip: clipBuildContent });
  await page.getByRole('button', { name: 'Localize Mode' }).click();
  await context.screenshot(`${context.name}-localize`);
  await context.screenshot(`${context.name}-localize-clip`, { clip: clipBuildContent });
  await page.getByRole('button', { name: 'Read Aloud Mode' }).click();
  await context.screenshot(`${context.name}-readaloud`);
  await context.screenshot(`${context.name}-readaloud-clip`, { clip: clipBuildContent });
  await page.getByRole('button', { name: 'Easy Read Mode' }).click();
  await context.screenshot(`${context.name}-easyread`);
  await context.screenshot(`${context.name}-easyread-clip`, { clip: clipBuildContent });
  await page.getByRole('button', { name: 'Sign language Mode' }).click();
  await context.screenshot(`${context.name}-signlanguage`);
  await context.screenshot(`${context.name}-signlanguage-clip`, { clip: clipBuildContent });
  await page.getByRole('button', { name: 'Visibility Mode' }).click();
  await context.screenshot(`${context.name}-visibility`);
  await context.screenshot(`${context.name}-visibility-clip`, { clip: clipBuildContent });
  await page.getByRole('button', { name: 'Settings Mode' }).click();
}

const screenshotWithAdvanced = async (context: Context) => {
  const page = context.page;
  await context.screenshot(`${context.name}`, { clip: clipFullContent });
  await context.screenshot(`${context.name}-clip`, { clip: clipBuildContent });
  // click advanced
  await page.getByRole('switch', { name: 'toggle advanced mode' }).check();
  await page.waitForTimeout(50);

  await context.screenshot(`${context.name}-advanced`, { clip: clipFullContent });
  await context.screenshot(`${context.name}-advanced-clip`, { clip: clipBuildContent });
  // click advanced again
  await page.getByRole('switch', { name: 'toggle advanced mode' }).uncheck();
  await page.waitForTimeout(50);

}


test('test', async ({ page }) => {
  context.setPage(page);
  await page.setViewportSize({ width: 1400, height: 1000 });
  await page.goto(baseUrl);
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Survey', exact: true }).click();
  await page.waitForTimeout(500);
  await page.getByText('Survey Habits and Experience').first().click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(500);
  await page.getByText('Compose').click();
  // we need some time here let authentication settle
  // another wait to ensure everything is loaded
  await page.waitForTimeout(100);

  // COMPOSE
  console.info(`Capturing compose`);

  context
    .setPath('build/compose')
    .setName('compose');
  await page.getByText('Compose').click();
  await screenshotAllSize(context);

  // PAGE
  console.info(`Capturing page intro`);
  context
    .setName('page');
  await page.getByText('Content Page for documentation').click();
  await screenshotAllSize(context);

  // SECTION
  console.info(`Capturing section`);
  context
    .setName('section');
  await page.getByText('text-based fields').click();    
  await screenshotAllSize(context);

  // QUESTION
  console.info(`Capturing question`);
  context
    .setPath('question')
    .setName('question');
  await page.getByText('Text field').click();
  await screenshotAllSize(context);
  await screenshotAllModes(context);

  console.info(`Capturing text-based fields`);
  context
    .setName('text-field');
  await screenshotWithAdvanced(context);
  
  context
    .setName('text-area');
  await page.getByText('Text area field').click();
  await screenshotWithAdvanced(context);

  await page.getByText('text-based fields').click();
  await page.getByText('choice-based fields').click();
  
  console.info(`Capturing choice-based fields`);
  context
    .setName('radio-group');
  await page.getByText('Radio group').click();
  await screenshotWithAdvanced(context);
  
  context
    .setName('checkbox-group');
  await page.getByText('Checkbox group').first().click();
  await screenshotWithAdvanced(context);
  
  context
    .setName('dropdown');
  await page.getByText('Dropdown').click();
  await screenshotWithAdvanced(context);
  
  context
    .setName('rating');
  await page.getByText('Rating').click();
  await screenshotWithAdvanced(context);


  context 
    .setName('ranking');
  await page.getByText('Ranking').click();
  await screenshotWithAdvanced(context);

  await page.getByText('choice-based fields').click();
  await page.getByText('Boolean fields').click();
  
  console.info(`Capturing boolean fields`);
  context
    .setName('checkbox');
  await page.getByText('Checkbox field').click();
  await screenshotWithAdvanced(context);
  
  context
    .setName('switch');
  await page.getByText('Switch field').click();
  await screenshotWithAdvanced(context);
  
  await page.getByText('Boolean fields').click();
  await page.getByText('Media Based Fields').first().click();

  console.info(`Capturing media based fields`);
  context
    .setName('media');
  await page.getByText('File Upload field').click();
  await screenshotWithAdvanced(context);
  
 
  // Behavior
  console.info(`Capturing behavior`);
  context
    .setPath('../../behavior')
    .setName('behavior');    
  await page.getByText('Form Behavior').click();
  await screenshotAllSize(context);
  await screenshotWithAdvanced(context);

  
  // Localize
  console.info(`Capturing localize`);
  context
    .setPath('../localize')
    .setName('localize');    
  await page.getByText('Localize').click();
  await screenshotAllSize(context);
  await screenshotWithAdvanced(context);

  // IMAGE LIBRARY
  context
    .setPath('../../image-library')
    .setName('image-library');
  await page.getByText('Image Library').click();
  await screenshotWithAdvanced(context);

  // SHARE
  context
    .setPath('../share')
    .setName('share');
  await page.getByRole('link', { name: 'share' }).click();
  await screenshotAllSize(context);

  // STATUS
  context
    .setName('status');
  await page.getByText('Status').click();
  await screenshotWithAdvanced(context);
  // PUBLISH
  context
    .setName('publish');
  await page.getByText('Distribute').click();
  await screenshotWithAdvanced(context);

  context
    .setName('distribute');
  await page.getByText('Distribute').click();
  await screenshotWithAdvanced(context);

  // SETTINGS
  context
    .setName('account-type');
  await page.getByText('Account type').click();
  await screenshotWithAdvanced(context);

  context
    .setName('redirection');
  await page.getByText('Redirection').click();
  await screenshotWithAdvanced(context);

  context
    .setName('access');

  await page.getByText('Access', { exact: true }).click();
  await screenshotWithAdvanced(context);


  await page.locator('vaadin-grid-cell-content:nth-child(16) > vaadin-grid-tree-toggle > span:nth-child(2)').click();
  
});

