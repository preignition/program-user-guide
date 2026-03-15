---
description: The conceptual framework behind how we handle anonymized datasets, verified accounts, and data security.
---

# Data Privacy and Security

When collecting data—especially from vulnerable populations or through surveys focusing on accessibility—protecting the privacy and security of respondents is paramount.

This document explains the conceptual framework and architectural decisions Accessible Surveys uses to ensure data is handled ethically, securely, and in compliance with modern privacy standards.

## The Philosophy of Minimal Data Collection

Our core philosophy regarding privacy is simple: **We only collect what is strictly necessary.**

By default, Accessible Surveys does not collect PII (Personally Identifiable Information) unless you explicitly design your form to ask for it. We do not track respondent IP addresses, browser fingerprints, or geographic locations in the background.

## Account Types and Anonymity

The platform supports different levels of respondent authentication, allowing you to choose the right balance between data validation and respondent privacy.

1. **Anonymous Surveys:** The default mode. Anyone with the link can respond. The system generates a randomized session ID to handle the technical submission process, but this ID cannot be tied back to a specific individual. This is ideal for sensitive feedback where anonymity guarantees honest answers.
2. **Verified Accounts:** For situations where you need to track participation, prevent duplicate submissions, or conduct longitudinal tracking, you can require respondents to log in. In this scenario, responses are linked to an authenticated account.

### Data Isolation

When a respondent logs in (Verified Account mode), the architecture maintains a strict boundary between their *identity* data (email, name) and their *survey responses*. Researchers must explicitly choose to export identifying information; otherwise, the dataset remains fundamentally anonymized, referencing only abstract User IDs.

## Security Architecture

Accessible Surveys is built on enterprise-grade infrastructure designed to protect data at rest and in transit.

* **Data at Rest:** All survey configurations, logic rules, and respondent data are encrypted while stored in our databases.
* **Data in Transit:** All communications between the respondent's browser and our servers are encrypted using TLS/SSL, ensuring that data cannot be intercepted during submission.
* **Role-Based Access Control (RBAC):** Access to survey data is strictly governed by user roles. Only team members with the 'Owner' or 'Admin' roles can access raw data exports. 'Editors' can modify the form but may be restricted from viewing sensitive PII, while 'Guests' can only review the form structure.

## The "Why" Behind the Design

In the context of the disability movement and inclusive design, trust is critical. Respondents need to know that their data is safe, especially when answering questions about their habits, experiences, or medical needs.

By building privacy controls directly into the foundational architecture—such as offering truly anonymous sessions and decoupling identity from response data—we empower researchers to collect high-quality data ethically, while respecting the boundaries and safety of their respondents.
