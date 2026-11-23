---
description: Why the listserv filters provider prefetches from the open count, how the two-minute window was chosen, and what the remaining open and confirm numbers can tell you.
---

# Measuring Broadcast Engagement

The analytics page reports **Opened** and **Confirmed** because they answer different questions. An open is a tracking image being fetched. A confirmation is a person pressing a button. Neither is a perfect record of reading, but they fail in different ways, and understanding that difference explains why the dashboard filters some opens out.

## What an open actually measures

Every broadcast contains a small tracking image. When a mail client loads that image, the provider records an open. The fetch can come from the person, but it can also come from:

- a mail gateway or security scanner checking links and images at delivery;
- a privacy proxy that preloads remote images;
- an email client prefetching a message before it is read.

The result is an open count that can be much higher than the number of people who read anything. In one ADF broadcast, eight of nine opens arrived within 6–24 seconds of delivery, all from the same `adf-secretariat.org` provider infrastructure, while the ninth arrived four minutes later. It is implausible that eight people opened the email within 24 seconds; a provider did.

That is not a flaw in the provider. The tracking pixel can only report that an image was requested. It cannot report who requested it or why.

## The two-minute filter

A tracking-image fetch within two minutes of dispatch is treated as **provider prefetch**. It is still recorded in the delivery log and still counts in the provider's open figure, but it is not counted in the **Opened** number or the **Open Rate** shown on the dashboard. If the same recipient fetches the image again after the window, that later fetch counts as an open.

Two minutes is a heuristic, chosen from the traffic:

- the automated ADF/Outlook 365 fetches arrived within seconds, mostly under 25 seconds;
- two minutes leaves room for a slower gateway without waiting so long that a normal early reader is excluded;
- a five-minute window would have discarded the one genuine open in the example above, which arrived at about four minutes.

The window is not a claim that everyone who opens after two minutes is a person. A scanner can fetch later, and a person can read sooner. It moves the number in the right direction, not to a perfect one.

## What the filtered count can and cannot tell you

| Signal | What it measures | What it misses |
| --- | --- | --- |
| **Opened**, before filtering | Any tracking-image fetch, counted once per recipient. | Prefetches, scanners and proxies inflate it. |
| **Opened**, after filtering | A fetch after the two-minute window, counted once per recipient. | A person who reads inside the window; a later read that never re-fetches a cached image. |
| **Confirmed** | A person pressed the confirm-receipt button. | People who read but choose not to press it. |

Because a later real read may not fetch the image again, the filtered open count is a **lower bound** on the number of people who saw the message. It is deliberately more conservative than the provider's raw open count. A confirm rate that is lower still is expected: confirmation asks for a deliberate action, and most readers do not take it.

The two numbers together are more useful than either alone. A high filtered open count with a low confirm count says the message reached inboxes but few people acted. A high confirm count is direct evidence that people saw the message.

## Why not use the provider's bot signal?

Mailgun includes client information with an open event, including a bot flag. The Outlook 365 prefetches in the ADF channel had an **empty** bot flag, so filtering on that flag would have kept the false opens. The event also reported a desktop Chrome user agent, which is not a reliable description of a mail gateway.

Asking every mail provider to identify its own prefetches is not something the platform can enforce. Timing is simpler, observable and consistent with the delivery logs the platform already keeps.

## What the dashboard shows

The **Opened** column shows the count after the filter. When prefetches were excluded, the number is followed by a muted **N prefetched** line, so the provider's behavior is still visible. **Open Rate** uses the filtered count divided by delivered.

The **Confirmed** column reports a count only for broadcasts that asked recipients to confirm receipt. It shows an em dash for broadcasts that did not opt in.

## Older broadcasts

Broadcasts sent before the filter have no stored provider timestamp for their open events, so they cannot be reclassified accurately. They show the provider's raw open count, and their tooltips say so. The dashboard does not guess or rewrite history; new broadcasts use the filtered count from dispatch onward.

## Related Content

- [Analyzing Broadcast Performance](../how-to/analyzing-broadcast-performance.md): Reading the summary tiles, columns and confirmation list.
- [Creating and Sending Broadcasts](../how-to/creating-and-sending-broadcasts.md): Turning on the confirm-receipt link for a broadcast.
- [Broadcast Responses and Threaded Discussions](./broadcast-responses-threading.md): Why replies are a stronger signal than an open, but much rarer.
- [Admin Pages Reference](../reference/admin/index.md): The analytics columns and their definitions.
