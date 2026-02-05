# IssueTypeScreenSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appendMappingsForIssueTypeScreenScheme**](IssueTypeScreenSchemesApi.md#appendmappingsforissuetypescreenscheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping | Append mappings to issue type screen scheme |
| [**assignIssueTypeScreenSchemeToProject**](IssueTypeScreenSchemesApi.md#assignissuetypescreenschemetoproject) | **PUT** /rest/api/3/issuetypescreenscheme/project | Assign issue type screen scheme to project |
| [**createIssueTypeScreenScheme**](IssueTypeScreenSchemesApi.md#createissuetypescreenscheme) | **POST** /rest/api/3/issuetypescreenscheme | Create issue type screen scheme |
| [**deleteIssueTypeScreenScheme**](IssueTypeScreenSchemesApi.md#deleteissuetypescreenscheme) | **DELETE** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId} | Delete issue type screen scheme |
| [**getIssueTypeScreenSchemeMappings**](IssueTypeScreenSchemesApi.md#getissuetypescreenschememappings) | **GET** /rest/api/3/issuetypescreenscheme/mapping | Get issue type screen scheme items |
| [**getIssueTypeScreenSchemeProjectAssociations**](IssueTypeScreenSchemesApi.md#getissuetypescreenschemeprojectassociations) | **GET** /rest/api/3/issuetypescreenscheme/project | Get issue type screen schemes for projects |
| [**getIssueTypeScreenSchemes**](IssueTypeScreenSchemesApi.md#getissuetypescreenschemes) | **GET** /rest/api/3/issuetypescreenscheme | Get issue type screen schemes |
| [**getProjectsForIssueTypeScreenScheme**](IssueTypeScreenSchemesApi.md#getprojectsforissuetypescreenscheme) | **GET** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/project | Get issue type screen scheme projects |
| [**removeMappingsFromIssueTypeScreenScheme**](IssueTypeScreenSchemesApi.md#removemappingsfromissuetypescreenscheme) | **POST** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/remove | Remove mappings from issue type screen scheme |
| [**updateDefaultScreenScheme**](IssueTypeScreenSchemesApi.md#updatedefaultscreenscheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default | Update issue type screen scheme default screen scheme |
| [**updateIssueTypeScreenScheme**](IssueTypeScreenSchemesApi.md#updateissuetypescreenscheme) | **PUT** /rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId} | Update issue type screen scheme |



## appendMappingsForIssueTypeScreenScheme

> any appendMappingsForIssueTypeScreenScheme(issueTypeScreenSchemeId, issueTypeScreenSchemeMappingDetails)

Append mappings to issue type screen scheme

Appends issue type to screen scheme mappings to an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { AppendMappingsForIssueTypeScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // string | The ID of the issue type screen scheme.
    issueTypeScreenSchemeId: issueTypeScreenSchemeId_example,
    // IssueTypeScreenSchemeMappingDetails
    issueTypeScreenSchemeMappingDetails: {"issueTypeMappings":[{"issueTypeId":"10000","screenSchemeId":"10001"},{"issueTypeId":"10001","screenSchemeId":"10002"},{"issueTypeId":"10002","screenSchemeId":"10002"}]},
  } satisfies AppendMappingsForIssueTypeScreenSchemeRequest;

  try {
    const data = await api.appendMappingsForIssueTypeScreenScheme(body);
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
| **issueTypeScreenSchemeId** | `string` | The ID of the issue type screen scheme. | [Defaults to `undefined`] |
| **issueTypeScreenSchemeMappingDetails** | [IssueTypeScreenSchemeMappingDetails](IssueTypeScreenSchemeMappingDetails.md) |  | |

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
| **404** | Returned if the issue type screen scheme, issue type, or screen scheme is not found. |  -  |
| **409** | Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## assignIssueTypeScreenSchemeToProject

> any assignIssueTypeScreenSchemeToProject(issueTypeScreenSchemeProjectAssociation)

Assign issue type screen scheme to project

Assigns an issue type screen scheme to a project.  Issue type screen schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { AssignIssueTypeScreenSchemeToProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // IssueTypeScreenSchemeProjectAssociation
    issueTypeScreenSchemeProjectAssociation: {"issueTypeScreenSchemeId":"10001","projectId":"10002"},
  } satisfies AssignIssueTypeScreenSchemeToProjectRequest;

  try {
    const data = await api.assignIssueTypeScreenSchemeToProject(body);
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
| **issueTypeScreenSchemeProjectAssociation** | [IssueTypeScreenSchemeProjectAssociation](IssueTypeScreenSchemeProjectAssociation.md) |  | |

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
| **400** | Returned if:   *  project is not found.  *  issue type screen scheme is not found.  *  the project is not a classic project. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the issue type screen scheme or the project are missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIssueTypeScreenScheme

> IssueTypeScreenSchemeId createIssueTypeScreenScheme(issueTypeScreenSchemeDetails)

Create issue type screen scheme

Creates an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { CreateIssueTypeScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // IssueTypeScreenSchemeDetails | An issue type screen scheme bean.
    issueTypeScreenSchemeDetails: {"issueTypeMappings":[{"issueTypeId":"default","screenSchemeId":"10001"},{"issueTypeId":"10001","screenSchemeId":"10002"},{"issueTypeId":"10002","screenSchemeId":"10002"}],"name":"Scrum issue type screen scheme"},
  } satisfies CreateIssueTypeScreenSchemeRequest;

  try {
    const data = await api.createIssueTypeScreenScheme(body);
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
| **issueTypeScreenSchemeDetails** | [IssueTypeScreenSchemeDetails](IssueTypeScreenSchemeDetails.md) | An issue type screen scheme bean. | |

### Return type

[**IssueTypeScreenSchemeId**](IssueTypeScreenSchemeId.md)

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
| **404** | Returned if the issue type or screen scheme is not found. |  -  |
| **409** | Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIssueTypeScreenScheme

> any deleteIssueTypeScreenScheme(issueTypeScreenSchemeId)

Delete issue type screen scheme

Deletes an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { DeleteIssueTypeScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // string | The ID of the issue type screen scheme.
    issueTypeScreenSchemeId: issueTypeScreenSchemeId_example,
  } satisfies DeleteIssueTypeScreenSchemeRequest;

  try {
    const data = await api.deleteIssueTypeScreenScheme(body);
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
| **issueTypeScreenSchemeId** | `string` | The ID of the issue type screen scheme. | [Defaults to `undefined`] |

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
| **204** | Returned if the issue type screen scheme is deleted. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the issue type screen scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueTypeScreenSchemeMappings

> PageBeanIssueTypeScreenSchemeItem getIssueTypeScreenSchemeMappings(startAt, maxResults, issueTypeScreenSchemeId)

Get issue type screen scheme items

Returns a [paginated](#pagination) list of issue type screen scheme items.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { GetIssueTypeScreenSchemeMappingsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`. (optional)
    issueTypeScreenSchemeId: ...,
  } satisfies GetIssueTypeScreenSchemeMappingsRequest;

  try {
    const data = await api.getIssueTypeScreenSchemeMappings(body);
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
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **issueTypeScreenSchemeId** | `Set<number>` | The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: &#x60;issueTypeScreenSchemeId&#x3D;10000&amp;issueTypeScreenSchemeId&#x3D;10001&#x60;. | [Optional] |

### Return type

[**PageBeanIssueTypeScreenSchemeItem**](PageBeanIssueTypeScreenSchemeItem.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueTypeScreenSchemeProjectAssociations

> PageBeanIssueTypeScreenSchemesProjects getIssueTypeScreenSchemeProjectAssociations(projectId, startAt, maxResults)

Get issue type screen schemes for projects

Returns a [paginated](#pagination) list of issue type screen schemes and, for each issue type screen scheme, a list of the projects that use it.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { GetIssueTypeScreenSchemeProjectAssociationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // Set<number> | The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
    projectId: ...,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetIssueTypeScreenSchemeProjectAssociationsRequest;

  try {
    const data = await api.getIssueTypeScreenSchemeProjectAssociations(body);
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
| **projectId** | `Set<number>` | The list of project IDs. To include multiple projects, separate IDs with ampersand: &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**PageBeanIssueTypeScreenSchemesProjects**](PageBeanIssueTypeScreenSchemesProjects.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueTypeScreenSchemes

> PageBeanIssueTypeScreenScheme getIssueTypeScreenSchemes(startAt, maxResults, id, queryString, orderBy, expand)

Get issue type screen schemes

Returns a [paginated](#pagination) list of issue type screen schemes.  Only issue type screen schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { GetIssueTypeScreenSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)
    id: ...,
    // string | String used to perform a case-insensitive partial match with issue type screen scheme name. (optional)
    queryString: queryString_example,
    // 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | [Order](#ordering) the results by a field:   *  `name` Sorts by issue type screen scheme name.  *  `id` Sorts by issue type screen scheme ID. (optional)
    orderBy: orderBy_example,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts `projects` that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to. (optional)
    expand: expand_example,
  } satisfies GetIssueTypeScreenSchemesRequest;

  try {
    const data = await api.getIssueTypeScreenSchemes(body);
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
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **id** | `Set<number>` | The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |
| **queryString** | `string` | String used to perform a case-insensitive partial match with issue type screen scheme name. | [Optional] [Defaults to `&#39;&#39;`] |
| **orderBy** | `name`, `-name`, `+name`, `id`, `-id`, `+id` | [Order](#ordering) the results by a field:   *  &#x60;name&#x60; Sorts by issue type screen scheme name.  *  &#x60;id&#x60; Sorts by issue type screen scheme ID. | [Optional] [Defaults to `&#39;id&#39;`] [Enum: name, -name, +name, id, -id, +id] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;projects&#x60; that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**PageBeanIssueTypeScreenScheme**](PageBeanIssueTypeScreenScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectsForIssueTypeScreenScheme

> PageBeanProjectDetails getProjectsForIssueTypeScreenScheme(issueTypeScreenSchemeId, startAt, maxResults, query)

Get issue type screen scheme projects

Returns a [paginated](#pagination) list of projects associated with an issue type screen scheme.  Only company-managed projects associated with an issue type screen scheme are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { GetProjectsForIssueTypeScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // number | The ID of the issue type screen scheme.
    issueTypeScreenSchemeId: 789,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // string (optional)
    query: query_example,
  } satisfies GetProjectsForIssueTypeScreenSchemeRequest;

  try {
    const data = await api.getProjectsForIssueTypeScreenScheme(body);
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
| **issueTypeScreenSchemeId** | `number` | The ID of the issue type screen scheme. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **query** | `string` |  | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**PageBeanProjectDetails**](PageBeanProjectDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeMappingsFromIssueTypeScreenScheme

> any removeMappingsFromIssueTypeScreenScheme(issueTypeScreenSchemeId, issueTypeIds)

Remove mappings from issue type screen scheme

Removes issue type to screen scheme mappings from an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { RemoveMappingsFromIssueTypeScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // string | The ID of the issue type screen scheme.
    issueTypeScreenSchemeId: issueTypeScreenSchemeId_example,
    // IssueTypeIds
    issueTypeIds: {"issueTypeIds":["10000","10001","10004"]},
  } satisfies RemoveMappingsFromIssueTypeScreenSchemeRequest;

  try {
    const data = await api.removeMappingsFromIssueTypeScreenScheme(body);
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
| **issueTypeScreenSchemeId** | `string` | The ID of the issue type screen scheme. | [Defaults to `undefined`] |
| **issueTypeIds** | [IssueTypeIds](IssueTypeIds.md) |  | |

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
| **204** | Returned if the screen scheme mappings are removed from the issue type screen scheme. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the issue type screen scheme or one or more issue type mappings are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDefaultScreenScheme

> any updateDefaultScreenScheme(issueTypeScreenSchemeId, updateDefaultScreenScheme)

Update issue type screen scheme default screen scheme

Updates the default screen scheme of an issue type screen scheme. The default screen scheme is used for all unmapped issue types.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { UpdateDefaultScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // string | The ID of the issue type screen scheme.
    issueTypeScreenSchemeId: issueTypeScreenSchemeId_example,
    // UpdateDefaultScreenScheme
    updateDefaultScreenScheme: {"screenSchemeId":"10010"},
  } satisfies UpdateDefaultScreenSchemeRequest;

  try {
    const data = await api.updateDefaultScreenScheme(body);
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
| **issueTypeScreenSchemeId** | `string` | The ID of the issue type screen scheme. | [Defaults to `undefined`] |
| **updateDefaultScreenScheme** | [UpdateDefaultScreenScheme](UpdateDefaultScreenScheme.md) |  | |

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
| **404** | Returned if the issue type screen scheme or the screen scheme is not found, or the screen scheme isn\&#39;t used in classic projects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIssueTypeScreenScheme

> any updateIssueTypeScreenScheme(issueTypeScreenSchemeId, issueTypeScreenSchemeUpdateDetails)

Update issue type screen scheme

Updates an issue type screen scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeScreenSchemesApi,
} from 'jira-cloud-api';
import type { UpdateIssueTypeScreenSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeScreenSchemesApi(config);

  const body = {
    // string | The ID of the issue type screen scheme.
    issueTypeScreenSchemeId: issueTypeScreenSchemeId_example,
    // IssueTypeScreenSchemeUpdateDetails | The issue type screen scheme update details.
    issueTypeScreenSchemeUpdateDetails: {"description":"Screens for scrum issue types.","name":"Scrum scheme"},
  } satisfies UpdateIssueTypeScreenSchemeRequest;

  try {
    const data = await api.updateIssueTypeScreenScheme(body);
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
| **issueTypeScreenSchemeId** | `string` | The ID of the issue type screen scheme. | [Defaults to `undefined`] |
| **issueTypeScreenSchemeUpdateDetails** | [IssueTypeScreenSchemeUpdateDetails](IssueTypeScreenSchemeUpdateDetails.md) | The issue type screen scheme update details. | |

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
| **404** | Returned if the issue type screen scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

