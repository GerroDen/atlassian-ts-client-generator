# GroupApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addUserToGroupByGroupId**](GroupApi.md#addusertogroupbygroupid) | **POST** /wiki/rest/api/group/userByGroupId | Add member to group by groupId |
| [**createGroup**](GroupApi.md#creategroup) | **POST** /wiki/rest/api/group | Create new user group |
| [**getGroupByGroupId**](GroupApi.md#getgroupbygroupid) | **GET** /wiki/rest/api/group/by-id | Get group |
| [**getGroupMembersByGroupId**](GroupApi.md#getgroupmembersbygroupid) | **GET** /wiki/rest/api/group/{groupId}/membersByGroupId | Get group members |
| [**getGroups**](GroupApi.md#getgroups) | **GET** /wiki/rest/api/group | Get groups |
| [**removeGroupById**](GroupApi.md#removegroupbyid) | **DELETE** /wiki/rest/api/group/by-id | Delete user group |
| [**removeMemberFromGroupByGroupId**](GroupApi.md#removememberfromgroupbygroupid) | **DELETE** /wiki/rest/api/group/userByGroupId | Remove member from group using group id |
| [**searchGroups**](GroupApi.md#searchgroups) | **GET** /wiki/rest/api/group/picker | Search groups by partial query |



## addUserToGroupByGroupId

> addUserToGroupByGroupId(groupId, body)

Add member to group by groupId

Adds a user as a member in a group represented by its groupId  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a site admin.

### Example

```ts
import {
  Configuration,
  GroupApi,
} from 'confluence-cloud-api-v1';
import type { AddUserToGroupByGroupIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GroupApi(config);

  const body = {
    // string | GroupId of the group whose membership is updated
    groupId: groupId_example,
    // AccountId | AccountId of the user who needs to be added as member.
    body: ...,
  } satisfies AddUserToGroupByGroupIdRequest;

  try {
    const data = await api.addUserToGroupByGroupId(body);
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
| **groupId** | `string` | GroupId of the group whose membership is updated | [Defaults to `undefined`] |
| **body** | [AccountId](AccountId.md) | AccountId of the user who needs to be added as member. | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the group was created successfully. |  -  |
| **400** | Returned if the groupId or accountId are missing or invalid. |  -  |
| **401** | Returned if the calling user is not logged in to Confluence. |  -  |
| **403** | Returned if the user is not a site admin. |  -  |
| **404** | If no user group by the give name exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGroup

> Group createGroup(body)

Create new user group

Creates a new user group.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a site admin.

### Example

```ts
import {
  Configuration,
  GroupApi,
} from 'confluence-cloud-api-v1';
import type { CreateGroupRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GroupApi(config);

  const body = {
    // GroupName | Name of the group that is to be created.
    body: ...,
  } satisfies CreateGroupRequest;

  try {
    const data = await api.createGroup(body);
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
| **body** | [GroupName](GroupName.md) | Name of the group that is to be created. | |

### Return type

[**Group**](Group.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the group was created successfully. |  -  |
| **400** | Returned if the name is missing or invalid. |  -  |
| **401** | Returned if the calling user is not logged in to Confluence. |  -  |
| **403** | Returned if the user is not a site admin. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupByGroupId

> Group getGroupByGroupId(id)

Get group

Returns a user group for a given group id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  GroupApi,
} from 'confluence-cloud-api-v1';
import type { GetGroupByGroupIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GroupApi(config);

  const body = {
    // string | The id of the group.
    id: id_example,
  } satisfies GetGroupByGroupIdRequest;

  try {
    const data = await api.getGroupByGroupId(body);
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
| **id** | `string` | The id of the group. | [Defaults to `undefined`] |

### Return type

[**Group**](Group.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested group is returned. |  -  |
| **403** | Returned if the calling user does not have permission to view groups. |  -  |
| **404** | Returned if the group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupMembersByGroupId

> UserArray getGroupMembersByGroupId(groupId, start, limit, shouldReturnTotalSize, expand)

Get group members

Returns the users that are members of a group.  Use updated Get group API  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  GroupApi,
} from 'confluence-cloud-api-v1';
import type { GetGroupMembersByGroupIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GroupApi(config);

  const body = {
    // string | The id of the group to be queried for its members.
    groupId: groupId_example,
    // number | The starting index of the returned users. (optional)
    start: 56,
    // number | The maximum number of users to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
    // boolean | Whether to include total size parameter in the results. Note, fetching total size property is an expensive operation; use it if your use case needs this value. (optional)
    shouldReturnTotalSize: true,
    // Array<'operations' | 'personalSpace' | 'isExternalCollaborator'> | A multi-value parameter indicating which properties of the user to expand.    - `operations` returns the operations that the user is allowed to do.   - `personalSpace` returns the user\'s personal space, if it exists.   - `isExternalCollaborator`(@deprecated) see `isGuest` in response to find out whether the user is a guest. (optional)
    expand: ...,
  } satisfies GetGroupMembersByGroupIdRequest;

  try {
    const data = await api.getGroupMembersByGroupId(body);
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
| **groupId** | `string` | The id of the group to be queried for its members. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned users. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of users to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `200`] |
| **shouldReturnTotalSize** | `boolean` | Whether to include total size parameter in the results. Note, fetching total size property is an expensive operation; use it if your use case needs this value. | [Optional] [Defaults to `false`] |
| **expand** | `operations`, `personalSpace`, `isExternalCollaborator` | A multi-value parameter indicating which properties of the user to expand.    - &#x60;operations&#x60; returns the operations that the user is allowed to do.   - &#x60;personalSpace&#x60; returns the user\&#39;s personal space, if it exists.   - &#x60;isExternalCollaborator&#x60;(@deprecated) see &#x60;isGuest&#x60; in response to find out whether the user is a guest. | [Optional] [Enum: operations, personalSpace, isExternalCollaborator] |

### Return type

[**UserArray**](UserArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested users are returned. |  -  |
| **400** | Returned if given limit is greater than 200 |  -  |
| **403** | Returned if the calling user does not have permission to view users. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroups

> GroupArrayWithLinks getGroups(start, limit, accessType)

Get groups

Returns all user groups. The returned groups are ordered alphabetically in ascending order by group name.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  GroupApi,
} from 'confluence-cloud-api-v1';
import type { GetGroupsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GroupApi(config);

  const body = {
    // number | The starting index of the returned groups. (optional)
    start: 56,
    // number | The maximum number of groups to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
    // 'user' | 'admin' | 'site-admin' | The group permission level for which to filter results. (optional)
    accessType: accessType_example,
  } satisfies GetGroupsRequest;

  try {
    const data = await api.getGroups(body);
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
| **start** | `number` | The starting index of the returned groups. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of groups to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `200`] |
| **accessType** | `user`, `admin`, `site-admin` | The group permission level for which to filter results. | [Optional] [Defaults to `undefined`] [Enum: user, admin, site-admin] |

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
| **403** | Returned if the calling user does not have permission to view groups. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeGroupById

> removeGroupById(id)

Delete user group

Delete user group.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a site admin.

### Example

```ts
import {
  Configuration,
  GroupApi,
} from 'confluence-cloud-api-v1';
import type { RemoveGroupByIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GroupApi(config);

  const body = {
    // string | Id of the group to delete.
    id: id_example,
  } satisfies RemoveGroupByIdRequest;

  try {
    const data = await api.removeGroupById(body);
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
| **id** | `string` | Id of the group to delete. | [Defaults to `undefined`] |

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
| **204** | Returned if the group was removed successfully. |  -  |
| **400** | Returned if the id is missing or invalid. |  -  |
| **401** | Returned if the calling user is not logged in to Confluence. |  -  |
| **403** | Returned if the user is not a site admin. |  -  |
| **404** | If no user group by the given id exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeMemberFromGroupByGroupId

> removeMemberFromGroupByGroupId(groupId, accountId, key, username)

Remove member from group using group id

Remove user as a member from a group.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a site admin.

### Example

```ts
import {
  Configuration,
  GroupApi,
} from 'confluence-cloud-api-v1';
import type { RemoveMemberFromGroupByGroupIdRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GroupApi(config);

  const body = {
    // string | Id of the group whose membership is updated.
    groupId: groupId_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`.
    accountId: accountId_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
  } satisfies RemoveMemberFromGroupByGroupIdRequest;

  try {
    const data = await api.removeMemberFromGroupByGroupId(body);
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
| **groupId** | `string` | Id of the group whose membership is updated. | [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

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
| **204** | Returned if the group was removed successfully. |  -  |
| **400** | Returned if the name is missing or invalid. |  -  |
| **401** | Returned if the calling user is not logged in to Confluence. |  -  |
| **403** | Returned if the user is not a site admin. Note: A 204 is returned if the user is not part of the group. |  -  |
| **404** | If no user group by the give name exists or if no user exists for the given accountId. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchGroups

> GroupArrayWithLinks searchGroups(query, start, limit, shouldReturnTotalSize)

Search groups by partial query

Get search results of groups by partial query provided.

### Example

```ts
import {
  Configuration,
  GroupApi,
} from 'confluence-cloud-api-v1';
import type { SearchGroupsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new GroupApi(config);

  const body = {
    // string | the search term used to query results.
    query: query_example,
    // number | The starting index of the returned groups. (optional)
    start: 56,
    // number | The maximum number of groups to return per page. Note, this is restricted to a maximum limit of 200 groups. (optional)
    limit: 56,
    // boolean | Whether to include total size parameter in the results. Note, fetching total size property is an expensive operation; use it if your use case needs this value. (optional)
    shouldReturnTotalSize: true,
  } satisfies SearchGroupsRequest;

  try {
    const data = await api.searchGroups(body);
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
| **query** | `string` | the search term used to query results. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned groups. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of groups to return per page. Note, this is restricted to a maximum limit of 200 groups. | [Optional] [Defaults to `200`] |
| **shouldReturnTotalSize** | `boolean` | Whether to include total size parameter in the results. Note, fetching total size property is an expensive operation; use it if your use case needs this value. | [Optional] [Defaults to `false`] |

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
| **200** | Returns a full JSON representation of group collection. |  -  |
| **403** | Returned if the calling user does not have permission to view groups. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

