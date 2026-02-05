# SystemInformationApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSystemInfo**](SystemInformationApi.md#getsysteminfo) | **GET** /admin/latest/systemInfo |  |



## getSystemInfo

> SystemStatusInfo getSystemInfo()



Read system information.

### Example

```ts
import {
  Configuration,
  SystemInformationApi,
} from 'bamboo-api';
import type { GetSystemInfoRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new SystemInformationApi();

  try {
    const data = await api.getSystemInfo();
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

[**SystemStatusInfo**](SystemStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The system information |  -  |
| **401** | Authentication required. |  -  |
| **403** | If the user lacks permissions to see system information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

