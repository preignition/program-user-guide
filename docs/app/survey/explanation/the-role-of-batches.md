---
description: An explanation of why survey batches are used for longitudinal studies, temporal data grouping, and their lifecycle.
---

# The Role of Survey Batches

In many data collection scenarios, a survey isn't just a one-off event. It is often repeated over time—monthly, quarterly, or annually—to track changes, measure progress, or conduct longitudinal research.

Accessible Surveys uses **Batches** as a core architectural concept to manage these recurring data collection cycles elegantly.

## What is a Batch?

A **Batch** is a designated "bucket" or temporal container for survey responses. Instead of creating a brand-new copy of your survey for "Q1", "Q2", and "Q3", you use a single, unified survey entity and simply open a new Batch for each time period.

When a respondent completes the survey, their response is automatically tagged with the currently active Batch.

## Why Batches Matter

### 1. Unified Analytics and Longitudinal Tracking

The most significant advantage of using Batches is the ability to track data across time. If you were to create a separate survey for every year, comparing Year 1 to Year 2 would require manually merging datasets outside the platform.

Because Batches tag responses within the *same* survey structure, the platform's analytics engine can easily generate comparison reports, trend lines, and longitudinal studies right out of the box.

### 2. Structural Consistency and Versioning

When conducting recurring research, questions usually remain largely the same, perhaps with minor tweaks. By using Batches, you maintain a single source of truth for your form design.

Coupled with our [Survey Versioning](./survey-versionning.md) system, you can safely iterate on your questions between batches. The system knows exactly which version of the form was used for the "2025 Batch" versus the "2026 Batch," ensuring data integrity while keeping everything organized under one roof.

### 3. Simplified Campaign Management

Batches make campaign management simpler. You don't need to generate new QR codes or update the link on your website every month. The URL remains the same; you simply close the old batch and open a new one in the administrative dashboard. The system automatically routes incoming data to the active batch.

---

## The Conceptual Lifecycle of a Batch

Understanding how a batch moves through different states will help you effectively manage your recurring data collection campaigns:

### 1. Creation and Configuration

When you are ready to start a new round of data collection, you create a new batch. During creation, you assign it a meaningful name (e.g., "Q1 2026 Employee Feedback") and link it to the current [Published Version](./survey-versionning.md) of your survey. This ensures that the system knows exactly which questions respondents will be answering for this specific batch.

### 2. The "Active" State

Once a batch is marked as **Active**, the survey's production link begins routing all new incoming responses into this specific container.

* **Only one batch can be actively collecting data at a time.** This strict rule prevents data from accidentally spilling into the wrong temporal bucket.

### 3. The "Closed" State

When your data collection period ends, you close the active batch.

* Closing a batch freezes its dataset.
* If a respondent tries to access the production link while no batch is active, the system will inform them that the survey is currently closed.

---

## The Workflow of Recurring Surveys

Using batches changes the workflow of running a recurring survey from a scattered, file-based process to a streamlined, centralized one:

1. **Year 1:** You build Version 1 of your survey, create the "2025" Batch, make it active, and collect responses. You then close the "2025" Batch.
2. **Year 2:** You realize a question needs tweaking. You edit the form, build Version 2, and publish it. You then create the "2026" Batch, link it to Version 2, make it active, and collect responses.

At the end of this process, you have a single survey entity containing two distinct datasets ("2025" and "2026"). The platform's analytics engine can now automatically compare these two batches, completely aware that they used slightly different versions of the form.

---

## The "Why" Behind the Design

We introduced Batches because longitudinal data is incredibly valuable, but historically difficult to manage without advanced statistical software. By building temporal grouping directly into the data architecture of Accessible Surveys, we lower the barrier to entry for conducting high-quality, recurring research.
