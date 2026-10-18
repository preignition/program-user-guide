---
description: Remove the data a survey collected while keeping the survey itself.
---

# Purge the data a survey collected

**Purge data** removes what a survey collected — the responses and their derived trees, the survey's sessions and their answers, and the reminder contact records — and keeps the survey, its form and its configuration usable. It is not the same as deleting the survey, which removes everything.

::: warning
A purge cannot be undone. Take an export first if you may need the responses.
:::

## Before you start

- You must be the survey's owner, or the owner or admin of its team.
- The survey can stay published; a purge does not unpublish it, and respondents keep answering into a clean dataset.
- Shared answer stores (`user` and `organisation` sections) and test answers are **not** part of the purge — answers stored against an account or an organisation belong to more than one survey. The preview names them.

## Purge the data

1. Open the survey and choose **Purge data**.
2. The dialog reads the survey's inventory and lists what will be deleted (sessions, form sessions, responses, reminder contact records) and what is kept (the survey, the form, the published build, the shared stores).
3. Type the survey's name to confirm, then choose **Purge data**.
4. The action reports its progress and records an activity entry naming who purged what and when.

## What is removed

| Removed | Kept |
| --- | --- |
| The `raw`, `humanized` and `anonymized` responses | The survey definition and its configuration |
| The session documents of this survey and their answers | The form definition |
| The reminder contact records (addresses) | The published build |
| The survey's form-session documents | The shared answer stores and the test answers |
