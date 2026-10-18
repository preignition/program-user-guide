---
description: Confirmation emails sent to respondents when they submit a survey.
---

# Submission Confirmation Emails

**Date:** 2026-10-18
**Version:** 1.0.0

## Overview

Surveys can now email respondents a confirmation when they submit. Editors choose which email fields serve the confirmation and write the content on the survey's **Email** page; the platform sends the message at submission, in the respondent's language.

## What's New?

### Confirmation at Submit

* **What it is:** When a submitted survey holds an address in a field whose purposes include **Submission confirmation**, the platform sends exactly one confirmation email from the survey's email configuration.
* **Why it matters:** Respondents get a record of their submission and the address stays out of the survey data unless the editor also gives the field the **Dataset** purpose.
* **How to use:** On the **Email** page (Share → Email), set the email purposes, write the confirmation subject and body for each survey language, and optionally override the sender name and reply-to. In the builder, open an email field's advanced settings and tick **Submission confirmation** among its purposes.
* **Read more:** [Email Reference](../app/survey/reference/share/email/index.md)

## Notes

* A failed send is logged and never affects the submission, and nothing extra is stored.
* Test submissions never send email.
* The confirmation is transactional: the platform adds a reason line and no unsubscribe link.
