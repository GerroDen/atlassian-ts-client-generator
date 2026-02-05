# TriggersApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**scheduleChangeDetection**](TriggersApi.md#schedulechangedetection) | **POST** /triggers/latest/remote/changeDetection |  |



## scheduleChangeDetection

> scheduleChangeDetection(planKey, skipBranches)



Schedule change detection

### Example

```ts
import {
  Configuration,
  TriggersApi,
} from 'bamboo-api';
import type { ScheduleChangeDetectionRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new TriggersApi();

  const body = {
    // string | The chain or branch to trigger
    planKey: planKey_example,
    // boolean | by default, the change detection will run for all branches. If this parameter is set to true, the change detection will run only for the chain (optional)
    skipBranches: true,
  } satisfies ScheduleChangeDetectionRequest;

  try {
    const data = await api.scheduleChangeDetection(body);
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
| **planKey** | `string` | The chain or branch to trigger | [Defaults to `undefined`] |
| **skipBranches** | `boolean` | by default, the change detection will run for all branches. If this parameter is set to true, the change detection will run only for the chain | [Optional] [Defaults to `undefined`] |

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
| **400** | Plan key not specified. |  -  |
| **403** | Building has been disabled. |  -  |
| **404** | Could not find the plan. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

