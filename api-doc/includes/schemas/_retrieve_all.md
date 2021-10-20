## Retrieving all Schemas

> Retrieving schemas of all classes

```shell
curl --location --request GET 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas',
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

This endpoint fetches schema of classes.

### HTTP Request

`GET http://<API_HOST>/v1/storage/schemas`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------

### Response

The response body is JSON containing all the schema information.

<code>
{<br>
&nbsp;&nbsp;"results": [<br>
&nbsp;&nbsp;&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"className": "Product",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"fields": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"objectId": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ACL": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "ACL"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Number"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"weight": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;/\*...\*/<br>
&nbsp;&nbsp;]<br>
}<br>
</code>
