# PermissionsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllPermissions**](PermissionsApi.md#getallpermissions) | **GET** /rest/api/3/permissions | Get all permissions |
| [**getBulkPermissions**](PermissionsApi.md#getbulkpermissions) | **POST** /rest/api/3/permissions/check | Get bulk permissions |
| [**getMyPermissions**](PermissionsApi.md#getmypermissions) | **GET** /rest/api/3/mypermissions | Get my permissions |
| [**getPermittedProjects**](PermissionsApi.md#getpermittedprojects) | **POST** /rest/api/3/permissions/project | Get permitted projects |



## getAllPermissions

> Permissions getAllPermissions()

Get all permissions

Returns all permissions, including:   *  global permissions.  *  project permissions.  *  global permissions added by plugins.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  PermissionsApi,
} from 'jira-cloud-api';
import type { GetAllPermissionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PermissionsApi(config);

  try {
    const data = await api.getAllPermissions();
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

[**Permissions**](Permissions.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkPermissions

> BulkPermissionGrants getBulkPermissions(bulkPermissionsRequestBean)

Get bulk permissions

Returns:   *  for a list of global permissions, the global permissions granted to a user.  *  for a list of project permissions and lists of projects and issues, for each project permission a list of the projects and issues a user can access or manipulate.  If no account ID is provided, the operation returns details for the logged in user.  Note that:   *  Invalid project and issue IDs are ignored.  *  A maximum of 1000 projects and 1000 issues can be checked.  *  Null values in &#x60;globalPermissions&#x60;, &#x60;projectPermissions&#x60;, &#x60;projectPermissions.projects&#x60;, and &#x60;projectPermissions.issues&#x60; are ignored.  *  Empty strings in &#x60;projectPermissions.permissions&#x60; are ignored.  **Deprecation notice:** The required OAuth 2.0 scopes will be updated on June 15, 2024.   *  **Classic**: &#x60;read:jira-work&#x60;  *  **Granular**: &#x60;read:permission:jira&#x60;  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to check the permissions for other users, otherwise none. However, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn\&#39;t apply to calls made using AP.request() in a browser.

### Example

```ts
import {
  Configuration,
  PermissionsApi,
} from 'jira-cloud-api';
import type { GetBulkPermissionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PermissionsApi(config);

  const body = {
    // BulkPermissionsRequestBean | Details of the permissions to check.
    bulkPermissionsRequestBean: {"accountId":"5b10a2844c20165700ede21g","globalPermissions":["ADMINISTER"],"projectPermissions":[{"issues":[10010,10011,10012,10013,10014],"permissions":["EDIT_ISSUES"],"projects":[10001]}]},
  } satisfies GetBulkPermissionsRequest;

  try {
    const data = await api.getBulkPermissions(body);
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
| **bulkPermissionsRequestBean** | [BulkPermissionsRequestBean](BulkPermissionsRequestBean.md) | Details of the permissions to check. | |

### Return type

[**BulkPermissionGrants**](BulkPermissionGrants.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;projectPermissions&#x60; is provided without at least one project permission being provided.  *  an invalid global permission is provided in the global permissions list.  *  an invalid project permission is provided in the project permissions list.  *  more than 1000 valid project IDs or more than 1000 valid issue IDs are provided.  *  an invalid account ID is provided. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMyPermissions

> Permissions getMyPermissions(projectKey, projectId, issueKey, issueId, permissions, projectUuid, projectConfigurationUuid, commentId)

Get my permissions

Returns a list of permissions indicating which permissions the user has. Details of the user\&#39;s permissions can be obtained in a global, project, issue or comment context.  The user is reported as having a project permission:   *  in the global context, if the user has the project permission in any project.  *  for a project, where the project permission is determined using issue data, if the user meets the permission\&#39;s criteria for any issue in the project. Otherwise, if the user has the project permission in the project.  *  for an issue, where a project permission is determined using issue data, if the user has the permission in the issue. Otherwise, if the user has the project permission in the project containing the issue.  *  for a comment, where the user has both the permission to browse the comment and the project permission for the comment\&#39;s parent issue. Only the BROWSE\\_PROJECTS permission is supported. If a &#x60;commentId&#x60; is provided whose &#x60;permissions&#x60; does not equal BROWSE\\_PROJECTS, a 400 error will be returned.  This means that users may be shown as having an issue permission (such as EDIT\\_ISSUES) in the global context or a project context but may not have the permission for any or all issues. For example, if Reporters have the EDIT\\_ISSUES permission a user would be shown as having this permission in the global context or the context of a project, because any user can be a reporter. However, if they are not the user who reported the issue queried they would not have EDIT\\_ISSUES permission for that issue.  For [Jira Service Management project permissions](https://support.atlassian.com/jira-cloud-administration/docs/customize-jira-service-management-permissions/), this will be evaluated similarly to a user in the customer portal. For example, if the BROWSE\\_PROJECTS permission is granted to Service Project Customer - Portal Access, any users with access to the customer portal will have the BROWSE\\_PROJECTS permission.  Global permissions are unaffected by context.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  PermissionsApi,
} from 'jira-cloud-api';
import type { GetMyPermissionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PermissionsApi(config);

  const body = {
    // string | The key of project. Ignored if `projectId` is provided. (optional)
    projectKey: projectKey_example,
    // string | The ID of project. (optional)
    projectId: projectId_example,
    // string | The key of the issue. Ignored if `issueId` is provided. (optional)
    issueKey: issueKey_example,
    // string | The ID of the issue. (optional)
    issueId: issueId_example,
    // string | A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get). (optional)
    permissions: BROWSE_PROJECTS,EDIT_ISSUES,
    // string (optional)
    projectUuid: projectUuid_example,
    // string (optional)
    projectConfigurationUuid: projectConfigurationUuid_example,
    // string | The ID of the comment. (optional)
    commentId: commentId_example,
  } satisfies GetMyPermissionsRequest;

  try {
    const data = await api.getMyPermissions(body);
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
| **projectKey** | `string` | The key of project. Ignored if &#x60;projectId&#x60; is provided. | [Optional] [Defaults to `undefined`] |
| **projectId** | `string` | The ID of project. | [Optional] [Defaults to `undefined`] |
| **issueKey** | `string` | The key of the issue. Ignored if &#x60;issueId&#x60; is provided. | [Optional] [Defaults to `undefined`] |
| **issueId** | `string` | The ID of the issue. | [Optional] [Defaults to `undefined`] |
| **permissions** | `string` | A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get). | [Optional] [Defaults to `undefined`] |
| **projectUuid** | `string` |  | [Optional] [Defaults to `undefined`] |
| **projectConfigurationUuid** | `string` |  | [Optional] [Defaults to `undefined`] |
| **commentId** | `string` | The ID of the comment. | [Optional] [Defaults to `undefined`] |

### Return type

[**Permissions**](Permissions.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if &#x60;permissions&#x60; is empty, contains an invalid key, or does not equal BROWSE\\_PROJECTS when commentId is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the project or issue is not found or the user does not have permission to view the project or issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPermittedProjects

> PermittedProjects getPermittedProjects(permissionsKeysBean)

Get permitted projects

Returns all the projects where the user is granted a list of project permissions.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  PermissionsApi,
} from 'jira-cloud-api';
import type { GetPermittedProjectsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PermissionsApi(config);

  const body = {
    // PermissionsKeysBean
    permissionsKeysBean: ...,
  } satisfies GetPermittedProjectsRequest;

  try {
    const data = await api.getPermittedProjects(body);
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
| **permissionsKeysBean** | [PermissionsKeysBean](PermissionsKeysBean.md) |  | |

### Return type

[**PermittedProjects**](PermittedProjects.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if a project permission is not found. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

