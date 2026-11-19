---
description: How to find subscribers, filter by status or delivery mode, change delivery preferences, and reactivate bounced or unsubscribed addresses.
---

# How to Manage Subscribers

Channel owners and editors work with the subscriber list in **Admin → Subscribers**. This guide covers finding people, changing how they receive broadcasts, and handling bounced or unsubscribed addresses.

## Open the subscriber list

1. Sign in to the Listserv application.
2. Select **Admin** in the top navigation.
3. Select **Subscribers** in the drawer.

The grid lists every subscriber with their address, status, delivery mode, vacation mode and bounce count.

## Find a subscriber

- Use the **Email** column filter to search by address; the filter matches partial text.
- Sort any column to group people by status, bounce count or delivery mode.
- Filter **Status** to isolate `pending`, `active`, `unsubscribed` or `bounced`.

For a bulk change, filter first and work through the visible rows; do not change statuses one by one from an unfiltered list of thousands.

## Change delivery preferences

1. Select the subscriber's row to open the details.
2. Edit the subscriber.
3. Adjust:

| Setting | Effect |
| --- | --- |
| **Status** | `active` receives broadcasts; `unsubscribed` and `bounced` do not; `pending` has not confirmed. |
| **Digest mode** | Off sends each broadcast in real time; on sends the weekly digest. |
| **Vacation mode** | Pauses delivery while leaving the subscription active. |

1. Save.

Changes apply to subsequent sends. A broadcast already dispatched is not re-sent or recalled.

## Pause delivery for a vacation

1. Find the subscriber.
2. Turn **Vacation mode** on.
3. Save.

The subscriber remains active and keeps their preferences but receives nothing until vacation mode is turned off. This is the correct action when someone asks for a temporary pause; unsubscribing them loses their place in the channel and requires a new subscription later.

## Reactivate an unsubscribed or bounced subscriber

Reactivate only when you have evidence the address works.

1. Find the subscriber and open the details.
2. Check the **Bounce count** and the reason for the state.
3. Set **Status** to `active`.
4. Save.

For a bounced address, reactivating without fixing the underlying problem produces another bounce and further damages sender reputation. If the person has a new address, ask them to subscribe with it instead.

A person who unsubscribed deliberately should not be reactivated without their request; that would override a privacy choice.

## Handle pending subscriptions

A `pending` subscriber submitted the web form but has not opened the confirmation link.

- Ask them to check spam and open the confirmation email.
- If it never arrived, they can submit the form again with the same address.
- Do not set a pending subscriber to `active` manually: confirmation is what proves they control the address.

## Understand the states

| State | What it means | What to do |
| --- | --- | --- |
| **Pending** | Awaiting confirmation. | Ask the person to confirm. |
| **Active** | Receiving broadcasts. | Leave alone unless preferences change. |
| **Unsubscribed** | Left, or was removed after repeated bounces. | Reactivate only on request and only if deliverable. |
| **Bounced** | The address hard-bounced. | Ask for a working address; avoid blind reactivation. |

A **suppressed** address is blocked organization-wide and does not appear as a normal subscriber to reactivate.

## Export and audit

Use the import history and the grid filters for a record of who is subscribed. For a formal export of the subscriber list, use the team audience tools in the Customer Portal rather than copying from the grid.

## Related Content

- [Subscriber Accounts and Sign-In](../explanation/subscriber-identity-and-auth.md): What each subscriber state means.
- [Bounce Handling and List Cleaning](../explanation/bounce-handling-list-cleaning.md): Why addresses are deactivated.
- [Real-Time Broadcasts and Weekly Digests](../explanation/mailing-list-and-digest-architecture.md): Choosing a delivery mode.
- [Importing a Team Audience](./importing-a-team-audience.md): Adding subscribers in bulk.
- [Admin Pages Reference](../reference/admin/index.md): The subscriber grid columns.
