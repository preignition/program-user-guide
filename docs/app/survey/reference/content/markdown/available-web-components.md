---
description: Reference for custom web components available within the Markdown Free Text editor.
---

# Available Web Components

The Markdown editor supports embedding specific custom HTML web components to provide advanced functionality, such as tooltips, videos, icons, and accessibility controls.

> **Note:** Web component tags **MUST** be explicitly closed (e.g., `<lapp-youtube videoid="..."></lapp-youtube>`). Self-closing tags or unclosed tags will not render correctly.

## Tooltips

Tooltips provide contextual information when hovered or focused.

### `<pwi-tooltip>`

A standard text tooltip.

**Example:**
```html
<pwi-tooltip message="This is the tooltip text" position="bottom">Hover over me</pwi-tooltip>
```

**Key Properties:**
*   `message` (string): The text to display inside the tooltip.
*   `position` (string): Preferred placement (`top`, `bottom`, `left`, `right`).
*   `fireonclick` (boolean): If `true`, activates the tooltip on click rather than hover.
*   `noIcon` (boolean): If `true`, hides the default info icon next to the slotted text.

### `<pwi-form-tooltip>`

A specialized tooltip designed to fetch and display glossary definitions for complex terms.

**Example:**
```html
<pwi-form-tooltip term="complex_term_id">Complex Term</pwi-form-tooltip>
```

**Key Properties:**
*   `term` (string): The unique ID of the glossary term to fetch.
*   `loadingMessage` (string): Text shown while the remote content is loading.

## Media & Icons

### `<lapp-youtube>`

Embeds a YouTube video efficiently. This is a wrapper around `lite-youtube` that automatically adds optimal default parameters (like preventing unrelated videos from playing afterwards).

**Example:**
```html
<lapp-youtube videoid="xVytWVHX4N0"></lapp-youtube>
```

**Key Properties:**
*   `videoid` (string): The unique YouTube video ID.
*   `playlabel` (string): Accessible label for the play button (default: "Play").
*   `params` (string): Additional YouTube player parameters (e.g., `start=10`).

### `<lapp-icon>`

Renders a standard Material Design icon. The text content inside the tag should be the name of the [Material Icon](https://fonts.google.com/icons).

**Example:**
```html
<lapp-icon>info</lapp-icon>
```

## Accessibility Controls

You can embed accessibility controls directly into the content flow.

### `<a11y-menu>`

Displays the full accessibility settings menu (theme, contrast, text size, easy read, read aloud, sign language).

**Example:**
```html
<a11y-menu context="survey"></a11y-menu>
```

**Key Properties:**
*   `context` (string): Setting this to `survey` or `form` ensures that survey-specific options (like Read Aloud and Sign Language) are visible.

### `<a11y-dialog-button>`

A button that opens the global accessibility settings dialog.

**Example:**
```html
<a11y-dialog-button outlined></a11y-dialog-button>
```

**Key Properties:**
*   `outlined` (boolean): Renders the button with an outline style.
*   `unelevated` (boolean): Renders the button with a flat, contained style.

### Individual Controls

For fine-grained layouts, individual accessibility toggles can be embedded separately:

*   `<a11y-easyread></a11y-easyread>`: Toggle Easy Read mode.
*   `<a11y-readaloud></a11y-readaloud>`: Toggle Read Aloud mode.
*   `<a11y-signlanguage></a11y-signlanguage>`: Toggle Sign Language mode.
*   `<a11y-theme></a11y-theme>`: Select from available color themes.
*   `<a11y-font></a11y-font>`: Adjust font size settings.

## System Guidance

Components that provide platform-level guidance on how to use the survey interface. These automatically adapt to the active language.

*   `<pfo-guidance></pfo-guidance>`: Displays text instructions on how to fill out forms.
*   `<pfo-guidance-video></pfo-guidance-video>`: Displays an instructional video on how to fill out forms.