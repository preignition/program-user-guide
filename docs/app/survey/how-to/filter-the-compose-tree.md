---
description: How to filter the Compose tree by review findings, generated content, visibility settings and media presence.
---

# How to Filter the Compose Tree

A large form is hard to audit by scrolling. The Compose tree's column headers filter rows down to the items that share a property — open review findings, unvalidated AI content, conditional visibility, or the presence or absence of an image, voice or sign-language video.

Filters keep each match's ancestors visible, so a matching item still appears in context, and the tree expands to show it.

## Where the filter controls are

1. Open the survey in **Build → Compose**.
2. Make sure the tree shows the columns you need. Some columns appear only in **Advanced Mode**, and the media columns appear only when the corresponding accessibility mode or illustration setting is active.
3. Select a **column header icon** to turn its filter on. Select it again to change or clear it.

A pressed header means its filter is on. The header's accessible label announces the current state — for example, "showing items with an Easy Read image — click to clear the filter".

## Filter by review findings

The review column marks items with open findings.

- Select the header to keep only items that have an open finding.
- The marker's color is the highest severity on the item; a badge counts multiple findings.
- Select a marker to open Review filtered to that item.
- Dismissed and applied findings do not appear.

Use this before publishing: it turns a long form into the short list of items that need attention.

## Filter by generated content

The prompt column marks items produced by the active AI prompt that still need validation.

- Select the header (or the prompt menu's **Filter generated content**) to show only unvalidated generated items.
- Validate items individually, or use **Accept all** / **Reject all** from the prompt menu.
- Turn the filter off to see the whole tree.

## Filter by visibility settings

The visibility column marks items hidden by a logic expression or by an accessibility mode.

- Select the header to show only items with a visibility setting.
- The button is disabled when no item has one.
- Use it to audit that every conditional item has the logic you intended, and to find items that are hidden in every mode by mistake.

## Filter by media presence

The Easy Read, Read Aloud and Sign Language columns each have a **tri-state** filter:

| Click | Shows |
| --- | --- |
| First | Items **with** that media. |
| Second | Items **without** that media. |
| Third | Clears the filter. |

For sign language, each activated sign language has its own column and filter, and the filter applies to that language's videos.

The Read Aloud column follows the **active language**, so switch the language in the **Localize** menu before auditing voices for another language. A voice counts as present only when the item uses a recorded, generated or uploaded voice; the browser's default speech does not.

Media filters load their data before showing results. The header reports "loading…" until the read completes.

## Combining filters and modes

- Filters are independent: turn on the review filter and the visibility filter only if you want the intersection.
- Switching view mode (for example to Easy Read or Sign Language mode) changes the columns, and some filters are only available in that mode.
- Filters change what the tree shows, never the form.

## A practical audit sequence

1. **Review** findings — fix what is open.
2. **Generated** — validate or reject all AI content.
3. **Visibility** — check every conditional item.
4. **Easy Read with/without** — confirm illustrations where the mode is active.
5. **Read Aloud with/without** — repeat for each language.
6. **Sign Language with/without** — repeat for each activated sign language.

## Related Content

- [How to Review a Survey](./review-a-survey.md): Acting on the findings the filter exposes.
- [How to Generate a Survey with AI](./generate-a-survey.md): Producing and validating generated content.
- [How to Use Read Aloud](./read-aloud.md): Filling the gaps the Read Aloud filter finds.
- [How to Choose a Form Layout](./form-layout-and-accessibility.md): Enabling the media columns.
- [How does the Compose View Work](../explanation/how-does-the-compose-view-work.md): The tree's structure and modes.
