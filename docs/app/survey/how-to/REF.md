# Reference

## Adding an accessibility menu - adding-an-accessibility-menu

- `lit-app/a11y/src/a11y-menu.ts`: Implementation of the `a11y-menu` custom element.
- `lit-app/cmp/field/md/md-editor.ts`: Markdown editor where the `a11y-menu` tag can be inserted.

## Using Easy Read - use-easy-read

- `app/app-survey/renderer/mixin/easyread-mixin.ts`: Core logic for handling Easy Read mode in the survey renderer.

## Using Sign Language - use-sign-language

- `app/app-survey/renderer/mixin/signlanguage-mixin.ts`: Core logic for rendering sign language videos in the survey.
- `app/app-survey/src/entity/holder/signlanguage.ts`: Editor UI for adding sign language videos and managing visibility.

## Using tooltips - use-tooltips

- `lit-app/cmp/tooltip/tooltip.ts`: Implementation of the `lapp-tooltip` custom element.
- `lit-app/cmp/field/md/md-editor.ts`: Markdown editor configuration where the tooltip formatting is defined.

## Randomizing items - randomizing-items

- `lit-app/schema/survey/survey.ts`: Schema definition for the `randomize` property at the survey level.
- `lit-app/schema/survey/page.ts`: Schema definition for randomization and fixed properties at the page level.
- `lit-app/schema/survey/section.ts`: Schema definition for randomization and fixed properties at the section level.
- `lit-app/schema/survey/question.ts`: Schema definition for randomization and fixed properties at the question level.
- `lit-app/shared/dataUtils/random.ts`: Core logic for stable, seeded shuffling of items.
- `app/app-respondent/src/randomizeBuild.ts`: Application logic that applies randomization to the survey build for respondents.

## Understanding Randomization - understanding-randomization

- `lit-app/shared/dataUtils/random.ts`: Implementation of the Mulberry32 PRNG and seeded Fisher-Yates shuffle.

## Providing Rich Formatting - providing-rich-formatting.md

- `lit-app/cmp/field/md/md-editor.ts`: Implementation of the theme-aware actions in the Markdown editor.
- `lit-app/shared/md/marked.ts`: Extension for parsing triple-colon directives and image attributes.
- `lit-app/shared/styles/class/show-when-accessibility.ts`: CSS classes for conditional visibility.

## Styling a Survey - styling-a-survey

- `lit-app/schema/survey/theme.ts`: Schema definition for the Base Font Size and Spacing Scale master tokens, per-group style tokens, and their CSS-var encoding.
- `app/app-survey/renderer/style.ts`: Renderer default variables — the typography ladder driven by the Base Font Size master and the Spacing Scale multipliers on spacing tokens.
- `app/app-survey/src/page/edit/design/behavior.ts`: Editor UI for the Style tab — master cards, Advanced Mode gating, and the per-group fine-tune tokens.
- `app/app-survey/src/page/edit/design/scale-card.ts`: The master-token card component (slider + presets + live preview).

## How to configure survey styles - style-configuration

- `lit-app/schema/survey/theme.ts`: `FormStyleTokens` (masters + fine-tune tokens), `FormStyle`/`CssFormStyle` groups including the Easy Read group, and the CSS-var encodeKeys mapping.
- `lit-app/effect-model/primitive/Size.ts`: Shared `OptionalFontSize`, `OptionalSize`, and `OptionalScale` primitives (rem-only font validation, empty = inherit).
- `app/app-survey/renderer/style-merge.ts`: Pure merge of the style groups into CSS vars (base → mobile → oneQuestionAtATime → easyread).
- `app/app-survey/renderer/form-abstract.ts`: Applies the merged style vars to the renderer, mirrors the masters onto the form host.
- `app/app-survey/renderer/field-wrapper.ts`: Maps the master-derived field text sizes onto Material field tokens.
- `lit-app/shared/styles/themes/schema.ts`: Customer theme schema — `ThemeTypography.fontSizeBase` and `ThemeLayout.spacingScale`.
- `lit-app/app-state/init/theme-masters.ts`: Builds the `:root` CSS block carrying the theme-level master tokens.
- `lit-app/a11y/src/state/accessibility-state.ts`: Easy Read activation state (no `appState.textSize` force-set — the mode floors the document font size through `app-respondent`).
- `app/app-respondent/src/init/easyread-font-size.ts`: Binds Easy Read to the document root font floor (`--a11y-easyread-font-size`), composed with the text-size setting by `max()` in `variables.css`.

## Sharing a Section - how-to-share-section

