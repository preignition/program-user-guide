# How can I get feedback about my survey?

## Question

"Having invested time and money in creating an accessible survey on Accessible Surveys, I am keen to get feedback from people who have completed the survey. &#x20;

It would be useful to know what aspects of the survey they enjoyed or would like to see improved.  It would also be great if I could get their consent to share their feedback publically.  &#x20;

Is there an easy why of doing this?"

## Answer

Yes! Many customers choose to include several questions at the end of their survey to gather this type of feedback.  Here is worked example which you can use.

### &#x20;Step 1

Drag and drop a 'rating' question to the end of your form as shown below.

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Screenshot showing a rating question being added to the bottom of the last page of a form</p></figcaption></figure>

### Step 2

We suggest you edit the question as follows:

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption><p>Screenshot showing how the rating question can be presented</p></figcaption></figure>

Instructions:

<table data-header-hidden><thead><tr><th width="82" valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top"><mark style="color:red;"><strong>1</strong></mark></td><td valign="top">Add the question label "Did you like this survey?"</td></tr><tr><td valign="top"><mark style="color:red;"><strong>2</strong></mark></td><td valign="top">Check the box for a more accessible label variant so the text will wrap on small screens</td></tr><tr><td valign="top"><mark style="color:red;"><strong>3</strong></mark></td><td valign="top">Add the the helper text "10 stars means you loved it and 1 star means you really didn't like it."</td></tr><tr><td valign="top"><mark style="color:red;"><strong>4</strong></mark></td><td valign="top">Ask respondents to rate your survey out of 10 stars</td></tr></tbody></table>

### Step 3

Add two additional 'Long text" questions with the following labels:

"Please tell us what you liked about the survey"

"Please tell us what you did not like about the survey"

We suggest you edit Long text questions as follow:

<figure><img src="../../.gitbook/assets/image (7) (1).png" alt=""><figcaption><p>Screenshot showing how the Long text questions can be presented</p></figcaption></figure>

Instructions:

<table data-header-hidden><thead><tr><th width="74" valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top"><mark style="color:red;"><strong>1</strong></mark></td><td valign="top">Add the question label</td></tr><tr><td valign="top"><mark style="color:red;"><strong>2</strong></mark></td><td valign="top">Check the box for a more accessible label variant so the text will wrap on small screens</td></tr><tr><td valign="top"><mark style="color:red;"><strong>3</strong></mark></td><td valign="top">Enter 5 layout rows so a good size text box is presented</td></tr></tbody></table>

### Step 4

Add a 'Single checkbox' question after the question "Please tell us what you liked about the survey" and before the question "Please tell us what you did not like about the survey" as show below.

<figure><img src="../../.gitbook/assets/image (9) (1).png" alt=""><figcaption><p>Screenshot showing a 'Single checkbox' question being added to the form</p></figcaption></figure>

We suggest you edit the Single checkbox as follow:

<figure><img src="../../.gitbook/assets/image (10) (1).png" alt=""><figcaption><p>Screenshot showing how the Single checkbox question can be presented</p></figcaption></figure>

Instructions:

<table data-header-hidden><thead><tr><th width="95"></th><th></th></tr></thead><tbody><tr><td><mark style="color:red;"><strong>1</strong></mark></td><td>Add the question label "Permission to share your feedback with others (we will not share your name or personal information)"</td></tr><tr><td><mark style="color:red;"><strong>2</strong></mark></td><td>Under 'layout', add the checkbox label "You have my permission"</td></tr></tbody></table>

### Step 5

Add logical expressions so the follow up questions only appear based on the rating given to the first feedback question "Did you like this survey?"

### Step 6

You only want to know about what the respondent liked about the survey and to get their permission to share their feedback if they have given your survey a rating of 9 or 10 stars.

This can be acheived as follows:

<figure><img src="../../.gitbook/assets/image (12).png" alt=""><figcaption><p>Screenshot showing how to activate the logic mode</p></figcaption></figure>

Instructions

