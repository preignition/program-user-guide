---
description: Release note for new feature in form builder
---

# Section Container

Sometimes, forms consist of repeated content. For instance, you might want to ask the same feedback questions about different topics.

As a form editor, re-entering the same questions \(potentially same form logic\) over and over is time-consuming, opens doors for errors or inconsistencies \(e.g. different codes for questions that should be regrouped under the same code\).

To avoid this, Preignition introduces a new type of form field: **section container**. Section containers are added to the form by dragging them into form content in form "add content mode", just as other containers. This new field type is only visible when advanced mode is switched on. 

![Section Container drag item](../../.gitbook/assets/image%20%28238%29.png)

### Selecting or creating a new Section

A section container is a wrapper around a form section that can be reused across the form. It is up to the form editor to select which section will be contained, or create a new one. 

![Setting an existing section](../../.gitbook/assets/image%20%28231%29.png)

![Creating a new section](../../.gitbook/assets/image%20%28235%29.png)

New sections added through the section container field are displayed under a new **Templates** page under the form tree grid as below.

![Form tree grid with the new Template page at the end](../../.gitbook/assets/image%20%28237%29.png)

### Section Container Settings

Along with usual fields like labels, and helpers, a form editor can choose the layout of the contained section. For instance, it can be more convenient to display contained questions in a single row instead of using one row per field.

![Setting Section Container layout](../../.gitbook/assets/image%20%28232%29.png)

The form editor can also decide under which code each section will be contained. For instance, a repeated feedback section used to get feedback on training session content and on a training session premises can resp. be coded as "content" and "premise".

![Setting contained section codes.](../../.gitbook/assets/image%20%28233%29.png)





