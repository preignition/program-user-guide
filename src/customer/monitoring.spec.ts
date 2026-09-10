import { Locator, test } from "@playwright/test";
import { Context } from "../Context.ts";
import { initializePage } from "../utils/initializePage.ts";

const port = process.env.PLAYWRIGHT_PORT || "7174";
const baseUrl = `http://localhost:${port}`;

// Screenshots for the super-admin monitoring dashboard, served by the customer
// app under the a11y-survey shell at `customer/_admin/health`.
// The page reads `GET /admin/health` through the shared api client, so the app
// under test must run with `VITE_API_SERVER` pointing at the v3 api
// (see app/a11y-survey/.env.playwright) and the signed-in user must be a
// super admin (admin.__all__.master/owner claims).
const root = "docs/app/customer/how-to";

let locator: Locator;

test.describe("Customer Monitoring Dashboard", () => {
  test("Monitor Application Health", async ({ page }) => {
    const context = new Context(root, page);
    context.setName("monitor-application-health");

    await initializePage(page, baseUrl, "customer/_admin/health");
    // The dashboard fetches the monitoring payload and paints the timeline
    // after it loads; wait for the KPI row before screenshotting.
    await page.locator("monitoring-dashboard .kpis").waitFor({ timeout: 30_000 });
    await page.waitForTimeout(500);

    // Step 1: the dashboard navigation (Overview / Activity / Incidents /
    // Health tabs) and the manual refresh control (120s auto-refresh).
    locator = page.locator("monitoring-dashboard .toolbar");
    await context.annotatedScreenshot(locator, "step-1-navigation");

    // Step 2: the Overview KPI cards — open incidents, submissions 24h,
    // failed jobs 24h and the average function error rate.
    locator = page.locator("monitoring-dashboard .kpis");
    await context.annotatedScreenshot(locator, "step-2-kpis");

    // Step 3: the 24h activity timeline (stacked submissions vs other events).
    locator = page.locator("monitoring-dashboard .chart-box");
    await context.annotatedScreenshot(locator, "step-3-activity-timeline");

    // Step 4: the newest incidents of the Overview tab.
    locator = page.locator("monitoring-dashboard .section").filter({ hasText: "Latest incidents" });
    await context.annotatedScreenshot(locator, "step-4-latest-incidents", 50, 700);

    // Step 5: the newest activity events of the Overview tab.
    locator = page.locator("monitoring-dashboard .section").filter({ hasText: "Latest activity" });
    await context.annotatedScreenshot(locator, "step-5-latest-activity", 50, 700);

    // Step 6: the Activity tab — the complete, filterable event log
    // (app filter + full-text search over events, payloads and actors).
    await page.getByRole("tab", { name: "Activity" }).click();
    await page.waitForTimeout(500);
    locator = page.locator("monitoring-activity-grid");
    await context.annotatedScreenshot(locator, "step-6-activity-log", 50, 700);

    // Step 7: the Incidents tab — server errors grouped by fingerprint,
    // with first/last seen, 24h counts, rate and state.
    await page.getByRole("tab", { name: "Incidents" }).click();
    await page.waitForTimeout(500);
    locator = page.locator("monitoring-incidents-grid");
    await context.annotatedScreenshot(locator, "step-7-incidents", 50, 700);

    // Step 8: the Health tab — per-function outcomes (ok/error, rate, last
    // success/failure) rolled up over the last 7 days.
    await page.getByRole("tab", { name: "Health" }).click();
    await page.waitForTimeout(500);
    locator = page.locator("monitoring-fn-grid");
    await context.annotatedScreenshot(locator, "step-8-function-health", 50, 700);

    // Step 9: scheduled jobs — status, last run and error tag.
    locator = page.locator("monitoring-jobs-grid");
    await context.annotatedScreenshot(locator, "step-9-job-status", 50, 700);

    // Step 10: recent error records (expected vs unexpected).
    locator = page.locator("monitoring-errors-grid");
    await context.annotatedScreenshot(locator, "step-10-error-records", 50, 700);

    // Step 11: click a row to expand its record inline (click again to
    // collapse). Uses the jobs grid because scheduled jobs exist in every
    // environment; swap the grid if the run has no jobs.
    const jobsGrid = page.locator("monitoring-jobs-grid");
    await jobsGrid.getByRole("gridcell").first().click();
    locator = jobsGrid.locator("vaadin-grid");
    await context.annotatedScreenshot(locator, "step-11-row-details", 50, 700);
  });
});
