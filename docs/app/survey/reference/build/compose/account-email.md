---
description: Reference documentation for the Account Email question type.
---

# Account Email

The **Account Email** question type is a specialized input field designed to synchronize respondent input directly with their underlying Firebase platform account. Unlike a standard email field that simply records a value, the Account Email field actively manages the respondent's identity.

## Behavior and Synchronization

The Account Email field implements a unique synchronization and verification flow:

- **Automatic Update**: When the respondent enters an email and moves focus away from the field (the `blur` event), the system automatically attempts to update their platform account email.
- **Verification Email**: Upon a successful update, the system automatically triggers a native Firebase verification email to the new address.
- **Dynamic Pre-filling**: If the respondent already has an email associated with their account, the field is automatically pre-filled with that address when the survey page loads.
- **Read-only State**: To ensure data integrity, the field automatically becomes **read-only** in the following conditions:
    - The current email address is already verified.
    - The respondent is logged in with a permanent (non-anonymous) account.

## Verification Tracking

The field provides real-time visual feedback regarding the verification status of the email:

- **Verified Indicator**: A green checkmark icon (`check_circle`) is displayed within the field if the current value matches the verified email of the respondent's account.
- **Automatic Tracking**: The component actively polls for the verification status. As soon as the respondent clicks the link in the verification email, the indicator will appear without requiring a page refresh.

## When to Use

Use the Account Email field when:

- You want to capture a verified primary identity from anonymous respondents.
- You need to ensure that the email provided is correctly linked to the respondent's platform session for longitudinal tracking.
- You want to provide immediate feedback to the user that their identity has been successfully verified.

::: warning
**Account Security**: This field is intended for identity capture and verification. It does not currently handle account linking or complex authentication "upgrades" (e.g., merging an anonymous account with an existing password-protected account).
:::
