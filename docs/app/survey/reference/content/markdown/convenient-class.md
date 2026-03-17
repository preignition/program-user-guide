---
description: Reference for CSS layout classes available in the Markdown editor.
---

# Convenience Classes

Pre-defined CSS classes are available to style and layout content using [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) directly within the Markdown editor.

## Layout Containers

Apply these classes to a parent container (e.g., `<div class="...">`) to define the layout direction and behavior of its children.

| Class | Description | Syntax Example |
| :--- | :--- | :--- |
| `layout` | Initializes a Flexbox container | `<div class="layout">...</div>` |
| `horizontal` | Sets flex direction to row (default) | `<div class="layout horizontal">...</div>` |
| `vertical` | Sets flex direction to column | `<div class="layout vertical">...</div>` |
| `wrap` | Allows items to wrap onto multiple lines | `<div class="layout wrap">...</div>` |
| `no-wrap` | Forces items to stay on a single line | `<div class="layout no-wrap">...</div>` |
| `center-center` | Centers content both horizontally and vertically | `<div class="layout center-center">...</div>` |
| `center-justify` | Centers content vertically and justifies it horizontally | `<div class="layout center-justify">...</div>` |

## Layout Factors (Sizing)

Apply these classes to the children inside a `layout` container to control how much space they consume relative to each other.

| Class | Description | Syntax Example |
| :--- | :--- | :--- |
| `flex` | Sets flex factor to 1 (consumes available space) | `<div class="flex">...</div>` |
| `flex-2` | Sets flex factor to 2 (consumes 2x available space) | `<div class="flex-2">...</div>` |
| `flex-3` | Sets flex factor to 3 | `<div class="flex-3">...</div>` |
| `flex-4` | Sets flex factor to 4 | `<div class="flex-4">...</div>` |

## Example Usage

**Creating a responsive two-column layout:**

```html
<div class="layout horizontal wrap">
  <div class="flex">
    Column 1 content...
  </div>
  <div class="flex-2">
    Column 2 content (twice as wide as Column 1)...
  </div>
</div>
```