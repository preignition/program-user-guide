---
description: An explanation of the lifecycle of a survey batch and how it supports temporal data collection.
---

# Using Survey Batches

While [The Role of Batches](./the-role-of-batches.md) explains *why* temporal grouping is a fundamental architectural decision for longitudinal research, this document focuses on the conceptual lifecycle of *using* those batches in practice.

Understanding how a batch moves through different states will help you effectively manage your recurring data collection campaigns.

## The Conceptual Lifecycle of a Batch

A batch is essentially a temporal container for survey responses. Instead of creating a new survey for every new time period, you manage the flow of data by opening and closing batches.

### 1. Creation and Configuration

When you are ready to start a new round of data collection, you create a new batch. During creation, you assign it a meaningful name (e.g., "Q1 2024 Employee Feedback") and link it to the current [Published Version](./survey-versionning.md) of your survey. This ensures that the system knows exactly which questions the respondents will be answering for this specific batch.

### 2. The "Active" State

Once a batch is marked as "Active," the survey's production link begins routing all new incoming responses into this specific container.

* **Only one batch can be actively collecting data at a time.** This strict rule prevents data from accidentally spilling into the wrong temporal bucket.

### 3. The "Closed" State

When your data collection period ends, you close the active batch.

* Closing a batch freezes its dataset.
* If a respondent tries to access the production link while no batch is active, the system will elegantly inform them that the survey is currently closed.

## The Workflow of Recurring Surveys

Using batches changes the workflow of running a recurring survey from a scattered, file-based process to a streamlined, centralized one:

1. **Year 1:** You build Version 1 of your survey, create the "2023" Batch, make it active, and collect responses. You then close the "2023" Batch.
2. **Year 2:** You realize a question needs tweaking. You edit the form, build Version 2, and publish it. You then create the "2024" Batch, link it to Version 2, make it active, and collect responses.

At the end of this process, you have a single survey entity containing two distinct datasets ("2023" and "2024"). The platform's analytics engine can now automatically compare these two batches, completely aware that they used slightly different versions of the form.

By managing the lifecycle of your batches, you maintain a clean, highly organized, and longitudinally trackable data architecture without the overhead of managing dozens of isolated survey links.
