---
description: An architectural explanation of the multilingual broadcast pipeline, subscriber language preferences, email command localization, and language-segmented analytics.
---

# Multilingual Broadcast Support

The Listserv application is designed for **multilingual member networks**, supporting English, French, Portuguese, and Arabic across every interaction surface — from subscriber onboarding through email dispatch to analytics.

---

## 1. End-to-End Language Flow

```text
Subscriber selects       ───▶   Preferences stored in       ───▶   Broadcast dispatched
preferred language              standard UserPreference             in subscriber's language
(on subscribe form)             (`user/{uid}/private/preference`)
```

Language flows through four distinct layers:

1. **Configuration** — Channel owner enables active languages (`/settings/language`)
2. **Composition** — Admin selects a `primaryLanguage` for each broadcast and composes multilingual body content
3. **Translation** — When a broadcast enters `approved` state, translations are generated or verified for each active channel language
4. **Delivery** — The send engine selects the correct language version per subscriber by matching the subscriber's preferred language against available translations

---

## 2. Per-Channel Active Languages

Channel owners control which languages are active via **Channel Settings > Active Languages** (`/settings/language`). Languages available for activation are sourced from the customer's global language configuration in **Customer Settings**.

<figure>
  <img src="../reference/settings/assets/settings-language-auto.png" alt="Active Languages Configuration">
  <figcaption>Managing active languages for automated broadcast translation</figcaption>
</figure>

When a language is enabled:

- Approved broadcasts entering the `approved` state trigger translation into that target language
- A dedicated **Mailgun mailing list** is maintained per-language: `{channelId}-{lang}@mg.a11ydata.com`
- Subscribers with that preferred language are automatically added to the corresponding language list

---

## 3. Broadcast Composition & Primary Language

When creating a broadcast, the administrator selects a **Primary Language** — the language the content is originally composed in. Additional language versions are provided either:

- **Manually**: The admin writes content in multiple languages directly in the broadcast editor (`locale/{lang}` fields)
- **Automatically**: The translation pipeline generates versions for each active channel language

```text
broadcast.content = {
  "en": { subject: "Upcoming Workshop", body: "Join us for..." },
  "fr": { subject: "Atelier à venir",  body: "Rejoignez-nous pour..." },
  "pt": { subject: "Workshop próximo", body: "Junte-se a nós para..." },
  "ar": { subject: "ورشة عمل قادمة",    body: "انضموا إلينا..." },
}
```

If automatic translation fails for a specific language, the system falls back to the `primaryLanguage` version so delivery proceeds without interruption.

---

## 4. Subscriber Language Preferences

### Language Selector on Subscribe

Subscribers select their preferred language during signup:

<figure>
  <img src="../reference/public/assets/subscribe-full-auto.png" alt="Language Selector in Subscribe Form">
  <figcaption>Language selection radio group on the public subscription form</figcaption>
</figure>

Available languages are filtered to the channel's `activeLanguages`. Each option displays the **language-native name** (e.g., "Français" instead of "French") via the `languageNative` lookup table.

The selection is stored as an ISO 639-1 code (`en`, `fr`, `pt`, `ar`) in a standardized **UserPreference** document (`user/{uid}/private/preference`) — decoupled from listserv-specific data to enable reuse across the platform.

### Language Matching at Send Time

During dispatch, the send engine:

1. Reads each subscriber's preferred language from **UserPreference**
2. Selects the matching locale version from `broadcast.content`
3. Falls back to `broadcast.primaryLanguage` if the subscriber's language is unavailable
4. Sends via the appropriate per-language Mailgun mailing list

---

## 5. Multilingual Email Commands

Email-based subscription commands (`SUBSCRIBE`, `UNSUBSCRIBE`, `HELP`) are recognized in all four supported languages, with case-insensitive matching on the subject line or first line of the body:

| Command | English | French | Portuguese | Arabic |
| --- | --- | --- | --- | --- |
| **Subscribe** | `SUBSCRIBE` / `SUB` | `ABONNE` / `ABONNER` | `INSCREVER` | `اشتراك` |
| **Unsubscribe** | `UNSUBSCRIBE` / `UNSUB` | `DESABONNE` | `CANCELAR` | `إلغاء الاشتراك` |
| **Help** | `HELP` | `AIDE` | `AJUDA` | `مساعدة` |

Automated reply emails (confirmation, acknowledgment, error) are also composed in the matched language or fall back to the channel's primary language.

---

## 6. Language-Segmented Analytics

Per-broadcast performance metrics are filterable by language:

- **Delivery Rate** per language list (sent × delivered for `{channelId}-fr@mg.a11ydata.com` vs. `{channelId}-ar@mg.a11ydata.com`)
- **Open Rate** and **Click Rate** segmented by subscriber language preference
- Enables comparison of engagement across language communities

---

## Related Content

- [Dual-Route Architecture Explanation](./dual-route-architecture.md)
- [Mailing List & Digest Engine Explanation](./mailing-list-and-digest-architecture.md)
- [Subscribing & Preferences How-To](../how-to/subscribing-and-managing-preferences.md)
- [Configuring Channel Settings How-To](../how-to/configuring-channel-settings.md)
