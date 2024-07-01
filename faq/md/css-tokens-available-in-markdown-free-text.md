# CSS tokens available in Markdown Free Text

The following CSS tokens are available in Markdown Free Text:

They can either be used in the `style` tag for a class or in inline css.


## Color

Color system is inspired from [Material Design color system](https://m3.material.io/styles/color/the-color-system/key-colors-tones).

Using color tokens instead of hard-coded colors will ensure that the color is coherent with the current theme, or that it will also work in dark mode.

### Main colors
| Token |  Description | Result |
| ----- | ------------ | ------- |
| `--color-primary` | Primary color of the theme | <div style="background: var(--color-primary); width: 20px; height: 20px;"> |
| `--color-on-primary` | Color to apply on Primary color | <div style="background: var(--color-on-primary); width: 20px; height: 20px;"> |
| `--color-primary-container` | Primary Container color of the theme | <div style="background: var(--color-primary-container); width: 20px; height: 20px;"> |
| `--color-on-primary-container` | Color to apply on Primary Container color | <div style="background: var(--color-on-primary-container); width: 20px; height: 20px;"> |
| `--color-secondary` | Secondary color of the theme | <div style="background: var(--color-secondary); width: 20px; height: 20px;"> |
| `--color-on-secondary` | Color to apply on Secondary color | <div style="background: var(--color-on-secondary); width: 20px; height: 20px;"> |
| `--color-secondary-container` | Secondary Container color of the theme | <div style="background: var(--color-secondary-container); width: 20px; height: 20px;"> |
| `--color-on-secondary-container` | Color to apply on Secondary Container color | <div style="background: var(--color-on-secondary-container); width: 20px; height: 20px;"> |
| `--color-tertiary` | Tertiary color of the theme | <div style="background: var(--color-tertiary); width: 20px; height: 20px;"> |
| `--color-on-tertiary` | Color to apply on Tertiary color | <div style="background: var(--color-on-tertiary); width: 20px; height: 20px;"> |
| `--color-tertiary-container` | Tertiary Container color of the theme | <div style="background: var(--color-tertiary-container); width: 20px; height: 20px;"> |
| `--color-on-tertiary-container` | Color to apply on Tertiary Container color | <div style="background: var(--color-on-tertiary-container); width: 20px; height: 20px;"> |

### Status colors
| Token |  Description | Result |
| ----- | ------------ | ------- |
| `--color-error` | Error color of the theme |  <div style="background: var(--color-error); width: 20px; height: 20px;"> | 
| `--color-on-error` | Color to apply on Error color |  <div style="background: var(--color-on-error); width: 20px; height: 20px;"> | 
| `--color-error-container` | Error Container color of the theme |  <div style="background: var(--color-error-container); width: 20px; height: 20px;"> | 
| `--color-on-error-container` | Color to apply on Error Container color |  <div style="background: var(--color-on-error-container); width: 20px; height: 20px;"> | 
| `--color-success` | Success color of the theme |  <div style="background: var(--color-success); width: 20px; height: 20px;"> | 
| `--color-on-success` | Color to apply on Success color |  <div style="background: var(--color-on-success); width: 20px; height: 20px;"> | 
| `--color-success-container` | Success Container color of the theme |  <div style="background: var(--color-success-container); width: 20px; height: 20px;"> | 
| `--color-on-success-container` | Color to apply on Success Container color |  <div style="background: var(--color-on-success-container); width: 20px; height: 20px;"> | 
| `--color-warning` | Warning color of the theme |  <div style="background: var(--color-warning); width: 20px; height: 20px;"> | 
| `--color-on-warning` | Color to apply on Warning color |  <div style="background: var(--color-on-warning); width: 20px; height: 20px;"> | 
| `--color-warning-container` | Warning Container color of the theme |  <div style="background: var(--color-warning-container); width: 20px; height: 20px;"> | 
| `--color-on-warning-container` | Color to apply on Warning Container color |  <div style="background: var(--color-on-warning-container); width: 20px; height: 20px;"> | 

### Neutral colors
| Token |  Description | Result |
| ----- | ------------ | ------ |
| `--color-outline` | Color to use for outlines |  <div style="background: var(--color-outline); width: 20px; height: 20px;"> |
| `--color-surface` | Color to use for surface |  <div style="background: var(--color-surface); width: 20px; height: 20px;"> |
| `--color-on-surface` | Color to apply on surface |  <div style="background: var(--color-on-surface); width: 20px; height: 20px;"> |
| `--color-surface-variant` | Variant Color to use for surface |  <div style="background: var(--color-surface-variant); width: 20px; height: 20px;"> |
| `--color-on-surface-variant` | Color to apply on surface variant |  <div style="background: var(--color-on-surface-variant); width: 20px; height: 20px;"> |
| `--color-background` | Color to use for background |  <div style="background: var(--color-background); width: 20px; height: 20px;"> |
| `--color-on-background` | Color to apply on background |  <div style="background: var(--color-on-background); width: 20px; height: 20px;"> |
| `--color-surface-container` | Color to use for surface container |  <div style="background: var(--color-surface-container); width: 20px; height: 20px;"> |
| `--color-on-surface-container` | Color to apply on surface container |  <div style="background: var(--color-on-surface-container); width: 20px; height: 20px;"> |

## Space

| Token |  Description | Default value |
| ----- | ------------ | ------------- |
| `--space-xxx-small` | Very Small space | `2px` |
| `--space-xx-small` | Small space | `4px` |
| `--space-x-small` | Small space | `8px` |
| `--space-small` | Small space | `12px` |
| `--space-medium` | Medium space | `16px` |
| `--space-large` | Large space | `20px` |
| `--space-x-large` | Extra large space | `28px` |
| `--space-xx-large` | Extra extra large space | `36px` |
| `--space-xxx-large` | Extra extra extra large space | `48px` |

## Font-size

| Token |  Description | Default value |
| ----- | ------------ | ------------- |
| `--font-size-x-small` | Very Small font size | `0.75rem` |
| `--font-size-small` | Small font size | `0.875rem` |
| `--font-size-medium` | Medium font size | `1rem` |
| `--font-size-large` | Large font size | `1.25rem` |
| `--font-size-x-large` | Extra large font size | `1.5rem` |
| `--font-size-xx-large` | Extra extra large font size | `2.25rem` |
| `--font-size-xxx-large` | Extra extra extra large font size | `3rem` |


## Font-weight

| Token |  Description | Default value |
| ----- | ------------ | ------------- |
| `--font-weight-thin` | Light font weight | `200` |
| `--font-weight-normal` | Light font weight | `400` |
| `--font-weight-semi-bold` | Light font weight | `500` |
| `--font-weight-bold` | Light font weight | `700` |
| `--font-weight-extra-bold` | Light font weight | `800` |



