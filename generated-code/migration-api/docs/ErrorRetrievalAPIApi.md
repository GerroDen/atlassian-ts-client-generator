# ErrorRetrievalAPIApi

All URIs are relative to *http://your-site.atlassian.net/rest/atlassian-connect/1/migration*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetchServerSideExceptionUsingGET**](ErrorRetrievalAPIApi.md#fetchserversideexceptionusingget) | **GET** /error/{transferId} | Fetch server side error |



## fetchServerSideExceptionUsingGET

> TransferErrorDto fetchServerSideExceptionUsingGET(transferId)

Fetch server side error

**Note: This feature is available for app migrations using CCMA v3.3.7 and JCMA v1.7.2 onwards.**  Retrieves details of the exception thrown from your server side listener method &#x60;onStartAppMigration&#x60; 

### Example

```ts
import {
  Configuration,
  ErrorRetrievalAPIApi,
} from 'migration-api';
import type { FetchServerSideExceptionUsingGETRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ErrorRetrievalAPIApi();

  const body = {
    // string | transferId
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies FetchServerSideExceptionUsingGETRequest;

  try {
    const data = await api.fetchServerSideExceptionUsingGET(body);
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

### Return type

[**TransferErrorDto**](TransferErrorDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | - Time limit to make requests using transferId has expired - Bad request  |  -  |
| **401** | Unauthorized |  -  |
| **403** | - Transfer doesn\&#39;t exist or transfer is settled; or the time limit to make requests for the transfer has expired. - Forbidden  |  -  |
| **404** | - No errors associated with the given transfer - Not Found  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

