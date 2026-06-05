---
description: Reference documentation for CSS classes used to toggle content visibility based on the active accessibility mode.
---

# Accessibility Modes

CSS classes can be applied to Markdown or HTML elements to dynamically show or hide content based on the respondent's currently active accessibility mode.

## Syntax

The class name follows the pattern:

`{state}-when-{accessibilityOption}`

### Parameters

* **`state`:** `show` or `hide`
* **`accessibilityOption`:** `signlanguage`, `readaloud`, or `easyread`

## Theme-Aware Visibility

In addition to accessibility modes, you can control visibility based on the active color theme (light or dark mode). These are especially useful for logos or theme-specific graphics.

| Class Name | Description |
| :--- | :--- |
| `dark-only` | Element is visible **only** when Dark Mode is active. |
| `light-only` | Element is visible **only** when Light Mode is active. |

### Block Directives

For large blocks of content, you can use the **Triple-Colon Directive** syntax. This is a matter of user preference and can be used with any visibility class, including theme-aware classes or accessibility modes.

**Dark Mode Example:**

```markdown
::: dark-only
This content is only visible in dark mode.
:::
```

**Easy Read Example:**

```markdown
::: show-when-easyread
This content is only visible when Easy Read mode is active.
:::
```

### Image Attributes

You can apply theme or accessibility classes directly to images using the attribute syntax:

```markdown
![Logo](logo-dark.png){.dark-only}
![Logo](logo-light.png){.light-only}
![Sign Language Video](poster.png){.show-when-signlanguage}
```

## Available Classes

| Class Name | Description |
| :--- | :--- |
| `show-when-easyread` | Element is visible **only** when Easy Read mode is active. |
| `hide-when-easyread` | Element is hidden when Easy Read mode is active. |
| `show-when-signlanguage` | Element is visible **only** when Sign Language mode is active. |
| `hide-when-signlanguage` | Element is hidden when Sign Language mode is active. |
| `show-when-readaloud` | Element is visible **only** when Read Aloud mode is active. |
| `hide-when-readaloud` | Element is hidden when Read Aloud mode is active. |

::: tip

[Prefer conditional visibility for the entire field when possible](../../../how-to/use-easy-read#step-5-conditional-visibility-advanced), especially when these classes are used to hide the entire content like:

```html
<div class="hide-when-easyread">
  Content to be hidden 
</div>
```

Conditional visibility is more efficient and avoids displaying space for hidden content. However, these classes are useful when you want to show or hide specific sections of text within a longer text.

:::

## Examples

**Display a paragraph only in Easy Read mode:**

```html
<p>this is visible always<p>
<p class="show-when-easyread">This paragraph is visible in Easy Read mode only.</p>
```

**Hide an element when Sign Language mode is active:**

```html
<div class="hide-when-signlanguage">This content will be hidden if the user turns on Sign Language.</div>
```

**Note:** These classes can be applied to standard HTML tags (`<p>`, `<div>`, `<span>`) as well as custom web components available in the platform.
