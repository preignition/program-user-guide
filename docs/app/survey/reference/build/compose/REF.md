# Reference

## Account Email - reference documentation

- [account-email.ts](../../../../../app/app-survey/renderer/field/account-email.ts): The implementation of the Account Email component, handling Firebase Auth synchronization and verification loops.
- [fieldSettings.ts](../../../../../app/app-survey/src/entity/question/fieldSettings.ts): Configuration of UI settings and icons for the account email field.
- [question-config.ts](../../../../../app/app-survey/src/entity/question/question-config.ts): Registration of the accountEmail question type.
- [field-abstract.ts](../../../../../app/app-survey/renderer/field-abstract.ts): Base logic for pre-filling field values from the user account.

## Pattern Validation - Question Settings

- [pattern-text-field.ts](../../../../../lit-app/cmp/field/textfield/pattern-text-field.ts): Web component extending `LappFilledTextField` to perform strict regex validation on the pattern input field, using the browser's native `v` flag.
- [QuestionE.ts](../../../../../app/app-survey/src/entity/QuestionE.ts): Base question entity schema defining the standard question settings, including the `pattern` attribute and its custom renderer using `pattern-text-field.ts`.
- [BuildTel.ts](../../../../../app/app-survey/src/entity/question/settings/BuildTel.ts): Settings override for Telephone questions, customizing the placeholder pattern.

## Email Purposes - Question Settings

- [email.ts](../../../../../lit-app/schema/survey/email.ts): The purpose vocabulary (`dataset`, `confirmation`, `reminder`, `account-verification`) and the resolver that decides whether an email value belongs in the datasets.
- [QuestionE.ts](../../../../../app/app-survey/src/entity/QuestionE.ts): The question entity's `build.purposes` setting and its multi-select picker.
- [BuildQuestion.ts](../../../../../app/app-survey/src/entity/settings/BuildQuestion.ts): Renders the Email Purposes section for email fields in advanced mode.
- [survey.ts](../../../../../lit-app/schema/survey/survey.ts): The survey-level `defaultEmailPurposes` an email field without its own purposes follows.
- [storeRespondentData.ts](../../../../../app/app-survey/functions/src/service/storeRespondentData.ts): The submission pipeline's dataset filter — operational-only email values stay out of `raw`, `humanized` and `anonymized`.

## Label Length - Question Settings

- [BuildQuestion.ts](../../../../../app/app-survey/src/entity/settings/BuildQuestion.ts): Question builder settings that apply a `maxLength` of `defaultMaxLength` (80) to the question label when the form-level Accessible Label setting is off.
- [config.ts](../../../../../app/app-survey/src/config.ts): Defines `defaultMaxLength = 80`.
- [FormE.ts](../../../../../app/app-survey/src/entity/FormE.ts): Form entity defining the `questionSettings.accessibleLabel` global setting.
- [behavior.ts](../../../../../app/app-survey/src/page/edit/design/behavior.ts): Renders the Accessible Label toggle under Form Behavior → Accessibility → Global Form Settings.
