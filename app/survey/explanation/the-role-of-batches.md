---
description: An explanation of why survey batches are used for longitudinal studies and temporal data grouping.
---

# The Role of Batches

In many data collection scenarios, a survey isn't just a one-off event. It is often repeated over time—monthly, quarterly, or annually—to track changes, measure progress, or conduct longitudinal research.

Accessible Surveys uses **Batches** as a core architectural concept to manage these recurring data collection cycles elegantly.

## What is a Batch?

A **Batch** is a designated "bucket" or temporal grouping for survey responses. Instead of creating a brand-new copy of your survey for "Q1", "Q2", and "Q3", you use a single, unified survey entity and simply open a new Batch for each time period.

When a respondent completes the survey, their response is tagged with the currently active Batch.

## Why Batches Matter

### 1. Unified Analytics and Longitudinal Tracking

The most significant advantage of using Batches is the ability to track data across time. If you were to create a separate survey for every year, comparing Year 1 to Year 2 would require manually merging datasets outside the platform.

Because Batches tag responses within the *same* survey structure, the platform's analytics engine can easily generate comparison reports, trend lines, and longitudinal studies right out of the box.

### 2. Structural Consistency

When conducting recurring research, the questions usually remain largely the same, perhaps with minor tweaks. By using Batches, you maintain a single source of truth for your form design.

Coupled with our [Survey Versioning](./survey-versionning.md) system, you can safely iterate on your questions between batches. The system knows exactly which version of the form was used for the "2023 Batch" versus the "2024 Batch," ensuring data integrity while keeping everything organized under one roof.

### 3. Simplified Management

Batches make campaign management simpler. You don't need to generate new QR codes or update the link on your website every month. The URL remains the same; you simply close the old batch and open a new one in the administrative dashboard. The system automatically routes incoming data to the active batch.

## The "Why" Behind the Design

We introduced Batches because longitudinal data is incredibly valuable, but historically difficult to manage without advanced statistical software. By building temporal grouping directly into the data architecture of Accessible Surveys, we lower the barrier to entry for conducting high-quality, recurring research.
