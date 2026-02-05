# ManageApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersAccountIdManageGet**](ManageApi.md#usersaccountidmanageget) | **GET** /users/{account_id}/manage | Get user management permissions |



## usersAccountIdManageGet

> UsersAccountIdManageGet200Response usersAccountIdManageGet(accountId, privileges)

Get user management permissions

Returns the set of permissions you have for managing the specified Atlassian account

### Example

```ts
import {
  Configuration,
  ManageApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageGetRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ManageApi(config);

  const body = {
    // string | The user account to manage
    accountId: accountId_example,
    // Array<'profile' | 'profile.write' | 'profile.read' | 'email.set' | 'lifecycle.enablement' | 'lifecycle.delete' | 'apiToken.read' | 'apiToken.delete'> (optional)
    privileges: ...,
  } satisfies UsersAccountIdManageGetRequest;

  try {
    const data = await api.usersAccountIdManageGet(body);
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
| **accountId** | `string` | The user account to manage | [Defaults to `undefined`] |
| **privileges** | `profile`, `profile.write`, `profile.read`, `email.set`, `lifecycle.enablement`, `lifecycle.delete`, `apiToken.read`, `apiToken.delete` |  | [Optional] [Enum: profile, profile.write, profile.read, email.set, lifecycle.enablement, lifecycle.delete, apiToken.read, apiToken.delete] |

### Return type

[**UsersAccountIdManageGet200Response**](UsersAccountIdManageGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | You have permission to manage at least some aspect of the specified user account. Restrictions around the privileges specified are returned. - _profile_: DEPRECATED, replace by profile.write - _profile.read_: have permission to read the profile data of the user account (at GET ./profile) - _profile.write_: refers to the object mutability of the user\&#39;s profile (at PATCH ./profile) - _email.set_: have permission to set the user\&#39;s email address (at PUT ./email) - _lifecycle.enablement_: have permission to activate and deactivate the user\&#39;s account (at POST ./lifecycle/enable AND ./lifecycle/disable) - _lifecycle.delete_: have permission to delete and cancel the deletion of the user\&#39;s account (at POST ./lifecycle/delete AND ./lifecycle/cancel-delete) - _apiToken.read_: have permission to list the user\&#39;s API tokens (at GET ./api-tokens) - _apiToken.delete_: have permission to delete API tokens from the account (at DELETE ./api-tokens/{tokenId})  |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but have no permission to manage the target user.  |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

