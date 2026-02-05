# DynamicModulesApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getModules**](DynamicModulesApi.md#getmodules) | **GET** /wiki/rest/atlassian-connect/1/app/module/dynamic | Get modules |
| [**registerModules**](DynamicModulesApi.md#registermodules) | **POST** /wiki/rest/atlassian-connect/1/app/module/dynamic | Register modules |
| [**removeModules**](DynamicModulesApi.md#removemodules) | **DELETE** /wiki/rest/atlassian-connect/1/app/module/dynamic | Remove modules |



## getModules

> ConnectModules getModules()

Get modules

Returns all modules registered dynamically by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example

```ts
import {
  Configuration,
  DynamicModulesApi,
} from 'confluence-cloud-api-v1';
import type { GetModulesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const api = new DynamicModulesApi();

  try {
    const data = await api.getModules();
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
- **Accept**: `*/*`, `message`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerModules

> registerModules(body)

Register modules

Registers a list of modules. For the list of modules that support dynamic registration, see [Dynamic modules](https://developer.atlassian.com/cloud/confluence/dynamic-modules/).  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example

```ts
import {
  Configuration,
  DynamicModulesApi,
} from 'confluence-cloud-api-v1';
import type { RegisterModulesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const api = new DynamicModulesApi();

  const body = {
    // ConnectModules
    body: ...,
  } satisfies RegisterModulesRequest;

  try {
    const data = await api.registerModules(body);
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
| **body** | [ConnectModules](ConnectModules.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `message`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if: * any of the provided modules is invalid. For example, required properties are missing. * any of the modules conflict with registered dynamic modules or modules defined in the app descriptor. For example, there are duplicate keys.  Details of the issues encountered are included in the error message. |  -  |
| **401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeModules

> removeModules(moduleKey)

Remove modules

Remove all or a list of modules registered by the calling app.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example

```ts
import {
  Configuration,
  DynamicModulesApi,
} from 'confluence-cloud-api-v1';
import type { RemoveModulesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const api = new DynamicModulesApi();

  const body = {
    // Array<string> | The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored.
    moduleKey: ...,
  } satisfies RemoveModulesRequest;

  try {
    const data = await api.removeModules(body);
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
| **moduleKey** | `Array<string>` | The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, &#x60;moduleKey&#x3D;dynamic-attachment-entity-property&amp;moduleKey&#x3D;dynamic-select-field&#x60;. Nonexistent keys are ignored. | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `message`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the call is not from a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

