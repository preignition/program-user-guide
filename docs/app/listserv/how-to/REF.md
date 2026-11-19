# Reference

## Subscribing & Managing Preferences - subscribing-and-managing-preferences.md

- [subscribe.ts](../../../../../app/app-listserv/src/page/subscribe.ts): WCAG 2.1 AA accessible public subscription form component supporting language selection and digest mode toggle.
- [SubscriptionServiceLive.ts](../../../../../app/app-listserv/functions/src/service/SubscriptionServiceLive.ts): Service handling double opt-in registration and verification token creation.
- [emailCommands.ts](../../../../../app/app-listserv/functions/src/service/emailCommands.ts): Multilingual command parser detecting `SUBSCRIBE`, `UNSUBSCRIBE`, and `HELP` in EN, FR, PT, and AR.
- [emailCommandHandlers.ts](../../../../../app/app-listserv/functions/src/service/emailCommandHandlers.ts): Handlers processing email commands.

## Browsing & Searching Archives - browsing-and-searching-archives.md

- [broadcast.ts](../../../../../app/app-listserv/src/page/broadcast.ts): Public broadcast archive page component querying sent messages and displaying privacy warnings.
- [PublicBroadcastE.ts](../../../../../app/app-listserv/src/entity/PublicBroadcastE.ts): Read-only Lit UI model for rendering sent broadcast cards in public archives.

## Creating & Sending Broadcasts - creating-and-sending-broadcasts.md

- [broadcast-detail.ts](../../../../../app/app-listserv/src/page/admin/broadcast-detail.ts): Admin detail editor for creating, formatting, and submitting broadcasts.
- [send.ts](../../../../../app/app-listserv/functions/src/machine/send.ts): Server-side send actor program invoking Mailgun mailing list distribution and status updates.

## Moderating Community Submissions - moderating-community-submissions.md

- [moderation.ts](../../../../../app/app-listserv/src/page/admin/moderation.ts): Admin Moderation Queue component listing submitted community posts awaiting review.
- [moderate.ts](../../../../../app/app-listserv/functions/src/machine/moderate.ts): AI moderation handler utilizing model assistance for classification and spam scoring.

## Analyzing Broadcast Performance - analyzing-broadcast-performance.md

- [broadcast.ts](../../../../../app/app-listserv/src/page/admin/broadcast.ts): Admin broadcast list component rendering delivery stats, response counts, and grid row details.
- `app/app-listserv/docs/adr/0002-disable-click-tracking.md`: ADR documenting click tracking disablement.

## Importing a Team Audience - importing-a-team-audience.md

- [audience-import-dialog.ts](../../../../../app/app-listserv/src/page/settings/audience-import-dialog.ts): Audience import dialog component with searchable audience picker, outcome preview, consent warranty gate, live progress/resume, and transient error report.
- [SubscriberImportE.ts](../../../../../app/app-listserv/src/entity/SubscriberImportE.ts): Read-only Lit UI entity for the Import history grid, outcome summary, column filters, and expandable audit row details.
- [audience-import.ts](../../../../../app/app-listserv/actionApi/src/audience-import.ts): Server-side preview and import handlers implementing recipient classification and bulk reconciliation.
- [Subscriber.ts](../../../../../lit-app/schema/listserv/model/Subscriber.ts): Effect Schema definitions for subscriber identity, the per-channel email uniqueness guard, the import audit record, and the consent warranty text/version.
- `app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md`: ADR decoupling opaque subscriber IDs from Firebase Auth UIDs (`ref.user`) with a per-channel email guard.

## Configuring Channel Settings - configuring-channel-settings.md

- [channel.ts](../../../../../app/app-listserv/src/page/settings/channel.ts): Web component rendering Channel Configuration form fields.
- [language.ts](../../../../../app/app-listserv/src/page/settings/language.ts): Web component managing active language selection switches.
- [bounce.ts](../../../../../app/app-listserv/src/page/settings/bounce.ts): Web component managing bounce thresholds and manual list cleaning triggers.
- [user.ts](../../../../../app/app-listserv/src/page/settings/user.ts): Web component managing channel team roles and membership permissions.
