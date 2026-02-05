# ProjectKeyAndNameValidationApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getValidProjectKey**](ProjectKeyAndNameValidationApi.md#getvalidprojectkey) | **GET** /rest/api/3/projectvalidate/validProjectKey | Get valid project key |
| [**getValidProjectName**](ProjectKeyAndNameValidationApi.md#getvalidprojectname) | **GET** /rest/api/3/projectvalidate/validProjectName | Get valid project name |
| [**validateProjectKey**](ProjectKeyAndNameValidationApi.md#validateprojectkey) | **GET** /rest/api/3/projectvalidate/key | Validate project key |



## getValidProjectKey

> string getValidProjectKey(key)

Get valid project key

Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  ProjectKeyAndNameValidationApi,
} from 'jira-cloud-api';
import type { GetValidProjectKeyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectKeyAndNameValidationApi(config);

  const body = {
    // string | The project key. (optional)
    key: HSP,
  } satisfies GetValidProjectKeyRequest;

  try {
    const data = await api.getValidProjectKey(body);
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
| **key** | `string` | The project key. | [Optional] [Defaults to `undefined`] |

### Return type

**string**

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


## getValidProjectName

> string getValidProjectName(name)

Get valid project name

Checks that a project name isn\&#39;t in use. If the name isn\&#39;t in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  ProjectKeyAndNameValidationApi,
} from 'jira-cloud-api';
import type { GetValidProjectNameRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectKeyAndNameValidationApi(config);

  const body = {
    // string | The project name.
    name: name_example,
  } satisfies GetValidProjectNameRequest;

  try {
    const data = await api.getValidProjectName(body);
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
| **name** | `string` | The project name. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if a valid project name cannot be generated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateProjectKey

> ErrorCollection validateProjectKey(key)

Validate project key

Validates a project key by confirming the key is a valid string and not in use.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  ProjectKeyAndNameValidationApi,
} from 'jira-cloud-api';
import type { ValidateProjectKeyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectKeyAndNameValidationApi(config);

  const body = {
    // string | The project key. (optional)
    key: HSP,
  } satisfies ValidateProjectKeyRequest;

  try {
    const data = await api.validateProjectKey(body);
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
| **key** | `string` | The project key. | [Optional] [Defaults to `undefined`] |

### Return type

[**ErrorCollection**](ErrorCollection.md)

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

