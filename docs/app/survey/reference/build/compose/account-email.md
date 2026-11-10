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

## Reminders, Reports, Follow-up Surveys, and Data Exports

The Account Email field works alongside the survey's [Email Purposes](./question.md#email-purposes) (configured in the question's settings or on [Share → Email](../../share/email/index.md#email-purposes)):

- **Reminders** (`reminder`): Renders a reminder notice and opt-in checkbox below the field (when the respondent has no account email, or during a test preview). When ticked, the platform stores a consent record for the respondent's session and sends scheduled reminders if the form remains unsubmitted.
- **Results and reports** (`results`): Renders a notice and opt-in checkbox allowing the respondent to request the survey's results, reports, or updates. Once the findings are ready, the editor sends the message from the **Results and reports** tab on **Share → Email**.
- **Follow-up survey** (`follow-up-survey`): Renders a notice and opt-in checkbox allowing the respondent to be invited to a later survey, sent from the **Follow-up survey** tab on **Share → Email**.
- **Submission confirmation** (`confirmation`): Sends a transactional confirmation email to the address when the respondent submits the survey (no opt-in checkbox is needed).
- **Dataset** (`dataset`): The Account Email field always carries the `account-verification` purpose, so its value — typed by the respondent or pre-filled from their account — is **not** part of the survey data (`raw`, `humanized`, `anonymized`) unless the survey also selects **Dataset**. This keeps the respondent's address out of exports by default while still letting a survey collect it as data when needed.

## Privacy

The field shows the address held by the respondent's **account**, which lives in the platform's authentication service, not in the survey. A signed-in respondent changes it only verification-first (see above); an anonymous session records the value as an answer and cannot change an account here.

When a respondent ticks an opt-in checkbox for **Reminders**, **Results and reports**, or **Follow-up survey**, the field writes a survey-scoped consent record (`RespondentEmail`) containing the address, the agreed purposes, the notice version, and an expiry (180 days by default, configurable on [Share → Email → Advanced](../../share/email/advanced.md#consent-retention)). Editors never see or export those contact addresses, and respondents can withdraw a purpose by unticking the box or unsubscribe via the link in any email.

What a survey stores in its response data is the answer — the value as typed or pre-filled — and it is kept out of the `raw`, `humanized` and `anonymized` datasets unless the survey selects the **Dataset** email purpose. The account itself keeps the address as part of its identity whether or not the survey exports it. Removing the answer from a dataset after collection does not change the account, and changing the account does not rewrite answers already collected.

## When to Use

Use the **Account Email** field when:

- You want respondents to opt in to **reminders** while their form is unsubmitted, receive **results and reports**, or be invited to a **follow-up survey**.
- You want to send a **submission confirmation** while keeping the respondent's address out of dataset exports by default.
- The respondent is signed in and you want the address on their account to be verified or updated.
- You need the email linked to the respondent's platform session for longitudinal tracking.

Use the plain **Email** field instead when:

- You simply need a format-validated email text input for a questionnaire answer (for example, an organization's contact address, a referral email, or a general form answer) with no account verification and no consent opt-in checkboxes.

::: warning
**Account Security**: This field verifies an address on the respondent's existing account. It does not link credentials or convert an anonymous session into a signed-in account — anonymous sessions record the value and any selected email consents only.
:::
