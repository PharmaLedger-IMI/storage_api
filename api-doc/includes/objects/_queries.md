---
includes:
  - parameters/where
---
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

<code>
{<br>
&nbsp;&nbsp;query getComments($productId: ID!) {<br>
&nbsp;&nbsp;&nbsp;omments(<br>
&nbsp;&nbsp;&nbsp;&nbsp;where: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idea: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId: { equalTo: $productId }<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;edges {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>

<code>
{<br>
&nbsp;&nbsp;query getComments($productId: ID!) {<br>
&nbsp;&nbsp;&nbsp;omments(<br>
&nbsp;&nbsp;&nbsp;&nbsp;where: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idea: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order: name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;edges {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>

<code>
{<br>
&nbsp;&nbsp;query getComments($productId: ID!) {<br>
&nbsp;&nbsp;&nbsp;omments(<br>
&nbsp;&nbsp;&nbsp;&nbsp;where: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idea: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limit: 200<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;edges {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>

<code>
{<br>
&nbsp;&nbsp;query getComments($productId: ID!) {<br>
&nbsp;&nbsp;&nbsp;omments(<br>
&nbsp;&nbsp;&nbsp;&nbsp;where: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idea: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skip: 400<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;edges {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>

<code>
{<br>
&nbsp;&nbsp;query getComments($productId: ID!) {<br>
&nbsp;&nbsp;&nbsp;omments(<br>
&nbsp;&nbsp;&nbsp;&nbsp;where: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idea: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId: { equalTo: $productId }<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;edges {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>

<code>
{<br>
&nbsp;&nbsp;query getComments($productId: ID!) {<br>
&nbsp;&nbsp;&nbsp;omments(<br>
&nbsp;&nbsp;&nbsp;&nbsp;where: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idea: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId: { equalTo: $productId }<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;edges {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>

<code>
{<br>
&nbsp;&nbsp;query getComments($productId: ID!) {<br>
&nbsp;&nbsp;&nbsp;omments(<br>
&nbsp;&nbsp;&nbsp;&nbsp;where: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idea: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId: { equalTo: $productId }<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;edges {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objectId<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tags<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;createdAt<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>
