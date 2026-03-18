---
description: Reference documentation for the Markdown editor and supported syntax extensions.
---

# Markdown Editor

The Markdown Free Text field in Accessible Surveys supports standard Markdown syntax along with custom HTML, CSS tokens, convenience classes, and embedded web components.

## Supported Syntax

* **Standard Markdown:** Basic formatting (bold `**text**`, italic `*text*`), headings (`#`, `##`), lists, and tables. See the [Markdown Guide](https://www.markdownguide.org/basic-syntax/).
* **HTML:** Raw HTML tags (`<strong>`, `<em>`, `<div>`, `<span>`) are supported for advanced layout control.
  * *Note: When mixing HTML and Markdown, ensure an empty line precedes the Markdown content, and do not use leading spaces on the Markdown lines.*
* **CSS:** Inline styles (`style="..."`) and `<style>` blocks are permitted.
* **Custom Web Components:** Custom elements (e.g., `<pwi-tooltip>`) can be embedded directly. See [Available Web Components](./available-web-components.md).

## Extensions and Theming

The editor environment includes built-in classes and variables to integrate user content seamlessly with the application's responsive layout and active theme.

* **[Accessibility Modes](./accessibility-mode.md):** CSS classes (`show-when-[mode]`, `hide-when-[mode]`) to dynamically display content based on the user's active accessibility setting.
* **[Convenience Classes](./convenient-class.md):** Pre-defined CSS classes for Flexbox layouts (e.g., `layout horizontal`, `flex`).
* **[CSS Tokens](./css-tokens.md):** Standardized CSS variables (e.g., `var(--color-primary)`) that adapt automatically to the active theme (Light/Dark mode).
* **[Available Web Components](./available-web-components.md):** Custom elements provided by the platform (e.g., tooltips, YouTube embeds).

## Syntax Example

```html
<div class="layout horizontal wrap gap">
  <div class="flex show-when-signlanguage">
    This is displayed only in **sign language mode**.
  </div>
  <div class="flex show-when-easyread">
    This is displayed only in **easy read mode**.
  </div>
  <div class="flex-2 box">
    This is displayed in all modes. It is twice the width of the above elements.
    <lite-youtube videoid="xVytWVHX4N0"></lite-youtube>
  </div>
</div>

<style>
  .gap { gap: var(--space-medium); }
  .box {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: var(--space-medium);
    margin: var(--space-medium);
  }
</style>
```
