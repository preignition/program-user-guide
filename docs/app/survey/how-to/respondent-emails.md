---
description: "How to configure form-channel respondent emails: an Account Email field, email purposes, localized templates, test sends, reminder schedules and consent retention."
---

# How to Configure Form-Channel Respondent Emails

The **form channel** sends emails to addresses a respondent enters in the survey itself, without an invitation run. It covers submission confirmations, opt-in reminders for people who started but did not finish, and hand-sent results or follow-up invitations.

This guide configures the form channel. To email a team audience instead, see [How to Send Invitations to a Team Audience](./send-invitations.md).

## Step 1: Add an email field to the form

1. Open the survey in **Build → Compose**.
2. Add an **Account Email** item where the respondent should enter or confirm their address.
3. If you only need an email as a questionnaire answer, a regular **Email** field is enough. Use **Account Email** when you want verification, pre-fill from a signed-in account, or consent opt-in checkboxes for reminders, results and follow-ups.

For respondents without an account, **Account Email** records the answer and shows the consent notices; it does not change account state.

## Step 2: Choose the email purposes

Purposes are survey-level, whether you set them in **Share → Email** or on the field.

1. Open **Share → Email**.
2. In the **Purposes** picker, tick the purposes the survey needs:

| Purpose | What it sends | Consent |
| --- | --- | --- |
| **Submission confirmation** | A receipt when the respondent submits. | Automatic (transactional). |
| **Reminders** | Automated emails while the form is unsubmitted. | Explicit opt-in checkbox. |
| **Results and reports** | A hand-sent message sharing findings. | Explicit opt-in checkbox. |
| **Follow-up survey** | A hand-sent invitation to a future study. | Explicit opt-in checkbox. |
| **Dataset** | Treats the address as questionnaire data and includes it in exports. | None, but the address becomes exportable. |

Ticking a purpose creates its message item and tab. Leaving **Dataset** unticked keeps the address operational: it is stored separately from answers and omitted from dataset exports.

## Step 3: Write the messages

1. Select the purpose's tab: **Submission confirmation**, **Reminder**, **Results and reports**, or **Follow-up survey**.
2. Write the **Subject** (up to 200 characters for invitations) and the **Body** in Markdown. Use **Preview** to check the rendered email.
3. Insert merge fields where needed: `{{link}}`, `{{name}}`, `{{survey_title}}`, `{{organiser}}`.
4. Repeat for each language in **Build → Compose → Localize Mode** (or **Build → Localize**); the translation import/export includes email items.

`{{link}}` is optional for confirmations, reminders and follow-ups; it resolves to the survey's public link. An unknown placeholder is left as written in these messages, but blocks an invitation send.

## Step 4: Send a test email

1. On any message tab, select **Send test email**.
2. The preview goes to the signed-in editor's address, with `{{name}}` as `Test` and a test link.
3. Check the rendered subject, body, signature and footer.

The button is disabled until the message has both a subject and a body. A test creates no invitation run, consent, respondent or Sent-history row.

## Step 5: Set the reminder cadence

Form reminders for respondents who opt in are configured in **Advanced Mode → Share → Email → Advanced**:

- **Reminders**: `None`, `One reminder` or `Two reminders` (default: one).
- **First reminder (days)**: delay after opt-in (default 3).
- **Second reminder (days)**: delay after the first reminder (default 3).
- **Deadline**: an absolute date after which no reminders are sent.

An hourly job sends due reminders only to unsubmitted sessions with an active, unexpired consent in the survey's active batch. Switching the active batch stops reminders for the previous wave, and a respondent who submits is never reminded.

The **Invitation reminder** tab has a separate schedule for audience invitations; it does not control form-channel reminders.

## Step 6: Set consent retention

1. Open **Advanced Mode → Share → Email → Advanced**.
2. Set **Consent retention** between 1 and 365 days (default 180).

When a consent expires, the stored email address and consent are deleted; survey answers, response IDs and compliance archives remain. Every email includes a one-click unsubscribe link.

## Step 7: Send follow-ups

Follow-ups are not automated:

1. Open **Results and reports** or **Follow-up survey**.
2. Select **Send results and reports** or **Send follow-up survey**.
3. Review the recipient count and confirm.

The send reaches form respondents who opted in and, when invitations are active, the invited audience — omitting unsubscribed, bounced and suppressed recipients. An incomplete primary message is never offered as an opt-in.

## Step 8: Check delivery

Open the **Sent** tab to see each batch send, newest first: target count, delivered, opened and bounce/suppression status. The log lists batches, not individual recipient addresses.

## Troubleshooting

- **No confirmation arrives**: check that **Submission confirmation** is ticked and the form contains an email field with an address; confirmations are not sent for test submissions.
- **Reminders never send**: the respondent must tick the opt-in checkbox; the consent must be unexpired; the session must belong to the active batch; and the deadline must not have passed.
- **The address is missing from exports**: that is intended unless **Dataset** is ticked. See [Data Privacy and Security](../explanation/data-privacy-and-security.md).
- **A test email is not sent**: add both a subject and a body.

## Related Content

- [Email Reference](../reference/share/email/index.md): Every tab, purpose, merge field and validation rule.
- [Advanced Email Settings](../reference/share/email/advanced.md): Reminder schedule, consent retention and sender identity.
- [Account Email Reference](../reference/build/compose/account-email.md): The field's verification and consent behavior.
- [How to Send Invitations to a Team Audience](./send-invitations.md): The invitation channel.
- [How to Analyze Survey Responses](./survey-analytics.md): Where to read the results you share.
