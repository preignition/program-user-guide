---
description: Learn what CSS variables are and how Accessible Surveys uses them to provide robust theming and accessibility features.
---

# Understanding CSS Variables

## What are CSS Variables?

CSS Variables (officially known as Custom Properties) are entities defined by CSS authors that contain specific values to be reused throughout a document. They allow you to store a value—like a color, font size, or spacing unit—in one place and apply it anywhere in your stylesheets.

They are set using a double hyphen prefix (e.g., `--primary-color: #3498db;`) and accessed using the `var()` function:

```css
.button {
  background-color: var(--primary-color);
}
```

If you change the value of `--primary-color` in one place, every element using that variable updates automatically.

## How Accessible Surveys Uses CSS Variables

Accessible Surveys relies heavily on CSS variables to drive its styling and accessibility features. 

### 1. Dynamic Theming
When you configure the primary color or font of your survey in the styling editor, you aren't writing new CSS rules from scratch. Instead, you are updating the underlying CSS variables for the survey. The entire application layout references these variables, meaning your changes cascade instantly and consistently across buttons, headers, borders, and backgrounds.

### 2. Accessibility Modes (Dark, High Contrast)
Our commitment to accessibility requires the interface to adapt to the user's needs on the fly. 
When a respondent switches to **Dark Mode** or **High Contrast Mode**, the platform simply swaps out the color palette assigned to the CSS variables. 

Because the underlying CSS structure uses variables like `--text-color` and `--background-color` instead of hardcoded values (like `black` or `white`), the survey can instantly invert or heighten contrast without needing a completely separate stylesheet for every theme.

### 3. Responsive Overrides
Variables also make it easy to adjust sizing based on the screen size (responsive design). We use variables to control padding and margins, which shrink automatically on mobile devices to ensure a comfortable reading experience.