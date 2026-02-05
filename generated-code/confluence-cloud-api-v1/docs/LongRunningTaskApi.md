# LongRunningTaskApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTask**](LongRunningTaskApi.md#gettask) | **GET** /wiki/rest/api/longtask/{id} | Get long-running task |
| [**getTasks**](LongRunningTaskApi.md#gettasks) | **GET** /wiki/rest/api/longtask | Get long-running tasks |



## getTask

> LongTaskStatusWithLinks getTask(id)

Get long-running task

Returns information about an active long-running task (e.g. space export), such as how long it has been running and the percentage of the task that has completed.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  LongRunningTaskApi,
} from 'confluence-cloud-api-v1';
import type { GetTaskRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new LongRunningTaskApi(config);

  const body = {
    // string | The ID of the task.
    id: id_example,
  } satisfies GetTaskRequest;

  try {
    const data = await api.getTask(body);
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
| **id** | `string` | The ID of the task. | [Defaults to `undefined`] |

### Return type

[**LongTaskStatusWithLinks**](LongTaskStatusWithLinks.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested task is returned. |  -  |
| **401** | Returned if the calling user is not logged in to Confluence. |  -  |
| **404** | Returned if;  - There is no task with the given ID. - The calling user does not have permission to view the task. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTasks

> LongTaskStatusArray getTasks(key, start, limit)

Get long-running tasks

Returns information about all active long-running tasks (e.g. space export), such as how long each task has been running and the percentage of each task that has completed.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  LongRunningTaskApi,
} from 'confluence-cloud-api-v1';
import type { GetTasksRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new LongRunningTaskApi(config);

  const body = {
    // string | The key of the tasks. (optional)
    key: key_example,
    // number | The starting index of the returned tasks. (optional)
    start: 56,
    // number | The maximum number of tasks to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetTasksRequest;

  try {
    const data = await api.getTasks(body);
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
| **key** | `string` | The key of the tasks. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned tasks. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of tasks to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `100`] |

### Return type

[**LongTaskStatusArray**](LongTaskStatusArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested tasks are returned. |  -  |
| **401** | Returned if the calling user is not logged in to Confluence. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

