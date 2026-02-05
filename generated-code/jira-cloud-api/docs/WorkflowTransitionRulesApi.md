# WorkflowTransitionRulesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteWorkflowTransitionRuleConfigurations**](WorkflowTransitionRulesApi.md#deleteworkflowtransitionruleconfigurations) | **PUT** /rest/api/3/workflow/rule/config/delete | Delete workflow transition rule configurations |
| [**getWorkflowTransitionRuleConfigurations**](WorkflowTransitionRulesApi.md#getworkflowtransitionruleconfigurations) | **GET** /rest/api/3/workflow/rule/config | Get workflow transition rule configurations |
| [**updateWorkflowTransitionRuleConfigurations**](WorkflowTransitionRulesApi.md#updateworkflowtransitionruleconfigurations) | **PUT** /rest/api/3/workflow/rule/config | Update workflow transition rule configurations |



## deleteWorkflowTransitionRuleConfigurations

> WorkflowTransitionRulesUpdateErrors deleteWorkflowTransitionRuleConfigurations(workflowsWithTransitionRulesDetails)

Delete workflow transition rule configurations

Deletes workflow transition rules from one or more workflows. These rule types are supported:   *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)  *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)  *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)  Only rules created by the calling Connect app can be deleted.  **[Permissions](#permissions) required:** Only Connect apps can use this operation.

### Example

```ts
import {
  Configuration,
  WorkflowTransitionRulesApi,
} from 'jira-cloud-api';
import type { DeleteWorkflowTransitionRuleConfigurationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowTransitionRulesApi(config);

  const body = {
    // WorkflowsWithTransitionRulesDetails
    workflowsWithTransitionRulesDetails: {"workflows":[{"workflowId":{"draft":false,"name":"Internal support workflow"},"workflowRuleIds":["b4d6cbdc-59f5-11e9-8647-d663bd873d93","d663bd873d93-59f5-11e9-8647-b4d6cbdc","11e9-59f5-b4d6cbdc-8647-d663bd873d93"]}]},
  } satisfies DeleteWorkflowTransitionRuleConfigurationsRequest;

  try {
    const data = await api.deleteWorkflowTransitionRuleConfigurations(body);
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
| **workflowsWithTransitionRulesDetails** | [WorkflowsWithTransitionRulesDetails](WorkflowsWithTransitionRulesDetails.md) |  | |

### Return type

[**WorkflowTransitionRulesUpdateErrors**](WorkflowTransitionRulesUpdateErrors.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the caller is not a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowTransitionRuleConfigurations

> PageBeanWorkflowTransitionRules getWorkflowTransitionRuleConfigurations(types, startAt, maxResults, keys, workflowNames, withTags, draft, expand)

Get workflow transition rule configurations

Returns a [paginated](#pagination) list of workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules:   *  of one or more transition rule types, such as [workflow post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/).  *  matching one or more transition rule keys.  Only workflows containing transition rules created by the calling [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) app are returned.  Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored.  **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) apps can use this operation.

### Example

```ts
import {
  Configuration,
  WorkflowTransitionRulesApi,
} from 'jira-cloud-api';
import type { GetWorkflowTransitionRuleConfigurationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowTransitionRulesApi(config);

  const body = {
    // Set<'postfunction' | 'condition' | 'validator'> | The types of the transition rules to return.
    types: ...,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<string> | The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return. (optional)
    keys: ...,
    // Set<string> | The list of workflow names to filter by. (optional)
    workflowNames: ...,
    // Set<string> | The list of `tags` to filter by. (optional)
    withTags: ...,
    // boolean | Whether draft or published workflows are returned. If not provided, both workflow types are returned. (optional)
    draft: true,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to. (optional)
    expand: expand_example,
  } satisfies GetWorkflowTransitionRuleConfigurationsRequest;

  try {
    const data = await api.getWorkflowTransitionRuleConfigurations(body);
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
| **types** | `postfunction`, `condition`, `validator` | The types of the transition rules to return. | [Enum: postfunction, condition, validator] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `10`] |
| **keys** | `Set<string>` | The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return. | [Optional] |
| **workflowNames** | `Set<string>` | The list of workflow names to filter by. | [Optional] |
| **withTags** | `Set<string>` | The list of &#x60;tags&#x60; to filter by. | [Optional] |
| **draft** | `boolean` | Whether draft or published workflows are returned. If not provided, both workflow types are returned. | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;transition&#x60;, which, for each rule, returns information about the transition the rule is assigned to. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanWorkflowTransitionRules**](PageBeanWorkflowTransitionRules.md)

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
| **403** | Returned if the caller is not a Connect or Forge app. |  -  |
| **404** | Returned if any transition rule type is not supported. |  -  |
| **503** | Returned if we encounter a problem while trying to access the required data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWorkflowTransitionRuleConfigurations

> WorkflowTransitionRulesUpdateErrors updateWorkflowTransitionRuleConfigurations(workflowTransitionRulesUpdate)

Update workflow transition rule configurations

Updates configuration of workflow transition rules. The following rule types are supported:   *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)  *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)  *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)  Only rules created by the calling [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) app can be updated.  To assist with app migration, this operation can be used to:   *  Disable a rule.  *  Add a &#x60;tag&#x60;. Use this to filter rules in the [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).  Rules are enabled if the &#x60;disabled&#x60; parameter is not provided.  **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) apps can use this operation.

### Example

```ts
import {
  Configuration,
  WorkflowTransitionRulesApi,
} from 'jira-cloud-api';
import type { UpdateWorkflowTransitionRuleConfigurationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowTransitionRulesApi(config);

  const body = {
    // WorkflowTransitionRulesUpdate
    workflowTransitionRulesUpdate: {"workflows":[{"conditions":[{"configuration":{"disabled":false,"tag":"Another tag","value":"{ \"size\": \"medium\" }"},"id":"d663bd873d93-59f5-11e9-8647-b4d6cbdc"}],"postFunctions":[{"configuration":{"disabled":false,"tag":"Sample tag","value":"{ \"color\": \"red\" }"},"id":"b4d6cbdc-59f5-11e9-8647-d663bd873d93"}],"validators":[{"configuration":{"disabled":false,"value":"{ \"shape\": \"square\" }"},"id":"11e9-59f5-b4d6cbdc-8647-d663bd873d93"}],"workflowId":{"draft":false,"name":"My Workflow name"}}]},
  } satisfies UpdateWorkflowTransitionRuleConfigurationsRequest;

  try {
    const data = await api.updateWorkflowTransitionRuleConfigurations(body);
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
| **workflowTransitionRulesUpdate** | [WorkflowTransitionRulesUpdate](WorkflowTransitionRulesUpdate.md) |  | |

### Return type

[**WorkflowTransitionRulesUpdateErrors**](WorkflowTransitionRulesUpdateErrors.md)

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
| **403** | Returned if the caller is not a Connect or Forge app. |  -  |
| **503** | Returned if we encounter a problem while trying to access the required data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

