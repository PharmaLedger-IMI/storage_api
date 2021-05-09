## Object Format

Storing data through the Storage API is built around a JSON encoding of the object's data. This data is schemaless, which means that you don't need to specify ahead of time what keys exist on each object. You simply set whatever key-value pairs you want, and the backend will store it.

For example, let's say you want to store Product information. A single object could contain:

<code>
{<br>
&nbsp;&nbsp;"name": "Product 1",<br>
&nbsp;&nbsp;"price": 50<br>
}
</code>

Keys must be alphanumeric strings. Values can be anything that can be JSON-encoded.

Each object has a class name that you can use to distinguish different sorts of data. We recommend that you `NameYourClassesLikeThis` and `nameYourKeysLikeThis`, just to keep your code looking pretty.

When you retrieve objects, some fields are automatically added: `createdAt`, `updatedAt`, and `objectId`. These field names are reserved, so you cannot set them yourself. The object above could look like this when retrieved:

<code>
{<br>
&nbsp;&nbsp;"name": "Product 1",<br>
&nbsp;&nbsp;"price": 50,<br>
&nbsp;&nbsp;"createdAt": "2011-08-20T02:06:57.931Z",<br>
&nbsp;&nbsp;"updatedAt": "2011-08-20T02:06:57.931Z",<br>
&nbsp;&nbsp;"objectId": "Ed1nuqPvcm"<br>
}
</code>

`createdAt` and `updatedAt` are UTC timestamps stored in ISO 8601 format with millisecond precision: `YYYY-MM-DDTHH:MM:SS.MMMZ`. `objectId` is a string unique to this class that identifies this object.

In the REST API, the class-level operations operate on a resource based on just the class name. For example, if the class name is `Product`, the class URL is:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product
</code>

The operations specific to a single object are available as a nested URL. For example, operations specific to the `Product` above with `objectId` equal to `Ed1nuqPvcm` would use the object URL:

<code>
https://&lt;API_HOST&gt;/storage/classes/Product/Ed1nuqPvcm
</code>
