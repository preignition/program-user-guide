---
description: Why broadcast bodies are written in Markdown, how they become email HTML, and how translations keep their formatting.
---

# Markdown Content Format

Broadcast bodies are written in **Markdown** — the same lightweight formatting used across the platform. An administrator writes plain text with simple markers, and the platform renders it as styled HTML in the email.

This article covers what is specific to the Listserv. For the syntax itself, see the [Markdown Reference](../../survey/reference/content/markdown/index.md) and [How to Provide Rich Formatting](../../survey/how-to/providing-rich-formatting.md).

## Why Markdown

- **Content stays separate from design.** Authors write the message; the email template supplies the layout, colors and responsive structure.
- **It survives email clients.** The rendered HTML is embedded in a template designed for Outlook, Gmail, Apple Mail and older clients.
- **It translates cleanly.** Translations are instructed to preserve formatting, links and structure.
- **It is portable.** A message can be drafted in any text editor and pasted into the broadcast editor.

## From composition to inbox

1. **Compose.** The author enters Markdown in the broadcast editor, in the primary language and, optionally, other active languages.
2. **Preview.** The web preview renders the Markdown the way the email will look, so formatting mistakes are visible before sending.
3. **Translate.** When the broadcast is approved, translations preserve headings, lists, links and emphasis.
4. **Send.** The body is converted to email-ready HTML and placed in the selected template.

Attachments and images follow the channel's media guidance; always supply alternative text for images, because an image without it is unreadable to a screen reader.

## Inbound email is converted too

Community posts can arrive as rich HTML from a mail client. The platform converts that HTML to Markdown before storing it, so a post written in Gmail and a post written in the web editor end up in the same format and render consistently.

The conversion strips most of the sender's styling. That is intentional: the channel's template, not the sender's mail client, decides how the broadcast looks.

## What translation preserves

Automatic translation keeps:

- headings and their levels;
- bold, italic and inline code markers;
- links and their targets;
- bulleted and numbered lists;
- block quotes.

It does not guarantee that a translated link is appropriate for the audience, or that an idiom survives. Review translations of anything consequential.

## Listserv-specific formatting notes

- Broadcast emails use the channel's template; Markdown decides structure, not brand colors.
- A community post's quoted history and signature are removed before storage, so the thread shows the new content.
- Long messages should use headings and short paragraphs; email clients render long unbroken text poorly and screen-reader users navigate by structure.
- Tables are supported but collapse awkwardly on narrow screens. Prefer lists for short comparisons.

## Related Content

- [Markdown Reference](../../survey/reference/content/markdown/index.md): Supported syntax and examples.
- [How to Provide Rich Formatting](../../survey/how-to/providing-rich-formatting.md): Formatting a message step by step.
- [Creating and Sending Broadcasts](../how-to/creating-and-sending-broadcasts.md): Composing a broadcast.
- [Multilingual Support](./multilingual-support.md): How translated versions are produced.
