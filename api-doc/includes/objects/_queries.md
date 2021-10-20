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

### Where

The values of the `where` parameter also support comparisons besides exact matching. Instead of an exact value, provide a hash with keys corresponding to the comparisons to do. The `where` parameter supports these options:

#### Query Parameters
Key | Operation
--------- | -----------
$lt | Less Than
$lte | Less Than Or Equal To
$gt |	Greater Than
$gte | Greater Than Or Equal To
$ne |	Not Equal To
$in |	Contained In
$nin | Not Contained in
$exists |	A value is set for the key
$select |	This matches a value for a key in the result of a different query
$dontSelect |	Requires that a key’s value not match a value for a key in the result of a different query
$all | Contains all of the given values
$regex | Requires that a key’s value match a regular expression
$text |	Performs a full text search on indexed fields

#### Examples
To retrieve scores between 1000 and 3000, including the endpoints, we could issue:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'where={"score":{"$gte":1000,"$lte":3000}}' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product<br>
}
</code>  

To retrieve scores equal to an odd number below 10, we could issue:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'where={"score":{"$in":[1,3,5,7,9]}}' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product<br>
}
</code>  

To retrieve scores not by a given list of players we could issue:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'where={ <br>
&nbsp;&nbsp;&nbsp;&nbsp;"playerName": { <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"$nin": [ <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Jonathan Walsh", <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Dario Wunsch", <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Shawn Simon" <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] <br>
&nbsp;&nbsp;&nbsp;&nbsp;} <br>
&nbsp;&nbsp;&nbsp;}' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product <br>
}
</code>  

To retrieve documents with the score set, we could issue:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'where={"score":{"$exists":true}}' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product <br>
}
</code>

To retrieve documents without the score set, we could issue:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'where={"score":{"$exists":false}}' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product <br>
}
</code>

If you have a class containing sports teams and you store a user’s hometown in the user class, you can issue one query to find the list of users whose hometown teams have winning records. The query would look like:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'where={"hometown":{"$select":{"query":{"className":"Team","where":{"winPct":{"$gt":0.5}}},"key":"city"}}}' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/_User <br>
}
</code>

### Order

We can use the order parameter to specify a field to sort by. Prefixing with a negative sign reverses the order.

#### Examples
To retrieve scores in ascending order:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'order=score' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product <br>
}
</code>

And to retrieve scores in descending order:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'order=-score' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product <br>
}
</code>

You can sort by multiple fields by passing order a comma-separated list. To retrieve documents that are ordered by scores in ascending order and the names in descending order:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'order=score,-name' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product <br>
}
</code>

### Limit and Skip

You can use the `limit` and `skip` parameters for pagination.

#### Examples
`limit` defaults to 100. In the old Parse hosted backend, the maximum limit was 1,000, but Parse Server removed that constraint. Thus, to retrieve 200 objects after skipping the first 400:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'limit=200' \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'skip=400' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product <br>
}
</code>

### Keys

You can restrict the fields returned by passing `keys` a comma-separated list.

#### Examples
To retrieve documents that contain only the `score` and `playerName` fields (and also special built-in fields such as `objectId`, `createdAt`, and `updatedAt`):

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'keys=score,playerName' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product <br>
}
</code>

### Exclude Keys

You can restrict the fields returned by passing `excludeKeys` a comma-separated list.

#### Examples
you may use `excludeKeys` to fetch everything except `playerName`:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'excludeKeys=playerName' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/Product/Ed1nuqPvcm <br>
}
</code>
