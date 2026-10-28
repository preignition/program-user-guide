# Reference

## Distribute Your Survey - distribute

- `app/app-survey/src/page/edit/deploy/distribute.ts` — Distribute page: test/production link buttons, the build-first warning and its link to Publish, the Go to Production action, and the embedded `app-survey-invitation-composer`
- `app/app-survey/src/page/edit/deploy/invitation-composer.ts` — Invitations composer (`app-survey-invitation-composer`): audience selector, survey access mode (`open` / `invitation-only`), reminder schedule, `previewInvitationRun` dry-run counts, and the `createInvitationRun` / `sendInvitationRun` confirmation flow
- `app/app-survey/src/page/edit/deploy/build.ts` — Publish page: the build action and version list the warning links to
- `app/app-survey/src/entity/action/goToProduction.ts` — Go to Production action and its confirmation dialog
- `app/app-survey/actionApi/src/services/productionService.ts` — Server transaction that stamps `productionAt` and redeems one survey from the plan quota
- `app/app-survey/src/page/edit/deploy.ts` — Deploy drawer routes (Publish and Distribute tabs)
