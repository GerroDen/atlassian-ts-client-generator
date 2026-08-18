# JiraIntegrationApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIssue**](JiraIntegrationApi.md#createissue) | **POST** /jira/latest/comments/{commentId}/issues | Create Jira Issue |
| [**getBackfillSyncReport**](JiraIntegrationApi.md#getbackfillsyncreport) | **GET** /jira-dev/latest/devinfo-backfill/report | Get repository backfill tasks that failed and their associated errors |
| [**getBackfillSyncStatus**](JiraIntegrationApi.md#getbackfillsyncstatus) | **GET** /jira-dev/latest/devinfo-backfill/status | Get Jira development information backfill status |
| [**getCommitsByIssueKey**](JiraIntegrationApi.md#getcommitsbyissuekey) | **GET** /jira/latest/issues/{issueKey}/commits | Get changesets for issue key |
| [**getEnhancedEntityLinkForProject**](JiraIntegrationApi.md#getenhancedentitylinkforproject) | **GET** /jira/latest/projects/{projectKey}/primary-enhanced-entitylink | Get entity link |
| [**getIssueKeysForPullRequest**](JiraIntegrationApi.md#getissuekeysforpullrequest) | **GET** /jira/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/issues | Get issues for a pull request |
| [**startBackfillSync**](JiraIntegrationApi.md#startbackfillsync) | **POST** /jira-dev/latest/devinfo-backfill | Start a Jira development information backfill sync |
| [**stopBackfillSync**](JiraIntegrationApi.md#stopbackfillsync) | **DELETE** /jira-dev/latest/devinfo-backfill | Stop a Jira development information backfill sync |



## createIssue

> RestCommentJiraIssue createIssue(commentId, applicationId, body)

Create Jira Issue

Create a Jira issue and associate it with a comment on a pull request.  This resource can only be used with comments on a pull request. Attempting to call this resource with a different type of comment (for example, a comment on a commit) will result in an error.    The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository containing the comment to call this resource.  The JSON structure for the create issue format is specified by Jira\&#39;s REST v2 API.

### Example

```ts
import {
  Configuration,
  JiraIntegrationApi,
} from 'bitbucket-api';
import type { CreateIssueRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new JiraIntegrationApi();

  const body = {
    // string | the comment to associate the created Jira issue to
    commentId: commentId_example,
    // string | id of the Jira server (optional)
    applicationId: applicationId_example,
    // string | A String representation of the JSON format Jira create issue request see: <a href=\"https://docs.atlassian.com/jira/REST/server/#api/2/issue-createIssue\">Jira REST API</a> (optional)
    body: body_example,
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
| **commentId** | `string` | the comment to associate the created Jira issue to | [Defaults to `undefined`] |
| **applicationId** | `string` | id of the Jira server | [Optional] [Defaults to `undefined`] |
| **body** | `string` | A String representation of the JSON format Jira create issue request see: &lt;a href&#x3D;\&quot;https://docs.atlassian.com/jira/REST/server/#api/2/issue-createIssue\&quot;&gt;Jira REST API&lt;/a&gt; | [Optional] |

### Return type

[**RestCommentJiraIssue**](RestCommentJiraIssue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created Jira issue key and the associated comment ID |  -  |
| **400** | The specified application link ID does not match any linked Jira instance. |  -  |
| **401** | Authentication with the Jira instance is required. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBackfillSyncReport

> RestJiraBackfillReport getBackfillSyncReport()

Get repository backfill tasks that failed and their associated errors

Get the list of repositories that failed the latest backfill task and their associated errors  The user must have the global **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  JiraIntegrationApi,
} from 'bitbucket-api';
import type { GetBackfillSyncReportRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new JiraIntegrationApi();

  try {
    const data = await api.getBackfillSyncReport();
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

[**RestJiraBackfillReport**](RestJiraBackfillReport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The current report of repositories that have failed to backfill. |  -  |
| **401** | The currently authenticated user has insufficient permissions to perform this operation. |  -  |
| **409** | The feature is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBackfillSyncStatus

> RestJiraBackfillStatus getBackfillSyncStatus()

Get Jira development information backfill status

Returns the status of the Jira development information backfill task, either the one currently running or the most recently completed. The response shows aggregated counts per status for repositories to sync. Possible statuses: NOT_STARTED, QUEUED, SYNCING, SYNCED, CANCELED and ERROR.   The user must have the global **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  JiraIntegrationApi,
} from 'bitbucket-api';
import type { GetBackfillSyncStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new JiraIntegrationApi();

  try {
    const data = await api.getBackfillSyncStatus();
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

[**RestJiraBackfillStatus**](RestJiraBackfillStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The current status of the Jira development information backfill task. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view Jira development information backfill task status. |  -  |
| **409** | The feature is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommitsByIssueKey

> GetCommitsByIssueKey200Response getCommitsByIssueKey(issueKey, maxChanges, start, limit)

Get changesets for issue key

Retrieve a page of changesets associated with the given issue key.

### Example

```ts
import {
  Configuration,
  JiraIntegrationApi,
} from 'bitbucket-api';
import type { GetCommitsByIssueKeyRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new JiraIntegrationApi();

  const body = {
    // string | The issue key to search by
    issueKey: issueKey_example,
    // string | The maximum number of changes to retrieve for each changeset (optional)
    maxChanges: maxChanges_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetCommitsByIssueKeyRequest;

  try {
    const data = await api.getCommitsByIssueKey(body);
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
| **issueKey** | `string` | The issue key to search by | [Defaults to `undefined`] |
| **maxChanges** | `string` | The maximum number of changes to retrieve for each changeset | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCommitsByIssueKey200Response**](GetCommitsByIssueKey200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of detailed changesets |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEnhancedEntityLinkForProject

> RestEnhancedEntityLink getEnhancedEntityLinkForProject(projectKey)

Get entity link

Retrieves the enchanced primary entitylink   The authenticated user must have &lt;strong&gt;PROJECT_READ&lt;/strong&gt; permission for the project having the primary enhanced entitylink.   

### Example

```ts
import {
  Configuration,
  JiraIntegrationApi,
} from 'bitbucket-api';
import type { GetEnhancedEntityLinkForProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new JiraIntegrationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
  } satisfies GetEnhancedEntityLinkForProjectRequest;

  try {
    const data = await api.getEnhancedEntityLinkForProject(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |

### Return type

[**RestEnhancedEntityLink**](RestEnhancedEntityLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The primary enhanced entitylink. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueKeysForPullRequest

> Array&lt;RestJiraIssue&gt; getIssueKeysForPullRequest(projectKey, pullRequestId, repositorySlug)

Get issues for a pull request

Retrieves Jira issue keys that are associated with the commits in the specified pull request. The number of commits checked for issues is limited to a default of 100.

### Example

```ts
import {
  Configuration,
  JiraIntegrationApi,
} from 'bitbucket-api';
import type { GetIssueKeysForPullRequestRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new JiraIntegrationApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The pull request id
    pullRequestId: pullRequestId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetIssueKeysForPullRequestRequest;

  try {
    const data = await api.getIssueKeysForPullRequest(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request id | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestJiraIssue&gt;**](RestJiraIssue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Jira issues keys for the pull request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startBackfillSync

> startBackfillSync(restJiraDevInfoBackfillRequest)

Start a Jira development information backfill sync

Starts an asynchronous repository data backfill to the provided Jira sites. The backfilled data will be available when viewing issues in Jira. Providing a list of repositories or Jira site IDs are optional. If no repositories are provided then all repositories will be backfilled. If no Jira site IDs are provided then data will be sent to all currently configured Jira sites.   The user must have the global **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  JiraIntegrationApi,
} from 'bitbucket-api';
import type { StartBackfillSyncRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new JiraIntegrationApi();

  const body = {
    // RestJiraDevInfoBackfillRequest | Jira development information backfill sync request (optional)
    restJiraDevInfoBackfillRequest: ...,
  } satisfies StartBackfillSyncRequest;

  try {
    const data = await api.startBackfillSync(body);
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
| **restJiraDevInfoBackfillRequest** | [RestJiraDevInfoBackfillRequest](RestJiraDevInfoBackfillRequest.md) | Jira development information backfill sync request | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The backfill task successfully started. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to start a Jira development information backfill task. |  -  |
| **404** | Unable to find any of the supplied projects or repositories. |  -  |
| **409** | The backfill process is already running, or the feature is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stopBackfillSync

> stopBackfillSync()

Stop a Jira development information backfill sync

Interrupts an asynchronous repository data backfill if it is running. There could be a delay before processing stops while signal propagates to asynchronous tasks.   The user must have the global **SYS_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  JiraIntegrationApi,
} from 'bitbucket-api';
import type { StopBackfillSyncRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new JiraIntegrationApi();

  try {
    const data = await api.stopBackfillSync();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The backfill task successfully stopped, or no backfill was in progress. |  -  |
| **401** | The currently authenticated user has insufficient permissions to stop Jira development information backfill tasks. |  -  |
| **409** | The feature is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

