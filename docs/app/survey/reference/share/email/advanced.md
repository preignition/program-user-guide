---
description: Technical reference for consent notice versioning, respondent reminder cadence, consent retention rules, and sender identity on the Advanced tab.
---

# Advanced Email Settings

When **Advanced Mode** is enabled in the top toolbar, the **Email** page displays an **Advanced** tab. This tab configures survey-level email settings that span across messages: **Consent notices**, **Respondent reminders**, **Consent retention**, and **Sender identity**.

## Consent Notices and Opt-in Wording

Consent notices provide the legal explanation and opt-in labels displayed alongside [Account Email](../../build/compose/account-email.md) and **Email** fields in the questionnaire.

| Purpose | Notice Description | Opt-in Label Required | Notes |
| :--- | :--- | :--- | :--- |
| **Submission confirmation** | Transactional notice explaining that a confirmation receipt will be sent. | No | Automatic notification; no checkbox required. |
| **Reminders** | Explains that reminders may be sent while the form is incomplete. | Yes | Displayed only when the respondent has no stored account email. |
| **Results and reports** | Explains that the respondent will be sent the survey findings or report. | Yes | Displayed only when the primary email message is authored. |
| **Follow-up survey** | Explains that the respondent may be invited to a future study. | Yes | Displayed only when the primary email message is authored. |

- **Default Wording:** Leave notice or label fields empty to use the system default copy.
- **Notice Versioning:** Every text revision increments the notice **Version** integer. When a respondent ticks an opt-in checkbox, the active notice version is stored inside their `RespondentEmail` consent record for regulatory auditability.

## Respondent Reminders

The **Respondent reminders** section sets the automated reminder cadence for respondents who start the questionnaire, tick the reminder opt-in checkbox, and leave without submitting:

| Setting | Allowed Values | Default | Behavior |
| :--- | :--- | :--- | :--- |
| **Reminders** | `None`, `One reminder`, `Two reminders` | `One reminder` | Maximum number of reminder emails a respondent may receive. |
| **First reminder (days)** | Integer (≥ 1) | `3` days | Delay in days after the respondent's initial opt-in before sending reminder 1. |
| **Second reminder (days)** | Integer (≥ 1) | `3` days | Delay in days after the first reminder before sending reminder 2. |
| **Deadline** | Date picker | None | Absolute calendar cut-off date after which no reminders are dispatched. |

::: info Hourly Dispatch & Batch Scoping
An hourly background job processes respondent reminders. The job only contacts unsubmitted sessions with an active, unexpired consent belonging to the survey's active batch. Switching the active batch immediately stops reminders for the previous wave.
:::

*(Note: Reminders for invited team audiences are managed separately on the [Invitation reminder tab](./index.md#invitation-reminder-email-and-schedule) and in [Distribute](../distribute/index.md#configuration-controls).)*

## Consent Retention

The **Consent retention** section controls the lifecycle of collected operational contact data:

| Parameter | Allowed Range | Default | Operational Impact |
| :--- | :--- | :--- | :--- |
| **Retention (days)** | `1` to `365` days | `180` days | Time period after which operational email consents and stored email addresses are automatically purged. |

- **Audit Preservation:** Deleting an expired consent record deletes the stored email address. Submitted questionnaire answers, response IDs, and compliance archives remain intact.
- **Unsubscribe Handling:** Every email contains a one-click unsubscribe URL (`/u/{token}`). Following the link immediately terminates the consent session without requiring an account login.

## Sender Identity

Emails are dispatched through the platform's trusted delivery infrastructure. Custom domain DNS and external SMTP relays are not supported.

| Field | Default Value | Survey Override | Notes |
| :--- | :--- | :--- | :--- |
| **Display name** | Survey Title | Custom sender name | Displayed in recipient email inboxes as the "From" name. |
| **Reply-to** | Team Administrator Email | Custom valid email address | Target address for recipient email replies. |

::: tip Invitation Reply-To
For audience invitation runs, the **Reply-To** selector in the **Distribute** composer allows selecting any registered team member. Leaving that selector blank falls back to the team owner's address. The survey-level reply-to configured here applies to confirmations, reminders, and follow-ups.
:::
