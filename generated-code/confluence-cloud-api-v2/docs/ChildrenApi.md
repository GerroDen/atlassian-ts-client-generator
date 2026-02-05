# ChildrenApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getChildCustomContent**](ChildrenApi.md#getchildcustomcontent) | **GET** /custom-content/{id}/children | Get child custom content |
| [**getChildPages**](ChildrenApi.md#getchildpages) | **GET** /pages/{id}/children | Get child pages |
| [**getDatabaseDirectChildren**](ChildrenApi.md#getdatabasedirectchildren) | **GET** /databases/{id}/direct-children | Get direct children of a database |
| [**getFolderDirectChildren**](ChildrenApi.md#getfolderdirectchildren) | **GET** /folders/{id}/direct-children | Get direct children of a folder |
| [**getPageDirectChildren**](ChildrenApi.md#getpagedirectchildren) | **GET** /pages/{id}/direct-children | Get direct children of a page |
| [**getSmartLinkDirectChildren**](ChildrenApi.md#getsmartlinkdirectchildren) | **GET** /embeds/{id}/direct-children | Get direct children of a Smart Link |
| [**getWhiteboardDirectChildren**](ChildrenApi.md#getwhiteboarddirectchildren) | **GET** /whiteboards/{id}/direct-children | Get direct children of a whiteboard |



## getChildCustomContent

> MultiEntityResultChildCustomContent getChildCustomContent(id, cursor, limit, sort)

Get child custom content

Returns all child custom content for given custom content id. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only custom content that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  ChildrenApi,
} from 'confluence-cloud-api-v2';
import type { GetChildCustomContentRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChildrenApi(config);

  const body = {
    // number | The ID of the parent custom content. If you don\'t know the custom content ID, use Get custom-content and filter the results.
    id: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // Array<ChildCustomContentSortOrder> | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetChildCustomContentRequest;

  try {
    const data = await api.getChildCustomContent(body);
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
| **id** | `number` | The ID of the parent custom content. If you don\&#39;t know the custom content ID, use Get custom-content and filter the results. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `Array<ChildCustomContentSortOrder>` | Used to sort the result by a particular field. | [Optional] |

### Return type

[**MultiEntityResultChildCustomContent**](MultiEntityResultChildCustomContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested child custom content are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/custom-content/{id}/children?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChildPages

> MultiEntityResultChildPage getChildPages(id, cursor, limit, sort)

Get child pages

Returns all child pages for given page id. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only pages that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  ChildrenApi,
} from 'confluence-cloud-api-v2';
import type { GetChildPagesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChildrenApi(config);

  const body = {
    // number | The ID of the parent page. If you don\'t know the page ID, use Get pages and filter the results.
    id: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // Array<ChildPageSortOrder> | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetChildPagesRequest;

  try {
    const data = await api.getChildPages(body);
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
| **id** | `number` | The ID of the parent page. If you don\&#39;t know the page ID, use Get pages and filter the results. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `Array<ChildPageSortOrder>` | Used to sort the result by a particular field. | [Optional] |

### Return type

[**MultiEntityResultChildPage**](MultiEntityResultChildPage.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested child pages are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/pages/{id}/children?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDatabaseDirectChildren

> MultiEntityResultChildrenResponse getDatabaseDirectChildren(id, cursor, limit, sort)

Get direct children of a database

Returns all children for given database id in the content tree. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only content that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  ChildrenApi,
} from 'confluence-cloud-api-v2';
import type { GetDatabaseDirectChildrenRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChildrenApi(config);

  const body = {
    // number | The ID of the parent database.
    id: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of items per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // Array<ContentSortOrder> | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetDatabaseDirectChildrenRequest;

  try {
    const data = await api.getDatabaseDirectChildren(body);
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
| **id** | `number` | The ID of the parent database. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `Array<ContentSortOrder>` | Used to sort the result by a particular field. | [Optional] |

### Return type

[**MultiEntityResultChildrenResponse**](MultiEntityResultChildrenResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested children are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFolderDirectChildren

> MultiEntityResultChildrenResponse getFolderDirectChildren(id, cursor, limit, sort)

Get direct children of a folder

Returns all children for given folder id in the content tree. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only content that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  ChildrenApi,
} from 'confluence-cloud-api-v2';
import type { GetFolderDirectChildrenRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChildrenApi(config);

  const body = {
    // number | The ID of the parent folder.
    id: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of items per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // Array<ContentSortOrder> | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetFolderDirectChildrenRequest;

  try {
    const data = await api.getFolderDirectChildren(body);
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
| **id** | `number` | The ID of the parent folder. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `Array<ContentSortOrder>` | Used to sort the result by a particular field. | [Optional] |

### Return type

[**MultiEntityResultChildrenResponse**](MultiEntityResultChildrenResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested children are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageDirectChildren

> MultiEntityResultChildrenResponse getPageDirectChildren(id, cursor, limit, sort)

Get direct children of a page

Returns all children for given page id in the content tree. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only content that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  ChildrenApi,
} from 'confluence-cloud-api-v2';
import type { GetPageDirectChildrenRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChildrenApi(config);

  const body = {
    // number | The ID of the parent page.
    id: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of items per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // Array<ContentSortOrder> | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetPageDirectChildrenRequest;

  try {
    const data = await api.getPageDirectChildren(body);
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
| **id** | `number` | The ID of the parent page. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `Array<ContentSortOrder>` | Used to sort the result by a particular field. | [Optional] |

### Return type

[**MultiEntityResultChildrenResponse**](MultiEntityResultChildrenResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested children are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSmartLinkDirectChildren

> MultiEntityResultChildrenResponse getSmartLinkDirectChildren(id, cursor, limit, sort)

Get direct children of a Smart Link

Returns all children for given smart link id in the content tree. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only content that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  ChildrenApi,
} from 'confluence-cloud-api-v2';
import type { GetSmartLinkDirectChildrenRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChildrenApi(config);

  const body = {
    // number | The ID of the parent smart link.
    id: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of items per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // Array<ContentSortOrder> | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetSmartLinkDirectChildrenRequest;

  try {
    const data = await api.getSmartLinkDirectChildren(body);
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
| **id** | `number` | The ID of the parent smart link. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `Array<ContentSortOrder>` | Used to sort the result by a particular field. | [Optional] |

### Return type

[**MultiEntityResultChildrenResponse**](MultiEntityResultChildrenResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested children are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified smart link or the smart link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWhiteboardDirectChildren

> MultiEntityResultChildrenResponse getWhiteboardDirectChildren(id, cursor, limit, sort)

Get direct children of a whiteboard

Returns all children for given whiteboard id in the content tree. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  The following types of content will be returned: - Database - Embed - Folder - Page - Whiteboard  This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such as:  - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get) - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get) - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get) - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get) - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only content that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  ChildrenApi,
} from 'confluence-cloud-api-v2';
import type { GetWhiteboardDirectChildrenRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChildrenApi(config);

  const body = {
    // number | The ID of the parent whiteboard.
    id: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of items per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // Array<ContentSortOrder> | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetWhiteboardDirectChildrenRequest;

  try {
    const data = await api.getWhiteboardDirectChildren(body);
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
| **id** | `number` | The ID of the parent whiteboard. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `Array<ContentSortOrder>` | Used to sort the result by a particular field. | [Optional] |

### Return type

[**MultiEntityResultChildrenResponse**](MultiEntityResultChildrenResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested children are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. Example response header format: &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

