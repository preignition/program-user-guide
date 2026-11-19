---
description: How plan subscriptions, recurring survey quota, permanent team quota, grace periods and top-up packs fit together.
---

# Plans, Subscriptions and Quota Lifecycle

A plan defines how much the organization can do and for how long. Two quota types matter day to day: **survey quota**, which recurs with the billing period, and **team quota**, which is permanent. This article explains the lifecycle and what happens when a quota runs out.

## The subscription

The subscription is the commercial relationship with Stripe. It has:

- a **plan** and a **billing interval** (monthly or yearly);
- a **status** — active, trialing, past due, unpaid, paused, or incomplete;
- a **billing period** that determines when quota renews;
- a set of **entitlements**, including the quota allowances.

Billing changes — a new plan, a cancellation, a payment method — happen in the Stripe Billing Portal. The Customer Portal displays what Stripe reports.

## Survey quota: recurring

Survey quota limits how many surveys can be in production at the same time.

- The allowance is tied to the **current quota period**.
- Publishing a survey to production redeems a unit.
- When the period renews, the allowance resets; unused survey units do **not** roll over.
- Deleting or unpublishing a survey affects production, but does not retroactively restore quota already consumed in the period.

Because the allowance resets, survey quota behaves like a monthly (or annual) capacity, not a bank balance. Plan publishing around the period rather than stockpiling.

### Grace period

If publishing exceeds the allowance, the organization does not fail silently. A **10-day grace window** opens, with a warning and a deadline in **Subscription → Quota**.

- During grace, the over-quota survey continues to accept respondents.
- The window must be settled before the deadline by buying quota or reducing production surveys.
- Ignoring it leaves the organization over its allowance; resolve it before the deadline.

## Team quota: permanent

Team quota limits how many team workspaces exist.

- Creating a team redeems one unit.
- Team quota does **not** reset at renewal and team units do **not** lapse.
- A team unit is returned only when the organization no longer needs that team; soft-deleting a team keeps its allocation, so it can be restored.
- A team top-up pack is a permanent addition.

This is why team quota is bought differently from survey quota: it is closer to a licence seat than to a monthly allowance.

## Top-up packs

When an allowance runs out, the organization can buy one-off packs without changing the recurring plan.

| Pack | Applies to | Lifetime |
| --- | --- | --- |
| **Survey quota** | The current quota period | Expires with the period; also clears an active grace window. |
| **Team quota** | The organization | Permanent; never lapses at renewal. |

Packs are purchased through Stripe Checkout. Units are granted when the invoice settles, not when the checkout page closes; the Quota tab shows a processing notice until then.

Buying a pack is not a plan upgrade. The recurring subscription is unchanged, so the next period returns to the plan allowance plus any permanent team packs.

## Trials

A trial starts without payment details and carries the plan's entitlements for its duration.

- Adding a payment method before the trial ends lets billing start automatically.
- Without a payment method, the subscription cannot renew when the trial ends.
- Work created during the trial remains; access depends on resolving billing.

## Plan changes

Changing plan changes the allowance, not the existing work. After a change:

- existing surveys and teams stay;
- the new allowance applies from the effective date Stripe reports;
- quota already consumed is not recalculated retroactively.

If the new plan has a lower survey allowance than the organization currently has in production, resolve the excess before renewal to avoid entering grace.

## Reading the Quota tab

**Subscription → Quota** is the authoritative view:

- each quota type with its remaining units;
- the plan the allowance comes from;
- a balance chart and an event timeline showing allocation, purchases, renewals, usage and adjustments;
- the grace banner, when one is active;
- the buy controls, shown only when a pack is on sale for that type.

Use the timeline when a number looks wrong: it shows what changed the balance and when.

## Related Content

- [Subscription Reference](../reference/customer/subscription.md): Tabs, statuses and quota controls.
- [How to Manage Your Subscription and Billing](../how-to/manage-subscription-and-billing.md): The billing tasks.
- [How to Buy Additional Quota](../how-to/buy-additional-quota.md): Buying a pack.
- [Data Sovereignty and Storage Locations](./data-sovereignty-and-storage-locations.md): What else is fixed at onboarding.
- [Customers, Teams and the Active Team](./customers-teams-and-active-team.md): Where team quota is spent.
