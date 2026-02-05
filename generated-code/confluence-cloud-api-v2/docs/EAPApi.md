# EAPApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSpace**](EAPApi.md#createspaceoperation) | **POST** /spaces | Create space |
| [**getAvailableSpacePermissions**](EAPApi.md#getavailablespacepermissions) | **GET** /space-permissions | Get available space permissions |
| [**getAvailableSpaceRoles**](EAPApi.md#getavailablespaceroles) | **GET** /space-roles | Get available space roles |
| [**getSpaceRoleAssignments**](EAPApi.md#getspaceroleassignments) | **GET** /spaces/{id}/role-assignments | Get space role assignments |
| [**getSpaceRolesById**](EAPApi.md#getspacerolesbyid) | **GET** /space-roles/{id} | Get space role by ID |
| [**setSpaceRoleAssignments**](EAPApi.md#setspaceroleassignments) | **POST** /spaces/{id}/role-assignments | Set space role assignments |



## createSpace

> CreateSpace201Response createSpace(createSpaceRequest)

Create space

Creates a Space as specified in the payload.  Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550).   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to create spaces.

### Example

```ts
import {
  Configuration,
  EAPApi,
} from 'confluence-cloud-api-v2';
import type { CreateSpaceOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EAPApi(config);

  const body = {
    // CreateSpaceRequest
    createSpaceRequest: ...,
  } satisfies CreateSpaceOperationRequest;

  try {
    const data = await api.createSpace(body);
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
| **createSpaceRequest** | [CreateSpaceRequest](CreateSpaceRequest.md) |  | |

### Return type

[**CreateSpace201Response**](CreateSpace201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the requested space is created. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to create spaces. |  -  |
| **413** | Returned if the request is too large in size (over 5 MB). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvailableSpacePermissions

> MultiEntityResultSpacePermission getAvailableSpacePermissions(cursor, limit)

Get available space permissions

Retrieves the available space permissions.  Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550).   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site.

### Example

```ts
import {
  Configuration,
  EAPApi,
} from 'confluence-cloud-api-v2';
import type { GetAvailableSpacePermissionsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EAPApi(config);

  const body = {
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of space permissions to return. If more results exist, use the `Link` response header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetAvailableSpacePermissionsRequest;

  try {
    const data = await api.getAvailableSpacePermissions(body);
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
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of space permissions to return. If more results exist, use the &#x60;Link&#x60; response header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultSpacePermission**](MultiEntityResultSpacePermission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested space permissions are retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the available space permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvailableSpaceRoles

> MultiEntityResultSpaceRole getAvailableSpaceRoles(spaceId, roleType, principalId, principalType, cursor, limit)

Get available space roles

Retrieves the available space roles.  Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550).   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site; if requesting a certain space\&#39;s roles, permission to view the space.

### Example

```ts
import {
  Configuration,
  EAPApi,
} from 'confluence-cloud-api-v2';
import type { GetAvailableSpaceRolesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EAPApi(config);

  const body = {
    // string | The space ID for which to filter available space roles; if empty, return all available space roles for the tenant. (optional)
    spaceId: spaceId_example,
    // string | The space role type to filter results by. (optional)
    roleType: roleType_example,
    // string | The principal ID to filter results by. If specified, a principal-type must also be specified. Paired with a `principal-type` of `ACCESS_CLASS`, valid values include [`anonymous-users`, `jsm-project-admins`, `authenticated-users`, `all-licensed-users`, `all-product-admins`] (optional)
    principalId: principalId_example,
    // PrincipalType | The principal type to filter results by. If specified, a principal-id must also be specified. (optional)
    principalType: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of space roles to return. If more results exist, use the `Link` response header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetAvailableSpaceRolesRequest;

  try {
    const data = await api.getAvailableSpaceRoles(body);
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
| **spaceId** | `string` | The space ID for which to filter available space roles; if empty, return all available space roles for the tenant. | [Optional] [Defaults to `undefined`] |
| **roleType** | `string` | The space role type to filter results by. | [Optional] [Defaults to `undefined`] |
| **principalId** | `string` | The principal ID to filter results by. If specified, a principal-type must also be specified. Paired with a &#x60;principal-type&#x60; of &#x60;ACCESS_CLASS&#x60;, valid values include [&#x60;anonymous-users&#x60;, &#x60;jsm-project-admins&#x60;, &#x60;authenticated-users&#x60;, &#x60;all-licensed-users&#x60;, &#x60;all-product-admins&#x60;] | [Optional] [Defaults to `undefined`] |
| **principalType** | `PrincipalType` | The principal type to filter results by. If specified, a principal-id must also be specified. | [Optional] [Defaults to `undefined`] [Enum: USER, GROUP, ACCESS_CLASS] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of space roles to return. If more results exist, use the &#x60;Link&#x60; response header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultSpaceRole**](MultiEntityResultSpaceRole.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested space roles are retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the available space roles. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaceRoleAssignments

> MultiEntityResultSpaceRoleAssignment getSpaceRoleAssignments(id, roleId, roleType, principalId, principalType, cursor, limit)

Get space role assignments

Retrieves the space role assignments.  Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550).   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the space.

### Example

```ts
import {
  Configuration,
  EAPApi,
} from 'confluence-cloud-api-v2';
import type { GetSpaceRoleAssignmentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EAPApi(config);

  const body = {
    // number | The ID of the space for which to retrieve assignments.
    id: 56,
    // string | Filters the returned role assignments to the provided role ID. (optional)
    roleId: roleId_example,
    // string | Filters the returned role assignments to the provided role type. (optional)
    roleType: roleType_example,
    // string | Filters the returned role assignments to the provided principal id. If specified, a principal-type must also be specified. Paired with a `principal-type` of `ACCESS_CLASS`, valid values include [`anonymous-users`, `jsm-project-admins`, `authenticated-users`, `all-licensed-users`, `all-product-admins`] (optional)
    principalId: principalId_example,
    // PrincipalType | Filters the returned role assignments to the provided principal type. If specified, a principal-id must also be specified. (optional)
    principalType: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of space roles to return. If more results exist, use the `Link` response header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetSpaceRoleAssignmentsRequest;

  try {
    const data = await api.getSpaceRoleAssignments(body);
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
| **id** | `number` | The ID of the space for which to retrieve assignments. | [Defaults to `undefined`] |
| **roleId** | `string` | Filters the returned role assignments to the provided role ID. | [Optional] [Defaults to `undefined`] |
| **roleType** | `string` | Filters the returned role assignments to the provided role type. | [Optional] [Defaults to `undefined`] |
| **principalId** | `string` | Filters the returned role assignments to the provided principal id. If specified, a principal-type must also be specified. Paired with a &#x60;principal-type&#x60; of &#x60;ACCESS_CLASS&#x60;, valid values include [&#x60;anonymous-users&#x60;, &#x60;jsm-project-admins&#x60;, &#x60;authenticated-users&#x60;, &#x60;all-licensed-users&#x60;, &#x60;all-product-admins&#x60;] | [Optional] [Defaults to `undefined`] |
| **principalType** | `PrincipalType` | Filters the returned role assignments to the provided principal type. If specified, a principal-id must also be specified. | [Optional] [Defaults to `undefined`] [Enum: USER, GROUP, ACCESS_CLASS] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of space roles to return. If more results exist, use the &#x60;Link&#x60; response header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultSpaceRoleAssignment**](MultiEntityResultSpaceRoleAssignment.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested space role assignments are retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaceRolesById

> GetSpaceRolesById200Response getSpaceRolesById(id)

Get space role by ID

Retrieves the space role by ID.  Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550).   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site.

### Example

```ts
import {
  Configuration,
  EAPApi,
} from 'confluence-cloud-api-v2';
import type { GetSpaceRolesByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EAPApi(config);

  const body = {
    // number | The ID of the space role to retrieve.
    id: 56,
  } satisfies GetSpaceRolesByIdRequest;

  try {
    const data = await api.getSpaceRolesById(body);
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
| **id** | `number` | The ID of the space role to retrieve. | [Defaults to `undefined`] |

### Return type

[**GetSpaceRolesById200Response**](GetSpaceRolesById200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested space role is retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the space role. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setSpaceRoleAssignments

> MultiEntityResultSpaceRoleAssignment setSpaceRoleAssignments(id, setSpaceRoleAssignmentsRequestInner)

Set space role assignments

Sets space role assignments as specified in the payload.  Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550).   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to manage roles in the space.

### Example

```ts
import {
  Configuration,
  EAPApi,
} from 'confluence-cloud-api-v2';
import type { SetSpaceRoleAssignmentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EAPApi(config);

  const body = {
    // number | The ID of the space for which to retrieve assignments.
    id: 56,
    // Array<SetSpaceRoleAssignmentsRequestInner>
    setSpaceRoleAssignmentsRequestInner: ...,
  } satisfies SetSpaceRoleAssignmentsRequest;

  try {
    const data = await api.setSpaceRoleAssignments(body);
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
| **id** | `number` | The ID of the space for which to retrieve assignments. | [Defaults to `undefined`] |
| **setSpaceRoleAssignmentsRequestInner** | `Array<SetSpaceRoleAssignmentsRequestInner>` |  | |

### Return type

[**MultiEntityResultSpaceRoleAssignment**](MultiEntityResultSpaceRoleAssignment.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested update to space role assignments succeeds in its entirety. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to set roles in the space, or the space was not found. |  -  |
| **413** | Returned if the request is too large in size (over 5 MB). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

