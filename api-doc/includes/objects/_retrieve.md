## Retrieving Objects

> Retrieving an object request example

```shell
curl --location --request GET 'http://localhost:1337/storage/classes/Product/Ed1nuqPvcm' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:1337/storage/classes/Product/Ed1nuqPvcm',
  headers: {
    'X-Storage-Application-Id': '4d98fbf2-f85f-4153-9e1c-91ee5776b0d7',
    'X-Storage-REST-API-Key': '4c8dc298-de81-48c2-8fdc-3897e1ac2a17',
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

Once you've created an object, you can retrieve its contents by sending a GET request to the object URL returned in the location header. For example, to retrieve the object we created above:

This endpoint retrieves object.

### HTTP Request

`GET http://<API_HOST>/storage/classes/<className>/<objectId>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`
objectId |      | Object ID of the object.

### Response
When the retrieve is successful, the HTTP response is a `200 Ok` and the `Location` header contains the object URL for the retrieve object:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product/Ed1nuqPvcm
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
