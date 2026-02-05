# IssueCustomFieldOptionsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomFieldOption**](IssueCustomFieldOptionsApi.md#createcustomfieldoption) | **POST** /rest/api/3/field/{fieldId}/context/{contextId}/option | Create custom field options (context) |
| [**deleteCustomFieldOption**](IssueCustomFieldOptionsApi.md#deletecustomfieldoption) | **DELETE** /rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId} | Delete custom field options (context) |
| [**getCustomFieldOption**](IssueCustomFieldOptionsApi.md#getcustomfieldoption) | **GET** /rest/api/3/customFieldOption/{id} | Get custom field option |
| [**getOptionsForContext**](IssueCustomFieldOptionsApi.md#getoptionsforcontext) | **GET** /rest/api/3/field/{fieldId}/context/{contextId}/option | Get custom field options (context) |
| [**reorderCustomFieldOptions**](IssueCustomFieldOptionsApi.md#reordercustomfieldoptions) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId}/option/move | Reorder custom field options (context) |
| [**replaceCustomFieldOption**](IssueCustomFieldOptionsApi.md#replacecustomfieldoption) | **DELETE** /rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId}/issue | Replace custom field options |
| [**updateCustomFieldOption**](IssueCustomFieldOptionsApi.md#updatecustomfieldoption) | **PUT** /rest/api/3/field/{fieldId}/context/{contextId}/option | Update custom field options (context) |



## createCustomFieldOption

> CustomFieldCreatedContextOptionsList createCustomFieldOption(fieldId, contextId, bulkCustomFieldOptionCreateRequest)

Create custom field options (context)

Creates options and, where the custom select field is of the type Select List (cascading), cascading options for a custom select field. The options are added to a context of the field.  The maximum number of options that can be created per request is 1000 and each field can have a maximum of 10000 options.  This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsApi,
} from 'jira-cloud-api';
import type { CreateCustomFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsApi(config);

  const body = {
    // string | The ID of the custom field.
    fieldId: fieldId_example,
    // number | The ID of the context.
    contextId: 789,
    // BulkCustomFieldOptionCreateRequest
    bulkCustomFieldOptionCreateRequest: {"options":[{"disabled":false,"value":"Scranton"},{"disabled":true,"optionId":"10000","value":"Manhattan"},{"disabled":false,"value":"The Electric City"}]},
  } satisfies CreateCustomFieldOptionRequest;

  try {
    const data = await api.createCustomFieldOption(body);
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
| **fieldId** | `string` | The ID of the custom field. | [Defaults to `undefined`] |
| **contextId** | `number` | The ID of the context. | [Defaults to `undefined`] |
| **bulkCustomFieldOptionCreateRequest** | [BulkCustomFieldOptionCreateRequest](BulkCustomFieldOptionCreateRequest.md) |  | |

### Return type

[**CustomFieldCreatedContextOptionsList**](CustomFieldCreatedContextOptionsList.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the custom field is not found or the context doesn\&#39;t match the custom field. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCustomFieldOption

> deleteCustomFieldOption(fieldId, contextId, optionId)

Delete custom field options (context)

Deletes a custom field option.  Options with cascading options cannot be deleted without deleting the cascading options first.  This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsApi,
} from 'jira-cloud-api';
import type { DeleteCustomFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsApi(config);

  const body = {
    // string | The ID of the custom field.
    fieldId: fieldId_example,
    // number | The ID of the context from which an option should be deleted.
    contextId: 789,
    // number | The ID of the option to delete.
    optionId: 789,
  } satisfies DeleteCustomFieldOptionRequest;

  try {
    const data = await api.deleteCustomFieldOption(body);
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
| **fieldId** | `string` | The ID of the custom field. | [Defaults to `undefined`] |
| **contextId** | `number` | The ID of the context from which an option should be deleted. | [Defaults to `undefined`] |
| **optionId** | `number` | The ID of the option to delete. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the option is deleted. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field, the context, or the option is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomFieldOption

> CustomFieldOption getCustomFieldOption(id)

Get custom field option

Returns a custom field option. For example, an option in a select list.  Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** The custom field option is returned as follows:   *  if the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  if the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the custom field is used in, and the field is visible in at least one layout the user has permission to view.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsApi,
} from 'jira-cloud-api';
import type { GetCustomFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsApi(config);

  const body = {
    // string | The ID of the custom field option.
    id: id_example,
  } satisfies GetCustomFieldOptionRequest;

  try {
    const data = await api.getCustomFieldOption(body);
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
| **id** | `string` | The ID of the custom field option. | [Defaults to `undefined`] |

### Return type

[**CustomFieldOption**](CustomFieldOption.md)

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
| **404** | Returned if:   *  the custom field option is not found.  *  the user does not have permission to view the custom field. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOptionsForContext

> PageBeanCustomFieldContextOption getOptionsForContext(fieldId, contextId, optionId, onlyOptions, startAt, maxResults)

Get custom field options (context)

Returns a [paginated](#pagination) list of all custom field option for a context. Options are returned first then cascading options, in the order they display in Jira.  This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). *Edit Workflow* [edit workflow permission](https://support.atlassian.com/jira-cloud-administration/docs/permissions-for-company-managed-projects/#Edit-Workflows)

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsApi,
} from 'jira-cloud-api';
import type { GetOptionsForContextRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsApi(config);

  const body = {
    // string | The ID of the custom field.
    fieldId: fieldId_example,
    // number | The ID of the context.
    contextId: 789,
    // number | The ID of the option. (optional)
    optionId: 789,
    // boolean | Whether only options are returned. (optional)
    onlyOptions: true,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetOptionsForContextRequest;

  try {
    const data = await api.getOptionsForContext(body);
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
| **fieldId** | `string` | The ID of the custom field. | [Defaults to `undefined`] |
| **contextId** | `number` | The ID of the context. | [Defaults to `undefined`] |
| **optionId** | `number` | The ID of the option. | [Optional] [Defaults to `undefined`] |
| **onlyOptions** | `boolean` | Whether only options are returned. | [Optional] [Defaults to `false`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |

### Return type

[**PageBeanCustomFieldContextOption**](PageBeanCustomFieldContextOption.md)

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
| **404** | Returned if the custom field is not found or the context doesn\&#39;t match the custom field. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reorderCustomFieldOptions

> any reorderCustomFieldOptions(fieldId, contextId, orderOfCustomFieldOptions)

Reorder custom field options (context)

Changes the order of custom field options or cascading options in a context.  This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsApi,
} from 'jira-cloud-api';
import type { ReorderCustomFieldOptionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsApi(config);

  const body = {
    // string | The ID of the custom field.
    fieldId: fieldId_example,
    // number | The ID of the context.
    contextId: 789,
    // OrderOfCustomFieldOptions
    orderOfCustomFieldOptions: {"customFieldOptionIds":["10001","10002"],"position":"First"},
  } satisfies ReorderCustomFieldOptionsRequest;

  try {
    const data = await api.reorderCustomFieldOptions(body);
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
| **fieldId** | `string` | The ID of the custom field. | [Defaults to `undefined`] |
| **contextId** | `number` | The ID of the context. | [Defaults to `undefined`] |
| **orderOfCustomFieldOptions** | [OrderOfCustomFieldOptions](OrderOfCustomFieldOptions.md) |  | |

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
| **204** | Returned if options are reordered. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field, the context, or one or more of the options is not found.. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceCustomFieldOption

> replaceCustomFieldOption(fieldId, optionId, contextId, replaceWith, jql)

Replace custom field options

Replaces the options of a custom field.  Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect or Forge apps.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsApi,
} from 'jira-cloud-api';
import type { ReplaceCustomFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsApi(config);

  const body = {
    // string | The ID of the custom field.
    fieldId: fieldId_example,
    // number | The ID of the option to be deselected.
    optionId: 789,
    // number | The ID of the context.
    contextId: 789,
    // number | The ID of the option that will replace the currently selected option. (optional)
    replaceWith: 789,
    // string | A JQL query that specifies the issues to be updated. For example, *project=10000*. (optional)
    jql: jql_example,
  } satisfies ReplaceCustomFieldOptionRequest;

  try {
    const data = await api.replaceCustomFieldOption(body);
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
| **fieldId** | `string` | The ID of the custom field. | [Defaults to `undefined`] |
| **optionId** | `number` | The ID of the option to be deselected. | [Defaults to `undefined`] |
| **contextId** | `number` | The ID of the context. | [Defaults to `undefined`] |
| **replaceWith** | `number` | The ID of the option that will replace the currently selected option. | [Optional] [Defaults to `undefined`] |
| **jql** | `string` | A JQL query that specifies the issues to be updated. For example, *project&#x3D;10000*. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the long-running task to deselect the option is started. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field is not found or does not support options, or the options to be replaced are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomFieldOption

> CustomFieldUpdatedContextOptionsList updateCustomFieldOption(fieldId, contextId, bulkCustomFieldOptionUpdateRequest)

Update custom field options (context)

Updates the options of a custom field.  If any of the options are not found, no options are updated. Options where the values in the request match the current values aren\&#39;t updated and aren\&#39;t reported in the response.  Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsApi,
} from 'jira-cloud-api';
import type { UpdateCustomFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsApi(config);

  const body = {
    // string | The ID of the custom field.
    fieldId: fieldId_example,
    // number | The ID of the context.
    contextId: 789,
    // BulkCustomFieldOptionUpdateRequest
    bulkCustomFieldOptionUpdateRequest: {"options":[{"disabled":false,"id":"10001","value":"Scranton"},{"disabled":true,"id":"10002","value":"Manhattan"},{"disabled":false,"id":"10003","value":"The Electric City"}]},
  } satisfies UpdateCustomFieldOptionRequest;

  try {
    const data = await api.updateCustomFieldOption(body);
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
| **fieldId** | `string` | The ID of the custom field. | [Defaults to `undefined`] |
| **contextId** | `number` | The ID of the context. | [Defaults to `undefined`] |
| **bulkCustomFieldOptionUpdateRequest** | [BulkCustomFieldOptionUpdateRequest](BulkCustomFieldOptionUpdateRequest.md) |  | |

### Return type

[**CustomFieldUpdatedContextOptionsList**](CustomFieldUpdatedContextOptionsList.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field, context, or one or more options is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

