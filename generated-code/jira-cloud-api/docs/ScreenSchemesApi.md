# ScreenSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createScreenScheme**](ScreenSchemesApi.md#createscreenscheme) | **POST** /rest/api/3/screenscheme | Create screen scheme |
| [**deleteScreenScheme**](ScreenSchemesApi.md#deletescreenscheme) | **DELETE** /rest/api/3/screenscheme/{screenSchemeId} | Delete screen scheme |
| [**getScreenSchemes**](ScreenSchemesApi.md#getscreenschemes) | **GET** /rest/api/3/screenscheme | Get screen schemes |
| [**updateScreenScheme**](ScreenSchemesApi.md#updatescreenscheme) | **PUT** /rest/api/3/screenscheme/{screenSchemeId} | Update screen scheme |



## createScreenScheme

> ScreenSchemeId createScreenScheme(screenSchemeDetails)

Create screen scheme

Creates a screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenSchemesApi,
} from 'jira-cloud-api';
import type { CreateScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenSchemesApi(config);

  const body = {
    // ScreenSchemeDetails
    screenSchemeDetails: {"description":"Manage employee data","name":"Employee screen scheme","screens":{"default":10017,"edit":10019,"view":10020}},
  } satisfies CreateScreenSchemeRequest;

  try {
    const data = await api.createScreenScheme(body);
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
| **screenSchemeDetails** | [ScreenSchemeDetails](ScreenSchemeDetails.md) |  | |

### Return type

[**ScreenSchemeId**](ScreenSchemeId.md)

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
| **404** | Returned if a screen used as one of the screen types in the screen scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteScreenScheme

> deleteScreenScheme(screenSchemeId)

Delete screen scheme

Deletes a screen scheme. A screen scheme cannot be deleted if it is used in an issue type screen scheme.  Only screens schemes used in classic projects can be deleted.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenSchemesApi,
} from 'jira-cloud-api';
import type { DeleteScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenSchemesApi(config);

  const body = {
    // string | The ID of the screen scheme.
    screenSchemeId: screenSchemeId_example,
  } satisfies DeleteScreenSchemeRequest;

  try {
    const data = await api.deleteScreenScheme(body);
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
| **screenSchemeId** | `string` | The ID of the screen scheme. | [Defaults to `undefined`] |

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
| **204** | Returned if the screen scheme is deleted. |  -  |
| **400** | Returned if the screen scheme is used in an issue type screen scheme. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getScreenSchemes

> PageBeanScreenScheme getScreenSchemes(startAt, maxResults, id, expand, queryString, orderBy)

Get screen schemes

Returns a [paginated](#pagination) list of screen schemes.  Only screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenSchemesApi,
} from 'jira-cloud-api';
import type { GetScreenSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenSchemesApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)
    id: ...,
    // string | Use [expand](#expansion) include additional information in the response. This parameter accepts `issueTypeScreenSchemes` that, for each screen schemes, returns information about the issue type screen scheme the screen scheme is assigned to. (optional)
    expand: expand_example,
    // string | String used to perform a case-insensitive partial match with screen scheme name. (optional)
    queryString: queryString_example,
    // 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | [Order](#ordering) the results by a field:   *  `id` Sorts by screen scheme ID.  *  `name` Sorts by screen scheme name. (optional)
    orderBy: orderBy_example,
  } satisfies GetScreenSchemesRequest;

  try {
    const data = await api.getScreenSchemes(body);
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
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `25`] |
| **id** | `Set<number>` | The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |
| **expand** | `string` | Use [expand](#expansion) include additional information in the response. This parameter accepts &#x60;issueTypeScreenSchemes&#x60; that, for each screen schemes, returns information about the issue type screen scheme the screen scheme is assigned to. | [Optional] [Defaults to `&#39;&#39;`] |
| **queryString** | `string` | String used to perform a case-insensitive partial match with screen scheme name. | [Optional] [Defaults to `&#39;&#39;`] |
| **orderBy** | `name`, `-name`, `+name`, `id`, `-id`, `+id` | [Order](#ordering) the results by a field:   *  &#x60;id&#x60; Sorts by screen scheme ID.  *  &#x60;name&#x60; Sorts by screen scheme name. | [Optional] [Defaults to `undefined`] [Enum: name, -name, +name, id, -id, +id] |

### Return type

[**PageBeanScreenScheme**](PageBeanScreenScheme.md)

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


## updateScreenScheme

> any updateScreenScheme(screenSchemeId, updateScreenSchemeDetails)

Update screen scheme

Updates a screen scheme. Only screen schemes used in classic projects can be updated.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenSchemesApi,
} from 'jira-cloud-api';
import type { UpdateScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenSchemesApi(config);

  const body = {
    // string | The ID of the screen scheme.
    screenSchemeId: screenSchemeId_example,
    // UpdateScreenSchemeDetails | The screen scheme update details.
    updateScreenSchemeDetails: {"name":"Employee screen scheme v2","screens":{"create":"10019","default":"10018"}},
  } satisfies UpdateScreenSchemeRequest;

  try {
    const data = await api.updateScreenScheme(body);
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
| **screenSchemeId** | `string` | The ID of the screen scheme. | [Defaults to `undefined`] |
| **updateScreenSchemeDetails** | [UpdateScreenSchemeDetails](UpdateScreenSchemeDetails.md) | The screen scheme update details. | |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the screen scheme or a screen used as one of the screen types is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

