---
description: How to choose a presentation mode, group text with a question, require scrolling, enlarge labels, and position illustrations for accessible surveys.
---

# How to Choose a Form Layout and Accessible Presentation

The **Layout** and **Accessibility** tabs in **Form Behavior** decide how questions reach the screen: one at a time or several per page, how text is grouped with a question, whether respondents must scroll before continuing, and how large and prominent labels are.

This guide explains each setting and when to use it. The defaults are sensible for most surveys; change them deliberately, then test with respondents who use the layouts you enable.

## Where these settings live

Open the survey in **Build Survey**, then open **Form Behavior** in the left menu:

- **Accessibility** holds the global form settings and the accessibility modes.
- **Layout** holds the presentation mode, transitions, page flow and illustration rules.
- **Style** holds typography and spacing tokens.

## Choose a presentation mode

Under **Form Behavior → Layout → Form Layout**, pick one of two modes:

### Multiple questions in a page (default)

Questions are grouped into pages that the respondent scrolls through. This is the recommended mode for longer forms, for questionnaires with related questions that should be visible together, and for grids or matrices.

### One question at a time (Beta)

Each screen shows one question, with its preceding explanatory text. The differences from the default are not only pagination:

- **Larger default typography.** The base font size starts at `1.5rem` rather than `1rem`, so the question is legible without zooming.
- **Sticky action bar.** The navigation controls stay fixed at the bottom of the viewport, within the page width, so **Next** and **Previous** remain reachable without scrolling.
- **Per-step validation.** Moving to the next question validates the current one first.
- **Grouped explanatory text.** A run of text items immediately before a question in the same section is shown with that question.

Use this mode for short surveys, for respondents who benefit from reduced visual clutter, and for mobile-first questionnaires. Test it with long labels, long option lists and media before publishing: a question that fits on a page may not fit on a screen.

## Group text with a question

In either mode, a text item placed directly before a question is read as part of that question's context rather than as a separate page.

- To keep a text item on its own page, select it and turn on **End Page**. The text then acts as a page anchor, and the following question starts a new page.
- In one-question-at-a-time mode, a text item with no following question in its section keeps its own page.
- Grouping never crosses a section boundary.

This matters for instructions, consent wording, and definitions: put the text immediately before the question it explains, and use **End Page** only when the text must stand alone.

## Require scrolling before continuing

Under **Form Behavior → Accessibility → Global Form Settings**, enable **Scroll Page Before Next**.

When a page is taller than the viewport, the respondent must reach the bottom before **Next** becomes available. Use it when content below the fold is essential (a long consent statement, a media illustration, several related questions). Do not use it on short pages: the requirement never triggers when there is nothing to scroll, which can confuse respondents who expect it.

## Make labels more legible

**Accessible Label** is also under **Global Form Settings**:

- Question labels use a larger, high-visibility style.
- Floating label animations are disabled, so the label stays put while the respondent types.
- The **80-character limit** on question labels is removed.

Leave it enabled for surveys aimed at respondents with low vision, cognitive disabilities or motor difficulties, and for any survey where labels are longer than a short phrase. Disable it only when the design depends on compact, floating labels, and keep labels short in that case.

## Position illustrations

Under **Form Behavior → Layout → Page Flow**, choose how images and videos sit relative to the question:

- **Automatic** (default) places illustrations beside the question on wide screens and above it on narrow screens.
- **Horizontal** places the illustration beside the text; **Horizontal Flow** sets it left (`unset`) or right (`reverse`).
- **Vertical** stacks the illustration with the text; **Vertical Flow** sets it above (`unset`) or below (`reverse`).

Under **Illustration**:

- **Allow media Illustration** lets authors attach an image or video to individual questions.
- **Preserve Media Space** reserves the media area even when a question has no illustration, keeping questions aligned across pages. Use it for image-heavy forms; turn it off when most questions have no media, otherwise you add empty space.

## Transitions

**Transition Type** sets the animation between questions or pages: **Slide** (default), **Fade**, or **None**. Choose **None** when motion may distract respondents, and check that keyboard focus remains visible after each transition.

## Check the result

1. Use **Test** to step through the form at desktop and mobile widths.
2. Check the first screen of each page: is the question visible without scrolling? Is the action bar reachable?
3. Try a long label and a long option list in the mode you chose.
4. If you use Read Aloud, confirm the speaker button sits next to the label and not over the illustration.

## Related Content

- [Form Behavior Reference](../reference/build/behavior.md): Every Accessibility, Layout and Style setting and its tokens.
- [How to Choose a Form Layout for Cognitive Accessibility](../explanation/choosing-a-form-layout.md): When one question at a time helps, and when it does not.
- [How to Use Read Aloud](./read-aloud.md): Audio support that pairs with either presentation mode.
- [How to Style a Survey](./styling-a-survey.md): Typography and spacing beyond the master scale.
- [How to Test a Form](./testing-a-form.md): Checking the layout before publishing.
