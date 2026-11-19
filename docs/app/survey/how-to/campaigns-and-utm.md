---
description: How to create a marketing campaign, build UTM-tagged survey links, and read campaign attribution in survey analytics.
---

# How to Track Marketing Campaigns and UTM Links

UTM parameters tell you which channel, campaign and link element brought a respondent to the survey. The platform stores them with each response, so you can compare, for example, a newsletter link against a social post.

This is an **Advanced Mode** workflow: campaigns and the UTM controls appear only when Advanced Mode is on.

## Step 1: Create a campaign

1. Open the survey and switch on **Advanced Mode**.
2. Open **Share → Campaign**.
3. Select **Create Campaign**.
4. Enter a **Campaign Name** (for example `spring_promo_2026`) and an optional **Description**.
5. Save.

New campaigns are active. Only active campaigns can be selected in the link builder; deactivate one to stop using it for new links without deleting its history.

A campaign does not store a source or medium. Those are chosen per link, so the same campaign can run on email, social and video.

## Step 2: Build a tagged link

1. Open **Share → Distribute**.
2. In the **Link Builder**, choose the test or production link and any language or accessibility presets you want pre-selected.
3. In **UTM Parameters**, fill in the values:

   | Parameter | How to set it | Typical use |
   | --- | --- | --- |
   | **Term** | Free text; lowercase letters, digits, `_`, `-` and `+`. | The keyword or audience segment that clicked, for example `students`. |
   | **Medium** | One of None, Email, Organic, Cost per Click, Social or Video. | The channel type. |
   | **Content** | No pre-selection, Logo Link, Text Link or Image Link. | Which element in the same message was clicked. |
   | **Campaign** | Pick an active campaign. | The named initiative the link belongs to. |

4. Copy the generated link.

The link carries your language and accessibility presets plus `utm_medium`, `utm_term`, `utm_content` and `utm_campaign`. Add `utm_source` yourself (for example `&utm_source=newsletter`) if your reporting needs a source value; the link builder does not add one.

Create one link per placement rather than reusing a single link everywhere. Reusing it collapses the differences you are trying to measure.

## Step 3: Distribute the links

Put each tagged link where it belongs: the newsletter, a social post, a partner page, a printed QR code. Do not shorten a link in a way that drops its query string, and do not add tracking parameters through a third-party redirector unless you have verified they survive to the survey.

If you also send invitations, keep the invitation link and the public tagged links separate: invitations carry a per-recipient token, while UTM-tagged links are for open distribution.

## Step 4: Read the attribution

1. Open **Analyze** for the survey.
2. The UTM values are recorded as metadata fields per response: **UTM source**, **UTM medium**, **UTM campaign** and **UTM term**.
3. Add them as chart dimensions or cross-filter by them, the same way as other metadata.
4. Turn on **Advanced** to see every metadata field, including a UTM field whose value is constant across the dataset (constant fields are hidden by default because they do not vary).

Campaign values are recorded exactly as they appear in the link. If you change a campaign's name, old responses keep the value they were collected with; create a new campaign for a new wave rather than renaming one you still compare against.

## Step 5: Close the campaign

When a campaign ends:

1. Open **Share → Campaign**.
2. Deactivate it. Existing links still resolve and their responses still carry the campaign value; the campaign simply stops appearing in the link builder.

## Tips

- Agree on a naming convention before the first campaign (`newsletter_2026_11`, `social_linkedin_launch`) so values sort and group sensibly.
- Keep medium values to the six offered options; a free-text medium fragments your report.
- Use **Term** for audience segments and **Content** for the placement inside a message, not the other way around.
- Test the generated link before sending it: open it and complete a test submission, then confirm the values appear in Analyze.

## Related Content

- [Campaigns & UTM Tracking Reference](../reference/share/campaign/index.md): Campaign fields, link builder and parameter definitions.
- [Distribute Reference](../reference/share/distribute/index.md): Link builder, presets and invitation runs.
- [How to Publish and Distribute a Survey](./publishing-a-survey.md): The publishing flow these links belong to.
- [How to Analyze Survey Responses](./survey-analytics.md): Cross-filtering by metadata.
