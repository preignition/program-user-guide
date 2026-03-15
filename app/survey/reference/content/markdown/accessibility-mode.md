---
description: Reference documentation for CSS classes used to toggle content visibility based on the active accessibility mode.
---

# Accessibility Modes

CSS classes can be applied to Markdown or HTML elements to dynamically show or hide content based on the respondent's currently active accessibility mode.

## Syntax

The class name follows the pattern:

`{state}-when-{accessibilityOption}`

### Parameters

*   **`state`:** `show` or `hide`
*   **`accessibilityOption`:** `signlanguage`, `readaloud`, or `easyread`

## Available Classes

| Class Name | Description |
| :--- | :--- |
| `show-when-easyread` | Element is visible **only** when Easy Read mode is active. |
| `hide-when-easyread` | Element is hidden when Easy Read mode is active. |
| `show-when-signlanguage` | Element is visible **only** when Sign Language mode is active. |
| `hide-when-signlanguage` | Element is hidden when Sign Language mode is active. |
| `show-when-readaloud` | Element is visible **only** when Read Aloud mode is active. |
| `hide-when-readaloud` | Element is hidden when Read Aloud mode is active. |

## Examples

**Display a paragraph only in Easy Read mode:**
```html
<p class="show-when-easyread">This paragraph is visible in Easy Read mode only.</p>
```

**Hide an element when Sign Language mode is active:**
```html
<div class="hide-when-signlanguage">This content will be hidden if the user turns on Sign Language.</div>
```

**Note:** These classes can be applied to standard HTML tags (`<p>`, `<div>`, `<span>`) as well as custom web components available in the platform.