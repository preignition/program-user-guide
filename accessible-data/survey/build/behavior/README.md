---
description: This section explains how to control the behavior of your survey, such as setting time limits and customizing navigation.
---

# Survey Behavior

Here you can define various behavioral settings for your survey to control how users interact with it.

<figure>
  <img src="assets/behavior-auto.png" alt="Survey behavior settings page.">-auto.png
  <figcaption>Survey behavior settings page.</figcaption>
</figure>

## Contents

This folder contains assets for the survey behavior section.

# Form Behaviour

{% hint style="success" %}
Form behaviour enables you to customise your Form so it adapts to the specific needs of Respondents
{% endhint %}

## Step 1

Form Behaviour can be found in the Form Definition menu in the left hand column

<figure><img src="../../../.gitbook/assets/image (64).png" alt=""><figcaption><p>Screenshot showing Form Behaviour in the Form Definition menu</p></figcaption></figure>

## Step 2

There are three accessibility modes whch can be activated for a Form

<figure><img src="../../../.gitbook/assets/image (65).png" alt=""><figcaption><p>Screenshot showing the three accessibility modes which can be activated for a form</p></figcaption></figure>



<table><thead><tr><th width="204">Accessibility Mode</th><th>Description</th></tr></thead><tbody><tr><td><img src="../../../.gitbook/assets/image (66).png" alt="" data-size="original"></td><td><strong>Easy Read</strong> mode presents a simplified form interface to the user.  Parts of the form can be hidden (pages, sections or questions) and illustrations can be added.  See the '<a href="easy-read.md">Easy Read</a>' Guidance Note for more information</td></tr><tr><td><img src="../../../.gitbook/assets/image (81).png" alt="" data-size="original"></td><td><strong>Sign Language</strong> mode allows form builders to attach videos for questions which are displayed when this mode is activated.  See the '<a href="sign-language.md">Sign Language</a>' Guidance Note for more information</td></tr><tr><td><img src="../../../.gitbook/assets/image (82).png" alt="" data-size="original"></td><td><strong>Voice Recording</strong> mode allows survey respondents to leave voice messages as answers to text based questions.</td></tr></tbody></table>

Once activated, these modes can be accesses from the form builder as shown below

<figure><img src="../../../.gitbook/assets/image (76).png" alt=""><figcaption><p>Screenshot showing the accessibility mode buttons in the form builder</p></figcaption></figure>

## Step 3

The **Read Aloud** feature is activated by default. A Read Aloud button is presented beside each question. Clicking on this button reads the question aloud to the Respondent. Once entered, the Respondent's answer is also read aloud.

The feature can be deactived by ticking the box in the 'Prevented Modes' section as shown below

<figure><img src="../../../.gitbook/assets/image (69).png" alt=""><figcaption><p>Screenshot showing the Read Aloud accessibility mode being turned off for a form</p></figcaption></figure>

## Step 4

The localize option allows you to mark the form as multilingual

<figure><img src="../../../.gitbook/assets/image (71).png" alt=""><figcaption><p>Screenshot showing a form being marked as multilingual</p></figcaption></figure>

Once a form is localised, a 'localised mode' also appears in the form builder view

<figure><img src="../../../.gitbook/assets/image (77).png" alt=""><figcaption><p>Screenshot showing the 'localize mode' appearing in the form builder view</p></figcaption></figure>

## Step 5

Layout gives the option to illustate a question with an image or video.  It also allows you to choose the positioning of the illustration as shown below

<figure><img src="../../../.gitbook/assets/image (79).png" alt=""><figcaption><p>Screenshot showing how illustrations for questions can be enabled.</p></figcaption></figure>

{% hint style="warning" %}
We recommend you allow for the automatic positioning of illustrations as the best position for an illustration will depend on the screen size the repondent is using.
{% endhint %}

If you activate Easy Read for your form, 'enable illustrations for questions will be activated automatically as will the setting 'Only show illustrations when Easy Read is activated'

