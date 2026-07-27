---
description: An architectural explanation of how Markdown is used as the broadcast content format for composition, storage, rendering, and translation.
---

# Markdown Content Format

The Listserv application uses **Markdown** as the canonical format for broadcast body content — from composition through storage, preview, email rendering, and translation.

---

## 1. Why Markdown

Markdown was chosen as the content format because it:

- **Separates content from presentation** — Administrators focus on writing; the template engine handles styling, WCAG colors, and responsive layout.
- **Survives email client quirks** — Markdown is converted to semantic HTML (`marked.parse()`) at send time. The resulting HTML is embedded in Mailgun email templates designed to render consistently across Outlook, Gmail, Apple Mail, and legacy clients.
- **Works with AI translation** — The AI translation prompt explicitly instructs the model to "preserve markdown formatting, links and tone," ensuring translated versions maintain structure.
- **Enables offline drafting** — Administrators can compose broadcast content in any external markdown editor and paste it directly into the broadcast editor.

---

## 2. Content Lifecycle

```text
Composition          Storage              Preview                 Email Dispatch
   (Web UI)          (Firestore)           (Web + Email)           (Mailgun)
      │                  │                    │                        │
      ▼                  ▼                    ▼                        ▼
  Markdown text   ──▶  broadcast.content   ──▶  parse(body)  ──▶  marked.parse(body)
  entered by           .body (string)         renders HTML         renders HTML
  admin                                       in preview card      in email template
```

### Composition

Administrators enter the broadcast body as **plain Markdown text** in the broadcast editor. Standard Markdown syntax is supported:

```markdown
# Heading level 1
## Heading level 2

This is a **bold** statement and this is *italic*.

- Bullet point one
- Bullet point two

[Visit our website](https://example.com)

> Blockquote for important callouts
```

### Storage

The raw markdown string is stored directly in Firestore at `broadcast.content.{locale}.body`. No pre-processing or HTML conversion happens at write time — the markdown source is the authoritative version.

### Web Preview

On the client side, the broadcast email preview view imports `parse()` from `@lit-app/shared/md` to render markdown into styled HTML inside a `<vaadin-card>` with the `markdown-body` CSS class:

```text
<div class="markdown-body">
  <!-- parse(body) converts markdown → HTML -->
</div>
```

This gives administrators a **live WYSIWYG preview** before sending — they see exactly how the content will render in subscriber email clients.

### Email Dispatch

At send time, the server-side `renderBroadcastBody()` function passes the raw markdown body through `marked.parse()` to generate semantic HTML. This HTML is then injected into the selected email template (Newsletter, Data Alert, or Community) via `{{body}}` placeholder substitution.

---

## 3. Email Ingestion (HTML → Markdown)

When subscribers submit community posts via email, the inbound Mailgun pipeline may receive messages in **HTML format** (e.g., from Gmail's rich text composer). These are converted to Markdown via `htmlToMarkdown()` before storage:

```text
Inbound HTML email   ──▶  htmlToMarkdown()   ──▶  broadcast.content.en.body (Markdown)
```

This ensures that all broadcast content — whether composed in the web app or submitted via email — uses the same Markdown storage format, enabling consistent rendering and translation.

---

## 4. Translation Preservation

The AI translation prompt instructs the model to preserve markdown structure:

```text
You are a professional translator. Translate faithfully,
preserving markdown formatting, links and tone.
Return only the translation.
```

This means translated versions retain bold markers (`**text**`), links (`[label](url)`), headings (`# Title`), and lists — ensuring consistent rendering across all active channel languages.

---

## Related Content

- [Creating & Sending Broadcasts How-To](../how-to/creating-and-sending-broadcasts.md)
- [Multilingual Support Explanation](./multilingual-support.md)
- [Broadcast Lifecycle & AI Moderation](./broadcast-lifecycle-and-moderation.md)
