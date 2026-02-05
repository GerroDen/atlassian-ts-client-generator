# TrustedKeysManagementApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**_delete**](TrustedKeysManagementApi.md#_delete) | **DELETE** /admin/latest/security/trustedKey/{id} |  |
| [**create**](TrustedKeysManagementApi.md#create) | **POST** /admin/latest/security/trustedKey |  |
| [**findAll**](TrustedKeysManagementApi.md#findall) | **GET** /admin/latest/security/trustedKey |  |



## _delete

> _delete(id)



Delete trusted key.

### Example

```ts
import {
  Configuration,
  TrustedKeysManagementApi,
} from 'bamboo-api';
import type { DeleteRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new TrustedKeysManagementApi();

  const body = {
    // string | ID of the trusted key to delete
    id: id_example,
  } satisfies DeleteRequest;

  try {
    const data = await api._delete(body);
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
| **id** | `string` | ID of the trusted key to delete | [Defaults to `undefined`] |

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
| **204** | Trusted key has been successfully deleted |  -  |
| **401** | Authentication required. |  -  |
| **403** | The currently authenticated user does not have sufficient permissions. |  -  |
| **404** | Trusted keys feature is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## create

> RestTrustedKey create(restTrustedKey)



Create new trusted key.

### Example

```ts
import {
  Configuration,
  TrustedKeysManagementApi,
} from 'bamboo-api';
import type { CreateRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new TrustedKeysManagementApi();

  const body = {
    // RestTrustedKey | Trusted key to add
    restTrustedKey: ...,
  } satisfies CreateRequest;

  try {
    const data = await api.create(body);
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
| **restTrustedKey** | [RestTrustedKey](RestTrustedKey.md) | Trusted key to add | |

### Return type

[**RestTrustedKey**](RestTrustedKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trusted key has been successfully added |  -  |
| **401** | Authentication required. |  -  |
| **403** | The currently authenticated user does not have sufficient permissions. |  -  |
| **404** | Trusted keys feature is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAll

> Array&lt;RestTrustedKey&gt; findAll()



Get all trusted keys.

### Example

```ts
import {
  Configuration,
  TrustedKeysManagementApi,
} from 'bamboo-api';
import type { FindAllRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new TrustedKeysManagementApi();

  try {
    const data = await api.findAll();
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

[**Array&lt;RestTrustedKey&gt;**](RestTrustedKey.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of trusted keys. |  -  |
| **401** | Authentication required. |  -  |
| **403** | The currently authenticated user does not have sufficient permissions. |  -  |
| **404** | Trusted keys feature is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

