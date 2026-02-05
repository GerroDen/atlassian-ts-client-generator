# StatusApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStatuses**](StatusApi.md#createstatuses) | **POST** /rest/api/3/statuses | Bulk create statuses |
| [**deleteStatusesById**](StatusApi.md#deletestatusesbyid) | **DELETE** /rest/api/3/statuses | Bulk delete Statuses |
| [**getProjectIssueTypeUsagesForStatus**](StatusApi.md#getprojectissuetypeusagesforstatus) | **GET** /rest/api/3/statuses/{statusId}/project/{projectId}/issueTypeUsages | Get issue type usages by status and project |
| [**getProjectUsagesForStatus**](StatusApi.md#getprojectusagesforstatus) | **GET** /rest/api/3/statuses/{statusId}/projectUsages | Get project usages by status |
| [**getStatusesById**](StatusApi.md#getstatusesbyid) | **GET** /rest/api/3/statuses | Bulk get statuses |
| [**getStatusesByName**](StatusApi.md#getstatusesbyname) | **GET** /rest/api/3/statuses/byNames | Bulk get statuses by name |
| [**getWorkflowUsagesForStatus**](StatusApi.md#getworkflowusagesforstatus) | **GET** /rest/api/3/statuses/{statusId}/workflowUsages | Get workflow usages by status |
| [**search**](StatusApi.md#search) | **GET** /rest/api/3/statuses/search | Search statuses paginated |
| [**updateStatuses**](StatusApi.md#updatestatuses) | **PUT** /rest/api/3/statuses | Bulk update statuses |



## createStatuses

> Array&lt;JiraStatus&gt; createStatuses(statusCreateRequest)

Bulk create statuses

Creates statuses for a global or project scope.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { CreateStatusesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // StatusCreateRequest | Details of the statuses being created and their scope.
    statusCreateRequest: {"scope":{"project":{"id":"1"},"type":"PROJECT"},"statuses":[{"description":"The issue is resolved","name":"Finished","statusCategory":"DONE"}]},
  } satisfies CreateStatusesRequest;

  try {
    const data = await api.createStatuses(body);
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
| **statusCreateRequest** | [StatusCreateRequest](StatusCreateRequest.md) | Details of the statuses being created and their scope. | |

### Return type

[**Array&lt;JiraStatus&gt;**](JiraStatus.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |
| **409** | Returned if another workflow configuration update task is ongoing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStatusesById

> any deleteStatusesById(id)

Bulk delete Statuses

Deletes statuses by ID.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { DeleteStatusesByIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // Array<string> | The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.  Min items `1`, Max items `50`
    id: ...,
  } satisfies DeleteStatusesByIdRequest;

  try {
    const data = await api.deleteStatusesById(body);
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
| **id** | `Array<string>` | The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id&#x3D;10000&amp;id&#x3D;10001.  Min items &#x60;1&#x60;, Max items &#x60;50&#x60; | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectIssueTypeUsagesForStatus

> StatusProjectIssueTypeUsageDTO getProjectIssueTypeUsagesForStatus(statusId, projectId, nextPageToken, maxResults)

Get issue type usages by status and project

Returns a page of issue types in a project using a given status.

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { GetProjectIssueTypeUsagesForStatusRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // string | The statusId to fetch issue type usages for
    statusId: statusId_example,
    // string | The projectId to fetch issue type usages for
    projectId: projectId_example,
    // string | The cursor for pagination (optional)
    nextPageToken: nextPageToken_example,
    // number | The maximum number of results to return. Must be an integer between 1 and 200. (optional)
    maxResults: 56,
  } satisfies GetProjectIssueTypeUsagesForStatusRequest;

  try {
    const data = await api.getProjectIssueTypeUsagesForStatus(body);
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
| **statusId** | `string` | The statusId to fetch issue type usages for | [Defaults to `undefined`] |
| **projectId** | `string` | The projectId to fetch issue type usages for | [Defaults to `undefined`] |
| **nextPageToken** | `string` | The cursor for pagination | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of results to return. Must be an integer between 1 and 200. | [Optional] [Defaults to `50`] |

### Return type

[**StatusProjectIssueTypeUsageDTO**](StatusProjectIssueTypeUsageDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |
| **404** | Returned if the status with the given ID does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectUsagesForStatus

> StatusProjectUsageDTO getProjectUsagesForStatus(statusId, nextPageToken, maxResults)

Get project usages by status

Returns a page of projects using a given status.

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { GetProjectUsagesForStatusRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // string | The statusId to fetch project usages for
    statusId: statusId_example,
    // string | The cursor for pagination (optional)
    nextPageToken: nextPageToken_example,
    // number | The maximum number of results to return. Must be an integer between 1 and 200. (optional)
    maxResults: 56,
  } satisfies GetProjectUsagesForStatusRequest;

  try {
    const data = await api.getProjectUsagesForStatus(body);
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
| **statusId** | `string` | The statusId to fetch project usages for | [Defaults to `undefined`] |
| **nextPageToken** | `string` | The cursor for pagination | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of results to return. Must be an integer between 1 and 200. | [Optional] [Defaults to `50`] |

### Return type

[**StatusProjectUsageDTO**](StatusProjectUsageDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |
| **404** | Returned if the status with the given ID does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatusesById

> Array&lt;JiraStatus&gt; getStatusesById(id)

Bulk get statuses

Returns a list of the statuses specified by one or more status IDs.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { GetStatusesByIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // Array<string> | The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.  Min items `1`, Max items `50`
    id: ...,
  } satisfies GetStatusesByIdRequest;

  try {
    const data = await api.getStatusesById(body);
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
| **id** | `Array<string>` | The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id&#x3D;10000&amp;id&#x3D;10001.  Min items &#x60;1&#x60;, Max items &#x60;50&#x60; | |

### Return type

[**Array&lt;JiraStatus&gt;**](JiraStatus.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatusesByName

> Array&lt;JiraStatus&gt; getStatusesByName(name, projectId)

Bulk get statuses by name

Returns a list of the statuses specified by one or more status names.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Browse projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { GetStatusesByNameRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // Array<string> | The list of status names. To include multiple names, provide an ampersand-separated list. For example, name=nameXX&name=nameYY.  Min items `1`, Max items `50`
    name: ...,
    // string | The project the status is part of or null for global statuses. (optional)
    projectId: projectId_example,
  } satisfies GetStatusesByNameRequest;

  try {
    const data = await api.getStatusesByName(body);
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
| **name** | `Array<string>` | The list of status names. To include multiple names, provide an ampersand-separated list. For example, name&#x3D;nameXX&amp;name&#x3D;nameYY.  Min items &#x60;1&#x60;, Max items &#x60;50&#x60; | |
| **projectId** | `string` | The project the status is part of or null for global statuses. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;JiraStatus&gt;**](JiraStatus.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowUsagesForStatus

> StatusWorkflowUsageDTO getWorkflowUsagesForStatus(statusId, nextPageToken, maxResults)

Get workflow usages by status

Returns a page of workflows using a given status.

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { GetWorkflowUsagesForStatusRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // string | The statusId to fetch workflow usages for
    statusId: statusId_example,
    // string | The cursor for pagination (optional)
    nextPageToken: nextPageToken_example,
    // number | The maximum number of results to return. Must be an integer between 1 and 200. (optional)
    maxResults: 56,
  } satisfies GetWorkflowUsagesForStatusRequest;

  try {
    const data = await api.getWorkflowUsagesForStatus(body);
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
| **statusId** | `string` | The statusId to fetch workflow usages for | [Defaults to `undefined`] |
| **nextPageToken** | `string` | The cursor for pagination | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of results to return. Must be an integer between 1 and 200. | [Optional] [Defaults to `50`] |

### Return type

[**StatusWorkflowUsageDTO**](StatusWorkflowUsageDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |
| **404** | Returned if the status with the given ID does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## search

> PageOfStatuses search(projectId, startAt, maxResults, searchString, statusCategory)

Search statuses paginated

Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of statuses that match a search on name or project.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { SearchRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // string | The project the status is part of or null for global statuses. (optional)
    projectId: projectId_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // string | Term to match status names against or null to search for all statuses in the search scope. (optional)
    searchString: searchString_example,
    // string | Category of the status to filter by. The supported values are: `TODO`, `IN_PROGRESS`, and `DONE`. (optional)
    statusCategory: statusCategory_example,
  } satisfies SearchRequest;

  try {
    const data = await api.search(body);
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
| **projectId** | `string` | The project the status is part of or null for global statuses. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `200`] |
| **searchString** | `string` | Term to match status names against or null to search for all statuses in the search scope. | [Optional] [Defaults to `undefined`] |
| **statusCategory** | `string` | Category of the status to filter by. The supported values are: &#x60;TODO&#x60;, &#x60;IN_PROGRESS&#x60;, and &#x60;DONE&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageOfStatuses**](PageOfStatuses.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStatuses

> any updateStatuses(statusUpdateRequest)

Bulk update statuses

Updates statuses by ID.  **[Permissions](#permissions) required:**   *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)  *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)

### Example

```ts
import {
  Configuration,
  StatusApi,
} from 'jira-cloud-api';
import type { UpdateStatusesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new StatusApi(config);

  const body = {
    // StatusUpdateRequest | The list of statuses that will be updated.
    statusUpdateRequest: {"statuses":[{"description":"The issue is resolved","id":"1000","name":"Finished","statusCategory":"DONE"}]},
  } satisfies UpdateStatusesRequest;

  try {
    const data = await api.updateStatuses(body);
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
| **statusUpdateRequest** | [StatusUpdateRequest](StatusUpdateRequest.md) | The list of statuses that will be updated. | |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |
| **409** | Returned if another workflow configuration update task is ongoing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

