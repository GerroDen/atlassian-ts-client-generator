# ProfileApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersAccountIdManageProfileGet**](ProfileApi.md#usersaccountidmanageprofileget) | **GET** /users/{account_id}/manage/profile | Get profile |
| [**usersAccountIdManageProfilePatch**](ProfileApi.md#usersaccountidmanageprofilepatch) | **PATCH** /users/{account_id}/manage/profile | Update profile |



## usersAccountIdManageProfileGet

> UsersAccountIdManageProfileGet200Response usersAccountIdManageProfileGet(accountId)

Get profile

Returns information about a single Atlassian account by ID

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageProfileGetRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProfileApi(config);

  const body = {
    // string | The ID of the user
    accountId: accountId_example,
  } satisfies UsersAccountIdManageProfileGetRequest;

  try {
    const data = await api.usersAccountIdManageProfileGet(body);
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

[**UsersAccountIdManageProfileGet200Response**](UsersAccountIdManageProfileGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | You have permission to manage the user. The profile data is returned.  |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but have no permission to manage the target user.  |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersAccountIdManageProfilePatch

> UsersAccountIdManageProfileGet200Response usersAccountIdManageProfilePatch(accountId, atlassianAccountUser)

Update profile

Updates fields in a user account. The &#x60;profile.write&#x60; privilege details which fields you can change.

### Example

```ts
import {
  Configuration,
  ProfileApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageProfilePatchRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProfileApi(config);

  const body = {
    // string | The ID of the user to update
    accountId: accountId_example,
    // AtlassianAccountUser | The information to change, a subset of the mutable fields described in the `profile.write` privilege.
    atlassianAccountUser: ...,
  } satisfies UsersAccountIdManageProfilePatchRequest;

  try {
    const data = await api.usersAccountIdManageProfilePatch(body);
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
| **accountId** | `string` | The ID of the user to update | [Defaults to `undefined`] |
| **atlassianAccountUser** | [AtlassianAccountUser](AtlassianAccountUser.md) | The information to change, a subset of the mutable fields described in the &#x60;profile.write&#x60; privilege. | |

### Return type

[**UsersAccountIdManageProfileGet200Response**](UsersAccountIdManageProfileGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | You have permission to manage the user. The profile is updated.  |  -  |
| **400** | The request body was malformed or a field violated its constraints.  |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but one of the following is true:  - You have no right to manage the target user - You do not have the authority to change one or more requested properties  |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

