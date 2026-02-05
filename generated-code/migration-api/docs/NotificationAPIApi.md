# NotificationAPIApi

All URIs are relative to *http://your-site.atlassian.net/rest/atlassian-connect/1/migration*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWebhookUsingGET**](NotificationAPIApi.md#getwebhookusingget) | **GET** /webhook | Get all webhooks |
| [**putWebhookUsingPUT**](NotificationAPIApi.md#putwebhookusingput) | **PUT** /webhook | Update webhook |



## getWebhookUsingGET

> WebhookEndpointsDto getWebhookUsingGET()

Get all webhooks

Retrieves all the webhook endpoints for a cloud site

### Example

```ts
import {
  Configuration,
  NotificationAPIApi,
} from 'migration-api';
import type { GetWebhookUsingGETRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new NotificationAPIApi();

  try {
    const data = await api.getWebhookUsingGET();
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

[**WebhookEndpointsDto**](WebhookEndpointsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putWebhookUsingPUT

> WebhookEndpointsDto putWebhookUsingPUT(webhookEndpointsDto)

Update webhook

Replaces existing URLs with a new set of URLs provided by your cloud app to receive notifications

### Example

```ts
import {
  Configuration,
  NotificationAPIApi,
} from 'migration-api';
import type { PutWebhookUsingPUTRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new NotificationAPIApi();

  const body = {
    // WebhookEndpointsDto | Set of endpoints called after the app migration
    webhookEndpointsDto: ...,
  } satisfies PutWebhookUsingPUTRequest;

  try {
    const data = await api.putWebhookUsingPUT(body);
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
| **webhookEndpointsDto** | [WebhookEndpointsDto](WebhookEndpointsDto.md) | Set of endpoints called after the app migration | |

### Return type

[**WebhookEndpointsDto**](WebhookEndpointsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **400** | - Number of webhooks present in this request exceeds the maximum limit (5) - Invalid URL - Bad request  |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

