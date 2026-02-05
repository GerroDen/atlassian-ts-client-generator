# ProjectRolesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProjectRole**](ProjectRolesApi.md#createprojectrole) | **POST** /rest/api/3/role | Create project role |
| [**deleteProjectRole**](ProjectRolesApi.md#deleteprojectrole) | **DELETE** /rest/api/3/role/{id} | Delete project role |
| [**fullyUpdateProjectRole**](ProjectRolesApi.md#fullyupdateprojectrole) | **PUT** /rest/api/3/role/{id} | Fully update project role |
| [**getAllProjectRoles**](ProjectRolesApi.md#getallprojectroles) | **GET** /rest/api/3/role | Get all project roles |
| [**getProjectRole**](ProjectRolesApi.md#getprojectrole) | **GET** /rest/api/3/project/{projectIdOrKey}/role/{id} | Get project role for project |
| [**getProjectRoleById**](ProjectRolesApi.md#getprojectrolebyid) | **GET** /rest/api/3/role/{id} | Get project role by ID |
| [**getProjectRoleDetails**](ProjectRolesApi.md#getprojectroledetails) | **GET** /rest/api/3/project/{projectIdOrKey}/roledetails | Get project role details |
| [**getProjectRoles**](ProjectRolesApi.md#getprojectroles) | **GET** /rest/api/3/project/{projectIdOrKey}/role | Get project roles for project |
| [**partialUpdateProjectRole**](ProjectRolesApi.md#partialupdateprojectrole) | **POST** /rest/api/3/role/{id} | Partial update project role |



## createProjectRole

> ProjectRole createProjectRole(createUpdateRoleRequestBean)

Create project role

Creates a new project role with no [default actors](#api-rest-api-3-resolution-get). You can use the [Add default actors to project role](#api-rest-api-3-role-id-actors-post) operation to add default actors to the project role after creating it.  *Note that although a new project role is available to all projects upon creation, any default actors that are associated with the project role are not added to projects that existed prior to the role being created.*&lt;  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { CreateProjectRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  const body = {
    // CreateUpdateRoleRequestBean
    createUpdateRoleRequestBean: {"description":"A project role that represents developers in a project","name":"Developers"},
  } satisfies CreateProjectRoleRequest;

  try {
    const data = await api.createProjectRole(body);
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
| **createUpdateRoleRequestBean** | [CreateUpdateRoleRequestBean](CreateUpdateRoleRequestBean.md) |  | |

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
| **400** | Returned if the request is not valid. The &#x60;name&#x60; cannot be empty or start or end with whitespace. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have administrative permissions. |  -  |
| **409** | Returned if a project role with the provided name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProjectRole

> deleteProjectRole(id, swap)

Delete project role

Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { DeleteProjectRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  const body = {
    // number | The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // number | The ID of the project role that will replace the one being deleted. The swap will attempt to swap the role in schemes (notifications, permissions, issue security), workflows, worklogs and comments. (optional)
    swap: 789,
  } satisfies DeleteProjectRoleRequest;

  try {
    const data = await api.deleteProjectRole(body);
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
| **id** | `number` | The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | [Defaults to `undefined`] |
| **swap** | `number` | The ID of the project role that will replace the one being deleted. The swap will attempt to swap the role in schemes (notifications, permissions, issue security), workflows, worklogs and comments. | [Optional] [Defaults to `undefined`] |

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
| **400** | Returned if the request is invalid or if the replacement project role is not found. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have administrative permissions. |  -  |
| **404** | Returned if the project role being deleted is not found. |  -  |
| **409** | Returned if the project role being deleted is in use and a replacement project role is not specified in the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## fullyUpdateProjectRole

> ProjectRole fullyUpdateProjectRole(id, createUpdateRoleRequestBean)

Fully update project role

Updates the project role\&#39;s name and description. You must include both a name and a description in the request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { FullyUpdateProjectRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  const body = {
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // CreateUpdateRoleRequestBean
    createUpdateRoleRequestBean: {"description":"A project role that represents developers in a project","name":"Developers"},
  } satisfies FullyUpdateProjectRoleRequest;

  try {
    const data = await api.fullyUpdateProjectRole(body);
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
| **createUpdateRoleRequestBean** | [CreateUpdateRoleRequestBean](CreateUpdateRoleRequestBean.md) |  | |

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
| **400** | Returned if the request is not valid. The &#x60;name&#x60; cannot be empty or start or end with whitespace. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have administrative permissions. |  -  |
| **404** | Returned if the project role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllProjectRoles

> Array&lt;ProjectRole&gt; getAllProjectRoles()

Get all project roles

Gets a list of all project roles, complete with project role details and default actors.  ### About project roles ###  [Project roles](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-roles/) are a flexible way to to associate users and groups with projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira applications).  Project roles are used in [permission schemes](#api-rest-api-3-permissionscheme-get), [email notification schemes](#api-rest-api-3-notificationscheme-get), [issue security levels](#api-rest-api-3-issuesecurityschemes-get), [comment visibility](#api-rest-api-3-comment-list-post), and workflow conditions.  #### Members and actors ####  In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated with a project role.  Actors may be set as [default members](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-roles/#Specifying-\&#39;default-members\&#39;-for-a-project-role) of the project role or set at the project level:   *  Default actors: Users and groups that are assigned to the project role for all newly created projects. The default actors can be removed at the project level later if desired.  *  Actors: Users and groups that are associated with a project role for a project, which may differ from the default actors. This enables you to assign a user to different roles in different projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { GetAllProjectRolesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  try {
    const data = await api.getAllProjectRoles();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ProjectRole&gt;**](ProjectRole.md)

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
| **403** | Returned if the user does not have administrative permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectRole

> ProjectRole getProjectRole(projectIdOrKey, id, excludeInactiveUsers)

Get project role for project

Returns a project role\&#39;s details and actors associated with the project. The list of actors is sorted by display name.  To check whether a user belongs to a role based on their group memberships, use [Get user](#api-rest-api-3-user-get) with the &#x60;groups&#x60; expand parameter selected. Then check whether the user keys and groups match with the actors returned for the project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { GetProjectRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // boolean | Exclude inactive users. (optional)
    excludeInactiveUsers: true,
  } satisfies GetProjectRoleRequest;

  try {
    const data = await api.getProjectRole(body);
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
| **excludeInactiveUsers** | `boolean` | Exclude inactive users. | [Optional] [Defaults to `false`] |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  the project or project role is not found.  *  the user does not have administrative permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectRoleById

> ProjectRole getProjectRoleById(id)

Get project role by ID

Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { GetProjectRoleByIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  const body = {
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
  } satisfies GetProjectRoleByIdRequest;

  try {
    const data = await api.getProjectRoleById(body);
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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have administrative permissions. |  -  |
| **404** | Returned if the project role is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectRoleDetails

> Array&lt;ProjectRoleDetails&gt; getProjectRoleDetails(projectIdOrKey, currentMember, excludeConnectAddons, excludeOtherServiceRoles)

Get project role details

Returns all [project roles](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-roles/) and the details for each role. Note that the list of project roles is common to all projects.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { GetProjectRoleDetailsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // boolean | Whether the roles should be filtered to include only those the user is assigned to. (optional)
    currentMember: true,
    // boolean (optional)
    excludeConnectAddons: true,
    // boolean | Do not return the default JSM company-managed space from CSM spaces, or the default CSM roles from JSM spaces. (optional)
    excludeOtherServiceRoles: true,
  } satisfies GetProjectRoleDetailsRequest;

  try {
    const data = await api.getProjectRoleDetails(body);
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
| **currentMember** | `boolean` | Whether the roles should be filtered to include only those the user is assigned to. | [Optional] [Defaults to `false`] |
| **excludeConnectAddons** | `boolean` |  | [Optional] [Defaults to `false`] |
| **excludeOtherServiceRoles** | `boolean` | Do not return the default JSM company-managed space from CSM spaces, or the default CSM roles from JSM spaces. | [Optional] [Defaults to `false`] |

### Return type

[**Array&lt;ProjectRoleDetails&gt;**](ProjectRoleDetails.md)

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
| **404** | Returned if the project is not found or if the user does not have the necessary permissions for the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectRoles

> { [key: string]: string; } getProjectRoles(projectIdOrKey)

Get project roles for project

Returns a list of [project roles](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-roles/) for the project returning the name and self URL for each role.  Note that all project roles are shared with all projects in Jira Cloud. See [Get all project roles](#api-rest-api-3-role-get) for more information.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { GetProjectRolesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
  } satisfies GetProjectRolesRequest;

  try {
    const data = await api.getProjectRoles(body);
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

### Return type

**{ [key: string]: string; }**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing or if the user lacks administrative permissions for the project. |  -  |
| **404** | Returned if the project is not found or or if the user does not have administrative permissions for the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partialUpdateProjectRole

> ProjectRole partialUpdateProjectRole(id, createUpdateRoleRequestBean)

Partial update project role

Updates either the project role\&#39;s name or its description.  You cannot update both the name and description at the same time using this operation. If you send a request with a name and a description only the name is updated.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectRolesApi,
} from 'jira-cloud-api';
import type { PartialUpdateProjectRoleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectRolesApi(config);

  const body = {
    // number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    id: 789,
    // CreateUpdateRoleRequestBean
    createUpdateRoleRequestBean: {"description":"A project role that represents developers in a project","name":"Developers"},
  } satisfies PartialUpdateProjectRoleRequest;

  try {
    const data = await api.partialUpdateProjectRole(body);
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
| **createUpdateRoleRequestBean** | [CreateUpdateRoleRequestBean](CreateUpdateRoleRequestBean.md) |  | |

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

