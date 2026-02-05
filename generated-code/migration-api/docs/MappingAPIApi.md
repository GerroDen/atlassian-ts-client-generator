# MappingAPIApi

All URIs are relative to *http://your-site.atlassian.net/rest/atlassian-connect/1/migration*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findByNamespaceAndKeysUsingPOST1**](MappingAPIApi.md#findbynamespaceandkeysusingpost1) | **POST** /mapping/{transferId}/find | Get mappings by keys |
| [**getMigrationContextForNamespaceUsingGET1**](MappingAPIApi.md#getmigrationcontextfornamespaceusingget1) | **GET** /mapping/{transferId}/page | Get mappings in pages |



## findByNamespaceAndKeysUsingPOST1

> MigrationMappingItem findByNamespaceAndKeysUsingPOST1(namespace, transferId, requestBody)

Get mappings by keys

Retrieves mappings for a specific namespace filtering by the keys provided on the payload

### Example

```ts
import {
  Configuration,
  MappingAPIApi,
} from 'migration-api';
import type { FindByNamespaceAndKeysUsingPOST1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new MappingAPIApi();

  const body = {
    // string | Namespace, a list of valid [namespaces](/platform/app-migration/mappings/#mappings-namespaces-and-entities)
    namespace: namespace_example,
    // string | Transfer ID as UUID
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Array<string> | keys
    requestBody: ...,
  } satisfies FindByNamespaceAndKeysUsingPOST1Request;

  try {
    const data = await api.findByNamespaceAndKeysUsingPOST1(body);
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
| **namespace** | `string` | Namespace, a list of valid [namespaces](/platform/app-migration/mappings/#mappings-namespaces-and-entities) | [Defaults to `undefined`] |
| **transferId** | `string` | Transfer ID as UUID | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` | keys | |

### Return type

[**MigrationMappingItem**](MigrationMappingItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | - List contains null or empty values - Bad request  |  -  |
| **401** | Unauthorized |  -  |
| **403** | - Transfer doesn\&#39;t exist or transfer is settled; or the time limit to make requests for the transfer has expired. - Forbidden  |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMigrationContextForNamespaceUsingGET1

> MigrationMappingDto getMigrationContextForNamespaceUsingGET1(transferId, namespace, lastEntity, pageSize)

Get mappings in pages

Returns mappings for a given namespace

### Example

```ts
import {
  Configuration,
  MappingAPIApi,
} from 'migration-api';
import type { GetMigrationContextForNamespaceUsingGET1Request } from 'migration-api';

async function example() {
  console.log("🚀 Testing migration-api SDK...");
  const api = new MappingAPIApi();

  const body = {
    // string | transferId
    transferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Namespace, a list of valid [namespaces](/platform/app-migration/mappings/#mappings-namespaces-and-entities)
    namespace: namespace_example,
    // string | lastEntity (optional)
    lastEntity: lastEntity_example,
    // number | pageSize (optional)
    pageSize: 56,
  } satisfies GetMigrationContextForNamespaceUsingGET1Request;

  try {
    const data = await api.getMigrationContextForNamespaceUsingGET1(body);
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
| **namespace** | `string` | Namespace, a list of valid [namespaces](/platform/app-migration/mappings/#mappings-namespaces-and-entities) | [Defaults to `undefined`] |
| **lastEntity** | `string` | lastEntity | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | pageSize | [Optional] [Defaults to `5000`] |

### Return type

[**MigrationMappingDto**](MigrationMappingDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | - PageSize value is invalid. - Bad request  |  -  |
| **401** | Unauthorized |  -  |
| **403** | - Transfer doesn\&#39;t exist or transfer is settled; or the time limit to make requests for the transfer has expired. - Forbidden  |  -  |
| **404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

