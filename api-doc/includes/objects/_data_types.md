## Data Types

So far we have only used values that can be encoded with standard JSON. The Storage API also support dates, geolocations, and relational data. In the REST API, these values are encoded as JSON hashes with the `__type` field set to indicate their type, so you can read or write these fields if you use the correct encoding. Overall, the following types are allowed for each field in your object:

* String
* Number
* Boolean
* Arrays
* JSON Objects
* DateTime
* File
* Pointer to another Object
* Relation to another Class
* Null

### Date

The `Date` type contains a field `iso` which contains a UTC timestamp stored in ISO 8601 format with millisecond precision: `YYYY-MM-DDTHH:MM:SS.MMMZ`. An example is given in the dark area to the right.

> Creating an object which contains Date type field

```shell
curl --location --request POST 'http://localhost:1337/storage/classes/Product' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Product 1",
    "availableFrom": {
        "__type": "Date",
        "iso": "2011-08-21T18:02:52.249Z"
    }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"name":"Product 1","availableFrom":{"__type":"Date","iso":"2011-08-21T18:02:52.249Z"}});

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

Dates are useful in combination with the built-in `createdAt` and `updatedAt` fields. For example, to retrieve objects availableFrom since a particular time, just encode a Date in a comparison query:

> Querying objects which contains Date type field

```shell
curl --location -g --request GET 'http://localhost:1337/storage/classes/Product?where={%22availableFrom%22:{%22$gte%22:{%22__type%22:%22Date%22,%22iso%22:%222011-08-21T18:02:52.249Z%22}}}' \
--header 'X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7' \
--header 'X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:1337/storage/classes/Product?where={"availableFrom":{"$gte":{"__type":"Date","iso":"2011-08-21T18:02:52.249Z"}}}',
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

### Pointer

The `Pointer` type is used when mobile code sets another Parse `Object` as the value of another object. It contains the `className` and `objectId` of the referred-to value.

```json
{
  "__type": "Pointer",
  "className": "Category",
  "objectId": "Ed1nuqPvc"
}
```

Note that the built-in `User`, `Role`, and `Installation` classes are prefixed by an underscore. For example, pointers to user objects have a `className` of `_User`. Prefixing with an underscore is forbidden for developer-defined classes as it signifies the class is a special built-in.

### File

We do not recommend storing large pieces of binary data like images or documents on a Parse object. To store more, we recommend you use `File`. You may associate a [previously uploaded file](#files) using the `File` type.

```json
{
  "__type": "File",
  "name": "...profile.png"
}
```

### Relation

The `Relation` type is used for many-to-many relations. It has a `className` that is the class name of the target objects.

```json
{
  "__type": "Relation",
  "className": "GameScore"
}
```

When querying, `Relation` objects behave like arrays of Pointers. Any operation that is valid for arrays of pointers (other than `include`) works for `Relation` objects.

When more data types are added, they will also be represented as hashes with a `__type` field set, so you may not use this field yourself on JSON objects. For more information about how Parse handles data, check out our documentation on [Data](#data).
