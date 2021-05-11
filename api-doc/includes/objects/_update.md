## Updating Object

> Updating an object request example

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/DTRPxrPkEX' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
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
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/DTRPxrPkEX',
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

To change the data on an object that already exists, send a PUT request to the object URL. Any keys you don't specify will remain unchanged, so you can update just a subset of the object's data. An example is given in the dark area to the right, if we wanted to change the price field and want to add weight field of our object.

This endpoint updates object.

### HTTP Request

`PUT http://<API_HOST>/v1/storage/classes/<className>/<objectId>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`
objectId |      | Object Id of the object.

### Response
When the update is successful, the HTTP response is a `200 Ok`. The response body is a JSON object containing just an `updatedAt` field with the timestamp of the update.

<code>
{<br>
&nbsp;&nbsp;"updatedAt": "2011-08-20T02:06:57.931Z",<br>
}
</code>
