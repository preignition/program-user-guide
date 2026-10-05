# Reference

## Markdown Rich Text Editor - md-editor.md

- [lit-app/cmp/field/md/md-editor.ts](../../../lit-app/cmp/field/md/md-editor.ts): Main component for the Markdown editor, including toolbar and theme actions (info boxes are inserted as `:::` directives).
- [lit-app/shared/md/marked.ts](../../../lit-app/shared/md/marked.ts): Configuration for the 'marked' parser, including custom extensions for block directives (theme-aware and info boxes) and attributes.
- [lit-app/shared/styles/class/md-directive.ts](../../../lit-app/shared/styles/class/md-directive.ts): Info-box styles for the `:::` directive classes (`info`, `success`, `warning`, `error`, `danger`).
- [lit-app/shared/md/parse.ts](../../../lit-app/shared/md/parse.ts): Utility for parsing Markdown and sanitizing the resulting HTML.
- [lit-app/shared/styles/class/show-when-accessibility.ts](../../../lit-app/shared/styles/class/show-when-accessibility.ts): Global CSS classes for theme and accessibility visibility.
- [app/app-base/public/variables.css](../../../app/app-base/public/variables.css): Global CSS variables controlling the display of theme-aware content.
