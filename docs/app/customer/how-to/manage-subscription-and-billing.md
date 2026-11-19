---
description: How to open the Stripe Billing Portal, add a payment method during a trial, review invoices, change or cancel a plan, and manage quota in the Customer Portal.
---

# How to Manage Your Subscription and Billing

Billing is handled by Stripe. The Customer Portal **Subscription** page shows what Stripe reports and hands billing changes to the Stripe Billing Portal. This guide covers the common tasks an account Owner or Admin needs.

## Before you start

- You need an account role that can reach **Customer Portal → Subscription**; billing details and plan changes are Owner or Admin tasks.
- Have a card or bank details ready if you are adding a payment method.
- Trials start without payment details. Billing only begins when the trial ends **and** a payment method is on file.

## Open the Subscription page

1. Sign in to the Customer Portal.
2. Select **Subscription** in the left menu.
3. Use the **Subscription**, **Invoice**, **Payment** and **Quota** tabs for the task at hand.

A status banner appears above the tabs only when something needs attention. If it is hidden, the subscription is active or trialing.

## Add a payment method during a trial

1. Read the **Trial ending** banner to see how long remains.
2. Select **Setup Payment (card)** or **Setup Payment (bank)**.
3. Complete the method in Stripe, then return to the portal.

If a payment method is already on file, billing starts automatically when the trial ends. If not, the subscription cannot renew.

## Open the Billing Portal

Select **Access Billing Portal** on the Subscription, Invoice or Payment tab. The Stripe-hosted portal lets you:

- add or replace a payment method;
- download invoices and receipts;
- change the plan or billing interval;
- cancel the subscription.

When you finish, Stripe returns you to the page you started from.

## Review invoices and payments

- **Invoice** lists every invoice with its description, total, status, date, billing period and number. Expand a row and select **View Invoice Details** to open it in Stripe.
- **Payment** lists actual payment attempts only, with amount, status, date and description.

Invoices and payments are records from Stripe. If a payment fails, the subscription status becomes `past_due` or `unpaid`; update the payment method in the Billing Portal to recover it.

## Change or cancel a plan

1. Open the Billing Portal.
2. Choose the new plan or cancel the subscription.
3. Complete the Stripe flow and return to the portal.

The portal does not edit Stripe records directly. Plan changes take effect according to Stripe's proration, and the Subscription tab shows the new status and period once Stripe reports it.

### Subscription statuses

| Status | What it means |
| --- | --- |
| `active` | Paid and up to date. |
| `trialing` | Inside the free trial. |
| `past_due` | The most recent payment failed. |
| `unpaid` | Payment has not been collected. |
| `paused` | The subscription is paused. |
| `incomplete` | The first payment was not completed. |
| `incomplete_expired` | Checkout expired before it was completed. |

## Manage quota

Open the **Quota** tab to see remaining **survey** and **team** units, the plan allowance, a balance chart and the event timeline for each type.

- **Survey quota** applies to the current quota period. If publishing exceeded the allowance, a grace banner shows the deadline to settle it. Buying survey quota clears the grace window.
- **Team quota** is permanent and never lapses at renewal.
- **Buy survey quota** / **Buy team quota** open Stripe Checkout for a one-off pack; this does not change the recurring subscription.

See [How to Buy Additional Quota](./buy-additional-quota.md) for the purchase steps and what happens after payment.

## Troubleshooting

- **"Payment could not be processed"**: open the Billing Portal and update the payment method. The banner clears when Stripe reports a successful payment.
- **The plan did not change**: plan changes happen in Stripe. Return to the portal and refresh; if the status still shows the old plan, check the Billing Portal for an incomplete checkout.
- **Quota did not increase after purchase**: units are granted when the invoice settles. The Quota tab shows a processing notice until then; refresh after Stripe confirms.
- **Currency is wrong**: currency is chosen during onboarding and cannot be changed later. Contact support.

## Related Content

- [Subscription Reference](../reference/customer/subscription.md): Tabs, statuses, invoices and the quota workbench.
- [How to Buy Additional Quota](./buy-additional-quota.md): Buying one-off survey and team packs.
- [How to Manage Teams](./manage-teams.md): How team quota limits new workspaces.
