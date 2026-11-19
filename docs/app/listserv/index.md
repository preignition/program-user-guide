---
description: Welcome to the Accessible Listserv App User Guide. This guide covers channel subscriptions, moderated broadcasts, dual-route email processing, and administrative controls.
layout: home

hero:
  name: "Accessible Listserv"
  text: "Documentation for the Listserv Application"

features:
  - title: Tutorial
    details: Step-by-step onboarding for new listserv users and channel administrators
    icon: 
      light: /images/icons/tutorial.svg
      dark: /images/icons/tutorial-dark.svg
    link: ./tutorial/index
  - title: How-to Guides
    details: Recipe-style instructions for specific subscription, broadcast, and moderation tasks
    icon: 
      light: /images/icons/how-to.svg
      dark: /images/icons/how-to-dark.svg
    link: ./how-to/index
  - title: Reference
    details: Complete specifications for public pages, admin dashboards, settings, and schemas
    icon: 
      light: /images/icons/contract.svg
      dark: /images/icons/contract-dark.svg
    link: ./reference/index
  - title: Explanation
    details: Deep dives into dual-route architecture, AI moderation, Auth identity, and mailing lists
    icon: 
      light: /images/icons/explanation.svg
      dark: /images/icons/explanation-dark.svg
    link: ./explanation/index
---

<!-- markdownlint-disable-next-line -->
<br>
<br>

# Accessible Listserv App User Guide

Welcome to the documentation for the **Accessible Listserv Application**.

The Listserv app provides a fully WCAG 2.1 AA compliant, channel-scoped announcement and moderation system. It enables organizations to distribute reports, findings, and announcements across multilingual stakeholders via both web interface and email commands.

## How this documentation is organized

Organized according to the [Diátaxis framework](https://diataxis.fr/), our documentation is structured around four distinct user needs:

### 1. [Tutorials](./tutorial/index.md) (Learning-oriented)
**New to Listserv?**  
Follow our guided hands-on walkthrough to learn how to subscribe to a channel, send community messages via email, review submissions, and manage broadcast delivery.

### 2. [How-to Guides](./how-to/index.md) (Goal-oriented)
**Need to complete a specific task?**  
Step-by-step recipes covering:

- [Subscribing & Preferences](./how-to/subscribing-and-managing-preferences.md) — Web forms, email commands, and delivery settings
- [Browsing Archives](./how-to/browsing-and-searching-archives.md) — Public broadcast search and viewing
- [Creating & Sending Broadcasts](./how-to/creating-and-sending-broadcasts.md) — Composing, formatting, and dispatching announcements
- [Composing Multilingual Broadcasts](./how-to/composing-multilingual-broadcasts.md) — Automatic language detection and translation
- [Moderating Submissions](./how-to/moderating-community-submissions.md) — Reviewing, approving, and rejecting community submissions
- [Analyzing Performance](./how-to/analyzing-broadcast-performance.md) — Delivery rates, open tracking, and engagement metrics
- [Configuring Settings](./how-to/configuring-channel-settings.md) — Channel metadata, active languages, bounce handling, and roles
- [Importing a Team Audience](./how-to/importing-a-team-audience.md) — Seeding subscribers from reusable team audiences

### 3. [Reference](./reference/index.md) (Information-oriented)
**Looking for facts, field descriptions, or UI element specifications?**  
Factual descriptions of all application interfaces and data models:

- **[Public Pages](./reference/public/index.md):** Archives & Subscription interface
- **[Admin Pages](./reference/admin/index.md):** Moderation queue, Broadcast list, Subscriber management, Analytics
- **[Settings Pages](./reference/settings/index.md):** Channel configuration, active languages, bounce handling, user roles, and audience import

### 4. [Explanation](./explanation/index.md) (Understanding-oriented)
**Want to understand the architectural design decisions?**  
Discursive background on core engineering choices:

- **[Dual-Route Architecture](./explanation/dual-route-architecture.md):** Why both Email commands and Web app routes coexist
- **[Broadcast Lifecycle & AI Moderation](./explanation/broadcast-lifecycle-and-moderation.md):** State machines, automated classification, and dispatch workflows
- **[Subscriber Identity & Auth](./explanation/subscriber-identity-and-auth.md):** Firebase Auth UID integration and `accountIncomplete` claims
- **[Mailing Lists & Digest Engine](./explanation/mailing-list-and-digest-architecture.md):** Mailgun mailing list infrastructure & digest dispatch
- **[Bounce Handling & List Cleaning](./explanation/bounce-handling-list-cleaning.md):** Handling delivery failures and deactivating stale subscribers
- **[Broadcast Responses & Threading](./explanation/broadcast-responses-threading.md):** Managing community reply threads
- **[Multilingual Support](./explanation/multilingual-support.md):** Language detection and automatic translation pipeline
- **[Markdown Content Format](./explanation/markdown-content-format.md):** Inbound and outbound Markdown processing for email templates

---

## Related Content

- [Accessible Data Framework Documentation](/app/index.md)
- [Accessible Surveys Documentation](/app/survey/index.md)
- [Customer Management Documentation](/app/customer/index.md)
