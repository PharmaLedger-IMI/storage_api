## Updating Objects

> Updating an object request example

```shell
curl --location --request PUT 'http://localhost:1337/storage/classes/Product/DTRPxrPkEX' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Product 1",
    "price": 60,
    "weight": "286 g"
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"name":"Product 1","price":50,"weight":"286 g"});

var config = {
  method: 'put',
  url: 'http://localhost:1337/storage/classes/Product/DTRPxrPkEX',
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

To change the data on an object that already exists, send a PUT request to the object URL. Any keys you don't specify will remain unchanged, so you can update just a subset of the object's data. An example is given in the dark area to the right, if we wanted to change the price field and want to add weight field of our object.

This endpoint updates object.

### HTTP Request

`PUT http://<API_HOST>/storage/classes/<className>/<objectId>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`
objectId |      | Object Id of the object.

### Response
When the update is successful, the HTTP response is a `200 Ok` and the `Location` header contains the object URL for the object:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product/Ed1nuqPvcm
</code>

The response body is a JSON object containing just an `updatedAt` field with the timestamp of the update.

<code>
{<br>
&nbsp;&nbsp;"updatedAt": "2011-08-20T02:06:57.931Z",<br>
}
</code>
