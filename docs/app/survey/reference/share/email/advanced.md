---
description: The notice wording, consent versioning, respondent reminder schedule, consent retention and sender identity on the Email page's Advanced tab.
---

# Advanced Email Settings

When **Advanced** mode is switched on in the top toolbar, the **Email** page displays an **Advanced** tab for the survey-level email settings that are not tied to a single message: **Consent notices**, **Respondent reminders**, **Consent retention**, and **Sender**.

## Consent Notices and Opt-in Wording

The notice is the wording a respondent reads next to an **Email** or **Account Email** field that carries a notification purpose.

- The **Reminder** notice and its **Opt-in label** accompany the checkbox a respondent ticks to receive reminders while the form is unsubmitted.
- The **Results and reports** and **Follow-up survey** notices and their **Opt-in labels** accompany the checkbox each purpose shows.
- The **Submission confirmation** notice is transactional: it tells the respondent a confirmation will be sent, and needs no opt-in checkbox.
- An **Account Email** field offers the opt-in only when the respondent has no account email. Once an account email exists, the field shows that address without the consent checkboxes.

Leave a field empty to use the platform's default wording. Every change to the wording increases the notice **Version**, which is recorded with a consent when one is captured — so it is always clear which wording a respondent agreed to.

## Respondent Reminders

Configures the cadence of opt-in reminders sent to respondents who started the form, ticked the reminder opt-in checkbox, and have not yet submitted:

- **Reminders** — `None`, `One reminder`, or `Two reminders`.
- **First reminder (days)** — days after the respondent's opt-in.
- **Second reminder (days)** — days after the first reminder.
- **Deadline** — date after which no reminder is sent (leave empty for no deadline).

*(The schedule for reminders sent to an invited team audience is configured separately on the **Invitation reminder** tab and in **Share → Distribute**.)*

## Consent Retention

Sets **Retention (days)** (between `1` and `365`, `180` by default): how long a reminder or follow-up consent record — and the email address it holds — is kept before the platform deletes it. Deleting an expired consent never alters the respondent's submitted survey answers.

## Sender Identity

Emails are sent from the platform's address — custom domains and SMTP are out of scope. Leave **Display name** and **Reply-to** empty to use the survey title as the sender's display name and the team admin's address for replies, or override either per survey.

For invitations, the **Reply-to** selector in the **Invitations** composer on the Distribute page chooses any member of the survey team, and that choice is frozen with the run. Leaving it blank uses the team owner's email address. The survey-level reply-to on this tab applies to the other survey emails.
