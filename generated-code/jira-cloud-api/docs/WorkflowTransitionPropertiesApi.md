# WorkflowTransitionPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWorkflowTransitionProperty**](WorkflowTransitionPropertiesApi.md#createworkflowtransitionproperty) | **POST** /rest/api/3/workflow/transitions/{transitionId}/properties | Create workflow transition property |
| [**deleteWorkflowTransitionProperty**](WorkflowTransitionPropertiesApi.md#deleteworkflowtransitionproperty) | **DELETE** /rest/api/3/workflow/transitions/{transitionId}/properties | Delete workflow transition property |
| [**getWorkflowTransitionProperties**](WorkflowTransitionPropertiesApi.md#getworkflowtransitionproperties) | **GET** /rest/api/3/workflow/transitions/{transitionId}/properties | Get workflow transition properties |
| [**updateWorkflowTransitionProperty**](WorkflowTransitionPropertiesApi.md#updateworkflowtransitionproperty) | **PUT** /rest/api/3/workflow/transitions/{transitionId}/properties | Update workflow transition property |



## createWorkflowTransitionProperty

> WorkflowTransitionProperty createWorkflowTransitionProperty(transitionId, key, workflowName, workflowTransitionProperty, workflowMode)

Create workflow transition property

This will be removed on [June 1, 2026](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2570); add transition properties using [Bulk update workflows](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflows/#api-rest-api-3-workflows-update-post) instead.  Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowTransitionPropertiesApi,
} from 'jira-cloud-api';
import type { CreateWorkflowTransitionPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowTransitionPropertiesApi(config);

  const body = {
    // number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    transitionId: 789,
    // string | The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
    key: key_example,
    // string | The name of the workflow that the transition belongs to.
    workflowName: workflowName_example,
    // WorkflowTransitionProperty
    workflowTransitionProperty: {"value":"createissue"},
    // 'live' | 'draft' | The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited. (optional)
    workflowMode: workflowMode_example,
  } satisfies CreateWorkflowTransitionPropertyRequest;

  try {
    const data = await api.createWorkflowTransitionProperty(body);
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
| **transitionId** | `number` | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | [Defaults to `undefined`] |
| **key** | `string` | The key of the property being added, also known as the name of the property. Set this to the same value as the &#x60;key&#x60; defined in the request body. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of the workflow that the transition belongs to. | [Defaults to `undefined`] |
| **workflowTransitionProperty** | [WorkflowTransitionProperty](WorkflowTransitionProperty.md) |  | |
| **workflowMode** | `live`, `draft` | The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited. | [Optional] [Defaults to `&#39;live&#39;`] [Enum: live, draft] |

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **400** | Returned if a workflow property with the same key is present on the transition. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow transition is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWorkflowTransitionProperty

> deleteWorkflowTransitionProperty(transitionId, key, workflowName, workflowMode)

Delete workflow transition property

This will be removed on [June 1, 2026](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2570); delete transition properties using [Bulk update workflows](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflows/#api-rest-api-3-workflows-update-post) instead.  Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowTransitionPropertiesApi,
} from 'jira-cloud-api';
import type { DeleteWorkflowTransitionPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowTransitionPropertiesApi(config);

  const body = {
    // number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    transitionId: 789,
    // string | The name of the transition property to delete, also known as the name of the property.
    key: key_example,
    // string | The name of the workflow that the transition belongs to.
    workflowName: workflowName_example,
    // 'live' | 'draft' | The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited. (optional)
    workflowMode: workflowMode_example,
  } satisfies DeleteWorkflowTransitionPropertyRequest;

  try {
    const data = await api.deleteWorkflowTransitionProperty(body);
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
| **transitionId** | `number` | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | [Defaults to `undefined`] |
| **key** | `string` | The name of the transition property to delete, also known as the name of the property. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of the workflow that the transition belongs to. | [Defaults to `undefined`] |
| **workflowMode** | `live`, `draft` | The workflow status. Set to &#x60;live&#x60; for inactive workflows or &#x60;draft&#x60; for draft workflows. Active workflows cannot be edited. | [Optional] [Defaults to `undefined`] [Enum: live, draft] |

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
| **200** | 200 response |  -  |
| **304** | Returned if no changes were made by the request. For example, trying to delete a property that cannot be found. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow transition is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorkflowTransitionProperties

> WorkflowTransitionProperty getWorkflowTransitionProperties(transitionId, workflowName, includeReservedKeys, key, workflowMode)

Get workflow transition properties

This will be removed on [June 1, 2026](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2570); fetch transition properties from [Bulk get workflows](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflows/#api-rest-api-3-workflows-post) instead.  Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowTransitionPropertiesApi,
} from 'jira-cloud-api';
import type { GetWorkflowTransitionPropertiesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowTransitionPropertiesApi(config);

  const body = {
    // number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
    transitionId: 789,
    // string | The name of the workflow that the transition belongs to.
    workflowName: workflowName_example,
    // boolean | Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*. (optional)
    includeReservedKeys: true,
    // string | The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned. (optional)
    key: key_example,
    // 'live' | 'draft' | The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows. (optional)
    workflowMode: workflowMode_example,
  } satisfies GetWorkflowTransitionPropertiesRequest;

  try {
    const data = await api.getWorkflowTransitionProperties(body);
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
| **transitionId** | `number` | The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of the workflow that the transition belongs to. | [Defaults to `undefined`] |
| **includeReservedKeys** | `boolean` | Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*. | [Optional] [Defaults to `false`] |
| **key** | `string` | The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned. | [Optional] [Defaults to `undefined`] |
| **workflowMode** | `live`, `draft` | The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows. | [Optional] [Defaults to `&#39;live&#39;`] [Enum: live, draft] |

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have admin permission |  -  |
| **404** | Returned if the workflow transition or property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWorkflowTransitionProperty

> WorkflowTransitionProperty updateWorkflowTransitionProperty(transitionId, key, workflowName, workflowTransitionProperty, workflowMode)

Update workflow transition property

This will be removed on [June 1, 2026](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-2570); update transition properties using [Bulk update workflows](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflows/#api-rest-api-3-workflows-update-post) instead.  Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  WorkflowTransitionPropertiesApi,
} from 'jira-cloud-api';
import type { UpdateWorkflowTransitionPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WorkflowTransitionPropertiesApi(config);

  const body = {
    // number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    transitionId: 789,
    // string | The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
    key: key_example,
    // string | The name of the workflow that the transition belongs to.
    workflowName: workflowName_example,
    // WorkflowTransitionProperty
    workflowTransitionProperty: {"value":"createissue"},
    // 'live' | 'draft' | The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited. (optional)
    workflowMode: workflowMode_example,
  } satisfies UpdateWorkflowTransitionPropertyRequest;

  try {
    const data = await api.updateWorkflowTransitionProperty(body);
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
| **transitionId** | `number` | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | [Defaults to `undefined`] |
| **key** | `string` | The key of the property being updated, also known as the name of the property. Set this to the same value as the &#x60;key&#x60; defined in the request body. | [Defaults to `undefined`] |
| **workflowName** | `string` | The name of the workflow that the transition belongs to. | [Defaults to `undefined`] |
| **workflowTransitionProperty** | [WorkflowTransitionProperty](WorkflowTransitionProperty.md) |  | |
| **workflowMode** | `live`, `draft` | The workflow status. Set to &#x60;live&#x60; for inactive workflows or &#x60;draft&#x60; for draft workflows. Active workflows cannot be edited. | [Optional] [Defaults to `undefined`] [Enum: live, draft] |

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **304** | Returned if no changes were made by the request. For example, attempting to update a property with its current value. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the workflow transition is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

