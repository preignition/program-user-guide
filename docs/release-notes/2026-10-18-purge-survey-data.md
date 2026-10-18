---
description: Remove the data a survey collected, keeping the survey itself.
---

# Purge Survey Data

**Date:** 2026-10-18
**Version:** 1.0.0

## Overview

A survey's owner — or a team owner/admin — can now purge the data a survey collected from the survey's own **Purge data** action: responses and their derived trees, the survey's sessions and their answers, and the reminder contact records. The survey, its form and its configuration survive and stay usable.

## What's New?

### Purge data, in place

* **What it is:** A confirmation dialog reads an inventory first — what will be deleted, with its counts and databases, and what will be kept — then asks you to type the survey's name. The purge runs server-side and records an activity entry naming who purged what and when.
* **Why it matters:** Collected data can be removed without rebuilding the survey, and the exception for shared answer stores is visible before anyone confirms rather than discovered afterwards.
* **How to use:** Open the survey, choose **Purge data**, read the inventory, type the survey name, confirm.
* **Read more:** [Purge the data a survey collected](../app/survey/how-to/purging-collected-data.md)

## Notes

* The survey definition, its form and the published build are kept; a purge is not the destructive delete-survey action.
* Shared answer stores (`user` and `organisation` section keying) and test answers are out of scope and named in the preview.
* Reminder contact records go with the data, so the reminders of a purged survey stop.
