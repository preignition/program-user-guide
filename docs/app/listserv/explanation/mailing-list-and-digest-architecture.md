---
description: An architectural explanation of Mailgun mailing lists, ScheduledJob weekly digest delivery, and webhook analytics tracking.
---

# Mailing List & Digest Engine Architecture

This document explains the backend mail transport architecture supporting the Listserv application, including **Mailgun mailing list routing**, the **`ScheduledJob` weekly digest engine**, and **webhook event tracking**.

---

## 1. Dual Mailgun Mailing Lists Per Channel

To eliminate expensive batch querying and looping over thousands of individual subscriber records during message dispatch, each channel maintains **two dedicated Mailgun mailing lists**:

| List Purpose | List Address Format | Enrolled Subscribers |
| --- | --- | --- |
| **Real-Time Dispatches** | `{channelId}@mg.a11ydata.com` | Subscribers with `digestMode: false` and `vacationMode: false` |
| **Weekly Digest Dispatches** | `{channelId}-digest@mg.a11ydata.com` | Subscribers with `digestMode: true` and `vacationMode: false` |

```text
                           ┌─────────────────────────────────┐
                           │   Subscriber State Mutations    │
                           └────────────────┬────────────────┘
                                            │
                    ┌───────────────────────┴───────────────────────┐
                    │                                               │
             digestMode = false                             digestMode = true
                    │                                               │
                    ▼                                               ▼
     ┌─────────────────────────────┐                 ┌─────────────────────────────┐
     │      Main Mailing List      │                 │     Digest Mailing List     │
     │ {channelId}@mg.a11ydata.com │                 │{channelId}-digest@mg.a11y...│
     └──────────────┬──────────────┘                 └──────────────┬──────────────┘
                    │                                               │
                    │ Real-time Broadcast Dispatch                  │ Weekly Scheduled Dispatch
                    ▼                                               ▼
          Subscriber Mailboxes                            Subscriber Mailboxes
```

### Member Variable Personalization (`recipient-variables`)

When adding members to a Mailgun list via `MailService.addMember()`, custom subscriber metadata is attached as member variables (`vars`):

```json
{
  "subscriberId": "uid-12345",
  "languages": ["en", "fr"],
  "unsubscribeToken": "a1b2c3d4e5f6"
}
```

This enables Mailgun template substitution variables (such as `%recipient.unsubscribe_url%` and `%recipient.languages%`) directly during single-payload list dispatches.

---

## 2. Mailing List Member Lifecycle Synchronization

List membership is dynamically synchronized whenever subscriber preferences change:

- **Web or Email Subscription**: Added to main or digest list based on `digestMode`.
- **Toggle Digest Mode**: Automatically removed from the old list and added to the target list.
- **Activate Vacation Mode (`vacationMode: true`)**: Removed from active lists to pause all emails.
- **Deactivate Vacation Mode (`vacationMode: false`)**: Re-added to appropriate list.
- **Unsubscribe / Bounce Threshold Met**: Removed from both main and digest lists.

---

## 3. ScheduledJob Weekly Digest Delivery Engine

Weekly digests are compiled and dispatched automatically using the platform's native **`ScheduledJob` framework** (`functions/src/jobs/`).

### Execution Flow:

1. **Scheduler Trigger**: The `jobProcessor` executes the `digestDelivery` job type on a configurable 7-day schedule (default: 08:00 AM every Sunday).
2. **Cutoff Calculation**: Reads `lastDigestRunTime` from the job state (defaulting to 30 days prior on initial run).
3. **Broadcast Query**: Queries Firestore for broadcasts where:
   - `status === 'sent'`
   - `ref.channelId === channel.id`
   - `sentAt >= lastDigestRunTime`
4. **Digest Composition**:
   - Skips channels with zero new broadcasts.
   - For channels with posts, builds a single consolidated digest email containing:
     - AI Summary (`moderation.aiSummary`) in italic callout
     - Broadcast Subject / Title
     - First 200 characters excerpt of the body
     - Link to the public web archive
5. **Single Payload Send**: Calls `MailService.sendEmail()` addressing `to: {channelId}-digest@mg.a11ydata.com` with JSON `recipient-variables`.

---

## 4. Webhook Analytics & Bounce Management

Real-time delivery events and bounces are received asynchronously via the Mailgun webhook endpoint (`POST /app/listserv/mailgun/webhook`):

- **Event Handlers**: Processes `delivered`, `opened`, `clicked`, `permanent_fail`, and `unsubscribed`.
- **Stat Counters**: Atomically increments counters on `broadcast.stats` (`accepted`, `delivered`, `opened`, `clicked`, `failed`).
- **Bounce Cleaning**: On permanent failure, increments `subscriber.bounceCount`. If the count meets or exceeds `channel.bounceHandling.threshold` (default: 3), the account is automatically deactivated (`status: 'unsubscribed'`) and removed from Mailgun lists.

---

## Related Content

- [Broadcast Lifecycle & AI Moderation Explanation](./broadcast-lifecycle-and-moderation.md)
- [Analyzing Broadcast Performance How-To](../how-to/analyzing-broadcast-performance.md)
- [Configuring Channel Settings How-To](../how-to/configuring-channel-settings.md)
