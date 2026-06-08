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

## Creating a new survey - creating-a-new-survey

- [app/app-survey/src/dialog/dialog-survey-create.ts](../../../../../accessibleData/app/app-survey/src/dialog/dialog-survey-create.ts): Implementation of the wizard dialog for creating a new survey, including selecting the form type.
- [app/app-survey/src/dialog/dialog-form-create.ts](../../../../../accessibleData/app/app-survey/src/dialog/dialog-form-create.ts): Sub-dialog containing the form creation fields (e.g., empty form details, prompt field, file uploader).

## Editing a Survey - Short Title

- [packages/pwi-resource/src/edit/page/resource-edit-page.ts](../../../../../accessibleData/packages/pwi-resource/src/edit/page/resource-edit-page.ts): Renders the page editor UI; conditionally shows the short title field when the main title exceeds the character threshold or a short title already exists.
- [app/app-survey/src/entity/PageE.ts](../../../../../accessibleData/app/app-survey/src/entity/PageE.ts): Page entity definition; defines the `shortHeading` locale model with a `maxLength` of 30.
- [packages/preignition-form/src/data-entry.js](../../../../../accessibleData/packages/preignition-form/src/data-entry.js): Form data entry component; uses `shortTitle || title` for the navigation drawer menu labels.
