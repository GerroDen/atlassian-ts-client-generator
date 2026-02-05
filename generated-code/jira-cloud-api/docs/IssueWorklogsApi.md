# IssueWorklogsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addWorklog**](IssueWorklogsApi.md#addworklog) | **POST** /rest/api/3/issue/{issueIdOrKey}/worklog | Add worklog |
| [**bulkDeleteWorklogs**](IssueWorklogsApi.md#bulkdeleteworklogs) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/worklog | Bulk delete worklogs |
| [**bulkMoveWorklogs**](IssueWorklogsApi.md#bulkmoveworklogs) | **POST** /rest/api/3/issue/{issueIdOrKey}/worklog/move | Bulk move worklogs |
| [**deleteWorklog**](IssueWorklogsApi.md#deleteworklog) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Delete worklog |
| [**getIdsOfWorklogsDeletedSince**](IssueWorklogsApi.md#getidsofworklogsdeletedsince) | **GET** /rest/api/3/worklog/deleted | Get IDs of deleted worklogs |
| [**getIdsOfWorklogsModifiedSince**](IssueWorklogsApi.md#getidsofworklogsmodifiedsince) | **GET** /rest/api/3/worklog/updated | Get IDs of updated worklogs |
| [**getIssueWorklog**](IssueWorklogsApi.md#getissueworklog) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog | Get issue worklogs |
| [**getWorklog**](IssueWorklogsApi.md#getworklog) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Get worklog |
| [**getWorklogsForIds**](IssueWorklogsApi.md#getworklogsforids) | **POST** /rest/api/3/worklog/list | Get worklogs |
| [**updateWorklog**](IssueWorklogsApi.md#updateworklog) | **PUT** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Update worklog |



## addWorklog

> Worklog addWorklog(issueIdOrKey, worklog, notifyUsers, adjustEstimate, newEstimate, reduceBy, expand, overrideEditableFlag)

Add worklog

Adds a worklog to an issue.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Work on issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { AddWorklogRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // string | The ID or key the issue.
    issueIdOrKey: issueIdOrKey_example,
    // Worklog
    worklog: {"comment":{"content":[{"content":[{"text":"I did some work here.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"started":"2021-01-17T12:34:00.000+0000","timeSpentSeconds":12000,"visibility":{"identifier":"276f955c-63d7-42c8-9520-92d01dca0625","type":"group"}},
    // boolean | Whether users watching the issue are notified by email. (optional)
    notifyUsers: true,
    // 'new' | 'leave' | 'manual' | 'auto' | Defines how to update the issue\'s time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Reduces the estimate by amount specified in `reduceBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. (optional)
    adjustEstimate: adjustEstimate_example,
    // string | The value to set as the issue\'s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`. (optional)
    newEstimate: newEstimate_example,
    // string | The amount to reduce the issue\'s remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when `adjustEstimate` is `manual`. (optional)
    reduceBy: reduceBy_example,
    // string | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties. (optional)
    expand: expand_example,
    // boolean | Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. (optional)
    overrideEditableFlag: true,
  } satisfies AddWorklogRequest;

  try {
    const data = await api.addWorklog(body);
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
| **issueIdOrKey** | `string` | The ID or key the issue. | [Defaults to `undefined`] |
| **worklog** | [Worklog](Worklog.md) |  | |
| **notifyUsers** | `boolean` | Whether users watching the issue are notified by email. | [Optional] [Defaults to `true`] |
| **adjustEstimate** | `new`, `leave`, `manual`, `auto` | Defines how to update the issue\&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;manual&#x60; Reduces the estimate by amount specified in &#x60;reduceBy&#x60;.  *  &#x60;auto&#x60; Reduces the estimate by the value of &#x60;timeSpent&#x60; in the worklog. | [Optional] [Defaults to `&#39;auto&#39;`] [Enum: new, leave, manual, auto] |
| **newEstimate** | `string` | The value to set as the issue\&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [Optional] [Defaults to `undefined`] |
| **reduceBy** | `string` | The amount to reduce the issue\&#39;s remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;manual&#x60;. | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts &#x60;properties&#x60;, which returns worklog properties. | [Optional] [Defaults to `&#39;&#39;`] |
| **overrideEditableFlag** | `boolean` | Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. | [Optional] [Defaults to `false`] |

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;adjustEstimate&#x60; is set to &#x60;new&#x60; but &#x60;newEstimate&#x60; is not provided or is invalid.  *  &#x60;adjustEstimate&#x60; is set to &#x60;manual&#x60; but &#x60;reduceBy&#x60; is not provided or is invalid.  *  the user does not have permission to add the worklog.  *  the request JSON is malformed. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |
| **413** | Returned if the per-issue limit has been breached for one of the following fields:   *  worklogs  *  attachments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkDeleteWorklogs

> bulkDeleteWorklogs(issueIdOrKey, worklogIdsRequestBean, adjustEstimate, overrideEditableFlag)

Bulk delete worklogs

Deletes a list of worklogs from an issue. This is an experimental API with limitations:   *  You can\&#39;t delete more than 5000 worklogs at once.  *  No notifications will be sent for deleted worklogs.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Delete all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any worklog.  *  If any worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { BulkDeleteWorklogsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // WorklogIdsRequestBean | A JSON object containing a list of worklog IDs.
    worklogIdsRequestBean: {"ids":[1,2,5,10]},
    // 'leave' | 'auto' | Defines how to update the issue\'s time estimate, the options are:   *  `leave` Leaves the estimate unchanged.  *  `auto` Reduces the estimate by the aggregate value of `timeSpent` across all worklogs being deleted. (optional)
    adjustEstimate: adjustEstimate_example,
    // boolean | Whether the work log entries should be removed to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. (optional)
    overrideEditableFlag: true,
  } satisfies BulkDeleteWorklogsRequest;

  try {
    const data = await api.bulkDeleteWorklogs(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **worklogIdsRequestBean** | [WorklogIdsRequestBean](WorklogIdsRequestBean.md) | A JSON object containing a list of worklog IDs. | |
| **adjustEstimate** | `leave`, `auto` | Defines how to update the issue\&#39;s time estimate, the options are:   *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;auto&#x60; Reduces the estimate by the aggregate value of &#x60;timeSpent&#x60; across all worklogs being deleted. | [Optional] [Defaults to `&#39;auto&#39;`] [Enum: leave, auto] |
| **overrideEditableFlag** | `boolean` | Whether the work log entries should be removed to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. | [Optional] [Defaults to `false`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the bulk deletion request was partially successful, with a message indicating partial success. |  -  |
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;request&#x60; is not provided or is invalid  *  the user does not have permission to delete the worklogs  *  the number of worklogs being deleted exceeds the limit |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if:   *  the issue is not found or user does not have permission to view the issue  *  at least one of the worklogs is not associated with the provided issue  *  time tracking is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkMoveWorklogs

> bulkMoveWorklogs(issueIdOrKey, worklogsMoveRequestBean, adjustEstimate, overrideEditableFlag)

Bulk move worklogs

Moves a list of worklogs from one issue to another. This is an experimental API with several limitations:   *  You can\&#39;t move more than 5000 worklogs at once.  *  You can\&#39;t move worklogs containing an attachment.  *  You can\&#39;t move worklogs restricted by project roles.  *  No notifications will be sent for moved worklogs.  *  No webhooks or events will be sent for moved worklogs.  *  No issue history will be recorded for moved worklogs.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the projects containing the source and destination issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Delete all worklogs* [project permission](https://confluence.atlassian.com/x/yodKLg)  *  *Work on issues* [project permission](https://confluence.atlassian.com/x/yodKLg) to log work on an issue, that is to create a worklog entry, if time tracking is enabled. This permission is required as a prerequisite for applying the other time-tracking permissions  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { BulkMoveWorklogsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // string
    issueIdOrKey: issueIdOrKey_example,
    // WorklogsMoveRequestBean | A JSON object containing a list of worklog IDs and the ID or key of the destination issue.
    worklogsMoveRequestBean: {"ids":[1,2,5,10],"issueIdOrKey":"ABC-1234"},
    // 'leave' | 'auto' | Defines how to update the issues\' time estimate, the options are:   *  `leave` Leaves the estimate unchanged.  *  `auto` Reduces the estimate by the aggregate value of `timeSpent` across all worklogs being moved in the source issue, and increases it in the destination issue. (optional)
    adjustEstimate: adjustEstimate_example,
    // boolean | Whether the work log entry should be moved to and from the issues even if the issues are not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. (optional)
    overrideEditableFlag: true,
  } satisfies BulkMoveWorklogsRequest;

  try {
    const data = await api.bulkMoveWorklogs(body);
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
| **issueIdOrKey** | `string` |  | [Defaults to `undefined`] |
| **worklogsMoveRequestBean** | [WorklogsMoveRequestBean](WorklogsMoveRequestBean.md) | A JSON object containing a list of worklog IDs and the ID or key of the destination issue. | |
| **adjustEstimate** | `leave`, `auto` | Defines how to update the issues\&#39; time estimate, the options are:   *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;auto&#x60; Reduces the estimate by the aggregate value of &#x60;timeSpent&#x60; across all worklogs being moved in the source issue, and increases it in the destination issue. | [Optional] [Defaults to `&#39;auto&#39;`] [Enum: leave, auto] |
| **overrideEditableFlag** | `boolean` | Whether the work log entry should be moved to and from the issues even if the issues are not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. | [Optional] [Defaults to `false`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is partially successful. |  -  |
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;request&#x60; is not provided or is invalid  *  the user does not have permission to move the worklogs  *  the number of worklogs being moved exceeds the limit  *  the total size of worklogs being moved is too large  *  any worklog contains attachments |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if:   *  the source or destination issue is not found or the user does not have permission to view the issues  *  at least one of the worklogs is not associated with the provided issue  *  time tracking is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWorklog

> deleteWorklog(issueIdOrKey, id, notifyUsers, adjustEstimate, newEstimate, increaseBy, overrideEditableFlag)

Delete worklog

Deletes a worklog from an issue.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Delete all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any worklog or *Delete own worklogs* to delete worklogs created by the user,  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { DeleteWorklogRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the worklog.
    id: id_example,
    // boolean | Whether users watching the issue are notified by email. (optional)
    notifyUsers: true,
    // 'new' | 'leave' | 'manual' | 'auto' | Defines how to update the issue\'s time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Increases the estimate by amount specified in `increaseBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. (optional)
    adjustEstimate: adjustEstimate_example,
    // string | The value to set as the issue\'s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`. (optional)
    newEstimate: newEstimate_example,
    // string | The amount to increase the issue\'s remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `manual`. (optional)
    increaseBy: increaseBy_example,
    // boolean | Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. (optional)
    overrideEditableFlag: true,
  } satisfies DeleteWorklogRequest;

  try {
    const data = await api.deleteWorklog(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **id** | `string` | The ID of the worklog. | [Defaults to `undefined`] |
| **notifyUsers** | `boolean` | Whether users watching the issue are notified by email. | [Optional] [Defaults to `true`] |
| **adjustEstimate** | `new`, `leave`, `manual`, `auto` | Defines how to update the issue\&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;manual&#x60; Increases the estimate by amount specified in &#x60;increaseBy&#x60;.  *  &#x60;auto&#x60; Reduces the estimate by the value of &#x60;timeSpent&#x60; in the worklog. | [Optional] [Defaults to `&#39;auto&#39;`] [Enum: new, leave, manual, auto] |
| **newEstimate** | `string` | The value to set as the issue\&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [Optional] [Defaults to `undefined`] |
| **increaseBy** | `string` | The amount to increase the issue\&#39;s remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;manual&#x60;. | [Optional] [Defaults to `undefined`] |
| **overrideEditableFlag** | `boolean` | Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. | [Optional] [Defaults to `false`] |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;adjustEstimate&#x60; is set to &#x60;new&#x60; but &#x60;newEstimate&#x60; is not provided or is invalid.  *  &#x60;adjustEstimate&#x60; is set to &#x60;manual&#x60; but &#x60;reduceBy&#x60; is not provided or is invalid.  *  the user does not have permission to delete the worklog. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if:   *  the issue is not found or user does not have permission to view the issue.  *  the worklog is not found or the user does not have permission to view it.  *  time tracking is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIdsOfWorklogsDeletedSince

> ChangedWorklogs getIdsOfWorklogsDeletedSince(since)

Get IDs of deleted worklogs

Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.  This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, &#x60;until&#x60; indicates the timestamp of the youngest item on the page. Also, &#x60;nextPage&#x60; provides the URL for the next page of worklogs. The &#x60;lastPage&#x60; parameter is set to true on the last page of worklogs.  This resource does not return worklogs deleted during the minute preceding the request.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { GetIdsOfWorklogsDeletedSinceRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // number | The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned. (optional)
    since: 789,
  } satisfies GetIdsOfWorklogsDeletedSinceRequest;

  try {
    const data = await api.getIdsOfWorklogsDeletedSince(body);
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
| **since** | `number` | The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned. | [Optional] [Defaults to `0`] |

### Return type

[**ChangedWorklogs**](ChangedWorklogs.md)

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


## getIdsOfWorklogsModifiedSince

> ChangedWorklogs getIdsOfWorklogsModifiedSince(since, expand)

Get IDs of updated worklogs

Returns a list of IDs and update timestamps for worklogs updated after a date and time.  This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, &#x60;until&#x60; indicates the timestamp of the youngest item on the page. Also, &#x60;nextPage&#x60; provides the URL for the next page of worklogs. The &#x60;lastPage&#x60; parameter is set to true on the last page of worklogs.  This resource does not return worklogs updated during the minute preceding the request.  **[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true:   *  the worklog is set as *Viewable by All Users*.  *  the user is a member of a project role or group with permission to view the worklog.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { GetIdsOfWorklogsModifiedSinceRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // number | The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned. (optional)
    since: 789,
    // string | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog. (optional)
    expand: expand_example,
  } satisfies GetIdsOfWorklogsModifiedSinceRequest;

  try {
    const data = await api.getIdsOfWorklogsModifiedSince(body);
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
| **since** | `number` | The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned. | [Optional] [Defaults to `0`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60; that returns the properties of each worklog. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**ChangedWorklogs**](ChangedWorklogs.md)

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


## getIssueWorklog

> PageOfWorklogs getIssueWorklog(issueIdOrKey, startAt, maxResults, startedAfter, startedBefore, expand)

Get issue worklogs

Returns worklogs for an issue (ordered by created time), starting from the oldest worklog or from the worklog started on or after a date and time.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Workloads are only returned where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { GetIssueWorklogRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // number | The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned. (optional)
    startedAfter: 789,
    // number | The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned. (optional)
    startedBefore: 789,
    // string | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties. (optional)
    expand: expand_example,
  } satisfies GetIssueWorklogRequest;

  try {
    const data = await api.getIssueWorklog(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `5000`] |
| **startedAfter** | `number` | The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned. | [Optional] [Defaults to `undefined`] |
| **startedBefore** | `number` | The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned. | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts&#x60;properties&#x60;, which returns worklog properties. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**PageOfWorklogs**](PageOfWorklogs.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  the issue is not found or the user does not have permission to view the issue.  *  &#x60;startAt&#x60; or &#x60;maxResults&#x60; has non-numeric values.  *  time tracking is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorklog

> Worklog getWorklog(issueIdOrKey, id, expand)

Get worklog

Returns a worklog.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { GetWorklogRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the worklog.
    id: id_example,
    // string | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  `properties`, which returns worklog properties. (optional)
    expand: expand_example,
  } satisfies GetWorklogRequest;

  try {
    const data = await api.getWorklog(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **id** | `string` | The ID of the worklog. | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  &#x60;properties&#x60;, which returns worklog properties. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if:   *  the issue is not found or the user does not have permission to view it.  *  the worklog is not found or the user does not have permission to view it.  *  time tracking is disabled.  . |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorklogsForIds

> Array&lt;Worklog&gt; getWorklogsForIds(worklogIdsRequestBean, expand)

Get worklogs

Returns worklog details for a list of worklog IDs.  The returned list of worklogs is limited to 1000 items.  **[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true:   *  the worklog is set as *Viewable by All Users*.  *  the user is a member of a project role or group with permission to view the worklog.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { GetWorklogsForIdsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // WorklogIdsRequestBean | A JSON object containing a list of worklog IDs.
    worklogIdsRequestBean: {"ids":[1,2,5,10]},
    // string | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog. (optional)
    expand: expand_example,
  } satisfies GetWorklogsForIdsRequest;

  try {
    const data = await api.getWorklogsForIds(body);
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
| **worklogIdsRequestBean** | [WorklogIdsRequestBean](WorklogIdsRequestBean.md) | A JSON object containing a list of worklog IDs. | |
| **expand** | `string` | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60; that returns the properties of each worklog. | [Optional] [Defaults to `&#39;&#39;`] |

### Return type

[**Array&lt;Worklog&gt;**](Worklog.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request contains more than 1000 worklog IDs or is empty. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWorklog

> Worklog updateWorklog(issueIdOrKey, id, worklog, notifyUsers, adjustEstimate, newEstimate, expand, overrideEditableFlag)

Update worklog

Updates a worklog.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogsApi,
} from 'jira-cloud-api';
import type { UpdateWorklogRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogsApi(config);

  const body = {
    // string | The ID or key the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the worklog.
    id: id_example,
    // Worklog
    worklog: {"comment":{"content":[{"content":[{"text":"I did some work here.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"started":"2021-01-17T12:34:00.000+0000","timeSpentSeconds":12000,"visibility":{"identifier":"276f955c-63d7-42c8-9520-92d01dca0625","type":"group"}},
    // boolean | Whether users watching the issue are notified by email. (optional)
    notifyUsers: true,
    // 'new' | 'leave' | 'manual' | 'auto' | Defines how to update the issue\'s time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`. (optional)
    adjustEstimate: adjustEstimate_example,
    // string | The value to set as the issue\'s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`. (optional)
    newEstimate: newEstimate_example,
    // string | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties. (optional)
    expand: expand_example,
    // boolean | Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. (optional)
    overrideEditableFlag: true,
  } satisfies UpdateWorklogRequest;

  try {
    const data = await api.updateWorklog(body);
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
| **issueIdOrKey** | `string` | The ID or key the issue. | [Defaults to `undefined`] |
| **id** | `string` | The ID of the worklog. | [Defaults to `undefined`] |
| **worklog** | [Worklog](Worklog.md) |  | |
| **notifyUsers** | `boolean` | Whether users watching the issue are notified by email. | [Optional] [Defaults to `true`] |
| **adjustEstimate** | `new`, `leave`, `manual`, `auto` | Defines how to update the issue\&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;auto&#x60; Updates the estimate by the difference between the original and updated value of &#x60;timeSpent&#x60; or &#x60;timeSpentSeconds&#x60;. | [Optional] [Defaults to `&#39;auto&#39;`] [Enum: new, leave, manual, auto] |
| **newEstimate** | `string` | The value to set as the issue\&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60;, which returns worklog properties. | [Optional] [Defaults to `&#39;&#39;`] |
| **overrideEditableFlag** | `boolean` | Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. | [Optional] [Defaults to `false`] |

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful |  -  |
| **400** | Returned if:   *  &#x60;adjustEstimate&#x60; is set to &#x60;new&#x60; but &#x60;newEstimate&#x60; is not provided or is invalid.  *  the user does not have permission to update the worklog.  *  the request JSON is malformed. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if:   *  the issue is not found or user does not have permission to view the issue.  *  the worklog is not found or the user does not have permission to view it.  *  time tracking is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

