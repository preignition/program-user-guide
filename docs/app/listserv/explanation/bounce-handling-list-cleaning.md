---
description: An architectural explanation of why subscriber bounce cleaning is essential for maintaining mailing list deliverability and sender reputation.
---

# Bounce Handling & Subscriber List Cleaning

The Listserv application tracks bounced emails through **Mailgun webhooks** and provides **automated bounce cleaning** that protects the sender domain reputation and maximizes broadcast delivery rates.

---

## 1. Why Bounces Matter

When an email broadcast is dispatched to subscribers, the recipient's mail server may reject delivery permanently. These **permanent failures** (or "hard bounces") occur for reasons such as:

- **Non-existent addresses** — The recipient email account was deleted or never existed
- **Deactivated mailboxes** — The address was disabled by the provider
- **Domain expiration** — The recipient's domain is no longer active
- **Rejected by policy** — The receiving server blocks the domain or IP

Each hard bounce reduces the **sender reputation score** monitored by mailbox providers (Gmail, Outlook, Yahoo, etc.). A degraded reputation triggers spam classification, throttles delivery throughput, and causes legitimate broadcasts to land in spam folders.

---

## 2. The Bounce Webhook Pipeline

Mailgun sends real-time delivery event notifications to the Listserv webhook endpoint (`POST /app/listserv/mailgun/webhook`). The handler processes each bounce:

1. **Event Detection**: The handler recognizes `permanent_fail` events and extracts the recipient email address and channel list ID.
2. **Subscriber Lookup**: Queries Firestore for the subscriber document matching the bounced email and channel.
3. **Bounce Counter**: Increments `subscriber.bounceCount` for each permanent failure.
4. **Threshold Comparison**: If `bounceCount` meets or exceeds `channel.bounceHandling.threshold` (configurable, default: 3), the subscriber is automatically:
   - Deactivated (`status: 'unsubscribed'`)
   - Removed from both Mailgun real-time and digest mailing lists
5. **Stats Update**: Increments `broadcast.stats.failed` for the originating broadcast.

---

## 3. Automatic vs. Manual Cleaning

### Automatic Bounce Cleaning

When **Automatic Bounce Cleaning** is enabled in Channel Settings (`channel.bounceHandling.automatic`):

- Every incoming permanent failure webhook is processed immediately.
- Subscribers reaching the threshold are deactivated without administrative intervention.
- Deactivated subscribers no longer appear in send lists, preventing future bounce accumulation.

### Manual List Cleaning

The **Clean List** button triggers an on-demand reconciliation pass that:

1. Fetches bounce logs from Mailgun's API for the channel domains.
2. Compares bounced addresses against the active subscriber directory.
3. Deactivates all bounced subscribers that meet or exceed the threshold.
4. Removes them from Mailgun mailing lists.

Manual cleaning is useful for periodic bulk hygiene when automatic cleaning is disabled.

---

## 4. Impact on Delivery & Reputation

| Effect Without Cleaning | Effect With Automated Cleaning |
| --- | --- |
| Repeated sends to dead addresses | Only validated, active addresses targeted |
| Rising bounce rates degrade domain reputation | Complaint-free domain health maintained |
| Broadcasts land in spam for all subscribers | Higher inbox placement rates |
| ISPs may block the sending domain | Deliverability remains stable |

---

## Related Content

- [Mailing List & Digest Engine Architecture](./mailing-list-and-digest-architecture.md)
- [Configuring Channel Settings How-To](../how-to/configuring-channel-settings.md)
- [Channel Settings Reference Specification](../reference/settings/index.md)
