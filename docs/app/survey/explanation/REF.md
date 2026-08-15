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

## Understanding Section Sharing & Reusability - understanding-section-sharing

- [app/app-survey/schema/section.ts](../../../../../../accessibleData/app/app-survey/schema/section.ts): Schema definition for section scopes (`team`, `customer`, `global`), `storeType` response keying (`user`, `organisation`, `survey`), prefill modes (`quiet`, `review`, `interstitial`), and freeze flags.
- [app/app-survey/renderer/section-wrapper.ts](../../../../../../accessibleData/app/app-survey/renderer/section-wrapper.ts): Core respondent-side implementation of smart prefill modes (`quiet`, `review`, `interstitial`) and decoupled response store paths.
- [app/app-survey/renderer/getSectionPath.ts](../../../../../../accessibleData/app/app-survey/renderer/getSectionPath.ts): Keying logic mapping `user`, `organisation`, and `survey` store types to Firestore document paths.
- [app/app-survey/actionApi/src/services/sectionCopyService.ts](../../../../../../accessibleData/app/app-survey/actionApi/src/services/sectionCopyService.ts): Deep copy service replicating complete section subtrees, question items, and localized/accessibility subdocuments.
- [app/app-survey/actionApi/src/services/sectionDeleteService.ts](../../../../../../accessibleData/app/app-survey/actionApi/src/services/sectionDeleteService.ts): Implementation of the zero-dangle safety invariant, automatically converting live references into independent copies upon section deletion.
- [app/app-survey/actionApi/src/services/buildFetcher.ts](../../../../../../accessibleData/app/app-survey/actionApi/src/services/buildFetcher.ts): Build pipeline discovering live-referenced sections across forms and resolving their out-of-form Sign Language, Easy Read, audio, and translation maps.
