---
description: Opt-in confirm-receipt links per broadcast, Confirmed and Confirm Rate in analytics, and open counts that leave out provider prefetches.
---

# Know Who Actually Received Your Broadcast

**Date:** 2026-11-23
**Version:** 1.2.0

An open only proves a tracking image was fetched — often by a scanner, not a reader. This release adds a confirmation a person has to press, reports it in analytics, and filters provider prefetches out of **Opened**.

## What's New

**Confirm-receipt links, chosen per broadcast.** Tick **Add a 'confirm you received this' link** while composing or editing, and the email footer carries a signed link to a one-button page. Off by default; replies never carry it; the preview shows **Confirm receipt — On/Off**.
[Creating & Sending Email Broadcasts](../app/listserv/how-to/creating-and-sending-broadcasts.md)

**Confirmed and Confirm Rate in analytics.** A new **Confirmed** column, **Confirm Rate**, and an **Avg Confirm Rate** tile; expanding a broadcast lists who confirmed and when. Broadcasts that did not opt in show **—**, never zero. Owners and editors can read the list; moderators cannot.
[Analyzing Broadcast Performance](../app/listserv/how-to/analyzing-broadcast-performance.md)

**Open counts without provider prefetches.** Fetches within two minutes of dispatch are treated as provider prefetch: excluded from **Opened** and **Open Rate**, and shown beneath **Opened** as **N prefetched**. Broadcasts sent before this release keep their provider figures.
[Measuring Broadcast Engagement](../app/listserv/explanation/measuring-broadcast-engagement.md)

## Fixes & Improvements

* Recipients are no longer double-counted in delivery stats.
* Older and seeded broadcasts open without a data-loading error.
* Resizable columns in the broadcast list, and clearer guidance beside the confirmation option.

No history is rewritten: earlier broadcasts show **—** for Confirmed and their provider's raw open count.
