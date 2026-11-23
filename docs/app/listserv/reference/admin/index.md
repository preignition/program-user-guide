---
description: "Reference for the admin workspace: welcome, moderation queue, broadcasts, subscribers and analytics."
---

# Admin Pages

The admin workspace is available to channel owners, editors and moderators, depending on the section. It is reached from **Admin** in the top navigation.

## Welcome

<figure>
  <img src="./assets/admin-welcome-auto.png" alt="Admin welcome screen">
  <figcaption>The admin welcome screen with links to each section.</figcaption>
</figure>

The welcome page introduces the three working areas and links to them:

- **Broadcasts** — drafting, editing, sending and reviewing performance.
- **Moderation** — reviewing community submissions.
- **Subscribers** — the membership directory and delivery preferences.

## Moderation queue

<figure>
  <img src="./assets/admin-moderation-auto.png" alt="Moderation queue">
  <figcaption>Pending community submissions awaiting review.</figcaption>
</figure>

| Column | What it shows |
| --- | --- |
| **Sender** | The address the submission came from. |
| **Subject** | The submitted title. |
| **Submitted at** | When the post arrived, by email or web form. |
| **Category** | The automated classification: news, event, announcement, question or spam. |
| **Spam score** | A value from 0 to 1; higher means more likely spam. Advisory, not decisive. |
| **Actions** | **Approve**, **Edit & Approve**, **Reject**. |

Open a row to read the full post before deciding. The category and score help triage; they do not replace reading the submission.

## Broadcasts

<figure>
  <img src="./assets/admin-broadcasts-auto.png" alt="Broadcast list">
  <figcaption>The broadcast list with lifecycle status and response counts.</figcaption>
</figure>

| Column | What it shows |
| --- | --- |
| **Title** | The broadcast subject. |
| **Status** | Draft, submitted, detecting language, translating, moderated, rejected, sending or sent. |
| **Host** | Whether an administrator composed it in the app or a subscriber submitted it by email. |
| **Created** | When the broadcast document was created. |
| **Responses** | The number of subscriber replies in the thread. |
| **Delivered / Opened / Failed** | Per-recipient counts from the delivery webhooks. **Opened** excludes provider prefetches inside the two-minute window; the excluded count appears beneath it. |
| **Deliv. Rate / Open Rate** | `delivered / sent` and `opened / delivered`, with provider prefetches excluded from the open rate. |

Expand a row for the broadcast editor, the email as subscribers receive it, and the full response thread. Both the expanded row and the broadcast detail show whether the optional confirmation link is on: **Confirm receipt** — **On** or **Off**.

## Subscribers

<figure>
  <img src="./assets/admin-subscribers-auto.png" alt="Subscriber directory">
  <figcaption>The subscriber directory with status and delivery preferences.</figcaption>
</figure>

| Column | What it shows |
| --- | --- |
| **Email address** | The subscribed address. |
| **Status** | Pending, active, unsubscribed or bounced. |
| **Delivery mode** | Real-time or weekly digest. |
| **Vacation mode** | Whether delivery is paused without unsubscribing. |
| **Bounce count** | Consecutive hard failures recorded for the address. |

Administrators can change status, delivery mode and vacation mode for an individual subscriber, and can filter the list by any column. See [Managing Subscribers](../../how-to/managing-subscribers.md).

## Analytics

<figure>
  <img src="./assets/admin-analytics-auto.png" alt="Channel analytics overview">
  <figcaption>Channel-level delivery and engagement metrics.</figcaption>
</figure>

The summary tiles cover every sent broadcast in the channel:

| Tile | What it measures |
| --- | --- |
| **Broadcasts Sent** | Number of sent broadcasts. |
| **Total Emails Sent** | Sum of unique subscriber addresses targeted. |
| **Avg Delivery Rate** | Average of `delivered / sent`. |
| **Avg Open Rate** | Average of `opened / delivered`, after excluding provider prefetches inside the two-minute window. |
| **Avg Confirm Rate** | Average of `confirmed / delivered`, over the broadcasts that asked for confirmation. |
| **Total Failures** | Recipients that never received the message. |

The grid below the tiles lists each sent broadcast with:

| Column | What it shows |
| --- | --- |
| **Sent Date** | When dispatch completed. |
| **Sent** | Unique addresses targeted at dispatch. |
| **Delivered** | Addresses accepted by their mail server. |
| **Opened** | Addresses that fetched the tracking image after the two-minute provider-prefetch window, counted once per recipient; early fetches appear beneath as **N prefetched**. |
| **Confirmed** | Addresses that pressed the confirm-receipt link; **—** when the broadcast did not ask. |
| **Failed** | Addresses that never received the message. |
| **Deliv. Rate / Open Rate / Confirm Rate** | The three ratios above, with **—** when the denominator is missing. The open rate excludes provider prefetches. |

Expanding a confirmation broadcast lists the recipients who pressed the button, with a "confirmed of delivered" count. Channel owners and editors can read that list; moderators cannot. Click tracking is not collected, so there is no click or click-through figure.

## Related Content

- [Public Pages](../public/index.md): What subscribers see.
- [Channel Settings](../settings/index.md): Configuration and access roles.
- [Moderating Community Submissions](../../how-to/moderating-community-submissions.md): Reviewing a submission.
- [Analyzing Broadcast Performance](../../how-to/analyzing-broadcast-performance.md): Reading the metrics.
- [Measuring Broadcast Engagement](../../explanation/measuring-broadcast-engagement.md): Why provider prefetches are excluded from the open count.
