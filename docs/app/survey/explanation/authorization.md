---
description: An explanation of how authorization and Firebase Security Rules protect data in Accessible Surveys.
---

# Authorization and Security Rules

While **Authentication** verifies *who* you are, **Authorization** determines *what* you are allowed to do. In the Accessible Data platform, authorization is strictly enforced at the database level using Firebase Security Rules, ensuring that no unauthorized user can access or modify sensitive data, regardless of how they interact with the application frontend.

This document explains the basics of Firebase authorization and how it is specifically applied to protect both survey configurations and respondent data.

## How Firebase Authorization Works

The platform uses [Cloud Firestore](https://firebase.google.com/docs/firestore) as its primary database. Firestore secures data using a specialized declarative language called **Firestore Security Rules**.

Instead of relying solely on the frontend application to hide buttons or restrict views, Security Rules sit directly on the database server. Every single read or write request must pass these rules before it is executed.

* **[Getting Started with Rules](https://firebase.google.com/docs/firestore/security/get-started):** Security rules are evaluated before any data is fetched or modified. If a rule evaluates to `false`, the request is immediately denied.
* **[Rules Structure](https://firebase.google.com/docs/firestore/security/rules-structure):** Rules are organized by matching specific database paths (e.g., `match /survey/{surveyId}`). When a user or the application attempts to access a document at that path, the corresponding rule is triggered.
* **[Rules Conditions](https://firebase.google.com/docs/firestore/security/rules-conditions):** Rules evaluate conditions using the incoming request context, primarily checking the `request.auth` object (which contains the user's verified ID and custom claims) against the existing data in the database.

## Authorization in Accessible Surveys

Our platform applies a comprehensive Role-Based Access Control (RBAC) system. The rules are divided into two distinct domains: managing the surveys themselves  and protecting the data submitted by respondents .

### 1. Survey App Rules

These rules govern the creation, configuration, and management of the surveys. They protect the intellectual property and structural integrity of the questionnaires.

**Role-Based Actions:**
Users are granted roles on a per-survey basis (stored within the document's data). The rules explicitly map these roles to allowed actions:

* **Owner:** Full control. Can `setAccess`, `build`, `export`, `markDeleted`, etc.
* **Editor:** Can modify content (`generateContent`, `translate`, `build`) but cannot alter ownership or access rights.
* **Translator:** A specialized role restricted specifically to the `translate` action.
* **Guest:** Read-only access to view the survey structure.

**Hierarchical Inheritance:**
Because a Survey contains a Form, and a Form contains Pages, Sections, and Questions, the security rules use inheritance. For instance, a Form document looks up its parent Survey to determine if the user has edit rights. This ensures that a user granted 'Editor' access on a survey automatically gains edit rights to all the underlying questions and localized text associated with it.

### 2. Respondent Rules

These rules are arguably the most critical, as they protect the privacy and integrity of the data submitted by respondents.

**Strict Data Isolation:**
When a respondent submits answers, the data is written to a path specific to their user ID (or an anonymous session ID): `match /data/{uidOrBuid}/section/{sectionId}`.

* The primary rule here is simple but absolute: `allow read, write: if isUser(uidOrBuid) || isBusiness(uidOrBuid);`.
* This guarantees that a respondent can only ever read or write their *own* data. It is mathematically impossible for one respondent to query the database and retrieve another respondent's answers.

**Testing vs. Production:**
The rules also strictly isolate test data. Test responses are written to a dedicated `test` sub-path, ensuring they never mix with production data.

**Administrative Access to Results:**
While respondents can only see their own raw responses, survey creators need to analyze the results. The rules allow users who are `Editors` or `Owners` of the parent survey to read the consolidated, anonymized, or humanized data exports stored under the `match /survey/{surveyId}` path.

## The Submission Data Flow: Bridging the Gap

A common question arises when reviewing these security rules: *If respondents can only write to their isolated `/data/...` paths, and survey owners only read from the consolidated `/survey/...` paths, how does the data get from the respondent to the owner?*

The platform bridges this gap using a secure backend data pipeline powered by Cloud Functions.

Here is what happens when a respondent completes a survey:

1. **Isolated Submission (Client-Side):** The respondent's browser writes their answers directly to their highly restricted, private path (e.g., `/data/{uid}/section/{sectionId}`). Because they own this path, the security rules allow the write operation to succeed.
2. **Secure Backend Processing (Server-Side):** A Cloud Function automatically detects that a respondent has finalized their survey. This function runs in a trusted server environment.
3. **Privileged Copying:** Because Cloud Functions bypass client-side Security Rules entirely, the Cloud Function can safely read the respondent's isolated data and copy it over to the survey's consolidated data paths (e.g., `/survey/{surveyId}/raw/{actorId}`).
4. **Consolidated Reading (Client-Side):** Finally, the survey owner or editor logs into their dashboard. When they request the analytics, they query the `/survey/{surveyId}/raw` path. The security rules verify their 'Editor' or 'Owner' role against the survey document and allow them to read the aggregated responses.

### Why this architecture matters

This "write-isolated, read-consolidated" pattern is a foundational security architecture for Accessible Surveys:

* **Tamper-Proofing:** Survey owners cannot alter a respondent's original, isolated submission because they don't have write access to it.
* **Privacy Guarantees:** A malicious user cannot spoof requests to read the consolidated data pool, nor can they scrape other respondents' isolated paths.
* **Safe Anonymization:** The backend Cloud Function can strip out identifying metadata or perform complex data transformations (creating `humanized` or `anonymized` datasets) *before* it is copied to the path the survey owners have access to.