- `lit-app/schema/survey/section.ts`: Schema definition for section scopes (`team`, `customer`, `global`), publish metadata, response keying, prefill modes, and freeze settings.
- `app/app-survey/src/entity/SectionE.ts`: Section entity model definition and action bindings.
- `app/app-survey/src/entity/settings/BuildSection.ts`: Settings panel UI for sharing controls, response keying, prefill modes, and freeze toggles in Advanced Mode.
- `app/app-survey/src/cmp/section-library.ts`: Tabbed Section Library component for browsing and dragging sections across scopes.
- `app/app-survey/src/helper/sectionLibrary.ts`: Collection-group queries and live-reference parent tracking helpers.
- `app/app-survey/src/entity/action/publish.ts`: Action and confirmation dialog flow for publishing sections to customer or global scopes.
- `app/app-survey/src/entity/action/unpublish.ts`: Action and confirmation dialog flow for unpublishing sections while keeping existing live embeds intact.
- `app/app-survey/src/entity/action/embedSection.ts`: Context-menu embed action and library selection dialog for form pages.
- `app/app-survey/src/entity/action/embedDialog.ts`: Reusable dialog for choosing between Live Reference and Copy embedding.
- `app/app-survey/renderer/dd-wrapper.ts`: Canvas drag-and-drop handler supporting section library drops.
- `app/app-survey/renderer/section-wrapper.ts`: Respondent section wrapper handling quiet, review, and interstitial prefill modes with response keying.
- `app/app-survey/actionApi/src/services/sectionCopyService.ts`: Server-side deep-copy service replicating section subtrees and accessibility subdocuments.
- `app/app-survey/actionApi/src/services/sectionDeleteService.ts`: Server-side reference tracking and automatic live-reference conversion upon section deletion.
- `app/app-survey/actionApi/src/services/buildFetcher.ts`: Build pipeline resolving out-of-form accessibility and locale assets for live-referenced sections.

## Editing a survey - expand and collapse the structure

- `app/app-survey/src/page/edit/design/compose-grid-mixin.ts`: Tree-grid mixin implementing `expandAllFrom` and `collapseAllFrom` on top of Vaadin's `expandedItems` and the data provider controller caches.
- `app/app-survey/src/entity/action/treeExpand.ts`: The `Expand all` / `Collapse all` context-menu actions, built from one shared factory and registered on the form, survey, page and section entities.
- `app/app-survey/src/entity/types.ts`: Tree item types and the `isTreeExpandable` helper that decides which items offer the actions.

## Publishing a Survey - publishing-a-survey

- `app/app-survey/src/page/edit/deploy/distribute.ts`: The Distribute tab — hides the production link until the survey is in production and renders the Go to Production button.
- `app/app-survey/src/entity/action/goToProduction.ts`: The Go to Production action and its confirmation dialog.
- `app/app-survey/src/page/edit/deploy/quota-status.ts`: The survey app's live quota read (remaining, grace, expired, missing) rendered through the shared `lapp-quota-card`, shown on the Status page and on the Distribute page until the survey is in production.
- `app/app-survey/actionApi/src/services/productionService.ts`: Server action — stamps the production marker and redeems one quota unit in a transaction, with the grace window and superadmin bypass.
- `app/app-respondent/src/machine/actor/productionGate.ts`: Respondent gate — the production route only serves surveys taken to production, and pauses the one over-quota survey after its 10-day grace deadline (surveys published within quota carry no deadline).

## Sharing Logical Expressions - sharing-logical-expressions

- `app/app-survey/src/page/edit/design/expressions.ts`: The `Build → Expressions` page in Advanced Mode — grid, header filters, unused counter, and row details expansion.
- `app/app-survey/src/page/edit/design/expression-rows.ts`: Row projection, status derivation (`used`, `unused`, `deleted-ref`, `used-deleted-ref`), and readable filter text.
- `app/app-survey/src/page/edit/design/expression-labels.ts`: Decoded locale-label resolution for items referenced in expression previews and filters.
- `app/app-survey/src/entity/holder/expression-details.ts`: Expanded row details component for editing name/description, inspecting usage with `Open in compose`, and triggering deletion.
- `app/app-survey/logic/expression-usage.ts`: Derivation of expression usage across reachable form items and survey texts, plus soft-deleted item reference detection.
- `app/app-survey/logic/expression-readonly.ts`: Read-only `a11y-logic-expression` renderer displaying expression tokens with `a11y-logic-identifier` chips.
- `app/app-survey/src/page/edit/design/expression-delete.ts`: Confirmation dialog and soft-delete flow for unused expressions.
- `app/app-survey/src/page/edit/design/restore.ts`: Restore page integration allowing soft-deleted expressions to be recovered.

## Sending Invitations to a Team Audience - send-invitations

