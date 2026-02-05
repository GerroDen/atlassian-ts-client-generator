# ApiTokensApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersAccountIdManageApiTokensGet**](ApiTokensApi.md#usersaccountidmanageapitokensget) | **GET** /users/{account_id}/manage/api-tokens | Get API tokens |
| [**usersAccountIdManageApiTokensTokenIdDelete**](ApiTokensApi.md#usersaccountidmanageapitokenstokeniddelete) | **DELETE** /users/{account_id}/manage/api-tokens/{tokenId} | Delete API token |



## usersAccountIdManageApiTokensGet

> Array&lt;ApiTokenModel&gt; usersAccountIdManageApiTokensGet(accountId)

Get API tokens

Gets the API tokens owned by the specified user.

### Example

```ts
import {
  Configuration,
  ApiTokensApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageApiTokensGetRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiTokensApi(config);

  const body = {
    // string | The ID of the user
    accountId: accountId_example,
  } satisfies UsersAccountIdManageApiTokensGetRequest;

  try {
    const data = await api.usersAccountIdManageApiTokensGet(body);
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
| **accountId** | `string` | The ID of the user | [Defaults to `undefined`] |

### Return type

[**Array&lt;ApiTokenModel&gt;**](ApiTokenModel.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | The request body was malformed or a field violated its constraints.  |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but do not have the authority to take this action.  |  -  |
| **404** | The requested resource does not exist. |  -  |
| **429** | Rate limited due to too many requests. For more information, see [Rate limiting](https://developer.atlassian.com/cloud/jira/platform/rate-limiting/). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersAccountIdManageApiTokensTokenIdDelete

> usersAccountIdManageApiTokensTokenIdDelete(accountId, tokenId)

Delete API token

Deletes a specifid API token by ID.

### Example

```ts
import {
  Configuration,
  ApiTokensApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageApiTokensTokenIdDeleteRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ApiTokensApi(config);

  const body = {
    // string | The ID of the user
    accountId: accountId_example,
    // string | The ID of the API token
    tokenId: fake-tokenId,
  } satisfies UsersAccountIdManageApiTokensTokenIdDeleteRequest;

  try {
    const data = await api.usersAccountIdManageApiTokensTokenIdDelete(body);
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
| **accountId** | `string` | The ID of the user | [Defaults to `undefined`] |
| **tokenId** | `string` | The ID of the API token | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The API token was deleted |  -  |
| **400** | The request body was malformed or a field violated its constraints.  |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but do not have the authority to take this action.  |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

