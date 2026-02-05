# PrioritySchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPriorityScheme**](PrioritySchemesApi.md#createpriorityscheme) | **POST** /rest/api/3/priorityscheme | Create priority scheme |
| [**deletePriorityScheme**](PrioritySchemesApi.md#deletepriorityscheme) | **DELETE** /rest/api/3/priorityscheme/{schemeId} | Delete priority scheme |
| [**getAvailablePrioritiesByPriorityScheme**](PrioritySchemesApi.md#getavailableprioritiesbypriorityscheme) | **GET** /rest/api/3/priorityscheme/priorities/available | Get available priorities by priority scheme |
| [**getPrioritiesByPriorityScheme**](PrioritySchemesApi.md#getprioritiesbypriorityscheme) | **GET** /rest/api/3/priorityscheme/{schemeId}/priorities | Get priorities by priority scheme |
| [**getPrioritySchemes**](PrioritySchemesApi.md#getpriorityschemes) | **GET** /rest/api/3/priorityscheme | Get priority schemes |
| [**getProjectsByPriorityScheme**](PrioritySchemesApi.md#getprojectsbypriorityscheme) | **GET** /rest/api/3/priorityscheme/{schemeId}/projects | Get projects by priority scheme |
| [**suggestedPrioritiesForMappings**](PrioritySchemesApi.md#suggestedprioritiesformappings) | **POST** /rest/api/3/priorityscheme/mappings | Suggested priorities for mappings |
| [**updatePriorityScheme**](PrioritySchemesApi.md#updatepriorityscheme) | **PUT** /rest/api/3/priorityscheme/{schemeId} | Update priority scheme |



## createPriorityScheme

> PrioritySchemeId createPriorityScheme(createPrioritySchemeDetails)

Create priority scheme

Creates a new priority scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PrioritySchemesApi,
} from 'jira-cloud-api';
import type { CreatePrioritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PrioritySchemesApi(config);

  const body = {
    // CreatePrioritySchemeDetails
    createPrioritySchemeDetails: {"defaultPriorityId":10001,"description":"My priority scheme description","mappings":{"in":{"10002":10000,"10005":10001,"10006":10001,"10008":10003},"out":{}},"name":"My new priority scheme","priorityIds":[10000,10001,10003],"projectIds":[10005,10006,10007]},
  } satisfies CreatePrioritySchemeRequest;

  try {
    const data = await api.createPriorityScheme(body);
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
| **createPrioritySchemeDetails** | [CreatePrioritySchemeDetails](CreatePrioritySchemeDetails.md) |  | |

### Return type

[**PrioritySchemeId**](PrioritySchemeId.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is completed. |  -  |
| **202** | Returned if the request is accepted. |  -  |
| **400** | Returned if the request isn\&#39;t valid.  **Mappings Validation Errors**   *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] require mapping. Please provide mappings in the \&#39;in\&#39; mappings object, where these priorities are the keys with corresponding values.&#x60;&#x60; The listed priority ID(s) have not been provided as keys for &#x60;&#x60;in&#x60;&#x60; mappings but are required, add them to the mappings object. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permissions. |  -  |
| **409** | Returned if an action with this priority scheme is still in progress. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePriorityScheme

> any deletePriorityScheme(schemeId)

Delete priority scheme

Deletes a priority scheme.  This operation is only available for priority schemes without any associated projects. Any associated projects must be removed from the priority scheme before this operation can be performed.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PrioritySchemesApi,
} from 'jira-cloud-api';
import type { DeletePrioritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PrioritySchemesApi(config);

  const body = {
    // number | The priority scheme ID.
    schemeId: 789,
  } satisfies DeletePrioritySchemeRequest;

  try {
    const data = await api.deletePriorityScheme(body);
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
| **schemeId** | `number` | The priority scheme ID. | [Defaults to `undefined`] |

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
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvailablePrioritiesByPriorityScheme

> PageBeanPriorityWithSequence getAvailablePrioritiesByPriorityScheme(schemeId, startAt, maxResults, query, exclude)

Get available priorities by priority scheme

Returns a [paginated](#pagination) list of priorities available for adding to a priority scheme.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  PrioritySchemesApi,
} from 'jira-cloud-api';
import type { GetAvailablePrioritiesByPrioritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PrioritySchemesApi(config);

  const body = {
    // string | The priority scheme ID.
    schemeId: schemeId_example,
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // string | The string to query priorities on by name. (optional)
    query: query_example,
    // Set<string> | A list of priority IDs to exclude from the results. (optional)
    exclude: ...,
  } satisfies GetAvailablePrioritiesByPrioritySchemeRequest;

  try {
    const data = await api.getAvailablePrioritiesByPriorityScheme(body);
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
| **schemeId** | `string` | The priority scheme ID. | [Defaults to `undefined`] |
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **query** | `string` | The string to query priorities on by name. | [Optional] [Defaults to `&#39;&#39;`] |
| **exclude** | `Set<string>` | A list of priority IDs to exclude from the results. | [Optional] |

### Return type

[**PageBeanPriorityWithSequence**](PageBeanPriorityWithSequence.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPrioritiesByPriorityScheme

> PageBeanPriorityWithSequence getPrioritiesByPriorityScheme(schemeId, startAt, maxResults)

Get priorities by priority scheme

Returns a [paginated](#pagination) list of priorities by scheme.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  PrioritySchemesApi,
} from 'jira-cloud-api';
import type { GetPrioritiesByPrioritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PrioritySchemesApi(config);

  const body = {
    // string | The priority scheme ID.
    schemeId: schemeId_example,
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
  } satisfies GetPrioritiesByPrioritySchemeRequest;

  try {
    const data = await api.getPrioritiesByPriorityScheme(body);
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
| **schemeId** | `string` | The priority scheme ID. | [Defaults to `undefined`] |
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |

### Return type

[**PageBeanPriorityWithSequence**](PageBeanPriorityWithSequence.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPrioritySchemes

> PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects getPrioritySchemes(startAt, maxResults, priorityId, schemeId, schemeName, onlyDefault, orderBy, expand)

Get priority schemes

Returns a [paginated](#pagination) list of priority schemes.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  PrioritySchemesApi,
} from 'jira-cloud-api';
import type { GetPrioritySchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PrioritySchemesApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Set<number> | A set of priority IDs to filter by. To include multiple IDs, provide an ampersand-separated list. For example, `priorityId=10000&priorityId=10001`. (optional)
    priorityId: ...,
    // Set<number> | A set of priority scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `schemeId=10000&schemeId=10001`. (optional)
    schemeId: ...,
    // string | The name of scheme to search for. (optional)
    schemeName: schemeName_example,
    // boolean | Whether only the default priority is returned. (optional)
    onlyDefault: true,
    // 'name' | '+name' | '-name' | The ordering to return the priority schemes by. (optional)
    orderBy: orderBy_example,
    // string | A comma separated list of additional information to return. \"priorities\" will return priorities associated with the priority scheme. \"projects\" will return projects associated with the priority scheme. `expand=priorities,projects`. (optional)
    expand: expand_example,
  } satisfies GetPrioritySchemesRequest;

  try {
    const data = await api.getPrioritySchemes(body);
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
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **priorityId** | `Set<number>` | A set of priority IDs to filter by. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;priorityId&#x3D;10000&amp;priorityId&#x3D;10001&#x60;. | [Optional] |
| **schemeId** | `Set<number>` | A set of priority scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;schemeId&#x3D;10000&amp;schemeId&#x3D;10001&#x60;. | [Optional] |
| **schemeName** | `string` | The name of scheme to search for. | [Optional] [Defaults to `&#39;&#39;`] |
| **onlyDefault** | `boolean` | Whether only the default priority is returned. | [Optional] [Defaults to `false`] |
| **orderBy** | `name`, `+name`, `-name` | The ordering to return the priority schemes by. | [Optional] [Defaults to `&#39;+name&#39;`] [Enum: name, +name, -name] |
| **expand** | `string` | A comma separated list of additional information to return. \&quot;priorities\&quot; will return priorities associated with the priority scheme. \&quot;projects\&quot; will return projects associated with the priority scheme. &#x60;expand&#x3D;priorities,projects&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects**](PageBeanPrioritySchemeWithPaginatedPrioritiesAndProjects.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectsByPriorityScheme

> PageBeanProject getProjectsByPriorityScheme(schemeId, startAt, maxResults, projectId, query)

Get projects by priority scheme

Returns a [paginated](#pagination) list of projects by scheme.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  PrioritySchemesApi,
} from 'jira-cloud-api';
import type { GetProjectsByPrioritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PrioritySchemesApi(config);

  const body = {
    // string | The priority scheme ID.
    schemeId: schemeId_example,
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Set<number> | The project IDs to filter by. For example, `projectId=10000&projectId=10001`. (optional)
    projectId: ...,
    // string | The string to query projects on by name. (optional)
    query: query_example,
  } satisfies GetProjectsByPrioritySchemeRequest;

  try {
    const data = await api.getProjectsByPriorityScheme(body);
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
| **schemeId** | `string` | The priority scheme ID. | [Defaults to `undefined`] |
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **projectId** | `Set<number>` | The project IDs to filter by. For example, &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | [Optional] |
| **query** | `string` | The string to query projects on by name. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**PageBeanProject**](PageBeanProject.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## suggestedPrioritiesForMappings

> PageBeanPriorityWithSequence suggestedPrioritiesForMappings(suggestedMappingsRequestBean)

Suggested priorities for mappings

Returns a [paginated](#pagination) list of priorities that would require mapping, given a change in priorities or projects associated with a priority scheme.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  PrioritySchemesApi,
} from 'jira-cloud-api';
import type { SuggestedPrioritiesForMappingsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PrioritySchemesApi(config);

  const body = {
    // SuggestedMappingsRequestBean
    suggestedMappingsRequestBean: {"maxResults":50,"priorities":{"add":[10001,10002],"remove":[10003]},"projects":{"add":[10021]},"schemeId":10005,"startAt":0},
  } satisfies SuggestedPrioritiesForMappingsRequest;

  try {
    const data = await api.suggestedPrioritiesForMappings(body);
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
| **suggestedMappingsRequestBean** | [SuggestedMappingsRequestBean](SuggestedMappingsRequestBean.md) |  | |

### Return type

[**PageBeanPriorityWithSequence**](PageBeanPriorityWithSequence.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePriorityScheme

> UpdatePrioritySchemeResponseBean updatePriorityScheme(schemeId, updatePrioritySchemeRequestBean)

Update priority scheme

Updates a priority scheme. This includes its details, the lists of priorities and projects in it  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  PrioritySchemesApi,
} from 'jira-cloud-api';
import type { UpdatePrioritySchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new PrioritySchemesApi(config);

  const body = {
    // number | The ID of the priority scheme.
    schemeId: 789,
    // UpdatePrioritySchemeRequestBean
    updatePrioritySchemeRequestBean: {"defaultPriorityId":10001,"description":"My priority scheme description","mappings":{"in":{"10003":10002,"10004":10001},"out":{"10001":10005,"10002":10006}},"name":"My new priority scheme","priorities":{"add":{"ids":[10001,10002]},"remove":{"ids":[10003,10004]}},"projects":{"add":{"ids":[10101,10102]},"remove":{"ids":[10103,10104]}}},
  } satisfies UpdatePrioritySchemeRequest;

  try {
    const data = await api.updatePriorityScheme(body);
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
| **schemeId** | `number` | The ID of the priority scheme. | [Defaults to `undefined`] |
| **updatePrioritySchemeRequestBean** | [UpdatePrioritySchemeRequestBean](UpdatePrioritySchemeRequestBean.md) |  | |

### Return type

[**UpdatePrioritySchemeResponseBean**](UpdatePrioritySchemeResponseBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returned if the request is accepted. |  -  |
| **400** | Returned if the request isn\&#39;t valid.  **Mappings Validation Errors**   *  &#x60;&#x60;The changes to priority schemes require mapping of priorities. Please provide a value for the \&#39;in\&#39; mappings object.&#x60;&#x60; Priorities are being removed and/or projects are being added to the scheme, but &#x60;&#x60;in&#x60;&#x60; mappings are not provided.  *  &#x60;&#x60;The changes to priority schemes require mapping of priorities. Please provide a value for the \&#39;out\&#39; mappings object.&#x60;&#x60; Projects are being removed from the scheme, but &#x60;&#x60;out&#x60;&#x60; mappings are not provided.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] provided as keys for the \&#39;in\&#39; mappings object do not exist. Please provide existing priority IDs.&#x60;&#x60; The listed priority ID(s) have been provided as keys for &#x60;&#x60;in&#x60;&#x60; mappings but do not exist. Please confirm the correct priority ID(s) have been provided, they should be priorities that exist on the Jira site which are used by projects being added to the current scheme, but are not in use by the current scheme.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] provided as values for the \&#39;in\&#39; mappings object do not exist. Please provide existing priority IDs used by the current priority scheme.&#x60;&#x60; The listed priority ID(s) have been provided as values for &#x60;&#x60;in&#x60;&#x60; mappings but do not exist. Please confirm the correct priority ID(s) have been provided, they should be priorities that exist on the Jira site and are in use by the current scheme.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] provided as keys for the \&#39;out\&#39; mappings object do not exist. Please provide existing priority IDs used by the current priority scheme.&#x60;&#x60; The listed priority ID(s) have been provided as keys for &#x60;&#x60;out&#x60;&#x60; mappings but are invalid. Please confirm the correct priority ID(s) have been provided, they should be priorities that exist on the Jira site and are in use by the current scheme.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] provided as values for the \&#39;out\&#39; mappings object do not exist. Please provide existing priority IDs used by the default scheme.&#x60;&#x60; The listed priority ID(s) have been provided as values for &#x60;&#x60;out&#x60;&#x60; mappings but are invalid. Please confirm the correct priority ID(s) have been provided, they should be priorities that exist on the Jira site and are in use by the Default Priority Scheme, but are not in use by the current scheme.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] do not require mapping. Please remove these keys and their corresponding values from the \&#39;in\&#39; mappings object.&#x60;&#x60; The listed priority ID(s) have been provided as keys for &#x60;&#x60;in&#x60;&#x60; mappings but are not required, they can be removed from the mappings object.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] require mapping. Please provide mappings in the \&#39;in\&#39; mappings object, where these priorities are the keys with corresponding values.&#x60;&#x60; The listed priority ID(s) have not been provided as keys for &#x60;&#x60;in&#x60;&#x60; mappings but are required, add them to the mappings object.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] being mapped to are not in the current scheme. Please remove these values and their corresponding keys from the \&#39;in\&#39; mappings object.&#x60;&#x60; The listed priority ID(s) have been provided as keys for &#x60;&#x60;in&#x60;&#x60; mappings but are not in use by the current scheme, they can be removed from the mappings object.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] do not require mapping. Please remove these keys and their corresponding values from the \&#39;out\&#39; mappings object.&#x60;&#x60; The listed priority ID(s) hve been provided as keys for &#x60;&#x60;out&#x60;&#x60; mappings but are not required, they can be removed from the mappings object.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] require mapping. Please provide mappings in the \&#39;out\&#39; mappings object, where these priorities are the keys with corresponding values.&#x60;&#x60; The listed priority ID(s) have not been provided as keys for &#x60;&#x60;out&#x60;&#x60; mappings but are required, add them to the mappings object.  *  &#x60;&#x60;The priorities with IDs [ID 1, ID 2, ...] being mapped to are not in the default scheme. Please remove these values and their corresponding keys from the \&#39;out\&#39; mappings object.&#x60;&#x60; The listed priority ID(s) have been provided as keys for &#x60;&#x60;out&#x60;&#x60; mappings but are not in use by the Default Priority Scheme, they can be removed from the mappings object. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permissions. |  -  |
| **409** | Returned if an action with this priority scheme is still in progress. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

