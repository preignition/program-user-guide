---
description: "Overview of the Analyze workbench: its tabs, shared controls, advanced statistics and exports."
---

# Analyze Overview

The **Analyze** workbench turns collected responses into charts, quality signals and invitation progress. It has three tabs, each documented in its own reference:

- **[Survey](./survey.md)** — question-level results, cross-filtering and metadata.
- **[Behavior](./behavior.md)** — session paradata, confidence scoring, friction and response exclusion.
- **[Progress](./progress.md)** — invitation runs, delivery funnel and recipient status.

Open Analyze from the survey's card or the **Analyze** tab in the survey.

## Shared controls

### Filters

Charts act as cross-filters. Selecting a bar, bucket or category narrows the whole view to that cohort, and an active-filter chip appears in the summary bar. Clear the chip or select **Reset all filters** to return to all responses.

Some filters depend on the tab: behavioral filters apply within Behavior, while survey metadata filters apply across the response charts.

### Advanced

The **Advanced** toggle reveals:

- statistical summaries under cards (n, missing, mean, standard deviation, median, IQR, range, or top category share);
- technical metadata fields that are hidden by default because they are constant or internal;
- the response grid with the removal action.

Advanced does not change the underlying data; it exposes more of it.

### Metadata fields

Response metadata is available as chart dimensions: submission date, country, device, language, survey version, batch, account type and UTM parameters. A metadata field whose value is the same for every response is hidden until Advanced is on, because it does not vary to chart.

### Language filter

For multilingual surveys, charts can be filtered by the language a respondent answered in. Use it to check that a translation is not suppressing completion or distorting a distribution.

### Export

The **Export** action opens the shared export dialog:

- acknowledge the data-privacy notice;
- choose the dataset (responses, behavioral paradata, or the server compliance archive);
- choose raw codes or humanized labels, and a multi-value separator;
- download from the browser or request the archive.

Browser downloads honor the active filters. Exported invitation addresses are masked in Progress; full addresses are never included in survey analytics.

## What each tab answers

| Question | Tab |
| --- | --- |
| How did respondents answer each question? | Survey |
| Did respondents engage, speed, paste or drop off? | Behavior |
| Did invitations get delivered, opened, started and submitted? | Progress |

## Before the numbers are meaningful

- Behavioral analysis needs **behavioral tracking** enabled on the survey before collection. See [Behavioral Tracking](../share/behavioral-tracking.md).
- Progress needs an invitation run; a public-link survey has no invitation funnel.
- Language breakdowns need a localized survey.
- Batch comparisons need more than one batch.

## Related Content

- [Survey Analytics Reference](./survey.md): Workbench controls, cards and statistics.
- [Behavioral Analytics Reference](./behavior.md): Paradata, confidence rubric and exclusion.
- [Progress Reference](./progress.md): Invitation funnel and recipient actions.
- [How to Analyze Survey Responses](../../how-to/survey-analytics.md): The task guide.
- [How to Export Survey Data](../../how-to/exporting-survey-data.md): Export options in detail.
