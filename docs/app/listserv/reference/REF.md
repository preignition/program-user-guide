# Reference

## Public Pages Specification - public/index.md

- [broadcast.ts](../../../../../app/app-listserv/src/page/broadcast.ts): Lit element component rendering the public broadcast archive and search controls.
- [subscribe.ts](../../../../../app/app-listserv/src/page/subscribe.ts): Accessible public subscription form component with WCAG controls.
- [Subscriber.ts](../../../../../lit-app/schema/listserv/model/Subscriber.ts): Effect Schema definition for subscriber records, tokens, and delivery preferences.

## Admin Pages Specification - admin/index.md

- [admin.ts](../../../../../app/app-listserv/src/page/admin.ts): Top-level admin drawer routing container and header provider.
- [welcome.ts](../../../../../app/app-listserv/src/page/admin/welcome.ts): Admin landing panel describing administrative functions.
- [moderation.ts](../../../../../app/app-listserv/src/page/admin/moderation.ts): Moderation Queue component filtering submitted broadcasts for review.
- [broadcast.ts](../../../../../app/app-listserv/src/page/admin/broadcast.ts): Reactive grid component listing channel broadcasts and threaded responses.
- [subscriber.ts](../../../../../app/app-listserv/src/page/admin/subscriber.ts): Subscriber management grid showing status and delivery lists.

## Channel Settings Specification - settings/index.md

- [settings.ts](../../../../../app/app-listserv/src/page/settings.ts): Settings drawer router managing application configuration views.
- [channel.ts](../../../../../app/app-listserv/src/page/settings/channel.ts): Channel metadata, contact info, and submission rate limits settings.
- [language.ts](../../../../../app/app-listserv/src/page/settings/language.ts): Interface for enabling active translation target languages.
- [bounce.ts](../../../../../app/app-listserv/src/page/settings/bounce.ts): Bounce threshold settings and subscriber list cleaning controls.
- [user.ts](../../../../../app/app-listserv/src/page/settings/user.ts): User access management component for managing channel team roles.
- [Channel.ts](../../../../../lit-app/schema/listserv/model/Channel.ts): Effect Schema definition for channels, access roles, and bounce handling rules.
- [audience-import-dialog.ts](../../../../../app/app-listserv/src/page/settings/audience-import-dialog.ts): Dialog component for seeding channel subscribers from a team audience.
