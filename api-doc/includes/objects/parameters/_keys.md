## Keys

You can restrict the fields returned by passing `keys` a comma-separated list.

### Examples
To retrieve documents that contain only the `score` and `playerName` fields (and also special built-in fields such as `objectId`, `createdAt`, and `updatedAt`):

<code>
{<br>
&nbsp;&nbsp;curl -X GET \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-Application-Id: ${APPLICATION_ID}" \ <br>
&nbsp;&nbsp;&nbsp;-H "X-Parse-REST-API-Key: ${REST_API_KEY}" \ <br>
&nbsp;&nbsp;&nbsp;-G \ <br>
&nbsp;&nbsp;&nbsp;--data-urlencode 'keys=score,playerName' \ <br>
&nbsp;&nbsp;&nbsp;https://YOUR.PARSE-SERVER.HERE/parse/classes/GameScore <br>
}
</code>
