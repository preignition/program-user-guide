---
description: Reference for the shared quota card (lapp-quota-card) used by the survey app and the customer portal.
---

# Quota Card

The `lapp-quota-card` element presents a customer's quota of a plan: how many units are left, how much of the plan has been used, and what happens once the quota runs out. The survey app renders it on the **Status** page and — until the survey is in production — on the **Distribute** page; the customer portal renders it in each quota grid row's details (the survey row shows the survey quota, the team row the team quota).

The card is presentational: the caller owns the quota data (a live document read in the survey app, the row's own document in the customer portal) and passes the fields.

## What the card shows

- **Remaining count** — a `vaadin-badge` states how many units are left: green while units remain, orange during the grace window, red once the quota is exhausted.
- **Used share** — a `vaadin-progress-bar` with *"X of Y surveys used."* (`noun` names the unit) when the quota document's `added` ledger knows the plan's total.
- **Call to action** — once the quota is exhausted the card explains how long you can still publish surveys to production (the grace window) or asks you to buy more quota. Without a quota document it asks you to contact support.
- **Loading** — an indeterminate bar with *"Checking survey quota…"* while the survey app's live read is in flight.

## Properties

| Property | Description |
| --- | --- |
| `remaining` | The units left on the plan; `undefined` when no quota document is configured |
| `added` | The quota document's purchase ledger, used to compute the used share |
| `graceUntil` | The grace deadline the redemption opened, when the quota was exhausted |
| `loaded` | `false` while the caller's read is still in flight (shows the loading state) |
| `heading` | The card title (default: *"Survey quota"*) |
| `noun` | The metered unit's singular used in the copy (default: *"survey"*) |
| `outOfQuotaCopy` | The sentence shown once the quota is exhausted (default: *"No surveys left on your plan. Buy more quota to publish new surveys."*) |

## Related Content

- [Survey Status](../app/survey/reference/share/status/index.md) — where the survey app shows the card
- [Distribute Your Survey](../app/survey/reference/share/distribute/index.md) — the card before the survey is in production
- [Subscription Settings](../app/customer/reference/customer/subscription.md) — the customer portal's quota rows
