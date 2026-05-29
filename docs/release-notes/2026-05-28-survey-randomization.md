# Introducing Survey Item Randomization

**Date:** 2026-05-28
**Version:** 1.0.2

## Overview

We’ve added the ability to randomize the order of questions, sections, and options in your surveys. This powerful new feature helps reduce order bias and ensures higher data quality for your research.

## What's New?

### Stable Item Randomization

* **What it is:** A new setting that shuffles items within any container (Question, Section, Page, or Form).
* **Why it matters:** Presenting items in a random order prevents respondents from being influenced by an item's position, leading to more objective results.
* **How to use:** Enable **Advanced Mode** in the builder, then toggle the **Randomize** switch on the container item you wish to shuffle.
* **Read more:** [How to randomize survey items](../app/survey/how-to/randomizing-items.md)

### Fixed Position Support

* **What it is:** The **Fixed Position** toggle allows you to exclude specific items from being randomized.
* **Why it matters:** It ensures that critical items, like an "Other" option or an introductory paragraph, always stay exactly where you need them.
* **How to use:** Select any item and enable the **Fixed Position** toggle in its properties.

## Fixes & Improvements

* **Seeded Randomization:** Shuffling is stable for each respondent based on their unique ID, ensuring they see the same order throughout their session.
* **Performance:** Implemented efficient on-the-fly shuffling to keep survey loading times fast.
