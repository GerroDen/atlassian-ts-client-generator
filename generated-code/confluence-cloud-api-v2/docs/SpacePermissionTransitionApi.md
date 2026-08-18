# SpacePermissionTransitionApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkAssignSpacePermissionRoles**](SpacePermissionTransitionApi.md#bulkassignspacepermissionroles) | **POST** /space-permissions/transition/role-assignments | Bulk assign space permission roles |
| [**bulkRemoveSpacePermissionAccess**](SpacePermissionTransitionApi.md#bulkremovespacepermissionaccess) | **POST** /space-permissions/transition/access-removals | Bulk remove space permission access |
| [**generateSpacePermissionCombinations**](SpacePermissionTransitionApi.md#generatespacepermissioncombinations) | **POST** /space-permissions/transition/combinations | Generate space permission combinations |
| [**getSpacePermissionTransitionTaskStatus**](SpacePermissionTransitionApi.md#getspacepermissiontransitiontaskstatus) | **GET** /space-permissions/transition/tasks/{taskId} | Get space permission transition task status |
| [**listSpacePermissionCombinations**](SpacePermissionTransitionApi.md#listspacepermissioncombinations) | **GET** /space-permissions/transition/combinations | List unassigned space permission combinations |



## bulkAssignSpacePermissionRoles

> BulkTransitionTaskResponse bulkAssignSpacePermissionRoles(bulkAssignRolesRequest)

Bulk assign space permission roles

Bulk assigns roles for one or more permission combination IDs obtained from the space permission combinations. Supports targeting all spaces, specific spaces, or excluding specific spaces.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a Confluence administrator.

### Example

```ts
import {
  Configuration,
  SpacePermissionTransitionApi,
} from 'confluence-cloud-api-v2';
import type { BulkAssignSpacePermissionRolesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionTransitionApi(config);

  const body = {
    // BulkAssignRolesRequest
    bulkAssignRolesRequest: ...,
  } satisfies BulkAssignSpacePermissionRolesRequest;

  try {
    const data = await api.bulkAssignSpacePermissionRoles(body);
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
| **bulkAssignRolesRequest** | [BulkAssignRolesRequest](BulkAssignRolesRequest.md) |  | |

### Return type

[**BulkTransitionTaskResponse**](BulkTransitionTaskResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returned if the bulk assign roles task is successfully submitted. |  -  |
| **400** | Returned if the request is invalid (e.g., empty assignments, missing space selection). |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission or the resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkRemoveSpacePermissionAccess

> BulkTransitionTaskResponse bulkRemoveSpacePermissionAccess(bulkRemoveAccessRequest)

Bulk remove space permission access

Bulk removes access for one or more permission combination IDs obtained from the space permission combinations. This removes all space permissions for the specified combinations across the targeted spaces.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a Confluence administrator.

### Example

```ts
import {
  Configuration,
  SpacePermissionTransitionApi,
} from 'confluence-cloud-api-v2';
import type { BulkRemoveSpacePermissionAccessRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionTransitionApi(config);

  const body = {
    // BulkRemoveAccessRequest
    bulkRemoveAccessRequest: ...,
  } satisfies BulkRemoveSpacePermissionAccessRequest;

  try {
    const data = await api.bulkRemoveSpacePermissionAccess(body);
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
| **bulkRemoveAccessRequest** | [BulkRemoveAccessRequest](BulkRemoveAccessRequest.md) |  | |

### Return type

[**BulkTransitionTaskResponse**](BulkTransitionTaskResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returned if the bulk remove access task is successfully submitted. |  -  |
| **400** | Returned if the request is invalid (e.g., empty permission combination IDs, missing space selection). |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission or the resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateSpacePermissionCombinations

> BulkTransitionTaskResponse generateSpacePermissionCombinations()

Generate space permission combinations

Submits a task to refresh the space permission combinations in the database, which identifies all unique permission combinations across the site. This provides permission combination IDs that can be used with the assign-roles and remove-access endpoints.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a Confluence administrator.

### Example

```ts
import {
  Configuration,
  SpacePermissionTransitionApi,
} from 'confluence-cloud-api-v2';
import type { GenerateSpacePermissionCombinationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionTransitionApi(config);

  try {
    const data = await api.generateSpacePermissionCombinations();
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

[**BulkTransitionTaskResponse**](BulkTransitionTaskResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returned if the generation task is successfully submitted. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission or the resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpacePermissionTransitionTaskStatus

> BulkTransitionTaskStatusResponse getSpacePermissionTransitionTaskStatus(taskId)

Get space permission transition task status

Retrieves the status of an async space permission transition task. Use the taskId returned from the generate-combinations, assign-roles, or remove-access endpoints to poll for progress and completion.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a Confluence administrator.

### Example

```ts
import {
  Configuration,
  SpacePermissionTransitionApi,
} from 'confluence-cloud-api-v2';
import type { GetSpacePermissionTransitionTaskStatusRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionTransitionApi(config);

  const body = {
    // string | The ID of the async task, as returned by the generate-combinations, assign-roles, or remove-access endpoints.
    taskId: taskId_example,
  } satisfies GetSpacePermissionTransitionTaskStatusRequest;

  try {
    const data = await api.getSpacePermissionTransitionTaskStatus(body);
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
| **taskId** | `string` | The ID of the async task, as returned by the generate-combinations, assign-roles, or remove-access endpoints. | [Defaults to `undefined`] |

### Return type

[**BulkTransitionTaskStatusResponse**](BulkTransitionTaskStatusResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the task is found and the status is successfully retrieved. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the task does not exist or the calling user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSpacePermissionCombinations

> ListSpacePermissionCombinationsResponse listSpacePermissionCombinations(cursor, limit)

List unassigned space permission combinations

Lists the unique unassigned space permission combinations currently present on the tenant. Combinations that already map to a space role are filtered out server-side. Each row carries the decoded set of space permissions and the principal types that currently hold the combination — these inform which &#x60;principalType&#x60; values are valid to include in the matching bulk role-assignments request.  Results are always sorted by &#x60;principalCount&#x60; descending. Sort field and sort order are not configurable; page size is controlled by the &#x60;limit&#x60; query parameter (default 25, min 1, max 250). Use the &#x60;cursor&#x60; field to page through additional results. The &#x60;generatedAt&#x60; field reflects the last audit run that populated the combinations table — call the generate-combinations endpoint to refresh stale data.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: User must be a Confluence administrator.

### Example

```ts
import {
  Configuration,
  SpacePermissionTransitionApi,
} from 'confluence-cloud-api-v2';
import type { ListSpacePermissionCombinationsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePermissionTransitionApi(config);

  const body = {
    // string | Opaque cursor returned from a previous page in the `cursor` field of the response. Omit for the first page. (optional)
    cursor: cursor_example,
    // number | The maximum number of combinations to return per page. Requests outside the supported range return `400`. (optional)
    limit: 56,
  } satisfies ListSpacePermissionCombinationsRequest;

  try {
    const data = await api.listSpacePermissionCombinations(body);
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
| **cursor** | `string` | Opaque cursor returned from a previous page in the &#x60;cursor&#x60; field of the response. Omit for the first page. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of combinations to return per page. Requests outside the supported range return &#x60;400&#x60;. | [Optional] [Defaults to `25`] |

### Return type

[**ListSpacePermissionCombinationsResponse**](ListSpacePermissionCombinationsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned with the page of unassigned combinations (possibly an empty &#x60;results&#x60; array if no combinations exist or if combinations have not yet been generated for this tenant). |  -  |
| **400** | Returned if the &#x60;cursor&#x60; query parameter is malformed, or if &#x60;limit&#x60; is not an integer in the range &#x60;1&#x60;–&#x60;250&#x60;. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission or the resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

