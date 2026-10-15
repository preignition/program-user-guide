# Reference

## Survey Quota Card - quota-card.md

- [lit-app/cmp/quota-card/quota-card.ts](../../../lit-app/cmp/quota-card/quota-card.ts): The shared quota card (`lapp-quota-card`) — remaining count badge, used-share progress bar, grace and out-of-quota copy, built on `vaadin-card`/`vaadin-badge`/`vaadin-progress-bar`.
- [app/app-survey/src/page/edit/deploy/quota-status.ts](../../../app/app-survey/src/page/edit/deploy/quota-status.ts): The survey app's live read of the active customer's quota, feeding the card and dispatching `data-changed` for the Go to Production confirmation.
- [app/app-customer/src/page/portal/customer-portal-subscription.ts](../../../app/app-customer/src/page/portal/customer-portal-subscription.ts): The customer portal's Quota tab, feeding the card from `customerState`.

## Markdown Rich Text Editor - md-editor.md

- [lit-app/cmp/field/md/md-editor.ts](../../../lit-app/cmp/field/md/md-editor.ts): Main component for the Markdown editor, including toolbar and theme actions (info boxes are inserted as `:::` directives).
- [lit-app/shared/md/marked.ts](../../../lit-app/shared/md/marked.ts): Configuration for the 'marked' parser, including custom extensions for block directives (theme-aware and info boxes) and attributes.
- [lit-app/shared/styles/class/md-directive.ts](../../../lit-app/shared/styles/class/md-directive.ts): Info-box styles for the `:::` directive classes (`info`, `success`, `warning`, `error`, `danger`).
- [lit-app/shared/md/parse.ts](../../../lit-app/shared/md/parse.ts): Utility for parsing Markdown and sanitizing the resulting HTML.
- [lit-app/shared/styles/class/show-when-accessibility.ts](../../../lit-app/shared/styles/class/show-when-accessibility.ts): Global CSS classes for theme and accessibility visibility.
- [app/app-base/public/variables.css](../../../app/app-base/public/variables.css): Global CSS variables controlling the display of theme-aware content.
