# IssuePanelsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkPinUnpinProjectsAsync**](IssuePanelsApi.md#bulkpinunpinprojectsasync) | **POST** /rest/api/3/forge/panel/action/bulk/async | Bulk pin or unpin issue panel to projects |



## bulkPinUnpinProjectsAsync

> ForgePanelProjectPinAsyncResponse bulkPinUnpinProjectsAsync(forgePanelProjectPinRequest)

Bulk pin or unpin issue panel to projects

Bulk pin or unpin an issue panel (added by a Forge app) to or from multiple projects.  The operation runs asynchronously. The response includes a task ID - use the [Get task](#api-rest-api-3-task-taskId-get) endpoint to check progress.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssuePanelsApi,
} from 'jira-cloud-api';
import type { BulkPinUnpinProjectsAsyncRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePanelsApi(config);

  const body = {
    // ForgePanelProjectPinRequest | Forge module ID and the list of projects with pin or unpin action.
    forgePanelProjectPinRequest: ...,
  } satisfies BulkPinUnpinProjectsAsyncRequest;

  try {
    const data = await api.bulkPinUnpinProjectsAsync(body);
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
| **forgePanelProjectPinRequest** | [ForgePanelProjectPinRequest](ForgePanelProjectPinRequest.md) | Forge module ID and the list of projects with pin or unpin action. | |

### Return type

[**ForgePanelProjectPinAsyncResponse**](ForgePanelProjectPinAsyncResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Accepted. Returns the task ID for polling progress. |  -  |
| **400** | Returned if the request body is invalid. |  -  |
| **403** | Returned if the user does not have permission to administer Jira. |  -  |
| **500** | Returned if the task could not be submitted (server error). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

