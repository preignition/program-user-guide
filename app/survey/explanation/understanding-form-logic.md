---
description: An explanation of how Accessible Surveys evaluates rules and mathematical expressions to create dynamic forms.
---

# Understanding Form Logic

When building complex surveys, you often need the form to react dynamically to the respondent's answers. You might want to skip irrelevant sections, show tailored follow-up questions, or calculate a total score based on selected options.

Accessible Surveys achieves this through a powerful **Logic Engine** that evaluates mathematical expressions and logical conditions in real-time.

## The Purpose of Form Logic

In a static survey, every respondent sees the same questions in the same order. This can lead to survey fatigue, especially if many questions are irrelevant to the person taking it.

The primary goal of form logic is to create a **personalized, efficient pathway** through the survey. By dynamically showing or hiding questions (or sections, or pages), you respect the respondent's time and gather higher-quality, cleaner data.

## How the Logic Engine Works

At its core, the logic engine is an expression evaluator. Every question, section, and page in a form can have an associated "Visibility Expression."

* **Expressions:** These are essentially mathematical or boolean statements, similar to what you might write in a spreadsheet formula (e.g., `age > 18` or `status == "completed"`).
* **Variables:** The answers provided by the respondent act as variables. When a respondent answers a question, the logic engine updates the variable and re-evaluates all dependent expressions.

### Mathematical and Logical Operators

The engine supports standard programming and mathematical operators:

* **Comparison:** `==` (equals), `!=` (not equals), `>`, `<`, `>=`, `<=`
* **Logical:** `&&` (AND), `||` (OR)
* **Mathematical:** `+`, `-`, `*`, `/`

If an expression evaluates to `true` (or a truthy value), the associated element becomes visible or active. If it evaluates to `false`, the element is hidden.

### Ternary Operators

For more advanced scenarios, the engine supports ternary operators (`condition ? true_result : false_result`). This is particularly useful for calculating dynamic values or scores based on specific conditions, rather than just toggling visibility.

## The "Why" Behind the Design

We chose an expression-based logic engine over a simple "If A then B" branch builder for a few key reasons:

1. **Flexibility:** It allows for highly complex, nested conditions that would be visually overwhelming in a traditional drag-and-drop rule builder.
2. **Calculations:** It enables real-time scoring and mathematical operations directly within the form, which is essential for assessments and research surveys.
3. **Performance:** Evaluating expressions in the browser is incredibly fast, ensuring the form feels responsive even with hundreds of rules.

By understanding that form logic is simply a series of mathematical and boolean expressions evaluating the respondent's current data state, you can begin to construct highly sophisticated, adaptable survey experiences.
