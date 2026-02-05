# IssueFieldsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomField**](IssueFieldsApi.md#createcustomfield) | **POST** /rest/api/3/field | Create custom field |
| [**deleteCustomField**](IssueFieldsApi.md#deletecustomfield) | **DELETE** /rest/api/3/field/{id} | Delete custom field |
| [**getContextsForFieldDeprecated**](IssueFieldsApi.md#getcontextsforfielddeprecated) | **GET** /rest/api/3/field/{fieldId}/contexts | Get contexts for a field |
| [**getFields**](IssueFieldsApi.md#getfields) | **GET** /rest/api/3/field | Get fields |
| [**getFieldsPaginated**](IssueFieldsApi.md#getfieldspaginated) | **GET** /rest/api/3/field/search | Get fields paginated |
| [**getProjectFields**](IssueFieldsApi.md#getprojectfields) | **GET** /rest/api/3/projects/fields | Get fields for projects |
| [**getTrashedFieldsPaginated**](IssueFieldsApi.md#gettrashedfieldspaginated) | **GET** /rest/api/3/field/search/trashed | Get fields in trash paginated |
| [**restoreCustomField**](IssueFieldsApi.md#restorecustomfield) | **POST** /rest/api/3/field/{id}/restore | Restore custom field from trash |
| [**trashCustomField**](IssueFieldsApi.md#trashcustomfield) | **POST** /rest/api/3/field/{id}/trash | Move custom field to trash |
| [**updateCustomField**](IssueFieldsApi.md#updatecustomfield) | **PUT** /rest/api/3/field/{fieldId} | Update custom field |



## createCustomField

> FieldDetails createCustomField(customFieldDefinitionJsonBean)

Create custom field

Creates a custom field.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { CreateCustomFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // CustomFieldDefinitionJsonBean | Definition of the custom field to be created
    customFieldDefinitionJsonBean: {"description":"Custom field for picking groups","name":"New custom field","searcherKey":"com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher","type":"com.atlassian.jira.plugin.system.customfieldtypes:grouppicker"},
  } satisfies CreateCustomFieldRequest;

  try {
    const data = await api.createCustomField(body);
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
| **customFieldDefinitionJsonBean** | [CustomFieldDefinitionJsonBean](CustomFieldDefinitionJsonBean.md) | Definition of the custom field to be created | |

### Return type

[**FieldDetails**](FieldDetails.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the custom field is created. |  -  |
| **400** | Returned if:   *  the user does not have permission to create custom fields.  *  any of the request object properties have invalid or missing values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCustomField

> deleteCustomField(id)

Delete custom field

Deletes a custom field. The custom field is deleted whether it is in the trash or not. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.  This operation is [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { DeleteCustomFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // string | The ID of a custom field.
    id: id_example,
  } satisfies DeleteCustomFieldRequest;

  try {
    const data = await api.deleteCustomField(body);
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
| **id** | `string` | The ID of a custom field. | [Defaults to `undefined`] |

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
| **303** | Returned if the request is successful. |  -  |
| **400** | Returned if any of these are true:   *  The custom field is locked.  *  The custom field is used in a issue security scheme or a permission scheme.  *  The custom field ID format is incorrect. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the custom field is not found. |  -  |
| **409** | Returned if a task to delete the custom field is running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContextsForFieldDeprecated

> PageBeanContext getContextsForFieldDeprecated(fieldId, startAt, maxResults)

Get contexts for a field

Returns a [paginated](#pagination) list of the contexts a field is used in. Deprecated, use [ Get custom field contexts](#api-rest-api-3-field-fieldId-context-get).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { GetContextsForFieldDeprecatedRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // string | The ID of the field to return contexts for.
    fieldId: fieldId_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetContextsForFieldDeprecatedRequest;

  try {
    const data = await api.getContextsForFieldDeprecated(body);
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
| **fieldId** | `string` | The ID of the field to return contexts for. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `20`] |

### Return type

[**PageBeanContext**](PageBeanContext.md)

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


## getFields

> Array&lt;FieldDetails&gt; getFields()

Get fields

Returns system and custom issue fields according to the following rules:   *  Fields that cannot be added to the issue navigator are always returned.  *  Fields that cannot be placed on an issue screen are always returned.  *  Fields that depend on global Jira settings are only returned if the setting is enabled. That is, timetracking fields, subtasks, votes, and watches.  *  For all other fields, this operation only returns the fields that the user has permission to view (that is, the field is used in at least one project that the user has *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.)  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { GetFieldsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  try {
    const data = await api.getFields();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;FieldDetails&gt;**](FieldDetails.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFieldsPaginated

> PageBeanField getFieldsPaginated(startAt, maxResults, type, id, query, orderBy, expand, projectIds)

Get fields paginated

Returns a [paginated](#pagination) list of fields for Classic Jira projects. The list can include:   *  all fields  *  specific fields, by defining &#x60;id&#x60;  *  fields that contain a string in the field name or description, by defining &#x60;query&#x60;  *  specific fields that contain a string in the field name or description, by defining &#x60;id&#x60; and &#x60;query&#x60;  Use &#x60;type&#x60; must be set to &#x60;custom&#x60; to show custom fields only.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { GetFieldsPaginatedRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Array<'custom' | 'system'> | The type of fields to search. (optional)
    type: ...,
    // Set<string> | The IDs of the custom fields to return or, where `query` is specified, filter. (optional)
    id: ...,
    // string | String used to perform a case-insensitive partial match with field names or descriptions. (optional)
    query: query_example,
    // 'contextsCount' | '-contextsCount' | '+contextsCount' | 'lastUsed' | '-lastUsed' | '+lastUsed' | 'name' | '-name' | '+name' | 'screensCount' | '-screensCount' | '+screensCount' | 'projectsCount' | '-projectsCount' | '+projectsCount' | [Order](#ordering) the results by:   *  `contextsCount` sorts by the number of contexts related to a field  *  `lastUsed` sorts by the date when the value of the field last changed  *  `name` sorts by the field name  *  `screensCount` sorts by the number of screens related to a field (optional)
    orderBy: orderBy_example,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `key` returns the key for each field  *  `stableId` returns the stableId for each field  *  `lastUsed` returns the date when the value of the field last changed  *  `screensCount` returns the number of screens related to a field  *  `contextsCount` returns the number of contexts related to a field  *  `isLocked` returns information about whether the field is locked  *  `searcherKey` returns the searcher key for each custom field (optional)
    expand: expand_example,
    // Set<number> | The IDs of the projects to filter the fields by. Fields belonging to project Ids that the user does not have access to will not be returned (optional)
    projectIds: ...,
  } satisfies GetFieldsPaginatedRequest;

  try {
    const data = await api.getFieldsPaginated(body);
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
| **type** | `custom`, `system` | The type of fields to search. | [Optional] [Enum: custom, system] |
| **id** | `Set<string>` | The IDs of the custom fields to return or, where &#x60;query&#x60; is specified, filter. | [Optional] |
| **query** | `string` | String used to perform a case-insensitive partial match with field names or descriptions. | [Optional] [Defaults to `undefined`] |
| **orderBy** | `contextsCount`, `-contextsCount`, `+contextsCount`, `lastUsed`, `-lastUsed`, `+lastUsed`, `name`, `-name`, `+name`, `screensCount`, `-screensCount`, `+screensCount`, `projectsCount`, `-projectsCount`, `+projectsCount` | [Order](#ordering) the results by:   *  &#x60;contextsCount&#x60; sorts by the number of contexts related to a field  *  &#x60;lastUsed&#x60; sorts by the date when the value of the field last changed  *  &#x60;name&#x60; sorts by the field name  *  &#x60;screensCount&#x60; sorts by the number of screens related to a field | [Optional] [Defaults to `undefined`] [Enum: contextsCount, -contextsCount, +contextsCount, lastUsed, -lastUsed, +lastUsed, name, -name, +name, screensCount, -screensCount, +screensCount, projectsCount, -projectsCount, +projectsCount] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;key&#x60; returns the key for each field  *  &#x60;stableId&#x60; returns the stableId for each field  *  &#x60;lastUsed&#x60; returns the date when the value of the field last changed  *  &#x60;screensCount&#x60; returns the number of screens related to a field  *  &#x60;contextsCount&#x60; returns the number of contexts related to a field  *  &#x60;isLocked&#x60; returns information about whether the field is locked  *  &#x60;searcherKey&#x60; returns the searcher key for each custom field | [Optional] [Defaults to `undefined`] |
| **projectIds** | `Set<number>` | The IDs of the projects to filter the fields by. Fields belonging to project Ids that the user does not have access to will not be returned | [Optional] |

### Return type

[**PageBeanField**](PageBeanField.md)

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


## getProjectFields

> PageBean2ProjectFieldBean getProjectFields(projectId, workTypeId, startAt, maxResults, fieldId)

Get fields for projects

Returns a [paginated](#pagination) list of fields for the requested projects and work types.  Only fields that are available for the specified combination of projects and work types are returned. This endpoint allows filtering to specific fields if field IDs are provided.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { GetProjectFieldsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // Array<number> | The IDs of projects to return fields for.
    projectId: [10000,10001],
    // Array<number> | The IDs of work types (issue types) to return fields for.
    workTypeId: [10000,10001],
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Array<string> | The IDs of fields to return. If not provided, all fields are returned. (optional)
    fieldId: ["summary","description"],
  } satisfies GetProjectFieldsRequest;

  try {
    const data = await api.getProjectFields(body);
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
| **projectId** | `Array<number>` | The IDs of projects to return fields for. | |
| **workTypeId** | `Array<number>` | The IDs of work types (issue types) to return fields for. | |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **fieldId** | `Array<string>` | The IDs of fields to return. If not provided, all fields are returned. | [Optional] |

### Return type

[**PageBean2ProjectFieldBean**](PageBean2ProjectFieldBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request parameters are invalid. |  -  |
| **401** | Returned if authentication is missing. |  -  |
| **403** | Returned if the user does not have permission to view the projects or work types. |  -  |
| **404** | Returned if the endpoint is not enabled via feature flag. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTrashedFieldsPaginated

> PageBeanField getTrashedFieldsPaginated(startAt, maxResults, id, query, expand, orderBy)

Get fields in trash paginated

Returns a [paginated](#pagination) list of fields in the trash. The list may be restricted to fields whose field name or description partially match a string.  Only custom fields can be queried, &#x60;type&#x60; must be set to &#x60;custom&#x60;.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { GetTrashedFieldsPaginatedRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<string> (optional)
    id: ...,
    // string | String used to perform a case-insensitive partial match with field names or descriptions. (optional)
    query: query_example,
    // 'name' | '-name' | '+name' | 'trashDate' | '-trashDate' | '+trashDate' | 'plannedDeletionDate' | '-plannedDeletionDate' | '+plannedDeletionDate' | 'projectsCount' | '-projectsCount' | '+projectsCount' (optional)
    expand: expand_example,
    // string | [Order](#ordering) the results by a field:   *  `name` sorts by the field name  *  `trashDate` sorts by the date the field was moved to the trash  *  `plannedDeletionDate` sorts by the planned deletion date (optional)
    orderBy: orderBy_example,
  } satisfies GetTrashedFieldsPaginatedRequest;

  try {
    const data = await api.getTrashedFieldsPaginated(body);
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
| **id** | `Set<string>` |  | [Optional] |
| **query** | `string` | String used to perform a case-insensitive partial match with field names or descriptions. | [Optional] [Defaults to `undefined`] |
| **expand** | `name`, `-name`, `+name`, `trashDate`, `-trashDate`, `+trashDate`, `plannedDeletionDate`, `-plannedDeletionDate`, `+plannedDeletionDate`, `projectsCount`, `-projectsCount`, `+projectsCount` |  | [Optional] [Defaults to `undefined`] [Enum: name, -name, +name, trashDate, -trashDate, +trashDate, plannedDeletionDate, -plannedDeletionDate, +plannedDeletionDate, projectsCount, -projectsCount, +projectsCount] |
| **orderBy** | `string` | [Order](#ordering) the results by a field:   *  &#x60;name&#x60; sorts by the field name  *  &#x60;trashDate&#x60; sorts by the date the field was moved to the trash  *  &#x60;plannedDeletionDate&#x60; sorts by the planned deletion date | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanField**](PageBeanField.md)

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


## restoreCustomField

> any restoreCustomField(id)

Restore custom field from trash

Restores a custom field from trash. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { RestoreCustomFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // string | The ID of a custom field.
    id: id_example,
  } satisfies RestoreCustomFieldRequest;

  try {
    const data = await api.restoreCustomField(body);
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
| **id** | `string` | The ID of a custom field. | [Defaults to `undefined`] |

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
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## trashCustomField

> any trashCustomField(id)

Move custom field to trash

Moves a custom field to trash. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { TrashCustomFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // string | The ID of a custom field.
    id: id_example,
  } satisfies TrashCustomFieldRequest;

  try {
    const data = await api.trashCustomField(body);
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
| **id** | `string` | The ID of a custom field. | [Defaults to `undefined`] |

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
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomField

> any updateCustomField(fieldId, updateCustomFieldDetails)

Update custom field

Updates a custom field.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueFieldsApi,
} from 'jira-cloud-api';
import type { UpdateCustomFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueFieldsApi(config);

  const body = {
    // string | The ID of the custom field.
    fieldId: fieldId_example,
    // UpdateCustomFieldDetails | The custom field update details.
    updateCustomFieldDetails: {"description":"Select the manager and the corresponding employee.","name":"Managers and employees list","searcherKey":"com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher"},
  } satisfies UpdateCustomFieldRequest;

  try {
    const data = await api.updateCustomField(body);
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
| **updateCustomFieldDetails** | [UpdateCustomFieldDetails](UpdateCustomFieldDetails.md) | The custom field update details. | |

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
| **404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

