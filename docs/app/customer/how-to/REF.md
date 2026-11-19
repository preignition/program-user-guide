# Reference

## Customer App - Buy Additional Quota

- [quota-history.ts](../../../../../app/app-customer/src/widget/quota-history.ts): the portal Quota tab — the quota type list, the remaining figure, the per-type grace banner, the balance chart and the event timeline.
- [buy-quota.ts](../../../../../app/app-customer/src/widget/buy-quota.ts): the per-type Buy control and its dialog — the pack picker, the price and the Stripe Checkout hand-off.
- [quota-topup.ts](../../../../../app/app-customer/src/quota-topup.ts): which top-up packs are sellable for a quota type (an active one-off price in the customer's currency).
- [customer-portal-subscription.ts](../../../../../app/app-customer/src/page/portal/customer-portal-subscription.ts): hosts the Quota tab, the `?tab=quota` deep link and the Stripe-return notice.
- [paymentService.ts](../../../../../app/app-customer/actionApi/src/paymentService.ts): grants the purchase when the invoice settles (`invoice.paid`), once per invoice.
- [how-to.spec.ts](../../../../src/customer/how-to.spec.ts): Playwright test capturing the buy flow screenshots.

## Customer App - API Keys & Interactive API Documentation

- [customer-team-api-keys.ts](../../../../../app/app-customer/src/page/team/customer-team-api-keys.ts): Web component rendering the API key management panel, create modal dialog, auto-copy behavior, and revoke user actions.
- [api.html](/api.html): Interactive Scalar API Reference page loading the OpenAPI definition for testing endpoints.
- [how-to.spec.ts](../../../../src/customer/how-to.spec.ts): Playwright test suite capturing screenshots and verifying the step-by-step user interactions for adding and revoking API keys.

## Managing teams - manage-teams

- `app/app-customer/src/page/customer-portal.ts`: Teams route, card list and team settings menu.
- `app/app-customer/src/entity/Team/TeamE.ts`: Team actions, including Set as Active Team and shortcuts.
- `app/app-customer/src/entity/action/addTeam.ts`: Add Team dialog, quota redemption and error handling.
- `app/app-customer/src/page/team/customer-team-danger.ts`: Soft-delete and restore team.

## Managing account holders and team members - manage-account-holders-and-team-members

- `app/app-customer/src/page/customer-settings.ts`: Account holder settings route.
- `app/app-customer/src/page/customer-team.ts`: Team members route.
- `lit-app/access/internal/invite.ts`: Invitation flow shared by account and team membership.
- `lit-app/access/internal/set-role.ts`: Role changes and revocations.

## Managing subscription and billing - manage-subscription-and-billing

- `app/app-customer/src/page/portal/customer-portal-subscription.ts`: Subscription, Invoice, Payment and Quota tabs.
- `app/app-customer/functions/src/payment/`: Stripe webhook and billing integration.
- `app/app-customer/src/entity/action/setupPayment.ts`: Card setup during a trial.
- `app/app-customer/src/entity/action/updateSubscription.ts`: Plan change hand-off to Stripe.

## Configuring team presentation and communication - configure-team-presentation-and-communication

- `app/app-customer/src/entity/Team/Presentation.ts`: Title, description, logo and presentation translation fields.
- `app/app-customer/src/entity/Team/Communication.ts`: Sender address, reply-to, signature and footer.
- `app/app-customer/src/page/team/customer-team-channel.ts`: Channel list and controls.

## Managing team audiences - manage-team-audiences

- `app/app-customer/src/page/team/customer-team-audiences.ts`: Audience cards, import dialog, recipient grid, export and archive controls.
- `app/app-customer/src/entity/audience/`: Audience and recipient models, CSV mapping and import outcomes.
- `documentation/src/survey/how-to/send-invitations.spec.ts`: Captures the audience screenshots under the Customer how-to assets.
