---
description: >-
  How to export a survey definition for translation and import the translated content back into Accessible Surveys.
---

# How to use import/export to translate forms

This guide explains how to translate a survey form by exporting its content, translating it offline, and importing the translated file back into the platform.

## Step 1: Export the survey definition

First, export your existing survey form to generate a file containing all translatable content.

1. In the survey's **Import/Export** settings page, click the **Export Survey Definition** button.

<figure>
  <img src="./assets/import-export-translate-forms/step-1-export-survey-definition.png" alt="Click the Export Survey Definition button">
  <figcaption>Export Survey Definition button</figcaption>
</figure>

1. Select the target language for the translation (e.g., Arabic).

<figure>
  <img src="./assets/import-export-translate-forms/step-1-select-language-for-export.png" alt="Select the target language">
  <figcaption>Select the target language</figcaption>
</figure>

1. Confirm your selection by clicking **Create the Export**. The platform will generate a JSON file containing your survey structure ready for translation.

<figure>
  <img src="./assets/import-export-translate-forms/step-1-create-export.png" alt="Create the Export">
  <figcaption>Create the Export</figcaption>
</figure>

## Step 2: Translate the content

The exported file is in JSON format. You can edit this file to provide translations using either a plain text editor or an online JSON editor.

<figure>
  <img src="./assets/import-export-translate-forms/step-2-translated-file.png" alt="Translating the exported file">
  <figcaption>Example of a translated file</figcaption>
</figure>

### Editing with a Text Editor

You can use standard code or text editors (like VS Code, Notepad++, or Sublime Text). When editing, locate the translatable fields and update the target text string.

**Example Snippet:**

```json
{
  "type": "question",
  "label": {
    "source": "What is your primary language?",
    "target": "ما هي لغتك الأم؟"
  }
}
```

::: warning
Only edit the translated text (e.g., the `target` value). Do not alter the `id`, `type`, `source` text, or the JSON formatting (quotes, commas, brackets). Modifying the structure will cause the import to fail.
:::

### Editing with an Online Editor

If you prefer a visual interface, you can use tools like [JSON Editor Online](https://jsoneditoronline.org/) or dedicated localization platforms that support JSON. These tools format the code into a readable tree structure, reducing the risk of accidental syntax errors (like deleting a necessary comma).

### Structure of the Exported File

To help you navigate and translate the file effectively, here is an overview of the exported JSON structure.

The root of the file is divided into two main parts:

- **`survey`**: Contains global survey translations, such as the overall survey `heading` and global `text` elements.
- **`form`**: Contains the hierarchical structure of your questionnaire.

The **`form`** structure strictly follows the builder layout:

1. **Pages** (`"type": "page"`): The highest level. Contains fields like `heading`, `subHeading`, and `shortHeading`.
2. **Sections** (`"type": "section"`): Found within pages. Contains a `heading`.
3. **Questions** (`"type": "question"`): Found within sections. Contains detailed fields like `label`, `supportingText`, `placeholder`, `prefixText`, `suffixText`, `errorMessage`, and `alt` text.
4. **Options** (`"type": "option"`): Found within multiple-choice questions. Contains a `label` and `specifyLabel` (if an "Other" text input is allowed).
5. **Texts** (`"type": "text"`): Standalone descriptive text blocks found within pages or sections. Contains a `content` field.

## Step 3: Import the translated form

Once translation is complete, you can import the file back into Accessible Surveys to apply the new languages.

1. Navigate back to the **Import/Export** settings and click the **Import Survey Definition** button.

<figure>
  <img src="./assets/import-export-translate-forms/step-3-import-translated-form.png" alt="Click Import Survey Definition">
  <figcaption>Import Survey Definition button</figcaption>
</figure>

1. Click **Upload File...** to select your translated JSON file.

<figure>
  <img src="./assets/import-export-translate-forms/step-3-upload-translated-file.png" alt="Upload the translated file">
  <figcaption>Upload the translated file</figcaption>
</figure>

1. Confirm the language that corresponds to the content in the file (e.g., Arabic).

<figure>
  <img src="./assets/import-export-translate-forms/step-3-select-language-for-import.png" alt="Select language for import">
  <figcaption>Select language for import</figcaption>
</figure>

1. Review the details in the import dialogue and confirm the action to update your survey with the translated text.

<figure>
  <img src="./assets/import-export-translate-forms/step-3-import-survey-dialog.png" alt="Confirm the import survey dialog">
  <figcaption>Confirm the import survey dialogue</figcaption>
</figure>

Your survey form is now updated with the translated content.
