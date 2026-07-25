---
description: A complete beginner tutorial covering subscription, email submission, content moderation, and broadcast delivery in the Accessible Listserv application.
---

# Getting Started with Listserv

This tutorial will guide you through the fundamental workflows of the Accessible Listserv application: subscribing to a channel, submitting a message by email, moderating the post as an administrator, and tracking broadcast delivery.

## Prerequisites

Before starting, ensure you have:

- Access to the Listserv application URL (e.g. `http://localhost:7173/listserv-playwright/listserv`)
- A valid email address to receive confirmation messages
- Administrator access to a test channel (e.g. `channel-1`)

---

## Step 1: Subscribe to a Channel

1. Navigate to the Listserv application home page.
2. Click the **Subscribe** link in the top navigation bar.
3. In the **Email address** field, enter your email address (e.g., `user@example.com`).
4. Under **Preferred Language**, select your language choice (e.g., **English**).
5. Leave the **Weekly digest** option unchecked for real-time delivery.
6. Click **Subscribe**.

::: tip Double Opt-In
Check your email inbox for a verification email. Click the link provided in the message to activate your subscription.
:::

---

## Step 2: Submit a Message via Email

Subscribers can contribute announcements to the channel directly from their standard email client:

1. Open your email client (e.g., Outlook, Gmail, Apple Mail).
2. Compose a new message addressed to the channel email address:
   `channel-1@mg.a11ydata.com`
3. Enter a clear subject line:
   `[Announcement] Upcoming Regional Accessibility Workshop`
4. Type your announcement body and attach relevant documents if needed.
5. Click **Send**.

::: info
Your submission is automatically received by the Listserv engine, parsed into a draft broadcast, and forwarded to the admin moderation queue. You will receive an automated acknowledgment email confirming receipt.
:::

---

## Step 3: Moderate the Submission

As a channel administrator, review community submissions before dispatching them:

1. In the Listserv web application, click **Admin** in the main navigation.
2. Select **Moderation** from the left drawer menu to view the **Moderation Queue**.
3. Click on the submitted post (`[Announcement] Upcoming Regional Accessibility Workshop`).
4. Review the AI-generated content summary, category tag, and spam assessment score.
5. Click **Approve** to authorize the post for broadcast.

---

## Step 4: Dispatch and Verify Broadcast

1. Once approved, the broadcast transitions to `approved` state and prepares for delivery.
2. Click **Broadcasts** in the admin drawer menu to view the delivery status.
3. Locate the broadcast in the grid and observe the status chip change from **sending** to **sent**.
4. Check your subscriber email inbox to confirm receipt of the broadcast email!

---

## Next Steps

Now that you have completed the basic workflow:

- Learn how to manage delivery preferences in [Subscribing & Preferences](../how-to/subscribing-and-managing-preferences.md).
- Explore [Dual-Route Architecture](../explanation/dual-route-architecture.md) to understand how email and web application routes synchronize.

---

## Related Content

- [How-To Guides Index](../how-to/index.md)
- [Admin Reference Specification](../reference/admin/index.md)
