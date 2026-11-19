---
description: Reference for Organization Danger Zone actions.
---

# Danger Zone

The **Danger Zone** contains high-impact administrative actions for managing the lifecycle of your customer account.

::: warning Access Restriction
Actions in the Danger Zone affect the entire organization and are strictly restricted to **Owners** and platform Super Admins.
:::

## Available Actions

### Delete Customer

- **Behavior:** Soft-deletes the customer organization account. All associated teams, surveys, and form mirrors are taken offline.
- **Data Retention & Reversibility:** Deleting an organization does not permanently destroy database records immediately. The operation is reversible—deleted customer accounts retain their configuration and can be restored.

### Restore Customer

- **Behavior:** When an organization is currently soft-deleted, the Danger Zone provides a **Restore Customer** action. Restoring brings the organization, its teams, and its resources back online with all member permissions and quota records intact.

::: info Subscription & Billing Management
To pause, change, or cancel your underlying recurring subscription, do not use the Danger Zone. Use **Access Billing Portal** under [Subscription](./subscription.md) to manage your Stripe billing plan.
:::

## Related Content

- [Customer Subscription Reference](./subscription.md) — Managing billing, invoices, and plan status via Stripe
- [Team Danger Zone Reference](../team/danger-zone.md) — Soft-deleting and restoring individual teams
- [Understanding Access and Permissions](../../explanation/understanding-access-and-permissions.md) — Organization vs. team permission boundaries
