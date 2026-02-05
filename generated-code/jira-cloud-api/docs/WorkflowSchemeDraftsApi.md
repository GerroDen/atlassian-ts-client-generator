# WorkflowSchemeDraftsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWorkflowSchemeDraftFromParent**](WorkflowSchemeDraftsApi.md#createworkflowschemedraftfromparent) | **POST** /rest/api/3/workflowscheme/{id}/createdraft | Create draft workflow scheme |
| [**deleteDraftDefaultWorkflow**](WorkflowSchemeDraftsApi.md#deletedraftdefaultworkflow) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/default | Delete draft default workflow |
| [**deleteDraftWorkflowMapping**](WorkflowSchemeDraftsApi.md#deletedraftworkflowmapping) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/workflow | Delete issue types for workflow in draft workflow scheme |
| [**deleteWorkflowSchemeDraft**](WorkflowSchemeDraftsApi.md#deleteworkflowschemedraft) | **DELETE** /rest/api/3/workflowscheme/{id}/draft | Delete draft workflow scheme |
| [**deleteWorkflowSchemeDraftIssueType**](WorkflowSchemeDraftsApi.md#deleteworkflowschemedraftissuetype) | **DELETE** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Delete workflow for issue type in draft workflow scheme |
| [**getDraftDefaultWorkflow**](WorkflowSchemeDraftsApi.md#getdraftdefaultworkflow) | **GET** /rest/api/3/workflowscheme/{id}/draft/default | Get draft default workflow |
| [**getDraftWorkflow**](WorkflowSchemeDraftsApi.md#getdraftworkflow) | **GET** /rest/api/3/workflowscheme/{id}/draft/workflow | Get issue types for workflows in draft workflow scheme |
| [**getWorkflowSchemeDraft**](WorkflowSchemeDraftsApi.md#getworkflowschemedraft) | **GET** /rest/api/3/workflowscheme/{id}/draft | Get draft workflow scheme |
| [**getWorkflowSchemeDraftIssueType**](WorkflowSchemeDraftsApi.md#getworkflowschemedraftissuetype) | **GET** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Get workflow for issue type in draft workflow scheme |
| [**publishDraftWorkflowScheme**](WorkflowSchemeDraftsApi.md#publishdraftworkflowscheme) | **POST** /rest/api/3/workflowscheme/{id}/draft/publish | Publish draft workflow scheme |
| [**setWorkflowSchemeDraftIssueType**](WorkflowSchemeDraftsApi.md#setworkflowschemedraftissuetype) | **PUT** /rest/api/3/workflowscheme/{id}/draft/issuetype/{issueType} | Set workflow for issue type in draft workflow scheme |
| [**updateDraftDefaultWorkflow**](WorkflowSchemeDraftsApi.md#updatedraftdefaultworkflow) | **PUT** /rest/api/3/workflowscheme/{id}/draft/default | Update draft default workflow |
| [**updateDraftWorkflowMapping**](WorkflowSchemeDraftsApi.md#updatedraftworkflowmapping) | **PUT** /rest/api/3/workflowscheme/{id}/draft/workflow | Set issue types for workflow in workflow scheme |
| [**updateWorkflowSchemeDraft**](WorkflowSchemeDraftsApi.md#updateworkflowschemedraft) | **PUT** /rest/api/3/workflowscheme/{id}/draft | Update draft workflow scheme |



## createWorkflowSchemeDraftFromParent

> WorkflowScheme createWorkflowSchemeDraftFromParent(id)

Create draft workflow scheme

Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { CreateWorkflowSchemeDraftFromParentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the active workflow scheme that the draft is created from.
    id: 789,
  } satisfies CreateWorkflowSchemeDraftFromParentRequest;

  try {
    const data = await api.createWorkflowSchemeDraftFromParent(body);
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
| **id** | `number` | The ID of the active workflow scheme that the draft is created from. | [Defaults to `undefined`] |

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
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDraftDefaultWorkflow

> WorkflowScheme deleteDraftDefaultWorkflow(id)

Delete draft default workflow

Resets the default workflow for a workflow scheme\&#39;s draft. That is, the default workflow is set to Jira\&#39;s system workflow (the *jira* workflow).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { DeleteDraftDefaultWorkflowRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
  } satisfies DeleteDraftDefaultWorkflowRequest;

  try {
    const data = await api.deleteDraftDefaultWorkflow(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |

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
| **404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDraftWorkflowMapping

> deleteDraftWorkflowMapping(id, workflowName)

Delete issue types for workflow in draft workflow scheme

Deletes the workflow-issue type mapping for a workflow in a workflow scheme\&#39;s draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { DeleteDraftWorkflowMappingRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
    // string | The name of the workflow.
    workflowName: workflowName_example,
  } satisfies DeleteDraftWorkflowMappingRequest;

  try {
    const data = await api.deleteDraftWorkflowMapping(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of the workflow. | [Defaults to `undefined`] |

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft.  *  The workflow is not found.  *  The workflow is not specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWorkflowSchemeDraft

> deleteWorkflowSchemeDraft(id)

Delete draft workflow scheme

Deletes a draft workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { DeleteWorkflowSchemeDraftRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the active workflow scheme that the draft was created from.
    id: 789,
  } satisfies DeleteWorkflowSchemeDraftRequest;

  try {
    const data = await api.deleteWorkflowSchemeDraft(body);
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
| **id** | `number` | The ID of the active workflow scheme that the draft was created from. | [Defaults to `undefined`] |

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
| **403** | Returned if the user does not have the necessary permission.. |  -  |
| **404** | Returned if:   *  the original active workflow scheme is not found.  *  the original active workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWorkflowSchemeDraftIssueType

> WorkflowScheme deleteWorkflowSchemeDraftIssueType(id, issueType)

Delete workflow for issue type in draft workflow scheme

Deletes the issue type-workflow mapping for an issue type in a workflow scheme\&#39;s draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { DeleteWorkflowSchemeDraftIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
    // string | The ID of the issue type.
    issueType: issueType_example,
  } satisfies DeleteWorkflowSchemeDraftIssueTypeRequest;

  try {
    const data = await api.deleteWorkflowSchemeDraftIssueType(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |
| **issueType** | `string` | The ID of the issue type. | [Defaults to `undefined`] |

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
| **404** | Returned if the workflow scheme or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDraftDefaultWorkflow

> DefaultWorkflow getDraftDefaultWorkflow(id)

Get draft default workflow

Returns the default workflow for a workflow scheme\&#39;s draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { GetDraftDefaultWorkflowRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
  } satisfies GetDraftDefaultWorkflowRequest;

  try {
    const data = await api.getDraftDefaultWorkflow(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |

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
| **403** | Returned if the user does not have the necessary permission.. |  -  |
| **404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDraftWorkflow

> IssueTypesWorkflowMapping getDraftWorkflow(id, workflowName)

Get issue types for workflows in draft workflow scheme

Returns the workflow-issue type mappings for a workflow scheme\&#39;s draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { GetDraftWorkflowRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
    // string | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. (optional)
    workflowName: workflowName_example,
  } satisfies GetDraftWorkflowRequest;

  try {
    const data = await api.getDraftWorkflow(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. | [Optional] [Defaults to `undefined`] |

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
| **404** | Returned if either the workflow scheme or workflow (if specified) is not found. session. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowSchemeDraft

> WorkflowScheme getWorkflowSchemeDraft(id)

Get draft workflow scheme

Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See [Configuring workflow schemes](https://confluence.atlassian.com/x/tohKLg) for more information.   Note that:   *  Only active workflow schemes can have draft workflow schemes.  *  An active workflow scheme can only have one draft workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { GetWorkflowSchemeDraftRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the active workflow scheme that the draft was created from.
    id: 789,
  } satisfies GetWorkflowSchemeDraftRequest;

  try {
    const data = await api.getWorkflowSchemeDraft(body);
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
| **id** | `number` | The ID of the active workflow scheme that the draft was created from. | [Defaults to `undefined`] |

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
| **404** | Returned if:   *  the original active workflow scheme is not found.  *  the original active workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowSchemeDraftIssueType

> IssueTypeWorkflowMapping getWorkflowSchemeDraftIssueType(id, issueType)

Get workflow for issue type in draft workflow scheme

Returns the issue type-workflow mapping for an issue type in a workflow scheme\&#39;s draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { GetWorkflowSchemeDraftIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
    // string | The ID of the issue type.
    issueType: issueType_example,
  } satisfies GetWorkflowSchemeDraftIssueTypeRequest;

  try {
    const data = await api.getWorkflowSchemeDraftIssueType(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |
| **issueType** | `string` | The ID of the issue type. | [Defaults to `undefined`] |

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


## publishDraftWorkflowScheme

> publishDraftWorkflowScheme(id, publishDraftWorkflowScheme, validateOnly)

Publish draft workflow scheme

Publishes a draft workflow scheme.  Where the draft workflow includes new workflow statuses for an issue type, mappings are provided to update issues with the original workflow status to the new workflow status.  This operation is [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { PublishDraftWorkflowSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
    // PublishDraftWorkflowScheme | Details of the status mappings.
    publishDraftWorkflowScheme: {"statusMappings":[{"issueTypeId":"10001","newStatusId":"1","statusId":"3"},{"issueTypeId":"10001","newStatusId":"2","statusId":"2"},{"issueTypeId":"10002","newStatusId":"10003","statusId":"10005"},{"issueTypeId":"10003","newStatusId":"1","statusId":"4"}]},
    // boolean | Whether the request only performs a validation. (optional)
    validateOnly: true,
  } satisfies PublishDraftWorkflowSchemeRequest;

  try {
    const data = await api.publishDraftWorkflowScheme(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |
| **publishDraftWorkflowScheme** | [PublishDraftWorkflowScheme](PublishDraftWorkflowScheme.md) | Details of the status mappings. | |
| **validateOnly** | `boolean` | Whether the request only performs a validation. | [Optional] [Defaults to `false`] |

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
| **204** | Returned if the request is only for validation and is successful. |  -  |
| **303** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if any of these are true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft.  *  A new status in the draft workflow scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setWorkflowSchemeDraftIssueType

> WorkflowScheme setWorkflowSchemeDraftIssueType(id, issueType, issueTypeWorkflowMapping)

Set workflow for issue type in draft workflow scheme

Sets the workflow for an issue type in a workflow scheme\&#39;s draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { SetWorkflowSchemeDraftIssueTypeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
    // string | The ID of the issue type.
    issueType: issueType_example,
    // IssueTypeWorkflowMapping | The issue type-project mapping.
    issueTypeWorkflowMapping: {"issueType":"10000","updateDraftIfNeeded":false,"workflow":"jira"},
  } satisfies SetWorkflowSchemeDraftIssueTypeRequest;

  try {
    const data = await api.setWorkflowSchemeDraftIssueType(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |
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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow scheme or issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDraftDefaultWorkflow

> WorkflowScheme updateDraftDefaultWorkflow(id, defaultWorkflow)

Update draft default workflow

Sets the default workflow for a workflow scheme\&#39;s draft.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { UpdateDraftDefaultWorkflowRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
    // DefaultWorkflow | The object for the new default workflow.
    defaultWorkflow: {"updateDraftIfNeeded":false,"workflow":"jira"},
  } satisfies UpdateDraftDefaultWorkflowRequest;

  try {
    const data = await api.updateDraftDefaultWorkflow(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |
| **defaultWorkflow** | [DefaultWorkflow](DefaultWorkflow.md) | The object for the new default workflow. | |

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
| **404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDraftWorkflowMapping

> WorkflowScheme updateDraftWorkflowMapping(id, workflowName, issueTypesWorkflowMapping)

Set issue types for workflow in workflow scheme

Sets the issue types for a workflow in a workflow scheme\&#39;s draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { UpdateDraftWorkflowMappingRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the workflow scheme that the draft belongs to.
    id: 789,
    // string | The name of the workflow.
    workflowName: workflowName_example,
    // IssueTypesWorkflowMapping
    issueTypesWorkflowMapping: {"issueTypes":["10000"],"updateDraftIfNeeded":true,"workflow":"jira"},
  } satisfies UpdateDraftWorkflowMappingRequest;

  try {
    const data = await api.updateDraftWorkflowMapping(body);
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
| **id** | `number` | The ID of the workflow scheme that the draft belongs to. | [Defaults to `undefined`] |
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
| **404** | Returned if any of the following is true:   *  The workflow scheme is not found.  *  The workflow scheme does not have a draft.  *  The workflow is not found.  *  The workflow is not specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWorkflowSchemeDraft

> WorkflowScheme updateWorkflowSchemeDraft(id, workflowScheme)

Update draft workflow scheme

Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeDraftsApi,
} from 'jira-cloud-api';
import type { UpdateWorkflowSchemeDraftRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeDraftsApi(config);

  const body = {
    // number | The ID of the active workflow scheme that the draft was created from.
    id: 789,
    // WorkflowScheme
    workflowScheme: {"defaultWorkflow":"jira","description":"The description of the example workflow scheme.","issueTypeMappings":{"10000":"scrum workflow"},"name":"Example workflow scheme","updateDraftIfNeeded":false},
  } satisfies UpdateWorkflowSchemeDraftRequest;

  try {
    const data = await api.updateWorkflowSchemeDraft(body);
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
| **id** | `number` | The ID of the active workflow scheme that the draft was created from. | [Defaults to `undefined`] |
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
| **404** | Returned if:   *  the original active workflow scheme is not found.  *  the original active workflow scheme does not have a draft. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