- `app/app-customer/src/page/team/customer-team-audiences.ts`: Team Settings → Audiences page (`customer-team-audiences`) — audience cards, CSV upload zone, and recipient grid.
- `app/app-customer/src/entity/audience/audience-import-dialog.ts`: CSV import dialog (`customer-audience-import-dialog`) — dry-run preview counts, column mapping, error CSV export, and warranty acceptance.
- `app/app-survey/src/page/edit/deploy/email-editor.ts`: Survey Email page (`app-survey-email-editor`) — the Invitation tab, merge field validation, reminder email editor, and `Send test` action.
- `app/app-survey/src/page/edit/deploy/invitation-composer.ts`: Share → Distribute Invitations section (`app-survey-invitation-composer`) — audience selector, survey access mode, reminder schedule, and `Review and send` confirmation dialog.
- `app/app-survey/src/page/analyze/progress.ts`: Analytics → Progress tab (`app-survey-progress`) — run selector cards, funnel and rate `lapp-stat` tiles, `Load details` masked recipient table, status CSV download, and reminder/resend/reissue actions.
- `lit-app/schema/customer/audience/audience.ts`: Audience and recipient schemas, canonical CSV headers, email masking, import warranty, and `AUDIENCE_LIMITS`.
- `lit-app/schema/survey/invitation.ts`: Invitation run and event schemas, merge fields (`INVITATION_MERGE_FIELDS`), funnel counters, and rate formulas.

## Analyzing survey responses - survey-analytics

- `lit-app/analytics/src/workbench.ts`: Main analytics workbench host element — coordinates page tabs, sections, card grid density, metadata chooser modal, and persistent top band.
- `lit-app/analytics/src/card.ts`: Analytics card component (`lapp-analytics-card`) — question-type icon, hover actions, pin button, chart options menu (PNG/SVG export, chart type, width span, card ordering, hide), and the Advanced-mode statistical summary strip.
- `lit-app/analytics/src/response-grid.ts`: Responses table (`lapp-analytics-response-grid`) — advanced Response ID column, row checkboxes, bulk selection, removal request, and the response inspector dialog.
- `lit-app/analytics/src/summary-bar.ts`: Selection summary toolbar (`lapp-analytics-summary-bar`) — filter chips, column density, pending refresh, and the dataset export entry point.
- `app/app-survey/src/page/analyze/analyze.ts`: Analyze tab page — view state, advanced-mode gating, grid selection to the exclusion dialog, and the server archive export request.
- `app/app-survey/src/page/analyze/view-manager.ts`: Analytics Views manager component (`app-survey-view-manager`) — view selector, save/rename/duplicate actions, and Sort all charts sub-menu.
- `app/app-survey/src/page/analyze/metaFields.ts`: Field descriptors and label resolvers for survey metadata cards (language, submission date, country, UTM parameters).
- `lit-app/analytics/src/stats.ts`: Per-question descriptive statistics (n, missing, mean, SD, median, IQR, range, top, categories) behind the Advanced-mode summary strip.
- `lit-app/analytics/src/stats-strip.ts`: `lapp-analytics-stats-strip` — renders the Advanced-mode statistics chips below a card chart.

## Analyzing respondent behavior - behavior-analytics

- `app/app-survey/src/page/analyze/behavior.ts`: Behavioral analytics page component (`app-survey-behavior`) — KPI strip, drop-off segmented selector, per-question friction card, respondent log grid, and exclusion dialog.
- `app/app-survey/src/analytics/behavioral-adapter.ts`: Pure behavioral projections — KPI aggregations, Confidence Index scoring, QualityFlag schema, friction summary (median, IQR, hesitation hotspots), and tabular respondent log rows.
- `app/app-survey/src/page/analyze/responseExclusionAction.ts`: Client action invoking the server-side response exclusion and restoration pipelines.
- `lit-app/schema/survey/exclusion.ts`: Schema definition for response exclusions, reason codes (`test`, `bot`, `speeder`, `duplicate`, `quality`, `inappropriate`), and audit trail metadata.

## Exporting survey data - exporting-survey-data

- `lit-app/analytics/src/export-dialog.ts`: Dataset export dialog — privacy acknowledgement, browser/server download method, filename, column scope, metadata, value labels, format, multi-value separator, archive content and CSV header style.
- `lit-app/analytics/src/export-dataset.ts`: Dataset serialization routines converting loaded or filtered cube rows into CSV or JSON strings, plus the default filename pattern.
- `app/app-survey/src/page/analyze/analyze-session-mixin.ts`: Shared Analyze/Behavior session — server export option descriptor and the `DownloadAction` dispatch for the compliance archive.
- `app/app-survey/src/entity/action/download.ts`: Client action calling the survey download API with the chosen content, label type, format and separator.

## Using Read Aloud - read-aloud

- `app/app-survey/renderer/mixin/readaloud-mixin.ts`: Respondent-side Read Aloud button, speech and audio playback.
- `app/app-survey/src/entity/holder/readaloud.ts`: Per-item voice editor: default, record, generate and upload tabs.
- `app/app-survey/src/entity/modes/readaloud.ts`: Per-language voice selection and the bulk Generate Voices action.
- `app/app-survey/src/page/edit/design/tree-filter-media.ts`: Media-presence queries behind the Read Aloud tree column filter.

