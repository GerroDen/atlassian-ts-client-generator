# ServiceRegistryApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**serviceRegistryResourceServicesGet**](ServiceRegistryApi.md#serviceregistryresourceservicesget) | **GET** /rest/atlassian-connect/1/service-registry | Retrieve the attributes of service registries |



## serviceRegistryResourceServicesGet

> Array&lt;ServiceRegistry&gt; serviceRegistryResourceServicesGet(serviceIds)

Retrieve the attributes of service registries

Retrieve the attributes of given service registries.  **[Permissions](#permissions) required:** Only Connect apps can make this request and the servicesIds belong to the tenant you are requesting

### Example

```ts
import {
  Configuration,
  ServiceRegistryApi,
} from 'jira-cloud-api';
import type { ServiceRegistryResourceServicesGetRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const api = new ServiceRegistryApi();

  const body = {
    // Array<string> | The ID of the services (the strings starting with \"b:\" need to be decoded in Base64).
    serviceIds: ["ari:cloud:graph::service/ca075ed7-6ea7-4563-acb3-000000000000/f51d7252-61e0-11ee-b94d-000000000000", "ari:cloud:graph::service/ca075ed7-6ea7-4563-acb3-000000000000/f51d7252-61e0-11ee-b94d-000000000001"],
  } satisfies ServiceRegistryResourceServicesGetRequest;

  try {
    const data = await api.serviceRegistryResourceServicesGet(body);
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
| **serviceIds** | `Array<string>` | The ID of the services (the strings starting with \&quot;b:\&quot; need to be decoded in Base64). | |

### Return type

[**Array&lt;ServiceRegistry&gt;**](ServiceRegistry.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | The request needs to be authenticated. |  -  |
| **403** | The request isn\&#39;t authorized. |  -  |
| **500** | The endpoint failed internally. |  -  |
| **501** | The endpoint isn\&#39;t ready for receiving requests. |  -  |
| **504** | The upstream service is busy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

