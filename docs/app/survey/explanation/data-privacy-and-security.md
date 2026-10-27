---
description: The conceptual framework behind how we handle anonymized datasets, verified accounts, and data security.
---

# Data Privacy and Security

When collecting data—especially from vulnerable populations or through surveys focusing on accessibility—protecting the privacy and security of respondents is paramount.

This document explains the conceptual framework and architectural decisions Accessible Surveys uses to ensure data is handled ethically, securely, and in compliance with modern privacy standards.

## The Philosophy of Minimal Data Collection

Our core philosophy regarding privacy is simple: **We only collect what is strictly necessary.**

By default, Accessible Surveys does not collect PII (Personally Identifiable Information) unless you explicitly design your form to ask for it. We do not track respondent IP addresses, browser fingerprints, or geographic locations in the background.

Operational email addresses are the exception worth naming. A survey can ask a respondent to be emailed — a submission confirmation, reminders while the form is unsubmitted, or a follow-up after the data has been analysed (the survey's results and reports, or an invitation to a later survey) — without that address becoming part of the dataset. The address serves the survey's emails only: it is stored apart from the answers, excluded from every export unless the editor explicitly makes it an answer, and never used to identify a respondent or link them to their answers (see [Email Purposes](../reference/share/email/index.md#email-purposes)).

A consent is a record with a lifetime: the address, the session, the notice version agreed to, the purposes it covers and the sends, held for 180 days by default (1–365, editor-adjustable) and deleted when it ends. Editors see whether an email went out, never the address; a follow-up is sent by hand from the Email page, to the respondents who opted in for that purpose. The survey's owner can [purge the collected data](../how-to/purging-collected-data.md) at any time, which removes the consent records with the responses; the survey itself survives.

## Account Types and Anonymity

The platform supports different levels of respondent authentication, allowing you to choose the right balance between data validation and respondent privacy.

1. **Anonymous Surveys:** The default mode. Anyone with the link can respond. The system generates a randomized session ID to handle the technical submission process, but this ID cannot be tied back to a specific individual. This is ideal for sensitive feedback where anonymity guarantees honest answers.
2. **Verified Accounts:** For situations where you need to track participation, prevent duplicate submissions, or conduct longitudinal tracking, you can require respondents to log in. In this scenario, responses are linked to an authenticated account.

### Data Isolation

When a respondent logs in (Verified Account mode), the architecture maintains a strict boundary between their *identity* data (email, name) and their *survey responses*. Researchers must explicitly choose to export identifying information; otherwise, the dataset remains fundamentally anonymized, referencing only abstract User IDs.

## Anonymized Exports

Marking a question — or a whole section — as **anonymous** in the builder decides what the anonymized export contains. The decisive detail is *when* that decision is applied: anonymization is baked into the stored response at **submission time**, using the build the respondent actually answered. Downloading the anonymized dataset does not re-read your form; it serializes the responses that were anonymized when they were submitted.

Plan around three consequences:

* **Mark fields anonymous before collecting responses.** Marking a field anonymous later only affects responses submitted under a build that includes the change; responses collected earlier keep their values in the anonymized dataset.
* **Changing the setting does not rewrite history.** Removing values already collected requires a backfill of the stored anonymized dataset.
* **Anonymous fields still appear in the export.** The column exists for every question, but its cells are empty for responses that were anonymized.

To mark a question or section anonymous, open it with **Advanced Mode** enabled and switch on **Anonymous** under *Anonymous Settings*. See [Exporting Survey Data](../how-to/exporting-survey-data.md) for the download steps.

## Invitation Records

Sending a survey to a list changes what the organiser can see, so it is worth stating exactly what an invitation records.

A team's **audience** is a reusable address book: one recipient per person per team, with the address, an optional name, language and external id. The team is the controller of that list and confirms a lawful basis and permission for it before importing (the import warranty). The platform processes the list only to send the survey and its reminders; it never uses audience addresses for its own marketing or profiling.

An **invitation** records status, not answers. For each recipient it stores a masked address, a language, status timestamps (sent, delivered, opened, started, submitted, bounced, unsubscribed, complained, failed) and reminder counts. The full address and the unique link live in a separate server-only record. No invitation id, token, address, audience id or actor id is written into a response document, an export or a dataset: the organiser sees *that* someone submitted, never *which answers* are theirs. The Progress table and its status CSV show masked addresses only.

An unsubscribe, a complaint or a hard bounce adds the address's keyed hash to a customer-wide **suppression list**, so a later survey cannot re-contact someone who opted out. The list holds no plaintext address, survives the survey's or audience's deletion, and only a superadmin can remove an entry (with an audit record). Invitations are survey data: purging a survey deletes its runs, invitations and links, while the audience and the suppression list remain until the team or customer removes them.

## Security Architecture

Accessible Surveys is built on enterprise-grade infrastructure designed to protect data at rest and in transit.

* **Data at Rest:** All survey configurations, logic rules, and respondent data are encrypted while stored in our databases.
* **Data in Transit:** All communications between the respondent's browser and our servers are encrypted using TLS/SSL, ensuring that data cannot be intercepted during submission.
* **Role-Based Access Control (RBAC):** Access to survey data is strictly governed by user roles. Only team members with the 'Owner' or 'Admin' roles can access raw data exports. 'Editors' can modify the form but may be restricted from viewing sensitive PII, while 'Guests' can only review the form structure.

## The "Why" Behind the Design

In the context of the disability movement and inclusive design, trust is critical. Respondents need to know that their data is safe, especially when answering questions about their habits, experiences, or medical needs.

By building privacy controls directly into the foundational architecture—such as offering truly anonymous sessions and decoupling identity from response data—we empower researchers to collect high-quality data ethically, while respecting the boundaries and safety of their respondents.
