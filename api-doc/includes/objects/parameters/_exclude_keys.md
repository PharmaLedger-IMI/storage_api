## Exclude Keys

You can restrict the fields returned by passing `excludeKeys` a comma-separated list.

### Examples
you may use `excludeKeys` to fetch everything except `playerName`:

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'excludeKeys=playerName' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore/Ed1nuqPvcm <br>
}
</code>
