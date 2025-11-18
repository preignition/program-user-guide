import { test, expect, type PageScreenshotOptions, type Page } from '@playwright/test';
import * as path from 'path';

type ContextT = {
  url: string;
  page: Page;
  name: string;
  path: string;
}

type AreaT = {
  name: string;
  clip?: ClipT;
  advanced?: boolean;
}
class Context implements ContextT {
  url: string;
  name: string;
  path: string;
  page: Page;
  area: AreaT[] = [];
  constructor(
    url: string,
    path: string,
    
  ) {
    this.path = path;
    this.url = url;
  } 

  setArea(area: AreaT[]) {
    this.area = area;
    return this;
  }

  addArea(name: string, clip?: ClipT, advanced?: boolean) {
    this.area.push({ name, clip, advanced });
    return this;
  }
  removeArea(name: string) {
    this.area = this.area.filter(a => a.name !== name);
    return this;
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

  async screenshot(advanced?: boolean) {
    const name = this.name;
    const advancedModeSwitch = this.page.getByRole('switch', { name: 'toggle advanced mode' });
    const isAdvancedMode = await advancedModeSwitch.isChecked();
    let pageIsLargerThanViewport = await this.page.evaluate(() => {
      return document.body.scrollHeight > window.innerHeight || document.body.scrollWidth > window.innerWidth;
    });
    // await this.page.waitForTimeout(50);
    await this.page.getByRole('switch', { name: 'toggle advanced mode' }).uncheck();
    await this.page.waitForTimeout(50); 
    
    await Promise.all(

      [this.page.screenshot({
        path: `${this.path}/assets/${name}-auto.png`,
      }),
      pageIsLargerThanViewport &&
      this.page.screenshot({
        path: `${this.path}/assets/${name}-full-auto.png`,
        fullPage: true,
      }),
      this.area.map(a => this.page.screenshot({
        path: `${this.path}/assets/${name}-${a.name}-auto.png`,
        clip: a.clip,
      })) 
      ]
    )

    if (advanced) {
      // click advanced
      await this.page.getByRole('switch', { name: 'toggle advanced mode' }).check();
      await this.page.waitForTimeout(50);
      pageIsLargerThanViewport = await this.page.evaluate(() => {
        return document.body.scrollHeight > window.innerHeight || document.body.scrollWidth > window.innerWidth;
      });
      await Promise.all(

        [this.page.screenshot({
          path: `${this.path}/assets/${name}-advanced-auto.png`,
        }),
        pageIsLargerThanViewport &&
        this.page.screenshot({
          path: `${this.path}/assets/${name}-advanced-full-auto.png`,
          fullPage: true,
        }),
        this.area
          .filter(a => a.advanced === true)
          .map(a => this.page.screenshot({
            path: `${this.path}/assets/${name}-${a.name}-advanced-auto.png`,
            clip: a.clip,
          })) 
        ]
      )  
       
    }
    if (isAdvancedMode) {
      await advancedModeSwitch.check();
    } else {
      await advancedModeSwitch.uncheck();

    }
    await this.page.waitForTimeout(50); 
    return this;
  }
}

const port = process.env.PLAYWRIGHT_PORT || '7173';
const baseUrl = `http://localhost:${port}`;
const surveyId = '3BBFzJneqakYoyDu02c2';

const suffix = `s/edit/survey/${surveyId}/build/compose/survey/intro`;


// const screenshotAllSize = async (context: Context) => {  
//   await context.screenshot(`${context.name}`, { fullPage: false });
//   await context.screenshot(`${context.name}-fullpage`, { fullPage: true });
//   await context.screenshot(`${context.name}-clip`, { clip: clipBuildContent });
// }

const screenshotAllModes = async (context: Context) => {
  const { page, name } = context;

  await page.getByRole('button', { name: 'Settings Mode' }).click();
  await page.waitForTimeout(350);
  await context
    .setName(name)
    .screenshot();
  await page.getByRole('button', { name: 'Localize Mode' }).click();
  await page.waitForTimeout(350);
  await context
    .setName(`${name}-localize`)
    .screenshot();
  await page.getByRole('button', { name: 'Read Aloud Mode' }).click();
  await page.waitForTimeout(350);
  await context
    .setName(`${name}-readaloud`)
    .screenshot();
  await page.getByRole('button', { name: 'Easy Read Mode' }).click();
  await page.waitForTimeout(350);
  await context
    .setName(`${name}-easyread`)
    .screenshot();
  await page.getByRole('button', { name: 'Sign language Mode' }).click();
  await page.waitForTimeout(350);
  await context
    .setName(`${name}-signlanguage`)
    .screenshot();
  await page.getByRole('button', { name: 'Visibility Mode' }).click();
  await page.waitForTimeout(350);
  await context
    .setName(`${name}-visibility`)
    .screenshot();
  await page.getByRole('button', { name: 'Settings Mode' }).click();
  await page.waitForTimeout(350);
}


test.describe('Survey Builder Navigation and Screenshots', () => {

  test('survey', async ({ page }) => {
    const context = new Context(
      `http://localhost:${port}/${suffix}`,
      'accessible-data/survey/',
    );
    context.setPage(page);
    await page.setViewportSize({ width: 1600, height: 1080 });
    await page.goto(baseUrl);
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Survey', exact: true }).click();
    await page.waitForTimeout(1000);
    
    // WORKSPACE
    await context
      .setName('workspace')
      .setArea([{ name: 'fab', clip: fabBar }])
      .screenshot();
    context.removeArea('fab')
      

    // CREATE SUREVEY
    await page.getByRole('button', { name: 'New Survey' }).click();
    await page.getByRole('textbox', { name: 'name', exact: true }).click();
    await page.getByRole('textbox', { name: 'name', exact: true }).fill('test');
    await page.getByRole('textbox', { name: 'name', exact: true }).press('Tab');
    await page.getByRole('textbox', { name: 'description', exact: true }).fill('test');
    await page.getByRole('textbox', { name: 'description', exact: true }).click();
    await page.getByRole('textbox', { name: 'description', exact: true }).fill('test description');
    await context
      .setName('create-survey')
      .setArea([{ name: 'dialog', clip: dialog }])
      .screenshot();
    
    await page.getByRole('button', { name: 'Form', exact: true }).click();
    await page.locator('#form-create > .layout > lapp-text-field > .text-field > .field > .input-wrapper').first().click();
    await page.getByRole('textbox', { name: 'name', exact: true }).fill('Form 1');
    await page.getByRole('textbox', { name: 'name', exact: true }).press('Tab');
    await page.getByRole('textbox', { name: 'description', exact: true }).fill('Form description');
    await context
      .setName('create-form')
      .screenshot();
    await page.getByRole('button', { name: 'Summary' }).click();
    
    // WORKSPACE
    await context
      .setName('create-summary')
      .screenshot();
    
    context.removeArea('dialog')
    await page.getByRole('button', { name: 'Summary' }).press('Escape');
      

    await page.getByText('Survey Habits and Experience').first().click();
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.waitForTimeout(500);
    await page.getByText('Compose').click();
    // we need some time here let authentication settle
    // another wait to ensure everything is loaded
    await page.waitForTimeout(100);

    
    // APP
    await context
      .setName('app')
      .setArea([{ name: 'toolbar', clip: toolbar }])
      .screenshot();
    context.removeArea('toolbar')
      .addArea('menu', menu)
      
    // BUILD
    console.info(`Capturing build`);

    await page.getByText('Compose').click();  
    (await context
      .setPath('build')
      .setName('build')
      .addArea('menu', menu)
      .screenshot()
    ).removeArea('menu');

    // COMPOSE
    console.info(`Capturing compose`);
    (await context
      .setPath('compose')
      .setName('compose')
      .addArea('modes', fabBar)
      .addArea('grid', treeGrid)
      .screenshot()
    ).removeArea('modes').removeArea('grid');


    context
      .addArea('content', pageContent)
      .addArea('grid', treeGrid, true)
      .addArea('view', treeView, true)
      ;

    // INFO PAGE
    await page.getByText('Introduction Page').first().click();
    console.info(`Capturing page intro`);
    context
      .setName('intro')
      .setPath('text-page')
      .screenshot();

    await page.getByText('intro 1').first().click();
    console.info(`Capturing page intro 1`);
    context
      .setName('intro-item')
      .screenshot();

    // FORM
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'form' }).first().click();
    await page.waitForTimeout(50);
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'form' }).first().click();
    console.info(`Capturing form`);
    context
      .setPath('../form')
      .setName('page')
      .screenshot();

