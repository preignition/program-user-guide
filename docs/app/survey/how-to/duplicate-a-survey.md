---
description: How to duplicate a survey, choose whether to copy its linked form, and what the copy does and does not carry.
---

# How to Duplicate a Survey

Duplicating is the fastest way to start from an existing instrument — a previous wave, a translated variant, or a template. The copy is a new survey with its own name; the original is untouched.

## Before you start

- You need edit access to the survey and to the team it belongs to.
- The copy is created in your **active team**. Switch teams first if it should live elsewhere.
- Decide whether the linked form should be copied or shared; the dialog asks.

## Step 1: Copy the survey

1. Open the survey workspace (**Surveys**).
2. Open the row's context menu and select **Copy survey**.
3. In the **Copy survey** dialog, set the new name and whether to copy the form.
4. Select **Copy** and wait for the process to finish.

The dialog stays open while the copy is created; the success message names the new survey. The copy is named `Copy of <original>` unless you change the name.

## Step 2: Choose what happens to the form

| Option | Result | Use when |
| --- | --- | --- |
| **Copy the form** (default) | A deep copy of the linked form, including its pages, sections, questions, options, logic and translations. | The new survey will diverge from the original. |
| **Do not copy the form** | The new survey keeps using the same form definition as the original. | You want two surveys over one instrument — for example two audiences, batches or periods answering identical questions. |

If you share the form, an edit made in either survey changes the form both use. That is deliberate for comparable waves; it is a trap if you intended to edit one copy.

## What the copy carries

- The survey's settings, including presentation mode, languages, accessibility modes and email configuration.
- The linked form, when copied, with its content and translations.

## What the copy does not carry

- **Responses and analytics** — the copy starts empty.
- **Invitation runs and audiences** — audience lists belong to the team, not the survey; create a new run.
- **Campaigns and their attribution** — campaigns are survey-scoped and are not copied with their response data.
- **Production status** — the copy is a draft; it must be built and taken to production.
- **Access** — the copy is owned by you; invite collaborators deliberately.
- **Webhook delivery history** — configure and test the webhook again.

## Step 3: Make the copy yours

1. Rename the survey if the default name is unclear.
2. Update the introduction, consent text and thanks page; they often name the original study.
3. Check languages and remove ones the new audience does not need.
4. Run **Review** — a copied form is still a draft.
5. Build and publish a new version before sharing.

## When not to duplicate

- **A new wave of the same study**: use a **batch** on the existing survey rather than a copy, so responses stay comparable and analytics stay in one place.
- **A translation**: add languages to the existing survey instead of copying it.
- **A section reused elsewhere**: share the section, not the whole survey.

## Troubleshooting

- **Copy takes a long time**: a large form with media and many translations takes longer; leave the dialog open.
- **The new survey has no form content**: the form was shared rather than copied, or the source form was empty. Check the option you chose.
- **The copy is in the wrong team**: the copy is created in the active team at the time you copy. Use **Transfer** afterwards, or switch teams and copy again.
- **Duplicate names**: rename the copy to distinguish it in the workspace.

## Related Content

- [How to Edit a Survey](./editing-a-survey.md): Adapting the copied content.
- [How to Use Survey Batches](./using-batches.md): Collecting a new wave without copying.
- [How to Publish and Distribute a Survey](./publishing-a-survey.md): Taking the copy live.
- [Share → Transfer Reference](../reference/share/transfer/index.md): Moving the copy to another team.
- [Survey Workspace Reference](../reference/workspace.md): Where the copy appears.
