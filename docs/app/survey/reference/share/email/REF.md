# Reference

## Email Configuration - The Email Page

- `app/app-survey/src/page/edit/deploy/email-editor.ts`: The Email deploy page (`app-survey-email-editor`) — the purpose picker, one tab per active email item, an Advanced tab (in advanced mode), and the Sent history tab. A purpose tick creates its `email-{subtype}` item and an untick removes it; each message tab reads and writes that item's locale document and offers a test send. The Invitation reminder tab sets the invitation reminder schedule (count and days); the Results and Follow-up tabs also offer their one-off send action. Advanced holds the consent notices, respondent reminder schedule, consent retention and sender identity. Translation is not shown here yet; Compose Localize edits the same locale fields.
- `app/app-survey/src/entity/email-items.ts`: The shared item vocabulary and sync seam: purpose→message mapping, item labels/icons/descriptions, and `ensure`/`remove`/`syncEmailItems` through `SurveyE.add`/`remove` (used by the Email page, Distribute and the field purpose picker).
- `app/app-survey/src/page/edit/deploy/invitation-schedule.ts`: The shared invitation reminder count/delay arithmetic the Email page and the Distribute composer both edit.
- `app/app-survey/src/page/edit/deploy/email-message.ts`: One email item's subject and body editor; it writes through `EmailE.update` inside the item-locale `db-ref-data` read.
- `lit-app/schema/survey/email.ts`: The `email` configuration schema (`invitationEnabled`, `defaultPurposes`, `notices`, `schedule`, `invitationSchedule`, `sender`), the purpose vocabulary, `invitationsEnabled`, the notice defaults, and the confirmation/reminder/follow-up builders.
- `lit-app/schema/survey/emailMerge.ts`: The merge fields every survey email supports (`name`, `link`, `survey_title`, `organiser`), their fallbacks, and the placeholder substitution the builders share with invitations.
- `app/app-survey/src/page/edit/deploy/email-sent.ts`: The Sent tab: an absolute `db-ref` list read of the survey's `emailSend` collection, rendered through `EmailSendE`.
- `app/app-survey/src/entity/EmailSendE.ts`: The Sent-history Entity: the grid columns (when, message, recipients, sent, delivered, opened, failed) and the detail form, with the Progress link for started/submitted.
- `lit-app/schema/survey/model/EmailSend.ts`: The `emailSend` model (kind, total/sent/failed counts, the provider's delivered/opened/bounced/complained/unsubscribed counters, server-stamped `at`, run id and purpose), its repository, the best-effort `recordEmailSend` each send action calls, and `recordInvitationFunnelDelta`, which the Mailgun webhook uses to mirror a run's funnel onto its row. The model is the type; there is no separate row struct.
- `lit-app/schema/survey/model/Email.ts`: The email item model and survey-item path/repository helpers.
- `app/app-survey/src/entity/EmailE.ts`: The Email item Entity: deterministic `email-{subtype}` create, locale subject/body, its row in the Compose tree's Email group, and the `LocalizeEmail` variant Compose renders in Localize mode.
- `lit-app/schema/survey/survey.ts`: The survey document's `email` field and its item references.
- `app/app-survey/src/entity/SurveyE.ts`: The survey entity whose `update`/`add`/`remove` verbs the page and the item sync use.
- `app/app-survey/functions/src/service/storeRespondentData.ts`: The submission pipeline that reads `email.defaultPurposes` for its dataset filter and sends the confirmation to the form address and, for an invited submission, the invitation address.
- `app/app-survey/functions/src/service/sendConfirmation.ts`: Sends one confirmation through the platform `MailService`; without a configured mail key it sends nothing.
- `app/app-survey/actionApi/src/services/sendEmailTest.ts`: The per-message test send: resolves the caller's own address, builds the selected message with test merge values, and sends it without creating a consent, invitation or Sent-history row.
- `app/app-survey/functions/src/server-config.ts`: Declares the deployable's Mailgun keys; `MailService` is provided only when the key resolves.
- `app/app-survey/src/entity/settings/BuildQuestion.ts`: The question settings picker that edits the same survey-level purposes and shows the notice they generate.
- `app/app-survey/src/entity/question/emailPurposes.ts`: The purposes an editor can choose for the survey's email addresses.
- `lit-app/schema/survey/respondentEmail.ts`: The reminder consent records (`RespondentEmail`), their retention window and the `ConsentNotice` wording the build carries.
- `app/app-survey/renderer/field/respondent-email-optin-wrapper.ts`: The field's data side: subscribes to the respondent's own record through a document controller and writes a toggle directly; a test session toggles locally without reading or writing.
- `app/app-survey/renderer/field/respondent-email-optin.ts`: The field's notice, consent checkboxes, state and inline feedback (presentation only).
- `app/app-respondent/firestore.rules`: The respondent-database rules for `survey/{surveyId}/respondentEmail` — read-own and owner-write, with the send jobs verifying the session.
- `app/app-survey/actionApi/src/services/respondentEmailUnsubscribe.ts`: The public unsubscribe service: validates the link's token inside the survey's own records and flips only the status.
- `app/app-survey/functions/src/respondentEmailUnsubscribe.ts`: The `survey-respondentEmailUnsubscribe` callable the public page calls.
- `app/app-respondent/src/page/unsubscribe.ts`: The public unsubscribe page (no sign-in), rendered in the survey's language.
- `app/app-respondent/src/routes.ts`: The respondent app's routes; the unsubscribe route sits ahead of the survey id route.
- `app/app-survey/functions/src/service/respondentReminders.ts`: The reminder job: the schedule, the sends, the send state and the expiry sweep.
- `app/app-survey/functions/src/reminderJob.ts`: The hourly scheduled function that runs the reminder job.
- `lit-app/effect-model/service/mail/platformMail.ts`: The mail plumbing the confirmation, the reminders and the follow-ups share.
- `app/app-survey/actionApi/src/services/followUp.ts`: The editor-triggered follow-up: the dry-run recipient count, the form opt-ins, the invited audience when invitations are on, the sends, and the expiry sweep.
- `lit-app/schema/survey/followUp.ts`: The follow-up action's payload and result.
- `app/app-survey/src/entity/action/sendFollowUp.ts`: The `sendResults`/`sendFollowUpSurvey` actions and their confirmation dialog; the Email page renders them on their message tabs.
- `lit-app/schema/survey/invitation.ts`: `INVITATION_MERGE_FIELDS`, `validateInvitationContent`, mandatory footer helpers (`invitationFooter`, `invitationReasonLine`, `reminderSubject`), and invitation schemas.
- `app/app-survey/src/entity/action/actions.ts`: Survey action bindings including `sendEmailTestAction` for the per-message test send.
