# SprintApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSprint**](SprintApi.md#createsprintoperation) | **POST** /rest/agile/1.0/sprint | Create sprint |
| [**deleteProperty**](SprintApi.md#deleteproperty) | **DELETE** /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey} | Delete property |
| [**deleteSprint**](SprintApi.md#deletesprint) | **DELETE** /rest/agile/1.0/sprint/{sprintId} | Delete sprint |
| [**getIssuesForSprint**](SprintApi.md#getissuesforsprint) | **GET** /rest/agile/1.0/sprint/{sprintId}/issue | Get issues for sprint |
| [**getPropertiesKeys**](SprintApi.md#getpropertieskeys) | **GET** /rest/agile/1.0/sprint/{sprintId}/properties | Get properties keys |
| [**getProperty**](SprintApi.md#getproperty) | **GET** /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey} | Get property |
| [**getSprint**](SprintApi.md#getsprint) | **GET** /rest/agile/1.0/sprint/{sprintId} | Get sprint |
| [**moveIssuesToSprintAndRank**](SprintApi.md#moveissuestosprintandrank) | **POST** /rest/agile/1.0/sprint/{sprintId}/issue | Move issues to sprint and rank |
| [**partiallyUpdateSprint**](SprintApi.md#partiallyupdatesprint) | **POST** /rest/agile/1.0/sprint/{sprintId} | Partially update sprint |
| [**setProperty**](SprintApi.md#setproperty) | **PUT** /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey} | Set property |
| [**swapSprint**](SprintApi.md#swapsprintoperation) | **POST** /rest/agile/1.0/sprint/{sprintId}/swap | Swap sprint |
| [**updateSprint**](SprintApi.md#updatesprintoperation) | **PUT** /rest/agile/1.0/sprint/{sprintId} | Update sprint |



## createSprint

> createSprint(createSprintRequest)

Create sprint

Creates a future sprint. Sprint name and origin board id are required. Start date, end date, and goal are optional.  Note that the sprint name is trimmed. Also, when starting sprints from the UI, the \&quot;endDate\&quot; set through this call is ignored and instead the last sprint\&#39;s duration is used to fill the form.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { CreateSprintOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // CreateSprintRequest
    createSprintRequest: {"endDate":"2015-04-20T01:22:00.000+10:00","goal":"sprint 1 goal","name":"sprint 1","originBoardId":5,"startDate":"2015-04-11T15:22:00.000+10:00"},
  } satisfies CreateSprintOperationRequest;

  try {
    const data = await api.createSprint(body);
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
| **createSprintRequest** | [CreateSprintRequest](CreateSprintRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created sprint |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProperty

> deleteProperty(sprintId, propertyKey)

Delete property

Removes the property from the sprint identified by the id. Ths user removing the property is required to have permissions to modify the sprint.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { DeletePropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // string | the ID of the sprint from which the property will be removed.
    sprintId: sprintId_example,
    // string | the key of the property to remove.
    propertyKey: propertyKey_example,
  } satisfies DeletePropertyRequest;

  try {
    const data = await api.deleteProperty(body);
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
| **sprintId** | `string` | the ID of the sprint from which the property will be removed. | [Defaults to `undefined`] |
| **propertyKey** | `string` | the key of the property to remove. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the sprint property was removed successfully. |  -  |
| **400** | Returned if the sprintId is invalid (negative or not a number). |  -  |
| **401** | Returned if the calling user is not authenticated. |  -  |
| **403** | Returned if the calling user does not have permission to modify the sprint. |  -  |
| **404** | Returned if the sprint with given id does not exist or if the property with given key is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSprint

> deleteSprint(sprintId)

Delete sprint

Deletes a sprint. Once a sprint is deleted, all open issues in the sprint will be moved to the backlog.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { DeleteSprintRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // number | The ID of the sprint to delete.
    sprintId: 789,
  } satisfies DeleteSprintRequest;

  try {
    const data = await api.deleteSprint(body);
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
| **sprintId** | `number` | The ID of the sprint to delete. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the sprint was deleted successfully |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license or does not have permission to delete sprints. |  -  |
| **404** | Returned if the sprint does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuesForSprint

> getIssuesForSprint(sprintId, startAt, maxResults, jql, validateQuery, fields, expand)

Get issues for sprint

Returns all issues in a sprint, for a given sprint ID. This only includes issues that the user has permission to view. By default, the returned issues are ordered by rank.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { GetIssuesForSprintRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // number | The ID of the sprint that contains the requested issues.
    sprintId: 789,
    // number | The starting index of the returned issues. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of issues to return per page. See the \'Pagination\' section at the top of this page for more details. Note, the total number of issues returned is limited by the property \'jira.search.views.default.max\' in your Jira instance. If you exceed this limit, your results will be truncated. (optional)
    maxResults: 56,
    // string | Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues.   Note that `username` and `userkey` can\'t be used as search terms for this parameter due to privacy reasons. Use `accountId` instead. (optional)
    jql: jql_example,
    // boolean | Specifies whether to validate the JQL query or not. Default: true. (optional)
    validateQuery: true,
    // Array<object> | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. (optional)
    fields: ...,
    // string | A comma-separated list of the parameters to expand. (optional)
    expand: expand_example,
  } satisfies GetIssuesForSprintRequest;

  try {
    const data = await api.getIssuesForSprint(body);
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
| **sprintId** | `number` | The ID of the sprint that contains the requested issues. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned issues. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of issues to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. Note, the total number of issues returned is limited by the property \&#39;jira.search.views.default.max\&#39; in your Jira instance. If you exceed this limit, your results will be truncated. | [Optional] [Defaults to `undefined`] |
| **jql** | `string` | Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues.   Note that &#x60;username&#x60; and &#x60;userkey&#x60; can\&#39;t be used as search terms for this parameter due to privacy reasons. Use &#x60;accountId&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **validateQuery** | `boolean` | Specifies whether to validate the JQL query or not. Default: true. | [Optional] [Defaults to `undefined`] |
| **fields** | `Array<object>` | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. | [Optional] |
| **expand** | `string` | A comma-separated list of the parameters to expand. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested issues, at the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if sprint does not exist or the user cannot view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPropertiesKeys

> getPropertiesKeys(sprintId)

Get properties keys

Returns the keys of all properties for the sprint identified by the id. The user who retrieves the property keys is required to have permissions to view the sprint.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { GetPropertiesKeysRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // string | the ID of the sprint from which property keys will be returned.
    sprintId: sprintId_example,
  } satisfies GetPropertiesKeysRequest;

  try {
    const data = await api.getPropertiesKeys(body);
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
| **sprintId** | `string` | the ID of the sprint from which property keys will be returned. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the sprint with given id exists. |  -  |
| **400** | Returned if the sprintId is invalid (negative or not a number). |  -  |
| **401** | Returned if the calling user is not authenticated. |  -  |
| **403** | Returned if the calling user does not have permission to view the sprint. |  -  |
| **404** | Returned if the sprint with given id does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProperty

> getProperty(sprintId, propertyKey)

Get property

Returns the value of the property with a given key from the sprint identified by the provided id. The user who retrieves the property is required to have permissions to view the sprint.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { GetPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // string | the ID of the sprint from which the property will be returned.
    sprintId: sprintId_example,
    // string | the key of the property to return.
    propertyKey: propertyKey_example,
  } satisfies GetPropertyRequest;

  try {
    const data = await api.getProperty(body);
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
| **sprintId** | `string` | the ID of the sprint from which the property will be returned. | [Defaults to `undefined`] |
| **propertyKey** | `string` | the key of the property to return. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the sprint exists and the property was found. |  -  |
| **400** | Returned if the sprintId is invalid (negative or not a number). |  -  |
| **401** | Returned if the calling user is not authenticated. |  -  |
| **403** | Returned if the calling user does not have permission to view the sprint. |  -  |
| **404** | Returned if the sprint with a given id does not exist or if the property with given key is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSprint

> getSprint(sprintId)

Get sprint

Returns the sprint for a given sprint ID. The sprint will only be returned if the user can view the board that the sprint was created on, or view at least one of the issues in the sprint.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { GetSprintRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // number | The ID of the requested sprint.
    sprintId: 789,
  } satisfies GetSprintRequest;

  try {
    const data = await api.getSprint(body);
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
| **sprintId** | `number` | The ID of the requested sprint. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested sprint. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the sprint does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveIssuesToSprintAndRank

> moveIssuesToSprintAndRank(sprintId, moveIssuesToBacklogForBoardRequest)

Move issues to sprint and rank

Moves issues to a sprint, for a given sprint ID. Issues can only be moved to open or active sprints. The maximum number of issues that can be moved in one operation is 50.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { MoveIssuesToSprintAndRankRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // number | The ID of the sprint that you want to assign issues to.
    sprintId: 789,
    // MoveIssuesToBacklogForBoardRequest
    moveIssuesToBacklogForBoardRequest: {"issues":["PR-1","10001","PR-3"],"rankBeforeIssue":"PR-4","rankCustomFieldId":10521},
  } satisfies MoveIssuesToSprintAndRankRequest;

  try {
    const data = await api.moveIssuesToSprintAndRank(body);
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
| **sprintId** | `number` | The ID of the sprint that you want to assign issues to. | [Defaults to `undefined`] |
| **moveIssuesToBacklogForBoardRequest** | [MoveIssuesToBacklogForBoardRequest](MoveIssuesToBacklogForBoardRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Empty response is returned if operation was successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license or does not have permission to assign issues. |  -  |
| **404** | Returned if the sprint does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partiallyUpdateSprint

> partiallyUpdateSprint(sprintId, updateSprintRequest)

Partially update sprint

Performs a partial update of a sprint. A partial update means that fields not present in the request JSON will not be updated.  Notes:   *  For closed sprints, only the name and goal can be updated; changes to other fields will be ignored.  *  A sprint can be started by updating the state to \&#39;active\&#39;. This requires the sprint to be in the \&#39;future\&#39; state and have a startDate and endDate set.  *  A sprint can be completed by updating the state to \&#39;closed\&#39;. This action requires the sprint to be in the \&#39;active\&#39; state. This sets the completeDate to the time of the request.  *  Other changes to state are not allowed.  *  The completeDate field cannot be updated manually.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { PartiallyUpdateSprintRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // number | The ID of the sprint to update.
    sprintId: 789,
    // UpdateSprintRequest
    updateSprintRequest: {"name":"new name"},
  } satisfies PartiallyUpdateSprintRequest;

  try {
    const data = await api.partiallyUpdateSprint(body);
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
| **sprintId** | `number` | The ID of the sprint to update. | [Defaults to `undefined`] |
| **updateSprintRequest** | [UpdateSprintRequest](UpdateSprintRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated sprint |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the sprint does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setProperty

> any setProperty(sprintId, propertyKey, body)

Set property

Sets the value of the specified sprint\&#39;s property.  You can use this resource to store a custom data against the sprint identified by the id. The user who stores the data is required to have permissions to modify the sprint.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { SetPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // string | the ID of the sprint on which the property will be set.
    sprintId: sprintId_example,
    // string | the key of the sprint\'s property. The maximum length of the key is 255 bytes.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: ...,
  } satisfies SetPropertyRequest;

  try {
    const data = await api.setProperty(body);
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
| **sprintId** | `string` | the ID of the sprint on which the property will be set. | [Defaults to `undefined`] |
| **propertyKey** | `string` | the key of the sprint\&#39;s property. The maximum length of the key is 255 bytes. | [Defaults to `undefined`] |
| **body** | `any` | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes. | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the sprint property is successfully updated. |  -  |
| **201** | Returned if the sprint property is successfully created. |  -  |
| **400** | Returned if the sprintId is invalid (negative or not a number). |  -  |
| **401** | Returned if the calling user is not authenticated. |  -  |
| **403** | Returned if the calling user does not have permission to edit the sprint |  -  |
| **404** | Returned if the sprint with given id does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## swapSprint

> swapSprint(sprintId, swapSprintRequest)

Swap sprint

Swap the position of the sprint with the second sprint.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { SwapSprintOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // number | The ID of the sprint to swap.
    sprintId: 789,
    // SwapSprintRequest
    swapSprintRequest: {"sprintToSwapWith":3},
  } satisfies SwapSprintOperationRequest;

  try {
    const data = await api.swapSprint(body);
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
| **sprintId** | `number` | The ID of the sprint to swap. | [Defaults to `undefined`] |
| **swapSprintRequest** | [SwapSprintRequest](SwapSprintRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the sprint swap was performed successfully |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license or does not have permission to at least one sprint. |  -  |
| **404** | Returned if at least one sprint does not exist or user does not have permission to view to at least one sprint. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSprint

> updateSprint(sprintId, updateSprintRequest)

Update sprint

Performs a full update of a sprint. A full update means that the result will be exactly the same as the request body. Any fields not present in the request JSON will be set to null.  Notes:   *  For closed sprints, only the name and goal can be updated; changes to other fields will be ignored.  *  A sprint can be started by updating the state to \&#39;active\&#39;. This requires the sprint to be in the \&#39;future\&#39; state and have a startDate and endDate set.  *  A sprint can be completed by updating the state to \&#39;closed\&#39;. This action requires the sprint to be in the \&#39;active\&#39; state. This sets the completeDate to the time of the request.  *  Other changes to state are not allowed.  *  The completeDate field cannot be updated manually.

### Example

```ts
import {
  Configuration,
  SprintApi,
} from 'jira-software-cloud-api';
import type { UpdateSprintOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SprintApi(config);

  const body = {
    // number | the ID of the sprint to update.
    sprintId: 789,
    // UpdateSprintRequest
    updateSprintRequest: {"completeDate":"2015-04-20T11:11:28.008+10:00","endDate":"2015-04-16T14:01:00.000+10:00","goal":"sprint 1 goal","name":"sprint 1","startDate":"2015-04-11T15:36:00.000+10:00","state":"closed"},
  } satisfies UpdateSprintOperationRequest;

  try {
    const data = await api.updateSprint(body);
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
| **sprintId** | `number` | the ID of the sprint to update. | [Defaults to `undefined`] |
| **updateSprintRequest** | [UpdateSprintRequest](UpdateSprintRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated sprint |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the sprint does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

