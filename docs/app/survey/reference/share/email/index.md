---
description: Reference documentation for the survey's email configuration.
---

# Email

The **Email** page configures the emails a survey sends to its respondents: the submission confirmation and the reminders. It is a configuration page: no recipient list is imported or managed here, and no invitations are sent from it.

<figure>
  <img src="./assets/email-auto.png" alt="The survey email configuration page">
  <figcaption>The Email page, in advanced mode.</figcaption>
</figure>

## Email Purposes

Email fields carry **purposes** that decide how the collected address is used. The page sets the survey-wide default; every email field can choose its own purposes in its advanced settings in the builder.

- **Dataset** — the answer is part of the survey data: it appears in the `raw`, `humanized` and `anonymized` exports.
- **Submission confirmation** — the address serves the confirmation email.
- **Reminders** — the address serves the reminder emails; the respondent consents on the field.

A purpose other than **Dataset** keeps the address out of every export; it is used for the survey's emails only.

## Submission Confirmation

The confirmation email is sent when a respondent submits the survey. Each survey language has its own **subject** and **body**, and the respondent receives it in the language they answered in. The platform adds a line explaining why the email was sent; it is a transactional one-off, so it carries no unsubscribe link. Test submissions never send email.

## Reminders

A field that carries the **Reminders** purpose shows the respondent a notice and an **opt-in checkbox**. Nothing is sent unless the respondent ticks it: the platform records their consent — the address, the session it came from and the wording version they agreed to — and may email them while the form is unsubmitted. Ticking the box is the only write; typing, prefilling or leaving the field records nothing, and a test session records nothing.

Consent is per respondent: one record per session, which a later opt-in in the same session updates, and which the field's checkbox reflects when the respondent comes back. The record is held for a bounded period (180 days), after which the address is deleted. Editors never see the addresses — the contact records are not part of the survey data and are never exported.

::: info
The job that sends the reminders — and the unsubscribe link every reminder carries — ships with the reminder feature.
:::

## Preview

The preview shows the notices respondents will read and the confirmation email of the primary language. The platform adds the reason line to a confirmation, and the unsubscribe line to a reminder, when an email is sent.

## Advanced Settings

The notice and opt-in wording, and the sender identity, live in the page's advanced sections — see [Advanced Email Settings](./advanced.md).
