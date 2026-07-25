# Reference

## Public Pages Specification - public/index.md

- [`app/app-listserv/src/page/broadcast.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/broadcast.ts): Lit element component rendering the public broadcast archive and search controls.
- [`app/app-listserv/src/page/subscribe.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/subscribe.ts): Accessible public subscription form component with WCAG controls.
- [`app/app-listserv/schema/subscriber.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/schema/subscriber.ts): Effect Schema definition for subscriber records, tokens, and delivery preferences.

## Admin Pages Specification - admin/index.md

- [`app/app-listserv/src/page/admin.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin.ts): Top-level admin drawer routing container and header provider.
- [`app/app-listserv/src/page/admin/welcome.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin/welcome.ts): Admin landing panel describing administrative functions.
- [`app/app-listserv/src/page/admin/moderation.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin/moderation.ts): Moderation Queue component filtering submitted broadcasts for review.
- [`app/app-listserv/src/page/admin/broadcast.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin/broadcast.ts): Reactive grid component listing channel broadcasts and threaded responses.
- [`app/app-listserv/src/page/admin/subscriber.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/admin/subscriber.ts): Subscriber management grid showing status and delivery lists.

## Channel Settings Specification - settings/index.md

- [`app/app-listserv/src/page/settings.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings.ts): Settings drawer router managing application configuration views.
- [`app/app-listserv/src/page/settings/channel.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/channel.ts): Channel metadata, contact info, and submission rate limits settings.
- [`app/app-listserv/src/page/settings/language.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/language.ts): Interface for enabling active translation target languages.
- [`app/app-listserv/src/page/settings/bounce.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/bounce.ts): Bounce threshold settings and subscriber list cleaning controls.
- [`app/app-listserv/src/page/settings/user.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/src/page/settings/user.ts): User access management component for managing channel team roles.
- [`app/app-listserv/schema/channel.ts`](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/schema/channel.ts): Effect Schema definition for channels, access roles, and bounce handling rules.
