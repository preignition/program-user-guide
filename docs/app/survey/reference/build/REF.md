# Reference

## Behavior Reference - behavior

- [app/app-survey/src/page/edit/design/behavior.ts](../../../../../../app/app-survey/src/page/edit/design/behavior.ts): Main component managing Accessibility, Layout, and Style configuration.
- [app/app-survey/src/page/edit/design/scale-card.ts](../../../../../../app/app-survey/src/page/edit/design/scale-card.ts): UI scale card component for adjusting master Base Font Size and Spacing Scale.
- [lit-app/schema/survey/theme.ts](../../../../../../lit-app/schema/survey/theme.ts): Definition of the design token system and scaling infrastructure.
- [app/app-survey/renderer/style.ts](../../../../../../app/app-survey/renderer/style.ts): Global CSS variables and scaling multipliers for the survey renderer.
- [app/app-survey/src/i18n/behavior.ts](../../../../../../app/app-survey/src/i18n/behavior.ts): Internationalization labels and descriptions for behavior settings.

## Review Reference - review

- [app/app-survey/src/page/edit/design/review.ts](../../../../../../app/app-survey/src/page/edit/design/review.ts): The Review panel component: header, filters, list/detail, run affordance and finding actions.
- [app/app-survey/src/page/edit/design/review-view.ts](../../../../../../app/app-survey/src/page/edit/design/review-view.ts): The panel's presentation model: open/dismissed/applied views, severity and family filters, grouping and item labels.
- [app/app-survey/src/page/edit/design/review-actions.ts](../../../../../../app/app-survey/src/page/edit/design/review-actions.ts): The action table for each finding and its disabled reasons.
- [app/app-survey/src/page/edit/design/review-action-writes.ts](../../../../../../app/app-survey/src/page/edit/design/review-action-writes.ts): The writes behind apply, clear, translate, insert, dismiss and restore.
- [app/app-survey/src/page/edit/design/review-live.ts](../../../../../../app/app-survey/src/page/edit/design/review-live.ts): Rebuilds the live rule findings and prunes stale markers.
- [app/app-survey/src/page/edit/design/review-navigation.ts](../../../../../../app/app-survey/src/page/edit/design/review-navigation.ts): Marker-to-panel navigation, Compose deep links and run staleness.
- [app/app-survey/src/page/edit/design/review-availability.ts](../../../../../../app/app-survey/src/page/edit/design/review-availability.ts): Run availability and the AI-credit price text.
- [app/app-survey/src/i18n/review.ts](../../../../../../app/app-survey/src/i18n/review.ts): Review copy, including finding titles and actions.
- [app/app-survey/review/catalog.ts](../../../../../../app/app-survey/review/catalog.ts): Closed catalog of the five check families (structure, logic, translation, accessibility and content) and their payload schemas.
- [app/app-survey/review/checks/index.ts](../../../../../../app/app-survey/review/checks/index.ts): The rule check registry behind structure, logic, translation and accessibility findings.
- [app/app-survey/review/checks/accessibility.ts](../../../../../../app/app-survey/review/checks/accessibility.ts): Deterministic accessibility checks for plain-language readability, link text, question-control fit and WCAG AA theme contrast.
- [lit-app/shared/color/contrastRatio.ts](../../../../../../lit-app/shared/color/contrastRatio.ts): Shared WCAG 2.x relative-luminance contrast ratio helper used by the theme contrast check.
- [app/app-survey/actionApi/src/services/reviewService.ts](../../../../../../app/app-survey/actionApi/src/services/reviewService.ts): The review run lifecycle and model-finding mapping.
- [app/app-survey/actionApi/src/ai/review.ts](../../../../../../app/app-survey/actionApi/src/ai/review.ts): The model review prompt, input serializer and output schema (including `accessibility.clarity`).
