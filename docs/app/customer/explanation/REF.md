# Reference

## Customer Portal - Explanation References

- [customerAccessRoles.ts](../../../../../app/app-customer/src/entity/customerAccessRoles.ts) — Customer administrative roles and policy gates for account holders.
- [isOwnerOrAdmin.ts](../../../../../app/app-customer/src/page/isOwnerOrAdmin.ts) — Role check predicates for organization owners and administrators.
- [customer-portal-theme.ts](../../../../../app/app-customer/src/page/portal/customer-portal-theme.ts) — Customer color system implementation, chroma/hue palette generation, and contrast calculation.
- [customer-settings.ts](../../../../../app/app-customer/src/i18n/customer-settings.ts) — Internationalization and descriptions for customer settings and access roles.

## Customers, Teams and the Active Team - customers-teams-and-active-team

- `app/app-customer/src/page/customer-portal.ts`: Customer-level routes and team switching.
- `app/app-customer/src/page/customer-team.ts`: Team-level workspace routes.
- `lit-app/access/accessPolicy.ts`: Policy evaluation shared by account, team and survey access.

## Data Sovereignty and Storage Locations - data-sovereignty-and-storage-locations

- `app/app-customer/src/entity/Customer/StorageLocation.ts`: Storage-location field and permanence rule.
- `lit-app/shared/config/database.ts`: Multi-region and regional location catalogue.

## Plans, Subscriptions and Quota Lifecycle - plans-subscriptions-and-quota

- `app/app-customer/src/page/portal/customer-portal-subscription.ts`: Subscription and quota tabs.
- `app/app-customer/src/widget/quota-history.ts`: Quota balance, history timeline and grace banner.
- `app/app-customer/functions/src/payment/`: Stripe subscription and top-up settlement.

## Understanding the Platform API - understanding-the-platform-api

- `documentation/docs/public/api.html`: The Scalar-rendered OpenAPI reference.
- `app/app-customer/src/page/team/customer-team-api-keys.ts`: Team API-key lifecycle.
- `app/app-base/api.ts`: Shared API client and authentication.
