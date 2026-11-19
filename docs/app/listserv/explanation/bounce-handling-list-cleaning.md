---
description: What a hard bounce means, why bounced addresses are removed, and how automatic and manual list cleaning work.
---

# Bounce Handling and List Cleaning

Some email addresses stop working. When a channel keeps sending to them, the sending domain's reputation suffers and legitimate mail starts landing in spam folders. The Listserv tracks delivery failures and removes addresses that cannot receive mail.

## What a bounce is

A **bounce** is a rejection by the recipient's mail server. There are two kinds:

- **Hard bounce** — a permanent failure: the mailbox does not exist, the domain has expired, or the receiving server rejects the address by policy. Repeating the send will not help.
- **Soft bounce** — a temporary failure: a full mailbox, a server outage, a message too large. The address may work later.

The Listserv acts on hard bounces. A soft bounce is recorded, but one soft bounce does not remove a subscriber.

## Why cleaning matters

Mailbox providers score senders by how much of their mail is accepted and engaged with. A list full of dead addresses produces repeated failures, and that score drops. When it drops far enough, even good mail is filtered as spam and delivery is throttled.

Removing dead addresses keeps delivery rates, and therefore the channel's ability to reach real subscribers, healthy.

## Automatic cleaning

When the mail provider reports a hard bounce for a subscriber:

1. The channel records the failure against that subscriber.
2. When the count reaches the channel's threshold (three by default), the subscriber is marked **unsubscribed**.
3. The address is removed from the channel's delivery lists, so no further broadcasts are attempted.

The subscriber's history stays intact: the channel can see that the address failed and when, rather than losing the record.

A bounced address is not the same as a person choosing to leave. It is listed separately so administrators can distinguish "this address is dead" from "this person opted out".

## Manual cleaning

An administrator can start a clean-up from **Channel Settings → Bounce Handling**:

- run **Clean List Now** to reconcile the current subscriber list against the provider's bounce records;
- change the threshold if the default is too aggressive or too lenient for the channel;
- turn automatic cleaning off temporarily, for example while diagnosing a provider problem.

Manual cleaning is useful after a long gap in sending, or after a mail provider incident that produced a wave of temporary failures.

## Reactivating a subscriber

If a person fixes the problem — a new mailbox on the same address, a domain that came back — an administrator can set the subscriber back to **active** from the subscriber list.

Do this only when you have evidence the address works. Reactivating a dead address re-adds it to the list and restarts the damage to the sender reputation.

For someone who moved to a new address, ask them to subscribe again with the new address rather than editing the old record.

## What subscribers experience

A subscriber whose address hard-bounces simply stops receiving mail; they are not notified, because the notification would bounce too. If they contact the channel, the administrator can explain and invite them to subscribe with a working address.

## Related Content

- [Managing Subscribers](../how-to/managing-subscribers.md): Filtering bounced and unsubscribed subscribers and reactivating one.
- [Configuring Channel Settings](../how-to/configuring-channel-settings.md): Bounce threshold and automatic cleaning controls.
- [Subscriber Accounts and Sign-In](./subscriber-identity-and-auth.md): The subscriber states in context.
- [Real-Time Broadcasts and Weekly Digests](./mailing-list-and-digest-architecture.md): Who a broadcast is delivered to.
