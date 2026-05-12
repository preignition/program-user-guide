---
description: An explanation of how authentication is implemented and managed across the Accessible Data platform.
---

# Authentication and Identity

Authentication is a foundational pillar of the Accessible Data platform. It ensures that data remains secure, participation is verifiable when necessary, and administrative users have appropriate access to manage their surveys and teams.

This document explains the conceptual model of identity in the application, the role of Firebase Authentication, and how account types evolve throughout a user's journey.

## The Identity Framework

The platform is designed to be inclusive and low-friction. To achieve this, identity is not a static property but a fluid state that can range from a completely anonymous session to a fully verified administrative account.

### 1. Firebase Authentication: The Engine

We leverage **Firebase Authentication** as our core identity provider. It provides enterprise-grade security, handles complex encryption for password storage, and offers seamless integration with various third-party identity providers.

### 2. Supported Authentication Providers
To accommodate a global audience with varying technical setups, we support multiple ways to sign in:

* **Federated Identity (Social Login):** Users can sign in using existing accounts from **Google, GitHub, Facebook, or Twitter**. This reduces password fatigue and leverages the security of these established platforms.
<!-- * **Enterprise SSO (OpenID Connect):** For organizations using Microsoft Azure AD (e.g., UNICEF), we support custom enterprise sign-in. This allows staff to use their organizational credentials, ensuring compliance with corporate security policies. -->
* **Email and Password:** A standard method for users who prefer to maintain separate credentials for the platform.
* **Anonymous Sessions:** This is a "silent" authentication method. It allows respondents to start a survey without the friction of a login screen while still giving the system a stable (though temporary) ID to manage their session.

## The Account Lifecycle: From Guest to Member

A unique feature of the platform is the ability to upgrade or "convert" accounts without losing data.

### Anonymous Accounts

When a respondent clicks a survey link, they are often authenticated anonymously. This generates a randomized ID that allows the system to track their progress and handle logic evaluations during their session. It provides the benefit of identity (for technical reasons) without compromising respondent privacy.

### Personal and Verified Accounts

If a respondent wishes to save their progress, participate in longitudinal studies over months, or access their own data later, they can convert their anonymous account into a **Personal Account**.

* **Conversion:** This process links the existing anonymous data to a permanent credential (like an email or Google account).
* **Verification:** For sensitive or official surveys, we may require **Verified Accounts**, which necessitate an email confirmation step to prove the account's validity.

## Authorization: Custom Claims and Roles

Authentication identifies *who* you are; **Authorization** determines *what* you can do.

We use **Custom Claims** embedded within the authentication token to manage permissions efficiently. These claims are evaluated both in the browser (to show/hide UI) and on the server (via Firestore Security Rules and Cloud Functions).

### The Role Hierarchy
Users are assigned roles that define their administrative scope:

* **Owner:** Full control over a specific entity (like a Survey or a Team).
* **Master:** High-level administrative access across an organization.
* **Editor:** Ability to modify content but not manage permissions or ownership.
* **Guest/Viewer:** Read-only access.

### Contextual Scopes

Claims also include context identifiers like `team`, `customer`, and `buid` (Business Unit ID). This ensures that when an administrative user logs in, the application automatically knows which organizational context to load, providing a tailored and secure workspace.

## Technical Orchestration

Behind the scenes, the application orchestrates authentication through a series of specialized events and state controllers:

* **`onAuthStateChanged`:** The primary listener that detects when a user logs in, logs out, or when their token is updated.
* **State Management:** Specialized modules react to authentication changes, making the current user's identity and permissions available to all components in the platform.
* **Token Refreshing:** To ensure security without disrupting the user experience, the system automatically handles token refreshes. If permissions change (e.g., a user is added to a new team), a "trigger" in Firestore signals the application to refresh its claims immediately.

By decoupling identity from data and providing a flexible path from anonymity to verification, the platform maintains a high standard of security while remaining accessible to all users.
