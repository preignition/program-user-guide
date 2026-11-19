---
description: An explanation of why survey batches are used for longitudinal studies, temporal data grouping, and their lifecycle.
---

# The Role of Survey Batches

In many data collection scenarios, a survey isn't just a one-off event. It is often repeated over time—monthly, quarterly, or annually—to track changes, measure progress, or conduct longitudinal research.

Accessible Surveys uses **Batches** as a core architectural concept to manage these recurring data collection cycles elegantly.

## What is a Batch?

A **Batch** is a designated container for survey responses collected during a specific time wave. Instead of duplicating the entire survey for "Q1", "Q2", and "Q3", you maintain a single unified survey and activate a new batch for each collection period.

When a respondent submits their answers, their response document is automatically tagged with the currently active batch identifier.

## Why Batches Matter

### 1. Unified Analytics and Longitudinal Tracking

The most significant advantage of using Batches is the ability to track data across time. If you were to create a separate survey for every year, comparing Year 1 to Year 2 would require manually merging datasets outside the platform.

Because Batches tag responses within the *same* survey structure, the platform's analytics engine can easily generate comparison reports, trend lines, and longitudinal studies right out of the box.

### 2. Structural Consistency Across Waves

When conducting recurring research, questions usually remain largely the same, perhaps with minor refinements over time. By using Batches, you maintain a single source of truth for your form design and accessibility assets.

Coupled with our [Survey Versioning](./survey-versioning.md) system, you can safely update and build new versions of your form between waves. Responses always record the build version they answered under, ensuring complete historical integrity.

### 3. Simplified Distribution URLs

Batches eliminate the need to generate new QR codes or update web links for every new study period. Your distribution URL remains identical; you simply designate the new batch as **Current** in the administrative dashboard. Incoming responses are immediately tagged with the new batch.

---

## The Lifecycle of a Batch

### 1. Creation and Configuration

When preparing for a new collection wave, you create a new batch by providing a descriptive name (e.g., "Q1 2026 Assessment") and an optional description detailing the cohort or wave goals.

### 2. The Active ("Current") State

Once a batch is designated as **Current**, all new incoming submissions from the live survey are tagged with this batch ID.

* **Only one batch can be actively receiving responses at a time.** This ensures clean partitioning of response waves.
* If the batch feature is turned off, incoming responses are grouped under the `default` batch.

### 3. Managing Collection Waves

When a collection period ends:

* Designate a newly created batch as Current to begin the next collection wave.
* To pause or close data collection entirely across all respondents, configure your availability schedule in [Share → Status](../reference/share/status/index.md).

---

## Related Content

* [How to Use Survey Batches](../how-to/using-batches.md) — Step-by-step instructions for managing batches
* [Survey Building and Versioning](./survey-versioning.md) — How compiled builds protect questionnaire snapshots
* [Survey Status Reference](../reference/share/status/index.md) — Scheduling survey opening and closing dates
