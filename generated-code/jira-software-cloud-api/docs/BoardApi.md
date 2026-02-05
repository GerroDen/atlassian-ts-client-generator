# BoardApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBoard**](BoardApi.md#createboardoperation) | **POST** /rest/agile/1.0/board | Create board |
| [**deleteBoard**](BoardApi.md#deleteboard) | **DELETE** /rest/agile/1.0/board/{boardId} | Delete board |
| [**deleteBoardProperty**](BoardApi.md#deleteboardproperty) | **DELETE** /rest/agile/1.0/board/{boardId}/properties/{propertyKey} | Delete board property |
| [**getAllBoards**](BoardApi.md#getallboards) | **GET** /rest/agile/1.0/board | Get all boards |
| [**getAllQuickFilters**](BoardApi.md#getallquickfilters) | **GET** /rest/agile/1.0/board/{boardId}/quickfilter | Get all quick filters |
| [**getAllSprints**](BoardApi.md#getallsprints) | **GET** /rest/agile/1.0/board/{boardId}/sprint | Get all sprints |
| [**getAllVersions**](BoardApi.md#getallversions) | **GET** /rest/agile/1.0/board/{boardId}/version | Get all versions |
| [**getBoard**](BoardApi.md#getboard) | **GET** /rest/agile/1.0/board/{boardId} | Get board |
| [**getBoardByFilterId**](BoardApi.md#getboardbyfilterid) | **GET** /rest/agile/1.0/board/filter/{filterId} | Get board by filter id |
| [**getBoardIssuesForEpic**](BoardApi.md#getboardissuesforepic) | **GET** /rest/agile/1.0/board/{boardId}/epic/{epicId}/issue | Get board issues for epic |
| [**getBoardIssuesForSprint**](BoardApi.md#getboardissuesforsprint) | **GET** /rest/agile/1.0/board/{boardId}/sprint/{sprintId}/issue | Get board issues for sprint |
| [**getBoardProperty**](BoardApi.md#getboardproperty) | **GET** /rest/agile/1.0/board/{boardId}/properties/{propertyKey} | Get board property |
| [**getBoardPropertyKeys**](BoardApi.md#getboardpropertykeys) | **GET** /rest/agile/1.0/board/{boardId}/properties | Get board property keys |
| [**getConfiguration**](BoardApi.md#getconfiguration) | **GET** /rest/agile/1.0/board/{boardId}/configuration | Get configuration |
| [**getEpics**](BoardApi.md#getepics) | **GET** /rest/agile/1.0/board/{boardId}/epic | Get epics |
| [**getFeaturesForBoard**](BoardApi.md#getfeaturesforboard) | **GET** /rest/agile/1.0/board/{boardId}/features | Get features for board |
| [**getIssuesForBacklog**](BoardApi.md#getissuesforbacklog) | **GET** /rest/agile/1.0/board/{boardId}/backlog | Get issues for backlog |
| [**getIssuesForBoard**](BoardApi.md#getissuesforboard) | **GET** /rest/agile/1.0/board/{boardId}/issue | Get issues for board |
| [**getIssuesWithoutEpicForBoard**](BoardApi.md#getissueswithoutepicforboard) | **GET** /rest/agile/1.0/board/{boardId}/epic/none/issue | Get issues without epic for board |
| [**getProjects**](BoardApi.md#getprojects) | **GET** /rest/agile/1.0/board/{boardId}/project | Get projects |
| [**getProjectsFull**](BoardApi.md#getprojectsfull) | **GET** /rest/agile/1.0/board/{boardId}/project/full | Get projects full |
| [**getQuickFilter**](BoardApi.md#getquickfilter) | **GET** /rest/agile/1.0/board/{boardId}/quickfilter/{quickFilterId} | Get quick filter |
| [**getReportsForBoard**](BoardApi.md#getreportsforboard) | **GET** /rest/agile/1.0/board/{boardId}/reports | Get reports for board |
| [**moveIssuesToBoard**](BoardApi.md#moveissuestoboard) | **POST** /rest/agile/1.0/board/{boardId}/issue | Move issues to board |
| [**setBoardProperty**](BoardApi.md#setboardproperty) | **PUT** /rest/agile/1.0/board/{boardId}/properties/{propertyKey} | Set board property |
| [**toggleFeatures**](BoardApi.md#togglefeaturesoperation) | **PUT** /rest/agile/1.0/board/{boardId}/features | Toggle features |



## createBoard

> GetAllBoards200ResponseValuesInner createBoard(createBoardRequest)

Create board

Creates a new board. Board name, type and filter ID is required.   *  &#x60;name&#x60; \\- Must be less than 255 characters.  *  &#x60;type&#x60; \\- Valid values: scrum, kanban  *  &#x60;filterId&#x60; \\- ID of a filter that the user has permissions to view. Note, if the user does not have the \&#39;Create shared objects\&#39; permission and tries to create a shared board, a private board will be created instead (remember that board sharing depends on the filter sharing).  *  &#x60;location&#x60; \\- The container that the board will be located in. &#x60;location&#x60; must include the &#x60;type&#x60; property (Valid values: project, user). If choosing \&#39;project\&#39;, then a project must be specified by a &#x60;projectKeyOrId&#x60; property in &#x60;location&#x60;. If choosing \&#39;user\&#39;, the current user is chosen by default. The &#x60;projectKeyOrId&#x60; property should not be provided.  Note:   *  If you want to create a new project with an associated board, use the [Jira platform REST API](https://docs.atlassian.com/jira/REST/latest). For more information, see the [Create project](#api-rest-api-3-project-post) method. The &#x60;projectTypeKey&#x60; for software boards must be \&#39;software\&#39; and the &#x60;projectTemplateKey&#x60; must be either &#x60;com.pyxis.greenhopper.jira:gh-kanban-template&#x60; or &#x60;com.pyxis.greenhopper.jira:gh-scrum-template&#x60;.  *  You can create a filter using the [Jira REST API](https://docs.atlassian.com/jira/REST/latest). For more information, see the [Create filter](#api-rest-api-3-filter-post) method.  *  If you do not ORDER BY the Rank field for the filter of your board, you will not be able to reorder issues on the board.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { CreateBoardOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // CreateBoardRequest
    createBoardRequest: {"filterId":10040,"location":{"projectKeyOrId":"10000","type":"project"},"name":"scrum board","type":"scrum"},
  } satisfies CreateBoardOperationRequest;

  try {
    const data = await api.createBoard(body);
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
| **createBoardRequest** | [CreateBoardRequest](CreateBoardRequest.md) |  | |

### Return type

[**GetAllBoards200ResponseValuesInner**](GetAllBoards200ResponseValuesInner.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns the created board. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBoard

> deleteBoard(boardId)

Delete board

Deletes the board. Admin without the view permission can still remove the board.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { DeleteBoardRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | ID of the board to be deleted
    boardId: 789,
  } satisfies DeleteBoardRequest;

  try {
    const data = await api.deleteBoard(body);
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
| **boardId** | `number` | ID of the board to be deleted | [Defaults to `undefined`] |

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
| **204** | Returned if the board has been successfully removed. |  -  |
| **403** | Returned if the user does not a have valid license, or when the user does not have the permission to delete the board, or when the user tried to delete a next-gen board. The user has to be a Jira Administrator or a board administrator to remove the board. Next-gen boards cannot be deleted, because next-gen software projects must have a board. |  -  |
| **404** | Returned if a board with the given ID does not exist or the user does not have the permission to view the board. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBoardProperty

> deleteBoardProperty(boardId, propertyKey)

Delete board property

Removes the property from the board identified by the id. Ths user removing the property is required to have permissions to modify the board.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { DeleteBoardPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // string | the id of the board from which the property will be removed.
    boardId: boardId_example,
    // string | the key of the property to remove.
    propertyKey: propertyKey_example,
  } satisfies DeleteBoardPropertyRequest;

  try {
    const data = await api.deleteBoardProperty(body);
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
| **boardId** | `string` | the id of the board from which the property will be removed. | [Defaults to `undefined`] |
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
| **204** | Returned if the board property was removed successfully. |  -  |
| **400** | Returned if the boardId is invalid (negative or not a number). |  -  |
| **401** | Returned if the calling user is not authenticated. |  -  |
| **404** | Returned if the board with given id does not exist, or if the property with given key is not found, or the user doesn\&#39;t have permissions to see it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllBoards

> GetAllBoards200Response getAllBoards(startAt, maxResults, type, name, projectKeyOrId, accountIdLocation, projectLocation, includePrivate, negateLocationFiltering, orderBy, expand, projectTypeLocation, filterId)

Get all boards

Returns all boards. This only includes boards that the user has permission to view.  **Deprecation notice:** The required OAuth 2.0 scopes will be updated on February 15, 2024.   *  &#x60;read:board-scope:jira-software&#x60;, &#x60;read:project:jira&#x60;

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetAllBoardsRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The starting index of the returned boards. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of boards to return per page. See the \'Pagination\' section at the top of this page for more details. (optional)
    maxResults: 56,
    // object | Filters results to boards of the specified types. Valid values: scrum, kanban, simple. (optional)
    type: Object,
    // string | Filters results to boards that match or partially match the specified name. (optional)
    name: name_example,
    // string | Filters results to boards that are relevant to a project. Relevance means that the jql filter defined in board contains a reference to a project. (optional)
    projectKeyOrId: projectKeyOrId_example,
    // string (optional)
    accountIdLocation: accountIdLocation_example,
    // string (optional)
    projectLocation: projectLocation_example,
    // boolean | Appends private boards to the end of the list. The name and type fields are excluded for security reasons. (optional)
    includePrivate: true,
    // boolean | If set to true, negate filters used for querying by location. By default false. (optional)
    negateLocationFiltering: true,
    // 'name' | '-name' | '+name' | Ordering of the results by a given field. If not provided, values will not be sorted. Valid values: name. (optional)
    orderBy: orderBy_example,
    // string | List of fields to expand for each board. Valid values: admins, permissions. (optional)
    expand: expand_example,
    // Array<string> | Filters results to boards that are relevant to a project types. Support Jira Software, Jira Service Management. Valid values: software, service\\_desk. By default software. (optional)
    projectTypeLocation: ...,
    // number | Filters results to boards that are relevant to a filter. Not supported for next-gen boards. (optional)
    filterId: 789,
  } satisfies GetAllBoardsRequest;

  try {
    const data = await api.getAllBoards(body);
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
| **startAt** | `number` | The starting index of the returned boards. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of boards to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `50`] |
| **type** | `object` | Filters results to boards of the specified types. Valid values: scrum, kanban, simple. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Filters results to boards that match or partially match the specified name. | [Optional] [Defaults to `undefined`] |
| **projectKeyOrId** | `string` | Filters results to boards that are relevant to a project. Relevance means that the jql filter defined in board contains a reference to a project. | [Optional] [Defaults to `undefined`] |
| **accountIdLocation** | `string` |  | [Optional] [Defaults to `undefined`] |
| **projectLocation** | `string` |  | [Optional] [Defaults to `undefined`] |
| **includePrivate** | `boolean` | Appends private boards to the end of the list. The name and type fields are excluded for security reasons. | [Optional] [Defaults to `undefined`] |
| **negateLocationFiltering** | `boolean` | If set to true, negate filters used for querying by location. By default false. | [Optional] [Defaults to `undefined`] |
| **orderBy** | `name`, `-name`, `+name` | Ordering of the results by a given field. If not provided, values will not be sorted. Valid values: name. | [Optional] [Defaults to `undefined`] [Enum: name, -name, +name] |
| **expand** | `string` | List of fields to expand for each board. Valid values: admins, permissions. | [Optional] [Defaults to `undefined`] |
| **projectTypeLocation** | `Array<string>` | Filters results to boards that are relevant to a project types. Support Jira Software, Jira Service Management. Valid values: software, service\\_desk. By default software. | [Optional] |
| **filterId** | `number` | Filters results to boards that are relevant to a filter. Not supported for next-gen boards. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllBoards200Response**](GetAllBoards200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested boards, at the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have valid license. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllQuickFilters

> GetAllQuickFilters200Response getAllQuickFilters(boardId, startAt, maxResults)

Get all quick filters

Returns all quick filters from a board, for a given board ID.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetAllQuickFiltersRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains the requested quick filters.
    boardId: 789,
    // number | The starting index of the returned quick filters. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of sprints to return per page. See the \'Pagination\' section at the top of this page for more details. (optional)
    maxResults: 56,
  } satisfies GetAllQuickFiltersRequest;

  try {
    const data = await api.getAllQuickFilters(body);
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
| **boardId** | `number` | The ID of the board that contains the requested quick filters. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned quick filters. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of sprints to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllQuickFilters200Response**](GetAllQuickFilters200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested quick filters, at the specified page of the results. Quick filters will be ordered first by position. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllSprints

> getAllSprints(boardId, startAt, maxResults, state)

Get all sprints

Returns all sprints from a board, for a given board ID. This only includes sprints that the user has permission to view.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetAllSprintsRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains the requested sprints.
    boardId: 789,
    // number | The starting index of the returned sprints. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of sprints to return per page. See the \'Pagination\' section at the top of this page for more details. (optional)
    maxResults: 56,
    // object | Filters results to sprints in specified states. Valid values: future, active, closed. You can define multiple states separated by commas, e.g. state=active,closed (optional)
    state: Object,
  } satisfies GetAllSprintsRequest;

  try {
    const data = await api.getAllSprints(body);
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
| **boardId** | `number` | The ID of the board that contains the requested sprints. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned sprints. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of sprints to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **state** | `object` | Filters results to sprints in specified states. Valid values: future, active, closed. You can define multiple states separated by commas, e.g. state&#x3D;active,closed | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns the requested sprints, at the specified page of the results. Sprints will be ordered first by state (i.e. closed, active, future) then by their position in the backlog. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllVersions

> getAllVersions(boardId, startAt, maxResults, released)

Get all versions

Returns all versions from a board, for a given board ID. This only includes versions that the user has permission to view. Note, if the user does not have permission to view the board, no versions will be returned at all. Returned versions are ordered by the name of the project from which they belong and then by sequence defined by user.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetAllVersionsRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains the requested versions.
    boardId: 789,
    // number | The starting index of the returned versions. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of versions to return per page. See the \'Pagination\' section at the top of this page for more details. (optional)
    maxResults: 56,
    // string | Filters results to versions that are either released or unreleased. Valid values: true, false. (optional)
    released: released_example,
  } satisfies GetAllVersionsRequest;

  try {
    const data = await api.getAllVersions(body);
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
| **boardId** | `number` | The ID of the board that contains the requested versions. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned versions. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of versions to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **released** | `string` | Filters results to versions that are either released or unreleased. Valid values: true, false. | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns the requested versions, at the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBoard

> GetAllBoards200ResponseValuesInner getBoard(boardId)

Get board

Returns the board for the given board ID. This board will only be returned if the user has permission to view it. Admins without the view permission will see the board as a private one, so will see only a subset of the board\&#39;s data (board location for instance).

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetBoardRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the requested board.
    boardId: 789,
  } satisfies GetBoardRequest;

  try {
    const data = await api.getBoard(body);
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
| **boardId** | `number` | The ID of the requested board. | [Defaults to `undefined`] |

### Return type

[**GetAllBoards200ResponseValuesInner**](GetAllBoards200ResponseValuesInner.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested board. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBoardByFilterId

> GetBoardByFilterId200Response getBoardByFilterId(filterId, startAt, maxResults)

Get board by filter id

Returns any boards which use the provided filter id. This method can be executed by users without a valid software license in order to find which boards are using a particular filter.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetBoardByFilterIdRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | Filters results to boards that are relevant to a filter. Not supported for next-gen boards.
    filterId: 789,
    // number | The starting index of the returned boards. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of boards to return per page. Default: 50. See the \'Pagination\' section at the top of this page for more details. (optional)
    maxResults: 56,
  } satisfies GetBoardByFilterIdRequest;

  try {
    const data = await api.getBoardByFilterId(body);
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
| **filterId** | `number` | Filters results to boards that are relevant to a filter. Not supported for next-gen boards. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned boards. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of boards to return per page. Default: 50. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetBoardByFilterId200Response**](GetBoardByFilterId200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested boards, at the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBoardIssuesForEpic

> getBoardIssuesForEpic(boardId, epicId, startAt, maxResults, jql, validateQuery, fields, expand)

Get board issues for epic

Returns all issues that belong to an epic on the board, for the given epic ID and the board ID. This only includes issues that the user has permission to view. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned issues are ordered by rank.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetBoardIssuesForEpicRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains the requested issues.
    boardId: 789,
    // number | The ID of the epic that contains the requested issues.
    epicId: 789,
    // number | The starting index of the returned issues. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of issues to return per page. Default: 50. See the \'Pagination\' section at the top of this page for more details. Note, the total number of issues returned is limited by the property \'jira.search.views.default.max\' in your Jira instance. If you exceed this limit, your results will be truncated. (optional)
    maxResults: 56,
    // string | Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues. (optional)
    jql: jql_example,
    // boolean | Specifies whether to validate the JQL query or not. Default: true. (optional)
    validateQuery: true,
    // Array<object> | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. (optional)
    fields: ...,
    // string | A comma-separated list of the parameters to expand. (optional)
    expand: expand_example,
  } satisfies GetBoardIssuesForEpicRequest;

  try {
    const data = await api.getBoardIssuesForEpic(body);
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
| **boardId** | `number` | The ID of the board that contains the requested issues. | [Defaults to `undefined`] |
| **epicId** | `number` | The ID of the epic that contains the requested issues. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned issues. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of issues to return per page. Default: 50. See the \&#39;Pagination\&#39; section at the top of this page for more details. Note, the total number of issues returned is limited by the property \&#39;jira.search.views.default.max\&#39; in your Jira instance. If you exceed this limit, your results will be truncated. | [Optional] [Defaults to `undefined`] |
| **jql** | `string` | Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues. | [Optional] [Defaults to `undefined`] |
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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBoardIssuesForSprint

> getBoardIssuesForSprint(boardId, sprintId, startAt, maxResults, jql, validateQuery, fields, expand)

Get board issues for sprint

Get all issues you have access to that belong to the sprint from the board. Issue returned from this resource contains additional fields like: sprint, closedSprints, flagged and epic. Issues are returned ordered by rank. JQL order has higher priority than default rank.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetBoardIssuesForSprintRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains requested issues.
    boardId: 789,
    // number | The ID of the sprint that contains requested issues.
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
  } satisfies GetBoardIssuesForSprintRequest;

  try {
    const data = await api.getBoardIssuesForSprint(body);
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
| **boardId** | `number` | The ID of the board that contains requested issues. | [Defaults to `undefined`] |
| **sprintId** | `number` | The ID of the sprint that contains requested issues. | [Defaults to `undefined`] |
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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBoardProperty

> getBoardProperty(boardId, propertyKey)

Get board property

Returns the value of the property with a given key from the board identified by the provided id. The user who retrieves the property is required to have permissions to view the board.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetBoardPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // string | the ID of the board from which the property will be returned.
    boardId: boardId_example,
    // string | the key of the property to return.
    propertyKey: propertyKey_example,
  } satisfies GetBoardPropertyRequest;

  try {
    const data = await api.getBoardProperty(body);
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
| **boardId** | `string` | the ID of the board from which the property will be returned. | [Defaults to `undefined`] |
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
| **200** | Returned if the board exists and the property was found. |  -  |
| **400** | Returned if the boardId is invalid (negative or not a number). |  -  |
| **401** | Returned if the calling user is not authenticated. |  -  |
| **404** | Returned if the board with given id does not exist, or if the property with given key is not found, or the user doesn\&#39;t have permissions to see it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBoardPropertyKeys

> getBoardPropertyKeys(boardId)

Get board property keys

Returns the keys of all properties for the board identified by the id. The user who retrieves the property keys is required to have permissions to view the board.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetBoardPropertyKeysRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // string | the ID of the board from which property keys will be returned.
    boardId: boardId_example,
  } satisfies GetBoardPropertyKeysRequest;

  try {
    const data = await api.getBoardPropertyKeys(body);
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
| **boardId** | `string` | the ID of the board from which property keys will be returned. | [Defaults to `undefined`] |

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
| **200** | Returned if the board with given id exists. |  -  |
| **400** | Returned if the boardId is invalid (negative or not a number). |  -  |
| **401** | Returned if the calling user is not authenticated. |  -  |
| **404** | Returned if the board with given id does not exist, or if the property with given key is not found, or the user doesn\&#39;t have permissions to see it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfiguration

> GetConfiguration200Response getConfiguration(boardId)

Get configuration

Get the board configuration. The response contains the following fields:   *  &#x60;id&#x60; \\- ID of the board.  *  &#x60;name&#x60; \\- Name of the board.  *  &#x60;filter&#x60; \\- Reference to the filter used by the given board.  *  &#x60;location&#x60; \\- Reference to the container that the board is located in. Includes the container type (Valid values: project, user).  *  &#x60;subQuery&#x60; (Kanban only) - JQL subquery used by the given board.  *  &#x60;columnConfig&#x60; \\- The column configuration lists the columns for the board, in the order defined in the column configuration. For each column, it shows the issue status mapping as well as the constraint type (Valid values: none, issueCount, issueCountExclSubs) for the min/max number of issues. Note, the last column with statuses mapped to it is treated as the \&quot;Done\&quot; column, which means that issues in that column will be marked as already completed.  *  &#x60;estimation&#x60; (Scrum only) - Contains information about type of estimation used for the board. Valid values: none, issueCount, field. If the estimation type is \&quot;field\&quot;, the ID and display name of the field used for estimation is also returned. Note, estimates for an issue can be updated by a PUT /rest/api/3/issue/\\{issueIdOrKey\\} request, however the fields must be on the screen. \&quot;timeoriginalestimate\&quot; field will never be on the screen, so in order to update it \&quot;originalEstimate\&quot; in \&quot;timetracking\&quot; field should be updated.  *  &#x60;ranking&#x60; \\- Contains information about custom field used for ranking in the given board.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetConfigurationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board for which configuration is requested.
    boardId: 789,
  } satisfies GetConfigurationRequest;

  try {
    const data = await api.getConfiguration(body);
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
| **boardId** | `number` | The ID of the board for which configuration is requested. | [Defaults to `undefined`] |

### Return type

[**GetConfiguration200Response**](GetConfiguration200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the configuration of the board for given boardId. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if user does not a have valid license. |  -  |
| **404** | Returned if board does not exist or the user cannot view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEpics

> getEpics(boardId, startAt, maxResults, done)

Get epics

Returns all epics from the board, for the given board ID. This only includes epics that the user has permission to view. Note, if the user does not have permission to view the board, no epics will be returned at all.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetEpicsRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains the requested epics.
    boardId: 789,
    // number | The starting index of the returned epics. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of epics to return per page. See the \'Pagination\' section at the top of this page for more details. (optional)
    maxResults: 56,
    // string | Filters results to epics that are either done or not done. Valid values: true, false. (optional)
    done: done_example,
  } satisfies GetEpicsRequest;

  try {
    const data = await api.getEpics(body);
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
| **boardId** | `number` | The ID of the board that contains the requested epics. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned epics. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of epics to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **done** | `string` | Filters results to epics that are either done or not done. Valid values: true, false. | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns the requested epics, at the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have valid license. |  -  |
| **404** | Returned if board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFeaturesForBoard

> GetFeaturesForBoard200Response getFeaturesForBoard(boardId)

Get features for board



### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetFeaturesForBoardRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number
    boardId: 789,
  } satisfies GetFeaturesForBoardRequest;

  try {
    const data = await api.getFeaturesForBoard(body);
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
| **boardId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**GetFeaturesForBoard200Response**](GetFeaturesForBoard200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuesForBacklog

> SearchResults getIssuesForBacklog(boardId, startAt, maxResults, jql, validateQuery, fields, expand)

Get issues for backlog

Returns all issues from the board\&#39;s backlog, for the given board ID. This only includes issues that the user has permission to view. The backlog contains incomplete issues that are not assigned to any future or active sprint. Note, if the user does not have permission to view the board, no issues will be returned at all. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned issues are ordered by rank.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetIssuesForBacklogRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that has the backlog containing the requested issues.
    boardId: 789,
    // number | The starting index of the returned issues. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of issues to return per page. Default: 50. See the \'Pagination\' section at the top of this page for more details. Note, the total number of issues returned is limited by the property \'jira.search.views.default.max\' in your Jira instance. If you exceed this limit, your results will be truncated. (optional)
    maxResults: 56,
    // string | Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues.   Note that `username` and `userkey` can\'t be used as search terms for this parameter due to privacy reasons. Use `accountId` instead. (optional)
    jql: jql_example,
    // boolean | Specifies whether to validate the JQL query or not. Default: true. (optional)
    validateQuery: true,
    // Array<object> | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. (optional)
    fields: ...,
    // string | This parameter is currently not used. (optional)
    expand: expand_example,
  } satisfies GetIssuesForBacklogRequest;

  try {
    const data = await api.getIssuesForBacklog(body);
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
| **boardId** | `number` | The ID of the board that has the backlog containing the requested issues. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned issues. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of issues to return per page. Default: 50. See the \&#39;Pagination\&#39; section at the top of this page for more details. Note, the total number of issues returned is limited by the property \&#39;jira.search.views.default.max\&#39; in your Jira instance. If you exceed this limit, your results will be truncated. | [Optional] [Defaults to `undefined`] |
| **jql** | `string` | Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues.   Note that &#x60;username&#x60; and &#x60;userkey&#x60; can\&#39;t be used as search terms for this parameter due to privacy reasons. Use &#x60;accountId&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **validateQuery** | `boolean` | Specifies whether to validate the JQL query or not. Default: true. | [Optional] [Defaults to `undefined`] |
| **fields** | `Array<object>` | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. | [Optional] |
| **expand** | `string` | This parameter is currently not used. | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested issues, at the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuesForBoard

> SearchResults getIssuesForBoard(boardId, startAt, maxResults, jql, validateQuery, fields, expand)

Get issues for board

Returns all issues from a board, for a given board ID. This only includes issues that the user has permission to view. An issue belongs to the board if its status is mapped to the board\&#39;s column. Epic issues do not belongs to the scrum boards. Note, if the user does not have permission to view the board, no issues will be returned at all. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned issues are ordered by rank.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetIssuesForBoardRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains the requested issues.
    boardId: 789,
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
    // string | This parameter is currently not used. (optional)
    expand: expand_example,
  } satisfies GetIssuesForBoardRequest;

  try {
    const data = await api.getIssuesForBoard(body);
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
| **boardId** | `number` | The ID of the board that contains the requested issues. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned issues. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of issues to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. Note, the total number of issues returned is limited by the property \&#39;jira.search.views.default.max\&#39; in your Jira instance. If you exceed this limit, your results will be truncated. | [Optional] [Defaults to `undefined`] |
| **jql** | `string` | Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues.   Note that &#x60;username&#x60; and &#x60;userkey&#x60; can\&#39;t be used as search terms for this parameter due to privacy reasons. Use &#x60;accountId&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **validateQuery** | `boolean` | Specifies whether to validate the JQL query or not. Default: true. | [Optional] [Defaults to `undefined`] |
| **fields** | `Array<object>` | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. | [Optional] |
| **expand** | `string` | This parameter is currently not used. | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested issues, at the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuesWithoutEpicForBoard

> getIssuesWithoutEpicForBoard(boardId, startAt, maxResults, jql, validateQuery, fields, expand)

Get issues without epic for board

Returns all issues that do not belong to any epic on a board, for a given board ID. This only includes issues that the user has permission to view. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned issues are ordered by rank.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetIssuesWithoutEpicForBoardRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains the requested issues.
    boardId: 789,
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
  } satisfies GetIssuesWithoutEpicForBoardRequest;

  try {
    const data = await api.getIssuesWithoutEpicForBoard(body);
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
| **boardId** | `number` | The ID of the board that contains the requested issues. | [Defaults to `undefined`] |
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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the board does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjects

> getProjects(boardId, startAt, maxResults)

Get projects

Returns all projects that are associated with the board, for the given board ID. If the user does not have permission to view the board, no projects will be returned at all. Returned projects are ordered by the name.  A project is associated with a board if the board filter contains reference the project or there is an issue from the project that belongs to the board.  The board filter contains reference the project only if JQL query guarantees that returned issues will be returned from the project set defined in JQL. For instance the query &#x60;project in (ABC, BCD) AND reporter &#x3D; admin&#x60; have reference to ABC and BCD projects but query &#x60;project in (ABC, BCD) OR reporter &#x3D; admin&#x60; doesn\&#39;t have reference to any project.  An issue belongs to the board if its status is mapped to the board\&#39;s column. Epic issues do not belongs to the scrum boards.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetProjectsRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains returned projects.
    boardId: 789,
    // number | The starting index of the returned projects. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of projects to return per page. See the \'Pagination\' section at the top of this page for more details. (optional)
    maxResults: 56,
  } satisfies GetProjectsRequest;

  try {
    const data = await api.getProjects(body);
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
| **boardId** | `number` | The ID of the board that contains returned projects. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned projects. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of projects to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns the board\&#39;s projects, at the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if board does not exist or the user does not have permission to access it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectsFull

> getProjectsFull(boardId)

Get projects full

Returns all projects that are statically associated with the board, for the given board ID. Returned projects are ordered by the name.  A project is associated with a board if the board filter contains reference the project.  The board filter contains reference the project only if JQL query guarantees that returned issues will be returned from the project set defined in JQL. For instance the query &#x60;project in (ABC, BCD) AND reporter &#x3D; admin&#x60; have reference to ABC and BCD projects but query &#x60;project in (ABC, BCD) OR reporter &#x3D; admin&#x60; doesn\&#39;t have reference to any project.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetProjectsFullRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number | The ID of the board that contains returned projects.
    boardId: 789,
  } satisfies GetProjectsFullRequest;

  try {
    const data = await api.getProjectsFull(body);
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
| **boardId** | `number` | The ID of the board that contains returned projects. | [Defaults to `undefined`] |

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
| **200** | Returns the board\&#39;s projects, at the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if board does not exist or the user does not have permission to access it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQuickFilter

> GetAllQuickFilters200ResponseValuesInner getQuickFilter(boardId, quickFilterId)

Get quick filter

Returns the quick filter for a given quick filter ID. The quick filter will only be returned if the user can view the board that the quick filter belongs to.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetQuickFilterRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number
    boardId: 789,
    // number | The ID of the requested quick filter.
    quickFilterId: 789,
  } satisfies GetQuickFilterRequest;

  try {
    const data = await api.getQuickFilter(body);
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
| **boardId** | `number` |  | [Defaults to `undefined`] |
| **quickFilterId** | `number` | The ID of the requested quick filter. | [Defaults to `undefined`] |

### Return type

[**GetAllQuickFilters200ResponseValuesInner**](GetAllQuickFilters200ResponseValuesInner.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the requested quick filter. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the board with given id does not exist or if the quick filter with given id is not found or the user doesn\&#39;t have permissions to see it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReportsForBoard

> GetReportsForBoard200Response getReportsForBoard(boardId)

Get reports for board



### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { GetReportsForBoardRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number
    boardId: 789,
  } satisfies GetReportsForBoardRequest;

  try {
    const data = await api.getReportsForBoard(body);
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
| **boardId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**GetReportsForBoard200Response**](GetReportsForBoard200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveIssuesToBoard

> moveIssuesToBoard(boardId, moveIssuesToBacklogForBoardRequest)

Move issues to board

Move issues from the backog to the board (if they are already in the backlog of that board).   This operation either moves an issue(s) onto a board from the backlog (by adding it to the issueList for the board) Or transitions the issue(s) to the first column for a kanban board with backlog. At most 50 issues may be moved at once.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { MoveIssuesToBoardRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number
    boardId: 789,
    // MoveIssuesToBacklogForBoardRequest
    moveIssuesToBacklogForBoardRequest: {"issues":["PR-1","10001","PR-3"],"rankBeforeIssue":"PR-4","rankCustomFieldId":10521},
  } satisfies MoveIssuesToBoardRequest;

  try {
    const data = await api.moveIssuesToBoard(body);
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
| **boardId** | `number` |  | [Defaults to `undefined`] |
| **moveIssuesToBacklogForBoardRequest** | [MoveIssuesToBacklogForBoardRequest](MoveIssuesToBacklogForBoardRequest.md) |  | |

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
| **204** | Empty response is returned if operation was successful. |  -  |
| **207** | Returns the list of issue with status of rank operation. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if user does not a have valid license or does not have permission to assign issues. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setBoardProperty

> any setBoardProperty(boardId, propertyKey, body)

Set board property

Sets the value of the specified board\&#39;s property.  You can use this resource to store a custom data against the board identified by the id. The user who stores the data is required to have permissions to modify the board.

### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { SetBoardPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // string | the ID of the board on which the property will be set.
    boardId: boardId_example,
    // string | the key of the board\'s property. The maximum length of the key is 255 bytes.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: ...,
  } satisfies SetBoardPropertyRequest;

  try {
    const data = await api.setBoardProperty(body);
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
| **boardId** | `string` | the ID of the board on which the property will be set. | [Defaults to `undefined`] |
| **propertyKey** | `string` | the key of the board\&#39;s property. The maximum length of the key is 255 bytes. | [Defaults to `undefined`] |
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
| **200** | Returned if the board property is successfully updated. |  -  |
| **201** | Returned if the board property is successfully created. |  -  |
| **400** | Returned if the boardId is invalid (negative or not a number). |  -  |
| **401** | Returned if the calling user is not authenticated. |  -  |
| **404** | Returned if the board with given id does not exist or the user doesn\&#39;t have permissions to see it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## toggleFeatures

> GetFeaturesForBoard200Response toggleFeatures(boardId, toggleFeaturesRequest)

Toggle features



### Example

```ts
import {
  Configuration,
  BoardApi,
} from 'jira-software-cloud-api';
import type { ToggleFeaturesOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BoardApi(config);

  const body = {
    // number
    boardId: 789,
    // ToggleFeaturesRequest
    toggleFeaturesRequest: ...,
  } satisfies ToggleFeaturesOperationRequest;

  try {
    const data = await api.toggleFeatures(body);
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
| **boardId** | `number` |  | [Defaults to `undefined`] |
| **toggleFeaturesRequest** | [ToggleFeaturesRequest](ToggleFeaturesRequest.md) |  | |

### Return type

[**GetFeaturesForBoard200Response**](GetFeaturesForBoard200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

