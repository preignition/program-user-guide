---
description: Reference documentation for the survey's email configuration.
---

# Email

The **Email** page configures the emails a survey sends to its respondents: the **invitation** and **invitation reminder** emails sent to a team audience, the **submission confirmation**, the opt-in **reminders** for unsubmitted forms, and the **follow-up** emails (**results and reports** and **follow-up survey**) you send by hand once the data has been analysed — their content, the schedules reminders follow, and how long a consent is kept. It is a configuration page: no recipient list is imported or managed here, and no invitation run is launched from it (only a single preview test email to the signed-in editor, or a hand-triggered follow-up send).

The page has two independent channels. The **form channel** is an **Email** or **Account Email** field in the builder; the **invitation channel** is the editor's opt-in on [Share → Distribute](../distribute/index.md#invitations). The form channel's purposes are available without invitations. Turning on invitations creates the **Invitation** and **Invitation reminder** messages; ticking a purpose with a message under **Purposes** creates that purpose's message item.

<figure>
  <img src="./assets/email-auto.png" alt="The survey Email page showing the Purposes checkboxes at the top and the message tabs below">
  <figcaption>The Email page showing the Purposes picker and the Submission confirmation tab.</figcaption>
</figure>

At the top of the page, the **Purposes** picker selects how the survey uses email addresses and which purpose messages exist. Below the divider, the page is organised in tabs:

