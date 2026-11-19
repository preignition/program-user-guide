# Reference

## Campaign & Link Builder - Reference

- `lit-app/schema/survey/campaign.ts`: Campaign Effect Schema, CampaignUtmParams, Source, Medium, ContentType types
- `lit-app/schema/survey/model/Campaign.ts`: CampaignModel and Firestore repository
- `app/app-survey/src/entity/CampaignE.ts`: Campaign entity with create action and grid model
- `app/app-survey/src/page/edit/deploy/campaign.ts`: Campaign management drawer route component
- `app/app-survey/src/page/edit/deploy/link-builder.ts`: Link builder with UTM term/content fields and campaign selection (advanced mode)
- `app/app-survey/src/page/edit/deploy/distribute.ts`: Distribute page orchestrating link builder and campaign selection
- `app/app-survey/src/page/edit/deploy.ts`: Deploy drawer route configuration (campaign route)
- app/app-survey/docs/adr/0001-campaign-manager-and-selector-split.md — ADR: why campaign CRUD and selector are separate components
