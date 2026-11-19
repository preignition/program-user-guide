---
description: "Reference for the Survey workspace: the starred list, survey cards, status labels, actions and the overview panel."
---

# Survey Workspace and Labels Reference

The **Surveys** workspace lists the surveys that belong to the active team. It is the entry point for creating, finding, opening and managing them.

If the workspace says no team is selected, choose a team first; the survey list is scoped to one team at a time and never mixes teams.

## Layout

The workspace has three areas:

- **Starred surveys** at the top: the surveys you marked as favorites, one card each.
- **The survey list** in the middle: every non-deleted survey of the active team.
- **Actions** at the bottom: **New Survey** and **New Form**.

The list respects the team context, not the user: a survey belongs to a team and appears there whether or not you are its owner. Access to open it is a separate decision.

## Labels and status chips

Survey cards and rows carry labels that describe what the survey is and whether it is live.

| Label or chip | Meaning |
| --- | --- |
| **Survey title** | The respondent-facing title. Translated per survey language. |
| **Survey name** | The internal name used in the workspace and lists. |
| **Description** | A short internal description; shown on the card, not to respondents. |
| **Owner** | The person who owns the survey and can grant access. |
| **Created** | When the survey was created. |
| **Active** | The survey is open and accepts responses. |
| **Closed** | The survey is not open; respondents cannot submit. |
| **Valid** | The survey's structure and definition pass the validity check. |

The **Active** / **Closed** chip reflects the survey's Status setting, not merely the existence of a build. A survey can be built and published and still be closed.

## Survey cards and rows

Each card shows the title, description, status chips, metadata and recent activity for the active batch. The activity card counts responses per day.

The list view is a grid with columns for title, description, owner, created date and labels. Sort by **Created** to find new work, or use the visible filters to narrow the list.

## Actions

| Action | What it does |
| --- | --- |
| **Open** | Opens the survey in the builder. |
| **Analyze** | Opens the Analyze workbench for the survey. |
| **Star** / **Unstar** | Adds or removes the survey from the starred list. Personal to your account. |
| **Copy survey** | Creates a duplicate, optionally copying the linked form. |
| **Delete survey** | Soft-deletes the survey and takes it offline. |

**New Survey** and **New Form** open the creation dialogs. A form can be created on its own and linked to a survey later.

## Starred surveys

The star is a personal shortcut, not a shared label. Use it for the surveys you work on daily; the starred list appears above the full list and is visible only to you.

The star survives archiving and reopening the survey, so a closed survey you still analyze stays one click away.

## Creating vs editing

- **New Survey** creates a survey and, unless skipped, a linked form.
- **New Form** creates a standalone form that a survey can use.
- Editing a survey opens its Build, Test, Share and Analyze surfaces; the workspace itself is for finding and managing.

## Deleted surveys

Deleting from the workspace is a soft delete: the survey disappears from the list and is taken offline, but it is not erased. Restore is a separate recovery path; check with your team before deleting a survey others may still need.

## Related Content

- [How to Create a New Survey](../how-to/creating-a-new-survey.md): The creation dialog.
- [How to Duplicate a Survey](../how-to/duplicate-a-survey.md): Copy actions in detail.
- [How to Edit a Survey](../how-to/editing-a-survey.md): The builder.
- [Status Reference](./share/status/index.md): Active and closed scheduling.
- [Analyze Overview](./analyze/index.md): The analytics workbench.
