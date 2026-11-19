---
description: Reference guide to the syntax, field binding, and hidden-when-true logic expressions.
---

# Introduction to Logic Expressions

Logical expressions evaluate respondent answers to return a boolean result (`true` or `false`). In Accessible Surveys, these expressions are primarily used to dynamically show or hide pages, sections, or questions.

## Basic Syntax & Hidden-When-True Rule

Expressions evaluate respondent answers in real time against defined conditions:

::: warning Hidden-When-True Rule
In Accessible Surveys, visibility conditions are evaluated in the **`logic.hidden`** slot:

- When an expression evaluates to **`true`**, the element is **HIDDEN**.
- When an expression evaluates to **`false`** (or is empty), the element is **VISIBLE**.

Always write the condition that should cause the item to disappear.
:::

## Binding Survey Fields

To evaluate a respondent's answer within your logical expression, you must bind the question or choice option as a variable.

In the survey builder, drag and drop items from the structure tree directly into the expression editor:

- **For text, numeric, date, or scale questions:** Drag and drop the question item itself into the expression field.
- **For choice questions (radio, checkbox, dropdown):** Expand the question in the tree and drag and drop the specific **Option** to the right of the comparison operator.

<figure>
  <img src="../../../how-to/assets/shared/logic-expression-dd.gif" alt="Dragging and dropping a question into the logic editor">
  <figcaption>Drag and drop items from the tree view to bind them as variables in your expression.</figcaption>
</figure>

## Examples

### 1. Show a question only when an answer is provided

To show a follow-up question only after the respondent answers *"What is your name?"*, configure the follow-up question to be hidden when the name field is empty:

```text
`What is your name?` == ""
```

- When empty, `"" == ""` evaluates to `true` → the follow-up question is **hidden**.
- As soon as the respondent types a name, `name == ""` evaluates to `false` → the question becomes **visible**.

### 2. Show a question only when an answer contains a specific word

To show a question only when the response to *"What is your favorite fruit?"* contains the word "apple", hide it when "apple" is absent:

```text
!("apple" in `What is your favorite fruit?`)
```

- If the respondent enters "orange", the condition evaluates to `true` → the question is **hidden**.
- If the respondent enters "green apples", the condition evaluates to `false` → the question becomes **visible**.

### 3. Show a question only when a specific option is selected

To show a follow-up question only when *"Do you like fruit?"* is answered with *"Yes"*, hide it when the selection is anything other than *"Yes"*:

1. Drag the question `Do you like fruit?` into the expression field.
2. Enter the inequality operator `!=`.
3. Drag the choice option `Yes` to the right of the operator:

```text
`Do you like fruit?` != `Yes`
```

- While unanswered or answered with *"No"*, the expression is `true` → the question is **hidden**.
- When the respondent selects *"Yes"*, the expression evaluates to `false` → the question becomes **visible**.

## Operators and Canonical Syntax

Accessible Surveys uses **Jexl** syntax. For the complete, canonical reference of all comparison operators, logical operators, math functions, and transforms, see the [Jexl Syntax Reference](./jexl-syntax.md).

## Related Content

- [Jexl Syntax Reference](./jexl-syntax.md) — Comprehensive operator reference
- [Advanced Logic Expressions](./advanced.md) — Multi-condition formulas and transforms
- [Understanding Form Logic Explanation](../../../explanation/understanding-form-logic.md) — Conceptual background on expression evaluation
