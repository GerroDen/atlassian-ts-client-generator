# AdminKeyApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**disableAdminKey**](AdminKeyApi.md#disableadminkey) | **DELETE** /admin-key | Disable Admin Key |
| [**enableAdminKey**](AdminKeyApi.md#enableadminkeyoperation) | **POST** /admin-key | Enable Admin Key |
| [**getAdminKey**](AdminKeyApi.md#getadminkey) | **GET** /admin-key | Get Admin Key |



## disableAdminKey

> disableAdminKey()

Disable Admin Key

Disables admin key access for the calling user within the site.  **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**: User must be an organization or site admin.

### Example

```ts
import {
  Configuration,
  AdminKeyApi,
} from 'confluence-cloud-api-v2';
import type { DisableAdminKeyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const api = new AdminKeyApi();

  try {
    const data = await api.disableAdminKey();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if admin key access was successfully disabled for the calling user or if the user did not have an admin key in the first place. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to use admin keys or if the site is not a Confluence Cloud Premium or Enterprise instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableAdminKey

> AdminKeyResponse enableAdminKey(enableAdminKeyRequest)

Enable Admin Key

Enables admin key access for the calling user within the site. If an admin key already exists for the user, a new one will be issued with an updated expiration time.  **Note:** The &#x60;durationInMinutes&#x60; field within the request body is optional. If the request body is empty or if the &#x60;durationInMinutes&#x60; is set to 0 minutes, a new admin key will be issued to the calling user with a default duration of 10 minutes.  **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**: User must be an organization or site admin.

### Example

```ts
import {
  Configuration,
  AdminKeyApi,
} from 'confluence-cloud-api-v2';
import type { EnableAdminKeyOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const api = new AdminKeyApi();

  const body = {
    // EnableAdminKeyRequest (optional)
    enableAdminKeyRequest: ...,
  } satisfies EnableAdminKeyOperationRequest;

  try {
    const data = await api.enableAdminKey(body);
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
| **enableAdminKeyRequest** | [EnableAdminKeyRequest](EnableAdminKeyRequest.md) |  | [Optional] |

### Return type

[**AdminKeyResponse**](AdminKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if a new admin key is successfully issued for the calling user. |  -  |
| **400** | Returned if the request body contains an invalid &#x60;durationInMinutes&#x60;. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to use admin keys or if the site is not a Confluence Cloud Premium or Enterprise instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdminKey

> AdminKeyResponse getAdminKey()

Get Admin Key

Returns information about the admin key if one is currently enabled for the calling user within the site.  **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**: User must be an organization or site admin.

### Example

```ts
import {
  Configuration,
  AdminKeyApi,
} from 'confluence-cloud-api-v2';
import type { GetAdminKeyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const api = new AdminKeyApi();

  try {
    const data = await api.getAdminKey();
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

[**AdminKeyResponse**](AdminKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if an admin key is currently enabled for the calling user. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not currently have an admin key, if the calling user does not have permission to use admin keys, or if the site is not a Confluence Cloud Premium or Enterprise instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

