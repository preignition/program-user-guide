---
description: Learn how to create and customize a standalone theme for your surveys to ensure brand consistency.
---

# How to create a theme

Creating a custom theme allows you to define specific colors, typography, and layout settings that can be reused across all your surveys. This ensures brand consistency and provides an easy way to customize the user interface.

> [!TIP]
> If you want to learn more about the science behind our color engine and the semantic roles of each color (Primary, Secondary, Surface, etc.), please read our [Explanation of the Color System](../explanation/color-system.md).

## Step 1: Edit Theme Settings

Navigate to your customer organization settings and select the option to manage themes.

<figure>
  <img src="./assets/create-theme/step-1-open-theme-settings.png" alt="Open theme settings">
  <figcaption>Select the theme settings option from the navigation menu.</figcaption>
</figure>

Click on the button to add or edit a theme.

<figure>
  <img src="./assets/create-theme/step-1-edit.png" alt="Edit theme settings">
  <figcaption>Navigate to the theme editor to begin customizing.</figcaption>
</figure>

## Step 2: Choose a Seed Color

The easiest way to start is by selecting a base "seed color" for your brand. This primary color will be used to automatically generate a harmonious color palette for your theme.

<figure>
  <img src="./assets/create-theme/step-2-seed-color.png" alt="Select a seed color">
  <figcaption>Select your primary brand color to generate a palette.</figcaption>
</figure>

You can use the color picker to select the exact hue you need. The system will automatically ensure that the generated colors meet WCAG AA contrast requirements.

<figure>
  <img src="./assets/create-theme/step-2-seed-color-picker.png" alt="Color picker">
  <figcaption>Use the color picker for precise color selection.</figcaption>
</figure>

## Step 3: Customize Theme Colors

Once your initial palette is generated, you can fine-tune specific color assignments to match your exact brand requirements.

<figure>
  <img src="./assets/create-theme/step-3-customize-theme.png" alt="Customize theme colors">
  <figcaption>Review and adjust the generated theme colors.</figcaption>
</figure>

You can adjust properties like hue and chroma (color intensity) using the provided sliders.

<div style="display: flex; flex-direction: row; gap: 20px;">
<figure>
  <img src="./assets/create-theme/step-3-hue-slider.png" alt="Adjust hue slider">
  <figcaption>Fine-tune the color hue.</figcaption>
</figure>
<figure>
  <img src="./assets/create-theme/step-3-chroma-slider.png" alt="Adjust chroma slider">
  <figcaption>Adjust the color intensity (chroma).</figcaption>
</figure>
</div>

You can also explicitly define surface colors and background contrasts. Expanding the surface colors section gives you full control over the background elements of your surveys.

<div style="display: flex; flex-direction: row; gap: 20px;">
<figure>
  <img src="./assets/create-theme/step-3-surface-colors.png" alt="Surface colors settings">
  <figcaption>Configure surface colors.</figcaption>
</figure>
<figure>
  <img src="./assets/create-theme/step-3-surface-colors-expanded.png" alt="Expanded surface colors">
  <figcaption>Expand for detailed surface color control.</figcaption>
</figure>
</div>

## Step 4: Review Contrast Settings

Accessibility is a key part of custom themes. The editor provides built-in contrast checking to ensure your text (`onSurface`) remains legible against your background (`surface`) colors.

<figure>
  <img src="./assets/create-theme/step-2-contrast-settings.png" alt="Contrast settings and warnings">
  <figcaption>Review contrast settings to ensure accessibility compliance.</figcaption>
</figure>

> [!WARNING]
> The editor will display warnings if your chosen color combinations fall below the minimum 3:1 contrast ratio required for WCAG AA compliance.

## Step 5: Save and Activate

After reviewing your color applications and ensuring your theme looks correct across different elements, save your changes.

<figure>
  <img src="./assets/create-theme/step-3-apply-color.png" alt="Apply color changes">
  <figcaption>Apply your finalized color selections.</figcaption>
</figure>

<figure>
  <img src="./assets/create-theme/step-4-activate-theme.png" alt="Activate theme">
  <figcaption>Set the theme as active.</figcaption>
</figure>

Finally, click the **Save** button to store your new theme. It will now be available to select when creating or editing surveys.

<figure>
  <img src="./assets/create-theme/step-5-save-theme.png" alt="Save the new theme">
  <figcaption>Save your theme so it can be applied to surveys.</figcaption>
</figure>
