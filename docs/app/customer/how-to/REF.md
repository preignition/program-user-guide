# Reference

## Customer App - Buy Additional Quota

- [quota-history.ts](../../../../app/app-customer/src/widget/quota-history.ts): the portal Quota tab — the quota type list, the remaining figure, the per-type grace banner, the balance chart and the event timeline.
- [buy-quota.ts](../../../../app/app-customer/src/widget/buy-quota.ts): the per-type Buy control and its dialog — the pack picker, the price and the Stripe Checkout hand-off.
- [quota-topup.ts](../../../../app/app-customer/src/quota-topup.ts): which top-up packs are sellable for a quota type (an active one-off price in the customer's currency).
- [customer-portal-subscription.ts](../../../../app/app-customer/src/page/portal/customer-portal-subscription.ts): hosts the Quota tab, the `?tab=quota` deep link and the Stripe-return notice.
- [paymentService.ts](../../../../app/app-customer/actionApi/src/paymentService.ts): grants the purchase when the invoice settles (`invoice.paid`), once per invoice.
- [how-to.spec.ts](../../../../src/customer/how-to.spec.ts): Playwright test capturing the buy flow screenshots.

## Customer App - API Keys & Interactive API Documentation

- [customer-team-api-keys.ts](../../../../app/app-customer/src/page/team/customer-team-api-keys.ts): Web component rendering the API key management panel, create modal dialog, auto-copy behavior, and revoke user actions.
- [api.html](/api.html): Interactive Scalar API Reference page loading the OpenAPI definition for testing endpoints.
- [how-to.spec.ts](../../../../src/customer/how-to.spec.ts): Playwright test suite capturing screenshots and verifying the step-by-step user interactions for adding and revoking API keys.
