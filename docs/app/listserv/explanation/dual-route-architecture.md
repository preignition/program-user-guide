---
description: An architectural explanation of why the Listserv application provides both email-based command routes and a web application interface.
---

# Dual-Route Architecture: Email Commands & Web Application

The Accessible Listserv application is built on a **Dual-Route Architecture**: a co-equal design where every core subscription and submission feature is accessible either through standard **Email Commands** or through an accessible **Web Application**.

```text
                           ┌────────────────────────┐
                           │   Inbound Mailgun      │
                           │   Forwarding Route     │
                           └───────────┬────────────┘
                                       │
                        ┌──────────────┴──────────────┐
                        │                             │
               [Email Commands]              [Email Submissions]
               SUBSCRIBE/UNSUB               Create Draft Broadcast
                        │                             │
                        └──────────────┬──────────────┘
                                       │
                                       ▼
┌────────────────────────┐  Unified Firestore Data Tier   ┌────────────────────────┐
│  Web Application Route │ ─────────────────────────────▶ │   App/Listserv Data    │
│  Lit / Vaadin / WCAG   │                                │  Broadcasts & Subs     │
└────────────────────────┘                                └────────────────────────┘
```

---

## Why Dual Route? Context & Problem Statement

Organizations using the Listserv platform often coordinate communications across geographically dispersed member networks and diverse user communities operating under highly disparate technological and infrastructural constraints:

1. **Bandwidth & Connectivity Barriers**: Users in low-connectivity regions frequently experience intermittent internet access, high mobile data tariffs, or operate on feature phones with legacy email clients that cannot run modern JavaScript web applications.
2. **Accessibility Barriers**: Web forms—even when accessible—require active browser sessions, network navigation, and form validation. Standard email interfaces are already deeply integrated into assistive technology workflows (screen readers, braille displays) used daily by blind and visually impaired advocates.
3. **Administrative Complexity**: Channel administrators require rich text composition, accessible email templates, automated virus scanning for attachments, AI moderation tools, translation management, and detailed delivery analytics.

---

## The Dual Routes Explained

### Route 1: Email Command Route (Low-Bandwidth / Zero-JS)

The Email Command route processes incoming emails sent to channel addresses (e.g., `channel-1@mg.a11ydata.com`).

#### How Inbound Email Commands Work:

1. **Mailgun Forwarding**: An inbound webhook forwards raw email payloads to `POST /app/listserv/mail`.
2. **Command Parsing**: The parser inspects the **subject line** (or first line of the body) for command keywords matching English, French, Portuguese, or Arabic:

| Command | Recognized Keywords (Case-Insensitive) | System Action |
| --- | --- | --- |
| **SUBSCRIBE** | `SUBSCRIBE`, `SUB`, `ABONNE`, `INSCREVER`, `اشتراك` | Registers subscriber in Firestore as `active` and adds them to the channel's Mailgun list. |
| **UNSUBSCRIBE** | `UNSUBSCRIBE`, `UNSUB`, `SIGNOFF`, `DESABONNE`, `CANCELAR`, `إلغاء الاشتراك` | Sets status to `unsubscribed` and removes user from all Mailgun lists. |
| **HELP** | `HELP`, `AIDE`, `AJUDA`, `مساعدة` | Sends an automated reply email with command usage instructions. |

1. **Email Submissions**: If no command keyword is detected, the inbound email is ingested as a community post submission, creating a `Broadcast` document in `draft` status (`origin: 'user'`, `template: 'community'`) and forwarding it to the admin Moderation Queue.
2. **Immediate Activation**: Email commands sent directly from a user's address are self-authenticating. Unlike web signups, no double opt-in confirmation click is required.

---

### Route 2: Web Application Route (Rich UI & Administration)

The Web Application route provides a client-side Lit single-page application built with Vaadin and Material components.

#### Capabilities:

- **WCAG 2.1 AA Web Forms**: Public subscription page with explicit language selection radio buttons and weekly digest toggles.
- **Double Opt-In Flow**: Web signups send a cryptographically signed verification link to ensure email validity before activation.
- **Admin Dashboards**: Drawer-routed management panels for broadcast drafting, template assignment (Newsletter, Data Alert), file attachment scanning, and subscriber auditing.
- **AI-Powered Moderation Queue**: Real-time evaluation of community posts using `gpt-4o-mini` via `effect/unstable/ai`.
- **Settings Governance**: Active language toggles, bounce thresholds, and team role management (`Owner`, `Editor`, `Guest`).

---

## Unified Data Tier & Convergence

Despite operating through two distinct interaction channels, both routes converge seamlessly onto a single, unified backend architecture:

- **Single Firestore Schema**: Both web forms and email commands write to `app/listserv/subscriber` and `app/listserv/broadcast`.
- **Shared Firebase Auth Identity**: Every subscriber—whether registered via web double opt-in or email command—is backed by a Firebase Auth user account (`SubscriberId == Auth UID`).
- **Synchronized Mailgun Lists**: Both routes automatically sync subscriber membership across Mailgun real-time (`{channelId}@mg.a11ydata.com`) and digest (`{channelId}-digest@mg.a11ydata.com`) mailing lists.

This dual-route convergence guarantees that no community member is excluded due to connectivity constraints, while administrative teams retain complete control over moderation, security, and quality.

---

## Related Content

- [Broadcast Lifecycle & AI Moderation Explanation](./broadcast-lifecycle-and-moderation.md)
- [Subscriber Identity & Auth Explanation](./subscriber-identity-and-auth.md)
- [Mailing List & Digest Engine Explanation](./mailing-list-and-digest-architecture.md)
- [Subscribing & Preferences How-To](../how-to/subscribing-and-managing-preferences.md)
