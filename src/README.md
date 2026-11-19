# Playwright tests for survey habits

This folder contains Playwright tests for the survey habits application. These tests are designed to take automated screenshots of the application in various states, which can be used for visual regression testing and accessibility audits.

## How to run the test

- in accessibledata root:
  - `pnpm survey:start:a11y-signed-in`
  - `pnpm survey:start:signed-in`
- in documentation root: `npm test`

**shortcut**: `pnpm survey:start:a11y-signed-in && pnpm survey:start:signed-in`

### User type

We authenticate users while running playwright tests. There are 3 different user types:

- `playwright-a11y@preignition.org` - user signed in with access to `accessible data` team and edit rights on `survey habits` and access rights to `admin` customer
- `playwright@preignition.org` - user signed in with access to `playwright` team

Some tests are run with `playwright-a11y@preignition.org` and some with `playwright@preignition.org`, we differentiate this with the `run type`.

### Run type

- `pnpm survey:start:signed-in` loads on **localhost:7173** and loads `playwright@preignition.org`
- `pnpm survey:start:a11y-signed-in` loads on **localhost:7174** and loads `playwright-a11y@preignition.org`

## Highlighting menu items

Use `context.annotatedMenuItemScreenshot(locator, name)` for drawer and context-menu entries. A `getByText`/`getByRole('listitem')` locator there resolves inside the row, so the helper highlights the enclosing `md-list-item` instead — a ring around the whole row, like the other annotated screenshots. Use `context.annotatedScreenshot` for everything else.

## Screenshotting tall dialogs

Material caps `md-dialog` at 560px tall, so a dialog with many fields scrolls and a plain annotated screenshot only shows its top. To document every field in one image, call `growDialogForScreenshot(page, dialog)` from `utils/dialogScreenshot.ts` before `context.annotatedScreenshot`, then `restoreDialogAfterScreenshot(page, dialog)` before continuing. The helpers raise the viewport and the dialog's max-height, then restore both for the following steps.

## Internal-only screenshots

`src/admin/` holds specs for internal, super-admin screens that are not part of the published user documentation. Their captures are written under `documentation/screenshots/admin/`, outside the docs tree, so they are not published or pruned with page assets. The monitoring dashboard spec needs a super admin (`admin.__all__.master/owner`) and `VITE_API_SERVER` pointing at the v3 api, as described in the spec.
