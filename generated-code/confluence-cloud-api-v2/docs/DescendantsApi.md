# DescendantsApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDatabaseDescendants**](DescendantsApi.md#getdatabasedescendants) | **GET** /databases/{id}/descendants | Get descendants of a database |
| [**getFolderDescendants**](DescendantsApi.md#getfolderdescendants) | **GET** /folders/{id}/descendants | Get descendants of folder |
| [**getPageDescendants**](DescendantsApi.md#getpagedescendants) | **GET** /pages/{id}/descendants | Get descendants of page |
| [**getSmartLinkDescendants**](DescendantsApi.md#getsmartlinkdescendants) | **GET** /embeds/{id}/descendants | Get descendants of a smart link |
| [**getWhiteboardDescendants**](DescendantsApi.md#getwhiteboarddescendants) | **GET** /whiteboards/{id}/descendants | Get descendants of a whiteboard |



## getDatabaseDescendants

> MultiEntityResultDescendantsResponse getDatabaseDescendants(id, limit, depth, cursor)

Get descendants of a database

Returns descendants in the content tree for a given database by ID in top-to-bottom order (that is, the highest descendant is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available by calling this endpoint with the cursor in the response payload. There is also a &#x60;depth&#x60; parameter specifying depth of descendants to be fetched.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the database and its corresponding space

### Example

```ts
import {
  Configuration,
  DescendantsApi,
} from 'confluence-cloud-api-v2';
import type { GetDatabaseDescendantsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DescendantsApi(config);

  const body = {
    // number | The ID of the database.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. (optional)
    limit: 56,
    // number | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. (optional)
    depth: 56,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
  } satisfies GetDatabaseDescendantsRequest;

  try {
    const data = await api.getDatabaseDescendants(body);
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
| **id** | `number` | The ID of the database. | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. | [Optional] [Defaults to `25`] |
| **depth** | `number` | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. | [Optional] [Defaults to `2`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |

### Return type

[**MultiEntityResultDescendantsResponse**](MultiEntityResultDescendantsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested descendants are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFolderDescendants

> MultiEntityResultDescendantsResponse getFolderDescendants(id, limit, depth, cursor)

Get descendants of folder

Returns descendants in the content tree for a given folder by ID in top-to-bottom order (that is, the highest descendant is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available by calling this endpoint with the cursor in the response payload. There is also a &#x60;depth&#x60; parameter specifying depth of descendants to be fetched.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the  and its corresponding space

### Example

```ts
import {
  Configuration,
  DescendantsApi,
} from 'confluence-cloud-api-v2';
import type { GetFolderDescendantsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DescendantsApi(config);

  const body = {
    // number | The ID of the folder.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. (optional)
    limit: 56,
    // number | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. (optional)
    depth: 56,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
  } satisfies GetFolderDescendantsRequest;

  try {
    const data = await api.getFolderDescendants(body);
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
| **id** | `number` | The ID of the folder. | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. | [Optional] [Defaults to `25`] |
| **depth** | `number` | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. | [Optional] [Defaults to `2`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |

### Return type

[**MultiEntityResultDescendantsResponse**](MultiEntityResultDescendantsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested descendants are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageDescendants

> MultiEntityResultDescendantsResponse getPageDescendants(id, limit, depth, cursor)

Get descendants of page

Returns descendants in the content tree for a given page by ID in top-to-bottom order (that is, the highest descendant is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available by calling this endpoint with the cursor in the response payload. There is also a &#x60;depth&#x60; parameter specifying depth of descendants to be fetched.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the page and its corresponding space

### Example

```ts
import {
  Configuration,
  DescendantsApi,
} from 'confluence-cloud-api-v2';
import type { GetPageDescendantsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DescendantsApi(config);

  const body = {
    // number | The ID of the page.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. (optional)
    limit: 56,
    // number | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. (optional)
    depth: 56,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
  } satisfies GetPageDescendantsRequest;

  try {
    const data = await api.getPageDescendants(body);
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
| **id** | `number` | The ID of the page. | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. | [Optional] [Defaults to `25`] |
| **depth** | `number` | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. | [Optional] [Defaults to `2`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |

### Return type

[**MultiEntityResultDescendantsResponse**](MultiEntityResultDescendantsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested descendants are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSmartLinkDescendants

> MultiEntityResultDescendantsResponse getSmartLinkDescendants(id, limit, depth, cursor)

Get descendants of a smart link

Returns descendants in the content tree for a given smart link by ID in top-to-bottom order (that is, the highest descendant is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available by calling this endpoint with the cursor in the response payload. There is also a &#x60;depth&#x60; parameter specifying depth of descendants to be fetched.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard   This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the smart link and its corresponding space

### Example

```ts
import {
  Configuration,
  DescendantsApi,
} from 'confluence-cloud-api-v2';
import type { GetSmartLinkDescendantsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DescendantsApi(config);

  const body = {
    // number | The ID of the smart link.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. (optional)
    limit: 56,
    // number | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. (optional)
    depth: 56,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
  } satisfies GetSmartLinkDescendantsRequest;

  try {
    const data = await api.getSmartLinkDescendants(body);
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
| **id** | `number` | The ID of the smart link. | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. | [Optional] [Defaults to `25`] |
| **depth** | `number` | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. | [Optional] [Defaults to `2`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |

### Return type

[**MultiEntityResultDescendantsResponse**](MultiEntityResultDescendantsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested descendants are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified smart link or the smart link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWhiteboardDescendants

> MultiEntityResultDescendantsResponse getWhiteboardDescendants(id, limit, depth, cursor)

Get descendants of a whiteboard

Returns descendants in the content tree for a given whiteboard by ID in top-to-bottom order (that is, the highest descendant is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available by calling this endpoint with the cursor in the response payload. There is also a &#x60;depth&#x60; parameter specifying depth of descendants to be fetched.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the whiteboard and its corresponding space

### Example

```ts
import {
  Configuration,
  DescendantsApi,
} from 'confluence-cloud-api-v2';
import type { GetWhiteboardDescendantsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DescendantsApi(config);

  const body = {
    // number | The ID of the whiteboard.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. (optional)
    limit: 56,
    // number | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. (optional)
    depth: 56,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
  } satisfies GetWhiteboardDescendantsRequest;

  try {
    const data = await api.getWhiteboardDescendants(body);
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
| **id** | `number` | The ID of the whiteboard. | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the cursor to fetch the next set of results. | [Optional] [Defaults to `25`] |
| **depth** | `number` | Maximum depth of descendants to return. If more results are required, use the endpoint corresponding to the content type of the deepest descendant to fetch more descendants. | [Optional] [Defaults to `2`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |

### Return type

[**MultiEntityResultDescendantsResponse**](MultiEntityResultDescendantsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested descendants are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified whiteboard or the whiteboard was not found. content: { } |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

