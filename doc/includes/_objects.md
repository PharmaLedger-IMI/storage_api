# Object Store APIs

## Object Format

Storing data through the Storage API is built around a JSON encoding of the object's data. This data is schemaless, which means that you don't need to specify ahead of time what keys exist on each object. You simply set whatever key-value pairs you want, and the backend will store it.

For example, let's say you want to store Product information. A single object could contain:

<code>
{<br>
&nbsp;&nbsp;"name": "Product 1",<br>
&nbsp;&nbsp;"price": 50<br>
}
</code>

Keys must be alphanumeric strings. Values can be anything that can be JSON-encoded.

Each object has a class name that you can use to distinguish different sorts of data. We recommend that you `NameYourClassesLikeThis` and `nameYourKeysLikeThis`, just to keep your code looking pretty.

When you retrieve objects, some fields are automatically added: `createdAt`, `updatedAt`, and `objectId`. These field names are reserved, so you cannot set them yourself. The object above could look like this when retrieved:

<code>
{<br>
&nbsp;&nbsp;"name": "Product 1",<br>
&nbsp;&nbsp;"price": 50,<br>
&nbsp;&nbsp;"createdAt": "2011-08-20T02:06:57.931Z",<br>
&nbsp;&nbsp;"updatedAt": "2011-08-20T02:06:57.931Z",<br>
&nbsp;&nbsp;"objectId": "Ed1nuqPvcm"<br>
}
</code>

`createdAt` and `updatedAt` are UTC timestamps stored in ISO 8601 format with millisecond precision: `YYYY-MM-DDTHH:MM:SS.MMMZ`. `objectId` is a string unique to this class that identifies this object.

In the REST API, the class-level operations operate on a resource based on just the class name. For example, if the class name is `Product`, the class URL is:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product
</code>

The operations specific to a single object are available as a nested URL. For example, operations specific to the `Product` above with `objectId` equal to `Ed1nuqPvcm` would use the object URL:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product/Ed1nuqPvcm
</code>


## Creating Objects

> Creating an object request example

```shell
curl --location --request POST 'http://localhost:1337/storage/classes/Product' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Product 1",
    "price": 50
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"name":"Product 1","price":50});

var config = {
  method: 'post',
  url: 'http://localhost:1337/storage/classes/Product',
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

This endpoint creates object.

### HTTP Request

`POST http://<API_HOST>/storage/classes/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

### Response
When the creation is successful, the HTTP response is a `201 Created` and the `Location` header contains the object URL for the new object:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product
</code>

The response body is a JSON object containing the `objectId` and the `createdAt` timestamp of the newly-created object:

<code>
{<br>
&nbsp;&nbsp;"createdAt": "2011-08-20T02:06:57.931Z",<br>
&nbsp;&nbsp;"objectId": "Ed1nuqPvcm"<br>
}
</code>

## Retrieving Objects

> Retrieving an object request example

Once you've created an object, you can retrieve its contents by sending a GET request to the object URL returned in the location header. For example, to retrieve the object we created above:

```shell
curl --location --request GET 'http://localhost:1337/storage/classes/Product/Ed1nuqPvcm' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
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

This endpoint retrieves object.

### HTTP Request

`GET http://<API_HOST>/storage/classes/<className>/<objectId>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`
objectId |      | Object ID of the object.

### Response
When the retrieve is successful, the HTTP response is a `200 Ok` and the `Location` header contains the object URL for the retrieve object:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product/Ed1nuqPvcm
</code>

The response body is a JSON object containing all the user-provided fields, plus the `createdAt`, `updatedAt`, and `objectId` fields:

<code>
{<br>
&nbsp;&nbsp;"objectId": "DTRPxrPkEX",<br>
&nbsp;&nbsp;"name": "Product 1",<br>
&nbsp;&nbsp;"price": 50,<br>
&nbsp;&nbsp;"createdAt": "2021-04-27T03:21:03.644Z",<br>
&nbsp;&nbsp;"updatedAt": "2021-04-27T03:34:12.372Z",<br>
}
</code>

