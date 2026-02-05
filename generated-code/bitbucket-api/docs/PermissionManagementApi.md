# PermissionManagementApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addGroupToUser**](PermissionManagementApi.md#addgrouptouser) | **POST** /api/latest/admin/users/add-group | Add user to group |
| [**addUserToGroup**](PermissionManagementApi.md#addusertogroup) | **POST** /api/latest/admin/groups/add-user | Add user to group |
| [**addUserToGroups**](PermissionManagementApi.md#addusertogroups) | **POST** /api/latest/admin/users/add-groups | Add user to groups |
| [**addUsersToGroup**](PermissionManagementApi.md#adduserstogroup) | **POST** /api/latest/admin/groups/add-users | Add multiple users to group |
| [**clearUserCaptchaChallenge**](PermissionManagementApi.md#clearusercaptchachallenge) | **DELETE** /api/latest/admin/users/captcha | Clear CAPTCHA for user |
| [**createGroup**](PermissionManagementApi.md#creategroup) | **POST** /api/latest/admin/groups | Create group |
| [**createUser**](PermissionManagementApi.md#createuser) | **POST** /api/latest/admin/users | Create user |
| [**deleteGroup**](PermissionManagementApi.md#deletegroup) | **DELETE** /api/latest/admin/groups | Remove group |
| [**deleteUser**](PermissionManagementApi.md#deleteuser) | **DELETE** /api/latest/admin/users | Remove user |
| [**eraseUser**](PermissionManagementApi.md#eraseuser) | **POST** /api/latest/admin/users/erasure | Erase user information |
| [**findGroupsForUser**](PermissionManagementApi.md#findgroupsforuser) | **GET** /api/latest/admin/users/more-members | Get groups for user |
| [**findOtherGroupsForUser**](PermissionManagementApi.md#findothergroupsforuser) | **GET** /api/latest/admin/users/more-non-members | Find other groups for user |
| [**findUsersInGroup**](PermissionManagementApi.md#findusersingroup) | **GET** /api/latest/admin/groups/more-members | Get group members |
| [**findUsersNotInGroup**](PermissionManagementApi.md#findusersnotingroup) | **GET** /api/latest/admin/groups/more-non-members | Get members not in group |
| [**getGroups**](PermissionManagementApi.md#getgroups) | **GET** /api/latest/groups | Get group names |
| [**getGroups1**](PermissionManagementApi.md#getgroups1) | **GET** /api/latest/admin/groups | Get groups |
| [**getGroupsWithAnyPermission**](PermissionManagementApi.md#getgroupswithanypermission) | **GET** /api/latest/admin/permissions/groups | Get groups with a global permission |
| [**getGroupsWithAnyPermission2**](PermissionManagementApi.md#getgroupswithanypermission2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups | Get groups with permission to repository |
| [**getGroupsWithoutAnyPermission**](PermissionManagementApi.md#getgroupswithoutanypermission) | **GET** /api/latest/admin/permissions/groups/none | Get groups with no global permission |
| [**getGroupsWithoutAnyPermission2**](PermissionManagementApi.md#getgroupswithoutanypermission2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups/none | Get groups without repository permission |
| [**getUserDirectories**](PermissionManagementApi.md#getuserdirectories) | **GET** /api/latest/admin/user-directories | Get directories |
| [**getUsers1**](PermissionManagementApi.md#getusers1) | **GET** /api/latest/admin/users | Get users |
| [**getUsersWithAnyPermission**](PermissionManagementApi.md#getuserswithanypermission) | **GET** /api/latest/admin/permissions/users | Get users with a global permission |
| [**getUsersWithAnyPermission2**](PermissionManagementApi.md#getuserswithanypermission2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users | Get users with permission to repository |
| [**getUsersWithoutAnyPermission**](PermissionManagementApi.md#getuserswithoutanypermission) | **GET** /api/latest/admin/permissions/users/none | Get users with no global permission |
| [**getUsersWithoutPermission1**](PermissionManagementApi.md#getuserswithoutpermission1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users/none | Get users without repository permission |
| [**removeGroupFromUser**](PermissionManagementApi.md#removegroupfromuser) | **POST** /api/latest/admin/users/remove-group | Remove user from group |
| [**removeUserFromGroup**](PermissionManagementApi.md#removeuserfromgroup) | **POST** /api/latest/admin/groups/remove-user | Remove user from group |
| [**renameUser**](PermissionManagementApi.md#renameuser) | **POST** /api/latest/admin/users/rename | Rename user |
| [**revokePermissions1**](PermissionManagementApi.md#revokepermissions1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions | Revoke all repository permissions for users and groups |
| [**revokePermissionsForGroup**](PermissionManagementApi.md#revokepermissionsforgroup) | **DELETE** /api/latest/admin/permissions/groups | Revoke all global permissions for group |
| [**revokePermissionsForGroup2**](PermissionManagementApi.md#revokepermissionsforgroup2) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups | Revoke group repository permission |
| [**revokePermissionsForUser**](PermissionManagementApi.md#revokepermissionsforuser) | **DELETE** /api/latest/admin/permissions/users | Revoke all global permissions for user |
| [**revokePermissionsForUser2**](PermissionManagementApi.md#revokepermissionsforuser2) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users | Revoke user repository permission |
| [**searchPermissions1**](PermissionManagementApi.md#searchpermissions1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/search | Search repository permissions |
| [**setPermissionForGroup**](PermissionManagementApi.md#setpermissionforgroup) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/groups | Update group repository permission |
| [**setPermissionForGroups**](PermissionManagementApi.md#setpermissionforgroups) | **PUT** /api/latest/admin/permissions/groups | Update global permission for group |
| [**setPermissionForUser**](PermissionManagementApi.md#setpermissionforuser) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/permissions/users | Update user repository permission |
| [**setPermissionForUsers**](PermissionManagementApi.md#setpermissionforusers) | **PUT** /api/latest/admin/permissions/users | Update global permission for user |
| [**updateUserDetails**](PermissionManagementApi.md#updateuserdetails) | **PUT** /api/latest/admin/users | Update user details |
| [**updateUserPassword**](PermissionManagementApi.md#updateuserpassword) | **PUT** /api/latest/admin/users/credentials | Set password for user |
| [**validateErasable**](PermissionManagementApi.md#validateerasable) | **GET** /api/latest/admin/users/erasure | Check user removal |



## addGroupToUser

> addGroupToUser(groupPickerContext)

Add user to group

&lt;strong&gt;Deprecated since 2.10&lt;/strong&gt;. Use /rest/users/add-groups instead.  Add a user to a group. This is very similar to &lt;code&gt;groups/add-user&lt;/code&gt;, but with the &lt;em&gt;context&lt;/em&gt; and &lt;em&gt;itemName&lt;/em&gt; attributes of the supplied request entity reversed. On the face of it this may appear redundant, but it facilitates a specific UI component in the application.  In the request entity, the &lt;em&gt;context&lt;/em&gt; attribute is the user and the &lt;em&gt;itemName&lt;/em&gt; is the group.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { AddGroupToUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // GroupPickerContext (optional)
    groupPickerContext: ...,
  } satisfies AddGroupToUserRequest;

  try {
    const data = await api.addGroupToUser(body);
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
| **groupPickerContext** | [GroupPickerContext](GroupPickerContext.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user was added to the group |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as it would exceed the server\&#39;s licensing limit, or the groups permissions exceed the authenticated user\&#39;s permission level. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addUserToGroup

> addUserToGroup(userPickerContext)

Add user to group

&lt;strong&gt;Deprecated since 2.10&lt;/strong&gt;. Use /rest/users/add-groups instead.  Add a user to a group.  In the request entity, the &lt;em&gt;context&lt;/em&gt; attribute is the group and the &lt;em&gt;itemName&lt;/em&gt; is the user.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { AddUserToGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // UserPickerContext (optional)
    userPickerContext: ...,
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
| **userPickerContext** | [UserPickerContext](UserPickerContext.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user was added to the group. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as it would exceed the server\&#39;s licensing limit, or the groups permissions exceed the authenticated user\&#39;s permission level. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addUserToGroups

> addUserToGroups(userAndGroups)

Add user to groups

Add a user to one or more groups.    The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { AddUserToGroupsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // UserAndGroups (optional)
    userAndGroups: ...,
  } satisfies AddUserToGroupsRequest;

  try {
    const data = await api.addUserToGroups(body);
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
| **userAndGroups** | [UserAndGroups](UserAndGroups.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user was added to &lt;em&gt;all&lt;/em&gt; the groups |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as it would exceed the server\&#39;s licensing limit, or the groups permissions exceed the authenticated user\&#39;s permission level. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addUsersToGroup

> addUsersToGroup(groupAndUsers)

Add multiple users to group

Add multiple users to a group.   The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { AddUsersToGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // GroupAndUsers (optional)
    groupAndUsers: ...,
  } satisfies AddUsersToGroupRequest;

  try {
    const data = await api.addUsersToGroup(body);
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
| **groupAndUsers** | [GroupAndUsers](GroupAndUsers.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | &lt;em&gt;All&lt;/em&gt; the users were added to the group |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as it would exceed the server\&#39;s licensing limit, or the groups permissions exceed the authenticated user\&#39;s permission level. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clearUserCaptchaChallenge

> clearUserCaptchaChallenge(name)

Clear CAPTCHA for user

Clears any CAPTCHA challenge that may constrain the user with the supplied username when they authenticate. Additionally any counter or metric that contributed towards the user being issued the CAPTCHA challenge (for instance too many consecutive failed logins) will also be reset.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource, and may not clear the CAPTCHA of a user with greater permissions than themselves.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { ClearUserCaptchaChallengeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The username
    name: name_example,
  } satisfies ClearUserCaptchaChallengeRequest;

  try {
    const data = await api.clearUserCaptchaChallenge(body);
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
| **name** | `string` | The username | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The CAPTCHA was successfully cleared. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as the authenticated user has a lower permission level than the user to clear captcha for. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGroup

> RestDetailedGroup createGroup(name)

Create group

Create a new group.   The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { CreateGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | Name of the group.
    name: name_example,
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
| **name** | `string` | Name of the group. | [Defaults to `undefined`] |

### Return type

[**RestDetailedGroup**](RestDetailedGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly created group. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user is not an administrator. |  -  |
| **409** | A group with this name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createUser

> createUser(emailAddress, displayName, name, password, addToDefaultGroup, notify)

Create user

Creates a new user from the assembled query parameters.  The default group can be used to control initial permissions for new users, such as granting users the ability to login or providing read access to certain projects or repositories. If the user is not added to the default group, they may not be able to login after their account is created until explicit permissions are configured.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { CreateUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The e-mail address for the new user.
    emailAddress: emailAddress_example,
    // string | The display name for the new user.
    displayName: displayName_example,
    // string | The username for the new user.
    name: name_example,
    // string | The password for the new user. Required if the <code>notify</code> parameter is not present or is set to <code>false</false> (optional)
    password: password_example,
    // boolean | Set <code>true</code> to add the user to the default group, which can be used to grant them a set of initial permissions; otherwise, <code>false</code> to not add them to a group. (optional)
    addToDefaultGroup: true,
    // boolean | If present and not <code>false</code> instead of requiring a password, the create user will be notified via email their account has been created and requires a password to be reset. This option can only be used if a mail server has been configured. (optional)
    notify: true,
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
| **emailAddress** | `string` | The e-mail address for the new user. | [Defaults to `undefined`] |
| **displayName** | `string` | The display name for the new user. | [Defaults to `undefined`] |
| **name** | `string` | The username for the new user. | [Defaults to `undefined`] |
| **password** | `string` | The password for the new user. Required if the &lt;code&gt;notify&lt;/code&gt; parameter is not present or is set to &lt;code&gt;false&lt;/false&gt; | [Optional] [Defaults to `undefined`] |
| **addToDefaultGroup** | `boolean` | Set &lt;code&gt;true&lt;/code&gt; to add the user to the default group, which can be used to grant them a set of initial permissions; otherwise, &lt;code&gt;false&lt;/code&gt; to not add them to a group. | [Optional] [Defaults to `true`] |
| **notify** | `boolean` | If present and not &lt;code&gt;false&lt;/code&gt; instead of requiring a password, the create user will be notified via email their account has been created and requires a password to be reset. This option can only be used if a mail server has been configured. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The user was successfully created. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The authenticated user is not an administrator. |  -  |
| **403** | Adding the user to the default group would exceed the server\&#39;s license limit. |  -  |
| **409** | Another user with the same name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGroup

> RestDetailedGroup deleteGroup(name)

Remove group

Deletes the specified group, removing them from the system. This also removes any permissions that may have been granted to the group.  A user may not delete the last group that is granting them administrative permissions, or a group with greater permissions than themselves.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { DeleteGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The name identifying the group to delete.
    name: name_example,
  } satisfies DeleteGroupRequest;

  try {
    const data = await api.deleteGroup(body);
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
| **name** | `string` | The name identifying the group to delete. | [Defaults to `undefined`] |

### Return type

[**RestDetailedGroup**](RestDetailedGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deleted group. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as the authenticated user has a lower permission level than the group being deleted. |  -  |
| **404** | The specified group does not exist. |  -  |
| **409** | The action was disallowed as it would lower the authenticated user\&#39;s permission level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUser

> RestDetailedUser deleteUser(name)

Remove user

Deletes the specified user, removing them from the system. This also removes any permissions that may have been granted to the user.  A user may not delete themselves, and a user with &lt;strong&gt;ADMIN&lt;/strong&gt; permissions may not delete a user with &lt;strong&gt;SYS_ADMIN&lt;/strong&gt;permissions.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { DeleteUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The username identifying the user to delete.
    name: name_example,
  } satisfies DeleteUserRequest;

  try {
    const data = await api.deleteUser(body);
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
| **name** | `string` | The username identifying the user to delete. | [Defaults to `undefined`] |

### Return type

[**RestDetailedUser**](RestDetailedUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deleted user. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as the authenticated user has a lower permission level than the user being deleted. |  -  |
| **404** | The specified user does not exist. |  -  |
| **409** | The action was disallowed as a user can not delete themselves. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## eraseUser

> RestErasedUser eraseUser(name)

Erase user information

Erases personally identifying user data for a deleted user.  References in the application to the original username will be either removed or updated to a new non-identifying username. Refer to the &lt;a href&#x3D;\&quot;https://confluence.atlassian.com/gdpr/bitbucket-right-to-erasure-949770560.html\&quot;&gt;support guide&lt;/a&gt; for details about what data is and isn\&#39;t erased.  User erasure can only be performed on a deleted user. If the user has not been deleted first then this endpoint will return a bad request and no erasure will be performed.  Erasing user data is &lt;strong&gt;irreversible&lt;/strong&gt; and may lead to a degraded user experience. This method should not be used as part of a standard user deletion and cleanup process.  Plugins can participate in user erasure by defining a &lt;code&gt;&amp;lt;user-erasure-handler&amp;gt;&lt;/code&gt; module. If one or more plugin modules fail, an error summary of the failing modules is returned.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { EraseUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The username identifying the user to erase.
    name: name_example,
  } satisfies EraseUserRequest;

  try {
    const data = await api.eraseUser(body);
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
| **name** | `string` | The username identifying the user to erase. | [Defaults to `undefined`] |

### Return type

[**RestErasedUser**](RestErasedUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The identifier of the erased user. |  -  |
| **400** | The request was malformed (e.g. if no username was supplied). |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission or has a lower permission level than the user being erased. |  -  |
| **404** | The requested username does not exist. |  -  |
| **409** | The requested username is the username of a not deleted user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findGroupsForUser

> FindUsersInGroup200Response findGroupsForUser(context, filter, start, limit)

Get groups for user

Retrieves a list of users that are &lt;em&gt;not&lt;/em&gt; members of a specified group. &lt;p&gt;The authenticated user must have the &lt;strong&gt;LICENSED_USER&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { FindGroupsForUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The group which should be used to locate members.
    context: context_example,
    // string | If specified only users with usernames, display names or email addresses containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies FindGroupsForUserRequest;

  try {
    const data = await api.findGroupsForUser(body);
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
| **context** | `string` | The group which should be used to locate members. | [Defaults to `undefined`] |
| **filter** | `string` | If specified only users with usernames, display names or email addresses containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**FindUsersInGroup200Response**](FindUsersInGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users. |  -  |
| **401** | The currently authenticated user is not a licensed user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findOtherGroupsForUser

> GetGroups1200Response findOtherGroupsForUser(context, filter, start, limit)

Find other groups for user

Retrieves a list of groups the specified user is &lt;em&gt;not&lt;/em&gt; a member of. &lt;p&gt;The authenticated user must have the &lt;strong&gt;LICENSED_USER&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { FindOtherGroupsForUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The user which should be used to locate groups.
    context: context_example,
    // string | If specified only groups with names containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies FindOtherGroupsForUserRequest;

  try {
    const data = await api.findOtherGroupsForUser(body);
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
| **context** | `string` | The user which should be used to locate groups. | [Defaults to `undefined`] |
| **filter** | `string` | If specified only groups with names containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups1200Response**](GetGroups1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of groups. |  -  |
| **401** | The currently authenticated user is not a licensed user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsersInGroup

> FindUsersInGroup200Response findUsersInGroup(context, filter, start, limit)

Get group members

Retrieves a list of users that are members of a specified group. &lt;p&gt;The authenticated user must have the &lt;strong&gt;LICENSED_USER&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { FindUsersInGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The group which should be used to locate members.
    context: context_example,
    // string | If specified only users with usernames, display names or email addresses containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies FindUsersInGroupRequest;

  try {
    const data = await api.findUsersInGroup(body);
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
| **context** | `string` | The group which should be used to locate members. | [Defaults to `undefined`] |
| **filter** | `string` | If specified only users with usernames, display names or email addresses containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**FindUsersInGroup200Response**](FindUsersInGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users. |  -  |
| **401** | The currently authenticated user is not a licensed user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsersNotInGroup

> FindUsersInGroup200Response findUsersNotInGroup(context, filter, start, limit)

Get members not in group

Retrieves a list of users that are &lt;em&gt;not&lt;/em&gt; members of a specified group. &lt;p&gt;The authenticated user must have the &lt;strong&gt;LICENSED_USER&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { FindUsersNotInGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The group which should be used to locate members.
    context: context_example,
    // string | If specified only users with usernames, display names or email addresses containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies FindUsersNotInGroupRequest;

  try {
    const data = await api.findUsersNotInGroup(body);
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
| **context** | `string` | The group which should be used to locate members. | [Defaults to `undefined`] |
| **filter** | `string` | If specified only users with usernames, display names or email addresses containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**FindUsersInGroup200Response**](FindUsersInGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users. |  -  |
| **401** | The currently authenticated user is not a licensed user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroups

> GetGroups200Response getGroups(filter, start, limit)

Get group names

Retrieve a page of group names.  The authenticated user must have &lt;strong&gt;LICENSED_USER&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetGroupsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
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
| **filter** | `string` |  | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups200Response**](GetGroups200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of group names. |  -  |
| **401** | The currently authenticated user is not a project administrator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroups1

> GetGroups1200Response getGroups1(filter, start, limit)

Get groups

Retrieve a page of groups.   The authenticated user must have &lt;strong&gt;LICENSED_USER&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetGroups1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | If specified only group names containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetGroups1Request;

  try {
    const data = await api.getGroups1(body);
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
| **filter** | `string` | If specified only group names containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups1200Response**](GetGroups1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of groups. |  -  |
| **401** | The currently authenticated user is not a licensed user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupsWithAnyPermission

> GetGroupsWithAnyPermission200Response getGroupsWithAnyPermission(filter, start, limit)

Get groups with a global permission

Retrieve a page of groups that have been granted at least one global permission.   The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetGroupsWithAnyPermissionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | If specified only group names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetGroupsWithAnyPermissionRequest;

  try {
    const data = await api.getGroupsWithAnyPermission(body);
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
| **filter** | `string` | If specified only group names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroupsWithAnyPermission200Response**](GetGroupsWithAnyPermission200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of groups and their highest global permissions. |  -  |
| **401** | The currently authenticated user is not an administrator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupsWithAnyPermission2

> GetGroupsWithAnyPermission200Response getGroupsWithAnyPermission2(projectKey, repositorySlug, filter, start, limit)

Get groups with permission to repository

Retrieve a page of groups that have been granted at least one permission for the specified repository.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project or global permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetGroupsWithAnyPermission2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If specified only group names containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetGroupsWithAnyPermission2Request;

  try {
    const data = await api.getGroupsWithAnyPermission2(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **filter** | `string` | If specified only group names containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroupsWithAnyPermission200Response**](GetGroupsWithAnyPermission200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of groups and their highest permissions for the specified repository. |  -  |
| **401** | The currently authenticated user is not a repository administrator for the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupsWithoutAnyPermission

> GetGroups1200Response getGroupsWithoutAnyPermission(filter, start, limit)

Get groups with no global permission

Retrieve a page of groups that have no granted global permissions.   The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetGroupsWithoutAnyPermissionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | If specified only user names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetGroupsWithoutAnyPermissionRequest;

  try {
    const data = await api.getGroupsWithoutAnyPermission(body);
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
| **filter** | `string` | If specified only user names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups1200Response**](GetGroups1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of groups that have not been granted any global permissions. |  -  |
| **401** | The currently authenticated user is not an administrator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupsWithoutAnyPermission2

> GetGroups1200Response getGroupsWithoutAnyPermission2(projectKey, repositorySlug, filter, start, limit)

Get groups without repository permission

Retrieve a page of groups that have no granted permissions for the specified repository.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project or global permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetGroupsWithoutAnyPermission2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If specified only group names containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetGroupsWithoutAnyPermission2Request;

  try {
    const data = await api.getGroupsWithoutAnyPermission2(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **filter** | `string` | If specified only group names containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups1200Response**](GetGroups1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of groups that have not been granted any permissions for the specified repository. |  -  |
| **401** | The currently authenticated user is not a repository administrator for the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDirectories

> RestUserDirectory getUserDirectories(includeInactive)

Get directories

Retrieve a list of active directories.    The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetUserDirectoriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | Set <code>true</code> to include inactive directories; otherwise, <code>false</code> to only return active directories. (optional)
    includeInactive: includeInactive_example,
  } satisfies GetUserDirectoriesRequest;

  try {
    const data = await api.getUserDirectories(body);
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
| **includeInactive** | `string` | Set &lt;code&gt;true&lt;/code&gt; to include inactive directories; otherwise, &lt;code&gt;false&lt;/code&gt; to only return active directories. | [Optional] [Defaults to `undefined`] |

### Return type

[**RestUserDirectory**](RestUserDirectory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of directories |  -  |
| **401** | The currently authenticated user is not an administrator |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers1

> FindUsersInGroup200Response getUsers1(filter, start, limit)

Get users

Retrieve a page of users.    The authenticated user must have the &lt;strong&gt;LICENSED_USER&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetUsers1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | If specified only users with usernames, display name or email addresses containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetUsers1Request;

  try {
    const data = await api.getUsers1(body);
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
| **filter** | `string` | If specified only users with usernames, display name or email addresses containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**FindUsersInGroup200Response**](FindUsersInGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users. |  -  |
| **401** | The currently authenticated user is not a licensed user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsersWithAnyPermission

> GetGroupsWithAnyPermission200Response getUsersWithAnyPermission(filter, start, limit)

Get users with a global permission

Retrieve a page of users that have been granted at least one global permission.   The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetUsersWithAnyPermissionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | If specified only user names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetUsersWithAnyPermissionRequest;

  try {
    const data = await api.getUsersWithAnyPermission(body);
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
| **filter** | `string` | If specified only user names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroupsWithAnyPermission200Response**](GetGroupsWithAnyPermission200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users and their highest global permissions. |  -  |
| **401** | The currently authenticated user is not an administrator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsersWithAnyPermission2

> GetUsersWithAnyPermission1200Response getUsersWithAnyPermission2(projectKey, repositorySlug, filter, start, limit)

Get users with permission to repository

Retrieve a page of users that have been granted at least one permission for the specified repository.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project or global permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetUsersWithAnyPermission2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If specified only user names containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetUsersWithAnyPermission2Request;

  try {
    const data = await api.getUsersWithAnyPermission2(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **filter** | `string` | If specified only user names containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUsersWithAnyPermission1200Response**](GetUsersWithAnyPermission1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users and their highest permissions for the specified repository. |  -  |
| **401** | The currently authenticated user is not a repository administrator for the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsersWithoutAnyPermission

> GetUsersWithoutAnyPermission200Response getUsersWithoutAnyPermission(filter, start, limit)

Get users with no global permission

Retrieve a page of users that have no granted global permissions.   The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetUsersWithoutAnyPermissionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | If specified only user names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetUsersWithoutAnyPermissionRequest;

  try {
    const data = await api.getUsersWithoutAnyPermission(body);
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
| **filter** | `string` | If specified only user names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUsersWithoutAnyPermission200Response**](GetUsersWithoutAnyPermission200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users that have not been granted any global permissions. |  -  |
| **401** | The currently authenticated user is not an administrator. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsersWithoutPermission1

> GetUsersWithoutAnyPermission200Response getUsersWithoutPermission1(projectKey, repositorySlug, filter, start, limit)

Get users without repository permission

Retrieve a page of &lt;i&gt;licensed&lt;/i&gt; users that have no granted permissions for the specified repository.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project or global permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { GetUsersWithoutPermission1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If specified only user names containing the supplied string will be returned. (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetUsersWithoutPermission1Request;

  try {
    const data = await api.getUsersWithoutPermission1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **filter** | `string` | If specified only user names containing the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUsersWithoutAnyPermission200Response**](GetUsersWithoutAnyPermission200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users that have not been granted any permissions for the specified repository. |  -  |
| **401** | The currently authenticated user is not a repository administrator for the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeGroupFromUser

> removeGroupFromUser(groupPickerContext)

Remove user from group

Remove a user from a group. This is very similar to &lt;code&gt;groups/remove-user&lt;/code&gt;, but with the &lt;em&gt;context&lt;/em&gt; and &lt;em&gt;itemName&lt;/em&gt; attributes of the supplied request entity reversed. On the face of it this may appear redundant, but it facilitates a specific UI component in the application.  In the request entity, the &lt;em&gt;context&lt;/em&gt; attribute is the user and the &lt;em&gt;itemName&lt;/em&gt; is the group.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { RemoveGroupFromUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // GroupPickerContext (optional)
    groupPickerContext: ...,
  } satisfies RemoveGroupFromUserRequest;

  try {
    const data = await api.removeGroupFromUser(body);
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
| **groupPickerContext** | [GroupPickerContext](GroupPickerContext.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user was removed from the group. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as the group has a higher permission level than the context user. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeUserFromGroup

> removeUserFromGroup(userPickerContext)

Remove user from group

&lt;strong&gt;Deprecated since 2.10&lt;/strong&gt;. Use /rest/users/remove-groups instead.  Remove a user from a group.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.  In the request entity, the &lt;em&gt;context&lt;/em&gt; attribute is the group and the &lt;em&gt;itemName&lt;/em&gt; is the user.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { RemoveUserFromGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // UserPickerContext (optional)
    userPickerContext: ...,
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
| **userPickerContext** | [UserPickerContext](UserPickerContext.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user was removed from the group. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as the group has a higher permission level than the context user. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## renameUser

> RestDetailedUser renameUser(userRename)

Rename user

Rename a user.   The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { RenameUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // UserRename (optional)
    userRename: ...,
  } satisfies RenameUserRequest;

  try {
    const data = await api.renameUser(body);
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
| **userRename** | [UserRename](UserRename.md) |  | [Optional] |

### Return type

[**RestDetailedUser**](RestDetailedUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The renamed user. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission or has a lower permission level than the user being renamed. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissions1

> revokePermissions1(projectKey, repositorySlug, user, group)

Revoke all repository permissions for users and groups

Revoke all permissions for the specified repository for the given groups and users.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified repository or a higher global permission to call this resource.  In addition, a user may not revoke a group\&#39;s permission if their own permission would be revoked as a result, nor may they revoke their own permission unless they have a global permission that already implies that permission.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { RevokePermissions1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The names of the users (optional)
    user: user_example,
    // string | The names of the groups (optional)
    group: group_example,
  } satisfies RevokePermissions1Request;

  try {
    const data = await api.revokePermissions1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **user** | `string` | The names of the users | [Optional] [Defaults to `undefined`] |
| **group** | `string` | The names of the groups | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | All repository permissions were revoked from the users and groups for the specified repository. |  -  |
| **400** | No permissions were revoked because the request was invalid. No users or groups were provided. |  -  |
| **401** | The currently authenticated user is not an administrator for the specified repository. |  -  |
| **404** | The specified repository does not exist, or one or more of the users or groups provided does not exist. |  -  |
| **409** | The action was disallowed as it would revoke the currently authenticated user\&#39;s permission on the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissionsForGroup

> revokePermissionsForGroup(name)

Revoke all global permissions for group

Revoke all global permissions for a group.    The authenticated user must have:   - &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher; and - greater or equal permissions than the current permission level of the group (a user may not demote the     permission level of a group with higher permissions than them)   to call this resource. In addition, a user may not revoke a group\&#39;s permissions if their own permission level would be reduced as a result.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { RevokePermissionsForGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The name of the group
    name: name_example,
  } satisfies RevokePermissionsForGroupRequest;

  try {
    const data = await api.revokePermissionsForGroup(body);
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
| **name** | `string` | The name of the group | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | All global permissions were revoked from the group. |  -  |
| **401** | TThe currently authenticated user is not an administrator. |  -  |
| **404** | The specified group does not exist. |  -  |
| **409** | The action was disallowed as it would reduce the currently authenticated user\&#39;s permission level or the currently authenticated user has a lower permission level than the group they are attempting to modify. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissionsForGroup2

> revokePermissionsForGroup2(projectKey, name, repositorySlug)

Revoke group repository permission

Revoke all permissions for the specified repository for a group.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project or global permission to call this resource.  In addition, a user may not revoke a group\&#39;s permissions if it will reduce their own permission level.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { RevokePermissionsForGroup2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The name of the group.
    name: name_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies RevokePermissionsForGroup2Request;

  try {
    const data = await api.revokePermissionsForGroup2(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **name** | `string` | The name of the group. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | All repository permissions were revoked from the group for the specified repository. |  -  |
| **401** | The currently authenticated user is not a repository administrator for the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |
| **409** | The action was disallowed as it would reduce the currently authenticated user\&#39;s permission level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissionsForUser

> revokePermissionsForUser(name)

Revoke all global permissions for user

Revoke all global permissions for a user.   The authenticated user must have:   - &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher; and - greater or equal permissions than the current permission level of the user (a user may not demote the     permission level of a user with higher permissions than them)   to call this resource. In addition, a user may not demote their own permission level.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { RevokePermissionsForUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The name of the user
    name: name_example,
  } satisfies RevokePermissionsForUserRequest;

  try {
    const data = await api.revokePermissionsForUser(body);
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
| **name** | `string` | The name of the user | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | All global permissions were revoked from the user. |  -  |
| **401** | The currently authenticated user is not an administrator. |  -  |
| **404** | The specified user does not exist. |  -  |
| **409** | The action was disallowed as it would reduce the currently authenticated user\&#39;s permission level or the currently authenticated user has a lower permission level than the user they are attempting to modify. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissionsForUser2

> revokePermissionsForUser2(projectKey, name, repositorySlug)

Revoke user repository permission

Revoke all permissions for the specified repository for a user.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project or global permission to call this resource.  In addition, a user may not revoke their own repository permissions if they do not have a higher project or global permission.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { RevokePermissionsForUser2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The name of the user.
    name: name_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies RevokePermissionsForUser2Request;

  try {
    const data = await api.revokePermissionsForUser2(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **name** | `string` | The name of the user. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | All repository permissions were revoked from the user for the specified repository. |  -  |
| **401** | The currently authenticated user is not a repository administrator for the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |
| **409** | The action was disallowed as it would reduce the currently authenticated user\&#39;s permission level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchPermissions1

> searchPermissions1(projectKey, repositorySlug, permission, filterText, type)

Search repository permissions

Search direct and implied permissions of users and groups. This endpoint returns a superset of the results returned by the /users and /groups endpoints because it allows filtering by project and global permissions too.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project/global permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { SearchPermissions1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | Permissions to filter by. See the [permissions documentation](https://confluence.atlassian.com/display/BitbucketServer/Using+repository+permissions)for a detailed explanation of what each permission entails. This parameter can be specified multiple times to filter by more than one permission, and can contain repository, project, and global permissions.   (optional)
    permission: permission_example,
    // string | Name of the user or group to filter the name of (optional)
    filterText: filterText_example,
    // string | Type of entity (user or group)Valid entity types are:  - USER- GROUP (optional)
    type: type_example,
  } satisfies SearchPermissions1Request;

  try {
    const data = await api.searchPermissions1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **permission** | `string` | Permissions to filter by. See the [permissions documentation](https://confluence.atlassian.com/display/BitbucketServer/Using+repository+permissions)for a detailed explanation of what each permission entails. This parameter can be specified multiple times to filter by more than one permission, and can contain repository, project, and global permissions.   | [Optional] [Defaults to `undefined`] |
| **filterText** | `string` | Name of the user or group to filter the name of | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Type of entity (user or group)Valid entity types are:  - USER- GROUP | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPermissionForGroup

> setPermissionForGroup(projectKey, name, permission, repositorySlug)

Update group repository permission

Promote or demote a group\&#39;s permission level for the specified repository. Available repository permissions are:  - REPO_READ - REPO_WRITE - REPO_ADMIN   See the &lt;a href&#x3D;\&quot;https://confluence.atlassian.com/display/BitbucketServer/Using+repository+permissions\&quot;&gt;Bitbucket Data Center documentation&lt;/a&gt; for a detailed explanation of what each permission entails.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project or global permission to call this resource. In addition, a user may not demote a group\&#39;s permission level if their own permission level would be reduced as a result.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { SetPermissionForGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // Array<string> | The names of the groups.
    name: ...,
    // 'REPO_READ' | 'REPO_WRITE' | 'REPO_ADMIN' | The permission to grant
    permission: permission_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies SetPermissionForGroupRequest;

  try {
    const data = await api.setPermissionForGroup(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **name** | `Array<string>` | The names of the groups. | |
| **permission** | `REPO_READ`, `REPO_WRITE`, `REPO_ADMIN` | The permission to grant | [Defaults to `undefined`] [Enum: REPO_READ, REPO_WRITE, REPO_ADMIN] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The requested permission was granted. |  -  |
| **400** | The request was malformed or the specified permission does not exist. |  -  |
| **401** | The currently authenticated user is not a repository administrator for the specified repository. |  -  |
| **403** | The action was disallowed as it would reduce the currently authenticated user\&#39;s permission level. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPermissionForGroups

> setPermissionForGroups(name, permission)

Update global permission for group

Promote or demote a group\&#39;s global permission level. Available global permissions are:   - LICENSED_USER - PROJECT_CREATE - ADMIN - SYS_ADMIN  See the &lt;a href&#x3D;\&quot;https://confluence.atlassian.com/display/BitbucketServer/Global+permissions\&quot;&gt;Bitbucket Data Center documentation&lt;/a&gt; for a detailed explanation of what each permission entails.   The authenticated user must have:   - &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher; and - the permission they are attempting to grant or higher; and - greater or equal permissions than the current permission level of the group (a user may not demote the     permission level of a group with higher permissions than them)   to call this resource. In addition, a user may not demote a group\&#39;s permission level if their own permission level would be reduced as a result.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { SetPermissionForGroupsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // Array<string> | The names of the groups
    name: ...,
    // 'LICENSED_USER' | 'PROJECT_CREATE' | 'ADMIN' | 'SYS_ADMIN' | The permission to grant
    permission: permission_example,
  } satisfies SetPermissionForGroupsRequest;

  try {
    const data = await api.setPermissionForGroups(body);
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
| **name** | `Array<string>` | The names of the groups | |
| **permission** | `LICENSED_USER`, `PROJECT_CREATE`, `ADMIN`, `SYS_ADMIN` | The permission to grant | [Defaults to `undefined`] [Enum: LICENSED_USER, PROJECT_CREATE, ADMIN, SYS_ADMIN] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The specified permission was granted to the specified user. |  -  |
| **400** | The request was malformed or the specified permission does not exist. |  -  |
| **401** | The currently authenticated user is not an administrator or doesn\&#39;t have the specified permission they are attempting to grant. |  -  |
| **403** | The action was disallowed as it would exceed the server\&#39;s license limits. |  -  |
| **404** | The specified group does not exist. |  -  |
| **409** | The action was disallowed as it would reduce the currently authenticated user\&#39;s permission level or the currently authenticated user has a lower permission level than the group they are attempting to modify. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPermissionForUser

> setPermissionForUser(projectKey, name, permission, repositorySlug)

Update user repository permission

Promote or demote a user\&#39;s permission level for the specified repository. Available repository permissions are:  - REPO_READ&lt;/li&gt;- REPO_WRITE&lt;/li&gt;- REPO_ADMIN&lt;/li&gt;&lt;/ul&gt;See the &lt;a href&#x3D;\&quot;https://confluence.atlassian.com/display/BitbucketServer/Using+repository+permissions\&quot;&gt;Bitbucket Data Center documentation&lt;/a&gt; for a detailed explanation of what each permission entails.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository or a higher project or global permission to call this resource. In addition, a user may not reduce their own permission level unless they have a project or global permission that already implies that permission.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { SetPermissionForUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // Array<string> | The names of the users.
    name: ...,
    // 'REPO_READ' | 'REPO_WRITE' | 'REPO_ADMIN' | The permission to grant
    permission: permission_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies SetPermissionForUserRequest;

  try {
    const data = await api.setPermissionForUser(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **name** | `Array<string>` | The names of the users. | |
| **permission** | `REPO_READ`, `REPO_WRITE`, `REPO_ADMIN` | The permission to grant | [Defaults to `undefined`] [Enum: REPO_READ, REPO_WRITE, REPO_ADMIN] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The requested permission was granted. |  -  |
| **400** | The request was malformed or the specified permission does not exist. |  -  |
| **401** | The currently authenticated user is not a repository administrator for the specified repository. |  -  |
| **403** | The action was disallowed as it would reduce the currently authenticated user\&#39;s permission level. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPermissionForUsers

> setPermissionForUsers(name, permission)

Update global permission for user

Promote or demote the global permission level of a user. Available global permissions are:   - LICENSED_USER - PROJECT_CREATE - ADMIN - SYS_ADMIN   See the &lt;a href&#x3D;\&quot;https://confluence.atlassian.com/display/BitbucketServer/Global+permissions\&quot;&gt;Bitbucket Data Center documentation&lt;/a&gt; for a detailed explanation of what each permission entails.   The authenticated user must have:   - &lt;strong&gt;ADMIN&lt;/strong&gt; permission or higher; and - the permission they are attempting to grant; and - greater or equal permissions than the current permission level of the user (a user may not demote the     permission level of a user with higher permissions than them)   to call this resource. In addition, a user may not demote their own permission level.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { SetPermissionForUsersRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // Array<string> | The names of the users
    name: ...,
    // 'LICENSED_USER' | 'PROJECT_CREATE' | 'ADMIN' | 'SYS_ADMIN' | The permission to grant
    permission: permission_example,
  } satisfies SetPermissionForUsersRequest;

  try {
    const data = await api.setPermissionForUsers(body);
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
| **name** | `Array<string>` | The names of the users | |
| **permission** | `LICENSED_USER`, `PROJECT_CREATE`, `ADMIN`, `SYS_ADMIN` | The permission to grant | [Defaults to `undefined`] [Enum: LICENSED_USER, PROJECT_CREATE, ADMIN, SYS_ADMIN] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The requested permission was granted. |  -  |
| **400** | The request was malformed or the specified permission does not exist. |  -  |
| **401** | The currently authenticated user is not an administrator or doesn\&#39;t have the specified permission they are attempting to grant. |  -  |
| **403** | The action was disallowed as it would exceed the server\&#39;s license limits. |  -  |
| **404** | The specified user does not exist. |  -  |
| **409** | The action was disallowed as it would reduce the currently authenticated user\&#39;s permission level or the currently authenticated user has a lower permission level than the user they are attempting to modify. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUserDetails

> RestDetailedUser updateUserDetails(userUpdate)

Update user details

Update a user\&#39;s details.   The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { UpdateUserDetailsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // UserUpdate (optional)
    userUpdate: ...,
  } satisfies UpdateUserDetailsRequest;

  try {
    const data = await api.updateUserDetails(body);
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
| **userUpdate** | [UserUpdate](UserUpdate.md) |  | [Optional] |

### Return type

[**RestDetailedUser**](RestDetailedUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated user. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission or has a lower permission level than the user being updated. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUserPassword

> updateUserPassword(adminPasswordUpdate)

Set password for user

Update a user\&#39;s password.   The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource, and may not update the password of a user with greater permissions than themselves.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { UpdateUserPasswordRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // AdminPasswordUpdate (optional)
    adminPasswordUpdate: ...,
  } satisfies UpdateUserPasswordRequest;

  try {
    const data = await api.updateUserPassword(body);
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
| **adminPasswordUpdate** | [AdminPasswordUpdate](AdminPasswordUpdate.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The user\&#39;s password was successfully updated. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission or has a lower permission level than the user having their password updated. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateErasable

> validateErasable(name)

Check user removal

Validate if a user can be erased.  A username is only valid for erasure if it exists as the username of a deleted user. This endpoint will return an appropriate error response if the supplied username is invalid for erasure.  This endpoint does &lt;strong&gt;not&lt;/strong&gt; perform the actual user erasure, and will not modify the application in any way.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  PermissionManagementApi,
} from 'bitbucket-api';
import type { ValidateErasableRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PermissionManagementApi();

  const body = {
    // string | The username of the user to validate erasability for.
    name: name_example,
  } satisfies ValidateErasableRequest;

  try {
    const data = await api.validateErasable(body);
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
| **name** | `string` | The username of the user to validate erasability for. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | the user is erasable |  -  |
| **400** | The request was malformed (e.g. if no username was supplied). |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission or has a lower permission level than the user being erased. |  -  |
| **404** | The requested username does not exist. |  -  |
| **409** | The requested username is the username of a not deleted user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

