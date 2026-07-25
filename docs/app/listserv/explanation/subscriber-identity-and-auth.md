---
description: An architectural explanation of subscriber identity management, Firebase Auth UID coupling, custom claim security gating, and account completion.
---

# Subscriber Identity & Auth Integration

This document details how the Listserv application integrates subscriber records with **Firebase Auth UIDs**, manages double opt-in verification, and enforces security through the `accountIncomplete` custom token claim.

---

## 1. Firebase Auth UID Coupling (`SubscriberId == Auth UID`)

Every listserv subscriber is directly backed by a **Firebase Auth user account**. Instead of using arbitrary subscriber strings (e.g. `sub-12345`), the subscriber document ID in Firestore is the nominal brand `uid` matching the Firebase Auth UID:

```text
app-listserv/data/subscriber/{uid}
```

### Architectural Benefits:

- **Zero Identity Duplication**: Email addresses and authentication credentials reside in Firebase Auth Core.
- **Self-Service Dashboard**: Allows subscribers to sign into the platform at any point to update delivery preferences, toggle digest mode, or view personal subscription status.
- **Ecosystem Portability**: Integrates seamlessly with other Accessible Data Framework applications (`app-survey`, `app-discussion`, `app-customer`).

---

## 2. Web Double Opt-In State Machine

For registrations initiated through the public web form, subscription follows a double opt-in state machine:

```text
   Web Registration
          │
          ▼
    ┌───────────┐      Email Verification Link Click
    │  pending  │ ───────────────────────────────────────▶ ┌───────────┐
    └───────────┘  (Creates Firebase User + completionToken) │ confirmed │
                                                           └─────┬─────┘
                                                                 │
                                                                 ▼
                                                           ┌───────────┐
                                                           │  active   │
                                                           └───────────┘
```

1. **`pending` State**: Temporary record created with email, chosen languages, and a secure verification `token`. No Firebase Auth account exists yet.
2. **`verify()` Action**: Validates token, creates the Firebase Auth user account (`createUser({ email })`), assigns custom token claims, sets `SubscriberId = Auth UID`, and upgrades status to `confirmed` / `active`.

---

## 3. Email Command Path & Immediate Linking

Subscribers registering via email commands (e.g., sending `SUBSCRIBE` to `channel-1@mg.a11ydata.com`) bypass the web verification state machine:

1. The inbound handler executes `getUserByEmail(email)`.
2. **If Existing User Found**: Reuses the existing Auth UID (Account Linking).
3. **If New User**: Automatically creates a Firebase Auth user account (`createUser({ email })`) and assigns the custom claim `accountIncomplete: true`.
4. The subscriber is immediately set to `status: 'active'`.

---

## 4. Security Gating via `accountIncomplete` Custom Claim

When an account is created without a password (such as via double opt-in or email commands), Firebase Auth attaches a custom token claim:

```json
{
  "accountIncomplete": true
}
```

### Firestore Security Rule Enforcement:

Firestore security rules in `app-listserv/firestore.rules` inspect this custom claim to gate client write access:

```javascript
allow write: if (
  isAuthenticated() && (
    isSuperAdmin() ||
    isUserTeamEditor(getListservTeamId()) ||
    (
      isUser(subscriberId) &&
      request.auth.token.accountIncomplete != true
    )
  )
);
```

::: warning Security Guarantee
Subscribers whose accounts lack a password cannot write to or mutate their Firestore records. They can only modify their settings after completing the password setup flow.
:::

---

## 5. Account Completion Flow

Subscribers with `accountIncomplete: true` receive an account completion link:

1. **Token Generation**: A unique `completionToken` is written to the subscriber's document.
2. **Notification Link**: An email is sent containing the URL:
   `https://listserv.a11ydata.com/account/complete?token=<completionToken>`
3. **Password Creation**: The user opens the page, sets a secure password, and submits the form.
4. **Claim Clearing**: The `completeAccount` cloud endpoint verifies the token, calls `auth.updateUser(uid, { password })`, removes the `accountIncomplete` claim, and clears the `completionToken` from Firestore.

---

## Related Content

- [Dual-Route Architecture Explanation](./dual-route-architecture.md)
- [Subscribing & Preferences How-To](../how-to/subscribing-and-managing-preferences.md)
- [Public Pages Specification](../reference/public/index.md)
