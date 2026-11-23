---
description: Why the listserv filters provider prefetches from the open count, how the two-minute window was chosen, and what the remaining open and confirm numbers can tell you.
---

# Measuring Broadcast Engagement

The analytics page reports both **Opened** and **Confirmed** because they answer different questions. An **open** means a tracking image was requested; a **confirmation** means a person intentionally pressed a button. Neither is a complete record of reading, and each misses or overcounts in different ways. Understanding that difference explains why the dashboard filters early image fetches out of **Opened** and how to read the two numbers together.

## What an open actually measures

Every broadcast contains a small tracking image. When a mail client loads that image, the mail provider records an open. While that request can come from a reader, it often comes from automated systems instead:

- A mail gateway or security scanner checking links and images at delivery.
- A privacy proxy preloading remote images.
- An email client prefetching a message before anyone opens it.

As a result, raw open counts can be far higher than the number of actual readers. In one observed broadcast, eight of nine recorded opens arrived within **6–24 seconds** of delivery from the same corporate mail infrastructure, while the ninth arrived four minutes later. It is implausible that eight people opened the email in 24 seconds—the mail infrastructure fetched it.

That is not a bug in the mail provider. A tracking image can only report that a file was requested; it cannot report who requested it or why.

## The two-minute filter

A tracking-image fetch within **two minutes of dispatch** is treated as a **provider prefetch**. The event stays in the delivery log and in the provider's raw figures, but it is excluded from **Opened** and **Open Rate** on the dashboard. If the same recipient's mail client loads the image again after the two-minute window, that later fetch counts as an open.

Why two minutes? The threshold balances two competing risks based on observed traffic:

- **Catching automated bursts:** Automated Outlook 365 gateway fetches arrived within seconds, mostly under 25 seconds, and two minutes leaves margin for slower gateways.
- **Preserving real early reads:** A wider window, such as five minutes, would have discarded the genuine open in the example above (which arrived at around four minutes).

Two minutes is a practical heuristic, not a guarantee: a scanner can still fetch later, and a person can read sooner. It moves the open count closer to reality rather than claiming perfection.

## What the numbers can and cannot tell you

| Signal | What it measures | Limitations |
| --- | --- | --- |
| **Opened** (raw) | Any tracking-image fetch, counted once per recipient. | Inflated by prefetches, scanners, and privacy proxies. |
| **Opened** (filtered) | A fetch after the two-minute window, counted once per recipient. | May miss someone who reads inside the window whose client caches the image; late scanners can still inflate it. |
| **Confirmed** | A person pressed the confirm-receipt button. | Misses people who read the broadcast without clicking the button. |

Because a later real read may reuse a cached image instead of fetching it again, the filtered open count is deliberately more conservative than the provider's raw count. Even so, late scanners mean **Confirmed** remains the only true floor on human readers—and a lower confirm rate is normal, since clicking a button takes deliberate effort.

Reading the two numbers together is more informative than relying on either alone:

- **High filtered opens, low confirmations:** The broadcast is reaching inboxes, though few recipients took the extra step to confirm.
- **High confirmations:** Direct evidence that people actually saw the message.

## Why not rely on the provider's bot flag?

Mail providers often include client details—such as a bot flag and browser string—with each open event. However, in the Outlook 365 prefetches we observed, the bot flag was **empty** and the event reported a standard desktop Chrome browser string. Filtering on that flag would have kept the false opens.

Because the platform cannot rely on every mail provider to label its own prefetches accurately, timing is a simpler, observable signal that works consistently across providers using the delivery logs we already keep.

## How the dashboard displays them

- **Opened:** Shows the filtered count. When prefetches were excluded, a muted **N prefetched** label appears underneath so provider activity stays visible.
- **Open Rate:** Calculated as `opened / delivered` using the filtered count.
- **Confirmed:** Shows the count of button clicks for broadcasts that included the confirmation link, or **—** for broadcasts that did not.

## Older broadcasts

Broadcasts sent before this filter do not have stored provider timestamps on their open events, so they cannot be reclassified retroactively. Rather than guessing or rewriting history, the dashboard continues to display the provider's raw open count for those broadcasts (noted in their tooltips). New broadcasts apply the two-minute filter from dispatch onward.

## Related Content

- [Analyzing Broadcast Performance](../how-to/analyzing-broadcast-performance.md): Reading the summary tiles, columns and confirmation list.
- [Creating & Sending Email Broadcasts](../how-to/creating-and-sending-broadcasts.md): Turning on the confirm-receipt link for a broadcast.
- [Broadcast Responses and Threaded Discussions](./broadcast-responses-threading.md): Why replies are a stronger signal than an open, but much rarer.
- [Admin Pages Reference](../reference/admin/index.md): The analytics columns and their definitions.
