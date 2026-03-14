---
description: An explanation of the underlying structure of surveys, detailing how forms, pages, sections, and questions are interconnected.
---

# Understanding the Survey Hierarchy

When building and managing surveys, it is helpful to understand the conceptual and structural hierarchy that powers the data collection process. This document explains the relationships between **Surveys**, **Forms**, **Pages**, **Sections**, and **Questions**, detailing how they connect logically and how they are stored in the database.

## The Logical Hierarchy

The data model is structured as a nested tree, allowing you to organize complex questionnaires into a clear, navigable structure.

1. **Survey**
   At the very top is the **Survey** object. It defines the "when, who, and how" of your data collection. It holds configuration such as when the survey opens and closes (`openStrategy`), who can answer (`accountType`), theme styling, and localization properties.
   - A Survey acts as a wrapper around the actual content and links to exactly one **Form** via a direct reference.

2. **Form**
   The **Form** contains the core settings for the data collection experience, such as layout (`presentationMode`, `layout`), logic expressions, and accessibility configurations (Read Aloud, Easy Read, Sign Language).
   - A Form serves as the root container for the questionnaire content. It organizes its content by holding a list of references to **Pages**.
   - The Form itself does not directly contain Sections or Questions; instead, it delegates content organization to the Pages it references.
   - A Form can be used in multiple Surveys, allowing you to reuse the same questionnaire structure with different distribution settings or audiences.

3. **Page**
   A **Page** represents a single screen of content presented to the respondent.
   - Pages contain an ordered list of items, which can be either **Sections** or standalone **Texts**.

4. **Section**
   A **Section** allows you to logically group related questions together on a page. Sections can also hold overarching build rules and visibility settings.
   - Sections contain an ordered list of items, which can be **Questions** or **Texts**.
   - Sections can be re-used in multiple forms. This not only makes the building process more efficient but also ensures consistency across different surveys that require the same set of questions. It also **reduces respondent fatigue** by allowing them to respond to the same questions only once.

5. **Question**
   The **Question** is the most granular level of the main hierarchy. It defines the specific data point you want to collect (e.g., text, rating, multiple-choice).
   - Questions define their type (`subType`), specific properties (like `required`, `maxLength`, `min`), and contain an ordered list of **Options** (for multiple-choice questions).

## How It Works Under the Hood

To optimize performance and make querying efficient, the database structure slightly differs from the strict visual hierarchy.

While visually a Page contains Sections which contain Questions, in the database, all **Pages**, **Sections**, and **Questions** are stored flatly as sub-collections directly underneath their parent **Form**.

- `app/data/survey/{surveyId}`
- `app/data/form/{formId}`
  - `page/{pageId}` (Sub-collection)
  - `section/{sectionId}` (Sub-collection)
  - `question/{questionId}` (Sub-collection)

The logical tree is maintained using an `items` array on each parent object. For example, a Page document contains an `items` property that explicitly lists the IDs of the Sections it contains. This approach ensures that we can quickly load the entire form structure when needed while keeping the database flat and highly performant.
