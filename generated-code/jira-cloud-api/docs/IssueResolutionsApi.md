# IssueResolutionsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createResolution**](IssueResolutionsApi.md#createresolution) | **POST** /rest/api/3/resolution | Create resolution |
| [**deleteResolution**](IssueResolutionsApi.md#deleteresolution) | **DELETE** /rest/api/3/resolution/{id} | Delete resolution |
| [**getResolution**](IssueResolutionsApi.md#getresolution) | **GET** /rest/api/3/resolution/{id} | Get resolution |
| [**getResolutions**](IssueResolutionsApi.md#getresolutions) | **GET** /rest/api/3/resolution | Get resolutions |
| [**moveResolutions**](IssueResolutionsApi.md#moveresolutions) | **PUT** /rest/api/3/resolution/move | Move resolutions |
| [**searchResolutions**](IssueResolutionsApi.md#searchresolutions) | **GET** /rest/api/3/resolution/search | Search resolutions |
| [**setDefaultResolution**](IssueResolutionsApi.md#setdefaultresolutionoperation) | **PUT** /rest/api/3/resolution/default | Set default resolution |
| [**updateResolution**](IssueResolutionsApi.md#updateresolution) | **PUT** /rest/api/3/resolution/{id} | Update resolution |



## createResolution

> ResolutionId createResolution(createResolutionDetails)

Create resolution

Creates an issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueResolutionsApi,
} from 'jira-cloud-api';
import type { CreateResolutionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueResolutionsApi(config);

  const body = {
    // CreateResolutionDetails
    createResolutionDetails: {"description":"My resolution description","name":"My new resolution"},
  } satisfies CreateResolutionRequest;

  try {
    const data = await api.createResolution(body);
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
| **createResolutionDetails** | [CreateResolutionDetails](CreateResolutionDetails.md) |  | |

### Return type

[**ResolutionId**](ResolutionId.md)

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


## deleteResolution

> deleteResolution(id, replaceWith)

Delete resolution

Deletes an issue resolution.  This operation is [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueResolutionsApi,
} from 'jira-cloud-api';
import type { DeleteResolutionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueResolutionsApi(config);

  const body = {
    // string | The ID of the issue resolution.
    id: id_example,
    // string | The ID of the issue resolution that will replace the currently selected resolution.
    replaceWith: replaceWith_example,
  } satisfies DeleteResolutionRequest;

  try {
    const data = await api.deleteResolution(body);
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
| **id** | `string` | The ID of the issue resolution. | [Defaults to `undefined`] |
| **replaceWith** | `string` | The ID of the issue resolution that will replace the currently selected resolution. | [Defaults to `&#39;&#39;`] |

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
| **404** | Returned if the issue resolution isn\&#39;t found. |  -  |
| **409** | Returned if a task to delete the issue resolution is already running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getResolution

> Resolution getResolution(id)

Get resolution

Returns an issue resolution value.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueResolutionsApi,
} from 'jira-cloud-api';
import type { GetResolutionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueResolutionsApi(config);

  const body = {
    // string | The ID of the issue resolution value.
    id: id_example,
  } satisfies GetResolutionRequest;

  try {
    const data = await api.getResolution(body);
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
| **id** | `string` | The ID of the issue resolution value. | [Defaults to `undefined`] |

### Return type

[**Resolution**](Resolution.md)

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
| **404** | Returned if the issue resolution value is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getResolutions

> Array&lt;Resolution&gt; getResolutions()

Get resolutions

Returns a list of all issue resolution values.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueResolutionsApi,
} from 'jira-cloud-api';
import type { GetResolutionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueResolutionsApi(config);

  try {
    const data = await api.getResolutions();
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

[**Array&lt;Resolution&gt;**](Resolution.md)

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


## moveResolutions

> any moveResolutions(reorderIssueResolutionsRequest)

Move resolutions

Changes the order of issue resolutions.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueResolutionsApi,
} from 'jira-cloud-api';
import type { MoveResolutionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueResolutionsApi(config);

  const body = {
    // ReorderIssueResolutionsRequest
    reorderIssueResolutionsRequest: {"after":"10002","ids":["10000","10001"]},
  } satisfies MoveResolutionsRequest;

  try {
    const data = await api.moveResolutions(body);
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
| **reorderIssueResolutionsRequest** | [ReorderIssueResolutionsRequest](ReorderIssueResolutionsRequest.md) |  | |

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
| **404** | Returned if the issue resolution isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchResolutions

> PageBeanResolutionJsonBean searchResolutions(startAt, maxResults, id, onlyDefault)

Search resolutions

Returns a [paginated](#pagination) list of resolutions. The list can contain all resolutions or a subset determined by any combination of these criteria:   *  a list of resolutions IDs.  *  whether the field configuration is a default. This returns resolutions from company-managed (classic) projects only, as there is no concept of default resolutions in team-managed projects.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueResolutionsApi,
} from 'jira-cloud-api';
import type { SearchResolutionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueResolutionsApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Array<string> | The list of resolutions IDs to be filtered out (optional)
    id: ...,
    // boolean | When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false (optional)
    onlyDefault: true,
  } satisfies SearchResolutionsRequest;

  try {
    const data = await api.searchResolutions(body);
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
| **id** | `Array<string>` | The list of resolutions IDs to be filtered out | [Optional] |
| **onlyDefault** | `boolean` | When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false | [Optional] [Defaults to `false`] |

### Return type

[**PageBeanResolutionJsonBean**](PageBeanResolutionJsonBean.md)

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


## setDefaultResolution

> any setDefaultResolution(setDefaultResolutionRequest)

Set default resolution

Sets default issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueResolutionsApi,
} from 'jira-cloud-api';
import type { SetDefaultResolutionOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueResolutionsApi(config);

  const body = {
    // SetDefaultResolutionRequest
    setDefaultResolutionRequest: {"id":"3"},
  } satisfies SetDefaultResolutionOperationRequest;

  try {
    const data = await api.setDefaultResolution(body);
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
| **setDefaultResolutionRequest** | [SetDefaultResolutionRequest](SetDefaultResolutionRequest.md) |  | |

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
| **404** | Returned if the issue resolution isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateResolution

> any updateResolution(id, updateResolutionDetails)

Update resolution

Updates an issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueResolutionsApi,
} from 'jira-cloud-api';
import type { UpdateResolutionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueResolutionsApi(config);

  const body = {
    // string | The ID of the issue resolution.
    id: id_example,
    // UpdateResolutionDetails
    updateResolutionDetails: {"description":"My updated resolution description","name":"My updated resolution"},
  } satisfies UpdateResolutionRequest;

  try {
    const data = await api.updateResolution(body);
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
| **id** | `string` | The ID of the issue resolution. | [Defaults to `undefined`] |
| **updateResolutionDetails** | [UpdateResolutionDetails](UpdateResolutionDetails.md) |  | |

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
| **404** | Returned if the issue resolution isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

