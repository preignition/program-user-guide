---
description: Understand how the Confidence Index helps identify bot activity and low-effort submissions.
---

# Confidence Index

The **Confidence Index** is a metric designed to help researchers evaluate the reliability of a survey submission. It provides a weighted score from 0 to 100, representing the platform's confidence that the respondent was a human being who engaged meaningfully with the content.

## Why a Confidence Index?

In online surveys, data quality can be compromised by:

- **Automated Bots**: Scripts designed to fill out forms rapidly to claim rewards or skew results.
- **"Speeders"**: Human respondents who click through questions without reading them.
- **Distracted Respondents**: Users who leave the survey open for long periods without focusing on it, which might affect their recall or engagement.

The Confidence Index uses behavioral tracking to flag these patterns without blocking the submission, allowing researchers to decide whether to include the data in their final analysis.

## How it Works

The index is calculated by the backend during the submission process, based on an event stream captured while the respondent fills in the form.

### 1. Speed Penalty
The platform calculates a "minimum reading time" heuristic. As a baseline, it assumes a human needs at least 3 seconds per question to read and interact with it.

- **Calculation**: If the total active time is significantly lower than the minimum reading time, a penalty is applied proportional to the speed.
- **Impact**: Submissions that are "too fast" will receive a high speed penalty and may be flagged as potential bots.

### 2. Interaction Penalty
The platform monitors **interaction events**, specifically focusing on how respondents provide and modify their answers. Unlike standard input tracking, the system distinguishes between interaction types to identify human-like behavior.

#### Modification Heuristic
The system primarily tracks **modifications** (changes to an existing answer). A first pass through the form is expected, but bots rarely go back to change or refine an answer.

- **Choice Reward**: Changing a choice-based answer (e.g., dropdown, radio, checkbox) is considered a strong signal of human intent and reduces the interaction penalty.
- **Burst Penalty**: For text-based fields, the system analyzes the frequency of input events. If a large amount of text is entered in a single "burst" (typical of bots or pasting) without incremental typing, a penalty is applied.

#### Scoring the Penalty

- **No Interaction**: A penalty of 100 is applied if a respondent never modifies an answer.
- **Low Interaction**: A penalty of 50 is applied if total human-like interactions (incremental typing or choice changes) are below 30% of the total question count.
- **Interaction Quality**: The penalty is further adjusted by +30 for suspicious burst patterns and -20 for high-confidence choice modifications.

### 3. The Final Score
The Confidence Index starts at 100. Penalties are subtracted based on the heuristics above:

`Confidence Score = 100 - (Speed Penalty + Interaction Penalty)`

A score of **100** represents perfect confidence. A score below **50** typically indicates a submission that warrants closer inspection.

## Behavioral Indicators

In addition to the score, the platform tracks several behavioral indicators that help researchers understand the context of the submission:

- **Focus Ratio**: (Active Time / Total Session Time). While no longer used to penalize the score (as bots often have perfect focus), it helps identify distracted human respondents.
- **Burst Input**: A flag indicating that text entry was primarily performed in single bursts (bot/paste) rather than key-by-key typing.
- **Choice Changes**: A count of how many times the respondent changed their mind on choice-based questions.
- **No Interaction**: A flag indicating that the respondent did not modify any answers during the session.
- **Too Fast**: A flag indicating that the session time was significantly below the human-readable threshold.
- **Is Drop Off**: A flag indicating that the submission was automatically integrated after 3 days of respondent inactivity.

## Ethical Considerations

The Confidence Index is an **assistive tool**, not a definitive judgment.

- It does **not** block respondents from submitting.
- It provides context to the researcher, who retains the final decision-making power.
- The heuristics are designed to be conservative to avoid penalizing legitimate respondents who might simply be very fast readers or have legitimate reasons for brief distractions.

::: info
The Confidence Index is only available for surveys where behavioral tracking is enabled. It is stored alongside the respondent's data and can be used as a filter in the analytics view.
:::
