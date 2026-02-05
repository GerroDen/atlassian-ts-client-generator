# CapabilitiesApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCapabilities**](CapabilitiesApi.md#getcapabilities) | **GET** /api/latest/build/capabilities | Get build capabilities |
| [**getCapabilities1**](CapabilitiesApi.md#getcapabilities1) | **GET** /api/latest/deployment/capabilities | Get deployment capabilities |



## getCapabilities

> RestBuildCapabilities getCapabilities()

Get build capabilities

Returns the build capabilities of this instance

### Example

```ts
import {
  Configuration,
  CapabilitiesApi,
} from 'bitbucket-api';
import type { GetCapabilitiesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new CapabilitiesApi();

  try {
    const data = await api.getCapabilities();
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

[**RestBuildCapabilities**](RestBuildCapabilities.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | capabilities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCapabilities1

> getCapabilities1()

Get deployment capabilities

Returns the Deployment capabilities of this instance

### Example

```ts
import {
  Configuration,
  CapabilitiesApi,
} from 'bitbucket-api';
import type { GetCapabilities1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new CapabilitiesApi();

  try {
    const data = await api.getCapabilities1();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | capabilities |  -  |
| **404** | This instance of Bitbucket Data Center does not support deployments (for example, it has been disabled using the property \&#39;plugin.deployment.capability.disabled\&#39;). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

