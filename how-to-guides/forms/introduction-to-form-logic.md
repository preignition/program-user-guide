---
description: >-
  Adding logic to a form enables you to customize how the form behaves when
  respondents are filling it in
---

# Introduction to form logic

## Backround

This page introduces the basic principles of form logic.  There are seperate 'How To Guides' giving more detailed instructions about form logic.

## What is a logical expression?

Logical expressions are mathematical expressions which return a result of either True or False.  A defined action such as Hide, Required, Invalid or Read-Only is then applied depending upon the result.

For example, you may be interested in whether your respondents like fruit or not.  If they do, you would like to ask a follow up question to understand the sort of fruit they like. &#x20;

The follow up question doesn't make sense if the answer to the first question is 'no'.  This is where logic can help.

![Example of a question where logic can help](<../../.gitbook/assets/image (300).png>)

## How to write a logical expression?

{% hint style="info" %}
To access the logic function you must have the 'advanced' toggle on at the top of the screen.&#x20;
{% endhint %}

In advanced mode, a Logic tab appears for Pages, Sections and Questions.  Below is an example of the logic feild for the question we outlined above about fruit preferences

![](<../../.gitbook/assets/image (304).png>)

Logic has been added to display or hide this question depending on the answer to the previous question 'Do you like fruit?'

* The question 'Do you like fruit?' has been dragged from the structure grid into the expression feild along with the answer 'No'
* A equals sign (==) has been entered to effectively set up a scenario.  ie Is the answer to the question 'Do you like fruit?'  'No'. &#x20;
* If the respondent then answers 'No', the expression result will be true and the feild will be hidden. &#x20;
* In all other scenarios such as the respondent not answering the question 'Do you like fruit' or answering 'Yes', the expression result will be false and the feild will be displayed

## Testing a logical expression

It is possible to test a logical expression by toggling on the button 'test expression' as shown in the example above.  This brings up all questions that have been refered to in the expression.   Try answering the questions and check whether the expression result gives your desired outcome.

{% hint style="info" %}
Form logic is extremely powerful and can be used to make your forms targeted and dynamic.  However it takes some pratice so we suggest starting with simple expressions and testing regularly
{% endhint %}

## How to initially hide a question?

Often you will want a hide a question initially, and for it only to appear based on an answer to a previous question

The follow up question about fruit preferences is a good example.  With the logical expression we have written the follow up question is visible by default and is only hidden if a respondent answers 'No' to the question 'Do you like fruit?'.   It would be preferable if the question is hidden initially and only appears if a respondent answers 'Yes' to the question 'Do you like fruit'

{% hint style="info" %}
Use != instead of == to hide a question initially

The reason is that if nothing is entered in a feild the result of the logical expression will be false.  As the feild is hidden when the result of the expression is true, the fild will initially be displayed.
{% endhint %}

&#x20;
