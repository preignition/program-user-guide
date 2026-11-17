---
description: How to explore, cross-filter, customize, and export survey responses in the real-time analytics workbench.
---

# How to Analyze Survey Responses

::: info
The Survey Analytics workbench provides real-time, interactive exploration of survey responses. Every chart serves as both a visualization and an interactive cross-filter, powered by an in-memory multidimensional data cube that coordinates all views in under 30 milliseconds.
:::

<figure>
  <img src="./assets/survey-analytics-auto.png" alt="Survey analytics workbench overview showing metadata band, page charts, and view toolbar">
  <figcaption>The Survey Analytics workbench showing metadata charts, question cards, and view controls.</figcaption>
</figure>

## 1. Opening Survey Analytics

To access survey analytics:

1. Open your survey in the management console.
2. Select the **Analyze** tab in the top navigation bar.
3. By default, the analytics workbench opens on the **Overview** sub-tab showing responses for your survey's active batch.

<figure>
  <img src="./assets/survey-analytics/step-1-open-analytics.png" alt="Navigation to Survey Analytics in the survey header">
  <figcaption>Select <strong>Analyze</strong> in the top navigation to enter the analytics workbench.</figcaption>
</figure>

The header summary bar indicates the currently selected distribution batch, the total number of submitted responses, and the active filter count.

<figure>
  <img src="./assets/survey-analytics/step-2-active-batch.png" alt="Active batch chip showing batch name and respondent count">
  <figcaption>The active batch indicator displays the current distribution batch and total submitted responses.</figcaption>
</figure>

::: tip
If your survey uses multiple distribution batches, switch between batches in the Share settings to focus your analysis on specific respondent waves.
:::

## 2. Viewing Record Context and Metadata

The top section of the workbench displays **Record Context & Metadata** charts. These cards visualize survey paradata that is independent of specific question responses:

- **Submission date**: Response arrival frequency over time.
- **Language**: Distribution of locales selected by respondents.
- **Country of origin**: Geographic distribution derived from respondent connection metadata.
- **UTM source**: Marketing and distribution campaign identifiers.
- **Accessibility & display preferences**: Theme, color mode, font size, and touch input usage.

<figure>
  <img src="./assets/survey-analytics/step-3-record-context.png" alt="Record context and metadata charts section">
  <figcaption>Record context charts display submission metadata such as language, country, and submission date.</figcaption>
</figure>

::: info Persistent Top Band
Metadata charts remain pinned in the top band as you navigate between different survey pages, allowing you to filter by demographic or environment variables without losing context.
:::

### Customizing Visible Metadata Charts

To change which metadata cards appear in the top band:

1. Click the settings gear icon in the **Record Context & Metadata** header.
2. In the modal dialog, select or unselect metadata fields (e.g. toggle *Touchscreen*, *Theme*, or *UTM Source*).
3. Use the up and down arrow buttons next to each field to reorder the cards.
4. Click **Close**. Your chosen metadata order is saved with your current Analytics View.

## 3. Navigating Survey Pages and Question Cards

Survey questions are organized under the **Pages** tab bar beneath the metadata band:

1. Select any page tab (e.g. *Survey habits*, *Demographics*, *Feedback*) to view the question cards belonging to that page.
2. Within a page, questions are grouped into collapsible sections matching your survey composition. Click any section header to collapse or expand its question cards.
3. Each question card displays the question text, response distribution chart, and sample size ($n$).

<figure>
  <img src="./assets/survey-analytics/step-4-survey-page.png" alt="Survey page view with question cards and response distributions">
  <figcaption>Survey questions displayed as cards grouped under their respective survey page tab.</figcaption>
</figure>

Question cards automatically select the optimal chart representation based on the question type:

- **Single-choice questions**: Donut charts or horizontal bar charts showing category proportions.
- **Multiple-choice questions**: Horizontal bar charts displaying multi-select frequency.
- **Numeric, rating, and Likert scales**: Histograms displaying continuous distributions and bin counts.

## 4. Interactive Cross-Filtering

Every chart element functions as a live filter. You can isolate any cohort across the entire survey with a single click:

1. Click any chart mark (a slice of a donut chart, a bar, or a histogram bin).
2. The selected mark highlights, and every other chart across all pages immediately recalculates to display only responses matching that criterion.
3. The summary toolbar updates instantly, displaying the count and percentage of matching respondents (e.g. `12 / 103 (12%)`).

