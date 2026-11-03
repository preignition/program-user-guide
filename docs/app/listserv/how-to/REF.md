# Reference

## Subscribing & Managing Preferences - subscribing-and-managing-preferences.md

- [`app/app-listserv/src/page/subscribe.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/subscribe.ts): WCAG 2.1 AA accessible public subscription form component supporting language selection and digest mode toggle.
- [`app/app-listserv/functions/src/callable/subscribe.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/callable/subscribe.ts): HTTP REST cloud function endpoint handling double opt-in registration and verification token creation.
- [`app/app-listserv/functions/src/service/emailCommandHandlers.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/functions/src/service/emailCommandHandlers.ts): Parser and handler for email commands (`SUBSCRIBE`, `UNSUBSCRIBE`, `HELP`) in EN, FR, PT, and AR.

## Browsing & Searching Archives - browsing-and-searching-archives.md

- [`app/app-listserv/src/page/broadcast.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/broadcast.ts): Public broadcast archive page component querying sent messages and displaying privacy warnings.
- [`app/app-listserv/src/entity/PublicBroadcastE.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/entity/PublicBroadcastE.ts): Read-only Lit UI model for rendering sent broadcast cards in public archives.

## Creating & Sending Broadcasts - creating-and-sending-broadcasts.md

- [`app/app-listserv/src/page/admin/broadcast-detail.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin/broadcast-detail.ts): Admin detail editor for creating, formatting, attaching files, and triggering state machine dispatch actions.
- [`app/app-listserv/actionApi/src/send.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/actionApi/src/send.ts): Server-side send actor program invoking Mailgun mailing list distribution and status state updates.

## Moderating Community Submissions - moderating-community-submissions.md

- [`app/app-listserv/src/page/admin/moderation.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin/moderation.ts): Admin Moderation Queue component listing submitted community posts awaiting review.
- [`app/app-listserv/actionApi/src/moderate.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/actionApi/src/moderate.ts): AI moderation handler utilizing `effect/unstable/ai` (`gpt-4o-mini`) for classification and spam scoring.

## Analyzing Broadcast Performance - analyzing-broadcast-performance.md

- [`app/app-listserv/src/page/admin/broadcast.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin/broadcast.ts): Admin broadcast list component rendering delivery stats, response counts, and grid row details.
- [`app/app-listserv/api/src/mailgunLive.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/api/src/mailgunLive.ts): Mailgun webhook handler processing delivery, open, click, and bounce events.

## Importing a Team Audience - importing-a-team-audience.md

- [`app/app-listserv/src/page/settings/import.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/import.ts): Channel Settings → Audience Import page hosting the import trigger and the read-only Import history grid.
- [`app/app-listserv/src/page/settings/audience-import-dialog.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/audience-import-dialog.ts): Audience import dialog component with searchable audience picker, outcome preview, consent warranty gate, live progress/resume, and transient `row,email,reason` CSV error report.
- [`app/app-listserv/src/entity/SubscriberImportE.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/entity/SubscriberImportE.ts): Read-only Lit UI entity for the Import history grid, outcome summary, column filters, and expandable audit row details.
- [`app/app-listserv/actionApi/src/audience-import.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/actionApi/src/audience-import.ts): Server-side `previewAudienceImport`, `startAudienceImport`, and `runAudienceImport` handlers implementing the recipient classification table, chunked cursor/lease execution, and bulk `importUsers` reconciliation.
- [`lit-app/schema/listserv/model/Subscriber.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/lit-app/schema/listserv/model/Subscriber.ts): Effect Schema definitions for subscriber identity, the per-channel email uniqueness guard, the import audit record, and the consent warranty text/version.
- [`specs/listserv-audience-import.md`](https://gitlab.com/christophe-g/lit-app/-/blob/main/specs/listserv-audience-import.md): Full product and architecture specification for listserv audience import.
- [`app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md): Architectural Decision Record decoupling opaque subscriber IDs from Firebase Auth UIDs (`ref.user`) with a per-channel email guard.

## Configuring Channel Settings - configuring-channel-settings.md

- [`app/app-listserv/src/page/settings/channel.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/channel.ts): Channel Configuration page for setting title, description, admin contact, and rate limits.
- [`app/app-listserv/src/page/settings/language.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/language.ts): Active Languages configuration component for selecting translation targets.
- [`app/app-listserv/src/page/settings/bounce.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/bounce.ts): Bounce handling setting component for threshold configuration and subscriber cleaning.
