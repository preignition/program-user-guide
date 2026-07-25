---
description: An architectural explanation of the consolidated Broadcast domain entity, XState 5 lifecycle machine, and AI moderation engine.
---

# Broadcast Lifecycle & AI Moderation Architecture

This document explains how the Listserv application unifies administrative announcements and user community posts into a single **Broadcast** entity, governed by an **XState 5 lifecycle state machine** and evaluated by an **AI Moderation Agent**.

---

## 1. The Consolidated Broadcast Entity

Earlier listserv implementations maintained separate data models for administrative `Campaigns` and user `Submissions`. The current architecture unifies both under a single Firestore collection (`app/listserv/broadcast`) and schema (`BroadcastS`).

### Discriminators

- **`origin`**: `'admin'` (created manually in the admin dashboard) vs. `'user'` (submitted via web or email command).
- **`template`**: `'newsletter'`, `'alert'`, or `'community'`.
- **`state.lifecycle`**: Persisted XState machine context tracking lifecycle progress.

---

## 2. XState 5 Lifecycle Machine

The broadcast pipeline is governed by a strict state machine implemented in XState v5 on the client and mirrored on the server:

```text
┌───────┐      SUBMIT      ┌───────────┐   AI Evaluation   ┌───────────┐
│ draft │ ───────────────▶ │ submitted │ ────────────────▶ │ moderated │
└───────┘                  └───────────┘                   └─────┬─────┘
                                                                 │
                                                   ┌─────────────┴─────────────┐
                                                   │                           │
                                           APPROVE │                           │ REJECT
                                                   ▼                           ▼
                                             ┌──────────┐                ┌──────────┐
                                             │ approved │                │ rejected │
                                             └────┬─────┘                └──────────┘
                                                  │
                                             SEND │
                                                  ▼
                                             ┌─────────┐   SEND_SUCCESS  ┌──────┐
                                             │ sending │ ───────────────▶│ sent │
                                             └─────────┘                 └──────┘
```

### Lifecycle States

| State | Role Tag | Description |
| --- | --- | --- |
| **`draft`** | `editor` | Broadcast under composition or initial ingestion. |
| **`submitted`** | `admin` | Post submitted by a community user; triggers AI moderation evaluation. |
| **`moderated`** | `admin` | AI evaluation complete (`moderation` metadata attached); placed in Moderation Queue. |
| **`approved`** | `admin` | Approved by AI or moderator; triggers translation into active languages. |
| **`rejected`** | `admin` | Submission rejected by moderator or AI; stores `rejectionReason`. |
| **`sending`** | `admin` | Background send actor executing Mailgun list dispatch. |
| **`sent`** | `admin` | Dispatched to subscribers, archived, and tracked for webhooks. |

---

## 3. AI Moderation Engine (`effect/unstable/ai`)

When a submission enters the `submitted` state, the server invokes the `moderateBroadcast` actor powered by `effect/unstable/ai` using `gpt-4o-mini`.

### AI Moderation Schema (`ModerationResult`)

```typescript
const ModerationResult = Schema.Struct({
  category: Schema.String,          // 'news' | 'event' | 'announcement' | 'question' | 'discussion' | 'spam'
  summary: Schema.String,           // Concise 1-2 sentence overview
  spamScore: Schema.Number,         // Floating point score from 0.0 to 1.0
  recommendedAction: Schema.String, // 'approve' | 'flag' | 'reject'
})
```

### Auto-Moderation Decision Matrix

After `LanguageModel.generateObject` completes:

- **`recommendedAction === 'approve'`** (Spam Score < 0.3):
  The lifecycle automatically transitions to `approved` (`moderatedBy: '__ai__'`) and advances to dispatch without requiring manual human review.
- **`recommendedAction === 'reject'`** (Spam Score > 0.8):
  The lifecycle automatically transitions to `rejected` with an automated rejection reason.
- **`recommendedAction === 'flag'`**:
  The broadcast pauses in the `moderated` state in the Admin Moderation Queue for human inspection.

---

## 4. Rate Limiting Safeguards

To prevent spam attacks or accidental flooding, user-origin submissions (`origin: 'user'`) are rate-limited per sender email:

- **Enforcement**: Max 5 submissions per sender per hour.
- **Verification**: Checked inside the `submit` action handler prior to writing the `submitted` state. Exceeding the threshold returns a typed rate-limit error.

---

## Related Content

- [Dual-Route Architecture Explanation](./dual-route-architecture.md)
- [Mailing List & Digest Engine Explanation](./mailing-list-and-digest-architecture.md)
- [Moderating Community Submissions How-To](../how-to/moderating-community-submissions.md)