## Updating Objects

> Updating an object request example

To change the data on an object that already exists, send a PUT request to the object URL. Any keys you don't specify will remain unchanged, so you can update just a subset of the object's data. For example, if we wanted to change the score field of our object:

```shell
curl --location --request PUT 'http://localhost:1337/storage/classes/Product/DTRPxrPkEX' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Product 1",
    "price": 50,
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

## Deleting Objects

> Deleting an object request example

To delete an object from the Parse Cloud, send a DELETE request to its object URL. For example:

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

## Batch Operations

To reduce the amount of time spent on network round trips, you can create, update, or delete up to 50 objects in one call, using the batch endpoint.

Each command in a batch has `method`, `path`, and `body` parameters that specify the HTTP command that would normally be used for that command. The commands are run in the order they are given. For example, to create a couple of `Product` objects:

```shell
curl --location --request POST 'http://localhost:1337/storage/batch' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json' \
--data-raw '{
        "requests": [
          {
            "method": "POST",
            "path": "/storage/classes/Product",
            "body": {
              "name": "Product 1",
              "price": 30.0
            }
          },
          {
            "method": "POST",
            "path": "/storage/classes/Product",
            "body": {
              "name": "Product 2",
              "price": 40.0
            }
          }
        ]
      }'
```

The response from batch will be a list with the same number of elements as the input list. Each item in the list with be a dictionary with either the `success` or `error` field set. The value of `success` will be the normal response to the equivalent REST command:

```json
{
  "success": {
    "createdAt": "2012-06-15T16:59:11.276Z",
    "objectId": "YAfSAWwXbL"
  }
}
```

The value of `error` will be an object with a numeric `code` and `error` string:

```json
{
  "error": {
    "code": 101,
    "error": "object not found for delete"
  }
}
```

Other commands that work in a batch are `update` and `delete`.

<div class="language-toggle">
<pre><code class="bash">
curl -X POST \
  -H "X-Parse-Application-Id: <span class="custom-parse-server-appid">${APPLICATION_ID}</span>" \
  -H "X-Parse-REST-API-Key: <span class="custom-parse-server-restapikey">${REST_API_KEY}</span>" \
  -H "Content-Type: application/json" \
  -d '{
        "requests": [
          {
            "method": "PUT",
            "path": "<span class="custom-parse-server-mount">/parse/</span>classes/GameScore/Ed1nuqPvcm",
            "body": {
              "score": 999999
            }
          },
          {
            "method": "DELETE",
            "path": "<span class="custom-parse-server-mount">/parse/</span>classes/GameScore/Cpl9lrueY5"
          }
        ]
      }' \
  <span class="custom-parse-server-protocol">https</span>://<span class="custom-parse-server-url">YOUR.PARSE-SERVER.HERE</span><span class="custom-parse-server-mount">/parse/</span>batch
</code></pre>
<pre><code class="python">
import json,httplib
connection = httplib.HTTPSConnection('<span class="custom-parse-server-url">YOUR.PARSE-SERVER.HERE</span>', 443)
connection.connect()
connection.request('POST', '<span class="custom-parse-server-mount">/parse/</span>batch', json.dumps({
       "requests": [
         {
           "method": "PUT",
           "path": "<span class="custom-parse-server-mount">/parse/</span>classes/GameScore/Ed1nuqPvcm",
           "body": {
             "score": 999999
           }
         },
         {
           "method": "DELETE",
           "path": "<span class="custom-parse-server-mount">/parse/</span>classes/GameScore/Cpl9lrueY5"
         }
       ]
     }), {
       "X-Parse-Application-Id": "<span class="custom-parse-server-appid">${APPLICATION_ID}</span>",
       "X-Parse-REST-API-Key": "<span class="custom-parse-server-restapikey">${REST_API_KEY}</span>",
       "Content-Type": "application/json"
     })
result = json.loads(connection.getresponse().read())
print result
</code></pre>
</div>

Note that N requests sent in a batch will still count toward your request limit as N requests.

## Data Types

So far we have only used values that can be encoded with standard JSON. The Parse mobile client libraries also support dates, geolocations, and relational data. In the REST API, these values are encoded as JSON hashes with the `__type` field set to indicate their type, so you can read or write these fields if you use the correct encoding. Overall, the following types are allowed for each field in your object:

* String
* Number
* Boolean
* Arrays
* JSON Objects
* DateTime
* File
* Pointer to another Parse Object
* Relation to another Parse Class
* Null

The `Date` type contains a field `iso` which contains a UTC timestamp stored in ISO 8601 format with millisecond precision: `YYYY-MM-DDTHH:MM:SS.MMMZ`.

```json
{
  "__type": "Date",
  "iso": "2011-08-21T18:02:52.249Z"
}
```

Dates are useful in combination with the built-in `createdAt` and `updatedAt` fields. For example, to retrieve objects created since a particular time, just encode a Date in a comparison query:

<div class="language-toggle">
<pre><code class="bash">
curl -X GET \
  -H "X-Parse-Application-Id: <span class="custom-parse-server-appid">${APPLICATION_ID}</span>" \
  -H "X-Parse-REST-API-Key: <span class="custom-parse-server-restapikey">${REST_API_KEY}</span>" \
  -G \
  --data-urlencode 'where={"createdAt":{"$gte":{"__type":"Date","iso":"2011-08-21T18:02:52.249Z"}}}' \
  <span class="custom-parse-server-protocol">https</span>://<span class="custom-parse-server-url">YOUR.PARSE-SERVER.HERE</span><span class="custom-parse-server-mount">/parse/</span>classes/GameScore
</code></pre>
<pre><code class="python">
import json,httplib,urllib
connection = httplib.HTTPSConnection('<span class="custom-parse-server-url">YOUR.PARSE-SERVER.HERE</span>', 443)
params = urllib.urlencode({"where":json.dumps({
       "createdAt": {
         "$gte": {
           "__type": "Date",
           "iso": "2011-08-21T18:02:52.249Z"
         }
       }
     })})
connection.connect()
connection.request('GET', '<span class="custom-parse-server-mount">/parse/</span>classes/GameScore?%s' % params, '', {
       "X-Parse-Application-Id": "<span class="custom-parse-server-appid">${APPLICATION_ID}</span>",
       "X-Parse-REST-API-Key": "<span class="custom-parse-server-restapikey">${REST_API_KEY}</span>"
     })
result = json.loads(connection.getresponse().read())
print result
</code></pre>
</div>

The `Pointer` type is used when mobile code sets another Parse `Object` as the value of another object. It contains the `className` and `objectId` of the referred-to value.

```json
{
  "__type": "Pointer",
  "className": "GameScore",
  "objectId": "Ed1nuqPvc"
}
```

Note that the built-in `User`, `Role`, and `Installation` classes are prefixed by an underscore. For example, pointers to user objects have a `className` of `_User`. Prefixing with an underscore is forbidden for developer-defined classes as it signifies the class is a special built-in.

The `Relation` type is used for many-to-many relations. It has a `className` that is the class name of the target objects.

```json
{
  "__type": "Relation",
  "className": "GameScore"
}
```

When querying, `Relation` objects behave like arrays of Pointers. Any operation that is valid for arrays of pointers (other than `include`) works for `Relation` objects.

We do not recommend storing large pieces of binary data like images or documents on a Parse object. To store more, we recommend you use `File`. You may associate a [previously uploaded file](#files) using the `File` type.

```json
{
  "__type": "File",
  "name": "...profile.png"
}
```

When more data types are added, they will also be represented as hashes with a `__type` field set, so you may not use this field yourself on JSON objects. For more information about how Parse handles data, check out our documentation on [Data](#data).
