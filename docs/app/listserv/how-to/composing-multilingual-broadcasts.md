---
description: How to compose multilingual broadcasts with per-language content, use the translation pipeline, and manage language versions.
---

# Composing Multilingual Broadcasts

This guide covers how to create broadcasts that reach subscribers in their preferred language — English, French, Portuguese, or Arabic.

---

## Step 1: Enable Active Languages on the Channel

Before composing, ensure the target languages are activated for the channel:

1. Navigate to **Channel Settings > Active Languages**.
2. Toggle on each language your channel should support (e.g. English, French, Portuguese, Arabic).
3. Only languages enabled here will appear as translation targets.

---

## Step 2: Create a Broadcast with a Primary Language

1. In **Admin > Broadcasts**, click **New Broadcast**.
2. Select the **Primary Language** from the dropdown — this is the language you are composing in.
3. Enter the **Title / Subject** and compose the **Body** in the rich text editor.

<figure>
  <img src="../reference/admin/assets/admin-broadcasts-auto.png" alt="Admin Broadcasts Screen">
  <figcaption>Broadcast list view showing multilingual broadcasts</figcaption>
</figure>

---

## Step 3: Provide Translations for Active Languages

After composing the primary language content, add versions for each active language:

1. In the broadcast editor, locate the **Translations** section.
2. For each active language, enter the translated **Subject** and **Body**.
3. If you leave a language version empty, the system will attempt automatic translation when the broadcast is approved.

::: info Fallback Behavior
If a translation is missing or automatic translation fails, the broadcast is delivered in the **primary language** to subscribers of that language segment.
:::

---

## Step 4: Submit or Send

Once all language versions are complete:

1. Click **Send Broadcast** (if you have direct dispatch permission).
2. Or click **Submit** if the broadcast must pass through moderation first.

During dispatch, the send engine matches each subscriber's preferred language to the correct locale version of the broadcast content.

---

## Related Content

- [Creating & Sending Broadcasts](./creating-and-sending-broadcasts.md)
- [Multilingual Support Explanation](../explanation/multilingual-support.md)
- [Active Languages Reference](../reference/settings/index.md)
