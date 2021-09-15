## Limit and Skip

You can use the `limit` and `skip` parameters for pagination.

### Examples
`limit` defaults to 100. In the old Parse hosted backend, the maximum limit was 1,000, but Parse Server removed that constraint. Thus, to retrieve 200 objects after skipping the first 400:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'limit=200' \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'skip=400' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore <br>
}
</code>
