# survey

{% swagger baseUrl="https://preignition.org/api" path="/v1/data/:programID/survey/:resourceID" method="get" summary="Get Survey Data" %}
{% swagger-description %}
This endpoint allows to get an export of survey data, based on `resourceID` and `programID`.Usually, export links are build by the application using the export tool (see export tool ).
{% endswagger-description %}

{% swagger-parameter in="path" name="resourceID" type="string" %}
The ID of the resource (survey)
{% endswagger-parameter %}

{% swagger-parameter in="path" name="programID" type="string" %}
ID of the program
{% endswagger-parameter %}

{% swagger-parameter in="query" name="format" type="string" %}
return format, either ("csv" - default or "json").
{% endswagger-parameter %}

{% swagger-parameter in="query" name="refKey" type="string" %}
a key pointing to a list of businesses. The export tool stores a list of selected businesses that will be looped over while building the export object. 

`refKey`

 is a pointer to this location.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="returnType" type="string" %}
"code" or "human" (default).

\


Specify the type of return. "human" will convert codes into human-readable lookups.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="buildID" type="string" %}
The 

`buildID`

 of the survey (

`resourceID`

). A build is a frozen snapshot of survey definition at a given time. It is equivalent to a version number.

\


The default value is the current 

`buildID`

 for 

`programID`
{% endswagger-parameter %}

{% swagger-parameter in="query" name="token" type="string" %}
A valid token to identify the user initiating the request
{% endswagger-parameter %}

{% swagger-response status="200" description="Cake successfully retrieved." %}
```javascript
{
    "name": "Cake's name",
    "recipe": "Cake's recipe name",
    "cake": "Binary cake"
}
```
{% endswagger-response %}

{% swagger-response status="404" description="Could not find a cake matching this query." %}
```javascript
{
    "message": "Ain't no cake like that."
}
```
{% endswagger-response %}
{% endswagger %}

{% hint style="warning" %}
Export links last a maximum of 1 hour and can only be user once. A new `token` and `refKey` need to be obtained for the next export (from the expor tool).
{% endhint %}
