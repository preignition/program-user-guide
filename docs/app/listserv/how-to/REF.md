# Reference

## Subscribing & Managing Preferences - subscribing-and-managing-preferences.md

- `app/app-listserv/src/page/subscribe.ts`: WCAG 2.1 AA accessible public subscription form component supporting language selection and digest mode toggle.
- `app/app-listserv/functions/src/service/SubscriptionServiceLive.ts`: Service handling double opt-in registration and verification token creation.
- `app/app-listserv/functions/src/service/emailCommands.ts`: Multilingual command parser detecting `SUBSCRIBE`, `UNSUBSCRIBE`, and `HELP` in EN, FR, PT, and AR.
- `app/app-listserv/functions/src/service/emailCommandHandlers.ts`: Handlers processing email commands.

## Browsing & Searching Archives - browsing-and-searching-archives.md

- `app/app-listserv/src/page/broadcast.ts`: Public broadcast archive page component querying sent messages and displaying privacy warnings.
- `app/app-listserv/src/entity/PublicBroadcastE.ts`: Read-only Lit UI model for rendering sent broadcast cards in public archives.

## Creating & Sending Broadcasts - creating-and-sending-broadcasts.md

- `app/app-listserv/src/page/admin/broadcast-detail.ts`: Admin detail editor for creating, formatting, and submitting broadcasts.
- `app/app-listserv/functions/src/machine/send.ts`: Server-side send actor program invoking Mailgun mailing list distribution and status updates.
- `app/app-listserv/functions/src/machine/renderBroadcastBody.ts`: Builds the HTML and text footer, including the optional confirm-receipt link.
- `lit-app/schema/listserv/model/Broadcast.ts`: Broadcast and receipt models; the `confirmReceipt` opt-in and the `confirmed` stat.
- `lit-app/schema/listserv/confirm.ts`: Signed confirm-receipt link and its token input.

## Moderating Community Submissions - moderating-community-submissions.md

- `app/app-listserv/src/page/admin/moderation.ts`: Admin Moderation Queue component listing submitted community posts awaiting review.
- `app/app-listserv/functions/src/machine/moderate.ts`: AI moderation handler utilizing model assistance for classification and spam scoring.

## Analyzing Broadcast Performance - analyzing-broadcast-performance.md

- `app/app-listserv/src/page/admin/analytics.ts`: Analytics page with the summary tiles and the sent-only broadcast query.
- `app/app-listserv/src/entity/AnalyticsEntity.ts`: Analytics grid columns (delivered, opened, confirmed, failed and rates) and the confirmation row detail.
- `app/app-listserv/src/renderer/stats.ts`: Open-rate helpers that apply the provider-prefetch filter and render the prefetched count.
- `app/app-listserv/src/renderer/broadcast-receipts.ts`: Per-broadcast list of recipients who confirmed receipt.
- `app/app-listserv/src/page/admin/broadcast.ts`: Admin broadcast list component rendering delivery stats, response counts, and grid row details.
- `app/app-listserv/functions/src/service/SubscriptionServiceLive.ts`: Validates the confirm link and records the receipt and `stats.confirmed`.
- `app/app-listserv/functions/src/service/MailgunServiceLive.ts`: Classifies an early tracking-image fetch as provider prefetch, counts only later fetches as opens, and stores the provider timestamp on the raw event.
- `api/src/apps/listserv/confirmPage.ts`: Script-free public page whose POST button records a confirmation.
- `app/app-listserv/docs/adr/0002-disable-click-tracking.md`: ADR documenting click tracking disablement.
- `app/app-listserv/docs/adr/0003-confirm-receipt-links.md`: ADR documenting the confirm-receipt link as the human engagement signal.
- `app/app-listserv/docs/adr/0004-exclude-prefetch-from-opens.md`: ADR documenting the two-minute prefetch window and the filtered open count.

## Importing a Team Audience - importing-a-team-audience.md

- `app/app-listserv/src/page/settings/audience-import-dialog.ts`: Audience import dialog component with searchable audience picker, outcome preview, consent warranty gate, live progress/resume, and transient error report.
- `app/app-listserv/src/entity/SubscriberImportE.ts`: Read-only Lit UI entity for the Import history grid, outcome summary, column filters, and expandable audit row details.
- `app/app-listserv/actionApi/src/audience-import.ts`: Server-side preview and import handlers implementing recipient classification and bulk reconciliation.
- `lit-app/schema/listserv/model/Subscriber.ts`: Effect Schema definitions for subscriber identity, the per-channel email uniqueness guard, the import audit record, and the consent warranty text/version.
- `app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md`: ADR decoupling opaque subscriber IDs from Firebase Auth UIDs (`ref.user`) with a per-channel email guard.

## Configuring Channel Settings - configuring-channel-settings.md

- `app/app-listserv/src/page/settings/channel.ts`: Web component rendering Channel Configuration form fields.
- `app/app-listserv/src/page/settings/language.ts`: Web component managing active language selection switches.
- `app/app-listserv/src/page/settings/bounce.ts`: Web component managing bounce thresholds and manual list cleaning triggers.
- `app/app-listserv/src/page/settings/user.ts`: Web component managing channel team roles and membership permissions.

## Managing subscribers - managing-subscribers

- `app/app-listserv/src/entity/SubscriberE.ts`: Subscriber status, digest mode and vacation mode editing.
- `app/app-listserv/src/page/admin/subscriber.ts`: Subscriber directory, filters and grid.
