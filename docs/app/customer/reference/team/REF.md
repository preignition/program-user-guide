# Reference

## Team Audiences - audiences

- [customer-team-audiences.ts](../../../../../../app/app-customer/src/page/team/customer-team-audiences.ts): The `Team Settings → Audiences` page component (`customer-team-audiences`) — audience cards, CSV drop zone, recipient grid with header filters, and live Firestore collection subscriptions.
- [AudienceE.ts](../../../../../../app/app-customer/src/entity/audience/AudienceE.ts): The `AudienceE` entity definition binding the audience model fields and team-scoped actions (`newAudience`, `editAudience`, `archiveAudience`, `deleteAudience`, `exportAudience`, `importAudience`, `addRecipient`).
- [actions.ts](../../../../../../app/app-customer/src/entity/audience/actions.ts): Client action definitions and modal dialogs for creating, renaming, archiving/restoring, deleting, exporting, importing audiences, and adding single recipients.
- [audience-import-dialog.ts](../../../../../../app/app-customer/src/entity/audience/audience-import-dialog.ts): The CSV import wizard (`customer-audience-import-dialog`) handling Storage upload, server preview (`previewAudienceImport`), interactive header mapping, error CSV download, warranty acceptance, and commit (`commitAudienceImport`).
- [audience.ts](../../../../../../lit-app/schema/customer/audience.ts): Audience and recipient schemas, canonical import columns (`email`, `name`, `language`, `external_id`), header aliases, email normalization/masking, import warranty text, and `AUDIENCE_LIMITS`.
- [Audience.ts](../../../../../../lit-app/schema/customer/model/Audience.ts): `AudienceModel` and `RecipientModel` Firestore document models.
