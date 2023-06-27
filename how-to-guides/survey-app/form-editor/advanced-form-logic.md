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

### Worked example

This is an example of the !( > ) symbol being used to show or hide pages based on a respondent's age.

In this example the the page 'Food Preferences' is hidden if respondent is aged 15 or less. &#x20;

The expression is applied to the 'Food Preferences' page and asks whether the respondent's age is not greater than 15. &#x20;

Only if the answer is 16 or above will the expression = false and the page will be displayed.

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

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

### Worked example

In this example the || symbol is used to show or hide a question based on the answers to two preceeding questions.

&#x20;

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption><p>Screenshot showing how the || expression can be used to display or hide a question based on the answers to two proceeding questions</p></figcaption></figure>

The above expression reads as:

It is true and therefore hidden when ('do you have children that go to school is **yes**) OR (do you have children that go to university is **yes**)

The expression is then inverted using ! to display it for the same configuration. &#x20;

## in operator

The in operator can be used to check whether an element appears in a list of options

### Worked example

In this example the in operator is used to display or hide a question based on a selection from a proceeding checkbox list.

<figure><img src="../../../.gitbook/assets/image (14).png" alt=""><figcaption><p>Screenshoot showing how the in operator can be used to display or hide a question based on a slection from a prceeding checkbox list</p></figcaption></figure>

The above expression reads as:

It is true and therefore hidden when 'apples' is selected as a response to the question 'what fruit do your like to eat?'

The expression is then inverted using ! to display it for the same configuration. &#x20;

## **Ternary operator**

The ternary operator, also known as the conditional operator, is very useful when writing complex logical expressions. &#x20;

It works by first checking to see if the first segment of an expression is true.  If so the consequent segment is evaluated.  Otherwise, the alternative is.  If the consequent section is missing, the test result itself will be used instead.

### Worked  example

In this example the ternary operator is used to display or hide a page based on the answers to three preceeding questions.

<figure><img src="../../../.gitbook/assets/image (11).png" alt=""><figcaption><p>Example of the ternary operator being used to display or hide a page based on the answers to three preceeding questions</p></figcaption></figure>

The above expression works as follow:

The first statement is evaluated initially.  It asks whether the option 'a person without disabilities' has been selected as an option from the question 'Which do you consider yourself to be? &#x20;

If it equates to **false** the alternative is returned.  The alternative appears after the : at the end of the statement and in this instance is true**.**  &#x20;

If it equates to true the consequent segment is evaluated. &#x20;

In this instance the consequent segment asks whether the answer to the question 'do you currently work for the government of the country you live in' is NOT equal to No or whether the answer to the question 'do you currently work for a United Nations Country Team is NOT equal to No.  This expression will only be false if the answer to both these questions is 'No'.

The result of this logical expression is return a true expression result (and hide the page) in all circustances except if the respondent is a person without disabilities who does not currently work for the government of the counntry they live in or currently work for a United Nations Country Team.&#x20;

## Parentheses

Parentheses operate as you would expect them to.  They are used in logical expressions primarily to modify the normal order of operations.   In an expression involving parentheses, the terms present inside the parentheses () are evaluated first.

They can be combined with the ! expression to invert the expression within the brackets as shown in a number of examples given above.

## Custom Transforms

The application adds custom transforms to simplify expressions.  Transforms use the | pipe operator.

Currently the available custom transforms is:

### `length for computing the length of an Array`

This is useful for validating a group of checkbox answers and limiting the number of boxes checked.  For instance limiting the number of answers of a question \`Select all colors you like\` to more than 2 answers, one would add this expression to the validity logic expression:

&#x20;&#x20;

<figure><img src="../../../.gitbook/assets/image (9).png" alt=""><figcaption><p>Screenshot showing how the length expression can be used to limit the number os</p></figcaption></figure>
