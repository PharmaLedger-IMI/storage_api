## Creating Objects

> Creating an object request example

```shell
curl --location --request POST 'http://localhost:1337/storage/classes/Product' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
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
  url: 'http://localhost:1337/storage/classes/Product',
  headers: {
    'X-Storage-Application-Id': '4d98fbf2-f85f-4153-9e1c-91ee5776b0d7',
    'X-Storage-REST-API-Key': '4c8dc298-de81-48c2-8fdc-3897e1ac2a17',
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

`POST http://<API_HOST>/storage/classes/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

### Response
When the creation is successful, the HTTP response is a `201 Created` and the `Location` header contains the object URL for the new object:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product
</code>

The response body is a JSON object containing the `objectId` and the `createdAt` timestamp of the newly-created object:

<code>
{<br>
&nbsp;&nbsp;"createdAt": "2011-08-20T02:06:57.931Z",<br>
&nbsp;&nbsp;"objectId": "Ed1nuqPvcm"<br>
}
</code>
