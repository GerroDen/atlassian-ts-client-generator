# LifecycleApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersAccountIdManageLifecycleCancelDeletePost**](LifecycleApi.md#usersaccountidmanagelifecyclecanceldeletepost) | **POST** /users/{account_id}/manage/lifecycle/cancel-delete | Cancel delete account |
| [**usersAccountIdManageLifecycleDeletePost**](LifecycleApi.md#usersaccountidmanagelifecycledeletepost) | **POST** /users/{account_id}/manage/lifecycle/delete | Delete account |
| [**usersAccountIdManageLifecycleDisablePost**](LifecycleApi.md#usersaccountidmanagelifecycledisablepostoperation) | **POST** /users/{account_id}/manage/lifecycle/disable | Deactivate a user |
| [**usersAccountIdManageLifecycleEnablePost**](LifecycleApi.md#usersaccountidmanagelifecycleenablepost) | **POST** /users/{account_id}/manage/lifecycle/enable | Activate a user |



## usersAccountIdManageLifecycleCancelDeletePost

> ResultMessage usersAccountIdManageLifecycleCancelDeletePost(accountId)

Cancel delete account

This API will:  - Cancel the scheduled deletion of the specified managed account.  - Restore and activate the user’s account.    Specifications:  - You can cancel the deletion within the 14-day grace period of deleting a managed account. After that the account is permanently deleted.    The permission to make use of this resource is exposed by the &#x60;lifecycle.delete&#x60; privilege. Learn more about [Get user management permissions API](https://developer.atlassian.com/cloud/admin/user-management/rest/api-group-manage/#api-users-account-id-manage-get) to manage the specified user. 

### Example

```ts
import {
  Configuration,
  LifecycleApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageLifecycleCancelDeletePostRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LifecycleApi(config);

  const body = {
    // string | Unique ID of the user\'s account that you are deleting. Use the [Get users in an organization API](https://developer.atlassian.com/cloud/admin/organization/rest/api-group-users/#api-orgs-orgid-users-get) to get the accountId. 
    accountId: accountId_example,
  } satisfies UsersAccountIdManageLifecycleCancelDeletePostRequest;

  try {
    const data = await api.usersAccountIdManageLifecycleCancelDeletePost(body);
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
| **accountId** | `string` | Unique ID of the user\&#39;s account that you are deleting. Use the [Get users in an organization API](https://developer.atlassian.com/cloud/admin/organization/rest/api-group-users/#api-orgs-orgid-users-get) to get the accountId.  | [Defaults to `undefined`] |

### Return type

[**ResultMessage**](ResultMessage.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but do not have the authority to take this action.  |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersAccountIdManageLifecycleDeletePost

> ResultMessage usersAccountIdManageLifecycleDeletePost(accountId)

Delete account

This API will: - Delete a managed account from Atlassian Administration. - Withdraw complete access to all products and services listed in Atlassian Administration. - Remove reference to the account from all lists under Directory in Atlassian Administration.  Specifications: - Deleting an account is permanent. If you think you’ll need the account again, we recommend you [deactivate](https://support.atlassian.com/user-management/docs/deactivate-a-managed-account/) it instead. - Before you permanently delete the account, you’ll have a 14-day grace period, during which the account will appear as temporarily deactivated.  Learn more about [deleting a managed account](https://support.atlassian.com/user-management/docs/delete-a-managed-account/).  Learn the fastest way to get the paramaters and delete account with a detailed [tutorial](https://developer.atlassian.com/cloud/admin/user-management/delete-managed-account/#delete-account).   The permission to make use of this resource is exposed by the &#x60;lifecycle.delete&#x60; privilege. Learn more about [Get user management permissions API](https://developer.atlassian.com/cloud/admin/user-management/rest/api-group-manage/#api-users-account-id-manage-get) to manage the specified user. 

### Example

```ts
import {
  Configuration,
  LifecycleApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageLifecycleDeletePostRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LifecycleApi(config);

  const body = {
    // string | Unique ID of the user\'s account that you are deleting. Use the [Get users in an organization API](https://developer.atlassian.com/cloud/admin/organization/rest/api-group-users/#api-orgs-orgid-users-get) to get the accountId. 
    accountId: accountId_example,
  } satisfies UsersAccountIdManageLifecycleDeletePostRequest;

  try {
    const data = await api.usersAccountIdManageLifecycleDeletePost(body);
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
| **accountId** | `string` | Unique ID of the user\&#39;s account that you are deleting. Use the [Get users in an organization API](https://developer.atlassian.com/cloud/admin/organization/rest/api-group-users/#api-orgs-orgid-users-get) to get the accountId.  | [Defaults to `undefined`] |

### Return type

[**ResultMessage**](ResultMessage.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but do not have the authority to take this action.  |  -  |
| **404** | The requested resource does not exist. |  -  |
| **409** | This account isn\&#39;t eligible for the requested action  See: https://confluence.atlassian.com/x/pTgoPQ for details  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersAccountIdManageLifecycleDisablePost

> usersAccountIdManageLifecycleDisablePost(accountId, usersAccountIdManageLifecycleDisablePostRequest)

Deactivate a user

 Deactivate (block) the specified user account from logging into Atlassian. The permission to make use of this resource is exposed by the &#x60;lifecycle.enablement&#x60; privilege. You can optionally set a message associated with the block. If none is supplied, a default message will be used. 

### Example

```ts
import {
  Configuration,
  LifecycleApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageLifecycleDisablePostOperationRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LifecycleApi(config);

  const body = {
    // string | The ID of the user 
    accountId: accountId_example,
    // UsersAccountIdManageLifecycleDisablePostRequest | An object containing a message 
    usersAccountIdManageLifecycleDisablePostRequest: ...,
  } satisfies UsersAccountIdManageLifecycleDisablePostOperationRequest;

  try {
    const data = await api.usersAccountIdManageLifecycleDisablePost(body);
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
| **accountId** | `string` | The ID of the user  | [Defaults to `undefined`] |
| **usersAccountIdManageLifecycleDisablePostRequest** | [UsersAccountIdManageLifecycleDisablePostRequest](UsersAccountIdManageLifecycleDisablePostRequest.md) | An object containing a message  | |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Everything went fine, nothing to return. |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but do not have the authority to take this action.  |  -  |
| **404** | The requested resource does not exist. |  -  |
| **409** | This account isn\&#39;t eligible for the requested action  See: https://confluence.atlassian.com/x/pTgoPQ for details  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersAccountIdManageLifecycleEnablePost

> usersAccountIdManageLifecycleEnablePost(accountId)

Activate a user

Activates the specified user account. The permission to make use of this resource is exposed by the &#x60;lifecycle.enablement&#x60; privilege.  User accounts that were deactivated due to US export controls cannot be reactivated using this API. If you believe the account was incorrectly blocked, please contact [Atlassian Support](https://support.atlassian.com/contact).  User accounts that have been deleted need the deletion to be canceled before reactivating. 

### Example

```ts
import {
  Configuration,
  LifecycleApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageLifecycleEnablePostRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LifecycleApi(config);

  const body = {
    // string | The unique identifier of the user to activate. 
    accountId: accountId_example,
  } satisfies UsersAccountIdManageLifecycleEnablePostRequest;

  try {
    const data = await api.usersAccountIdManageLifecycleEnablePost(body);
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
| **accountId** | `string` | The unique identifier of the user to activate.  | [Defaults to `undefined`] |

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
| **204** | Everything went fine, nothing to return. |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but do not have the authority to take this action.  |  -  |
| **404** | The requested resource does not exist. |  -  |
| **409** | This account isn\&#39;t eligible for the requested action  See: https://confluence.atlassian.com/x/pTgoPQ for details  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

