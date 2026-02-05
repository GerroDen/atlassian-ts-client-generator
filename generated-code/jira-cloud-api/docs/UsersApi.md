# UsersApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkGetUsers**](UsersApi.md#bulkgetusers) | **GET** /rest/api/3/user/bulk | Bulk get users |
| [**bulkGetUsersMigration**](UsersApi.md#bulkgetusersmigration) | **GET** /rest/api/3/user/bulk/migration | Get account IDs for users |
| [**createUser**](UsersApi.md#createuser) | **POST** /rest/api/3/user | Create user |
| [**getAllUsers**](UsersApi.md#getallusers) | **GET** /rest/api/3/users/search | Get all users |
| [**getAllUsersDefault**](UsersApi.md#getallusersdefault) | **GET** /rest/api/3/users | Get all users default |
| [**getUser**](UsersApi.md#getuser) | **GET** /rest/api/3/user | Get user |
| [**getUserDefaultColumns**](UsersApi.md#getuserdefaultcolumns) | **GET** /rest/api/3/user/columns | Get user default columns |
| [**getUserEmail**](UsersApi.md#getuseremail) | **GET** /rest/api/3/user/email | Get user email |
| [**getUserEmailBulk**](UsersApi.md#getuseremailbulk) | **GET** /rest/api/3/user/email/bulk | Get user email bulk |
| [**getUserGroups**](UsersApi.md#getusergroups) | **GET** /rest/api/3/user/groups | Get user groups |
| [**removeUser**](UsersApi.md#removeuser) | **DELETE** /rest/api/3/user | Delete user |
| [**resetUserColumns**](UsersApi.md#resetusercolumns) | **DELETE** /rest/api/3/user/columns | Reset user default columns |
| [**setUserColumns**](UsersApi.md#setusercolumns) | **PUT** /rest/api/3/user/columns | Set user default columns |



## bulkGetUsers

> PageBeanUser bulkGetUsers(accountId, startAt, maxResults, username, key)

Bulk get users

Returns a [paginated](#pagination) list of the users specified by one or more account IDs.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { BulkGetUsersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // Array<string> | The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`.
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Array<string> | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: ...,
    // Array<string> | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: ...,
  } satisfies BulkGetUsersRequest;

  try {
    const data = await api.bulkGetUsers(body);
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
| **accountId** | `Array<string>` | The account ID of a user. To specify multiple users, pass multiple &#x60;accountId&#x60; parameters. For example, &#x60;accountId&#x3D;5b10a2844c20165700ede21g&amp;accountId&#x3D;5b10ac8d82e05b22cc7d4ef5&#x60;. | |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `10`] |
| **username** | `Array<string>` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] |
| **key** | `Array<string>` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] |

### Return type

[**PageBeanUser**](PageBeanUser.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if &#x60;accountID&#x60; is missing. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkGetUsersMigration

> Array&lt;UserMigrationBean&gt; bulkGetUsersMigration(startAt, maxResults, username, key)

Get account IDs for users

Returns the account IDs for the users specified in the &#x60;key&#x60; or &#x60;username&#x60; parameters. Note that multiple &#x60;key&#x60; or &#x60;username&#x60; parameters can be specified.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { BulkGetUsersMigrationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Array<string> | Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn\'t provided. Cannot be provided if `key` is present. (optional)
    username: ...,
    // Array<string> | Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn\'t provided. Cannot be provided if `username` is present. (optional)
    key: ...,
  } satisfies BulkGetUsersMigrationRequest;

  try {
    const data = await api.bulkGetUsersMigration(body);
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
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `10`] |
| **username** | `Array<string>` | Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, &#x60;username&#x3D;fred&amp;username&#x3D;barney&#x60;. Required if &#x60;key&#x60; isn\&#39;t provided. Cannot be provided if &#x60;key&#x60; is present. | [Optional] |
| **key** | `Array<string>` | Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, &#x60;key&#x3D;fred&amp;key&#x3D;barney&#x60;. Required if &#x60;username&#x60; isn\&#39;t provided. Cannot be provided if &#x60;username&#x60; is present. | [Optional] |

### Return type

[**Array&lt;UserMigrationBean&gt;**](UserMigrationBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if &#x60;key&#x60; or &#x60;username&#x60; |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createUser

> User createUser(newUserDetails)

Create user

Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated.  **Note:** This API does not support Forge apps.  If the user exists and has access to Jira, the operation returns a 201 status. If the user exists but does not have access to Jira, the operation returns a 400 status.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). The caller has to be an **organization admin**.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { CreateUserRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // NewUserDetails | Details about the user to be created.
    newUserDetails: {"emailAddress":"mia@atlassian.com","products":["jira-software"]},
  } satisfies CreateUserRequest;

  try {
    const data = await api.createUser(body);
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
| **newUserDetails** | [NewUserDetails](NewUserDetails.md) | Details about the user to be created. | |

### Return type

[**User**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid or the number of licensed users is exceeded. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllUsers

> Array&lt;User&gt; getAllUsers(startAt, maxResults)

Get all users

Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account.  Privacy controls are applied to the response based on the users\&#39; preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { GetAllUsersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // number | The index of the first item to return. (optional)
    startAt: 56,
    // number | The maximum number of items to return (limited to 1000). (optional)
    maxResults: 56,
  } satisfies GetAllUsersRequest;

  try {
    const data = await api.getAllUsers(body);
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
| **startAt** | `number` | The index of the first item to return. | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return (limited to 1000). | [Optional] [Defaults to `50`] |

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **409** | Returned if the request takes longer than 10 seconds or is interrupted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllUsersDefault

> Array&lt;User&gt; getAllUsersDefault(startAt, maxResults)

Get all users default

Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account.  Privacy controls are applied to the response based on the users\&#39; preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { GetAllUsersDefaultRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // number | The index of the first item to return. (optional)
    startAt: 56,
    // number | The maximum number of items to return (limited to 1000). (optional)
    maxResults: 56,
  } satisfies GetAllUsersDefaultRequest;

  try {
    const data = await api.getAllUsersDefault(body);
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
| **startAt** | `number` | The index of the first item to return. | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return (limited to 1000). | [Optional] [Defaults to `50`] |

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **409** | Returned if the request takes longer than 10 seconds or is interrupted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUser

> User getUser(accountId, username, key, expand)

Get user

Returns a user.  Privacy controls are applied to the response based on the user\&#39;s preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { GetUserRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. (optional)
    username: username_example,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. (optional)
    key: key_example,
    // string | Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` includes all groups and nested groups to which the user belongs.  *  `applicationRoles` includes details of all the applications to which the user has access. (optional)
    expand: expand_example,
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. | [Optional] [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;groups&#x60; includes all groups and nested groups to which the user belongs.  *  &#x60;applicationRoles&#x60; includes details of all the applications to which the user has access. | [Optional] [Defaults to `undefined`] |

### Return type

[**User**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the calling user does not have the *Browse users and groups* global permission. |  -  |
| **404** | Returned if the user is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDefaultColumns

> Array&lt;ColumnItem&gt; getUserDefaultColumns(accountId, username)

Get user default columns

Returns the default [issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If &#x60;accountId&#x60; is not passed in the request, the calling user\&#39;s details are returned.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLgl), to get the column details for any user.  *  Permission to access Jira, to get the calling user\&#39;s column details.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { GetUserDefaultColumnsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
  } satisfies GetUserDefaultColumnsRequest;

  try {
    const data = await api.getUserDefaultColumns(body);
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;ColumnItem&gt;**](ColumnItem.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
| **404** | Returned if the requested user is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserEmail

> UnrestrictedUserEmail getUserEmail(accountId)

Get user email

Returns a user\&#39;s email address regardless of the user\&#39;s profile visibility settings. For Connect apps, this API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). For Forge apps, this API only supports access via asApp() requests.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { GetUserEmailRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`.
    accountId: accountId_example,
  } satisfies GetUserEmailRequest;

  try {
    const data = await api.getUserEmail(body);
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, &#x60;5b10ac8d82e05b22cc7d4ef5&#x60;. | [Defaults to `undefined`] |

### Return type

[**UnrestrictedUserEmail**](UnrestrictedUserEmail.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the calling app is not approved to use this API. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request (for example if a user is trying to access this API). |  -  |
| **404** | Returned if a user with the given &#x60;accountId&#x60; doesn\&#39;t exist |  -  |
| **503** | Indicates the API is not currently enabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserEmailBulk

> UnrestrictedUserEmail getUserEmailBulk(accountId)

Get user email bulk

Returns a user\&#39;s email address regardless of the user\&#39;s profile visibility settings. For Connect apps, this API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603). For Forge apps, this API only supports access via asApp() requests.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { GetUserEmailBulkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // Array<string> | The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value).
    accountId: ...,
  } satisfies GetUserEmailBulkRequest;

  try {
    const data = await api.getUserEmailBulk(body);
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
| **accountId** | `Array<string>` | The account IDs of the users for which emails are required. An &#x60;accountId&#x60; is an identifier that uniquely identifies the user across all Atlassian products. For example, &#x60;5b10ac8d82e05b22cc7d4ef5&#x60;. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value). | |

### Return type

[**UnrestrictedUserEmail**](UnrestrictedUserEmail.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the calling app is not approved to use this API. |  -  |
| **401** | Returned if the authentication credentials are incorrect, or missing from the request (for example if a user is trying to access this API). |  -  |
| **503** | Indicates the API is not currently enabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserGroups

> Array&lt;GroupName&gt; getUserGroups(accountId, username, key)

Get user groups

Returns the groups to which a user belongs.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { GetUserGroupsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
  } satisfies GetUserGroupsRequest;

  try {
    const data = await api.getUserGroups(body);
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;GroupName&gt;**](GroupName.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the calling user does not have the *Browse users and groups* global permission. |  -  |
| **404** | Returned if the user is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeUser

> removeUser(accountId, username, key)

Delete user

Deletes a user. If the operation completes successfully then the user is removed from Jira\&#39;s user base. This operation does not delete the user\&#39;s Atlassian account.  **[Permissions](#permissions) required:** Site administration (that is, membership of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { RemoveUserRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
  } satisfies RemoveUserRequest;

  try {
    const data = await api.removeUser(body);
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the user cannot be removed. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the user is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resetUserColumns

> resetUserColumns(accountId, username)

Reset user default columns

Resets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user to the system default. If &#x60;accountId&#x60; is not passed, the calling user\&#39;s default columns are reset.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.  *  Permission to access Jira, to set the calling user\&#39;s columns.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { ResetUserColumnsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
  } satisfies ResetUserColumnsRequest;

  try {
    const data = await api.resetUserColumns(body);
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setUserColumns

> any setUserColumns(userColumnRequestBody, accountId)

Set user default columns

Sets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If an account ID is not passed, the calling user\&#39;s default columns are set. If no column details are sent, then all default columns are removed.  The parameters for this resource are expressed as HTML form data. For example, in curl:  &#x60;curl -X PUT -d columns&#x3D;summary -d columns&#x3D;description https://your-domain.atlassian.net/rest/api/3/user/columns?accountId&#x3D;5b10ac8d82e05b22cc7d4ef5\&#39;&#x60;  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.  *  Permission to access Jira, to set the calling user\&#39;s columns.

### Example

```ts
import {
  Configuration,
  UsersApi,
} from 'jira-cloud-api';
import type { SetUserColumnsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UsersApi(config);

  const body = {
    // UserColumnRequestBody | The ID of a column to set. To set multiple columns, send multiple `columns` parameters.
    userColumnRequestBody: ...,
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
  } satisfies SetUserColumnsRequest;

  try {
    const data = await api.setUserColumns(body);
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
| **userColumnRequestBody** | [UserColumnRequestBody](UserColumnRequestBody.md) | The ID of a column to set. To set multiple columns, send multiple &#x60;columns&#x60; parameters. | |
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
| **404** | Returned if the requested user is not found. |  -  |
| **429** | Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira\&#39;s normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header. |  -  |
| **500** | Returned if an invalid issue table column ID is sent. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

