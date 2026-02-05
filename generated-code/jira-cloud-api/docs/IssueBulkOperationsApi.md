# IssueBulkOperationsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAvailableTransitions**](IssueBulkOperationsApi.md#getavailabletransitions) | **GET** /rest/api/3/bulk/issues/transition | Get available transitions |
| [**getBulkEditableFields**](IssueBulkOperationsApi.md#getbulkeditablefields) | **GET** /rest/api/3/bulk/issues/fields | Get bulk editable fields |
| [**getBulkOperationProgress**](IssueBulkOperationsApi.md#getbulkoperationprogress) | **GET** /rest/api/3/bulk/queue/{taskId} | Get bulk issue operation progress |
| [**submitBulkDelete**](IssueBulkOperationsApi.md#submitbulkdelete) | **POST** /rest/api/3/bulk/issues/delete | Bulk delete issues |
| [**submitBulkEdit**](IssueBulkOperationsApi.md#submitbulkedit) | **POST** /rest/api/3/bulk/issues/fields | Bulk edit issues |
| [**submitBulkMove**](IssueBulkOperationsApi.md#submitbulkmove) | **POST** /rest/api/3/bulk/issues/move | Bulk move issues |
| [**submitBulkTransition**](IssueBulkOperationsApi.md#submitbulktransition) | **POST** /rest/api/3/bulk/issues/transition | Bulk transition issue statuses |
| [**submitBulkUnwatch**](IssueBulkOperationsApi.md#submitbulkunwatch) | **POST** /rest/api/3/bulk/issues/unwatch | Bulk unwatch issues |
| [**submitBulkWatch**](IssueBulkOperationsApi.md#submitbulkwatch) | **POST** /rest/api/3/bulk/issues/watch | Bulk watch issues |



## getAvailableTransitions

> BulkTransitionGetAvailableTransitions getAvailableTransitions(issueIdsOrKeys, endingBefore, startingAfter)

Get available transitions

Use this API to retrieve a list of transitions available for the specified issues that can be used or bulk transition operations. You can submit either single or multiple issues in the query to obtain the available transitions.  The response will provide the available transitions for issues, organized by their respective workflows. **Only the transitions that are common among the issues within that workflow and do not involve any additional field updates will be included.** For bulk transitions that require additional field updates, please utilise the Jira Cloud UI.  You can request available transitions for up to 1,000 issues in a single operation. This API uses pagination to return responses, delivering 50 workflows at a time.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  *  Transition [issues permission](https://support.atlassian.com/jira-cloud-administration/docs/permissions-for-company-managed-projects/#Transition-issues/) in all projects that contain the selected issues.  *  Browse [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in all projects that contain the selected issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { GetAvailableTransitionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // string | Comma (,) separated Ids or keys of the issues to get transitions available for them.
    issueIdsOrKeys: issueIdsOrKeys_example,
    // string | (Optional)The end cursor for use in pagination. (optional)
    endingBefore: endingBefore_example,
    // string | (Optional)The start cursor for use in pagination. (optional)
    startingAfter: startingAfter_example,
  } satisfies GetAvailableTransitionsRequest;

  try {
    const data = await api.getAvailableTransitions(body);
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
| **issueIdsOrKeys** | `string` | Comma (,) separated Ids or keys of the issues to get transitions available for them. | [Defaults to `undefined`] |
| **endingBefore** | `string` | (Optional)The end cursor for use in pagination. | [Optional] [Defaults to `undefined`] |
| **startingAfter** | `string` | (Optional)The start cursor for use in pagination. | [Optional] [Defaults to `undefined`] |

### Return type

[**BulkTransitionGetAvailableTransitions**](BulkTransitionGetAvailableTransitions.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. For example, if a provided issue ID or key is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkEditableFields

> BulkEditGetFields getBulkEditableFields(issueIdsOrKeys, searchText, endingBefore, startingAfter)

Get bulk editable fields

Use this API to get a list of fields visible to the user to perform bulk edit operations. You can pass single or multiple issues in the query to get eligible editable fields. This API uses pagination to return responses, delivering 50 fields at a time.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  *  Browse [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in all projects that contain the selected issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  Depending on the field, any field-specific permissions required to edit it.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { GetBulkEditableFieldsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // string | The IDs or keys of the issues to get editable fields from.
    issueIdsOrKeys: issueIdsOrKeys_example,
    // string | (Optional)The text to search for in the editable fields. (optional)
    searchText: searchText_example,
    // string | (Optional)The end cursor for use in pagination. (optional)
    endingBefore: endingBefore_example,
    // string | (Optional)The start cursor for use in pagination. (optional)
    startingAfter: startingAfter_example,
  } satisfies GetBulkEditableFieldsRequest;

  try {
    const data = await api.getBulkEditableFields(body);
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
| **issueIdsOrKeys** | `string` | The IDs or keys of the issues to get editable fields from. | [Defaults to `undefined`] |
| **searchText** | `string` | (Optional)The text to search for in the editable fields. | [Optional] [Defaults to `undefined`] |
| **endingBefore** | `string` | (Optional)The end cursor for use in pagination. | [Optional] [Defaults to `undefined`] |
| **startingAfter** | `string` | (Optional)The start cursor for use in pagination. | [Optional] [Defaults to `undefined`] |

### Return type

[**BulkEditGetFields**](BulkEditGetFields.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if no editable fields are found for the provided issue IDs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkOperationProgress

> BulkOperationProgress getBulkOperationProgress(taskId)

Get bulk issue operation progress

Use this to get the progress state for the specified bulk operation &#x60;taskId&#x60;.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  If the task is running, this resource will return:      {\&quot;taskId\&quot;:\&quot;10779\&quot;,\&quot;status\&quot;:\&quot;RUNNING\&quot;,\&quot;progressPercent\&quot;:65,\&quot;submittedBy\&quot;:{\&quot;accountId\&quot;:\&quot;5b10a2844c20165700ede21g\&quot;},\&quot;created\&quot;:1690180055963,\&quot;started\&quot;:1690180056206,\&quot;updated\&quot;:169018005829}  If the task has completed, then this resource will return:      {\&quot;processedAccessibleIssues\&quot;:[10001,10002],\&quot;created\&quot;:1709189449954,\&quot;progressPercent\&quot;:100,\&quot;started\&quot;:1709189450154,\&quot;status\&quot;:\&quot;COMPLETE\&quot;,\&quot;submittedBy\&quot;:{\&quot;accountId\&quot;:\&quot;5b10a2844c20165700ede21g\&quot;},\&quot;invalidOrInaccessibleIssueCount\&quot;:0,\&quot;taskId\&quot;:\&quot;10000\&quot;,\&quot;totalIssueCount\&quot;:2,\&quot;updated\&quot;:1709189450354}  **Note:** You can view task progress for up to 14 days from creation.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { GetBulkOperationProgressRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // string | The ID of the task.
    taskId: taskId_example,
  } satisfies GetBulkOperationProgressRequest;

  try {
    const data = await api.getBulkOperationProgress(body);
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
| **taskId** | `string` | The ID of the task. | [Defaults to `undefined`] |

### Return type

[**BulkOperationProgress**](BulkOperationProgress.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitBulkDelete

> SubmittedBulkOperation submitBulkDelete(issueBulkDeletePayload)

Bulk delete issues

Use this API to submit a bulk delete request. You can delete up to 1,000 issues in a single operation.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  *  Delete [issues permission](https://support.atlassian.com/jira-cloud-administration/docs/permissions-for-company-managed-projects/#Delete-issues/) in all projects that contain the selected issues.  *  Browse [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in all projects that contain the selected issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { SubmitBulkDeleteRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // IssueBulkDeletePayload | The request body containing the issues to be deleted.
    issueBulkDeletePayload: {"selectedIssueIdsOrKeys":["10001","10002"],"sendBulkNotification":false},
  } satisfies SubmitBulkDeleteRequest;

  try {
    const data = await api.submitBulkDelete(body);
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
| **issueBulkDeletePayload** | [IssueBulkDeletePayload](IssueBulkDeletePayload.md) | The request body containing the issues to be deleted. | |

### Return type

[**SubmittedBulkOperation**](SubmittedBulkOperation.md)

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


## submitBulkEdit

> SubmittedBulkOperation submitBulkEdit(issueBulkEditPayload)

Bulk edit issues

Use this API to submit a bulk edit request and simultaneously edit multiple issues. There are limits applied to the number of issues and fields that can be edited. A single request can accommodate a maximum of 1000 issues (including subtasks) and 200 fields.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  *  Browse [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in all projects that contain the selected issues.  *  Edit [issues permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in all projects that contain the selected issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { SubmitBulkEditRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // IssueBulkEditPayload | The request body containing the issues to be edited and the new field values.
    issueBulkEditPayload: ...,
  } satisfies SubmitBulkEditRequest;

  try {
    const data = await api.submitBulkEdit(body);
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
| **issueBulkEditPayload** | [IssueBulkEditPayload](IssueBulkEditPayload.md) | The request body containing the issues to be edited and the new field values. | |

### Return type

[**SubmittedBulkOperation**](SubmittedBulkOperation.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitBulkMove

> SubmittedBulkOperation submitBulkMove(issueBulkMovePayload)

Bulk move issues

Use this API to submit a bulk issue move request. You can move multiple issues from multiple projects in a single request, but they must all be moved to a single project, issue type, and parent. You can\&#39;t move more than 1000 issues (including subtasks) at once.  #### Scenarios: ####  This is an early version of the API and it doesn\&#39;t have full feature parity with the Bulk Move UI experience.   *  Moving issue of type A to issue of type B in the same project or a different project: &#x60;SUPPORTED&#x60;  *  Moving multiple issues of type A in one or more projects to multiple issues of type B in one of the source projects or a different project: &#x60;SUPPORTED&#x60;  *  Moving issues of multiple issue types in one or more projects to issues of a single issue type in one of the source project or a different project: **&#x60;SUPPORTED&#x60;**       E.g. Moving issues of story and task issue types in project 1 and project 2 to issues of task issue type in project 3  *  Moving a standard parent issue of type A with its multiple subtask issue types in one project to standard issue of type B and multiple subtask issue types in the same project or a different project: &#x60;SUPPORTED&#x60;  *  Moving standard issues with their subtasks to a parent issue in the same project or a different project without losing their relation: &#x60;SUPPORTED&#x60;  *  Moving an epic issue with its child issues to a different project without losing their relation: &#x60;SUPPORTED&#x60;       This usecase is **supported using multiple requests**. Move the epic in one request and then move the children in a separate request with target parent set to the epic issue id              (Alternatively, move them individually and stitch the relationship back with the Bulk Edit API)  #### Limits applied to bulk issue moves: ####  When using the bulk move, keep in mind that there are limits on the number of issues and fields you can include.   *  You can move up to 1,000 issues in a single operation, including any subtasks.  *  The total combined number of fields across all issues must not exceed 1,500,000. For example, if each issue includes 15,000 fields, then the maximum number of issues that can be moved is 100.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  *  Move [issues permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in source projects.  *  Create [issues permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in destination projects.  *  Browse [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in destination projects, if moving subtasks only.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { SubmitBulkMoveRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // IssueBulkMovePayload
    issueBulkMovePayload: {"sendBulkNotification":true,"targetToSourcesMapping":{"PROJECT-KEY,10001":{"inferClassificationDefaults":false,"inferFieldDefaults":false,"inferStatusDefaults":false,"inferSubtaskTypeDefault":true,"issueIdsOrKeys":["ISSUE-1"],"targetClassification":[{"classifications":{"5bfa70f7-4af1-44f5-9e12-1ce185f15a38":["bd58e74c-c31b-41a7-ba69-9673ebd9dae9","-1"]}}],"targetMandatoryFields":[{"fields":{"customfield_10000":{"retain":false,"type":"raw","value":["value-1","value-2"]},"description":{"retain":true,"type":"adf","value":{"content":[{"content":[{"text":"New description value","type":"text"}],"type":"paragraph"}],"type":"doc","version":1}},"fixVersions":{"retain":false,"type":"raw","value":["10009"]},"labels":{"retain":false,"type":"raw","value":["label-1","label-2"]}}}],"targetStatus":[{"statuses":{"10001":["10002","10003"]}}]}}},
  } satisfies SubmitBulkMoveRequest;

  try {
    const data = await api.submitBulkMove(body);
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
| **issueBulkMovePayload** | [IssueBulkMovePayload](IssueBulkMovePayload.md) |  | |

### Return type

[**SubmittedBulkOperation**](SubmittedBulkOperation.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitBulkTransition

> SubmittedBulkOperation submitBulkTransition(issueBulkTransitionPayload)

Bulk transition issue statuses

Use this API to submit a bulk issue status transition request. You can transition multiple issues, alongside with their valid transition Ids. You can transition up to 1,000 issues in a single operation.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  *  Transition [issues permission](https://support.atlassian.com/jira-cloud-administration/docs/permissions-for-company-managed-projects/#Transition-issues/) in all projects that contain the selected issues.  *  Browse [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in all projects that contain the selected issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { SubmitBulkTransitionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // IssueBulkTransitionPayload | The request body containing the issues to be transitioned.
    issueBulkTransitionPayload: {"bulkTransitionInputs":[{"selectedIssueIdsOrKeys":["10001","10002"],"transitionId":"11"},{"selectedIssueIdsOrKeys":["TEST-1"],"transitionId":"2"}],"sendBulkNotification":false},
  } satisfies SubmitBulkTransitionRequest;

  try {
    const data = await api.submitBulkTransition(body);
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
| **issueBulkTransitionPayload** | [IssueBulkTransitionPayload](IssueBulkTransitionPayload.md) | The request body containing the issues to be transitioned. | |

### Return type

[**SubmittedBulkOperation**](SubmittedBulkOperation.md)

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


## submitBulkUnwatch

> SubmittedBulkOperation submitBulkUnwatch(issueBulkWatchOrUnwatchPayload)

Bulk unwatch issues

Use this API to submit a bulk unwatch request. You can unwatch up to 1,000 issues in a single operation.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  *  Browse [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in all projects that contain the selected issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { SubmitBulkUnwatchRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // IssueBulkWatchOrUnwatchPayload | The request body containing the issues to be unwatched.
    issueBulkWatchOrUnwatchPayload: {"selectedIssueIdsOrKeys":["10001","10002"]},
  } satisfies SubmitBulkUnwatchRequest;

  try {
    const data = await api.submitBulkUnwatch(body);
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
| **issueBulkWatchOrUnwatchPayload** | [IssueBulkWatchOrUnwatchPayload](IssueBulkWatchOrUnwatchPayload.md) | The request body containing the issues to be unwatched. | |

### Return type

[**SubmittedBulkOperation**](SubmittedBulkOperation.md)

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


## submitBulkWatch

> SubmittedBulkOperation submitBulkWatch(issueBulkWatchOrUnwatchPayload)

Bulk watch issues

Use this API to submit a bulk watch request. You can watch up to 1,000 issues in a single operation.  **[Permissions](#permissions) required:**   *  Global bulk change [permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-global-permissions/).  *  Browse [project permission](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-permissions/) in all projects that contain the selected issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueBulkOperationsApi,
} from 'jira-cloud-api';
import type { SubmitBulkWatchRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueBulkOperationsApi(config);

  const body = {
    // IssueBulkWatchOrUnwatchPayload | The request body containing the issues to be watched.
    issueBulkWatchOrUnwatchPayload: {"selectedIssueIdsOrKeys":["10001","10002"]},
  } satisfies SubmitBulkWatchRequest;

  try {
    const data = await api.submitBulkWatch(body);
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
| **issueBulkWatchOrUnwatchPayload** | [IssueBulkWatchOrUnwatchPayload](IssueBulkWatchOrUnwatchPayload.md) | The request body containing the issues to be watched. | |

### Return type

[**SubmittedBulkOperation**](SubmittedBulkOperation.md)

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

