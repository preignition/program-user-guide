# member

{% api-method method="get" host="https://preignition.org/api" path="/v1/program/:programID/member/:domain" %}
{% api-method-summary %}
Get Program Member
{% endapi-method-summary %}

{% api-method-description %}
Endpoint for getting detailed information about members per domain for a program. Only program manager for `:programID` have access to this endpoint.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="domain" type="string" required=true %}
name of the domain. `program` for members of program domain \(e.g. businesses\). `programMgmt` for members of program manager domain.
{% endapi-method-parameter %}

{% api-method-parameter name="programID" type="string" required=true %}
ID of the program to get member from 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authorization" type="string" required=false %}
Authorization header in the form of "Bearer: tokenSring"  to identify the user initiating the request.
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="token" type="string" required=false %}
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
The request need either token Query Parameter or Header Authorization.
{% endhint %}



