---
description: An explanation of the underlying structure of surveys, detailing how forms, pages, sections, and questions are interconnected.
---

# Understanding the Survey Hierarchy

When building and managing surveys, it is helpful to understand the conceptual and structural hierarchy that powers the data collection process. This document explains the relationships between **Surveys**, **Forms**, **Pages**, **Sections**, and **Questions**, detailing how they connect logically and how they are stored in the database.

## The Logical Hierarchy

The data model is structured as a clear tree, allowing you to organize complex questionnaires into a navigable structure.

1. **Survey**  
   At the very top is the **Survey** object. It defines the operational envelope of your data collection: when the survey opens and closes (`openStrategy`), who can answer (`accountType`), theme styling, and localization properties.
   - A Survey acts as a management wrapper around the questionnaire content and links to its underlying **Form** via a direct reference.

2. **Form**  
   The **Form** contains the core settings for the data collection experience, such as layout (`presentationMode`, `layout`), logic expressions, and accessibility configurations (Read Aloud, Easy Read, Sign Language).
   - A Form serves as the root container for the questionnaire content, maintaining an ordered list of references to its top-level **Pages**.

3. **Page**  
   A **Page** represents a single screen of content presented to the respondent.
   - Pages contain an ordered list of items, which can be either **Sections** or standalone **Texts**.

4. **Section**  
   A **Section** logically groups related questions together on a page. Sections can also hold overarching build rules, visibility logic, and sharing configurations.
   - Sections contain an ordered list of child items, which can be **Questions** or **Texts**.
   - Sections can be published to the organization library and shared across multiple forms as live references or independent copies, reducing respondent fatigue via smart pre-fill.

5. **Question**  
   The **Question** is the most granular level of the hierarchy, defining a specific input data point (e.g., open text, numeric, rating scale, multiple-choice).
   - Choice questions contain an ordered list of **Options** defining the selectable choices.

---

## How It Works Under the Hood (Flat Item Storage)

To optimize performance and eliminate nested subcollection queries, the database structure employs a **flat item storage model**:

Rather than creating separate nested subcollections for pages, sections, and questions, all descendants of a form are stored flatly in a single subcollection under the parent Form:

```text
app/data/survey/{surveyId}
app/data/form/{formId}
  └── items/{itemId} (Single flat subcollection for all descendants)
```

Every document in the `items` subcollection represents an element of the questionnaire:

- A **Page** document (`type: "page"`)
- A **Section** document (`type: "section"`)
- A **Question** document (`type: "question"`)
- A **Text** document (`type: "text"`)

### Tree Traversal via Child Arrays

The structural hierarchy and presentation order are maintained using an `items` array on each parent document:

- The **Form** document contains an `items: string[]` array listing the ordered IDs of its Pages.
- Each **Page** document contains an `items: string[]` array listing the IDs of its Sections and Texts.
- Each **Section** document contains an `items: string[]` array listing the IDs of its Questions and Texts.

This flat storage design enables atomic reads of the entire questionnaire structure in a single Firestore query, ensures lightning-fast rendering, and avoids deep nested Firestore document limits.

## Related Content

- [Compose Reference](../reference/build/compose/index.md) — Technical details of form items and properties
- [How Does the Compose View Work](./how-does-the-compose-view-work.md) — Visual organization in the Survey Builder
- [Understanding Section Sharing & Reusability](./understanding-section-sharing.md) — Sharing standardized questionnaire modules across forms
