---
description: Respondents opt in to reminder emails on the field that collects their address, and unsubscribe from a public link without signing in.
---

# Respondent Reminder Consent

**Date:** 2026-10-18
**Version:** 1.0.0

## Overview

Editors can now ask a respondent to opt in to reminders. A field that carries the **Reminders** purpose shows the survey's notice and a consent checkbox; ticking it records the consent server-side, in the customer's own database, and the respondent sees the state when they come back to the field.

## What's New?

### Reminder Opt-In on the Field

* **What it is:** A reminder-purpose email field renders the notice the survey configured, an opt-in checkbox, and the consent's current state. Ticking the box asks the platform to record the consent for the respondent's session; unticking it withdraws the consent, the same state the public unsubscribe link sets.
* **Why it matters:** Consent is explicit and versioned — the wording a respondent agreed to is recorded with the record — and the address never enters the survey data, the exports or the editor UI unless the editor also gives the field the **Dataset** purpose.
* **How to use:** In the builder, open an email field's advanced settings and tick **Reminders** among its purposes; the notice and opt-in label are written on the survey's **Email** page. The field then offers the consent to respondents.
* **Read more:** [Email Reference](../app/survey/reference/share/email/index.md)

### Unsubscribe Without Signing In

* **What it is:** Every reminder carries an unsubscribe link. It opens a public page — no sign-in, no account — that validates the link on the server, withdraws the consent, and confirms in the survey's language. An invalid link, or one that was already used, shows a safe message and changes nothing.
* **How to use:** Nothing to configure — the link belongs to the reminder the platform sends.
* **Read more:** [Email Reference](../app/survey/reference/share/email/index.md)

## Notes

* Ticking the checkbox is the only write: typing, prefilling, blurring or leaving the field records nothing, and a test session records nothing.
* One record per session: the record is keyed by the respondent's survey session, so a later opt-in in that session updates it, and a respondent has one reminder consent per survey.
* The record is held for a bounded period (180 days) and belongs to the customer's respondent database, where client writes are denied and a respondent can read only their own record.
* A survey with more than one reminder field builds with a warning — every reminder field shares the single consent per respondent.
* The job that sends the reminders ships with the reminder feature; the unsubscribe page it links to is live already.
