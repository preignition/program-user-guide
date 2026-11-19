---
description: How to create a survey from an AI prompt or a PDF/Markdown document, review the generated content, and accept or reject it.
---

# How to Generate a Survey with AI or Import a Document

The survey creation dialog can build a form from a **prompt** or extract one from a **PDF or Markdown document**. Both routes produce draft content that you review before it becomes part of the survey.

## Before you start

- Decide the form's **presentation mode** (multiple questions per page or one question at a time); the dialog asks for it during creation.
- For document import, have a text-based PDF or a `.md` file of at most **2 MB**. A scanned image PDF has no extractable text; run OCR on it first.
- Reviewing generated content takes longer than generating it. Plan for it.

## Step 1: Start a new survey

1. From the workspace, select **New Survey**.
2. Give the survey a name and description.
3. In the form section of the dialog, choose how the form is created:
   - **Create a new empty form**;
   - **Create a form using a prompt**;
   - **Import from a document** (PDF or Markdown);
   - or skip the form and add one later.

## Step 2: Generate with a prompt

1. Select the prompt option.
2. Write the prompt. Say what the survey is for, who answers it, and the shape you want — for example: *"Create 3 pages with 2 sections each. Page 1 covers the respondent's neighborhood; page 2 covers transport; page 3 covers accessibility of local services. Use plain language."*
3. Confirm.

Generation uses a language model and may take a little time. The result is a draft structure: pages, sections, questions and text.

## Step 3: Import from a document

1. Select the document option.
2. Upload a PDF or `.md` file (2 MB maximum).
3. Confirm.

The platform extracts the document's text and builds a draft form from its structure. It does not invent content the document does not contain, but it also does not preserve the source layout exactly.

## Step 4: Review the generated content

Generated items are marked as pending review. Do not publish before reviewing them.

1. In **Compose**, open the prompt menu in the toolbar.
2. Select **Filter generated content** to show only the items that still need validation, with their ancestors for context.
3. Open an item and validate it individually, or use the prompt menu:
   - **Accept all** validates every item still pending review.
   - **Reject all** marks every pending item removed and unlinks it from the tree.
4. Turn the filter off to see the whole form again.

Accepting marks the content validated; it does not publish anything. Rejecting removes the generated items, not the questions you wrote yourself.

## Step 5: Edit what the model produced

Generated content is a starting point, not a finished instrument. Before publishing:

1. Read every generated question aloud; awkward phrasing is common.
2. Replace invented answer options with ones that match your population.
3. Check the question type against what the label asks for — the **Review** panel flags mismatches.
4. Add logic, translations and accessibility modes deliberately; the model does not know your respondents.
5. Run **Review** to catch plain-language, link-text and question-type problems.
6. Test the form as a respondent.

## Prompt history

Each generation is recorded in **Build → Prompt** (Advanced Mode), with the prompt text and parameters. Use it to see how a form was produced, or to repeat a generation with a refined prompt.

## Limitations

- A prompt cannot know your legal, ethical or accessibility requirements; you must add them.
- Document import depends on the document's text quality; tables and multi-column layouts survive poorly.
- Generated translations are not a substitute for review by a speaker of the language.
- Generation may be metered on some plans; the dialog reports when it cannot run.

## Related Content

- [How to Review a Survey](./review-a-survey.md): Automated checks after generation.
- [How to Edit a Survey](./editing-a-survey.md): Working in the Compose tree.
- [Prompt Reference](../reference/build/prompt.md): The prompt history.
- [How to Test a Form](./testing-a-form.md): Trying the generated form.
- [How to Choose a Form Layout](./form-layout-and-accessibility.md): The presentation choice made during creation.
