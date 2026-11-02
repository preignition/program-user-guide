---
description: Import a team Audience into a listserv Channel from Admin → Subscribers, preview the outcome, accept the warranty, and read the import history.
---

# Import a team audience

Use this guide to seed a listserv channel from an existing team **Audience** — the reusable address book in the customer app. The import creates active subscribers in one channel, without re-collecting consent person by person.

::: info Who can do this
A channel **owner** or **editor** can run an import. A channel **moderator** can read the import history but cannot start an import.
:::

## Before you start

- The audience must belong to the channel's team.
- The audience can be active or archived. An archived audience is read-only; importing it does not change it.
- One import handles at most **10,000 unique recipients**. The picker shows the limit before you start.
- The import does not send an email to the audience.

## Open the import workspace

1. Open the channel's **Admin → Subscribers** page.
2. Choose **Import audience**.
3. The import workspace opens in place, above the subscriber table. The **Subscribers** and **Import history** tabs stay visible.

## Pick an audience

1. Search the team's audiences by name.
2. Each row shows the audience name, recipient count, last-updated date and whether it is active or archived.
3. Select the audience. The preview appears on the right.

The preview shows:

- **New** — addresses that will get a new subscriber record.
- **Linked** — addresses that already have an account; the subscriber uses that account.
- **Already subscribed** — active subscribers that will not be overwritten.
- **Relinked** — active subscribers whose account link was missing and will be repaired.
- **Skipped** — pending, unsubscribed, bounced or suppressed recipients. These are never resurrected.
- **Invalid** — rows with a missing or malformed address.

The preview shows counts only; it does not list addresses.

## Accept the warranty and import

1. Read the warranty: the team has a lawful basis to contact these people and their permission to send broadcasts from this channel.
2. Tick the checkbox. The **Import** button stays disabled until it is ticked.
3. Choose **Import N recipients**.

Progress is shown inline. You can leave the tab and come back: the import record keeps the progress, and a stale or failed run offers **Resume**.

## Read the result

The result repeats the counts and adds a skipped breakdown. If any rows failed, download the transient `row,email,reason` error report and fix those rows in the audience. The report is not stored.

The buttons are:

- **Import another** — start again with a clean preview.
- **Done** — return to the subscriber table.

## Read the import history

Open the **Import history** tab. The newest import is first. The columns are When, Audience, Actor, Outcome, Warranty and Status.

Select a row to expand its details inside the grid: the actor, audience snapshot, warranty version and time, full counts, any failure, and whether it is the latest import. The error report is not kept; it is only available from the workspace that ran the import.

## What the import does not do

- It does not send an email to the imported addresses.
- It does not add Mailgun list membership or set a `deliveryList`; the send engine reconciles membership when a broadcast is sent.
- It does not set `subscribedChannels`, `accountIncomplete`, an unsubscribe token or a completion token.
- It does not write a preference mirror. Imported subscribers receive broadcasts; the account-link flow that would make private broadcasts and the preference page available is a future feature.
- It does not change the audience or its recipients.

## Privacy and limits

The import record keeps counts and the actor/audience/warranty snapshots. It stores no recipient addresses and no per-row errors. The only address-bearing artefact is the transient error report.

The limit is 10,000 unique recipients per import. Imported accounts are created without a password; they can use the account path (password reset) when they need to sign in.
