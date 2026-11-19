---
description: An explanation of how Accessible Surveys evaluates rules and mathematical expressions to create dynamic forms.
---

# Understanding Form Logic

When building complex surveys, you often need the form to react dynamically to respondent answers: skipping irrelevant sections, showing tailored follow-up questions, or calculating a total score.

Accessible Surveys achieves this through an expression evaluator based on **Jexl** (JavaScript Expression Language) that computes conditions and calculations in real time.

## The Purpose of Form Logic

In a static survey, every respondent sees the same questions in the same order. This can lead to survey fatigue, especially if many questions are irrelevant to the person taking it.

The primary goal of form logic is to create a **personalized, efficient pathway** through the survey. By dynamically showing or hiding questions, sections, or entire pages, you respect the respondent's time and gather cleaner, higher-quality data.

## How the Logic Engine Evaluates Visibility (Hidden When True)

At its core, the logic engine evaluates boolean expressions.

::: warning Hidden-When-True Evaluation
In Accessible Surveys, visibility rules are defined in the **`logic.hidden`** slot:

- When an expression evaluates to **`true`**, the item is **HIDDEN**.
- When an expression evaluates to **`false`** (or is empty), the item is **VISIBLE**.

This means visibility rules define the condition under which an item should disappear from the respondent's view.
:::

### Example: Showing a Follow-Up Question

Suppose you want to show a follow-up question (*"What kind of fruit do you like?"*) only if the respondent answers *"Yes"* to *"Do you like fruit?"*:

Because the rule defines when the item is **hidden**, you hide the follow-up question whenever the answer is **NOT** *"Yes"*:

```text
`Do you like fruit?` != "Yes"
```

- If the respondent answers *"No"* (or leaves it blank), `answer != "Yes"` evaluates to `true` → the follow-up question is **hidden**.
- As soon as the respondent selects *"Yes"*, `answer != "Yes"` evaluates to `false` → the follow-up question becomes **visible**.

## Expression Syntax and Operators

The engine supports full Jexl syntax, including comparisons, logical operators (`&&`, `||`), mathematical arithmetic, string operations (`in`), transforms, and ternary expressions (`condition ? value_if_true : value_if_false`).

For the comprehensive, canonical operator reference and syntax rules, see:

- [Jexl Syntax Reference](../reference/content/logic-expression/jexl-syntax.md) — Complete operator tables, data types, and functions
- [Introduction to Logic Expressions](../reference/content/logic-expression/introduction.md) — Drag-and-drop field binding and basic examples
- [Advanced Logic Expressions](../reference/content/logic-expression/advanced.md) — Complex multi-field rules and transforms

## Why Expression-Based Logic?

We chose an expression-based logic engine over a rigid visual branching wizard for three reasons:

1. **Expressive Power:** Handles complex multi-field conditions (e.g. `age >= 18 && (country == 'FR' || country == 'BE')`) that would be cumbersome in visual branch trees.
2. **Deterministic & Testable:** Rules can be audited at build time and simulated in the interactive Test workbench.
3. **Client-Side Speed:** Evaluating expressions locally in the respondent's browser takes fractions of a millisecond, keeping questionnaire navigation instantaneous.

## Related Content

- [Form Logic How-to Guide](../how-to/logic-expression.md) — Step-by-step instructions for adding visibility rules
- [Sharing Logical Expressions](../how-to/sharing-logical-expressions.md) — Reusing named expressions across multiple items
- [Compose Reference](../reference/build/compose/index.md) — Structure and item properties
