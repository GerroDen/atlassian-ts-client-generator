# DashboardsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addGadget**](DashboardsApi.md#addgadget) | **POST** /rest/api/3/dashboard/{dashboardId}/gadget | Add gadget to dashboard |
| [**bulkEditDashboards**](DashboardsApi.md#bulkeditdashboards) | **PUT** /rest/api/3/dashboard/bulk/edit | Bulk edit dashboards |
| [**copyDashboard**](DashboardsApi.md#copydashboard) | **POST** /rest/api/3/dashboard/{id}/copy | Copy dashboard |
| [**createDashboard**](DashboardsApi.md#createdashboard) | **POST** /rest/api/3/dashboard | Create dashboard |
| [**deleteDashboard**](DashboardsApi.md#deletedashboard) | **DELETE** /rest/api/3/dashboard/{id} | Delete dashboard |
| [**deleteDashboardItemProperty**](DashboardsApi.md#deletedashboarditemproperty) | **DELETE** /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Delete dashboard item property |
| [**getAllAvailableDashboardGadgets**](DashboardsApi.md#getallavailabledashboardgadgets) | **GET** /rest/api/3/dashboard/gadgets | Get available gadgets |
| [**getAllDashboards**](DashboardsApi.md#getalldashboards) | **GET** /rest/api/3/dashboard | Get all dashboards |
| [**getAllGadgets**](DashboardsApi.md#getallgadgets) | **GET** /rest/api/3/dashboard/{dashboardId}/gadget | Get gadgets |
| [**getDashboard**](DashboardsApi.md#getdashboard) | **GET** /rest/api/3/dashboard/{id} | Get dashboard |
| [**getDashboardItemProperty**](DashboardsApi.md#getdashboarditemproperty) | **GET** /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Get dashboard item property |
| [**getDashboardItemPropertyKeys**](DashboardsApi.md#getdashboarditempropertykeys) | **GET** /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties | Get dashboard item property keys |
| [**getDashboardsPaginated**](DashboardsApi.md#getdashboardspaginated) | **GET** /rest/api/3/dashboard/search | Search for dashboards |
| [**removeGadget**](DashboardsApi.md#removegadget) | **DELETE** /rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId} | Remove gadget from dashboard |
| [**setDashboardItemProperty**](DashboardsApi.md#setdashboarditemproperty) | **PUT** /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Set dashboard item property |
| [**updateDashboard**](DashboardsApi.md#updatedashboard) | **PUT** /rest/api/3/dashboard/{id} | Update dashboard |
| [**updateGadget**](DashboardsApi.md#updategadget) | **PUT** /rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId} | Update gadget on dashboard |



## addGadget

> DashboardGadget addGadget(dashboardId, dashboardGadgetSettings)

Add gadget to dashboard

Adds a gadget to a dashboard.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { AddGadgetRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // number | The ID of the dashboard.
    dashboardId: 789,
    // DashboardGadgetSettings
    dashboardGadgetSettings: {"color":"blue","ignoreUriAndModuleKeyValidation":false,"moduleKey":"com.atlassian.plugins.atlassian-connect-plugin:com.atlassian.connect.node.sample-addon__sample-dashboard-item","position":{"column":1,"row":0},"title":"Issue statistics"},
  } satisfies AddGadgetRequest;

  try {
    const data = await api.addGadget(body);
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
| **dashboardId** | `number` | The ID of the dashboard. | [Defaults to `undefined`] |
| **dashboardGadgetSettings** | [DashboardGadgetSettings](DashboardGadgetSettings.md) |  | |

### Return type

[**DashboardGadget**](DashboardGadget.md)

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
| **404** | Returned if the dashboard is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkEditDashboards

> BulkEditShareableEntityResponse bulkEditDashboards(bulkEditShareableEntityRequest)

Bulk edit dashboards

Bulk edit dashboards. Maximum number of dashboards to be edited at the same time is 100.  **[Permissions](#permissions) required:** None  The dashboards to be updated must be owned by the user, or the user must be an administrator.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { BulkEditDashboardsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // BulkEditShareableEntityRequest | The details of dashboards being updated in bulk.
    bulkEditShareableEntityRequest: {"action":"changePermission","entityIds":[10001,10002],"extendAdminPermissions":true,"permissionDetails":{"editPermissions":[{"group":{"groupId":"276f955c-63d7-42c8-9520-92d01dca0625","name":"jira-administrators","self":"https://your-domain.atlassian.net/rest/api/~ver~/group?groupId=276f955c-63d7-42c8-9520-92d01dca0625"},"id":10010,"type":"group"}],"sharePermissions":[{"id":10000,"type":"global"}]}},
  } satisfies BulkEditDashboardsRequest;

  try {
    const data = await api.bulkEditDashboards(body);
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
| **bulkEditShareableEntityRequest** | [BulkEditShareableEntityRequest](BulkEditShareableEntityRequest.md) | The details of dashboards being updated in bulk. | |

### Return type

[**BulkEditShareableEntityResponse**](BulkEditShareableEntityResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## copyDashboard

> Dashboard copyDashboard(id, dashboardDetails, extendAdminPermissions)

Copy dashboard

Copies a dashboard. Any values provided in the &#x60;dashboard&#x60; parameter replace those in the copied dashboard.  **[Permissions](#permissions) required:** None  The dashboard to be copied must be owned by or shared with the user.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { CopyDashboardRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string
    id: id_example,
    // DashboardDetails | Dashboard details.
    dashboardDetails: {"description":"A dashboard to help auditors identify sample of issues to check.","editPermissions":[],"name":"Auditors dashboard","sharePermissions":[{"type":"global"}]},
    // boolean | Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) (optional)
    extendAdminPermissions: true,
  } satisfies CopyDashboardRequest;

  try {
    const data = await api.copyDashboard(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **dashboardDetails** | [DashboardDetails](DashboardDetails.md) | Dashboard details. | |
| **extendAdminPermissions** | `boolean` | Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) | [Optional] [Defaults to `false`] |

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the dashboard is not found or the dashboard is not owned by or shared with the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createDashboard

> Dashboard createDashboard(dashboardDetails, extendAdminPermissions)

Create dashboard

Creates a dashboard.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { CreateDashboardRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // DashboardDetails | Dashboard details.
    dashboardDetails: {"description":"A dashboard to help auditors identify sample of issues to check.","editPermissions":[],"name":"Auditors dashboard","sharePermissions":[{"type":"global"}]},
    // boolean | Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) (optional)
    extendAdminPermissions: true,
  } satisfies CreateDashboardRequest;

  try {
    const data = await api.createDashboard(body);
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
| **dashboardDetails** | [DashboardDetails](DashboardDetails.md) | Dashboard details. | |
| **extendAdminPermissions** | `boolean` | Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) | [Optional] [Defaults to `false`] |

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDashboard

> deleteDashboard(id)

Delete dashboard

Deletes a dashboard.  **[Permissions](#permissions) required:** None  The dashboard to be deleted must be owned by the user.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { DeleteDashboardRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string | The ID of the dashboard.
    id: id_example,
  } satisfies DeleteDashboardRequest;

  try {
    const data = await api.deleteDashboard(body);
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
| **id** | `string` | The ID of the dashboard. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the dashboard is deleted. |  -  |
| **400** | 400 response |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDashboardItemProperty

> any deleteDashboardItemProperty(dashboardId, itemId, propertyKey)

Delete dashboard item property

Deletes a dashboard item property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** The user must have edit permission of the dashboard.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { DeleteDashboardItemPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string | The ID of the dashboard.
    dashboardId: dashboardId_example,
    // string | The ID of the dashboard item.
    itemId: itemId_example,
    // string | The key of the dashboard item property.
    propertyKey: propertyKey_example,
  } satisfies DeleteDashboardItemPropertyRequest;

  try {
    const data = await api.deleteDashboardItemProperty(body);
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
| **dashboardId** | `string` | The ID of the dashboard. | [Defaults to `undefined`] |
| **itemId** | `string` | The ID of the dashboard item. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the dashboard item property. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the dashboard item property is deleted. |  -  |
| **400** | Returned if the dashboard or dashboard item ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user is not the owner of the dashboard. |  -  |
| **404** | Returned if the dashboard item is not found or the dashboard is not shared with the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllAvailableDashboardGadgets

> AvailableDashboardGadgetsResponse getAllAvailableDashboardGadgets()

Get available gadgets

Gets a list of all available gadgets that can be added to all dashboards.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { GetAllAvailableDashboardGadgetsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  try {
    const data = await api.getAllAvailableDashboardGadgets();
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

[**AvailableDashboardGadgetsResponse**](AvailableDashboardGadgetsResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | 400 response |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllDashboards

> PageOfDashboards getAllDashboards(filter, startAt, maxResults)

Get all dashboards

Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { GetAllDashboardsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // 'my' | 'favourite' | The filter applied to the list of dashboards. Valid values are:   *  `favourite` Returns dashboards the user has marked as favorite.  *  `my` Returns dashboards owned by the user. (optional)
    filter: filter_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetAllDashboardsRequest;

  try {
    const data = await api.getAllDashboards(body);
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
| **filter** | `my`, `favourite` | The filter applied to the list of dashboards. Valid values are:   *  &#x60;favourite&#x60; Returns dashboards the user has marked as favorite.  *  &#x60;my&#x60; Returns dashboards owned by the user. | [Optional] [Defaults to `undefined`] [Enum: my, favourite] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `20`] |

### Return type

[**PageOfDashboards**](PageOfDashboards.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllGadgets

> DashboardGadgetResponse getAllGadgets(dashboardId, moduleKey, uri, gadgetId)

Get gadgets

Returns a list of dashboard gadgets on a dashboard.  This operation returns:   *  Gadgets from a list of IDs, when &#x60;id&#x60; is set.  *  Gadgets with a module key, when &#x60;moduleKey&#x60; is set.  *  Gadgets from a list of URIs, when &#x60;uri&#x60; is set.  *  All gadgets, when no other parameters are set.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { GetAllGadgetsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // number | The ID of the dashboard.
    dashboardId: 789,
    // Array<string> | The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: `moduleKey=key:one&moduleKey=key:two`. (optional)
    moduleKey: ...,
    // Array<string> | The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: `uri=/rest/example/uri/1&uri=/rest/example/uri/2`. (optional)
    uri: ...,
    // Array<number> | The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: `gadgetId=10000&gadgetId=10001`. (optional)
    gadgetId: ...,
  } satisfies GetAllGadgetsRequest;

  try {
    const data = await api.getAllGadgets(body);
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
| **dashboardId** | `number` | The ID of the dashboard. | [Defaults to `undefined`] |
| **moduleKey** | `Array<string>` | The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: &#x60;moduleKey&#x3D;key:one&amp;moduleKey&#x3D;key:two&#x60;. | [Optional] |
| **uri** | `Array<string>` | The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: &#x60;uri&#x3D;/rest/example/uri/1&amp;uri&#x3D;/rest/example/uri/2&#x60;. | [Optional] |
| **gadgetId** | `Array<number>` | The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: &#x60;gadgetId&#x3D;10000&amp;gadgetId&#x3D;10001&#x60;. | [Optional] |

### Return type

[**DashboardGadgetResponse**](DashboardGadgetResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if the dashboard is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDashboard

> Dashboard getDashboard(id)

Get dashboard

Returns a dashboard.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.  However, to get a dashboard, the dashboard must be shared with the user or the user must own it. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { GetDashboardRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string | The ID of the dashboard.
    id: id_example,
  } satisfies GetDashboardRequest;

  try {
    const data = await api.getDashboard(body);
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
| **id** | `string` | The ID of the dashboard. | [Defaults to `undefined`] |

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | 400 response |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the dashboard is not found or the dashboard is not owned by or shared with the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDashboardItemProperty

> EntityProperty getDashboardItemProperty(dashboardId, itemId, propertyKey)

Get dashboard item property

Returns the key and value of a dashboard item property.  A dashboard item enables an app to add user-specific information to a user dashboard. Dashboard items are exposed to users as gadgets that users can add to their dashboards. For more information on how users do this, see [Adding and customizing gadgets](https://confluence.atlassian.com/x/7AeiLQ).  When an app creates a dashboard item it registers a callback to receive the dashboard item ID. The callback fires whenever the item is rendered or, where the item is configurable, the user edits the item. The app then uses this resource to store the item\&#39;s content or configuration details. For more information on working with dashboard items, see [ Building a dashboard item for a JIRA Connect add-on](https://developer.atlassian.com/server/jira/platform/guide-building-a-dashboard-item-for-a-jira-connect-add-on-33746254/) and the [Dashboard Item](https://developer.atlassian.com/cloud/jira/platform/modules/dashboard-item/) documentation.  There is no resource to set or get dashboard items.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** The user must have read permission of the dashboard or have the dashboard shared with them.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { GetDashboardItemPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string | The ID of the dashboard.
    dashboardId: dashboardId_example,
    // string | The ID of the dashboard item.
    itemId: itemId_example,
    // string | The key of the dashboard item property.
    propertyKey: propertyKey_example,
  } satisfies GetDashboardItemPropertyRequest;

  try {
    const data = await api.getDashboardItemProperty(body);
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
| **dashboardId** | `string` | The ID of the dashboard. | [Defaults to `undefined`] |
| **itemId** | `string` | The ID of the dashboard item. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the dashboard item property. | [Defaults to `undefined`] |

### Return type

[**EntityProperty**](EntityProperty.md)

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
| **404** | Returned if the dashboard, the dashboard item, or dashboard item property is not found, or the dashboard is not owned by or shared with the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDashboardItemPropertyKeys

> PropertyKeys getDashboardItemPropertyKeys(dashboardId, itemId)

Get dashboard item property keys

Returns the keys of all properties for a dashboard item.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** The user must have read permission of the dashboard or have the dashboard shared with them.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { GetDashboardItemPropertyKeysRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string | The ID of the dashboard.
    dashboardId: dashboardId_example,
    // string | The ID of the dashboard item.
    itemId: itemId_example,
  } satisfies GetDashboardItemPropertyKeysRequest;

  try {
    const data = await api.getDashboardItemPropertyKeys(body);
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
| **dashboardId** | `string` | The ID of the dashboard. | [Defaults to `undefined`] |
| **itemId** | `string` | The ID of the dashboard item. | [Defaults to `undefined`] |

### Return type

[**PropertyKeys**](PropertyKeys.md)

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
| **404** | Returned if the dashboard or dashboard item is not found, or the dashboard is not owned by or shared with the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDashboardsPaginated

> PageBeanDashboard getDashboardsPaginated(dashboardName, accountId, owner, groupname, groupId, projectId, orderBy, startAt, maxResults, status, expand)

Search for dashboards

Returns a [paginated](#pagination) list of dashboards. This operation is similar to [Get dashboards](#api-rest-api-3-dashboard-get) except that the results can be refined to include dashboards that have specific attributes. For example, dashboards with a particular name. When multiple attributes are specified only filters matching all attributes are returned.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** The following dashboards that match the query parameters are returned:   *  Dashboards owned by the user. Not returned for anonymous users.  *  Dashboards shared with a group that the user is a member of. Not returned for anonymous users.  *  Dashboards shared with a private project that the user can browse. Not returned for anonymous users.  *  Dashboards shared with a public project.  *  Dashboards shared with the public.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { GetDashboardsPaginatedRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string | String used to perform a case-insensitive partial match with `name`. (optional)
    dashboardName: dashboardName_example,
    // string | User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter. (optional)
    accountId: accountId_example,
    // string | This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter. (optional)
    owner: owner_example,
    // string | As a group\'s name can change, use of `groupId` is recommended. Group name used to return dashboards that are shared with a group that matches `sharePermissions.group.name`. This parameter cannot be used with the `groupId` parameter. (optional)
    groupname: groupname_example,
    // string | Group ID used to return dashboards that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter. (optional)
    groupId: groupId_example,
    // number | Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`. (optional)
    projectId: 789,
    // 'description' | '-description' | '+description' | 'favorite_count' | '-favorite_count' | '+favorite_count' | 'id' | '-id' | '+id' | 'is_favorite' | '-is_favorite' | '+is_favorite' | 'name' | '-name' | '+name' | 'owner' | '-owner' | '+owner' | [Order](#ordering) the results by a field:   *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by dashboard popularity.  *  `id` Sorts by dashboard ID.  *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.  *  `name` Sorts by dashboard name.  *  `owner` Sorts by dashboard owner name. (optional)
    orderBy: orderBy_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // 'active' | 'archived' | 'deleted' | The status to filter by. It may be active, archived or deleted. (optional)
    status: status_example,
    // string | Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the dashboard.  *  `owner` Returns the owner of the dashboard.  *  `viewUrl` Returns the URL that is used to view the dashboard.  *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.  *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.  *  `sharePermissions` Returns details of the share permissions defined for the dashboard.  *  `editPermissions` Returns details of the edit permissions defined for the dashboard.  *  `isWritable` Returns whether the current user has permission to edit the dashboard. (optional)
    expand: expand_example,
  } satisfies GetDashboardsPaginatedRequest;

  try {
    const data = await api.getDashboardsPaginated(body);
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
| **dashboardName** | `string` | String used to perform a case-insensitive partial match with &#x60;name&#x60;. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | User account ID used to return dashboards with the matching &#x60;owner.accountId&#x60;. This parameter cannot be used with the &#x60;owner&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **owner** | `string` | This parameter is deprecated because of privacy changes. Use &#x60;accountId&#x60; instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching &#x60;owner.name&#x60;. This parameter cannot be used with the &#x60;accountId&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **groupname** | `string` | As a group\&#39;s name can change, use of &#x60;groupId&#x60; is recommended. Group name used to return dashboards that are shared with a group that matches &#x60;sharePermissions.group.name&#x60;. This parameter cannot be used with the &#x60;groupId&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **groupId** | `string` | Group ID used to return dashboards that are shared with a group that matches &#x60;sharePermissions.group.groupId&#x60;. This parameter cannot be used with the &#x60;groupname&#x60; parameter. | [Optional] [Defaults to `undefined`] |
| **projectId** | `number` | Project ID used to returns dashboards that are shared with a project that matches &#x60;sharePermissions.project.id&#x60;. | [Optional] [Defaults to `undefined`] |
| **orderBy** | `description`, `-description`, `+description`, `favorite_count`, `-favorite_count`, `+favorite_count`, `id`, `-id`, `+id`, `is_favorite`, `-is_favorite`, `+is_favorite`, `name`, `-name`, `+name`, `owner`, `-owner`, `+owner` | [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.  *  &#x60;favourite_count&#x60; Sorts by dashboard popularity.  *  &#x60;id&#x60; Sorts by dashboard ID.  *  &#x60;is_favourite&#x60; Sorts by whether the dashboard is marked as a favorite.  *  &#x60;name&#x60; Sorts by dashboard name.  *  &#x60;owner&#x60; Sorts by dashboard owner name. | [Optional] [Defaults to `&#39;name&#39;`] [Enum: description, -description, +description, favorite_count, -favorite_count, +favorite_count, id, -id, +id, is_favorite, -is_favorite, +is_favorite, name, -name, +name, owner, -owner, +owner] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **status** | `active`, `archived`, `deleted` | The status to filter by. It may be active, archived or deleted. | [Optional] [Defaults to `&#39;active&#39;`] [Enum: active, archived, deleted] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;description&#x60; Returns the description of the dashboard.  *  &#x60;owner&#x60; Returns the owner of the dashboard.  *  &#x60;viewUrl&#x60; Returns the URL that is used to view the dashboard.  *  &#x60;favourite&#x60; Returns &#x60;isFavourite&#x60;, an indicator of whether the user has set the dashboard as a favorite.  *  &#x60;favouritedCount&#x60; Returns &#x60;popularity&#x60;, a count of how many users have set this dashboard as a favorite.  *  &#x60;sharePermissions&#x60; Returns details of the share permissions defined for the dashboard.  *  &#x60;editPermissions&#x60; Returns details of the edit permissions defined for the dashboard.  *  &#x60;isWritable&#x60; Returns whether the current user has permission to edit the dashboard. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanDashboard**](PageBeanDashboard.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;orderBy&#x60; is invalid.  *  &#x60;expand&#x60; includes an invalid value.  *  &#x60;accountId&#x60; and &#x60;owner&#x60; are provided.  *  &#x60;groupname&#x60; and &#x60;groupId&#x60; are provided. |  -  |
| **401** | 401 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeGadget

> any removeGadget(dashboardId, gadgetId)

Remove gadget from dashboard

Removes a dashboard gadget from a dashboard.  When a gadget is removed from a dashboard, other gadgets in the same column are moved up to fill the emptied position.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { RemoveGadgetRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // number | The ID of the dashboard.
    dashboardId: 789,
    // number | The ID of the gadget.
    gadgetId: 789,
  } satisfies RemoveGadgetRequest;

  try {
    const data = await api.removeGadget(body);
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
| **dashboardId** | `number` | The ID of the dashboard. | [Defaults to `undefined`] |
| **gadgetId** | `number` | The ID of the gadget. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the gadget or the dashboard is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDashboardItemProperty

> any setDashboardItemProperty(dashboardId, itemId, propertyKey, body)

Set dashboard item property

Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.  A dashboard item enables an app to add user-specific information to a user dashboard. Dashboard items are exposed to users as gadgets that users can add to their dashboards. For more information on how users do this, see [Adding and customizing gadgets](https://confluence.atlassian.com/x/7AeiLQ).  When an app creates a dashboard item it registers a callback to receive the dashboard item ID. The callback fires whenever the item is rendered or, where the item is configurable, the user edits the item. The app then uses this resource to store the item\&#39;s content or configuration details. For more information on working with dashboard items, see [ Building a dashboard item for a JIRA Connect add-on](https://developer.atlassian.com/server/jira/platform/guide-building-a-dashboard-item-for-a-jira-connect-add-on-33746254/) and the [Dashboard Item](https://developer.atlassian.com/cloud/jira/platform/modules/dashboard-item/) documentation.  There is no resource to set or get dashboard items.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** The user must have edit permisson of the dashboard.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { SetDashboardItemPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string | The ID of the dashboard.
    dashboardId: dashboardId_example,
    // string | The ID of the dashboard item.
    itemId: itemId_example,
    // string | The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to \"config\", the request body\'s JSON must be an object with all keys and values as strings.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: {"number":5,"string":"string-value"},
  } satisfies SetDashboardItemPropertyRequest;

  try {
    const data = await api.setDashboardItemProperty(body);
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
| **dashboardId** | `string` | The ID of the dashboard. | [Defaults to `undefined`] |
| **itemId** | `string` | The ID of the dashboard item. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to \&quot;config\&quot;, the request body\&#39;s JSON must be an object with all keys and values as strings. | [Defaults to `undefined`] |
| **body** | `any` | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes. | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the dashboard item property is updated. |  -  |
| **201** | Returned if the dashboard item property is created. |  -  |
| **400** | Returned if:   *  Request is invalid  *  Or if all of these conditions are met in the request:           *  The dashboard item has a spec URI and no complete module key      *  The value of propertyKey is equal to \&quot;config\&quot;      *  The request body contains a JSON object whose keys and values are not strings. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user is not the owner of the dashboard. |  -  |
| **404** | Returned if the dashboard item is not found or the dashboard is not shared with the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDashboard

> Dashboard updateDashboard(id, dashboardDetails, extendAdminPermissions)

Update dashboard

Updates a dashboard, replacing all the dashboard details with those provided.  **[Permissions](#permissions) required:** None  The dashboard to be updated must be owned by the user.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { UpdateDashboardRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // string | The ID of the dashboard to update.
    id: id_example,
    // DashboardDetails | Replacement dashboard details.
    dashboardDetails: {"description":"A dashboard to help auditors identify sample of issues to check.","editPermissions":[],"name":"Auditors dashboard","sharePermissions":[{"type":"global"}]},
    // boolean | Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) (optional)
    extendAdminPermissions: true,
  } satisfies UpdateDashboardRequest;

  try {
    const data = await api.updateDashboard(body);
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
| **id** | `string` | The ID of the dashboard to update. | [Defaults to `undefined`] |
| **dashboardDetails** | [DashboardDetails](DashboardDetails.md) | Replacement dashboard details. | |
| **extendAdminPermissions** | `boolean` | Whether admin level permissions are used. It should only be true if the user has *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) | [Optional] [Defaults to `false`] |

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the dashboard is not found or the dashboard is not owned by the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateGadget

> any updateGadget(dashboardId, gadgetId, dashboardGadgetUpdateRequest)

Update gadget on dashboard

Changes the title, position, and color of the gadget on a dashboard.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  DashboardsApi,
} from 'jira-cloud-api';
import type { UpdateGadgetRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DashboardsApi(config);

  const body = {
    // number | The ID of the dashboard.
    dashboardId: 789,
    // number | The ID of the gadget.
    gadgetId: 789,
    // DashboardGadgetUpdateRequest
    dashboardGadgetUpdateRequest: {"color":"red","position":{"column":1,"row":1},"title":"My new gadget title"},
  } satisfies UpdateGadgetRequest;

  try {
    const data = await api.updateGadget(body);
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
| **dashboardId** | `number` | The ID of the dashboard. | [Defaults to `undefined`] |
| **gadgetId** | `number` | The ID of the gadget. | [Defaults to `undefined`] |
| **dashboardGadgetUpdateRequest** | [DashboardGadgetUpdateRequest](DashboardGadgetUpdateRequest.md) |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if the gadget or the dashboard is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

