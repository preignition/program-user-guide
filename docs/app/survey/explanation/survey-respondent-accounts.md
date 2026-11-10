---
description: An explanation of how respondent accounts are managed and their role in the survey process.
---

# Respondent Accounts

When designing a survey, one of the most critical decisions is determining who can access it and how their identity is managed. Accessible Surveys provides a flexible account management system that supports everything from completely open, anonymous data collection to highly controlled, authenticated participation.

This document explains the conceptual foundations of respondent accounts and why different approaches are necessary.

## The Spectrum of Authentication

Survey research requires different levels of identity verification depending on the context:

1. **Anonymous (Open Link):** The survey is accessible to anyone with the URL. The system does not require login, and no personal identifying information (PII) is automatically captured. A randomized, temporary session ID is used behind the scenes to track the submission process, ensuring the respondent remains anonymous. This is crucial for collecting sensitive feedback where anonymity encourages honesty.
2. **Verified (Authenticated):** The survey requires respondents to log in before they can participate. This ensures that every response is tied to a verified identity (e.g., an email address).

## Why Require Respondent Accounts?

Requiring a verified account is essential for several advanced survey methodologies:

### 1. Preventing Duplicate Submissions

In high-stakes surveys (like voting, official feedback, or compliance tracking), you need to ensure that each individual only responds once. A verified account provides a concrete identity that the system can use to block multiple submissions.

### 2. Longitudinal Tracking

If you are conducting a study that spans multiple time periods (using [Survey Batches](./the-role-of-batches.md)), you need a way to link a respondent's answers in Q1 to their answers in Q2. Respondent accounts provide the persistent identifier required to build these longitudinal data profiles.

### 3. Invitation-Only Surveys

Sometimes a survey is not meant for the public. By using respondent accounts, you can upload a list of authorized email addresses and send targeted invitations. The system will restrict access so that only invited accounts can view and complete the survey.

## The Architecture of Identity

In Accessible Surveys, a "Respondent Account" is treated as a distinct entity from the "Survey Response."

When a user logs in and submits a survey, their identity data (such as their name and email) is stored securely and separately from their actual answers. The connection between the identity and the response is managed by the system. This architectural separation ensures that [Data Privacy and Security](./data-privacy-and-security.md) standards are maintained, allowing researchers to export anonymized datasets even when the survey was completed by authenticated users.

### Capturing Identity and Email Consents during a Survey

For surveys where respondents are signed in and should confirm the address on their account — or where respondents should opt in to survey emails — the **Account Email** (`a11y-account-email`) question type is used:

- **Signed-in respondents:** A signed-in respondent changes their account email only through the field's explicit **Send verification link** action; the platform emails a confirmation link to the new address, and the account email changes only once the respondent follows it.
- **Anonymous respondents & email opt-ins:** Anonymous sessions are not promoted to a verified account from this field. Instead, when the survey enables **Reminders**, **Results and reports**, or **Follow-up survey** under [Email Purposes](../reference/build/compose/question.md#email-purposes), the field displays the consent notices and opt-in checkboxes so the respondent can agree to receive reminders for an unsubmitted form, receive the survey's report, or be invited to a follow-up survey. By default, the address stays out of the exported datasets unless **Dataset** is selected.

When you only need a standard format-validated email input as a questionnaire answer (without account verification or consent opt-in checkboxes), use the plain **Email** (`a11y-text-field` with `type="email"`) question type instead. See [Account Email](../reference/build/compose/account-email.md#email-or-account-email) for the comparison.
