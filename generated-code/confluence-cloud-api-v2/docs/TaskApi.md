# TaskApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTaskById**](TaskApi.md#gettaskbyid) | **GET** /tasks/{id} | Get task by id |
| [**getTasks**](TaskApi.md#gettasks) | **GET** /tasks | Get tasks |
| [**updateTask**](TaskApi.md#updatetaskoperation) | **PUT** /tasks/{id} | Update task |



## getTaskById

> Task getTaskById(id, bodyFormat)

Get task by id

Returns a specific task.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the containing page or blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  TaskApi,
} from 'confluence-cloud-api-v2';
import type { GetTaskByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TaskApi(config);

  const body = {
    // number | The ID of the task to be returned. If you don\'t know the task ID, use Get tasks and filter the results.
    id: 789,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
  } satisfies GetTaskByIdRequest;

  try {
    const data = await api.getTaskById(body);
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
| **id** | `number` | The ID of the task to be returned. If you don\&#39;t know the task ID, use Get tasks and filter the results. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |

### Return type

[**Task**](Task.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested task is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested task or the task was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTasks

> MultiEntityResultTask getTasks(bodyFormat, includeBlankTasks, status, taskId, spaceId, pageId, blogpostId, createdBy, assignedTo, completedBy, createdAtFrom, createdAtTo, dueAtFrom, dueAtTo, completedAtFrom, completedAtTo, cursor, limit)

Get tasks

Returns all tasks. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only tasks that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  TaskApi,
} from 'confluence-cloud-api-v2';
import type { GetTasksRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TaskApi(config);

  const body = {
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // boolean | Specifies whether to include blank tasks in the response. Defaults to `true`. (optional)
    includeBlankTasks: true,
    // 'complete' | 'incomplete' | Filters on the status of the task. (optional)
    status: status_example,
    // Array<number> | Filters on task ID. Multiple IDs can be specified. (optional)
    taskId: ...,
    // Array<number> | Filters on the space ID of the task. Multiple IDs can be specified. (optional)
    spaceId: ...,
    // Array<number> | Filters on the page ID of the task. Multiple IDs can be specified. Note - page and blog post filters can be used in conjunction. (optional)
    pageId: ...,
    // Array<number> | Filters on the blog post ID of the task. Multiple IDs can be specified. Note - page and blog post filters can be used in conjunction. (optional)
    blogpostId: ...,
    // Array<string> | Filters on the Account ID of the user who created this task. Multiple IDs can be specified. (optional)
    createdBy: ...,
    // Array<string> | Filters on the Account ID of the user to whom this task is assigned. Multiple IDs can be specified. (optional)
    assignedTo: ...,
    // Array<string> | Filters on the Account ID of the user who completed this task. Multiple IDs can be specified. (optional)
    completedBy: ...,
    // number | Filters on start of date-time range of task based on creation date (inclusive). Input is epoch time in milliseconds. (optional)
    createdAtFrom: 789,
    // number | Filters on end of date-time range of task based on creation date (inclusive). Input is epoch time in milliseconds. (optional)
    createdAtTo: 789,
    // number | Filters on start of date-time range of task based on due date (inclusive). Input is epoch time in milliseconds. (optional)
    dueAtFrom: 789,
    // number | Filters on end of date-time range of task based on due date (inclusive). Input is epoch time in milliseconds. (optional)
    dueAtTo: 789,
    // number | Filters on start of date-time range of task based on completion date (inclusive). Input is epoch time in milliseconds. (optional)
    completedAtFrom: 789,
    // number | Filters on end of date-time range of task based on completion date (inclusive). Input is epoch time in milliseconds. (optional)
    completedAtTo: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of tasks per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
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
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **includeBlankTasks** | `boolean` | Specifies whether to include blank tasks in the response. Defaults to &#x60;true&#x60;. | [Optional] [Defaults to `undefined`] |
| **status** | `complete`, `incomplete` | Filters on the status of the task. | [Optional] [Defaults to `undefined`] [Enum: complete, incomplete] |
| **taskId** | `Array<number>` | Filters on task ID. Multiple IDs can be specified. | [Optional] |
| **spaceId** | `Array<number>` | Filters on the space ID of the task. Multiple IDs can be specified. | [Optional] |
| **pageId** | `Array<number>` | Filters on the page ID of the task. Multiple IDs can be specified. Note - page and blog post filters can be used in conjunction. | [Optional] |
| **blogpostId** | `Array<number>` | Filters on the blog post ID of the task. Multiple IDs can be specified. Note - page and blog post filters can be used in conjunction. | [Optional] |
| **createdBy** | `Array<string>` | Filters on the Account ID of the user who created this task. Multiple IDs can be specified. | [Optional] |
| **assignedTo** | `Array<string>` | Filters on the Account ID of the user to whom this task is assigned. Multiple IDs can be specified. | [Optional] |
| **completedBy** | `Array<string>` | Filters on the Account ID of the user who completed this task. Multiple IDs can be specified. | [Optional] |
| **createdAtFrom** | `number` | Filters on start of date-time range of task based on creation date (inclusive). Input is epoch time in milliseconds. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `number` | Filters on end of date-time range of task based on creation date (inclusive). Input is epoch time in milliseconds. | [Optional] [Defaults to `undefined`] |
| **dueAtFrom** | `number` | Filters on start of date-time range of task based on due date (inclusive). Input is epoch time in milliseconds. | [Optional] [Defaults to `undefined`] |
| **dueAtTo** | `number` | Filters on end of date-time range of task based on due date (inclusive). Input is epoch time in milliseconds. | [Optional] [Defaults to `undefined`] |
| **completedAtFrom** | `number` | Filters on start of date-time range of task based on completion date (inclusive). Input is epoch time in milliseconds. | [Optional] [Defaults to `undefined`] |
| **completedAtTo** | `number` | Filters on end of date-time range of task based on completion date (inclusive). Input is epoch time in milliseconds. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of tasks per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultTask**](MultiEntityResultTask.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested tasks are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/tasks?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTask

> Task updateTask(id, updateTaskRequest, bodyFormat)

Update task

Update a task by id. This endpoint currently only supports updating task status.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the containing page or blog post and view its corresponding space.

### Example

```ts
import {
  Configuration,
  TaskApi,
} from 'confluence-cloud-api-v2';
import type { UpdateTaskOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new TaskApi(config);

  const body = {
    // number | The ID of the task to be updated. If you don\'t know the task ID, use Get tasks and filter the results.
    id: 789,
    // UpdateTaskRequest
    updateTaskRequest: ...,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
  } satisfies UpdateTaskOperationRequest;

  try {
    const data = await api.updateTask(body);
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
| **id** | `number` | The ID of the task to be updated. If you don\&#39;t know the task ID, use Get tasks and filter the results. | [Defaults to `undefined`] |
| **updateTaskRequest** | [UpdateTaskRequest](UpdateTaskRequest.md) |  | |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |

### Return type

[**Task**](Task.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested task is updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided task does not exist - The user does not have permissions to view the task - The user does not have the needed permissions to update the containing page or blog post in the corresponding space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

