## Retrieving Object

> Retrieving an object request example

```shell
curl --location --request GET 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/Ed1nuqPvcm' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/Ed1nuqPvcm',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

This endpoint retrieves object.

### HTTP Request

`GET http://<API_HOST>/v1/storage/classes/<className>/<objectId>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`
objectId |      | Object ID of the object.

### Response
When the retrieve is successful, the HTTP response is a `200 Ok` and the `Location` header contains the object URL for the retrieve object:

<code>
https://&lt;API_HOST&gt;/v1/storage/classes/&lt;className&gt;/&lt;objectId&gt;
</code>

The response body is a JSON object containing all the user-provided fields, plus the `createdAt`, `updatedAt`, and `objectId` fields:

<code>
{<br>
&nbsp;&nbsp;"objectId": "DTRPxrPkEX",<br>
&nbsp;&nbsp;"name": "Product 1",<br>
&nbsp;&nbsp;"price": 50,<br>
&nbsp;&nbsp;"createdAt": "2021-04-27T03:21:03.644Z",<br>
&nbsp;&nbsp;"updatedAt": "2021-04-27T03:34:12.372Z",<br>
}
</code>
