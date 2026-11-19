---
description: How to enable Read Aloud, choose a voice for each language, record, generate or upload audio, and verify coverage before publishing.
---

# How to Use Read Aloud

**Read Aloud** adds a speaker button next to survey questions so respondents can listen to the question instead of, or in addition to, reading it. It supports respondents with low vision, dyslexia, cognitive disabilities, and anyone who prefers audio while completing a form.

This guide covers enabling Read Aloud, choosing how each language is spoken, and checking that every question has the voice you intended.

## Before you begin

- Read Aloud is enabled per form in **Form Behavior**. Respondents toggle it from the accessibility menu; you do not need to add a button to each question.
- The default voice uses the browser's built-in speech synthesis and needs no audio files, but its quality and available languages depend on the respondent's device.
- Recorded, generated and uploaded voices need a voice set for the language, and generation may be unavailable on some plans.

## Step 1: Activate the Read Aloud mode

1. Open the survey in **Build Survey**.
2. In the left menu, open **Form Behavior** and select the **Accessibility** tab.
3. Under **Modes Activated**, tick **Read Aloud**.

The mode is now available to respondents. Leave it unticked to publish the form without Read Aloud; existing voices are kept and can be reused if you enable it again.

## Step 2: Open the Read Aloud view

In the Build toolbar, select **Read aloud** (the speaker icon). The tree gains a Read Aloud column showing, for the **active language**, whether each item uses no voice, a generated voice, a recorded voice, or an uploaded file.

The active language follows the translation you last picked in the **Localize** toolbar menu. To work on another language, pick it from that menu first, then return to **Read aloud**.

## Step 3: Set a voice for each language

A voice is a language-level choice: generated voices are produced by the selected voice, and items without a voice fall back to the browser's speech synthesis.

1. Scroll to **Voice Settings** at the top of the Read Aloud view.
2. Each survey language is listed. Select **Set Voice for `<language>`** (or **Reset Voice for `<language>`** to change it).
3. Pick a voice from the list; the dialog shows the voice name and its gender.
4. If the list reports that no voice is available for a language, automatic generation is disabled for it; record or upload voices instead, or rely on the default.

## Step 4: Choose the voice for an item

Select an item in the tree. Under **Voice Settings**, four tabs set how that item is spoken. The tab marked with a check is the active one.

| Tab | What it does | When to use it |
| --- | --- | --- |
| **Default** | The respondent's browser reads the question text. No file is stored. | Quick setup, or when device speech is acceptable. |
| **Register** | Records a human voice in the browser and stores it with the item. | A short, personal recording that matches your organization's tone. |
| **Generate** | Produces an automatic voice from the item's text. | Consistent audio across many questions and languages. |
| **Upload** | Stores an audio file you provide (for example from a studio session). | Professional recordings, or a language the generator does not support. |

### Record a voice

1. Open the **Register** tab.
2. Edit **Proposed Text to read** if the respondent should hear something other than the item text.
3. Use the recorder to capture the voice.
4. Select **Use This Recording as Voice**. The recording is uploaded and the tab becomes the active voice.

### Generate a voice

1. Open the **Generate** tab. If generation is unavailable for the language, the tab explains why.
2. Select **Generate Voice** (or **Generate a new Voice** to replace an existing one).
3. Listen to the preview, then select **Use Generated Voice**.

### Upload a voice

1. Open the **Upload** tab.
2. Upload an audio file (for example an MP3).
3. Select **Use Uploaded File as Voice**.

The audio is stored with the item for the active language, so the same question can use a different voice in each language.

## Step 5: Generate voices in bulk

The **Generate Voices for All Content** card at the top of the Read Aloud view creates a voice for every question and text item of the form and its survey pages, for each language that has a voice set.

1. Set a voice for each target language (Step 3).
2. Select **Generate Voices** and review the counts in the dialog.
3. By default only items without a voice are generated; use the override in the dialog to replace existing generated, recorded or uploaded voices.
4. Confirm and let the run finish. The tree's Read Aloud column updates as items gain a voice.

Bulk generation is the fastest way to cover a long questionnaire; it is not a substitute for reviewing the output, especially for abbreviations, numbers, and specialized vocabulary.

## Step 6: Verify coverage per language

1. Switch to **Read aloud** mode and pick a language in the **Localize** menu.
2. Click the Read Aloud column header to cycle the tree between all items, items **with** a voice, and items **without** one.
3. Work through any items shown without a voice: record, generate, upload, or accept the default.
4. Repeat for every language you publish.
5. Use **Test** to listen to the form as a respondent would, including the speaker button on each question.

## Tips for good Read Aloud content

- Keep question labels short enough to be understood when heard once.
- Spell out abbreviations and symbols the first time they appear.
- Read numbers and dates the way you would say them aloud.
- Check that choice options are not read as a single run-on sentence; the generated text follows what appears on screen.
- For text pages, remember that all text before the next question is read as part of that question.

## Related Content

- [Activating Accessibility Modes](./activating-accessibility-modes.md): Enable Read Aloud alongside Easy Read, Sign Language and Voice Recording.
- [How to Choose a Form Layout](./form-layout-and-accessibility.md): One-question-per-page, label legibility and page flow settings that change how audio is used.
- [Form Behavior Reference](../reference/build/behavior.md): The Accessibility and Layout tabs in full.
- [How to Test a Form](./testing-a-form.md): Check the respondent experience, including audio playback.
