---
description: Import a team Audience into a listserv Channel from Channel Settings → Audience Import, preview the outcome, accept the warranty, resume a long run, and read the import history.
---

# Import a team audience

Use this guide to seed a listserv channel from an existing team **Audience** — the reusable address book in the customer app. The import creates active subscribers in one channel, without re-collecting consent person by person.

::: info Who can do this
The **Audience Import** page lives under **Channel Settings**, which is available to a channel **owner** or **editor**. The import history on the same page honours the channel's owner/editor/moderator read access.
:::

## Before you start

- The audience must belong to the channel's team.
- The audience can be active or archived. An archived audience is read-only; importing it does not change it.
- One import handles at most **10,000 unique recipients**. The picker shows the limit before you start.
- The import does not send an email to the audience.

## Open the import page

1. Open the channel's **Channel Settings** and choose **Audience Import**.
2. The page shows the **Import history** below the import button. Choose **Import a team audience**.

<figure>
  <img src="./assets/importing-a-team-audience/step-1-open-audience-import-auto.png" alt="Audience Import page in Channel Settings, with the import button and the Import history grid">
  <figcaption>The Audience Import page under Channel Settings, with the import button and the read-only Import history</figcaption>
</figure>

## Pick an audience

1. Search the team's audiences by name.
2. Each row shows the audience name, recipient count, last-updated date and whether it is active or archived.
3. Select the audience. The preview appears on the right.

<figure>
  <img src="./assets/importing-a-team-audience/step-2-pick-an-audience-auto.png" alt="Import dialog listing the team's audiences with their recipient count, date and status">
  <figcaption>Pick a team audience in the import dialog</figcaption>
</figure>

An archived audience stays selectable so you can seed a channel from a retired list, but the import never edits it. An audience over the 10,000-recipient limit is shown as over the limit and cannot start.

## Read the preview

The preview shows:

- **New** — addresses that will get a new subscriber record.
- **Linked** — addresses that already have an account; the subscriber uses that account.
- **Already subscribed** — active subscribers that will not be overwritten. The breakdown adds the sub-count of records whose blank name or empty language list will be filled.
- **Relinked** — active subscribers whose account link was missing and will be repaired.
- **Skipped** — pending, unsubscribed, bounced or suppressed recipients. These are never resurrected.
- **Invalid** — rows with a missing or malformed address.

<figure>
  <img src="./assets/importing-a-team-audience/step-3-preview-the-outcome-auto.png" alt="Import preview showing New, Linked, Already subscribed, Relinked, Skipped and Invalid counts">
  <figcaption>The preview reports counts only; it never lists addresses</figcaption>
</figure>

The preview is a snapshot: it writes nothing, and the import re-reads the audience when it runs. The preview shows counts only; it does not list addresses. Invalid rows appear as a count and are listed only in the transient error report.

## Accept the warranty and import

1. Read the warranty: the team has a lawful basis to contact these people and their permission to send broadcasts from this channel.
2. Tick the checkbox. The **Import** button stays disabled until it is ticked.
3. Choose **Import N recipients**.

<figure>
  <img src="./assets/importing-a-team-audience/step-4-accept-the-warranty.png" alt="The listserv import warranty checkbox and its text">
  <figcaption>The warranty records who asserted the lawful basis, its version and the acceptance time</figcaption>
</figure>

The warranty is required because the import creates subscribers the team did not collect one by one. The record keeps the warranty version and the acceptance time, but no recipient addresses.

Progress is shown in the dialog. You can close it and come back: the import record keeps the progress, and a stale or failed run offers **Resume** when you reopen the dialog. Resuming continues from the last processed recipient; the subscriber and account writes are idempotent, so a replayed chunk is safe.

## Read the result

The result repeats the counts and adds a skipped breakdown and a **Failed** count. If any rows failed or were invalid, download the transient `row,email,reason` error report and fix those rows in the audience. The report is not stored.

<figure>
  <img src="./assets/importing-a-team-audience/step-5-import-result-auto.png" alt="Import result with the final counts, the error report download and the Done action">
  <figcaption>The result keeps the counts; the error report is available only from the dialog that ran the import</figcaption>
</figure>

The **Import another** button starts again with a clean preview; **Done** closes the dialog and returns to the history page.

## Read the import history

Scroll to **Import history** on the same page. The newest import is first. The columns are When, Audience, Actor, Outcome, Warranty and Status; the Audience and Status columns carry a column filter. The **Outcome** cell is a compact `New` / `Already` / `Skipped` summary.

<figure>
  <img src="./assets/importing-a-team-audience/step-6-import-history.png" alt="Import history grid with the When, Audience, Actor, Outcome, Warranty and Status columns">
  <figcaption>One read-only record per import, newest first</figcaption>
</figure>

Select a row to expand its details inside the grid: the actor, audience snapshot, warranty version and time, the full counts and any failure.

<figure>
  <img src="./assets/importing-a-team-audience/step-7-import-history-details.png" alt="Expanded import history row showing the actor, audience, warranty and full counts">
  <figcaption>The row details expand inside the grid; no addresses and no per-row errors are kept</figcaption>
</figure>

The error report is not kept; it is only available from the dialog that ran the import.

## What the import does not do

- It does not send an email to the imported addresses.
- It does not add Mailgun list membership or set a `deliveryList`; the send engine reconciles membership when a broadcast is sent.
- It does not set `subscribedChannels`, `accountIncomplete`, an unsubscribe token or a completion token.
- It does not write a preference mirror. Imported subscribers receive broadcasts; the account-link flow that would make private broadcasts and the preference page available is a future feature. Until then, password reset is their account path.
- It does not change the audience or its recipients.

## Privacy and limits

The import record keeps counts and the actor/audience/warranty snapshots. It stores no recipient addresses and no per-row errors. The only address-bearing artefact is the transient error report.

An audience over 10,000 unique recipients is rejected before the import starts. Invalid and duplicate rows are counted, and duplicate addresses in the audience collapse to one subscriber per address per channel.

Imported accounts are created without a password and without `accountIncomplete`; they can use the account path (password reset) when they need to sign in.

---

## Related Content

- [Listserv audience import spec](https://gitlab.com/christophe-g/lit-app/-/blob/main/specs/listserv-audience-import.md) — the full decision record for placement, preview, warranty, execution and privacy.
- [ADR 0001: Subscriber backed by Firebase Auth identity](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md) — why `ref.user` carries the Auth identity and the subscriber id is opaque.
- [Listserv glossary](https://gitlab.com/christophe-g/lit-app/-/blob/main/app/app-listserv/GLOSSARY.md) — subscriber, guard, import record and account terminology.
- [Team Audiences reference](../../customer/reference/team/audiences.md) — how the team's reusable address book stores recipients.
- [Creating & sending broadcasts](./creating-and-sending-broadcasts.md) — what happens on the first send after an import.
- [Configuring channel settings](./configuring-channel-settings.md) — the Channel Settings menu that hosts the import.
