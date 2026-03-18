---
description: An explanation of why Accessible Surveys uses "modes" to manage complexity for both survey creators and respondents.
---

# The Concept of Modes

Throughout Accessible Surveys, you will frequently encounter the term "mode." It is a foundational design concept used to manage complexity. Because building an accessible, highly dynamic survey requires a lot of configuration, presenting every option at once would be overwhelming.

The concept of a "mode" is applied in three distinct areas of the platform: how you build the survey, how the respondent experiences the survey, and how the survey is deployed.

## 1. Authoring Modes (Managing Complexity)

When you are in the Compose view building your survey, you interact with different **Authoring Modes**. A single question in Accessible Surveys isn't just a label and an input; it has translations, accessibility variations, logic conditions, and validation rules.

To prevent cognitive overload, the interface separates these concerns into contextual modes:

* **Add Content Mode:** Focused purely on the structure and text. This is a visual, drag-and-drop interface where you write your questions, define multiple-choice options, and format text using Markdown.
* **Settings Mode:** Focused on technical properties. This is where you define if a question is required, set minimum or maximum character limits, and assign unique data codes.
* **Visibility / Logic Mode:** Focused purely on the mathematical and logical rules that determine *if* and *when* an item should be shown to a respondent.

**Why design it this way?** By separating concerns, the builder allows you to focus on one specific task at a time—like writing the content for an entire section—without being distracted by the underlying logic or database properties.

## 2. Accessibility Modes (Inclusive Experiences)

The most powerful use of modes is found in the respondent experience. **Accessibility Modes** are states that instantly transform the survey interface to accommodate different cognitive, sensory, or physical needs.

Instead of building completely separate surveys for different audiences (which creates a data analysis nightmare), Accessible Surveys allows you to build *one* master survey that adapts dynamically.

* **Easy Read Mode:** Simplifies the layout and swaps complex text for simplified language and supporting images.
* **Sign Language Mode:** Reveals embedded sign language videos alongside the text.
* **Read Aloud Mode:** Activates specific auditory feedback mechanisms.

## Summary

In Accessible Surveys, a "mode" is essentially a focused lens. Whether it is an Authoring Mode helping you focus on writing content, an Accessibility Mode helping a respondent understand a question, or a Test Mode ensuring data integrity, modes are the mechanism that makes a complex, multi-layered system usable for everyone.
