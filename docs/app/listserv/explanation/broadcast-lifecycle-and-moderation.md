---
description: How a broadcast moves from draft to sent, where moderation fits, and what administrators can change at each stage.
---

# Broadcast Lifecycle and Moderation

A broadcast is a single announcement or community post that the channel sends to its subscribers. Every broadcast — whether an administrator writes it or a community member submits it — follows the same review path before it is sent.

## The stages

| Stage | What it means |
| --- | --- |
| **Draft** | The message exists but is not submitted for review. Authors can still edit it. |
| **Submitted** | A community author has sent the post for review. Administrators see it in the moderation queue. |
| **Moderated** | The platform has assessed the post and attached a category and a spam assessment. A person still decides. |
| **Approved** | An administrator has accepted the post; it becomes ready to send. |
| **Rejected** | An administrator has declined the post. It is not sent. |
| **Translating** | The approved message is being translated into the channel's active languages. |
| **Sending** | Delivery to the subscriber lists is in progress. |
| **Sent** | Delivery has completed. The broadcast is in the archive and its performance can be reviewed. |
| **Error** | A delivery problem interrupted the send; the error is recorded for the administrator. |

Administrator-authored broadcasts start as drafts and skip the community moderation queue, but they still pass through approval, translation and sending.

## What moderation does

Moderation has two parts: an automated assessment and a human decision.

The automated assessment classifies the post (for example news, event, announcement, question or spam) and gives it a spam score. It is advisory. A high score flags a post for attention; it does not silently discard it.

An administrator then:

- **approves** the post as written,
- **edits and approves** it, for example to fix formatting or remove quoted text, or
- **rejects** it.

Rejections should be explainable. A community member who submits by email receives an acknowledgment; a rejection that arrives without a reason reads as silence.

## How community posts enter the queue

A community post can arrive:

- **by email**, from an active subscriber of the channel or a member of channel staff;
- **through the web application**, when a signed-in subscriber uses the submission form.

A message from an address that is not subscribed is not turned into a draft; the sender receives a reply explaining how to subscribe. This prevents the queue from being filled by strangers who found the address.

Submissions are rate-limited per sender, so one person cannot flood the queue.

## Responses are handled differently

A reply to a sent broadcast is a **broadcast response**, not a new submission. It is attached to the broadcast it answers and can be redistributed to the channel without the full moderation queue. Because a response comes from a subscriber who already receives the channel, the platform relies on the mail provider's spam assessment rather than a fresh content review.

That is a deliberate trade-off: it keeps conversations responsive, and it means channel administrators should still watch the response list and remove abusive replies.

## Approval, translation and sending

Approval is the point of no return for content. Once approved:

1. The message is translated into each active language, unless the author supplied those versions.
2. Delivery selects each subscriber's preferred language and falls back to the broadcast's primary language when a translation is unavailable.
3. Subscribers on real-time delivery receive the broadcast; digest subscribers receive it in the next digest.

If translation fails for one language, the send proceeds in the primary language rather than blocking the whole broadcast.

## What administrators can still change after sending

Sent broadcasts are part of the record. You can read them in the archive, review their delivery and open counts, and read the responses. You cannot edit the sent message or recall it from subscribers' inboxes. Correct a mistake with a follow-up broadcast, not by editing history.

## Related Content

- [Moderating Community Submissions](../how-to/moderating-community-submissions.md): The review steps.
- [Creating and Sending Broadcasts](../how-to/creating-and-sending-broadcasts.md): Composing an administrator broadcast.
- [Broadcast Responses and Threaded Discussions](./broadcast-responses-threading.md): What happens after sending.
- [Analyzing Broadcast Performance](../how-to/analyzing-broadcast-performance.md): Reading delivery and open metrics.
