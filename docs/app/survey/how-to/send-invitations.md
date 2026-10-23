---
description: Import a team audience and send a survey with a unique link per recipient, then track who responded.
---

# Send invitations to a team audience

Invitations let you send a survey to people whose email addresses you already hold. Each recipient gets a unique link, and the **Progress** tab tells you who has responded — without linking the answers to the address.

::: info
The customer is the controller of the recipient list; Accessible Data sends the survey on the customer's instruction. Before importing, confirm that the team has a lawful basis to contact these people and their permission to send them this survey. Purchased or scraped lists are not allowed.
:::

## 1. Create an audience

1. Open **Team settings → Audiences**.
2. Choose **New audience** and give it a name, for example “Policy Impact Lab panel”.
3. An audience is reusable across the team's surveys. A person appears once per team even when they belong to several audiences.

## 2. Import the CSV

1. Drop a CSV on the audience page or choose **Import CSV**.
2. The file needs an **email** column; **name**, **language** and **external_id** are optional. Up to 10,000 rows and 5 MB.
3. Check the preview: created, updated, unchanged, suppressed and invalid counts, the header mapping, and every invalid row with its reason.
4. Tick the warranty — lawful basis, permission, not a purchased list — then import.

Invalid rows never block the valid ones, and re-importing the same file is safe. A suppressed address (someone who unsubscribed, complained or hard-bounced) is added to the audience but marked and never invited.

## 3. Write the invitation email

1. Open the survey's **Email** page and choose the **Invitation** tab.
2. Write a subject and a markdown body in the survey's primary language. Add a translation for each language the audience uses.
3. Use the merge fields `{{name}}`, `{{link}}`, `{{survey_title}}` and `{{organiser}}`. **`{{link}}` is required**; an unknown placeholder blocks sending.
4. **Send test** mails the preview to you. It creates no invitation and does not use a recipient's link.

The platform appends who invited the recipient, a privacy-policy link and a one-click unsubscribe. You cannot remove that footer.

## 4. Send the invitations

1. Open **Share → Distribute** and find **Invitations**.
2. Pick the audience. The summary shows how many recipients are eligible, suppressed or already invited, and how many will fall back to the primary language.
3. Choose **Open** (the public link also accepts responses) or **Invitation only** (only a valid invitation can submit).
4. Set the reminder schedule — 0 to 3 reminders, each after a number of days, with an optional deadline — then **Review and send**.

A run freezes its recipient set: editing the audience later does not change who was invited. Test links never create invitations.

## 5. Track progress and remind

Open the survey's **Analytics → Progress** tab. The run cards show each wave; the selected run shows invited, sent, delivered, opened, started and submitted counts, response rate (submitted ÷ invited), completion rate (submitted ÷ started), drop-off, and the negative counts (bounced, unsubscribed, complained, failed).

The recipient table shows name, masked address, status, last activity and reminder count. **Send reminder now** counts the eligible recipients first; **Remind** handles one person. Reminders stop on submission, unsubscribe, bounce, complaint, a closed survey or a cancelled run.

::: warning
Invitation-only is a participation gate, not content secrecy: the published survey definition is still public. The Progress view shows **whether** someone responded, never which answers are theirs, and the status CSV contains no full address or answer.
:::
