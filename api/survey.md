# survey

## Get Survey Data

<mark style="color:blue;">`GET`</mark> `https://preignition.org/api/v1/data/:programID/survey/:resourceID`

This endpoint allows to get an export of survey data, based on `resourceID` and `programID`.Usually, export links are build by the application using the export tool (see export tool ).

### Path Parameters

| Name       | Type   | Description                     |
| ---------- | ------ | ------------------------------- |
| resourceID | string | The ID of the resource (survey) |
| programID  | string | ID of the program               |

### Query Parameters

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format     | string | return format, either ("csv" - default or "json").                                                                                                                                                                                                                                                                           |
| refKey     | string | <p>a key pointing to a list of businesses. The export tool stores a list of selected businesses that will be looped over while building the export object.</p><p><code>refKey</code></p><p>is a pointer to this location.</p>                                                                                                |
| returnType | string | <p>"code" or "human" (default).</p><p>\</p><p>Specify the type of return. "human" will convert codes into human-readable lookups.</p>                                                                                                                                                                                        |
| buildID    | string | <p>The</p><p><code>buildID</code></p><p>of the survey (</p><p><code>resourceID</code></p><p>). A build is a frozen snapshot of survey definition at a given time. It is equivalent to a version number.</p><p>\</p><p>The default value is the current</p><p><code>buildID</code></p><p>for</p><p><code>programID</code></p> |
| token      | string | A valid token to identify the user initiating the request                                                                                                                                                                                                                                                                    |

{% tabs %}
{% tab title="200 Cake successfully retrieved." %}

```javascript
{
    "name": "Cake's name",
    "recipe": "Cake's recipe name",
    "cake": "Binary cake"
}
```

{% endtab %}

{% tab title="404 Could not find a cake matching this query." %}

```javascript
{
    "message": "Ain't no cake like that."
}
```

{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Export links last a maximum of 1 hour and can only be user once. A new `token` and `refKey` need to be obtained for the next export (from the expor tool).
{% endhint %}