<figure>
  <img src="./assets/survey-analytics/step-5-filter-by-chart.png" alt="Filtering responses by clicking a chart slice or bar">
  <figcaption>Clicking a chart mark instantly cross-filters all other charts across the entire survey.</figcaption>
</figure>

1. An active filter chip appears in the top toolbar showing the filter dimension and selected value (e.g. `Language: English`).

<figure>
  <img src="./assets/survey-analytics/step-5-filter-summary.png" alt="Active filter chip in the summary toolbar">
  <figcaption>The active filter chip shows the current criteria and updates the matching respondent count.</figcaption>
</figure>

### Combining Multiple Filters

You can click additional chart marks across different questions or metadata fields to narrow your cohort further (e.g. `Language: English` AND `Device: Touchscreen` AND `Answer: Yes`). All active filter chips appear sequentially in the toolbar.

### Clearing Filters

To reset filters:

- Click the **×** (remove) icon on any individual filter chip to drop that specific filter.
- Click the highlighted slice or bar on the originating chart to toggle the filter off.
- Click **Clear all filters** in the toolbar to restore the entire dataset.

<figure>
  <img src="./assets/survey-analytics/step-6-clear-filter.png" alt="Clearing an active filter chip">
  <figcaption>Click the clear button on an active filter chip to restore the full dataset.</figcaption>
</figure>

## 5. Inspecting Individual Responses

To drill down into individual respondent submissions matching your current view:

1. Hover over any question card to reveal the card action icons.
2. Click the **Info** (details) icon in the card header.
3. The Response Inspector dialog opens, displaying the individual answers submitted for that question.
4. Use the pagination controls to step through matching respondent submissions one by one.

<figure>
  <img src="./assets/survey-analytics/step-7-response-details.png" alt="Individual response details inspector dialog">
  <figcaption>The response inspector displays individual submissions matching the current filter criteria.</figcaption>
</figure>

## 6. Pinning Key Charts to the Top Band

When comparing question responses against key demographic or outcome variables across different pages, pin the primary charts to the top band:

1. Locate the question card you want to keep visible (e.g. an overall satisfaction or primary outcome question).
2. Hover over the card to reveal the actions and click the **Star** (pin) button.

<figure>
  <img src="./assets/survey-analytics/step-8-pin-chart.png" alt="Pin icon button on a question card">
  <figcaption>Hover over a question card and click the star button to pin it to the top band.</figcaption>
</figure>

1. The card immediately moves into the **Pinned Charts** band situated above the survey page tabs.

<figure>
  <img src="./assets/survey-analytics/step-8-pinned-chart.png" alt="Pinned charts grid in the top band">
  <figcaption>Pinned charts remain visible at the top as you navigate through different survey pages.</figcaption>
</figure>

1. As you switch page tabs, the pinned chart remains accessible for continuous cross-filtering.
2. To unpin a chart, hover over the pinned card and click the star icon again.

## 7. Customizing Card Display and Exporting Charts

Every card features a context menu for visual customization and presentation export:

1. Hover over any question or metadata card and click the **Options** menu button (three vertical dots).

<figure>
  <img src="./assets/survey-analytics/step-9-chart-options-auto.png" alt="Card options menu showing export and display options">
  <figcaption>The card options menu provides chart type toggles, width adjustments, and SVG/PNG exports.</figcaption>
</figure>

1. Choose from the available options:
   - **Export chart as PNG**: Downloads a high-resolution raster image suitable for slide decks, reports, or documents.
   - **Export chart as SVG**: Downloads a vector graphic file that preserves crisp typography and scalability at any print or digital resolution.
   - **Chart type**: Toggle between **Donut** and **Horizontal bar** for choice questions. Bar charts are especially helpful for questions with longer label text.
   - **Card width**: Adjust the card's column span between **1 column**, **2 columns**, or **Full width** to emphasize complex questions.
   - **Position**: Move the card earlier or later in the section sequence.
   - **Reset card defaults**: Revert the card's width and chart representation to system defaults.

<figure>
  <img src="./assets/survey-analytics/step-9-bar-chart.png" alt="Question card displayed as a horizontal bar chart">
  <figcaption>Categorical question card toggled from donut to horizontal bar representation.</figcaption>
</figure>

## 8. Adjusting Grid Density

You can adapt the workbench layout to your monitor size and analytical focus using the column switcher in the top toolbar:

- **1 column**: Linear, single-column stream ideal for narrow viewports or full-width detailed review.
- **2 columns**: Balanced layout offering generous width for answer labels and bar lengths.
- **3 columns**: Default balanced layout for standard desktop monitors.
- **4 columns**: High-density dashboard view displaying maximum cards on wide displays.

