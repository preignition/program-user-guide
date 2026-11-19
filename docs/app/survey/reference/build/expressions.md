---
description: "Reference for the Build Expressions page: expression rows, usage, statuses, detail actions and deletion rules."
---

# Expressions Reference

The **Expressions** page indexes every logical expression in the form — named and unnamed — with where it is used and whether it is still needed. It is an Advanced Mode tool, opened from the Build drawer.

Expressions are edited in the item's logic or visibility pane. This page is the form-level audit: it does not contain a separate expression editor.

## Rows and columns

| Column | What it shows |
| --- | --- |
| **Name** | The shared name, or **Unnamed**. Named expressions carry a **Shared** badge. |
| **Expression** | A readable preview that uses question and choice labels instead of internal keys. |
| **Used by** | The number of items referencing the expression. |
| **Status** | `Used`, `Unused`, `Deleted ref`, or `Used · deleted ref`. |

The heading badge counts unused expressions. Header filters narrow by name, expression text, item label and status.

## Status meanings

| Status | Meaning | What to do |
| --- | --- | --- |
| **Used** | At least one active item references it. | Leave it; edit through the item if needed. |
| **Unused** | No active item references it. | Delete it if it is no longer planned, or keep it while drafting. |
| **Deleted ref** | Only a soft-deleted item references it. | Restore the item or remove the reference before deleting. |
| **Used · deleted ref** | Active and soft-deleted items both reference it. | Resolve the deleted reference; active use still applies. |

## Naming and sharing

Whether an expression is offered in the **Select an existing expression** dropdown depends on its **Name**:

- **Naming** an expression marks it **Shared** and makes it selectable across the form.
- **Renaming** changes the label in the picker; existing links keep working.
- **Clearing the name** unshares it: it is no longer offered to new items, but the expression and every item already using it continue to work.

Shared expressions behave like shared options: one definition, many users. A change to the expression affects every item that references it, so review those items after editing.

## Detail pane

Expand a row to see:

- **Used by** — each question, section, page or survey text that references the expression, with the logic slot it controls (**Hidden**, **Required**, **Read-only** or **Invalid**).
- **Open in compose** — jumps to that item.
- **Name** and **Description** — editable in the expanded row.
- **Expression** — a read-only preview.
- **Delete expression** — available only when the deletion rules allow it.

## Deleting an expression

Deletion is allowed only when:

- no active item uses the expression, **and**
- no soft-deleted item still references it.

If a deleted item still points at it, the status shows **Deleted ref** and deletion is blocked. Restore the item, or remove the reference, so restoring it later cannot leave broken logic.

A deleted expression is recoverable from **Build → Restore**.

## When the page is useful

- Auditing logic before a build, when a form has grown over time.
- Finding expressions left behind after restructuring.
- Renaming a shared condition so colleagues recognize it.
- Confirming that deleting an item did not leave only a deleted reference behind.

## Related Content

- [How to Share Logical Expressions](../../how-to/sharing-logical-expressions.md): The step-by-step task.
- [Logic Expressions Reference](../content/logic-expression/index.md): Syntax and functions.
- [How to Use Form Logic](../../how-to/logic-expression.md): Applying logic to an item.
- [Shared Options Reference](./shared-options.md): Sharing options rather than conditions.
- [Restore Reference](./restore.md): Recovering a deleted expression.
