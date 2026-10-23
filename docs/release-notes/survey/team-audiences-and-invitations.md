---
description: Team audiences, unique invitation links, progress tracking and reminders — without linking answers to an address.
---

# Team audiences and invitations

You can now keep a reusable recipient list for your team and send a survey to it, with a unique link for each person.

## What is new

- **Audiences** in team settings: import a CSV of email addresses, names, languages and external ids, validate it in a preview, and keep the list current. One recipient record per person per team; audiences are memberships, not copies.
- **Invitation email**: a new Invitation tab on the survey's Email page, with merge fields for the recipient's name, their unique link, the survey title and the organiser.
- **Unique links** at `/v2/{surveyId}/i/{token}`. A recipient can open the link on another device and resume their partial answers; the link remains usable when forwarded.
- **Access mode**: an `open` survey keeps its public link; an `invitation-only` survey requires a valid invitation to submit.
- **Progress**: a new tab in the survey analytics page shows invited, sent, delivered, opened, started and submitted counts, the response and completion rates, and a masked per-recipient table with a status CSV.
- **Reminders**: up to three scheduled reminders per run, plus a manual reminder for one recipient — all capped, cooled down and stopped by submission, unsubscribe, bounce, complaint or closure.

## What stays private

The organiser sees **whether** an invited person responded, never **which answers are theirs**. The invitation records hold a masked address and timestamps; the full address and the link's secret token are kept separately and never enter a response document, export or dataset. Unsubscribing stops every future invitation from that customer, and the suppression survives deleting the audience or the survey.

The privacy policy has a new **Invitation records** section and an updated **Emails a survey sends you** section. The customer confirms a lawful basis and permission for the list before importing it.

## Limits

10,000 recipients per audience, 50 audiences per team, 10,000 invitations per run, 20,000 emails per team per day, and 5 MB or 10,000 rows per import. A run pauses for review if complaints or hard bounces cross the deliverability guard.
