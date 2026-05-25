# Reference

## Confidence Index - Explanation

- [app/app-respondent/src/init/respondent-presence.ts](../../../../../../accessibleData/app/app-respondent/src/init/respondent-presence.ts): Core logic for streaming respondent presence and behavioral events to RTDB.
- [app/app-survey/renderer/machine/form.ts](../../../../../../accessibleData/app/app-survey/renderer/machine/form.ts): Instrumentation of the form state machine to emit page and value change events.
- [app/app-survey/functions/src/cls/store-respondent-data-mixin.ts](../../../../../../accessibleData/app/app-survey/functions/src/cls/store-respondent-data-mixin.ts): Backend logic for aggregating behavioral logs and calculating the Confidence Index score during submission.
- [functions/src/jobs/handlers/respondentDropOff.ts](../../../../../../accessibleData/functions/src/jobs/handlers/respondentDropOff.ts): Scheduled job handler for processing abandoned sessions and storing drop-off metrics.
