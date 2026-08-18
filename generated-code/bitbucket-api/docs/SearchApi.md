# SearchApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBrokenIndexStatusRepos**](SearchApi.md#getbrokenindexstatusrepos) | **GET** /indexing/latest/support-info/broken-index-status-repos | Retrieve a paged list of repositories which have exceeded the configured maximum indexing retries. |
| [**getDetails**](SearchApi.md#getdetails) | **GET** /indexing/latest/projects/{projectKey}/repos/{repositorySlug} | Get repository search indexing details. |
| [**getIndexingThreadSnapshot**](SearchApi.md#getindexingthreadsnapshot) | **GET** /indexing/latest/support-info/indexing-thread-snapshot | Retrieve a snapshot of the indexing thread details. |
| [**getQueueDetails**](SearchApi.md#getqueuedetails) | **GET** /indexing/latest/projects/{projectKey}/repos/{repositorySlug}/indexing-queue-details | Retrieve detailed queue information for a repository |
| [**indexingQueuedStatus**](SearchApi.md#indexingqueuedstatus) | **GET** /indexing/latest/projects/{projectKey}/repos/{repositorySlug}/indexing-queued-status | Checks if a repository has been queued for indexing. |
| [**reindexRepositories**](SearchApi.md#reindexrepositories) | **POST** /indexing/latest/reindex | Re-indexes the search index of the provided list of repositories |
| [**restartIndexingThreadWorker**](SearchApi.md#restartindexingthreadworker) | **POST** /indexing/latest/restart | Restarts the search indexing worker thread |
| [**setWorkerThreadCount**](SearchApi.md#setworkerthreadcount) | **PUT** /indexing/latest/threads | Sets the desired number of indexing worker threads |



## getBrokenIndexStatusRepos

> GetBrokenIndexStatusRepos200Response getBrokenIndexStatusRepos(start, limit)

Retrieve a paged list of repositories which have exceeded the configured maximum indexing retries.

Retrieve repositories which are in the &lt;code&gt;BROKEN&lt;/code&gt; indexing state.  When a repository has a &lt;code&gt;BROKEN&lt;/code&gt; indexing status it will no longer attempt to be re-indexed by the system, even when changes are made to its code. A repository is given a &lt;code&gt;BROKEN&lt;/code&gt; indexing status when it fails to index too many times.  The authenticated user must have &lt;b&gt;SYS_ADMIN&lt;/b&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'bitbucket-api';
import type { GetBrokenIndexStatusReposRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SearchApi();

  const body = {
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetBrokenIndexStatusReposRequest;

  try {
    const data = await api.getBrokenIndexStatusRepos(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetBrokenIndexStatusRepos200Response**](GetBrokenIndexStatusRepos200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of repositories where &lt;code&gt;STATE &#x3D; BROKEN&lt;code&gt; |  -  |
| **400** | The supplied page limit exceeds the allowed maximum of 1000 |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDetails

> RestRepositoryIndexingDetails getDetails(projectKey, repositorySlug)

Get repository search indexing details.

Retrieve the search indexing details of a repository. This includes the current status, and the commit and timestamp of the last successful index.  If the status is &lt;b&gt;BROKEN&lt;/b&gt; then the &lt;code&gt;indexingError&lt;/code&gt; will also be included in the response. The &lt;code&gt;indexingError&lt;/code&gt; is the error that the application encountered during the last failed indexing attempt before the repository was removed from indexing.  The authenticated user must have &lt;b&gt;REPO_ADMIN&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'bitbucket-api';
import type { GetDetailsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SearchApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetDetailsRequest;

  try {
    const data = await api.getDetails(body);
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
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

### Return type

[**RestRepositoryIndexingDetails**](RestRepositoryIndexingDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The indexing details of the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIndexingThreadSnapshot

> Array&lt;RestIndexingThreadDetails&gt; getIndexingThreadSnapshot()

Retrieve a snapshot of the indexing thread details.

Fetches a snapshot of the indexing thread details at the moment the request is processed. Note that the result represents the thread\&#39;s status at a specific point in time, and the state may have changed by the time this endpoint responds.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'bitbucket-api';
import type { GetIndexingThreadSnapshotRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SearchApi();

  try {
    const data = await api.getIndexingThreadSnapshot();
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

[**Array&lt;RestIndexingThreadDetails&gt;**](RestIndexingThreadDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A snapshot containing the details of the indexing threads. |  -  |
| **401** | Insufficient permissions for the current user. Requires SYS_ADMIN permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQueueDetails

> RestRepositoryIndexingQueueDetails getQueueDetails(projectKey, repositorySlug)

Retrieve detailed queue information for a repository

Provides a snapshot of the queue status for a specified repository at the time of the request.  The authenticated user must have &lt;b&gt;REPO_ADMIN&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'bitbucket-api';
import type { GetQueueDetailsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SearchApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetQueueDetailsRequest;

  try {
    const data = await api.getQueueDetails(body);
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
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

### Return type

[**RestRepositoryIndexingQueueDetails**](RestRepositoryIndexingQueueDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A snapshot containing the indexing queue information for the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The specified repository could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## indexingQueuedStatus

> RestIndexingIsRepositoryQueued indexingQueuedStatus(projectKey, repositorySlug)

Checks if a repository has been queued for indexing.

Checks if a repository has been queued for indexing.  The authenticated user must have &lt;b&gt;REPO_ADMIN&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'bitbucket-api';
import type { IndexingQueuedStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SearchApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies IndexingQueuedStatusRequest;

  try {
    const data = await api.indexingQueuedStatus(body);
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
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

### Return type

[**RestIndexingIsRepositoryQueued**](RestIndexingIsRepositoryQueued.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns true if the repository has been queued for indexing.  In a clustered environment, this will return true if the repository has been queued for indexing on &lt;i&gt;any&lt;/i&gt; node. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The specified repository could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reindexRepositories

> reindexRepositories(restRepositorySelector)

Re-indexes the search index of the provided list of repositories

Forces the provided repositories to reindex with the search server. For each repository the current index on the search server will be deleted and it will be queued for re-indexing. Note that this can result in diminished instance performance as deleting and reindexing a large repository can take some time

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'bitbucket-api';
import type { ReindexRepositoriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SearchApi();

  const body = {
    // Array<RestRepositorySelector> (optional)
    restRepositorySelector: ...,
  } satisfies ReindexRepositoriesRequest;

  try {
    const data = await api.reindexRepositories(body);
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
| **restRepositorySelector** | `Array<RestRepositorySelector>` |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** |  |  -  |
| **400** | Some or all of the provided repositories could not be located. See the error message for repositories that could not be located. |  -  |
| **401** | Insufficient permissions for the current user. Requires SYS_ADMIN permissions. |  -  |
| **409** | Some or all of the provided repositories could not be queued for re-indexing. Partial completion of the request may have occurred. See the error message for repository repositories that could not be queued |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## restartIndexingThreadWorker

> restartIndexingThreadWorker(restIndexingWorkerRestartRequest)

Restarts the search indexing worker thread

Restarts the search indexing worker thread. By default this will cause the currently running queue event to be terminated. This behaviour can be modified by providing the graceful shutdown flag in the request.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'bitbucket-api';
import type { RestartIndexingThreadWorkerRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SearchApi();

  const body = {
    // RestIndexingWorkerRestartRequest (optional)
    restIndexingWorkerRestartRequest: ...,
  } satisfies RestartIndexingThreadWorkerRequest;

  try {
    const data = await api.restartIndexingThreadWorker(body);
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
| **restIndexingWorkerRestartRequest** | [RestIndexingWorkerRestartRequest](RestIndexingWorkerRestartRequest.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** | Insufficient permissions for the current user. Requires SYS_ADMIN permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setWorkerThreadCount

> setWorkerThreadCount(restIndexingWorkerThreadsRequest)

Sets the desired number of indexing worker threads

Adjusts the number of indexing worker threads at runtime. Workers processing events will not be interrupted when scaling down; they will finish their current work and then exit.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'bitbucket-api';
import type { SetWorkerThreadCountRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new SearchApi();

  const body = {
    // RestIndexingWorkerThreadsRequest (optional)
    restIndexingWorkerThreadsRequest: ...,
  } satisfies SetWorkerThreadCountRequest;

  try {
    const data = await api.setWorkerThreadCount(body);
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
| **restIndexingWorkerThreadsRequest** | [RestIndexingWorkerThreadsRequest](RestIndexingWorkerThreadsRequest.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | The desired count is out of the valid range (1 to available processors - 1). |  -  |
| **401** | Insufficient permissions for the current user. Requires SYS_ADMIN permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

