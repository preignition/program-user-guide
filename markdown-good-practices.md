# Markdown Good Practices

This guide outlines best practices for writing and organizing Markdown documentation to ensure it is clear, consistent, and easy to maintain.

## File and Directory Structure

A well-organized file structure is crucial for navigable documentation.

### `README.md` at Every Root

Every significant directory or module root should contain a `README.md` file. This file acts as an index and summary for the contents of that directory.

- **Top-level `README.md`:** Provides an overview of the entire project.
- **Sub-directory `README.md`:** Explains the purpose and contents of that specific module or section.

### File Naming Conventions

Consistent file naming makes it easier to find information.

- **Use lowercase:** `file-name.md` instead of `FileName.md` or `File-Name.md`.
- **Use hyphens for separators:** Use `kebab-case` for multi-word file names (e.g., `getting-started.md`). This is generally more web-friendly than underscores or spaces.
- **Be descriptive:** File names should clearly indicate their content (e.g., `api-reference.md`, `installation-guide.md`).

### Asset Location

Assets like images, diagrams, and other media should be stored in a structured way.

- **Create an `assets` directory:** Inside the folder containing your Markdown files, create a subdirectory named `assets` (or `images`, `media`, etc.).
- **Store assets locally:** Place all assets referenced by your Markdown files within this `assets` directory.
- **Use relative paths:** Link to assets using relative paths. This ensures that the links are not broken if the project is moved or viewed on different systems.

#### Example Directory Structure

```md
.
├── feature-a/
│   ├── README.md
│   ├── assets/
│   │   └── feature-a-diagram.png
│   └── advanced-usage.md
└── feature-b/
    ├── README.md
    └── assets/
        └── feature-b-screenshot.png
```

In `feature-a/README.md`, you would reference the image like this:

```markdown
![Diagram for Feature A](./assets/feature-a-diagram.png)
```

## Content Best Practices

### Test

- **Structure with Headings:** Use headings (`#`, `##`, `###`, etc.) to create a clear hierarchy.
- **Keep it Concise:** Write clear and simple sentences. Use lists and tables to present complex information.
- **Use Code Blocks:** For code snippets, use fenced code blocks with language identifiers for syntax highlighting.
- **Link Generously:** Link to other relevant documents, sections, or external resources to provide context.

## Gitbook Specific Practices

For the time being, we are still using Gitbook to render our documentation. Here are some specific practices to follow when writing Markdown for Gitbook:

- **Description**: Each file should start with a description block enclosed in triple dashes (`---`). This block can include metadata such as `title`, `description`, and other relevant information for Gitbook processing.

```md
---
description: This page shows you how to generate links for your surveys
---
```

Or, for longer descriptions:

```md
---
description: >-
  A training course to help new users create a training survey and become
  familiar with Accessible Surveys
--- 
```

- **Hints**: Use Gitbook's hint blocks to highlight important information, tips, or warnings. Possible styles include `success`, `info`, `warning`, and `danger`.

```md
{% hint style="info" %}
Only lowercase letter and numbers are allowed for aliases
{% endhint %}
```

- **Figures and Captions**: Use the `<figure>` and `<figcaption>` HTML tags to include images with captions.

```md
<figure><img src="./assets/image.png" alt="Description of image"><figcaption>This is the caption for the image.</figcaption></figure>
```

- **Videos**: Embed videos using the `{% embed %}` tag for better integration.

```md
{% embed url="https://youtu.be/Vu9NUKzv_LQ" %}
```

## Rule enforcement

To maintain consistency and quality across the documentation, we use a linting tool called `markdownlint`. This tool checks Markdown files against a set of predefined rules and best practices.

There is a GitHub Action set up to automatically run `markdownlint` on all Markdown files in the repository whenever changes are pushed. This helps catch formatting issues and ensures adherence to our Markdown standards.

The results of the linting process will be displayed in the GitHub Actions tab of the repository, allowing contributors to quickly identify and fix any issues. It is available from https://github.com/preignition/program-user-guide/actions.

The list of rules is as follows: https://github.com/DavidAnson/markdownlint/blob/main/README.md

Some rules are disabled:

- MD013: Line length
- MD024: Multiple headers with the same content
- MD033: Inline HTML
- MD034: Bare URLs
