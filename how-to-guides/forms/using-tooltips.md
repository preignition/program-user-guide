---
description: Tooltips can be used to explain complex or technical words
---

# Using tooltips

## Introduction

It is possible to add tooltips to your forms to explain words which are complex or difficult to understand.

![An example of a tooltip to explain the meaning of the word 'complex'](<../../.gitbook/assets/image (299) (1) (1) (1).png>)

## Step 1

The first step is to provide definations of any complex words in the form 'glossary'

This is visble in the left hand column in the form 'build' mode

![](<../../.gitbook/assets/image (312).png>)



Select 'add new term' and give the term a unique name

![](<../../.gitbook/assets/image (304) (1) (1) (1).png>)

{% hint style="info" %}
The glossary term name must be unique, in small characters and no spaces
{% endhint %}

## Step 2

Once you have defined a word in the form glossary you can add a tooltip in the form itself. &#x20;

Tooltips can be located anywhere in a form such as a section title, a question or a answer option.

![Example of a tooltip being added to a question](<../../.gitbook/assets/image (305) (1) (1) (1).png>)

## Step 3

Tooltips must be written in the following way:

### <mark style="background-color:blue;">\<pwi-form-tooltip</mark> <mark style="background-color:purple;">term=complex</mark> <mark style="background-color:orange;">position=top</mark><mark style="background-color:red;">>complex<</mark><mark style="background-color:green;">/pwi-form-tooltip></mark>

| Section                                                         | Description                                                                                                       |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| <mark style="background-color:blue;">\<pwi-form-tooltip</mark>  | Opening parenthesis                                                                                               |
| <mark style="background-color:purple;">term=complex</mark>      | Refers to the term name as defined in the form glossary                                                           |
| <mark style="background-color:orange;">position=top</mark>      | Indicates where the tooltip should appear.  If not mentioned, the app will determine the postioning automatically |
| <mark style="background-color:red;">>complex<</mark>            | The word in the form which is having a tooltip attached to it                                                     |
| <mark style="background-color:green;">/pwi-form-tooltip></mark> | Closing parenthesis                                                                                               |

## Step 4

Once you have added your tooltip you can go to the 'test' mode to test how it is working.

![](<../../.gitbook/assets/image (315) (1) (1) (1).png>)



## Step 5

It is possible to change the positioning of the tooltip.   In the example above we set the position as 'top'.  However 'bottom', 'left' and 'right' are also possible options. &#x20;

If a position is not mentioned, the app will determine the position automatically.

{% hint style="info" %}
It is best to use tooltips sparingly and keep the descriptions short so they render well on smaller devices such as tablets and phones
{% endhint %}

