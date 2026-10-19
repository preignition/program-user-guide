---
description: Reference documentation for the survey's email configuration.
---

# Email

The **Email** page configures the emails a survey sends to its respondents: the submission confirmation, the reminders, and the follow-up emails you send by hand once the data has been analysed — their content, the schedule reminders follow, and how long a consent is kept. It is a configuration page: no recipient list is imported or managed here, and no invitations are sent from it.

<figure>
  <img src="./assets/email-auto.png" alt="The survey email configuration page">
  <figcaption>The Email page, in advanced mode.</figcaption>
</figure>

## Email Purposes

Email fields carry **purposes** that decide how the collected address is used. The page sets the survey-wide default; every email field can choose its own purposes in its advanced settings in the builder.

- **Dataset** — the answer is part of the survey data: it appears in the `raw`, `humanized` and `anonymized` exports.
- **Submission confirmation** — the address serves the confirmation email.
- **Reminders** — the address serves the reminder emails; the respondent consents on the field.
- **Results and reports** — the address serves the follow-up email about the survey's results, reports or updates; the respondent consents on the field.
- **Follow-up survey** — the address serves the invitation to a later survey; the respondent consents on the field.

A purpose other than **Dataset** keeps the address out of every export; it is used for the survey's emails only.

The addresses these emails use stay out of the survey's datasets and exports unless a field also carries **Dataset** — see [Data Privacy and Security](../../../explanation/data-privacy-and-security.md).

## Submission Confirmation

The confirmation email is sent when a respondent submits the survey. Each survey language has its own **subject** and **body**, and the respondent receives it in the language they answered in. The platform adds a line explaining why the email was sent; it is a transactional one-off, so it carries no unsubscribe link. Test submissions never send email.

## Reminders

A field that carries the **Reminders** purpose shows the respondent a notice and an **opt-in checkbox**. Nothing is sent unless the respondent ticks it: the platform records their consent — the address, the session it came from and the wording version they agreed to — and may email them while the form is unsubmitted. Ticking the box is the only write; typing, prefilling or leaving the field records nothing, and a test session records nothing.

Consent is per respondent: one record per session, which a later opt-in in the same session updates, and which the field's checkbox reflects when the respondent comes back. Editors never see the addresses — the contact records are not part of the survey data and are never exported.

Each survey language has its own reminder **subject** and **body**. A reminder is sent sober: the platform adds a line explaining why the respondent received it, and the public unsubscribe link.

## Follow-up Emails

After the survey's data has been analysed you may want to write to the respondents again: to share the results or a report, or to invite them to a later survey. Both are follow-ups, and both need a purpose of their own — **Results and reports** and **Follow-up survey**. A field that carries one asks the respondent to opt in, exactly as a reminder field does; a field may carry both, and then shows a checkbox for each.

Writing the email here is what makes the opt-in possible: a purpose with no subject and body is not offered to respondents, so a consent is never collected for an email the survey cannot send. Write the **subject** and **body** per survey language — the email is sent in the survey's language.

Each follow-up has its own **Send** action. It reads the respondents who opted in for that purpose, tells you how many will receive the email before you confirm, and sends once you do. A follow-up is not scheduled and not repeated: pressing Send again emails the same respondents again, so use it for a new message rather than a correction. The platform adds a line explaining why the respondent received it, and the public unsubscribe link; a send that the mail service did not accept is left for the next press of Send, and the dialog reports what went out.

The email is free text you write — the page does not publish a report or a survey for you. If the message is to carry a link (to a report page, or to the follow-up survey), write it in the body.

## Reminder Schedule

An hourly job sends the reminders. Each of the survey's reminder fields can name the same **Reminders** purpose, but a respondent consents once per survey, so they receive at most the configured number of reminders for that consent.

- **Reminders** — how many a consent may receive: none, one or two.
- **Delay** — how many days after the last contact a reminder goes out: the first after the respondent's opt-in, the second after the first reminder.
- **Deadline** — no reminder is sent after this day (leave it empty for no deadline).

The job only ever emails a session that has not submitted, whose consent is still active and unexpired, and that belongs to the survey's current batch. Changing the batch therefore stops the reminders of the previous one.

## Consent Retention

A consent is kept for a bounded period — **180 days** by default, adjustable between 1 and 365. When it passes, the platform deletes the record, and with it the address. The respondent's responses and every dataset are untouched: purging the collected data ends the reminders and the follow-ups too.

Every reminder carries an unsubscribe link. It opens a public page in the respondent app — no sign-in — that validates the link's token on the server, withdraws the consent, and confirms in the survey's language. An invalid link, or one that was already used, shows a safe message and changes nothing.

## Preview

The preview shows the notices respondents will read and the confirmation email of the primary language. The platform adds the reason line to a confirmation, and the unsubscribe line to a reminder, when an email is sent.

## Advanced Settings

The notice and opt-in wording, and the sender identity, live in the page's advanced sections — see [Advanced Email Settings](./advanced.md).
