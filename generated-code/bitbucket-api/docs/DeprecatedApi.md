# DeprecatedApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addBuildStatus**](DeprecatedApi.md#addbuildstatus) | **POST** /build-status/latest/commits/{commitId} | Create build status for commit |
| [**addGroupToUser**](DeprecatedApi.md#addgrouptouser) | **POST** /api/latest/admin/users/add-group | Add user to group |
| [**addUserToGroup**](DeprecatedApi.md#addusertogroup) | **POST** /api/latest/admin/groups/add-user | Add user to group |
| [**approve**](DeprecatedApi.md#approve) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve | Approve pull request |
| [**getBuildStatus**](DeprecatedApi.md#getbuildstatus) | **GET** /build-status/latest/commits/{commitId} | Get build statuses for commit |
| [**getBuildStatusStats**](DeprecatedApi.md#getbuildstatusstats) | **GET** /build-status/latest/commits/stats/{commitId} | Get build status statistics for commit |
| [**getDefaultBranch1**](DeprecatedApi.md#getdefaultbranch1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default | Get default branch |
| [**getMultipleBuildStatusStats**](DeprecatedApi.md#getmultiplebuildstatusstats) | **POST** /build-status/latest/commits/stats | Get build status statistics for multiple commits |
| [**removeUserFromGroup**](DeprecatedApi.md#removeuserfromgroup) | **POST** /api/latest/admin/groups/remove-user | Remove user from group |
| [**setDefaultBranch1**](DeprecatedApi.md#setdefaultbranch1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default | Update default branch |
| [**unassignParticipantRole1**](DeprecatedApi.md#unassignparticipantrole1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants | Unassign pull request participant |
| [**withdrawApproval**](DeprecatedApi.md#withdrawapproval) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve | Unapprove pull request |



## addBuildStatus

> addBuildStatus(commitId, restBuildStatus)

Create build status for commit

Associates a build status with a commit.The &lt;code&gt;state&lt;/code&gt;, the &lt;code&gt;key&lt;/code&gt; and the &lt;code&gt;url&lt;/code&gt; fields are mandatory. The &lt;code&gt;name&lt;/code&gt; and&lt;code&gt;description&lt;/code&gt; fields are optional.All fields (mandatory or optional) are limited to 255 characters, except for the &lt;code&gt;url&lt;/code&gt;,which is limited to 450 characters.Supported values for the &lt;code&gt;state&lt;/code&gt; are &lt;code&gt;SUCCESSFUL&lt;/code&gt;, &lt;code&gt;FAILED&lt;/code&gt;and &lt;code&gt;INPROGRESS&lt;/code&gt;.The authenticated user must have &lt;strong&gt;LICENSED&lt;/strong&gt; permission or higher to call this resource.  &lt;strong&gt;Deprecated in 7.14, please use the repository based builds resource instead.&lt;/strong&gt;

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { AddBuildStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // string | full SHA1 of the commit
    commitId: e00cf62997a027bbf785614a93e2e55bb331d268,
    // RestBuildStatus | build status to associate with the commit (optional)
    restBuildStatus: ...,
  } satisfies AddBuildStatusRequest;

  try {
    const data = await api.addBuildStatus(body);
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
| **commitId** | `string` | full SHA1 of the commit | [Defaults to `undefined`] |
| **restBuildStatus** | [RestBuildStatus](RestBuildStatus.md) | build status to associate with the commit | [Optional] |

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
| **204** | An empty response if the build status was successfully stored |  -  |
| **400** | An error message if the &lt;code&gt;commitId&lt;/code&gt; is not a full 40-characters SHA1, if the build status has a missing mandatory field or if the fields are too large |  -  |
| **401** | The user is not authenticated or does not have the &lt;strong&gt;LICENSED&lt;/strong&gt; permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addGroupToUser

> addGroupToUser(groupPickerContext)

Add user to group

&lt;strong&gt;Deprecated since 2.10&lt;/strong&gt;. Use /rest/users/add-groups instead.  Add a user to a group. This is very similar to &lt;code&gt;groups/add-user&lt;/code&gt;, but with the &lt;em&gt;context&lt;/em&gt; and &lt;em&gt;itemName&lt;/em&gt; attributes of the supplied request entity reversed. On the face of it this may appear redundant, but it facilitates a specific UI component in the application.  In the request entity, the &lt;em&gt;context&lt;/em&gt; attribute is the user and the &lt;em&gt;itemName&lt;/em&gt; is the group.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { AddGroupToUserRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // GroupPickerContext (optional)
    groupPickerContext: ...,
  } satisfies AddGroupToUserRequest;

  try {
    const data = await api.addGroupToUser(body);
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
| **groupPickerContext** | [GroupPickerContext](GroupPickerContext.md) |  | [Optional] |

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
| **200** | The user was added to the group |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as it would exceed the server\&#39;s licensing limit, or the groups permissions exceed the authenticated user\&#39;s permission level. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addUserToGroup

> addUserToGroup(userPickerContext)

Add user to group

&lt;strong&gt;Deprecated since 2.10&lt;/strong&gt;. Use /rest/users/add-groups instead.  Add a user to a group.  In the request entity, the &lt;em&gt;context&lt;/em&gt; attribute is the group and the &lt;em&gt;itemName&lt;/em&gt; is the user.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { AddUserToGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // UserPickerContext (optional)
    userPickerContext: ...,
  } satisfies AddUserToGroupRequest;

  try {
    const data = await api.addUserToGroup(body);
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
| **userPickerContext** | [UserPickerContext](UserPickerContext.md) |  | [Optional] |

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
| **200** | The user was added to the group. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as it would exceed the server\&#39;s licensing limit, or the groups permissions exceed the authenticated user\&#39;s permission level. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## approve

> RestPullRequestParticipant approve(projectKey, pullRequestId, repositorySlug)

Approve pull request

Approve a pull request as the current user. Implicitly adds the user as a participant if they are not already.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.   &lt;strong&gt;Deprecated since 4.2&lt;/strong&gt;. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { ApproveRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies ApproveRequest;

  try {
    const data = await api.approve(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The ID of the pull request within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestPullRequestParticipant**](RestPullRequestParticipant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of the new participant. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | The pull request is not open. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildStatus

> GetBuildStatus200Response getBuildStatus(commitId, orderBy, start, limit)

Get build statuses for commit

Gets build statuses associated with a commit.  &lt;strong&gt;Deprecated in 7.14, please use the repository based builds resource instead.&lt;/strong&gt;

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { GetBuildStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // string | Full SHA1 of the commit (ex: <code>e00cf62997a027bbf785614a93e2e55bb331d268</code>)
    commitId: commitId_example,
    // string | How the results should be ordered. Options are NEWEST, OLDEST, STATUS (optional)
    orderBy: newest, oldest, or status,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetBuildStatusRequest;

  try {
    const data = await api.getBuildStatus(body);
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
| **commitId** | `string` | Full SHA1 of the commit (ex: &lt;code&gt;e00cf62997a027bbf785614a93e2e55bb331d268&lt;/code&gt;) | [Defaults to `undefined`] |
| **orderBy** | `string` | How the results should be ordered. Options are NEWEST, OLDEST, STATUS | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetBuildStatus200Response**](GetBuildStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A Page of build statuses associated with the commit &lt;br /&gt; (limited to the most recent 100 build statuses associated with the commit) |  -  |
| **401** | The user is not authenticated or does not have the &lt;b&gt;LICENSED&lt;/b&gt; permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBuildStatusStats

> RestBuildStats getBuildStatusStats(commitId, includeUnique)

Get build status statistics for commit

Gets statistics regarding the builds associated with a commit

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { GetBuildStatusStatsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // string | full SHA1 of the commit
    commitId: e00cf62997a027bbf785614a93e2e55bb331d268,
    // boolean | include a unique build result if there is either only one failed build, only one in-progress build or only one successful build (optional)
    includeUnique: true,
  } satisfies GetBuildStatusStatsRequest;

  try {
    const data = await api.getBuildStatusStats(body);
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
| **commitId** | `string` | full SHA1 of the commit | [Defaults to `undefined`] |
| **includeUnique** | `boolean` | include a unique build result if there is either only one failed build, only one in-progress build or only one successful build | [Optional] [Defaults to `undefined`] |

### Return type

[**RestBuildStats**](RestBuildStats.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The number of successful/failed/in-progress/cancelled/unknown builds for the commit |  -  |
| **401** | The user is not authenticated or does not have the &lt;b&gt;LICENSED&lt;/b&gt; permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDefaultBranch1

> RestBranch getDefaultBranch1(projectKey, repositorySlug)

Get default branch

Retrieves the repository\&#39;s default branch, if it has been created. If the repository is empty, 204 No Content will be returned. For non-empty repositories, if the configured default branch has not yet been created a 404 Not Found will be returned.   This URL is deprecated. Callers should use &lt;code&gt;GET /projects/{key}/repos/{slug}/default-branch&lt;/code&gt; instead, which allows retrieving the &lt;i&gt;configured&lt;/i&gt; default branch even if the ref has not been created yet.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { GetDefaultBranch1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetDefaultBranch1Request;

  try {
    const data = await api.getDefaultBranch1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestBranch**](RestBranch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The configured default branch for the repository. |  -  |
| **204** | The repository is empty, and has no default branch. |  -  |
| **401** | The currently authenticated user has insufficient permissions to read the repository. |  -  |
| **404** | The specified repository does not exist, or its configured default branch does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMultipleBuildStatusStats

> any getMultipleBuildStatusStats(requestBody)

Get build status statistics for multiple commits

Produces a list of the build statistics for multiple commits. Commits &lt;em&gt;without any builds associated with them&lt;/em&gt; will not be returned.&lt;br&gt; For example if the commit &lt;code&gt;e00cf62997a027bbf785614a93e2e55bb331d268&lt;/code&gt; does not have any build statuses associated with it, it will not be present in the response.

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { GetMultipleBuildStatusStatsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // Array<string> | full SHA1 of each commit (optional)
    requestBody: ...,
  } satisfies GetMultipleBuildStatusStatsRequest;

  try {
    const data = await api.getMultipleBuildStatusStats(body);
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
| **requestBody** | `Array<string>` | full SHA1 of each commit | [Optional] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The number of successful/failed/in-progress/cancelled/unknown builds for each commit (with the caveat that the commits &lt;em&gt;without any builds associated with them&lt;/em&gt; will not be present in the response) |  -  |
| **401** | The user is not authenticated or does not have the &lt;strong&gt;LICENSED&lt;/strong&gt; permission |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeUserFromGroup

> removeUserFromGroup(userPickerContext)

Remove user from group

&lt;strong&gt;Deprecated since 2.10&lt;/strong&gt;. Use /rest/users/remove-groups instead.  Remove a user from a group.  The authenticated user must have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.  In the request entity, the &lt;em&gt;context&lt;/em&gt; attribute is the group and the &lt;em&gt;itemName&lt;/em&gt; is the user.

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { RemoveUserFromGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // UserPickerContext (optional)
    userPickerContext: ...,
  } satisfies RemoveUserFromGroupRequest;

  try {
    const data = await api.removeUserFromGroup(body);
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
| **userPickerContext** | [UserPickerContext](UserPickerContext.md) |  | [Optional] |

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
| **200** | The user was removed from the group. |  -  |
| **401** | The authenticated user does not have the &lt;strong&gt;ADMIN&lt;/strong&gt; permission. |  -  |
| **403** | The action was disallowed as the group has a higher permission level than the context user. |  -  |
| **404** | The specified user or group does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDefaultBranch1

> setDefaultBranch1(projectKey, repositorySlug, restBranch)

Update default branch

Update the default branch of a repository.   This URL is deprecated. Callers should use &lt;code&gt;PUT /projects/{key}/repos/{slug}/default-branch&lt;/code&gt; instead.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { SetDefaultBranch1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestBranch | The branch to set as default (optional)
    restBranch: ...,
  } satisfies SetDefaultBranch1Request;

  try {
    const data = await api.setDefaultBranch1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restBranch** | [RestBranch](RestBranch.md) | The branch to set as default | [Optional] |

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
| **204** | The operation was successful. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unassignParticipantRole1

> unassignParticipantRole1(projectKey, pullRequestId, repositorySlug, username)

Unassign pull request participant

Unassigns a participant from the REVIEWER role they may have been given in a pull request.   If the participant has no explicit role this method has no effect.   Afterwards, the user will still remain a participant in the pull request but their role will be reduced to PARTICIPANT. This is because once made a participant of a pull request, a user will forever remain a participant. Only their role may be altered.   The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.   &lt;strong&gt;Deprecated since 4.2&lt;/strong&gt;. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead.

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { UnassignParticipantRole1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string (optional)
    username: username_example,
  } satisfies UnassignParticipantRole1Request;

  try {
    const data = await api.unassignParticipantRole1(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The ID of the pull request within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **username** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **204** | The update completed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | Removing reviewers isn\&#39;t supported on archived repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## withdrawApproval

> RestPullRequestParticipant withdrawApproval(projectKey, pullRequestId, repositorySlug)

Unapprove pull request

Remove approval from a pull request as the current user. This does not remove the user as a participant.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.   &lt;strong&gt;Deprecated since 4.2&lt;/strong&gt;. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead

### Example

```ts
import {
  Configuration,
  DeprecatedApi,
} from 'bitbucket-api';
import type { WithdrawApprovalRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DeprecatedApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies WithdrawApprovalRequest;

  try {
    const data = await api.withdrawApproval(body);
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
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The ID of the pull request within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestPullRequestParticipant**](RestPullRequestParticipant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of the updated participant. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request. |  -  |
| **404** | The specified repository or pull request does not exist or the current user is not a participant on the pull request. |  -  |
| **409** | The pull request is not open. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

