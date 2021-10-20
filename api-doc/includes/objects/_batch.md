## Batch Operations

> Creating objects in batch

```shell
curl --location --request POST 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/batch' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
        "requests": [
          {
            "method": "POST",
            "path": "/v1/storage/classes/Product",
            "body": {
              "name": "Product 1",
              "price": 30.0
            }
          },
          {
            "method": "POST",
            "path": "/v1/storage/classes/Product",
            "body": {
              "name": "Product 2",
              "price": 40.0
            }
          }
        ]
      }'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"requests":[{"method":"POST","path":"/v1/storage/classes/Product","body":{"name":"Product 2","price":30}},{"method":"POST","path":"/v1/storage/classes/Product","body":{"name":"Product 3","price":40}}]});

var config = {
  method: 'post',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/batch',
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
To reduce the amount of time spent on network round trips, you can create, update, or delete up to 50 objects in one call, using the batch endpoint.

Each command in a batch has `method`, `path`, and `body` parameters that specify the HTTP command that would normally be used for that command. The commands are run in the order they are given. An example is given in the dark area to the right, to create a couple of `Product` objects.

This endpoint runs batch requests.

### HTTP Request

`POST http://<API_HOST>/v1/storage/batch`

### Response
The response from batch will be a list with the same number of elements as the input list. Each item in the list with be a dictionary with either the `success` or `error` field set. The value of `success` will be the normal response to the equivalent REST command as shown below:

<code>
[<br>
&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;"success": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"objectId": "XjaGznD8vA",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "2021-05-06T10:48:10.735Z"<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;},<br>
&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;"success": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"objectId": "sVLwDU4gA4",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "2021-05-06T10:48:10.735Z"<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
]
</code>

The value of `error` will be an object with a numeric `code` and `error` string as shown below:

<code>
[<br>
&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;"success": {}<br>
&nbsp;&nbsp;},<br>
&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;"success": {}<br>
&nbsp;&nbsp;},<br>
&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;"error": {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"code": 101,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"error": "Object not found."<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
]
</code>

Other commands that work in a batch are `update` and `delete`. Note that N requests sent in a batch will still count toward your request limit as N requests.

> Updating objects in batch

```shell
curl --location --request POST 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/batch' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
    "requests": [
        {
            "method": "PUT",
            "path": "/storage/classes/Product/xbQm6BY2hC",
            "body": {
                "price": 30.0,
                "weight": "2.5 kg"
            }
        },
        {
            "method": "PUT",
            "path": "/storage/classes/Product/A0F2BXDqSi",
            "body": {
                "price": 40.0,
                "weight": "3 kg"
            }
        }
    ]
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"requests":[{"method":"PUT","path":"/storage/classes/Product/xbQm6BY2hC","body":{"price":30,"weight":"2.5 kg"}},{"method":"PUT","path":"/storage/classes/Product/A0F2BXDqSi","body":{"price":40,"weight":"3 kg"}}]});

var config = {
  method: 'post',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/batch',
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

> Deleting objects in batch

```shell
curl --location --request POST 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/batch' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
    "requests": [
        {
            "method": "DELETE",
            "path": "/storage/classes/Product/XjaGznD8vA"
        },
        {
            "method": "DELETE",
            "path": "/storage/classes/Product/sVLwDU4gA4"
        },
        {
            "method": "DELETE",
            "path": "/storage/classes/Product/QQQQQQQQQ"
        }
    ]
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"requests":[{"method":"DELETE","path":"/storage/classes/Product/XjaGznD8vA"},{"method":"DELETE","path":"/storage/classes/Product/sVLwDU4gA4"},{"method":"DELETE","path":"/storage/classes/Product/QQQQQQQQQ"}]});

var config = {
  method: 'post',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/batch',
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
