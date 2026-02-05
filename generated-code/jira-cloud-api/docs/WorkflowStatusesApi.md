# WorkflowStatusesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getStatus**](WorkflowStatusesApi.md#getstatus) | **GET** /rest/api/3/status/{idOrName} | Get status |
| [**getStatuses**](WorkflowStatusesApi.md#getstatuses) | **GET** /rest/api/3/status | Get all statuses |



## getStatus

> StatusDetails getStatus(idOrName)

Get status

Returns a status. The status must be associated with an active workflow to be returned.  If a name is used on more than one status, only the status found first is returned. Therefore, identifying the status by its ID may be preferable.  This operation can be accessed anonymously.  [Permissions](#permissions) required: *Browse projects* [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) for the project.

### Example

```ts
import {
  Configuration,
  WorkflowStatusesApi,
} from 'jira-cloud-api';
import type { GetStatusRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowStatusesApi(config);

  const body = {
    // string | The ID or name of the status.
    idOrName: idOrName_example,
  } satisfies GetStatusRequest;

  try {
    const data = await api.getStatus(body);
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
| **idOrName** | `string` | The ID or name of the status. | [Defaults to `undefined`] |

### Return type

[**StatusDetails**](StatusDetails.md)

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
| **404** | Returned if:   *  the status is not found.  *  the status is not associated with a workflow.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatuses

> Array&lt;StatusDetails&gt; getStatuses()

Get all statuses

Returns a list of all statuses associated with active workflows.  This operation can be accessed anonymously.  [Permissions](#permissions) required: *Browse projects* [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) for the project.

### Example

```ts
import {
  Configuration,
  WorkflowStatusesApi,
} from 'jira-cloud-api';
import type { GetStatusesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowStatusesApi(config);

  try {
    const data = await api.getStatuses();
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

[**Array&lt;StatusDetails&gt;**](StatusDetails.md)

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

