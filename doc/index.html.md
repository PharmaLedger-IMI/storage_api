---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - javascript

toc_footers:
  - <a href='https://github.com/slatedocs/slate'>Documentation Powered by Slate</a>

includes:
  - objects
  - schemas
  - files
  - errors

search: true

code_clipboard: true
---

# Introduction

Welcome to the Storage API! Storage API will provide standard data storage/repository RESTFul endpoints for use case applications to access or store data in query-friendly database.

We have language bindings in Shell, Ruby, Python, and JavaScript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

# Quick Reference

API access can be provided over HTTPS and HTTP. We recommend utilizing HTTPS for anything other than local development.

**Object Store APIs**

| URL                                 | HTTP Verb | Functionality                                      |
|-------------------------------------|-----------|----------------------------------------------------|
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>classes/&lt;className&gt;</code>            | POST      | [Creating Objects](#creating-objects)      |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>classes/&lt;className&gt;/&lt;objectId&gt;</code> | GET       | [Retrieving Objects](#retrieving-objects)  |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>classes/&lt;className&gt;/&lt;objectId&gt;</code> | PUT       | [Updating Objects](#updating-objects)      |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>classes/&lt;className&gt;</code>            | GET       | [Queries](#queries)                                |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>classes/&lt;className&gt;/&lt;objectId&gt;</code> | DELETE    | [Deleting Objects](#deleting-objects)      |

**Schema Definition APIs**

| URL                     | HTTP Verb | Functionality                                             |
|-------------------------|-----------|-----------------------------------------------------------|
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>schemas/</code>           | GET       | [Fetch All Schemas](#fetch-the-schema)             |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>schemas/&lt;className&gt;</code>| GET       | [Fetch Schema](#fetch-the-schema)                  |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>schemas/&lt;className&gt;</code>| POST      | [Create Schema](#adding-a-schema)                  |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>schemas/&lt;className&gt;</code>| PUT       | [Modify Schema](#modifying-the-schema)             |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>schemas/&lt;className&gt;</code>| DELETE    | [Delete Schema](#removing-a-schema)                |

**File Store APIs**

| URL                   | HTTP Verb | Functionality                             |
|-----------------------|-----------|-------------------------------------------|
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>files/&lt;fileName&gt;</code> | POST      | [Uploading Files](#uploading-files) |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/storage/</span>files/&lt;fileName&gt;</code> | DELETE      | [Deleting Files](#deleting-files) |

# Request Format

For POST and PUT requests, the request body must be JSON, with the `Content-Type` header set to `application/json`.

Authentication is done via HTTP headers. Storage API expects following API keys to be included in all API requests to the server in a header that looks like the following:

<code>X-Storage-Application-Id: 4d98fbf2-f85f-4153-9e1c-91ee5776b0d7<br>X-Storage-REST-API-Key: 4c8dc298-de81-48c2-8fdc-3897e1ac2a17</code>

The `X-Storage-Application-Id` header identifies which application you are accessing, and the `X-Storage-REST-API-Key` header authenticates the endpoint.

<aside class="notice">
You must replace the key values the API keys provided to you.
</aside>


# Response Format

The response format for all requests is a JSON object.

Whether a request succeeded is indicated by the HTTP status code. A 2xx status code indicates success, whereas a 4xx status code indicates failure. When a request fails, the response body is still JSON, but always contains the fields `code` and `error` which you can inspect to use for debugging. For example, trying to save an object with invalid keys will return the message:

<code>
{<br>
&nbsp;&nbsp;"code": 105,<br>
&nbsp;&nbsp;"error": "invalid field name: bl!ng"<br>
}
</code>
