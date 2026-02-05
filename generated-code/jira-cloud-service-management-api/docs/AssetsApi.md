# AssetsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAssetsWorkspaces**](AssetsApi.md#getassetsworkspaces) | **GET** /rest/servicedeskapi/assets/workspace | Get assets workspaces |
| [**getInsightWorkspaces**](AssetsApi.md#getinsightworkspaces) | **GET** /rest/servicedeskapi/insight/workspace | Get insight workspaces |



## getAssetsWorkspaces

> PagedDTOAssetsWorkspaceDTO getAssetsWorkspaces(start, limit)

Get assets workspaces

Returns a list of Assets workspace IDs. Include a workspace ID in the path to access the [Assets REST APIs](https://developer.atlassian.com/cloud/assets/rest).  **[Permissions](#permissions) required**: Any

### Example

```ts
import {
  Configuration,
  AssetsApi,
} from 'jira-cloud-service-management-api';
import type { GetAssetsWorkspacesRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AssetsApi(config);

  const body = {
    // number | The starting index of the returned workspace IDs. Base index: 0 See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of workspace IDs to return per page. Default: 50 See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
  } satisfies GetAssetsWorkspacesRequest;

  try {
    const data = await api.getAssetsWorkspaces(body);
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
| **start** | `number` | The starting index of the returned workspace IDs. Base index: 0 See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of workspace IDs to return per page. Default: 50 See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `50`] |

### Return type

[**PagedDTOAssetsWorkspaceDTO**](PagedDTOAssetsWorkspaceDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInsightWorkspaces

> PagedDTOInsightWorkspaceDTO getInsightWorkspaces(start, limit)

Get insight workspaces

This endpoint is deprecated, please use /assets/workspace/.

### Example

```ts
import {
  Configuration,
  AssetsApi,
} from 'jira-cloud-service-management-api';
import type { GetInsightWorkspacesRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AssetsApi(config);

  const body = {
    // number (optional)
    start: 56,
    // number (optional)
    limit: 56,
  } satisfies GetInsightWorkspacesRequest;

  try {
    const data = await api.getInsightWorkspaces(body);
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
| **start** | `number` |  | [Optional] [Defaults to `0`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

### Return type

[**PagedDTOInsightWorkspaceDTO**](PagedDTOInsightWorkspaceDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

