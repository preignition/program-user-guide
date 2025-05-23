---
description: This page provides an introduction to form logic.
---

# Introduction to form logic

{% hint style="info" %}
Adding logic to a form enables you to customize how your form behaves when respondents are filling it in
{% endhint %}

## What is a logical expression?

Logical expressions are mathematical expressions which return a result of either "True" or "False".&#x20;

A defined action is then applied depending upon the result. &#x20;

For Pages and Sections, form logic is used to control whether a page or section is visible or hidden. &#x20;

For Questions, 'required', 'invalid' and 'read-only' attributes can be also be applied in addition to the 'hidden' attribute'

## Worked example&#x20;

For example, you may be interested in whether your respondents like fruit or not. If they do, you would like to ask a follow up question to understand the sort of fruit they like.

It doesn't make sense to ask the follow up question if the answer to the first question is 'no'. Logic allows you to hide the follow up question.

<figure><img src="../../../.gitbook/assets/image (4) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption><p>Example of a question where logic can help</p></figcaption></figure>

## How to write a logical expression?

{% hint style="info" %}
To access the logic function you must switch on the 'Advanced' toggle at the top of the screen.  A 'logic mode' icon will appear in the bottom right hand corner&#x20;
{% endhint %}

Below is an example of the logic feild for the question we outlined above about fruit

<figure><img src="../../../.gitbook/assets/image (2) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption><p>Screenshot showing the advanced toggle being activated.  The 'logic mode' icon appears in the bottom right of the screen.  The 'lock this question while editing logic' toggle has been activated.</p></figcaption></figure>

{% hint style="success" %}
Always select the option 'Lock this question while editing logic'.&#x20;
{% endhint %}

Logic has been added to the follow up question 'what sort of fruit do you like?' so that it is displayed or hidden depending on the answer to the previous question 'Do you like fruit?'

* The question 'Do you like fruit?' has been dragged from the tree grid in the left hand column into the expression feild along with the answer 'No'
* An equals sign (==) has been entered to set up a mathmatical expression. ie is the answer to the question 'Do you like fruit?' 'No'?
* If the respondent then answers 'No', the expression result will be 'true' and the follow up question 'what sort of fruit do you like?' will be hidden.
* In all other scenarios, such as respondent not answering the question 'Do you like fruit' or answering 'Yes', the expression result will be 'false' and the follow up question will be displayed

## Testing a logical expression

It is possible to test a logical expression by toggling on the button 'test expression' as shown in the example above.

This brings up all the questions that have been refered to in the expression.

{% embed url="https://youtu.be/9XU9M_0JoJM" %}
Short video showing how to test a logical expression
{% endembed %}

Try answering the questions and check whether the expression result gives the desired outcome.

{% hint style="info" %}
Form logic is extremely powerful and adds focus and dynamism to your forms. However it takes some pratice. We suggest starting with simple expressions and testing regularly
{% endhint %}

## How to hide a question initially

Often you will want a question to be hidden initially and for it only to appear based on an answer to a previous question

The question 'what sort of fruit do you like?' is a good example.

With the logical expresssion written above, the follow up question is visible initially and is only hidden if a respondent answers 'No' to the the question 'Do you like fruit?'

It would be preferable if the question is hidden initially and is only displayed if a respondent answers 'Yes' to the question 'Do you like fruit?'

{% hint style="info" %}
Use ! to invert the expression and hide a question initially
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (3) (1) (1) (1) (1) (1) (1) (1) (1).png" alt=""><figcaption><p>Screenshot showing how to hide a question initially using !=</p></figcaption></figure>

* Use != for Not Equal. &#x20;
* In the example above, the expression now asks whether the question 'Do you like fruit?' does **Not** **equal** 'yes'
* If the question 'Do you like fruit' is not answered or the answer is 'No' the expression result will be 'True' and the follow up question will be hidden
* Only if the answer is 'Yes' will the expression result be 'False' and the follow up question will be displayed

## What logic options are available?

A wide range of logic options are available. The most commonly used are as follows:

| Operator                   | Symbol |
| -------------------------- | ------ |
| Equal                      | ==     |
| Not equal                  | !=     |
| Greater than               | >      |
| Greater than or equal      | >=     |
| Less than                  | <      |
| Less than or equal         | <=     |
| Element in array or string | in     |
| Logical AND                | &&     |
| logical OR                 | \|\|   |
| Negate                     | !      |

## Tips for applying form logic

* Apply the logic to the resource (Page, Section or question) which you want the action to be applied to
* Apply the logic as high up in the form structure as possible.  If you have a number of Questions which you want to apply the same logic expression to, first add the questions to a Section, and apply the logic to the section.
* When writting complex logic, it is easier to create an expression that is true and then invert it if necessary.  Create the true expesssion first and then invert the expression using (!(expression).
* Always select the option 'Lock this question while editing logic' and unselect this option when you have finished writing the logical expression.

&#x20;

