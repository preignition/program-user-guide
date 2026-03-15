---
description: An explanation of why Accessible Surveys uses Markdown for rich text formatting and its benefits for accessibility.
---

# Using Markdown

When designing a survey, the way text is formatted—headings, bold emphasis, lists, and links—plays a crucial role in how respondents understand and engage with your questions. Accessible Surveys utilizes **Markdown** as the standard language for formatting text across the platform.

This document explains why we chose Markdown over traditional rich-text editors (like those found in word processors) and how it benefits the survey experience.

## What is Markdown?

Markdown is a lightweight markup language with plain-text formatting syntax. Instead of clicking buttons to make text bold or create a list, you use simple keyboard symbols.

For example:

* Typing `**Bold Text**` results in **Bold Text**.
* Typing `# Heading 1` creates a large primary heading.
* Typing `* Item 1` creates a bulleted list.

## Why We Use Markdown

### 1. Accessibility First

Traditional "WYSIWYG" (What You See Is What You Get) editors often generate complex, messy background HTML that can confuse screen readers and other assistive technologies. Markdown, by design, translates into clean, semantic HTML. A Markdown heading is guaranteed to be a proper `<h1>` or `<h2>` tag, which is critical for users who navigate via screen readers. By using Markdown, we ensure that the underlying structure of your survey text remains inherently accessible.

### 2. Consistency Across Devices

Surveys are taken on desktop monitors, tablets, and small mobile phones. Markdown ensures that text styling remains strictly structural. Instead of allowing authors to choose specific font sizes or custom colors (which might look great on a desktop but terrible on a phone), Markdown leaves the visual rendering to the platform's responsive theme engine. A `# Heading 1` will always look proportional and beautiful, regardless of the device.

### 3. Portability and Future-Proofing

Because Markdown is just plain text, it is highly portable. It can be easily exported, stored in databases, and tracked via version control without any risk of corruption. If you ever need to export your survey questions to another system or analyze them with external tools, the text formatting will be preserved perfectly.

## The "Why" Behind the Design

In a platform dedicated to accessibility and robust data collection, the structure of the content is just as important as the content itself. By adopting Markdown, Accessible Surveys enforces a separation of content from presentation. You focus on writing clear, semantic questions, and the platform guarantees they will be rendered accessibly and consistently for every respondent.
