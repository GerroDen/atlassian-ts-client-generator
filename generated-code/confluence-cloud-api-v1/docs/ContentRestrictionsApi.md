# ContentRestrictionsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addGroupToContentRestrictionByGroupId**](ContentRestrictionsApi.md#addgrouptocontentrestrictionbygroupid) | **PUT** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId} | Add group to content restriction |
| [**addRestrictions**](ContentRestrictionsApi.md#addrestrictions) | **POST** /wiki/rest/api/content/{id}/restriction | Add restrictions |
| [**addUserToContentRestriction**](ContentRestrictionsApi.md#addusertocontentrestriction) | **PUT** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user | Add user to content restriction |
| [**deleteRestrictions**](ContentRestrictionsApi.md#deleterestrictions) | **DELETE** /wiki/rest/api/content/{id}/restriction | Delete restrictions |
| [**getContentRestrictionStatusForUser**](ContentRestrictionsApi.md#getcontentrestrictionstatusforuser) | **GET** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user | Get content restriction status for user |
| [**getIndividualGroupRestrictionStatusByGroupId**](ContentRestrictionsApi.md#getindividualgrouprestrictionstatusbygroupid) | **GET** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId} | Get content restriction status for group |
| [**getRestrictions**](ContentRestrictionsApi.md#getrestrictions) | **GET** /wiki/rest/api/content/{id}/restriction | Get restrictions |
| [**getRestrictionsByOperation**](ContentRestrictionsApi.md#getrestrictionsbyoperation) | **GET** /wiki/rest/api/content/{id}/restriction/byOperation | Get restrictions by operation |
| [**getRestrictionsForOperation**](ContentRestrictionsApi.md#getrestrictionsforoperation) | **GET** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey} | Get restrictions for operation |
| [**removeGroupFromContentRestriction**](ContentRestrictionsApi.md#removegroupfromcontentrestriction) | **DELETE** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/byGroupId/{groupId} | Remove group from content restriction |
| [**removeUserFromContentRestriction**](ContentRestrictionsApi.md#removeuserfromcontentrestriction) | **DELETE** /wiki/rest/api/content/{id}/restriction/byOperation/{operationKey}/user | Remove user from content restriction |
| [**updateRestrictions**](ContentRestrictionsApi.md#updaterestrictions) | **PUT** /wiki/rest/api/content/{id}/restriction | Update restrictions |



## addGroupToContentRestrictionByGroupId

> addGroupToContentRestrictionByGroupId(id, operationKey, groupId)

Add group to content restriction

Adds a group to a content restriction by Group Id. That is, grant read or update permission to the group for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { AddGroupToContentRestrictionByGroupIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content that the restriction applies to.
    id: id_example,
    // 'read' | 'update' | The operation that the restriction applies to.
    operationKey: operationKey_example,
    // string | The groupId of the group to add to the content restriction.
    groupId: groupId_example,
  } satisfies AddGroupToContentRestrictionByGroupIdRequest;

  try {
    const data = await api.addGroupToContentRestrictionByGroupId(body);
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
| **id** | `string` | The ID of the content that the restriction applies to. | [Defaults to `undefined`] |
| **operationKey** | `read`, `update` | The operation that the restriction applies to. | [Defaults to `undefined`] [Enum: read, update] |
| **groupId** | `string` | The groupId of the group to add to the content restriction. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the group is added to the content restriction by Group Id. The response body will be empty. |  -  |
| **400** | Returned if; - Group Id is not valid |  -  |
| **403** | Returned if the calling user does not have permission to update the content. |  -  |
| **404** | Returned if; - There is no content with the given ID. - The calling user does not have permission to view the content. - An invalid operation or group id is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addRestrictions

> ContentRestrictionArray addRestrictions(id, body, expand)

Add restrictions

Adds restrictions to a piece of content. Note, this does not change any existing restrictions on the content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { AddRestrictionsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content to add restrictions to.
    id: id_example,
    // ContentRestrictionAddOrUpdateArray | The restrictions to be added to the content.
    body: ...,
    // Array<'restrictions.user' | 'read.restrictions.user' | 'update.restrictions.user' | 'restrictions.group' | 'read.restrictions.group' | 'update.restrictions.group' | 'content'> | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to. (optional)
    expand: ...,
  } satisfies AddRestrictionsRequest;

  try {
    const data = await api.addRestrictions(body);
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
| **id** | `string` | The ID of the content to add restrictions to. | [Defaults to `undefined`] |
| **body** | [ContentRestrictionAddOrUpdateArray](ContentRestrictionAddOrUpdateArray.md) | The restrictions to be added to the content. | |
| **expand** | `restrictions.user`, `read.restrictions.user`, `update.restrictions.user`, `restrictions.group`, `read.restrictions.group`, `update.restrictions.group`, `content` | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [Optional] [Enum: restrictions.user, read.restrictions.user, update.restrictions.user, restrictions.group, read.restrictions.group, update.restrictions.group, content] |

### Return type

[**ContentRestrictionArray**](ContentRestrictionArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested restrictions are added. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to add restrictions to the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addUserToContentRestriction

> addUserToContentRestriction(id, operationKey, key, username, accountId)

Add user to content restriction

Adds a user to a content restriction. That is, grant read or update permission to the user for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { AddUserToContentRestrictionRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content that the restriction applies to.
    id: id_example,
    // string | The operation that the restriction applies to.
    operationKey: operationKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies AddUserToContentRestrictionRequest;

  try {
    const data = await api.addUserToContentRestriction(body);
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
| **id** | `string` | The ID of the content that the restriction applies to. | [Defaults to `undefined`] |
| **operationKey** | `string` | The operation that the restriction applies to. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the user is added to the content restriction. The response body will be empty. |  -  |
| **400** | Returned if;  - Provided restrictions are invalid |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. - An invalid operation or group is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRestrictions

> ContentRestrictionArray deleteRestrictions(id, expand)

Delete restrictions

Removes all restrictions (read and update) on a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { DeleteRestrictionsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content to remove restrictions from.
    id: id_example,
    // Array<'restrictions.user' | 'read.restrictions.user' | 'update.restrictions.user' | 'restrictions.group' | 'read.restrictions.group' | 'update.restrictions.group' | 'content'> | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to. (optional)
    expand: ...,
  } satisfies DeleteRestrictionsRequest;

  try {
    const data = await api.deleteRestrictions(body);
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
| **id** | `string` | The ID of the content to remove restrictions from. | [Defaults to `undefined`] |
| **expand** | `restrictions.user`, `read.restrictions.user`, `update.restrictions.user`, `restrictions.group`, `read.restrictions.group`, `update.restrictions.group`, `content` | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [Optional] [Enum: restrictions.user, read.restrictions.user, update.restrictions.user, restrictions.group, read.restrictions.group, update.restrictions.group, content] |

### Return type

[**ContentRestrictionArray**](ContentRestrictionArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the restrictions are removed. |  -  |
| **400** | Returned if any of the above validation rules are violated |  -  |
| **403** | Returned if the calling user does not have permission to alter the restrictions on the content. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentRestrictionStatusForUser

> getContentRestrictionStatusForUser(id, operationKey, key, username, accountId)

Get content restriction status for user

Returns whether the specified content restriction applies to a user. For example, if a page with &#x60;id&#x3D;123&#x60; has a &#x60;read&#x60; restriction for a user with an account ID of &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;, the following request will return &#x60;true&#x60;:  &#x60;/wiki/rest/api/content/123/restriction/byOperation/read/user?accountId&#x3D;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;  Note that a response of &#x60;true&#x60; does not guarantee that the user can view the page, as it does not account for account-inherited restrictions, space permissions, or even product access. For more information, see [Confluence permissions](https://confluence.atlassian.com/x/_AozKw).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { GetContentRestrictionStatusForUserRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content that the restriction applies to.
    id: id_example,
    // string | The operation that is restricted.
    operationKey: operationKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies GetContentRestrictionStatusForUserRequest;

  try {
    const data = await api.getContentRestrictionStatusForUser(body);
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
| **id** | `string` | The ID of the content that the restriction applies to. | [Defaults to `undefined`] |
| **operationKey** | `string` | The operation that is restricted. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return true if the content restriction applies to the user. The response body will be empty. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. - An invalid operation or user is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIndividualGroupRestrictionStatusByGroupId

> getIndividualGroupRestrictionStatusByGroupId(id, operationKey, groupId)

Get content restriction status for group

Returns whether the specified content restriction applies to a group. For example, if a page with &#x60;id&#x3D;123&#x60; has a &#x60;read&#x60; restriction for the &#x60;123456&#x60; group id, the following request will return &#x60;true&#x60;:  &#x60;/wiki/rest/api/content/123/restriction/byOperation/read/byGroupId/123456&#x60;  Note that a response of &#x60;true&#x60; does not guarantee that the group can view the page, as it does not account for account-inherited restrictions, space permissions, or even product access. For more information, see [Confluence permissions](https://confluence.atlassian.com/x/_AozKw).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { GetIndividualGroupRestrictionStatusByGroupIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content that the restriction applies to.
    id: id_example,
    // 'read' | 'update' | The operation that the restriction applies to.
    operationKey: operationKey_example,
    // string | The id of the group to be queried for whether the content restriction applies to it.
    groupId: groupId_example,
  } satisfies GetIndividualGroupRestrictionStatusByGroupIdRequest;

  try {
    const data = await api.getIndividualGroupRestrictionStatusByGroupId(body);
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
| **id** | `string` | The ID of the content that the restriction applies to. | [Defaults to `undefined`] |
| **operationKey** | `read`, `update` | The operation that the restriction applies to. | [Defaults to `undefined`] [Enum: read, update] |
| **groupId** | `string` | The id of the group to be queried for whether the content restriction applies to it. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns true if the content restriction applies to the group. The response will not return a response body. |  -  |
| **403** | Returned if the calling user does not have permission to view the content. |  -  |
| **404** | Returned if - There is no content with the given ID. - An invalid operation or group is specified. - Given groupId is blank or has invalid characters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRestrictions

> ContentRestrictionArray getRestrictions(id, expand, start, limit)

Get restrictions

Returns the restrictions on a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { GetRestrictionsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content to be queried for its restrictions.
    id: id_example,
    // Array<'restrictions.user' | 'read.restrictions.user' | 'update.restrictions.user' | 'restrictions.group' | 'read.restrictions.group' | 'update.restrictions.group' | 'content'> | A multi-value parameter indicating which properties of the content restrictions to expand. By default, the following objects are expanded: `restrictions.user`, `restrictions.group`.  - `restrictions.user` returns the piece of content that the restrictions are applied to. - `restrictions.group` returns the piece of content that the restrictions are applied to. - `content` returns the piece of content that the restrictions are applied to. (optional)
    expand: ...,
    // number | The starting index of the users and groups in the returned restrictions. (optional)
    start: 56,
    // number | The maximum number of users and the maximum number of groups, in the returned restrictions, to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetRestrictionsRequest;

  try {
    const data = await api.getRestrictions(body);
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
| **id** | `string` | The ID of the content to be queried for its restrictions. | [Defaults to `undefined`] |
| **expand** | `restrictions.user`, `read.restrictions.user`, `update.restrictions.user`, `restrictions.group`, `read.restrictions.group`, `update.restrictions.group`, `content` | A multi-value parameter indicating which properties of the content restrictions to expand. By default, the following objects are expanded: &#x60;restrictions.user&#x60;, &#x60;restrictions.group&#x60;.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [Optional] [Enum: restrictions.user, read.restrictions.user, update.restrictions.user, restrictions.group, read.restrictions.group, update.restrictions.group, content] |
| **start** | `number` | The starting index of the users and groups in the returned restrictions. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of users and the maximum number of groups, in the returned restrictions, to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `100`] |

### Return type

[**ContentRestrictionArray**](ContentRestrictionArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested restrictions are returned. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRestrictionsByOperation

> { [key: string]: GetRestrictionsByOperation200ResponseValue; } getRestrictionsByOperation(id, expand)

Get restrictions by operation

Returns restrictions on a piece of content by operation. This method is similar to [Get restrictions](#api-content-id-restriction-get) except that the operations are properties of the return object, rather than items in a results array.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { GetRestrictionsByOperationRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content to be queried for its restrictions.
    id: id_example,
    // Array<'restrictions.user' | 'restrictions.group' | 'content'> | A multi-value parameter indicating which properties of the content restrictions to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to. (optional)
    expand: ...,
  } satisfies GetRestrictionsByOperationRequest;

  try {
    const data = await api.getRestrictionsByOperation(body);
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
| **id** | `string` | The ID of the content to be queried for its restrictions. | [Defaults to `undefined`] |
| **expand** | `restrictions.user`, `restrictions.group`, `content` | A multi-value parameter indicating which properties of the content restrictions to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [Optional] [Enum: restrictions.user, restrictions.group, content] |

### Return type

[**{ [key: string]: GetRestrictionsByOperation200ResponseValue; }**](GetRestrictionsByOperation200ResponseValue.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested restrictions are returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRestrictionsForOperation

> ContentRestriction getRestrictionsForOperation(id, operationKey, expand, start, limit)

Get restrictions for operation

Returns the restictions on a piece of content for a given operation (read or update).  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { GetRestrictionsForOperationRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content to be queried for its restrictions.
    id: id_example,
    // 'read' | 'update' | The operation type of the restrictions to be returned.
    operationKey: operationKey_example,
    // Array<'restrictions.user' | 'restrictions.group' | 'content'> | A multi-value parameter indicating which properties of the content restrictions to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to. (optional)
    expand: ...,
    // number | The starting index of the users and groups in the returned restrictions. (optional)
    start: 56,
    // number | The maximum number of users and the maximum number of groups, in the returned restrictions, to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetRestrictionsForOperationRequest;

  try {
    const data = await api.getRestrictionsForOperation(body);
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
| **id** | `string` | The ID of the content to be queried for its restrictions. | [Defaults to `undefined`] |
| **operationKey** | `read`, `update` | The operation type of the restrictions to be returned. | [Defaults to `undefined`] [Enum: read, update] |
| **expand** | `restrictions.user`, `restrictions.group`, `content` | A multi-value parameter indicating which properties of the content restrictions to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [Optional] [Enum: restrictions.user, restrictions.group, content] |
| **start** | `number` | The starting index of the users and groups in the returned restrictions. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of users and the maximum number of groups, in the returned restrictions, to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `100`] |

### Return type

[**ContentRestriction**](ContentRestriction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested restrictions are returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeGroupFromContentRestriction

> removeGroupFromContentRestriction(id, operationKey, groupId)

Remove group from content restriction

Removes a group from a content restriction. That is, remove read or update permission for the group for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { RemoveGroupFromContentRestrictionRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content that the restriction applies to.
    id: id_example,
    // 'read' | 'update' | The operation that the restriction applies to.
    operationKey: operationKey_example,
    // string | The id of the group to remove from the content restriction.
    groupId: groupId_example,
  } satisfies RemoveGroupFromContentRestrictionRequest;

  try {
    const data = await api.removeGroupFromContentRestriction(body);
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
| **id** | `string` | The ID of the content that the restriction applies to. | [Defaults to `undefined`] |
| **operationKey** | `read`, `update` | The operation that the restriction applies to. | [Defaults to `undefined`] [Enum: read, update] |
| **groupId** | `string` | The id of the group to remove from the content restriction. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the group is removed from the content restriction. The response body will be empty. |  -  |
| **400** | Returned if given group id is blank |  -  |
| **403** | Returned if the calling user does not have permission to view the content. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. - The restriction to be deleted does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeUserFromContentRestriction

> removeUserFromContentRestriction(id, operationKey, key, username, accountId)

Remove user from content restriction

Removes a group from a content restriction. That is, remove read or update permission for the group for a piece of content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { RemoveUserFromContentRestrictionRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content that the restriction applies to.
    id: id_example,
    // 'read' | 'update' | The operation that the restriction applies to.
    operationKey: operationKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies RemoveUserFromContentRestrictionRequest;

  try {
    const data = await api.removeUserFromContentRestriction(body);
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
| **id** | `string` | The ID of the content that the restriction applies to. | [Defaults to `undefined`] |
| **operationKey** | `read`, `update` | The operation that the restriction applies to. | [Defaults to `undefined`] [Enum: read, update] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the user is removed from the content restriction. The response body will be empty. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. - An invalid operation or group is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRestrictions

> ContentRestrictionArray updateRestrictions(id, body, expand)

Update restrictions

Updates restrictions for a piece of content. This removes the existing restrictions and replaces them with the restrictions in the request.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to edit the content.

### Example

```ts
import {
  Configuration,
  ContentRestrictionsApi,
} from 'confluence-cloud-api-v1';
import type { UpdateRestrictionsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentRestrictionsApi(config);

  const body = {
    // string | The ID of the content to update restrictions for.
    id: id_example,
    // ContentRestrictionAddOrUpdateArray | The updated restrictions for the content.
    body: ...,
    // Array<'restrictions.user' | 'read.restrictions.user' | 'update.restrictions.user' | 'restrictions.group' | 'read.restrictions.group' | 'update.restrictions.group' | 'content'> | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - `restrictions.user` returns the piece of content that the restrictions are applied to. Expanded by default. - `restrictions.group` returns the piece of content that the restrictions are applied to. Expanded by default. - `content` returns the piece of content that the restrictions are applied to. (optional)
    expand: ...,
  } satisfies UpdateRestrictionsRequest;

  try {
    const data = await api.updateRestrictions(body);
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
| **id** | `string` | The ID of the content to update restrictions for. | [Defaults to `undefined`] |
| **body** | [ContentRestrictionAddOrUpdateArray](ContentRestrictionAddOrUpdateArray.md) | The updated restrictions for the content. | |
| **expand** | `restrictions.user`, `read.restrictions.user`, `update.restrictions.user`, `restrictions.group`, `read.restrictions.group`, `update.restrictions.group`, `content` | A multi-value parameter indicating which properties of the content restrictions (returned in response) to expand.  - &#x60;restrictions.user&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;restrictions.group&#x60; returns the piece of content that the restrictions are applied to. Expanded by default. - &#x60;content&#x60; returns the piece of content that the restrictions are applied to. | [Optional] [Enum: restrictions.user, read.restrictions.user, update.restrictions.user, restrictions.group, read.restrictions.group, update.restrictions.group, content] |

### Return type

[**ContentRestrictionArray**](ContentRestrictionArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested restrictions are updated. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to update restrictions for the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

