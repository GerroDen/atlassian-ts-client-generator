# AncestorsApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDatabaseAncestors**](AncestorsApi.md#getdatabaseancestors) | **GET** /databases/{id}/ancestors | Get all ancestors of database |
| [**getFolderAncestors**](AncestorsApi.md#getfolderancestors) | **GET** /folders/{id}/ancestors | Get all ancestors of folder |
| [**getPageAncestors**](AncestorsApi.md#getpageancestors) | **GET** /pages/{id}/ancestors | Get all ancestors of page |
| [**getSmartLinkAncestors**](AncestorsApi.md#getsmartlinkancestors) | **GET** /embeds/{id}/ancestors | Get all ancestors of Smart Link in content tree |
| [**getWhiteboardAncestors**](AncestorsApi.md#getwhiteboardancestors) | **GET** /whiteboards/{id}/ancestors | Get all ancestors of whiteboard |



## getDatabaseAncestors

> MultiEntityResultAncestor getDatabaseAncestors(id, limit)

Get all ancestors of database

Returns all ancestors for a given database by ID in top-to-bottom order (that is, the highest ancestor is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.  This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such as [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the database and its corresponding space

### Example

```ts
import {
  Configuration,
  AncestorsApi,
} from 'confluence-cloud-api-v2';
import type { GetDatabaseAncestorsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AncestorsApi(config);

  const body = {
    // number | The ID of the database.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the highest ancestor\'s ID to fetch the next set of results. (optional)
    limit: 56,
  } satisfies GetDatabaseAncestorsRequest;

  try {
    const data = await api.getDatabaseAncestors(body);
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
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the highest ancestor\&#39;s ID to fetch the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultAncestor**](MultiEntityResultAncestor.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested ancestors are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified database or the database was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFolderAncestors

> MultiEntityResultAncestor getFolderAncestors(id, limit)

Get all ancestors of folder

Returns all ancestors for a given folder by ID in top-to-bottom order (that is, the highest ancestor is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results  (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.  This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such as [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-folders-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the folder and its corresponding space

### Example

```ts
import {
  Configuration,
  AncestorsApi,
} from 'confluence-cloud-api-v2';
import type { GetFolderAncestorsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AncestorsApi(config);

  const body = {
    // number | The ID of the folder.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the highest ancestor\'s ID to fetch the next set of results. (optional)
    limit: 56,
  } satisfies GetFolderAncestorsRequest;

  try {
    const data = await api.getFolderAncestors(body);
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
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the highest ancestor\&#39;s ID to fetch the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultAncestor**](MultiEntityResultAncestor.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested ancestors are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageAncestors

> MultiEntityResultAncestor1 getPageAncestors(id, limit)

Get all ancestors of page

Returns all ancestors for a given page by ID in top-to-bottom order (that is, the highest ancestor is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.  This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such as [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  AncestorsApi,
} from 'confluence-cloud-api-v2';
import type { GetPageAncestorsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AncestorsApi(config);

  const body = {
    // number | The ID of the page.
    id: 789,
    // number | Maximum number of pages per result to return. If more results exist, call this endpoint with the highest ancestor\'s ID to fetch the next set of results. (optional)
    limit: 56,
  } satisfies GetPageAncestorsRequest;

  try {
    const data = await api.getPageAncestors(body);
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
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, call this endpoint with the highest ancestor\&#39;s ID to fetch the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultAncestor1**](MultiEntityResultAncestor1.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested ancestors are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSmartLinkAncestors

> MultiEntityResultAncestor getSmartLinkAncestors(id, limit)

Get all ancestors of Smart Link in content tree

Returns all ancestors for a given Smart Link in the content tree by ID in top-to-bottom order (that is, the highest ancestor is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results  (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.  This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such as [Get Smart Link in the content tree by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the Smart Link in the content tree and its corresponding space

### Example

```ts
import {
  Configuration,
  AncestorsApi,
} from 'confluence-cloud-api-v2';
import type { GetSmartLinkAncestorsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AncestorsApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the highest ancestor\'s ID to fetch the next set of results. (optional)
    limit: 56,
  } satisfies GetSmartLinkAncestorsRequest;

  try {
    const data = await api.getSmartLinkAncestors(body);
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
| **id** | `number` | The ID of the Smart Link in the content tree. | [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the highest ancestor\&#39;s ID to fetch the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultAncestor**](MultiEntityResultAncestor.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested ancestors are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified Smart Link in the content tree or the Smart Link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWhiteboardAncestors

> MultiEntityResultAncestor getWhiteboardAncestors(id, limit)

Get all ancestors of whiteboard

Returns all ancestors for a given whiteboard by ID in top-to-bottom order (that is, the highest ancestor is the first item in the response payload). The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.  This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such as [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Permission to view the whiteboard and its corresponding space

### Example

```ts
import {
  Configuration,
  AncestorsApi,
} from 'confluence-cloud-api-v2';
import type { GetWhiteboardAncestorsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AncestorsApi(config);

  const body = {
    // number | The ID of the whiteboard.
    id: 789,
    // number | Maximum number of items per result to return. If more results exist, call the endpoint with the highest ancestor\'s ID to fetch the next set of results. (optional)
    limit: 56,
  } satisfies GetWhiteboardAncestorsRequest;

  try {
    const data = await api.getWhiteboardAncestors(body);
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
| **limit** | `number` | Maximum number of items per result to return. If more results exist, call the endpoint with the highest ancestor\&#39;s ID to fetch the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultAncestor**](MultiEntityResultAncestor.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested ancestors are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified whiteboard or the whiteboard was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

