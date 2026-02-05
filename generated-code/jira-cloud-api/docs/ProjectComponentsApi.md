# ProjectComponentsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createComponent**](ProjectComponentsApi.md#createcomponent) | **POST** /rest/api/3/component | Create component |
| [**deleteComponent**](ProjectComponentsApi.md#deletecomponent) | **DELETE** /rest/api/3/component/{id} | Delete component |
| [**findComponentsForProjects**](ProjectComponentsApi.md#findcomponentsforprojects) | **GET** /rest/api/3/component | Find components for projects |
| [**getComponent**](ProjectComponentsApi.md#getcomponent) | **GET** /rest/api/3/component/{id} | Get component |
| [**getComponentRelatedIssues**](ProjectComponentsApi.md#getcomponentrelatedissues) | **GET** /rest/api/3/component/{id}/relatedIssueCounts | Get component issues count |
| [**getProjectComponents**](ProjectComponentsApi.md#getprojectcomponents) | **GET** /rest/api/3/project/{projectIdOrKey}/components | Get project components |
| [**getProjectComponentsPaginated**](ProjectComponentsApi.md#getprojectcomponentspaginated) | **GET** /rest/api/3/project/{projectIdOrKey}/component | Get project components paginated |
| [**updateComponent**](ProjectComponentsApi.md#updatecomponent) | **PUT** /rest/api/3/component/{id} | Update component |



## createComponent

> ProjectComponent createComponent(projectComponent)

Create component

Creates a component. Use components to provide containers for issues within a project. Use components to provide containers for issues within a project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectComponentsApi,
} from 'jira-cloud-api';
import type { CreateComponentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectComponentsApi(config);

  const body = {
    // ProjectComponent
    projectComponent: {"assigneeType":"PROJECT_LEAD","description":"This is a Jira component","isAssigneeTypeValid":false,"leadAccountId":"5b10a2844c20165700ede21g","name":"Component 1","project":"HSP"},
  } satisfies CreateComponentRequest;

  try {
    const data = await api.createComponent(body);
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
| **projectComponent** | [ProjectComponent](ProjectComponent.md) |  | |

### Return type

[**ProjectComponent**](ProjectComponent.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  the user is not found.  *  &#x60;name&#x60; is not provided.  *  &#x60;name&#x60; is over 255 characters in length.  *  &#x60;projectId&#x60; is not provided.  *  &#x60;assigneeType&#x60; is an invalid value. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira. |  -  |
| **404** | Returned if the project is not found or the user does not have permission to browse the project containing the component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteComponent

> deleteComponent(id, moveIssuesTo)

Delete component

Deletes a component.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectComponentsApi,
} from 'jira-cloud-api';
import type { DeleteComponentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectComponentsApi(config);

  const body = {
    // string | The ID of the component.
    id: id_example,
    // string | The ID of the component to replace the deleted component. If this value is null no replacement is made. (optional)
    moveIssuesTo: moveIssuesTo_example,
  } satisfies DeleteComponentRequest;

  try {
    const data = await api.deleteComponent(body);
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
| **id** | `string` | The ID of the component. | [Defaults to `undefined`] |
| **moveIssuesTo** | `string` | The ID of the component to replace the deleted component. If this value is null no replacement is made. | [Optional] [Defaults to `undefined`] |

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
| **403** | Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira. |  -  |
| **404** | Returned if:   *  the component is not found.  *  the replacement component is not found.  *  the user does not have permission to browse the project containing the component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findComponentsForProjects

> PageBean2ComponentJsonBean findComponentsForProjects(projectIdsOrKeys, startAt, maxResults, orderBy, query)

Find components for projects

Returns a [paginated](#pagination) list of all components in a project, including global (Compass) components when applicable.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectComponentsApi,
} from 'jira-cloud-api';
import type { FindComponentsForProjectsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectComponentsApi(config);

  const body = {
    // Array<string> | The project IDs and/or project keys (case sensitive). (optional)
    projectIdsOrKeys: ...,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // 'description' | '-description' | '+description' | 'name' | '-name' | '+name' | [Order](#ordering) the results by a field:   *  `description` Sorts by the component description.  *  `name` Sorts by component name. (optional)
    orderBy: orderBy_example,
    // string | Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive). (optional)
    query: query_example,
  } satisfies FindComponentsForProjectsRequest;

  try {
    const data = await api.findComponentsForProjects(body);
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
| **projectIdsOrKeys** | `Array<string>` | The project IDs and/or project keys (case sensitive). | [Optional] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **orderBy** | `description`, `-description`, `+description`, `name`, `-name`, `+name` | [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by the component description.  *  &#x60;name&#x60; Sorts by component name. | [Optional] [Defaults to `undefined`] [Enum: description, -description, +description, name, -name, +name] |
| **query** | `string` | Filter the results using a literal string. Components with a matching &#x60;name&#x60; or &#x60;description&#x60; are returned (case insensitive). | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBean2ComponentJsonBean**](PageBean2ComponentJsonBean.md)

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
| **404** | Returned if the project is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComponent

> ProjectComponent getComponent(id)

Get component

Returns a component.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component.

### Example

```ts
import {
  Configuration,
  ProjectComponentsApi,
} from 'jira-cloud-api';
import type { GetComponentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectComponentsApi(config);

  const body = {
    // string | The ID of the component.
    id: id_example,
  } satisfies GetComponentRequest;

  try {
    const data = await api.getComponent(body);
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
| **id** | `string` | The ID of the component. | [Defaults to `undefined`] |

### Return type

[**ProjectComponent**](ProjectComponent.md)

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
| **404** | Returned if the component is not found or the user does not have permission to browse the project containing the component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComponentRelatedIssues

> ComponentIssuesCount getComponentRelatedIssues(id)

Get component issues count

Returns the counts of issues assigned to the component.  This operation can be accessed anonymously.  **Deprecation notice:** The required OAuth 2.0 scopes will be updated on June 15, 2024.   *  **Classic**: &#x60;read:jira-work&#x60;  *  **Granular**: &#x60;read:field:jira&#x60;, &#x60;read:project.component:jira&#x60;  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  ProjectComponentsApi,
} from 'jira-cloud-api';
import type { GetComponentRelatedIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectComponentsApi(config);

  const body = {
    // string | The ID of the component.
    id: id_example,
  } satisfies GetComponentRelatedIssuesRequest;

  try {
    const data = await api.getComponentRelatedIssues(body);
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
| **id** | `string` | The ID of the component. | [Defaults to `undefined`] |

### Return type

[**ComponentIssuesCount**](ComponentIssuesCount.md)

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
| **404** | Returned if the component is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectComponents

> Array&lt;ProjectComponent&gt; getProjectComponents(projectIdOrKey, componentSource)

Get project components

Returns all components in a project. See the [Get project components paginated](#api-rest-api-3-project-projectIdOrKey-component-get) resource if you want to get a full list of components with pagination.  If your project uses Compass components, this API will return a paginated list of Compass components that are linked to issues in that project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectComponentsApi,
} from 'jira-cloud-api';
import type { GetProjectComponentsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectComponentsApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // 'jira' | 'compass' | 'auto' | The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`. (optional)
    componentSource: componentSource_example,
  } satisfies GetProjectComponentsRequest;

  try {
    const data = await api.getProjectComponents(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **componentSource** | `jira`, `compass`, `auto` | The source of the components to return. Can be &#x60;jira&#x60; (default), &#x60;compass&#x60; or &#x60;auto&#x60;. When &#x60;auto&#x60; is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to &#x60;jira&#x60;. | [Optional] [Defaults to `&#39;jira&#39;`] [Enum: jira, compass, auto] |

### Return type

[**Array&lt;ProjectComponent&gt;**](ProjectComponent.md)

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
| **404** | Returned if the project is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectComponentsPaginated

> PageBeanComponentWithIssueCount getProjectComponentsPaginated(projectIdOrKey, startAt, maxResults, orderBy, componentSource, query)

Get project components paginated

Returns a [paginated](#pagination) list of all components in a project. See the [Get project components](#api-rest-api-3-project-projectIdOrKey-components-get) resource if you want to get a full list of versions without pagination.  If your project uses Compass components, this API will return a list of Compass components that are linked to issues in that project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectComponentsApi,
} from 'jira-cloud-api';
import type { GetProjectComponentsPaginatedRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectComponentsApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // 'description' | '-description' | '+description' | 'issueCount' | '-issueCount' | '+issueCount' | 'lead' | '-lead' | '+lead' | 'name' | '-name' | '+name' | [Order](#ordering) the results by a field:   *  `description` Sorts by the component description.  *  `issueCount` Sorts by the count of issues associated with the component.  *  `lead` Sorts by the user key of the component\'s project lead.  *  `name` Sorts by component name. (optional)
    orderBy: orderBy_example,
    // 'jira' | 'compass' | 'auto' | The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`. (optional)
    componentSource: componentSource_example,
    // string | Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive). (optional)
    query: query_example,
  } satisfies GetProjectComponentsPaginatedRequest;

  try {
    const data = await api.getProjectComponentsPaginated(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **orderBy** | `description`, `-description`, `+description`, `issueCount`, `-issueCount`, `+issueCount`, `lead`, `-lead`, `+lead`, `name`, `-name`, `+name` | [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by the component description.  *  &#x60;issueCount&#x60; Sorts by the count of issues associated with the component.  *  &#x60;lead&#x60; Sorts by the user key of the component\&#39;s project lead.  *  &#x60;name&#x60; Sorts by component name. | [Optional] [Defaults to `undefined`] [Enum: description, -description, +description, issueCount, -issueCount, +issueCount, lead, -lead, +lead, name, -name, +name] |
| **componentSource** | `jira`, `compass`, `auto` | The source of the components to return. Can be &#x60;jira&#x60; (default), &#x60;compass&#x60; or &#x60;auto&#x60;. When &#x60;auto&#x60; is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to &#x60;jira&#x60;. | [Optional] [Defaults to `&#39;jira&#39;`] [Enum: jira, compass, auto] |
| **query** | `string` | Filter the results using a literal string. Components with a matching &#x60;name&#x60; or &#x60;description&#x60; are returned (case insensitive). | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanComponentWithIssueCount**](PageBeanComponentWithIssueCount.md)

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
| **404** | Returned if the project is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateComponent

> ProjectComponent updateComponent(id, projectComponent)

Update component

Updates a component. Any fields included in the request are overwritten. If &#x60;leadAccountId&#x60; is an empty string (\&quot;\&quot;) the component lead is removed.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ProjectComponentsApi,
} from 'jira-cloud-api';
import type { UpdateComponentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectComponentsApi(config);

  const body = {
    // string | The ID of the component.
    id: id_example,
    // ProjectComponent
    projectComponent: {"assigneeType":"PROJECT_LEAD","description":"This is a Jira component","isAssigneeTypeValid":false,"leadAccountId":"5b10a2844c20165700ede21g","name":"Component 1"},
  } satisfies UpdateComponentRequest;

  try {
    const data = await api.updateComponent(body);
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
| **id** | `string` | The ID of the component. | [Defaults to `undefined`] |
| **projectComponent** | [ProjectComponent](ProjectComponent.md) |  | |

### Return type

[**ProjectComponent**](ProjectComponent.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  the user is not found.  *  &#x60;assigneeType&#x60; is an invalid value.  *  &#x60;name&#x60; is over 255 characters in length. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira. |  -  |
| **404** | Returned if the component is not found or the user does not have permission to browse the project containing the component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

