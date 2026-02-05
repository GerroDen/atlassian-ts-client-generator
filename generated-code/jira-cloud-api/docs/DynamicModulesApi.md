# DynamicModulesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**dynamicModulesResourceGetModulesGet**](DynamicModulesApi.md#dynamicmodulesresourcegetmodulesget) | **GET** /rest/atlassian-connect/1/app/module/dynamic | Get modules |
| [**dynamicModulesResourceRegisterModulesPost**](DynamicModulesApi.md#dynamicmodulesresourceregistermodulespost) | **POST** /rest/atlassian-connect/1/app/module/dynamic | Register modules |
| [**dynamicModulesResourceRemoveModulesDelete**](DynamicModulesApi.md#dynamicmodulesresourceremovemodulesdelete) | **DELETE** /rest/atlassian-connect/1/app/module/dynamic | Remove modules |



## dynamicModulesResourceGetModulesGet

> ConnectModules dynamicModulesResourceGetModulesGet()

Get modules

Returns all modules registered dynamically by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example

```ts
import {
  Configuration,
  DynamicModulesApi,
} from 'jira-cloud-api';
import type { DynamicModulesResourceGetModulesGetRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const api = new DynamicModulesApi();

  try {
    const data = await api.dynamicModulesResourceGetModulesGet();
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

[**ConnectModules**](ConnectModules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dynamicModulesResourceRegisterModulesPost

> dynamicModulesResourceRegisterModulesPost(connectModules)

Register modules

Registers a list of modules.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example

```ts
import {
  Configuration,
  DynamicModulesApi,
} from 'jira-cloud-api';
import type { DynamicModulesResourceRegisterModulesPostRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const api = new DynamicModulesApi();

  const body = {
    // ConnectModules
    connectModules: ...,
  } satisfies DynamicModulesResourceRegisterModulesPostRequest;

  try {
    const data = await api.dynamicModulesResourceRegisterModulesPost(body);
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
| **connectModules** | [ConnectModules](ConnectModules.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if: * any of the provided modules is invalid. For example, required properties are missing. * any of the modules conflict with registered dynamic modules or modules defined in the app descriptor. For example, there are duplicate keys.  Details of the issues encountered are included in the error message. |  -  |
| **401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## dynamicModulesResourceRemoveModulesDelete

> dynamicModulesResourceRemoveModulesDelete(moduleKey)

Remove modules

Remove all or a list of modules registered by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example

```ts
import {
  Configuration,
  DynamicModulesApi,
} from 'jira-cloud-api';
import type { DynamicModulesResourceRemoveModulesDeleteRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const api = new DynamicModulesApi();

  const body = {
    // Array<string> | The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored. (optional)
    moduleKey: ...,
  } satisfies DynamicModulesResourceRemoveModulesDeleteRequest;

  try {
    const data = await api.dynamicModulesResourceRemoveModulesDelete(body);
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
| **moduleKey** | `Array<string>` | The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, &#x60;moduleKey&#x3D;dynamic-attachment-entity-property&amp;moduleKey&#x3D;dynamic-select-field&#x60;. Nonexistent keys are ignored. | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

