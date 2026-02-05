# ScreensApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addFieldToDefaultScreen**](ScreensApi.md#addfieldtodefaultscreen) | **POST** /rest/api/3/screens/addToDefault/{fieldId} | Add field to default screen |
| [**createScreen**](ScreensApi.md#createscreen) | **POST** /rest/api/3/screens | Create screen |
| [**deleteScreen**](ScreensApi.md#deletescreen) | **DELETE** /rest/api/3/screens/{screenId} | Delete screen |
| [**getAvailableScreenFields**](ScreensApi.md#getavailablescreenfields) | **GET** /rest/api/3/screens/{screenId}/availableFields | Get available screen fields |
| [**getScreens**](ScreensApi.md#getscreens) | **GET** /rest/api/3/screens | Get screens |
| [**getScreensForField**](ScreensApi.md#getscreensforfield) | **GET** /rest/api/3/field/{fieldId}/screens | Get screens for a field |
| [**updateScreen**](ScreensApi.md#updatescreen) | **PUT** /rest/api/3/screens/{screenId} | Update screen |



## addFieldToDefaultScreen

> any addFieldToDefaultScreen(fieldId)

Add field to default screen

Adds a field to the default tab of the default screen.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreensApi,
} from 'jira-cloud-api';
import type { AddFieldToDefaultScreenRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreensApi(config);

  const body = {
    // string | The ID of the field.
    fieldId: fieldId_example,
  } satisfies AddFieldToDefaultScreenRequest;

  try {
    const data = await api.addFieldToDefaultScreen(body);
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
| **fieldId** | `string` | The ID of the field. | [Defaults to `undefined`] |

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
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field it not found or the field is already present. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createScreen

> Screen createScreen(screenDetails)

Create screen

Creates a screen with a default field tab.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreensApi,
} from 'jira-cloud-api';
import type { CreateScreenRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreensApi(config);

  const body = {
    // ScreenDetails
    screenDetails: {"description":"Enables changes to resolution and linked issues.","name":"Resolve Security Issue Screen"},
  } satisfies CreateScreenRequest;

  try {
    const data = await api.createScreen(body);
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
| **screenDetails** | [ScreenDetails](ScreenDetails.md) |  | |

### Return type

[**Screen**](Screen.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteScreen

> deleteScreen(screenId)

Delete screen

Deletes a screen. A screen cannot be deleted if it is used in a screen scheme, workflow, or workflow draft.  Only screens used in classic projects can be deleted.

### Example

```ts
import {
  Configuration,
  ScreensApi,
} from 'jira-cloud-api';
import type { DeleteScreenRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreensApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
  } satisfies DeleteScreenRequest;

  try {
    const data = await api.deleteScreen(body);
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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvailableScreenFields

> Array&lt;ScreenableField&gt; getAvailableScreenFields(screenId)

Get available screen fields

Returns the fields that can be added to a tab on a screen.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreensApi,
} from 'jira-cloud-api';
import type { GetAvailableScreenFieldsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreensApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
  } satisfies GetAvailableScreenFieldsRequest;

  try {
    const data = await api.getAvailableScreenFields(body);
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

### Return type

[**Array&lt;ScreenableField&gt;**](ScreenableField.md)

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
| **404** | Returned if the screen is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getScreens

> PageBeanScreen getScreens(startAt, maxResults, id, queryString, scope, orderBy)

Get screens

Returns a [paginated](#pagination) list of all screens or those specified by one or more screen IDs.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreensApi,
} from 'jira-cloud-api';
import type { GetScreensRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreensApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)
    id: ...,
    // string | String used to perform a case-insensitive partial match with screen name. (optional)
    queryString: queryString_example,
    // Set<'GLOBAL' | 'TEMPLATE' | 'PROJECT'> | The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, `scope=GLOBAL&scope=PROJECT`. (optional)
    scope: ...,
    // 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | [Order](#ordering) the results by a field:   *  `id` Sorts by screen ID.  *  `name` Sorts by screen name. (optional)
    orderBy: orderBy_example,
  } satisfies GetScreensRequest;

  try {
    const data = await api.getScreens(body);
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
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |
| **id** | `Set<number>` | The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |
| **queryString** | `string` | String used to perform a case-insensitive partial match with screen name. | [Optional] [Defaults to `&#39;&#39;`] |
| **scope** | `GLOBAL`, `TEMPLATE`, `PROJECT` | The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, &#x60;scope&#x3D;GLOBAL&amp;scope&#x3D;PROJECT&#x60;. | [Optional] [Enum: GLOBAL, TEMPLATE, PROJECT] |
| **orderBy** | `name`, `-name`, `+name`, `id`, `-id`, `+id` | [Order](#ordering) the results by a field:   *  &#x60;id&#x60; Sorts by screen ID.  *  &#x60;name&#x60; Sorts by screen name. | [Optional] [Defaults to `undefined`] [Enum: name, -name, +name, id, -id, +id] |

### Return type

[**PageBeanScreen**](PageBeanScreen.md)

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


## getScreensForField

> PageBeanScreenWithTab getScreensForField(fieldId, startAt, maxResults, expand)

Get screens for a field

Returns a [paginated](#pagination) list of the screens a field is used in.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreensApi,
} from 'jira-cloud-api';
import type { GetScreensForFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreensApi(config);

  const body = {
    // string | The ID of the field to return screens for.
    fieldId: fieldId_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // string | Use [expand](#expansion) to include additional information about screens in the response. This parameter accepts `tab` which returns details about the screen tabs the field is used in. (optional)
    expand: expand_example,
  } satisfies GetScreensForFieldRequest;

  try {
    const data = await api.getScreensForField(body);
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
| **fieldId** | `string` | The ID of the field to return screens for. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about screens in the response. This parameter accepts &#x60;tab&#x60; which returns details about the screen tabs the field is used in. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanScreenWithTab**](PageBeanScreenWithTab.md)

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


## updateScreen

> Screen updateScreen(screenId, updateScreenDetails)

Update screen

Updates a screen. Only screens used in classic projects can be updated.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreensApi,
} from 'jira-cloud-api';
import type { UpdateScreenRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreensApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // UpdateScreenDetails
    updateScreenDetails: {"description":"Enables changes to resolution and linked issues for accessibility related issues.","name":"Resolve Accessibility Issue Screen"},
  } satisfies UpdateScreenRequest;

  try {
    const data = await api.updateScreen(body);
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
| **updateScreenDetails** | [UpdateScreenDetails](UpdateScreenDetails.md) |  | |

### Return type

[**Screen**](Screen.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

