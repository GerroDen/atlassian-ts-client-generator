# PullRequestsApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**applySuggestion**](PullRequestsApi.md#applysuggestion) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/apply-suggestion | Apply pull request suggestion |
| [**approve**](PullRequestsApi.md#approve) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve | Approve pull request |
| [**assignParticipantRole**](PullRequestsApi.md#assignparticipantrole) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants | Assign pull request participant role |
| [**canMerge**](PullRequestsApi.md#canmerge) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge | Test if pull request can be merged |
| [**canRebase**](PullRequestsApi.md#canrebase) | **GET** /git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase | Check PR rebase precondition |
| [**cancelAutoMerge**](PullRequestsApi.md#cancelautomerge) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge | Cancel auto-merge for pull request |
| [**create**](PullRequestsApi.md#create) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests | Create pull request |
| [**create1**](PullRequestsApi.md#create1) | **POST** /api/latest/projects/{projectKey}/settings/reviewer-groups | Create reviewer group |
| [**create2**](PullRequestsApi.md#create2) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups | Create reviewer group |
| [**createComment1**](PullRequestsApi.md#createcomment1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments | Add new blocker comment |
| [**createComment2**](PullRequestsApi.md#createcomment2) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments | Add pull request comment |
| [**createPullRequestCondition**](PullRequestsApi.md#createpullrequestcondition) | **POST** /default-reviewers/latest/projects/{projectKey}/condition | Create default reviewer condition |
| [**createPullRequestCondition1**](PullRequestsApi.md#createpullrequestcondition1) | **POST** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition | Create default reviewer condition |
| [**decline**](PullRequestsApi.md#decline) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/decline | Decline pull request |
| [**delete3**](PullRequestsApi.md#delete3) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId} | Delete pull request |
| [**delete6**](PullRequestsApi.md#delete6) | **DELETE** /api/latest/projects/{projectKey}/settings/reviewer-groups/{id} | Delete reviewer group |
| [**delete7**](PullRequestsApi.md#delete7) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id} | Delete reviewer group |
| [**deleteComment1**](PullRequestsApi.md#deletecomment1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId} | Delete pull request comment |
| [**deleteComment2**](PullRequestsApi.md#deletecomment2) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId} | Delete a pull request comment |
| [**deletePullRequestCondition**](PullRequestsApi.md#deletepullrequestcondition) | **DELETE** /default-reviewers/latest/projects/{projectKey}/condition/{id} | Delete default reviewer condition |
| [**deletePullRequestCondition1**](PullRequestsApi.md#deletepullrequestcondition1) | **DELETE** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id} | Delete default reviewer condition |
| [**discardReview**](PullRequestsApi.md#discardreview) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review | Discard pull request review |
| [**finishReview**](PullRequestsApi.md#finishreview) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review | Complete pull request review |
| [**get3**](PullRequestsApi.md#get3) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId} | Get pull request |
| [**getActivities**](PullRequestsApi.md#getactivities) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/activities | Get pull request activity |
| [**getAutoMergeRequest**](PullRequestsApi.md#getautomergerequest) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge | Get auto-merge request for pull request |
| [**getComment1**](PullRequestsApi.md#getcomment1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId} | Get pull request comment |
| [**getComment2**](PullRequestsApi.md#getcomment2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId} | Get a pull request comment |
| [**getComments1**](PullRequestsApi.md#getcomments1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments | Search pull request comments |
| [**getComments2**](PullRequestsApi.md#getcomments2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments | Get pull request comments for path |
| [**getCommitMessageSuggestion**](PullRequestsApi.md#getcommitmessagesuggestion) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commit-message-suggestion | Get commit message suggestion |
| [**getCommits1**](PullRequestsApi.md#getcommits1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/commits | Get pull request commits |
| [**getDiffStatsSummary2**](PullRequestsApi.md#getdiffstatssummary2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff-stats-summary/{path} | Get diff stats summary for pull request |
| [**getMergeBase1**](PullRequestsApi.md#getmergebase1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge-base | Get the common ancestor between the latest commits of the source and target branches of the pull request |
| [**getMergeConfig**](PullRequestsApi.md#getmergeconfig) | **GET** /api/latest/admin/pull-requests/{scmId} | Get merge strategies |
| [**getPage**](PullRequestsApi.md#getpage) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests | Get pull requests for repository |
| [**getPullRequestConditions**](PullRequestsApi.md#getpullrequestconditions) | **GET** /default-reviewers/latest/projects/{projectKey}/conditions | Get default reviewer conditions |
| [**getPullRequestConditions1**](PullRequestsApi.md#getpullrequestconditions1) | **GET** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/conditions | Get default reviewer conditions |
| [**getPullRequests**](PullRequestsApi.md#getpullrequests) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/pull-requests | Get repository pull requests containing commit |
| [**getReview**](PullRequestsApi.md#getreview) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/review | Get pull request comment thread |
| [**getReviewerGroup**](PullRequestsApi.md#getreviewergroup) | **GET** /api/latest/projects/{projectKey}/settings/reviewer-groups/{id} | Get reviewer group |
| [**getReviewerGroup1**](PullRequestsApi.md#getreviewergroup1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id} | Get reviewer group |
| [**getReviewerGroups**](PullRequestsApi.md#getreviewergroups) | **GET** /api/latest/projects/{projectKey}/settings/reviewer-groups | Get all reviewer groups |
| [**getReviewerGroups1**](PullRequestsApi.md#getreviewergroups1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups | Get all reviewer groups |
| [**getReviewers**](PullRequestsApi.md#getreviewers) | **GET** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/reviewers | Get required reviewers for PR creation |
| [**getUsers**](PullRequestsApi.md#getusers) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id}/users | Get reviewer group users |
| [**listParticipants**](PullRequestsApi.md#listparticipants) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants | Get pull request participants |
| [**merge**](PullRequestsApi.md#merge) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/merge | Merge pull request |
| [**react1**](PullRequestsApi.md#react1) | **PUT** /comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon} | React to a PR comment |
| [**rebase**](PullRequestsApi.md#rebase) | **POST** /git/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/rebase | Rebase pull request |
| [**reopen**](PullRequestsApi.md#reopen) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/reopen | Re-open pull request |
| [**search**](PullRequestsApi.md#search) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/participants | Search pull request participants |
| [**setMergeConfig**](PullRequestsApi.md#setmergeconfig) | **POST** /api/latest/admin/pull-requests/{scmId} | Update merge strategies |
| [**streamChanges1**](PullRequestsApi.md#streamchanges1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/changes | Gets pull request changes |
| [**streamDiff2**](PullRequestsApi.md#streamdiff2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/diff/{path} | Stream a diff within a pull request |
| [**streamPatch1**](PullRequestsApi.md#streampatch1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.patch | Stream pull request as patch |
| [**streamRawDiff2**](PullRequestsApi.md#streamrawdiff2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}.diff | Stream raw pull request diff |
| [**tryAutoMerge**](PullRequestsApi.md#tryautomerge) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/auto-merge | Auto-merge pull request |
| [**unReact1**](PullRequestsApi.md#unreact1) | **DELETE** /comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId}/reactions/{emoticon} | Remove a reaction from a PR comment |
| [**unassignParticipantRole**](PullRequestsApi.md#unassignparticipantrole) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} | Unassign pull request participant |
| [**unassignParticipantRole1**](PullRequestsApi.md#unassignparticipantrole1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants | Unassign pull request participant |
| [**unwatch1**](PullRequestsApi.md#unwatch1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch | Stop watching pull request |
| [**update**](PullRequestsApi.md#update) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId} | Update pull request metadata |
| [**update1**](PullRequestsApi.md#update1) | **PUT** /api/latest/projects/{projectKey}/settings/reviewer-groups/{id} | Update reviewer group attributes |
| [**update2**](PullRequestsApi.md#update2) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/reviewer-groups/{id} | Update reviewer group attributes |
| [**updateComment1**](PullRequestsApi.md#updatecomment1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/blocker-comments/{commentId} | Update pull request comment |
| [**updateComment2**](PullRequestsApi.md#updatecomment2) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/comments/{commentId} | Update pull request comment |
| [**updatePullRequestCondition**](PullRequestsApi.md#updatepullrequestcondition) | **PUT** /default-reviewers/latest/projects/{projectKey}/condition/{id} | Update default reviewer condition |
| [**updatePullRequestCondition1**](PullRequestsApi.md#updatepullrequestcondition1operation) | **PUT** /default-reviewers/latest/projects/{projectKey}/repos/{repositorySlug}/condition/{id} | Update default reviewer condition |
| [**updateStatus**](PullRequestsApi.md#updatestatus) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} | Change pull request status |
| [**watch1**](PullRequestsApi.md#watch1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/watch | Watch pull request |
| [**withdrawApproval**](PullRequestsApi.md#withdrawapproval) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/approve | Unapprove pull request |



## applySuggestion

> applySuggestion(projectKey, commentId, pullRequestId, repositorySlug, restApplySuggestionRequest)

Apply pull request suggestion

Apply a suggestion contained within a comment.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { ApplySuggestionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve.
    commentId: commentId_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestApplySuggestionRequest | A request containing other parameters required to apply a suggestion - The given versions/hashes must match the server\'s version/hashes or the suggestion application will fail (in order to avoid applying the suggestion to the wrong place (optional)
    restApplySuggestionRequest: ...,
  } satisfies ApplySuggestionRequest;

  try {
    const data = await api.applySuggestion(body);
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
| **commentId** | `string` | The ID of the comment to retrieve. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restApplySuggestionRequest** | [RestApplySuggestionRequest](RestApplySuggestionRequest.md) | A request containing other parameters required to apply a suggestion - The given versions/hashes must match the server\&#39;s version/hashes or the suggestion application will fail (in order to avoid applying the suggestion to the wrong place | [Optional] |

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
| **204** | An empty response indicating the suggestion has been applied. |  -  |
| **400** | The suggestion was not applied due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to apply the suggestion. |  -  |
| **404** | Unable to find the supplied project, repository, pull request or parent comment. |  -  |
| **409** | There was an error applying the suggestion to the source branch. It must be applied manually. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## approve

> RestPullRequestParticipant approve(projectKey, pullRequestId, repositorySlug)

Approve pull request

Approve a pull request as the current user. Implicitly adds the user as a participant if they are not already.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.   &lt;strong&gt;Deprecated since 4.2&lt;/strong&gt;. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { ApproveRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

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


## assignParticipantRole

> RestPullRequestParticipant assignParticipantRole(projectKey, pullRequestId, repositorySlug, restPullRequestAssignParticipantRoleRequest)

Assign pull request participant role

Assigns a participant to an explicit role in pull request. Currently only the REVIEWER role may be assigned.   If the user is not yet a participant in the pull request, they are made one and assigned the supplied role.   If the user is already a participant in the pull request, their previous role is replaced with the supplied role unless they are already assigned the AUTHOR role which cannot be changed and will result in a Bad Request (400) response code.   The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { AssignParticipantRoleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestPullRequestAssignParticipantRoleRequest | The participant to be added to the pull request, includes the user and their role
    restPullRequestAssignParticipantRoleRequest: ...,
  } satisfies AssignParticipantRoleRequest;

  try {
    const data = await api.assignParticipantRole(body);
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
| **restPullRequestAssignParticipantRoleRequest** | [RestPullRequestAssignParticipantRoleRequest](RestPullRequestAssignParticipantRoleRequest.md) | The participant to be added to the pull request, includes the user and their role | |

### Return type

[**RestPullRequestParticipant**](RestPullRequestParticipant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of the participants in this pull request. |  -  |
| **400** | The request does not have the username and role, or is attempting an invalid assignment. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | Adding reviewers isn\&#39;t supported on archived repositories |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## canMerge

> RestPullRequestMergeability canMerge(projectKey, pullRequestId, repositorySlug)

Test if pull request can be merged

Test whether a pull request can be merged.   A pull request may not be merged if:   - there are conflicts that need to be manually resolved before merging; and/or - one or more merge checks have vetoed the merge.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { CanMergeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies CanMergeRequest;

  try {
    const data = await api.canMerge(body);
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

[**RestPullRequestMergeability**](RestPullRequestMergeability.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The mergeability status of the pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | The specified pull request is not open. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## canRebase

> RestPullRequestRebaseability canRebase(projectKey, pullRequestId, repositorySlug)

Check PR rebase precondition

Checks preconditions to determine whether the pull request can be rebased.  Some of the preconditions are:  - The pull request is between Git repositories - The pull request is currently open - The pull request\&#39;s {@link PullRequest#getFromRef \&quot;from\&quot; ref} is a &lt;i&gt;branch&lt;/i&gt;    - In other words, the qualified ID for the \&quot;from\&quot; ref must start with &lt;code&gt;refs/heads/&lt;/code&gt;    - Tags, and other non-standard refs, cannot be rebased - The current user has an e-mail address    - Pull requests cannot be rebased anonymously    - &#x60;git rebase&#x60; records the current user as the committer for the rebased commits, which        requires a name and e-mail address - The current user has &lt;i&gt;write&lt;/i&gt; access to the {@link PullRequest#getFromRef \&quot;from\&quot; ref}\&#39;s repository    - Note that in order to &lt;i&gt;view&lt;/i&gt; a pull request a user is only required to have &lt;i&gt;read&lt;/i&gt;      access to the {@link PullRequest#getToRef toRef}\&#39;s repository, so just because a user can &lt;i&gt;see&lt;/i&gt;      a pull request does not mean they can request a rebase   This list is not exhaustive, and the exact set of preconditions applied can be extended by third-party add-ons.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { CanRebaseRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies CanRebaseRequest;

  try {
    const data = await api.canRebase(body);
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
| **pullRequestId** | `string` | The ID of the pull request within the repository. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestPullRequestRebaseability**](RestPullRequestRebaseability.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The rebaseability status of the pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## cancelAutoMerge

> cancelAutoMerge(projectKey, pullRequestId, repositorySlug)

Cancel auto-merge for pull request

Cancels a request to auto-merge the pull request, if the pull request was not merged yet.  The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { CancelAutoMergeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies CancelAutoMergeRequest;

  try {
    const data = await api.cancelAutoMerge(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The auto-merge request was cancelled. |  -  |
| **401** | The currently authenticated user has insufficient permissions to modify the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | The specified pull request is not open. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## create

> RestPullRequest create(projectKey, repositorySlug, restPullRequest)

Create pull request

Create a new pull request from a source branch or tag to a target branch. The source and target may be in the same repository, or different ones. (Note that different repositories must belong to the same &lt;code&gt;Repository#getHierarchyId()&lt;/code&gt; hierarchy.)   The &lt;code&gt;fromRef&lt;/code&gt; may be a branch or a tag. The &lt;code&gt;toRef&lt;/code&gt; is required to be a branch. Tags are not allowed as targets because tags are intended to be immutable and should not be changed after they are created.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the &lt;code&gt;fromRef&lt;/code&gt; and &lt;code&gt;toRef&lt;/code&gt; repositories to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { CreateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestPullRequest | The pull request data (optional)
    restPullRequest: ...,
  } satisfies CreateRequest;

  try {
    const data = await api.create(body);
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
| **restPullRequest** | [RestPullRequest](RestPullRequest.md) | The pull request data | [Optional] |

### Return type

[**RestPullRequest**](RestPullRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created pull request. |  -  |
| **400** | The pull request entity supplied in the request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a pull request between the two specified repositories. |  -  |
| **404** | One of the specified repositories or branches does not exist. |  -  |
| **409** | One of the following error cases occurred (check the error message for more details):   - There was a problem resolving one or more reviewers. - The specified branches were the same. - The &lt;em&gt;to&lt;/em&gt; branch is already up-to-date with all the commits on the     &lt;em&gt;from&lt;/em&gt; branch. - A pull request between the two branches already exists. - The &lt;em&gt;to&lt;/em&gt; repository is archived.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## create1

> RestReviewerGroup create1(projectKey, restReviewerGroup)

Create reviewer group

Create a reviewer group.  The authenticated user must have &lt;b&gt;PROJECT_ADMIN&lt;/b&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Create1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestReviewerGroup | The reviewer group to be create (optional)
    restReviewerGroup: ...,
  } satisfies Create1Request;

  try {
    const data = await api.create1(body);
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
| **restReviewerGroup** | [RestReviewerGroup](RestReviewerGroup.md) | The reviewer group to be create | [Optional] |

### Return type

[**RestReviewerGroup**](RestReviewerGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created reviewer group. |  -  |
| **400** | The request is missing a reviewer group name. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the project. |  -  |
| **404** | The project scope supplied does not exist. |  -  |
| **409** | The new created name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## create2

> RestReviewerGroup create2(projectKey, repositorySlug, restReviewerGroup)

Create reviewer group

Create a reviewer group.  The authenticated user must have &lt;b&gt;REPO_ADMIN&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Create2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestReviewerGroup | The request containing the details of the reviewer group. (optional)
    restReviewerGroup: ...,
  } satisfies Create2Request;

  try {
    const data = await api.create2(body);
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
| **restReviewerGroup** | [RestReviewerGroup](RestReviewerGroup.md) | The request containing the details of the reviewer group. | [Optional] |

### Return type

[**RestReviewerGroup**](RestReviewerGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created reviewer group. |  -  |
| **400** | The request is missing a reviewer group name. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository scope supplied does not exist. |  -  |
| **409** | The new created name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createComment1

> RestComment createComment1(projectKey, pullRequestId, repositorySlug, restComment)

Add new blocker comment

Add a new blocker comment.   Comments can be added in a few places by setting different attributes:   General pull request blocker comment:  &#x60;&#x60;&#x60;  {       \&quot;text\&quot;: \&quot;A task on a pull request.\&quot;  } &#x60;&#x60;&#x60;  Blocker reply to a comment:   &#x60;&#x60;&#x60;  {      \&quot;text\&quot;: \&quot;This reply is a task.\&quot;,       \&quot;parent\&quot;: {           \&quot;id\&quot;: 1       }  }  &#x60;&#x60;&#x60;  General blocker file comment:  &#x60;&#x60;&#x60;  {      \&quot;text\&quot;: \&quot;A blocker comment on a file.\&quot;,       \&quot;anchor\&quot;: {           \&quot;diffType\&quot;: \&quot;RANGE\&quot;,           \&quot;fromHash\&quot;: \&quot;6df3858eeb9a53a911cd17e66a9174d44ffb02cd\&quot;,           \&quot;path\&quot;: \&quot;path/to/file\&quot;,           \&quot;srcPath\&quot;: \&quot;path/to/file\&quot;,           \&quot;toHash\&quot;: \&quot;04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b\&quot;       }   }  &#x60;&#x60;&#x60;  Blocker file line comment:   &#x60;&#x60;&#x60;  {       \&quot;text\&quot;: \&quot;A task on a particular line within a file.\&quot;,       \&quot;anchor\&quot;: {           \&quot;diffType\&quot;: \&quot;COMMIT\&quot;,           \&quot;line\&quot;: 1,           \&quot;lineType\&quot;: \&quot;CONTEXT\&quot;,           \&quot;fileType\&quot;: \&quot;FROM\&quot;,           \&quot;fromHash\&quot;: \&quot;6df3858eeb9a53a911cd17e66a9174d44ffb02cd\&quot;,           \&quot;path\&quot;: \&quot;path/to/file\&quot;,           \&quot;srcPath\&quot;: \&quot;path/to/file\&quot;,           \&quot;toHash\&quot;: \&quot;04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b\&quot;       }   }  &#x60;&#x60;&#x60;  For file and line comments, \&#39;path\&#39; refers to the path of the file to which the comment should be applied and \&#39;srcPath\&#39; refers to the path the that file used to have (only required for copies and moves). Also, fromHash and toHash refer to the sinceId / untilId (respectively) used to produce the diff on which the comment was added. Finally diffType refers to the type of diff the comment was added on. For backwards compatibility purposes if no diffType is provided and no fromHash/toHash pair is provided the diffType will be resolved to \&#39;EFFECTIVE\&#39;. In any other cases the diffType is REQUIRED.   For line comments, \&#39;line\&#39; refers to the line in the diff that the comment should apply to. \&#39;lineType\&#39; refers to the type of diff hunk, which can be:   - \&#39;ADDED\&#39; - for an added line; - \&#39;REMOVED\&#39; - for a removed line; or - \&#39;CONTEXT\&#39; - for a line that was unmodified but is in the vicinity of the diff.    \&#39;fileType\&#39; refers to the file of the diff to which the anchor should be attached - which is of relevance when displaying the diff in a side-by-side way. Currently the supported values are:   - \&#39;FROM\&#39; - the source file of the diff  - \&#39;TO\&#39; - the destination file of the diff   If the current user is not a participant the user is added as a watcher of the pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { CreateComment1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestComment | The comment to add. (optional)
    restComment: ...,
  } satisfies CreateComment1Request;

  try {
    const data = await api.createComment1(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restComment** | [RestComment](RestComment.md) | The comment to add. | [Optional] |

### Return type

[**RestComment**](RestComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created comment. |  -  |
| **400** | The comment was not created due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request, create a comment or watch the pull request. |  -  |
| **404** | Unable to find the supplied project, repository, pull request or parent comment. |  -  |
| **409** | The new created name already exists or adding, deleting, or editing comments isn\&#39;t supported on archived repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createComment2

> RestComment createComment2(projectKey, pullRequestId, repositorySlug, restComment)

Add pull request comment

Add a new comment.   Comments can be added in a few places by setting different attributes: &lt;/p&gt;General pull request comment:   &lt;pre&gt; {     \&quot;text\&quot;: \&quot;An insightful general comment on a pull request.\&quot;   }   &lt;/pre&gt; Reply to a comment:  &lt;pre&gt; {     \&quot;text\&quot;: \&quot;A measured reply.\&quot;,     \&quot;parent\&quot;: {        \&quot;id\&quot;: 1      }   }   &lt;/pre&gt; General file comment:  &lt;pre&gt; {     \&quot;text\&quot;: \&quot;An insightful general comment on a file.\&quot;,     \&quot;anchor\&quot;: {        \&quot;diffType\&quot;: \&quot;RANGE\&quot;,        \&quot;fromHash\&quot;: \&quot;6df3858eeb9a53a911cd17e66a9174d44ffb02cd\&quot;,        \&quot;path\&quot;: \&quot;path/to/file\&quot;,        \&quot;srcPath\&quot;: \&quot;path/to/file\&quot;,        \&quot;toHash\&quot;: \&quot;04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b\&quot;     }   }   &lt;/pre&gt; File line comment:  &lt;pre&gt; {     \&quot;text\&quot;: \&quot;A pithy comment on a particular line within a file.\&quot;,     \&quot;anchor\&quot;: {        \&quot;diffType\&quot;: \&quot;COMMIT\&quot;,        \&quot;line\&quot;: 1,        \&quot;lineType\&quot;: \&quot;CONTEXT\&quot;,        \&quot;fileType\&quot;: \&quot;FROM\&quot;,        \&quot;fromHash\&quot;: \&quot;6df3858eeb9a53a911cd17e66a9174d44ffb02cd\&quot;,        \&quot;path\&quot;: \&quot;path/to/file\&quot;,        \&quot;srcPath\&quot;: \&quot;path/to/file\&quot;,        \&quot;toHash\&quot;: \&quot;04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b\&quot;      }   }   &lt;/pre&gt;    Add a new task.   Tasks are just comments with the attribute \&#39;severity\&#39; set to \&#39;BLOCKER\&#39;:   General pull request task:  &lt;pre&gt; {     \&quot;text\&quot;: \&quot;A task on a pull request.\&quot;,     \&quot;severity\&quot;: \&quot;BLOCKER\&quot;   }   &lt;/pre&gt;    Add a pending comment.    Pending comments are just comments with the attribute \&#39;state\&#39; set to \&#39;PENDING\&#39;:   Pending comment: &lt;pre&gt; {     \&quot;text\&quot;: \&quot;This is a pending comment\&quot;,     \&quot;state\&quot;: \&quot;PENDING\&quot;   }   &lt;/pre&gt;   For file and line comments, \&#39;path\&#39; refers to the path of the file to which the comment should be applied and \&#39;srcPath\&#39; refers to the path the that file used to have (only required for copies and moves).  fromHash and toHash refer to the sinceId / untilId (respectively) used to produce the diff on which the comment was added.  For diffType \&#39;COMMIT\&#39; or \&#39;RANGE\&#39;, you must specify both the fromHash and toHash. Note that this behaviour differs from &#x60;/commits/comments&#x60;  Finally diffType refers to the type of diff the comment was added on. For backwards compatibility purposes if no diffType is provided and no fromHash/toHash pair is provided the diffType will be resolved to \&#39;EFFECTIVE\&#39;. In any other cases the diffType is REQUIRED.  For line comments, \&#39;line\&#39; refers to the line in the diff that the comment should apply to. \&#39;lineType\&#39; refers to the type of diff hunk, which can be:   - \&#39;ADDED\&#39; - for an added line; - \&#39;REMOVED\&#39; - for a removed line; or - \&#39;CONTEXT\&#39; - for a line that was unmodified but is in the vicinity of the diff. &lt;/ul&gt;\&#39;fileType\&#39; refers to the file of the diff to which the anchor should be attached - which is of relevance when displaying the diff in a side-by-side way. Currently the supported values are:   - \&#39;FROM\&#39; - the source file of the diff - \&#39;TO\&#39; - the destination file of the diff &lt;/ul&gt;If the current user is not a participant the user is added as a watcher of the pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { CreateComment2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestComment | The comment to add (optional)
    restComment: ...,
  } satisfies CreateComment2Request;

  try {
    const data = await api.createComment2(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restComment** | [RestComment](RestComment.md) | The comment to add | [Optional] |

### Return type

[**RestComment**](RestComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created comment. |  -  |
| **400** | The comment was not created due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request, create a comment or watch the pull request. |  -  |
| **404** | Unable to find the supplied project, repository, pull request or parent comment. |  -  |
| **409** | Adding, deleting, or editing comments isn\&#39;t supported on archived repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPullRequestCondition

> RestPullRequestCondition createPullRequestCondition(projectKey, restDefaultReviewersRequest)

Create default reviewer condition

Create a default reviewer pull request condition for the given project.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { CreatePullRequestConditionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestDefaultReviewersRequest | The details needed to create a default reviewer pull request condition. (optional)
    restDefaultReviewersRequest: ...,
  } satisfies CreatePullRequestConditionRequest;

  try {
    const data = await api.createPullRequestCondition(body);
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
| **restDefaultReviewersRequest** | [RestDefaultReviewersRequest](RestDefaultReviewersRequest.md) | The details needed to create a default reviewer pull request condition. | [Optional] |

### Return type

[**RestPullRequestCondition**](RestPullRequestCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The default reviewer pull request condition that was created. |  -  |
| **400** | The request was malformed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPullRequestCondition1

> RestPullRequestCondition createPullRequestCondition1(projectKey, repositorySlug, restDefaultReviewersRequest)

Create default reviewer condition

Create a default reviewer pull request condition for the given repository.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { CreatePullRequestCondition1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestDefaultReviewersRequest | The details needed to create a default reviewer pull request condition. (optional)
    restDefaultReviewersRequest: ...,
  } satisfies CreatePullRequestCondition1Request;

  try {
    const data = await api.createPullRequestCondition1(body);
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
| **restDefaultReviewersRequest** | [RestDefaultReviewersRequest](RestDefaultReviewersRequest.md) | The details needed to create a default reviewer pull request condition. | [Optional] |

### Return type

[**RestPullRequestCondition**](RestPullRequestCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The default reviewer pull request condition that was created. |  -  |
| **400** | The request was malformed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## decline

> RestPullRequest decline(projectKey, pullRequestId, repositorySlug, version, restPullRequestDeclineRequest)

Decline pull request

Decline a pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { DeclineRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pullrequest ID provided by the path
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The current version of the pull request. If the server\'s version isn\'t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \'version\' attribute in the returned JSON structure. (optional)
    version: version_example,
    // RestPullRequestDeclineRequest | Optional body (optional)
    restPullRequestDeclineRequest: ...,
  } satisfies DeclineRequest;

  try {
    const data = await api.decline(body);
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
| **pullRequestId** | `string` | The pullrequest ID provided by the path | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **version** | `string` | The current version of the pull request. If the server\&#39;s version isn\&#39;t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \&#39;version\&#39; attribute in the returned JSON structure. | [Optional] [Defaults to `undefined`] |
| **restPullRequestDeclineRequest** | [RestPullRequestDeclineRequest](RestPullRequestDeclineRequest.md) | Optional body | [Optional] |

### Return type

[**RestPullRequest**](RestPullRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The pull request was declined. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | The pull request is not OPEN or has been updated since the version specified by the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete3

> delete3(projectKey, pullRequestId, repositorySlug, restPullRequestDeleteRequest)

Delete pull request

Deletes a pull request.   To call this resource, users must be authenticated and have permission to view the pull request. Additionally, they must:   - be the pull request author, if the system is configured to allow authors to delete their own   pull requests (this is the default) OR  - have repository administrator permission for the repository the pull request is targeting   A body containing the version of the pull request must be provided with this request.   &#x60;{ \&quot;version\&quot;: 1 }&#x60;

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Delete3Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestPullRequestDeleteRequest | A body containing the version of the pull request (optional)
    restPullRequestDeleteRequest: ...,
  } satisfies Delete3Request;

  try {
    const data = await api.delete3(body);
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
| **restPullRequestDeleteRequest** | [RestPullRequestDeleteRequest](RestPullRequestDeleteRequest.md) | A body containing the version of the pull request | [Optional] |

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
| **204** | The pull request was deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | Deleting pull requests isn\&#39;t supported on archived repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete6

> delete6(projectKey, id)

Delete reviewer group

Deletes a reviewer group.  The authenticated user must have &lt;b&gt;PROJECT_ADMIN&lt;/b&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Delete6Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the reviewer group to be deleted
    id: id_example,
  } satisfies Delete6Request;

  try {
    const data = await api.delete6(body);
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
| **id** | `string` | The ID of the reviewer group to be deleted | [Defaults to `undefined`] |

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
| **204** | The operation was successful. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the reviewer group in this project. |  -  |
| **404** | Unable to find the supplied reviewer group ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete7

> delete7(projectKey, id, repositorySlug)

Delete reviewer group

Deletes a reviewer group.  The authenticated user must have &lt;b&gt;REPO_ADMIN&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Delete7Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the reviewer group to be deleted
    id: id_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies Delete7Request;

  try {
    const data = await api.delete7(body);
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
| **id** | `string` | The ID of the reviewer group to be deleted | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

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
| **204** | The operation was successful |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the reviewer group in this repository. |  -  |
| **404** | Unable to find the supplied reviewer group ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteComment1

> deleteComment1(projectKey, commentId, pullRequestId, repositorySlug, version)

Delete pull request comment

Delete a pull request comment. Anyone can delete their own comment. Only users with &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; and above may delete comments created by other users.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { DeleteComment1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve.
    commentId: commentId_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The expected version of the comment. This must match the server\'s version of the comment or the delete will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the delete. Look for the \'version\' attribute in the returned JSON structure. (optional)
    version: version_example,
  } satisfies DeleteComment1Request;

  try {
    const data = await api.deleteComment1(body);
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
| **commentId** | `string` | The ID of the comment to retrieve. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **version** | `string` | The expected version of the comment. This must match the server\&#39;s version of the comment or the delete will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the delete. Look for the \&#39;version\&#39; attribute in the returned JSON structure. | [Optional] [Defaults to `undefined`] |

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
| **204** | The operation was successful. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the comment. |  -  |
| **404** | Unable to find the supplied project, repository or pull request. |  -  |
| **409** | The comment has replies, the version supplied does not match the current version or the repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteComment2

> deleteComment2(projectKey, commentId, pullRequestId, repositorySlug, version)

Delete a pull request comment

Delete a pull request comment. Anyone can delete their own comment. Only users with &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; and above may delete comments created by other users.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { DeleteComment2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve.
    commentId: commentId_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The expected version of the comment. This must match the server\'s version of the comment or the delete will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the delete. Look for the \'version\' attribute in the returned JSON structure. (optional)
    version: version_example,
  } satisfies DeleteComment2Request;

  try {
    const data = await api.deleteComment2(body);
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
| **commentId** | `string` | The ID of the comment to retrieve. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **version** | `string` | The expected version of the comment. This must match the server\&#39;s version of the comment or the delete will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the delete. Look for the \&#39;version\&#39; attribute in the returned JSON structure. | [Optional] [Defaults to `undefined`] |

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
| **204** | The operation was successful. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the comment. |  -  |
| **404** | Unable to find the supplied project, repository or pull request. |  -  |
| **409** | The comment has replies, the version supplied does not match the current version or the repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePullRequestCondition

> deletePullRequestCondition(projectKey, id)

Delete default reviewer condition

Delete the default reviewer pull request condition associated with the given ID.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { DeletePullRequestConditionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request condition.
    id: id_example,
  } satisfies DeletePullRequestConditionRequest;

  try {
    const data = await api.deletePullRequestCondition(body);
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
| **id** | `string` | The ID of the pull request condition. | [Defaults to `undefined`] |

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
| **204** | An empty response indicating that the pull request condition was deleted. |  -  |
| **404** | An empty response indicating a pull request condition with the given ID could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePullRequestCondition1

> deletePullRequestCondition1(projectKey, id, repositorySlug)

Delete default reviewer condition

Delete the default reviewer pull request condition associated with the given ID.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { DeletePullRequestCondition1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // number
    id: 56,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeletePullRequestCondition1Request;

  try {
    const data = await api.deletePullRequestCondition1(body);
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
| **id** | `number` |  | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

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
| **204** | An empty response indicating that the pull request condition was deleted |  -  |
| **404** | An empty response indicating a pull request condition with the given ID could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## discardReview

> discardReview(projectKey, pullRequestId, repositorySlug)

Discard pull request review

Discard a pull request review for the authenticated user.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { DiscardReviewRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DiscardReviewRequest;

  try {
    const data = await api.discardReview(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

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
| **204** | The pull request review has been discarded. |  -  |
| **401** | The currently authenticated user has insufficient permissions to discard the the pull request review |  -  |
| **404** | The specified pull request or repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## finishReview

> finishReview(projectKey, pullRequestId, repositorySlug, version, restPullRequestFinishReviewRequest)

Complete pull request review

Complete a review on a pull request.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { FinishReviewRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The current version of the pull request. If the server\'s version isn\'t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \'version\' attribute in the returned JSON structure. Note: This parameter is deprecated. Use last reviewed commit in request body instead (optional)
    version: version_example,
    // RestPullRequestFinishReviewRequest | The REST request which contains comment text, last reviewed commit and participant status. If last reviewed commit is provided, it will be used to update the participant status. The operation will fail if the latest commit of the pull request does not match the provided last reviewed commit. If last reviewed commit is not provided, the latest commit of the pull request will be used for the update by default. (optional)
    restPullRequestFinishReviewRequest: ...,
  } satisfies FinishReviewRequest;

  try {
    const data = await api.finishReview(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **version** | `string` | The current version of the pull request. If the server\&#39;s version isn\&#39;t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \&#39;version\&#39; attribute in the returned JSON structure. Note: This parameter is deprecated. Use last reviewed commit in request body instead | [Optional] [Defaults to `undefined`] |
| **restPullRequestFinishReviewRequest** | [RestPullRequestFinishReviewRequest](RestPullRequestFinishReviewRequest.md) | The REST request which contains comment text, last reviewed commit and participant status. If last reviewed commit is provided, it will be used to update the participant status. The operation will fail if the latest commit of the pull request does not match the provided last reviewed commit. If last reviewed commit is not provided, the latest commit of the pull request will be used for the update by default. | [Optional] |

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
| **200** | Getting back the number of published comments and completing the review on a pull request. |  -  |
| **400** | The request is invalid when there is no request body provided, or the participant status in the request is invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request, update a comment or watch the pull request. |  -  |
| **404** | There is no pull request review for the user to finish. |  -  |
| **409** | The pull request has been updated since the last reviewed commit specified by the request, or reviews cannot be made on pull requests in archived repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get3

> RestPullRequest get3(projectKey, pullRequestId, repositorySlug)

Get pull request

Retrieve a pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Get3Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies Get3Request;

  try {
    const data = await api.get3(body);
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

[**RestPullRequest**](RestPullRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The specified pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getActivities

> GetActivities200Response getActivities(projectKey, pullRequestId, repositorySlug, fromType, fromId, start, limit)

Get pull request activity

Retrieve a page of activity associated with a pull request.   Activity items include comments, approvals, rescopes (i.e. adding and removing of commits), merges and more.   Different types of activity items may be introduced in newer versions of Stash or by user installed plugins, so clients should be flexible enough to handle unexpected entity shapes in the returned page.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetActivitiesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | (required if <strong>fromId</strong> is present) the type of the activity item specified by <strong>fromId</strong> (either <strong>COMMENT</strong> or <strong>ACTIVITY</strong>) (optional)
    fromType: fromType_example,
    // string | (optional) the ID of the activity item to use as the first item in the returned page (optional)
    fromId: fromId_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetActivitiesRequest;

  try {
    const data = await api.getActivities(body);
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
| **fromType** | `string` | (required if &lt;strong&gt;fromId&lt;/strong&gt; is present) the type of the activity item specified by &lt;strong&gt;fromId&lt;/strong&gt; (either &lt;strong&gt;COMMENT&lt;/strong&gt; or &lt;strong&gt;ACTIVITY&lt;/strong&gt;) | [Optional] [Defaults to `undefined`] |
| **fromId** | `string` | (optional) the ID of the activity item to use as the first item in the returned page | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetActivities200Response**](GetActivities200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of activity relating to the specified pull request. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAutoMergeRequest

> RestAutoMergeRequest getAutoMergeRequest(projectKey, pullRequestId, repositorySlug)

Get auto-merge request for pull request

Returns an auto-merge request for the pull request, if requested.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetAutoMergeRequestRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetAutoMergeRequestRequest;

  try {
    const data = await api.getAutoMergeRequest(body);
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

[**RestAutoMergeRequest**](RestAutoMergeRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The auto-merge request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComment1

> RestComment getComment1(projectKey, commentId, pullRequestId, repositorySlug)

Get pull request comment

Retrieves a pull request comment.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetComment1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve
    commentId: commentId_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetComment1Request;

  try {
    const data = await api.getComment1(body);
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
| **commentId** | `string` | The ID of the comment to retrieve | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestComment**](RestComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested comment. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the comment. |  -  |
| **404** | Unable to find the supplied project, repository, pull request or comment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComment2

> RestComment getComment2(projectKey, commentId, pullRequestId, repositorySlug)

Get a pull request comment

Retrieves a pull request comment.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetComment2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve.
    commentId: commentId_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetComment2Request;

  try {
    const data = await api.getComment2(body);
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
| **commentId** | `string` | The ID of the comment to retrieve. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestComment**](RestComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested comment. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the comment. |  -  |
| **404** | Unable to find the supplied project, repository, pull request or comment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComments1

> GetComments200Response getComments1(projectKey, pullRequestId, repositorySlug, count, state, states, start, limit)

Search pull request comments

Gets comments matching the given set of field values for the specified pull request. (Note this does &lt;b&gt;not&lt;/b&gt; perform any kind of searching for comments by their text).   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetComments1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If true only the count of the comments by state will be returned (and not the body of the comments). (optional)
    count: count_example,
    // Array<string> (optional)
    state: ...,
    // string | (optional). If supplied, only comments with a state in the given list will be returned. The state can be OPEN or RESOLVED. (optional)
    states: states_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetComments1Request;

  try {
    const data = await api.getComments1(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **count** | `string` | If true only the count of the comments by state will be returned (and not the body of the comments). | [Optional] [Defaults to `undefined`] |
| **state** | `Array<string>` |  | [Optional] |
| **states** | `string` | (optional). If supplied, only comments with a state in the given list will be returned. The state can be OPEN or RESOLVED. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetComments200Response**](GetComments200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of Comments from the supplied pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository or pull request. |  -  |
| **404** | The repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComments2

> GetComments200Response getComments2(path, projectKey, pullRequestId, repositorySlug, fromHash, anchorState, diffType, toHash, state, diffTypes, states, start, limit)

Get pull request comments for path

Gets comments for the specified pull request and path.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetComments2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The path to stream comments for a given path
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The from commit hash to stream comments for a RANGE or COMMIT arbitrary change scope (optional)
    fromHash: fromHash_example,
    // string | ACTIVE to stream the active comments; ORPHANED to stream the orphaned comments; ALL to stream both the active and the orphaned comments; (optional)
    anchorState: anchorState_example,
    // Array<string> (optional)
    diffType: ...,
    // string | The to commit hash to stream comments for a RANGE or COMMIT arbitrary change scope (optional)
    toHash: toHash_example,
    // Array<string> (optional)
    state: ...,
    // string | EFFECTIVE to stream the comments related to the effective diff of the pull request; RANGE to stream comments related to a commit range between two arbitrary commits (requires \'fromHash\' and \'toHash\'); COMMIT to stream comments related to a commit between two arbitrary commits (requires \'fromHash\' and \'toHash\') (optional)
    diffTypes: diffTypes_example,
    // string | (optional). If supplied, only comments with a state in the given list will be returned. The state can be OPEN or RESOLVED. (optional)
    states: states_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetComments2Request;

  try {
    const data = await api.getComments2(body);
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
| **path** | `string` | The path to stream comments for a given path | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **fromHash** | `string` | The from commit hash to stream comments for a RANGE or COMMIT arbitrary change scope | [Optional] [Defaults to `undefined`] |
| **anchorState** | `string` | ACTIVE to stream the active comments; ORPHANED to stream the orphaned comments; ALL to stream both the active and the orphaned comments; | [Optional] [Defaults to `undefined`] |
| **diffType** | `Array<string>` |  | [Optional] |
| **toHash** | `string` | The to commit hash to stream comments for a RANGE or COMMIT arbitrary change scope | [Optional] [Defaults to `undefined`] |
| **state** | `Array<string>` |  | [Optional] |
| **diffTypes** | `string` | EFFECTIVE to stream the comments related to the effective diff of the pull request; RANGE to stream comments related to a commit range between two arbitrary commits (requires \&#39;fromHash\&#39; and \&#39;toHash\&#39;); COMMIT to stream comments related to a commit between two arbitrary commits (requires \&#39;fromHash\&#39; and \&#39;toHash\&#39;) | [Optional] [Defaults to `undefined`] |
| **states** | `string` | (optional). If supplied, only comments with a state in the given list will be returned. The state can be OPEN or RESOLVED. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetComments200Response**](GetComments200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of Comments from the supplied pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository or pull request. |  -  |
| **404** | The repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommitMessageSuggestion

> RestCommitMessageSuggestion getCommitMessageSuggestion(projectKey, pullRequestId, repositorySlug)

Get commit message suggestion

Retrieve a suggested commit message for the given Pull Request.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetCommitMessageSuggestionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request to generate the suggestion for
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetCommitMessageSuggestionRequest;

  try {
    const data = await api.getCommitMessageSuggestion(body);
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
| **pullRequestId** | `string` | The ID of the pull request to generate the suggestion for | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestCommitMessageSuggestion**](RestCommitMessageSuggestion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The suggested commit message |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommits1

> GetCommits200Response getCommits1(projectKey, pullRequestId, repositorySlug, avatarScheme, withCounts, avatarSize, start, limit)

Get pull request commits

Retrieve commits for the specified pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetCommits1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the pullrequest, part of the path
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The desired scheme for the avatar URL. If the parameter is not present URLs will use the same scheme as this request (optional)
    avatarScheme: avatarScheme_example,
    // string | If set to true, the service will add \"authorCount\" and \"totalCount\" at the end of the page. \"authorCount\" is the number of different authors and \"totalCount\" is the total number of commits. (optional)
    withCounts: withCounts_example,
    // string | If present the service adds avatar URLs for commit authors. Should be an integer specifying the desired size in pixels. If the parameter is not present, avatar URLs will not be setCOMMIT to stream comments related to a commit between two arbitrary commits (requires \'fromHash\' and \'toHash\') (optional)
    avatarSize: avatarSize_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetCommits1Request;

  try {
    const data = await api.getCommits1(body);
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
| **pullRequestId** | `string` | ID of the pullrequest, part of the path | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **avatarScheme** | `string` | The desired scheme for the avatar URL. If the parameter is not present URLs will use the same scheme as this request | [Optional] [Defaults to `undefined`] |
| **withCounts** | `string` | If set to true, the service will add \&quot;authorCount\&quot; and \&quot;totalCount\&quot; at the end of the page. \&quot;authorCount\&quot; is the number of different authors and \&quot;totalCount\&quot; is the total number of commits. | [Optional] [Defaults to `undefined`] |
| **avatarSize** | `string` | If present the service adds avatar URLs for commit authors. Should be an integer specifying the desired size in pixels. If the parameter is not present, avatar URLs will not be setCOMMIT to stream comments related to a commit between two arbitrary commits (requires \&#39;fromHash\&#39; and \&#39;toHash\&#39;) | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCommits200Response**](GetCommits200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of commits from the supplied pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository or pull request. |  -  |
| **404** | The repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDiffStatsSummary2

> any getDiffStatsSummary2(path, projectKey, pullRequestId, repositorySlug, sinceId, srcPath, untilId, whitespace)

Get diff stats summary for pull request

Retrieve the diff stats summary for the given Pull Request.   The stats summary include the total number of modified files, added lines, and deleted lines.   Note: The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetDiffStatsSummary2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | Optional path to the file which should be diffed
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The since commit hash to stream a diff between two arbitrary hashes (optional)
    sinceId: sinceId_example,
    // string | The previous path to the file, if the file has been copied, moved or renamed (optional)
    srcPath: srcPath_example,
    // string | The until commit hash to stream a diff between two arbitrary hashes (optional)
    untilId: untilId_example,
    // string | Optional whitespace flag which can be set to <code>ignore-all</code> (optional)
    whitespace: whitespace_example,
  } satisfies GetDiffStatsSummary2Request;

  try {
    const data = await api.getDiffStatsSummary2(body);
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
| **path** | `string` | Optional path to the file which should be diffed | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The ID of the pull request within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **sinceId** | `string` | The since commit hash to stream a diff between two arbitrary hashes | [Optional] [Defaults to `undefined`] |
| **srcPath** | `string` | The previous path to the file, if the file has been copied, moved or renamed | [Optional] [Defaults to `undefined`] |
| **untilId** | `string` | The until commit hash to stream a diff between two arbitrary hashes | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | Optional whitespace flag which can be set to &lt;code&gt;ignore-all&lt;/code&gt; | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The diff stats summary |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMergeBase1

> RestCommit getMergeBase1(projectKey, pullRequestId, repositorySlug)

Get the common ancestor between the latest commits of the source and target branches of the pull request

Returns the best common ancestor between the latest commits of the source and target branches of the pull request.  If more than one best common ancestor exists, only one will be returned. It is unspecified which will be returned.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetMergeBase1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetMergeBase1Request;

  try {
    const data = await api.getMergeBase1(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestCommit**](RestCommit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The common ancestor of the latest commits in the source and target branches of this pull request |  -  |
| **204** | No common parent between exist |  -  |
| **404** | The project, repository, or pull request does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMergeConfig

> RestPullRequestMergeConfig getMergeConfig(scmId)

Get merge strategies

Retrieve the merge strategies available for this instance.   The user must be authenticated to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetMergeConfigRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | the id of the scm to get strategies for
    scmId: scmId_example,
  } satisfies GetMergeConfigRequest;

  try {
    const data = await api.getMergeConfig(body);
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
| **scmId** | `string` | the id of the scm to get strategies for | [Defaults to `undefined`] |

### Return type

[**RestPullRequestMergeConfig**](RestPullRequestMergeConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The merge configuration of this instance. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the request repository. |  -  |
| **404** | The request repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPage

> GetPullRequests1200Response getPage(projectKey, repositorySlug, withAttributes, at, withProperties, draft, filterText, state, order, direction, start, limit)

Get pull requests for repository

Retrieve a page of pull requests to or from the specified repository.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.  Optionally clients can specify PR participant filters. Each filter has a mandatory username.N parameter, and the optional role.N and approved.N parameters.   - username.N - the \&quot;root\&quot; of a single participant filter, where \&quot;N\&quot; is a natural number   starting from 1. This allows clients to specify multiple participant filters, by providing consecutive   filters as username.1, username.2 etc. Note that the filters numbering has to start   with 1 and be continuous for all filters to be processed. The total allowed number of participant   filters is 10 and all filters exceeding that limit will be dropped. - role.N(optional) the role associated with username.N.   This must be one of AUTHOR, REVIEWER, or PARTICIPANT - approved.N (optional) the approved status associated with username.N.   That is whether username.N has approved the PR. Either true, or false 

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetPageRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | (optional) defaults to true, whether to return additional pull request attributes (optional)
    withAttributes: withAttributes_example,
    // string | (optional) a <i>fully-qualified</i> branch ID to find pull requests to or from, such as refs/heads/master (optional)
    at: at_example,
    // string | (optional) defaults to true, whether to return additional pull request properties (optional)
    withProperties: withProperties_example,
    // string | (optional) If specified, only pull requests matching the supplied draft status will be returned. (optional)
    draft: draft_example,
    // string | (optional) If specified, only pull requests where the title or description contains the supplied string will be returned. (optional)
    filterText: filterText_example,
    // string | (optional, defaults to <strong>OPEN</strong>). Supply <strong>ALL</strong> to return pull request in any state. If a state is supplied only pull requests in the specified state will be returned. Either <strong>OPEN</strong>, <strong>DECLINED</strong> or <strong>MERGED</strong>. (optional)
    state: state_example,
    // string | (optional, defaults to <strong>NEWEST</strong>) the order to return pull requests in, either <strong>OLDEST</strong> (as in: \"oldest first\") or <strong>NEWEST</strong>. (optional)
    order: order_example,
    // string | (optional, defaults to <strong>INCOMING</strong>) the direction relative to the specified repository. Either <strong>INCOMING</strong> or <strong>OUTGOING</strong>. (optional)
    direction: direction_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetPageRequest;

  try {
    const data = await api.getPage(body);
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
| **withAttributes** | `string` | (optional) defaults to true, whether to return additional pull request attributes | [Optional] [Defaults to `undefined`] |
| **at** | `string` | (optional) a &lt;i&gt;fully-qualified&lt;/i&gt; branch ID to find pull requests to or from, such as refs/heads/master | [Optional] [Defaults to `undefined`] |
| **withProperties** | `string` | (optional) defaults to true, whether to return additional pull request properties | [Optional] [Defaults to `undefined`] |
| **draft** | `string` | (optional) If specified, only pull requests matching the supplied draft status will be returned. | [Optional] [Defaults to `undefined`] |
| **filterText** | `string` | (optional) If specified, only pull requests where the title or description contains the supplied string will be returned. | [Optional] [Defaults to `undefined`] |
| **state** | `string` | (optional, defaults to &lt;strong&gt;OPEN&lt;/strong&gt;). Supply &lt;strong&gt;ALL&lt;/strong&gt; to return pull request in any state. If a state is supplied only pull requests in the specified state will be returned. Either &lt;strong&gt;OPEN&lt;/strong&gt;, &lt;strong&gt;DECLINED&lt;/strong&gt; or &lt;strong&gt;MERGED&lt;/strong&gt;. | [Optional] [Defaults to `undefined`] |
| **order** | `string` | (optional, defaults to &lt;strong&gt;NEWEST&lt;/strong&gt;) the order to return pull requests in, either &lt;strong&gt;OLDEST&lt;/strong&gt; (as in: \&quot;oldest first\&quot;) or &lt;strong&gt;NEWEST&lt;/strong&gt;. | [Optional] [Defaults to `undefined`] |
| **direction** | `string` | (optional, defaults to &lt;strong&gt;INCOMING&lt;/strong&gt;) the direction relative to the specified repository. Either &lt;strong&gt;INCOMING&lt;/strong&gt; or &lt;strong&gt;OUTGOING&lt;/strong&gt;. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPullRequests1200Response**](GetPullRequests1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of pull requests that match the search criteria. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPullRequestConditions

> Array&lt;RestPullRequestCondition&gt; getPullRequestConditions(projectKey)

Get default reviewer conditions

Return a page of default reviewer pull request conditions that have been configured for this project.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetPullRequestConditionsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
  } satisfies GetPullRequestConditionsRequest;

  try {
    const data = await api.getPullRequestConditions(body);
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

### Return type

[**Array&lt;RestPullRequestCondition&gt;**](RestPullRequestCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The default reviewer pull request conditions associated with the given project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPullRequestConditions1

> Array&lt;RestPullRequestCondition&gt; getPullRequestConditions1(projectKey, repositorySlug)

Get default reviewer conditions

Return a page of default reviewer pull request conditions that have been configured for this repository.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetPullRequestConditions1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetPullRequestConditions1Request;

  try {
    const data = await api.getPullRequestConditions1(body);
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

[**Array&lt;RestPullRequestCondition&gt;**](RestPullRequestCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The default reviewer pull request conditions associated with the given repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPullRequests

> GetPullRequests1200Response getPullRequests(projectKey, commitId, repositorySlug, start, limit)

Get repository pull requests containing commit

Retrieve a page of pull requests in the current repository that contain the given commit.  The user must be authenticated and have access to the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetPullRequestsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the commit ID
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetPullRequestsRequest;

  try {
    const data = await api.getPullRequests(body);
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
| **commitId** | `string` | the commit ID | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPullRequests1200Response**](GetPullRequests1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return a page of pull requests in the current repository containing the given commit. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the request repository. |  -  |
| **404** | The request repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReview

> GetComments200Response getReview(projectKey, pullRequestId, repositorySlug, start, limit)

Get pull request comment thread

Get the &lt;code&gt;CommentThread&lt;/code&gt; threads which have &lt;code&gt;Comment&lt;/code&gt; comments that have a &lt;code&gt;CommentState#PENDING&lt;/code&gt; pending state and are part of the pull request review for the authenticated user.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetReviewRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetReviewRequest;

  try {
    const data = await api.getReview(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetComments200Response**](GetComments200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of Comments from the supplied pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository or pull request. |  -  |
| **404** | The repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReviewerGroup

> RestReviewerGroup getReviewerGroup(projectKey, id)

Get reviewer group

Retrieve a reviewer group.  The authenticated user must have &lt;b&gt;PROJECT_READ&lt;/b&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetReviewerGroupRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the reviewer group to be retrieved
    id: id_example,
  } satisfies GetReviewerGroupRequest;

  try {
    const data = await api.getReviewerGroup(body);
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
| **id** | `string` | The ID of the reviewer group to be retrieved | [Defaults to `undefined`] |

### Return type

[**RestReviewerGroup**](RestReviewerGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The reviewer group. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the project. |  -  |
| **404** | The ID supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReviewerGroup1

> RestReviewerGroup getReviewerGroup1(projectKey, id, repositorySlug)

Get reviewer group

Retrieve a reviewer group.  The authenticated user must have &lt;b&gt;REPO_READ&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetReviewerGroup1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the reviewer group to be retrieved
    id: id_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetReviewerGroup1Request;

  try {
    const data = await api.getReviewerGroup1(body);
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
| **id** | `string` | The ID of the reviewer group to be retrieved | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestReviewerGroup**](RestReviewerGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The reviewer group. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The ID supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReviewerGroups

> GetReviewerGroups1200Response getReviewerGroups(projectKey, start, limit)

Get all reviewer groups

Retrieve a page of reviewer groups of a given scope.  The authenticated user must have &lt;b&gt;PROJECT_READ&lt;/b&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetReviewerGroupsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetReviewerGroupsRequest;

  try {
    const data = await api.getReviewerGroups(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetReviewerGroups1200Response**](GetReviewerGroups1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of reviewer group(s) of the provided scope. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the project. |  -  |
| **404** | The project scope supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReviewerGroups1

> GetReviewerGroups1200Response getReviewerGroups1(projectKey, repositorySlug, start, limit)

Get all reviewer groups

Retrieve a page of reviewer groups of a given scope.  The authenticated user must have &lt;b&gt;REPO_READ&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetReviewerGroups1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetReviewerGroups1Request;

  try {
    const data = await api.getReviewerGroups1(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetReviewerGroups1200Response**](GetReviewerGroups1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A &#x60;page&#x60; of reviewer group(s) of the provided scope and its inherited scope. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository scope supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReviewers

> Array&lt;RestPullRequestCondition&gt; getReviewers(projectKey, repositorySlug, targetRepoId, sourceRepoId, sourceRefId, targetRefId)

Get required reviewers for PR creation

Return a set of users who are required reviewers for pull requests created from the given source repository and ref to the given target ref in this repository.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetReviewersRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The ID of the repository in which the target ref exists (optional)
    targetRepoId: targetRepoId_example,
    // string | The ID of the repository in which the source ref exists (optional)
    sourceRepoId: sourceRepoId_example,
    // string | The ID of the source ref (optional)
    sourceRefId: sourceRefId_example,
    // string | The ID of the target ref (optional)
    targetRefId: targetRefId_example,
  } satisfies GetReviewersRequest;

  try {
    const data = await api.getReviewers(body);
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
| **targetRepoId** | `string` | The ID of the repository in which the target ref exists | [Optional] [Defaults to `undefined`] |
| **sourceRepoId** | `string` | The ID of the repository in which the source ref exists | [Optional] [Defaults to `undefined`] |
| **sourceRefId** | `string` | The ID of the source ref | [Optional] [Defaults to `undefined`] |
| **targetRefId** | `string` | The ID of the target ref | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;RestPullRequestCondition&gt;**](RestPullRequestCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The default reviewer pull request conditions associated with the given repository. |  -  |
| **400** | The request was malformed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers

> Array&lt;RestApplicationUser&gt; getUsers(projectKey, id, repositorySlug)

Get reviewer group users

Retrieve a list of the users of a reviewer group.  This does not return all the users of the group, only the users who are licensed and have &lt;b&gt;REPO_READ&lt;/b&gt; permission for the specified repository.  The authenticated user must have &lt;b&gt;REPO_READ&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { GetUsersRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the reviewer group to be retrieved
    id: id_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetUsersRequest;

  try {
    const data = await api.getUsers(body);
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
| **id** | `string` | The ID of the reviewer group to be retrieved | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestApplicationUser&gt;**](RestApplicationUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The list of users of a reviewer group. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The ID supplied does not exist.d |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listParticipants

> ListParticipants200Response listParticipants(projectKey, pullRequestId, repositorySlug, start, limit)

Get pull request participants

Retrieves a page of the participants for a given pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { ListParticipantsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies ListParticipantsRequest;

  try {
    const data = await api.listParticipants(body);
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
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListParticipants200Response**](ListParticipants200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of the participants in this pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## merge

> RestPullRequest merge(projectKey, pullRequestId, repositorySlug, version, restPullRequestMergeRequest)

Merge pull request

Merge the specified pull request immediately or set the pull request to auto-merge when all the merge checks pass by setting &lt;strong&gt;autoMerge&lt;/strong&gt; field in the request body.  The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { MergeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The current version of the pull request. If the server\'s version isn\'t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \'version\' attribute in the returned JSON structure. (optional)
    version: version_example,
    // RestPullRequestMergeRequest | The body holder (optional)
    restPullRequestMergeRequest: ...,
  } satisfies MergeRequest;

  try {
    const data = await api.merge(body);
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
| **version** | `string` | The current version of the pull request. If the server\&#39;s version isn\&#39;t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \&#39;version\&#39; attribute in the returned JSON structure. | [Optional] [Defaults to `undefined`] |
| **restPullRequestMergeRequest** | [RestPullRequestMergeRequest](RestPullRequestMergeRequest.md) | The body holder | [Optional] |

### Return type

[**RestPullRequest**](RestPullRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The merged pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to merge the specified pull request |  -  |
| **403** | The auto-merge setting is not enabled for the repository that this pull request targets. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | One of the following error cases occurred (check the error message for more details):   - The pull request has conflicts. - A merge check vetoed the merge. - The specified version is out of date. - The specified pull request is not open. - The &lt;em&gt;to&lt;/em&gt; repository is archived.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## react1

> RestUserReaction react1(projectKey, commentId, pullRequestId, emoticon, repositorySlug)

React to a PR comment

Add an emoticon reaction to a pull request comment

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { React1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The comment id.
    commentId: commentId_example,
    // string | The pull request id.
    pullRequestId: pullRequestId_example,
    // string | The emoticon to add
    emoticon: emoticon_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies React1Request;

  try {
    const data = await api.react1(body);
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
| **commentId** | `string` | The comment id. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request id. | [Defaults to `undefined`] |
| **emoticon** | `string` | The emoticon to add | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestUserReaction**](RestUserReaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The added reaction |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rebase

> RestPullRequestRebaseResult rebase(projectKey, pullRequestId, repositorySlug, restPullRequestRebaseRequest)

Rebase pull request

Rebases the specified pull request, rewriting the incoming commits to start from the tip commit of the pull request\&#39;s target branch. &lt;i&gt;This operation alters the pull request\&#39;s source branch and cannot be undone.&lt;/i&gt;  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets &lt;i&gt;and&lt;/i&gt; &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the pull request\&#39;s source repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { RebaseRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestPullRequestRebaseRequest | The pull request rebase request. (optional)
    restPullRequestRebaseRequest: ...,
  } satisfies RebaseRequest;

  try {
    const data = await api.rebase(body);
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
| **pullRequestId** | `string` | The ID of the pull request within the repository. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restPullRequestRebaseRequest** | [RestPullRequestRebaseRequest](RestPullRequestRebaseRequest.md) | The pull request rebase request. | [Optional] |

### Return type

[**RestPullRequestRebaseResult**](RestPullRequestRebaseResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The merged pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request and/or to update its source branch. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | Any of the following error cases occurred (check the error message for more details):  - The rebase encountered conflicts. - The rebase discarded all of the incoming commits and would have left the pull request empty - A &lt;tt&gt;PreRepositoryHook&lt;/tt&gt; vetoed the rebase. - The specified version is out of date. - The specified pull request is not open. - The target repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reopen

> RestPullRequest reopen(projectKey, pullRequestId, repositorySlug, version, restPullRequestReopenRequest)

Re-open pull request

Re-open a declined pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { ReopenRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The current version of the pull request. If the server\'s version isn\'t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \'version\' attribute in the returned JSON structure. (optional)
    version: version_example,
    // RestPullRequestReopenRequest | The body holder (optional)
    restPullRequestReopenRequest: ...,
  } satisfies ReopenRequest;

  try {
    const data = await api.reopen(body);
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
| **version** | `string` | The current version of the pull request. If the server\&#39;s version isn\&#39;t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \&#39;version\&#39; attribute in the returned JSON structure. | [Optional] [Defaults to `undefined`] |
| **restPullRequestReopenRequest** | [RestPullRequestReopenRequest](RestPullRequestReopenRequest.md) | The body holder | [Optional] |

### Return type

[**RestPullRequest**](RestPullRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The merged pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to reopen the specified pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | One of the following error cases occurred (check the error message for more details):   - The pull request is not in a declined state. - The specified version is out of date. - The &lt;em&gt;to&lt;/em&gt; repository is archived.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## search

> GetUsersWithoutAnyPermission200Response search(projectKey, repositorySlug, filter, role, direction, start, limit)

Search pull request participants

Retrieve a page of participant users for all the pull requests to or from the specified repository.   Optionally clients can specify following filters.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { SearchRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | (optional) Return only users, whose username, name or email address <i>contain</i> the filter value (optional)
    filter: filter_example,
    // string | (optional) The role associated with the pull request participant. This must be one of AUTHOR, REVIEWER, or PARTICIPANT (optional)
    role: role_example,
    // string | (optional), Defaults to <strong>INCOMING</strong>) the direction relative to the specified repository. Either <strong>INCOMING</strong> or <strong>OUTGOING</strong>. (optional)
    direction: direction_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies SearchRequest;

  try {
    const data = await api.search(body);
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
| **filter** | `string` | (optional) Return only users, whose username, name or email address &lt;i&gt;contain&lt;/i&gt; the filter value | [Optional] [Defaults to `undefined`] |
| **role** | `string` | (optional) The role associated with the pull request participant. This must be one of AUTHOR, REVIEWER, or PARTICIPANT | [Optional] [Defaults to `undefined`] |
| **direction** | `string` | (optional), Defaults to &lt;strong&gt;INCOMING&lt;/strong&gt;) the direction relative to the specified repository. Either &lt;strong&gt;INCOMING&lt;/strong&gt; or &lt;strong&gt;OUTGOING&lt;/strong&gt;. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUsersWithoutAnyPermission200Response**](GetUsersWithoutAnyPermission200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users that match the search criteria. |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setMergeConfig

> RestPullRequestMergeConfig setMergeConfig(scmId, restPullRequestSettings)

Update merge strategies

Update the pull request merge strategies for the context repository.   The authenticated user must have &lt;strong&gt;ADMIN&lt;/strong&gt; permission to call this resource.   Only the strategies provided will be enabled, only one may be set to default   The commit message template will not be updated if not provided, and will be deleted if the &#x60;commitMessageTemplate&#x60; attribute is empty, i.e: &#x60;commitMessageTemplate: {}&#x60;.  An explicitly set pull request merge strategy configuration can be deleted by POSTing a document with an empty &#x60;mergeConfig&#x60; attribute. i.e: &#x60;&#x60;&#x60; {      \&quot;mergeConfig\&quot;: {}  }  &#x60;&#x60;&#x60;  Upon completion of this request, the effective configuration will be the default configuration.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { SetMergeConfigRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | the id of the scm to get strategies for
    scmId: scmId_example,
    // RestPullRequestSettings | the settings (optional)
    restPullRequestSettings: ...,
  } satisfies SetMergeConfigRequest;

  try {
    const data = await api.setMergeConfig(body);
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
| **scmId** | `string` | the id of the scm to get strategies for | [Defaults to `undefined`] |
| **restPullRequestSettings** | [RestPullRequestSettings](RestPullRequestSettings.md) | the settings | [Optional] |

### Return type

[**RestPullRequestMergeConfig**](RestPullRequestMergeConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository pull request merge strategies for the context repository. |  -  |
| **400** | The repository pull request merge strategies were not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to administrate thespecified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |
| **409** | Setting or deleting merge configurations isn\&#39;t supported on archived repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamChanges1

> RestChange streamChanges1(projectKey, pullRequestId, repositorySlug, sinceId, changeScope, untilId, withComments, start, limit)

Gets pull request changes

Gets changes for the specified PullRequest.  If the changeScope query parameter is set to \&#39;UNREVIEWED\&#39;, the application will attempt to stream unreviewed changes based on the lastReviewedCommit of the current user, which are the changes between the lastReviewedCommit and the latest commit of the source branch. The current user is considered to &lt;i&gt;not&lt;/i&gt; have any unreviewed changes for the pull request when the lastReviewedCommit is either null (everything is unreviewed, so all changes are streamed), equal to the latest commit of the source branch (everything is reviewed), or no longer on the source branch (the source branch has been rebased). In these cases, the application will fall back to streaming all changes (the default), which is the effective diff for the pull request. The type of changes streamed can be determined by the changeScope parameter included in the properties map of the response.   Note: This resource is currently &lt;i&gt;not paged&lt;/i&gt;. The server will return at most one page. The server will truncate the number of changes to either the request\&#39;s page limit or an internal maximum, whichever is smaller. The start parameter of the page request is also ignored.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { StreamChanges1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The since commit hash to stream changes for a RANGE arbitrary change scope (optional)
    sinceId: sinceId_example,
    // string | UNREVIEWED to stream the unreviewed changes for the current user (if they exist); RANGE to stream changes between two arbitrary commits (requires \'sinceId\' and \'untilId\'); otherwise ALL to stream all changes (the default) (optional)
    changeScope: changeScope_example,
    // string | The until commit hash to stream changes for a RANGE arbitrary change scope (optional)
    untilId: untilId_example,
    // string | true to apply comment counts in the changes (the default); otherwise, false to stream changes without comment counts (optional)
    withComments: withComments_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies StreamChanges1Request;

  try {
    const data = await api.streamChanges1(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **sinceId** | `string` | The since commit hash to stream changes for a RANGE arbitrary change scope | [Optional] [Defaults to `undefined`] |
| **changeScope** | `string` | UNREVIEWED to stream the unreviewed changes for the current user (if they exist); RANGE to stream changes between two arbitrary commits (requires \&#39;sinceId\&#39; and \&#39;untilId\&#39;); otherwise ALL to stream all changes (the default) | [Optional] [Defaults to `undefined`] |
| **untilId** | `string` | The until commit hash to stream changes for a RANGE arbitrary change scope | [Optional] [Defaults to `undefined`] |
| **withComments** | `string` | true to apply comment counts in the changes (the default); otherwise, false to stream changes without comment counts | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**RestChange**](RestChange.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of unreviewed Changes for the current user from the supplied pull request, including the unreviewedCommits in the properties map. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository or pull request. |  -  |
| **404** | The repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamDiff2

> RestDiff streamDiff2(path, projectKey, pullRequestId, repositorySlug, avatarScheme, contextLines, sinceId, srcPath, diffType, untilId, whitespace, withComments, avatarSize)

Stream a diff within a pull request

Streams a diff within a pull request.   If the specified file has been copied, moved or renamed, the &lt;code&gt;srcPath&lt;/code&gt; must also be specified to produce the correct diff.   To stream a raw text representation of the diff, this endpoint can be called with the request header \&#39;Accept: text/plain\&#39;.   Note: This RESTful endpoint is currently &lt;i&gt;not paged&lt;/i&gt;. The server will internally apply a hard cap to the streamed lines, and it is not possible to request subsequent pages if that cap is exceeded.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { StreamDiff2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The path to the file which should be diffed (optional)
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The security scheme for avatar URLs. If the scheme is not present then it is inherited from the request. It can be set to \"https\" to force the use of secure URLs. Not applicable if streaming raw diff (optional)
    avatarScheme: avatarScheme_example,
    // string | The number of context lines to include around added/removed lines in the diff (optional)
    contextLines: contextLines_example,
    // string | The since commit hash to stream a diff between two arbitrary hashes (optional)
    sinceId: sinceId_example,
    // string | The previous path to the file, if the file has been copied, moved or renamed (optional)
    srcPath: srcPath_example,
    // string | The type of diff being requested. When withComments is true this works as a hint to the system to attach the correct set of comments to the diff. Not applicable if streaming raw diff (optional)
    diffType: diffType_example,
    // string | The until commit hash to stream a diff between two arbitrary hashes (optional)
    untilId: untilId_example,
    // string | Optional whitespace flag which can be set to <code>ignore-all</code> (optional)
    whitespace: whitespace_example,
    // string | <code>true</code> to embed comments in the diff (the default); otherwise, <code>false</code> to stream the diff without comments. Not applicable if streaming raw diff (optional)
    withComments: withComments_example,
    // string | If present the service adds avatar URLs for comment authors where the provided value specifies the desired avatar size in pixels. Not applicable if streaming raw diff (optional)
    avatarSize: avatarSize_example,
  } satisfies StreamDiff2Request;

  try {
    const data = await api.streamDiff2(body);
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
| **path** | `string` | The path to the file which should be diffed (optional) | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **avatarScheme** | `string` | The security scheme for avatar URLs. If the scheme is not present then it is inherited from the request. It can be set to \&quot;https\&quot; to force the use of secure URLs. Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |
| **contextLines** | `string` | The number of context lines to include around added/removed lines in the diff | [Optional] [Defaults to `undefined`] |
| **sinceId** | `string` | The since commit hash to stream a diff between two arbitrary hashes | [Optional] [Defaults to `undefined`] |
| **srcPath** | `string` | The previous path to the file, if the file has been copied, moved or renamed | [Optional] [Defaults to `undefined`] |
| **diffType** | `string` | The type of diff being requested. When withComments is true this works as a hint to the system to attach the correct set of comments to the diff. Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |
| **untilId** | `string` | The until commit hash to stream a diff between two arbitrary hashes | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | Optional whitespace flag which can be set to &lt;code&gt;ignore-all&lt;/code&gt; | [Optional] [Defaults to `undefined`] |
| **withComments** | `string` | &lt;code&gt;true&lt;/code&gt; to embed comments in the diff (the default); otherwise, &lt;code&gt;false&lt;/code&gt; to stream the diff without comments. Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |
| **avatarSize** | `string` | If present the service adds avatar URLs for comment authors where the provided value specifies the desired avatar size in pixels. Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDiff**](RestDiff.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of differences from a pull request. |  -  |
| **400** | If the request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository or pull request. |  -  |
| **404** | The repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamPatch1

> streamPatch1(projectKey, pullRequestId, repositorySlug)

Stream pull request as patch

Streams a patch representing a pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { StreamPatch1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies StreamPatch1Request;

  try {
    const data = await api.streamPatch1(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A patch representing the specified pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to access the pull request. |  -  |
| **404** | The pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamRawDiff2

> streamRawDiff2(projectKey, pullRequestId, repositorySlug, contextLines, whitespace)

Stream raw pull request diff

Streams the raw diff for a pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { StreamRawDiff2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The number of context lines to include around added/removed lines in the diff (optional)
    contextLines: contextLines_example,
    // string | optional whitespace flag which can be set to <code>ignore-all</code> (optional)
    whitespace: whitespace_example,
  } satisfies StreamRawDiff2Request;

  try {
    const data = await api.streamRawDiff2(body);
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
| **contextLines** | `string` | The number of context lines to include around added/removed lines in the diff | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | optional whitespace flag which can be set to &lt;code&gt;ignore-all&lt;/code&gt; | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `text/html`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A raw diff for the specified pull request. |  -  |
| **400** | The currently authenticated user has insufficient permissions to view the specified pull request. |  -  |
| **404** | The pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tryAutoMerge

> RestAutoMergeProcessingResult tryAutoMerge(projectKey, pullRequestId, repositorySlug)

Auto-merge pull request

Requests the system to try merging the pull request if auto-merge was requested on it.  The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { TryAutoMergeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies TryAutoMergeRequest;

  try {
    const data = await api.tryAutoMerge(body);
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

[**RestAutoMergeProcessingResult**](RestAutoMergeProcessingResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The result of trying to auto-merge the pull request. |  -  |
| **400** | An auto-merge request was not submitted for this pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to modify the pull request. |  -  |
| **403** | The auto-merge setting is not enabled for the repository that this pull request targets. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unReact1

> unReact1(projectKey, commentId, pullRequestId, emoticon, repositorySlug)

Remove a reaction from a PR comment

Remove an emoticon reaction from a pull request comment

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UnReact1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The comment id.
    commentId: commentId_example,
    // string | The pull request id.
    pullRequestId: pullRequestId_example,
    // string | The emoticon to remove
    emoticon: emoticon_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies UnReact1Request;

  try {
    const data = await api.unReact1(body);
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
| **commentId** | `string` | The comment id. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request id. | [Defaults to `undefined`] |
| **emoticon** | `string` | The emoticon to remove | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The added reaction |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unassignParticipantRole

> unassignParticipantRole(projectKey, userSlug, pullRequestId, repositorySlug)

Unassign pull request participant

Unassigns a participant from the REVIEWER role they may have been given in a pull request.   If the participant has no explicit role this method has no effect.   Afterwards, the user will still remain a participant in the pull request but their role will be reduced to PARTICIPANT. This is because once made a participant of a pull request, a user will forever remain a participant. Only their role may be altered.   The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UnassignParticipantRoleRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The slug for the user being unassigned
    userSlug: userSlug_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies UnassignParticipantRoleRequest;

  try {
    const data = await api.unassignParticipantRole(body);
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
| **userSlug** | `string` | The slug for the user being unassigned | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The ID of the pull request within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

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
| **400** | The request does not have the username. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | Removing reviewers isn\&#39;t supported on archived repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unassignParticipantRole1

> unassignParticipantRole1(projectKey, pullRequestId, repositorySlug, username)

Unassign pull request participant

Unassigns a participant from the REVIEWER role they may have been given in a pull request.   If the participant has no explicit role this method has no effect.   Afterwards, the user will still remain a participant in the pull request but their role will be reduced to PARTICIPANT. This is because once made a participant of a pull request, a user will forever remain a participant. Only their role may be altered.   The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.   &lt;strong&gt;Deprecated since 4.2&lt;/strong&gt;. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UnassignParticipantRole1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

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


## unwatch1

> unwatch1(projectKey, pullRequestId, repositorySlug)

Stop watching pull request

Remove the authenticated user as a watcher for the specified pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Unwatch1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies Unwatch1Request;

  try {
    const data = await api.unwatch1(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

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
| **204** | The user is no longer watching the pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## update

> RestPullRequest update(projectKey, pullRequestId, repositorySlug, restPullRequest)

Update pull request metadata

Update the title, description, reviewers, destination branch or draft status of an existing pull request.   **Note:** the &lt;em&gt;reviewers&lt;/em&gt; list may be updated using this resource. However the &lt;em&gt;author&lt;/em&gt; and &lt;em&gt;participants&lt;/em&gt; list may not.   The authenticated user must either:   - be the author of the pull request and have the &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets; or - have the &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the repository that this pull request targets   to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UpdateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestPullRequest | The updated pull request (optional)
    restPullRequest: ...,
  } satisfies UpdateRequest;

  try {
    const data = await api.update(body);
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
| **restPullRequest** | [RestPullRequest](RestPullRequest.md) | The updated pull request | [Optional] |

### Return type

[**RestPullRequest**](RestPullRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated pull request. |  -  |
| **400** | One of the following error cases occurred (check the error message for more details):   - The request tried to modify the &lt;em&gt;author&lt;/em&gt; or &lt;em&gt;participants&lt;/em&gt;. - The pull request\&#39;s version attribute was not specified. - A reviewer\&#39;s username was not specified. - The toRef ID value was incorrectly left blank  |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the specified pull request. |  -  |
| **404** | One of the specified repositories or branches does not exist. |  -  |
| **409** | One of the following error cases occurred (check the error message for more details):   - The specified version is out of date. - One of the reviewers could not be added to the pull request. - If updating the destination branch:    - There is already an open pull request with an identical to branch    - The from and new to branch &lt;i&gt;are&lt;/i&gt; the same    - The new destination branch up-to-date is up-to-date with all of                 changes from the from branch, resulting in a pull request with                 nothing to merge             - The &lt;em&gt;to&lt;/em&gt; repository is archived.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## update1

> RestReviewerGroup update1(projectKey, id, restReviewerGroup)

Update reviewer group attributes

Update the attributes of a reviewer group.  The authenticated user must have &lt;b&gt;PROJECT_READ&lt;/b&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Update1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the reviewer group to be updated
    id: id_example,
    // RestReviewerGroup | The request containing the attributes of the reviewer group to be updated. Only the attributes to be updated need to be present in this object. (optional)
    restReviewerGroup: ...,
  } satisfies Update1Request;

  try {
    const data = await api.update1(body);
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
| **id** | `string` | The ID of the reviewer group to be updated | [Defaults to `undefined`] |
| **restReviewerGroup** | [RestReviewerGroup](RestReviewerGroup.md) | The request containing the attributes of the reviewer group to be updated. Only the attributes to be updated need to be present in this object. | [Optional] |

### Return type

[**RestReviewerGroup**](RestReviewerGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of changes. |  -  |
| **400** | The updated attribute does not meet the requirements. E.g. the name exceeds 50 characters, setting name to blank. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the project. |  -  |
| **404** | The project scope supplied does not exist. |  -  |
| **409** | The new updated name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## update2

> RestReviewerGroup update2(projectKey, id, repositorySlug, restReviewerGroup)

Update reviewer group attributes

Update the attributes of a reviewer group.  The authenticated user must have &lt;b&gt;REPO_ADMIN&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Update2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the reviewer group to be updated
    id: id_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestReviewerGroup | The request containing the attributes of the reviewer group to be updated. Only the attributes to be updated need to be present in this object. (optional)
    restReviewerGroup: ...,
  } satisfies Update2Request;

  try {
    const data = await api.update2(body);
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
| **id** | `string` | The ID of the reviewer group to be updated | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restReviewerGroup** | [RestReviewerGroup](RestReviewerGroup.md) | The request containing the attributes of the reviewer group to be updated. Only the attributes to be updated need to be present in this object. | [Optional] |

### Return type

[**RestReviewerGroup**](RestReviewerGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated reviewer group. |  -  |
| **400** | The updated attribute does not meet the requirements. E.g. the name exceeds 50 characters, setting name to blank. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository scope supplied does not exist. |  -  |
| **409** | The new updated name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateComment1

> RestComment updateComment1(projectKey, commentId, pullRequestId, repositorySlug, restComment)

Update pull request comment

Update a comment, with the following restrictions:   - only the author of the comment may update the &lt;i&gt;text&lt;/i&gt; of the comment - only the author of the comment, the author of the pull request or repository admins and above may update   the other fields of a comment   Convert a comment to a task or vice versa.   Comments can be converted to tasks by setting the \&#39;severity\&#39; attribute to \&#39;BLOCKER\&#39;:  &#x60;&#x60;&#x60;  {  \&quot;severity\&quot;: \&quot;BLOCKER\&quot;  }  &#x60;&#x60;&#x60;  Tasks can be converted to comments by setting the \&#39;severity\&#39; attribute to \&#39;NORMAL\&#39;: &#x60;&#x60;&#x60;  {  \&quot;severity\&quot;: \&quot;NORMAL\&quot;  }  &#x60;&#x60;&#x60;  Resolve a blocker comment.   Blocker comments can be resolved by setting the \&#39;state\&#39; attribute to \&#39;RESOLVED\&#39;: &#x60;&#x60;&#x60;  {  \&quot;state\&quot;: \&quot;RESOLVED\&quot;  }  &#x60;&#x60;&#x60;  &lt;strong&gt;Note:&lt;/strong&gt; the supplied JSON object must contain a &lt;code&gt;version&lt;/code&gt; that must match the server\&#39;s version of the comment or the update will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the update. Look for the \&#39;version\&#39; attribute in the returned JSON structure.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UpdateComment1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve.
    commentId: commentId_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestComment | The comment to add. (optional)
    restComment: ...,
  } satisfies UpdateComment1Request;

  try {
    const data = await api.updateComment1(body);
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
| **commentId** | `string` | The ID of the comment to retrieve. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restComment** | [RestComment](RestComment.md) | The comment to add. | [Optional] |

### Return type

[**RestComment**](RestComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly updated comment. |  -  |
| **400** | The comment was not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request, update a comment or watch the pull request. |  -  |
| **404** | Unable to find the supplied project, repository, pull request or comment. |  -  |
| **409** | The comment version supplied does not match the current version or the repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateComment2

> RestComment updateComment2(projectKey, commentId, pullRequestId, repositorySlug, restComment)

Update pull request comment

Update a comment, with the following restrictions:   - only the author of the comment may update the &lt;i&gt;text&lt;/i&gt; of the comment - only the author of the comment, the author of the pull request or repository admins and above may update the other fields of a comment &lt;/ul&gt;   Convert a comment to a task or vice versa.   Comments can be converted to tasks by setting the \&#39;severity\&#39; attribute to \&#39;BLOCKER\&#39;:   &lt;pre&gt; {   \&quot;severity\&quot;: \&quot;BLOCKER\&quot;   }   &lt;/pre&gt;  Tasks can be converted to comments by setting the \&#39;severity\&#39; attribute to \&#39;NORMAL\&#39;:  &lt;pre&gt; {   \&quot;severity\&quot;: \&quot;NORMAL\&quot;   }   &lt;/pre&gt;  Resolve a task.   Tasks can be resolved by setting the \&#39;state\&#39; attribute to \&#39;RESOLVED\&#39;:  &lt;pre&gt; {   \&quot;state\&quot;: \&quot;RESOLVED\&quot;   }   &lt;/pre&gt;  &lt;strong&gt;Note:&lt;/strong&gt; the supplied JSON object must contain a &lt;code&gt;version&lt;/code&gt; that must match the server\&#39;s version of the comment or the update will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the update. Look for the \&#39;version\&#39; attribute in the returned JSON structure.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UpdateComment2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve.
    commentId: commentId_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestComment | The updated comment (optional)
    restComment: ...,
  } satisfies UpdateComment2Request;

  try {
    const data = await api.updateComment2(body);
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
| **commentId** | `string` | The ID of the comment to retrieve. | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restComment** | [RestComment](RestComment.md) | The updated comment | [Optional] |

### Return type

[**RestComment**](RestComment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly updated comment. |  -  |
| **400** | The comment was not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request, update a comment or watch the pull request. |  -  |
| **404** | Unable to find the supplied project, repository, pull request or comment. |  -  |
| **409** | The comment version supplied does not match the current version or the repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePullRequestCondition

> RestPullRequestCondition updatePullRequestCondition(projectKey, id, restDefaultReviewersRequest)

Update default reviewer condition

Update the default reviewer pull request condition for the given ID.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UpdatePullRequestConditionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request condition.
    id: id_example,
    // RestDefaultReviewersRequest | The new details for the default reviewer pull request condition. (optional)
    restDefaultReviewersRequest: ...,
  } satisfies UpdatePullRequestConditionRequest;

  try {
    const data = await api.updatePullRequestCondition(body);
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
| **id** | `string` | The ID of the pull request condition. | [Defaults to `undefined`] |
| **restDefaultReviewersRequest** | [RestDefaultReviewersRequest](RestDefaultReviewersRequest.md) | The new details for the default reviewer pull request condition. | [Optional] |

### Return type

[**RestPullRequestCondition**](RestPullRequestCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated default reviewer pull request condition. |  -  |
| **400** | The request was malformed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePullRequestCondition1

> RestPullRequestCondition updatePullRequestCondition1(projectKey, id, repositorySlug, updatePullRequestCondition1Request)

Update default reviewer condition

Update the default reviewer pull request condition for the given ID.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UpdatePullRequestCondition1OperationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the pull request condition
    id: id_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // UpdatePullRequestCondition1Request (optional)
    updatePullRequestCondition1Request: ...,
  } satisfies UpdatePullRequestCondition1OperationRequest;

  try {
    const data = await api.updatePullRequestCondition1(body);
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
| **id** | `string` | The ID of the pull request condition | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **updatePullRequestCondition1Request** | [UpdatePullRequestCondition1Request](UpdatePullRequestCondition1Request.md) |  | [Optional] |

### Return type

[**RestPullRequestCondition**](RestPullRequestCondition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated default reviewer pull request condition. |  -  |
| **400** | The request was malformed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStatus

> RestPullRequestParticipant updateStatus(projectKey, userSlug, pullRequestId, repositorySlug, restPullRequestAssignStatusRequest, version)

Change pull request status

Change the current user\&#39;s status for a pull request. Implicitly adds the user as a participant if they are not already. If the current user is the author, this method will fail.   The possible values for {@code status} are &lt;strong&gt;UNAPPROVED&lt;/strong&gt;, &lt;strong&gt;NEEDS_WORK&lt;/strong&gt; (which is referred to as \&quot;Requested changes\&quot; in the frontend from 8.10 onward), or &lt;strong&gt;APPROVED&lt;/strong&gt;.   If the new {@code status} is &lt;strong&gt;NEEDS_WORK&lt;/strong&gt; or &lt;strong&gt;APPROVED&lt;/strong&gt; then the {@code lastReviewedCommit} for the participant will be updated to the latest commit of the source branch of the pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { UpdateStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The slug for the user changing their status
    userSlug: userSlug_example,
    // string | The ID of the pull request within the repository
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestPullRequestAssignStatusRequest | The participant representing the status to set, includes the status of the participant and last reviewed commit. If last reviewed commit is provided, it will be used to update the participant status. The operation will fail if the latest commit of the pull request does not match the provided last reviewed commit. If last reviewed commit is not provided, the latest commit of the pull request will be used for the update by default.
    restPullRequestAssignStatusRequest: ...,
    // string | The current version of the pull request. If the server\'s version isn\'t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \'version\' attribute in the returned JSON structure. Note: This parameter is deprecated. Use last reviewed commit in request body instead (optional)
    version: version_example,
  } satisfies UpdateStatusRequest;

  try {
    const data = await api.updateStatus(body);
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
| **userSlug** | `string` | The slug for the user changing their status | [Defaults to `undefined`] |
| **pullRequestId** | `string` | The ID of the pull request within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restPullRequestAssignStatusRequest** | [RestPullRequestAssignStatusRequest](RestPullRequestAssignStatusRequest.md) | The participant representing the status to set, includes the status of the participant and last reviewed commit. If last reviewed commit is provided, it will be used to update the participant status. The operation will fail if the latest commit of the pull request does not match the provided last reviewed commit. If last reviewed commit is not provided, the latest commit of the pull request will be used for the update by default. | |
| **version** | `string` | The current version of the pull request. If the server\&#39;s version isn\&#39;t the same as the specified version the operation will fail. To determine the current version of the pull request it should be fetched from the server prior to this operation. Look for the \&#39;version\&#39; attribute in the returned JSON structure. Note: This parameter is deprecated. Use last reviewed commit in request body instead | [Optional] [Defaults to `undefined`] |

### Return type

[**RestPullRequestParticipant**](RestPullRequestParticipant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of the new participant. |  -  |
| **400** | The specified status was invalid or the currently authenticated user is the author of the PR and cannot have its status updated. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |
| **409** | The pull request is not open, or has been updated since the last reviewed commit specified by the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## watch1

> watch1(projectKey, pullRequestId, repositorySlug)

Watch pull request

Add the authenticated user as a watcher for the specified pull request.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { Watch1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The pull request ID.
    pullRequestId: pullRequestId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies Watch1Request;

  try {
    const data = await api.watch1(body);
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
| **pullRequestId** | `string` | The pull request ID. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

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
| **204** | The user is now watching the pull request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request. |  -  |
| **404** | The specified repository or pull request does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## withdrawApproval

> RestPullRequestParticipant withdrawApproval(projectKey, pullRequestId, repositorySlug)

Unapprove pull request

Remove approval from a pull request as the current user. This does not remove the user as a participant.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that this pull request targets to call this resource.   &lt;strong&gt;Deprecated since 4.2&lt;/strong&gt;. Use /rest/api/1.0/projects/{projectKey}/repos/{repositorySlug}/pull-requests/{pullRequestId}/participants/{userSlug} instead

### Example

```ts
import {
  Configuration,
  PullRequestsApi,
} from 'bitbucket-api';
import type { WithdrawApprovalRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new PullRequestsApi();

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

