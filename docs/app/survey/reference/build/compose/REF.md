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
