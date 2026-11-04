---
description: Reference documentation for the Survey Localization tool.
---

# Localize Reference

The Localize tool manages the translation of the survey into multiple languages. It allows administrators to review, manage, and import/export translations for form fields, labels, and pages.

<figure>
  <img src="./assets/localize-auto.png" alt="The Localize interface.">
  <figcaption>The main view for managing survey translations.</figcaption>
</figure>

## Advanced Configuration and Export

In advanced mode, administrators have access to deeper technical controls, including the ability to export translation templates as JSON files for external processing and import completed translations back into the platform.

<figure>
  <img src="./assets/localize-advanced-auto.png" alt="Advanced view of the Localize interface.">
  <figcaption>The advanced view of the Localize tool.</figcaption>
</figure>

## Translation Process

The tool supports automatic base translation for empty fields and manual overrides. Content can also be securely exported to a structured JSON format, handed off to professional translation services, and safely re-imported.

## Email Messages

In advanced mode the tree includes an **Email** row and the survey's activated email messages. Each message edits its subject and markdown body in the active language, with the primary language shown read-only above the editor. The **Translation** column shows the translated subject, with the primary subject muted underneath when the translation is empty. The **Translate** action includes every email message, subject and body; the override choice applies to them as it does to the rest of the survey.
