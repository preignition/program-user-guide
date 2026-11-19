---
description: An architectural explanation of subscriber identity management, Firebase Auth UID coupling, custom claim security gating, and account completion.
---

# Subscriber Identity & Auth Integration

This document details how the Listserv application integrates subscriber records with **Firebase Auth UIDs**, manages double opt-in verification, and enforces security through the `accountIncomplete` custom token claim (per ADR 0001: `app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md`).

---

## 1. Subscriber Identity Model (`ref.user == Auth UID`)

Every listserv subscriber is backed by a **Firebase Auth user account**:

- **Opaque Subscriber IDs:** The subscriber document ID in Firestore is an auto-assigned, opaque identifier (`app/listserv/subscriber/{subscriberId}`).
- **Auth UID Link:** The `ref.user` property holds the subscriber's Firebase Auth UID. Queries for a user's subscriptions use `where('ref.user', '==', uid)`.
- **Per-Channel Email Uniqueness Guard:** A dedicated collection (`app/listserv/subscriberEmail/{channelId}_{HMAC(normalisedEmail)}`) enforces exactly one subscriber record per email address per channel. This guard is written in the same transaction as the subscriber and covers both `pending` and `active` states.

### Architectural Benefits

- **Self-Service Preference Management:** Because subscribers have an underlying Auth identity, they can sign in to the user portal to update delivery preferences, toggle digest mode, or manage multi-channel subscriptions.
- **Cross-App Integration:** Links seamlessly with customer organization accounts, team memberships, and survey respondent identities.
- **Safe Pre-Verification State:** Because subscriber IDs are opaque and uniqueness is handled by the HMAC email guard, a `pending` record can exist before a Firebase Auth user is created, without risk of document ID migrations.

---

## 2. Web Double Opt-In State Machine

For registrations initiated through the public web form, subscription follows a clean, orphan-free double opt-in lifecycle:

```text
   Web Registration
          │
          ▼
    ┌───────────┐      Email Verification Link Click
    │  pending  │ ───────────────────────────────────────▶ ┌───────────┐
    └───────────┘  (Creates/links Auth User + clears token) │  active   │
                                                            └───────────┘
```

1. **`pending` State:** A subscriber document is created with the subscriber's email address, language preferences, delivery mode, and a secure verification `token`. No Firebase Auth account is created at this point, preventing abandoned signups from cluttering user directories.
2. **`verify()` Action:** When the user clicks the verification link in their email:
   - If an Auth account already exists for that email, the subscriber is linked to the existing UID (`ref.user = existingUid`).
   - If no Auth account exists, a new Firebase Auth user is created (`createUser({ email })`) with custom claim `accountIncomplete: true`.
   - The pending subscriber document is updated **in place**: status flips directly to `active`, `ref.user` is stamped, and the verification `token` is cleared.

---

## 3. Email Command Path & Immediate Linking

Subscribers registering via email commands (e.g., sending `SUBSCRIBE` to `channel-1@mg.a11ydata.com`) bypass the web verification state machine because sending from the mailbox is inherently self-authenticating:

1. The inbound handler checks for an existing user account with `getUserByEmail(email)`.
2. **If Existing User Found:** Links the new subscriber record to the existing Auth UID.
3. **If New User:** Automatically creates a Firebase Auth user account (`createUser({ email })`) and assigns the custom claim `accountIncomplete: true`.
4. The subscriber document is created directly with `status: 'active'`.

---

## 4. Security Enforcement via `accountIncomplete` Custom Claim

Subscribers created without a web password carry the custom token claim `accountIncomplete: true`:

- **Firestore Security Rules:** Gated so that accounts with `accountIncomplete: true` are restricted to reading their own subscriber profile and cannot perform elevated actions.
- **Account Completion Flow:** When an incomplete user visits the web portal, they are prompted to set a secure password, which clears the `accountIncomplete` claim upon completion.

---

## Related Content

- **ADR 0001: Subscriber Firebase Auth Identity** (`app/app-listserv/docs/adr/0001-subscriber-firebase-auth-identity.md`) — Authoritative decision record
- [Subscribing & Preferences How-to Guide](../how-to/subscribing-and-managing-preferences.md) — End-user subscription walkthrough
- [Dual-Route Architecture Explanation](./dual-route-architecture.md) — Web and email command integration
