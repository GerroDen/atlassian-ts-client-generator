# BacklogApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**moveIssuesToBacklog**](BacklogApi.md#moveissuestobacklogoperation) | **POST** /rest/agile/1.0/backlog/issue | Move issues to backlog |
| [**moveIssuesToBacklogForBoard**](BacklogApi.md#moveissuestobacklogforboardoperation) | **POST** /rest/agile/1.0/backlog/{boardId}/issue | Move issues to backlog for board |



## moveIssuesToBacklog

> moveIssuesToBacklog(moveIssuesToBacklogRequest)

Move issues to backlog

Move issues to the backlog.   This operation is equivalent to remove future and active sprints from a given set of issues. At most 50 issues may be moved at once.

### Example

```ts
import {
  Configuration,
  BacklogApi,
} from 'jira-software-cloud-api';
import type { MoveIssuesToBacklogOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BacklogApi(config);

  const body = {
    // MoveIssuesToBacklogRequest
    moveIssuesToBacklogRequest: {"issues":["10001","PR-1","PR-3"]},
  } satisfies MoveIssuesToBacklogOperationRequest;

  try {
    const data = await api.moveIssuesToBacklog(body);
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
| **403** | Returned if user does not a have valid license or does not have permission to assign issues. |  -  |
| **404** | Returned if sprint does not exist or the user cannot view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveIssuesToBacklogForBoard

> moveIssuesToBacklogForBoard(boardId, moveIssuesToBacklogForBoardRequest)

Move issues to backlog for board

Move issues to the backlog of a particular board (if they are already on that board).   This operation is equivalent to remove future and active sprints from a given set of issues if the board has sprints If the board does not have sprints this will put the issues back into the backlog from the board. At most 50 issues may be moved at once.

### Example

```ts
import {
  Configuration,
  BacklogApi,
} from 'jira-software-cloud-api';
import type { MoveIssuesToBacklogForBoardOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BacklogApi(config);

  const body = {
    // number
    boardId: 789,
    // MoveIssuesToBacklogForBoardRequest
    moveIssuesToBacklogForBoardRequest: {"issues":["PR-1","10001","PR-3"],"rankBeforeIssue":"PR-4","rankCustomFieldId":10521},
  } satisfies MoveIssuesToBacklogForBoardOperationRequest;

  try {
    const data = await api.moveIssuesToBacklogForBoard(body);
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
| **404** | Returned if sprint does not exist or the user cannot view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

