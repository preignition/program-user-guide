---
description: Reference documentation for the Account Email question type.
---

# Account Email

The **Account Email** question type (`a11y-account-email`) is the specialized field for a respondent's own email address. It serves two roles:

1. **Account identity & verification** — for a signed-in respondent, it shows their platform account email and lets them change or verify it **verification-first** (the platform emails a verification link to the new address, and the account email changes only once the respondent confirms it).
2. **Survey communications & consent opt-ins** — when the survey enables **Reminders**, **Results and reports**, or **Follow-up survey** under [Email Purposes](./question.md#email-purposes), the field displays the consent notices and **opt-in checkboxes** (for respondents without an existing account email, and in test-mode previews) so respondents can opt in to receive reminders, reports, or follow-up invitations.

## Email or Account Email?

Both fields accept an email address, but they do different jobs. Use **Email** (`a11y-text-field` with `type="email"`) when you simply need a format-validated email text input for a questionnaire answer. Use **Account Email** (`a11y-account-email`) when the field represents the respondent's own email — whether to verify/update a signed-in account address or to let respondents opt in to **reminders**, **results and reports**, or a **follow-up survey**.

| | Email (`a11y-text-field`) | Account Email (`a11y-account-email`) |
| --- | --- | --- |
| **What it is** | A standard text field with `type="email"` format validation. | A specialized respondent email component extending the text field. |
| **Pre-fill** | None. | Pre-fills from the signed-in respondent's account email, when one exists. |
| **Account verification** | Never touches the respondent's account. | **Send verification link** action, verified indicator (`check_circle`), and live status polling for signed-in respondents. |
| **Reminders, reports & follow-up opt-in** | Does not render consent opt-in checkboxes. | Renders the survey's consent notices and opt-in checkboxes for **Reminders**, **Results and reports**, and **Follow-up survey** when no account email is set (or in test preview). |
| **Submission confirmation** | Sends confirmation if the survey selects **Submission confirmation**. | Sends confirmation if the survey selects **Submission confirmation**. |
| **Dataset export** | Included by default unless non-dataset purposes are selected without **Dataset**. | Excluded by default (`account-verification`); included only when the survey selects **Dataset**. |
| **Use it when** | You need a plain email-validated input as part of the form (e.g., an organization, referral, or third-party contact email). | You want respondents to opt in to reminders, reports, or a follow-up survey, or you need to verify/update a signed-in respondent's account email. |

## Behavior

- **Dynamic Pre-filling**: If the respondent already has an email associated with their account, the field is pre-filled with that address when the survey loads. The pre-filled value is recorded as the answer; it does not write the account.
- **Explicit Action**: A signed-in respondent changes the account email only through the field's **Send verification link** action — nothing is written on blur, on pre-fill or on navigation. The action sends the link to the typed address, or resends it when the address is unchanged and still unverified.
- **Verification-Before-Update**: The account email changes only after the respondent follows the link. Until then the account keeps its current address.
- **Read-only State**: The field becomes read-only once the shown email is verified.
- **Anonymous Sessions & Consent Opt-ins**: An anonymous respondent records the value as an answer only — their session cannot change an account email here, so no verification action is offered. Instead, when the survey has consent purposes (**Reminders**, **Results and reports**, or **Follow-up survey**), the field displays the consent notices and opt-in checkboxes below the input so the respondent can opt in.

Feedback is shown under the field (and as a notification on failure), in the survey's interface language; the raw provider error is logged for support rather than shown.

## Verification Tracking

- **Verified Indicator**: A green checkmark icon (`check_circle`) is displayed within the field if the current value matches the verified email of the respondent's account. Its label is translated.
- **Automatic Tracking**: The component actively polls for the verification status. As soon as the respondent follows the link in the verification email, the indicator appears without requiring a page refresh, and the platform confirms it with a notification.

## Email Purposes and Export Behavior

The Account Email field operates with the survey's [Email Purposes](../../share/email/index.md#email-purposes):

| Purpose | Interaction on Account Email Field | Export Behavior |
| :--- | :--- | :--- |
| **Reminders** (`reminder`) | Displays reminder consent notice and opt-in checkbox when respondent has no account email. | Omitted from exports |
| **Results and reports** (`results`) | Displays results notice and opt-in checkbox when the primary message is authored. | Omitted from exports |
| **Follow-up survey** (`follow-up-survey`) | Displays follow-up notice and opt-in checkbox when the primary message is authored. | Omitted from exports |
| **Submission confirmation** (`confirmation`) | Automatically sends confirmation receipt upon survey completion; no opt-in checkbox needed. | Omitted from exports |
| **Dataset** (`dataset`) | Collects email value as standard questionnaire data. | Included in `raw`, `humanized`, `anonymized` |

::: info Operational Isolation by Default
The Account Email field always carries internal account verification. Collected addresses remain operational contact records (`RespondentEmail`) and stay excluded from dataset exports unless the survey explicitly enables the **Dataset** email purpose (see [Data Privacy and Security](../../../explanation/data-privacy-and-security.md)).
:::

## Privacy

The field displays the email associated with the respondent's platform account, which resides in the authentication service rather than the survey database. A signed-in user updates their account email verification-first; anonymous respondents submit an answer value without modifying account state.

Opting into **Reminders**, **Results and reports**, or **Follow-up survey** generates an operational consent record (`RespondentEmail`) with the active notice version and an expiration timestamp (180 days by default, configurable under [Consent Retention](../../share/email/advanced.md#consent-retention)). Respondents can revoke consent using the one-click unsubscribe link included in all emails.

::: warning Account Security
This field verifies an address on the respondent's existing account. It does not link credentials or convert an anonymous session into a signed-in account — anonymous sessions record the value and any selected email consents only.
:::
