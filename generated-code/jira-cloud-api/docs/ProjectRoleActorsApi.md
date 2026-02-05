# ProjectRoleActorsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addActorUsers**](ProjectRoleActorsApi.md#addactorusers) | **POST** /rest/api/3/project/{projectIdOrKey}/role/{id} | Add actors to project role |
| [**addProjectRoleActorsToRole**](ProjectRoleActorsApi.md#addprojectroleactorstorole) | **POST** /rest/api/3/role/{id}/actors | Add default actors to project role |
| [**deleteActor**](ProjectRoleActorsApi.md#deleteactor) | **DELETE** /rest/api/3/project/{projectIdOrKey}/role/{id} | Delete actors from project role |
| [**deleteProjectRoleActorsFromRole**](ProjectRoleActorsApi.md#deleteprojectroleactorsfromrole) | **DELETE** /rest/api/3/role/{id}/actors | Delete default actors from project role |
| [**getProjectRoleActorsForRole**](ProjectRoleActorsApi.md#getprojectroleactorsforrole) | **GET** /rest/api/3/role/{id}/actors | Get default actors for project role |
| [**setActors**](ProjectRoleActorsApi.md#setactors) | **PUT** /rest/api/3/project/{projectIdOrKey}/role/{id} | Set actors for project role |



## addActorUsers

> ProjectRole addActorUsers(projectIdOrKey, id, actorsMap)

Add actors to project role

Adds actors to a project role for the project.  To replace all actors for the project, use [Set actors for project role](#api-rest-api-3-project-projectIdOrKey-role-id-put).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRoleActorsApi,
} from 'jira-cloud-api';
import type { AddActorUsersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRoleActorsApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // ActorsMap | The groups or users to associate with the project role for this project. Provide the user account ID, group name, or group ID. As a group\'s name can change, use of group ID is recommended.
    actorsMap: {"groupId":["952d12c3-5b5b-4d04-bb32-44d383afc4b2"]},
  } satisfies AddActorUsersRequest;

  try {
    const data = await api.addActorUsers(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **id** | `number` | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | [Defaults to `undefined`] |
| **actorsMap** | [ActorsMap](ActorsMap.md) | The groups or users to associate with the project role for this project. Provide the user account ID, group name, or group ID. As a group\&#39;s name can change, use of group ID is recommended. | |

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. The complete list of actors for the project is returned.  For example, the cURL request above adds a group, *jira-developers*. For the response below to be returned as a result of that request, the user *Mia Krystof* would have previously been added as a &#x60;user&#x60; actor for this project. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing or if the calling user lacks administrative permissions for the project. |  -  |
| **404** | Returned if:   *  the project is not found.  *  the user or group is not found.  *  the group or user is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addProjectRoleActorsToRole

> ProjectRole addProjectRoleActorsToRole(id, actorInputBean)

Add default actors to project role

Adds [default actors](#api-rest-api-3-resolution-get) to a role. You may add groups or users, but you cannot add groups and users in the same request.  Changing a project role\&#39;s default actors does not affect project role members for projects already created.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRoleActorsApi,
} from 'jira-cloud-api';
import type { AddProjectRoleActorsToRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRoleActorsApi(config);

  const body = {
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // ActorInputBean
    actorInputBean: {"user":["admin"]},
  } satisfies AddProjectRoleActorsToRoleRequest;

  try {
    const data = await api.addProjectRoleActorsToRole(body);
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
| **id** | `number` | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | [Defaults to `undefined`] |
| **actorInputBean** | [ActorInputBean](ActorInputBean.md) |  | |

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have administrative permissions. |  -  |
| **404** | Returned if the project role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteActor

> deleteActor(projectIdOrKey, id, user, group, groupId)

Delete actors from project role

Deletes actors from a project role for the project.  To remove default actors from the project role, use [Delete default actors from project role](#api-rest-api-3-role-id-actors-delete).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRoleActorsApi,
} from 'jira-cloud-api';
import type { DeleteActorRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRoleActorsApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // string | The user account ID of the user to remove from the project role. (optional)
    user: 5b10ac8d82e05b22cc7d4ef5,
    // string | The name of the group to remove from the project role. This parameter cannot be used with the `groupId` parameter. As a group\'s name can change, use of `groupId` is recommended. (optional)
    group: group_example,
    // string | The ID of the group to remove from the project role. This parameter cannot be used with the `group` parameter. (optional)
    groupId: groupId_example,
  } satisfies DeleteActorRequest;

  try {
    const data = await api.deleteActor(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **id** | `number` | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | [Defaults to `undefined`] |
| **user** | `string` | The user account ID of the user to remove from the project role. | [Optional] [Defaults to `undefined`] |
| **group** | `string` | The name of the group to remove from the project role. This parameter cannot be used with the &#x60;groupId&#x60; parameter. As a group\&#39;s name can change, use of &#x60;groupId&#x60; is recommended. | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | The ID of the group to remove from the project role. This parameter cannot be used with the &#x60;group&#x60; parameter. | [Optional] [Defaults to `undefined`] |

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
| **400** | Returned if the request is not valid. |  -  |
| **404** | Returned if:   *  the project or project role is not found.  *  the calling user does not have administrative permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProjectRoleActorsFromRole

> ProjectRole deleteProjectRoleActorsFromRole(id, user, groupId, group)

Delete default actors from project role

Deletes the [default actors](#api-rest-api-3-resolution-get) from a project role. You may delete a group or user, but you cannot delete a group and a user in the same request.  Changing a project role\&#39;s default actors does not affect project role members for projects already created.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRoleActorsApi,
} from 'jira-cloud-api';
import type { DeleteProjectRoleActorsFromRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRoleActorsApi(config);

  const body = {
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // string | The user account ID of the user to remove as a default actor. (optional)
    user: 5b10ac8d82e05b22cc7d4ef5,
    // string | The group ID of the group to be removed as a default actor. This parameter cannot be used with the `group` parameter. (optional)
    groupId: groupId_example,
    // string | The group name of the group to be removed as a default actor.This parameter cannot be used with the `groupId` parameter. As a group\'s name can change, use of `groupId` is recommended. (optional)
    group: group_example,
  } satisfies DeleteProjectRoleActorsFromRoleRequest;

  try {
    const data = await api.deleteProjectRoleActorsFromRole(body);
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
| **id** | `number` | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | [Defaults to `undefined`] |
| **user** | `string` | The user account ID of the user to remove as a default actor. | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | The group ID of the group to be removed as a default actor. This parameter cannot be used with the &#x60;group&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **group** | `string` | The group name of the group to be removed as a default actor.This parameter cannot be used with the &#x60;groupId&#x60; parameter. As a group\&#39;s name can change, use of &#x60;groupId&#x60; is recommended. | [Optional] [Defaults to `undefined`] |

### Return type

[**ProjectRole**](ProjectRole.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have administrative permissions. |  -  |
| **404** | Returned if the project role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectRoleActorsForRole

> ProjectRole getProjectRoleActorsForRole(id)

Get default actors for project role

Returns the [default actors](#api-rest-api-3-resolution-get) for the project role.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRoleActorsApi,
} from 'jira-cloud-api';
import type { GetProjectRoleActorsForRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRoleActorsApi(config);

  const body = {
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
  } satisfies GetProjectRoleActorsForRoleRequest;

  try {
    const data = await api.getProjectRoleActorsForRole(body);
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
| **id** | `number` | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | [Defaults to `undefined`] |

### Return type

[**ProjectRole**](ProjectRole.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have administrative permissions. |  -  |
| **404** | Returned if the project role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setActors

> ProjectRole setActors(projectIdOrKey, id, projectRoleActorsUpdateBean)

Set actors for project role

Sets the actors for a project role for a project, replacing all existing actors.  To add actors to the project without overwriting the existing list, use [Add actors to project role](#api-rest-api-3-project-projectIdOrKey-role-id-post).  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRoleActorsApi,
} from 'jira-cloud-api';
import type { SetActorsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRoleActorsApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // ProjectRoleActorsUpdateBean | The groups or users to associate with the project role for this project. Provide the user account ID, group name, or group ID. As a group\'s name can change, use of group ID is recommended.
    projectRoleActorsUpdateBean: {"categorisedActors":{"atlassian-group-role-actor-id":["952d12c3-5b5b-4d04-bb32-44d383afc4b2"],"atlassian-user-role-actor":["12345678-9abc-def1-2345-6789abcdef12"]}},
  } satisfies SetActorsRequest;

  try {
    const data = await api.setActors(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **id** | `number` | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | [Defaults to `undefined`] |
| **projectRoleActorsUpdateBean** | [ProjectRoleActorsUpdateBean](ProjectRoleActorsUpdateBean.md) | The groups or users to associate with the project role for this project. Provide the user account ID, group name, or group ID. As a group\&#39;s name can change, use of group ID is recommended. | |

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. The complete list of actors for the project is returned. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing or if the calling user lacks administrative permissions for the project. |  -  |
| **404** | Returned if:   *  the project is not found.  *  a user or group is not found.  *  a group or user is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

