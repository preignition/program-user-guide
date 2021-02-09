---
description: Release note on new survey Analytics
---

# Analytics

We are proud to introduce our new analytics dashboard to explore and visualize survey data.

{% embed url="https://youtu.be/mrmI\_mv0OUw?modestbranding=1&loop=1&autoplay=1" caption="Preview of survey dynamic analytics" %}

## Visualize survey data

{% hint style="info" %}
Data is collected to be analyzed! Survey analytics makes this easy.
{% endhint %}

With survey analytics, survey authors visualize survey data as it comes. The application displays one chart per question summarizing distribution of answers. 

Type of chart depends on the type of collected information \(e.g. choropleth map for geographical data, pie chart for categorical data, histogram for continuous data\).

### Based on survey structure

The analytics follows the structure of the underlying survey form. Each survey page inherits an analytics page displaying all question answers. 

![Screenshot of analytics, with survey structure on left menu](../.gitbook/assets/image%20%28241%29.png)

### Meta data

A meta data section appears at the top of each page. It contains information such as respondent location, date of submission, or language. 

To keep charts from one page to another, it is possible to mark charts as `favorite`  . 

### Raw data

Text field are displayed as raw data on a table. Answers in other languages than the survey original language are translated back and also displayed. 

{% embed url="https://youtu.be/VL-nh2glGso?autoplay=1&modestbranding=1&loop=1" caption="See raw data for answers" %}



## Analyze and filter

The analytics provides a way to dynamically analyze and filter data, allowing to see subset of survey data on the go. By clicking on chart sections \(for instance clicking on the `yes` part of a pie chart \), the visualization will automatically and efficiently update all other charts \(for instance, filter out respondents not having answered `yes` to the selected question\).  

{% hint style="info" %}
In analytics, charts are at the same time visualization and dynamic filtering tools
{% endhint %}

This approach allows for very efficient ways to interact with survey data. It is for instance easy to see differences between respondents from different countries, languages, or gender.

## Configure the dashboard

Analytics editors can modify the look of the dashboard. For instance, change the layout, structure, titles, colors of individual charts is easy.  

![Screenshot of the dashboard composition editor](../.gitbook/assets/image%20%28245%29.png)

It is also possible to modify generic settings by type of charts \(which will be inherited by all charts of the same type\), or by type of data. 

{% embed url="https://youtu.be/JGXc1aw2XGc?loop=1&modestbranding=1&autoplay=1" caption="Setting new color range for continuous data" %}



## Export data

Survey data can be exported for further analysis by more specialized tools like R, Julia, Stats or SPSS. 

![Consent form highlighting data handling responsibilty](../.gitbook/assets/image%20%28244%29.png)

Different type and format of exports are available. For instance, anonymized export will remove all fields marked as `private` in the form definition. 

![](../.gitbook/assets/image%20%28240%29.png)



