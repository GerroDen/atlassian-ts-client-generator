# ProjectTypesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccessibleProjectTypeByKey**](ProjectTypesApi.md#getaccessibleprojecttypebykey) | **GET** /rest/api/3/project/type/{projectTypeKey}/accessible | Get accessible project type by key |
| [**getAllAccessibleProjectTypes**](ProjectTypesApi.md#getallaccessibleprojecttypes) | **GET** /rest/api/3/project/type/accessible | Get licensed project types |
| [**getAllProjectTypes**](ProjectTypesApi.md#getallprojecttypes) | **GET** /rest/api/3/project/type | Get all project types |
| [**getProjectTypeByKey**](ProjectTypesApi.md#getprojecttypebykey) | **GET** /rest/api/3/project/type/{projectTypeKey} | Get project type by key |



## getAccessibleProjectTypeByKey

> ProjectType getAccessibleProjectTypeByKey(projectTypeKey)

Get accessible project type by key

Returns a [project type](https://confluence.atlassian.com/x/Var1Nw) if it is accessible to the user.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  ProjectTypesApi,
} from 'jira-cloud-api';
import type { GetAccessibleProjectTypeByKeyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTypesApi(config);

  const body = {
    // 'software' | 'service_desk' | 'business' | 'product_discovery' | The key of the project type.
    projectTypeKey: projectTypeKey_example,
  } satisfies GetAccessibleProjectTypeByKeyRequest;

  try {
    const data = await api.getAccessibleProjectTypeByKey(body);
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
| **projectTypeKey** | `software`, `service_desk`, `business`, `product_discovery` | The key of the project type. | [Defaults to `undefined`] [Enum: software, service_desk, business, product_discovery] |

### Return type

[**ProjectType**](ProjectType.md)

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
| **404** | Returned if the project type is not accessible to the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllAccessibleProjectTypes

> Array&lt;ProjectType&gt; getAllAccessibleProjectTypes()

Get licensed project types

Returns all [project types](https://confluence.atlassian.com/x/Var1Nw) with a valid license.

### Example

```ts
import {
  Configuration,
  ProjectTypesApi,
} from 'jira-cloud-api';
import type { GetAllAccessibleProjectTypesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTypesApi(config);

  try {
    const data = await api.getAllAccessibleProjectTypes();
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

[**Array&lt;ProjectType&gt;**](ProjectType.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllProjectTypes

> Array&lt;ProjectType&gt; getAllProjectTypes()

Get all project types

Returns all [project types](https://confluence.atlassian.com/x/Var1Nw), whether or not the instance has a valid license for each type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  ProjectTypesApi,
} from 'jira-cloud-api';
import type { GetAllProjectTypesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTypesApi(config);

  try {
    const data = await api.getAllProjectTypes();
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

[**Array&lt;ProjectType&gt;**](ProjectType.md)

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


## getProjectTypeByKey

> ProjectType getProjectTypeByKey(projectTypeKey)

Get project type by key

Returns a [project type](https://confluence.atlassian.com/x/Var1Nw).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  ProjectTypesApi,
} from 'jira-cloud-api';
import type { GetProjectTypeByKeyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectTypesApi(config);

  const body = {
    // 'software' | 'service_desk' | 'business' | 'product_discovery' | The key of the project type.
    projectTypeKey: projectTypeKey_example,
  } satisfies GetProjectTypeByKeyRequest;

  try {
    const data = await api.getProjectTypeByKey(body);
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
| **projectTypeKey** | `software`, `service_desk`, `business`, `product_discovery` | The key of the project type. | [Defaults to `undefined`] [Enum: software, service_desk, business, product_discovery] |

### Return type

[**ProjectType**](ProjectType.md)

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
| **404** | Returned if the project type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

