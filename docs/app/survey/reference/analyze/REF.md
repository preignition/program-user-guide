# Reference

## Invitation Progress - progress

- [progress.ts](../../../../../../app/app-survey/src/page/analyze/progress.ts): The `Analytics → Progress` tab (`app-survey-progress`) — run selector cards, `lapp-stat` funnel and rate tiles, run-level toolbar actions, on-demand recipient details grid (`#recipient-grid`), and reminder pass history.
- [invitationProgress.ts](../../../../../../app/app-survey/src/page/analyze/invitationProgress.ts): Loads run documents, derives funnel counts, gates recipient row reads (`canReadInvitationRows`), and formats run status notes.
- [invitationCsv.ts](../../../../../../app/app-survey/src/page/analyze/invitationCsv.ts): Serializes the selected run's recipient rows into the masked status CSV (`invitationProgressCsv`).
- [invitation.ts](../../../../../../lit-app/schema/survey/invitation.ts): Invitation schemas, monotonic stages (`INVITATION_STAGES`), exclusive display statuses (`InvitationStatus`), event transition table (`applyInvitationEvent`), funnel counter predicates (`invitationFunnelCounters`), rate formulas (`responseRate`, `completionRate`, `dropOff`), and manual reminder cooldown rules (`canSendManualReminder`).
- [Invitation.ts](../../../../../../lit-app/schema/survey/model/Invitation.ts): `InvitationRunModel`, `InvitationModel`, and `InvitationSecretModel` Firestore models.
- [actions.ts](../../../../../../app/app-survey/src/entity/action/actions.ts): Survey action bindings for `remindInvitationRunAction`, `remindInvitationAction`, `resendInvitationAction`, `reissueInvitationAction`, `sendInvitationRunAction`, `resumeInvitationRunAction`, and `cancelInvitationRunAction`.
