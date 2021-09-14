## Where

The values of the `where` parameter also support comparisons besides exact matching. Instead of an exact value, provide a hash with keys corresponding to the comparisons to do. The `where` parameter supports these options:

### Query Parameters
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

### Examples
To retrieve scores between 1000 and 3000, including the endpoints, we could issue:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'where={"score":{"$gte":1000,"$lte":3000}}' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore<br>
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
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore<br>
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
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore <br>
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
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore <br>
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
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore <br>
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