- One tab per active email item, in display order:
  - **Invitation** and **Invitation reminder** when invitations are turned on in [Share → Distribute](../distribute/index.md#invitations).
  - **Submission confirmation**, **Reminder**, **Results and reports**, and **Follow-up survey** for each purpose the survey selects (a purpose that is not ticked has no email item and no tab).
- **Advanced** (when **Advanced** mode is switched on in the top toolbar): consent notices, the respondent reminder schedule, consent retention, and sender identity.
- **Sent**: the delivery history across all survey email sends.

<figure>
  <img src="./assets/email-advanced-auto.png" alt="The survey Email page in Advanced mode showing the Advanced tab in the tab bar">
  <figcaption>In Advanced mode, the tab bar includes the Advanced settings tab alongside the active message tabs and Sent history.</figcaption>
</figure>

## Email Items in Compose and Localize

Each email message is stored as a survey item (`email-invitation`, `email-invitationReminder`, `email-confirmation`, `email-reminder`, `email-results`, `email-followUpSurvey`) with its subject and body in the item's `locale/{language}` documents.

- On **Share → Email**, each message tab edits the survey's **primary language**.
- In **Build → Compose**, active email items appear in the structure tree below **Terms and Conditions**, grouped under an expandable **Email** row. Selecting an email item in **Settings Mode** lets you edit its internal **Name** and **Description** alongside its primary-language **Subject** and **Body**.
- In **Localize Mode** (in **Build → Compose** or **Build → Localize**), expanding **Email** lets you translate each message's **Subject** and **Body** into every target language side by side with the primary language. The server **Translate** action and JSON translation **Import/Export** include all active email items automatically.

<figure>
  <img src="./assets/email-compose-auto.png" alt="The Compose view with the Email group expanded in the tree and Submission confirmation selected">
  <figcaption>Active email items appear under the Email group row in Build → Compose.</figcaption>
</figure>

<figure>
  <img src="./assets/email-localize-auto.png" alt="The Compose view in Localize Mode showing the French translation of the Submission confirmation email item">
  <figcaption>Translating an email item's subject and body in Localize Mode.</figcaption>
</figure>

## Invitation Opt-In

Invitations are opt-in per survey. The **Invitations** section of [Share → Distribute](../distribute/index.md#invitations) shows a **Send email invitations** switch once the survey's team has at least one audience. The switch writes the survey's `email.invitationEnabled` setting and creates or removes the **Invitation** and **Invitation reminder** items:

- **Off:** the **Invitation** and **Invitation reminder** items are removed (soft-deleted) and no audience email is sent. The form channel still works: when the form collects an address, the **Purposes** picker and the purpose tabs it selects remain available, and confirmations, reminders and follow-ups reach form recipients.
- **On, without an Email or Account Email field:** the **Invitation**, **Invitation reminder**, **Advanced** (in Advanced mode) and **Sent** tabs are available, plus any purpose tabs ticked under **Purposes** (such as **Submission confirmation**, which confirms invited submissions at the invitation address).
- **On, with a field:** the **Invitation**, **Invitation reminder**, the selected purpose tabs, **Advanced** (in Advanced mode) and **Sent** are available. Results and follow-ups reach both the form opt-ins and the invited audience.

Turning the switch off stops invitation traffic and audience sends. Soft-deleted email items keep their previous locale content if re-enabled, the form channel is unaffected, and the **Sent** history stays readable.

## Invitation and Invitation Reminder Emails

The **Invitation** and **Invitation reminder** tabs configure the messages sent when you distribute the survey to a [team audience](../../../../customer/reference/team/audiences.md) from [Share → Distribute](../distribute/index.md#invitations).

<figure>
  <img src="../../../how-to/assets/send-invitations/email-invitation-full-auto.png" alt="The Invitation tab on the Email page">
  <figcaption>The Invitation tab showing the merge fields summary, subject and body editors, and Send test email action.</figcaption>
</figure>

### Invitation Email

What each invited recipient receives with their unique survey link (`/v2/{surveyId}/i/{token}`):

- **Language:** Each language has its own subject and body, stored in the `email-invitation` item's locale document and translated in **Build → Compose** (**Localize Mode**) or via the **Translate** action. A complete, valid recipient-language invitation is used as-is; a missing, half-written or invalid one falls back to the complete primary invitation, and the send dialog reports how many recipients fall back.
- **Subject:** Plain-text subject line (up to 200 characters).
- **Body:** Markdown-formatted message body with a live **Preview** tab.
- **Links:** A link is delivered exactly as written. The platform disables the mail provider's click tracking, so the recipient receives the invitation URL (`/v2/{surveyId}/i/{token}`) — in the HTML and the plain-text part — instead of a tracking redirect.

### Invitation Merge Fields and Validation

Both the subject and body support the [merge fields](#merge-fields). Validation runs continuously on both the **Invitation** and **Invitation reminder** tabs:

- Missing `{{link}}` displays an error (`The message needs {{link}}.`) and blocks sending an invitation run from **Distribute**.
- Any unrecognised `{{placeholder}}` displays an error (`Unknown placeholder(s): ...`) and blocks sending.

### Invitation Reminder Email and Schedule

The **Invitation reminder** tab defines the message sent to invited recipients who have not yet submitted, along with the default reminder cadence for new invitation runs:

<figure>
  <img src="./assets/email-invitation-reminder-full-auto.png" alt="The Invitation reminder tab on the Email page showing the message editor and the Reminder schedule controls">
  <figcaption>The Invitation reminder tab configures both the optional reminder template and the default invitation reminder schedule.</figcaption>
</figure>

- **Reminder message:** If you provide a custom **Subject** and **Body**, scheduled and manual invitation reminders use that template. If you leave the **Invitation reminder** message empty, the platform automatically reuses the invitation email with a `Reminder N of M:` prefix on the subject line and a `This is reminder N of M from <organiser>.` reason line.
- **Language fallback:** The reminder is picked from the complete, valid recipient-language reminder, then the complete, valid recipient-language invitation, then the complete primary reminder, then the complete primary invitation — never mixing languages.
- **Reminder schedule:** Below the editor, **Reminder schedule** sets how many automated reminders follow the invitation (`No reminders`, `1 reminder`, `2 reminders`, or `3 reminders`) and the delay in days after the previous send (`Reminder 1 after (days)`, `Reminder 2 after (days)`, etc.). Each gap runs from the previous send; opening or starting the survey does not reset the clock, and a recipient who submits is never reminded. The [Distribute composer](../distribute/index.md#configuration-controls) starts from this schedule and writes adjustments back to the survey, while each launched run freezes the schedule it was created with.

### Mandatory Platform Footer and Sender

Every invitation and reminder email automatically appends a mandatory platform footer that cannot be removed:

- **Reason line:** Identifies which team invited the recipient (`<organiser> invited you to take part in this survey.`).
- **Privacy policy link:** Links to the platform privacy notice explaining how invitation records are handled.
- **One-click unsubscribe:** A unique link that records an organization-wide suppression for that address and immediately stops all future invitations and reminders from the customer.

Emails are sent from the platform's domain using the team name as the display name and a team admin's address as the default `Reply-To`. The display name and the survey-level reply-to can be overridden on the **Advanced** tab. For an invitation run, the **Reply-to** selector in the [Distribute composer](../distribute/index.md#configuration-controls) chooses a member of the survey team; leaving it blank uses the team owner's email address.

## Merge Fields

Every message's subject and body support the same placeholders. The invitation is the only message that requires the link; the confirmation, the form reminders and the follow-ups treat it as optional.

| Merge Field | Required | Resolved Value |
| :--- | :--- | :--- |
| `{{link}}` | Invitations only | The recipient's unique invitation URL (`/v2/{surveyId}/i/{token}`) in an invitation or invitation reminder; the survey's public link (`/v2/{surveyId}`) in the confirmation, the form reminders and the follow-ups. |
| `{{name}}` | No | The recipient's name when the platform knows it — the audience record for an invitation, the account name for a submission confirmation; `there` otherwise. |
| `{{survey_title}}` | No | The survey's title. |
| `{{organiser}}` | No | The team's display name; the survey's title when the team has none. |

An invitation or invitation reminder with a missing `{{link}}` or an unknown placeholder is not sent. The confirmation, the form reminders and the follow-ups send without `{{link}}`; an unknown placeholder is left as written.

## Send Test

Every message tab — **Invitation**, **Invitation reminder**, **Submission confirmation**, **Reminder**, **Results and reports**, and **Follow-up survey** — has a **Send test email** button (`sendEmailTest`).

<figure>
  <img src="../../../how-to/assets/send-invitations/email-test-sent-auto.png" alt="Send test email button and Test email sent notification">
  <figcaption>Sending a test email preview to the signed-in editor's address.</figcaption>
</figure>

- The recipient address is resolved on the server from the caller's authenticated account, never from the page.
- **Send test email** is disabled until the message has both a subject and a body (`Add a subject and body to send a test.`). An invitation or invitation reminder with a missing `{{link}}` or an unknown placeholder is not sent.
- The preview uses the survey language's content and test merge values: `{{name}}` is `Test` and `{{link}}` is `/v2test/{surveyId}`.
- A test creates no invitation run, consent record, respondent actor or Sent-history row, and does not alter any audience or progress counters.
- When the mail service accepts the preview, the page displays **Test email sent.**

## Email Purposes

The **Purposes** section at the top of the page sets the survey's **purposes** (`email.defaultPurposes`), which decide how collected addresses are used and which purpose email items and tabs exist. They belong to the survey, not to an individual field — the picker in an **Email** or **Account Email** field's settings in **Build → Compose** edits the same setting and creates or removes the same email items.

The purposes serve two delivery channels: **Invitations** (a team audience, managed on Distribute) and **form email fields** (the address a respondent gives). Results and follow-ups use both when invitations are on; confirmations add the invitation address for invited submissions, and form reminders remain form-only.

- **Dataset** — the answer is part of the survey data: it appears in the `raw`, `humanized` and `anonymized` exports.
- **Submission confirmation** — creates the `email-confirmation` item and **Submission confirmation** tab; the address serves the confirmation email.
- **Reminders** — creates the `email-reminder` item and **Reminder** tab; the address serves the reminder emails, and the respondent consents on the field.
- **Results and reports** — creates the `email-results` item and **Results and reports** tab; the address serves the follow-up email about the survey's results, reports or updates, and the respondent consents on the field.
- **Follow-up survey** — creates the `email-followUpSurvey` item and **Follow-up survey** tab; the address serves the invitation to a later survey, and the respondent consents on the field.

A purpose other than **Dataset** keeps the address out of every export; it is used for the survey's emails only.

The addresses these emails use stay out of the survey's datasets and exports unless the survey also selects **Dataset** — see [Data Privacy and Security](../../../explanation/data-privacy-and-security.md).

## Submission Confirmation

The confirmation email is sent when a respondent submits and the survey has somewhere to send it: the form selects the **Submission confirmation** purpose and collects an address, or invitations are on and the submission came through an invitation (with a complete `email-confirmation` item). Each survey language has its own **subject** and **body**, translated in **Build → Compose** (**Localize Mode**) or via the **Translate** action; the respondent receives it in the language they answered in, falling back to the complete primary confirmation. The platform adds a line explaining why the email was sent; it is a transactional one-off, so it carries no unsubscribe link. Test submissions never send email. Both fields support the [merge fields](#merge-fields); unlike an invitation, the confirmation does not require `{{link}}`.

With invitations on, a submission made through an invitation link is confirmed at the invitation address as well: one confirmation goes to the form's confirmation address and one to the invited address, deduplicated when they are the same. This works even when the form has no confirmation-purpose field, because the invitation established the address.

## Reminders

A field that carries the **Reminders** purpose shows the respondent a notice and an **opt-in checkbox**. Nothing is sent unless the respondent ticks it: the platform records their consent — the address, the session it came from and the wording version they agreed to — and may email them while the form is unsubmitted. Ticking the box is the only write; typing, prefilling or leaving the field records nothing, and a test session records nothing.

Consent is per respondent: one record per session, which a later opt-in in the same session updates, and which the field's checkbox reflects when the respondent comes back. Editors never see the addresses — the contact records are not part of the survey data and are never exported.

Each survey language has its own reminder **subject** and **body** on the `email-reminder` item. A reminder is sent in the language recorded on the respondent's session — the language they answered in — falling back to the complete primary reminder when that language has none, is half-written or is invalid. The platform adds a line explaining why the respondent received it, and the public unsubscribe link. The subject and body support the [merge fields](#merge-fields); `{{link}}` is optional.

## Follow-up Emails

After the survey's data has been analysed you may want to write to the respondents again: to share the results or a report, or to invite them to a later survey. Both are follow-ups, and both need a purpose of their own — **Results and reports** and **Follow-up survey**. A field that carries one asks the respondent to opt in, exactly as a reminder field does; a field may carry both, and then shows a checkbox for each.

<figure>
  <img src="./assets/email-results-full-auto.png" alt="The Results and reports tab on the Email page showing the message editor, Send test email button, and Send results and reports action">
  <figcaption>The Results and reports tab includes both Send test email and the one-off Send results and reports action.</figcaption>
</figure>

Writing the email on the purpose's tab is what makes the opt-in possible: a purpose with no complete subject and body in the primary language is not offered to respondents, so a consent is never collected for an email the survey cannot send. Write the **subject** and **body** per survey language — the email is sent in the language the respondent answered in, falling back to the complete primary message. The subject and body support the [merge fields](#merge-fields); `{{link}}` is optional.

Each follow-up tab renders its own one-off send action beside **Send test email** — **Send results and reports** on **Results and reports**, and **Send follow-up survey** on **Follow-up survey**. It reads the respondents who opted in for that purpose and, when invitations are on, the survey's invited audience; tells you how many will receive the email before you confirm; and sends once you do. The send button stays disabled until the complete primary subject and body exist. A follow-up is not scheduled and not repeated: pressing Send again emails the same recipients again, so use it for a new message rather than a correction. The platform adds a line explaining why the recipient received it, and the public unsubscribe link; a send that the mail service did not accept is left for the next press of Send, and the dialog reports what went out.

An audience recipient did not opt in through a form field, so their reason line names the invitation instead of the consent, and their unsubscribe link is the invitation's organisation-wide one. An audience member who unsubscribed, bounced, complained or is on the customer-wide suppression list is not emailed.

The email is free text you write — the page does not publish a report or a survey for you. `{{link}}` resolves to the survey's public link; a link to a report page or a later survey is written in the body.

## Reminder Schedule

An hourly job sends the respondent opt-in reminders. Each of the survey's reminder fields can name the same **Reminders** purpose, but a respondent consents once per survey, so they receive at most the configured number of reminders for that consent. Writing a reminder message automatically sets the schedule to one reminder if none was set yet; in **Advanced** mode, the **Respondent reminders** section on the **Advanced** tab lets you adjust:

- **Reminders** — how many a consent may receive: `None`, `One reminder`, or `Two reminders`.
- **First / Second reminder (days)** — how many days after the last contact a reminder goes out: the first after the respondent's opt-in, the second after the first reminder.
- **Deadline** — no reminder is sent after this day (leave it empty for no deadline).

The job only ever emails a session that has not submitted, whose consent is still active and unexpired, and that belongs to the survey's current batch. Changing the batch therefore stops the reminders of the previous one.

*(For the schedule of reminders sent to invited team audiences, see [Invitation Reminder Email and Schedule](#invitation-reminder-email-and-schedule) above.)*

## Consent Retention

A consent is kept for a bounded period — **180 days** by default, adjustable between 1 and 365 under **Consent retention** on the **Advanced** tab. When it passes, the platform deletes the record, and with it the address. The respondent's responses and every dataset are untouched: purging the collected data ends the reminders and the follow-ups too.

Every reminder carries an unsubscribe link. It opens a public page in the respondent app — no sign-in — that validates the link's token on the server, withdraws the consent, and confirms in the survey's language. An invalid link, or one that was already used, shows a safe message and changes nothing.

## Sent History

The **Sent** tab lists the survey's send actions, newest first: the message kind (invitation, invitation reminder, reminder, results or follow-up), when it ran, how many recipients it targeted, and how many the mail service accepted, delivered, opened or refused. One row is one action, not one recipient: a 10,000-person invitation run is a single row. An invitation row's delivered and opened counts update as the mail service reports them, so the row shows engagement without leaving the tab; started and submitted counts stay on the run's **Progress** tab, linked from the row. Submission confirmations are transactional and are not listed. The history is a trace, not an address book: it never carries addresses, and a failed history write never changes whether a mail was sent. The table is a live read, so a finished action appears as it is recorded.

## Advanced Settings

In **Advanced** mode, the **Advanced** tab configures the consent notices and opt-in wording, the respondent reminder schedule, consent retention, and the sender identity — see [Advanced Email Settings](./advanced.md).
