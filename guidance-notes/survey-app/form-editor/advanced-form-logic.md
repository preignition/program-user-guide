---
description: This page provides guidance for applying advanced form logic
---

# Advanced form logic

{% hint style="success" %}
The logic feature is extremely powerful and there are almost limitless possibilities to what expressions can be written and applied to your form. This guidance note introduces some of the main logic options available and gives practical examples of how they can be applied.
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

In this example the the page 'Food Preferences' is hidden if a respondent is aged 15 or less.

The expression is applied to the 'Food Preferences' page and asks whether the respondent's age is not greater than 15.

Only if the answer is 16 or above will the expression = false and the page will be displayed.

<figure><img src="../../../.gitbook/assets/image (10).png" alt="Screenshot showing an example of a logical expression being used to hide or display a page based on a respondents age."><figcaption><p>Screenshot showing how the !(>) can be used to show or hide a page depending upon an respondent's age</p></figcaption></figure>

The following expression can then be applied to the 'Not Eligible' page so this page appears if the respondent's age is 15 or less.

<figure><img src="../../../.gitbook/assets/image (20).png" alt="Screenshot showing an example of a logical expression being used to hide or display a page based on a respondents age."><figcaption><p>Screenshot showing how the !(>) can be used to show or hide a page depending upon an respondent's age</p></figcaption></figure>

The result for a survey respondent is as follows:

{% embed url="https://youtu.be/uI92uv3gCtc" %}
short video showing how a comparitive logical expression can be used to hide or display pages depending upon a respondent's age
{% endembed %}

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

In this example the || symbol is used to display or hide a question based on the answers to two preceeding questions.

<figure><img src="../../../.gitbook/assets/image (15).png" alt="Screenshot showing how the || symbol can be used to display or hide a question based on the answers to two preceeding questions."><figcaption><p>Screenshot showing how the || expression can be used to display or hide a question based on the answers to two proceeding questions</p></figcaption></figure>

The above expression works as follows:

It is true and therefore hidden when ('do you have children that go to school is **yes**) OR (do you have children that go to university is **yes**)

The expression is then inverted using ! to display it for the same configuration.

{% hint style="info" %}
if you want to hide something (result being true), it is important to use ||and not && because true || false = true (hidden), while true && false = false (displayed)\`.
{% endhint %}

## in operator

The in operator can be used to check whether an element appears in a list of options

### Worked example

In this example the in operator is used to display or hide a question based on a selection from a proceeding checkbox list.

The expression is true and therefore hidden when 'apples' is selected as a response to the question 'what fruit do your like to eat?'

<figure><img src="../../../.gitbook/assets/image (6) (1).png" alt=""><figcaption><p>Screenshot showing how the in operator can be used to display or hide a question based on a selection from a prceeding checkbox list</p></figcaption></figure>

The expression is then inverted using ! to display it for the same configuration.

<figure><img src="../../../.gitbook/assets/image (4) (1) (1) (1) (1) (1) (1) (1) (1).png" alt="Screenshot showing an example of a logical expression using the &#x27;in&#x27; operator"><figcaption><p>Screenshot showing how ! can be used to invert a logical expression</p></figcaption></figure>

## **Ternary operator**

The ternary operator, also known as the conditional operator, is very useful when writing complex logical expressions. It works in a similar way to the 'if' function in excel.

It works by first checking to see if the first segment of an expression is true. If so the consequent segment is evaluated. Otherwise, the alternative is. If the consequent section is missing, the test result itself will be used instead.

### Worked example of the ternary operator

In this example the ternary operator is used to hide or display the question 'Did you like this survey' based on the respondent's answer to the question 'Do you agree to participate in this survey'

<figure><img src="../../../.gitbook/assets/image (5) (2).png" alt="Screenshot showing a simple worked example of using the ternary operator to hide or display a question based on a respondent&#x27;s answer to a previous question"><figcaption><p>Screenshot showing a worked example of the ternary operator</p></figcaption></figure>

The above expression works as follow:

The first statement is evaluated initially. It asks whether the answer to the question 'do you agree to participate in this survey' is 'Yes'.

If the first statement equates to **false** the alternative is returned. The alternative appears at the end of the logical expression after the : symbol. In this instance the alternative returns true\*\*.\*\*

If the first statement equates to true the consequent segment is evaluated. The consequent statement appears immediately after the ? symbol. In this instance the consequent returns false.

{% hint style="info" %}
The consequent segment can include a series of logical expressions as shown in the example below. The alternative statement can be written as either true or false. This makes the ternary operator highly flexible and suitable for writing complex logical expressions
{% endhint %}

### Additional example of the ternary operator

In this example the ternary operator is used to display or hide a page based on the answers to three preceeding questions.

<figure><img src="../../../.gitbook/assets/image (7) (1) (3).png" alt=""><figcaption><p>Example of the ternary operator being used to display or hide a page based on the answers to three preceeding questions</p></figcaption></figure>

The above expression works as follow:

The first statement is evaluated initially. It asks whether the option 'a person without disabilities' has been selected as an option from the question 'Which do you consider yourself to be?

If it equates to **false** the alternative is returned. The alternative appears after the : at the end of the statement and in this instance is true\*\*.\*\*

If it equates to true the consequent segment is evaluated.

In this instance the consequent segment asks whether the answer to the question 'do you currently work for the government of the country you live in' is NOT equal to No or whether the answer to the question 'do you currently work for a United Nations Country Team is NOT equal to No. This expression will only be false if the answer to both these questions is 'No'.

The result of this logical expression is return a true expression result (and hide the page) in all circustances except if the respondent is a person without disabilities who does not currently work for the government of the country they live in or currently work for a United Nations Country Team.

## Parentheses

Parentheses operate as you would expect them to. They are used in logical expressions primarily to modify the normal order of operations. In an expression involving parentheses, the terms inside the parentheses () are evaluated first.

They can be combined with the ! expression to invert the expression within the brackets as shown in a number of examples given above.

## Custom Transforms

The application adds custom transforms to simplify expressions. Transforms use the | pipe operator.

### Length (for computing the length of an array)

This is useful for validating a group of checkbox answers and limiting the number of boxes checked.

For instance limiting the number of answers of a question \`What colors do you like\` to no more than 2 answers, one would add this expression to the validity logic expression:

<figure><img src="../../../.gitbook/assets/image (16).png" alt="Screenshot showing how the length operator can be used to limit the number of checkboxes which are checked"><figcaption><p>Screenshot showing how the 'Length' operator can be used to limit the number of options a respondent can select for a checkbox group question</p></figcaption></figure>

A custom validation message can then be added under the settings option. This message will appear if a respondents checks 3 or more colours.

<figure><img src="../../../.gitbook/assets/image (11).png" alt="Screenshot showing how a custom validation message can be created under the settings option."><figcaption><p>Screenshot showing how a custom validation message can be added under the 'settings' option.</p></figcaption></figure>
