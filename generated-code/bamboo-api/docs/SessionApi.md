# SessionApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**invalidateUserSessions**](SessionApi.md#invalidateusersessions) | **DELETE** /admin/latest/session/{name} |  |



## invalidateUserSessions

> invalidateUserSessions(name, user)



Invalidate active sessions of the given user

### Example

```ts
import {
  Configuration,
  SessionApi,
} from 'bamboo-api';
import type { InvalidateUserSessionsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new SessionApi();

  const body = {
    // string
    name: name_example,
    // string | Username
    user: user_example,
  } satisfies InvalidateUserSessionsRequest;

  try {
    const data = await api.invalidateUserSessions(body);
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
| **name** | `string` |  | [Defaults to `undefined`] |
| **user** | `string` | Username | [Defaults to `undefined`] |

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
| **204** | Requested user sessions have been invalidated |  -  |
| **403** | Requesting user has no ADMINISTRATION permissions |  -  |
| **404** | Requested user not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

