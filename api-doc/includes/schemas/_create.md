## Creating Schema

> Creating schema of a class

When you add a new schema, it creates an empty class with the provided fields and some default fields applicable to the class. An example is given in the dark area to the right.

```shell
curl --location --request POST 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: ae6fa89d-2439-49f4-98de-b5def8ac969e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "className": "Product",
    "fields": {
        "name": {
            "type": "String"
        },
        "company": {
            "type": "Pointer",
            "targetClass": "Company"
        },
        "availableFrom": {
            "type": "Date"
        },
        "price": {
            "type": "Number"
        },
        "image": {
            "type": "File"
        },
        "tags": {
            "type": "Array"
        },
        "categories": {
            "type": "Relation",
            "targetClass": "Category"
        }
    }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"className":"Product","fields":{"name":{"type":"String"},"category":{"type":"Pointer","targetClass":"Category"},"availableFrom":{"type":"Date"},"price":{"type":"Number"},"image":{"type":"File"},"tags":{"type":"Array"},"categories":{"type":"Relation","targetClass":"Category"}}});

var config = {
  method: 'post',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-Master-Key': 'ae6fa89d-2439-49f4-98de-b5def8ac969e',
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

This endpoint creates a schema.

### HTTP Request

`POST http://<API_HOST>/v1/storage/schemas`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------

### Response
The response body is JSON containing all the schema information of the class.

<code>
{<br>
&nbsp;&nbsp;"className": "Product",<br>
&nbsp;&nbsp;"fields": {<br>
&nbsp;&nbsp;&nbsp;"objectId": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"updatedAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"createdAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"name": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"category": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "Pointer",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"targetClass": "Category"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"availableFrom": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"price": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "Number"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"image": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "File"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"tags": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "Array"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"categories": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "Relation",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"targetClass": "Category"<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"ACL": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"type": "ACL"<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;},<br>
&nbsp;&nbsp;"classLevelPermissions": {<br>
&nbsp;&nbsp;&nbsp;"find": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"\*": true<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"count": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"\*": true<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"get": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"\*": true<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"create": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"\*": true<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"update": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"\*": true<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"delete": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"\*": true<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"addField": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"\*": true<br>
&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;"protectedFields": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"\*": []<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>
