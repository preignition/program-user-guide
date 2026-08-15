---
description: An in-depth look at why section sharing, reusable accessibility assets, longitudinal consistency, and smart pre-fill matter for accessible research.
---

# Understanding Section Sharing & Reusability

Creating accessible, high-quality questionnaires is one of the most demanding tasks in modern research. When an organization conducts multiple surveys across departments, programs, or time periods, rebuilding questionnaires from scratch creates duplicate effort, inconsistent datasets, and respondent fatigue.

Accessible Surveys introduces **Section Sharing & Reusability** as a core architectural capability. This article explores the philosophy behind shared survey sections, why standardized modules are essential for longitudinal analysis, and how smart pre-fill transforms the respondent experience.

---

## The Challenge of Accessible Content Creation

Authoring a truly accessible survey question goes far beyond writing text. For every item, creators often must invest in:

* **Sign Language video recordings:** Filmed with deaf presenters and professional interpreters in studio conditions, tailored to specific regional sign languages (such as BSL, ASL, or LSF).
* **Easy Read adaptations:** Simplified, plain-language text accompanied by clear, unambiguous illustrations designed specifically for people with learning or cognitive disabilities.
* **Multi-language translations:** Professional, verified translations across multiple languages, ensuring identical semantics across linguistic communities.
* **Read Aloud audio assets:** Curated voice synthesis or human-recorded speech with appropriate pronunciation and pacing.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        High-Quality Section                            │
│                                                                        │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────────────────┐  │
│  │ Sign Language  │  │   Easy Read    │  │ Multilingual Translation │  │
│  │ Video Studio   │  │ Illustrations  │  │ & Read Aloud Assets      │  │
│  └────────────────┘  └────────────────┘  └──────────────────────────┘  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                         Published to Section Library
                                    │
               ┌────────────────────┴────────────────────┐
               ▼                                         ▼
   ┌───────────────────────┐                 ┌───────────────────────┐
   │    Live Reference     │                 │   Independent Copy    │
   │  (Synchronized Sync)  │                 │  (Detached Starting)  │
   └───────────────────────┘                 └───────────────────────┘
```

When individual survey authors recreate these questions independently, accessibility assets are often skipped or inconsistently created due to time and budget constraints.

### Standardized Modules as Organizational Assets

By allowing sections to be **Published** to an organization-wide **Section Library**, a single well-crafted section becomes a reusable asset for all teams.

A prime example is the **Washington Group Short Set on Functioning** (the international standard for identifying disability in censuses and surveys). Implementing these six questions with complete Sign Language video interpretations and Easy Read illustrations is a significant undertaking. When published once by an accessibility specialist, any researcher in the organization can embed the fully accessible module in seconds with zero marginal production cost.

---

## Longitudinal Consistency & Cross-Survey Comparability

In research and policy evaluation, the ability to **compare data over time** (longitudinal studies) and **benchmark across programs** (cross-sectional studies) is critical.

### The Sensitivity of Survey Measurement

Survey results are sensitive to subtle variations in question structure:

* Changing the wording of a question prompt alters its interpretation.
* Reordering answer scales or omitting an option shifts response distributions.
* Changing accessibility aids changes who can independently understand and answer.

If Team A asks about demographic background using custom-authored choices while Team B uses a slightly different scale, merging their results requires post-hoc statistical harmonization, which introduces error and uncertainty.

### Structural Guarantee of Comparability

Shared sections solve this at the root:

* **Unified schema & IDs:** Questions, options, and logic inside a shared section share an identical structure.
* **Semantic equivalence:** Respondents encounter the exact same questions, translations, and accessibility aids across all surveys.
* **Direct cross-survey aggregation:** Analytics engines can effortlessly aggregate baseline data across independent surveys without manual reconciliation.

---

## Eliminating Survey Fatigue with Smart Pre-Fill

**Survey fatigue** is a primary cause of high abandonment rates, rushed responses, and declining data quality. Respondents are routinely asked to re-enter the same information—such as contact details, demographics, or assistive technology preferences—every time they fill in a survey from the same organization.

```text
   Survey 1: Onboarding Survey          Survey 2: Annual Feedback
