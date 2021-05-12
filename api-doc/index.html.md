---
title: Storage API

language_tabs: # must be one of https://git.io/vQNgJ
  - shell
  - javascript

toc_footers:
  - <a href='https://github.com/slatedocs/slate'>Documentation Powered by Slate</a>

includes:
  - objects/main
  - objects/create
  - objects/retrieve
  - objects/update
  - objects/delete
  - objects/batch
  - objects/data_types
  - objects/queries
  - schemas/main
  - schemas/create
  - schemas/retrieve
  - schemas/update
  - schemas/delete
  - schemas/retrieve_all
  - files/main
  - files/upload
  - files/delete
  - errors

search: true

code_clipboard: true
---

# Introduction

Welcome to the Storage API! Storage API will provide standard data storage/repository RESTFul endpoints for use case applications to access or store data in query-friendly database.

We have language bindings in Shell, and JavaScript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right. You can use any programming language that can send HTTP requests.

<aside class="notice">
We have a Storage API Playground Endpoint which you can use to play! Import this <a href="https://www.getpostman.com/collections/51c483fe9b294a6183a8">Postman collection</a> to interact with the Storage API Playground Endpoint.

Please don't use this endpoint for your PRE-PROD, MVP, DEV environment. Please contact <b>T2.3 LEAD/CO-LEAD</b> and we will setup environments for you based on your use case.
</aside>

# Quick Reference

API access can be provided over HTTPS and HTTP. We recommend utilizing HTTPS for anything other than local development.

**Object Store APIs**

| URL                                 | HTTP Verb | Functionality                                      |
|-------------------------------------|-----------|----------------------------------------------------|
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>classes/&lt;className&gt;</code>            | POST      | [Creating Object](#creating-object)      |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>classes/&lt;className&gt;/&lt;objectId&gt;</code> | GET       | [Retrieving Object](#retrieving-object)  |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>classes/&lt;className&gt;/&lt;objectId&gt;</code> | PUT       | [Updating Object](#updating-object)      |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>classes/&lt;className&gt;</code>            | GET       | [Querying Objects](#querying-objects)                                |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>classes/&lt;className&gt;/&lt;objectId&gt;</code> | DELETE    | [Deleting Object](#deleting-object)      |

**Schema Definition APIs**

| URL                     | HTTP Verb | Functionality                                             |
|-------------------------|-----------|-----------------------------------------------------------|
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>schemas/</code>           | GET       | [Retrieving all Schemas](#retrieving-all-schemas)             |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>schemas/&lt;className&gt;</code>| GET       | [Retrieving Schema](#retrieving-schema)                  |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>schemas/&lt;className&gt;</code>| POST      | [Creating Schema](#creating-schema)                  |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>schemas/&lt;className&gt;</code>| PUT       | [Updating Schema](#updating-schema)             |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>schemas/&lt;className&gt;</code>| DELETE    | [Deleting Schema](#deleting-schema)                |

**File Store APIs**

| URL                   | HTTP Verb | Functionality                             |
|-----------------------|-----------|-------------------------------------------|
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>files/&lt;fileName&gt;</code> | POST      | [Uploading File](#uploading-file) |
| <code class="highlighter-rouge"><span class="custom-parse-server-mount">/v1/storage/</span>files/&lt;fileName&gt;</code> | DELETE      | [Deleting File](#deleting-file) |

# Request Format

For POST and PUT requests, the request body must be JSON, with the `Content-Type` header set to `application/json`.

Authentication is done via HTTP headers. Storage API expects following API keys to be included in all API requests to the server in a header that looks like the following:

<code>X-Storage-Application-Id: 4216d048-ed22-4d70-8b95-6ee91a35fc2a<br>X-Storage-REST-API-Key: 8e2f92c9-f743-472f-ad63-00243741e045</code>

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
