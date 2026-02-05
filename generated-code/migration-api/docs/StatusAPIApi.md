# StatusAPIApi

All URIs are relative to *http://your-site.atlassian.net/rest/atlassian-connect/1/migration*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**setProgressUsingPOST**](StatusAPIApi.md#setprogressusingpost) | **POST** /progress/{transferId} | Send migration progress |



## setProgressUsingPOST

> ProgressEndpointDto setProgressUsingPOST(transferId, progressEndpointDto)

Send migration progress

Updates migration status for a given transfer ID.    When you  [implement the listener interface](/platform/app-migration/prepare-server-app/) in your server app, your cloud app **must** use this operation to:    - Report progress on your app migration so that admin users can monitor it in the Cloud Migration Assistant.    - Settle the transfer at the end of your migration by updating its status to &#x60;SUCCESS&#x60;, &#x60;INCOMPLETE&#x60;, or &#x60;FAILED&#x60; so that admin users know it\&#39;s finished.    Once a transfer is settled, subsequent requests for that transfer ID return an HTTP 403 error.

### Example

```ts
import {
  Configuration,
  StatusAPIApi,
} from 'migration-api';
import type { SetProgressUsingPOSTRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new StatusAPIApi();

  const body = {
    // string | Identifies the transfer. The app migration platform generates a unique transfer ID for each migration listener.    Transfer IDs are published in app migration notification events, for example, the `listener-triggered` event.
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ProgressEndpointDto | progressEndpointDto
    progressEndpointDto: ...,
  } satisfies SetProgressUsingPOSTRequest;

  try {
    const data = await api.setProgressUsingPOST(body);
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
| **transferId** | `string` | Identifies the transfer. The app migration platform generates a unique transfer ID for each migration listener.    Transfer IDs are published in app migration notification events, for example, the &#x60;listener-triggered&#x60; event. | [Defaults to `undefined`] |
| **progressEndpointDto** | [ProgressEndpointDto](ProgressEndpointDto.md) | progressEndpointDto | |

### Return type

[**ProgressEndpointDto**](ProgressEndpointDto.md)

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
| **400** | - Time limit to make requests using transferId has expired - Bad request - Percent value should be in between 0 to 100 - Field status can not be null  |  -  |
| **401** | Unauthorized |  -  |
| **403** | - Transfer doesn\&#39;t exist or transfer is settled; or the time limit to make requests for the transfer has expired. - Forbidden  |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

