---
description: How to set a team's public title, description and logo, localize them, and configure the sender identity, signature, footer and channels used by its emails.
---

# How to Configure Team Presentation, Communication and Channels

Each team has a public face and an email identity. Presentation controls what respondents and colleagues see (title, description, logo, translations); Communication controls who survey emails come from and how they are signed; Channels control the discussion and broadcast feeds associated with the team's apps.

You need the team **Owner** or **Admin** role for these settings. Open the team from **Customer Portal → Teams → Open** first.

## Set the team's public identity

1. Open the team and select **Presentation**.
2. Set the **Title** (required, up to 80 characters). This is the public-facing name, not the internal team name.
3. Enter a **Short Description** (up to 200 characters) used on cards and directory listings.
4. Upload a **Logo** by dragging a file onto the uploader or using the file selector.
5. Write the full **Description** (up to 1,000 characters). Markdown is supported.

The logo appears on team portals and respondent-facing survey banners, so use an image that works on light and dark backgrounds and remains legible when small.

### Translate the presentation

1. In **Presentation**, keep **Default Language** as the team's primary language.
2. Open the **Translate** tab.
3. Choose a language enabled for the organization, then translate the title, short description and description.
4. Save.

A language cannot be translated here until it is enabled under **Customer Portal → Profile → Public → Languages**. Leaving a translation empty falls back to the default language text.

## Configure the email sender identity

Open the team and select **Communication**.

| Field | What it controls |
| --- | --- |
| **Sender Address** | The default address outbound team emails come from. Delivery goes through the platform's Mailgun service. |
| **Reply to Email** | Where direct replies go when a respondent replies to an invitation, reminder or confirmation. Use a monitored inbox. |
| **Email Signature** | Markdown/rich-text sign-off appended to survey invitation and broadcast emails. |
| **Footer** | Markdown/rich-text legal notices, disclaimers or links appended to all outbound messages. |

Set the reply-to address deliberately: a `no-reply` inbox loses the questions respondents send back. Individual surveys can override the reply-to address in **Share → Distribute** or **Share → Email**.

## Manage channels

1. Open the team and select **Channels**.
2. Find the application group: **Blog**, **Discussion** or **Survey**.
3. Select **Add Channel**.
4. Enter a name, description and slug identifier.
5. Save.

Channels curate messages or discussions for an application. Use the channel list to edit a channel's title or description, or to delete it.

Delete a channel only when its content is no longer needed; deleting it removes the discussion surface for that app.

## Check the result

1. Open a survey in the Survey app and preview an invitation email: the sender, reply-to, signature and footer should match.
2. Open the team portal: title, logo and description should render in the default language.
3. Switch the portal language to confirm the translations.
4. Confirm a respondent reply reaches the reply-to inbox.

## Related Content

- [Team Presentation Reference](../reference/team/presentation.md): Fields, limits and localization.
- [Team Communication Reference](../reference/team/communication.md): Sender identity and email framing.
- [Channels Reference](../reference/team/channels.md): Application streams and channel controls.
- [Customer Profile Reference](../reference/customer/profile.md): Enabling organization languages and currencies.
- [Survey Email Reference](../../survey/reference/share/email/index.md): Survey-level sender overrides.
