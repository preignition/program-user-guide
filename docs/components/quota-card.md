---
description: Reference for the shared quota card (lapp-quota-card) used by the survey app and the customer portal.
---

# Quota Card

The `lapp-quota-card` element presents a customer's quota allowance: how many units are left on the plan, how much of the allowance has been used, and what happens once the quota runs out. The survey app renders it on the [Distribute](../app/survey/reference/share/distribute/index.md) page to display remaining survey quota and any active grace deadline; the customer portal renders it within the [Subscription → Quota](../app/customer/reference/customer/subscription.md#quota-tab) workbench.

The card is presentational: the caller owns the quota data (a live document read in the survey app, the row's own document in the customer portal) and passes the fields.

## What the card shows

- **Remaining count** — a `vaadin-badge` states how many units are left: green while units remain, orange during the grace window, red once the quota is exhausted.
- **Used share** — a `md-linear-progress` with *"X of Y surveys used."* (`noun` names the unit) when the quota document's `added` ledger knows the plan's total.
- **Call to action** — once the quota is exhausted the card explains that one survey is waiting to be paid for and how long is left to settle it (the grace window), or asks you to buy more quota. Without a quota document it asks you to contact support.
- **Loading** — an indeterminate bar with *"Checking survey quota…"* while the survey app's live read is in flight.

## Properties

| Property | Description |
| --- | --- |
| `remaining` | The units left on the plan; `undefined` when no quota document is configured |
| `added` | The quota document's purchase ledger, used to compute the used share |
| `graceUntil` | The grace deadline the redemption opened when the quota crossed below zero |
| `loaded` | `false` while the caller's read is still in flight (shows the loading state) |
| `heading` | The card title (default: *"Survey quota"*) |
| `noun` | The metered unit's singular used in the copy (default: *"survey"*) |
| `outOfQuotaCopy` | The sentence shown once the quota is exhausted (default: *"No surveys left on your plan. Buy more quota to publish new surveys."*) |

## Related Content

- [Distribute Your Survey](../app/survey/reference/share/distribute/index.md) — survey quota display and Go to Production flow
- [Customer Subscription Settings](../app/customer/reference/customer/subscription.md) — customer portal quota history and top-ups
- [How to Buy Additional Quota](../app/customer/how-to/buy-additional-quota.md) — purchasing additional survey and team quota packs
