# IssueTypeSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addIssueTypesToIssueTypeScheme**](IssueTypeSchemesApi.md#addissuetypestoissuetypescheme) | **PUT** /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype | Add issue types to issue type scheme |
| [**assignIssueTypeSchemeToProject**](IssueTypeSchemesApi.md#assignissuetypeschemetoproject) | **PUT** /rest/api/3/issuetypescheme/project | Assign issue type scheme to project |
| [**createIssueTypeScheme**](IssueTypeSchemesApi.md#createissuetypescheme) | **POST** /rest/api/3/issuetypescheme | Create issue type scheme |
| [**deleteIssueTypeScheme**](IssueTypeSchemesApi.md#deleteissuetypescheme) | **DELETE** /rest/api/3/issuetypescheme/{issueTypeSchemeId} | Delete issue type scheme |
| [**getAllIssueTypeSchemes**](IssueTypeSchemesApi.md#getallissuetypeschemes) | **GET** /rest/api/3/issuetypescheme | Get all issue type schemes |
| [**getIssueTypeSchemeForProjects**](IssueTypeSchemesApi.md#getissuetypeschemeforprojects) | **GET** /rest/api/3/issuetypescheme/project | Get issue type schemes for projects |
| [**getIssueTypeSchemesMapping**](IssueTypeSchemesApi.md#getissuetypeschemesmapping) | **GET** /rest/api/3/issuetypescheme/mapping | Get issue type scheme items |
| [**removeIssueTypeFromIssueTypeScheme**](IssueTypeSchemesApi.md#removeissuetypefromissuetypescheme) | **DELETE** /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/{issueTypeId} | Remove issue type from issue type scheme |
| [**reorderIssueTypesInIssueTypeScheme**](IssueTypeSchemesApi.md#reorderissuetypesinissuetypescheme) | **PUT** /rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/move | Change order of issue types |
| [**updateIssueTypeScheme**](IssueTypeSchemesApi.md#updateissuetypescheme) | **PUT** /rest/api/3/issuetypescheme/{issueTypeSchemeId} | Update issue type scheme |



## addIssueTypesToIssueTypeScheme

> any addIssueTypesToIssueTypeScheme(issueTypeSchemeId, issueTypeIds)

Add issue types to issue type scheme

Adds issue types to an issue type scheme.  The added issue types are appended to the issue types list.  If any of the issue types exist in the issue type scheme, the operation fails and no issue types are added.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { AddIssueTypesToIssueTypeSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // number | The ID of the issue type scheme.
    issueTypeSchemeId: 789,
    // IssueTypeIds
    issueTypeIds: {"issueTypeIds":["10000","10002","10003"]},
  } satisfies AddIssueTypesToIssueTypeSchemeRequest;

  try {
    const data = await api.addIssueTypesToIssueTypeScheme(body);
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
| **issueTypeSchemeId** | `number` | The ID of the issue type scheme. | [Defaults to `undefined`] |
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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the issue type or the issue type scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## assignIssueTypeSchemeToProject

> any assignIssueTypeSchemeToProject(issueTypeSchemeProjectAssociation)

Assign issue type scheme to project

Assigns an issue type scheme to a project.  If any issues in the project are assigned issue types not present in the new scheme, the operation will fail. To complete the assignment those issues must be updated to use issue types in the new scheme.  Issue type schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { AssignIssueTypeSchemeToProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // IssueTypeSchemeProjectAssociation
    issueTypeSchemeProjectAssociation: {"issueTypeSchemeId":"10000","projectId":"10000"},
  } satisfies AssignIssueTypeSchemeToProjectRequest;

  try {
    const data = await api.assignIssueTypeSchemeToProject(body);
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
| **issueTypeSchemeProjectAssociation** | [IssueTypeSchemeProjectAssociation](IssueTypeSchemeProjectAssociation.md) |  | |

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
| **404** | Returned if the issue type scheme or the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIssueTypeScheme

> IssueTypeSchemeID createIssueTypeScheme(issueTypeSchemeDetails)

Create issue type scheme

Creates an issue type scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { CreateIssueTypeSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // IssueTypeSchemeDetails
    issueTypeSchemeDetails: {"defaultIssueTypeId":"10002","description":"A collection of issue types suited to use in a kanban style project.","issueTypeIds":["10001","10002","10003"],"name":"Kanban Issue Type Scheme"},
  } satisfies CreateIssueTypeSchemeRequest;

  try {
    const data = await api.createIssueTypeScheme(body);
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
| **issueTypeSchemeDetails** | [IssueTypeSchemeDetails](IssueTypeSchemeDetails.md) |  | |

### Return type

[**IssueTypeSchemeID**](IssueTypeSchemeID.md)

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
| **409** | Returned if the scheme name is used by another scheme. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIssueTypeScheme

> any deleteIssueTypeScheme(issueTypeSchemeId)

Delete issue type scheme

Deletes an issue type scheme.  Only issue type schemes used in classic projects can be deleted. Only issue type schemes not associated with a project can be deleted  A validation error will be returned if the specified scheme is associated with one or more projects. Use [Get issue type scheme API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-schemes/#api-rest-api-3-issuetypescheme-get) (with the projects expand, and id query parameter) to get a list of projects. Then, use [Assign issue type scheme to project API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-type-schemes/#api-rest-api-3-issuetypescheme-project-put) to associate all projects to another scheme before deleting.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { DeleteIssueTypeSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // number | The ID of the issue type scheme.
    issueTypeSchemeId: 789,
  } satisfies DeleteIssueTypeSchemeRequest;

  try {
    const data = await api.deleteIssueTypeScheme(body);
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
| **issueTypeSchemeId** | `number` | The ID of the issue type scheme. | [Defaults to `undefined`] |

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
| **204** | Returned if the issue type scheme is deleted. |  -  |
| **400** | Returned if the request is to delete the default issue type scheme or if the scheme is associated with a project |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the issue type scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllIssueTypeSchemes

> PageBeanIssueTypeScheme getAllIssueTypeSchemes(startAt, maxResults, id, orderBy, expand, queryString)

Get all issue type schemes

Returns a [paginated](#pagination) list of issue type schemes.  Only issue type schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { GetAllIssueTypeSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)
    id: ...,
    // 'name' | '-name' | '+name' | 'id' | '-id' | '+id' | [Order](#ordering) the results by a field:   *  `name` Sorts by issue type scheme name.  *  `id` Sorts by issue type scheme ID. (optional)
    orderBy: orderBy_example,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `projects` For each issue type schemes, returns information about the projects the issue type scheme is assigned to.  *  `issueTypes` For each issue type schemes, returns information about the issueTypes the issue type scheme have. (optional)
    expand: expand_example,
    // string | String used to perform a case-insensitive partial match with issue type scheme name. (optional)
    queryString: queryString_example,
  } satisfies GetAllIssueTypeSchemesRequest;

  try {
    const data = await api.getAllIssueTypeSchemes(body);
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
| **id** | `Set<number>` | The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [Optional] |
| **orderBy** | `name`, `-name`, `+name`, `id`, `-id`, `+id` | [Order](#ordering) the results by a field:   *  &#x60;name&#x60; Sorts by issue type scheme name.  *  &#x60;id&#x60; Sorts by issue type scheme ID. | [Optional] [Defaults to `&#39;id&#39;`] [Enum: name, -name, +name, id, -id, +id] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;projects&#x60; For each issue type schemes, returns information about the projects the issue type scheme is assigned to.  *  &#x60;issueTypes&#x60; For each issue type schemes, returns information about the issueTypes the issue type scheme have. | [Optional] [Defaults to `&#39;&#39;`] |
| **queryString** | `string` | String used to perform a case-insensitive partial match with issue type scheme name. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**PageBeanIssueTypeScheme**](PageBeanIssueTypeScheme.md)

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


## getIssueTypeSchemeForProjects

> PageBeanIssueTypeSchemeProjects getIssueTypeSchemeForProjects(projectId, startAt, maxResults)

Get issue type schemes for projects

Returns a [paginated](#pagination) list of issue type schemes and, for each issue type scheme, a list of the projects that use it.  Only issue type schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { GetIssueTypeSchemeForProjectsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // Set<number> | The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`.
    projectId: ...,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetIssueTypeSchemeForProjectsRequest;

  try {
    const data = await api.getIssueTypeSchemeForProjects(body);
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
| **projectId** | `Set<number>` | The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**PageBeanIssueTypeSchemeProjects**](PageBeanIssueTypeSchemeProjects.md)

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


## getIssueTypeSchemesMapping

> PageBeanIssueTypeSchemeMapping getIssueTypeSchemesMapping(startAt, maxResults, issueTypeSchemeId)

Get issue type scheme items

Returns a [paginated](#pagination) list of issue type scheme items.  Only issue type scheme items used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { GetIssueTypeSchemesMappingRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<number> | The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`. (optional)
    issueTypeSchemeId: ...,
  } satisfies GetIssueTypeSchemesMappingRequest;

  try {
    const data = await api.getIssueTypeSchemesMapping(body);
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
| **issueTypeSchemeId** | `Set<number>` | The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;issueTypeSchemeId&#x3D;10000&amp;issueTypeSchemeId&#x3D;10001&#x60;. | [Optional] |

### Return type

[**PageBeanIssueTypeSchemeMapping**](PageBeanIssueTypeSchemeMapping.md)

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


## removeIssueTypeFromIssueTypeScheme

> any removeIssueTypeFromIssueTypeScheme(issueTypeSchemeId, issueTypeId)

Remove issue type from issue type scheme

Removes an issue type from an issue type scheme.  This operation cannot remove:   *  any issue type used by issues.  *  any issue types from the default issue type scheme.  *  the last standard issue type from an issue type scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { RemoveIssueTypeFromIssueTypeSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // number | The ID of the issue type scheme.
    issueTypeSchemeId: 789,
    // number | The ID of the issue type.
    issueTypeId: 789,
  } satisfies RemoveIssueTypeFromIssueTypeSchemeRequest;

  try {
    const data = await api.removeIssueTypeFromIssueTypeScheme(body);
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
| **issueTypeSchemeId** | `number` | The ID of the issue type scheme. | [Defaults to `undefined`] |
| **issueTypeId** | `number` | The ID of the issue type. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the issue type scheme is missing or the issue type is not found in the issue type scheme. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reorderIssueTypesInIssueTypeScheme

> any reorderIssueTypesInIssueTypeScheme(issueTypeSchemeId, orderOfIssueTypes)

Change order of issue types

Changes the order of issue types in an issue type scheme.  The request body parameters must meet the following requirements:   *  all of the issue types must belong to the issue type scheme.  *  either &#x60;after&#x60; or &#x60;position&#x60; must be provided.  *  the issue type in &#x60;after&#x60; must not be in the issue type list.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { ReorderIssueTypesInIssueTypeSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // number | The ID of the issue type scheme.
    issueTypeSchemeId: 789,
    // OrderOfIssueTypes
    orderOfIssueTypes: {"after":"10008","issueTypeIds":["10001","10004","10002"]},
  } satisfies ReorderIssueTypesInIssueTypeSchemeRequest;

  try {
    const data = await api.reorderIssueTypesInIssueTypeScheme(body);
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
| **issueTypeSchemeId** | `number` | The ID of the issue type scheme. | [Defaults to `undefined`] |
| **orderOfIssueTypes** | [OrderOfIssueTypes](OrderOfIssueTypes.md) |  | |

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
| **404** | Returned if the issue type scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIssueTypeScheme

> any updateIssueTypeScheme(issueTypeSchemeId, issueTypeSchemeUpdateDetails)

Update issue type scheme

Updates an issue type scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypeSchemesApi,
} from 'jira-cloud-api';
import type { UpdateIssueTypeSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypeSchemesApi(config);

  const body = {
    // number | The ID of the issue type scheme.
    issueTypeSchemeId: 789,
    // IssueTypeSchemeUpdateDetails
    issueTypeSchemeUpdateDetails: {"defaultIssueTypeId":"10002","description":"A collection of issue types suited to use in a kanban style project.","name":"Kanban Issue Type Scheme"},
  } satisfies UpdateIssueTypeSchemeRequest;

  try {
    const data = await api.updateIssueTypeScheme(body);
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
| **issueTypeSchemeId** | `number` | The ID of the issue type scheme. | [Defaults to `undefined`] |
| **issueTypeSchemeUpdateDetails** | [IssueTypeSchemeUpdateDetails](IssueTypeSchemeUpdateDetails.md) |  | |

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
| **404** | Returned if the issue type scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

