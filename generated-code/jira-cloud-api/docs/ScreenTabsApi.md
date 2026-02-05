# ScreenTabsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addScreenTab**](ScreenTabsApi.md#addscreentab) | **POST** /rest/api/3/screens/{screenId}/tabs | Create screen tab |
| [**deleteScreenTab**](ScreenTabsApi.md#deletescreentab) | **DELETE** /rest/api/3/screens/{screenId}/tabs/{tabId} | Delete screen tab |
| [**getAllScreenTabs**](ScreenTabsApi.md#getallscreentabs) | **GET** /rest/api/3/screens/{screenId}/tabs | Get all screen tabs |
| [**getBulkScreenTabs**](ScreenTabsApi.md#getbulkscreentabs) | **GET** /rest/api/3/screens/tabs | Get bulk screen tabs |
| [**moveScreenTab**](ScreenTabsApi.md#movescreentab) | **POST** /rest/api/3/screens/{screenId}/tabs/{tabId}/move/{pos} | Move screen tab |
| [**renameScreenTab**](ScreenTabsApi.md#renamescreentab) | **PUT** /rest/api/3/screens/{screenId}/tabs/{tabId} | Update screen tab |



## addScreenTab

> ScreenableTab addScreenTab(screenId, screenableTab)

Create screen tab

Creates a tab for a screen.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenTabsApi,
} from 'jira-cloud-api';
import type { AddScreenTabRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // ScreenableTab
    screenableTab: {"name":"Fields Tab"},
  } satisfies AddScreenTabRequest;

  try {
    const data = await api.addScreenTab(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **screenableTab** | [ScreenableTab](ScreenableTab.md) |  | |

### Return type

[**ScreenableTab**](ScreenableTab.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteScreenTab

> deleteScreenTab(screenId, tabId)

Delete screen tab

Deletes a screen tab.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenTabsApi,
} from 'jira-cloud-api';
import type { DeleteScreenTabRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // number | The ID of the screen tab.
    tabId: 789,
  } satisfies DeleteScreenTabRequest;

  try {
    const data = await api.deleteScreenTab(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **tabId** | `number` | The ID of the screen tab. | [Defaults to `undefined`] |

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
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen or screen tab is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllScreenTabs

> Array&lt;ScreenableTab&gt; getAllScreenTabs(screenId, projectKey)

Get all screen tabs

Returns the list of tabs for a screen.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.

### Example

```ts
import {
  Configuration,
  ScreenTabsApi,
} from 'jira-cloud-api';
import type { GetAllScreenTabsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // string | The key of the project. (optional)
    projectKey: projectKey_example,
  } satisfies GetAllScreenTabsRequest;

  try {
    const data = await api.getAllScreenTabs(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **projectKey** | `string` | The key of the project. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;ScreenableTab&gt;**](ScreenableTab.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the screen ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkScreenTabs

> getBulkScreenTabs(screenId, tabId, startAt, maxResult)

Get bulk screen tabs

Returns the list of tabs for a bulk of screens.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenTabsApi,
} from 'jira-cloud-api';
import type { GetBulkScreenTabsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabsApi(config);

  const body = {
    // Set<number> | The list of screen IDs. To include multiple screen IDs, provide an ampersand-separated list. For example, `screenId=10000&screenId=10001`. (optional)
    screenId: ...,
    // Set<number> | The list of tab IDs. To include multiple tab IDs, provide an ampersand-separated list. For example, `tabId=10000&tabId=10001`. (optional)
    tabId: ...,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. The maximum number is 100, (optional)
    maxResult: 56,
  } satisfies GetBulkScreenTabsRequest;

  try {
    const data = await api.getBulkScreenTabs(body);
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
| **screenId** | `Set<number>` | The list of screen IDs. To include multiple screen IDs, provide an ampersand-separated list. For example, &#x60;screenId&#x3D;10000&amp;screenId&#x3D;10001&#x60;. | [Optional] |
| **tabId** | `Set<number>` | The list of tab IDs. To include multiple tab IDs, provide an ampersand-separated list. For example, &#x60;tabId&#x3D;10000&amp;tabId&#x3D;10001&#x60;. | [Optional] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResult** | `number` | The maximum number of items to return per page. The maximum number is 100, | [Optional] [Defaults to `100`] |

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
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the screen ID or the tab ID is empty. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveScreenTab

> any moveScreenTab(screenId, tabId, pos)

Move screen tab

Moves a screen tab.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenTabsApi,
} from 'jira-cloud-api';
import type { MoveScreenTabRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // number | The ID of the screen tab.
    tabId: 789,
    // number | The position of tab. The base index is 0.
    pos: 56,
  } satisfies MoveScreenTabRequest;

  try {
    const data = await api.moveScreenTab(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **tabId** | `number` | The ID of the screen tab. | [Defaults to `undefined`] |
| **pos** | `number` | The position of tab. The base index is 0. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen or screen tab is not found or the position is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## renameScreenTab

> ScreenableTab renameScreenTab(screenId, tabId, screenableTab)

Update screen tab

Updates the name of a screen tab.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenTabsApi,
} from 'jira-cloud-api';
import type { RenameScreenTabRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // number | The ID of the screen tab.
    tabId: 789,
    // ScreenableTab
    screenableTab: ...,
  } satisfies RenameScreenTabRequest;

  try {
    const data = await api.renameScreenTab(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **tabId** | `number` | The ID of the screen tab. | [Defaults to `undefined`] |
| **screenableTab** | [ScreenableTab](ScreenableTab.md) |  | |

### Return type

[**ScreenableTab**](ScreenableTab.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen or screen tab is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

