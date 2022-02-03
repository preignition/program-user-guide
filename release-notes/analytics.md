---
description: >-
  This page provides an overview of survey analytics.   Detailed 'How To' notes
  provide more detail on specific feature
---

# Analytics

## Visualize Survey Data

{% hint style="info" %}
Data is collected to be analyzed.  Survey analytics makes this easy
{% endhint %}

With survey analytics, survey authors visualize survey data as it comes. The application displays one chart per question summarizing distribution of answers.&#x20;

{% embed url="https://youtu.be/mrmI_mv0OUw?modestbranding=1&loop=1&autoplay=1" %}
Example of user interactive with dynamic analytics, filtering by type of answers and date of submssion
{% endembed %}

## Based on survey structure

The analytics page follows the structure of the underlying Form used in the Survey.  The Survey pages are displayed in the left hand column and there is a graph showing the responses for each question. &#x20;

![Screenshot of analytics, with survey structure on left menu](<../.gitbook/assets/image (282).png>)

## Meta data

A meta data section appears at the top of each page. It contains information such as respondent location, date of submission, or language.&#x20;

To keep charts from one page to another, it is possible to mark charts as `favorite`  .&#x20;

## Raw data

Text field are displayed as raw data on a table. Answers in other languages than the survey original language are translated back and also displayed.&#x20;

{% embed url="https://youtu.be/VL-nh2glGso?autoplay=1&modestbranding=1&loop=1" %}
See raw data for answers
{% endembed %}



## Analyze and filter

The analytics provides a way to dynamically analyze and filter data, allowing to see subset of survey data on the go. By clicking on chart sections (for instance clicking on the `yes` part of a pie chart ), the visualization will automatically and efficiently update all other charts (for instance, filter out respondents not having answered `yes` to the selected question). &#x20;

{% hint style="info" %}
In analytics, charts are at the same time visualization and dynamic filtering tools
{% endhint %}

This approach allows for very efficient ways to interact with survey data. It is for instance easy to see differences between respondents from different countries, languages, or gender.

## Configure the dashboard

Analytics editors can modify the look of the dashboard. For instance, change the layout, structure, titles, colors of individual charts is easy. &#x20;

![Screenshot of the dashboard composition editor](<../.gitbook/assets/image (284).png>)

It is also possible to modify generic settings by type of charts (which will be inherited by all charts of the same type), or by type of data.&#x20;

{% embed url="https://youtu.be/JGXc1aw2XGc?loop=1&modestbranding=1&autoplay=1" %}
Setting new color range for continuous data
{% endembed %}



## Export data

Survey data can be exported for further analysis by more specialized tools like R, Julia, Stats or SPSS.&#x20;

![Consent form highlighting data handling responsibilty](<../.gitbook/assets/image (285).png>)

Different type and format of exports are available. For instance, anonymized export will remove all fields marked as `private` in the form definition.&#x20;

![](<../.gitbook/assets/image (286).png>)

