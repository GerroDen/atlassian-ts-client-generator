# IssueApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**estimateIssueForBoard**](IssueApi.md#estimateissueforboardoperation) | **PUT** /rest/agile/1.0/issue/{issueIdOrKey}/estimation | Estimate issue for board |
| [**getIssue**](IssueApi.md#getissue) | **GET** /rest/agile/1.0/issue/{issueIdOrKey} | Get issue |
| [**getIssueEstimationForBoard**](IssueApi.md#getissueestimationforboard) | **GET** /rest/agile/1.0/issue/{issueIdOrKey}/estimation | Get issue estimation for board |
| [**rankIssues**](IssueApi.md#rankissues) | **PUT** /rest/agile/1.0/issue/rank | Rank issues |



## estimateIssueForBoard

> estimateIssueForBoard(issueIdOrKey, estimateIssueForBoardRequest, boardId)

Estimate issue for board

Updates the estimation of the issue. boardId param is required. This param determines which field will be updated on a issue.  Note that this resource changes the estimation field of the issue regardless of appearance the field on the screen.  Original time tracking estimation field accepts estimation in formats like \&quot;1w\&quot;, \&quot;2d\&quot;, \&quot;3h\&quot;, \&quot;20m\&quot; or number which represent number of minutes. However, internally the field stores and returns the estimation as a number of seconds.  The field used for estimation on the given board can be obtained from [board configuration resource](#agile/1.0/board-getConfiguration). More information about the field are returned by [edit meta resource](#api-rest-api-3-issue-issueIdOrKey-editmeta-get) or [field resource](#api-rest-api-3-field-get).

### Example

```ts
import {
  Configuration,
  IssueApi,
} from 'jira-software-cloud-api';
import type { EstimateIssueForBoardOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IssueApi(config);

  const body = {
    // string | The ID or key of the requested issue.
    issueIdOrKey: issueIdOrKey_example,
    // EstimateIssueForBoardRequest | bean that contains value of a new estimation.
    estimateIssueForBoardRequest: {"value":"8.0"},
    // number | The ID of the board required to determine which field is used for estimation. (optional)
    boardId: 789,
  } satisfies EstimateIssueForBoardOperationRequest;

  try {
    const data = await api.estimateIssueForBoard(body);
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
| **issueIdOrKey** | `string` | The ID or key of the requested issue. | [Defaults to `undefined`] |
| **estimateIssueForBoardRequest** | [EstimateIssueForBoardRequest](EstimateIssueForBoardRequest.md) | bean that contains value of a new estimation. | |
| **boardId** | `number` | The ID of the board required to determine which field is used for estimation. | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns the estimation of the issue and a fieldId of the field that is used for it. |  -  |
| **400** | Returned if the boardId was not provided, field does not exists or value was in wrong format. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if user does not a have valid license or does not have permission to edit issue. |  -  |
| **404** | Returned in these cases:   *  the issue does not exist  *  the user does not have permission to view issue  *  the board does not exist  *  the user does not have permission to view board  *  the issue does not belong to the board |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssue

> getIssue(issueIdOrKey, fields, expand, updateHistory)

Get issue

Returns a single issue, for a given issue ID or issue key. Issues returned from this resource include Agile fields, like sprint, closedSprints, flagged, and epic.

### Example

```ts
import {
  Configuration,
  IssueApi,
} from 'jira-software-cloud-api';
import type { GetIssueRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IssueApi(config);

  const body = {
    // string | The ID or key of the requested issue.
    issueIdOrKey: issueIdOrKey_example,
    // Array<object> | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. (optional)
    fields: ...,
    // string | A comma-separated list of the parameters to expand. (optional)
    expand: expand_example,
    // boolean | A boolean indicating whether the issue retrieved by this method should be added to the current user\'s issue history (optional)
    updateHistory: true,
  } satisfies GetIssueRequest;

  try {
    const data = await api.getIssue(body);
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
| **issueIdOrKey** | `string` | The ID or key of the requested issue. | [Defaults to `undefined`] |
| **fields** | `Array<object>` | The list of fields to return for each issue. By default, all navigable and Agile fields are returned. | [Optional] |
| **expand** | `string` | A comma-separated list of the parameters to expand. | [Optional] [Defaults to `undefined`] |
| **updateHistory** | `boolean` | A boolean indicating whether the issue retrieved by this method should be added to the current user\&#39;s issue history | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns the requested issue. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not a have valid license. |  -  |
| **404** | Returned in these cases:   *  the issue does not exist  *  the user does not have permission to view issue |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueEstimationForBoard

> getIssueEstimationForBoard(issueIdOrKey, boardId)

Get issue estimation for board

Returns the estimation of the issue and a fieldId of the field that is used for it. &#x60;boardId&#x60; param is required. This param determines which field will be updated on a issue.  Original time internally stores and returns the estimation as a number of seconds.  The field used for estimation on the given board can be obtained from [board configuration resource](#agile/1.0/board-getConfiguration). More information about the field are returned by [edit meta resource](#api-rest-api-3-issue-getEditIssueMeta) or [field resource](#api-rest-api-3-field-get).

### Example

```ts
import {
  Configuration,
  IssueApi,
} from 'jira-software-cloud-api';
import type { GetIssueEstimationForBoardRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IssueApi(config);

  const body = {
    // string | The ID or key of the requested issue.
    issueIdOrKey: issueIdOrKey_example,
    // number | The ID of the board required to determine which field is used for estimation. (optional)
    boardId: 789,
  } satisfies GetIssueEstimationForBoardRequest;

  try {
    const data = await api.getIssueEstimationForBoard(body);
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
| **issueIdOrKey** | `string` | The ID or key of the requested issue. | [Defaults to `undefined`] |
| **boardId** | `number` | The ID of the board required to determine which field is used for estimation. | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns the estimation of the issue and a fieldId of the field that is used for it. |  -  |
| **400** | Returned if the boardId was not provided, field does not exists or value was in wrong format. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if user does not a have valid license or does not have permission to edit issue. |  -  |
| **404** | Returned in these cases:   *  the issue does not exist  *  the user does not have permission to view issue  *  the board does not exist  *  the user does not have permission to view board  *  the issue does not belong to the board |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rankIssues

> rankIssues(moveIssuesToBacklogForBoardRequest)

Rank issues

Moves (ranks) issues before or after a given issue. At most 50 issues may be ranked at once.  This operation may fail for some issues, although this will be rare. In that case the 207 status code is returned for the whole response and detailed information regarding each issue is available in the response body.  If rankCustomFieldId is not defined, the default rank field will be used.

### Example

```ts
import {
  Configuration,
  IssueApi,
} from 'jira-software-cloud-api';
import type { RankIssuesRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new IssueApi(config);

  const body = {
    // MoveIssuesToBacklogForBoardRequest | bean which contains list of issues to rank and information where it should be ranked.
    moveIssuesToBacklogForBoardRequest: {"issues":["PR-1","10001","PR-3"],"rankBeforeIssue":"PR-4","rankCustomFieldId":10521},
  } satisfies RankIssuesRequest;

  try {
    const data = await api.rankIssues(body);
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
| **moveIssuesToBacklogForBoardRequest** | [MoveIssuesToBacklogForBoardRequest](MoveIssuesToBacklogForBoardRequest.md) | bean which contains list of issues to rank and information where it should be ranked. | |

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
| **403** | Returned if user does not a have valid license or does not have permission to rank. To rank issues user has to have schedule issue permission for issues that they want to rank. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

