---
description: Explanation articles providing discursive background, architecture concepts, and design decisions for the Listserv application.
---

# Listserv Explanation Articles

The Explanation section provides **understanding-oriented** discursive background, architecture details, and rationale behind key engineering decisions in the Accessible Listserv application.

## Conceptual Deep Dives

### 1. [Dual-Route Architecture](./dual-route-architecture.md)
**Why co-locate Email Commands and Web Application Routes?**  
An explanation of how email-based commands (`SUBSCRIBE`, `UNSUBSCRIBE`, `HELP`, email submissions) and web application forms co-exist to guarantee maximum accessibility across diverse member networks—especially in low-connectivity, bandwidth-constrained settings.

### 2. [Broadcast Lifecycle & AI Moderation](./broadcast-lifecycle-and-moderation.md)
**How are community submissions safely reviewed and dispatched?**  
An overview of the XState 5 state machine transitions (`draft` → `submitted` → `moderated` → `approved`/`rejected` → `sending` → `sent`) and the automated `effect/unstable/ai` moderation engine (`gpt-4o-mini`).

### 3. [Subscriber Identity & Auth Integration](./subscriber-identity-and-auth.md)
**How are subscribers mapped to Firebase Auth without forcing passwords?**  
An explanation of why subscriber IDs match Firebase Auth UIDs, how double opt-in operates, and how the `accountIncomplete` custom token claim gates Firestore rules until password completion.

### 4. [Mailing List & Digest Engine Architecture](./mailing-list-and-digest-architecture.md)
**How are real-time broadcasts and weekly digests delivered efficiently?**  
An architectural breakdown of Mailgun main and digest mailing lists (`{channelId}@mg.a11ydata.com` and `{channelId}-digest@mg.a11ydata.com`), `ScheduledJob` recurring compilation, and webhook event tracking.

### 5. [Bounce Handling & Subscriber List Cleaning](./bounce-handling-list-cleaning.md)
**Why must bounced subscriber addresses be cleaned from mailing lists?**  
An explanation of the bounce webhook pipeline, sender domain reputation management, automatic vs. manual subscriber deactivation, and how list hygiene prevents degraded deliverability.

### 6. [Broadcast Responses & Threaded Discussions](./broadcast-responses-threading.md)
**How do subscriber email replies get threaded and redistributed?**  
An overview of Reply-To subaddress correlation, flat threading in the admin broadcast grid, lightweight Mailgun-spam-header auto-moderation, and the digest mode discussion restriction.

### 7. [Multilingual Broadcast Support](./multilingual-support.md)
**How does the Listserv handle four languages across every touchpoint?**  
An end-to-end walkthrough of the multilingual pipeline: channel-level language activation, broadcast locale composition, subscriber language preferences, multilingual email commands, and language-segmented analytics.

---

## Technical Source Code References

For links to the backend functions, XState machines, AI moderation layers, and service definitions, see **[Explanation Code Links (REF.md)](./REF.md)**.

---

## Related Content

- [Listserv Tutorials](../tutorial/index.md)
- [Listserv How-To Guides](../how-to/index.md)
- [Listserv Reference Manual](../reference/index.md)
