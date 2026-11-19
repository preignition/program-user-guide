---
description: Practical guidance for survey creators on GDPR compliance, lawful basis, data subject rights, and international data transfers.
---

# GDPR Compliance and Survey Privacy

::: warning Maintainer Legal Review
This page contains informational guidance on data protection regulations and platform mechanisms. It must undergo maintainer legal review prior to production deployment and does not constitute formal legal advice.
:::

## Introduction

When conducting surveys, collecting feedback, or running consultations, survey creators frequently gather personal data from respondents. Under data privacy laws such as the **General Data Protection Regulation (GDPR)** in the European Union and the **UK GDPR**, organizations collecting personal data bear specific legal obligations.

This guide outlines practical steps and architectural realities to help survey creators ensure their data collection complies with the GDPR and related global privacy standards.

## Controllers and Processors: Who Is Responsible for What?

The GDPR distinguishes between two primary roles:

### 1. The Data Controller (You / Your Organization)

Under [Article 4(7) of the GDPR](https://gdpr-info.eu/art-4-gdpr/), the **Data Controller** is the entity that determines the purposes and means of processing personal data.

When you use Accessible Surveys to design a questionnaire, invite participants, and collect responses:

- **You are the Data Controller** for all personal data submitted by your respondents.
- You decide what questions to ask, which data is necessary, how long responses are retained, and who can access the export files.
- You are responsible for ensuring that you have a valid lawful basis for collecting respondent data, providing an accurate privacy notice, and responding to data subject requests (such as requests for deletion or access).

### 2. The Data Processor (Accessible Surveys / Preignition)

Under [Article 4(8) of the GDPR](https://gdpr-info.eu/art-4-gdpr/), the **Data Processor** processes personal data on behalf of, and under the instructions of, the data controller.

Accessible Surveys (operated by Preignition Ltd) acts as a **Data Processor** regarding survey responses collected on your behalf:

- The platform processes survey responses strictly in accordance with your configuration and instructions.
- We implement technical and organizational measures to safeguard response data against unauthorized access, loss, or alteration.
- We maintain sub-processor agreements with our underlying cloud infrastructure providers.

*(Note: Preignition is a data controller only in relation to customer account data—such as creator email addresses and billing information—collected directly to create and manage platform accounts.)*

## Establishing a Lawful Basis for Processing

Under [Article 6 of the GDPR](https://gdpr-info.eu/art-6-gdpr/), all processing of personal data must rest on a lawful basis. For survey creators, the two most common bases are:

1. **Consent (Article 6(1)(a)):** The respondent has given clear, affirmative consent for their personal data to be processed for one or more specific purposes.
2. **Legitimate Interests (Article 6(1)(f)):** Processing is necessary for your organization's legitimate interests (such as improving a public service or gathering customer feedback), provided those interests are not overridden by the fundamental rights and freedoms of the respondent.

### Obtaining Valid Consent

When relying on consent:

- **Active Opt-In:** Consent must be freely given, specific, informed, and unambiguous. You cannot use pre-ticked checkboxes or passive implied agreement.
- **Granular and Distinct:** If you intend to use respondent email addresses for multiple distinct purposes (e.g., confirming survey submission vs. contacting them for future research), separate opt-in consent is required for each purpose (see [Email Purposes](../reference/share/email/index.md#email-purposes)).
- **Easy to Withdraw:** It must be as easy for respondents to withdraw their consent as it was to grant it.

### Collecting Sensitive ("Special Category") Data

Surveys in the accessibility and disability domain frequently involve health conditions, impairments, or accessibility accommodations. Under [Article 9 of the GDPR](https://gdpr-info.eu/art-9-gdpr/), data concerning health, racial or ethnic origin, political opinions, or religious beliefs constitutes **special category data**.

Processing special category data is prohibited unless an exemption applies. In survey contexts, the primary exemption is **explicit consent** (Article 9(2)(a)):

- Clearly explain *why* the sensitive question is being asked and *how* the information will be used before the question is answered.
- Mark sensitive demographic questions as strictly optional.
- Use helper text and survey terms agreements to ensure respondents actively confirm their agreement to share this information.
- Consider whether an anonymized session meets your research needs without collecting identifiable personal data.

## Respondent Rights under GDPR

The GDPR grants individuals specific rights regarding their personal data ([Articles 12–23](https://gdpr-info.eu/chapter-3/)). As the Data Controller, you must facilitate the exercise of these rights:

| Right | Description | How to Handle in Accessible Surveys |
| :--- | :--- | :--- |
| **Right to be informed** | Individuals must know who is collecting their data, why, and how long it is stored. | Provide a clear privacy policy link or welcome notice on the survey landing page before questions begin. |
| **Right of access** | Individuals can request a copy of their personal data (Subject Access Request). | Use the **Server compliance archive** export option to retrieve records matching a verified respondent ID. |
| **Right to rectification** | Inaccurate or incomplete personal data must be updated. | Corrections can be coordinated through team administrators. |
| **Right to erasure** ("Right to be forgotten") | Individuals can request deletion of their personal data when it is no longer necessary or consent is withdrawn. | Use the platform's data purge workflows or delete specific individual submissions. |
| **Right to restrict processing** | Individuals can limit how their data is used while a dispute or verification is pending. | Exclude disputed responses from analytics and exports via the response workbench. |
| **Right to data portability** | Individuals can receive their data in a structured, machine-readable format. | Export response data in standard CSV or JSON format. |
| **Right to object** | Individuals can object to processing based on legitimate interests or direct communications. | Respect unsubscribe requests immediately; the invitation system automatically registers unsubscribes on the team suppression list. |

## Where Data Is Stored and International Transfers

Accessible Surveys is built on Google Cloud Platform and Firebase infrastructure.

### Infrastructure Architecture

Core platform services utilize the following components:

- **Google Cloud Firestore & Cloud Storage:** Store encrypted survey definitions, question configurations, media assets, and respondent submissions.
- **Firebase Authentication:** Handles secure user authentication (supporting email/password, Google identity, and anonymous sessions).
- **Google Cloud Functions:** Run secure serverless backend workflows, survey compilation, and data exports.

### International Data Transfers

Certain cloud services process data on global infrastructure, including United States data centers. Under [Chapter V of the GDPR (Articles 44–50)](https://gdpr-info.eu/chapter-5/), transferring EU or UK personal data outside the European Economic Area (EEA) requires appropriate safeguards:

- **Standard Contractual Clauses (SCCs):** Data transfers outside the EEA are governed by the European Commission's modernized Standard Contractual Clauses (adopted on June 4, 2021). Preignition adheres to Google Cloud's Cloud Data Processing Addendum (CDPA), which incorporates these approved SCCs.
- **UK International Data Transfer Addendum:** For transfers originating in the United Kingdom, the UK Addendum to the EU SCCs applies.
- **EU-U.S. Data Privacy Framework (DPF):** Google LLC participates in the EU-U.S. Data Privacy Framework and the UK Extension, providing an adequacy determination for eligible commercial transfers. *(Note: The legacy EU-U.S. Privacy Shield framework was invalidated in 2020 and is no longer relied upon.)*

## Security Measures and Data Breaches

Under [Article 32 of the GDPR](https://gdpr-info.eu/art-32-gdpr/), controllers and processors must maintain technical and organizational measures appropriate to the risk:

- **Encryption in Transit:** All traffic between browsers, respondents, and server endpoints is encrypted using modern TLS (HTTPS).
- **Encryption at Rest:** All data stored within Cloud Firestore, database backups, and media buckets is encrypted at rest using AES-256 standard encryption.
- **Access Control:** Strict Firestore Security Rules enforce authentication and role-based permissions, preventing unauthorized access across team boundaries.

### Data Breach Response

Under [Article 33 of the GDPR](https://gdpr-info.eu/art-33-gdpr/), if a personal data breach occurs that presents a risk to the rights and freedoms of individuals, the Data Controller must notify the competent supervisory authority **within 72 hours** of becoming aware of the breach.

If the breach is likely to result in a **high risk** to respondents' rights and freedoms (e.g. exposure of sensitive medical or financial records), the controller must also inform affected respondents directly without undue delay ([Article 34](https://gdpr-info.eu/art-34-gdpr/)).

## Related Content

- [Writing a Survey Privacy Policy](./writing-a-privacy-policy.md) — Drafting a clear, plain-language privacy notice for your surveys.
- [Data Privacy and Security Architecture](./data-privacy-and-security.md) — Conceptual framework for anonymized exports, invitation boundaries, and minimal data collection.
- [Authentication and Identity](./authentication.md) — How account types and respondent sessions operate.
- [Exporting Survey Data](../how-to/exporting-survey-data.md) — Exporting compliant datasets and anonymized files.
- [Purging Collected Data](../how-to/purging-collected-data.md) — Deleting response sets upon completion of a research study.
