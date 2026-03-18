---
description: Deepen your understanding of Accessible Surveys with discursive background and context.
---

# Explanation

The **Explanation** section is understanding-oriented. While Tutorials take you by the hand and How-to Guides provide exact steps to solve a problem, Explanations zoom out to provide the big picture.

These articles are designed for study. They offer context, historical background, architectural reasons, and the "why" behind the design decisions of the Accessible Surveys platform.

## Principles

As our documentation evolves into this structure, this section will house deeper discussions on topics such as:

- **We are all different:** The philosophy of designing for a wide range of abilities and preferences, and how this shapes our approach to survey design.
- **The Philosophy of Accessibility First:** Why we prioritize formats like Easy Read and Sign Language directly in the data collection layer, rather than as an afterthought.
- **Rooted in the Disability Movement:** The historical and ethical foundations of our work, and how the principles of the disability rights movement inform our design choices.

## Application Architecture and Key Concepts

Topics that explain the underlying architecture of the platform, including:

- **[Understanding Survey, Form, Page, Section and Question Hierarchy](./understanding-survey-hierarchy.md):** A detailed explanation of the hierarchical structure of surveys and how each level interacts with the others.
- **[How does the compose view work](./how-does-the-compose-view-work.md):** An explanation of the compose view and how it allows users to build and organize survey content.
- **[The concept of Modes](./the-concept-of-modes.md):** Why we use modes to manage the complexity of survey configuration and how it helps users focus on specific tasks.
- **[Building and Versioning](./survey-versionning.md):** An explanation of why it is necessary to compile a survey into a frozen snapshot before sharing it, and how strict version control protects data integrity during iterative design.
- **[Understanding Form Logic](./understanding-form-logic.md):** A deeper dive into how the platform's logic engine evaluates mathematical expressions and ternary operators to create dynamic surveys.
- **[Test and Production Survey Links](./test-and-production-survey-links.md):** Why we have separate links for testing and production surveys and what are the differences.
- **[The Role of Batches](./the-role-of-batches.md):** Why temporal grouping is a fundamental architectural decision for longitudinal survey analysis.
- **[Respondent accounts](./survey-respondent-accounts.md):** How respondent accounts are managed and their role in the survey process.
- **[Using Survey Batches](./using-survey-batches.md):** The conceptual lifecycle of a survey batch and how it supports temporal data collection.

## Survey Quality

Content that helps you understand how to create high-quality surveys, including:

- **[How to choose the right question type](./choosing-the-right-question-type.md)**
- **[Using Markdown](./using-markdown.md):** Why Accessible Surveys uses Markdown for rich text formatting and its benefits for accessibility.

## Data Privacy, security and Ethics

- **[Data Privacy and Security](./data-privacy-and-security.md):** The conceptual framework behind how we handle anonymized datasets, verified accounts, and data export responsibilities.
