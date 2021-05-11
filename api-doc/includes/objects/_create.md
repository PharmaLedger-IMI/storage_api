## Creating Object

> Creating an object request example

```shell
curl --location --request POST 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Product 1",
    "price": 50
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"name":"Product 1","price":50});

var config = {
  method: 'post',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

This endpoint creates object.

### HTTP Request

`POST http://<API_HOST>/v1/storage/classes/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

### Response
When the creation is successful, the HTTP response is a `201 Created` and the `Location` header contains the object URL for the new object:

<code>
https://&lt;API_HOST&gt;/storage/classes/&lt;className&gt;
</code>

The response body is a JSON object containing the `objectId` and the `createdAt` timestamp of the newly-created object:

<code>
{<br>
&nbsp;&nbsp;"createdAt": "2011-08-20T02:06:57.931Z",<br>
&nbsp;&nbsp;"objectId": "Ed1nuqPvcm"<br>
}
</code>
