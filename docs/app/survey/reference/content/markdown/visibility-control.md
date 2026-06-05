---
description: Reference documentation for controlling content visibility based on accessibility modes and color themes.
---

# Visibility Control

You can dynamically show or hide content based on the respondent's **Accessibility Mode** (Easy Read, Sign Language, etc.) or the active **Color Theme** (Light or Dark mode).

There are three ways to apply these visibility rules, depending on whether you prefer native Markdown syntax or raw HTML.

## Available Visibility Classes

Use these class names in any of the methods described below.

| Category | Class Name | Description |
| :--- | :--- | :--- |
| **Theme** | `dark-only` | Visible **only** in Dark Mode. |
| **Theme** | `light-only` | Visible **only** in Light Mode. |
| **A11y** | `show-when-easyread` | Visible **only** in Easy Read mode. |
| **A11y** | `hide-when-easyread` | Hidden in Easy Read mode. |
| **A11y** | `show-when-signlanguage` | Visible **only** in Sign Language mode. |
| **A11y** | `hide-when-signlanguage` | Hidden in Sign Language mode. |
| **A11y** | `show-when-readaloud` | Visible **only** in Read Aloud mode. |
| **A11y** | `hide-when-readaloud` | Hidden in Read Aloud mode. |

---

## Method 1: Block Directives (Recommended)

**Best for: Multi-line blocks of content and logos.**

The triple-colon syntax (`:::`) is the cleanest way to wrap content. It maintains the "look and feel" of Markdown and doesn't require complex HTML nesting.

```markdown
::: dark-only
### Dark Mode Special
This section is rendered only when **Dark Mode** is active.
:::
```

### Why use Directives?
* **Readability**: Content remains easy to read in the editor.
* **Markdown Support**: You can use standard Markdown (like bold, lists, and headings) inside the block without worrying about HTML nesting rules.

---

## Method 2: Attribute Syntax

**Best for: Single elements like images or links.**

You can apply a visibility class directly to an image by adding `{.class-name}` at the end of the Markdown line.

```markdown
![Dark Logo](logo-dark.png){.dark-only}
![Light Logo](logo-light.png){.light-only}
```

---

## Method 3: HTML Containers

**Best for: Power users needing complex layouts.**

For advanced scenarios, such as combining visibility with [Convenience Classes](./convenient-class.md) (like Flexbox), you can use standard `<div>` tags.

```html
<div class="layout flex dark-only">
  This container is a flex-child AND only visible in dark mode.
</div>
```

::: warning
When using HTML tags, you must leave an empty line before any Markdown content inside the tag, and ensure the Markdown is not indented.
:::

---

## Comparison: Directives vs. HTML

| Feature | Block Directives (`:::`) | HTML Containers (`<div>`) |
| :--- | :--- | :--- |
| **Syntax** | `::: class-name` | `<div class="class-name">` |
| **Complexity** | Simple, native feel | Requires closing tags and correct nesting |
| **Readability** | High | Moderate (clutters the editor) |
| **Use Case** | Most content blocks | Multi-class layouts (e.g., Flexbox + Visibility) |

::: tip
[Prefer conditional visibility for the entire field when possible](../../../how-to/use-easy-read#step-5-conditional-visibility-advanced). Conditional visibility at the field level is more efficient than hiding specific sections of text within a field.
:::
