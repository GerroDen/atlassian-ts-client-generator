# ClassificationLevelApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteSpaceDefaultClassificationLevel**](ClassificationLevelApi.md#deletespacedefaultclassificationlevel) | **DELETE** /spaces/{id}/classification-level/default | Delete space default classification level |
| [**getBlogPostClassificationLevel**](ClassificationLevelApi.md#getblogpostclassificationlevel) | **GET** /blogposts/{id}/classification-level | Get blog post classification level |
| [**getClassificationLevels**](ClassificationLevelApi.md#getclassificationlevels) | **GET** /classification-levels | Get list of classification levels |
| [**getDatabaseClassificationLevel**](ClassificationLevelApi.md#getdatabaseclassificationlevel) | **GET** /databases/{id}/classification-level | Get database classification level |
| [**getPageClassificationLevel**](ClassificationLevelApi.md#getpageclassificationlevel) | **GET** /pages/{id}/classification-level | Get page classification level |
| [**getSpaceDefaultClassificationLevel**](ClassificationLevelApi.md#getspacedefaultclassificationlevel) | **GET** /spaces/{id}/classification-level/default | Get space default classification level |
| [**getWhiteboardClassificationLevel**](ClassificationLevelApi.md#getwhiteboardclassificationlevel) | **GET** /whiteboards/{id}/classification-level | Get whiteboard classification level |
| [**postBlogPostClassificationLevel**](ClassificationLevelApi.md#postblogpostclassificationlevel) | **POST** /blogposts/{id}/classification-level/reset | Reset blog post classification level |
| [**postDatabaseClassificationLevel**](ClassificationLevelApi.md#postdatabaseclassificationlevel) | **POST** /databases/{id}/classification-level/reset | Reset database classification level |
| [**postPageClassificationLevel**](ClassificationLevelApi.md#postpageclassificationleveloperation) | **POST** /pages/{id}/classification-level/reset | Reset page classification level |
| [**postWhiteboardClassificationLevel**](ClassificationLevelApi.md#postwhiteboardclassificationleveloperation) | **POST** /whiteboards/{id}/classification-level/reset | Reset whiteboard classification level |
| [**putBlogPostClassificationLevel**](ClassificationLevelApi.md#putblogpostclassificationlevel) | **PUT** /blogposts/{id}/classification-level | Update blog post classification level |
| [**putDatabaseClassificationLevel**](ClassificationLevelApi.md#putdatabaseclassificationlevel) | **PUT** /databases/{id}/classification-level | Update database classification level |
| [**putPageClassificationLevel**](ClassificationLevelApi.md#putpageclassificationleveloperation) | **PUT** /pages/{id}/classification-level | Update page classification level |
| [**putSpaceDefaultClassificationLevel**](ClassificationLevelApi.md#putspacedefaultclassificationleveloperation) | **PUT** /spaces/{id}/classification-level/default | Update space default classification level |
| [**putWhiteboardClassificationLevel**](ClassificationLevelApi.md#putwhiteboardclassificationleveloperation) | **PUT** /whiteboards/{id}/classification-level | Update whiteboard classification level |



## deleteSpaceDefaultClassificationLevel

> deleteSpaceDefaultClassificationLevel(id)

Delete space default classification level

Returns the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/)  for a specific space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { DeleteSpaceDefaultClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the space for which default classification level should be deleted.
    id: 789,
  } satisfies DeleteSpaceDefaultClassificationLevelRequest;

  try {
    const data = await api.deleteSpaceDefaultClassificationLevel(body);
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
| **id** | `number` | The ID of the space for which default classification level should be deleted. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the default classification level was successfully deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to view the specified space or the space was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPostClassificationLevel

> ClassificationLevel getBlogPostClassificationLevel(id, status)

Get blog post classification level

Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific blog post.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the blog post. \&#39;Permission to edit the blog post is required if trying to view classification level for a draft.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the blog post for which classification level should be returned.
    id: 789,
    // 'current' | 'draft' | 'archived' | Status of blog post from which classification level will fetched. (optional)
    status: status_example,
  } satisfies GetBlogPostClassificationLevelRequest;

  try {
    const data = await api.getBlogPostClassificationLevel(body);
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
| **id** | `number` | The ID of the blog post for which classification level should be returned. | [Defaults to `undefined`] |
| **status** | `current`, `draft`, `archived` | Status of blog post from which classification level will fetched. | [Optional] [Defaults to `&#39;current&#39;`] [Enum: current, draft, archived] |

### Return type

[**ClassificationLevel**](ClassificationLevel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested classification level for a blog post is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Blog post does not have a classification level applied - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to view the specified blog post or the blog post was not found - The calling user does not have permission to edit the specified blog post when trying to fetch classification level for a draft |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getClassificationLevels

> Array&lt;ClassificationLevel&gt; getClassificationLevels()

Get list of classification levels

Returns a list of [classification levels](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)  available.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { GetClassificationLevelsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  try {
    const data = await api.getClassificationLevels();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ClassificationLevel&gt;**](ClassificationLevel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if classifications levels are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Classification levels do not exist - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permissions to access the Confluence site  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDatabaseClassificationLevel

> ClassificationLevel getDatabaseClassificationLevel(id)

Get database classification level

Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the database.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { GetDatabaseClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the database for which classification level should be returned.
    id: 789,
  } satisfies GetDatabaseClassificationLevelRequest;

  try {
    const data = await api.getDatabaseClassificationLevel(body);
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
| **id** | `number` | The ID of the database for which classification level should be returned. | [Defaults to `undefined`] |

### Return type

[**ClassificationLevel**](ClassificationLevel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested classification level for a database is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Database does not have a classification level applied - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to view the specified database, or the database was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageClassificationLevel

> ClassificationLevel getPageClassificationLevel(id, status)

Get page classification level

Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the page. \&#39;Permission to edit the page is required if trying to view classification level for a draft.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { GetPageClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the page for which classification level should be returned.
    id: 789,
    // 'current' | 'draft' | 'archived' | Status of page from which classification level will fetched. (optional)
    status: status_example,
  } satisfies GetPageClassificationLevelRequest;

  try {
    const data = await api.getPageClassificationLevel(body);
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
| **id** | `number` | The ID of the page for which classification level should be returned. | [Defaults to `undefined`] |
| **status** | `current`, `draft`, `archived` | Status of page from which classification level will fetched. | [Optional] [Defaults to `&#39;current&#39;`] [Enum: current, draft, archived] |

### Return type

[**ClassificationLevel**](ClassificationLevel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested classification level for a page is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Page does not have a classification level applied - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to view the specified page or the page was not found - The calling user does not have permission to edit the specified page when trying to fetch classification level for a draft |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaceDefaultClassificationLevel

> ClassificationLevel getSpaceDefaultClassificationLevel(id)

Get space default classification level

Returns the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/)  for a specific space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the space.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { GetSpaceDefaultClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the space for which default classification level should be returned.
    id: 789,
  } satisfies GetSpaceDefaultClassificationLevelRequest;

  try {
    const data = await api.getSpaceDefaultClassificationLevel(body);
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
| **id** | `number` | The ID of the space for which default classification level should be returned. | [Defaults to `undefined`] |

### Return type

[**ClassificationLevel**](ClassificationLevel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested default classification level for a space is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Default classification level is not applied to the space - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to view the specified space or the space was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWhiteboardClassificationLevel

> ClassificationLevel getWhiteboardClassificationLevel(id)

Get whiteboard classification level

Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the whiteboard.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { GetWhiteboardClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the whiteboard for which classification level should be returned.
    id: 789,
  } satisfies GetWhiteboardClassificationLevelRequest;

  try {
    const data = await api.getWhiteboardClassificationLevel(body);
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
| **id** | `number` | The ID of the whiteboard for which classification level should be returned. | [Defaults to `undefined`] |

### Return type

[**ClassificationLevel**](ClassificationLevel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested classification level for a whiteboard is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Whiteboard does not have a classification level applied - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to view the specified whiteboard, or the whiteboard was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postBlogPostClassificationLevel

> postBlogPostClassificationLevel(id, postPageClassificationLevelRequest)

Reset blog post classification level

Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific blog post for the space   [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the blog post.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PostBlogPostClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the blog post for which classification level should be updated.
    id: 789,
    // PostPageClassificationLevelRequest
    postPageClassificationLevelRequest: ...,
  } satisfies PostBlogPostClassificationLevelRequest;

  try {
    const data = await api.postBlogPostClassificationLevel(body);
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
| **id** | `number` | The ID of the blog post for which classification level should be updated. | [Defaults to `undefined`] |
| **postPageClassificationLevelRequest** | [PostPageClassificationLevelRequest](PostPageClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the classification level was successfully reset. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to edit the specified blog post or the blog post was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postDatabaseClassificationLevel

> postDatabaseClassificationLevel(id, postWhiteboardClassificationLevelRequest)

Reset database classification level

Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific database for the space  [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the database.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PostDatabaseClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the database for which classification level should be updated.
    id: 789,
    // PostWhiteboardClassificationLevelRequest
    postWhiteboardClassificationLevelRequest: ...,
  } satisfies PostDatabaseClassificationLevelRequest;

  try {
    const data = await api.postDatabaseClassificationLevel(body);
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
| **id** | `number` | The ID of the database for which classification level should be updated. | [Defaults to `undefined`] |
| **postWhiteboardClassificationLevelRequest** | [PostWhiteboardClassificationLevelRequest](PostWhiteboardClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the classification level was successfully reset. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to edit the specified database, or the database was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPageClassificationLevel

> postPageClassificationLevel(id, postPageClassificationLevelRequest)

Reset page classification level

Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific page for the space  [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the page.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PostPageClassificationLevelOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the page for which classification level should be updated.
    id: 789,
    // PostPageClassificationLevelRequest
    postPageClassificationLevelRequest: ...,
  } satisfies PostPageClassificationLevelOperationRequest;

  try {
    const data = await api.postPageClassificationLevel(body);
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
| **id** | `number` | The ID of the page for which classification level should be updated. | [Defaults to `undefined`] |
| **postPageClassificationLevelRequest** | [PostPageClassificationLevelRequest](PostPageClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the classification level was successfully reset. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to edit the specified page or the page was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWhiteboardClassificationLevel

> postWhiteboardClassificationLevel(id, postWhiteboardClassificationLevelRequest)

Reset whiteboard classification level

Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific whiteboard for the space  [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to view the whiteboard.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PostWhiteboardClassificationLevelOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the whiteboard for which classification level should be updated.
    id: 789,
    // PostWhiteboardClassificationLevelRequest
    postWhiteboardClassificationLevelRequest: ...,
  } satisfies PostWhiteboardClassificationLevelOperationRequest;

  try {
    const data = await api.postWhiteboardClassificationLevel(body);
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
| **id** | `number` | The ID of the whiteboard for which classification level should be updated. | [Defaults to `undefined`] |
| **postWhiteboardClassificationLevelRequest** | [PostWhiteboardClassificationLevelRequest](PostWhiteboardClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the classification level was successfully reset. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to edit the specified whiteboard, or the whiteboard was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putBlogPostClassificationLevel

> putBlogPostClassificationLevel(id, putPageClassificationLevelRequest)

Update blog post classification level

Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific blog post.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to edit the blog post.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PutBlogPostClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the blog post for which classification level should be updated.
    id: 789,
    // PutPageClassificationLevelRequest
    putPageClassificationLevelRequest: ...,
  } satisfies PutBlogPostClassificationLevelRequest;

  try {
    const data = await api.putBlogPostClassificationLevel(body);
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
| **id** | `number` | The ID of the blog post for which classification level should be updated. | [Defaults to `undefined`] |
| **putPageClassificationLevelRequest** | [PutPageClassificationLevelRequest](PutPageClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the classification level was successfully updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to edit the specified blog post or the blog post was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putDatabaseClassificationLevel

> putDatabaseClassificationLevel(id, putWhiteboardClassificationLevelRequest)

Update database classification level

Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific database.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to edit the database.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PutDatabaseClassificationLevelRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the database for which classification level should be updated.
    id: 789,
    // PutWhiteboardClassificationLevelRequest
    putWhiteboardClassificationLevelRequest: ...,
  } satisfies PutDatabaseClassificationLevelRequest;

  try {
    const data = await api.putDatabaseClassificationLevel(body);
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
| **id** | `number` | The ID of the database for which classification level should be updated. | [Defaults to `undefined`] |
| **putWhiteboardClassificationLevelRequest** | [PutWhiteboardClassificationLevelRequest](PutWhiteboardClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the classification level was successfully updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to edit the specified database - The database or the classification level was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putPageClassificationLevel

> putPageClassificationLevel(id, putPageClassificationLevelRequest)

Update page classification level

Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to edit the page.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PutPageClassificationLevelOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the page for which classification level should be updated.
    id: 789,
    // PutPageClassificationLevelRequest
    putPageClassificationLevelRequest: ...,
  } satisfies PutPageClassificationLevelOperationRequest;

  try {
    const data = await api.putPageClassificationLevel(body);
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
| **id** | `number` | The ID of the page for which classification level should be updated. | [Defaults to `undefined`] |
| **putPageClassificationLevelRequest** | [PutPageClassificationLevelRequest](PutPageClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the classification level was successfully updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to edit the specified page or the page was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putSpaceDefaultClassificationLevel

> putSpaceDefaultClassificationLevel(id, putSpaceDefaultClassificationLevelRequest)

Update space default classification level

Update the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/)  for a specific space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PutSpaceDefaultClassificationLevelOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the space for which default classification level should be updated.
    id: 789,
    // PutSpaceDefaultClassificationLevelRequest
    putSpaceDefaultClassificationLevelRequest: ...,
  } satisfies PutSpaceDefaultClassificationLevelOperationRequest;

  try {
    const data = await api.putSpaceDefaultClassificationLevel(body);
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
| **id** | `number` | The ID of the space for which default classification level should be updated. | [Defaults to `undefined`] |
| **putSpaceDefaultClassificationLevelRequest** | [PutSpaceDefaultClassificationLevelRequest](PutSpaceDefaultClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the default classification level was successfully updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to view the specified space or the space was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putWhiteboardClassificationLevel

> putWhiteboardClassificationLevel(id, putWhiteboardClassificationLevelRequest)

Update whiteboard classification level

Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) for a specific whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and permission to edit the whiteboard.

### Example

```ts
import {
  Configuration,
  ClassificationLevelApi,
} from 'confluence-cloud-api-v2';
import type { PutWhiteboardClassificationLevelOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ClassificationLevelApi(config);

  const body = {
    // number | The ID of the whiteboard for which classification level should be updated.
    id: 789,
    // PutWhiteboardClassificationLevelRequest
    putWhiteboardClassificationLevelRequest: ...,
  } satisfies PutWhiteboardClassificationLevelOperationRequest;

  try {
    const data = await api.putWhiteboardClassificationLevel(body);
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
| **id** | `number` | The ID of the whiteboard for which classification level should be updated. | [Defaults to `undefined`] |
| **putWhiteboardClassificationLevelRequest** | [PutWhiteboardClassificationLevelRequest](PutWhiteboardClassificationLevelRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the classification level was successfully updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - Site\&#39;s edition does not have entitlement(s) for [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) - The calling user does not have permission to edit the specified whiteboard - The whiteboard or classification level was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

