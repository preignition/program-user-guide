---
description: Reminder emails go out on a schedule the editor sets, and their consent expires.
---

# Reminder Emails and Retention

**Date:** 2026-10-18
**Version:** 1.0.0

## Overview

Reminders now send. An hourly job emails the respondents who asked for them — while they have not submitted — on a schedule the editor configures, and deletes the address when the consent expires.

## What's New?

### Reminders on a Schedule

* **What it is:** Up to two reminders per consent, each a number of days after the last contact, with a deadline after which nothing is sent. Respondents opt in on the field that collects their address.
* **Why it matters:** A respondent who does not finish can be brought back without the survey collecting an address it does not need: nothing is sent without a consent, and a submitted session is never reminded.
* **How to use:** On the **Email** page, write the reminder subject and body for each survey language; in advanced mode, set how many reminders, the delays, the deadline and the retention.
* **Read more:** [Email Reference](../app/survey/reference/share/email/index.md#reminder-schedule)

### Retention and the Expiry Sweep

* **What it is:** A reminder consent is kept for 180 days by default (1 to 365, editor-adjustable). Once it passes, the job deletes the record and the address it holds.
* **Why it matters:** An address does not outlive the purpose it was collected for, and the respondent's answers are never touched by the sweep.
* **How to use:** Nothing to do — the job sweeps every hour.

## Notes

* The job sends only to a consent that is still active and unexpired, in a session that has not submitted, in the survey's current batch.
* Each reminder carries a reason line and the public unsubscribe link; an unsubscribe is honoured immediately.
* Sends are tracked on the record, so a failed send is retried by the next run and never double-counted.
* The reminder is sent in the survey's language, and from the survey's configured sender and reply-to.
