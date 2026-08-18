# ContentSecurityPolicyApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**settings**](ContentSecurityPolicyApi.md#settings) | **PUT** /csp/latest/settings | Change CSP strictness setting |



## settings

> settings(restCspSettings)

Change CSP strictness setting

Change the Content-Security-Policy header that is returned on all Bitbucket responses between \&quot;Content-Security-Policy\&quot; and \&quot;Content-Security-Policy-Report-Only\&quot;.

### Example

```ts
import {
  Configuration,
  ContentSecurityPolicyApi,
} from 'bitbucket-api';
import type { SettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ContentSecurityPolicyApi();

  const body = {
    // RestCspSettings (optional)
    restCspSettings: ...,
  } satisfies SettingsRequest;

  try {
    const data = await api.settings(body);
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
| **restCspSettings** | [RestCspSettings](RestCspSettings.md) |  | [Optional] |

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
| **204** | Setting updated |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

