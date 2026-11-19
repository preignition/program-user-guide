---
description: How to recover deleted questions, sections, pages, text items and logical expressions with Build Restore.
---

# How to Restore Deleted Survey Items

Deleting an item in the builder does not erase it. Questions, sections, pages, survey text and logical expressions are soft-deleted, and **Build → Restore** brings them back.

## Before you start

- You need edit access to the survey.
- Restore is in the **Build** drawer. Expression recovery needs **Advanced Mode**.
- Restoring an item puts it back into the live Compose tree immediately; check its logic and translations after restoring.

## Step 1: Open Restore

1. Open the survey and select **Build**.
2. Select **Restore** in the Build menu.

The workspace lists deleted items in two scopes:

- **Form Items** — questions, sections, pages, options and form logic expressions.
- **Survey Texts** — introduction, terms, pre-submit and thank-you page text.

## Step 2: Find the item

The grid shows:

- **Label / Name** — the item's readable title, or the expression code for a logical expression.
- **Type** — `question`, `section`, `page`, `expression`, `text` or `glossary`.
- **Deleted On** — when it was deleted. Sort this column to see the newest deletions first.
- **Deleted By** — the team member who deleted it.

Select a row to expand its details.

## Step 3: Restore

1. Select **Restore** on the expanded row.
2. The item is re-inserted into its former parent at its original position, or at the end when positions have changed.
3. Its translations and accessibility assets (Easy Read, sign language, Read Aloud, voice) are re-registered.

The Compose tree updates without a page reload.

If the original parent page or section was also deleted, the item re-attaches to the closest surviving ancestor rather than being orphaned.

## Step 4: Verify the result

1. Find the item in **Compose** and check its label, options and position.
2. Open **Form Behavior** or **Localize** if the item is translated, and confirm the translations came back.
3. Check any logic that referenced the item; expressions are restored separately and may need re-linking.
4. Use **Test** to confirm the page renders and validates.

## Advanced Mode

With Advanced Mode on, Restore also exposes:

- document IDs and raw schema/path details;
- deleted conditional branching expressions (`metaData.type === 'expression'`).

Restore an expression before restoring the questions that should use it, then re-attach it in the question's logic settings.

## Troubleshooting

- **The item is not listed**: Restore lists soft-deleted items only. An item deleted before the current survey was created, or by a different form, is not part of this form's history.
- **The item came back in the wrong place**: its original parent changed. Drag it to the intended position in Compose.
- **An expression says it is missing**: restore the expression, then select it again in the question's logic field.
- **Translations are missing**: confirm the translation existed before deletion; translations are restored with the item, not re-translated.

## Related Content

- [Restore Reference](../reference/build/restore.md): Soft-deletion architecture, grid columns and restoration lifecycle.
- [How to Edit a Survey](./editing-a-survey.md): Working in the Compose tree.
- [How to Use Form Logic](./logic-expression.md): Re-attaching restored expressions.
- [Compose Question Reference](../reference/build/compose/question.md): Item settings after restoration.
