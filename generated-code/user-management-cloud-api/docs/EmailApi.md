# EmailApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**usersAccountIdManageEmailPut**](EmailApi.md#usersaccountidmanageemailputoperation) | **PUT** /users/{account_id}/manage/email | Set email  |



## usersAccountIdManageEmailPut

> usersAccountIdManageEmailPut(accountId, usersAccountIdManageEmailPutRequest)

Set email 

Sets the specified user\&#39;s email address. Before using this endpoint, you must [verify the target domain](https://confluence.atlassian.com/x/gjcWN) as the new email address will be considered verified. The permission to make use of this resource is exposed by the &#x60;email.set&#x60; privilege. This call invalidates all active sessions. 

### Example

```ts
import {
  Configuration,
  EmailApi,
} from 'user-management-cloud-api';
import type { UsersAccountIdManageEmailPutOperationRequest } from 'user-management-cloud-api';

async function example() {
  console.log("🚀 Testing user-management-cloud-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EmailApi(config);

  const body = {
    // string | The ID of the user 
    accountId: accountId_example,
    // UsersAccountIdManageEmailPutRequest | An object containing the email address 
    usersAccountIdManageEmailPutRequest: ...,
  } satisfies UsersAccountIdManageEmailPutOperationRequest;

  try {
    const data = await api.usersAccountIdManageEmailPut(body);
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
| **usersAccountIdManageEmailPutRequest** | [UsersAccountIdManageEmailPutRequest](UsersAccountIdManageEmailPutRequest.md) | An object containing the email address  | |

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
| **400** | The request body was malformed or a field violated its constraints.  |  -  |
| **401** | You are unauthenticated. |  -  |
| **403** | You are authenticated but one of the following is true:  - You do not have the authority to manage the user - You do not have the authority to take the action - You do not have authority over a specified domain  |  -  |
| **404** | The requested resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

