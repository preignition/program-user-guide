---
description: This page provides some guidance for applying advanced form logic
---

# Advanced form logic

{% hint style="success" %}
The logic feature is extremely powerful and there are almost limitless possibilities to what expressions can be written and applied to your form.  This guidance note introduces some of the main logic options available and gives practical examples of how they can be applied.
{% endhint %}

## Comparisons

The following comparison operators are available

| Comparison                 | Symbol |
| -------------------------- | ------ |
| Equal                      | ==     |
| Not equal                  | !=     |
| Greater than               | >      |
| Greater than or equal      | >=     |
| Less than                  | <      |
| Less than or equal         | <=     |
| Element in array or string | in     |

## Worked example

This is an example of the !( > ) symbol being used to hide the page 'Food Preferences' if a survey respondent is aged 15 or less. &#x20;

The expression is applied to the 'Food Preferences' page and asks whether the respondents age is not greater than 15.  Only if the answer is 16 or above will the expression = false and the page displayed.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

The following expression can then be applied to the 'Not Eligible' page so this page appears if the respondents age is 15 or less.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

The result for a survey respondent is as follows:

{% embed url="https://youtu.be/uI92uv3gCtc" %}

## Binary Operators

| Operation        | Symbol |
| ---------------- | ------ |
| Add, Concat      | +      |
| Subtract         | -      |
| Multiply         | \*     |
| Divide           | /      |
| Divide and floor | //     |
| Modulus          | %      |
| Power of         | ^      |
| Logical AND      | &&     |
| Logical OR       | \|\|   |

