---
description: This page provides guidance for applying advanced form logic
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

This is an example of the !( > ) symbol being used to show or hide pages based on a respondent's age.

In this example the the page 'Food Preferences' is hidden if respondent is aged 15 or less. &#x20;

The expression is applied to the 'Food Preferences' page and asks whether the respondent's age is not greater than 15. &#x20;

Only if the answer is 16 or above will the expression = false and the page will be displayed.

<figure><img src="../../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

The following expression can then be applied to the 'Not Eligible' page so this page appears if the respondent's age is 15 or less.

<figure><img src="../../../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

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

## Worked example

In this example the || symbol is used to show or hide a question based on the answers to two preceeding questions.

&#x20;

<figure><img src="../../../.gitbook/assets/image (8).png" alt=""><figcaption><p>Screenshot showing how the || expression can be used to display or hide a question based on the answers to two proceeding questions</p></figcaption></figure>

The above expression reads as:

It is true and therefore hidden when ('do you have children that go to school is **yes**) OR (do you have children that go to university is **yes**)

The expression is then inverted using ! to display it for the same configuration. &#x20;



&#x20;&#x20;