    // PAGE
    await page.getByText('Content Page for documentation').click();
    console.info(`Capturing page intro`);
    context
      .setPath('../page')
      .setName('page')
      .screenshot();

    // SECTION
    await page.getByText('text-based fields').click();    
    console.info(`Capturing section`);
    context
      .setPath('../section')
      .setName('section')
      .screenshot();

    // QUESTION
    await page.getByText('Text field').click();
    console.info(`Capturing question`);
    await context
      .setPath('../question')
      .setName('question')
      .screenshot();
    await screenshotAllModes(context);

    console.info(`Capturing text-based fields`);
    context
      .setName('text-field');
    
    await page.getByText('Text area field').click();
    await context
      .setName('text-area')
      .screenshot(true)
      ;
  
    await page.getByText('text-based fields').click();
    await page.waitForTimeout(50);
    await page.getByText('choice-based fields').click();
  
    await page.getByText('Radio group').click();
    console.info(`Capturing choice-based fields`);
    await context
      .setName('radio-group')
      .screenshot(true);
  
    await page.getByText('Checkbox group').first().click();
    await context
      .setName('checkbox-group')
      .screenshot(true);
  
    await page.getByText('Dropdown').click();
    await context
      .setName('dropdown')
      .screenshot(true);
  
    await page.getByText('Rating').click();
    await context
      .setName('rating')
      .screenshot(true);

    await page.getByText('Ranking').click();
    await context 
      .setName('ranking')
      .screenshot(true);

    await page.getByText('choice-based fields').click();
    await page.waitForTimeout(50);
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Boolean fields' }).first().click();
  
