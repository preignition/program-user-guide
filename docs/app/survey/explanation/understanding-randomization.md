---
description: An in-depth look at how stable, seeded randomization works in Accessible Surveys.
---

# Understanding Randomization

Randomization is a critical technique in survey design used to mitigate **order bias**. Order bias occurs when the position of an item (a question, a section, or an option) influences how a respondent perceives or answers it.

## The Challenge of Order Bias

In many surveys, respondents are more likely to select the first few options in a list (primacy effect) or the last few (recency effect). By shuffling the order of these items for different respondents, these biases average out across your total sample, leading to more accurate and scientifically rigorous data.

## How it Works: Stable Seeded Shuffling

A key requirement for randomization in a web-based survey is **stability**. If a respondent refreshes their browser or returns to a partially completed survey, they should see the items in the same "random" order they saw initially. 

Accessible Surveys achieves this through **Stable Seeded Shuffling**:

1.  **Unique Seed**: When a respondent starts a survey, a unique seed is generated based on their **Respondent ID (UID)** and the **ID of the container** being randomized (e.g., the specific Question or Section ID).
2.  **Pseudo-Random Number Generation (PRNG)**: We use the **Mulberry32** algorithm, a fast and reliable 32-bit PRNG that produces the same sequence of numbers given the same seed.
3.  **Fisher-Yates Shuffle**: This sequence of numbers drives a Fisher-Yates shuffle, which is an unbiased algorithm for generating a random permutation of a finite sequence.

Because the seed depends on the respondent's UID, the "random" order is unique to that user but perfectly reproducible across sessions.

## The Randomization Hierarchy

Randomization in Accessible Surveys is **recursive**. You can enable randomization at multiple levels of the survey structure:

*   **Form Level**: Shuffles the order of **Pages**.
*   **Page Level**: Shuffles the order of **Sections** within that page.
*   **Section Level**: Shuffles the order of **Questions**, **Text items**, and **Sub-sections** within that section.
*   **Question Level**: Shuffles the order of **Options** (choices) within that question.

## Preserving Order with Fixed Positions

Sometimes, complete randomization is undesirable. For example, a "None of the above" or "Other (please specify)" option should almost always appear at the end of a list to avoid confusing the respondent.

The **Fixed Position** setting allows you to "pin" specific items:

1.  The system identifies all items marked as **Fixed**.
2.  It removes them from the list before shuffling.
3.  It shuffles the remaining "non-fixed" items.
4.  It re-inserts the fixed items back into their **original indices**.

This allows you to maintain logical flow (like keeping an "Introduction" text at the top of a randomized section) while still benefiting from randomization for the rest of the content.

## Performance and Built Forms

Randomization is calculated **on-the-fly** in the respondent's browser when the survey build is loaded. This approach is highly efficient as it doesn't require storing custom orders in the database for every single user.

::: info
Randomization only takes effect in **Built Forms**. When you are designing your survey in the builder, you will always see items in their original, authored order to make editing easier.
:::
