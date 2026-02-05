# IssuesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveIssues**](IssuesApi.md#archiveissues) | **PUT** /rest/api/3/issue/archive | Archive issue(s) by issue ID/key |
| [**archiveIssuesAsync**](IssuesApi.md#archiveissuesasync) | **POST** /rest/api/3/issue/archive | Archive issue(s) by JQL |
| [**assignIssue**](IssuesApi.md#assignissue) | **PUT** /rest/api/3/issue/{issueIdOrKey}/assignee | Assign issue |
| [**bulkFetchIssues**](IssuesApi.md#bulkfetchissues) | **POST** /rest/api/3/issue/bulkfetch | Bulk fetch issues |
| [**createIssue**](IssuesApi.md#createissue) | **POST** /rest/api/3/issue | Create issue |
| [**createIssues**](IssuesApi.md#createissues) | **POST** /rest/api/3/issue/bulk | Bulk create issue |
| [**deleteIssue**](IssuesApi.md#deleteissue) | **DELETE** /rest/api/3/issue/{issueIdOrKey} | Delete issue |
| [**doTransition**](IssuesApi.md#dotransition) | **POST** /rest/api/3/issue/{issueIdOrKey}/transitions | Transition issue |
| [**editIssue**](IssuesApi.md#editissue) | **PUT** /rest/api/3/issue/{issueIdOrKey} | Edit issue |
| [**exportArchivedIssues**](IssuesApi.md#exportarchivedissues) | **PUT** /rest/api/3/issues/archive/export | Export archived issue(s) |
| [**getBulkChangelogs**](IssuesApi.md#getbulkchangelogs) | **POST** /rest/api/3/changelog/bulkfetch | Bulk fetch changelogs |
| [**getChangeLogs**](IssuesApi.md#getchangelogs) | **GET** /rest/api/3/issue/{issueIdOrKey}/changelog | Get changelogs |
| [**getChangeLogsByIds**](IssuesApi.md#getchangelogsbyids) | **POST** /rest/api/3/issue/{issueIdOrKey}/changelog/list | Get changelogs by IDs |
| [**getCreateIssueMeta**](IssuesApi.md#getcreateissuemeta) | **GET** /rest/api/3/issue/createmeta | Get create issue metadata |
| [**getCreateIssueMetaIssueTypeId**](IssuesApi.md#getcreateissuemetaissuetypeid) | **GET** /rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes/{issueTypeId} | Get create field metadata for a project and issue type id |
| [**getCreateIssueMetaIssueTypes**](IssuesApi.md#getcreateissuemetaissuetypes) | **GET** /rest/api/3/issue/createmeta/{projectIdOrKey}/issuetypes | Get create metadata issue types for a project |
| [**getEditIssueMeta**](IssuesApi.md#geteditissuemeta) | **GET** /rest/api/3/issue/{issueIdOrKey}/editmeta | Get edit issue metadata |
| [**getEvents**](IssuesApi.md#getevents) | **GET** /rest/api/3/events | Get events |
| [**getIssue**](IssuesApi.md#getissue) | **GET** /rest/api/3/issue/{issueIdOrKey} | Get issue |
| [**getIssueLimitReport**](IssuesApi.md#getissuelimitreport) | **GET** /rest/api/3/issue/limit/report | Get issue limit report |
| [**getTransitions**](IssuesApi.md#gettransitions) | **GET** /rest/api/3/issue/{issueIdOrKey}/transitions | Get transitions |
| [**notify**](IssuesApi.md#notify) | **POST** /rest/api/3/issue/{issueIdOrKey}/notify | Send notification for issue |
| [**unarchiveIssues**](IssuesApi.md#unarchiveissues) | **PUT** /rest/api/3/issue/unarchive | Unarchive issue(s) by issue keys/ID |



## archiveIssues

> IssueArchivalSyncResponse archiveIssues(issueArchivalSyncRequest)

Archive issue(s) by issue ID/key

Enables admins to archive up to 1000 issues in a single request using issue ID/key, returning details of the issue(s) archived in the process and the errors encountered, if any.  **Note that:**   *  you can\&#39;t archive subtasks directly, only through their parent issues  *  you can only archive issues from software, service management, and business projects  **[Permissions](#permissions) required:** Jira admin or site admin: [global permission](https://confluence.atlassian.com/x/x4dKLg)  **License required:** Premium or Enterprise  **Signed-in users only:** This API can\&#39;t be accessed anonymously.     

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { ArchiveIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // IssueArchivalSyncRequest | Contains a list of issue keys or IDs to be archived.
    issueArchivalSyncRequest: {"issueIdsOrKeys":["PR-1","1001","PROJECT-2"]},
  } satisfies ArchiveIssuesRequest;

  try {
    const data = await api.archiveIssues(body);
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
| **issueArchivalSyncRequest** | [IssueArchivalSyncRequest](IssueArchivalSyncRequest.md) | Contains a list of issue keys or IDs to be archived. | |

### Return type

[**IssueArchivalSyncResponse**](IssueArchivalSyncResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if there is at least one valid issue to archive in the request. The return message will include the count of archived issues and subtasks, as well as error details for issues which failed to get archived. |  -  |
| **400** | Returned if none of the issues in the request can be archived. Possible reasons:   *  the issues weren\&#39;t found  *  the issues are subtasks  *  the issues belong to unlicensed projects  *  the issues belong to archived projects |  -  |
| **401** | Returned if no issues were archived because the provided authentication credentials are either missing or invalid. |  -  |
| **403** | Returned if no issues were archived because the user lacks the required Jira admin or site admin permissions. |  -  |
| **412** | Returned if one or more issues were successfully archived, but the operation was incomplete because the number of issue IDs or keys provided exceeds 1000. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## archiveIssuesAsync

> string archiveIssuesAsync(archiveIssueAsyncRequest)

Archive issue(s) by JQL

Enables admins to archive up to 100,000 issues in a single request using JQL, returning the URL to check the status of the submitted request.  You can use the [get task](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-tasks/#api-rest-api-3-task-taskid-get) and [cancel task](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-tasks/#api-rest-api-3-task-taskid-cancel-post) APIs to manage the request.  **Note that:**   *  you can\&#39;t archive subtasks directly, only through their parent issues  *  you can only archive issues from software, service management, and business projects  **[Permissions](#permissions) required:** Jira admin or site admin: [global permission](https://confluence.atlassian.com/x/x4dKLg)  **License required:** Premium or Enterprise  **Signed-in users only:** This API can\&#39;t be accessed anonymously.  **Rate limiting:** Only a single request per jira instance can be active at any given time.     

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { ArchiveIssuesAsyncRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // ArchiveIssueAsyncRequest | A JQL query specifying the issues to archive. Note that subtasks can only be archived through their parent issues.
    archiveIssueAsyncRequest: {"jql":"project = FOO AND updated < -2y"},
  } satisfies ArchiveIssuesAsyncRequest;

  try {
    const data = await api.archiveIssuesAsync(body);
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
| **archiveIssueAsyncRequest** | [ArchiveIssueAsyncRequest](ArchiveIssueAsyncRequest.md) | A JQL query specifying the issues to archive. Note that subtasks can only be archived through their parent issues. | |

### Return type

**string**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returns the URL to check the status of the submitted request. |  -  |
| **400** | Returned if no issues were archived due to a bad request, for example an invalid JQL query. |  -  |
| **401** | Returned if no issues were archived because the provided authentication credentials are either missing or invalid. |  -  |
| **403** | Returned if no issues were archived because the user lacks the required Jira admin or site admin permissions. |  -  |
| **412** | Returned if a request to archive issue(s) is already running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## assignIssue

> any assignIssue(issueIdOrKey, user)

Assign issue

Assigns an issue to a user. Use this operation when the calling user does not have the *Edit Issues* permission but has the *Assign issue* permission for the project that the issue is in.  If &#x60;name&#x60; or &#x60;accountId&#x60; is set to:   *  &#x60;\&quot;-1\&quot;&#x60;, the issue is assigned to the default assignee for the project.  *  &#x60;null&#x60;, the issue is set to unassigned.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse Projects* and *Assign Issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { AssignIssueRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue to be assigned.
    issueIdOrKey: issueIdOrKey_example,
    // User | The request object with the user that the issue is assigned to.
    user: {"accountId":"5b10ac8d82e05b22cc7d4ef5"},
  } satisfies AssignIssueRequest;

  try {
    const data = await api.assignIssue(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue to be assigned. | [Defaults to `undefined`] |
| **user** | [User](User.md) | The request object with the user that the issue is assigned to. | |

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
| **400** | Returned if:   *  the user is not found.  *  &#x60;name&#x60;, &#x60;key&#x60;, or &#x60;accountId&#x60; is missing.  *  more than one of &#x60;name&#x60;, &#x60;key&#x60;, and &#x60;accountId&#x60; are provided. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the issue is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkFetchIssues

> BulkIssueResults bulkFetchIssues(bulkFetchIssueRequestBean)

Bulk fetch issues

Returns the details for a set of requested issues. You can request up to 100 issues.  Each issue is identified by its ID or key, however, if the identifier doesn\&#39;t match an issue, a case-insensitive search and check for moved issues is performed. If a matching issue is found its details are returned, a 302 or other redirect is **not** returned.  Issues will be returned in ascending &#x60;id&#x60; order. If there are errors, Jira will return a list of issues which couldn\&#39;t be fetched along with error messages.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Issues are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { BulkFetchIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // BulkFetchIssueRequestBean | A JSON object containing the information about which issues and fields to fetch.
    bulkFetchIssueRequestBean: {"expand":["names"],"fields":["summary","project","assignee"],"fieldsByKeys":false,"issueIdsOrKeys":["EX-1","EX-2","10005"],"properties":[]},
  } satisfies BulkFetchIssuesRequest;

  try {
    const data = await api.bulkFetchIssues(body);
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
| **bulkFetchIssueRequestBean** | [BulkFetchIssueRequestBean](BulkFetchIssueRequestBean.md) | A JSON object containing the information about which issues and fields to fetch. | |

### Return type

[**BulkIssueResults**](BulkIssueResults.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. A response may contain both successful issues and issue errors. |  -  |
| **400** | Returned if no issue IDs/keys were present, or more than 100 issue IDs/keys were requested. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIssue

> CreatedIssue createIssue(issueUpdateDetails, updateHistory)

Create issue

Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set.  The content of the issue or subtask is defined using &#x60;update&#x60; and &#x60;fields&#x60;. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get). These are the same fields that appear on the issue\&#39;s create screen. Note that the &#x60;description&#x60;, &#x60;environment&#x60;, and any &#x60;textarea&#x60; type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (&#x60;textfield&#x60;) accept a string and don\&#39;t handle Atlassian Document Format content.  Creating a subtask differs from creating an issue as follows:   *  &#x60;issueType&#x60; must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get) to find subtask issue types).  *  &#x60;parent&#x60; must contain the ID or key of the parent issue.  In a next-gen project any issue may be made a child providing that the parent and child are members of the same project.  **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue or subtask is created.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { CreateIssueRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // IssueUpdateDetails
    issueUpdateDetails: {"fields":{"assignee":{"id":"5b109f2e9729b51b54dc274d"},"components":[{"id":"10000"}],"customfield_10000":"09/Jun/19","customfield_20000":"06/Jul/19 3:25 PM","customfield_30000":["10000","10002"],"customfield_40000":{"content":[{"content":[{"text":"Occurs on all orders","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"customfield_50000":{"content":[{"content":[{"text":"Could impact day-to-day work.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"customfield_60000":"jira-software-users","customfield_70000":["jira-administrators","jira-software-users"],"customfield_80000":{"value":"red"},"description":{"content":[{"content":[{"text":"Order entry fails when selecting supplier.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"duedate":"2019-05-11","environment":{"content":[{"content":[{"text":"UAT","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"fixVersions":[{"id":"10001"}],"issuetype":{"id":"10000"},"labels":["bugfix","blitz_test"],"parent":{"key":"PROJ-123"},"priority":{"id":"20000"},"project":{"id":"10000"},"reporter":{"id":"5b10a2844c20165700ede21g"},"security":{"id":"10000"},"summary":"Main order flow broken","timetracking":{"originalEstimate":"10","remainingEstimate":"5"},"versions":[{"id":"10000"}]},"update":{}},
    // boolean | Whether the project in which the issue is created is added to the user\'s **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user\'s history for a project. These values are then used to provide defaults on the issue create screen. (optional)
    updateHistory: true,
  } satisfies CreateIssueRequest;

  try {
    const data = await api.createIssue(body);
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
| **issueUpdateDetails** | [IssueUpdateDetails](IssueUpdateDetails.md) |  | |
| **updateHistory** | `boolean` | Whether the project in which the issue is created is added to the user\&#39;s **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user\&#39;s history for a project. These values are then used to provide defaults on the issue create screen. | [Optional] [Defaults to `false`] |

### Return type

[**CreatedIssue**](CreatedIssue.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request:   *  is missing required fields.  *  contains invalid field values.  *  contains fields that cannot be set for the issue type.  *  is by a user who does not have the necessary permission.  *  is to create a subtype in a project different that of the parent issue.  *  is for a subtask when the option to create subtasks is disabled.  *  is invalid for any other reason. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **422** | Returned if a configuration problem prevents the creation of the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createIssues

> CreatedIssues createIssues(issuesUpdateBean)

Bulk create issue

Creates upto **50** issues and, where the option to create subtasks is enabled in Jira, subtasks. Transitions may be applied, to move the issues or subtasks to a workflow step other than the default start step, and issue properties set.  The content of each issue or subtask is defined using &#x60;update&#x60; and &#x60;fields&#x60;. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get). These are the same fields that appear on the issues\&#39; create screens. Note that the &#x60;description&#x60;, &#x60;environment&#x60;, and any &#x60;textarea&#x60; type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (&#x60;textfield&#x60;) accept a string and don\&#39;t handle Atlassian Document Format content.  Creating a subtask differs from creating an issue as follows:   *  &#x60;issueType&#x60; must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-3-issue-createmeta-get) to find subtask issue types).  *  &#x60;parent&#x60; the must contain the ID or key of the parent issue.  **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which each issue or subtask is created.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { CreateIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // IssuesUpdateBean
    issuesUpdateBean: {"issueUpdates":[{"fields":{"assignee":{"id":"5b109f2e9729b51b54dc274d"},"components":[{"id":"10000"}],"customfield_10000":"09/Jun/19","customfield_20000":"06/Jul/19 3:25 PM","customfield_30000":["10000","10002"],"customfield_40000":{"content":[{"content":[{"text":"Occurs on all orders","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"customfield_50000":{"content":[{"content":[{"text":"Could impact day-to-day work.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"customfield_60000":"jira-software-users","customfield_70000":["jira-administrators","jira-software-users"],"customfield_80000":{"value":"red"},"description":{"content":[{"content":[{"text":"Order entry fails when selecting supplier.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"duedate":"2011-03-11","environment":{"content":[{"content":[{"text":"UAT","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"fixVersions":[{"id":"10001"}],"issuetype":{"id":"10000"},"labels":["bugfix","blitz_test"],"priority":{"id":"20000"},"project":{"id":"10000"},"reporter":{"id":"5b10a2844c20165700ede21g"},"security":{"id":"10000"},"summary":"Main order flow broken","timetracking":{"originalEstimate":"10","remainingEstimate":"5"},"versions":[{"id":"10000"}]},"update":{"worklog":[{"add":{"started":"2019-07-05T11:05:00.000+0000","timeSpent":"60m"}}]}},{"fields":{"assignee":{"id":"5b109f2e9729b51b54dc274d"},"components":[{"id":"10000"}],"customfield_10000":"09/Jun/19","customfield_20000":"06/Jul/19 3:25 PM","customfield_30000":["10000","10002"],"customfield_40000":{"content":[{"content":[{"text":"Occurs on all orders","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"customfield_50000":{"content":[{"content":[{"text":"Could impact day-to-day work.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"customfield_60000":"jira-software-users","customfield_70000":["jira-administrators","jira-software-users"],"customfield_80000":{"value":"red"},"description":{"content":[{"content":[{"text":"Order remains pending after approved.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"duedate":"2019-04-16","environment":{"content":[{"content":[{"text":"UAT","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"fixVersions":[{"id":"10001"}],"issuetype":{"id":"10000"},"labels":["new_release"],"priority":{"id":"20000"},"project":{"id":"1000"},"reporter":{"id":"5b10a2844c20165700ede21g"},"security":{"id":"10000"},"summary":"Order stuck in pending","timetracking":{"originalEstimate":"15","remainingEstimate":"5"},"versions":[{"id":"10000"}]},"update":{}}]},
  } satisfies CreateIssuesRequest;

  try {
    const data = await api.createIssues(body);
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
| **issuesUpdateBean** | [IssuesUpdateBean](IssuesUpdateBean.md) |  | |

### Return type

[**CreatedIssues**](CreatedIssues.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if any of the issue or subtask creation requests were successful. A request may be unsuccessful when it:   *  is missing required fields.  *  contains invalid field values.  *  contains fields that cannot be set for the issue type.  *  is by a user who does not have the necessary permission.  *  is to create a subtype in a project different that of the parent issue.  *  is for a subtask when the option to create subtasks is disabled.  *  is invalid for any other reason. |  -  |
| **400** | Returned if all requests are invalid. Requests may be unsuccessful when they:   *  are missing required fields.  *  contain invalid field values.  *  contain fields that cannot be set for the issue type.  *  are by a user who does not have the necessary permission.  *  are to create a subtype in a project different that of the parent issue.  *  is for a subtask when the option to create subtasks is disabled.  *  are invalid for any other reason. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIssue

> deleteIssue(issueIdOrKey, deleteSubtasks)

Delete issue

Deletes an issue.  An issue cannot be deleted if it has one or more subtasks. To delete an issue with subtasks, set &#x60;deleteSubtasks&#x60;. This causes the issue\&#39;s subtasks to be deleted with the issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Delete issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { DeleteIssueRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // 'true' | 'false' | Whether the issue\'s subtasks are deleted when the issue is deleted. (optional)
    deleteSubtasks: deleteSubtasks_example,
  } satisfies DeleteIssueRequest;

  try {
    const data = await api.deleteIssue(body);
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
| **deleteSubtasks** | `true`, `false` | Whether the issue\&#39;s subtasks are deleted when the issue is deleted. | [Optional] [Defaults to `&#39;false&#39;`] [Enum: true, false] |

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
| **400** | Returned if the issue has subtasks and &#x60;deleteSubtasks&#x60; is not set to *true*. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have permission to delete the issue. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## doTransition

> any doTransition(issueIdOrKey, issueUpdateDetails)

Transition issue

Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen.  sortByCategory To update the fields on the transition screen, specify the fields in the &#x60;fields&#x60; or &#x60;update&#x60; parameters in the request body. Get details about the fields using [ Get transitions](#api-rest-api-3-issue-issueIdOrKey-transitions-get) with the &#x60;transitions.fields&#x60; expand.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Transition issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { DoTransitionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // IssueUpdateDetails
    issueUpdateDetails: {"fields":{"assignee":{"name":"bob"},"resolution":{"name":"Fixed"}},"historyMetadata":{"activityDescription":"Complete order processing","actor":{"avatarUrl":"http://mysystem/avatar/tony.jpg","displayName":"Tony","id":"tony","type":"mysystem-user","url":"http://mysystem/users/tony"},"cause":{"id":"myevent","type":"mysystem-event"},"description":"From the order testing process","extraData":{"Iteration":"10a","Step":"4"},"generator":{"id":"mysystem-1","type":"mysystem-application"},"type":"myplugin:type"},"transition":{"id":"5"},"update":{"comment":[{"add":{"body":{"content":[{"content":[{"text":"Bug has been fixed","type":"text"}],"type":"paragraph"}],"type":"doc","version":1}}}]}},
  } satisfies DoTransitionRequest;

  try {
    const data = await api.doTransition(body);
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
| **issueUpdateDetails** | [IssueUpdateDetails](IssueUpdateDetails.md) |  | |

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
| **400** | Returned if:   *  no transition is specified.  *  the user does not have permission to transition the issue.  *  a field that isn\&#39;t included on the transition screen is defined in &#x60;fields&#x60; or &#x60;update&#x60;.  *  a field is specified in both &#x60;fields&#x60; and &#x60;update&#x60;.  *  the request is invalid for any other reason. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |
| **409** | Returned if the issue could not be updated due to a conflicting update. |  -  |
| **413** | Returned if a per-issue limit has been breached for one of the following fields:   *  comments  *  worklogs  *  attachments  *  issue links  *  remote issue links |  -  |
| **422** | Returned if a configuration problem prevents the creation of the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editIssue

> any editIssue(issueIdOrKey, issueUpdateDetails, notifyUsers, overrideScreenSecurity, overrideEditableFlag, returnIssue, expand)

Edit issue

Edits an issue. Issue properties may be updated as part of the edit. Please note that issue transition is not supported and is ignored here. To transition an issue, please use [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post).  The edits to the issue\&#39;s fields are defined using &#x60;update&#x60; and &#x60;fields&#x60;. The fields that can be edited are determined using [ Get edit issue metadata](#api-rest-api-3-issue-issueIdOrKey-editmeta-get).  The parent field may be set by key or ID. For standard issue types, the parent may be removed by setting &#x60;update.parent.set.none&#x60; to *true*. Note that the &#x60;description&#x60;, &#x60;environment&#x60;, and any &#x60;textarea&#x60; type custom fields (multi-line text fields) take Atlassian Document Format content. Single line custom fields (&#x60;textfield&#x60;) accept a string and don\&#39;t handle Atlassian Document Format content.  Connect apps having an app user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), can override the screen security configuration using &#x60;overrideScreenSecurity&#x60; and &#x60;overrideEditableFlag&#x60;.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { EditIssueRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // IssueUpdateDetails
    issueUpdateDetails: {"fields":{"customfield_10000":{"content":[{"content":[{"text":"Investigation underway","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"customfield_10010":1,"summary":"Completed orders still displaying in pending"},"historyMetadata":{"activityDescription":"Complete order processing","actor":{"avatarUrl":"http://mysystem/avatar/tony.jpg","displayName":"Tony","id":"tony","type":"mysystem-user","url":"http://mysystem/users/tony"},"cause":{"id":"myevent","type":"mysystem-event"},"description":"From the order testing process","extraData":{"Iteration":"10a","Step":"4"},"generator":{"id":"mysystem-1","type":"mysystem-application"},"type":"myplugin:type"},"properties":[{"key":"key1","value":"Order number 10784"},{"key":"key2","value":"Order number 10923"}],"update":{"components":[{"set":""}],"labels":[{"add":"triaged"},{"remove":"blocker"}],"summary":[{"set":"Bug in business logic"}],"timetracking":[{"edit":{"originalEstimate":"1w 1d","remainingEstimate":"4d"}}]}},
    // boolean | Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn\'t have the necessary permission the request is ignored. (optional)
    notifyUsers: true,
    // boolean | Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideScreenSecurity: true,
    // boolean | Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideEditableFlag: true,
    // boolean | Whether the response should contain the issue with fields edited in this request. The returned issue will have the same format as in the [Get issue API](#api-rest-api-3-issue-issueidorkey-get). (optional)
    returnIssue: true,
    // string | The Get issue API expand parameter to use in the response if the `returnIssue` parameter is `true`. (optional)
    expand: expand_example,
  } satisfies EditIssueRequest;

  try {
    const data = await api.editIssue(body);
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
| **issueUpdateDetails** | [IssueUpdateDetails](IssueUpdateDetails.md) |  | |
| **notifyUsers** | `boolean` | Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn\&#39;t have the necessary permission the request is ignored. | [Optional] [Defaults to `true`] |
| **overrideScreenSecurity** | `boolean` | Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |
| **overrideEditableFlag** | `boolean` | Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |
| **returnIssue** | `boolean` | Whether the response should contain the issue with fields edited in this request. The returned issue will have the same format as in the [Get issue API](#api-rest-api-3-issue-issueidorkey-get). | [Optional] [Defaults to `false`] |
| **expand** | `string` | The Get issue API expand parameter to use in the response if the &#x60;returnIssue&#x60; parameter is &#x60;true&#x60;. | [Optional] [Defaults to `&#39;&#39;`] |

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
| **200** | Returned if the request is successful and the &#x60;returnIssue&#x60; parameter is &#x60;true&#x60; |  -  |
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  the request body is missing.  *  the user does not have the necessary permission to edit one or more fields.  *  the request includes one or more fields that are not found or are not associated with the issue\&#39;s edit screen.  *  the request includes an invalid transition. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user uses &#x60;overrideScreenSecurity&#x60; or &#x60;overrideEditableFlag&#x60; but doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |
| **409** | Returned if the issue could not be updated due to a conflicting update. |  -  |
| **422** | Returned if a configuration problem prevents the issue being updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportArchivedIssues

> ExportArchivedIssuesTaskProgressResponse exportArchivedIssues(archivedIssuesFilterRequest)

Export archived issue(s)

Enables admins to retrieve details of all archived issues. Upon a successful request, the admin who submitted it will receive an email with a link to download a CSV file with the issue details.  Note that this API only exports the values of system fields and archival-specific fields (&#x60;ArchivedBy&#x60; and &#x60;ArchivedDate&#x60;). Custom fields aren\&#39;t supported.  **[Permissions](#permissions) required:** Jira admin or site admin: [global permission](https://confluence.atlassian.com/x/x4dKLg)  **License required:** Premium or Enterprise  **Signed-in users only:** This API can\&#39;t be accessed anonymously.  **Rate limiting:** Only a single request can be active at any given time.     

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { ExportArchivedIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // ArchivedIssuesFilterRequest | You can filter the issues in your request by the `projects`, `archivedBy`, `archivedDate`, `issueTypes`, and `reporters` fields. All filters are optional. If you don\'t provide any filters, you\'ll get a list of up to one million archived issues.
    archivedIssuesFilterRequest: {"archivedBy":["uuid-rep-001","uuid-rep-002"],"archivedDate":{"dateAfter":"2023-01-01","dateBefore":"2023-01-12"},"archivedDateRange":{"dateAfter":"2023-01-01","dateBefore":"2023-01-12"},"issueTypes":["10001","10002"],"projects":["FOO","BAR"],"reporters":["uuid-rep-001","uuid-rep-002"]},
  } satisfies ExportArchivedIssuesRequest;

  try {
    const data = await api.exportArchivedIssues(body);
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
| **archivedIssuesFilterRequest** | [ArchivedIssuesFilterRequest](ArchivedIssuesFilterRequest.md) | You can filter the issues in your request by the &#x60;projects&#x60;, &#x60;archivedBy&#x60;, &#x60;archivedDate&#x60;, &#x60;issueTypes&#x60;, and &#x60;reporters&#x60; fields. All filters are optional. If you don\&#39;t provide any filters, you\&#39;ll get a list of up to one million archived issues. | |

### Return type

[**ExportArchivedIssuesTaskProgressResponse**](ExportArchivedIssuesTaskProgressResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returns the details of your export task. You can use the [get task](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-tasks/#api-rest-api-3-task-taskid-get) API to view the progress of your request. |  -  |
| **400** | Returned when:   *  The request is invalid, or the filters provided are incorrect  *  You requested too many issues for export. The limit is one million issues per request |  -  |
| **401** | Returned if no issues were unarchived because the provided authentication credentials are either missing or invalid. |  -  |
| **403** | Returned if no issues were unarchived because the user lacks the required Jira admin or site admin permissions. |  -  |
| **412** | Returned if a request to export archived issues is already running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBulkChangelogs

> BulkChangelogResponseBean getBulkChangelogs(bulkChangelogRequestBean)

Bulk fetch changelogs

Bulk fetch changelogs for multiple issues and filter by fields  Returns a paginated list of all changelogs for given issues sorted by changelog date and issue IDs, starting from the oldest changelog and smallest issue ID.  Issues are identified by their ID or key, and optionally changelogs can be filtered by their field IDs. You can request the changelogs of up to 1000 issues and can filter them by up to 10 field IDs.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the projects that the issues are in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issues.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetBulkChangelogsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // BulkChangelogRequestBean | A JSON object containing the bulk fetch changelog request filters such as issue IDs and field IDs.
    bulkChangelogRequestBean: ...,
  } satisfies GetBulkChangelogsRequest;

  try {
    const data = await api.getBulkChangelogs(body);
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
| **bulkChangelogRequestBean** | [BulkChangelogRequestBean](BulkChangelogRequestBean.md) | A JSON object containing the bulk fetch changelog request filters such as issue IDs and field IDs. | |

### Return type

[**BulkChangelogResponseBean**](BulkChangelogResponseBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if there are input validation problems such as no issue IDs/keys were present, or more than 1000 issue IDs/keys were requested. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChangeLogs

> PageBeanChangelog getChangeLogs(issueIdOrKey, startAt, maxResults)

Get changelogs

Returns a [paginated](#pagination) list of all changelogs for an issue sorted by date, starting from the oldest.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetChangeLogsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetChangeLogsRequest;

  try {
    const data = await api.getChangeLogs(body);
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
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |

### Return type

[**PageBeanChangelog**](PageBeanChangelog.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChangeLogsByIds

> PageOfChangelogs getChangeLogsByIds(issueIdOrKey, issueChangelogIds)

Get changelogs by IDs

Returns changelogs for an issue specified by a list of changelog IDs.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetChangeLogsByIdsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // IssueChangelogIds
    issueChangelogIds: {"changelogIds":[10001,10002]},
  } satisfies GetChangeLogsByIdsRequest;

  try {
    const data = await api.getChangeLogsByIds(body);
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
| **issueChangelogIds** | [IssueChangelogIds](IssueChangelogIds.md) |  | |

### Return type

[**PageOfChangelogs**](PageOfChangelogs.md)

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
| **404** | Returned if the issue is not found or the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCreateIssueMeta

> IssueCreateMetadata getCreateIssueMeta(projectIds, projectKeys, issuetypeIds, issuetypeNames, expand)

Get create issue metadata

Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in [ Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).  Deprecated, see [Create Issue Meta Endpoint Deprecation Notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-1304).  The request can be restricted to specific projects or issue types using the query parameters. The response will contain information for the valid projects, issue types, or project and issue type combinations requested. Note that invalid project, issue type, or project and issue type combinations do not generate errors.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetCreateIssueMetaRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // Array<string> | List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`. (optional)
    projectIds: ...,
    // Array<string> | List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`. (optional)
    projectKeys: ...,
    // Array<string> | List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`. (optional)
    issuetypeIds: ...,
    // Array<string> | List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`. (optional)
    issuetypeNames: ...,
    // string | Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post). (optional)
    expand: expand_example,
  } satisfies GetCreateIssueMetaRequest;

  try {
    const data = await api.getCreateIssueMeta(body);
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
| **projectIds** | `Array<string>` | List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, &#x60;projectIds&#x3D;10000,10001&amp;projectIds&#x3D;10020,10021&#x60;. This parameter may be provided with &#x60;projectKeys&#x60;. | [Optional] |
| **projectKeys** | `Array<string>` | List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, &#x60;projectKeys&#x3D;proj1,proj2&amp;projectKeys&#x3D;proj3&#x60;. This parameter may be provided with &#x60;projectIds&#x60;. | [Optional] |
| **issuetypeIds** | `Array<string>` | List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, &#x60;issuetypeIds&#x3D;10000,10001&amp;issuetypeIds&#x3D;10020,10021&#x60;. This parameter may be provided with &#x60;issuetypeNames&#x60;. | [Optional] |
| **issuetypeNames** | `Array<string>` | List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, &#x60;issuetypeNames&#x3D;name1,name2&amp;issuetypeNames&#x3D;name3&#x60;. This parameter may be provided with &#x60;issuetypeIds&#x60;. | [Optional] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts &#x60;projects.issuetypes.fields&#x60;, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the &#x60;fields&#x60; and &#x60;update&#x60; fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post). | [Optional] [Defaults to `undefined`] |

### Return type

[**IssueCreateMetadata**](IssueCreateMetadata.md)

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


## getCreateIssueMetaIssueTypeId

> PageOfCreateMetaIssueTypeWithField getCreateIssueMetaIssueTypeId(projectIdOrKey, issueTypeId, startAt, maxResults)

Get create field metadata for a project and issue type id

Returns a page of field metadata for a specified project and issuetype id. Use the information to populate the requests in [ Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetCreateIssueMetaIssueTypeIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the project.
    projectIdOrKey: projectIdOrKey_example,
    // string | The issuetype ID.
    issueTypeId: issueTypeId_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetCreateIssueMetaIssueTypeIdRequest;

  try {
    const data = await api.getCreateIssueMetaIssueTypeId(body);
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
| **projectIdOrKey** | `string` | The ID or key of the project. | [Defaults to `undefined`] |
| **issueTypeId** | `string` | The issuetype ID. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**PageOfCreateMetaIssueTypeWithField**](PageOfCreateMetaIssueTypeWithField.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCreateIssueMetaIssueTypes

> PageOfCreateMetaIssueTypes getCreateIssueMetaIssueTypes(projectIdOrKey, startAt, maxResults)

Get create metadata issue types for a project

Returns a page of issue type metadata for a specified project. Use the information to populate the requests in [ Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetCreateIssueMetaIssueTypesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the project.
    projectIdOrKey: projectIdOrKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetCreateIssueMetaIssueTypesRequest;

  try {
    const data = await api.getCreateIssueMetaIssueTypes(body);
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
| **projectIdOrKey** | `string` | The ID or key of the project. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**PageOfCreateMetaIssueTypes**](PageOfCreateMetaIssueTypes.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEditIssueMeta

> IssueUpdateMetadata getEditIssueMeta(issueIdOrKey, overrideScreenSecurity, overrideEditableFlag)

Get edit issue metadata

Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in [Edit issue](#api-rest-api-3-issue-issueIdOrKey-put).  This endpoint will check for these conditions:  1.  Field is available on a field screen - through screen, screen scheme, issue type screen scheme, and issue type scheme configuration. &#x60;overrideScreenSecurity&#x3D;true&#x60; skips this condition. 2.  Field is visible in the [field configuration](https://support.atlassian.com/jira-cloud-administration/docs/change-a-field-configuration/). &#x60;overrideScreenSecurity&#x3D;true&#x60; skips this condition. 3.  Field is shown on the issue: each field has different conditions here. For example: Attachment field only shows if attachments are enabled. Assignee only shows if user has permissions to assign the issue. 4.  If a field is custom then it must have valid custom field context, applicable for its project and issue type. All system fields are assumed to have context in all projects and all issue types. 5.  Issue has a project, issue type, and status defined. 6.  Issue is assigned to a valid workflow, and the current status has assigned a workflow step. &#x60;overrideEditableFlag&#x3D;true&#x60; skips this condition. 7.  The current workflow step is editable. This is true by default, but [can be disabled by setting](https://support.atlassian.com/jira-cloud-administration/docs/use-workflow-properties/) the &#x60;jira.issue.editable&#x60; property to &#x60;false&#x60;. &#x60;overrideEditableFlag&#x3D;true&#x60; skips this condition. 8.  User has [Edit issues permission](https://support.atlassian.com/jira-cloud-administration/docs/permissions-for-company-managed-projects/). 9.  Workflow permissions allow editing a field. This is true by default but [can be modified](https://support.atlassian.com/jira-cloud-administration/docs/use-workflow-properties/) using &#x60;jira.permission.*&#x60; workflow properties.  Fields hidden using [Issue layout settings page](https://support.atlassian.com/jira-software-cloud/docs/configure-field-layout-in-the-issue-view/) remain editable.  Connect apps having an app user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), can return additional details using:   *  &#x60;overrideScreenSecurity&#x60; When this flag is &#x60;true&#x60;, then this endpoint skips checking if fields are available through screens, and field configuration (conditions 1. and 2. from the list above).  *  &#x60;overrideEditableFlag&#x60; When this flag is &#x60;true&#x60;, then this endpoint skips checking if workflow is present and if the current step is editable (conditions 6. and 7. from the list above).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  Note: For any fields to be editable the user must have the *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetEditIssueMetaRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // boolean | Whether hidden fields are returned. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideScreenSecurity: true,
    // boolean | Whether non-editable fields are returned. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideEditableFlag: true,
  } satisfies GetEditIssueMetaRequest;

  try {
    const data = await api.getEditIssueMeta(body);
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
| **overrideScreenSecurity** | `boolean` | Whether hidden fields are returned. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |
| **overrideEditableFlag** | `boolean` | Whether non-editable fields are returned. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |

### Return type

[**IssueUpdateMetadata**](IssueUpdateMetadata.md)

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
| **403** | Returned if the user uses an override parameter but doesn\&#39;t have permission to do so. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEvents

> Array&lt;IssueEvent&gt; getEvents()

Get events

Returns all issue events.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetEventsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  try {
    const data = await api.getEvents();
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

[**Array&lt;IssueEvent&gt;**](IssueEvent.md)

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
| **403** | Returned if the user does not have permission to complete this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssue

> IssueBean getIssue(issueIdOrKey, fields, fieldsByKeys, expand, properties, updateHistory, failFast)

Get issue

Returns the details for an issue.  The issue is identified by its ID or key, however, if the identifier doesn\&#39;t match an issue, a case-insensitive search and check for moved issues is performed. If a matching issue is found its details are returned, a 302 or other redirect is **not** returned. The issue key returned in the response is the key of the issue found.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetIssueRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // Array<string> | A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all (default) fields except description.  *  `*navigable,-comment` Returns all navigable fields except comment.  This parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.  Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields. (optional)
    fields: ...,
    // boolean | Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field\'s key may differ from its ID. (optional)
    fieldsByKeys: true,
    // string | Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Returns a JSON array for each version of a field\'s value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored. (optional)
    expand: expand_example,
    // Array<string> | A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:   *  `*all` Returns all issue properties.  *  Any issue property key, prefixed with a minus to exclude.  Examples:   *  `*all` Returns all properties.  *  `*all,-prop1` Returns all properties except `prop1`.  *  `prop1,prop2` Returns `prop1` and `prop2` properties.  This parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`. (optional)
    properties: ...,
    // boolean | Whether the project in which the issue is created is added to the user\'s **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field. (optional)
    updateHistory: true,
    // boolean | Whether to fail the request quickly in case of an error while loading fields for an issue. For `failFast=true`, if one field fails, the entire operation fails. For `failFast=false`, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s). (optional)
    failFast: true,
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **fields** | `Array<string>` | A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:   *  &#x60;*all&#x60; Returns all fields.  *  &#x60;*navigable&#x60; Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  &#x60;summary,comment&#x60; Returns only the summary and comments fields.  *  &#x60;-description&#x60; Returns all (default) fields except description.  *  &#x60;*navigable,-comment&#x60; Returns all navigable fields except comment.  This parameter may be specified multiple times. For example, &#x60;fields&#x3D;field1,field2&amp; fields&#x3D;field3&#x60;.  Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields. | [Optional] |
| **fieldsByKeys** | `boolean` | Whether fields in &#x60;fields&#x60; are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field\&#39;s key may differ from its ID. | [Optional] [Defaults to `false`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;renderedFields&#x60; Returns field values rendered in HTML format.  *  &#x60;names&#x60; Returns the display name of each field.  *  &#x60;schema&#x60; Returns the schema describing a field type.  *  &#x60;transitions&#x60; Returns all possible transitions for the issue.  *  &#x60;editmeta&#x60; Returns information about how each field can be edited.  *  &#x60;changelog&#x60; Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  &#x60;versionedRepresentations&#x60; Returns a JSON array for each version of a field\&#39;s value, with the highest number representing the most recent version. Note: When included in the request, the &#x60;fields&#x60; parameter is ignored. | [Optional] [Defaults to `undefined`] |
| **properties** | `Array<string>` | A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:   *  &#x60;*all&#x60; Returns all issue properties.  *  Any issue property key, prefixed with a minus to exclude.  Examples:   *  &#x60;*all&#x60; Returns all properties.  *  &#x60;*all,-prop1&#x60; Returns all properties except &#x60;prop1&#x60;.  *  &#x60;prop1,prop2&#x60; Returns &#x60;prop1&#x60; and &#x60;prop2&#x60; properties.  This parameter may be specified multiple times. For example, &#x60;properties&#x3D;prop1,prop2&amp; properties&#x3D;prop3&#x60;. | [Optional] |
| **updateHistory** | `boolean` | Whether the project in which the issue is created is added to the user\&#39;s **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) &#x60;lastViewed&#x60; field. | [Optional] [Defaults to `false`] |
| **failFast** | `boolean` | Whether to fail the request quickly in case of an error while loading fields for an issue. For &#x60;failFast&#x3D;true&#x60;, if one field fails, the entire operation fails. For &#x60;failFast&#x3D;false&#x60;, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s). | [Optional] [Defaults to `false`] |

### Return type

[**IssueBean**](IssueBean.md)

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
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueLimitReport

> IssueLimitReportResponseBean getIssueLimitReport(isReturningKeys)

Get issue limit report

Returns all issues breaching and approaching per-issue limits.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) is required for the project the issues are in. Results may be incomplete otherwise  *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetIssueLimitReportRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // boolean | Return issue keys instead of issue ids in the response.  Usage: Add `?isReturningKeys=true` to the end of the path to request issue keys. (optional)
    isReturningKeys: true,
  } satisfies GetIssueLimitReportRequest;

  try {
    const data = await api.getIssueLimitReport(body);
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
| **isReturningKeys** | `boolean` | Return issue keys instead of issue ids in the response.  Usage: Add &#x60;?isReturningKeys&#x3D;true&#x60; to the end of the path to request issue keys. | [Optional] [Defaults to `false`] |

### Return type

[**IssueLimitReportResponseBean**](IssueLimitReportResponseBean.md)

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
| **403** | Returned if the user does not have permission to complete this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTransitions

> Transitions getTransitions(issueIdOrKey, expand, transitionId, skipRemoteOnlyCondition, includeUnavailableTransitions, sortByOpsBarAndStatus)

Get transitions

Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue\&#39;s status.  Note, if a request is made for a transition that does not exist or cannot be performed on the issue, given its status, the response will return any empty transitions list.  This operation can be accessed anonymously.  **[Permissions](#permissions) required: A list or transition is returned only when the user has:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  However, if the user does not have the *Transition issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) the response will not list any transitions.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { GetTransitionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post). (optional)
    expand: expand_example,
    // string | The ID of the transition. (optional)
    transitionId: transitionId_example,
    // boolean | Whether transitions with the condition *Hide From User Condition* are included in the response. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    skipRemoteOnlyCondition: true,
    // boolean | Whether details of transitions that fail a condition are included in the response (optional)
    includeUnavailableTransitions: true,
    // boolean | Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value. (optional)
    sortByOpsBarAndStatus: true,
  } satisfies GetTransitionsRequest;

  try {
    const data = await api.getTransitions(body);
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
| **expand** | `string` | Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts &#x60;transitions.fields&#x60;, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the &#x60;fields&#x60; and &#x60;update&#x60; fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post). | [Optional] [Defaults to `undefined`] |
| **transitionId** | `string` | The ID of the transition. | [Optional] [Defaults to `undefined`] |
| **skipRemoteOnlyCondition** | `boolean` | Whether transitions with the condition *Hide From User Condition* are included in the response. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |
| **includeUnavailableTransitions** | `boolean` | Whether details of transitions that fail a condition are included in the response | [Optional] [Defaults to `false`] |
| **sortByOpsBarAndStatus** | `boolean` | Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value. | [Optional] [Defaults to `false`] |

### Return type

[**Transitions**](Transitions.md)

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
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## notify

> any notify(issueIdOrKey, notification)

Send notification for issue

Creates an email notification for an issue and adds it to the mail queue.  **[Permissions](#permissions) required:**   *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { NotifyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // string | ID or key of the issue that the notification is sent for.
    issueIdOrKey: issueIdOrKey_example,
    // Notification | The request object for the notification and recipients.
    notification: {"htmlBody":"The <strong>latest</strong> test results for this ticket are now available.","restrict":{"groupIds":[],"groups":[{"name":"notification-group"}],"permissions":[{"key":"BROWSE"}]},"subject":"Latest test results","textBody":"The latest test results for this ticket are now available.","to":{"assignee":false,"groupIds":[],"groups":[{"name":"notification-group"}],"reporter":false,"users":[{"accountId":"5b10a2844c20165700ede21g","active":false}],"voters":true,"watchers":true}},
  } satisfies NotifyRequest;

  try {
    const data = await api.notify(body);
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
| **issueIdOrKey** | `string` | ID or key of the issue that the notification is sent for. | [Defaults to `undefined`] |
| **notification** | [Notification](Notification.md) | The request object for the notification and recipients. | |

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
| **204** | Returned if the email is queued for sending. |  -  |
| **400** | Returned if:   *  the recipient is the same as the calling user.  *  the recipient is invalid. For example, the recipient is set to the assignee, but the issue is unassigned.  *  the issueIdOrKey is of an invalid/null issue.  *  the request is invalid. For example, required fields are missing or have invalid values. |  -  |
| **403** | Returned if:   *  outgoing emails are disabled.  *  no SMTP server is configured. |  -  |
| **404** | Returned if the issue is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unarchiveIssues

> IssueArchivalSyncResponse unarchiveIssues(issueArchivalSyncRequest)

Unarchive issue(s) by issue keys/ID

Enables admins to unarchive up to 1000 issues in a single request using issue ID/key, returning details of the issue(s) unarchived in the process and the errors encountered, if any.  **Note that:**   *  you can\&#39;t unarchive subtasks directly, only through their parent issues  *  you can only unarchive issues from software, service management, and business projects  **[Permissions](#permissions) required:** Jira admin or site admin: [global permission](https://confluence.atlassian.com/x/x4dKLg)  **License required:** Premium or Enterprise  **Signed-in users only:** This API can\&#39;t be accessed anonymously.     

### Example

```ts
import {
  Configuration,
  IssuesApi,
} from 'jira-cloud-api';
import type { UnarchiveIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuesApi(config);

  const body = {
    // IssueArchivalSyncRequest | Contains a list of issue keys or IDs to be unarchived.
    issueArchivalSyncRequest: {"issueIdsOrKeys":["PR-1","1001","PROJECT-2"]},
  } satisfies UnarchiveIssuesRequest;

  try {
    const data = await api.unarchiveIssues(body);
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
| **issueArchivalSyncRequest** | [IssueArchivalSyncRequest](IssueArchivalSyncRequest.md) | Contains a list of issue keys or IDs to be unarchived. | |

### Return type

[**IssueArchivalSyncResponse**](IssueArchivalSyncResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if there is at least one valid issue to unarchive in the request. It will return the count of unarchived issues, which also includes the count of the subtasks unarchived, and it will show the detailed errors for those issues which are not unarchived. |  -  |
| **400** | Returned if none of the issues in the request are eligible to be unarchived. Possible reasons:   *  the issues weren\&#39;t found  *  the issues are subtasks  *  the issues belong to archived projects |  -  |
| **401** | Returned if no issues were unarchived because the provided authentication credentials are either missing or invalid. |  -  |
| **403** | Returned if no issues were unarchived because the user lacks the required Jira admin or site admin permissions. |  -  |
| **412** | Returned if one or more issues were successfully unarchived, but the operation was incomplete because the number of issue IDs or keys provided exceeds 1000. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

