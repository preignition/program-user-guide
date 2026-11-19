# Reference

## Customer Settings - Reference

- `app/app-customer/src/entity/Customer/Settings.ts`: Customer public settings entity (organization name, language, active languages list, currency).
- `app/app-customer/src/entity/Customer/SettingsPrivate.ts`: Customer private settings entity (contact email and phone number).
- `app/app-customer/src/page/portal/customer-portal-settings.ts`: Profile page hosting Public and Private tabs.
- `app/app-customer/src/page/portal/customer-portal-subscription.ts`: Subscription page with Subscription, Invoice, Payment, and Quota tabs.
- `app/app-customer/src/widget/quota-history.ts`: Quota split-view workbench, remaining balance, balance chart, and event timeline.
- `app/app-customer/src/widget/buy-quota.ts`: Top-up pack purchase dialog and Stripe Checkout integration.
- `app/app-customer/src/entity/customerAccessRoles.ts`: Customer administrative roles and policy gates.
- `app/app-customer/src/entity/CustomerAdminE.ts`: Account holder membership management entity.
- `app/app-customer/src/page/portal/customer-portal-team.ts`: Teams list view, team quota badges, active team switcher, and shortcut toggles.
- `app/app-customer/src/entity/Team/TeamE.ts`: Team entity definition and actions.
- `app/app-customer/src/page/portal/customer-portal-theme.ts`: Organization theme editor and color tokens.
- `app/app-customer/src/entity/Customer/StorageLocation.ts`: Storage Location entity with immutable data location selection and regional/multi-region lists.
- `app/app-customer/src/page/portal/customer-portal-app.ts`: Application module management and activation.
- `app/app-customer/src/page/portal/customer-portal-referral.ts`: Referral link generator, reward structure, and referral history table.
- `app/app-customer/src/entity/ReferralItemE.ts`: Referral record entity and history model.
- `app/app-customer/src/page/customer-portal.ts`: Customer portal navigation drawer routes and danger zone embedding.
