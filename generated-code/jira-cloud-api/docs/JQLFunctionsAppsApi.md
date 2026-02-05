# JQLFunctionsAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPrecomputations**](JQLFunctionsAppsApi.md#getprecomputations) | **GET** /rest/api/3/jql/function/computation | Get precomputations (apps) |
| [**getPrecomputationsByID**](JQLFunctionsAppsApi.md#getprecomputationsbyid) | **POST** /rest/api/3/jql/function/computation/search | Get precomputations by ID (apps) |
| [**updatePrecomputations**](JQLFunctionsAppsApi.md#updateprecomputations) | **POST** /rest/api/3/jql/function/computation | Update precomputations (apps) |



## getPrecomputations

> PageBean2JqlFunctionPrecomputationBean getPrecomputations(functionKey, startAt, maxResults, orderBy)

Get precomputations (apps)

Returns the list of a function\&#39;s precomputations along with information about when they were created, updated, and last used. Each precomputation has a &#x60;value&#x60; \\- the JQL fragment to replace the custom function clause with.  **[Permissions](#permissions) required:** This API is only accessible to apps and apps can only inspect their own functions.  The new &#x60;read:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  JQLFunctionsAppsApi,
} from 'jira-cloud-api';
import type { GetPrecomputationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLFunctionsAppsApi(config);

  const body = {
    // Array<string> | The function key in format:   *  Forge: `ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]`  *  Connect: `[App key]__[Module key]` (optional)
    functionKey: ...,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // string | [Order](#ordering) the results by a field:   *  `functionKey` Sorts by the functionKey.  *  `used` Sorts by the used timestamp.  *  `created` Sorts by the created timestamp.  *  `updated` Sorts by the updated timestamp. (optional)
    orderBy: orderBy_example,
  } satisfies GetPrecomputationsRequest;

  try {
    const data = await api.getPrecomputations(body);
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
| **functionKey** | `Array<string>` | The function key in format:   *  Forge: &#x60;ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]&#x60;  *  Connect: &#x60;[App key]__[Module key]&#x60; | [Optional] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |
| **orderBy** | `string` | [Order](#ordering) the results by a field:   *  &#x60;functionKey&#x60; Sorts by the functionKey.  *  &#x60;used&#x60; Sorts by the used timestamp.  *  &#x60;created&#x60; Sorts by the created timestamp.  *  &#x60;updated&#x60; Sorts by the updated timestamp. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBean2JqlFunctionPrecomputationBean**](PageBean2JqlFunctionPrecomputationBean.md)

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
| **403** | Returned if the request is not authenticated as the app that provided the function. |  -  |
| **404** | Returned if the function is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPrecomputationsByID

> JqlFunctionPrecomputationGetByIdResponse getPrecomputationsByID(jqlFunctionPrecomputationGetByIdRequest, orderBy)

Get precomputations by ID (apps)

Returns function precomputations by IDs, along with information about when they were created, updated, and last used. Each precomputation has a &#x60;value&#x60; \\- the JQL fragment to replace the custom function clause with.  **[Permissions](#permissions) required:** This API is only accessible to apps and apps can only inspect their own functions.  The new &#x60;read:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  JQLFunctionsAppsApi,
} from 'jira-cloud-api';
import type { GetPrecomputationsByIDRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLFunctionsAppsApi(config);

  const body = {
    // JqlFunctionPrecomputationGetByIdRequest
    jqlFunctionPrecomputationGetByIdRequest: {"precomputationIDs":["f2ef228b-367f-4c6b-bd9d-0d0e96b5bd7b","2a854f11-d0e1-4260-aea8-64a562a7062a"]},
    // string | [Order](#ordering) the results by a field:   *  `functionKey` Sorts by the functionKey.  *  `used` Sorts by the used timestamp.  *  `created` Sorts by the created timestamp.  *  `updated` Sorts by the updated timestamp. (optional)
    orderBy: orderBy_example,
  } satisfies GetPrecomputationsByIDRequest;

  try {
    const data = await api.getPrecomputationsByID(body);
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
| **jqlFunctionPrecomputationGetByIdRequest** | [JqlFunctionPrecomputationGetByIdRequest](JqlFunctionPrecomputationGetByIdRequest.md) |  | |
| **orderBy** | `string` | [Order](#ordering) the results by a field:   *  &#x60;functionKey&#x60; Sorts by the functionKey.  *  &#x60;used&#x60; Sorts by the used timestamp.  *  &#x60;created&#x60; Sorts by the created timestamp.  *  &#x60;updated&#x60; Sorts by the updated timestamp. | [Optional] [Defaults to `undefined`] |

### Return type

[**JqlFunctionPrecomputationGetByIdResponse**](JqlFunctionPrecomputationGetByIdResponse.md)

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
| **403** | Returned if the request is not authenticated as the app that provided the function. |  -  |
| **404** | Returned if the function is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePrecomputations

> JqlFunctionPrecomputationUpdateResponse updatePrecomputations(jqlFunctionPrecomputationUpdateRequestBean, skipNotFoundPrecomputations)

Update precomputations (apps)

Update the precomputation value of a function created by a Forge/Connect app.  **[Permissions](#permissions) required:** An API for apps to update their own precomputations.  The new &#x60;write:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  JQLFunctionsAppsApi,
} from 'jira-cloud-api';
import type { UpdatePrecomputationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLFunctionsAppsApi(config);

  const body = {
    // JqlFunctionPrecomputationUpdateRequestBean
    jqlFunctionPrecomputationUpdateRequestBean: {"values":[{"id":"f2ef228b-367f-4c6b-bd9d-0d0e96b5bd7b","value":"issue in (TEST-1, TEST-2, TEST-3)"},{"error":"Error message to be displayed to the user","id":"2a854f11-d0e1-4260-aea8-64a562a7062a"}]},
    // boolean (optional)
    skipNotFoundPrecomputations: true,
  } satisfies UpdatePrecomputationsRequest;

  try {
    const data = await api.updatePrecomputations(body);
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
| **jqlFunctionPrecomputationUpdateRequestBean** | [JqlFunctionPrecomputationUpdateRequestBean](JqlFunctionPrecomputationUpdateRequestBean.md) |  | |
| **skipNotFoundPrecomputations** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**JqlFunctionPrecomputationUpdateResponse**](JqlFunctionPrecomputationUpdateResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the request is not authenticated as the app that provided the function. |  -  |
| **404** | Returned if the function is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

