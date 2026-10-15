---
description: Reference for the shared survey quota card (lapp-quota-card) used by the survey app and the customer portal.
---

# Survey Quota Card

The `lapp-quota-card` element presents a customer's survey quota: how many surveys are left on the plan, how much of the plan has been used, and what happens once the quota runs out. The survey app renders it on the **Status** page and — until the survey is in production — on the **Distribute** page; the customer portal renders it in the **Quota** tab.

The card is presentational: the caller owns the quota data (a live Firestore read in the survey app, `customerState` in the customer portal) and passes the fields.

## What the card shows

- **Remaining count** — a `vaadin-badge` states how many surveys are left: green while surveys remain, orange during the grace window, red once the quota is exhausted.
- **Used share** — a `vaadin-progress-bar` with *"X of Y surveys used."* when the quota document's `added` ledger knows the plan's total.
- **Call to action** — once the quota is exhausted the card explains how long you can still take surveys to production (the grace window) or asks you to buy more quota. Without a quota document it asks you to contact support.
- **Loading** — an indeterminate bar with *"Checking survey quota…"* while the survey app's live read is in flight.

## Properties

| Property | Description |
| --- | --- |
| `remaining` | Surveys left on the plan; `undefined` when no quota document is configured |
| `added` | The quota document's purchase ledger, used to compute the used share |
| `graceUntil` | The grace deadline the redemption opened, when the quota was exhausted |
| `loaded` | `false` while the caller's read is still in flight (shows the loading state) |
| `heading` | The card title (default: *"Survey quota"*) |
| `outOfQuotaCopy` | The sentence shown once the quota is exhausted (default: *"No surveys left on your plan. Buy more quota to publish new surveys."*) |

## Related Content

- [Survey Status](../app/survey/reference/share/status/index.md) — where the survey app shows the card
- [Distribute Your Survey](../app/survey/reference/share/distribute/index.md) — the card before the survey is in production
- [Subscription Settings](../app/customer/reference/customer/subscription.md) — the customer portal's Quota tab
