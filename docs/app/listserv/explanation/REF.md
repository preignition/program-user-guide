# Reference

## Dual-Route Architecture - dual-route-architecture.md

- [MailgunServiceLive.ts](../../../../../app/app-listserv/functions/src/service/MailgunServiceLive.ts): Inbound mail processor detecting email command keywords and converting community messages into draft broadcasts.
- [emailCommands.ts](../../../../../app/app-listserv/functions/src/service/emailCommands.ts): Multilingual command parser detecting keywords (`SUBSCRIBE`, `UNSUBSCRIBE`, `HELP`) across English, French, Portuguese, and Arabic.
- [emailCommandHandlers.ts](../../../../../app/app-listserv/functions/src/service/emailCommandHandlers.ts): Parser mapping multilingual keywords across English, French, Portuguese, and Arabic.

## Broadcast Lifecycle & AI Moderation - broadcast-lifecycle-and-moderation.md

- [broadcast-lifecycle.ts](../../../../../app/app-listserv/functions/src/machine/broadcast-lifecycle.ts): State machine defining lifecycle states (`draft`, `submitted`, `moderated`, `approved`, `sending`, `sent`, `rejected`, `error`).
- [moderate.ts](../../../../../app/app-listserv/functions/src/machine/moderate.ts): AI content moderation actor for classification and spam scoring.
- [handlers.ts](../../../../../app/app-listserv/actionApi/src/handlers.ts): Action API handlers registering rate limiting and lifecycle transitions.

## Subscriber Identity & Auth Integration - subscriber-identity-and-auth.md

- `app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md`: Architectural Decision Record coupling subscriber IDs with Firebase Auth UIDs.
- [SubscriptionServiceLive.ts](../../../../../app/app-listserv/functions/src/service/SubscriptionServiceLive.ts): Double opt-in verification service creating Firebase Auth users with `accountIncomplete` claims.
- `app/app-listserv/firestore.rules`: Firestore security rules gating write permissions.

## Mailing List & Digest Engine Architecture - mailing-list-and-digest-architecture.md

- [send.ts](../../../../../app/app-listserv/functions/src/machine/send.ts): Broadcast dispatch program sending payloads to channel Mailgun mailing lists.
- [MailServiceLive.ts](../../../../../app/app-listserv/functions/src/service/MailgunServiceLive.ts): HTTP client communicating with Mailgun API for mailing lists and member management.

## Broadcast Responses & Threading - broadcast-responses-threading.md

- [broadcast.ts](../../../../../app/app-listserv/src/page/admin/broadcast.ts): Admin grid component rendering response counts and expandable flat response thread rows.
- [MailgunServiceLive.ts](../../../../../app/app-listserv/functions/src/service/MailgunServiceLive.ts): Inbound handler parsing Reply-To subaddress for response correlation.

## Multilingual Support - multilingual-support.md

- [subscribe.ts](../../../../../app/app-listserv/src/page/subscribe.ts): Public subscription form with language-native radio group rendering from `activeLanguages`.
- [language.ts](../../../../../app/app-listserv/src/page/settings/language.ts): Channel-level active language toggle component sourcing from Customer Settings.
- [emailCommands.ts](../../../../../app/app-listserv/functions/src/service/emailCommands.ts): Multilingual command parser matching `SUBSCRIBE`, `UNSUBSCRIBE`, `HELP` in EN, FR, PT, and AR.
- [send.ts](../../../../../app/app-listserv/functions/src/machine/send.ts): Send engine selecting per-subscriber locale versions from `broadcast.content`.

## Markdown Content Format - markdown-content-format.md

- [renderBroadcastBody.ts](../../../../../app/app-listserv/functions/src/machine/renderBroadcastBody.ts): Server-side conversion of Markdown to HTML for email template injection.
- [broadcast-email-view.ts](../../../../../app/app-listserv/src/renderer/broadcast-email-view.ts): Client-side broadcast preview for live rendering.
- [htmlToMarkdown.ts](../../../../../app/app-listserv/functions/src/service/htmlToMarkdown.ts): Conversion utility stripping HTML tags and converting rich-text HTML emails to Markdown.
