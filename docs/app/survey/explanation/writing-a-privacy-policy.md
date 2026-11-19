---
description: Practical guidance on writing a clear, plain-language, GDPR-compliant privacy policy for your surveys.
---

# Writing a Survey Privacy Policy

::: warning Maintainer Legal Review
This page contains practical guidance on drafting survey privacy notices. It must undergo maintainer legal review prior to production deployment and does not constitute formal legal advice.
:::

## Introduction

Under data protection laws like the GDPR and UK GDPR, transparency is fundamental. When you ask individuals to share their opinions, experiences, or demographic information, they have a legal right to understand who is collecting their data, why it is needed, and how it will be protected.

A clear, concise, and accessible privacy notice builds trust with respondents, leading to higher response rates and more honest responses.

## Key Principles of a Survey Privacy Notice

Under [Article 12 of the GDPR](https://gdpr-info.eu/art-12-gdpr/), privacy information must be:

- **Concise and Transparent:** Keep the policy focused on the survey in question. Avoid boilerplate corporate disclaimers that do not apply to the research.
- **Easy to Read and Understand:** Use Plain Language. Avoid archaic legal jargon (*heretofore*, *inter alia*) and write in simple, direct sentences.
- **Easily Accessible:** Provide the privacy notice directly at the point of collection—before respondents begin answering questions.

::: tip Plain Language and Accessibility
When creating accessible surveys, your privacy policy should match the accessibility level of your questionnaire. If your survey offers an Easy Read version, provide a simplified, illustrated summary of the privacy policy as well. See [Producing Surveys in Plain Language or Easy Read](./producing-plain-language-easy-read.md).
:::

## What Your Survey Privacy Policy Must Cover

A complete survey privacy notice should address the following key points:

### 1. Identity and Contact Information

- Clearly identify your organization as the **Data Controller**.
- Provide contact information for your team or organization.
- Include contact details for your **Data Protection Officer (DPO)** or privacy contact person, so respondents know where to direct questions or requests.

### 2. What Data Is Collected and How

- **Information Actively Provided:** List the specific categories of data you are requesting in the survey (e.g. name, email, demographic indicators, accessibility preferences, feedback answers).
- **Automated Data:** Clarify whether any technical metadata is gathered. By default, Accessible Surveys collects minimal technical telemetry (coarse country-level inference from CDN headers) and does not record raw IP addresses or track fine-grained GPS locations.
- **Voluntary Participation:** Clearly state whether answering each question is required or optional.

### 3. Purpose and Legal Basis

- Explain *why* you need the information and what you intend to do with the findings (e.g. academic research, service improvement, policy advocacy).
- State your **lawful basis** under GDPR (typically explicit consent under Article 6(1)(a) and Article 9(2)(a), or legitimate interests under Article 6(1)(f)).

### 4. Data Sharing and Third-Party Processors

- Disclose whether response data will be shared with external research partners, clients, or published in public reports.
- Confirm whether reports will publish only aggregated, anonymized summaries.
- Clarify that data is hosted on secure cloud infrastructure managed by Accessible Surveys (Preignition Ltd) as the data processor.

### 5. Data Retention and Deletion

- Specify how long the survey responses and any contact details will be kept.
- Explain what happens when the retention period ends (e.g., responses are permanently purged from the database and local archives).
- Avoid indefinite retention clauses; specify a concrete timeframe or review milestone (e.g., "Responses will be retained for 12 months after the close of the consultation, after which they will be permanently deleted").

### 6. Security Measures

- Briefly explain how response data is protected against unauthorized access.
- Note that responses are transmitted using encryption (TLS/HTTPS) and stored in encrypted databases with strict role-based access controls.

### 7. Respondent Rights and Opt-Out

- Explicitly inform respondents of their rights under the GDPR:
  - The right to access a copy of their submitted data.
  - The right to rectify inaccurate data.
  - The right to request erasure ("right to be forgotten").
  - The right to withdraw consent at any time without negative consequences.
- Provide clear instructions on how respondents can exercise these rights (e.g., emailing your DPO or survey coordinator).

## Presentation Patterns in Accessible Surveys

Presenting a dense, multi-page legal document before a survey begins can intimidate respondents and reduce completion rates. Accessible Surveys offers several practical presentation patterns:

### 1. The Welcome / Landing Page Pattern

Place a concise summary of your privacy notice directly on the survey's landing or welcome page. Include the key facts:

- Who you are.
- Why you are collecting feedback.
- How long the survey takes.
- A statement confirming that participation is voluntary and responses are handled according to your privacy policy.
- A direct link to the full privacy policy document.

### 2. Point-of-Collection Helper Text

When asking sensitive or demographic questions (such as disability status, income band, or email address), place concise explanatory text directly beneath the question using the survey's **Helper Text** field.

For example, beneath an optional email question:

> *"We ask for your email address solely to send you a copy of the final research report. It will never be shared or used for marketing purposes."*

This contextual transparency reassures respondents at the moment of decision, improving trust without cluttering the initial landing screen.

### 3. Custom Terms & Consent Modal

For surveys collecting sensitive personal data where explicit opt-in consent is legally required, configure the survey's **Terms** settings. Respondents must actively review and check the agreement before they can proceed to the questions (see [How to Set Survey Terms](../how-to/survey-terms.md)).

## Related Content

- [GDPR Compliance and Survey Privacy](./gdpr-compliance.md) — Comprehensive reference on controller/processor duties, lawful basis, and data subject rights.
- [Data Privacy and Security Architecture](./data-privacy-and-security.md) — Architectural overview of anonymization and minimal data collection.
- [How to Set Survey Terms](../how-to/survey-terms.md) — Configuring mandatory consent and policy agreements.
- [Producing Surveys in Plain Language or Easy Read](./producing-plain-language-easy-read.md) — Making legal and survey text clear and accessible.
