---
description: "A guided walkthrough for channel owners and editors: confirm the channel exists, configure it, send a first broadcast, moderate, and read the results."
---

# Tutorial: Take Charge as an Administrator

This tutorial sets up and runs a channel end to end. It is for channel owners, admins and editors; subscribers should start with [Take Part as a Subscriber](./for-subscribers.md).

## Before you start

- The channel is **provisioned in the Customer Portal**, under the team that owns it. A channel belongs to a team, and the team's plan quota and languages come from there.
- You have a channel role that permits the step: **Owner** for settings and access, **Editor** for broadcasts and subscribers, **Moderator** for the moderation queue.
- The organization has enabled the languages the channel will use.
- At least one subscriber or team audience is available to receive the first broadcast.

If any of these is missing, fix it in the Customer Portal before continuing; Channel Settings cannot create a channel or enable an organization language.

## Step 1: Review the channel settings

1. Open the Listserv application and select **Channel Settings**.
2. Open **Channel Configuration** and set the title, description, admin contact, rate limit and privacy notice.
3. Open **Active Languages** and activate the languages the channel will really maintain.

Do not activate a language nobody can review. A machine translation that no one checks is worse than an honest primary-language broadcast.

## Step 2: Confirm who can administer the channel

1. In **Channel Settings**, open **User Access**.
2. Check the owner and add the editors and moderators who need to work on the channel.
3. Assign the smallest role that lets each person do their job.

The moderation queue is for moderators; settings and access are for owners and admins; broadcast composition is for editors.

## Step 3: Get subscribers

- Invite people to subscribe by email or on the web; both routes are documented in [Take Part as a Subscriber](./for-subscribers.md).
- Or import a team audience in **Channel Settings → Audience Import**, after confirming the lawful-basis warranty.

An import adds active subscribers immediately; it does not send invitations. Tell people what to expect before the first broadcast reaches them.

## Step 4: Compose a broadcast

1. Open **Admin → Broadcasts** and create a broadcast.
2. Choose the **primary language** and write the subject and body in Markdown.
3. Add or review the other active language versions.
4. Use the preview to check formatting and links.
5. Save the draft.

Start with a short, real announcement rather than a test string: it is the message your subscribers will judge the channel by.

## Step 5: Approve and send

1. Review the broadcast once more.
2. Approve it.
3. Watch its status move through translating and sending to sent.
4. Check that the email arrives in a subscribed inbox, in the expected language.

If the status ends in error, read the recorded error before retrying. Do not approve a duplicate copy of the same broadcast; fix the cause first.

## Step 6: Moderate community posts

1. Open **Admin → Moderation**.
2. Read the submitted post, its category and its spam score.
3. Choose **Approve**, **Edit & Approve**, or **Reject**.
4. For a rejection, make sure the author can understand why.

The automated category and score triage the queue; they do not make the decision.

## Step 7: Read the results

Open **Admin → Analytics** and the broadcast's details. Check:

- **Delivery rate** — were messages accepted?
- **Open rate** — are subscribers opening them? Each recipient counts once.
- **Responses** — is the channel generating discussion?
- Filter by language to see whether one community is being left out.

Click tracking is not collected, so there is no click-through figure.

## Step 8: Keep the list healthy

1. Open **Admin → Subscribers**.
2. Filter by **Bounced** and **Unsubscribed**.
3. Reactivate only addresses you know work; ask for a new address otherwise.
4. Watch the bounce count after a large send.

See [Managing Subscribers](../how-to/managing-subscribers.md) for the steps.

## What you have now

- A configured channel with the right languages and roles.
- At least one sent broadcast in the archive.
- A moderation routine and a way to read performance.
- A subscriber list you can keep clean.

## Related Content

- [Managing Subscribers](../how-to/managing-subscribers.md): Day-to-day subscriber work.
- [Creating and Sending Broadcasts](../how-to/creating-and-sending-broadcasts.md): Composition in detail.
- [Moderating Community Submissions](../how-to/moderating-community-submissions.md): The review queue.
- [Channel Settings Reference](../reference/settings/index.md): Every setting.
