# UserManagementApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addUsersToGroup**](UserManagementApi.md#adduserstogroup) | **POST** /api/latest/admin/groups/{name}/add-users |  |
| [**assignGroups**](UserManagementApi.md#assigngroups) | **POST** /api/latest/admin/users/{name}/groups |  |
| [**changeUserPassword**](UserManagementApi.md#changeuserpassword) | **PUT** /api/latest/admin/users/credentials |  |
| [**createGroup1**](UserManagementApi.md#creategroup1) | **POST** /api/latest/admin/groups |  |
| [**createUser**](UserManagementApi.md#createuser) | **POST** /api/latest/admin/users |  |
| [**createUserRepositoryAlias**](UserManagementApi.md#createuserrepositoryalias) | **POST** /api/latest/admin/users/{name}/alias |  |
| [**deleteGroup**](UserManagementApi.md#deletegroup) | **DELETE** /api/latest/admin/groups/{name} |  |
| [**deleteUser**](UserManagementApi.md#deleteuser) | **DELETE** /api/latest/admin/users/{name} |  |
| [**findAssignedGroups**](UserManagementApi.md#findassignedgroups) | **GET** /api/latest/admin/users/{name}/assigned-groups |  |
| [**findUnassignedGroups**](UserManagementApi.md#findunassignedgroups) | **GET** /api/latest/admin/users/{name}/unassigned-groups |  |
| [**findUnassignedUserRepositoryAliases**](UserManagementApi.md#findunassigneduserrepositoryaliases) | **GET** /api/latest/admin/users/{name}/unassigned-aliases |  |
| [**findUsersInGroup**](UserManagementApi.md#findusersingroup) | **GET** /api/latest/admin/groups/{name}/more-members |  |
| [**findUsersNotInGroup**](UserManagementApi.md#findusersnotingroup) | **GET** /api/latest/admin/groups/{name}/more-non-members |  |
| [**getGroups**](UserManagementApi.md#getgroups) | **GET** /api/latest/admin/groups |  |
| [**getUserAccessTokens**](UserManagementApi.md#getuseraccesstokens) | **GET** /api/latest/admin/users/{name}/access-token |  |
| [**getUserRepositoryAliases**](UserManagementApi.md#getuserrepositoryaliases) | **GET** /api/latest/admin/users/{name}/alias |  |
| [**getUsers**](UserManagementApi.md#getusers) | **GET** /api/latest/admin/users |  |
| [**removeUsersFromGroup**](UserManagementApi.md#removeusersfromgroup) | **DELETE** /api/latest/admin/groups/{name}/remove-users |  |
| [**renameUser**](UserManagementApi.md#renameuser) | **PUT** /api/latest/admin/users/rename |  |
| [**renameUserPost**](UserManagementApi.md#renameuserpost) | **POST** /admin/latest/user |  |
| [**renameUserPut**](UserManagementApi.md#renameuserput) | **PUT** /admin/latest/user/{newUserName} |  |
| [**revokeUserToken**](UserManagementApi.md#revokeusertoken) | **DELETE** /api/latest/admin/users/{name}/access-token/{tokenId} |  |
| [**unassignGroups**](UserManagementApi.md#unassigngroups) | **DELETE** /api/latest/admin/users/{name}/groups |  |
| [**unlinkUserRepositoryAlias**](UserManagementApi.md#unlinkuserrepositoryalias) | **DELETE** /api/latest/admin/users/{name}/alias |  |



## addUsersToGroup

> addUsersToGroup(name, requestBody)



Add multiple users to a group. The list of usernames should be passed as request body. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { AddUsersToGroupRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the group
    name: name_example,
    // Array<string> | Usernames of users to add (optional)
    requestBody: ...,
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
| **name** | `string` | The name identifying the group | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` | Usernames of users to add | [Optional] |

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
| **204** | All the users were added to the group |  -  |
| **400** | When the users couldn\&#39;t be added to the group. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified group or users do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## assignGroups

> assignGroups(name, requestBody)



Add a user to multiple groups. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { AssignGroupsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // Array<string> | Group names
    requestBody: ...,
  } satisfies AssignGroupsRequest;

  try {
    const data = await api.assignGroups(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` | Group names | |

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
| **204** | The user has been added to all specified groups |  -  |
| **400** | When user couldn\&#39;t be added to one or more groups. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user or groups do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## changeUserPassword

> changeUserPassword(restUserPasswordUpdate)



Change password of specified user. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { ChangeUserPasswordRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // RestUserPasswordUpdate | User password change request
    restUserPasswordUpdate: ...,
  } satisfies ChangeUserPasswordRequest;

  try {
    const data = await api.changeUserPassword(body);
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
| **restUserPasswordUpdate** | [RestUserPasswordUpdate](RestUserPasswordUpdate.md) | User password change request | |

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
| **204** | Users password has been changed |  -  |
| **400** | When the password couldn\&#39;t be changed. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createGroup1

> createGroup1(restGroup)



Create a new group. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { CreateGroup1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // RestGroup | Group to create
    restGroup: ...,
  } satisfies CreateGroup1Request;

  try {
    const data = await api.createGroup1(body);
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
| **restGroup** | [RestGroup](RestGroup.md) | Group to create | |

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
| **204** | When group has been created |  -  |
| **400** | When group couldn\&#39;t be created. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createUser

> createUser(restNewUser)



Create a new user. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { CreateUserRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // RestNewUser | User to create
    restNewUser: ...,
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
| **restNewUser** | [RestNewUser](RestNewUser.md) | User to create | |

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
| **204** | When user has been created |  -  |
| **400** | User couldn\&#39;t be created. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createUserRepositoryAlias

> createUserRepositoryAlias(name, requestBody)



Link existing unlined alias or create the new one. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { CreateUserRepositoryAliasRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // Array<string> | Aliases array
    requestBody: ...,
  } satisfies CreateUserRepositoryAliasRequest;

  try {
    const data = await api.createUserRepositoryAlias(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` | Aliases array | |

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
| **204** | When alias has been created |  -  |
| **400** | Alias couldn\&#39;t be created. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user or groups do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteGroup

> deleteGroup(name)



Deletes the specified group, removing it from the system. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { DeleteGroupRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the group to delete
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
| **name** | `string` | The name identifying the group to delete | [Defaults to `undefined`] |

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
| **204** | When group was deleted successfully |  -  |
| **400** | When group couldn\&#39;t be deleted. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified group does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUser

> deleteUser(name)



Deletes the specified user, removing them from the system. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { DeleteUserRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user to delete
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
| **name** | `string` | The name identifying the user to delete | [Defaults to `undefined`] |

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
| **204** | When user has been deleted successfully or user does not exist |  -  |
| **400** | User couldn\&#39;t be deleted. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAssignedGroups

> GetGroups200Response findAssignedGroups(name, filter, limit, start)



Retrieves a list of groups to which the user belongs. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { FindAssignedGroupsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // string | If specified, only groups with names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies FindAssignedGroupsRequest;

  try {
    const data = await api.findAssignedGroups(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **filter** | `string` | If specified, only groups with names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups200Response**](GetGroups200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUnassignedGroups

> GetGroups200Response findUnassignedGroups(name, filter, limit, start)



Retrieves a list of groups to which the user does not belong. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { FindUnassignedGroupsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // string | If specified, only groups with names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies FindUnassignedGroupsRequest;

  try {
    const data = await api.findUnassignedGroups(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **filter** | `string` | If specified, only groups with names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups200Response**](GetGroups200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUnassignedUserRepositoryAliases

> GetUserRepositoryAliases200Response findUnassignedUserRepositoryAliases(name, filter, limit, start)



Retrieves a list of unlinked aliases to which the user does not belong. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { FindUnassignedUserRepositoryAliasesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // string | If specified, only aliases with names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies FindUnassignedUserRepositoryAliasesRequest;

  try {
    const data = await api.findUnassignedUserRepositoryAliases(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **filter** | `string` | If specified, only aliases with names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUserRepositoryAliases200Response**](GetUserRepositoryAliases200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of aliases |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsersInGroup

> FindUsersInGroup200Response findUsersInGroup(name, filter, limit, start)



Retrieves a list of users that are members of a specified group. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { FindUsersInGroupRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The group which should be used to locate members
    name: name_example,
    // string | If specified only users with usernames, display names or email addresses containing the supplied string (case insensitive) will be returned (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
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
| **name** | `string` | The group which should be used to locate members | [Defaults to `undefined`] |
| **filter** | `string` | If specified only users with usernames, display names or email addresses containing the supplied string (case insensitive) will be returned | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**FindUsersInGroup200Response**](FindUsersInGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified group or users do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsersNotInGroup

> FindUsersInGroup200Response findUsersNotInGroup(name, filter, limit, start)



Retrieves a list of users that are not members of a specified group. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { FindUsersNotInGroupRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The group which should be used to locate non-members
    name: name_example,
    // string | If specified only users with usernames, display names or email addresses containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
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
| **name** | `string` | The group which should be used to locate non-members | [Defaults to `undefined`] |
| **filter** | `string` | If specified only users with usernames, display names or email addresses containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**FindUsersInGroup200Response**](FindUsersInGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroups

> GetGroups200Response getGroups(filter, limit, start)



Retrieve a paginated list of groups. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { GetGroupsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | If specified only group names containing the supplied string (case insensitive) will be returned (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
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
| **filter** | `string` | If specified only group names containing the supplied string (case insensitive) will be returned | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups200Response**](GetGroups200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of groups |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserAccessTokens

> GetUserTokens200Response getUserAccessTokens(name, limit, start)



Retrieve a page of user\&#39;s access tokens. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { GetUserAccessTokensRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetUserAccessTokensRequest;

  try {
    const data = await api.getUserAccessTokens(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUserTokens200Response**](GetUserTokens200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of access tokens |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserRepositoryAliases

> GetUserRepositoryAliases200Response getUserRepositoryAliases(name, limit, start)



Retrieve a page of aliases. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { GetUserRepositoryAliasesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetUserRepositoryAliasesRequest;

  try {
    const data = await api.getUserRepositoryAliases(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUserRepositoryAliases200Response**](GetUserRepositoryAliases200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of aliases |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers

> FindUsersInGroup200Response getUsers(filter, limit, start)



Retrieve a page of users. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { GetUsersRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | If specified only users, whose username, full name or email contain the supplied string (case insensitive) will be returned (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetUsersRequest;

  try {
    const data = await api.getUsers(body);
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
| **filter** | `string` | If specified only users, whose username, full name or email contain the supplied string (case insensitive) will be returned | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**FindUsersInGroup200Response**](FindUsersInGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeUsersFromGroup

> removeUsersFromGroup(name, requestBody)



Remove multiple users from a group. The list of usernames should be passed as request body. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { RemoveUsersFromGroupRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the group
    name: name_example,
    // Array<string> | Usernames of users to remove (optional)
    requestBody: ...,
  } satisfies RemoveUsersFromGroupRequest;

  try {
    const data = await api.removeUsersFromGroup(body);
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
| **name** | `string` | The name identifying the group | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` | Usernames of users to remove | [Optional] |

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
| **204** | All the users were removed from the group |  -  |
| **400** | When the users couldn\&#39;t be removed from the group. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified group or users do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## renameUser

> renameUser(restUserRenameRequest)



Renames specified user. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { RenameUserRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // RestUserRenameRequest | User rename request
    restUserRenameRequest: ...,
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
| **restUserRenameRequest** | [RestUserRenameRequest](RestUserRenameRequest.md) | User rename request | |

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
| **204** | When user has been renamed successfully |  -  |
| **400** | When the user couldn\&#39;t be renamed. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## renameUserPost

> renameUserPost(restUserRenameRequest, externalRename)



Renames specified user.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { RenameUserPostRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // RestUserRenameRequest | User rename request
    restUserRenameRequest: ...,
    // string | Set to true if the rename has been done externally and Bamboo is notified of it (optional)
    externalRename: externalRename_example,
  } satisfies RenameUserPostRequest;

  try {
    const data = await api.renameUserPost(body);
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
| **restUserRenameRequest** | [RestUserRenameRequest](RestUserRenameRequest.md) | User rename request | |
| **externalRename** | `string` | Set to true if the rename has been done externally and Bamboo is notified of it | [Optional] [Defaults to `undefined`] |

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
| **204** | User has been successfully renamed. |  -  |
| **400** | Request body is invalid. |  -  |
| **401** | Authentication required. |  -  |
| **403** | The currently authenticated user does not have sufficient permissions. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## renameUserPut

> renameUserPut(newUserName, restUserRenameRequest, externalRename)



Renames specified user.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { RenameUserPutRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | User\'s new username
    newUserName: newUserName_example,
    // RestUserRenameRequest | User rename request
    restUserRenameRequest: ...,
    // string | Set to true if the rename has been done externally and Bamboo is notified of it (optional)
    externalRename: externalRename_example,
  } satisfies RenameUserPutRequest;

  try {
    const data = await api.renameUserPut(body);
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
| **newUserName** | `string` | User\&#39;s new username | [Defaults to `undefined`] |
| **restUserRenameRequest** | [RestUserRenameRequest](RestUserRenameRequest.md) | User rename request | |
| **externalRename** | `string` | Set to true if the rename has been done externally and Bamboo is notified of it | [Optional] [Defaults to `undefined`] |

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
| **204** | User has been successfully renamed. |  -  |
| **400** | Request body is invalid. |  -  |
| **401** | Authentication required. |  -  |
| **403** | The currently authenticated user does not have sufficient permissions. |  -  |
| **404** | The specified user does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeUserToken

> revokeUserToken(tokenId, name)



Revoke user\&#39;s access token. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { RevokeUserTokenRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | id of token
    tokenId: tokenId_example,
    // string | The name identifying the user
    name: name_example,
  } satisfies RevokeUserTokenRequest;

  try {
    const data = await api.revokeUserToken(body);
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
| **tokenId** | `string` | id of token | [Defaults to `undefined`] |
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |

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
| **204** | When token has been successfully revoked |  -  |
| **400** | User doesn\&#39;t own provided token. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unassignGroups

> unassignGroups(name, requestBody)



Remove a user from multiple groups.  The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { UnassignGroupsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // Array<string> | User groups to unassign from
    requestBody: ...,
  } satisfies UnassignGroupsRequest;

  try {
    const data = await api.unassignGroups(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` | User groups to unassign from | |

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
| **204** | The user has been removed from all specified groups |  -  |
| **400** | When user couldn\&#39;t be removed from one or more groups. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user or groups do not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unlinkUserRepositoryAlias

> unlinkUserRepositoryAlias(name, restUserAlias)



Unlink the specified alias from user, removing them from the system. The authenticated user must have restricted administrative permission or higher to use this resource.

### Example

```ts
import {
  Configuration,
  UserManagementApi,
} from 'bamboo-api';
import type { UnlinkUserRepositoryAliasRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new UserManagementApi();

  const body = {
    // string | The name identifying the user
    name: name_example,
    // RestUserAlias | Alias to unlink
    restUserAlias: ...,
  } satisfies UnlinkUserRepositoryAliasRequest;

  try {
    const data = await api.unlinkUserRepositoryAlias(body);
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
| **name** | `string` | The name identifying the user | [Defaults to `undefined`] |
| **restUserAlias** | [RestUserAlias](RestUserAlias.md) | Alias to unlink | |

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
| **204** | When alias has been unlinked successfully or given user doesn\&#39;t have this alias |  -  |
| **400** | User alias couldn\&#39;t be deleted. The response will hold additional information |  -  |
| **403** | The currently authenticated user does not have sufficient permissions |  -  |
| **404** | The specified user does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

