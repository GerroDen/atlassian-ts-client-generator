# ForgeResourceApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addLog1**](ForgeResourceApi.md#addlog1) | **POST** /app/migration/forge/v1/log/{transferId} | Add log message from the Forge App |
| [**findByNamespaceAndKeys2**](ForgeResourceApi.md#findbynamespaceandkeys2) | **POST** /app/migration/forge/v1/mapping/{transferId}/find | Find mappings by namespace |
| [**getAppData2**](ForgeResourceApi.md#getappdata2) | **GET** /app/migration/forge/v1/data/{fileKey} | Returns an object containing a signed url to retrieve app data |
| [**getAppDataPayload1**](ForgeResourceApi.md#getappdatapayload1) | **GET** /app/migration/forge/v1/data/{fileKey}/payload | Retrieves app data for given file key |
| [**getContainersForTransferIdByPage1**](ForgeResourceApi.md#getcontainersfortransferidbypage1) | **GET** /app/migration/forge/v1/container/{transferId}/page | Returns containers for a given transferId and container Type |
| [**getMapping1**](ForgeResourceApi.md#getmapping1) | **GET** /app/migration/forge/v1/mapping/{transferId}/page | Returns paginated mappings for a given namespace |
| [**getUploadedFiles1**](ForgeResourceApi.md#getuploadedfiles1) | **GET** /app/migration/forge/v1/data/{transferId}/all | Returns all uploaded file keys for a transfer Id |
| [**getUploadedFilesPaginated**](ForgeResourceApi.md#getuploadedfilespaginated) | **GET** /app/migration/forge/v1/data/{transferId}/page | Returns uploaded file metadata for a transfer Id in a paginated format |
| [**setMessageProgress1**](ForgeResourceApi.md#setmessageprogress1) | **POST** /app/migration/forge/v1/message/{transferId}/status | Update message status |



## addLog1

> addLog1(transferId, forgeAppLog)

Add log message from the Forge App

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { AddLog1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string | Transfer ID as UUID
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ForgeAppLog
    forgeAppLog: ...,
  } satisfies AddLog1Request;

  try {
    const data = await api.addLog1(body);
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
| **transferId** | `string` | Transfer ID as UUID | [Defaults to `undefined`] |
| **forgeAppLog** | [ForgeAppLog](ForgeAppLog.md) |  | |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findByNamespaceAndKeys2

> { [key: string]: string; } findByNamespaceAndKeys2(transferId, namespace, requestBody)

Find mappings by namespace

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { FindByNamespaceAndKeys2Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string | Transfer ID as UUID
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Namespace
    namespace: namespace_example,
    // Set<string>
    requestBody: ...,
  } satisfies FindByNamespaceAndKeys2Request;

  try {
    const data = await api.findByNamespaceAndKeys2(body);
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
| **transferId** | `string` | Transfer ID as UUID | [Defaults to `undefined`] |
| **namespace** | `string` | Namespace | [Defaults to `undefined`] |
| **requestBody** | `Set<string>` |  | |

### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAppData2

> { [key: string]: string; } getAppData2(fileKey)

Returns an object containing a signed url to retrieve app data

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { GetAppData2Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string
    fileKey: fileKey_example,
  } satisfies GetAppData2Request;

  try {
    const data = await api.getAppData2(body);
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
| **fileKey** | `string` |  | [Defaults to `undefined`] |

### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAppDataPayload1

> Blob getAppDataPayload1(fileKey)

Retrieves app data for given file key

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { GetAppDataPayload1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string
    fileKey: fileKey_example,
  } satisfies GetAppDataPayload1Request;

  try {
    const data = await api.getAppDataPayload1(body);
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
| **fileKey** | `string` |  | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContainersForTransferIdByPage1

> ContainerByPageResponse getContainersForTransferIdByPage1(transferId, containerType, lastEntity, pageSize)

Returns containers for a given transferId and container Type

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { GetContainersForTransferIdByPage1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string | Transfer ID as UUID
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'JiraProject' | 'ConfluenceSpace' | 'Site' | Container Type
    containerType: containerType_example,
    // string | The last entity from the previous page (optional)
    lastEntity: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Size of each returning page (optional)
    pageSize: 56,
  } satisfies GetContainersForTransferIdByPage1Request;

  try {
    const data = await api.getContainersForTransferIdByPage1(body);
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
| **transferId** | `string` | Transfer ID as UUID | [Defaults to `undefined`] |
| **containerType** | `JiraProject`, `ConfluenceSpace`, `Site` | Container Type | [Defaults to `undefined`] [Enum: JiraProject, ConfluenceSpace, Site] |
| **lastEntity** | `string` | The last entity from the previous page | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Size of each returning page | [Optional] [Defaults to `250`] |

### Return type

[**ContainerByPageResponse**](ContainerByPageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMapping1

> MigrationMappingDto getMapping1(transferId, namespace, lastEntity, pageSize)

Returns paginated mappings for a given namespace

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { GetMapping1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    namespace: namespace_example,
    // string | The last entity from the previous page (optional)
    lastEntity: lastEntity_example,
    // number | Size of each returning page (optional)
    pageSize: 56,
  } satisfies GetMapping1Request;

  try {
    const data = await api.getMapping1(body);
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
| **transferId** | `string` |  | [Defaults to `undefined`] |
| **namespace** | `string` |  | [Defaults to `undefined`] |
| **lastEntity** | `string` | The last entity from the previous page | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Size of each returning page | [Optional] [Defaults to `1200`] |

### Return type

[**MigrationMappingDto**](MigrationMappingDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUploadedFiles1

> Set&lt;ForgeFileMappingDto&gt; getUploadedFiles1(transferId)

Returns all uploaded file keys for a transfer Id

**Deprecated**: This endpoint loads all file mappings into memory without pagination, which can cause out-of-memory errors for large transfers. Use &#x60;/app/migration/forge/v1/data/{transferId}/page&#x60; instead.

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { GetUploadedFiles1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetUploadedFiles1Request;

  try {
    const data = await api.getUploadedFiles1(body);
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
| **transferId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Set&lt;ForgeFileMappingDto&gt;**](ForgeFileMappingDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUploadedFilesPaginated

> ForgeFileMetadataDtoPage getUploadedFilesPaginated(transferId, lastEvaluatedKey, pageSize)

Returns uploaded file metadata for a transfer Id in a paginated format

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { GetUploadedFilesPaginatedRequest } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string | Transfer ID as UUID
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | The last key from the previous page, used as a cursor for pagination (optional)
    lastEvaluatedKey: lastEvaluatedKey_example,
    // number | Number of items to return per page. Minimum: 1, Maximum: 1000. (optional)
    pageSize: 56,
  } satisfies GetUploadedFilesPaginatedRequest;

  try {
    const data = await api.getUploadedFilesPaginated(body);
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
| **transferId** | `string` | Transfer ID as UUID | [Defaults to `undefined`] |
| **lastEvaluatedKey** | `string` | The last key from the previous page, used as a cursor for pagination | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Number of items to return per page. Minimum: 1, Maximum: 1000. | [Optional] [Defaults to `undefined`] |

### Return type

[**ForgeFileMetadataDtoPage**](ForgeFileMetadataDtoPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Feature gate disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setMessageProgress1

> setMessageProgress1(transferId, messageProgress)

Update message status

### Example

```ts
import {
  Configuration,
  ForgeResourceApi,
} from 'migration-api';
import type { SetMessageProgress1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new ForgeResourceApi();

  const body = {
    // string | Transfer ID as UUID
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // MessageProgress
    messageProgress: ...,
  } satisfies SetMessageProgress1Request;

  try {
    const data = await api.setMessageProgress1(body);
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
| **transferId** | `string` | Transfer ID as UUID | [Defaults to `undefined`] |
| **messageProgress** | [MessageProgress](MessageProgress.md) |  | |

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

