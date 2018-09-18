---
description: Description of survey data API
---

# survey

{% api-method method="get" host="https://preignition.org/api" path="/v1/data/:programID/survey/:resourceID" %}
{% api-method-summary %}
Get Survey Data
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows to get an export of survey data, based on \`resourceID\` and \`programID\`.Usually, export links are build by the application using the export tool \(see export tool \).
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="resourceID" type="string" required=false %}
The ID of the resource \(survey\)
{% endapi-method-parameter %}

{% api-method-parameter name="programID" type="string" required=true %}
ID of the program
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-query-parameters %}
{% api-method-parameter name="format" type="string" required=false %}
return format, either \("csv" - default or "json"\).
{% endapi-method-parameter %}

{% api-method-parameter name="refKey" type="string" required=true %}
a key pointing to a list of businesses. The export tool stores a list of selected businesses that will be looped over while building the export object. `refKey` is a pointer to this location.
{% endapi-method-parameter %}

{% api-method-parameter name="returnType" type="string" required=false %}
"code" or "human" \(default\).  
Specify the type of return. "human" will convert codes into human-readable lookups.
{% endapi-method-parameter %}

{% api-method-parameter name="buildID" type="string" required=false %}
The `buildID` of the survey \(`resourceID`\). A build is a frozen snapshot of survey definition at a given time. It is equivalent to a version number.  
The default value is the current `buildID` for `programID`
{% endapi-method-parameter %}

{% api-method-parameter name="token" type="string" required=true %}
A valid token to identify the user initiating the request
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
{
    "name": "Cake's name",
    "recipe": "Cake's recipe name",
    "cake": "Binary cake"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```javascript
{
    "message": "Ain't no cake like that."
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% hint style="warning" %}
Export links last a maximum of 1 hour and can only be user once. A new `token` and `refKey` need to be obtained for the next export \(from the expor tool\).
{% endhint %}

