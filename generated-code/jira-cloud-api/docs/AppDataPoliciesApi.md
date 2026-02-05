# AppDataPoliciesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPolicies**](AppDataPoliciesApi.md#getpolicies) | **GET** /rest/api/3/data-policy/project | Get data policy for projects |
| [**getPolicy**](AppDataPoliciesApi.md#getpolicy) | **GET** /rest/api/3/data-policy | Get data policy for the workspace |



## getPolicies

> ProjectDataPolicies getPolicies(ids)

Get data policy for projects

Returns data policies for the projects specified in the request.

### Example

```ts
import {
  Configuration,
  AppDataPoliciesApi,
} from 'jira-cloud-api';
import type { GetPoliciesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppDataPoliciesApi(config);

  const body = {
    // string | A list of project identifiers. This parameter accepts a comma-separated list. (optional)
    ids: ids_example,
  } satisfies GetPoliciesRequest;

  try {
    const data = await api.getPolicies(body);
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
| **ids** | `string` | A list of project identifiers. This parameter accepts a comma-separated list. | [Optional] [Defaults to `undefined`] |

### Return type

[**ProjectDataPolicies**](ProjectDataPolicies.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid or includes invalid or not-permitted project identifiers. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the client is not authorized to make the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPolicy

> WorkspaceDataPolicy getPolicy()

Get data policy for the workspace

Returns data policy for the workspace.

### Example

```ts
import {
  Configuration,
  AppDataPoliciesApi,
} from 'jira-cloud-api';
import type { GetPolicyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppDataPoliciesApi(config);

  try {
    const data = await api.getPolicy();
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

[**WorkspaceDataPolicy**](WorkspaceDataPolicy.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the client is not authorized to make the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

