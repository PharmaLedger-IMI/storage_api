# File Store APIs

## Get Query files

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.files.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.files.get()
```

```shell
curl --location --request GET 'http://localhost:3000/storage/classes/Product' \
--header 'X-Storage-Application-Id: 8bbf1067-fc29-4272-98e1-79a94e996dd5' \
--header 'X-Storage-Master-Key: 2861a9d0-0bcd-453b-aa73-ce10fe4f7e4f' \
--header 'Content-Type: application/json'
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let files = api.files.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all files.

### HTTP Request

`GET http://localhost:3000/storage/classes/<className>`

### Query Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the File to retrieves

<aside class="success">
Remember — a happy File is an authenticated File!
</aside>

## Create a File

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.files.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.files.get(2)
```

```shell
curl --location --request POST 'http://localhost:3000/storage/classes/Product' \
--header 'X-Storage-Application-Id: 8bbf1067-fc29-4272-98e1-79a94e996dd5' \
--header 'X-Storage-Master-Key: 2861a9d0-0bcd-453b-aa73-ce10fe4f7e4f' \
--header 'Content-Type: application/json' \
--data-raw ‘{
  "name": "Product 2",
  "price": 10,
  "weight": "286 g"
}
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.files.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint create a File.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`POST http://localhost:3000/storage/classes/<className>`

### URL Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the File to create

## Get a Specific File

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.files.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.files.get(2)
```

```shell
curl --location --request GET 'http://localhost:3000/storage/classes/Product/2' \
--header 'X-Storage-Application-Id: 8bbf1067-fc29-4272-98e1-79a94e996dd5' \
--header 'X-Storage-Master-Key: 2861a9d0-0bcd-453b-aa73-ce10fe4f7e4f' \
--header 'Content-Type: application/json'
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.files.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific File.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://localhost:3000/storage/classes/<className>/<FileId>/2`

### URL Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the File to retrieve
ID | The ID of the File to retrieve

## Update a File

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.files.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.files.get(2)
```

```shell
curl --location --request PUT 'http://localhost:3000/storage/classes/Product/2' \
--header 'X-Storage-Application-Id: 8bbf1067-fc29-4272-98e1-79a94e996dd5' \
--header 'X-Storage-Master-Key: 2861a9d0-0bcd-453b-aa73-ce10fe4f7e4f' \
--header 'Content-Type: application/json' \
--data-raw ‘{
  "name": "Product 2",
  "price": 10,
  "weight": "286 g"
}
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.files.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint update a File.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`PUT http://localhost:3000/storage/classes/<className>/<FileId>`

### URL Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the File to update
FileId | The FileId of the File to update

## Delete a Specific File

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.files.delete(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.files.delete(2)
```

```shell
curl --location --request DELETE 'http://localhost:3000/storage/classes/Product/2' \
--header 'X-Storage-Application-Id: 8bbf1067-fc29-4272-98e1-79a94e996dd5' \
--header 'X-Storage-Master-Key: 2861a9d0-0bcd-453b-aa73-ce10fe4f7e4f' \
--header 'Content-Type: application/json'
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.files.delete(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "deleted" : ":("
}
```

This endpoint deletes a specific File.

### HTTP Request

`DELETE http://localhost:3000/storage/classes/<className>/<FileId>`

### URL Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the File to delete
FileId | The FileId of the File to delete
