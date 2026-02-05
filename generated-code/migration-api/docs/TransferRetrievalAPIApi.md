# TransferRetrievalAPIApi

All URIs are relative to *http://your-site.atlassian.net/rest/atlassian-connect/1/migration*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getContainersByPageUsingGET1**](TransferRetrievalAPIApi.md#getcontainersbypageusingget1) | **GET** /container/{transferId}/page | Get containers in pages |
| [**getRecentTransferUsingGET**](TransferRetrievalAPIApi.md#getrecenttransferusingget) | **GET** /transfer/recent | Get list of active transfers |



## getContainersByPageUsingGET1

> ContainerFetchResponse getContainersByPageUsingGET1(transferId, containerType, lastEntity, pageSize)

Get containers in pages

Returns containers for a given container type

### Example

```ts
import {
  Configuration,
  TransferRetrievalAPIApi,
} from 'migration-api';
import type { GetContainersByPageUsingGET1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new TransferRetrievalAPIApi();

  const body = {
    // string | transferId
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'ConfluenceSpace' | 'JiraProject' | 'Site' | type of container
    containerType: containerType_example,
    // string | lastEntity (optional)
    lastEntity: lastEntity_example,
    // number | pageSize (optional)
    pageSize: 56,
  } satisfies GetContainersByPageUsingGET1Request;

  try {
    const data = await api.getContainersByPageUsingGET1(body);
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
| **containerType** | `ConfluenceSpace`, `JiraProject`, `Site` | type of container | [Defaults to `undefined`] [Enum: ConfluenceSpace, JiraProject, Site] |
| **lastEntity** | `string` | lastEntity | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | pageSize | [Optional] [Defaults to `250`] |

### Return type

[**ContainerFetchResponse**](ContainerFetchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | - PageSize value is invalid. Minimum value is 1 and maximum value is 250 - Bad request - Time limit to make requests using transferId has expired  |  -  |
| **401** | Unauthorized |  -  |
| **403** | - Transfer doesn\&#39;t exist or transfer is settled; or the time limit to make requests for the transfer has expired. - Forbidden  |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRecentTransferUsingGET

> Array&lt;TransferMetadata&gt; getRecentTransferUsingGET()

Get list of active transfers

Returns a list of latest active transfers (upto 100) with migration details

### Example

```ts
import {
  Configuration,
  TransferRetrievalAPIApi,
} from 'migration-api';
import type { GetRecentTransferUsingGETRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new TransferRetrievalAPIApi();

  try {
    const data = await api.getRecentTransferUsingGET();
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

[**Array&lt;TransferMetadata&gt;**](TransferMetadata.md)

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

