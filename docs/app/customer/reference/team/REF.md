# Reference

## Team Settings - Reference

- `app/app-customer/src/page/team/customer-team-profile.ts`: Team profile page with metadata header and name/presentation fields.
- `app/app-customer/src/page/team/customer-team-presentation.ts`: Team presentation page with language tabs, title, short description, description, and logo uploader.
- `app/app-customer/src/entity/Team/Presentation.ts`: Team presentation entity definition and logo upload handler.
- `app/app-customer/src/entity/Team/Communication.ts`: Team communication entity model for sender address, reply-to, signature, and footer.
- `app/app-customer/src/page/team/customer-team-audiences.ts`: Team audiences page, CSV drop zone, recipient grid, and live Firestore subscriptions.
- `app/app-customer/src/entity/audience/AudienceE.ts`: Audience entity binding audience model fields and actions.
- `app/app-customer/src/entity/audience/audience-import-dialog.ts`: Audience CSV import wizard with dry-run preview, column mapping, and warranty confirmation.
- `app/app-customer/src/page/team/customer-team-channel.ts`: Channels manager for active applications (blog, discussion, survey).
- `app/app-customer/src/entity/Team/AppUserSettings.ts`: App user settings entity for default respondent language and theme tokens.
- `app/app-customer/src/page/team/customer-team-api-keys.ts`: Team API keys panel, create modal with one-time secret reveal, and in-place revocation action.
- `app/app-customer/src/page/team/customer-team-danger.ts`: Team danger zone implementing reversible soft delete with optional audit reason and restore team action.
- `app/app-customer/src/page/customer-team.ts`: Team settings drawer route configuration and permissions.
