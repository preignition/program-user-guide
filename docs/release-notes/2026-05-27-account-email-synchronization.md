# Seamless Identity Verification with Account Email

**Date:** 2026-05-27
**Version:** 1.0.0

## Overview

Capturing verified identities during a survey is now easier than ever with the new **Account Email** question type. This feature allows anonymous sessions to be promoted to verified accounts without interrupting the respondent's flow, ensuring high-quality data and persistent respondent profiles.

## What's New?

### Account Email Synchronization

* **What it is:** A specialized question field that synchronizes the respondent's input directly with their underlying platform account.
* **Why it matters:** It bridges the gap between anonymous data collection and authenticated participation. When a respondent enters their email, the system automatically sends a verification link and tracks its status in real-time.
* **How to use:** In the Survey Builder, go to **Compose**, add a new question, and select **Account Email** from the question type list.
* **Read more:** [Account Email Reference](../app/survey/reference/build/compose/account-email.md)

## Fixes & Improvements

* **Real-time Verification Tracking:** The UI now displays a green checkmark as soon as an email is verified, without requiring a page refresh.
* **Identity Pre-filling:** Respondents with existing account emails will see their field automatically pre-filled, streamlining the submission process.
