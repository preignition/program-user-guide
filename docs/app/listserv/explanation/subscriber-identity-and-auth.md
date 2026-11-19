---
description: How a subscription becomes an account, why confirmation is required on the web, and what completion adds.
---

# Subscriber Accounts and Sign-In

A subscription is more than an address on a mailing list: it is a small account that lets a person choose how they receive a channel, pause it, or complete their sign-in. This article explains how that account works from a subscriber's point of view.

## One subscription per address per channel

Each email address can subscribe to a channel once. If the same person subscribes again, the existing subscription is reused rather than duplicated. An address can still belong to several different channels, each with its own preferences.

This matters when a person changes jobs or forwards mail: the channel sends to the address that subscribed, so a new address is a new subscription.

## Confirming a web subscription

Subscribing through the web form starts a confirmation step:

1. You enter your address and preferences.
2. The channel sends a confirmation email.
3. You open its link to activate the subscription.

Until you confirm, the subscription is **pending** and no broadcasts are sent to it. This protects both sides: nobody can subscribe you without access to your inbox, and the channel does not accumulate unverified addresses.

Email subscriptions work differently. Sending a subscribe command from your own address already proves you control it, so those subscriptions activate immediately.

## Completing your account

A confirmed subscriber has an account, but it may not have a password yet. The confirmation email and the reply to an email subscription both include a link to **complete your account**.

1. Open the completion link.
2. Set a password (at least six characters) and confirm it.
3. Select **Set Password**.
4. Sign in with your email address and the new password.

Completing the account is what lets you manage preferences in the web application instead of changing them by email. It is optional for simply receiving broadcasts.

If the completion link fails, it may have been used already or expired; start again from the confirmation email, or ask the channel administrator to resend it.

## Subscriber states

| State | What it means for the subscriber |
| --- | --- |
| **Pending** | The web form was submitted but the confirmation link has not been opened. No broadcasts. |
| **Active** | Confirmed and receiving broadcasts according to the chosen delivery mode. |
| **Unsubscribed** | Left the channel, or was removed after repeated delivery failures. No broadcasts. |
| **Bounced** | The address hard-bounced and is no longer deliverable. |

A **suppressed** address is one the organization has asked the platform never to contact again; it stays suppressed across channels and cannot be re-subscribed by an import.

## Imported subscribers

A channel administrator can import a team audience, adding many people at once. Imported subscribers are active immediately and receive broadcasts, but they did not go through the opt-in flow, so their account may not be linked to a sign-in yet.

That is why imports require the administrator to confirm a lawful basis and permission. It also means an imported subscriber who wants to manage preferences may need to complete an account first; the channel administrator can explain how.

## What an account does not change

Completing an account does not resubscribe someone who unsubscribed, restore a bounced address, or change the delivery mode. Those remain explicit choices — by the subscriber, or by an administrator acting on a request.

## Related Content

- [Subscribing and Managing Delivery Preferences](../how-to/subscribing-and-managing-preferences.md): The web form, email commands and account completion steps.
- [Managing Subscribers](../how-to/managing-subscribers.md): How administrators view and change subscriber states.
- [Bounce Handling and List Cleaning](./bounce-handling-list-cleaning.md): Why an address can become unsubscribed without the person leaving.
- [Email Commands and the Web Application](./dual-route-architecture.md): The two routes into a subscription.
