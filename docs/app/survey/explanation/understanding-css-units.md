---
description: An explanation of the different CSS units available for styling tokens and how they affect responsive design and accessibility.
---

# Understanding CSS Units

When customizing the visual appearance of your survey using the Style Configuration tab, you define spacing and typography using standard CSS units. Understanding the differences between these units—specifically px, rem, em, and %—is crucial for building surveys that are both beautiful and accessible across all devices.

This document explains how these units work conceptually and why you might choose one over another.

## Absolute vs. Relative Units

CSS units are broadly categorized into two types: **Absolute** and **Relative**.

* **Absolute units** are fixed and appear as exactly that size regardless of the device or the user's browser settings.
* **Relative units** scale dynamically based on other elements, such as the parent container's size or the user's default browser font preferences.

## The Available Units

### Pixels (`px`)
Pixels are the most common absolute unit. One pixel (1px) typically translates to one dot on a computer screen.

* **How it works:** Setting Page Padding Block to 24px guarantees exactly 24 pixels of vertical space.
* **When to use it:** Use px for strict structural spacing where you need exact control, such as fixed gaps or minor layout adjustments that shouldn't scale drastically.
* **The Accessibility Catch:** Pixels do not scale if a visually impaired user increases their browser's default font size. Therefore, they should generally be avoided for typography.

### Root Em (`rem`)
`rem` is a relative unit that stands for "Root Em." It is relative to the *root* font size of the web page (which is usually determined by the user's operating system or browser settings, typically defaulting to 16px).

* **How it works:** If the browser default is 16px, 1rem equals 16px, 1.5rem equals 24px, and 0.875rem equals 14px.
* **When to use it:** `rem` is the gold standard for **Typography**. By using `rem` for font sizes (e.g., Label Font Size: 1.25rem), you ensure that if a respondent increases their system font size for readability, your survey text scales proportionally and accessibly.

### Em (`em`)
`em` is also a relative unit, but instead of being relative to the *root* font size, it is relative to the font size of its *parent* element.

* **How it works:** If a section has a font size of 20px, setting a margin of 2em inside that section will result in a 40px margin.
* **When to use it:** Use `em` when you want spacing (like margins or padding) to scale proportionally with the surrounding text. For instance, if you want the gap below a heading to always be exactly twice the size of the heading's text, use `em`.

### Percentages (`%`)
Percentages are relative to the size of the parent container.

* **How it works:** Setting Page Max Width to 80% means the page will always take up 80% of the available screen width.
* **When to use it:** Use `%` for fluid, responsive layouts. It ensures that elements shrink or grow organically depending on whether the respondent is using a large desktop monitor or a narrow mobile phone.

## Best Practices for Accessible Surveys

1. **Always use `rem` for Font Sizes:** Accessible Surveys enforces this. Using `rem` respects the respondent's device preferences and is a cornerstone of digital accessibility.
2. **Mix and Match for Layouts:** A robust survey design often uses `%` for widths (to adapt dynamically to screen sizes) and `rem` or `px` for gaps and padding (to maintain readable whitespace).
