## Deleting Object

> Deleting an object request example

```shell
curl --location --request DELETE 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/Ed1nuqPvcm' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
 method: 'delete',
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

To delete an object from the Storage, send a DELETE request to its object URL. An example is given in the dark area to the right.

This endpoint deletes object.

### HTTP Request

`DELETE http://<API_HOST>/v1/storage/classes/<className>/<objectId>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`
objectId |      | Object Id of the object.

### Response
When the update is successful, the HTTP response is a `200 Ok`. The response body is a JSON object containing just an `{}` empty dictionary.

<code>
{}
</code>
