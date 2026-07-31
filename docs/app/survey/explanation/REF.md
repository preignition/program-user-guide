# Reference

## Confidence Index - Explanation

- [app/app-respondent/src/init/respondent-presence.ts](../../../../../../accessibleData/app/app-respondent/src/init/respondent-presence.ts): Core logic for streaming respondent presence and behavioral events to RTDB.
- [app/app-survey/renderer/machine/form.ts](../../../../../../accessibleData/app/app-survey/renderer/machine/form.ts): Instrumentation of the form state machine to emit page and value change events.
- [app/app-survey/functions/src/cls/store-respondent-data-mixin.ts](../../../../../../accessibleData/app/app-survey/functions/src/cls/store-respondent-data-mixin.ts): Backend logic for aggregating behavioral logs and calculating the Confidence Index score during submission.
- [functions/src/jobs/handlers/respondentDropOff.ts](../../../../../../accessibleData/functions/src/jobs/handlers/respondentDropOff.ts): Scheduled job handler for processing abandoned sessions and storing drop-off metrics.

## Resuming Incomplete Surveys - Explanation

- [app/app-respondent/src/machine/survey.ts](../../../../../../accessibleData/app/app-respondent/src/machine/survey.ts): State machine managing checking open status, creating anonymous accounts, running stepper, and provisioning form actors.
- [app/app-respondent/src/machine/form.ts](../../../../../../accessibleData/app/app-respondent/src/machine/form.ts): Form state machine tracking question completion, page navigation, and answer states.
- [app/app-respondent/src/machine/actor/createFormActor.ts](../../../../../../accessibleData/app/app-respondent/src/machine/actor/createFormActor.ts): Instantiates and rehydrates form state actors via `ActorState.createActor`.
- [app/app-respondent/src/machine/actor/createAnonymousUser.ts](../../../../../../accessibleData/app/app-respondent/src/machine/actor/createAnonymousUser.ts): Dispatches anonymous authentication requests for unauthenticated respondents.
- [app/app-respondent/src/state.ts](../../../../../../accessibleData/app/app-respondent/src/state.ts): Restores respondent session state by querying Firestore (`fetchActor`) for existing actors matching `uid` and survey identifiers.
- [app/app-base/src/init/firebase-init.ts](../../../../../../accessibleData/app/app-base/src/init/firebase-init.ts): Initializes Firebase Auth and configures persistent credential storage in browser local storage / IndexedDB.
