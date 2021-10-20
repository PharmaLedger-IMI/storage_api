## Retrieving Schema

> Retrieving schema of a class

```shell
curl --location --request GET 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-Master-Key': '3f1b38eb-c7f5-4315-93d3-575cd41e3919',
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

This endpoint fetches schema of a class.

### HTTP Request

`GET http://<API_HOST>/v1/storage/schemas/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

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
