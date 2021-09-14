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

### Counter
To help with storing counter-type data, Storage API provides the ability to atomically increment (or decrement) any number field. To increment the counter, use the `Increment` operator with a positive number. To decrement the counter, use the `Increment` operator with a negative number. Examples are given in the dark area to the right.


> Increment counter-type fields of a Object

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
    "totalSell": {
        "__op": "Increment",
        "amount": 1
    }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"totalSell":{"__op":"Increment","amount":1}});

var config = {
  method: 'put',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
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

> Decrement counter-type fields of a Object

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
    "totalSell": {
        "__op": "Increment",
        "amount": -1
    }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"totalSell":{"__op":"Increment","amount":-1}});

var config = {
  method: 'put',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
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

### Arrays
To help with storing array data, there are three operations that can be used to atomically change an array field:

*   `Add` appends the given array of objects to the end of an array field.
*   `AddUnique` adds only the given objects which aren't already contained in an array field to that field. The position of the insert is not guaranteed.
*   `Remove` removes all instances of each given object from an array field.

Each method takes an array of objects to add or remove in the "objects" key. An example is given in the dark area to the right, where we can added items to the set-like "tags" field.

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
    "tags": {
        "__op": "AddUnique",
        "objects": [
            "lorem",
            "ipsum"
        ]
    }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"tags":{"__op":"AddUnique","objects":["lorem","ipsum"]}});

var config = {
  method: 'put',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
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

### Relations

In order to update Relation types, Storage API provides special operators to atomically add and remove objects to a relation. So, we can add an object to a relation like so:

> Add an object to a relation type field of an object

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
    "categories": {
        "__op": "AddRelation",
        "objects": [
            {
                "__type": "Pointer",
                "className": "Category",
                "objectId": "cQBAnh0DsW"
            }
        ]
    }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"categories":{"__op":"AddRelation","objects":[{"__type":"Pointer","className":"Category","objectId":"cQBAnh0DsW"}]}});

var config = {
  method: 'put',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
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

> Remove an object from a relation type field of an object

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
    "categories": {
        "__op": "RemoveRelation",
        "objects": [
            {
                "__type": "Pointer",
                "className": "Category",
                "objectId": "cQBAnh0DsW"
            }
        ]
    }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"categories":{"__op":"RemoveRelation","objects":[{"__type":"Pointer","className":"Category","objectId":"cQBAnh0DsW"}]}});

var config = {
  method: 'put',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/NQzpuAxjne',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
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

### Date

The `Date` type contains a field `iso` which contains a UTC timestamp stored in ISO 8601 format with millisecond precision: `YYYY-MM-DDTHH:MM:SS.MMMZ`. An example is given in the dark area to the right.

> Creating an object which contains Date type field

```shell
curl --location --request POST 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
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
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
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

Dates are useful in combination with the built-in `createdAt` and `updatedAt` fields. . An example is given in the dark area to the right, to retrieve objects availableFrom since a particular time, just encode a Date in a comparison query.

> Querying objects which contains Date type field

```shell
curl --location -g --request GET 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product?where={%22availableFrom%22:{%22$gte%22:{%22__type%22:%22Date%22,%22iso%22:%222011-08-21T18:02:52.249Z%22}}}' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json'
```

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product?where={"availableFrom":{"$gte":{"__type":"Date","iso":"2011-08-21T18:02:52.249Z"}}}',
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

### Pointer

<code>
{<br>
&nbsp;&nbsp;__type: "Pointer",<br>
&nbsp;&nbsp;className: "Product",<br>
&nbsp;&nbsp;objectId: productId<br>
}
</code>

### File

<code>
{<br>
&nbsp;&nbsp;"name": "Production",<br>
&nbsp;&nbsp;"picture": {<br>
&nbsp;&nbsp;&nbsp;"name": "...production.png",<br>
&nbsp;&nbsp;&nbsp;"url": "...production.png",<br>
&nbsp;&nbsp;&nbsp;"__type": "File"<br>
&nbsp;&nbsp;}<br>
}
</code>

### Relation

TODO
