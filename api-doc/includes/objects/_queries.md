## Querying Objects

This endpoint queries objects of a Class.

### HTTP Request

`POST http://<API_HOST>/v1/storage/classes/<className>`

### URL Parameters

Parameter | Default | Description
--------- | ------- | -----------
className |      | Class name of the object. We recommend that you `NameYourClassesLikeThis`

### Query Parameters
Parameter | Default | Description
--------- | ------- | -----------
where |      | The value of the where parameter should be encoded `JSON`
order |      | Specify a field to sort by
limit |      | Limit the number of objects returned by the query
skip |      | Use with limit to paginate through results
keys |      | Restrict the fields returned by the query
excludeKeys |      | Exclude specific fields from the returned query
include |      | Use on Pointer columns to return the full object

### Examples

TODO
