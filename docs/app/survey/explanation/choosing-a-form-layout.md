---
description: The cognitive-accessibility trade-offs between one question per page and multiple questions per page, and how to decide which layout to use.
---

# Choosing a Form Layout for Cognitive Accessibility

Survey layout is an accessibility decision, not a cosmetic one. The two presentation modes in **Form Behavior → Layout** change how much a respondent must hold in mind, how far they must scroll, and how easy it is to recover from a mistake. Neither mode is universally better; the right choice depends on who answers, how long the survey is, and what the questions ask.

## What one-question-at-a-time changes

In **One question at a time (Beta)**, the form shows a single question with its immediately preceding explanatory text. The rest of the form is out of sight. Compared with the default multiple-questions page, this:

- **Reduces visual clutter.** There is one label and one answer area to attend to. For respondents with attention, memory or visual-processing difficulties, that can be the difference between finishing and abandoning.
- **Makes the current task obvious.** The sticky action bar keeps **Next** and **Previous** in place, and validation happens before the respondent moves on, so an error is addressed while the question is still on screen.
- **Increases the number of screens.** A 40-question survey becomes 40 interactions with navigation, progress changes and page transitions. For some respondents that is reassuring; for others it is tiring, and the sense of progress can feel slower even when it is accurate.
- **Removes context.** Related questions that are normally visible together, such as a rating scale that anchors the next question, are no longer side by side. A respondent may have to remember what they answered two screens ago.
- **Sets a larger text scale.** The mode starts from a `1.5rem` base font instead of `1rem`, which helps low-vision respondents but makes long labels and long option lists wrap more.

## What multiple questions per page preserves

The default mode keeps related questions in view and lets respondents scan the shape of a page before answering. It is usually the better choice for:

- long questionnaires, where per-screen navigation adds friction;
- matrix and grid questions whose meaning depends on seeing rows and columns together;
- questions that refer back to an earlier answer on the same page;
- respondents who prefer to read ahead and answer in their own order.

Its risk is the opposite of one-question mode: a dense page can overwhelm respondents who lose their place, and a long consent statement or instruction may be scrolled past without being read.

## A practical decision guide

| Situation | Prefer |
| --- | --- |
| Short survey, one clear task, mobile respondents | One question at a time |
| Respondents with cognitive or attention disabilities, when the survey is short | One question at a time |
| Long survey, or many related questions per topic | Multiple questions per page |
| Matrix or grid questions | Multiple questions per page |
| A single critical question per screen (consent, a sensitive item) | One question at a time, or a page with a text item ending the page |
| Respondents who need to review several answers together | Multiple questions per page |

These are starting points, not rules. Usability testing with the people who will answer is the only reliable way to know whether a layout works, and it matters more here than for most design choices.

## Use the layout to group meaning

Layout is also how you say what belongs together:

- A text item immediately before a question is presented as part of that question. Use this for instructions, definitions and consent wording.
- **End Page** on a text item makes it stand on its own, which is useful for an introduction or a section break.
- **Scroll Page Before Next** forces respondents past content they might otherwise skip, but only when the page actually scrolls.
- **Accessible Label** removes the label length limit and enlarges labels, so long, plain-language questions stay legible.

## Avoid treating accessibility as a mode

One-question-at-a-time is sometimes presented as "the accessible layout". It is one accessibility option among several, and combining it with Easy Read, Read Aloud or Sign Language changes the result again:

- Read Aloud reads the current question, so one question per screen keeps audio and text aligned.
- Easy Read simplifies wording and adds illustrations; a single question per screen gives those illustrations room.
- Sign Language videos take vertical space; check that the sticky action bar does not cover the video on small screens.

Choose the layout after you know which accessibility modes the survey uses, and test the combination rather than each setting alone.

## Related Content

- [How to Choose a Form Layout and Accessible Presentation](../how-to/form-layout-and-accessibility.md): The settings and steps.
- [Form Behavior Reference](../reference/build/behavior.md): Presentation modes, global settings, page flow and tokens.
- [Producing Surveys in Plain Language or Easy Read](./producing-plain-language-easy-read.md): Writing for cognitive accessibility.
- [How to Use Read Aloud](../how-to/read-aloud.md): Pairing audio with each layout.
