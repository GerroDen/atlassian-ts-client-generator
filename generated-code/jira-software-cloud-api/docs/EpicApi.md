# EpicApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getEpic**](EpicApi.md#getepic) | **GET** /rest/agile/1.0/epic/{epicIdOrKey} | Get epic |
| [**getIssuesForEpic**](EpicApi.md#getissuesforepic) | **GET** /rest/agile/1.0/epic/{epicIdOrKey}/issue | Get issues for epic |
| [**getIssuesWithoutEpic**](EpicApi.md#getissueswithoutepic) | **GET** /rest/agile/1.0/epic/none/issue | Get issues without epic |
| [**moveIssuesToEpic**](EpicApi.md#moveissuestoepic) | **POST** /rest/agile/1.0/epic/{epicIdOrKey}/issue | Move issues to epic |
| [**partiallyUpdateEpic**](EpicApi.md#partiallyupdateepicoperation) | **POST** /rest/agile/1.0/epic/{epicIdOrKey} | Partially update epic |
| [**rankEpics**](EpicApi.md#rankepicsoperation) | **PUT** /rest/agile/1.0/epic/{epicIdOrKey}/rank | Rank epics |
| [**removeIssuesFromEpic**](EpicApi.md#removeissuesfromepic) | **POST** /rest/agile/1.0/epic/none/issue | Remove issues from epic |



## getEpic

> getEpic(epicIdOrKey)

Get epic

Returns the epic for a given epic ID. This epic will only be returned if the user has permission to view it. **Note:** This operation does not work for epics in next-gen projects.

### Example

```ts
import {
  Configuration,
  EpicApi,
} from 'jira-software-cloud-api';
import type { GetEpicRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EpicApi(config);

  const body = {
    // string | The id or key of the requested epic.
    epicIdOrKey: epicIdOrKey_example,
  } satisfies GetEpicRequest;

  try {
    const data = await api.getEpic(body);
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
| **epicIdOrKey** | `string` | The id or key of the requested epic. | [Defaults to `undefined`] |

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
| **200** | Returns the requested epic. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned if the epic does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuesForEpic

> getIssuesForEpic(epicIdOrKey, startAt, maxResults, jql, validateQuery, fields, expand)

Get issues for epic

Returns all issues that belong to the epic, for the given epic ID. This only includes issues that the user has permission to view. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned issues are ordered by rank. **Note:** If you are querying a next-gen project, do not use this operation. Instead, search for issues that belong to an epic by using the [Search for issues using JQL](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-search-get) operation in the Jira platform REST API. Build your JQL query using the &#x60;parent&#x60; clause. For more information on the &#x60;parent&#x60; JQL field, see [Advanced searching](https://confluence.atlassian.com/x/dAiiLQ#Advancedsearching-fieldsreference-Parent).

### Example

```ts
import {
  Configuration,
  EpicApi,
} from 'jira-software-cloud-api';
import type { GetIssuesForEpicRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EpicApi(config);

  const body = {
    // string | The id or key of the epic that contains the requested issues.
    epicIdOrKey: epicIdOrKey_example,
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
    // string | A comma-separated list of the parameters to expand. (optional)
    expand: expand_example,
  } satisfies GetIssuesForEpicRequest;

  try {
    const data = await api.getIssuesForEpic(body);
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
| **epicIdOrKey** | `string` | The id or key of the epic that contains the requested issues. | [Defaults to `undefined`] |
| **startAt** | `number` | The starting index of the returned issues. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of issues to return per page. Default: 50. See the \&#39;Pagination\&#39; section at the top of this page for more details. Note, the total number of issues returned is limited by the property \&#39;jira.search.views.default.max\&#39; in your Jira instance. If you exceed this limit, your results will be truncated. | [Optional] [Defaults to `undefined`] |
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
| **404** | Returned if the epic does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuesWithoutEpic

> getIssuesWithoutEpic(startAt, maxResults, jql, validateQuery, fields, expand)

Get issues without epic

Returns all issues that do not belong to any epic. This only includes issues that the user has permission to view. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic. By default, the returned issues are ordered by rank. **Note:** If you are querying a next-gen project, do not use this operation. Instead, search for issues that don\&#39;t belong to an epic by using the [Search for issues using JQL](https://developer.atlassian.com/cloud/jira/platform/rest/v2/#api-rest-api-2-search-get) operation in the Jira platform REST API. Build your JQL query using the &#x60;parent is empty&#x60; clause. For more information on the &#x60;parent&#x60; JQL field, see [Advanced searching](https://confluence.atlassian.com/x/dAiiLQ#Advancedsearching-fieldsreference-Parent).

### Example

```ts
import {
  Configuration,
  EpicApi,
} from 'jira-software-cloud-api';
import type { GetIssuesWithoutEpicRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EpicApi(config);

  const body = {
    // number | The starting index of the returned issues. Base index: 0. See the \'Pagination\' section at the top of this page for more details. (optional)
    startAt: 789,
    // number | The maximum number of issues to return per page. See the \'Pagination\' section at the top of this page for more details. Note, the total number of issues returned is limited by the property \'jira.search.views.default.max\' in your Jira instance. If you exceed this limit, your results will be truncated. (optional)
    maxResults: 56,
    // string | Filters results using a JQL query. If you define an order in your JQL query, it will override the default order of the returned issues. (optional)
    jql: jql_example,
    // boolean | Specifies whether to validate the JQL query or not. Default: true. (optional)
    validateQuery: true,
    // Array<object> | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. (optional)
    fields: ...,
    // string | A comma-separated list of the parameters to expand. (optional)
    expand: expand_example,
  } satisfies GetIssuesWithoutEpicRequest;

  try {
    const data = await api.getIssuesWithoutEpic(body);
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
| **startAt** | `number` | The starting index of the returned issues. Base index: 0. See the \&#39;Pagination\&#39; section at the top of this page for more details. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of issues to return per page. See the \&#39;Pagination\&#39; section at the top of this page for more details. Note, the total number of issues returned is limited by the property \&#39;jira.search.views.default.max\&#39; in your Jira instance. If you exceed this limit, your results will be truncated. | [Optional] [Defaults to `undefined`] |
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveIssuesToEpic

> moveIssuesToEpic(epicIdOrKey, moveIssuesToBacklogRequest)

Move issues to epic

Moves issues to an epic, for a given epic id. Issues can be only in a single epic at the same time. That means that already assigned issues to an epic, will not be assigned to the previous epic anymore. The user needs to have the edit issue permission for all issue they want to move and to the epic. The maximum number of issues that can be moved in one operation is 50. **Note:** This operation does not work for epics in next-gen projects.

### Example

```ts
import {
  Configuration,
  EpicApi,
} from 'jira-software-cloud-api';
import type { MoveIssuesToEpicRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EpicApi(config);

  const body = {
    // string | The id or key of the epic that you want to assign issues to.
    epicIdOrKey: epicIdOrKey_example,
    // MoveIssuesToBacklogRequest
    moveIssuesToBacklogRequest: {"issues":["10001","PR-1","PR-3"]},
  } satisfies MoveIssuesToEpicRequest;

  try {
    const data = await api.moveIssuesToEpic(body);
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
| **epicIdOrKey** | `string` | The id or key of the epic that you want to assign issues to. | [Defaults to `undefined`] |
| **moveIssuesToBacklogRequest** | [MoveIssuesToBacklogRequest](MoveIssuesToBacklogRequest.md) |  | |

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
| **403** | Returned if the user does not a have valid license or does not have edit issue permission for all issues to assign or for the epic. |  -  |
| **404** | Returned if the epic does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partiallyUpdateEpic

> partiallyUpdateEpic(epicIdOrKey, partiallyUpdateEpicRequest)

Partially update epic

Performs a partial update of the epic. A partial update means that fields not present in the request JSON will not be updated. Valid values for color are &#x60;color_1&#x60; to &#x60;color_9&#x60;. **Note:** This operation does not work for epics in next-gen projects.

### Example

```ts
import {
  Configuration,
  EpicApi,
} from 'jira-software-cloud-api';
import type { PartiallyUpdateEpicOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EpicApi(config);

  const body = {
    // string | The id or key of the epic to update.
    epicIdOrKey: epicIdOrKey_example,
    // PartiallyUpdateEpicRequest
    partiallyUpdateEpicRequest: {"color":{"key":"color_6"},"done":true,"name":"epic 2","summary":"epic 2 summary"},
  } satisfies PartiallyUpdateEpicOperationRequest;

  try {
    const data = await api.partiallyUpdateEpic(body);
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
| **epicIdOrKey** | `string` | The id or key of the epic to update. | [Defaults to `undefined`] |
| **partiallyUpdateEpicRequest** | [PartiallyUpdateEpicRequest](PartiallyUpdateEpicRequest.md) |  | |

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
| **200** | Updated epic |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license or edit issue permission. |  -  |
| **404** | Returned if the epic does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rankEpics

> rankEpics(epicIdOrKey, rankEpicsRequest)

Rank epics

Moves (ranks) an epic before or after a given epic.  If rankCustomFieldId is not defined, the default rank field will be used.  **Note:** This operation does not work for epics in next-gen projects.

### Example

```ts
import {
  Configuration,
  EpicApi,
} from 'jira-software-cloud-api';
import type { RankEpicsOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EpicApi(config);

  const body = {
    // string | The id or key of the epic to rank.
    epicIdOrKey: epicIdOrKey_example,
    // RankEpicsRequest | bean which contains the information where the given epic should be ranked.
    rankEpicsRequest: {"rankBeforeEpic":"10000","rankCustomFieldId":10521},
  } satisfies RankEpicsOperationRequest;

  try {
    const data = await api.rankEpics(body);
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
| **epicIdOrKey** | `string` | The id or key of the epic to rank. | [Defaults to `undefined`] |
| **rankEpicsRequest** | [RankEpicsRequest](RankEpicsRequest.md) | bean which contains the information where the given epic should be ranked. | |

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
| **403** | Returned if user does not a have valid license or does not have permission to rank. To rank issues user have to have schedule issue permission for epics that they want to rank. |  -  |
| **404** | Returned when the given epics in the path parameter or the request body do not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeIssuesFromEpic

> removeIssuesFromEpic(moveIssuesToBacklogRequest)

Remove issues from epic

Removes issues from epics. The user needs to have the edit issue permission for all issue they want to remove from epics. The maximum number of issues that can be moved in one operation is 50. **Note:** This operation does not work for epics in next-gen projects. Instead, update the issue using &#x60;\\{ fields: \\{ parent: \\{\\} \\} \\}&#x60;

### Example

```ts
import {
  Configuration,
  EpicApi,
} from 'jira-software-cloud-api';
import type { RemoveIssuesFromEpicRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new EpicApi(config);

  const body = {
    // MoveIssuesToBacklogRequest
    moveIssuesToBacklogRequest: {"issues":["10001","PR-1","PR-3"]},
  } satisfies RemoveIssuesFromEpicRequest;

  try {
    const data = await api.removeIssuesFromEpic(body);
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
| **moveIssuesToBacklogRequest** | [MoveIssuesToBacklogRequest](MoveIssuesToBacklogRequest.md) |  | |

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
| **404** | Returned if the epic does not exist or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

