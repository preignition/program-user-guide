---
description: Reference documentation for the Markdown editor and supported syntax extensions.
---

# Markdown Editor Reference

The Markdown Free Text field in Accessible Surveys supports standard Markdown syntax along with custom HTML, CSS tokens, convenience classes, and embedded web components.

::: info
This reference focuses on the technical syntax and advanced styling available when writing Markdown and HTML manually. If you are looking for documentation on the visual editor toolbar, formatting shortcuts, and interactive widgets, please see the [Shared Components: Rich Text Editor](../../../../../components/md-editor.md) documentation.
:::

## Supported Syntax

You can choose between a native Markdown approach for simplicity or an HTML-hybrid approach for advanced layouts.

### 1. Native Markdown (Recommended)
* **Standard Markdown:** Basic formatting (bold `**text**`, italic `*text*`), headings (`#`, `##`), lists, and tables. 
* **[Block Directives](./visibility-control.md#method-1-block-directives-recommended):** Custom containers for theme and accessibility visibility (e.g., `::: dark-only`).
* **[Attribute Syntax](./visibility-control.md#method-2-attribute-syntax):** Assign classes directly to images and links (e.g., `![alt](src){.dark-only}`).

### 2. HTML-Hybrid (Advanced)
* **HTML Tags:** Raw HTML tags (`<div>`, `<span>`) for precise container management.
* **[Convenience Classes](./convenient-class.md):** Pre-defined CSS classes for Flexbox layouts (e.g., `layout horizontal`, `flex`).
* **[CSS Tokens](./css-tokens.md):** Standardized CSS variables (e.g., `var(--color-primary)`) that adapt automatically to the active theme.
* **[Web Components](./available-web-components.md):** Custom elements provided by the platform (e.g., tooltips, YouTube embeds).

---

## Syntax Example

This comprehensive example demonstrates how standard Markdown, raw HTML, convenience classes, visibility modifiers, and CSS tokens can all be combined.

```html
<div class="layout horizontal wrap gap">
  <!-- Method 1: Native Directive -->
  ::: show-when-signlanguage
  <div class="flex">
    This is displayed only in **sign language mode** using a directive.
  </div>
  :::

  <!-- Method 2: HTML Class -->
  <div class="flex show-when-easyread">
    This is displayed only in **easy read mode** using an HTML class.
  </div>

  <div class="flex-2 box">
    This column is twice the width and uses **CSS Tokens** for styling.

    <lite-youtube videoid="xVytWVHX4N0"></lite-youtube>
  </div>
</div>

<style>
  .gap { gap: var(--space-medium); }
  .box {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: var(--space-medium);
  }
</style>
```

### Understanding the Example

The code snippet above demonstrates the platform's multi-layered formatting capabilities:

#### 1. Layout and Spacing (Convenience Classes)
The outer container uses `<div class="layout horizontal wrap gap">`.
* `layout horizontal` and `wrap` are built-in **Convenience Classes** that turn the container into a Flexbox layout.
* The child elements use `flex` and `flex-2`, allowing the third column to automatically take up twice as much space.

#### 2. Conditional Display (Visibility Control)
The example showcases two ways to handle visibility:
* **Directives**: The `::: show-when-signlanguage` block is a native Markdown extension. It's clean and easy to read.
* **HTML Classes**: The `show-when-easyread` class is applied directly to a `<div>`. This is useful when you need to combine visibility with other layout classes (like `flex`).

#### 3. Theming (CSS Tokens)
The `<style>` block uses **CSS Tokens** like `var(--color-primary)`. These variables update automatically if the user switches to Dark Mode or if the site's brand colors change, ensuring the content remains accessible.

#### 4. Interactive Content (Web Components)
The `<lite-youtube>` tag is a custom **Web Component**. It embeds a video efficiently without requiring complex `<iframe>` code.

---

**See also:**

* [How-to: Providing Rich Formatting](../../../how-to/providing-rich-formatting.md)
* [Explanation: Using Markdown](../../../explanation/using-markdown.md)
* [Reference: Visibility Control](./visibility-control.md)
* [Reference: Rich Text Editor Component](../../../../../components/md-editor.md)
