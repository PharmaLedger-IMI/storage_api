# Schema Store APIs

## Get Query schemas

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.schemas.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.schemas.get()
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
let schemas = api.schemas.get();
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

This endpoint retrieves all schemas.

### HTTP Request

`GET http://localhost:3000/storage/classes/<className>`

### Query Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the Schema to retrieves

<aside class="success">
Remember — a happy Schema is an authenticated Schema!
</aside>

## Create a Schema

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.schemas.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.schemas.get(2)
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
let max = api.schemas.get(2);
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

This endpoint create a Schema.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`POST http://localhost:3000/storage/classes/<className>`

### URL Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the Schema to create

## Get a Specific Schema

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.schemas.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.schemas.get(2)
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
let max = api.schemas.get(2);
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

This endpoint retrieves a specific Schema.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://localhost:3000/storage/classes/<className>/<SchemaId>/2`

### URL Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the Schema to retrieve
ID | The ID of the Schema to retrieve

## Update a Schema

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.schemas.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.schemas.get(2)
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
let max = api.schemas.get(2);
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

This endpoint update a Schema.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`PUT http://localhost:3000/storage/classes/<className>/<SchemaId>`

### URL Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the Schema to update
SchemaId | The SchemaId of the Schema to update

## Delete a Specific Schema

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.schemas.delete(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.schemas.delete(2)
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
let max = api.schemas.delete(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "deleted" : ":("
}
```

This endpoint deletes a specific Schema.

### HTTP Request

`DELETE http://localhost:3000/storage/classes/<className>/<SchemaId>`

### URL Parameters

Parameter | Description
--------- | -----------
ClassName | The ClassName of the Schema to delete
SchemaId | The SchemaId of the Schema to delete
