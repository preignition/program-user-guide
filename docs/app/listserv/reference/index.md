---
description: Technical reference specifications for public pages, admin dashboards, settings interfaces, and schemas in the Listserv application.
---

# Listserv Reference Manual

The Reference section provides **information-oriented**, austere, factual descriptions of all application screens, UI elements, data schemas, and API endpoints.

## Reference Sub-Sections

### 1. [Public Pages](./public/index.md)
Technical specifications for publicly accessible interfaces:

- **Broadcast Archive (`/broadcast`)**: Public feed of sent broadcasts and privacy warnings
- **Subscription Form (`/subscribe`)**: WCAG-compliant subscription form and preference controls

### 2. [Admin Pages](./admin/index.md)
Specifications for administrative dashboards guarded by team roles:

- **Admin Welcome (`/admin/welcome`)**: Control panel landing page
- **Moderation Queue (`/admin/moderation`)**: Community post review interface with AI widgets
- **Broadcast List & Detail (`/admin/broadcast`)**: Broadcast creation, editing, and analytics
- **Subscribers List (`/admin/subscriber`)**: Subscriber status and delivery list auditing

### 3. [Channel Settings](./settings/index.md)
Specifications for channel settings drawer pages:

- **Channel Configuration (`/settings/channel`)**: Metadata, admin contact, and rate limits
- **Active Languages (`/settings/language`)**: Multilingual translation activation
- **Bounce Handling (`/settings/bounce`)**: Automated bounce thresholds and list cleaning
- **User Management (`/settings/user`)**: Role assignments (Owner, Editor, Guest)

---

## Source Code References

For links to data schemas (`BroadcastS`, `ChannelS`, `SubscriberS`, `MailTemplateS`) and Lit UI components, see **[Reference Code Links (REF.md)](./REF.md)**.

---

## Related Content

- [Listserv How-To Guides](../how-to/index.md)
- [Listserv Explanations](../explanation/index.md)
