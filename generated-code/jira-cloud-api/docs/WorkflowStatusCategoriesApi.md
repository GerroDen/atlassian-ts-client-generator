# WorkflowStatusCategoriesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getStatusCategories**](WorkflowStatusCategoriesApi.md#getstatuscategories) | **GET** /rest/api/3/statuscategory | Get all status categories |
| [**getStatusCategory**](WorkflowStatusCategoriesApi.md#getstatuscategory) | **GET** /rest/api/3/statuscategory/{idOrKey} | Get status category |



## getStatusCategories

> Array&lt;StatusCategory&gt; getStatusCategories()

Get all status categories

Returns a list of all status categories.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  WorkflowStatusCategoriesApi,
} from 'jira-cloud-api';
import type { GetStatusCategoriesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowStatusCategoriesApi(config);

  try {
    const data = await api.getStatusCategories();
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

[**Array&lt;StatusCategory&gt;**](StatusCategory.md)

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


## getStatusCategory

> StatusCategory getStatusCategory(idOrKey)

Get status category

Returns a status category. Status categories provided a mechanism for categorizing [statuses](#api-rest-api-3-status-idOrName-get).  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  WorkflowStatusCategoriesApi,
} from 'jira-cloud-api';
import type { GetStatusCategoryRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowStatusCategoriesApi(config);

  const body = {
    // string | The ID or key of the status category.
    idOrKey: idOrKey_example,
  } satisfies GetStatusCategoryRequest;

  try {
    const data = await api.getStatusCategory(body);
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
| **idOrKey** | `string` | The ID or key of the status category. | [Defaults to `undefined`] |

### Return type

[**StatusCategory**](StatusCategory.md)

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
| **404** | Returned if the status category is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

