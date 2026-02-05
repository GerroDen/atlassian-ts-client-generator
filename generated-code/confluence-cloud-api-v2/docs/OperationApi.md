# OperationApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAttachmentOperations**](OperationApi.md#getattachmentoperations) | **GET** /attachments/{id}/operations | Get permitted operations for attachment |
| [**getBlogPostOperations**](OperationApi.md#getblogpostoperations) | **GET** /blogposts/{id}/operations | Get permitted operations for blog post |
| [**getCustomContentOperations**](OperationApi.md#getcustomcontentoperations) | **GET** /custom-content/{id}/operations | Get permitted operations for custom content |
| [**getDatabaseOperations**](OperationApi.md#getdatabaseoperations) | **GET** /databases/{id}/operations | Get permitted operations for a database |
| [**getFolderOperations**](OperationApi.md#getfolderoperations) | **GET** /folders/{id}/operations | Get permitted operations for a folder |
| [**getFooterCommentOperations**](OperationApi.md#getfootercommentoperations) | **GET** /footer-comments/{id}/operations | Get permitted operations for footer comment |
| [**getInlineCommentOperations**](OperationApi.md#getinlinecommentoperations) | **GET** /inline-comments/{id}/operations | Get permitted operations for inline comment |
| [**getPageOperations**](OperationApi.md#getpageoperations) | **GET** /pages/{id}/operations | Get permitted operations for page |
| [**getSmartLinkOperations**](OperationApi.md#getsmartlinkoperations) | **GET** /embeds/{id}/operations | Get permitted operations for a Smart Link in the content tree |
| [**getSpaceOperations**](OperationApi.md#getspaceoperations) | **GET** /spaces/{id}/operations | Get permitted operations for space |
| [**getWhiteboardOperations**](OperationApi.md#getwhiteboardoperations) | **GET** /whiteboards/{id}/operations | Get permitted operations for a whiteboard |



## getAttachmentOperations

> PermittedOperationsResponse getAttachmentOperations(id)

Get permitted operations for attachment

Returns the permitted operations on specific attachment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the attachment and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetAttachmentOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // string | The ID of the attachment for which operations should be returned.
    id: id_example,
  } satisfies GetAttachmentOperationsRequest;

  try {
    const data = await api.getAttachmentOperations(body);
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
| **id** | `string` | The ID of the attachment for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the parent content of the requested attachment or the attachment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPostOperations

> PermittedOperationsResponse getBlogPostOperations(id)

Get permitted operations for blog post

Returns the permitted operations on specific blog post.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the blog post for which operations should be returned.
    id: 789,
  } satisfies GetBlogPostOperationsRequest;

  try {
    const data = await api.getBlogPostOperations(body);
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
| **id** | `number` | The ID of the blog post for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the parent content of the requested blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentOperations

> PermittedOperationsResponse getCustomContentOperations(id)

Get permitted operations for custom content

Returns the permitted operations on specific custom content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the custom content and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the custom content for which operations should be returned.
    id: 789,
  } satisfies GetCustomContentOperationsRequest;

  try {
    const data = await api.getCustomContentOperations(body);
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
| **id** | `number` | The ID of the custom content for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the parent content of the requested custom content or the custom content was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDatabaseOperations

> PermittedOperationsResponse getDatabaseOperations(id)

Get permitted operations for a database

Returns the permitted operations on specific database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the database and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetDatabaseOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the database for which operations should be returned.
    id: 789,
  } satisfies GetDatabaseOperationsRequest;

  try {
    const data = await api.getDatabaseOperations(body);
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
| **id** | `number` | The ID of the database for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFolderOperations

> PermittedOperationsResponse getFolderOperations(id)

Get permitted operations for a folder

Returns the permitted operations on specific folder.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the folder and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetFolderOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the folder for which operations should be returned.
    id: 789,
  } satisfies GetFolderOperationsRequest;

  try {
    const data = await api.getFolderOperations(body);
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
| **id** | `number` | The ID of the folder for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFooterCommentOperations

> PermittedOperationsResponse getFooterCommentOperations(id)

Get permitted operations for footer comment

Returns the permitted operations on specific footer comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the footer comment and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetFooterCommentOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the footer comment for which operations should be returned.
    id: 789,
  } satisfies GetFooterCommentOperationsRequest;

  try {
    const data = await api.getFooterCommentOperations(body);
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
| **id** | `number` | The ID of the footer comment for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the parent content of the requested footer comment or the footer comment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInlineCommentOperations

> PermittedOperationsResponse getInlineCommentOperations(id)

Get permitted operations for inline comment

Returns the permitted operations on specific inline comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the inline comment and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetInlineCommentOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the inline comment for which operations should be returned.
    id: 789,
  } satisfies GetInlineCommentOperationsRequest;

  try {
    const data = await api.getInlineCommentOperations(body);
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
| **id** | `number` | The ID of the inline comment for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the parent content of the requested inline comment or the inline comment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageOperations

> PermittedOperationsResponse getPageOperations(id)

Get permitted operations for page

Returns the permitted operations on specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the parent content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetPageOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the page for which operations should be returned.
    id: 789,
  } satisfies GetPageOperationsRequest;

  try {
    const data = await api.getPageOperations(body);
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
| **id** | `number` | The ID of the page for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the parent content of the requested page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSmartLinkOperations

> PermittedOperationsResponse getSmartLinkOperations(id)

Get permitted operations for a Smart Link in the content tree

Returns the permitted operations on specific Smart Link in the content tree.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the Smart Link in the content tree and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetSmartLinkOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree for which operations should be returned.
    id: 789,
  } satisfies GetSmartLinkOperationsRequest;

  try {
    const data = await api.getSmartLinkOperations(body);
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
| **id** | `number` | The ID of the Smart Link in the content tree for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested Smart Link in the content tree or the Smart Link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaceOperations

> PermittedOperationsResponse getSpaceOperations(id)

Get permitted operations for space

Returns the permitted operations on specific space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetSpaceOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the space for which operations should be returned.
    id: 789,
  } satisfies GetSpaceOperationsRequest;

  try {
    const data = await api.getSpaceOperations(body);
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
| **id** | `number` | The ID of the space for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWhiteboardOperations

> PermittedOperationsResponse getWhiteboardOperations(id)

Get permitted operations for a whiteboard

Returns the permitted operations on specific whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the whiteboard and its corresponding space.

### Example

```ts
import {
  Configuration,
  OperationApi,
} from 'confluence-cloud-api-v2';
import type { GetWhiteboardOperationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OperationApi(config);

  const body = {
    // number | The ID of the whiteboard for which operations should be returned.
    id: 789,
  } satisfies GetWhiteboardOperationsRequest;

  try {
    const data = await api.getWhiteboardOperations(body);
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
| **id** | `number` | The ID of the whiteboard for which operations should be returned. | [Defaults to `undefined`] |

### Return type

[**PermittedOperationsResponse**](PermittedOperationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested operations are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested whiteboard or the whiteboard was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

