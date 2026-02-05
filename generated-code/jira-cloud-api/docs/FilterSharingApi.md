# FilterSharingApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addSharePermission**](FilterSharingApi.md#addsharepermission) | **POST** /rest/api/3/filter/{id}/permission | Add share permission |
| [**deleteSharePermission**](FilterSharingApi.md#deletesharepermission) | **DELETE** /rest/api/3/filter/{id}/permission/{permissionId} | Delete share permission |
| [**getDefaultShareScope**](FilterSharingApi.md#getdefaultsharescope) | **GET** /rest/api/3/filter/defaultShareScope | Get default share scope |
| [**getSharePermission**](FilterSharingApi.md#getsharepermission) | **GET** /rest/api/3/filter/{id}/permission/{permissionId} | Get share permission |
| [**getSharePermissions**](FilterSharingApi.md#getsharepermissions) | **GET** /rest/api/3/filter/{id}/permission | Get share permissions |
| [**setDefaultShareScope**](FilterSharingApi.md#setdefaultsharescope) | **PUT** /rest/api/3/filter/defaultShareScope | Set default share scope |



## addSharePermission

> Array&lt;SharePermission&gt; addSharePermission(id, sharePermissionInputBean)

Add share permission

Add a share permissions to a filter. If you add a global share permission (one for all logged-in users or the public) it will overwrite all share permissions for the filter.  Be aware that this operation uses different objects for updating share permissions compared to [Update filter](#api-rest-api-3-filter-id-put).  **[Permissions](#permissions) required:** *Share dashboards and filters* [global permission](https://confluence.atlassian.com/x/x4dKLg) and the user must own the filter.

### Example

```ts
import {
  Configuration,
  FilterSharingApi,
} from 'jira-cloud-api';
import type { AddSharePermissionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FilterSharingApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
    // SharePermissionInputBean
    sharePermissionInputBean: {"groupname":"jira-administrators","rights":1,"type":"group"},
  } satisfies AddSharePermissionRequest;

  try {
    const data = await api.addSharePermission(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |
| **sharePermissionInputBean** | [SharePermissionInputBean](SharePermissionInputBean.md) |  | |

### Return type

[**Array&lt;SharePermission&gt;**](SharePermission.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  the request object is invalid. For example, it contains an invalid type, the ID does not match the type, or the project or group is not found.  *  the user does not own the filter.  *  the user does not have the required permissions. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  the filter is not found.  *  the user does not have permission to view the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSharePermission

> deleteSharePermission(id, permissionId)

Delete share permission

Deletes a share permission from a filter.  **[Permissions](#permissions) required:** Permission to access Jira and the user must own the filter.

### Example

```ts
import {
  Configuration,
  FilterSharingApi,
} from 'jira-cloud-api';
import type { DeleteSharePermissionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FilterSharingApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
    // number | The ID of the share permission.
    permissionId: 789,
  } satisfies DeleteSharePermissionRequest;

  try {
    const data = await api.deleteSharePermission(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |
| **permissionId** | `number` | The ID of the share permission. | [Defaults to `undefined`] |

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
| **404** | Returned if:   *  the filter is not found.  *  the user does not own the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDefaultShareScope

> DefaultShareScope getDefaultShareScope()

Get default share scope

Returns the default sharing settings for new filters and dashboards for a user.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  FilterSharingApi,
} from 'jira-cloud-api';
import type { GetDefaultShareScopeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FilterSharingApi(config);

  try {
    const data = await api.getDefaultShareScope();
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

[**DefaultShareScope**](DefaultShareScope.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSharePermission

> SharePermission getSharePermission(id, permissionId)

Get share permission

Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, a share permission is only returned for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.

### Example

```ts
import {
  Configuration,
  FilterSharingApi,
} from 'jira-cloud-api';
import type { GetSharePermissionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FilterSharingApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
    // number | The ID of the share permission.
    permissionId: 789,
  } satisfies GetSharePermissionRequest;

  try {
    const data = await api.getSharePermission(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |
| **permissionId** | `number` | The ID of the share permission. | [Defaults to `undefined`] |

### Return type

[**SharePermission**](SharePermission.md)

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
| **404** | Returned if:   *  the filter is not found.  *  the permission is not found.  *  the user does not have permission to view the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSharePermissions

> Array&lt;SharePermission&gt; getSharePermissions(id)

Get share permissions

Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None, however, share permissions are only returned for:   *  filters owned by the user.  *  filters shared with a group that the user is a member of.  *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.  *  filters shared with a public project.  *  filters shared with the public.

### Example

```ts
import {
  Configuration,
  FilterSharingApi,
} from 'jira-cloud-api';
import type { GetSharePermissionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FilterSharingApi(config);

  const body = {
    // number | The ID of the filter.
    id: 789,
  } satisfies GetSharePermissionsRequest;

  try {
    const data = await api.getSharePermissions(body);
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
| **id** | `number` | The ID of the filter. | [Defaults to `undefined`] |

### Return type

[**Array&lt;SharePermission&gt;**](SharePermission.md)

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
| **404** | Returned if:   *  the filter is not found.  *  the user does not have permission to view the filter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDefaultShareScope

> DefaultShareScope setDefaultShareScope(defaultShareScope)

Set default share scope

Sets the default sharing for new filters and dashboards for a user.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  FilterSharingApi,
} from 'jira-cloud-api';
import type { SetDefaultShareScopeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new FilterSharingApi(config);

  const body = {
    // DefaultShareScope
    defaultShareScope: {"scope":"GLOBAL"},
  } satisfies SetDefaultShareScopeRequest;

  try {
    const data = await api.setDefaultShareScope(body);
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
| **defaultShareScope** | [DefaultShareScope](DefaultShareScope.md) |  | |

### Return type

[**DefaultShareScope**](DefaultShareScope.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if an invalid scope is set. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

