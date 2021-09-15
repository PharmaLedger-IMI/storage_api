## Order

We can use the order parameter to specify a field to sort by. Prefixing with a negative sign reverses the order.

### Examples
To retrieve scores in ascending order:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'order=score' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore <br>
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
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore <br>
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
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore <br>
}
</code>