┌───────────────────────────────┐    ┌───────────────────────────────┐
│ Section: Accessibility Profile│    │ Section: Accessibility Profile│
│ • Screen reader: VoiceOver    │    │ [✓] Pre-filled automatically  │
│ • Format: Easy Read           │───►│ • "Filled from earlier survey"│
│                               │    │ • Editable / Review Mode      │
└───────────────────────────────┘    └───────────────────────────────┘
                     Stored in Respondent Store (user keying)
```

### Respondent-Level Response Keying

Accessible Surveys decouples section response storage using the **Response Keying (`storeType`)** setting:

| Keying Type | Storage Path | Behavior | Use Case |
| :--- | :--- | :--- | :--- |
| `user` (Respondent) | `data/{uid}/section/{sectionId}` | Stored once per respondent; pre-fills across all organization surveys. | Standard demographics, accessibility accommodations, baseline profiles. |
| `survey` (Attempt) | `data/{uid}/actor/{actorId}/section/{sectionId}` | Stored per survey submission; answers remain completely isolated. | Time-sensitive feedback, one-off ratings, survey-specific consent. |
| `organisation` (Unit) | `data/{buid}/section/{sectionId}` | Stored per business unit / team context. | Organization-level assessments and collective audits. |

### Balancing Convenience and Accuracy: Prefill Modes

Blindly pre-filling answers without informing the user can lead to outdated data if a respondent's circumstances change. To give authors control over the respondent experience, Accessible Surveys provides three **Prefill Modes**:

* **Quiet Mode:** Pre-fills the answers in place with a slim informational banner informing the user that their previous answers have been loaded. Respondents can edit any field directly.
* **Review Mode:** Collapses the section into a summary card indicating that the section was answered previously. The respondent can accept the existing answers or click to expand and update them.
* **Interstitial Mode:** Presents an upfront decision screen before the section, asking the respondent whether their previous answers are still accurate or need revision.

This ensures transparency while saving respondents valuable time on repetitive questions.

---

## Architectural Principles & Safety Guarantees

The sharing model in Accessible Surveys is built around clear safety invariants that protect both authors and embedders:

### 1. Live References vs. Independent Copies

When authors embed a shared section, they choose between two distinct relationships:

* **Live Reference (Synchronized):** The embedding form stores a lightweight pointer (`{ type: 'section', ref: <sourcePath> }`) to the source document. If the owning team corrects a typo, improves a Sign Language video, or adds a new language translation, those updates instantly reflect in every live-referenced survey without needing republishing. The section remains strictly read-only for the embedding team.
* **Copy (Detached):** Creates an independent duplicate in the embedding form with newly generated document IDs. The embedding team owns the copy and can modify its questions, delete items, or tailor options without affecting the source.

### 2. The No-Dangle Invariant

In distributed systems, a major danger of shared pointers is orphaned or broken references (when a source document is deleted).

Accessible Surveys enforces a strict **Zero-Dangle Invariant**:

1. The platform maintains a live registry of referencing forms (`liveRefSectionIds`).
2. When an author deletes a section that is actively linked by other surveys, the system detects all dependent live references.
3. It automatically duplicates the section subtree into each referencing form's items collection and converts the live pointers into independent, working copies.
4. Only after all references are safely converted is the original source section deleted.

As a result, no survey in production will ever fail due to a deleted upstream section.

### 3. Deliberate Protection: Section Freezing

For widely shared sections, stability is paramount. The **Freeze** setting allows source teams to lock a section against any modifications—including text changes, structural edits, translation updates, and deletions—by any team member until it is explicitly unfrozen.

---

## Summary

Section Sharing bridges the gap between specialized accessibility engineering and everyday survey creation:

1. **Invest once in world-class accessibility:** Sign Language, Easy Read, and professional translations are authored once and shared everywhere.
2. **Gain longitudinal data consistency:** Collect comparable data across years and programs with unified schemas.
3. **Respect respondents' time:** Smart pre-fill removes repetitive questions while keeping respondents in control.
4. **Build with confidence:** Strict safety invariants ensure live references never break dependent forms.

---

## Related Content

* [How to share a section with other teams](../how-to/how-to-share-section.md)
* [How to share options across multiple questions](../how-to/sharing-options.md)
* [How to share logical expressions across multiple items](../how-to/sharing-logical-expressions.md)
* [Understanding Survey, Form, Page, Section and Question Hierarchy](./understanding-survey-hierarchy.md)
* [The Role of Survey Batches](./the-role-of-batches.md)
* [Survey Building & Versioning](./survey-versionning.md)
