## Deleting File

> Deleting a file

```shell
curl --location --request DELETE 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/04291495c3f4a91ebd7f16730329467a_P1.txt' \
--header 'X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a' \
--header 'X-Storage-Master-Key: ae6fa89d-2439-49f4-98de-b5def8ac969e'
```

```javascript
var axios = require('axios');

var config = {
  method: 'delete',
  url: 'http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/04291495c3f4a91ebd7f16730329467a_P1.txt',
  headers: {
    'X-Storage-Application-Id': '4216d048-ed22-4d70-8b95-6ee91a35fc2a',
    'X-Storage-Master-Key': 'ae6fa89d-2439-49f4-98de-b5def8ac969e'
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

This endpoint deletes a file. Note that the `X-Parse-Master-Key` must be provided in headers to delete file.

### HTTP Request

`POST http://<API_HOST>/v1/storage/files/:fileName`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
fileName |      | Name of the file. Note that the name of the file must be the name in the response of the upload operation, rather than the original filename.

### Response

The response body is a JSON object containing the name of the file, which is the original file name prefixed with a unique identifier in order to prevent name collisions. This means you can save files with the same name, and the files will not overwrite one another.

<code>
{<br>
&nbsp;&nbsp;"url": "http://a02d165c043b944569194c64a27be04e-1762256349.eu-central-1.elb.amazonaws.com/v1/storage/files/4216d048-ed22-4d70-8b95-6ee91a35fc2a/cab85458d9444f193541c2e7d81f80bd_P1.png",<br>
&nbsp;&nbsp;"name": "cab85458d9444f193541c2e7d81f80bd_P1.png"<br>
}
</code>
