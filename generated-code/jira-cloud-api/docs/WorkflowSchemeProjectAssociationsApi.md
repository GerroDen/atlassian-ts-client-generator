# WorkflowSchemeProjectAssociationsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assignSchemeToProject**](WorkflowSchemeProjectAssociationsApi.md#assignschemetoproject) | **PUT** /rest/api/3/workflowscheme/project | Assign workflow scheme to project |
| [**getWorkflowSchemeProjectAssociations**](WorkflowSchemeProjectAssociationsApi.md#getworkflowschemeprojectassociations) | **GET** /rest/api/3/workflowscheme/project | Get workflow scheme project associations |



## assignSchemeToProject

> any assignSchemeToProject(workflowSchemeProjectAssociation)

Assign workflow scheme to project

Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project.  Workflow schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeProjectAssociationsApi,
} from 'jira-cloud-api';
import type { AssignSchemeToProjectRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeProjectAssociationsApi(config);

  const body = {
    // WorkflowSchemeProjectAssociation
    workflowSchemeProjectAssociation: {"projectId":"10001","workflowSchemeId":"10032"},
  } satisfies AssignSchemeToProjectRequest;

  try {
    const data = await api.assignSchemeToProject(body);
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
| **workflowSchemeProjectAssociation** | [WorkflowSchemeProjectAssociation](WorkflowSchemeProjectAssociation.md) |  | |

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
| **404** | Returned if the workflow scheme or the project are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowSchemeProjectAssociations

> ContainerOfWorkflowSchemeAssociations getWorkflowSchemeProjectAssociations(projectId)

Get workflow scheme project associations

Returns a list of the workflow schemes associated with a list of projects. Each returned workflow scheme includes a list of the requested projects associated with it. Any team-managed or non-existent projects in the request are ignored and no errors are returned.  If the project is associated with the &#x60;Default Workflow Scheme&#x60; no ID is returned. This is because the way the &#x60;Default Workflow Scheme&#x60; is stored means it has no ID.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowSchemeProjectAssociationsApi,
} from 'jira-cloud-api';
import type { GetWorkflowSchemeProjectAssociationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowSchemeProjectAssociationsApi(config);

  const body = {
    // Set<number> | The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`.
    projectId: ...,
  } satisfies GetWorkflowSchemeProjectAssociationsRequest;

  try {
    const data = await api.getWorkflowSchemeProjectAssociations(body);
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
| **projectId** | `Set<number>` | The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | |

### Return type

[**ContainerOfWorkflowSchemeAssociations**](ContainerOfWorkflowSchemeAssociations.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

