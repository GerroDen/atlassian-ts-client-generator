# SpacePermissionsApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAvailableSpacePermissions**](SpacePermissionsApi.md#getavailablespacepermissions) | **GET** /space-permissions | Get available space permissions |
| [**getSpacePermissionsAssignments**](SpacePermissionsApi.md#getspacepermissionsassignments) | **GET** /spaces/{id}/permissions | Get space permissions assignments |



## getAvailableSpacePermissions

> MultiEntityResultSpacePermission getAvailableSpacePermissions(cursor, limit)

Get available space permissions

Retrieves the available space permissions.  Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550).   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site.

### Example

```ts
import {
  Configuration,
  SpacePermissionsApi,
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
  const api = new SpacePermissionsApi(config);

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


## getSpacePermissionsAssignments

> MultiEntityResultSpacePermissionAssignment getSpacePermissionsAssignments(id, cursor, limit)

Get space permissions assignments

Returns space permission assignments for a specific space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the space.

### Example

```ts
import {
  Configuration,
  SpacePermissionsApi,
} from 'confluence-cloud-api-v2';
import type { GetSpacePermissionsAssignmentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionsApi(config);

  const body = {
    // number | The ID of the space to be returned.
    id: 789,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of assignments to return. If more results exist, use the `Link` response header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetSpacePermissionsAssignmentsRequest;

  try {
    const data = await api.getSpacePermissionsAssignments(body);
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
| **id** | `number` | The ID of the space to be returned. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of assignments to return. If more results exist, use the &#x60;Link&#x60; response header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultSpacePermissionAssignment**](MultiEntityResultSpacePermissionAssignment.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested assignments are returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested space permission assignments or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

