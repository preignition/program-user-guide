---
description: Why accessibility is designed into the data collection layer rather than added after the survey is built, and what that changes.
---

# Accessibility First

Most software treats accessibility as a final pass: build the product, then add captions, alternative text and keyboard support if time allows. The result is a product with an accessible layer bolted on, and an "accessible version" that drifts from the main one.

This platform takes the opposite position. Accessibility is a property of the data collection layer itself: the same survey, the same questions, the same response record. This article explains why that matters and what it changes.

## Accessibility is a precondition, not a feature

CRPD Article 9 requires access to information and communications technologies and systems on an equal basis with others. Article 21 requires information intended for the general public to be provided in accessible formats and technologies, **in a timely manner and without additional cost**, and asks private entities providing services over the Internet to do so in accessible and usable formats.

A survey is information and a service. If the accessible route is a separate product, a separate request, or a separate cost, the right is not met — it is negotiated case by case.

Accessibility First means the accessible route is the product.

## What changes when accessibility is in the data layer

When accessibility lives in the data model rather than in a presentation skin:

- **One response set.** Easy Read, Read Aloud and Sign Language respondents answer the same questions and land in the same dataset. No one is analyzed as a separate, smaller sample.
- **Content stays in sync.** A change to a question propagates to every mode, because the modes are views of the same item, not copies.
- **Translations and accessibility share the same lifecycle.** A localized Easy Read version and a localized sign-language video are versioned with the survey, not maintained in a parallel document.
- **The export is the same.** Accessibility does not create a second dataset to reconcile.

The alternative — separate accessible forms — produces exactly the fragmentation it claims to solve: different wording, different logic, different counts, and an accessible sample too small to analyze.

## The forms accessibility takes here

- **Structure.** Pages, sections and questions have real headings, labels and descriptions, so a screen reader can navigate them.
- **Text alternatives.** Images require alternative text; Markdown links must name their destination.
- **Multimodal content.** Read Aloud, Easy Read and Sign Language are content variants of the same item.
- **Plain language.** Review measures sentence length and long-word density and suggests rewrites; Easy Read goes further with simplified text and images.
- **Input choice.** Voice Recording lets a respondent speak an answer where typing is the barrier; email commands let a Listserv subscriber act without a browser.
- **Presentation choice.** One question at a time, larger labels and scroll-before-next exist because attention and motor control differ.
- **Privacy of the route.** Using an accessibility mode is not recorded as a separate respondent category in the survey data.

## Universal design and individual accommodation

Accessibility First is not a claim that one design fits everyone. CRPD Article 2 distinguishes:

- **Universal design** — usable by all people, to the greatest extent possible, without the need for adaptation;
- **reasonable accommodation** — the necessary and appropriate modification for an individual's particular requirements.

The platform tries to make the default usable, then offers individual adjustments: the accessibility menu, Read Aloud, language choice, contrast, and the respondent's own assistive technology. The two work together; neither replaces the other.

## What it costs, and what it saves

Accessibility work is real work. It changes content authoring: alt text, plain language, reviewed translations, recorded voices, sign-language videos. It also changes what a study can claim.

A survey that excludes people with disabilities cannot describe a population. It describes the people who could use the survey. Accessibility First is therefore a methodological position as much as an ethical one: it protects the validity of the data.

## A test for any feature

Ask three questions before shipping a survey feature:

1. **Can a respondent perceive it** with sight, hearing, touch, or assistive technology?
2. **Can a respondent operate it** by keyboard, voice, switch, or touch, without a time limit they cannot meet?
3. **Can a respondent understand it** in plain language and in their language?

If the answer is no, the feature is not finished. It is a barrier with a release date.

## Related Content

- [We Have Different Needs](./we-have-different-needs.md): The diversity this principle serves.
- [Rooted in the Disability Movement](./rooted-in-the-disability-movement.md): The people and history behind the principle.
- [Producing Surveys in Plain Language or Easy Read](./producing-plain-language-easy-read.md): Writing for cognitive accessibility.
- [Producing Surveys in Sign Languages](./producing-sign-language.md): Signed languages as languages.
- [How to Review a Survey](../how-to/review-a-survey.md): Automated accessibility checks.
