---
description: Learn what CSS variables are and how Accessible Surveys uses them to provide robust theming and accessibility features.
---

# Understanding CSS Variables

## What are CSS Variables?

CSS Variables (officially known as Custom Properties) are author-defined entities containing specific values that can be reused throughout a stylesheet. They allow you to define design tokens—such as color palettes, base font sizes, or spacing multipliers—in a single place and apply them across an entire application.

They are set using a double-hyphen prefix (e.g., `--primary-color: #3498db;`) and accessed via the `var()` function:

```css
.button {
  background-color: var(--primary-color);
}
```

Updating the value of `--primary-color` instantly propagates to every component referencing that variable without re-evaluating layout rules.

## How Accessible Surveys Uses CSS Variables

Accessible Surveys relies on CSS variables and CSS `@layer` rules to drive styling, responsive overrides, and real-time accessibility modes:

### 1. Dynamic Theming

When you customize brand colors in the Customer Portal Theme editor or set survey-specific styles, the platform updates underlying CSS custom properties. The entire questionnaire layout references these tokens, ensuring changes cascade consistently across buttons, headings, question borders, and backgrounds.

### 2. Accessibility Modes (Dark, High Contrast)

When a respondent switches between Light, Dark, or High-Contrast themes in the accessibility menu, the platform swaps the token values assigned to surface and text variables (e.g., `--md-sys-color-surface`, `--md-sys-color-on-surface`). Because components reference semantic color variables rather than hardcoded hex colors, themes switch instantly without reloading stylesheets.

### 3. Responsive Overrides

Variables make it straightforward to adapt spacing across devices. The survey renderer adjusts padding and margin tokens on mobile viewports (`max-width: 599px`) to maintain comfortable reading proportions on smaller touchscreens.

### 4. Master Scaling and Density Tokens

The survey layout engine uses two primary tokens to govern overall questionnaire density:

- **`--a11y-form-font-size-base`**: The master token controlling survey typography ladder calculations. Headings, question labels, option text, and input controls all scale proportionally from this base value (default `1rem`). In **One Question Per Page** mode, the default base font size automatically increases to `1.5rem` for enhanced cognitive focus.
- **`--a11y-form-spacing-scale`**: Acts as a global multiplier for all spacing-related tokens (margins, paddings, and component gaps). For example, a scale of `0.8` tightens layout spacing by 20%, while `1.2` creates a roomier layout.

### 5. Mode-Specific Accommodations

When specialized accessibility modes are active, CSS layers apply dedicated accommodations:

- **Easy Read (`:host([easyread])`)**: Expands the maximum column width (`--a11y-page-max-width: 950px`) to provide ample room for side-by-side text and visual illustrations, while maintaining readable typographic proportions.
- **Read Aloud (`:host([readaloud])`)**: On mobile devices, adjusts margin inlines to leave a dedicated gutter for audio playback controls.

## Related Content

- [Understanding CSS Units](./understanding-css-units.md) — Comparing rem, em, px, and percentages
- [Styling a Survey How-to Guide](../how-to/styling-a-survey.md) — Step-by-step styling configuration
- [Color System Explanation](../../customer/explanation/color-system.md) — Theme generation and contrast compliance
