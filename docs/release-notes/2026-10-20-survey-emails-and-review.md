---
description: New email tools for reaching respondents, and a built-in review that catches quality issues before you publish.
---

# Better Surveys, From First Draft to Final Send

**Date:** 2026-10-20
**Version:** 2.2.0

## Overview

Two new tools help you stay close to respondents and publish a survey you can trust. The **Email** page lets you send a confirmation, gentle reminders and follow-ups, with consent and privacy built in. The new **Review** workspace brings every quality check and suggestion into one place, with fixes you can apply on the spot.

<figure>
  <img src="../app/survey/reference/share/email/assets/email-auto.png" alt="The Email page showing the Confirmation tab, with a subject and body written in English.">
  <figcaption>The Email page gives each kind of email its own tab, with a subject and body for every survey language.</figcaption>
</figure>

## What's New?

### Emails That Respect the Respondent

* **What it is:** A new **Email** page under **Share** for the messages a survey can send: a confirmation when someone submits, reminders if they do not finish, and follow-ups after you have looked at the results. Each kind of email has its own tab and its own subject and body for every survey language.
* **Why it matters:** Respondents get a record of their submission, a gentle nudge when they need one, and a way to hear about the results — without you chasing them by hand or handling a list of addresses.
* **How to use:** Open **Share → Email**. Add an email question to the survey and choose what the address is used for; a tab appears for each use you choose. Write the subject and body, and switch language at the top of the tab.
* **Read more:** [Email Reference](../app/survey/reference/share/email/index.md)

### Reminders and Follow-Ups on Your Terms

* **What it is:** Reminders are opt-in: the respondent ticks a box on the email question, and the survey may send up to two reminders. In advanced mode you choose how many, how many days apart, and the date after which nothing is sent. Follow-ups — **Results and reports** and **Follow-up survey** — are written on their own tabs and sent by hand to the people who opted in.
* **Why it matters:** You can bring a respondent back to an unfinished survey, or share results and invite people to a later survey, without turning your data into a mailing list. Every email is sent in the respondent's language and carries an unsubscribe link where one is needed.
* **How to use:** Write the **Reminders** tab, then open **Advanced** to set the schedule and how long a consent is kept. For a follow-up, open its tab, write the message, and use **Send**; the page tells you how many people will receive it before you confirm. Put any link to a report or follow-up survey in the body.
* **Read more:** [Reminders](../app/survey/reference/share/email/index.md#reminders) and [Follow-up emails](../app/survey/reference/share/email/index.md#follow-up-emails)

### Consent, Privacy and Data Control

* **What it is:** The address is used only for the emails the respondent chose. It stays out of the survey data and exports unless the question also carries the **Dataset** purpose. The platform records what the respondent agreed to, the unsubscribe link works without signing in, and a consent — and the address it holds — is deleted after 180 days by default. A survey owner can also choose **Purge data** to remove what a survey collected, with a preview of what will be deleted and what will be kept, and an activity entry naming who did it.
* **Why it matters:** You can stay in touch without keeping personal data longer than you need it, and you can remove collected data without rebuilding the survey.
* **How to use:** Choose **Dataset** only when the address is part of the answers you want to analyse. Read the purge preview before confirming; type the survey name to proceed.
* **Read more:** [Data Privacy and Security](../app/survey/explanation/data-privacy-and-security.md) and [Purge collected data](../app/survey/how-to/purging-collected-data.md)

### A Single Review Before You Publish

* **What it is:** A new **Review** workspace in the Survey Builder, between **Compose** and **Form Behavior**. It combines the platform's automatic checks — structure, logic and translations — with an AI review of clarity, repetition and coverage. Counts by severity, filters, and a clear list-and-detail layout make it easy to see what needs attention.
* **Why it matters:** You no longer have to hunt through separate screens or wait for a build to discover a problem. The review shows the issue, the item it concerns, why it matters and what to do about it, all in one place.
* **How to use:** Open a survey, choose **Build → Review**, and use **All / Errors / Warnings / Suggestions** or **By family / By severity** to narrow the list.
* **Read more:** [Review Reference](../app/survey/reference/build/review.md)

<figure>
  <img src="../app/survey/reference/build/assets/review-auto.png" alt="The Review panel showing a selected logic finding, its evidence and the available actions.">
  <figcaption>The Review panel: the findings list on the left, and the selected finding's evidence and actions on the right.</figcaption>
</figure>

### Suggestions You Can Fix in Place

* **What it is:** The AI review suggests improvements to wording, repeated questions and topics the survey may have missed. Those suggestions are clearly marked. Automatic checks flag broken logic, empty sections, unpublished shared sections and missing translations. Each finding offers the action that fits it: **Apply** a proposed wording with **Undo**, **Clear slot** for a broken logic reference, **Translate** a missing item or every missing item in a language, **Insert** a suggested question, **Activate** an unpublished section, or **Dismiss** and **Restore**.
* **Why it matters:** Most findings can be fixed without leaving the review, and an AI suggestion never changes anything on its own. You stay in control of every edit.
* **How to use:** Select a finding and choose its action. In the Compose tree's settings mode, a review marker shows which items need attention; the tree header's findings chip opens the full panel. In **Share → Build**, the same panel appears with the build report, so the final check happens right before you publish.
* **Read more:** [Review Actions](../app/survey/reference/build/review.md#actions) and [Editor markers](../app/survey/reference/build/review.md#editor-markers)

## Fixes & Improvements

* The review now catches empty sections, broken logic references, unpublished shared sections and missing translations as you edit, not only at build time.
* A failed review run explains what happened and offers **Run again**. If the survey changed since the last run, the panel says so instead of pretending the findings are current.
* Confirmations are one-off transactional emails; reminders and follow-ups only go to respondents who opted in. Test submissions never send email and never record a consent.
* The unsubscribe link works without an account, and the privacy policy now explains the survey emails, the consent records and the purge.
* Email addresses stay out of the survey data and exports unless the email question also carries the **Dataset** purpose.

## Notes

* AI review findings are suggestions in this release. Promoting one to a warning is a separate decision, and nothing is changed automatically.
* The automatic checks need no AI. The AI review runs only when you choose **Run review**; where AI credits are enabled, a run uses one credit and the panel tells you the price before you start.
* The review covers structure, logic, translation, clarity, repetition and coverage. Sign-language and read-aloud coverage, per-mode markers and portfolio-level review are not part of this release.
* The purge removes responses, sessions and consent records. Shared answer stores and test answers are outside it and are named in the preview.
* The privacy policy version is updated with this release, so respondents may be asked to consent again on their next visit.

## Related Content

* [Email Reference](../app/survey/reference/share/email/index.md)
* [Review Reference](../app/survey/reference/build/review.md)
* [Compose Reference](../app/survey/reference/build/compose/index.md)
* [Localize Reference](../app/survey/reference/build/localize.md)
* [Share Reference](../app/survey/reference/share/index.md)
