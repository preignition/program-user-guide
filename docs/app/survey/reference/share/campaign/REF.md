# Reference

## Campaign & Link Builder - Reference

- [campaign.ts](../../../../../../../lit-app/schema/survey/campaign.ts) — Campaign Effect Schema, CampaignUtmParams, Source, Medium, ContentType types
- [Campaign.ts](../../../../../../../lit-app/schema/survey/model/Campaign.ts) — CampaignModel and Firestore repository
- [CampaignE.ts](../../../../../../../app/app-survey/src/entity/CampaignE.ts) — Campaign entity with create action and grid model
- [campaign.ts](../../../../../../../app/app-survey/src/page/edit/deploy/campaign.ts) — Campaign management drawer route component
- [link-builder.ts](../../../../../../../app/app-survey/src/page/edit/deploy/link-builder.ts) — Link builder with UTM term/content fields and campaign selection (advanced mode)
- [distribute.ts](../../../../../../../app/app-survey/src/page/edit/deploy/distribute.ts) — Distribute page orchestrating link builder and campaign selection
- [deploy.ts](../../../../../../../app/app-survey/src/page/edit/deploy.ts) — Deploy drawer route configuration (campaign route)
- app/app-survey/docs/adr/0001-campaign-manager-and-selector-split.md — ADR: why campaign CRUD and selector are separate components
