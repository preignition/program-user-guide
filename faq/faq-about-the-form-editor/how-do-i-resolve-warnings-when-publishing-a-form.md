# How do I resolve warnings when publishing a form?

## Introduction

When publishing a new version of a form, the application will run checks to make sure that the form has been built successfully

If the build has not been sucessful you will see the message 'Build completed with warnings'.&#x20;

Double clicking on the row provides details of what is causing the problem, along with a link to the item which is causing the issue.

{% embed url="https://youtu.be/yMaxJI21er0" %}
20 second video showing a from being published with warnings
{% endembed %}

## Resolving the issue

The most common issue encountered, is when two or more questions have the same 'code'.  This is important as a question's code determines where answers to the question are stored on the database.

By default a question's code is derived from it's label.  This has the advantage of making the database structure easy to navigate.  However problems arise when question labels share the same first twenty characters.

This issue can be resolved by editing the questions code so each question has a unique code.&#x20;

1. First activate the 'advanced' tab
2. Click into the question refered to in the warning section
3. Give the question a unique 'override code' up to a maximum of 20 characters
4. Publish a new version of the form and check that the build has been completed sucessfully

{% embed url="https://youtu.be/qGpWHyH0EVI" %}
30 second video showing how to resolve a common issue with questions having the same code
{% endembed %}



## &#x20;

