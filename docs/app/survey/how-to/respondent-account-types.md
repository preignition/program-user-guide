---
description: How to choose respondent account types, configure authentication methods, and restrict access to an allowed email domain.
---

# How to Configure Respondent Account Types and Authentication

The **Account Type** setting decides who can open a survey: anyone with the link, only people with an account, or only people with a verified account. In Advanced Mode you also choose how those accounts sign in and, for passwordless sign-in, which email domain is allowed.

## Step 1: Open the Account Type page

1. Open the survey and select **Share**.
2. Select **Account Type**.
3. Choose an **Account Type**.

## Step 2: Choose an account type

| Account type | Who can respond | What respondents see |
| --- | --- | --- |
| **Anonymous** (default) | Anyone with the link. | No sign-in. The platform creates an anonymous session. |
| **Personal** | People who create or sign in to a personal account. | A sign-in or sign-up screen before the survey. Responses are linked to a persistent account. |
| **Verified** | People with a personal account whose email is verified. | Sign-in or sign-up, then a verification email that must be opened. |

Choose **Anonymous** for open, low-risk public surveys. Choose **Personal** when you need to recognize returning respondents or attach responses to an account. Choose **Verified** when the address itself must be proven, for example to prevent duplicate submissions or to send sensitive follow-ups.

Account type is separate from invitations: an anonymous survey can still be restricted to invited recipients with **Invitation only** on [Share → Distribute](./send-invitations.md).

## Step 3: Choose an authentication method (Advanced Mode)

For **Personal** and **Verified** accounts, turn on **Advanced Mode** to reveal **Authentication Methods**:

### Email/password or federated identity (default)

Respondents set an email/password account, or sign in with a supported federated provider (such as Google). Use it when respondents are comfortable managing a password or already have a provider account.

### Email link (passwordless)

Respondents enter their email address and receive a link that signs them in. Clicking it also verifies the address. Use it when you want verification without passwords, and when the survey population is likely to abandon a password form.

For **Anonymous** accounts, the Authentication Methods section explains that the session is created automatically; there is nothing to configure.

## Step 4: Restrict to an allowed domain

When **Email Link** is selected, the **Allowed Domain** field appears:

1. Enter a domain in the form `@organization.org` (the pattern is `@name.extension`).
2. Leave it blank to allow every domain.
3. Save.

A respondent who enters an address outside the allowed domain is rejected. The restriction is exact: `@university.edu` does not admit `@student.university.edu`.

## Step 5: Test the flow

1. Publish the survey and open the production link in a private window.
2. Confirm the sign-in screen appears (or does not, for anonymous).
3. For verified accounts, complete the verification email.
4. For email-link sign-in, try an allowed and a disallowed address.
5. For anonymous surveys, confirm the survey opens directly and that confirmations behave as intended.

## Troubleshooting

- **Respondents are asked to sign in unexpectedly**: check the account type; a previously saved setting may still be `personal` or `verified`.
- **The verification email never arrives**: check spam, then resend from the verification screen. The address typo cannot be corrected after sign-up; the respondent must start again.
- **An allowed-domain respondent is rejected**: the domain must match exactly, including subdomain. Use the domain that appears after the `@` in their address.
- **A respondent cannot receive a confirmation**: anonymous sessions cannot receive account confirmation emails; add an email field and a confirmation purpose if a receipt is required. See [How to Configure Form-Channel Respondent Emails](./respondent-emails.md).
- **Changing the account type broke existing links**: links are unchanged, but the sign-in requirement now applies. Tell respondents before switching a live survey.

## Related Content

- [Respondent Account Types Reference](../reference/share/account-type/index.md): Account models and interface.
- [Advanced Account Settings](../reference/share/account-type/advanced.md): Authentication methods and allowed-domain rules.
- [Authentication and Identity](../explanation/authentication.md): How accounts and sessions work.
- [How to Send Invitations to a Team Audience](./send-invitations.md): Restricting participation to invited recipients.
- [How to Configure Form-Channel Respondent Emails](./respondent-emails.md): Confirmations and consent opt-ins.
