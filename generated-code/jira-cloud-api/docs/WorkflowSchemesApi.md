# WorkflowSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWorkflowScheme**](WorkflowSchemesApi.md#createworkflowscheme) | **POST** /rest/api/3/workflowscheme | Create workflow scheme |
| [**deleteDefaultWorkflow**](WorkflowSchemesApi.md#deletedefaultworkflow) | **DELETE** /rest/api/3/workflowscheme/{id}/default | Delete default workflow |
| [**deleteWorkflowMapping**](WorkflowSchemesApi.md#deleteworkflowmapping) | **DELETE** /rest/api/3/workflowscheme/{id}/workflow | Delete issue types for workflow in workflow scheme |
| [**deleteWorkflowScheme**](WorkflowSchemesApi.md#deleteworkflowscheme) | **DELETE** /rest/api/3/workflowscheme/{id} | Delete workflow scheme |
| [**deleteWorkflowSchemeIssueType**](WorkflowSchemesApi.md#deleteworkflowschemeissuetype) | **DELETE** /rest/api/3/workflowscheme/{id}/issuetype/{issueType} | Delete workflow for issue type in workflow scheme |
| [**getAllWorkflowSchemes**](WorkflowSchemesApi.md#getallworkflowschemes) | **GET** /rest/api/3/workflowscheme | Get all workflow schemes |
| [**getDefaultWorkflow**](WorkflowSchemesApi.md#getdefaultworkflow) | **GET** /rest/api/3/workflowscheme/{id}/default | Get default workflow |
| [**getProjectUsagesForWorkflowScheme**](WorkflowSchemesApi.md#getprojectusagesforworkflowscheme) | **GET** /rest/api/3/workflowscheme/{workflowSchemeId}/projectUsages | Get projects which are using a given workflow scheme |
| [**getRequiredWorkflowSchemeMappings**](WorkflowSchemesApi.md#getrequiredworkflowschememappings) | **POST** /rest/api/3/workflowscheme/update/mappings | Get required status mappings for workflow scheme update |
| [**getWorkflow**](WorkflowSchemesApi.md#getworkflow) | **GET** /rest/api/3/workflowscheme/{id}/workflow | Get issue types for workflows in workflow scheme |
| [**getWorkflowScheme**](WorkflowSchemesApi.md#getworkflowscheme) | **GET** /rest/api/3/workflowscheme/{id} | Get workflow scheme |
| [**getWorkflowSchemeIssueType**](WorkflowSchemesApi.md#getworkflowschemeissuetype) | **GET** /rest/api/3/workflowscheme/{id}/issuetype/{issueType} | Get workflow for issue type in workflow scheme |
| [**readWorkflowSchemes**](WorkflowSchemesApi.md#readworkflowschemes) | **POST** /rest/api/3/workflowscheme/read | Bulk get workflow schemes |
| [**setWorkflowSchemeIssueType**](WorkflowSchemesApi.md#setworkflowschemeissuetype) | **PUT** /rest/api/3/workflowscheme/{id}/issuetype/{issueType} | Set workflow for issue type in workflow scheme |
| [**switchWorkflowSchemeForProject**](WorkflowSchemesApi.md#switchworkflowschemeforproject) | **POST** /rest/api/3/workflowscheme/project/switch | Switch workflow scheme for project |
| [**updateDefaultWorkflow**](WorkflowSchemesApi.md#updatedefaultworkflow) | **PUT** /rest/api/3/workflowscheme/{id}/default | Update default workflow |
| [**updateSchemes**](WorkflowSchemesApi.md#updateschemes) | **POST** /rest/api/3/workflowscheme/update | Update workflow scheme |
| [**updateWorkflowMapping**](WorkflowSchemesApi.md#updateworkflowmapping) | **PUT** /rest/api/3/workflowscheme/{id}/workflow | Set issue types for workflow in workflow scheme |
| [**updateWorkflowScheme**](WorkflowSchemesApi.md#updateworkflowscheme) | **PUT** /rest/api/3/workflowscheme/{id} | Classic update workflow scheme |



## createWorkflowScheme

> WorkflowScheme createWorkflowScheme(workflowScheme)

Create workflow scheme

Creates a workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { CreateWorkflowSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // WorkflowScheme
    workflowScheme: {"defaultWorkflow":"jira","description":"The description of the example workflow scheme.","issueTypeMappings":{"10000":"scrum workflow","10001":"builds workflow"},"name":"Example workflow scheme"},
  } satisfies CreateWorkflowSchemeRequest;

  try {
    const data = await api.createWorkflowScheme(body);
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
| **workflowScheme** | [WorkflowScheme](WorkflowScheme.md) |  | |

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDefaultWorkflow

> WorkflowScheme deleteDefaultWorkflow(id, updateDraftIfNeeded)

Delete default workflow

Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira\&#39;s system workflow (the *jira* workflow).  Note that active workflow schemes cannot be edited. If the workflow scheme is active, set &#x60;updateDraftIfNeeded&#x60; to &#x60;true&#x60; and a draft workflow scheme is created or updated with the default workflow reset. The draft workflow scheme can be published in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { DeleteDefaultWorkflowRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`. (optional)
    updateDraftIfNeeded: true,
  } satisfies DeleteDefaultWorkflowRequest;

  try {
    const data = await api.deleteDefaultWorkflow(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **updateDraftIfNeeded** | `boolean` | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to &#x60;false&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the workflow scheme cannot be edited and &#x60;updateDraftIfNeeded&#x60; is not &#x60;true&#x60;. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWorkflowMapping

> deleteWorkflowMapping(id, workflowName, updateDraftIfNeeded)

Delete issue types for workflow in workflow scheme

Deletes the workflow-issue type mapping for a workflow in a workflow scheme.  Note that active workflow schemes cannot be edited. If the workflow scheme is active, set &#x60;updateDraftIfNeeded&#x60; to &#x60;true&#x60; and a draft workflow scheme is created or updated with the workflow-issue type mapping deleted. The draft workflow scheme can be published in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { DeleteWorkflowMappingRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // string | The name of the workflow.
    workflowName: workflowName_example,
    // boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`. (optional)
    updateDraftIfNeeded: true,
  } satisfies DeleteWorkflowMappingRequest;

  try {
    const data = await api.deleteWorkflowMapping(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of the workflow. | [Defaults to `undefined`] |
| **updateDraftIfNeeded** | `boolean` | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to &#x60;false&#x60;. | [Optional] [Defaults to `false`] |

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
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the workflow cannot be edited and &#x60;updateDraftIfNeeded&#x60; is not true. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow is not found.  *  The workflow is not specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWorkflowScheme

> any deleteWorkflowScheme(id)

Delete workflow scheme

Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { DeleteWorkflowSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
    id: 789,
  } satisfies DeleteWorkflowSchemeRequest;

  try {
    const data = await api.deleteWorkflowScheme(body);
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
| **id** | `number` | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as &#x60;schemeId&#x60;. For example, *schemeId&#x3D;10301*. | [Defaults to `undefined`] |

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
| **400** | Returned if the scheme is active. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWorkflowSchemeIssueType

> WorkflowScheme deleteWorkflowSchemeIssueType(id, issueType, updateDraftIfNeeded)

Delete workflow for issue type in workflow scheme

Deletes the issue type-workflow mapping for an issue type in a workflow scheme.  Note that active workflow schemes cannot be edited. If the workflow scheme is active, set &#x60;updateDraftIfNeeded&#x60; to &#x60;true&#x60; and a draft workflow scheme is created or updated with the issue type-workflow mapping deleted. The draft workflow scheme can be published in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { DeleteWorkflowSchemeIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // string | The ID of the issue type.
    issueType: issueType_example,
    // boolean | Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. (optional)
    updateDraftIfNeeded: true,
  } satisfies DeleteWorkflowSchemeIssueTypeRequest;

  try {
    const data = await api.deleteWorkflowSchemeIssueType(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **issueType** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **updateDraftIfNeeded** | `boolean` | Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to &#x60;false&#x60;. | [Optional] [Defaults to `false`] |

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the workflow cannot be edited and &#x60;updateDraftIfNeeded&#x60; is false. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow scheme or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllWorkflowSchemes

> PageBeanWorkflowScheme getAllWorkflowSchemes(startAt, maxResults)

Get all workflow schemes

Returns a [paginated](#pagination) list of all workflow schemes, not including draft workflow schemes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { GetAllWorkflowSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetAllWorkflowSchemesRequest;

  try {
    const data = await api.getAllWorkflowSchemes(body);
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

### Return type

[**PageBeanWorkflowScheme**](PageBeanWorkflowScheme.md)

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


## getDefaultWorkflow

> DefaultWorkflow getDefaultWorkflow(id, returnDraftIfExists)

Get default workflow

Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { GetDefaultWorkflowRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // boolean | Set to `true` to return the default workflow for the workflow scheme\'s draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned. (optional)
    returnDraftIfExists: true,
  } satisfies GetDefaultWorkflowRequest;

  try {
    const data = await api.getDefaultWorkflow(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **returnDraftIfExists** | `boolean` | Set to &#x60;true&#x60; to return the default workflow for the workflow scheme\&#39;s draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned. | [Optional] [Defaults to `false`] |

### Return type

[**DefaultWorkflow**](DefaultWorkflow.md)

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
| **404** | Returned if the workflow scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectUsagesForWorkflowScheme

> WorkflowSchemeProjectUsageDTO getProjectUsagesForWorkflowScheme(workflowSchemeId, nextPageToken, maxResults)

Get projects which are using a given workflow scheme

Returns a page of projects using a given workflow scheme.

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { GetProjectUsagesForWorkflowSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // string | The workflow scheme ID
    workflowSchemeId: workflowSchemeId_example,
    // string | The cursor for pagination (optional)
    nextPageToken: nextPageToken_example,
    // number | The maximum number of results to return. Must be an integer between 1 and 200. (optional)
    maxResults: 56,
  } satisfies GetProjectUsagesForWorkflowSchemeRequest;

  try {
    const data = await api.getProjectUsagesForWorkflowScheme(body);
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
| **workflowSchemeId** | `string` | The workflow scheme ID | [Defaults to `undefined`] |
| **nextPageToken** | `string` | The cursor for pagination | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of results to return. Must be an integer between 1 and 200. | [Optional] [Defaults to `50`] |

### Return type

[**WorkflowSchemeProjectUsageDTO**](WorkflowSchemeProjectUsageDTO.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |
| **404** | Returned if the workflow scheme with the given ID does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequiredWorkflowSchemeMappings

> WorkflowSchemeUpdateRequiredMappingsResponse getRequiredWorkflowSchemeMappings(workflowSchemeUpdateRequiredMappingsRequest)

Get required status mappings for workflow scheme update

Gets the required status mappings for the desired changes to a workflow scheme. The results are provided per issue type and workflow. When updating a workflow scheme, status mappings can be provided per issue type, per workflow, or both.  **[Permissions](#permissions) required:**   *  *Administer Jira* permission to update all, including global-scoped, workflow schemes.  *  *Administer projects* project permission to update project-scoped workflow schemes.

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { GetRequiredWorkflowSchemeMappingsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // WorkflowSchemeUpdateRequiredMappingsRequest
    workflowSchemeUpdateRequiredMappingsRequest: {"defaultWorkflowId":"10010","id":"10001","workflowsForIssueTypes":[{"issueTypeIds":["10010","10011"],"workflowId":"10001"}]},
  } satisfies GetRequiredWorkflowSchemeMappingsRequest;

  try {
    const data = await api.getRequiredWorkflowSchemeMappings(body);
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
| **workflowSchemeUpdateRequiredMappingsRequest** | [WorkflowSchemeUpdateRequiredMappingsRequest](WorkflowSchemeUpdateRequiredMappingsRequest.md) |  | |

### Return type

[**WorkflowSchemeUpdateRequiredMappingsResponse**](WorkflowSchemeUpdateRequiredMappingsResponse.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflow

> IssueTypesWorkflowMapping getWorkflow(id, workflowName, returnDraftIfExists)

Get issue types for workflows in workflow scheme

Returns the workflow-issue type mappings for a workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { GetWorkflowRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // string | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. (optional)
    workflowName: workflowName_example,
    // boolean | Returns the mapping from the workflow scheme\'s draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. (optional)
    returnDraftIfExists: true,
  } satisfies GetWorkflowRequest;

  try {
    const data = await api.getWorkflow(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. | [Optional] [Defaults to `undefined`] |
| **returnDraftIfExists** | `boolean` | Returns the mapping from the workflow scheme\&#39;s draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. | [Optional] [Defaults to `false`] |

### Return type

[**IssueTypesWorkflowMapping**](IssueTypesWorkflowMapping.md)

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
| **404** | Returned if either the workflow scheme or workflow is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowScheme

> WorkflowScheme getWorkflowScheme(id, returnDraftIfExists)

Get workflow scheme

Returns a workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { GetWorkflowSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
    id: 789,
    // boolean | Returns the workflow scheme\'s draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned. (optional)
    returnDraftIfExists: true,
  } satisfies GetWorkflowSchemeRequest;

  try {
    const data = await api.getWorkflowScheme(body);
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
| **id** | `number` | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as &#x60;schemeId&#x60;. For example, *schemeId&#x3D;10301*. | [Defaults to `undefined`] |
| **returnDraftIfExists** | `boolean` | Returns the workflow scheme\&#39;s draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned. | [Optional] [Defaults to `false`] |

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
| **404** | Returned if the workflow scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowSchemeIssueType

> IssueTypeWorkflowMapping getWorkflowSchemeIssueType(id, issueType, returnDraftIfExists)

Get workflow for issue type in workflow scheme

Returns the issue type-workflow mapping for an issue type in a workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { GetWorkflowSchemeIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // string | The ID of the issue type.
    issueType: issueType_example,
    // boolean | Returns the mapping from the workflow scheme\'s draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. (optional)
    returnDraftIfExists: true,
  } satisfies GetWorkflowSchemeIssueTypeRequest;

  try {
    const data = await api.getWorkflowSchemeIssueType(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **issueType** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **returnDraftIfExists** | `boolean` | Returns the mapping from the workflow scheme\&#39;s draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. | [Optional] [Defaults to `false`] |

### Return type

[**IssueTypeWorkflowMapping**](IssueTypeWorkflowMapping.md)

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
| **404** | Returned if the workflow scheme or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## readWorkflowSchemes

> Array&lt;WorkflowSchemeReadResponse&gt; readWorkflowSchemes(workflowSchemeReadRequest)

Bulk get workflow schemes

Returns a list of workflow schemes by providing workflow scheme IDs or project IDs.  **[Permissions](#permissions) required:**   *  *Administer Jira* global permission to access all, including project-scoped, workflow schemes  *  *Administer projects* project permissions to access project-scoped workflow schemes

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { ReadWorkflowSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // WorkflowSchemeReadRequest
    workflowSchemeReadRequest: {"projectIds":["10047","10048"],"workflowSchemeIds":["3e59db0f-ed6c-47ce-8d50-80c0c4572677"]},
  } satisfies ReadWorkflowSchemesRequest;

  try {
    const data = await api.readWorkflowSchemes(body);
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
| **workflowSchemeReadRequest** | [WorkflowSchemeReadRequest](WorkflowSchemeReadRequest.md) |  | |

### Return type

[**Array&lt;WorkflowSchemeReadResponse&gt;**](WorkflowSchemeReadResponse.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setWorkflowSchemeIssueType

> WorkflowScheme setWorkflowSchemeIssueType(id, issueType, issueTypeWorkflowMapping)

Set workflow for issue type in workflow scheme

Sets the workflow for an issue type in a workflow scheme.  Note that active workflow schemes cannot be edited. If the workflow scheme is active, set &#x60;updateDraftIfNeeded&#x60; to &#x60;true&#x60; in the request body and a draft workflow scheme is created or updated with the new issue type-workflow mapping. The draft workflow scheme can be published in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { SetWorkflowSchemeIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // string | The ID of the issue type.
    issueType: issueType_example,
    // IssueTypeWorkflowMapping | The issue type-project mapping.
    issueTypeWorkflowMapping: {"issueType":"10000","updateDraftIfNeeded":false,"workflow":"jira"},
  } satisfies SetWorkflowSchemeIssueTypeRequest;

  try {
    const data = await api.setWorkflowSchemeIssueType(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **issueType** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **issueTypeWorkflowMapping** | [IssueTypeWorkflowMapping](IssueTypeWorkflowMapping.md) | The issue type-project mapping. | |

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the workflow cannot be edited and &#x60;updateDraftIfNeeded&#x60; is false. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow scheme or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## switchWorkflowSchemeForProject

> switchWorkflowSchemeForProject(workflowSchemeProjectSwitchBean)

Switch workflow scheme for project

Switches a workflow scheme for a project.  Workflow schemes can only be assigned to classic projects.  **Calculating required mappings:** If statuses from the current workflow scheme won\&#39;t exist in the target workflow scheme, you must provide &#x60;mappingsByIssueTypeOverride&#x60; to specify how issues with those statuses should be migrated. Use [the required workflow scheme mappings API](#api-rest-api-3-workflowscheme-update-mappings-post) to determine which statuses and issue types require mappings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { SwitchWorkflowSchemeForProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // WorkflowSchemeProjectSwitchBean | The request containing project ID, target scheme ID, and any issue type mappings.
    workflowSchemeProjectSwitchBean: {"mappingsByIssueTypeOverride":[{"issueTypeId":"10000","statusMappings":[{"newStatusId":"10003","oldStatusId":"3"},{"newStatusId":"10009","oldStatusId":"10"}]},{"issueTypeId":"10011","statusMappings":[{"newStatusId":"10003","oldStatusId":"3"},{"newStatusId":"10002","oldStatusId":"10003"}]}],"projectId":"10001","targetSchemeId":"10002"},
  } satisfies SwitchWorkflowSchemeForProjectRequest;

  try {
    const data = await api.switchWorkflowSchemeForProject(body);
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
| **workflowSchemeProjectSwitchBean** | [WorkflowSchemeProjectSwitchBean](WorkflowSchemeProjectSwitchBean.md) | The request containing project ID, target scheme ID, and any issue type mappings. | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the request is successful and the task has been started. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |
| **409** | Returned if a conflicting task is already running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDefaultWorkflow

> WorkflowScheme updateDefaultWorkflow(id, defaultWorkflow)

Update default workflow

Sets the default workflow for a workflow scheme.  Note that active workflow schemes cannot be edited. If the workflow scheme is active, set &#x60;updateDraftIfNeeded&#x60; to &#x60;true&#x60; in the request object and a draft workflow scheme is created or updated with the new default workflow. The draft workflow scheme can be published in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { UpdateDefaultWorkflowRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // DefaultWorkflow | The new default workflow.
    defaultWorkflow: {"updateDraftIfNeeded":false,"workflow":"jira"},
  } satisfies UpdateDefaultWorkflowRequest;

  try {
    const data = await api.updateDefaultWorkflow(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **defaultWorkflow** | [DefaultWorkflow](DefaultWorkflow.md) | The new default workflow. | |

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the workflow scheme cannot be edited and &#x60;updateDraftIfNeeded&#x60; is not &#x60;true&#x60;. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSchemes

> any updateSchemes(workflowSchemeUpdateRequest)

Update workflow scheme

Updates company-managed and team-managed project workflow schemes. This API doesn\&#39;t have a concept of draft, so any changes made to a workflow scheme are immediately available. When changing the available statuses for issue types, an [asynchronous task](#async) migrates the issues as defined in the provided mappings.  **[Permissions](#permissions) required:**   *  *Administer Jira* project permission to update all, including global-scoped, workflow schemes.  *  *Administer projects* project permission to update project-scoped workflow schemes.

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { UpdateSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // WorkflowSchemeUpdateRequest
    workflowSchemeUpdateRequest: {"defaultWorkflowId":"3e59db0f-ed6c-47ce-8d50-80c0c4572677","description":"description","id":"10000","name":"name","statusMappingsByIssueTypeOverride":[{"issueTypeId":"10001","statusMappings":[{"newStatusId":"2","oldStatusId":"1"},{"newStatusId":"4","oldStatusId":"3"}]},{"issueTypeId":"10002","statusMappings":[{"newStatusId":"4","oldStatusId":"1"},{"newStatusId":"2","oldStatusId":"3"}]}],"statusMappingsByWorkflows":[{"newWorkflowId":"3e59db0f-ed6c-47ce-8d50-80c0c4572677","oldWorkflowId":"3e59db0f-ed6c-47ce-8d50-80c0c4572677","statusMappings":[{"newStatusId":"2","oldStatusId":"1"},{"newStatusId":"4","oldStatusId":"3"}]}],"version":{"id":"527213fc-bc72-400f-aae0-df8d88db2c8a","versionNumber":1},"workflowsForIssueTypes":[{"issueTypeIds":["10000","10003"],"workflowId":"3e59db0f-ed6c-47ce-8d50-80c0c4572677"},{"issueTypeIds":["10001`","10002"],"workflowId":"3f83dg2a-ns2n-56ab-9812-42h5j1461629"}]},
  } satisfies UpdateSchemesRequest;

  try {
    const data = await api.updateSchemes(body);
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
| **workflowSchemeUpdateRequest** | [WorkflowSchemeUpdateRequest](WorkflowSchemeUpdateRequest.md) |  | |

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
| **200** | Returned if the request is successful and there is no asynchronous task. |  -  |
| **303** | Returned if the request is successful and there is an asynchronous task for the migrations. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing, or the caller doesn\&#39;t have permissions to perform the operation. |  -  |
| **409** | Returned if another workflow configuration update task is ongoing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWorkflowMapping

> WorkflowScheme updateWorkflowMapping(id, workflowName, issueTypesWorkflowMapping)

Set issue types for workflow in workflow scheme

Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.  Note that active workflow schemes cannot be edited. If the workflow scheme is active, set &#x60;updateDraftIfNeeded&#x60; to &#x60;true&#x60; in the request body and a draft workflow scheme is created or updated with the new workflow-issue types mappings. The draft workflow scheme can be published in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { UpdateWorkflowMappingRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme.
    id: 789,
    // string | The name of the workflow.
    workflowName: workflowName_example,
    // IssueTypesWorkflowMapping
    issueTypesWorkflowMapping: {"issueTypes":["10000"],"updateDraftIfNeeded":true,"workflow":"jira"},
  } satisfies UpdateWorkflowMappingRequest;

  try {
    const data = await api.updateWorkflowMapping(body);
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
| **id** | `number` | The ID of the workflow scheme. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of the workflow. | [Defaults to `undefined`] |
| **issueTypesWorkflowMapping** | [IssueTypesWorkflowMapping](IssueTypesWorkflowMapping.md) |  | |

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
| **404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow is not found.  *  The workflow is not specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWorkflowScheme

> WorkflowScheme updateWorkflowScheme(id, workflowScheme)

Classic update workflow scheme

Updates a company-manged project workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that &#x60;updateDraftIfNeeded&#x60; is set to &#x60;true&#x60;.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemesApi,
} from 'jira-cloud-api';
import type { UpdateWorkflowSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemesApi(config);

  const body = {
    // number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
    id: 789,
    // WorkflowScheme
    workflowScheme: {"defaultWorkflow":"jira","description":"The description of the example workflow scheme.","issueTypeMappings":{"10000":"scrum workflow"},"name":"Example workflow scheme","updateDraftIfNeeded":false},
  } satisfies UpdateWorkflowSchemeRequest;

  try {
    const data = await api.updateWorkflowScheme(body);
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
| **id** | `number` | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as &#x60;schemeId&#x60;. For example, *schemeId&#x3D;10301*. | [Defaults to `undefined`] |
| **workflowScheme** | [WorkflowScheme](WorkflowScheme.md) |  | |

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

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
| **404** | Returned if the workflow scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

