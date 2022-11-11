---
description: This page provides an introduction to form logic.
---

# Introduction to form logic

{% hint style="success" %}
Adding logic to a form enables you to customize how the form behaves when respondents are filling it in
{% endhint %}

## What is a logical expression?

Logical expressions are mathematical expressions which return a result of either True or False. A defined action such as Hide, Required, Invalid or Read-Only is then applied depending upon the result.

For example, you may be interested in whether your respondents like fruit or not. If they do, you would like to ask a follow up question to understand the sort of fruit they like.

It doesn't make sense to ask the follow up question if the answer to the first question is 'no'. Logic allows you to hide the follow up question.

![Example of a question where logic can help](<../../../.gitbook/assets/image (300) (1) (1) (1) (1) (1) (1).png>)

## How to write a logical expression?

{% hint style="info" %}
To access the logic function you must switch on the 'Advanced' toggle at the top of the screen.
{% endhint %}

In advanced mode, a Logic tab appears in the form builder for pages, sections and questions.

Below is an example of the logic feild for the question we outlined above about fruit

![](<../../../.gitbook/assets/image (304) (1) (1) (1) (1) (1) (1) (1) (1).png>)

{% hint style="info" %}
Always add the logical expression to the page, section or question which you want the action to be applied to
{% endhint %}

Logic has been added to the follow up question 'what sort of fruit do you like?' so that it is displayed or hidden depending on the answer to the previous question 'Do you like fruit?'

* The question 'Do you like fruit?' has been dragged from the tree grid in the left hand column into the expression feild along with the answer 'No'
* An equals sign (==) has been entered to set up a mathmatical expression. ie is the answer to the question 'Do you like fruit?' 'No'?
* If the respondent then answers 'No', the expression result will be 'true' and the follow up question 'what sort of fruit do you like?' will be hidden.
* In all other scenarios, such as respondent not answering the question 'Do you like fruit' or answering 'Yes', the expression result will be 'false' and the follow up question will be displayed

## Testing a logical expression

It is possible to test a logical expression by toggling on the button 'test expression' as shown in the example above.

This brings up all the questions that have been refered to in the expression.

Try answering the questions and check whether the expression result gives your desired outcome.

{% hint style="info" %}
Form logic is extremely powerful and adds focus and dynamism to your forms. However it takes some pratice. We suggest starting with simple expressions and testing regularly
{% endhint %}

## How to hide a question initially

Often you will want a question to be hidden at first and for it only to appear based on an answer to a previous question

The question 'what sort of fruit do you like?' is a good example.

With the logical expresssion written above, the follow up question is visible initially and is only hidden if a respondent answers 'No' to the the question 'Do you like fruit?'

It would be preferable if the question is hidden initially and is only displayed if a respondent answers 'Yes' to the question 'Do you like fruit?'

{% hint style="info" %}
Use !( ) to invert the expression and hide a question initially
{% endhint %}

![](<../../../.gitbook/assets/image (297) (1) (1) (1) (1).png>)

* Adding !( ) around the logical expression, inverts it.
* In the example above, the expression now asks whether the answer to the question 'Do you like fruit?' does NOT equal 'yes'
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