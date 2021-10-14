# member

{% swagger baseUrl="https://preignition.org/api" path="/v1/program/:programID/member/:domain" method="get" summary="Get Program Member" %}
{% swagger-description %}
Endpoint for getting detailed information about members per domain for a program. Only program manager for 

`:programID`

 have access to this endpoint.
{% endswagger-description %}

{% swagger-parameter in="path" name="domain" type="string" %}
name of the domain. 

`program`

 for members of program domain (e.g. businesses). 

`programMgmt`

 for members of program manager domain.
{% endswagger-parameter %}

{% swagger-parameter in="path" name="programID" type="string" %}
ID of the program to get member from
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorization" type="string" %}
Authorization header in the form of "Bearer: tokenSring" to identify the user initiating the request.
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
The request need either token Query Parameter or Header Authorization.
{% endhint %}
