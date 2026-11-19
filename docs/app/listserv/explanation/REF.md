# Reference

## Email & Web Routes - dual-route-architecture.md

- `app/app-listserv/functions/src/service/MailgunServiceLive.ts`: Inbound mail processor detecting email command keywords and converting community messages into draft broadcasts.
- `app/app-listserv/functions/src/service/emailCommands.ts`: Multilingual command parser detecting keywords (`SUBSCRIBE`, `UNSUBSCRIBE`, `HELP`) across English, French, Portuguese, and Arabic.
- `app/app-listserv/functions/src/service/emailCommandHandlers.ts`: Parser mapping multilingual keywords across English, French, Portuguese, and Arabic.

## Broadcast Lifecycle & Moderation - broadcast-lifecycle-and-moderation.md

- `app/app-listserv/functions/src/machine/broadcast-lifecycle.ts`: State machine defining lifecycle states (`draft`, `submitted`, `moderated`, `approved`, `sending`, `sent`, `rejected`, `error`).
- `app/app-listserv/functions/src/machine/moderate.ts`: AI content moderation actor for classification and spam scoring.
- `app/app-listserv/actionApi/src/handlers.ts`: Action API handlers registering rate limiting and lifecycle transitions.

## Subscriber Accounts & Sign-In - subscriber-identity-and-auth.md

- `app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md`: Architectural Decision Record coupling subscriber IDs with Firebase Auth UIDs.
- `app/app-listserv/functions/src/service/SubscriptionServiceLive.ts`: Double opt-in verification service creating Firebase Auth users with `accountIncomplete` claims.
- `app/app-listserv/firestore.rules`: Firestore security rules gating write permissions.

## Real-Time Broadcasts & Digests - mailing-list-and-digest-architecture.md

- `app/app-listserv/functions/src/machine/send.ts`: Broadcast dispatch program sending payloads to channel Mailgun mailing lists.
- `app/app-listserv/functions/src/service/MailgunServiceLive.ts`: HTTP client communicating with Mailgun API for mailing lists and member management.

## Broadcast Responses & Threading - broadcast-responses-threading.md

- `app/app-listserv/src/page/admin/broadcast.ts`: Admin grid component rendering response counts and expandable flat response thread rows.
- `app/app-listserv/functions/src/service/MailgunServiceLive.ts`: Inbound handler parsing Reply-To subaddress for response correlation.

## Multilingual Support - multilingual-support.md

- `app/app-listserv/src/page/subscribe.ts`: Public subscription form with language-native radio group rendering from `activeLanguages`.
- `app/app-listserv/src/page/settings/language.ts`: Channel-level active language toggle component sourcing from Customer Settings.
- `app/app-listserv/functions/src/service/emailCommands.ts`: Multilingual command parser matching `SUBSCRIBE`, `UNSUBSCRIBE`, `HELP` in EN, FR, PT, and AR.
- `app/app-listserv/functions/src/machine/send.ts`: Send engine selecting per-subscriber locale versions from `broadcast.content`.

## Markdown Content Format - markdown-content-format.md

- `app/app-listserv/functions/src/machine/renderBroadcastBody.ts`: Server-side conversion of Markdown to HTML for email template injection.
- `app/app-listserv/src/renderer/broadcast-email-view.ts`: Client-side broadcast preview for live rendering.
- `app/app-listserv/functions/src/service/htmlToMarkdown.ts`: Conversion utility stripping HTML tags and converting rich-text HTML emails to Markdown.

## User-facing internals moved out of Explanation

- `app/app-listserv/notes/explanation-internals.md`: The implementation detail (storage, lifecycle machine, mail transport, claims, headers) that the Explanation pages no longer expose.

## Managing Subscribers - ../how-to/managing-subscribers

- `app/app-listserv/src/entity/SubscriberE.ts`: Subscriber grid, status/digest/vacation fields and edit actions.
- `app/app-listserv/src/page/admin/subscriber.ts`: Admin subscriber directory.

## Subscriber web submissions - ../reference/public

- `app/app-listserv/src/page/broadcast.ts`: Public archive, New Broadcast gate and public/private visibility.
- `app/app-listserv/src/page/admin/broadcast-detail.ts`: Broadcast composition shared by staff and the subscriber submission route.
