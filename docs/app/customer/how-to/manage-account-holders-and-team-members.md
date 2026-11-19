---
description: How to invite account holders and team members, assign roles, and follow up on pending invitations in the Customer Portal.
---

# How to Manage Account Holders and Team Members

The Customer Portal has two membership layers, and a person usually needs both:

- **Account Holders** manage the organization: subscription and billing, teams, themes, languages and apps. They do **not** get access to surveys.
- **Team Members** are eligible to work on a team's surveys. Being a team member does not by itself grant access to a specific survey; the survey's owner grants that in the Survey app.

This guide covers inviting people at both layers, assigning roles, and handling invitations that have not been accepted.

## Before you start

- You need the **Owner** or **Admin** role for account holders; only an **Owner** can add or remove another account holder.
- For a team, open the team in **Customer Portal → Teams → Open**.
- Decide the role each person needs before you send the invitation.

## Add an account holder

1. Open **Customer Portal → Account Holders**.
2. Select **Add Members**.
3. Enter the person's email address and choose a role.
4. Confirm. The invitation is listed under **Pending Invite** until it is accepted.

### Account holder roles

| Role | Can do |
| --- | --- |
| **Owner** | Everything, including adding/removing account holders, transferring ownership and viewing private profile settings. |
| **Admin** | Manage teams, apps, subscription and themes; cannot add/remove account holders or view private settings. |
| **Editor** | Administrative access to teams and apps, without managing other editors or private settings. |
| **Guest** | Read-only access to Customer Portal information. |

A customer has one **Owner**. Use **Modify Ownership** to transfer it. Own the account consciously: the Owner is the person support will contact about billing and deletion.

## Change or revoke an account holder role

In the **Member List**, change a person's role in place, or revoke their membership. Removal takes away account-wide administration; it does not remove them from teams or surveys. To do that, edit the team membership as well.

## Add a team member

1. Open the team and select **Team Members**.
2. Select **Add Members**.
3. Enter the email address and choose the team role.
4. Confirm.

### Team member roles

| Role | Typical use |
| --- | --- |
| **Owner** | Accountable owner of the team; can transfer team ownership. |
| **Admin** | Manages the team, its members and settings. |
| **Editor** | Creates and edits surveys, forms and content. |
| **Guest** | Views the team's work without editing it. |

Team roles control the workspace, not individual surveys. A team editor who cannot open a survey needs access granted on that survey by its owner.

## Follow up on pending invitations

Both membership lists show a **Pending Invite** view. An invitation stays pending until the person accepts it.

- Check the spelling of the email address before resending; an invitation sent to the wrong address cannot be accepted by the right person.
- Ask the invitee to check spam or quarantine folders.
- If the invitation expired or was sent to a mistyped address, revoke it and invite the person again.
- A person who is already an account holder still needs a team membership to work in a team.

## Remove a person

- **From a team**: open **Team Members**, remove the membership. Their surveys remain owned by the team; survey-level access may need review.
- **From the account**: open **Account Holders**, revoke the membership. Remove team memberships separately if the person should lose team access too.

Prefer removing access over deleting records: surveys, responses and audit entries are retained according to the organization's plan and privacy policy.

## Troubleshooting

- **"I added them but they cannot see any surveys"**: they are a team member, but no survey has granted them access. Open the survey in the Survey app and add them under **Share → Access**.
- **"They cannot open the Customer Portal"**: they are a team member only. Add them as an account holder if they need billing, teams or themes.
- **"Add Members is missing"**: your role is too low. Account holders need Owner; teams need Owner or Admin.
- **"The invitation never arrives"**: verify the address, check spam, then revoke and re-invite.

## Related Content

- [Account Holders Reference](../reference/customer/members.md): Account roles and interface.
- [Team Members Reference](../reference/team/members.md): Team roles and pending invitations.
- [Understanding Access and Permissions](../explanation/understanding-access-and-permissions.md): How the account, team and survey layers combine.
- [How to Manage Teams](./manage-teams.md): Creating the team before adding members.
- [Survey Access Reference](../../survey/reference/share/access/index.md): Granting a person access to one survey.
