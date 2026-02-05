# IssueCommentPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteCommentProperty**](IssueCommentPropertiesApi.md#deletecommentproperty) | **DELETE** /rest/api/3/comment/{commentId}/properties/{propertyKey} | Delete comment property |
| [**getCommentProperty**](IssueCommentPropertiesApi.md#getcommentproperty) | **GET** /rest/api/3/comment/{commentId}/properties/{propertyKey} | Get comment property |
| [**getCommentPropertyKeys**](IssueCommentPropertiesApi.md#getcommentpropertykeys) | **GET** /rest/api/3/comment/{commentId}/properties | Get comment property keys |
| [**setCommentProperty**](IssueCommentPropertiesApi.md#setcommentproperty) | **PUT** /rest/api/3/comment/{commentId}/properties/{propertyKey} | Set comment property |



## deleteCommentProperty

> deleteCommentProperty(commentId, propertyKey)

Delete comment property

Deletes a comment property.  **[Permissions](#permissions) required:** either of:   *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from any comment.  *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from a comment created by the user.

### Example

```ts
import {
  Configuration,
  IssueCommentPropertiesApi,
} from 'jira-cloud-api';
import type { DeleteCommentPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentPropertiesApi(config);

  const body = {
    // string | The ID of the comment.
    commentId: commentId_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
  } satisfies DeleteCommentPropertyRequest;

  try {
    const data = await api.deleteCommentProperty(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **commentId** | `string` | The ID of the comment. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the comment or the property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommentProperty

> EntityProperty getCommentProperty(commentId, propertyKey)

Get comment property

Returns the value of a comment property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueCommentPropertiesApi,
} from 'jira-cloud-api';
import type { GetCommentPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentPropertiesApi(config);

  const body = {
    // string | The ID of the comment.
    commentId: commentId_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
  } satisfies GetCommentPropertyRequest;

  try {
    const data = await api.getCommentProperty(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **commentId** | `string` | The ID of the comment. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the comment or the property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommentPropertyKeys

> PropertyKeys getCommentPropertyKeys(commentId)

Get comment property keys

Returns the keys of all the properties of a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueCommentPropertiesApi,
} from 'jira-cloud-api';
import type { GetCommentPropertyKeysRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentPropertiesApi(config);

  const body = {
    // string | The ID of the comment.
    commentId: commentId_example,
  } satisfies GetCommentPropertyKeysRequest;

  try {
    const data = await api.getCommentPropertyKeys(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **commentId** | `string` | The ID of the comment. | [Defaults to `undefined`] |

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the comment ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the comment is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setCommentProperty

> any setCommentProperty(commentId, propertyKey, body)

Set comment property

Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** either of:   *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on any comment.  *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on a comment created by the user.

### Example

```ts
import {
  Configuration,
  IssueCommentPropertiesApi,
} from 'jira-cloud-api';
import type { SetCommentPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentPropertiesApi(config);

  const body = {
    // string | The ID of the comment.
    commentId: commentId_example,
    // string | The key of the property. The maximum length is 255 characters.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: ...,
  } satisfies SetCommentPropertyRequest;

  try {
    const data = await api.setCommentProperty(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **commentId** | `string` | The ID of the comment. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. The maximum length is 255 characters. | [Defaults to `undefined`] |
| **body** | `any` | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes. | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the comment property is updated. |  -  |
| **201** | Returned if the comment property is created. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the comment is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

