# Reference

## Adding an accessibility menu - adding-an-accessibility-menu

- [app/a11y/src/a11y-menu.ts](../../../../../accessibleData/app/a11y/src/a11y-menu.ts): Implementation of the `a11y-menu` custom element.
- [lit-app/cmp/field/md/md-editor.ts](../../../../../accessibleData/lit-app/cmp/field/md/md-editor.ts): Markdown editor where the `a11y-menu` tag can be inserted.
- [app/a11y/docs/custom-elements.json](../../../../../accessibleData/app/a11y/docs/custom-elements.json): Documentation metadata for the `a11y-menu` component.

## Using Easy Read - use-easy-read

- [app/app-survey/renderer/mixin/easyread-mixin.ts](../../../../../accessibleData/app/app-survey/renderer/mixin/easyread-mixin.ts): Core logic for handling Easy Read mode in the survey renderer.
- [packages/pwi-resource/src/edit/question/render-util-mixin-easy.ts](../../../../../accessibleData/packages/pwi-resource/src/edit/question/render-util-mixin-easy.ts): Mixin for rendering Easy Read specific UI elements in the question editor.

## Using Sign Language - use-sign-language

- [app/app-survey/renderer/mixin/signlanguage-mixin.ts](../../../../../accessibleData/app/app-survey/renderer/mixin/signlanguage-mixin.ts): Core logic for rendering sign language videos in the survey.
- [app/app-survey/src/entity/holder/signlanguage.ts](../../../../../accessibleData/app/app-survey/src/entity/holder/signlanguage.ts): Editor UI for adding sign language videos and managing visibility.

## Using tooltips - use-tooltips

- [lit-app/cmp/tooltip/tooltip.ts](../../../../../accessibleData/lit-app/cmp/tooltip/tooltip.ts): Implementation of the `lapp-tooltip` custom element.
- [lit-app/cmp/field/md/md-editor.ts](../../../../../accessibleData/lit-app/cmp/field/md/md-editor.ts): Markdown editor configuration where the tooltip formatting is defined.

## Randomizing items - randomizing-items

- [app/app-survey/schema/survey.ts](../../../../../accessibleData/app/app-survey/schema/survey.ts): Schema definition for the `randomize` property at the survey level.
- [app/app-survey/schema/page.ts](../../../../../accessibleData/app/app-survey/schema/page.ts): Schema definition for randomization and fixed properties at the page level.
- [app/app-survey/schema/section.ts](../../../../../accessibleData/app/app-survey/schema/section.ts): Schema definition for randomization and fixed properties at the section level.
- [app/app-survey/schema/question.ts](../../../../../accessibleData/app/app-survey/schema/question.ts): Schema definition for randomization and fixed properties at the question level.
- [lit-app/shared/dataUtils/random.ts](../../../../../accessibleData/lit-app/shared/dataUtils/random.ts): Core logic for stable, seeded shuffling of items.
- [app/app-respondent/src/randomizeBuild.ts](../../../../../accessibleData/app/app-respondent/src/randomizeBuild.ts): Application logic that applies randomization to the survey build for respondents.

## Understanding Randomization - understanding-randomization

- [lit-app/shared/dataUtils/random.ts](../../../../../accessibleData/lit-app/shared/dataUtils/random.ts): Implementation of the Mulberry32 PRNG and seeded Fisher-Yates shuffle.

## Providing Rich Formatting - providing-rich-formatting.md

- [lit-app/cmp/field/md/md-editor.ts](../../../../../accessibleData/lit-app/cmp/field/md/md-editor.ts): Implementation of the theme-aware actions in the Markdown editor.
- [lit-app/shared/md/marked.ts](../../../../../accessibleData/lit-app/shared/md/marked.ts): Extension for parsing triple-colon directives and image attributes.
- [lit-app/shared/styles/class/show-when-accessibility.ts](../../../../../accessibleData/lit-app/shared/styles/class/show-when-accessibility.ts): CSS classes for conditional visibility.

## Styling a Survey - styling-a-survey

- [app/app-survey/schema/theme.ts](../../../../../accessibleData/app/app-survey/schema/theme.ts): Schema definition for font and spacing scaling factors and individual style tokens.
- [app/app-survey/renderer/style.ts](../../../../../accessibleData/app/app-survey/renderer/style.ts): CSS implementation of the scaling logic using global multipliers.
- [app/app-survey/src/page/edit/design/behavior.ts](../../../../../accessibleData/app/app-survey/src/page/edit/design/behavior.ts): Editor UI for configuring style tokens and scaling factors.

## Sharing a Section - how-to-share-section

- [app/app-survey/schema/section.ts](../../../../../accessibleData/app/app-survey/schema/section.ts): Schema definition for section scopes (`team`, `customer`, `global`), publish metadata, response keying, prefill modes, and freeze settings.
- [app/app-survey/src/entity/SectionE.ts](../../../../../accessibleData/app/app-survey/src/entity/SectionE.ts): Section entity model definition and action bindings.
- [app/app-survey/src/entity/settings/BuildSection.ts](../../../../../accessibleData/app/app-survey/src/entity/settings/BuildSection.ts): Settings panel UI for sharing controls, response keying, prefill modes, and freeze toggles in Advanced Mode.
- [app/app-survey/src/cmp/section-library.ts](../../../../../accessibleData/app/app-survey/src/cmp/section-library.ts): Tabbed Section Library component for browsing and dragging sections across scopes.
- [app/app-survey/src/helper/sectionLibrary.ts](../../../../../accessibleData/app/app-survey/src/helper/sectionLibrary.ts): Collection-group queries and live-reference parent tracking helpers.
- [app/app-survey/src/entity/action/publish.ts](../../../../../accessibleData/app/app-survey/src/entity/action/publish.ts): Action and confirmation dialog flow for publishing sections to customer or global scopes.
- [app/app-survey/src/entity/action/unpublish.ts](../../../../../accessibleData/app/app-survey/src/entity/action/unpublish.ts): Action and confirmation dialog flow for unpublishing sections while keeping existing live embeds intact.
- [app/app-survey/src/entity/action/embedSection.ts](../../../../../accessibleData/app/app-survey/src/entity/action/embedSection.ts): Context-menu embed action and library selection dialog for form pages.
- [app/app-survey/src/entity/action/embedDialog.ts](../../../../../accessibleData/app/app-survey/src/entity/action/embedDialog.ts): Reusable dialog for choosing between Live Reference and Copy embedding.
- [app/app-survey/renderer/dd-wrapper.ts](../../../../../accessibleData/app/app-survey/renderer/dd-wrapper.ts): Canvas drag-and-drop handler supporting section library drops.
- [app/app-survey/renderer/section-wrapper.ts](../../../../../accessibleData/app/app-survey/renderer/section-wrapper.ts): Respondent section wrapper handling quiet, review, and interstitial prefill modes with response keying.
- [app/app-survey/actionApi/src/services/sectionCopyService.ts](../../../../../accessibleData/app/app-survey/actionApi/src/services/sectionCopyService.ts): Server-side deep-copy service replicating section subtrees and accessibility subdocuments.
- [app/app-survey/actionApi/src/services/sectionDeleteService.ts](../../../../../accessibleData/app/app-survey/actionApi/src/services/sectionDeleteService.ts): Server-side reference tracking and automatic live-reference conversion upon section deletion.
- [app/app-survey/actionApi/src/services/buildFetcher.ts](../../../../../accessibleData/app/app-survey/actionApi/src/services/buildFetcher.ts): Build pipeline resolving out-of-form accessibility and locale assets for live-referenced sections.