## Choosing a form layout - form-layout-and-accessibility

- `lit-app/schema/survey/form.ts`: Presentation mode, scroll-before-next, transition and layout schema.
- `app/app-survey/renderer/form-abstract.ts`: One-question-at-a-time page grouping, sticky action bar and per-step validation.
- `app/app-survey/renderer/page-single-question.ts`: Single-question page rendering and larger default typography.
- `app/app-survey/src/entity/FormE.ts`: Accessible Label switch and its label-length behavior.

## Configuring form-channel respondent emails - respondent-emails

- `app/app-survey/src/entity/EmailE.ts`: Share Email page, purposes and message tabs.
- `app/app-survey/src/entity/email-items.ts`: Email item definitions and merge fields.
- `app/app-survey/functions/src/`: Reminder dispatch and invitation email functions.
- `documentation/docs/app/survey/reference/share/email/advanced.md`: Reminder cadence and consent retention.

## Tracking campaigns and UTM links - campaigns-and-utm

- `app/app-survey/src/entity/CampaignE.ts`: Campaign creation and management.
- `app/app-survey/src/page/edit/deploy/link-builder.ts`: UTM controls and generated survey links.
- `lit-app/app-state/utmState.ts`: UTM parameters read from the survey URL.
- `app/app-survey/src/page/analyze/metaFields.ts`: UTM metadata fields in Analyze.

## Configuring respondent account types - respondent-account-types

- `app/app-survey/src/page/edit/deploy/account.ts`: Account type, authentication method and allowed-domain controls.
- `lit-app/schema/survey/survey.ts`: Account type, auth method and allowed-domain schema.

## Setting up webhooks - webhooks

- `app/app-survey/functions/src/webhook.ts`: Trigger mapping and payload construction.
- `app/app-survey/functions/src/utils/webhookUtils.ts`: Request headers, secret token, timeout and result storage.
- `app/app-survey/src/page/edit/deploy/webhook.ts`: Webhook settings, test and events UI.

## Restoring deleted survey items - restore-deleted-items

- `app/app-survey/src/page/edit/design/restore.ts`: Restore workspace and restore action.
- `app/app-base/entity/RestoreE.ts`: Restore entity, deleted-items query and restore action.

## Reviewing a survey - review-a-survey

- `app/app-survey/src/page/edit/design/review.ts`: Review panel, run, filters and finding details.
- `app/app-survey/src/page/edit/design/review-actions.ts`: Apply, insert, dismiss, restore and translate actions.
- `app/app-survey/src/page/edit/design/review-live.ts`: Live rule findings and markers.

## Generating a survey with AI or a document - generate-a-survey

- `app/app-survey/src/dialog/dialog-survey-create.ts`: Survey creation dialog with new, prompt, OCR and skip options.
- `app/app-survey/src/dialog/dialog-form-create.ts`: Form creation options, prompt field and PDF/Markdown upload (2 MB).
- `app/app-survey/src/entity/action/acceptAllGeneratedContent.ts`: Accept all pending generated content.
- `app/app-survey/src/entity/action/rejectAllGeneratedContent.ts`: Reject all pending generated content.

## Filtering the compose tree - filter-the-compose-tree

- `app/app-survey/src/page/edit/design/tree-filter.ts`: Tree filter kinds and matching.
- `app/app-survey/src/page/edit/design/modesConfig.ts`: Column headers, media filters and tri-state cycling.

## Duplicating a survey - duplicate-a-survey

- `app/app-survey/src/entity/action/copySurvey.ts`: Copy dialog, name and `copyForm` option.
- `app/app-survey/actionApi/src/`: Server-side survey copy.

## Reference pages - shared options, expressions, workspace, test, analyze

- `app/app-survey/src/page/edit/design/shared-option.ts`: Shared Options grid, columns and usage detail.
- `app/app-survey/src/entity/question/settings/BuildSharedChoice.ts`: Shared-option question settings.
- `app/app-survey/src/page/edit/design/expressions.ts`: Expressions page, statuses and usage.
- `app/app-survey/src/page/edit/design/expression-rows.ts`: Expression row projection and readable preview.
- `app/app-survey/src/page/workspace.ts`: Survey workspace, starred list and team scope.
- `app/app-survey/src/cmp/overview.ts`: Survey overview card, status chips and activity.
- `app/app-survey/src/page/edit/test.ts`: Test workbench entry component.
- `app/app-survey/renderer/mixin/form-test-toolbar-mixin.ts`: Test toolbar controls and test run reset.
- `app/app-survey/renderer/mixin/edit-mixin.ts`: Inline edit button in the test view.
- `app/app-survey/src/page/analyze/`: Survey, behavior and progress analytics surfaces.
