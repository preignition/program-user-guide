---
description: Understand the difference between Account Holders and Team Members, and how account, team and survey permissions relate.
---

# Understanding Access and Permissions

Most confusion about "why can't my colleague do X?" comes from treating access as a single on/off switch. It is not. Accessible Surveys has **three independent layers**, and a user can hold a different role at each one.

::: warning The single most common misunderstanding
Adding someone as an **Account Holder does not let them work on surveys.** Account Holders manage the account — subscription, billing, themes, languages. To build or edit surveys, a user must also be added as a **Team Member**, and then granted access to each survey individually.

If a new colleague "has access" but cannot see or open any survey, they were almost certainly added as an Account Holder only.
:::

## The three layers

| Layer | What it controls | Where to manage it |
| --- | --- | --- |
| **Account** (the Customer) | Subscription, invoices, themes, languages, apps, storage location | Customer Portal, under **Account Holders** |
| **Team** | Membership of a workspace, access to its resources | Customer Portal, under **Team Members** |
| **Survey** | Who can view, edit, translate or administer one specific survey | Survey app, **Share → Access** |

A role granted at one layer never leaks into another. Being an Account Owner does not make you a survey owner; being a survey owner does not give you access to billing.

## Account Holders

An **Account Holder** has access to the Customer Portal and the account-wide settings within it.

They are the right choice for people with responsibility for the account itself:

- Staff with overall control of the account, who have authority to approve the subscription plan, branding and theme settings.
- Colleagues in finance, so they can reach invoices and receipts without needing to be involved in survey work.
- Administrators who configure languages, apps and data storage locations.

Account Holders **do not** receive any survey access by default. They do not see the survey workspace, and they cannot open, edit or run surveys.

Within Account Holders there are four roles:

- **Owner**: Full administrative access to the portal, including adding or removing other Account Holders and viewing private settings. The person who creates the account is automatically the Owner.
- **Admin**: Can administer everything except add or remove other Account Holders, and cannot view private settings.
- **Editor**: Can administer teams and apps, with restricted portal administrative rights.
- **Guest**: Read-only access to portal information.

::: info Only one Owner per account
Ownership can be transferred from the Account Holders screen, but the account always has exactly one Owner.
:::

## Team Members

A **Team Member** is someone who works on the organisation's surveys. This is the role you grant to anyone who needs to build, edit, translate or review forms.

Being a Team Member is a **prerequisite** for receiving survey access, not the grant itself. Adding someone to a team makes them *eligible* to be given access to that team's surveys — it does not hand them access to all of them.

::: warning Being a Team Member does not unlock every survey
Survey access is granted **one survey at a time.** A new Team Member starts with no survey access until a survey Owner adds them to a specific survey.
:::

The person who creates the account is automatically the Owner of both the account and the first team. Within a team, roles are:

- **Owner**: Full control of the team, including membership and ownership transfer.
- **Admin**: Can manage team members and resources.
- **Editor**: Can create and edit resources within the team.
- **Guest**: Can view the team without making changes.

## Survey-level access

The third layer lives in the Survey app, under **Share → Access**.

- The person who creates a survey becomes its **Owner**.
- That Owner invites other users and decides what rights to give each of them, per survey.

This is deliberate: a translator might have edit rights on one survey and no access at all on another, even though both surveys belong to the same team.

::: tip
Only a survey **Owner** can manage a survey's access rights.
:::

For the step-by-step process, see [How to set access rights for forms](../../survey/how-to/access-rights.md) in the Survey app guide.

## A user can hold roles at more than one layer

The layers are additive, and many people legitimately hold several roles at once:

- The account creator is automatically **Owner** of the account *and* **Owner** of the first team.
- A colleague can be an **Account Holder** for billing *and* a **Team Member** working on surveys.
- A colleague can be an **Account Holder** only, with no survey involvement at all.

When a user reports unexpected access, check each layer separately rather than assuming a single setting explains it.

## Which role should I grant?

| The person is… | Grant |
| --- | --- |
| Responsible for approving the subscription or plan changes | Account Holder |
| In finance and needs invoices and receipts | Account Holder |
| Responsible for branding, themes or account languages | Account Holder |
| Going to build, edit or translate surveys | Team Member, then grant access per survey |
| Only reviewing one specific survey | Team Member, plus access to that survey alone |
| Both approving billing and building surveys | Account Holder **and** Team Member |

::: tip Adding a colleague who will do survey work
Add them twice: once as an **Account Holder** if they also need account responsibilities, and once as a **Team Member**. Then open each survey they should work on and add them under **Share → Access**.

Adding only the Account Holder entry is the usual cause of "I added them but they can't open the survey."
:::

## Related pages

- [Account Holders (Members) reference](../reference/customer/members.md)
- [Team Members reference](../reference/team/members.md)
- [How to set access rights for forms](../../survey/how-to/access-rights.md)
