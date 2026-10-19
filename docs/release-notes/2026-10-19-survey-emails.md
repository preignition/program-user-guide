---
description: Confirmation, reminder and follow-up emails with respondent consent, the Purge data action, and the privacy policy that names them.
---

# Survey Emails, Consent and Data Control

**Date:** 2026-10-19
**Version:** 1.0.0

## Overview

A survey can now email its respondents at the moments that matter — a confirmation when they submit, reminders while the form is unsubmitted, and follow-ups after the data has been analysed — with an explicit, versioned consent behind everything that is not transactional. Editors collect and send from the **Email** page; the addresses stay out of the survey data unless an editor makes the field an answer. The survey's owner can **Purge data** to remove what a survey collected without rebuilding it, and the privacy policy names the emails, the records they keep and the purge.

## What's New?

### Submission Confirmation Emails

* **What it is:** When a submitted survey holds an address in a field whose purposes include **Submission confirmation**, the platform sends exactly one confirmation email from the survey's email configuration, in the respondent's language.
* **Why it matters:** Respondents get a record of their submission, and the address stays out of the survey data unless the editor also gives the field the **Dataset** purpose.
* **How to use:** On the **Confirmation** tab of the **Email** page (Share → Email), write the subject and body per survey language; in the builder, tick **Submission confirmation** among an email field's purposes.
* **Read more:** [Email Reference](../app/survey/reference/share/email/index.md)

### Reminder Opt-In and Unsubscribe

* **What it is:** A field carrying the **Reminders** purpose shows the survey's notice, an opt-in checkbox and the consent's current state. Ticking it records the consent server-side in the customer's database; unticking it withdraws the consent — the same state the public unsubscribe link sets. Every reminder carries that link: a page with no sign-in that validates the link on the server and confirms in the survey's language.
* **Why it matters:** Consent is explicit and versioned (the wording agreed to is recorded with the record), and the address never enters the survey data, the exports or the editor UI unless the field also carries **Dataset**.
* **How to use:** Tick **Reminders** among an email field's purposes; the notice and opt-in label are written on the **Email** page. Nothing to configure for unsubscribe.
* **Read more:** [Email Reference](../app/survey/reference/share/email/index.md)

### Reminders on a Schedule, and Retention

* **What it is:** An hourly job sends up to two reminders per consent, each a number of days after the last contact, with a deadline after which nothing is sent. A consent is kept for 180 days by default (1 to 365, editor-adjustable); when it passes, the job deletes the record and the address it holds.
* **Why it matters:** A respondent who does not finish can be brought back without collecting an address the survey does not need, and an address never outlives the purpose it was collected for. The sweep never touches the answers.
* **How to use:** On the **Reminders** tab of the **Email** page, write the subject and body per language; in advanced mode, set how many reminders, the delays, the deadline and the retention.
* **Read more:** [Reminder Schedule](../app/survey/reference/share/email/index.md#reminder-schedule)

### Follow-Up Emails

* **What it is:** **Results and reports** and **Follow-up survey** are purposes of their own, beside **Reminders**; a field that carries one asks the respondent to opt in, and a field may carry both. The **Results and reports** and **Follow-up survey** tabs of the **Email** page hold a subject and body per survey language, and a **Send** action that states how many respondents will receive the email before you confirm.
* **Why it matters:** After the data has been analysed you can share the results or a report, or invite respondents to a later survey, without promoting anyone to an account and without an address entering the datasets.
* **How to use:** Write the email — a purpose with no content is not offered to respondents, so no consent is collected for an email the survey cannot send — and put any link (to a report, or to the follow-up survey) in the body. Send again to reach the same respondents again.
* **Read more:** [Follow-up Emails](../app/survey/reference/share/email/index.md#follow-up-emails)

### Consent Records Cover Every Purpose

* **What it is:** One record per respondent carries the purposes they agreed to and the wording version of each, so withdrawing one purpose leaves the others; the unsubscribe link on any email stops them all. The retention window, the purge and the "never exported, never used to identify answers" rule apply to all of them alike.
* **Read more:** [Data Privacy and Security](../app/survey/explanation/data-privacy-and-security.md)

### Purge Data

* **What it is:** A survey's owner — or a team owner/admin — can purge what a survey collected from its **Purge data** action: responses and their derived trees, the survey's sessions and their answers, and the consent records. A dialog reads an inventory first (what will be deleted, with counts and databases, and what will be kept), then asks you to type the survey's name; the run is recorded as an activity entry naming who purged what and when.
* **Why it matters:** Collected data can be removed without rebuilding the survey, and the exception for shared answer stores is visible before anyone confirms.
* **How to use:** Open the survey, choose **Purge data**, read the inventory, type the survey name, confirm.
* **Read more:** [Purge the data a survey collected](../app/survey/how-to/purging-collected-data.md)

### The Privacy Policy Names It All

* **What it is:** The policy states that a survey may email a confirmation or, with an explicit opt-in, reminders, the survey's results and reports, or an invitation to a later survey; what a consent record holds and how long it lasts; that the unsubscribe link works without an account; and that purging a survey's data deletes the records, with an audit entry naming who purged and when. It also corrects the account-email line: the address belongs to the account, and a survey holds it as an answer only when a field collects it.
* **Why it matters:** The platform collects operational addresses, and the policy said nothing about them.
* **Read more:** [Email Reference](../app/survey/reference/share/email/index.md)

## Notes

* Nothing is sent to a respondent who did not opt in; the confirmation is the one transactional email, and it carries a reason line instead of an unsubscribe link.
* Test submissions and test sessions never send email and never record a consent.
* A failed send never affects the submission or the survey, is logged, and is retried by the job (reminders) or the next press of Send (follow-ups).
* The privacy version is bumped with this release, so respondents are asked to consent again on their next visit. The new policy sections are written in English; the existing translations keep their current text until they are re-translated.
* Shared answer stores (`user` and `organisation` section keying) and test answers are out of scope of the purge and named in its preview.
