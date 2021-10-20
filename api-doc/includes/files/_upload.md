## Uploading File

> Uploading an image file

```shell
curl --location --request POST 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/P1.png' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: image/png' \
--data-binary '@/Users/dev/Downloads/P1.png'
```

```javascript
var axios = require('axios');
var data = '<file contents here>';

var config = {
  method: 'post',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/P1.png',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
    'Content-Type': 'image/png'
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

> Uploading a text file

```shell
curl --location --request POST 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/P1.txt' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: text/plain' \
--data-binary '@/Users/dev/Downloads/P1.txt'
```

```javascript
var axios = require('axios');
var data = '<file contents here>';

var config = {
  method: 'post',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/P1.txt',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-REST-API-Key': '8e2f92c9-f743-472f-ad63-00243741e045',
    'Content-Type': 'text/plain'
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

This endpoint uploads a file. The request must contain the `Content-Type` header associated with the file. Keep in mind that files are limited to 10 megabytes.

### HTTP Request

`POST http://<API_HOST>/v1/storage/files/:fileName`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
fileName |      | Name of the file.

### Response

The response body is a JSON object containing the name of the file, which is the original file name prefixed with a unique identifier in order to prevent name collisions. This means you can save files with the same name, and the files will not overwrite one another.

<code>
{<br>
&nbsp;&nbsp;"url": "http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/4216d048-ed22-4d70-8b95-6ee91a35fc2a/cab85458d9444f193541c2e7d81f80bd_P1.png",<br>
&nbsp;&nbsp;"name": "cab85458d9444f193541c2e7d81f80bd_P1.png"<br>
}
</code>

### Associating with Objects

> Associating a file with Object using file type field

```shell
curl --location --request PUT 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/DTRPxrPkEX' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045' \
--header 'Content-Type: application/json' \
--data-raw '{
  "image": {
      "__type": "File",
      "url": "http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/4216d048-ed22-4d70-8b95-6ee91a35fc2a/cab85458d9444f193541c2e7d81f80bd_P1.png",
      "name": "cab85458d9444f193541c2e7d81f80bd_P1.png"
  }
}'
```

```javascript
var axios = require('axios');
var data = JSON.stringify({"image":{"__type":"File","url":"http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/4216d048-ed22-4d70-8b95-6ee91a35fc2a/cab85458d9444f193541c2e7d81f80bd_P1.png","name":"cab85458d9444f193541c2e7d81f80bd_P1.png"}});

var config = {
  method: 'put',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/classes/Product/6jqT77cI1S',
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


After files are uploaded, you can associate them with class objects. An example is given in the dark area to the right.

<aside class="notice">
Note that deleting a Object with a file associated with it will not delete the file. All files stored should be deleted by using the above explained API.
</aside>
