---
description: Learn the three ways to dynamically show or hide content in your survey based on respondent needs and answers.
---

# How to control content visibility

Controlling when and how content is displayed is essential for creating personalized and accessible survey experiences. In Accessible Surveys, you can control visibility using three different methods, depending on whether you are targeting accessibility needs or respondent answers.

## Method 1: Visibility Mode (Authoring Settings)

This is the most common method for showing or hiding entire **Questions, Sections, or Pages** based on the respondent's active accessibility mode (e.g., Easy Read, Sign Language).

### When to use it
Use this when you want to provide a completely different version of a question or section for specific accessibility needs.

### How to apply it

1. Navigate to the **Compose** view.
2. Select the item (Page, Section, or Question) in the tree grid.
3. In the right-hand panel, click on the **Settings** (gear icon) or **Visibility** tab.
4. Under **"Make this field visible for"**, select or deselect the modes:
    * **Standard:** Visible in the default survey view.
    * **Easy Read:** Visible when the respondent activates Easy Read mode.
    * **Sign Language:** Visible when the respondent activates Sign Language mode.

::: tip
By default, all modes are selected, meaning the content is always visible.
:::

## Method 2: CSS Show/Hide Classes

If you need to show or hide specific words, paragraphs, or components **within a single field** (like a text page or a question label), use CSS classes in the Markdown editor.

### When to use it
Use this for "inline" changes where you don't want to create separate fields for different modes, but just want to swap a specific piece of text or an image.

### How to apply it
Wrap your content in an HTML tag (like <div> or <span>) and apply the relevant class:

* `show-when-[mode]`: Visible **only** in that mode.
* `hide-when-[mode]`: Hidden in that mode.

**Example:**

```html
<p>Please answer the following question.</p>
<p class="show-when-easyread">This version uses simpler words for Easy Read.</p>
```

Refer to the [Accessibility Mode Reference](../reference/content/markdown/accessibility-mode.md) for the full list of available classes.

## Method 3: Logical Expressions

Logical expressions allow you to show or hide content based on **how a respondent has answered previous questions**. This is often called "Skip Logic" or "Branching."

### When to use it
Use this when visibility depends on data (e.g., "Only show the 'Childcare' section if the respondent answered 'Yes' to 'Do you have children?'").

### How to apply it

1. In the Compose view toolbar, activate **Visibility Mode** (eye icon).
2. Select the item you want to hide.
3. Click **Create hidden logic**.
4. Write an expression that evaluates to `True` when the item should be **hidden**.

**Example:**

```md
`Do you have children?` == `No`
```

*(This will hide the selected item if the respondent selects "No")*

For detailed steps, see [How to use form logic](./logic-expression.md).

## Summary: Which method should I choose?

| Method | Target | Based On | Best For |
| :--- | :--- | :--- | :--- |
| **Visibility Mode** | Entire Fields | Accessibility Modes | Providing alternative versions of questions. |
| **CSS Classes** | Inline Content | Accessibility Modes | Minor text adjustments within a single field. |
| **Logical Expressions** | Entire Fields | Previous Answers | Personalizing the path through the survey (Skip logic). |

## Related Content

* [How to activate accessibility modes](./activating-accessibility-modes.md)
* [How to use form logic](./logic-expression.md)
* [Accessibility Mode Reference](../reference/content/markdown/accessibility-mode.md)
* [The Concept of Modes](../explanation/the-concept-of-modes.md)
* [Understanding Form Logic](../explanation/understanding-form-logic.md)
