import { Locator, test } from "@playwright/test";
import { Context } from "../../Context.ts";
import { initializePage } from "../../utils/initializePage.ts";

const a11yPort = "7174";
const a11yBaseUrl = `http://localhost:${a11yPort}`; // accessible data team
const satisfactionSurveyId = "3BBFzJneqakYoyDu02c2";
const formId = "N8ux3u8mgki5GBzPKjxc";
const sectionId = "uWCJafUg2HUZkwtpLAoj";
const mainPath = "docs/app/survey/how-to";

let locator: Locator;

test.describe("Survey Sharing Section How-To", async () => {
  test("How to share a section with other teams", async ({ page }) => {
    const context = new Context(mainPath, page);
    context.setName("sharing-a-section");
    await initializePage(
      page,
      a11yBaseUrl,
      `/s/edit/survey/${satisfactionSurveyId}/build/compose/section/${formId}.${sectionId}`,
    );

    // ### Step 1: Right-click on the section you want to share
    await page.waitForTimeout(1000);
    await page.locator("vaadin-grid-cell-content").filter({ hasText: "Section 1" }).first().click();
    await page.locator("vaadin-grid-cell-content").filter({ hasText: "Section 1" }).first().click({
      button: "right",
    });
    locator = page.locator("md-list-item").filter({ hasText: "publish" }).getByRole("listitem");
    await context.annotatedScreenshot(locator, "step-1-publish-in-context-menu");
    await locator.click();

    // ### Step 2: open the dialog and click "Publish" to share the section with other teams in the customer
    await page.waitForTimeout(1000);
    locator = page.getByRole("dialog");
    await context.annotatedScreenshot(locator, "step-2-publish-dialog");
    locator = page.getByRole("button", { name: "Publish" });
    await context.annotatedScreenshot(locator, "step-2-publish-dialog-publish-button");
    await locator.click();

    // ### Step 3: The section is now shared — every team in the customer can embed it
    // (the sharing settings live under the "Sharing" group, only visible in advanced mode)
    await page.waitForTimeout(2000);
    await page.locator("vaadin-grid-cell-content").filter({ hasText: "Section 1" }).first().click();
    await page.waitForTimeout(1000);
    locator = page.getByRole("switch", { name: "toggle advanced mode" });
    await context.annotatedScreenshot(locator, "step-3-activate-advanced-mode");
    await locator.check();
    await page.waitForTimeout(500);
    locator = page.getByText("Sharing infoControl how this");

    await context.annotatedScreenshot(locator, "step-3-section-published-settings");
  });

  test("How to embed a shared section in your form", async ({ page }) => {
    const context = new Context(mainPath, page);
    context.setName("embedding-a-section");
    await initializePage(page, a11yBaseUrl, `/s/edit/survey/${satisfactionSurveyId}/build/compose`);

    // Option A - from the add content mode, browse the library and embed a shared section, then drag an drop it into the canvas
    // ### Step 1: Open the Add Content mode to browse the section library    await page.waitForTimeout(1000);
    await page.locator("vaadin-grid-cell-content").filter({ hasText: "Form" }).click();
    await page.waitForTimeout(500);
    await page.getByRole("button", { name: "Add Content Mode" }).click();
    await page.waitForTimeout(1000);
    locator = page.locator("lapp-section-library");
    await context.annotatedScreenshot(locator, "step-1-section-library-panel");

    // Option B - right-click on a section in the tree and choose "embed shared section" to open the library dialog
    // ### Step 2: Right-click on a page and choose "embed shared section"
    await page.locator("vaadin-grid-cell-content").filter({ hasText: "Survey habits" }).click({
      button: "right",
    });
    locator = page
      .locator("md-list-item")
      .filter({ hasText: "embed shared section" })
      .getByRole("listitem");
    await context.annotatedScreenshot(locator, "step-2-embed-shared-section-in-context-menu");
    await locator.click();

    // ### Step 3: Pick the shared section from the library
    await page.waitForTimeout(1000);
    locator = page.getByRole("dialog");
    await context.annotatedScreenshot(locator, "step-3-embed-dialog");
    await page.locator("md-list-item").filter({ hasText: "Section 1" }).first().click();
    await page.waitForTimeout(300);

    // ### Step 4: Choose how the section behaves — live reference (read-only, updates flow in) or a copy
    // (a customer-shared section defaults to live reference; a copy is the
    // alternative when you want your own editable version)
    locator = page.locator("lapp-choice-radio");
    await context.annotatedScreenshot(locator, "step-4-embed-kind-choice");

    locator = page.getByRole("button", { name: "Embed" });
    await context.annotatedScreenshot(locator, "step-4-click-embed-button");

    //  The live reference appears in the tree, marked as read-only
    //  Right-click the live reference — it shows the source note and can only be removed, not edited
  });

  // runs after the publish test above so the section is already shared
  test("How to unpublish a shared section", async ({ page }) => {
    const context = new Context(mainPath, page);
    context.setName("unpublishing-a-section");
    await initializePage(
      page,
      a11yBaseUrl,
      `/s/edit/survey/${satisfactionSurveyId}/build/compose/section/${formId}.${sectionId}`,
    );

    // ### Step 1: Right-click the shared section — the context menu offers "unpublish"
    await page.waitForTimeout(1000);
    await page.locator("vaadin-grid-cell-content").filter({ hasText: "Section 1" }).first().click();
    await page.locator("vaadin-grid-cell-content").filter({ hasText: "Section 1" }).first().click({
      button: "right",
    });
    locator = page.locator("md-list-item").filter({ hasText: "unpublish" }).getByRole("listitem");
    await context.annotatedScreenshot(locator, "step-1-unpublish-in-context-menu");
    await locator.click();

    // ### Step 2: The confirm dialog explains what unpublishing does — the section
    // leaves the library, but teams that already embedded it keep working
    await page.waitForTimeout(1000);
    locator = page.getByRole("dialog");
    await context.annotatedScreenshot(locator, "step-2-unpublish-dialog");
    locator = page.getByRole("button", { name: "Unpublish" });
    await context.annotatedScreenshot(locator, "step-2-unpublish-dialog-confirm-button");
    await locator.click();

    // ### Step 3: The section is team-private again — the context menu offers "publish to customer"
    await page.waitForTimeout(2000);
    await page.locator("vaadin-grid-cell-content").filter({ hasText: "Section 1" }).first().click({
      button: "right",
    });
    await page.waitForTimeout(500);
    locator = page
      .locator("md-list-item")
      .filter({ hasText: "publish to customer" })
      .getByRole("listitem");
    await context.annotatedScreenshot(locator, "step-3-section-team-private-again");
  });
});
