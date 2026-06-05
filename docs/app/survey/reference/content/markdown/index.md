---
description: Reference documentation for the Markdown editor and supported syntax extensions.
---

# Markdown Editor Reference

The Markdown Free Text field in Accessible Surveys supports standard Markdown syntax along with custom HTML, CSS tokens, convenience classes, and embedded web components.

::: info
This reference focuses on the technical syntax and advanced styling available when writing Markdown and HTML manually. If you are looking for documentation on the visual editor toolbar, formatting shortcuts, and interactive widgets, please see the [Shared Components: Rich Text Editor](../../../../../components/md-editor.md) documentation.
:::

## Supported Syntax

* **Standard Markdown:** Basic formatting (bold `**text**`, italic `*text*`), headings (`#`, `##`), lists, and tables. See the [Markdown Guide](https://www.markdownguide.org/basic-syntax/).
* **Triple-Colon Directives:** Custom containers for theme-aware visibility (e.g., `::: dark-only ... :::`). These provide a clean alternative to HTML `<div>` tags for wrapping blocks of content.

* **HTML:** Raw HTML tags (`<strong>`, `<em>`, `<div>`, `<span>`) are supported for advanced layout control.
* **CSS:** Inline styles (`style="..."`) and `<style>` blocks are permitted.
* **Custom Web Components:** Custom elements (e.g., `<pwi-tooltip>`) can be embedded directly. See [Available Web Components](./available-web-components.md).

::: warning
When mixing HTML and Markdown, ensure an empty line precedes the Markdown content, and do not use leading spaces on the Markdown lines.
:::

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
    This is displayed in all modes. It is twice the width of the above elements. It is styled with the primary color of the active theme, using CSS tokens and the `.box` class.

    It also has a video embedded using the `<lite-youtube>` web component:
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

::: dark-only
### Dark Mode Special
This section is rendered only when **Dark Mode** is active, using the custom `::: dark-only` directive extension. It is cleaner than using raw HTML for block visibility.
:::

```

### Understanding the Example

The code snippet above demonstrates how standard Markdown, raw HTML, convenience classes, accessibility modifiers, web components, and CSS tokens can all be combined into a single, cohesive block of text. Here is a breakdown of how it works:

#### 1. Layout and Spacing (Convenience Classes)
The outer container uses `<div class="layout horizontal wrap gap">`.

* `layout horizontal` and `wrap` are built-in **Convenience Classes** that turn the container into a flexbox layout. Items will sit side-by-side (horizontally) and wrap to the next line if the screen is too small.
* The child elements use the `flex` and `flex-2` classes. This means the third column (`flex-2`) will automatically take up twice as much horizontal space as the other columns (`flex`).

#### 2. Conditional Display (Accessibility Modes)
The first two child `<div>` elements include the `show-when-signlanguage` and `show-when-easyread` classes.

* These are **Accessibility Mode** modifiers. The platform's rendering engine listens to the user's active settings. The first block of text will *only* be visible if the respondent has enabled Sign Language mode, while the second is exclusively for Easy Read mode.

#### 3. Mixing HTML and Markdown
Notice that inside the HTML `<div>` tags, standard Markdown syntax like `**sign language mode**` is used freely to create bold text.

#### 4. Web Components
Instead of pasting a messy iframe from YouTube, the editor supports custom **Web Components**.

* The `<lite-youtube videoid="xVytWVHX4N0"></lite-youtube>` tag creates a highly optimized, accessible video player simply by providing the video ID.

#### 5. Theming (CSS Tokens)
Finally, a `<style>` block is included to define the custom `.box` and `.gap` classes.

* Instead of hardcoding colors (e.g., `background-color: blue`), it uses **CSS Tokens** like `var(--color-primary)` and `var(--color-on-primary)`.
* If the survey is viewed in Dark Mode, or if the Customer Theme defines a different primary brand color, these variables update automatically. This ensures the custom styling remains accessible and visually consistent without requiring manual media queries.

#### 6. Block Directives
The `::: dark-only` block at the end of the example uses a **Triple-Colon Directive**. This is a custom extension of our Markdown parser that allows you to easily wrap multiple lines of content in a visibility container without needing to write raw HTML `<div>` tags.

* `::: dark-only`: Wraps content in a `.dark-only` container.
* `::: light-only`: Wraps content in a `.light-only` container.
