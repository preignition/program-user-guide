---
description: Tooltips can be used to provide definitions of complex or technical words
---

# Using tooltips

## Introduction

{% hint style="info" %}
Tooltips can be added to forms to explain words which are complex or difficult to understand.&#x20;
{% endhint %}

![An example of a tooltip being used to explain the meaning of the word 'complex'](<../../../.gitbook/assets/image (299) (1) (1) (1) (1) (1) (1) (1).png>)

It is best practice to use Tooltips sparingly and keep the descriptions short so they render well on smaller devices such as tablets and phones

## Step 1

The first step is to provide definitions of any complex words in the form 'Glossary'

The 'Glossary' is visible in the left hand column in the form definition menu

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption><p>Screenshot showing 'Glossary' in the Form Definition menu</p></figcaption></figure>

## Step 2

Select 'add new term' and give the term a unique name

![Screenshot showing the input feild for a new glossary term](<../../../.gitbook/assets/image (301) (1) (1) (1) (1) (1) (1) (1) (2).png>)

{% hint style="warning" %}
The glossary term name must be unique, in small characters and no spaces
{% endhint %}

## Step 3

Once you have defined a word in the form glossary you can add a Tooltip in the form itself.

Tooltips can be located in various places in a form including in a section title, a question label or a question option.

<figure><img src="../../../.gitbook/assets/image (1) (1).png" alt=""><figcaption><p>Screenshot showing a tooltip being added to a redio button label to explain the word 'participate'</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Screenshot showing how the tooltip appears when the word 'participate' receives focus</p></figcaption></figure>

## Step 4

Tooltips must be written in the following way:

```
<pwi-form-tooltip term=participate position=top>participate</pwi-form-tooltip>
```

| Section            | Description                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| \<pwi-form-tooltip | Opening parenthesis                                                                                               |
| term=participate   | Refers to the term name as defined in the form glossary. In this example the term name is 'participate'           |
| position=top       | Indicates where the tooltip should appear. If not mentioned, the app will automatically determine the positioning |
| >participate<      | The word in the form which is having a tooltip attached to it                                                     |
| /pwi-form-tooltip> | Closing parenthesis                                                                                               |

## Step 4

Once you have added your Tooltip you can go to the 'Test' mode to test how it is working.

<figure><img src="../../../.gitbook/assets/image (3) (1).png" alt=""><figcaption><p>Screenshot showing a tooltip being tested in the 'test' mode</p></figcaption></figure>

## Step 5

It is possible to change the positioning of the Tooltip. In the example above we set the position as 'top'. However 'bottom', 'left' and 'right' are also possible options.

If a position is not mentioned, the app will determine the position automatically.

## Step 6

Tooltip's can be added to option labels as shown below:

<figure><img src="../../../.gitbook/assets/image (4) (1).png" alt=""><figcaption><p>Screenshot showing a tooltip being added to decribe the word 'Appples'</p></figcaption></figure>

To add s Tooltip to an options label you must toggle on the 'Advanced' mode and select the option 'allow options to be written in markdown' as shown below:

<figure><img src="../../../.gitbook/assets/image (5) (1).png" alt=""><figcaption><p>Screenshop showing how to add tooltips to option labels</p></figcaption></figure>

{% hint style="success" %}
Congratulations!  You now know how to add Tooltip to explain words that are difficult to understand
{% endhint %}
