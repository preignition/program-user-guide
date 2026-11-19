---
description: Reference for shared answer options, the Shared Options page, and how a shared list is reused across questions.
---

# Shared Options Reference

**Shared options** are a named answer-option group that several choice questions reuse. Edit the group once and every question linked to it sees the change.

Open the form's **Shared Options** page from the Build drawer.

## How sharing works

A question owns its options. Giving a name to those options marks them **shared** and publishes them to the form's library.

- A question with a shared name is the **owner** of that option group.
- Another choice question links to the group instead of holding its own copy.
- Editing the owner's options updates every linked question.
- Clearing the name stops offering the group to new questions; linked questions keep working with their existing options.

Sharing options is not the same as sharing a section or a logical expression. Options are values a respondent picks; sections are reusable structure; expressions are reusable conditions.

## Create shared options

1. Open a choice question and add its options.
2. Turn on **Make options shared**.
3. Give the group a descriptive **name**, for example `Frequency (daily to yearly)`.
4. Save.

The option group is now in the library.

## Reuse shared options

1. Open another choice question.
2. In its settings, open **Use Shared**.
3. Select the shared option group.

The question stops carrying its own options and follows the owner's group. Any later change to the owner's options appears here too.

Only compatible choice questions should share an option group: a radio group and a checkbox group that ask the same thing can share values, but a ranking question or a different scale should not.

## The Shared Options page

The grid lists every shared option group for the current form:

| Column | What it shows |
| --- | --- |
| **Shared Option Name** | The name given in the question settings. |
| **Question Label** | The label of the owning question, in the form's primary language. |
| **Question Type / id** | The question subtype and, in Advanced Mode, its id. |
| **Nb. of Option Items** | How many options the group contains. |

Expand a row to see the questions that use the group. The page is an index: the options themselves are edited in the owning question, not here.

If no shared options exist, the empty state explains that they appear once a question's options are named.

## What changes when the option group changes

| Change to the owner | Effect |
| --- | --- |
| Add an option | Linked questions offer the new option. |
| Rename an option | The label changes everywhere; responses already collected keep the value stored at the time. |
| Remove an option | Linked questions stop offering it. Answers that already used it remain in collected data; check reports that group by that option. |
| Rename the shared group | The new name appears in **Use Shared**; existing links stay. |
| Clear the shared name | No new question can link to it; linked questions keep their current options. |

Because the change is immediate across the form, review linked questions after editing a shared option group, especially if a question depends on option codes in logic.

## Choosing between shared and copied options

- Use **shared options** when the same scale or answer set must stay identical across questions.
- Use **copied options** when questions look similar now but may diverge later.
- Use a **shared section** when the whole block — question, options and logic — should be reused.

## Related Content

- [How to Share Options Across Multiple Questions](../../how-to/sharing-options.md): The step-by-step task.
- [Question Reference](./compose/question.md): Choice question settings, including shared options.
- [Expressions Reference](./expressions.md): Sharing logic rather than options.
- [How to Share Content Across Multiple Forms and Surveys](../../how-to/sharing-content.md): Sections and other sharing surfaces.
