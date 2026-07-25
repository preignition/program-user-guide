# Listserv Documentation Scripts

Playwright scripts that generate screenshots for the Listserv application documentation.

## Structure

```
src/listserv/
├── reference/           Full-page screenshots of every application page
│   ├── constants.ts     Shared URL, path, and clip area constants
│   └── index.spec.ts    Navigates all public + admin + settings pages
└── how-to/              Annotated step-by-step screenshots for user tasks
    ├── subscribing-managing.spec.ts     US 1 — Subscribe & delivery preferences
    ├── browsing-archives.spec.ts        US 7 — Browse & search broadcast archives
    ├── creating-sending.spec.ts         US 9,10,12 — Create broadcasts, templates, attachments
    ├── moderating-content.spec.ts       US 11 — Review community submissions
    ├── analyzing-performance.spec.ts    US 13 — View broadcast analytics
    └── configuring-settings.spec.ts     US 14,15,16,18 — Channel config, languages, bounce, access
```

## Usage

Start the listserv app, then run the scripts from the documentation root:

```sh
pnpm playwright test src/listserv/reference
pnpm playwright test src/listserv/how-to
```

The app must be running at `http://localhost:7173/listserv-playwright/listserv`.

## How-To User Story Coverage

| Script | User Story |
|--------|------------|
| `subscribing-managing.spec.ts` | US 1 — Subscribe to a listserv channel |
| `browsing-archives.spec.ts` | US 7 — Browse and search past broadcasts |
| `creating-sending.spec.ts` | US 9 — Create & send email broadcasts<br>US 10 — Use predefined email templates<br>US 12 — Manage attachments |
| `moderating-content.spec.ts` | US 11 — Review community submissions |
| `analyzing-performance.spec.ts` | US 13 — View per-broadcast analytics |
| `configuring-settings.spec.ts` | US 14 — Configure welcome email<br>US 15 — Configure bounce handling<br>US 16 — Display admin contact info<br>US 18 — Enforce attachment limits |

## Excluded Stories

These user stories have no direct UI (email/backend flows):

| Story | Reason |
|-------|--------|
| US 2 | Double opt-in confirmation (email only) |
| US 3 | Unsubscribe via email link (email only) |
| US 4 | Email commands: SUBSCRIBE/UNSUBSCRIBE (email only) |
| US 5 | Digest mode preference (backend setting) |
| US 6 | Vacation mode (backend setting) |
| US 8 | Email-based submission (email only) |
| US 17 | Spam detection & rate-limiting (backend only) |

## Reference Page Coverage

| Page | Path | Covered |
|------|------|---------|
| Broadcast Archive | `/broadcast` | Yes |
| Subscribe | `/subscribe` | Yes |
| Admin Welcome | `/admin/welcome` | Yes |
| Moderation Queue | `/admin/moderation` | Yes |
| Admin Broadcasts | `/admin/broadcast` | Yes |
| Admin Subscribers | `/admin/subscriber` | Yes |
| Settings Welcome | `/settings/welcome` | Yes |
| User Management | `/settings/user` | Yes |
| Channel Configuration | `/settings/channel` | Yes |
| Active Languages | `/settings/language` | Yes |
| Bounce Handling | `/settings/bounce` | Yes |
