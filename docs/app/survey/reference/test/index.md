---
description: "Reference for the Test workbench: the sandboxed run, toolbar controls, page and language switching, inline editing, and live session data."
---

# Test Survey Reference

The **Test** workspace runs the current draft form as a respondent would see it, without publishing and without writing survey responses. It is the place to try a layout, a logic branch, a translation or an accessibility mode before building a release.

Open it from **Test** in the Survey Builder drawer. Tests use the current draft; changes made in Compose appear on the next reload.

## Sandboxed session

A test run:

- uses the draft form, not the last published build;
- writes run data to a scratch test store, not to survey responses;
- does not trigger invitation, confirmation or reminder emails;
- does not count toward analytics or quotas;
- can be restarted at any time without leaving residue in the survey.

Conditions that depend on a live respondent session — an actual account, a real invitation token, a production URL — are simulated rather than exercised. Use a production link in a private window when you need to verify those.

## Toolbar

The vertical toolbar sits at the right of the screen. Its controls appear only when the form supports them.

### Language

When the survey has more than one language, the language menu switches the whole test run. Every label, option and validation message changes to that language, so this is the fastest way to spot an untranslated string.

### Accessibility modes

Modes activated in **Form Behavior** appear as toggles:

| Control | What it does |
| --- | --- |
| **Read Aloud** | Turns the per-question speech button on or off. |
| **Sign Language** | Turns the sign-language video on; when several sign languages exist, the menu selects one. |
| **Easy Read** | Simulates Easy Read presentation with the simplified text and images. |
| **Voice Recording** | Turns text fields into voice recorders, as a respondent would see them. |

These toggles change the test session only. They do not enable a mode for respondents; do that in **Form Behavior**.

### View all

Shows every page in one scroll, instead of one page at a time. Useful for reviewing long content and for checking that a page break falls where you intended.

### Jump to question

In one-question-at-a-time mode, opens a menu of visible pages so you can jump directly to a question. The menu lists only pages the current logic exposes; a hidden page is not offered.

### Zoom

Scales the rendered form between roughly 40% and 100%. Use it to check a form at a smaller effective width without resizing the browser, or to see more of a long page.

### Edit

With edit mode on, each item shows a pencil button. Selecting it opens the inline edit dialog for that item, so you can correct a label or an option while testing without going back to Compose.

Edits are real draft edits: they are saved to the form, not to the test session.

### Live data

Shows the session context the form is using — the code view of the run's state. Use it to understand why a logic branch was taken; it is a diagnostic, not a respondent-facing feature.

### Start over

Clears the test run's answers and returns to the first page. Use it between scenarios.

### Accessibility menu

Opens the same accessibility menu a respondent can use, for checking the menu itself and the settings it exposes.

## Inline edit dialog

The pencil opens a modal for the selected item. It edits the item's content in place: labels, options, supporting text and, where applicable, media. Saving updates the draft immediately and the test view re-renders.

Use inline edit for corrections you notice while testing. For structural changes — moving a question, adding a page — return to Compose, where the tree makes the structure visible.

## What the Test workspace does not cover

- **Delivery**: emails, invitations and reminders are not sent.
- **Real accounts**: sign-in requirements are simulated, not exercised.
- **Analytics**: no response or behavioral data is produced.
- **Production links**: test links are not the links you share with respondents.

For those, publish to production and use the production link in a private window.

## Related Content

- [How to Test a Form](../../how-to/testing-a-form.md): A step-by-step test session.
- [Form Behavior Reference](../build/behavior.md): Enabling the modes the toolbar toggles.
- [Review Reference](../build/review.md): Automated quality checks before testing.
- [How to Publish and Distribute a Survey](../../how-to/publishing-a-survey.md): Moving from test to production.
