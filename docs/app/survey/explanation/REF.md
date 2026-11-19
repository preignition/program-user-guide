# Reference

## Confidence Index - Explanation

- `app/app-respondent/src/init/respondent-presence.ts`: Core logic for streaming respondent presence and behavioral events to RTDB.
- `app/app-survey/renderer/machine/form.ts`: Instrumentation of the form state machine to emit page and value change events.
- `app/app-survey/functions/src/service/storeRespondentData.ts`: Submission pipeline: stores the responses, aggregates the behavioral logs and computes the Confidence Index.
- `functions/src/jobs/handlers/respondentDropOff.ts`: Scheduled job handler for processing abandoned sessions and storing drop-off metrics.

## Resuming Incomplete Surveys - Explanation

- `app/app-respondent/src/machine/survey.ts`: State machine managing checking open status, creating anonymous accounts, running stepper, and provisioning form actors.
- `app/app-respondent/src/machine/form.ts`: Form state machine tracking question completion, page navigation, and answer states.
- `app/app-respondent/src/machine/actor/createFormActor.ts`: Instantiates and rehydrates form state actors via `ActorState.createActor`.
- `app/app-respondent/src/machine/actor/createAnonymousUser.ts`: Dispatches anonymous authentication requests for unauthenticated respondents.
- `app/app-respondent/src/state.ts`: Restores respondent session state by querying Firestore (`fetchActor`) for existing actors matching `uid` and survey identifiers.
- `app/app-base/src/init/firebase-init.ts`: Initializes Firebase Auth and configures persistent credential storage in browser local storage / IndexedDB.

## Understanding Section Sharing & Reusability - understanding-section-sharing

- `lit-app/schema/survey/section.ts`: Schema definition for section scopes (`team`, `customer`, `global`), `storeType` response keying (`user`, `organisation`, `survey`), prefill modes (`quiet`, `review`, `interstitial`), and freeze flags.
- `app/app-survey/renderer/section-wrapper.ts`: Core respondent-side implementation of smart prefill modes (`quiet`, `review`, `interstitial`) and decoupled response store paths.
- `app/app-survey/renderer/getSectionPath.ts`: Keying logic mapping `user`, `organisation`, and `survey` store types to Firestore document paths.
- `app/app-survey/actionApi/src/services/sectionCopyService.ts`: Deep copy service replicating complete section subtrees, question items, and localized/accessibility subdocuments.
- `app/app-survey/actionApi/src/services/sectionDeleteService.ts`: Implementation of the zero-dangle safety invariant, automatically converting live references into independent copies upon section deletion.
- `app/app-survey/actionApi/src/services/buildFetcher.ts`: Build pipeline discovering live-referenced sections across forms and resolving their out-of-form Sign Language, Easy Read, audio, and translation maps.

## Producing Surveys in Plain Language or Easy Read - producing-plain-language-easy-read

- `app/app-survey/src/entity/settings/BuildQuestion.ts`: UI controls for configuring Easy Read media and simplified text labels.
- `app/app-survey/renderer/mixin/easyread-mixin.ts`: Renderer mixin managing the presentation of Easy Read cards and visual aids.

## Producing Surveys in Sign Languages - producing-sign-language

- `app/app-survey/src/page/edit/deploy/link-builder.ts`: Sign language dialect options and link pre-selection.
- `app/app-survey/renderer/mixin/signlanguage-mixin.ts`: Renderer mixin managing the playback and positioning of sign language video components.

## GDPR Compliance and Survey Privacy - gdpr-compliance

- `app/app-survey/src/page/analyze/analyze-session-mixin.ts`: Export dataset compliance controls, anonymization switches, and data protection warnings.

## Writing a Survey Privacy Policy - writing-a-privacy-policy

- `app/app-survey/src/page/edit/deploy/terms.ts`: Setting up survey terms, consent prompts, and privacy policy links.

## Choosing a Form Layout for Cognitive Accessibility - choosing-a-form-layout

- `app/app-survey/renderer/form-abstract.ts`: One-question-at-a-time grouping rules, including `End Page` anchors and section boundaries.
- `app/app-survey/src/page/edit/design/behavior.ts`: Presentation mode labels and layout controls.
- `app/app-survey/renderer/style.ts`: Default typography for the single-question presentation mode.
