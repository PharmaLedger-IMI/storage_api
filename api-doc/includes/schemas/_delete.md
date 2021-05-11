## Deleting Schema

> Deleting schema of a class

You can only remove a schema if it is empty (has 0 objects). An example is given in the dark area to the right.

```shell
curl --location --request DELETE 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json' \
--data-raw ''
```

```javascript
var axios = require('axios');
var data = '';

var config = {
  method: 'delete',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-Master-Key': '3f1b38eb-c7f5-4315-93d3-575cd41e3919',
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

This endpoint deletes a Schema.

### HTTP Request

`DELETE http://localhost:3000/storage/schemas/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

### Response

The response body is a JSON object containing just an `{}` empty object.

<code>
{}
</code>
