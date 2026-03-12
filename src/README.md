# How to run the

- in accessibledata root:
  - `pnpm survey:start:playwright-a11y:signed-in`
  - `pnpm survey:start:playwright:signed-in`
- in program-user-guide root: `npm test`

## User type

We authenticate users while running playwright tests. There are 3 different user types:

- `playwright-a11y@preignition.org` - user signed in with access to `accessible data` team and edit rights on `survey habits` and access rights to `addmin` customer
- `playwright@preignition.org` - user signed in with access to `playwright` team

Some tests are run with `playwright-a11y@preignition.org` and some with `playwright@preignition.org`, we differentiate this with the `run type`.

## run type

- `pnpm survey:start:playwright:signed-in` loads on **localhost:7173**   and loads `playwright@preignition.org`
- `pnpm survey:start:playwright-a11y:signed-in` loads on **localhost:7174** and loads `playwright-a11y@preignition.org`
