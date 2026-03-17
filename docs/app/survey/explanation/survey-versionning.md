---
description: An explanation of why surveys must be built and how versioning protects your data integrity.
---

# Survey Building and Versioning

In Accessible Surveys, creating a survey and collecting data are intentionally separated by two critical concepts: **Building** and **Versioning**. Rather than changes immediately affecting live respondents, our platform requires you to explicitly "build" a new version of your survey before those changes are published.

This document explains the rationale behind this architecture and what happens under the hood during the build process.

## Why Do We Build Surveys?

When you edit a survey—adding questions, tweaking logic, or enabling accessibility modes—you are working on a "draft" state. If these changes were instantly live, you would risk disrupting respondents who are currently taking the survey, or worse, corrupting your dataset by changing the meaning of a question halfway through data collection.

**Building** a survey acts as a snapshot mechanism. It takes your current draft, compiles it, and freezes it into an immutable package.

### What Happens During a Build?

During the build process, the system performs several operations:

1. **Validation:** It runs checks to ensure there are no obvious errors (like broken logic expressions or missing translations).
2. **Compilation:** It flattens the hierarchical structure (Forms, Pages, Sections, Questions) into an optimized, read-only configuration that can be rapidly delivered to the respondent's browser.
3. **Snapshotting:** It permanently links the exact state of your questions, options, and text at that moment in time.

This ensures that the survey presented to the user is fast, stable, and completely decoupled from the ongoing edits in the form builder.

## The Role of Versioning

Every time you successfully build a survey, the system creates a new **Version**.

### Protecting Data Integrity

The primary rationale for strict versioning is data integrity. Imagine you ask, "Do you like apples?" and 50 people answer "Yes." Later, you change the question to "Do you like oranges?" without versioning. Your data would show 50 "Yes" answers, but you wouldn't know if they were responding to apples or oranges.

By versioning the survey:

* **Traceability:** Every respondent's answer is permanently linked to the exact version of the survey they saw.
* **Iterative Design:** You can safely iterate on a survey year after year (or week after week) without losing the historical context of previous datasets.
* **Rollbacks:** If you publish a version and realize there is a mistake, you can quickly switch the active survey back to a previous, known-good version.

## Connecting Builds to Test and Production

Because builds are immutable snapshots, you can safely deploy them to different environments:

* **Test Link:** You can build a version and share it via a test link to get feedback from your team. Test responses are kept separate from real data.
* **Production Link:** Once a test version is approved, you can publish that exact same build to the production link for real respondents.

By separating the drafting process from the live environment through **Building and Versioning**, Accessible Surveys ensures that your respondents have a reliable experience and that your resulting data is structurally sound and historically accurate.
