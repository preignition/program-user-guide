---
description: How a channel serves subscribers in several languages, from active language settings to translated broadcasts and email commands.
---

# Multilingual Support

A channel can serve members who read different languages. The Listserv translates approved broadcasts into the languages the channel has activated, delivers each subscriber the version in their preferred language, and understands subscription commands in several languages.

## Active languages

Channel administrators choose which languages the channel uses in **Channel Settings → Active Languages**. The list comes from the languages the organization has enabled in the Customer Portal, so a language must be enabled at the organization level before a channel can activate it.

Only activated languages are offered on the subscription form and translated at send time. Activating a language is a commitment: approved broadcasts are expected to reach subscribers in it.

## Primary language and translations

Every broadcast has a **primary language** — the language its author wrote it in. From there:

- an author can write versions in other active languages by hand;
- the platform translates the broadcast into the remaining active languages when it is approved;
- if a translation fails, the broadcast is sent in the primary language rather than held back.

Review automatic translations before relying on them for consequential announcements. Names, dates, numbers and legal wording are where machine translation most often needs a human edit.

## Subscriber language preference

Subscribers choose a preferred language when they subscribe, from the channel's active languages. The form shows each language in its own name — "Français", not "French" — so people recognize their language without translating the interface.

At send time the platform picks the broadcast version matching the subscriber's preference. If that version is missing, the primary language is used.

A subscriber can change their preference by completing their account and updating settings, or by asking the channel administrator.

## Email commands in each language

The email route works in the channel's languages too. Subscribe, unsubscribe and help are recognized in English, French, Portuguese and Arabic; the exact words are in [Subscribing and Managing Delivery Preferences](../how-to/subscribing-and-managing-preferences.md).

Automated replies — confirmation, acknowledgment, error — are written in the language the command was sent in, falling back to the channel's primary language.

## Language and delivery

Language and delivery mode are independent choices. A French-speaking digest subscriber receives the French version in the weekly digest; an Arabic-speaking real-time subscriber receives the Arabic version as each broadcast is sent.

Vacation mode pauses both.

## Reading performance by language

Broadcast analytics can be filtered by language, so a channel can see whether delivery and opening differ between its language communities. That is often the first sign that a translation is not reaching people well, or that a language was activated without anyone available to review it.

## Practical guidance

- Activate only languages the channel can actually maintain; an unreviewed machine translation is worse than an honest primary-language broadcast.
- Keep the primary language consistent across broadcasts so translation memory and reviewer expectations stay stable.
- Tell subscribers which languages are available before they join.
- Test one broadcast in every active language before a wide send.

## Related Content

- [Composing Multilingual Broadcasts](../how-to/composing-multilingual-broadcasts.md): Writing and reviewing the language versions.
- [Configuring Channel Settings](../how-to/configuring-channel-settings.md): Activating languages for the channel.
- [Subscribing and Managing Delivery Preferences](../how-to/subscribing-and-managing-preferences.md): Choosing a language as a subscriber.
- [Analyzing Broadcast Performance](../how-to/analyzing-broadcast-performance.md): Language-segmented metrics.
