---
description: Why every Listserv task works from both an email account and an accessible web application, and what each route is best at.
---

# Email Commands and the Web Application

The Listserv gives every core task two routes: **email** and the **web application**. You can subscribe, unsubscribe, get help, and contribute a post from either one. The routes are equal by design, not one as a fallback for the other.

## Why two routes

A listserv is often the only channel that reaches everyone in a network. Members may work from low-bandwidth regions, use feature phones with basic mail clients, or rely on assistive technology that is already well integrated with their email program. A web form — however accessible — still requires a browser session, a stable connection and JavaScript.

Email also meets people where they already are. A blind advocate who reads mail in a screen reader does not need to learn a new web interface to join a channel. An administrator who needs rich composition, translation review and delivery analytics gets a full workspace in the browser.

Having both means a subscriber is never forced onto a route that does not work for them, and an administrator is never forced to do administrative work by email.

## What the email route does

Send a message to the channel address. The command goes in the subject line or the first line of the body, in any of the channel's active languages.

| Task | What you send |
| --- | --- |
| Join | the subscribe command |
| Leave | the unsubscribe command |
| Get help | the help command |
| Contribute a post | an ordinary message to the channel address |

Because the message comes from your own address, it proves you control that mailbox. Email subscriptions are therefore activated immediately; there is no second confirmation click. A contribution is received as a draft and enters the channel's moderation flow like any other submission.

The exact commands in each language are listed in [Subscribing and Managing Delivery Preferences](../how-to/subscribing-and-managing-preferences.md).

## What the web application does

The web application offers the same subscription tasks with more control:

- choose a preferred language from the channel's active languages;
- switch between real-time email and a weekly digest;
- read the public archive and search past broadcasts;
- sign in to complete your account and manage preferences;
- contribute a post through the submission form.

For administrators it adds the workspace: composing and translating broadcasts, reviewing the moderation queue, managing subscribers, checking delivery performance, and configuring the channel.

## Where the routes meet

Both routes write to the same channel and the same subscriber record. A person who subscribes by email appears in the admin subscriber list; a person who subscribes on the web receives the same broadcasts. Replying to a broadcast by email works whether the broadcast was composed in the app or submitted by email.

The two routes differ in what they can prove and what they can show:

- **Email** proves control of the sending address and needs no account.
- **Web** can show the archive, previews and settings, and lets a subscriber complete an account.

## Choosing a route

- **Subscribers**: use email if it is what you have; use the web app to read the archive, choose a digest, or manage your account.
- **Administrators**: use the web app for all channel work. Email is for reading and replying, not for administration.
- **Organizations**: publish both. The channel address belongs in every printed notice and email signature; the web link belongs wherever a browser is available.

## Related Content

- [Subscribing and Managing Delivery Preferences](../how-to/subscribing-and-managing-preferences.md): The commands and the web form, step by step.
- [Real-Time Broadcasts and Weekly Digests](./mailing-list-and-digest-architecture.md): How the two delivery modes differ.
- [Subscriber Accounts and Sign-In](./subscriber-identity-and-auth.md): What an account adds to an email subscription.
- [Accessible Listserv Overview](../index.md): Where each route is documented.
