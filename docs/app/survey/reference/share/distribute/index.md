---
description: Reference documentation for distributing your survey and using the Link Builder.
---

# Distribute Your Survey

The **Distribute** page provides the tools and settings necessary to generate, customize, and copy access links for your survey.

<figure>
  <img src="./assets/distribute-auto.png" alt="The survey distribution interface">
  <figcaption>The survey distribution interface</figcaption>
</figure>

## Distribution Links

The core of the Distribute page lets you generate access links for different phases of your survey lifecycle:

- **Display Link for Test**: Generates a test URL (using `SURVEY_TEST_URL`). Test links are intended for previewing, testing, and gathered feedback from early respondents. Answers submitted via test links are **not** saved to the production database.
- **Go to Production**: Reveals the production link, marks the survey as in production, and redeems one survey from your plan's quota. The button is only enabled once at least one build has been published, and it disappears once the survey is in production.
- **Display Link for Production**: Generates the live production URL (using `SURVEY_PROD_URL`). This button appears once the survey has been taken to production. Submissions via this link are recorded as official production dataset responses.

<figure>
  <img src="./assets/distribute-test-link-full-auto.png" alt="The Link Builder interface with generated test link details">
  <figcaption>The Link Builder interface with generated test link details</figcaption>
</figure>

## Go to Production and Survey Quota

Building a survey does not make it live. The production link stays hidden until you press **Go to Production** and confirm the dialog. That single action:

- stamps the survey as in production (it cannot be undone), and
- redeems **one survey** from the customer's plan quota.

Next to the button, the page shows the survey quota left on the plan (for example, *"25 surveys left on your plan."*). When the quota reaches zero, a grace notice explains how long you can still take surveys to production while you arrange more quota; after the grace period, the production link stops accepting new respondents until quota is added. If no survey quota is configured for the customer, the page asks you to contact support.

## The Link Builder

Once you click to display either a test or production link, the **Link Builder** is displayed below. The Link Builder dynamically appends query parameters to your survey URL based on the presets you select:

### 1. Language Presets
If your survey is multilingual and has translations configured, you can pre-select a language for the generated link.

- **No Pre-Selection**: The survey will default to the respondent's preferred browser language.
- **Selected Language**: Appends `?lang=<code>` to force the survey to render in the selected language.

### 2. Sign Language Presets
If sign language modes are active for the survey, you can pre-select a specific sign language dialect.

- Appends `?signlanguage=<code>` to automatically activate the sign language video overlay upon landing.

### 3. Accessibility Modes Presets
Pre-select accessibility modes to be automatically enabled when a respondent opens the link:

- **Easy Read**: Appends `?easyread=true` to render the simplified language version.
- **Read Aloud**: Appends `?readaloud=true` to automatically activate text-to-speech reading.
- **Voice Recording**: Appends `?voice=true` to enable voice response recording features.

Multiple accessibility modes can be combined in the same link.

## Related Content

- [Campaigns & UTM Tracking](../campaign/index.md) — Creating and managing marketing campaigns
- [Advanced Distribution Settings](./advanced.md) — Custom tracking links and campaign selector in Advanced Mode
- [Publishing a Survey](../../../how-to/publishing-a-survey.md) — Step-by-step guide to building and sharing versions
