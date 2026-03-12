---
description: This section explains how to create and manage prompts for your survey questions.
---

# Survey Prompts

Prompts provide additional information or instructions for your survey questions, helping respondents understand what is being asked.

<figure>
  <img src="assets/prompt-auto.png" alt="The survey prompt editor.">-auto.png
  <figcaption>The survey prompt editor.</figcaption>
</figure>

## Contents

This folder contains assets for the survey prompt section.

# Using tooltips

## Introduction

{% hint style="info" %}
Tooltips can be added to surveys to explain words which are complex or difficult to understand.&#x20;
{% endhint %}

![An example of a tooltip being used to explain the meaning of the word 'complex'](<../../../.gitbook/assets/image (299) (1) (1) (1) (1) (1) (1) (1).png>)

It is best practice to use Tooltips sparingly and keep the descriptions short so they render well on smaller devices such as tablets and phones

## Step 1

Tooltips can be added anywhere you like in your survey by using this code;

```
<lapp-tooltip text="tooltip message">label</lapp-tooltip>
```

{% hint style="success" %}
You can copy and paste the code above into your survey and then alter as explained below
{% endhint %}

Alter the following elements to customise your tooltip;

**Label**- This is the word that you want to be explained or expanded.  In the example above the 'Label' is the word 'complex'

**tooltip message-** This is the explanation of the word.  In the example above the 'tooltip message' is the text "Something which is complicated or difficult to understand'

## Step 2

The Tooltip code can be added directly from the formatting ribbon in feild that support markdown such as the 'Introduction Page' or 'Text (markdown)' feilds.

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption><p>Screenshot showing how tooltips can be added from the formatting ribbon in certain feilds</p></figcaption></figure>

However tooltips can also be added to question labels and option labels by copying and pasting the code shown in Step 1.

## Step 3

The method to test your tooltip depends upon where it has been added.

If your tooltip has been added to the 'Introduction Page' or 'Thank You Page', it can be tested from the 'Preview'  tab as shown below;

<figure><img src="../../../.gitbook/assets/image (105).png" alt=""><figcaption><p>Screenshot showing a tooltip being tested in the 'preview' tab of the Introduction Page</p></figcaption></figure>

If your tooltip has been added to your Form, it can be tested from the 'Test' view as shown below;

<figure><img src="../../../.gitbook/assets/image (111).png" alt=""><figcaption><p>Screenshot showing a tooltip being tested in the 'Test' view of the survey builder</p></figcaption></figure>

## Step 4

This short video shows a tooltip being added to the 'Introduction Page', a 'Question Label' and an 'Option Label'. &#x20;

{% embed url="https://youtu.be/BjX1lQTfAS0" %}
Short video showing how to add tooltips to a survey&#x20;
{% endembed %}

{% hint style="success" %}
Congratulations!  You now know how to add Tooltip to explain words that are difficult to understand
{% endhint %}
