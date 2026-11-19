---
description: Reference for custom web components and HTML tags permitted in the Markdown editor.
---

# Available Web Components

The Markdown editor allows embedding specific custom web components to provide interactive functionality, including tooltips, embedded videos, icons, action buttons, and accessibility controls.

::: warning Explicitly Closed Tags
Web component tags **MUST** be explicitly closed (e.g., `<lite-youtube videoid="..."></lite-youtube>`). Self-closing syntax (`<lite-youtube />`) is not supported by standard HTML parsers and will break layout rendering.
:::

## Tooltips

Tooltips explain complex words, jargon, or acronyms to respondents inline. Content is sanitized using an allow-list; only the following attributes are supported:

### `<lapp-tooltip>`

Wraps a term or phrase to display an explanatory popover when clicked or hovered:

- **`term` (string):** References an existing glossary item configured in the survey. The popover displays the definition associated with that glossary key.
- **`text` (string):** Directly provides an inline explanation string for the tooltip popover.

**Examples:**

```html
<!-- Tooltip referencing a survey glossary definition -->
<lapp-tooltip term="reasonable-accommodation">Reasonable accommodation</lapp-tooltip>

<!-- Tooltip with inline definition text -->
<lapp-tooltip text="A structured questionnaire component that groups related questions.">Section</lapp-tooltip>
```

## Action Buttons

Standard Material Design action buttons can be embedded inside introduction pages or custom Markdown text blocks:

- **`<md-filled-button>`**: High-emphasis filled action button.
- **`<md-outlined-button>`**: Medium-emphasis outlined action button.
- **`<md-text-button>`**: Low-emphasis text action button.

**Example:**

```html
<md-filled-button href="https://example.org">Start Assessment</md-filled-button>
<md-outlined-button href="https://example.org/guide">Read Guidelines</md-outlined-button>
```

## Media & Icons

### `<lite-youtube>`

Embeds a YouTube video using a lightweight facade for optimal performance:

- **`videoid` (string, required):** The unique YouTube video ID.
- **`playlabel` (string):** Accessible label for screen readers (default: "Play").
- **`params` (string):** Optional YouTube player query parameters (e.g., `start=15`).

**Example:**

```html
<lite-youtube videoid="xVytWVHX4N0"></lite-youtube>
```

### `<lapp-icon>`

Renders a standard Material Symbols icon. Place the icon identifier as the text content:

- **`no-fill` (boolean):** Renders the outlined glyph variant instead of the filled variant.

**Example:**

```html
<lapp-icon>info</lapp-icon>
<lapp-icon no-fill>visibility</lapp-icon>
```

## Accessibility Controls

Embed interactive accessibility controls directly into survey instructions or introduction pages:

### `<a11y-dialog-button>`

A button that opens the comprehensive accessibility settings dialog (theme, text size, Easy Read, Read Aloud, Sign Language):

- **`outlined` (boolean):** Renders as an outlined button.
- **`filled` (boolean):** Renders as a filled button.

**Example:**

```html
<a11y-dialog-button outlined></a11y-dialog-button>
```

### `<a11y-menu>`

Renders an inline accessibility configuration toolbar:

- **`context` (string):** Set to `survey` to include survey-specific options (Read Aloud and Sign Language).

**Example:**

```html
<a11y-menu context="survey"></a11y-menu>
```

### Individual Accessibility Toggles

- `<a11y-easyread></a11y-easyread>`: Toggle Easy Read mode on or off.
- `<a11y-readaloud></a11y-readaloud>`: Toggle Read Aloud text-to-speech.
- `<a11y-signlanguage></a11y-signlanguage>`: Toggle Sign Language video display.
- `<a11y-theme></a11y-theme>`: Select from available light, dark, and high-contrast color themes.
- `<a11y-font></a11y-font>`: Adjust typographic scale and zoom levels.

## System Guidance

Platform-level instructional widgets that automatically adapt to the respondent's active language:

- `<pfo-guidance></pfo-guidance>`: Displays accessible text instructions on navigating and submitting forms.
- `<pfo-guidance-video></pfo-guidance-video>`: Displays an instructional video on completing survey forms.

## Related Content

- [Using Tooltips How-to Guide](../../../how-to/use-tooltips.md) — Step-by-step glossary and tooltip authoring
- [Markdown Reference Index](./index.md) — Rich text syntax and class directives
- [Visibility Control Reference](./visibility-control.md) — Mode-based display classes
