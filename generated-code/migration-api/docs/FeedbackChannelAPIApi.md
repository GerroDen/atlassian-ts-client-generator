# FeedbackChannelAPIApi

All URIs are relative to *http://your-site.atlassian.net/rest/atlassian-connect/1/migration*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**receiveFeedbackUsingPOST**](FeedbackChannelAPIApi.md#receivefeedbackusingpost) | **POST** /feedback/{transferId} | Send information to server app |



## receiveFeedbackUsingPOST

> receiveFeedbackUsingPOST(transferId, cloudFeedback)

Send information to server app

Feeds the app migration listener back with basic info coming from cloud

### Example

```ts
import {
  Configuration,
  FeedbackChannelAPIApi,
} from 'migration-api';
import type { ReceiveFeedbackUsingPOSTRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new FeedbackChannelAPIApi();

  const body = {
    // string | transferId
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CloudFeedback | cloudFeedback
    cloudFeedback: ...,
  } satisfies ReceiveFeedbackUsingPOSTRequest;

  try {
    const data = await api.receiveFeedbackUsingPOST(body);
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
| **transferId** | `string` | transferId | [Defaults to `undefined`] |
| **cloudFeedback** | [CloudFeedback](CloudFeedback.md) | cloudFeedback | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **400** | - Time limit to make requests using transferId has expired - Bad request  |  -  |
| **401** | Unauthorized |  -  |
| **403** | - Transfer doesn\&#39;t exist or transfer is settled; or the time limit to make requests for the transfer has expired. - Forbidden  |  -  |
| **404** | - No feedback using transferId has been sent via cloud app - Not Found  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

