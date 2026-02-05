# ProjectPermissionSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assignPermissionScheme**](ProjectPermissionSchemesApi.md#assignpermissionscheme) | **PUT** /rest/api/3/project/{projectKeyOrId}/permissionscheme | Assign permission scheme |
| [**getAssignedPermissionScheme**](ProjectPermissionSchemesApi.md#getassignedpermissionscheme) | **GET** /rest/api/3/project/{projectKeyOrId}/permissionscheme | Get assigned permission scheme |
| [**getProjectIssueSecurityScheme**](ProjectPermissionSchemesApi.md#getprojectissuesecurityscheme) | **GET** /rest/api/3/project/{projectKeyOrId}/issuesecuritylevelscheme | Get project issue security scheme |
| [**getSecurityLevelsForProject**](ProjectPermissionSchemesApi.md#getsecuritylevelsforproject) | **GET** /rest/api/3/project/{projectKeyOrId}/securitylevel | Get project issue security levels |



## assignPermissionScheme

> PermissionScheme assignPermissionScheme(projectKeyOrId, idBean, expand)

Assign permission scheme

Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)

### Example

```ts
import {
  Configuration,
  ProjectPermissionSchemesApi,
} from 'jira-cloud-api';
import type { AssignPermissionSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectPermissionSchemesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectKeyOrId: projectKeyOrId_example,
    // IdBean
    idBean: {"id":10000},
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. (optional)
    expand: expand_example,
  } satisfies AssignPermissionSchemeRequest;

  try {
    const data = await api.assignPermissionScheme(body);
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
| **projectKeyOrId** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **idBean** | [IdBean](IdBean.md) |  | |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [Optional] [Defaults to `undefined`] |

### Return type

[**PermissionScheme**](PermissionScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if:   *  the user does not have the necessary permission to edit the project\&#39;s configuration.  *  the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be assigned to projects on free plans. |  -  |
| **404** | Returned if the project or permission scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAssignedPermissionScheme

> PermissionScheme getAssignedPermissionScheme(projectKeyOrId, expand)

Get assigned permission scheme

Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).

### Example

```ts
import {
  Configuration,
  ProjectPermissionSchemesApi,
} from 'jira-cloud-api';
import type { GetAssignedPermissionSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectPermissionSchemesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectKeyOrId: projectKeyOrId_example,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. (optional)
    expand: expand_example,
  } satisfies GetAssignedPermissionSchemeRequest;

  try {
    const data = await api.getAssignedPermissionScheme(body);
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
| **projectKeyOrId** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [Optional] [Defaults to `undefined`] |

### Return type

[**PermissionScheme**](PermissionScheme.md)

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
| **403** | Returned if the user does not have permission to view the project\&#39;s configuration. |  -  |
| **404** | Returned if the project is not found or the user does not have permission to view the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectIssueSecurityScheme

> SecurityScheme getProjectIssueSecurityScheme(projectKeyOrId)

Get project issue security scheme

Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).

### Example

```ts
import {
  Configuration,
  ProjectPermissionSchemesApi,
} from 'jira-cloud-api';
import type { GetProjectIssueSecuritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectPermissionSchemesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectKeyOrId: projectKeyOrId_example,
  } satisfies GetProjectIssueSecuritySchemeRequest;

  try {
    const data = await api.getProjectIssueSecurityScheme(body);
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
| **projectKeyOrId** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |

### Return type

[**SecurityScheme**](SecurityScheme.md)

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
| **403** | Returned if the project is visible to the user but the user doesn\&#39;t have administrative permissions. |  -  |
| **404** | Returned if the project is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSecurityLevelsForProject

> ProjectIssueSecurityLevels getSecurityLevelsForProject(projectKeyOrId)

Get project issue security levels

Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectPermissionSchemesApi,
} from 'jira-cloud-api';
import type { GetSecurityLevelsForProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectPermissionSchemesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectKeyOrId: projectKeyOrId_example,
  } satisfies GetSecurityLevelsForProjectRequest;

  try {
    const data = await api.getSecurityLevelsForProject(body);
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
| **projectKeyOrId** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |

### Return type

[**ProjectIssueSecurityLevels**](ProjectIssueSecurityLevels.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **404** | Returned if the project is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

