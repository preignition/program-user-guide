---
description: How administrators view per-broadcast analytics including delivery rates, open rates, response counts, and language segmentation.
---

# Analyzing Broadcast Performance

Per-broadcast analytics enable channel administrators to track subscriber engagement, verify delivery health, and compare language segment performance.

---

## Step 1: Open Broadcast Analytics

1. Navigate to **Admin** > **Broadcasts**.
2. Locate a broadcast with status `sent`.
3. Click the broadcast row to expand its details and analytics panel.

<figure>
  <img src="./assets/viewing-broadcast-list-stats/step-1-broadcasts-grid-with-stats.png" alt="Broadcast Analytics Grid">
  <figcaption>Broadcast Grid showing sent status and response metrics</figcaption>
</figure>

---

## Step 2: Key Performance Indicators (KPIs)

The performance dashboard reports real-time metrics updated via Mailgun webhooks:

<figure>
  <img src="./assets/viewing-aggregate-metrics/step-1-analytics-dashboard.png" alt="Channel Analytics Summary Dashboard">
  <figcaption>Aggregate channel analytics dashboard displaying delivery rates and campaign performance metrics</figcaption>
</figure>

- **Total Recipients**: Total subscriber accounts included in the send list
- **Delivery Rate (%)**: Percentage of emails successfully delivered to subscriber mailboxes
- **Open Rate (%)**: Percentage of delivered messages opened by recipients, counted once per recipient regardless of how many times they reopen the email
- **Bounces / Failures**: Total permanently or temporarily rejected email addresses
- **Response Count**: Number of threaded subscriber replies attached to this broadcast. Expanding the grid row reveals the full flat response thread.

::: info Click Tracking Disabled
In accordance with our privacy-first principles and [ADR 0002](../explanation/REF.md), link click tracking is disabled. Broadcast links are delivered directly as authored without intermediate tracking redirects.
:::

---

## Related Content

- [Creating & Sending Broadcasts](./creating-and-sending-broadcasts.md)
- [Mailing List & Digest Engine Explanation](../explanation/mailing-list-and-digest-architecture.md)
- [Broadcast Responses & Threading Explanation](../explanation/broadcast-responses-threading.md)
