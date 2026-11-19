---
description: Learn how to partition survey responses into longitudinal waves and manage the active batch.
---

# How to use survey batches

By default, all responses to a survey are grouped under a single `default` batch. When conducting recurring or longitudinal research—such as quarterly customer satisfaction, semester evaluations, or annual audits—you can activate **Batches** to partition responses across time periods without creating duplicate surveys.

## When to use batches

- **Longitudinal studies:** Re-survey the same audience over time while keeping responses separated by wave.
- **One response per person per wave:** Prevents duplicate submissions within the same collection period while allowing respondents to participate again in future waves.
- **Wave-by-wave analytics:** Compare and isolate responses by batch in the Analyze dashboard.

::: tip Availability Scheduling vs. Batches
To set exact opening and closing dates for your survey, use [Share → Status](../reference/share/status/index.md). Batches partition and tag responses into waves; opening and closing times are governed by your status strategy.
:::

## Step 1: Open the Batch settings

1. In the survey top bar, enable **Advanced Mode**.
2. Navigate to the **Share** tab.
3. In the left-hand drawer, select **Batch**.

## Step 2: Activate the Batch feature

1. Toggle the **Activate Batch Feature** switch on.
2. When activated, the page displays the **Current Batch** summary and the **Batch List** table.

## Step 3: Create a new batch

1. Click the **Add Batch** button above the batch list.
2. In the dialog, enter:
   - **Name**: A descriptive title for the wave (e.g., "Q1 2026 Evaluation").
   - **Description**: Optional notes regarding the participant cohort or survey wave objectives.
3. Confirm to create the batch.

## Step 4: Set the active batch

1. In the **Batch List**, locate the batch you want to use for new incoming responses.
2. Select **Make Current** (or click the star indicator) to designate it as the active batch.
3. The active batch is marked with a star icon in the grid. All newly incoming submissions will automatically be tagged with this batch ID.

## Step 5: Filter responses by batch in Analytics

1. Navigate to the **Analyze** tab in the top navigation.
2. In **Survey Analytics**, use the **Batch** filter dropdown to isolate responses from a specific collection wave, or compare trends across multiple batches.

## Related Content

- [Batch Reference](../reference/share/batch/index.md) — Technical details of the batch feature
- [The Role of Batches Explanation](../explanation/the-role-of-batches.md) — Architecture of batches and response keying
- [Survey Analytics How-to Guide](./survey-analytics.md) — Filtering and analyzing response data
