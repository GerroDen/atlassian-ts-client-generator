# AppDataRetrievalAPIApi

All URIs are relative to *http://your-site.atlassian.net/rest/atlassian-connect/1/migration*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMigrationObjectUsingGET**](AppDataRetrievalAPIApi.md#getmigrationobjectusingget) | **GET** /data/{s3Key} | Get app data export signed URL |
| [**getUploadeds3KeysUsingGET**](AppDataRetrievalAPIApi.md#getuploadeds3keysusingget) | **GET** /data/{transferId}/all | Get list of app data exports |



## getMigrationObjectUsingGET

> GetMigrationObjectUsingGET200Response getMigrationObjectUsingGET(s3Key)

Get app data export signed URL

Returns an object containing a signed url to retrieve app data

### Example

```ts
import {
  Configuration,
  AppDataRetrievalAPIApi,
} from 'migration-api';
import type { GetMigrationObjectUsingGETRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new AppDataRetrievalAPIApi();

  const body = {
    // string | s3Key
    s3Key: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetMigrationObjectUsingGETRequest;

  try {
    const data = await api.getMigrationObjectUsingGET(body);
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
| **s3Key** | `string` | s3Key | [Defaults to `undefined`] |

### Return type

[**GetMigrationObjectUsingGET200Response**](GetMigrationObjectUsingGET200Response.md)

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
| **403** | - Transfer doesn\&#39;t exist or transfer is settled; or the time limit to make requests for the transfer has expired. - Forbidden  |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUploadeds3KeysUsingGET

> Array&lt;UploadedDataDto&gt; getUploadeds3KeysUsingGET(transferId)

Get list of app data exports

Returns all uploaded data keys for a transferId

### Example

```ts
import {
  Configuration,
  AppDataRetrievalAPIApi,
} from 'migration-api';
import type { GetUploadeds3KeysUsingGETRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new AppDataRetrievalAPIApi();

  const body = {
    // string | transferId
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetUploadeds3KeysUsingGETRequest;

  try {
    const data = await api.getUploadeds3KeysUsingGET(body);
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

[**Array&lt;UploadedDataDto&gt;**](UploadedDataDto.md)

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
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

