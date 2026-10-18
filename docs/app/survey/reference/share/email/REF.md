# Reference

## Email Configuration - The Email Page

- [message.ts](../../../../../app/app-survey/src/page/edit/deploy/message.ts): The Email deploy page — default purposes, confirmation content per survey language, notice wording, sender identity and the preview.
- [email.ts](../../../../../lit-app/schema/survey/email.ts): The `email` configuration schema (`defaultPurposes`, `notices`, `confirmation`, `sender`), the purpose vocabulary and the notice defaults.
- [survey.ts](../../../../../lit-app/schema/survey/survey.ts): The survey document's `email` field.
- [SurveyE.ts](../../../../../app/app-survey/src/entity/SurveyE.ts): The survey entity whose `update`/`onInput` verbs the page writes with.
- [designState.ts](../../../../../app/app-survey/src/page/edit/design/state.ts): Supplies the survey's languages (`allLanguages`) and the survey document (`survey`) the page reads.
- [storeRespondentData.ts](../../../../../app/app-survey/functions/src/service/storeRespondentData.ts): The submission pipeline that reads `email.defaultPurposes` for its dataset filter and sends the confirmation.
- [sendConfirmation.ts](../../../../../app/app-survey/functions/src/service/sendConfirmation.ts): Sends one confirmation through the platform `MailService`; without a configured mail key it sends nothing.
- [server-config.ts](../../../../../app/app-survey/functions/src/server-config.ts): Declares the deployable's Mailgun keys; `MailService` is provided only when the key resolves.
- [BuildQuestion.ts](../../../../../app/app-survey/src/entity/settings/BuildQuestion.ts): The question settings that show the notice a field's purposes generate.
- [emailPurposes.ts](../../../../../app/app-survey/src/entity/question/emailPurposes.ts): The purposes an editor can choose for an email field.
- [respondentEmail.ts](../../../../../lit-app/schema/survey/respondentEmail.ts): The reminder consent records (`RespondentEmail`), their retention window and the opt-in callable's input/output schemas.
- [respondentEmail.ts](../../../../../app/app-survey/actionApi/src/services/respondentEmail.ts): The opt-in service: normalises the address and upserts one record per actor in the survey's customer database.
- [respondentEmail.ts](../../../../../app/app-survey/functions/src/respondentEmail.ts): The `survey-respondentEmailOptIn` callable the field calls.
- [respondent-email-optin.ts](../../../../../app/app-survey/renderer/field/respondent-email-optin.ts): The field's notice, consent checkbox, state read and inline feedback.
- [firestore.rules](../../../../../app/app-respondent/firestore.rules): The respondent-database rules for `survey/{surveyId}/respondentEmail` — server-written, read-own.
