---
description: An explanation of the JSON format, what it is, and why it is the preferred format for translating surveys.
---

# What is JSON?

When exporting a survey definition from Accessible Surveys for translation, the platform generates a file in **JSON** format.

JSON, which stands for **JavaScript Object Notation**, is a lightweight format for storing and transporting data. While it originated from JavaScript, it is now a universal standard used across almost all programming languages and modern web applications.

## Why use JSON instead of Excel or CSV?

You might be used to seeing tabular data in spreadsheet formats like `.xlsx` (Excel) or `.csv` (Comma-Separated Values). However, JSON is uniquely suited for representing the complex structure of a survey.

### 1. Hierarchical, Nested Structures
A survey is rarely a simple list of items. It has a deeply nested, hierarchical structure:

* **Forms** contain **Pages**
* **Pages** contain **Sections**
* **Sections** contain **Questions**
* **Questions** contain **Options** and **Logic**

Tabular formats like CSV are flat (two-dimensional: rows and columns). Trying to represent a deeply nested survey in a flat table requires complicated workarounds that are often lossy and difficult to read.

JSON, on the other hand, natively supports hierarchical trees. A "Question" object in JSON can seamlessly contain a list of "Option" objects, perfectly preserving the survey's exact structure without any loss of context.

### 2. Strict Key-Value Pairing
JSON stores data in key-value pairs (e.g., `"target": "ما هي لغتك الأم؟"`). This strict formatting provides a clear separation between the *structure* of the data (the keys) and the *content* of the data (the values). It makes it incredibly clear which string belongs to a question's `label` and which belongs to an `errorMessage`.

### 3. Localization Tooling Standard
Because JSON is the standard data interchange format of the web, almost all professional translation and localization platforms (such as Crowdin, Lokalise, or phrase) support JSON natively. Translators can upload a JSON file into their preferred tools, which will automatically extract the text to be translated, hiding the underlying code structure, and then re-export a perfectly formatted file ready for import.

## What does it look like?

To humans, JSON is easy to read because it relies on simple syntax rules—brackets, braces, colons, and quotes.

```json
{
  "type": "question",
  "id": "q_123",
  "label": {
    "source": "How often do you use the internet?",
    "target": "Combien de fois utilisez-vous Internet ?"
  },
  "options": [
    {
      "id": "opt_1",
      "label": {
        "source": "Daily",
        "target": "Quotidiennement"
      }
    }
  ]
}
```

In the example above, you can clearly see how the `options` are nested *inside* the `question`, and how both original and translated text are kept neatly together.

By using JSON, Accessible Surveys ensures that your translation workflows are reliable, your survey structure is perfectly preserved, and your data remains compatible with industry-standard localization tools.
