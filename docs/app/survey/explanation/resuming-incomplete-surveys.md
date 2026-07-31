---
description: An explanation of how Accessible Surveys saves participant progress and enables resuming incomplete survey sessions across browser restarts and network changes.
---

# Resuming Incomplete Surveys

When participating in a survey, respondents may close their browser, lose internet connection, or switch networks (such as moving from Wi-Fi to mobile data) before finishing. Accessible Surveys is designed to ensure that respondents can return to an incomplete survey and pick up exactly where they left off without losing their entered answers.

This document explains the technical and conceptual architecture that guarantees progress persistence and survey resumption.

## Core Guarantee: Seamless Resumption

When a participant leaves an incomplete survey—even if they close the browser tab or completely power off their device—re-opening the original survey link allows them to resume from their last visited page with all previously answered questions intact.

::: info
Session progress is saved automatically after every question interaction or page navigation. Respondents do not need to manually click a "Save" button.
:::

## How Resumption Works Behind the Scenes

The state persistence engine relies on three coordinated mechanisms:

```text
+--------------------------------------------------------------------------+
|                            Respondent Client                             |
|  1. Firebase Auth UID stored in persistent Browser Storage (IndexedDB)  |
+--------------------------------------------------------------------------+
                                     |
                                     v
+--------------------------------------------------------------------------+
|                         Firestore / Realtime DB                          |
|  2. State Machine Actor (surveyMachine & formMachine) snapshot saved     |
|     Indexed by: UID + Survey ID / Batch ID                               |
+--------------------------------------------------------------------------+
                                     |
                                     v
+--------------------------------------------------------------------------+
|                           Survey Rehydration                             |
|  3. Re-opening link restores UID, fetches active Actor, rehydrates state |
+--------------------------------------------------------------------------+
```

### 1. Anonymous & Authenticated User Identifiers (UID)

When a participant opens a survey link:

* **Anonymous Accounts (Default):** The application automatically creates a persistent anonymous authentication session via Firebase Auth. A unique User Identifier (`UID`) is generated and stored locally in the browser's persistent storage (`IndexedDB`).
* **Personal / Verified Accounts:** If the survey requires sign-in, the respondent authenticates with their email or identity provider, assigning their personal `UID` to the session.

### 2. Real-Time State Machine Sync

Every survey session is backed by state machine actors (`surveyMachine` and `formMachine`). As the participant fills in fields, checks choices, or advances pages:

* State transitions record current page indices, visited questions, hidden statuses, and input values.
* The state machine snapshot is synchronized in real-time to Cloud Firestore and Firebase Realtime Database.

### 3. Session Query and Rehydration

When the participant re-opens the survey link:

1. The client retrieves the existing `UID` from local browser storage.
2. The application queries Firestore (`fetchActor`) for an existing state machine actor snapshot matching that `UID` and the survey's `batchId` / `buildId`.
3. If an existing actor snapshot is found, the survey engine skips initialization and rehydrates the saved state—restoring answered fields and placing the user back on the page where they left off.

---

## Technical Factor Breakdown: What Enables Resumption?

To clarify how different environmental factors affect resumption, consider the matrix below:

| Factor | Used to Resume? | Details |
| :--- | :---: | :--- |
| **Browser Storage** | **Yes** | Stores the Firebase Authentication token (`UID`) in local storage / `IndexedDB`. |
| **Cloud Database** | **Yes** | Stores the state machine snapshot (responses, page index, visited questions) linked to the `UID`. |
| **Physical Device** | **Indirectly** | Local browser storage resides on the specific device and browser profile used. |
| **Wi-Fi / IP Address** | **No** | Accessible Surveys **never** uses IP addresses or Wi-Fi networks to identify sessions. |

---

## Scenario Analysis

### 1. Closing the Browser or Restarting the Device

* **Can the participant resume?** **Yes.**
* **Mechanism:** Firebase Authentication stores credentials persistently in browser local storage (`IndexedDB`). When the user opens the browser and clicks the survey link again, the token is read from storage, retrieving the actor snapshot from Firestore.

### 2. Switching Wi-Fi or Cellular Networks

* **Can the participant resume?** **Yes.**
* **Mechanism:** Network switches (e.g., leaving home Wi-Fi and switching to 5G cellular data or connecting to a coffee shop Wi-Fi) change the device's IP address. Because Accessible Surveys identifies respondents via authenticated session tokens (`UID`) rather than network addresses, network changes have **zero impact** on survey progress or resumption.

### 3. Switching Browsers or Devices

* **Anonymous Surveys:**
  * Opening the link on a *different* browser (e.g., switching from Safari to Chrome) or on a *different device* creates a **new anonymous session**, as anonymous auth tokens cannot cross browser boundaries.
* **Authenticated Surveys:**
  * If the survey requires a personal account or uses personalized email tokens, logging in or using the personal link on any device retrieves the same Firestore actor snapshot tied to that account `UID`, enabling cross-device resumption.

---

## Privacy & Security Benefits

* **No Privacy-Invasive Tracking:** By avoiding IP address matching or network fingerprinting, Accessible Surveys respects user privacy and complies with strict GDPR guidelines.
* **Data Security:** Response snapshots in Firestore are protected by Firebase Security Rules, ensuring only the authenticated `UID` (or authorized survey administrators) can access or write to the active session.

## Related Content

* [Respondent Accounts](./survey-respondent-accounts.md): Learn about anonymous, personal, and verified respondent account types.
* [Authentication and Identity](./authentication.md): Overview of authentication mechanisms across the platform.
* [Authorization and Security Rules](./authorization.md): How Firebase Security Rules protect respondent data.
* [Data Privacy and Security](./data-privacy-and-security.md): Compliance with GDPR and privacy standards.
