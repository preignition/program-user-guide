---
description: A redesigned one-question-per-page layout — layout choice at creation, text above questions, a sticky navigation bar, and larger text by default.
---

# Improved One-Question-Per-Page Layout

**Date:** 2026-08-16

## Overview

The **one question per page** layout has been redesigned to be easier to choose, easier to read, and easier to navigate. Surveys using this layout now ask for it up front at creation, render at a larger base font size by default, keep the next step in a sticky action bar, and — most requested — let authors place free text directly above a question.

## What's New?

### Layout choice at survey creation

When creating a new form, you are now asked which layout your questions use — **one question per page** or **multiple questions per page** — with a short guidance note for each:

- *One question per page* — "Each question gets its own page. Best for short, simple surveys — and ideal on phones."
- *Multiple questions per page* — "Questions share pages. Best for longer, more complex surveys with lots of logic."

You can still change the layout later in **Design → Style**.

### Text above a question

In one-question-per-page mode, a text block placed before a question in the same section now appears at the top of that question's page, instead of taking a whole page of its own. A new **End Page** setting on text blocks keeps a text on its own page when you want it to stand alone.

- Read more: [Putting text above a question](../app/survey/how-to/text-above-a-question.md)

### Sticky action bar

The next/previous controls in one-question-per-page mode are now a fixed bar at the bottom of the screen — always visible, no scrolling required to reach the next step.

### Larger text by default

One-question-per-page surveys now render at a **1.5rem base font size** by default — questions, answer options, labels, and text alike. Authors who set their own base font size in **Design → Style** keep their explicit choice.

## Deliberate Behavior Changes

These changes affect existing surveys using the one-question-per-page layout:

1. **Texts immediately before a question now group with it.** Previously each text block got its own page in this mode. To keep the old rendering, switch on **End Page** on the text block.
2. **Fields now render at the page's font size.** Previously plain text rendered at 1.5rem while answer fields stayed at the document base size. Both now follow the survey's base font size (1.5rem by default).
