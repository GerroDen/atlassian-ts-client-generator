# MirroringMirrorApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**endRollingUpgrade**](MirroringMirrorApi.md#endrollingupgrade) | **POST** /mirroring/latest/zdu/end | End ZDU upgrade on mirror farm |
| [**getDelayedSyncRepositories**](MirroringMirrorApi.md#getdelayedsyncrepositories) | **GET** /mirroring/latest/mirrorRepos/delayed-sync | Get delayed sync repositories |
| [**getFarmNodes**](MirroringMirrorApi.md#getfarmnodes) | **GET** /mirroring/latest/farmNodes | Get farm nodes |
| [**getMirrorMode**](MirroringMirrorApi.md#getmirrormode) | **GET** /mirroring/latest/syncSettings/mode | Get mirror mode |
| [**getMirrorSettings**](MirroringMirrorApi.md#getmirrorsettings) | **GET** /mirroring/latest/syncSettings | Get upstream settings |
| [**getMirroredProjects**](MirroringMirrorApi.md#getmirroredprojects) | **GET** /mirroring/latest/syncSettings/projects | Get mirrored project IDs |
| [**getMirroredRepository**](MirroringMirrorApi.md#getmirroredrepository) | **GET** /mirroring/latest/mirrorRepos/{externalRepositoryId} | Get clone URLs |
| [**getRefChangesQueue**](MirroringMirrorApi.md#getrefchangesqueue) | **GET** /mirroring/latest/supportInfo/refChangesQueue | Get items in ref changes queue |
| [**getRefChangesQueueCount**](MirroringMirrorApi.md#getrefchangesqueuecount) | **GET** /mirroring/latest/supportInfo/refChangesQueue/count | Get total number of items in ref changes queue |
| [**getRepoSyncStatus**](MirroringMirrorApi.md#getreposyncstatus) | **GET** /mirroring/latest/supportInfo/repoSyncStatus | Get sync status of repositories |
| [**getRepoSyncStatus1**](MirroringMirrorApi.md#getreposyncstatus1) | **GET** /mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repoSyncStatus | Gets information about the mirrored repository |
| [**getRepositoryLockOwner**](MirroringMirrorApi.md#getrepositorylockowner) | **GET** /mirroring/latest/supportInfo/projects/{projectKey}/repos/{repositorySlug}/repo-lock-owner | Get the repository lock owner for the syncing process |
| [**getRepositoryLockOwners**](MirroringMirrorApi.md#getrepositorylockowners) | **GET** /mirroring/latest/supportInfo/repo-lock-owners | Get all the repository lock owners for the syncing process |
| [**getSynchronizationProgress**](MirroringMirrorApi.md#getsynchronizationprogress) | **GET** /mirroring/latest/progress | Get synchronization progress state |
| [**getUpstreamServer**](MirroringMirrorApi.md#getupstreamserver) | **GET** /mirroring/latest/upstreamServer | Get upstream server |
| [**setMirrorMode**](MirroringMirrorApi.md#setmirrormode) | **PUT** /mirroring/latest/syncSettings/mode | Update mirror mode |
| [**setMirrorSettings**](MirroringMirrorApi.md#setmirrorsettings) | **PUT** /mirroring/latest/syncSettings | Update upstream settings |
| [**startMirroringProject**](MirroringMirrorApi.md#startmirroringproject) | **POST** /mirroring/latest/syncSettings/projects/{projectId} | Add project to be mirrored |
| [**startMirroringProjects**](MirroringMirrorApi.md#startmirroringprojects) | **POST** /mirroring/latest/syncSettings/projects | Add multiple projects to be mirrored |
| [**startRollingUpgrade**](MirroringMirrorApi.md#startrollingupgrade) | **POST** /mirroring/latest/zdu/start | Start ZDU upgrade on mirror farm |
| [**stopMirroringProject**](MirroringMirrorApi.md#stopmirroringproject) | **DELETE** /mirroring/latest/syncSettings/projects/{projectId} | Stop mirroring project |



## endRollingUpgrade

> RestRollingUpgradeState endRollingUpgrade()

End ZDU upgrade on mirror farm

Finalizes the ZDU upgrade on the mirror farm denying heterogeneous cluster formation

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { EndRollingUpgradeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.endRollingUpgrade();
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

[**RestRollingUpgradeState**](RestRollingUpgradeState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The state of the rolling upgrade which includes the current version on all the nodes in the farm. |  -  |
| **401** | When the user doesn\&#39;t have SYS_ADMIN permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDelayedSyncRepositories

> Array&lt;RestDelayedSyncRepository&gt; getDelayedSyncRepositories(delayThreshold, limit)

Get delayed sync repositories

Retrieves a list of repositories which have not synced on one or more mirror nodes for at least the threshold time limit after the content was changed in the corresponding upstream repositories. The threshold time limit is defined by a configuration property &lt;code&gt;plugin.mirroring.repository.diagnostics.sync.tolerance&lt;/code&gt;. The detection of out of sync repositories is dependent on the timing of a scheduled job which is controlled by a configuration property &lt;code&gt;plugin.mirroring.synchronization.interval&lt;/code&gt; which means in worst case it can take upto &lt;code&gt;plugin.mirroring.repository.diagnostics.sync.tolerance&lt;/code&gt; + &lt;code&gt;plugin.mirroring.synchronization.interval&lt;/code&gt; time to detect an out-of-sync repository.&lt;p&gt;Note: If &lt;code&gt;plugin.mirroring.repository.diagnostics.sync.enabled&#x3D;false&lt;/code&gt; is set on any of the mirror farm nodes, results will not be reported from that node.

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetDelayedSyncRepositoriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // string | Returns only those repositories that are delayed for the given duration. The minimum allowed value is the configured value for the property <code>plugin.mirroring.synchronization.interval</code> (optional)
    delayThreshold: delayThreshold_example,
    // string | Limit the number of delayed sync repositories returned, the maximum allowed value is 100 (optional)
    limit: limit_example,
  } satisfies GetDelayedSyncRepositoriesRequest;

  try {
    const data = await api.getDelayedSyncRepositories(body);
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
| **delayThreshold** | `string` | Returns only those repositories that are delayed for the given duration. The minimum allowed value is the configured value for the property &lt;code&gt;plugin.mirroring.synchronization.interval&lt;/code&gt; | [Optional] [Defaults to `undefined`] |
| **limit** | `string` | Limit the number of delayed sync repositories returned, the maximum allowed value is 100 | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;RestDelayedSyncRepository&gt;**](RestDelayedSyncRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The upstream ID, project key and repository slug of the delayed sync repositories |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFarmNodes

> Array&lt;RestClusterNode&gt; getFarmNodes()

Get farm nodes

Retrieves the list of farm nodes in this cluster

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetFarmNodesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getFarmNodes();
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

[**Array&lt;RestClusterNode&gt;**](RestClusterNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of farm nodes |  -  |
| **404** | The upstream server could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMirrorMode

> getMirrorMode()

Get mirror mode

Gets the current mirror mode

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetMirrorModeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getMirrorMode();
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the current mirror mode |  -  |
| **401** | When the user is not a service user for the currently registered upstream or doesn\&#39;t have ADMIN permission |  -  |
| **404** | The upstream server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMirrorSettings

> RestUpstreamSettings getMirrorSettings()

Get upstream settings

Retrieves upstream settings

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetMirrorSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getMirrorSettings();
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

[**RestUpstreamSettings**](RestUpstreamSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the mirror settings |  -  |
| **401** | When the user is not a service user for the currently registered upstream or doesn\&#39;t have ADMIN permission |  -  |
| **404** | The upstream server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMirroredProjects

> getMirroredProjects()

Get mirrored project IDs

Returns the IDs of the projects that the mirror is configured to mirror

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetMirroredProjectsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getMirroredProjects();
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the currently mirrored project IDs |  -  |
| **401** | When the user is not a service user for the currently registered upstream or doesn\&#39;t have ADMIN permission |  -  |
| **404** | The upstream server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMirroredRepository

> RestMirroredRepository getMirroredRepository(externalRepositoryId)

Get clone URLs

Retrieves all available clone urls for the specified repository.

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetMirroredRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // string | the repository ID
    externalRepositoryId: externalRepositoryId_example,
  } satisfies GetMirroredRepositoryRequest;

  try {
    const data = await api.getMirroredRepository(body);
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
| **externalRepositoryId** | `string` | the repository ID | [Defaults to `undefined`] |

### Return type

[**RestMirroredRepository**](RestMirroredRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The mirrored repository\&#39;s information. |  -  |
| **404** | The upstream server or the repository could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRefChangesQueue

> RestRefSyncQueue getRefChangesQueue()

Get items in ref changes queue

Retrieves a list of up to &lt;code&gt;plugin.mirroring.farm.max.ref.change.queue.dump.size&lt;/code&gt; items currently in the ref changes queue. The ref changes queue is an internal component of every mirror farm, and is shared between all nodes. When the contents of an upstream repository changes, an item is added to this queue so that the mirror farm nodes know to synchronize. The mirror farm constantly polls and removes items from this queue for processing, so it is empty most of the time.

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetRefChangesQueueRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getRefChangesQueue();
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

[**RestRefSyncQueue**](RestRefSyncQueue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The contents of the ref changes queue |  -  |
| **401** | The currently authenticated user has insufficient permissions to call this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRefChangesQueueCount

> getRefChangesQueueCount()

Get total number of items in ref changes queue

Retrieves the total number of items currently in the ref changes queue

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetRefChangesQueueCountRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getRefChangesQueueCount();
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The total number of items currently in the ref changes queue |  -  |
| **401** | When the user doesn\&#39;t have ADMIN permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepoSyncStatus

> GetRepoSyncStatus200Response getRepoSyncStatus(start, limit)

Get sync status of repositories

Retrieves a page of sync statuses of the repositories on this mirror node

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetRepoSyncStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRepoSyncStatusRequest;

  try {
    const data = await api.getRepoSyncStatus(body);
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

[**GetRepoSyncStatus200Response**](GetRepoSyncStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The sync status of the repositories on this node |  -  |
| **401** | When the user doesn\&#39;t have ADMIN permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepoSyncStatus1

> RestMirrorRepositorySynchronizationStatus getRepoSyncStatus1(projectKey, repositorySlug)

Gets information about the mirrored repository

Retrieves information about an external repository mirrored by the mirror server. Particularly the local ID &amp; external ID of the repository

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetRepoSyncStatus1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetRepoSyncStatus1Request;

  try {
    const data = await api.getRepoSyncStatus1(body);
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

[**RestMirrorRepositorySynchronizationStatus**](RestMirrorRepositorySynchronizationStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The sync status of the repository on this node |  -  |
| **401** | When the user doesn\&#39;t have ADMIN permission |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryLockOwner

> RestRepositoryLockOwner getRepositoryLockOwner(projectKey, repositorySlug)

Get the repository lock owner for the syncing process

Retrieves the information about the process owning the sync lock for this repository. The process owning the lock could be running on any of the nodes in the mirror farm

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetRepositoryLockOwnerRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetRepositoryLockOwnerRequest;

  try {
    const data = await api.getRepositoryLockOwner(body);
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

[**RestRepositoryLockOwner**](RestRepositoryLockOwner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The information about the repository lock owner for the syncing process, if the lock is currently being held, otherwise an empty response |  -  |
| **401** | When the user doesn\&#39;t have ADMIN permission |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryLockOwners

> Array&lt;RestRepositoryLockOwner&gt; getRepositoryLockOwners()

Get all the repository lock owners for the syncing process

Retrieves the information about all the processes from the all the nodes in the mirror farm owning sync lock for any repository

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetRepositoryLockOwnersRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getRepositoryLockOwners();
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

[**Array&lt;RestRepositoryLockOwner&gt;**](RestRepositoryLockOwner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all the repository lock owners for the syncing process |  -  |
| **401** | When the user doesn\&#39;t have ADMIN permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSynchronizationProgress

> RestSyncProgress getSynchronizationProgress()

Get synchronization progress state

 Retrieves synchronization progress state.If there\&#39;s no progress to report, this resource will return &lt;pre&gt;&lt;code&gt; {\&quot;discovering\&quot;:false,\&quot;syncedRepos\&quot;:0,\&quot;totalRepos\&quot;:0}&lt;/code&gt;&lt;/pre&gt; If there are repositories in the process of synchronizing, but the precise number hasn\&#39;t been discovered yet, this resource will return: &lt;pre&gt;&lt;code&gt; {\&quot;discovering\&quot;:true,\&quot;syncedRepos\&quot;:3,\&quot;totalRepos\&quot;:100}&lt;/code&gt;&lt;/pre&gt; If there is progress to report and the total number of repositories is known, this resource will return: &lt;pre&gt; &lt;code&gt; {\&quot;discovering\&quot;:false,\&quot;syncedRepos\&quot;:242,\&quot;totalRepos\&quot;:1071}&lt;/code&gt; &lt;/pre&gt;

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetSynchronizationProgressRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getSynchronizationProgress();
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

[**RestSyncProgress**](RestSyncProgress.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the synchronization progress state |  -  |
| **404** | The upstream server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUpstreamServer

> RestUpstreamServer getUpstreamServer()

Get upstream server

Retrieves upstream server details.

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { GetUpstreamServerRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.getUpstreamServer();
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

[**RestUpstreamServer**](RestUpstreamServer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The upstream server. |  -  |
| **404** | The upstream server could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setMirrorMode

> setMirrorMode(body)

Update mirror mode

Sets the mirror mode for the specified upstream

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { SetMirrorModeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // string (optional)
    body: body_example,
  } satisfies SetMirrorModeRequest;

  try {
    const data = await api.setMirrorMode(body);
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
| **body** | `string` |  | [Optional] |

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
| **200** | the mode to set |  -  |
| **400** | The provided mode is invalid |  -  |
| **401** | When the user is not a service user for the currently registered upstream or doesn\&#39;t have ADMIN permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setMirrorSettings

> RestUpstreamSettings setMirrorSettings(restUpstreamSettings)

Update upstream settings

Sets the settings for the specified upstream

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { SetMirrorSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // RestUpstreamSettings | the mirror settings to update to (optional)
    restUpstreamSettings: ...,
  } satisfies SetMirrorSettingsRequest;

  try {
    const data = await api.setMirrorSettings(body);
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
| **restUpstreamSettings** | [RestUpstreamSettings](RestUpstreamSettings.md) | the mirror settings to update to | [Optional] |

### Return type

[**RestUpstreamSettings**](RestUpstreamSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the updated mirror settings |  -  |
| **401** | When the user is not a service user for the currently registered upstream or doesn\&#39;t have ADMIN permission |  -  |
| **404** | The upstream server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startMirroringProject

> startMirroringProject(projectId)

Add project to be mirrored

Configures the mirror to mirror the provided project

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { StartMirroringProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // string
    projectId: projectId_example,
  } satisfies StartMirroringProjectRequest;

  try {
    const data = await api.startMirroringProject(body);
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
| **projectId** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the currently mirrored project IDs |  -  |
| **401** | When the user is not a service user for the currently registered upstream or doesn\&#39;t have ADMIN permission |  -  |
| **404** | The upstream server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startMirroringProjects

> startMirroringProjects(requestBody)

Add multiple projects to be mirrored

Configures the mirror to mirror the provided projects

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { StartMirroringProjectsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // Array<string> (optional)
    requestBody: ...,
  } satisfies StartMirroringProjectsRequest;

  try {
    const data = await api.startMirroringProjects(body);
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
| **requestBody** | `Array<string>` |  | [Optional] |

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
| **200** | the currently mirrored project IDs |  -  |
| **401** | When the user is not a service user for the currently registered upstream or doesn\&#39;t have ADMIN permission |  -  |
| **404** | The upstream server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startRollingUpgrade

> RestRollingUpgradeState startRollingUpgrade()

Start ZDU upgrade on mirror farm

Enables upgrading of individual nodes within the cluster, allowing a heterogeneous cluster formation

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { StartRollingUpgradeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  try {
    const data = await api.startRollingUpgrade();
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

[**RestRollingUpgradeState**](RestRollingUpgradeState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The state of the rolling upgrade which includes the minimum version of all the nodes in the farm. |  -  |
| **401** | When the user doesn\&#39;t have SYS_ADMIN permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stopMirroringProject

> stopMirroringProject(projectId)

Stop mirroring project

Configures the mirror to no longer mirror the provided project

### Example

```ts
import {
  Configuration,
  MirroringMirrorApi,
} from 'bitbucket-api';
import type { StopMirroringProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringMirrorApi();

  const body = {
    // string | the project ID to stop mirroring
    projectId: projectId_example,
  } satisfies StopMirroringProjectRequest;

  try {
    const data = await api.stopMirroringProject(body);
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
| **projectId** | `string` | the project ID to stop mirroring | [Defaults to `undefined`] |

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
| **204** | the request has been processed |  -  |
| **401** | When the user is not a service user for the currently registered upstream or doesn\&#39;t have ADMIN permission |  -  |
| **404** | The upstream server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

