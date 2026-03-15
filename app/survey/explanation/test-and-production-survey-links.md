---
description: An explanation of the differences between Test and Production links and why they are kept strictly isolated.
---

# Test and Production Survey Links

When a survey is built and ready to be shared, Accessible Surveys provides two distinct types of URLs: the **Test Link** and the **Production Link**.

This separation is a fundamental architectural decision designed to protect the integrity of your real survey data while still allowing for rigorous testing and collaborative review.

## The Concept of Isolation

In survey research and data collection, mixing "dummy" data with "real" data is a major risk. If you and your colleagues test a live survey by filling out dummy responses, those responses will skew your final analytics. Cleaning out test data later is often tedious and error-prone.

To solve this, we strictly isolate the testing environment from the production environment.

## The Test Link

The **Test Link** is designed for quality assurance, feedback, and review.

* **Purpose:** Use this link to test logic, review translations, verify accessibility modes (like Read Aloud or Easy Read), and get approval from stakeholders before launching.
* **Data Handling:** Any responses submitted via the Test Link are flagged and stored separately. They will **never** appear in your production analytics, dashboards, or official data exports.
* **Iteration:** You can safely submit a test response, tweak the form, build a new version, and submit another test response without worrying about corrupting your primary dataset.

## The Production Link

The **Production Link** is the official URL for your active data collection campaign.

* **Purpose:** This link should only be shared with your actual target audience.
* **Data Handling:** Responses submitted via the Production Link are treated as official, live data. They populate your analytics dashboards and are included in all data exports.
* **Stability:** Because the Production Link is tied to a specific, immutable [Build Version](./survey-versionning.md), the experience remains stable for all respondents, ensuring that the data collected is structurally consistent from the first respondent to the last.

## The "Why" Behind the Design

Providing separate links shifts the responsibility of data cleanliness from the human researcher to the system architecture.

By enforcing this boundary at the point of entry (the URL), we eliminate the need for you to manually tag, filter, or delete "test" rows from your final CSV exports. It ensures that when you look at your production analytics, you can trust that every data point came from a real respondent.
