## Updating Schema

> Adding columns in a class

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json' \
--data-raw '{
  "className": "Product",
   "fields": {
     "price": {
       "type": "Number"
     }
   }
 }'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"className":"Product","fields":{"price":{"type":"Number"}}});

var config = {
  method: 'put',
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

> Deleting columns from a class

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json' \
--data-raw '{
  "className": "Product",
   "fields": {
     "price": {
       "__op": "Delete"
     }
   }
 }'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"className":"Product","fields":{"price":{"__op": "Delete"}}});

var config = {
  method: 'put',
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


> Adding indexes in a class

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json' \
--data-raw '{
  "className": "Product",
   "indexes": {
     "price_index": {
        "price": 1
      }
   }
 }'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"className":"Product","indexes":{"price_index":{"price":1}}});

var config = {
  method: 'put',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product',
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

> Deleting indexes from a class

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: ae6fa89d-2439-49f4-98de-b5def8ac969e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "className": "Product",
    "indexes": {
        "price_index": {
            "__op": "Delete"
        }
    }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"className":"Product","indexes":{"price_index":{"__op":"Delete"}}});

var config = {
  method: 'put',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/schemas/Product',
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

This endpoint updates the schema of a class. You can add or delete columns to a schema. To delete a particular field or index, you need to use `{"__op" : "Delete" }`. Examples are given in the dark area to the right.

### HTTP Request

`PUT http://<API_HOST>/v1/storage/schemas/<className>`

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
