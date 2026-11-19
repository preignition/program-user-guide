---
description: Best practices and production guidance for recording and integrating sign language videos in surveys.
---

# Producing Surveys in Sign Languages

::: info
Providing sign language videos allows members of the Deaf community to participate in research and feedback using their primary, natural language.
:::

## Summary

- **Linguistic Inclusion:** For many Deaf individuals, sign language is their first language and primary mode of communication. Providing signed video questions significantly improves comprehension, confidence, and completion rates.
- **Dedicated Video per Question:** Record a separate video for each question that includes both the question prompt and its response options in the exact order they appear in the survey.
- **Professional Production Standards:** Work with accredited interpreters and native Deaf reviewers in a professional studio setting with plain backgrounds, proper lighting, and clear framing.
- **End-Screen Buffers:** Include a short pause (3 to 5 seconds) at the end of each video to prevent video hosting platforms from abruptly showing suggested video overlays before respondents can respond.
- **Direct Platform Integration:** Accessible Surveys provides built-in Sign Language mode support, allowing you to associate YouTube video IDs with individual questions or bulk-manage them via JSON import/export.

## Why Make Surveys Available in Sign Language?

A common misconception is that because surveys are written, they are automatically accessible to anyone who can see. However, written language is not universally accessible:

> "I understood the questions, and it gave me confidence in answering. Sometimes if it’s in English, I’m not always sure. Whereas with ASL (American Sign Language) based multiple choice options, I felt very confident and clear with my answers because ASL is my first language."
> — Respondent in *Towards Sign Language-centric Design of ASL Survey Tools* ([Worcester Polytechnic Institute](https://users.wpi.edu/~esolovey/papers/mahajan-chi22.pdf))

Several factors make sign language access essential:

1. **Linguistic Distinction:** Sign languages are distinct, complete natural languages with their own syntax, grammar, and idioms. They are not word-for-word visual translations of spoken or written languages.
2. **Literacy Disparities:** Deaf individuals often encounter systemic educational barriers that impact written language literacy. Deaf signers frequently have substantially greater fluency and confidence in their national sign language than in written text.
3. **Cultural Dignity and Human Rights:** The [United Nations Convention on the Rights of Persons with Disabilities (CRPD)](https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html) explicitly recognizes sign languages:
   - **Article 21 (Freedom of Expression and Opinion):** Mandates accepting and facilitating the use of sign languages in official interactions.
   - **Article 30 (Participation in Cultural Life):** Recognizes the specific cultural and linguistic identity of Deaf persons, including sign languages and Deaf culture.

## Choosing the Right Sign Language

There are more than 300 distinct sign languages used worldwide. When planning your survey, consider your geographic and demographic scope:

- **National Surveys:** Select the official or primary sign language of the country or territory (e.g., American Sign Language [ASL] in the United States and Canada, British Sign Language [BSL] in the United Kingdom, French Sign Language [LSF] in France, or Auslan in Australia).
- **International Surveys:** For global surveys, use **International Sign (IS)** recorded by an interpreter accredited by the World Association of Sign Language Interpreters (WASLI) or the World Federation of the Deaf (WFD), or provide multiple regional sign language options.

Accessible Surveys supports multiple sign language dialects within the same survey, allowing respondents to choose the dialect that matches their fluency.

## Video Production Best Practices

High video production quality is necessary to ensure that facial expressions, mouth movements, and hand gestures remain sharp and legible:

### 1. Studio and Camera Setup

- **Framing:** Record in landscape orientation. Frame the signer from the waist up (medium shot), leaving enough clearance around the hands and above the head for full signing space.
- **Lighting and Contrast:** Use even, diffused three-point lighting to eliminate harsh shadows on the hands and face. Avoid backlighting.
- **Background and Clothing:** The signer should wear solid, neutral clothing that contrasts with their skin tone (e.g., dark clothing for light skin, lighter clothing for darker skin). Avoid patterns, jewelry, or distracting backgrounds. A plain, solid backdrop (such as matte blue or gray) works best.
- **Eye Contact:** The signer should maintain consistent, natural eye contact with the camera, speaking directly to the respondent.

### 2. Video Structuring and Pacing

- **One Clip per Question:** Record one dedicated clip per question. Each clip should present the question stem followed by the response choices.
- **Preserve Option Sequence:** The interpreter must introduce response options in the exact identical order in which they appear on the screen. **Do not reorder options in the survey editor after recording**, as doing so creates confusing discrepancies between the video and the form.
- **Add an End Buffer:** Add a 3 to 5 second pause or freeze-frame at the end of each video. When videos are hosted on platforms like YouTube, this buffer prevents default "recommended videos" or end-screen cards from obscuring the final option before the respondent has finished watching.
- **Include Synchronized Captions:** Captions provide dual-modality reinforcement for respondents and enable survey creators who do not sign to verify that each video matches its corresponding question.
- **Lock Text Before Production:** Finalize the written survey text before recording starts. Changing question phrasing after the videos are produced requires costly re-recording or introduces inconsistencies.

### 3. Community Validation and Testing

Always have recordings reviewed by a native Deaf signer who did not participate in the recording session. This independent check confirms that the signs, speed, and cultural phrasing are unambiguous and readily understood.

## Resources and Service Providers

### Service Providers

When commissioning sign language translation, request quotes and verify interpreter accreditations:

- **[Drip Media](https://www.dripmedia.co.uk/):** Accessible media production specializing in multilingual sign language video services.
- **[Signapse](https://www.signapse.ai/):** Combines AI tooling and expert Deaf translators for BSL and ASL translation.
- **[Sign Solutions](https://www.signsolutions.uk.com/):** Comprehensive British Sign Language interpreting and video translation services.
- **[A2i Transcription Services](https://a2i.co.uk/):** Produces accessible formats including BSL videos and plain language adaptations.
- **[Overseas Interpreting](http://overseasinterpreting.com/):** International sign language interpreting and translation services.
- **[World Association of Sign Language Interpreters (WASLI)](http://www.wasli.org):** Global organization supporting professional sign language interpreters and accreditation standards.

### Research and Literature

- Mahajan, R. et al. (2022). *Towards Sign Language-centric Design of ASL Survey Tools*. CHI Conference on Human Factors in Computing Systems. [Available online](https://users.wpi.edu/~esolovey/papers/mahajan-chi22.pdf).

## Related Content

- [How to Use Sign Language](../how-to/use-sign-language.md) — Step-by-step instructions for enabling Sign Language mode and linking videos in the editor.
- [Bulk Updating via Import/Export](../how-to/import-export.md) — Managing YouTube Video IDs across large surveys using JSON files.
- [The Concept of Modes](./the-concept-of-modes.md) — How the platform serves diverse respondent needs from a single underlying form.