<figure><img src="../../../.gitbook/assets/image (80).png" alt=""><figcaption><p>Screenshot showing the default layout options when Easy Read mode is activated.</p></figcaption></figure>

## Step 6

The Theme settings are not yet developed. This will enable Users to have greater control over the Forms appearance by altering things like font and background colour settings.

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

<figure><img src="../../../.gitbook/assets/image (10) (2).png" alt="Screenshot showing an example of a logical expression being used to hide or display a page based on a respondents age."><figcaption><p>Screenshot showing how the !(>) can be used to show or hide a page depending upon an respondent's age</p></figcaption></figure>

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

<figure><img src="../../../.gitbook/assets/image (6) (1) (1) (1) (1).png" alt=""><figcaption><p>Screenshot showing how the in operator can be used to display or hide a question based on a selection from a prceeding checkbox list</p></figcaption></figure>

The expression is then inverted using ! to display it for the same configuration.

<figure><img src="../../../.gitbook/assets/image (4) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png" alt="Screenshot showing an example of a logical expression using the &#x27;in&#x27; operator"><figcaption><p>Screenshot showing how ! can be used to invert a logical expression</p></figcaption></figure>

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

### Using 'Length' to customise the number of checkbox options selected

You can use the 'length' operator to customise the number of checkbox optionsd you require a respondent to select.

For instance limiting the number of answers of a question \`What colors do you like\` to no more than 2 answers, add this expression to the validity logic expression:

<figure><img src="../../../.gitbook/assets/image (16).png" alt="Screenshot showing how the length operator can be used to limit the number of checkboxes which are checked"><figcaption><p>Screenshot showing how the 'Length' operator can be used to limit the number of options a respondent can select for a checkbox group question</p></figcaption></figure>

A custom validation message can then be added under the settings option. This message will appear if a respondents checks 3 or more colours.  The message will be announced to screen readers.

<figure><img src="../../../.gitbook/assets/image (11) (1).png" alt="Screenshot showing how a custom validation message can be created under the settings option."><figcaption><p>Screenshot showing how a custom validation message can be added under the 'settings' option.</p></figcaption></figure>

If a respondents selects more than 3 colours they will be able to continue to fill in the survey.  However they will not be able to submit the survey until the required number of options have been selected.  Respondents will be redirected to the 'invalid' question so the issue can be resolved.

This short video shows how the validity logic can be applied to customising the number of boxes of a checkbox question you require a respondent to select.

{% embed url="https://youtu.be/hlYPHC46LbM" %}

### Using 'Length' to customise the number of order question items to be ordered

In a similar way, the 'length' operator can be used to customise the number of order question items to be ordered by a respondent.

For instance to require respondents to order all the items in this list the following validity expression can be used:

<figure><img src="../../../.gitbook/assets/image (84).png" alt=""><figcaption><p>Screenshot showing a logical expression to customise the number or items to be ordered</p></figcaption></figure>

The expression result will be 'true' (and therefore 'valid') when:

* The number of options ordered is more than 2 (ie all the options are selected)&#x20;
* OR (||) no options are selected.  The number of options selected is blank ("")

A custom validation message can be added under the settings option. This message will appear if a respondents orders some but not all of the options.  The message will be announced to screen readers.

<figure><img src="../../../.gitbook/assets/image (87).png" alt=""><figcaption><p>Screenshot showing how a custom validation message can be added under the 'settings' option.</p></figcaption></figure>

If a respondents orders some but not all of the options, they will be able to continue to fill in the survey.  However they will not be able to submit the survey until either all or none of the options have been ordered.  Respondents will be redirected to the 'invalid' question so the issue can be resolved.

{% hint style="info" %}
This logical expression has a limitation.  If the question is marked as 'required' the question will appear in red when the page loads even before the question has received focus.  The only way to resolve this currently is to accept this behaviour or not to mark the question as required&#x20;
{% endhint %}

This short video shows how the validity logic can be applied to customising the number of order question items to be ordered.

{% embed url="https://youtu.be/i6l9cJ4djrs" %}