<table data-header-hidden><thead><tr><th width="78"></th><th></th></tr></thead><tbody><tr><td><mark style="color:red;"><strong>1</strong></mark></td><td>Highlight the first question you want to apply the logic to in the tree structure</td></tr><tr><td><mark style="color:red;"><strong>2</strong></mark></td><td>Toggle on the 'Advanced' tab</td></tr><tr><td><mark style="color:red;"><strong>3</strong></mark></td><td>Select the 'logic' item from the task toolbar</td></tr></tbody></table>

<figure><img src="../../.gitbook/assets/image (104).png" alt=""><figcaption><p>Sceenshot showing how to write a logical expression</p></figcaption></figure>

Instructions

<table data-header-hidden><thead><tr><th width="65" valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top"><mark style="color:red;"><strong>1</strong></mark></td><td valign="top">Toggle on 'lock this question while editing logic'</td></tr><tr><td valign="top"><mark style="color:red;"><strong>2</strong></mark></td><td valign="top">Write the logical expression as shown below</td></tr></tbody></table>

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

The logical expression asks whether the value entered to the question 'Did you like this survey?' is **not** equal to 9 or more. &#x20;

If the answer is blank or less than 9, the expression if TRUE and the question "Please tell us what you liked about the survey" is hidden.

If the answer is 9 or 10, the expression is FALSE and the question "Please tell us what you liked about the survey" is displayed.  &#x20;

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

Instructions

<table data-header-hidden><thead><tr><th width="109"></th><th></th></tr></thead><tbody><tr><td><mark style="color:red;"><strong>1</strong></mark></td><td>Toggle on the 'test expression' button </td></tr><tr><td><mark style="color:red;"><strong>2</strong></mark></td><td>Test whether the expression is working as intended</td></tr></tbody></table>

### Step 7

You also want to apply the same logic to the next question requesting permission to share the postive feedback.

This can be done as follows:

<figure><img src="../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>

Instructions:

<table data-header-hidden><thead><tr><th width="94" valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top">1</td><td valign="top">Copy the logical expression</td></tr><tr><td valign="top">2</td><td valign="top">Toggle off the button 'Lock this question while editing logic'</td></tr></tbody></table>

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

Instructions:

<table data-header-hidden><thead><tr><th width="84" valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top">1</td><td valign="top">Highlight the question "Permission to share your feedback with others..." from the tree structure</td></tr><tr><td valign="top">2</td><td valign="top">Paste the logical expression into the expression feild</td></tr><tr><td valign="top">3</td><td valign="top">Select 'OK' to confirm that you want to paste the expression</td></tr><tr><td valign="top">4</td><td valign="top">Test the expression as before</td></tr></tbody></table>

### Step 8

Lastly you want to apply a logical expression to the question "Please tell us what you did not like about the survey" so that it only appears if the respondent gives a rating of 3 or less to the question "Did you like this survey"

This can be acheived as follows:

<figure><img src="../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

Instructions:

<table data-header-hidden><thead><tr><th width="85" valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top"><mark style="color:red;"><strong>1</strong></mark></td><td valign="top">Select the question "Please tell us what you did not like about the survey" from the tree structure.</td></tr><tr><td valign="top"><mark style="color:red;"><strong>2</strong></mark></td><td valign="top">Toggle on the button "Lock this question while editing logic"</td></tr><tr><td valign="top"><mark style="color:red;"><strong>3</strong></mark></td><td valign="top">Write the logical expression exactly as shown.  </td></tr><tr><td valign="top"><mark style="color:red;"><strong>4</strong></mark></td><td valign="top">Test the logical expression</td></tr></tbody></table>

<figure><img src="../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

The first part of the logical expression asks whether the value entered to the question 'Did you like this survey?' is **not** 3 or less.  The second part of the logical expression uses an OR (||) fuction to assess whether there is no answer to the question 'Did you like this survey?' &#x20;

If the answer 4 or more OR if there is no answer to the question, the expression is TRUE and the question "Please tell us what you did not like about the survey" is hidden.

If the answer is less than 4, the expression if FALSE and the question "Please tell us what you did not like about the survey is displayed.

{% hint style="success" %}
This is a sophisticated example of a logical expression.  Even if you do not totally understand how the logic is working, writing the expression exactly as shown above will produce the desired effect.
{% endhint %}

### Step 9

Lastly test the form to check that the logical expression is working as intended.

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

