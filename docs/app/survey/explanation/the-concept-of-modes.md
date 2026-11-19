---
description: An explanation of why Accessible Surveys uses "modes" to manage complexity for both survey creators and respondents.
---

# The Concept of Modes

Throughout Accessible Surveys, you will frequently encounter the term "mode." It is a foundational design concept used to manage complexity. Because building an accessible, highly dynamic survey requires extensive configuration, presenting every option at once would be overwhelming.

The concept of a "mode" is applied in three distinct areas of the platform: how you author the questionnaire, how respondents experience the survey, and how the survey is deployed and accessed.

## 1. Authoring Modes (Managing Complexity)

When you are in the Compose view building your survey, you interact with contextual **Authoring Modes**:

- **Content Mode:** Focuses purely on structure and wording. Authors write questions, configure choices, and format descriptions using Markdown.
- **Settings Mode:** Exposes technical properties, validation rules, required toggles, character limits, and data identifiers.
- **Visibility / Logic Mode:** Focuses on the conditional rules and mathematical expressions that determine whether an item is hidden or shown based on prior answers.
- **Localize Mode:** Provides a side-by-side editing interface where authors can review and translate question text, options, and email templates across active languages.

**Why design it this way?** By separating concerns, authors can focus on one specific task at a time—such as drafting question copy—without cognitive distraction from underlying logic rules or database attributes.

## 2. Accessibility Modes (Inclusive Experiences)

The most powerful application of modes is found in the respondent experience. **Accessibility Modes** transform the survey interface dynamically to meet diverse cognitive, sensory, and physical needs:

- **Easy Read Mode:** Simplifies visual layout and presents plain-language text alongside explanatory illustrations.
- **Sign Language Mode:** Displays embedded sign language videos alongside questions and instructions.
- **Read Aloud Mode:** Activates text-to-speech audio playback and highlights text as it is read aloud.
- **Theme & Contrast Modes:** Allows respondents to select high-contrast, dark, or light color schemes matching their visual needs.

Instead of creating separate questionnaires for different groups, authors build **one single master survey** that adapts dynamically to each respondent.

## 3. Operational and Distribution Modes (Control & Security)

Modes also govern how surveys are tested, deployed, and administered:

- **Test Mode vs. Production Mode:** In Test Mode, authors and reviewers can test questionnaire logic and preview accessibility modes without polluting production datasets. In Production Mode, responses are permanently recorded as official study data.
- **Access Modes (Open vs. Invitation Only):** Governs how respondents access the survey. In **Open** mode, anyone with the link can participate. In **Invitation Only** mode, submissions are restricted strictly to recipients holding a valid, unique invitation token (`/v2/{surveyId}/i/{token}`).
- **Advanced Mode:** A global toggle in the administrative toolbar that reveals deeper configuration panels (such as Jexl logical expression audits, fine-grained CSS tokens, UTM campaign tracking, webhooks, and restore tools) while keeping the default interface clean and simple.

## Summary

In Accessible Surveys, a "mode" is a focused lens. Whether it is an Authoring Mode helping an author draft content, an Accessibility Mode assisting a respondent to understand a question, or an Operational Mode safeguarding data integrity, modes are the architectural mechanism that makes a complex, multi-layered system intuitive for everyone.
