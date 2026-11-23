# Reference

## Public Pages Specification - public/index.md

- `app/app-listserv/src/page/broadcast.ts`: Lit element component rendering the public broadcast archive and search controls.
- `app/app-listserv/src/page/subscribe.ts`: Accessible public subscription form component with WCAG controls.
- `lit-app/schema/listserv/model/Subscriber.ts`: Effect Schema definition for subscriber records, tokens, and delivery preferences.

## Admin Pages Specification - admin/index.md

- `app/app-listserv/src/page/admin.ts`: Top-level admin drawer routing container and header provider.
- `app/app-listserv/src/page/admin/welcome.ts`: Admin landing panel describing administrative functions.
- `app/app-listserv/src/page/admin/moderation.ts`: Moderation Queue component filtering submitted broadcasts for review.
- `app/app-listserv/src/page/admin/broadcast.ts`: Reactive grid component listing channel broadcasts and threaded responses.
- `app/app-listserv/src/page/admin/analytics.ts`: Analytics page with summary tiles, the sent-only broadcast grid and the confirmation row detail.
- `app/app-listserv/src/entity/AnalyticsEntity.ts`: Column, rate and confirmation-detail configuration for the analytics grid.
- `app/app-listserv/src/page/admin/subscriber.ts`: Subscriber management grid showing status and delivery lists.

## Channel Settings Specification - settings/index.md

- `app/app-listserv/src/page/settings.ts`: Settings drawer router managing application configuration views.
- `app/app-listserv/src/page/settings/channel.ts`: Channel metadata, contact info, and submission rate limits settings.
- `app/app-listserv/src/page/settings/language.ts`: Interface for enabling active translation target languages.
- `app/app-listserv/src/page/settings/bounce.ts`: Bounce threshold settings and subscriber list cleaning controls.
- `app/app-listserv/src/page/settings/user.ts`: User access management component for managing channel team roles.
- `lit-app/schema/listserv/model/Channel.ts`: Effect Schema definition for channels, access roles, and bounce handling rules.
- `app/app-listserv/src/page/settings/audience-import-dialog.ts`: Dialog component for seeding channel subscribers from a team audience.
