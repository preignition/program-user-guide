# Reference

## Info Boxes - info-boxes.md

- [lit-app/shared/md/marked.ts](../../../../../../../lit-app/shared/md/marked.ts): `:::` block directive extension of the shared `marked` parser — renders `::: <keyword>` blocks as `<div class="<keyword>">`.
- [lit-app/shared/styles/class/md-directive.ts](../../../../../../../lit-app/shared/styles/class/md-directive.ts): info-box styles for `div.info`, `div.success`, `div.warning`, `div.error` and `div.danger`, with the `--md-hint-*` override tokens.
- [lit-app/shared/styles/md.ts](../../../../../../../lit-app/shared/styles/md.ts): markdown style bundle including `mdDirective`.
- [lit-app/cmp/field/md/md-editor.ts](../../../../../../../lit-app/cmp/field/md/md-editor.ts): editor toolbar actions (`contentInfoHint`, `contentSuccessHint`, `contentWarningHint`) that insert the `:::` syntax.
- [lit-app/gitbook/src/hint.ts](../../../../../../../lit-app/gitbook/src/hint.ts): deprecated `<gitbook-hint>` web component, kept for existing content.
- [lit-app/shared/md/parseConfig.ts](../../../../../../../lit-app/shared/md/parseConfig.ts): DOMPurify allow-list that keeps `gitbook-hint` and the `class` attribute.
