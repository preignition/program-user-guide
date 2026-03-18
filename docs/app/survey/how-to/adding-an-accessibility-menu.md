---
description: This guide shows you how to add an accessibility menu to your survey
---

# Adding an accessibility menu

::: tip
Adding an accessibility menu at the start of your survey helps makes the accessibility options more prominent to survey respondents
:::

## Step 1

Accessibility settings can be activitated by survey respondents from the accessibility settings icon which is always available in the top right hand corner of the screen.

However adding an accessibility menu to your survey can make these options more prominent.&#x20;

## Step 2

The accessibility menu can be added to any feild that supports Markdown.  This includes the 'landing page' or a 'free text' feild within your form.

Simply copy this code to make the menu appear&#x20;

```markup
<a11y-menu context="survey"></a11y-menu>
```

The menu allows respondents to activate, deactivate or change accessibility settings directly from the menu.

It is intelligent, in that it will only show the accessibility options that you have activated for your survey.

## Step 3

This short video show you how you can add an accessibility menu to a survey's 'Landing Page';

{% embed url="https://youtu.be/jBdiUyD_dek" %}

## Step 4&#x20;

Alternatively, you can add an accessibility menu as the first page of your survey by following these instructions.

Add a new page and section at the beginning of your form.  Give the page a title like 'Accessibility'.  The section should have a name but not a title or sub title&#x20;

Drag and drop to add a new 'free text' question into the section that you have just created.

Copy and paste the accessibility menu into the free text field.

```markup
<a11y-menu context="survey"></a11y-menu>
```

## Step 4

If you have included an accessibility menu in your form, be careful if you auto translate the form.

The auto translate will translate the word "survey" in the code, and the menu will not render properly when that language is activated.

You will need to manually correct the code in the translated version of the Form.&#x20;
