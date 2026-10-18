---
description: Reference documentation for the Account Email question type.
---

# Account Email

The **Account Email** question type shows the respondent's platform account email and lets a signed-in respondent change it **verification-first**: the platform emails a verification link to the new address, and the account email changes only once the respondent confirms it.

## Behavior

- **Dynamic Pre-filling**: If the respondent already has an email associated with their account, the field is pre-filled with that address when the survey loads. The pre-filled value is recorded as the answer; it does not write the account.
- **Explicit Action**: A signed-in respondent changes the account email only through the field's **Send verification link** action — nothing is written on blur, on pre-fill or on navigation. The action sends the link to the typed address, or resends it when the address is unchanged and still unverified.
- **Verification-Before-Update**: The account email changes only after the respondent follows the link. Until then the account keeps its current address.
- **Read-only State**: The field becomes read-only once the shown email is verified.
- **Anonymous Sessions**: An anonymous respondent records the value as an answer only — their session cannot change an account email here, so no action is offered.

Feedback is shown under the field (and as a notification on failure), in the survey's interface language; the raw provider error is logged for support rather than shown.

## Verification Tracking

- **Verified Indicator**: A green checkmark icon (`check_circle`) is displayed within the field if the current value matches the verified email of the respondent's account. Its label is translated.
- **Automatic Tracking**: The component actively polls for the verification status. As soon as the respondent follows the link in the verification email, the indicator appears without requiring a page refresh, and the platform confirms it with a notification.

## Purposes and Data Exports

The Account Email field is always modelled with the `account-verification` purpose. Its value — typed by the respondent or pre-filled from their account — is **not** part of the survey data (`raw`, `humanized`, `anonymized`) unless you explicitly add the **Dataset** purpose to the field in the builder's advanced settings (see [Email Purposes](./question.md#email-purposes)). This keeps the identity value out of exports by default while still letting a survey collect the account email as data when it genuinely needs to.

## When to Use

Use the Account Email field when:

- The respondent is signed in and you want the address on their account to be verified.
- You need the email linked to the respondent's platform session for longitudinal tracking.

::: warning
**Account Security**: This field verifies an address on the respondent's existing account. It does not link credentials or convert an anonymous session into a signed-in account — anonymous sessions record the value as an answer only.
:::
