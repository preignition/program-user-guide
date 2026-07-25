# Reference

## Dual-Route Architecture - dual-route-architecture.md

- [`app/app-listserv/api/src/api.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/api/src/api.ts): API schema for Mailgun inbound forwarding (`/app/listserv/mail`) and raw REST client endpoints.
- [`app/app-listserv/functions/src/service/MailgunServiceLive.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/service/MailgunServiceLive.ts): Inbound mail processor detecting email command keywords and converting community messages into draft broadcasts.
- [`app/app-listserv/functions/src/service/emailCommandHandlers.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/service/emailCommandHandlers.ts): Parser mapping multilingual keywords (`SUBSCRIBE`, `UNSUBSCRIBE`, `HELP`) across English, French, Portuguese, and Arabic.

## Broadcast Lifecycle & AI Moderation - broadcast-lifecycle-and-moderation.md

- [`app/app-listserv/functions/src/machine/broadcast-lifecycle.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/machine/broadcast-lifecycle.ts): XState v5 state machine defining lifecycle states (`draft`, `submitted`, `moderated`, `approved`, `sending`, `sent`).
- [`app/app-listserv/actionApi/src/moderate.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/actionApi/src/moderate.ts): AI content moderation actor using `effect/unstable/ai` (`gpt-4o-mini`) for classification and spam scoring.
- [`app/app-listserv/actionApi/src/handlers.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/actionApi/src/handlers.ts): Action API handlers registering rate limiting (5 submissions/hour) and lifecycle transitions.

## Subscriber Identity & Auth Integration - subscriber-identity-and-auth.md

- [`app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md): Architectural Decision Record coupling subscriber IDs with Firebase Auth UIDs.
- [`app/app-listserv/functions/src/service/SubscriptionServiceLive.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/service/SubscriptionServiceLive.ts): Double opt-in verification service creating Firebase Auth users with `accountIncomplete` claims.
- [`app/app-listserv/firestore.rules`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/firestore.rules): Firestore security rules gating write permissions on `auth.token.accountIncomplete != true`.

## Mailing List & Digest Engine Architecture - mailing-list-and-digest-architecture.md

- [`app/app-listserv/actionApi/src/send.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/actionApi/src/send.ts): Broadcast dispatch program sending single payloads to channel Mailgun mailing lists.
- [`app/app-listserv/functions/src/jobs/handlers/digestDelivery.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/jobs/handlers/digestDelivery.ts): ScheduledJob handler compiling weekly digests with AI summaries and excerpts.
- [`app/app-listserv/functions/src/service/MailServiceLive.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/service/MailServiceLive.ts): Effect HTTP client communicating with Mailgun v3 API for mailing lists and member management.

## Broadcast Responses & Threading - broadcast-responses-threading.md

- [`app/app-listserv/src/page/admin/broadcast.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin/broadcast.ts): Admin grid component rendering response counts and expandable flat response thread rows.
- [`app/app-listserv/schema/broadcastResponse.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/schema/broadcastResponse.ts): Effect Schema for broadcast-response documents discriminated by `metaData.type` and linked via `ref.rootBroadcastId`.
- [`app/app-listserv/functions/src/service/MailgunServiceLive.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/service/MailgunServiceLive.ts): Inbound handler parsing Reply-To subaddress (`{channelId}+{broadcastId}`) for response correlation and Mailgun spam header extraction.
