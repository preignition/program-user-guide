# Reference

## Survey Analytics Workbench - survey

- [lit-app/analytics/src/workbench.ts](../../../../../../lit-app/analytics/src/workbench.ts): Analytics workbench element (`lapp-analytics-workbench`) — layout modes, multi-cube indexing, metadata card chooser, pinned grid, and the advanced-mode response selection and exclusion request plumbing.
- [lit-app/analytics/src/response-grid.ts](../../../../../../lit-app/analytics/src/response-grid.ts): Responses table element (`lapp-analytics-response-grid`) — row inspector, header filters, the advanced-mode Response ID column and multi-select for dataset removal.
- [app/app-survey/src/page/analyze/analyze.ts](../../../../../../app/app-survey/src/page/analyze/analyze.ts): The `Analytics → Analyze` tab (`app-survey-analyze-survey`) — view persistence, page tabs, Include test switch, and the advanced-mode response selection wiring.
- [lit-app/analytics/src/card.ts](../../../../../../lit-app/analytics/src/card.ts): Analytics card element (`lapp-analytics-card`) — chart rendering, span tokens, chart options menu, and SVG/PNG canvas export.
- [lit-app/analytics/src/stats.ts](../../../../../../lit-app/analytics/src/stats.ts): Sample distribution moments and statistical formulas (mean, standard deviation, skewness, kurtosis, standard error, 95% CI).
- [app/app-survey/src/page/analyze/view-manager.ts](../../../../../../app/app-survey/src/page/analyze/view-manager.ts): Analytics View manager component and Sort all charts action.
- [app/app-survey/src/page/analyze/view-manager-model.ts](../../../../../../app/app-survey/src/page/analyze/view-manager-model.ts): Pure state transitions for Analytics Views (`applyMetaFieldSelection`, `setSort`, `setColumns`).
- [app/app-survey/src/page/analyze/metaFields.ts](../../../../../../app/app-survey/src/page/analyze/metaFields.ts): Field descriptors and metadata card configuration.

## Behavioral Analytics - behavior

- [app/app-survey/src/page/analyze/behavior.ts](../../../../../../app/app-survey/src/page/analyze/behavior.ts): Behavioral analytics tab (`app-survey-behavior`) — KPI tiles, friction card, respondent log grid with dataset removal, and the excluded-response restore list.
- [app/app-survey/src/page/analyze/response-exclusion-mixin.ts](../../../../../../app/app-survey/src/page/analyze/response-exclusion-mixin.ts): Shared Analyze/Behavior exclusion flow — row selection, reason and note dialog, batched server action, and session update.
- [app/app-survey/src/analytics/behavioral-adapter.ts](../../../../../../app/app-survey/src/analytics/behavioral-adapter.ts): Pure behavioral projections — KPI derivation, Confidence Index scoring, QualityFlag predicates, friction calculations (median, IQR, hesitation hotspots), and tabular respondent log rows.
- [lit-app/schema/survey/exclusion.ts](../../../../../../lit-app/schema/survey/exclusion.ts): Schema definition for response exclusions, reason codes, note requirements, and audit metadata.
- [app/app-survey/src/page/analyze/responseExclusionAction.ts](../../../../../../app/app-survey/src/page/analyze/responseExclusionAction.ts): Client action invoking the response exclusion and restoration service.

## Invitation Progress - progress

- [progress.ts](../../../../../../app/app-survey/src/page/analyze/progress.ts): The `Analytics → Progress` tab (`app-survey-progress`) — run selector cards, `lapp-stat` funnel and rate tiles, run-level toolbar actions, on-demand recipient details grid (`#recipient-grid`), and reminder pass history.
- [invitationProgress.ts](../../../../../../app/app-survey/src/page/analyze/invitationProgress.ts): Loads run documents, derives funnel counts, gates recipient row reads (`canReadInvitationRows`), and formats run status notes.
- [invitationCsv.ts](../../../../../../app/app-survey/src/page/analyze/invitationCsv.ts): Serializes the selected run's recipient rows into the masked status CSV (`invitationProgressCsv`).
- [invitation.ts](../../../../../../lit-app/schema/survey/invitation.ts): Invitation schemas, monotonic stages (`INVITATION_STAGES`), exclusive display statuses (`InvitationStatus`), event transition table (`applyInvitationEvent`), funnel counter predicates (`invitationFunnelCounters`), rate formulas (`responseRate`, `completionRate`, `dropOff`), and manual reminder cooldown rules (`canSendManualReminder`).
- [Invitation.ts](../../../../../../lit-app/schema/survey/model/Invitation.ts): `InvitationRunModel`, `InvitationModel`, and `InvitationSecretModel` Firestore models.
- [actions.ts](../../../../../../app/app-survey/src/entity/action/actions.ts): Survey action bindings for `remindInvitationRunAction`, `remindInvitationAction`, `resendInvitationAction`, `reissueInvitationAction`, `sendInvitationRunAction`, `resumeInvitationRunAction`, and `cancelInvitationRunAction`.
