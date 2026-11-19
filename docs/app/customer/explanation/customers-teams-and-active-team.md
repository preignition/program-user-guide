---
description: The difference between a customer account and a team, how the active team scopes your work, and how account, team and survey access layers combine.
---

# Customers, Teams and the Active Team

The Customer Portal has two levels: the **customer** (your organization) and its **teams** (its workspaces). Most confusion about missing surveys or missing permissions comes from mixing the two. This article explains the hierarchy and what the active team controls.

## The customer

The customer is the organization that owns the subscription, the billing relationship, the storage location and the global settings. It holds:

- the plan, quota and payment records;
- the organization name, languages and currencies;
- the theme and the apps the organization uses;
- **account holders**, the people who administer the organization.

Account holders do not automatically get access to surveys. Their role is organizational: billing, teams, branding, languages and apps.

## Teams

A team is a workspace. It owns the practical work:

- surveys and forms;
- audiences (recipient lists);
- Listserv channels;
- API keys;
- the team's presentation, email identity and members.

An organization can have several teams, for example one per department, research program or client. A team is created inside the customer and consumes team quota.

Teams keep work separate. A survey belongs to one team; moving it is an explicit transfer that resets access.

## The active team

Many screens — the Survey app, the Listserv app, new audiences and API-key pages — operate in the context of one **active team**.

- The active team is chosen on the team card (**Set as Active Team**) or from the top-bar switcher.
- New surveys, forms and lists are created under the active team.
- Existing work stays with the team that owns it; switching the active team does not move or delete anything.
- The top-bar **shortcuts** pin teams you switch between often.

If you cannot see a survey you expect, first check which team is active. The survey may be in another team you belong to, or in a team you are not a member of.

## The three access layers

Access is decided at three levels, and all three must allow an action:

| Layer | Question it answers | Managed in |
| --- | --- | --- |
| **Account holder** | Can this person administer the organization? | Customer Portal → Account Holders |
| **Team member** | Is this person eligible to work in this team? | Customer Portal → Team → Team Members |
| **Survey access** | Can this person open this particular survey? | Survey → Share → Access |

Being an account holder does not make you a team member; being a team member does not grant access to every survey in the team. A new colleague usually needs all three: account holder if they administer the organization, team member to be eligible, and survey access to work on a specific survey.

This separation is deliberate. It lets an organization have many teams with different staff without granting everyone everything, and it lets a survey owner decide who sees a sensitive instrument.

## Roles at each layer

- **Account holder**: Owner, Admin, Editor, Guest. These control administration, not survey content.
- **Team member**: Owner, Admin, Editor, Guest. These control workspace work.
- **Survey**: Owner, Admin, Editor, Guest, Translator. These control one survey.

The same word can mean different scope at different layers. A team Editor is not automatically a survey Editor, and a survey Owner is not automatically a team Owner.

## Common situations

- **"I can see the team but no surveys."** Team membership makes you eligible; the survey owner must still grant access.
- **"I can see the organization settings but not the surveys."** You are an account holder, not a team member, or you are a team member with no survey access.
- **"A survey disappeared."** Check the active team, then the survey list of each team you belong to. It may have been transferred.
- **"My colleague cannot open the Customer Portal."** They are a team member only; account-holder membership is separate.

## Related Content

- [How to Manage Teams](../how-to/manage-teams.md): Creating, switching and deleting teams.
- [How to Manage Account Holders and Team Members](../how-to/manage-account-holders-and-team-members.md): Inviting people at each layer.
- [Understanding Access and Permissions](./understanding-access-and-permissions.md): The permission model in detail.
- [Plans, Subscriptions and Quota Lifecycle](./plans-subscriptions-and-quota.md): How many teams you can create.
