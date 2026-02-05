# IssuePrioritiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPriority**](IssuePrioritiesApi.md#createpriority) | **POST** /rest/api/3/priority | Create priority |
| [**deletePriority**](IssuePrioritiesApi.md#deletepriority) | **DELETE** /rest/api/3/priority/{id} | Delete priority |
| [**getPriorities**](IssuePrioritiesApi.md#getpriorities) | **GET** /rest/api/3/priority | Get priorities |
| [**getPriority**](IssuePrioritiesApi.md#getpriority) | **GET** /rest/api/3/priority/{id} | Get priority |
| [**movePriorities**](IssuePrioritiesApi.md#movepriorities) | **PUT** /rest/api/3/priority/move | Move priorities |
| [**searchPriorities**](IssuePrioritiesApi.md#searchpriorities) | **GET** /rest/api/3/priority/search | Search priorities |
| [**setDefaultPriority**](IssuePrioritiesApi.md#setdefaultpriorityoperation) | **PUT** /rest/api/3/priority/default | Set default priority |
| [**updatePriority**](IssuePrioritiesApi.md#updatepriority) | **PUT** /rest/api/3/priority/{id} | Update priority |



## createPriority

> PriorityId createPriority(createPriorityDetails)

Create priority

Creates an issue priority.  Deprecation applies to iconUrl param in request body which will be sunset on 16th Mar 2025. For more details refer to [changelog](https://developer.atlassian.com/changelog/#CHANGE-1525).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssuePrioritiesApi,
} from 'jira-cloud-api';
import type { CreatePriorityRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePrioritiesApi(config);

  const body = {
    // CreatePriorityDetails
    createPriorityDetails: {"description":"My priority description","iconUrl":"images/icons/priorities/major.png","name":"My new priority","statusColor":"#ABCDEF"},
  } satisfies CreatePriorityRequest;

  try {
    const data = await api.createPriority(body);
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
| **createPriorityDetails** | [CreatePriorityDetails](CreatePriorityDetails.md) |  | |

### Return type

[**PriorityId**](PriorityId.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePriority

> deletePriority(id)

Delete priority

Deletes an issue priority.  This operation is [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssuePrioritiesApi,
} from 'jira-cloud-api';
import type { DeletePriorityRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePrioritiesApi(config);

  const body = {
    // string | The ID of the issue priority.
    id: id_example,
  } satisfies DeletePriorityRequest;

  try {
    const data = await api.deletePriority(body);
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
| **id** | `string` | The ID of the issue priority. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue priority isn\&#39;t found. |  -  |
| **409** | Returned if a task to delete the issue priority is already running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPriorities

> Array&lt;Priority&gt; getPriorities()

Get priorities

Returns the list of all issue priorities.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssuePrioritiesApi,
} from 'jira-cloud-api';
import type { GetPrioritiesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePrioritiesApi(config);

  try {
    const data = await api.getPriorities();
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

[**Array&lt;Priority&gt;**](Priority.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPriority

> Priority getPriority(id)

Get priority

Returns an issue priority.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssuePrioritiesApi,
} from 'jira-cloud-api';
import type { GetPriorityRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePrioritiesApi(config);

  const body = {
    // string | The ID of the issue priority.
    id: id_example,
  } satisfies GetPriorityRequest;

  try {
    const data = await api.getPriority(body);
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
| **id** | `string` | The ID of the issue priority. | [Defaults to `undefined`] |

### Return type

[**Priority**](Priority.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if the issue priority isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## movePriorities

> any movePriorities(reorderIssuePriorities)

Move priorities

Changes the order of issue priorities.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssuePrioritiesApi,
} from 'jira-cloud-api';
import type { MovePrioritiesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePrioritiesApi(config);

  const body = {
    // ReorderIssuePriorities
    reorderIssuePriorities: {"after":"10003","ids":["10004","10005"]},
  } satisfies MovePrioritiesRequest;

  try {
    const data = await api.movePriorities(body);
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
| **reorderIssuePriorities** | [ReorderIssuePriorities](ReorderIssuePriorities.md) |  | |

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
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue priority isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchPriorities

> PageBeanPriority searchPriorities(startAt, maxResults, id, projectId, priorityName, onlyDefault, expand)

Search priorities

Returns a [paginated](#pagination) list of priorities. The list can contain all priorities or a subset determined by any combination of these criteria:   *  a list of priority IDs. Any invalid priority IDs are ignored.  *  a list of project IDs. Only priorities that are available in these projects will be returned. Any invalid project IDs are ignored.  *  whether the field configuration is a default. This returns priorities from company-managed (classic) projects only, as there is no concept of default priorities in team-managed projects.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssuePrioritiesApi,
} from 'jira-cloud-api';
import type { SearchPrioritiesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePrioritiesApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Array<string> | The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=2&id=3`. (optional)
    id: ...,
    // Array<string> | The list of projects IDs. To include multiple IDs, provide an ampersand-separated list. For example, `projectId=10010&projectId=10111`. (optional)
    projectId: ...,
    // string | The name of priority to search for. (optional)
    priorityName: priorityName_example,
    // boolean | Whether only the default priority is returned. (optional)
    onlyDefault: true,
    // string | Use `schemes` to return the associated priority schemes for each priority. Limited to returning first 15 priority schemes per priority. (optional)
    expand: expand_example,
  } satisfies SearchPrioritiesRequest;

  try {
    const data = await api.searchPriorities(body);
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
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **id** | `Array<string>` | The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;2&amp;id&#x3D;3&#x60;. | [Optional] |
| **projectId** | `Array<string>` | The list of projects IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;projectId&#x3D;10010&amp;projectId&#x3D;10111&#x60;. | [Optional] |
| **priorityName** | `string` | The name of priority to search for. | [Optional] [Defaults to `&#39;&#39;`] |
| **onlyDefault** | `boolean` | Whether only the default priority is returned. | [Optional] [Defaults to `false`] |
| **expand** | `string` | Use &#x60;schemes&#x60; to return the associated priority schemes for each priority. Limited to returning first 15 priority schemes per priority. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**PageBeanPriority**](PageBeanPriority.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDefaultPriority

> any setDefaultPriority(setDefaultPriorityRequest)

Set default priority

Sets default issue priority.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssuePrioritiesApi,
} from 'jira-cloud-api';
import type { SetDefaultPriorityOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePrioritiesApi(config);

  const body = {
    // SetDefaultPriorityRequest
    setDefaultPriorityRequest: {"id":"3"},
  } satisfies SetDefaultPriorityOperationRequest;

  try {
    const data = await api.setDefaultPriority(body);
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
| **setDefaultPriorityRequest** | [SetDefaultPriorityRequest](SetDefaultPriorityRequest.md) |  | |

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
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue priority isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePriority

> any updatePriority(id, updatePriorityDetails)

Update priority

Updates an issue priority.  At least one request body parameter must be defined.  Deprecation applies to iconUrl param in request body which will be sunset on 16th Mar 2025. For more details refer to [changelog](https://developer.atlassian.com/changelog/#CHANGE-1525).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssuePrioritiesApi,
} from 'jira-cloud-api';
import type { UpdatePriorityRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePrioritiesApi(config);

  const body = {
    // string | The ID of the issue priority.
    id: id_example,
    // UpdatePriorityDetails
    updatePriorityDetails: {"description":"My updated priority description","iconUrl":"images/icons/priorities/minor.png","name":"My updated priority","statusColor":"#123456"},
  } satisfies UpdatePriorityRequest;

  try {
    const data = await api.updatePriority(body);
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
| **id** | `string` | The ID of the issue priority. | [Defaults to `undefined`] |
| **updatePriorityDetails** | [UpdatePriorityDetails](UpdatePriorityDetails.md) |  | |

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
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue priority isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

