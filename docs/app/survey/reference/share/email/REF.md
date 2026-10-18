# Reference

## Email Configuration - The Email Page

- [message.ts](../../../../../app/app-survey/src/page/edit/deploy/message.ts): The Email deploy page — default purposes, confirmation content per survey language, notice wording, sender identity and the preview.
- [email.ts](../../../../../lit-app/schema/survey/email.ts): The `email` configuration schema (`defaultPurposes`, `notices`, `confirmation`, `sender`), the purpose vocabulary and the notice defaults.
- [survey.ts](../../../../../lit-app/schema/survey/survey.ts): The survey document's `email` field.
- [SurveyE.ts](../../../../../app/app-survey/src/entity/SurveyE.ts): The survey entity whose `update`/`onInput` verbs the page writes with.
- [designState.ts](../../../../../app/app-survey/src/page/edit/design/state.ts): Supplies the survey's languages (`allLanguages`) and the survey document (`survey`) the page reads.
- [storeRespondentData.ts](../../../../../app/app-survey/functions/src/service/storeRespondentData.ts): The submission pipeline that reads `email.defaultPurposes` for its dataset filter.
- [BuildQuestion.ts](../../../../../app/app-survey/src/entity/settings/BuildQuestion.ts): The question settings that show the notice a field's purposes generate.
