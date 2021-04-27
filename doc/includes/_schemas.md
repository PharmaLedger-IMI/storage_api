# Schema Store APIs

## Fetch All Schemas

> Fetch all schema request example

To fetch the Schema for all the classes of your app, run:

```shell
curl --location --request GET 'http://localhost:1337/storage/schemas' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:1337/storage/schemas',
  headers: {
    'X-Storage-Application-Id': '4d98fbf2-f85f-4153-9e1c-91ee5776b0d7',
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

This endpoint fetch all schemas.

### HTTP Request

`GET http://<API_HOST>/storage/schemas`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------

### Response

<code>
https://&lt;API_HOST&gt;/storage/schemas
</code>

The response body is JSON containing all the schema information of the app.

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
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;]<br>
}<br>
</code>

## Adding a schema

> Adding a schema request example

When you add a new schema to your app, it creates an empty class with the provided fields and some default fields applicable to the class. To add the schema, run:

```shell
curl --location --request POST 'http://localhost:1337/storage/schemas' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json' \
--data-raw '{
  "className": "Product",
   "fields": {
     "name": {
       "type": "String"
     }
   }
 }'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"className":"Product","fields":{"name":{"type":"String"}}});

var config = {
  method: 'post',
  url: 'http://localhost:1337/storage/schemas',
  headers: {
    'X-Storage-Application-Id': '4d98fbf2-f85f-4153-9e1c-91ee5776b0d7',
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

This endpoint adding a schema.

### HTTP Request

`POST http://<API_HOST>/storage/schemas`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------

### Response
You may also add indexes to your fields. You need to use the format you need to use `{"index_name" : { field_name: index } }`. The fields must exist when you add indexes.
<code>
https://&lt;API_HOST&gt;/storage/schemas
</code>

The response body is JSON containing all the schema information of the app.

<code>
{<br>
&nbsp;&nbsp;"className": "Product",<br>
&nbsp;&nbsp;"fields": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"objectId": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"ACL": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "ACL"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"name": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"price": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Number"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"weight": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}<br>
</code>

## Fetch the schema

> Fetch the schema request example

To fetch the Schema for all the classes of your app, run:

```shell
curl --location --request GET 'http://localhost:1337/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:1337/storage/schemas/Product',
  headers: {
    'X-Storage-Application-Id': '4d98fbf2-f85f-4153-9e1c-91ee5776b0d7',
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

This endpoint fetch the schema.

### HTTP Request

`GET http://<API_HOST>/storage/schemas/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

### Response

<code>
https://&lt;API_HOST&gt;/storage/schemas/Product
</code>

The response body is JSON containing all the schema information of the app.

<code>
{<br>
&nbsp;&nbsp;"className": "Product",<br>
&nbsp;&nbsp;"fields": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"objectId": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"ACL": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "ACL"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"name": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"price": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Number"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"weight": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}<br>
</code>

## Modifying the schema

> Modifying the schema request example

You can add or delete columns to a schema. To do so, run:
To delete a particular field or index, you need to use `{"__op" : "Delete" }`

```shell
curl --location --request PUT 'http://localhost:1337/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
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
  url: 'http://localhost:1337/storage/schemas/Product',
  headers: {
    'X-Storage-Application-Id': '4d98fbf2-f85f-4153-9e1c-91ee5776b0d7',
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

This endpoint Modifying the Schema.

### HTTP Request

`PUT http://<API_HOST>/storage/schemas/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

### Response

<code>
https://&lt;API_HOST&gt;/storage/schemas/Product
</code>

The response body is JSON containing all the schema information of the app.

<code>
{<br>
&nbsp;&nbsp;"className": "Product",<br>
&nbsp;&nbsp;"fields": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"objectId": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Date"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"ACL": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "ACL"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"name": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"price": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "Number"<br>
&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"weight": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type": "String"<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}<br>
</code>

## Removing a Schema

> Removing a Schema request example

You can only remove a schema from your app if it is empty (has 0 objects). To do that, run:

```shell
curl --location --request DELETE 'http://localhost:1337/storage/schemas/Product' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-Master-Key: 3f1b38eb-c7f5-4315-93d3-575cd41e3919' \
--header 'Content-Type: application/json' \
--data-raw ''
```

```javascript
var axios = require('axios');
var data = '';

var config = {
  method: 'delete',
  url: 'http://localhost:1337/storage/schemas/Product',
  headers: {
    'X-Storage-Application-Id': '4d98fbf2-f85f-4153-9e1c-91ee5776b0d7',
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

This endpoint removing a Schema.

### HTTP Request

`DELETE http://localhost:3000/storage/schemas/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

### Response

<code>
https://&lt;API_HOST&gt;/storage/schemas/Product
</code>

The response body is a JSON object containing just an `{}` empty object.

<code>
{}
</code>
