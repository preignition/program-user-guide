---
description: Introducing the Confidence Index and advanced behavioral tracking for survey integrity.
---

# Confidence Index & Behavioral Tracking

We are excited to introduce a suite of features designed to enhance data integrity and provide researchers with deeper insights into respondent behavior.

## What is the Confidence Index?

The **Confidence Index** is a new metric that helps identify potential bot activity and low-effort human submissions. By analyzing anonymized behavioral signals, the system calculates a score from 0 to 100, representing the reliability of each submission.

Researchers can now see:

* **Speed Penalties**: Flags submissions that are significantly faster than a human could reasonably read and answer the questions.
* **Interaction Penalties**: Detects automated "burst" patterns typical of bots or pasting, while rewarding "human-like" behavior such as modifying choices or incremental typing.
* **Engagement Indicators**: Provides a **Focus Ratio** to see how much time respondents spent actively focused on the survey tab versus being idle or multi-tasking.

## Advanced Behavioral Tracking

To support the Confidence Index, we've implemented granular tracking of:

* **Question Duration**: See exactly how long respondents stay on each individual question.
* **Focus Events**: Detect when respondents switch browser tabs or go idle.
* **Field Interactions**: Track when respondents modify their answers, providing a clear signal of cognitive engagement.

## Automated Drop-off Integration

Researchers no longer lose partial data from abandoned surveys. With the new **Monitor Drop-off** feature:

* The system automatically generates a behavioral summary for inactive sessions.
* After 3 days of inactivity, these "dropped-off" surveys are automatically integrated into the main dataset.
* Integrated drop-offs are clearly marked with an `isDropOff` flag for transparent analysis.

## How to Enable

These features are optional and can be enabled per survey:

1. Navigate to the **Behavior** configuration of your survey.
2. Under the **Research & Integrity** section, toggle **Behavioral Tracking** and **Monitor Drop-off**.

::: info
Behavioral tracking is fully anonymized and focuses on interaction patterns rather than identifiable data.
:::
