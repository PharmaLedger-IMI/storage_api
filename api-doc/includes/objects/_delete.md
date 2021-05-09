## Deleting Objects

> Deleting an object request example

```shell
curl --location --request DELETE 'http://localhost:1337/storage/classes/Product/Ed1nuqPvcm' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
 method: 'delete',
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

To delete an object from the Storage, send a DELETE request to its object URL. An example is given in the dark area to the right.

This endpoint deletes object.

### HTTP Request

`DELETE http://<API_HOST>/storage/classes/<className>/<objectId>`

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

The response body is a JSON object containing just an `{}` empty dictionary.

<code>
{}
</code>
