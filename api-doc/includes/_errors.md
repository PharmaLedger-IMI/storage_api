# Error Codes

The following is a list of all the error codes that can be returned by the Storage API. You may also refer to [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) for a list of http error codes. Make sure to check the error message for more details.


## API Issues

| Name                             | Code | Description                                                   |
|----------------------------------|------|---------------------------------------------------------------|
| `ObjectNotFound`	               |  101 | The specified object or session doesn't exist or could not be found. Can also indicate that you do not have the necessary permissions to read or write this object. Check error message for more details.                           |
| `InvalidQuery`	                 |  102 | There is a problem with the parameters used to construct this query. This could be an invalid field name or an invalid field type for a specific constraint. Check error message for more details.  |
| `InvalidClassName`               |  103 | Missing or invalid classname. Classnames are case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the only valid characters. |
| `MissingObjectId`	               |  104 | An unspecified object id. |
| `InvalidFieldName`	             |  105 | An invalid field name. Keys are case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the only valid characters. Some field names may be reserved. Check error message for more details. |
| `InvalidPointer`	               |  106 | A malformed pointer was used. You would typically only see this if you have modified a client SDK. |
| `InvalidJSON`                    |  107 | Badly formed JSON was received upstream. This either indicates you have done something unusual with modifying how things encode to JSON, or the network is failing badly. Can also indicate an invalid utf-8 string or use of multiple form encoded values. Check error message for more details.  |
| `CommandUnavailable`	           |  108 | The feature you tried to access is only available internally for testing purposes. |
| `ObjectTooLarge`	               |  116 | The object is too large. |
| `ExceededConfigParamsError`      |  116 | You have reached the limit of 100 config parameters. |
| `InvalidLimitError`	             |  117 | An invalid value was set for the limit. Check error message for more details. |
| `InvalidSkipError`	             |  118 | An invalid value was set for skip. Check error message for more details. |
| `OperationForbidden`	           |  119 | The operation isn't allowed for clients due to class-level permissions. Check error message for more details. |
| `CacheMiss`	                     |  120 | The result was not found in the cache. |
| `InvalidNestedKey`	             |  121 | An invalid key was used in a nested JSONObject. Check error message for more details. |
| `InvalidACL`	                   |  123 | An invalid ACL was provided. |
| `DuplicateValue`	               |  137 | Unique field was given a value that is already taken. |
| `ReservedValue`	                 |  139 | Field value is reserved. |
| `ExceededCollectionQuota`        |  140 | You have reached the quota on the number of classes in your app. Please delete some classes if you need to add a new class. |
| `InvalidImageData`	             |  150 | Invalid image data. |
| `UnsavedFileError`	             |  151 | An unsaved file. |
| `ClassNotEmpty`       	         |  255 | Class is not empty and cannot be dropped. |
| `MissingAPIKeyError`	           |  902 | The request is missing an API key.       |
| `InvalidAPIKeyError`	           |  903 | The request is using an invalid API key. |

## File related errors

| Name                             | Code | Description                                                   |
|----------------------------------|------|---------------------------------------------------------------|
| `InvalidFileName`	               |  122 | An invalid filename was used. A valid file name contains only a-zA-Z0-9_. characters and is between 1 and 128 characters. |
| `MissingContentType`	           |  126 | Missing content type. |
| `MissingContentLength`	         |  127 | Missing content length. |
| `InvalidContentLength`	         |  128 | Invalid content length. |
| `FileTooLarge`	                 |  129 | File size exceeds maximum allowed. |
| `FileSaveError`	                 |  130 | Error saving a file. |
| `FileDeleteError`	               |  153 | File could not be deleted. |
| `FileDeleteUnnamedError`	               |  161 | Unnamed file could not be deleted. |

## Operational issues

| Name                             | Code | Description                                                   |
|----------------------------------|------|---------------------------------------------------------------|
| `RequestTimeout`                 |  124 | The request was slow and timed out. Typically this indicates that the request is too expensive to run.  |
| `InefficientQueryError`	         |  154 | An inefficient query was rejected by the server. |

## Other issues

| Name                             | Code | Description                                                     |
|----------------------------------|------|-----------------------------------------------------------------|
| `OtherCause`	                   |   -1 | An unknown error occurred.       |
| `InternalServerError`	           |    1 | Internal server error. No information available.                |
| `ServiceUnavailable`	           |    2 | The service is currently unavailable.                           |
| `ClientDisconnected`	           |    4 | Connection failure.                                             |