    await page.getByText('Checkbox field').click();
    console.info(`Capturing boolean fields`);
    await context
      .setName('checkbox')
      .screenshot(true);
  
    await page.getByText('Switch field').click();
    await context
      .setName('switch')
      .screenshot(true);
  
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Boolean fields' }).first().click();
    await page.waitForTimeout(50);
    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'Media Based Fields' }).first().click();

    await page.locator('vaadin-grid-cell-content').filter({ hasText: 'File Upload field' }).click();
    console.info(`Capturing media based fields`);
    await context
      .setName('media')
      .screenshot(true);
  
    context
      .removeArea('grid')
      .removeArea('view')
      .removeArea('content')
      .addArea('content', pageContent, true)
      ;
    // Behavior
    await page.getByText('Form Behavior').click();
    console.info(`Capturing behavior`);
    await context
      .setPath('../../behavior')
      .setName('behavior')
      .screenshot(true);

  
    // LOCALIZE
    await page.getByText('Localize').click();
    console.info(`Capturing localize`);
    await context
      .setPath('../localize')
      .setName('localize')
      .screenshot(true);
    
    // IMAGE LIBRARY
    await page.getByText('Image Library').click();
    console.info(`Capturing image library`);
    await context
      .setPath('../image-library')
      .setName('image-library')
      .screenshot(true);

    await page.getByRole('switch', { name: 'toggle advanced mode' }).check();
    await page.waitForTimeout(50);      

    // PROMPT
    await page.getByText('Prompt').first().click();
    console.info(`Capturing prompt`);
    await context
      .setPath('../prompt')
      .setName('prompt')
      .screenshot(true);


    // RESTORE

    await page.locator('#list').getByText('Restore', { exact: true }).click();
    console.info(`Capturing restore`);
    await context
      .setPath('../restore')
      .setName('restore')
      .screenshot(true);


    await page.getByRole('switch', { name: 'toggle advanced mode' }).uncheck();
    await page.waitForTimeout(50);      

    // SHARE
    await page.getByRole('link', { name: 'share' }).click();
    console.info(`Capturing share`);
    await context
      .setPath('../../share')
      .setName('share')
      .screenshot(true);

    // STATUS
    await page.getByText('Status').first().click();
    console.info(`Capturing status`);
    await context
      .setPath('status')
      .setName('status')
      .screenshot(true);
  
    // PUBLISH
    await page.getByText('Publish').first().click();
    console.info(`Capturing publish`);
    await context
      .setPath('../publish')
      .setName('publish')
      .screenshot(true);

    await page.getByText('Distribute').first().click();
    console.info(`Capturing distribute`);
    await context
      .setPath('../distribute')
      .setName('distribute')
      .screenshot(true);

    // SETTINGS
    await page.getByText('Account type').click();
    console.info(`Capturing account type`);
    await context
      .setPath('../account-type')
      .setName('account-type')
      .screenshot(true);

    await page.getByText('Redirection').click();
    console.info(`Capturing redirection`);
    await context
      .setPath('../redirection')
      .setName('redirection')
      .screenshot(true);

    await page.getByText('Access', { exact: true }).click();
    console.info(`Capturing access`);
    await context
      .setPath('../access')
      .setName('access')
      .screenshot(true);

    await page.getByRole('switch', { name: 'toggle advanced mode' }).check();
    await page.waitForTimeout(50);      

    // EMAIL
    await page.getByText('Email').first().click();
    console.info(`Capturing email`);
    await context
      .setPath('../email')
      .setName('email')
      .screenshot(true);

    // BATCH
    await page.getByText('Batch').first().click();
    console.info(`Capturing batch`);
    await context
      .setPath('../batch')
      .setName('batch')
      .screenshot(true);

    // WEBHOOK
    await page.getByText('Webhook').first().click();
    console.info(`Capturing webhook`);
    await context
      .setPath('../webhook')
      .setName('webhook')
      .screenshot(true);
    

    // TERMS
    await page.locator('#list').getByText('Terms', { exact: true, }).click();
    console.info(`Capturing terms`);
    await context
      .setPath('../terms')
      .setName('terms')
      .screenshot(true);
     


    await page.getByRole('switch', { name: 'toggle advanced mode' }).uncheck();
    await page.waitForTimeout(50);   


  
  
  });
})


type ClipT = PageScreenshotOptions['clip'];


const menu: ClipT = {
  x: 0,
  y: 64,
  width: 256,
  height: 500,
};
const treeGrid: ClipT = {
  x: 292,
  y: 84,
  width: 402,
  height: 976,
};
const treeView: ClipT = {
  x: 702,
  y: 84,
  height: 976,
  width: 862,
};

// full content without menu
const pageContent: ClipT = {
  x: 292,
  y: 84,
  height: 976,
  width: 1272,
}

const toolbar: ClipT = {
  x: 0,
  y: 0,
  width: 1600,
  height: 64,
};

const fabBar: ClipT = {
  x: 1000,
  y: 965,
  width: 580,
  height: 80,
};

const dialog: ClipT = {
  x: 500,
  y: 160,
  width: 600,
  height: 760,
};