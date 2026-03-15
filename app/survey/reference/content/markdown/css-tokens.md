---
description: Reference documentation for CSS variables (tokens) that automatically adapt to the active theme.
---

# CSS Tokens

The Markdown editor environment exposes CSS variables (tokens) that map to the active theme (including Light and Dark modes). Using these tokens instead of hard-coded values ensures your content remains visually consistent and accessible across all modes.

Tokens can be used within a `<style>` block or directly in inline `style` attributes.

## Colors

The color system uses standard roles (Primary, Secondary, Tertiary, Error, etc.). For each role, there is a base color, an "on-" color (for text/icons placed on top of the base color), and container variants.

### Primary, Secondary, & Tertiary

| Token | Description |
| :--- | :--- |
| `--color-primary` | The main brand color. |
| `--color-on-primary` | Color for text/icons on a primary background. |
| `--color-primary-container` | A lighter/softer variant of the primary color for containers. |
| `--color-on-primary-container` | Color for text/icons on a primary container. |
| `--color-secondary` | The secondary brand color. |
| `--color-on-secondary` | Color for text/icons on a secondary background. |
| `--color-secondary-container` | A lighter/softer variant of the secondary color. |
| `--color-on-secondary-container` | Color for text/icons on a secondary container. |
| `--color-tertiary` | The tertiary brand color. |
| `--color-on-tertiary` | Color for text/icons on a tertiary background. |
| `--color-tertiary-container` | A lighter/softer variant of the tertiary color. |
| `--color-on-tertiary-container` | Color for text/icons on a tertiary container. |

### Status Colors

| Token | Description |
| :--- | :--- |
| `--color-success` | Color indicating a successful action. |
| `--color-on-success` | Color for text/icons on a success background. |
| `--color-success-container` | A lighter/softer variant of the success color. |
| `--color-on-success-container` | Color for text/icons on a success container. |
| `--color-warning` | Color indicating a warning or non-critical issue. |
| `--color-on-warning` | Color for text/icons on a warning background. |
| `--color-warning-container` | A lighter/softer variant of the warning color. |
| `--color-on-warning-container` | Color for text/icons on a warning container. |
| `--color-error` | Color indicating a critical error or destructive action. |
| `--color-on-error` | Color for text/icons on an error background. |
| `--color-error-container` | A lighter/softer variant of the error color. |
| `--color-on-error-container` | Color for text/icons on an error container. |

### Neutral & Surface Colors

| Token | Description |
| :--- | :--- |
| `--color-background` | The underlying background color of the page. |
| `--color-on-background` | Color for text/icons on the background. |
| `--color-surface` | Background color for components like cards, sheets, and menus. |
| `--color-on-surface` | Color for text/icons on a surface background. |
| `--color-surface-variant` | A subtle variant of the surface color. |
| `--color-on-surface-variant` | Color for text/icons on a surface variant. |
| `--color-surface-container` | Background color for grouping related surface elements. |
| `--color-on-surface-container` | Color for text/icons on a surface container. |
| `--color-outline` | Color used for borders, dividers, and outlines. |

## Spacing

Use spacing tokens for `margin`, `padding`, and `gap` properties to ensure consistent rhythmic spacing.

| Token | Value |
| :--- | :--- |
| `--space-xxx-small` | 2px |
| `--space-xx-small` | 4px |
| `--space-x-small` | 8px |
| `--space-small` | 12px |
| `--space-medium` | 16px |
| `--space-large` | 20px |
| `--space-x-large` | 28px |
| `--space-xx-large` | 36px |
| `--space-xxx-large` | 48px |

## Typography

Use typography tokens to maintain consistent font sizes and weights.

### Font Size

| Token | Value |
| :--- | :--- |
| `--font-size-x-small` | 0.75rem |
| `--font-size-small` | 0.875rem |
| `--font-size-medium` | 1rem |
| `--font-size-large` | 1.25rem |
| `--font-size-x-large` | 1.5rem |
| `--font-size-xx-large` | 2.25rem |
| `--font-size-xxx-large` | 3rem |

### Font Weight

| Token | Value |
| :--- | :--- |
| `--font-weight-thin` | 200 |
| `--font-weight-normal` | 400 |
| `--font-weight-semi-bold` | 500 |
| `--font-weight-bold` | 700 |
| `--font-weight-extra-bold` | 800 |

## Example Usage

```html
<div style="background-color: var(--color-primary-container); color: var(--color-on-primary-container); padding: var(--space-medium); border-radius: var(--space-x-small);">
  <p style="font-size: var(--font-size-large); font-weight: var(--font-weight-bold); margin: 0 0 var(--space-small) 0;">
    Important Notice
  </p>
  <p style="margin: 0;">
    This box automatically adapts to dark and light mode themes.
  </p>
</div>
```