<figure>
  <img src="./assets/survey-analytics/step-10-two-columns.png" alt="Workbench set to two-column grid layout">
  <figcaption>Two-column layout optimized for wide charts and extended option labels.</figcaption>
</figure>

<figure>
  <img src="./assets/survey-analytics/step-10-four-columns.png" alt="Workbench set to four-column grid layout">
  <figcaption>Four-column compact layout providing a high-density dashboard overview.</figcaption>
</figure>

## 9. Managing Analytics Views and Sorting Charts

### Creating and Switching Views

Analytics Views allow you to preserve distinct analytical perspectives (e.g. "Accessibility Cohort", "Regional Comparison", "Executive Overview") without overwriting the default configuration:

1. Click the view selector dropdown in the top toolbar to switch between saved views.
2. Click the **View actions** menu (three dots beside the view selector) to manage views:
   - **Save**: Persist current filter settings, pinned charts, column widths, and metadata order to the active view.
   - **Save as new view…**: Create a named snapshot with current filters and layout.
   - **Rename…**: Change the name of the active view.
   - **Discard unsaved changes**: Revert modifications made since the last save.
   - **Copy view link**: Share a direct link with collaborators that opens the survey directly into this view configuration.
   - **Delete view…**: Permanently remove a custom view (the default view cannot be deleted).

<figure>
  <img src="./assets/survey-analytics/step-12-view-actions-auto.png" alt="View actions menu showing Save, Save as new, Sort all charts, and Delete">
  <figcaption>The View actions menu allows saving, renaming, duplicating, and sorting analytics views.</figcaption>
</figure>

<figure>
  <img src="./assets/survey-analytics/step-12-saved-view.png" alt="Saved views dropdown selector">
  <figcaption>Switch between saved analytics views to immediately restore custom layouts and filter sets.</figcaption>
</figure>

### Sorting All Charts

To reorganize chart categories consistently across the entire survey:

1. Open the **View actions** menu in the toolbar.
2. Hover over or click **Sort all charts**.
3. Select a sort order:
   - **Survey order**: Preserves the original option order defined during survey authoring.
   - **Largest first**: Orders categories in descending frequency so top answers appear first.
   - **Smallest first**: Orders categories in ascending frequency to spotlight niche or underrepresented options.

## 10. Advanced Statistical Indicators

For numerical, scale, Likert, and continuous rating questions, you can inspect parametric statistics and distribution moments:

1. Hover over the question card and click the statistical information action.
2. The Advanced Statistics dialog displays key distribution metrics:
   - **Sample Mean ($\bar{x}$)** and **Standard Error ($SE$)**.
   - **Sample Variance ($s^2$)** and **Standard Deviation ($s$)**.
   - **Skewness** (distribution asymmetry) and **Kurtosis** (tail heaviness).
   - **95% Confidence Interval** for the population mean.

<figure>
  <img src="./assets/survey-analytics/step-13-advanced-statistics.png" alt="Advanced statistics dialog showing mean, standard error, skewness, and confidence interval">
  <figcaption>The advanced statistics modal displays parametric summary statistics and distribution moments.</figcaption>
</figure>

## 11. Exporting the Filtered Dataset

You can export the survey dataset at any time, reflecting all active filter criteria:

1. Click the **Export** button in the top toolbar.
2. Select your desired format:
   - **CSV**: Standard comma-separated tabular data for Excel, Google Sheets, R, or SPSS.
   - **JSON**: Hierarchical structured data for automated pipelines or web applications.
3. Choose whether to export the complete survey dataset or only the currently filtered subset.
4. Click **Download**.

<figure>
  <img src="./assets/survey-analytics/step-11-export-dataset.png" alt="Export dataset dialog with format and download options">
  <figcaption>Export the active dataset (or filtered subset) directly to CSV or JSON formats.</figcaption>
</figure>

---

## Related Content

- [How to Analyze Respondent Behavior and Data Quality](./behavior-analytics.md): Inspect timing paradata, quality signals, drop-offs, and exclude low-effort responses.
- [Survey Analytics Workbench Reference](../reference/analyze/survey.md): Complete specifications for UI controls, card parameters, view schemas, and statistical formulas.
- [Behavioral Analytics Reference](../reference/analyze/behavior.md): Algorithmic rules, scoring rubrics, and formulas for behavioral metrics.
- [Understanding Respondent Behavior and Data Quality](../explanation/confidence-index.md): Conceptual background on satisficing, paradata, response latency, and survey methodology literature.
