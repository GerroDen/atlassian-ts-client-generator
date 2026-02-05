# IssueWatchersApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addWatcher**](IssueWatchersApi.md#addwatcher) | **POST** /rest/api/3/issue/{issueIdOrKey}/watchers | Add watcher |
| [**getIsWatchingIssueBulk**](IssueWatchersApi.md#getiswatchingissuebulk) | **POST** /rest/api/3/issue/watching | Get is watching issue bulk |
| [**getIssueWatchers**](IssueWatchersApi.md#getissuewatchers) | **GET** /rest/api/3/issue/{issueIdOrKey}/watchers | Get issue watchers |
| [**removeWatcher**](IssueWatchersApi.md#removewatcher) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/watchers | Delete watcher |



## addWatcher

> any addWatcher(issueIdOrKey, body)

Add watcher

Adds a user as a watcher of an issue by passing the account ID of the user. For example, &#x60;\&quot;5b10ac8d82e05b22cc7d4ef5\&quot;&#x60;. If no user is specified the calling user is added.  This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  To add users other than themselves to the watchlist, *Manage watcher list* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.

### Example

```ts
import {
  Configuration,
  IssueWatchersApi,
} from 'jira-cloud-api';
import type { AddWatcherRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWatchersApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The account ID of the user. Note that username cannot be used due to privacy changes.
    body: body_example,
  } satisfies AddWatcherRequest;

  try {
    const data = await api.addWatcher(body);
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
| **body** | `string` | The account ID of the user. Note that username cannot be used due to privacy changes. | |

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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the permission to manage the watcher list. |  -  |
| **404** | Returned if the issue or the user is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIsWatchingIssueBulk

> BulkIssueIsWatching getIsWatchingIssueBulk(issueList)

Get is watching issue bulk

Returns, for the user, details of the watched status of issues from a list. If an issue ID is invalid, the returned watched status is &#x60;false&#x60;.  This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueWatchersApi,
} from 'jira-cloud-api';
import type { GetIsWatchingIssueBulkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWatchersApi(config);

  const body = {
    // IssueList | A list of issue IDs.
    issueList: {"issueIds":["10001","10002","10005"]},
  } satisfies GetIsWatchingIssueBulkRequest;

  try {
    const data = await api.getIsWatchingIssueBulk(body);
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
| **issueList** | [IssueList](IssueList.md) | A list of issue IDs. | |

### Return type

[**BulkIssueIsWatching**](BulkIssueIsWatching.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueWatchers

> Watchers getIssueWatchers(issueIdOrKey)

Get issue watchers

Returns the watchers for an issue.  This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  To see details of users on the watchlist other than themselves, *View voters and watchers* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.

### Example

```ts
import {
  Configuration,
  IssueWatchersApi,
} from 'jira-cloud-api';
import type { GetIssueWatchersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWatchersApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
  } satisfies GetIssueWatchersRequest;

  try {
    const data = await api.getIssueWatchers(body);
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

### Return type

[**Watchers**](Watchers.md)

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
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeWatcher

> removeWatcher(issueIdOrKey, username, accountId)

Delete watcher

Deletes a user as a watcher of an issue.  This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  To remove users other than themselves from the watchlist, *Manage watcher list* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.

### Example

```ts
import {
  Configuration,
  IssueWatchersApi,
} from 'jira-cloud-api';
import type { RemoveWatcherRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWatchersApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
  } satisfies RemoveWatcherRequest;

  try {
    const data = await api.removeWatcher(body);
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
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. | [Optional] [Defaults to `undefined`] |

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
| **400** | Returned if &#x60;accountId&#x60; is not supplied. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the permission to manage the watcher list. |  -  |
| **404** | Returned if the issue or the user is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

