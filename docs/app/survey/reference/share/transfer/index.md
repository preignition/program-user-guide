---
description: Reference for transferring a survey to another team, including who can transfer, what happens to access, and how the hand-off works.
---

# Transfer

The **Transfer** page moves a survey from its current team to another team. It is available in the **Share** drawer to the survey's owner and to platform Super Admins.

## Who can transfer

- The survey's **owner** (`metaData.access.user.owner`).
- A **platform Super Admin**.

Everyone else, including team admins and editors, does not see the Transfer page. A transfer is a hand-off of ownership, not an administrative copy.

## Available destinations

The page lists teams after **Load Teams**:

- A customer owner sees the non-deleted teams of their own customer, excluding the survey's current team.
- A Super Admin sees all non-deleted teams, across customers.

Deleted teams are not offered.

## What changes

A transfer **resets access**:

- The destination team's owner becomes the new owner of the survey.
- All other collaborators are cleared. Team members of the destination team do not automatically get survey access.
- The survey moves to the destination team's scope; its audiences, channels and API keys belong to teams, not surveys, so the receiving team should check what it needs before the hand-off.

Plan the access list for the receiving team before transferring: after the transfer, the new owner must grant access again in **Share → Access**.

## How to transfer

1. Open the survey and select **Share → Transfer**.
2. Select **Load Teams** and wait for the list.
3. Select the destination team.
4. Review the confirmation: source team, destination team, and the access reset.
5. Select **Transfer Survey**.

The page reports that the transfer was initiated. If the action fails, the error notification names the reason; the survey stays with its current team.

## Before you transfer

- Export or record anything the old team must keep: responses stay with the survey, but old collaborators lose access.
- Tell the receiving team, and tell them who must be granted access afterwards.
- Confirm the destination team has the quota and plan features the survey needs.
- Check that the survey's email sender and branding make sense for the new team; presentation and communication settings are team-level.

## Related Content

- [Access Reference](../access/index.md): Re-granting access after the transfer.
- [Distribute Reference](../distribute/index.md): Where a transferred survey is shared from.
- [Customer Teams Reference](../../../../customer/reference/customer/teams.md): The teams a destination can belong to.
- [Authentication and Identity](../../../explanation/authentication.md): How respondent identity and sessions work.
