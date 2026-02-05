# GroupsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addUserToGroup**](GroupsApi.md#addusertogroup) | **POST** /rest/api/3/group/user | Add user to group |
| [**bulkGetGroups**](GroupsApi.md#bulkgetgroups) | **GET** /rest/api/3/group/bulk | Bulk get groups |
| [**createGroup**](GroupsApi.md#creategroup) | **POST** /rest/api/3/group | Create group |
| [**findGroups**](GroupsApi.md#findgroups) | **GET** /rest/api/3/groups/picker | Find groups |
| [**getGroup**](GroupsApi.md#getgroup) | **GET** /rest/api/3/group | Get group |
| [**getUsersFromGroup**](GroupsApi.md#getusersfromgroup) | **GET** /rest/api/3/group/member | Get users from group |
| [**removeGroup**](GroupsApi.md#removegroup) | **DELETE** /rest/api/3/group | Remove group |
| [**removeUserFromGroup**](GroupsApi.md#removeuserfromgroup) | **DELETE** /rest/api/3/group/user | Remove user from group |



## addUserToGroup

> Group addUserToGroup(updateUserToGroupBean, groupname, groupId)

Add user to group

Adds a user to a group.  **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from 'jira-cloud-api';
import type { AddUserToGroupRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new GroupsApi(config);

  const body = {
    // UpdateUserToGroupBean | The user to add to the group.
    updateUserToGroupBean: {"accountId":"5b10ac8d82e05b22cc7d4ef5"},
    // string | As a group\'s name can change, use of `groupId` is recommended to identify a group.   The name of the group. This parameter cannot be used with the `groupId` parameter. (optional)
    groupname: groupname_example,
    // string | The ID of the group. This parameter cannot be used with the `groupName` parameter. (optional)
    groupId: groupId_example,
  } satisfies AddUserToGroupRequest;

  try {
    const data = await api.addUserToGroup(body);
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
| **updateUserToGroupBean** | [UpdateUserToGroupBean](UpdateUserToGroupBean.md) | The user to add to the group. | |
| **groupname** | `string` | As a group\&#39;s name can change, use of &#x60;groupId&#x60; is recommended to identify a group.   The name of the group. This parameter cannot be used with the &#x60;groupId&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | The ID of the group. This parameter cannot be used with the &#x60;groupName&#x60; parameter. | [Optional] [Defaults to `undefined`] |

### Return type

[**Group**](Group.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;groupname&#x60; is not provided.  *  &#x60;accountId&#x60; is missing. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the calling user does not have the necessary permission. |  -  |
| **404** | Returned if the group or user are not found. |  -  |
| **429** | Returned if rate limiting is being enforced. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkGetGroups

> PageBeanGroupDetails bulkGetGroups(startAt, maxResults, groupId, groupName, accessType, applicationKey)

Bulk get groups

Returns a [paginated](#pagination) list of groups.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from 'jira-cloud-api';
import type { BulkGetGroupsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new GroupsApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<string> | The ID of a group. To specify multiple IDs, pass multiple `groupId` parameters. For example, `groupId=5b10a2844c20165700ede21g&groupId=5b10ac8d82e05b22cc7d4ef5`. (optional)
    groupId: 3571b9a7-348f-414a-9087-8e1ea03a7df8,
    // Set<string> | The name of a group. To specify multiple names, pass multiple `groupName` parameters. For example, `groupName=administrators&groupName=jira-software-users`. (optional)
    groupName: ...,
    // string | The access level of a group. Valid values: \'site-admin\', \'admin\', \'user\'. (optional)
    accessType: accessType_example,
    // string | The application key of the product user groups to search for. Valid values: \'jira-servicedesk\', \'jira-software\', \'jira-product-discovery\', \'jira-core\'. (optional)
    applicationKey: applicationKey_example,
  } satisfies BulkGetGroupsRequest;

  try {
    const data = await api.bulkGetGroups(body);
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
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **groupId** | `Set<string>` | The ID of a group. To specify multiple IDs, pass multiple &#x60;groupId&#x60; parameters. For example, &#x60;groupId&#x3D;5b10a2844c20165700ede21g&amp;groupId&#x3D;5b10ac8d82e05b22cc7d4ef5&#x60;. | [Optional] |
| **groupName** | `Set<string>` | The name of a group. To specify multiple names, pass multiple &#x60;groupName&#x60; parameters. For example, &#x60;groupName&#x3D;administrators&amp;groupName&#x3D;jira-software-users&#x60;. | [Optional] |
| **accessType** | `string` | The access level of a group. Valid values: \&#39;site-admin\&#39;, \&#39;admin\&#39;, \&#39;user\&#39;. | [Optional] [Defaults to `undefined`] |
| **applicationKey** | `string` | The application key of the product user groups to search for. Valid values: \&#39;jira-servicedesk\&#39;, \&#39;jira-software\&#39;, \&#39;jira-product-discovery\&#39;, \&#39;jira-core\&#39;. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanGroupDetails**](PageBeanGroupDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **500** | Returned if the group with the given access level can\&#39;t be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGroup

> Group createGroup(addGroupBean)

Create group

Creates a group.  **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from 'jira-cloud-api';
import type { CreateGroupRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new GroupsApi(config);

  const body = {
    // AddGroupBean | The name of the group.
    addGroupBean: {"name":"power-users"},
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
| **addGroupBean** | [AddGroupBean](AddGroupBean.md) | The name of the group. | |

### Return type

[**Group**](Group.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if group name is not specified or the group name is in use. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findGroups

> FoundGroups findGroups(accountId, query, exclude, excludeId, maxResults, caseInsensitive, userName)

Find groups

Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.  The primary use case for this resource is to populate a group picker suggestions list. To this end, the returned object includes the &#x60;html&#x60; field where the matched query term is highlighted in the group name with the HTML strong tag. Also, the groups list is wrapped in a response object that contains a header for use in the picker, specifically *Showing X of Y matching groups*.  The list returns with the groups sorted. If no groups match the list criteria, an empty list is returned.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg). Anonymous calls and calls by users without the required permission return an empty list.  *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Without this permission, calls where query is not an exact match to an existing group will return an empty list.

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from 'jira-cloud-api';
import type { FindGroupsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new GroupsApi(config);

  const body = {
    // string | This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get). (optional)
    accountId: accountId_example,
    // string | The string to find in group names. (optional)
    query: query,
    // Array<string> | As a group\'s name can change, use of `excludeGroupIds` is recommended to identify a group.   A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`. This parameter cannot be used with the `excludeGroupIds` parameter. (optional)
    exclude: ...,
    // Array<string> | A group ID to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `excludeId=group1-id&excludeId=group2-id`. This parameter cannot be used with the `excludeGroups` parameter. (optional)
    excludeId: ...,
    // number | The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`. (optional)
    maxResults: 56,
    // boolean | Whether the search for groups should be case insensitive. (optional)
    caseInsensitive: true,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    userName: userName_example,
  } satisfies FindGroupsRequest;

  try {
    const data = await api.findGroups(body);
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
| **accountId** | `string` | This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get). | [Optional] [Defaults to `undefined`] |
| **query** | `string` | The string to find in group names. | [Optional] [Defaults to `undefined`] |
| **exclude** | `Array<string>` | As a group\&#39;s name can change, use of &#x60;excludeGroupIds&#x60; is recommended to identify a group.   A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, &#x60;exclude&#x3D;group1&amp;exclude&#x3D;group2&#x60;. This parameter cannot be used with the &#x60;excludeGroupIds&#x60; parameter. | [Optional] |
| **excludeId** | `Array<string>` | A group ID to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, &#x60;excludeId&#x3D;group1-id&amp;excludeId&#x3D;group2-id&#x60;. This parameter cannot be used with the &#x60;excludeGroups&#x60; parameter. | [Optional] |
| **maxResults** | `number` | The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property &#x60;jira.ajax.autocomplete.limit&#x60;. | [Optional] [Defaults to `undefined`] |
| **caseInsensitive** | `boolean` | Whether the search for groups should be case insensitive. | [Optional] [Defaults to `false`] |
| **userName** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

### Return type

[**FoundGroups**](FoundGroups.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroup

> Group getGroup(groupname, groupId, expand)

Get group

This operation is deprecated, use [&#x60;group/member&#x60;](#api-rest-api-3-group-member-get).  Returns all users in a group.  **[Permissions](#permissions) required:** either of:   *  *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from 'jira-cloud-api';
import type { GetGroupRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new GroupsApi(config);

  const body = {
    // string | As a group\'s name can change, use of `groupId` is recommended to identify a group.   The name of the group. This parameter cannot be used with the `groupId` parameter. (optional)
    groupname: groupname_example,
    // string | The ID of the group. This parameter cannot be used with the `groupName` parameter. (optional)
    groupId: groupId_example,
    // string | List of fields to expand. (optional)
    expand: expand_example,
  } satisfies GetGroupRequest;

  try {
    const data = await api.getGroup(body);
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
| **groupname** | `string` | As a group\&#39;s name can change, use of &#x60;groupId&#x60; is recommended to identify a group.   The name of the group. This parameter cannot be used with the &#x60;groupId&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | The ID of the group. This parameter cannot be used with the &#x60;groupName&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | List of fields to expand. | [Optional] [Defaults to `undefined`] |

### Return type

[**Group**](Group.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the group name is not specified. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the calling user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the group is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsersFromGroup

> PageBeanUserDetails getUsersFromGroup(groupname, groupId, includeInactiveUsers, startAt, maxResults)

Get users from group

Returns a [paginated](#pagination) list of all users in a group.  Note that users are ordered by username, however the username is not returned in the results due to privacy reasons.  **[Permissions](#permissions) required:** either of:   *  *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from 'jira-cloud-api';
import type { GetUsersFromGroupRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new GroupsApi(config);

  const body = {
    // string | As a group\'s name can change, use of `groupId` is recommended to identify a group.   The name of the group. This parameter cannot be used with the `groupId` parameter. (optional)
    groupname: groupname_example,
    // string | The ID of the group. This parameter cannot be used with the `groupName` parameter. (optional)
    groupId: groupId_example,
    // boolean | Include inactive users. (optional)
    includeInactiveUsers: true,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page (number should be between 1 and 50). (optional)
    maxResults: 56,
  } satisfies GetUsersFromGroupRequest;

  try {
    const data = await api.getUsersFromGroup(body);
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
| **groupname** | `string` | As a group\&#39;s name can change, use of &#x60;groupId&#x60; is recommended to identify a group.   The name of the group. This parameter cannot be used with the &#x60;groupId&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | The ID of the group. This parameter cannot be used with the &#x60;groupName&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **includeInactiveUsers** | `boolean` | Include inactive users. | [Optional] [Defaults to `false`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page (number should be between 1 and 50). | [Optional] [Defaults to `50`] |

### Return type

[**PageBeanUserDetails**](PageBeanUserDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the group name is not specified. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the calling user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the group is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeGroup

> removeGroup(groupname, groupId, swapGroup, swapGroupId)

Remove group

Deletes a group.  **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* strategic [group](https://confluence.atlassian.com/x/24xjL)).

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from 'jira-cloud-api';
import type { RemoveGroupRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new GroupsApi(config);

  const body = {
    // string (optional)
    groupname: groupname_example,
    // string | The ID of the group. This parameter cannot be used with the `groupname` parameter. (optional)
    groupId: groupId_example,
    // string | As a group\'s name can change, use of `swapGroupId` is recommended to identify a group.   The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroupId` parameter. (optional)
    swapGroup: swapGroup_example,
    // string | The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroup` parameter. (optional)
    swapGroupId: swapGroupId_example,
  } satisfies RemoveGroupRequest;

  try {
    const data = await api.removeGroup(body);
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
| **groupname** | `string` |  | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | The ID of the group. This parameter cannot be used with the &#x60;groupname&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **swapGroup** | `string` | As a group\&#39;s name can change, use of &#x60;swapGroupId&#x60; is recommended to identify a group.   The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the &#x60;swapGroupId&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **swapGroupId** | `string` | The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the &#x60;swapGroup&#x60; parameter. | [Optional] [Defaults to `undefined`] |

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
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the group name is not specified. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the group is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeUserFromGroup

> removeUserFromGroup(accountId, groupname, groupId, username)

Remove user from group

Removes a user from a group.  **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).

### Example

```ts
import {
  Configuration,
  GroupsApi,
} from 'jira-cloud-api';
import type { RemoveUserFromGroupRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new GroupsApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | As a group\'s name can change, use of `groupId` is recommended to identify a group.   The name of the group. This parameter cannot be used with the `groupId` parameter. (optional)
    groupname: groupname_example,
    // string | The ID of the group. This parameter cannot be used with the `groupName` parameter. (optional)
    groupId: groupId_example,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
  } satisfies RemoveUserFromGroupRequest;

  try {
    const data = await api.removeUserFromGroup(body);
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
| **groupname** | `string` | As a group\&#39;s name can change, use of &#x60;groupId&#x60; is recommended to identify a group.   The name of the group. This parameter cannot be used with the &#x60;groupId&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | The ID of the group. This parameter cannot be used with the &#x60;groupName&#x60; parameter. | [Optional] [Defaults to `undefined`] |
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
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;groupName&#x60; is missing.  *  &#x60;accountId&#x60; is missing. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the group or user are not found. |  -  |
| **429** | Returned if rate limiting is being enforced. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

