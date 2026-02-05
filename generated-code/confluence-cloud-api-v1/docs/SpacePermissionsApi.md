# SpacePermissionsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addCustomContentPermissions**](SpacePermissionsApi.md#addcustomcontentpermissions) | **POST** /wiki/rest/api/space/{spaceKey}/permission/custom-content | Add new custom content permission to space |
| [**addPermissionToSpace**](SpacePermissionsApi.md#addpermissiontospace) | **POST** /wiki/rest/api/space/{spaceKey}/permission | Add new permission to space |
| [**removePermission**](SpacePermissionsApi.md#removepermission) | **DELETE** /wiki/rest/api/space/{spaceKey}/permission/{id} | Remove a space permission |



## addCustomContentPermissions

> addCustomContentPermissions(spaceKey, body)

Add new custom content permission to space

Adds new custom content permission to space.  If the permission to be added is a group permission, the group can be identified by its group name or group id.  Note: Only apps can access this REST resource and only make changes to the respective app permissions.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpacePermissionsApi,
} from 'confluence-cloud-api-v1';
import type { AddCustomContentPermissionsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionsApi(config);

  const body = {
    // string | The key of the space to be queried for its content.
    spaceKey: spaceKey_example,
    // SpacePermissionCustomContent | The permissions to be created.
    body: ...,
  } satisfies AddCustomContentPermissionsRequest;

  try {
    const data = await api.addCustomContentPermissions(body);
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
| **spaceKey** | `string` | The key of the space to be queried for its content. | [Defaults to `undefined`] |
| **body** | [SpacePermissionCustomContent](SpacePermissionCustomContent.md) | The permissions to be created. | |

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
| **200** | Returned if the requested content is returned. |  -  |
| **400** | Used for various errors. Such as: - Permission already exists for the given user or group. - \&#39;read space\&#39; permission doesn\&#39;t exist for the given user or group. - No group found with the given groupName or groupId |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user isn\&#39;t authorized. |  -  |
| **404** | Returned if any of the following is true: - There is no space with the given key. - The calling user does not have permission to view the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addPermissionToSpace

> SpacePermissionV2 addPermissionToSpace(spaceKey, body)

Add new permission to space

Adds new permission to space.  If the permission to be added is a group permission, the group can be identified by its group name or group id.  Note: Apps cannot access this REST resource - including when utilizing user impersonation.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpacePermissionsApi,
} from 'confluence-cloud-api-v1';
import type { AddPermissionToSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionsApi(config);

  const body = {
    // string | The key of the space to be queried for its content.
    spaceKey: spaceKey_example,
    // SpacePermissionRequest | The permission to be created.
    body: ...,
  } satisfies AddPermissionToSpaceRequest;

  try {
    const data = await api.addPermissionToSpace(body);
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
| **spaceKey** | `string` | The key of the space to be queried for its content. | [Defaults to `undefined`] |
| **body** | [SpacePermissionRequest](SpacePermissionRequest.md) | The permission to be created. | |

### Return type

[**SpacePermissionV2**](SpacePermissionV2.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content is returned. |  -  |
| **400** | Used for various errors. Such as: - Permission already exists for the given user or group. - \&#39;read space\&#39; permission doesn\&#39;t exist for the given user or group. - No group found with the given groupName or groupId |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user isn\&#39;t authorized. |  -  |
| **404** | Returned if any of the following is true: - There is no space with the given key. - The calling user does not have permission to view the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removePermission

> removePermission(spaceKey, id)

Remove a space permission

Removes a space permission. Note that removing Read Space permission for a user or group will remove all the space permissions for that user or group.  Note: Apps cannot access this REST resource - including when utilizing user impersonation.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpacePermissionsApi,
} from 'confluence-cloud-api-v1';
import type { RemovePermissionRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionsApi(config);

  const body = {
    // string | The key of the space to be queried for its content.
    spaceKey: spaceKey_example,
    // number | Id of the permission to be deleted.
    id: 56,
  } satisfies RemovePermissionRequest;

  try {
    const data = await api.removePermission(body);
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
| **spaceKey** | `string` | The key of the space to be queried for its content. | [Defaults to `undefined`] |
| **id** | `number` | Id of the permission to be deleted. | [Defaults to `undefined`] |

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
| **204** | Permission successfully removed. |  -  |
| **400** | Used for various errors. Such as: - All of the admin permissions cannot be removed from a space. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user isn\&#39;t authorized. |  -  |
| **404** | Returned if any of the following is true: - There is no permission with the given id. - There is no space with the given key. - The calling user does not have permission to view the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

