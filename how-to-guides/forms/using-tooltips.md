---
description: Tooltips can be used to explain complex or technical words
---

# Using Tooltips

## Introduction

{% hint style="success" %}
Tooltips can be added to Forms to explain words which are complex or difficult to understand.
{% endhint %}

![An example of a tooltip to explain the meaning of the word 'complex'](<../../.gitbook/assets/image (299) (1) (1) (1) (1) (1) (1).png>)

## Step 1

The first step is to provide definitions of any complex words in the Form 'glossary'

The 'Glossary' is visible in the left hand column in the Form 'Build' mode

![](<../../.gitbook/assets/image (312) (1) (1) (1).png>)

## Step 2

Select 'add new term' and give the term a unique name

![](<../../.gitbook/assets/image (304) (1) (1) (1) (1) (1) (1).png>)

{% hint style="warning" %}
The glossary term name must be unique, in small characters and no spaces
{% endhint %}

## Step 3

Once you have defined a word in the Form glossary you can add a Tooltip in the Form itself. &#x20;

Tooltips can be located anywhere in a Form such as a Section title, a Question or an Answer option.

![Example of a tooltip being added to a question](<../../.gitbook/assets/image (305) (1) (1) (1) (1) (1).png>)

## Step 4

Tooltips must be written in the following way:

### <mark style="background-color:blue;">\<pwi-form-tooltip</mark> <mark style="background-color:purple;">term=complex</mark> <mark style="background-color:orange;">position=top</mark><mark style="background-color:red;">>complex<</mark><mark style="background-color:green;">/pwi-form-tooltip></mark>

| Section                                                         | Description                                                                                                        |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <mark style="background-color:blue;">\<pwi-form-tooltip</mark>  | Opening parenthesis                                                                                                |
| <mark style="background-color:purple;">term=complex</mark>      | Refers to the term name as defined in the form glossary.  In this example the term name is 'complex'               |
| <mark style="background-color:orange;">position=top</mark>      | Indicates where the tooltip should appear.  If not mentioned, the app will automatically determine the positioning |
| <mark style="background-color:red;">>complex<</mark>            | The word in the Form which is having a tooltip attached to it                                                      |
| <mark style="background-color:green;">/pwi-form-tooltip></mark> | Closing parenthesis                                                                                                |

## Step 4

Once you have added your Tooltip you can go to the 'Test' mode to test how it is working.

![](<../../.gitbook/assets/image (315) (1) (1) (1) (1) (1) (1) (1).png>)



## Step 5

It is possible to change the positioning of the Tooltip.   In the example above we set the position as 'top'.  However 'bottom', 'left' and 'right' are also possible options. &#x20;

If a position is not mentioned, the app will determine the position automatically.

{% hint style="info" %}
It is best practice to use Tooltips sparingly and keep the descriptions short so they render well on smaller devices such as tablets and phones
{% endhint %}

