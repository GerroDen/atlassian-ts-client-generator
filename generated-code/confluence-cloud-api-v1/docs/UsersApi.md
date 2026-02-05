# UsersApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAnonymousUser**](UsersApi.md#getanonymoususer) | **GET** /wiki/rest/api/user/anonymous | Get anonymous user |
| [**getBulkUserLookup**](UsersApi.md#getbulkuserlookup) | **GET** /wiki/rest/api/user/bulk | Get multiple users using ids |
| [**getCurrentUser**](UsersApi.md#getcurrentuser) | **GET** /wiki/rest/api/user/current | Get current user |
| [**getGroupMembershipsForUser**](UsersApi.md#getgroupmembershipsforuser) | **GET** /wiki/rest/api/user/memberof | Get group memberships for user |
| [**getPrivacyUnsafeUserEmail**](UsersApi.md#getprivacyunsafeuseremail) | **GET** /wiki/rest/api/user/email | Get user email address |
| [**getPrivacyUnsafeUserEmailBulk**](UsersApi.md#getprivacyunsafeuseremailbulk) | **GET** /wiki/rest/api/user/email/bulk | Get user email addresses in batch |
| [**getUser**](UsersApi.md#getuser) | **GET** /wiki/rest/api/user | Get user |



## getAnonymousUser

> UserAnonymous getAnonymousUser(expand)

Get anonymous user

Returns information about how anonymous users are represented, like the profile picture and display name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'confluence-cloud-api-v1';
import type { GetAnonymousUserRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // Array<'operations'> | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do. (optional)
    expand: ...,
  } satisfies GetAnonymousUserRequest;

  try {
    const data = await api.getAnonymousUser(body);
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
| **expand** | `operations` | A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do. | [Optional] [Enum: operations] |

### Return type

[**UserAnonymous**](UserAnonymous.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the anonymous user representation is returned. |  -  |
| **403** | Returned if the calling user does not have permission to use Confluence. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkUserLookup

> BulkUserLookupArray getBulkUserLookup(accountId, expand)

Get multiple users using ids

Returns user details for the ids provided in the request. Currently this API returns a maximum of 100 results. If more than 100 account ids are passed in, then the first 100 will be returned.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'confluence-cloud-api-v1';
import type { GetBulkUserLookupRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | A list of accountId\'s of users to be returned.
    accountId: accountId_example,
    // Array<'operations' | 'personalSpace' | 'isExternalCollaborator'> | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do.   - `personalSpace` returns the user\'s personal space, if it exists.   - `isExternalCollaborator`(@deprecated) use `isGuest` instead to return whether the user is a guest. (optional)
    expand: ...,
  } satisfies GetBulkUserLookupRequest;

  try {
    const data = await api.getBulkUserLookup(body);
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
| **accountId** | `string` | A list of accountId\&#39;s of users to be returned. | [Defaults to `undefined`] |
| **expand** | `operations`, `personalSpace`, `isExternalCollaborator` | A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do.   - &#x60;personalSpace&#x60; returns the user\&#39;s personal space, if it exists.   - &#x60;isExternalCollaborator&#x60;(@deprecated) use &#x60;isGuest&#x60; instead to return whether the user is a guest. | [Optional] [Enum: operations, personalSpace, isExternalCollaborator] |

### Return type

[**BulkUserLookupArray**](BulkUserLookupArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if, the list of users is returned. |  -  |
| **403** | Returned if the calling user does not have permission to use Confluence. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCurrentUser

> User getCurrentUser(expand)

Get current user

Returns the currently logged-in user. This includes information about the user, like the display name, userKey, account ID, profile picture, and more.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'confluence-cloud-api-v1';
import type { GetCurrentUserRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // Array<'operations' | 'personalSpace' | 'isExternalCollaborator'> | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do.   - `personalSpace` returns the user\'s personal space, if it exists.   - `isExternalCollaborator`(@deprecated) see `isGuest` in response to find out whether the user is a guest. (optional)
    expand: ...,
  } satisfies GetCurrentUserRequest;

  try {
    const data = await api.getCurrentUser(body);
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
| **expand** | `operations`, `personalSpace`, `isExternalCollaborator` | A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do.   - &#x60;personalSpace&#x60; returns the user\&#39;s personal space, if it exists.   - &#x60;isExternalCollaborator&#x60;(@deprecated) see &#x60;isGuest&#x60; in response to find out whether the user is a guest. | [Optional] [Enum: operations, personalSpace, isExternalCollaborator] |

### Return type

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the current user is returned. |  -  |
| **403** | Returned if the calling user does not have permission to use Confluence. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupMembershipsForUser

> GroupArrayWithLinks getGroupMembershipsForUser(accountId, start, limit)

Get group memberships for user

Returns the groups that a user is a member of.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'confluence-cloud-api-v1';
import type { GetGroupMembershipsForUserRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
    accountId: accountId_example,
    // number | The starting index of the returned groups. (optional)
    start: 56,
    // number | The maximum number of groups to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetGroupMembershipsForUserRequest;

  try {
    const data = await api.getGroupMembershipsForUser(body);
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
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned groups. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of groups to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `200`] |

### Return type

[**GroupArrayWithLinks**](GroupArrayWithLinks.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested groups are returned. |  -  |
| **403** | Returned if the calling user does not have permission to use Confluence. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPrivacyUnsafeUserEmail

> AccountIdEmailRecord getPrivacyUnsafeUserEmail(accountId)

Get user email address

Returns a user\&#39;s email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). For Forge apps, this API only supports access via asApp() requests.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'confluence-cloud-api-v1';
import type { GetPrivacyUnsafeUserEmailRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const api = new UsersApi();

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. Required.
    accountId: accountId_example,
  } satisfies GetPrivacyUnsafeUserEmailRequest;

  try {
    const data = await api.getPrivacyUnsafeUserEmail(body);
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. Required. | [Defaults to `undefined`] |

### Return type

[**AccountIdEmailRecord**](AccountIdEmailRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested user\&#39;s email is returned. |  -  |
| **400** | Returned if the calling app is not approved to use this API. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if a user with the given accountId does not exist. |  -  |
| **501** | Indicates that the API is not currently enabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPrivacyUnsafeUserEmailBulk

> Array&lt;AccountIdEmailRecord&gt; getPrivacyUnsafeUserEmailBulk(accountId)

Get user email addresses in batch

Returns a user\&#39;s email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). For Forge apps, this API only supports access via asApp() requests.  Any accounts which are not available will not be included in the result.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'confluence-cloud-api-v1';
import type { GetPrivacyUnsafeUserEmailBulkRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const api = new UsersApi();

  const body = {
    // Array<string> | The account IDs of the users.
    accountId: ...,
  } satisfies GetPrivacyUnsafeUserEmailBulkRequest;

  try {
    const data = await api.getPrivacyUnsafeUserEmailBulk(body);
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
| **accountId** | `Array<string>` | The account IDs of the users. | |

### Return type

[**Array&lt;AccountIdEmailRecord&gt;**](AccountIdEmailRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the calling app is not approved to use this API. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **501** | Indicates that the API is not currently enabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUser

> User getUser(accountId, expand)

Get user

Returns a user. This includes information about the user, such as the display name, account ID, profile picture, and more. The information returned may be restricted by the user\&#39;s profile visibility settings.  **Note:** to add, edit, or delete users in your organization, see the [user management REST API](/cloud/admin/user-management/about/).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'confluence-cloud-api-v1';
import type { GetUserRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
    accountId: accountId_example,
    // Array<'operations' | 'personalSpace' | 'isExternalCollaborator'> | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do.   - `personalSpace` returns the user\'s personal space, if it exists.   - `isExternalCollaborator`(@deprecated) see `isGuest` in response to find out whether the user is a guest. (optional)
    expand: ...,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
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
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Defaults to `undefined`] |
| **expand** | `operations`, `personalSpace`, `isExternalCollaborator` | A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do.   - &#x60;personalSpace&#x60; returns the user\&#39;s personal space, if it exists.   - &#x60;isExternalCollaborator&#x60;(@deprecated) see &#x60;isGuest&#x60; in response to find out whether the user is a guest. | [Optional] [Enum: operations, personalSpace, isExternalCollaborator] |

### Return type

[**User**](User.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested user is returned. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the calling user does not have permission to view users. |  -  |
| **404** | Returned if a user with the given accountId does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

