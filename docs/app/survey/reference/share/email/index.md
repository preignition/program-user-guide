---
description: Reference documentation for the survey's email configuration.
---

# Email

The **Email** page configures the emails a survey sends to its respondents: the submission confirmation, and — once a field offers them — reminders. It is a configuration page: no recipient list is imported or managed here, and no invitations are sent from it.

<figure>
  <img src="./assets/email-auto.png" alt="The survey email configuration page">
  <figcaption>The Email page, in advanced mode.</figcaption>
</figure>

## Email Purposes

Email fields carry **purposes** that decide how the collected address is used. The page sets the survey-wide default; every email field can choose its own purposes in its advanced settings in the builder.

- **Dataset** — the answer is part of the survey data: it appears in the `raw`, `humanized` and `anonymized` exports.
- **Submission confirmation** — the address serves the confirmation email.

A purpose other than **Dataset** keeps the address out of every export; it is used for the survey's emails only.

## Submission Confirmation

The confirmation email is sent when a respondent submits the survey. Each survey language has its own **subject** and **body**, and the respondent receives it in the language they answered in.

## Preview

The preview shows the notices respondents will read and the confirmation email of the primary language. Placeholders (such as the survey link and the respondent's address) and, on reminders, the unsubscribe line are added when an email is sent.

## Advanced Settings

The notice and opt-in wording, and the sender identity, live in the page's advanced sections — see [Advanced Email Settings](./advanced.md).
