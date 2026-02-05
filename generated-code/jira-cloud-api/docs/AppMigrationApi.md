# AppMigrationApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appIssueFieldValueUpdateResourceUpdateIssueFieldsPut**](AppMigrationApi.md#appissuefieldvalueupdateresourceupdateissuefieldsput) | **PUT** /rest/atlassian-connect/1/migration/field | Bulk update custom field value |
| [**migrationResourceUpdateEntityPropertiesValuePut**](AppMigrationApi.md#migrationresourceupdateentitypropertiesvalueput) | **PUT** /rest/atlassian-connect/1/migration/properties/{entityType} | Bulk update entity properties |
| [**migrationResourceWorkflowRuleSearchPost**](AppMigrationApi.md#migrationresourceworkflowrulesearchpost) | **POST** /rest/atlassian-connect/1/migration/workflow/rule/search | Get workflow transition rule configurations |



## appIssueFieldValueUpdateResourceUpdateIssueFieldsPut

> any appIssueFieldValueUpdateResourceUpdateIssueFieldsPut(atlassianTransferId, connectCustomFieldValues)

Bulk update custom field value

Updates the value of a custom field added by Connect apps on one or more issues. The values of up to 200 custom fields can be updated.  **[Permissions](#permissions) required:** Only Connect apps can make this request

### Example

```ts
import {
  Configuration,
  AppMigrationApi,
} from 'jira-cloud-api';
import type { AppIssueFieldValueUpdateResourceUpdateIssueFieldsPutRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const api = new AppMigrationApi();

  const body = {
    // string | The ID of the transfer.
    atlassianTransferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ConnectCustomFieldValues
    connectCustomFieldValues: {"updateValueList":[{"_type":"StringIssueField","issueID":10001,"fieldID":10076,"string":"new string value"},{"_type":"TextIssueField","issueID":10002,"fieldID":10077,"text":"new text value"},{"_type":"SingleSelectIssueField","issueID":10003,"fieldID":10078,"optionID":"1"},{"_type":"MultiSelectIssueField","issueID":10004,"fieldID":10079,"optionID":"2"},{"_type":"RichTextIssueField","issueID":10005,"fieldID":10080,"richText":"new rich text value"},{"_type":"NumberIssueField","issueID":10006,"fieldID":10082,"number":54}]},
  } satisfies AppIssueFieldValueUpdateResourceUpdateIssueFieldsPutRequest;

  try {
    const data = await api.appIssueFieldValueUpdateResourceUpdateIssueFieldsPut(body);
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
| **atlassianTransferId** | `string` | The ID of the transfer. | [Defaults to `undefined`] |
| **connectCustomFieldValues** | [ConnectCustomFieldValues](ConnectCustomFieldValues.md) |  | |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if: * the transfer ID is not found. * the authorisation credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## migrationResourceUpdateEntityPropertiesValuePut

> migrationResourceUpdateEntityPropertiesValuePut(atlassianTransferId, entityType, entityPropertyDetails)

Bulk update entity properties

Updates the values of multiple entity properties for an object, up to 50 updates per request. This operation is for use by Connect apps during app migration.

### Example

```ts
import {
  Configuration,
  AppMigrationApi,
} from 'jira-cloud-api';
import type { MigrationResourceUpdateEntityPropertiesValuePutRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const api = new AppMigrationApi();

  const body = {
    // string | The app migration transfer ID.
    atlassianTransferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // 'IssueProperty' | 'CommentProperty' | 'DashboardItemProperty' | 'IssueTypeProperty' | 'ProjectProperty' | 'UserProperty' | 'WorklogProperty' | 'BoardProperty' | 'SprintProperty' | The type indicating the object that contains the entity properties.
    entityType: entityType_example,
    // Array<EntityPropertyDetails>
    entityPropertyDetails: ...,
  } satisfies MigrationResourceUpdateEntityPropertiesValuePutRequest;

  try {
    const data = await api.migrationResourceUpdateEntityPropertiesValuePut(body);
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
| **atlassianTransferId** | `string` | The app migration transfer ID. | [Defaults to `undefined`] |
| **entityType** | `IssueProperty`, `CommentProperty`, `DashboardItemProperty`, `IssueTypeProperty`, `ProjectProperty`, `UserProperty`, `WorklogProperty`, `BoardProperty`, `SprintProperty` | The type indicating the object that contains the entity properties. | [Defaults to `undefined`] [Enum: IssueProperty, CommentProperty, DashboardItemProperty, IssueTypeProperty, ProjectProperty, UserProperty, WorklogProperty, BoardProperty, SprintProperty] |
| **entityPropertyDetails** | `Array<EntityPropertyDetails>` |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **403** | Returned if the authorisation credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## migrationResourceWorkflowRuleSearchPost

> WorkflowRulesSearchDetails migrationResourceWorkflowRuleSearchPost(atlassianTransferId, workflowRulesSearch)

Get workflow transition rule configurations

Returns configurations for workflow transition rules migrated from server to cloud and owned by the calling Connect app.

### Example

```ts
import {
  Configuration,
  AppMigrationApi,
} from 'jira-cloud-api';
import type { MigrationResourceWorkflowRuleSearchPostRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const api = new AppMigrationApi();

  const body = {
    // string | The app migration transfer ID.
    atlassianTransferId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WorkflowRulesSearch
    workflowRulesSearch: ...,
  } satisfies MigrationResourceWorkflowRuleSearchPostRequest;

  try {
    const data = await api.migrationResourceWorkflowRuleSearchPost(body);
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
| **atlassianTransferId** | `string` | The app migration transfer ID. | [Defaults to `undefined`] |
| **workflowRulesSearch** | [WorkflowRulesSearch](WorkflowRulesSearch.md) |  | |

### Return type

[**WorkflowRulesSearchDetails**](WorkflowRulesSearchDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **403** | Returned if the authorisation credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

