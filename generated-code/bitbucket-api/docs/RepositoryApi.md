# RepositoryApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDefaultTask1**](RepositoryApi.md#adddefaulttask1) | **POST** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks | Add a default task |
| [**addLabel**](RepositoryApi.md#addlabel) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/labels | Add repository label |
| [**createBranch**](RepositoryApi.md#createbranch) | **POST** /branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches | Create branch |
| [**createBranchForRepository**](RepositoryApi.md#createbranchforrepository) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches | Create branch |
| [**createComment**](RepositoryApi.md#createcomment) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments | Add a new commit comment |
| [**createRestrictions1**](RepositoryApi.md#createrestrictions1) | **POST** /branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions | Create multiple ref restrictions |
| [**createTag**](RepositoryApi.md#createtag) | **POST** /git/latest/projects/{projectKey}/repos/{repositorySlug}/tags | Create tag |
| [**createTagForRepository**](RepositoryApi.md#createtagforrepository) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/tags | Create tag |
| [**createWebhook1**](RepositoryApi.md#createwebhook1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks | Create webhook |
| [**delete5**](RepositoryApi.md#delete5) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge | Delete pull request auto-merge settings |
| [**deleteAllDefaultTasks1**](RepositoryApi.md#deletealldefaulttasks1) | **DELETE** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks | Deletes all default tasks for the repository |
| [**deleteAttachment**](RepositoryApi.md#deleteattachment) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId} | Delete an attachment |
| [**deleteAttachmentMetadata**](RepositoryApi.md#deleteattachmentmetadata) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata | Delete attachment metadata |
| [**deleteAutoDeclineSettings1**](RepositoryApi.md#deleteautodeclinesettings1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline | Delete auto decline settings |
| [**deleteBranch**](RepositoryApi.md#deletebranch) | **DELETE** /branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches | Delete branch |
| [**deleteComment**](RepositoryApi.md#deletecomment) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId} | Delete a commit comment |
| [**deleteDefaultTask1**](RepositoryApi.md#deletedefaulttask1) | **DELETE** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId} | Delete a specific default task |
| [**deleteRepositoryHook**](RepositoryApi.md#deleterepositoryhook) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey} | Delete repository hook |
| [**deleteRestriction1**](RepositoryApi.md#deleterestriction1) | **DELETE** /branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id} | Delete a ref restriction |
| [**deleteTag**](RepositoryApi.md#deletetag) | **DELETE** /git/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name} | Delete tag |
| [**deleteWebhook1**](RepositoryApi.md#deletewebhook1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId} | Delete webhook |
| [**disableHook1**](RepositoryApi.md#disablehook1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled | Disable repository hook |
| [**editFile**](RepositoryApi.md#editfile) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path} | Edit file |
| [**enableHook1**](RepositoryApi.md#enablehook1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/enabled | Enable repository hook |
| [**findBranches**](RepositoryApi.md#findbranches) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities/branches | Get branches with ref change activities for repository |
| [**findByCommit**](RepositoryApi.md#findbycommit) | **GET** /branch-utils/latest/projects/{projectKey}/repos/{repositorySlug}/branches/info/{commitId} | Get branch |
| [**findWebhooks1**](RepositoryApi.md#findwebhooks1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks | Find webhooks |
| [**get5**](RepositoryApi.md#get5) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge | Get pull request auto-merge settings |
| [**getAllLabelsForRepository**](RepositoryApi.md#getalllabelsforrepository) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/labels | Get repository labels |
| [**getArchive**](RepositoryApi.md#getarchive) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/archive | Stream archive of repository |
| [**getAttachment**](RepositoryApi.md#getattachment) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId} | Get an attachment |
| [**getAttachmentMetadata**](RepositoryApi.md#getattachmentmetadata) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata | Get attachment metadata |
| [**getAutoDeclineSettings1**](RepositoryApi.md#getautodeclinesettings1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline | Get auto decline settings |
| [**getBranches**](RepositoryApi.md#getbranches) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches | Find branches |
| [**getChanges**](RepositoryApi.md#getchanges) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/changes | Get changes in commit |
| [**getChanges1**](RepositoryApi.md#getchanges1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/changes | Get changes made in commit |
| [**getComment**](RepositoryApi.md#getcomment) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId} | Get a commit comment |
| [**getComments**](RepositoryApi.md#getcomments) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments | Search for commit comments |
| [**getCommit**](RepositoryApi.md#getcommit) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId} | Get commit by ID |
| [**getCommits**](RepositoryApi.md#getcommits) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits | Get commits |
| [**getConfigurations1**](RepositoryApi.md#getconfigurations1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts | Get hook scripts |
| [**getContent**](RepositoryApi.md#getcontent) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/browse | Get file content at revision |
| [**getContent1**](RepositoryApi.md#getcontent1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/browse/{path} | Get file content |
| [**getDefaultBranch1**](RepositoryApi.md#getdefaultbranch1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default | Get default branch |
| [**getDefaultTasks1**](RepositoryApi.md#getdefaulttasks1) | **GET** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks | Get a page of default tasks |
| [**getDiffStatsSummary**](RepositoryApi.md#getdiffstatssummary) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff-stats-summary/{path} | Get diff stats summary between revisions |
| [**getDiffStatsSummary1**](RepositoryApi.md#getdiffstatssummary1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff-stats-summary{path} | Retrieve the diff stats summary between commits |
| [**getLatestInvocation1**](RepositoryApi.md#getlatestinvocation1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/latest | Get last webhook invocation details |
| [**getMergeBase**](RepositoryApi.md#getmergebase) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/merge-base | Get the common ancestor between two commits |
| [**getPullRequestSettings1**](RepositoryApi.md#getpullrequestsettings1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests | Get pull request settings |
| [**getRefChangeActivity**](RepositoryApi.md#getrefchangeactivity) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/ref-change-activities | Get ref change activity |
| [**getRepositories1**](RepositoryApi.md#getrepositories1) | **GET** /api/latest/repos | Search for repositories |
| [**getRepositoriesRecentlyAccessed**](RepositoryApi.md#getrepositoriesrecentlyaccessed) | **GET** /api/latest/profile/recent/repos | Get recently accessed repositories |
| [**getRepositoryHook1**](RepositoryApi.md#getrepositoryhook1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey} | Get repository hook |
| [**getRepositoryHooks1**](RepositoryApi.md#getrepositoryhooks1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks | Get repository hooks |
| [**getRestriction1**](RepositoryApi.md#getrestriction1) | **GET** /branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions/{id} | Get a ref restriction |
| [**getRestrictions1**](RepositoryApi.md#getrestrictions1) | **GET** /branch-permissions/latest/projects/{projectKey}/repos/{repositorySlug}/restrictions | Search for ref restrictions |
| [**getSettings1**](RepositoryApi.md#getsettings1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings | Get repository hook settings |
| [**getStatistics1**](RepositoryApi.md#getstatistics1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics | Get webhook statistics |
| [**getStatisticsSummary1**](RepositoryApi.md#getstatisticssummary1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId}/statistics/summary | Get webhook statistics summary |
| [**getStatus**](RepositoryApi.md#getstatus) | **GET** /sync/latest/projects/{projectKey}/repos/{repositorySlug} | Get synchronization status |
| [**getTag**](RepositoryApi.md#gettag) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/tags/{name} | Get tag |
| [**getTags**](RepositoryApi.md#gettags) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/tags | Find tag |
| [**getWebhook1**](RepositoryApi.md#getwebhook1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId} | Get webhook |
| [**react**](RepositoryApi.md#react) | **PUT** /comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon} | React to a comment |
| [**removeConfiguration1**](RepositoryApi.md#removeconfiguration1) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId} | Remove a hook script |
| [**removeLabel**](RepositoryApi.md#removelabel) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/labels/{labelName} | Remove repository label |
| [**saveAttachmentMetadata**](RepositoryApi.md#saveattachmentmetadata) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/attachments/{attachmentId}/metadata | Save attachment metadata |
| [**searchWebhooks**](RepositoryApi.md#searchwebhooks) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/search | Search webhooks |
| [**set1**](RepositoryApi.md#set1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-merge | Create or update the pull request auto-merge settings |
| [**setAutoDeclineSettings1**](RepositoryApi.md#setautodeclinesettings1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/auto-decline | Create auto decline settings |
| [**setConfiguration1**](RepositoryApi.md#setconfiguration1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/hook-scripts/{scriptId} | Create/update a hook script |
| [**setDefaultBranch1**](RepositoryApi.md#setdefaultbranch1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/branches/default | Update default branch |
| [**setEnabled**](RepositoryApi.md#setenabled) | **POST** /sync/latest/projects/{projectKey}/repos/{repositorySlug} | Disable synchronization |
| [**setSettings1**](RepositoryApi.md#setsettings1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/hooks/{hookKey}/settings | Update repository hook settings |
| [**stream**](RepositoryApi.md#stream) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified | Stream files |
| [**stream1**](RepositoryApi.md#stream1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/last-modified/{path} | Stream files with last modified commit in path |
| [**streamChanges**](RepositoryApi.md#streamchanges) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/changes | Compare commits |
| [**streamCommits**](RepositoryApi.md#streamcommits) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/commits | Get accessible commits |
| [**streamDiff**](RepositoryApi.md#streamdiff) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/diff/{path} | Get diff between revisions |
| [**streamDiff1**](RepositoryApi.md#streamdiff1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/compare/diff{path} | Get diff between commits |
| [**streamFiles**](RepositoryApi.md#streamfiles) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/files | Get files in directory |
| [**streamFiles1**](RepositoryApi.md#streamfiles1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/files/{path} | Get files in directory |
| [**streamPatch**](RepositoryApi.md#streampatch) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/patch | Get patch content at revision |
| [**streamRaw**](RepositoryApi.md#streamraw) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/raw/{path} | Get raw content of a file at revision |
| [**streamRawDiff**](RepositoryApi.md#streamrawdiff) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/diff | Get raw diff for path |
| [**streamRawDiff1**](RepositoryApi.md#streamrawdiff1) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/diff/{path} | Get raw diff for path |
| [**synchronize**](RepositoryApi.md#synchronize) | **POST** /sync/latest/projects/{projectKey}/repos/{repositorySlug}/synchronize | Manual synchronization |
| [**testWebhook1**](RepositoryApi.md#testwebhook1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/test | Test webhook |
| [**unReact**](RepositoryApi.md#unreact) | **DELETE** /comment-likes/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId}/reactions/{emoticon} | Remove a reaction from comment |
| [**unwatch**](RepositoryApi.md#unwatch) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch | Stop watching commit |
| [**unwatch2**](RepositoryApi.md#unwatch2) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug}/watch | Stop watching repository |
| [**updateComment**](RepositoryApi.md#updatecomment) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/comments/{commentId} | Update a commit comment |
| [**updateDefaultTask1**](RepositoryApi.md#updatedefaulttask1) | **PUT** /default-tasks/latest/projects/{projectKey}/repos/{repositorySlug}/tasks/{taskId} | Update a default task |
| [**updatePullRequestSettings1**](RepositoryApi.md#updatepullrequestsettings1) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/settings/pull-requests | Update pull request settings |
| [**updateWebhook1**](RepositoryApi.md#updatewebhook1) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/webhooks/{webhookId} | Update webhook |
| [**watch**](RepositoryApi.md#watch) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/commits/{commitId}/watch | Watch commit |
| [**watch2**](RepositoryApi.md#watch2) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/watch | Watch repository |



## addDefaultTask1

> RestDefaultTask addDefaultTask1(projectKey, repositorySlug, restDefaultTaskRequest)

Add a default task

Creates a default task for the supplied repository.  The authenticated user must have **REPO_ADMIN** permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { AddDefaultTask1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestDefaultTaskRequest | The task to be added
    restDefaultTaskRequest: ...,
  } satisfies AddDefaultTask1Request;

  try {
    const data = await api.addDefaultTask1(body);
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
| **restDefaultTaskRequest** | [RestDefaultTaskRequest](RestDefaultTaskRequest.md) | The task to be added | |

### Return type

[**RestDefaultTask**](RestDefaultTask.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The default task |  -  |
| **400** | One or more of the following error cases occurred (check the error message for more details):    - the description is empty- the sourceMatcher or targetMatcher is invalid |  -  |
| **401** | The currently authenticated user has insufficient permissions to add a default task |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addLabel

> RestLabel addLabel(projectKey, repositorySlug, restLabel)

Add repository label

Applies a label to the repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { AddLabelRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestLabel | The label to apply (optional)
    restLabel: ...,
  } satisfies AddLabelRequest;

  try {
    const data = await api.addLabel(body);
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
| **restLabel** | [RestLabel](RestLabel.md) | The label to apply | [Optional] |

### Return type

[**RestLabel**](RestLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The applied label. |  -  |
| **400** | A validation error prevented the label from being created or applied. Possible validation errors include: The name of the label contains uppercase characters, the name is smaller than 3 characters or longer than 50 characters, the label contains other characters than a-z 0-9 and - or the label is already applied to the given repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to apply a label. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBranch

> RestBranch createBranch(projectKey, repositorySlug, restBranchCreateRequest)

Create branch

 Creates a branch in the specified repository.   The authenticated user must have an effective &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission to call this resource. If branch permissions are set up in the repository, the authenticated user must also have access to the branch name that is to be created.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { CreateBranchRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestBranchCreateRequest
    restBranchCreateRequest: ...,
  } satisfies CreateBranchRequest;

  try {
    const data = await api.createBranch(body);
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
| **restBranchCreateRequest** | [RestBranchCreateRequest](RestBranchCreateRequest.md) |  | |

### Return type

[**RestBranch**](RestBranch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | JSON representation of the newly created branch |  -  |
| **400** | The branch was not created because the request was invalid, e.g. the provided ref name already existed in the repository, or was not a valid ref name in the repository |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a branch. This could be due to insufficient repository permissions, or lack of branch permission for the provided ref name |  -  |
| **409** | The branch name overlapped with an existing branch |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBranchForRepository

> RestBranch createBranchForRepository(projectKey, repositorySlug, restCreateBranchRequest)

Create branch

Creates a branch using the information provided in the RestCreateBranchRequest request   The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the context repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { CreateBranchForRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestCreateBranchRequest | The request to create a branch containing a <strong>name</strong>, <strong>startPoint</strong>, and optionally a <strong>message</strong> (optional)
    restCreateBranchRequest: ...,
  } satisfies CreateBranchForRepositoryRequest;

  try {
    const data = await api.createBranchForRepository(body);
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
| **restCreateBranchRequest** | [RestCreateBranchRequest](RestCreateBranchRequest.md) | The request to create a branch containing a &lt;strong&gt;name&lt;/strong&gt;, &lt;strong&gt;startPoint&lt;/strong&gt;, and optionally a &lt;strong&gt;message&lt;/strong&gt; | [Optional] |

### Return type

[**RestBranch**](RestBranch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created branch. |  -  |
| **401** | The currently authenticated user has insufficient permissions to write to the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createComment

> RestComment createComment(projectKey, commitId, repositorySlug, since, restComment)

Add a new commit comment

Add a new comment.  Comments can be added in a few places by setting different attributes:  General commit comment:  &#x60;&#x60;&#x60;{       \&quot;text\&quot;: \&quot;An insightful general comment on a commit.\&quot; }  &lt;/pre&gt; Reply to a comment: &lt;pre&gt;{       \&quot;text\&quot;: \&quot;A measured reply.\&quot;,       \&quot;parent\&quot;: {           \&quot;id\&quot;: 1       } } &lt;/pre&gt; General file comment: &lt;pre&gt;{       \&quot;text\&quot;: \&quot;An insightful general comment on a file.\&quot;,       \&quot;anchor\&quot;: {           \&quot;diffType\&quot;: \&quot;COMMIT\&quot;,           \&quot;fromHash\&quot;: \&quot;6df3858eeb9a53a911cd17e66a9174d44ffb02cd\&quot;,           \&quot;path\&quot;: \&quot;path/to/file\&quot;,           \&quot;srcPath\&quot;: \&quot;path/to/file\&quot;,           \&quot;toHash\&quot;: \&quot;04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b\&quot;       } } &lt;/pre&gt; File line comment: &lt;pre&gt;{       \&quot;text\&quot;: \&quot;A pithy comment on a particular line within a file.\&quot;,       \&quot;anchor\&quot;: {           \&quot;diffType\&quot;: \&quot;COMMIT\&quot;,           \&quot;line\&quot;: 1,           \&quot;lineType\&quot;: \&quot;CONTEXT\&quot;,           \&quot;fileType\&quot;: \&quot;FROM\&quot;,           \&quot;fromHash\&quot;: \&quot;6df3858eeb9a53a911cd17e66a9174d44ffb02cd\&quot;,           \&quot;path\&quot;: \&quot;path/to/file\&quot;,           \&quot;srcPath\&quot;: \&quot;path/to/file\&quot;,           \&quot;toHash\&quot;: \&quot;04c7c5c931b9418ca7b66f51fe934d0bd9b2ba4b\&quot;       } } &#x60;&#x60;&#x60;  Note: general file comments are an experimental feature and may change in the near future!  For file and line comments, \&#39;path\&#39; refers to the path of the file to which the comment should be applied and \&#39;srcPath\&#39; refers to the path the that file used to have (only required for copies and moves). Also, fromHash and toHash refer to the sinceId / untilId (respectively) used to produce the diff on which the comment was added. fromHash will be resolved automatically as first parent if not specified. Note that this behaviour differs from &#x60;/pull-requests/comments&#x60;  Finally diffType refers to the type of diff the comment was added on.  For line comments, \&#39;line\&#39; refers to the line in the diff that the comment should apply to. \&#39;lineType\&#39; refers to the type of diff hunk, which can be:- \&#39;ADDED\&#39; - for an added line;&lt;/li&gt;- \&#39;REMOVED\&#39; - for a removed line; or&lt;/li&gt;- \&#39;CONTEXT\&#39; - for a line that was unmodified but is in the vicinity of the diff.&lt;/li&gt;\&#39;fileType\&#39; refers to the file of the diff to which the anchor should be attached - which is of relevance when displaying the diff in a side-by-side way. Currently the supported values are:- \&#39;FROM\&#39; - the source file of the diff&lt;/li&gt;- \&#39;TO\&#39; - the destination file of the diff&lt;/li&gt;If the current user is not a participant the user is added as one and updated to watch the commit.  The authenticated user must have REPO_READ permission for the repository that the commit is in to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { CreateCommentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | For a merge commit, a parent can be provided to specify which diff the comments should be on. For a commit range, a sinceId can be provided to specify where the comments should be anchored from. (optional)
    since: since_example,
    // RestComment | the comment (optional)
    restComment: ...,
  } satisfies CreateCommentRequest;

  try {
    const data = await api.createComment(body);
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
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **since** | `string` | For a merge commit, a parent can be provided to specify which diff the comments should be on. For a commit range, a sinceId can be provided to specify where the comments should be anchored from. | [Optional] [Defaults to `undefined`] |
| **restComment** | [RestComment](RestComment.md) | the comment | [Optional] |

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
| **401** | The currently authenticated user has insufficient permissions to view the commit, create a comment or watch the commit. |  -  |
| **404** | Unable to find the supplied project, repository, commit or parent comment. The missing entity will be specified in the error details. |  -  |
| **409** | Adding, deleting, or editing comments isn\&#39;t supported on archived repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRestrictions1

> RestRefRestriction createRestrictions1(projectKey, repositorySlug, restRestrictionRequest)

Create multiple ref restrictions

Allows creating multiple restrictions at once.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { CreateRestrictions1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // Array<RestRestrictionRequest> | The request containing a list of the details of the restrictions to create. (optional)
    restRestrictionRequest: ...,
  } satisfies CreateRestrictions1Request;

  try {
    const data = await api.createRestrictions1(body);
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
| **restRestrictionRequest** | `Array<RestRestrictionRequest>` | The request containing a list of the details of the restrictions to create. | [Optional] |

### Return type

[**RestRefRestriction**](RestRefRestriction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/vnd.atl.bitbucket.bulk+json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Response contains the ref restriction that was just created. |  -  |
| **400** | The request has failed validation. |  -  |
| **401** | The currently authenticated user has insufficient permissions to perform this operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTag

> RestTag createTag(projectKey, repositorySlug, restGitTagCreateRequest)

Create tag

Creates a tag in the specified repository.  The authenticated user must have an effective &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission to call this resource.  \&#39;LIGHTWEIGHT\&#39; and \&#39;ANNOTATED\&#39; are the two type of tags that can be created. The \&#39;startPoint\&#39; can either be a ref or a \&#39;commit\&#39;.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { CreateTagRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestGitTagCreateRequest | The create git tag request. (optional)
    restGitTagCreateRequest: ...,
  } satisfies CreateTagRequest;

  try {
    const data = await api.createTag(body);
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
| **restGitTagCreateRequest** | [RestGitTagCreateRequest](RestGitTagCreateRequest.md) | The create git tag request. | [Optional] |

### Return type

[**RestTag**](RestTag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | A JSON representation of the newly created tag. |  -  |
| **400** | The tag was not created because the request was invalid, e.g. the provided ref name already existed in the repository, or was not a valid ref name in the repository, or the start point is invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a tag. This could be due to insufficient repository permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTagForRepository

> RestTag createTagForRepository(projectKey, repositorySlug, restCreateTagRequest)

Create tag

Creates a tag using the information provided in the RestCreateTagRequest request   The authenticated user must have &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission for the context repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { CreateTagForRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestCreateTagRequest | The request to create a tag containing a <strong>name</strong>, <strong>startPoint</strong>, and optionally a <strong>message</strong> (optional)
    restCreateTagRequest: ...,
  } satisfies CreateTagForRepositoryRequest;

  try {
    const data = await api.createTagForRepository(body);
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
| **restCreateTagRequest** | [RestCreateTagRequest](RestCreateTagRequest.md) | The request to create a tag containing a &lt;strong&gt;name&lt;/strong&gt;, &lt;strong&gt;startPoint&lt;/strong&gt;, and optionally a &lt;strong&gt;message&lt;/strong&gt; | [Optional] |

### Return type

[**RestTag**](RestTag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created tag. |  -  |
| **401** | The currently authenticated user has insufficient permissions to write to the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createWebhook1

> RestWebhook createWebhook1(projectKey, repositorySlug, restWebhook)

Create webhook

Create a webhook for the repository specified via the URL.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { CreateWebhook1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestWebhook | The webhook to be created for this repository. (optional)
    restWebhook: ...,
  } satisfies CreateWebhook1Request;

  try {
    const data = await api.createWebhook1(body);
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
| **restWebhook** | [RestWebhook](RestWebhook.md) | The webhook to be created for this repository. | [Optional] |

### Return type

[**RestWebhook**](RestWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A created webhook. |  -  |
| **400** | The webhook parameters were invalid or not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create webhooks in the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete5

> delete5(projectKey, repositorySlug)

Delete pull request auto-merge settings

Deletes pull request auto-merge settings for the supplied repository.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { Delete5Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies Delete5Request;

  try {
    const data = await api.delete5(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The pull request auto-merge settings |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the pull request auto-merge settings. |  -  |
| **403** | The pull request auto-merge settings cannot be modified due to a restriction enforced by the supplied repository\&#39;s project. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAllDefaultTasks1

> deleteAllDefaultTasks1(projectKey, repositorySlug)

Deletes all default tasks for the repository

Delete all the default tasks for the supplied repository  The authenticated user must have **REPO_ADMIN** permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteAllDefaultTasks1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteAllDefaultTasks1Request;

  try {
    const data = await api.deleteAllDefaultTasks1(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The default tasks have been deleted successfully. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete default tasks |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAttachment

> deleteAttachment(projectKey, attachmentId, repositorySlug)

Delete an attachment

Delete an attachment.  The user must be authenticated and have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteAttachmentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the attachment ID
    attachmentId: attachmentId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies DeleteAttachmentRequest;

  try {
    const data = await api.deleteAttachment(body);
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
| **attachmentId** | `string` | the attachment ID | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

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
| **204** |  |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the attachment |  -  |
| **404** | The attachment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAttachmentMetadata

> deleteAttachmentMetadata(projectKey, attachmentId, repositorySlug)

Delete attachment metadata

Delete attachment metadata.  The user must be authenticated and have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteAttachmentMetadataRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the attachment ID
    attachmentId: attachmentId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies DeleteAttachmentMetadataRequest;

  try {
    const data = await api.deleteAttachmentMetadata(body);
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
| **attachmentId** | `string` | the attachment ID | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

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
| **204** |  |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete theattachment metadata |  -  |
| **404** | The attachment or the attachment metadata does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAutoDeclineSettings1

> deleteAutoDeclineSettings1(projectKey, repositorySlug)

Delete auto decline settings

Delete auto decline settings for the supplied repository.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteAutoDeclineSettings1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies DeleteAutoDeclineSettings1Request;

  try {
    const data = await api.deleteAutoDeclineSettings1(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The auto decline settings have been deleted successfully. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the auto decline settings. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBranch

> deleteBranch(projectKey, repositorySlug, restBranchDeleteRequest)

Delete branch

 Deletes a branch in the specified repository.    If the branch does not exist, this operation will not raise an error. In other words after calling this resource  and receiving a 204 response the branch provided in the request is guaranteed to not exist in the specified  repository any more, regardless of its existence beforehand.    The optional \&#39;endPoint\&#39; parameter of the request may contain a commit ID that the provided ref name is  expected to point to. Should the ref point to a different commit ID, a 400 response will be returned with  appropriate error details.    The authenticated user must have an effective &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission to call this resource. If  branch permissions are set up in the repository, the authenticated user must also have access to the branch name  that is to be deleted.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteBranchRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestBranchDeleteRequest | Branch delete request (optional)
    restBranchDeleteRequest: ...,
  } satisfies DeleteBranchRequest;

  try {
    const data = await api.deleteBranch(body);
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
| **restBranchDeleteRequest** | [RestBranchDeleteRequest](RestBranchDeleteRequest.md) | Branch delete request | [Optional] |

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
| **204** | An empty response indicating that the branch no longer exists in the repository |  -  |
| **400** | The branch was not deleted because the request was invalid, e.g. no ref name to delete was provided, or the provided ref name points to the default branch in the repository that cannot be deleted |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete a branch. This could be due to insufficient repository permissions, or lack of branch permission for the provided ref name. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteComment

> deleteComment(projectKey, commentId, commitId, repositorySlug, version)

Delete a commit comment

Delete a commit comment. Anyone can delete their own comment. Only users with &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; and above may delete comments created by other users. Comments which have replies &lt;i&gt;may not be deleted&lt;/i&gt;, regardless of the user\&#39;s granted permissions.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that the commit is in to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteCommentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the comment
    commentId: commentId_example,
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The expected version of the comment. This must match the server\'s version of the comment or the delete will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the delete. Look for the \'version\' attribute in the returned JSON structure. (optional)
    version: version_example,
  } satisfies DeleteCommentRequest;

  try {
    const data = await api.deleteComment(body);
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
| **commentId** | `string` | the comment | [Defaults to `undefined`] |
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
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
| **204** | The operation was successful |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the comment. |  -  |
| **404** | Unable to find the supplied project, repository or commit. The missing entity will be specified in the error details. |  -  |
| **409** | The comment has replies, the version supplied does not match the comment\&#39;s current version or the repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDefaultTask1

> deleteDefaultTask1(projectKey, repositorySlug, taskId)

Delete a specific default task

Delete a specific default task for a repository.  The authenticated user must have **REPO_ADMIN** permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteDefaultTask1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The ID of the default task
    taskId: taskId_example,
  } satisfies DeleteDefaultTask1Request;

  try {
    const data = await api.deleteDefaultTask1(body);
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
| **taskId** | `string` | The ID of the default task | [Defaults to `undefined`] |

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
| **204** | The default task has been deleted successfully. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete default tasks |  -  |
| **404** | The specified repository or task does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRepositoryHook

> deleteRepositoryHook(projectKey, hookKey, repositorySlug)

Delete repository hook

Delete repository hook configuration for the supplied &lt;strong&gt;hookKey&lt;/strong&gt; and &lt;strong&gt;repositorySlug&lt;/strong&gt;  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteRepositoryHookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteRepositoryHookRequest;

  try {
    const data = await api.deleteRepositoryHook(body);
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
| **hookKey** | `string` | The hook key. | [Defaults to `undefined`] |
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
| **204** | The hook configuration matching the supplied &lt;strong&gt;hookKey&lt;/strong&gt; and &lt;strong&gt;repositorySlug&lt;/strong&gt; was deleted |  -  |
| **400** | The settings specified are invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the hook. |  -  |
| **404** | The specified repository or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRestriction1

> deleteRestriction1(projectKey, id, repositorySlug)

Delete a ref restriction

Deletes a restriction as specified by a restriction id.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission or higher to call this resource. Only authenticated users may call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteRestriction1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The restriction id.
    id: id_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteRestriction1Request;

  try {
    const data = await api.deleteRestriction1(body);
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
| **id** | `string` | The restriction id. | [Defaults to `undefined`] |
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
| **204** | An empty response indicating that the operation was successful |  -  |
| **400** | The request has failed validation. |  -  |
| **401** | The currently authenticated user is not permitted to delete restrictions on the provided project |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTag

> deleteTag(projectKey, name, repositorySlug)

Delete tag

Deletes a tag in the specified repository.  The authenticated user must have an effective &lt;strong&gt;REPO_WRITE&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteTagRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The name of the tag to be deleted.
    name: name_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteTagRequest;

  try {
    const data = await api.deleteTag(body);
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
| **name** | `string` | The name of the tag to be deleted. | [Defaults to `undefined`] |
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
| **204** | An empty response indicating that the tag no longer exists in the repository. |  -  |
| **400** | The tag was not deleted because repository is either empty, or is not a git repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete a tag. This could be due to insufficient repository permissions. |  -  |
| **404** | If the tag doesn\&#39;t exist in the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWebhook1

> deleteWebhook1(projectKey, webhookId, repositorySlug)

Delete webhook

Delete a webhook for the repository specified via the URL.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DeleteWebhook1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the webhook to be deleted.
    webhookId: webhookId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteWebhook1Request;

  try {
    const data = await api.deleteWebhook1(body);
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
| **webhookId** | `string` | The ID of the webhook to be deleted. | [Defaults to `undefined`] |
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
| **204** | The webhook for the repository has been deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete webhooks in the repository. |  -  |
| **404** | The specified repository does not exist, or webhook does not exist in this repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disableHook1

> RestRepositoryHook disableHook1(projectKey, hookKey, repositorySlug)

Disable repository hook

Disable a repository hook for this repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { DisableHook1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DisableHook1Request;

  try {
    const data = await api.disableHook1(body);
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
| **hookKey** | `string` | The hook key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestRepositoryHook**](RestRepositoryHook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository hooks with their associated enabled state for the supplied hookKey. |  -  |
| **401** | The currently authenticated user has insufficient permissions to disable the hook. |  -  |
| **404** | The specified repository or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editFile

> RestCommit editFile(path, projectKey, repositorySlug, branch, content, message, sourceBranch, sourceCommitId)

Edit file

Update the content of path, on the given repository and branch.   This resource accepts PUT multipart form data, containing the file in a form-field named content.   An example &lt;a href&#x3D;\&quot;http://curl.haxx.se/\&quot;&gt;curl&lt;/a&gt; request to update \&#39;README.md\&#39; would be:  &#x60;&#x60;&#x60;curl -X PUT -u username:password -F content&#x3D;@README.md  -F \&#39;message&#x3D;Updated using file-edit REST API\&#39; -F branch&#x3D;master -F  sourceCommitId&#x3D;5636641a50b  http://example.com/rest/api/latest/projects/PROJECT_1/repos/repo_1/browse/README.md &#x60;&#x60;&#x60;  - branch:  the branch on which the path should be modified or created - content: the full content of the file at path  - message: the message associated with this change, to be used as the commit message. Or null if the default message should be used. - sourceCommitId: the commit ID of the file before it was edited, used to identify if content has changed. Or null if this is a new file   The file can be updated or created on a new branch. In this case, the sourceBranch parameter should be provided to identify the starting point for the new branch and the branch parameter identifies the branch to create the new commit on.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { EditFileRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The path of the file that is to be modified or created
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The branch on which the <code>path</code> should be modified or created. (optional)
    branch: branch_example,
    // string | The full content of the file at <code>path</code>. (optional)
    content: content_example,
    // string | The message associated with this change, to be used as the commit message. Or null if the default message should be used. (optional)
    message: message_example,
    // string | The starting point for <code>branch</code>. If provided and different from <code>branch</code>, <code>branch</code> will be created as a new branch, branching off from <code>sourceBranch</code>. (optional)
    sourceBranch: sourceBranch_example,
    // string | The commit ID of the file before it was edited, used to identify if content has changed. Or null if this is a new file (optional)
    sourceCommitId: sourceCommitId_example,
  } satisfies EditFileRequest;

  try {
    const data = await api.editFile(body);
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
| **path** | `string` | The path of the file that is to be modified or created | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **branch** | `string` | The branch on which the &lt;code&gt;path&lt;/code&gt; should be modified or created. | [Optional] [Defaults to `undefined`] |
| **content** | `string` | The full content of the file at &lt;code&gt;path&lt;/code&gt;. | [Optional] [Defaults to `undefined`] |
| **message** | `string` | The message associated with this change, to be used as the commit message. Or null if the default message should be used. | [Optional] [Defaults to `undefined`] |
| **sourceBranch** | `string` | The starting point for &lt;code&gt;branch&lt;/code&gt;. If provided and different from &lt;code&gt;branch&lt;/code&gt;, &lt;code&gt;branch&lt;/code&gt; will be created as a new branch, branching off from &lt;code&gt;sourceBranch&lt;/code&gt;. | [Optional] [Defaults to `undefined`] |
| **sourceCommitId** | `string` | The commit ID of the file before it was edited, used to identify if content has changed. Or null if this is a new file | [Optional] [Defaults to `undefined`] |

### Return type

[**RestCommit**](RestCommit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly created commit. |  -  |
| **400** | There are validation errors, e.g. The branch or content parameters were not supplied. |  -  |
| **401** | The currently authenticated user does not have write permission for the given repository. |  -  |
| **403** | The request was authenticated using a project or repository access token, which does not have a valid user associated with it |  -  |
| **404** | The repository does not exist. |  -  |
| **409** | The file already exists when trying to create a file, or the given content does not modify the file, or the file has changed since the given sourceCommitId, or the repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableHook1

> RestRepositoryHook enableHook1(projectKey, hookKey, repositorySlug, contentLength)

Enable repository hook

Enable a repository hook for this repository and optionally apply new configuration.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.   A JSON document may be provided to use as the settings for the hook. These structure and validity of the document is decided by the plugin providing the hook.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { EnableHook1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The content length. (optional)
    contentLength: contentLength_example,
  } satisfies EnableHook1Request;

  try {
    const data = await api.enableHook1(body);
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
| **hookKey** | `string` | The hook key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **contentLength** | `string` | The content length. | [Optional] [Defaults to `undefined`] |

### Return type

[**RestRepositoryHook**](RestRepositoryHook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository hooks with their associated enabled state for the supplied hookKey. |  -  |
| **401** | The currently authenticated user has insufficient permissions to enable the hook. |  -  |
| **404** | The specified repository or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findBranches

> FindByCommit200Response findBranches(projectKey, repositorySlug, filterText, start, limit)

Get branches with ref change activities for repository

Retrieve a page of branches with ref change activities for a specific repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { FindBranchesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | (optional) Partial match for a ref ID to filter minimal refs for (optional)
    filterText: filterText_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies FindBranchesRequest;

  try {
    const data = await api.findBranches(body);
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
| **filterText** | `string` | (optional) Partial match for a ref ID to filter minimal refs for | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**FindByCommit200Response**](FindByCommit200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of branches with ref change activities. |  -  |
| **401** | The user is currently not authenticated or the user does not have REPO_ADMIN permission. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findByCommit

> FindByCommit200Response findByCommit(projectKey, commitId, repositorySlug, start, limit)

Get branch

Gets the branch information associated with a single commit from a given repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { FindByCommitRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string
    commitId: commitId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies FindByCommitRequest;

  try {
    const data = await api.findByCommit(body);
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
| **commitId** | `string` |  | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**FindByCommit200Response**](FindByCommit200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of branch refs associated with the commit |  -  |
| **500** | The request has timed out processing the branch request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findWebhooks1

> findWebhooks1(projectKey, repositorySlug, event, statistics)

Find webhooks

Find webhooks in this repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { FindWebhooks1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | List of <code>com.atlassian.webhooks.WebhookEvent</code> IDs to filter for (optional)
    event: event_example,
    // boolean | <code>true</code> if statistics should be provided for all found webhooks (optional)
    statistics: true,
  } satisfies FindWebhooks1Request;

  try {
    const data = await api.findWebhooks1(body);
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
| **event** | `string` | List of &lt;code&gt;com.atlassian.webhooks.WebhookEvent&lt;/code&gt; IDs to filter for | [Optional] [Defaults to `undefined`] |
| **statistics** | `boolean` | &lt;code&gt;true&lt;/code&gt; if statistics should be provided for all found webhooks | [Optional] [Defaults to `undefined`] |

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
| **200** | A page of webhooks. |  -  |
| **401** | The currently authenticated user has insufficient permissions to find webhooks in the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get5

> RestAutoMergeRestrictedSettings get5(projectKey, repositorySlug)

Get pull request auto-merge settings

Retrieves the pull request auto-merge settings for the supplied repository. Project settings will be returned if no explicit settings have been set for the repository. In the case that there are no project settings, the default settings will be returned. If the repository\&#39;s project has restricted its auto-merge settings, then the settings of the project will be returned.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { Get5Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies Get5Request;

  try {
    const data = await api.get5(body);
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

[**RestAutoMergeRestrictedSettings**](RestAutoMergeRestrictedSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The pull request auto-merge settings |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the pull request auto-merge settings. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllLabelsForRepository

> RestLabel getAllLabelsForRepository(projectKey, repositorySlug)

Get repository labels

Get all labels applied to the given repository.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetAllLabelsForRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetAllLabelsForRepositoryRequest;

  try {
    const data = await api.getAllLabelsForRepository(body);
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

[**RestLabel**](RestLabel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The applied label. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the labels. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getArchive

> getArchive(projectKey, repositorySlug, path, filename, at, prefix, format)

Stream archive of repository

Streams an archive of the repository\&#39;s contents at the requested commit. If no &#x60;at&#x3D;&#x60; commit is requested, an archive of the default branch is streamed.  The &lt;code&gt;filename&#x3D;&lt;/code&gt; query parameter may be used to specify the exact filename to include in the \&quot;Content-Disposition\&quot; header. If an explicit filename is not provided, one will be automatically generated based on what is being archived. Its format depends on the at&#x3D; value:   - No &lt;code&gt;at&#x3D;&lt;/code&gt; commit:     &amp;lt;slug&amp;gt;-&amp;lt;default-branch-name&amp;gt;@&amp;lt;commit&amp;gt;.&amp;lt;format&amp;gt;;     e.g. example-master@43c2f8a0fe8.zip - &lt;code&gt;at&#x3D;&lt;/code&gt;sha: &amp;lt;slug&amp;gt;-&amp;lt;at&amp;gt;.&amp;lt;format&amp;gt;; e.g.     example-09bcbb00100cfbb5310fb6834a1d5ce6cac253e9.tar.gz - &lt;code&gt;at&#x3D;&lt;/code&gt;branchOrTag: &amp;lt;slug&amp;gt;-&amp;lt;branchOrTag&amp;gt;@&amp;lt;commit&amp;gt;.&amp;lt;format&amp;gt;;     e.g. example-feature@bbb225f16e1.tar       - If the branch or tag is qualified (e.g. refs/heads/master, the short name         (master) will be included in the filename     - If the branch or tag\&#39;s &lt;i&gt;short name&lt;/i&gt; includes slashes (e.g. release/4.6),         they will be converted to hyphens in the filename (release-4.5)     Archives may be requested in the following formats by adding the &lt;code&gt;format&#x3D;&lt;/code&gt; query parameter:   - zip: A zip file using standard compression (Default) - tar: An uncompressed tarball - tar.gz or tgz: A GZip-compressed tarball   The contents of the archive may be filtered by using the &lt;code&gt;path&#x3D;&lt;/code&gt; query parameter to specify paths to include. &lt;code&gt;path&#x3D;&lt;/code&gt; may be specified multiple times to include multiple paths.   The &lt;code&gt;prefix&#x3D;&lt;/code&gt; query parameter may be used to define a directory (or multiple directories) where the archive\&#39;s contents should be placed. If the prefix does not end with /, one will be added automatically. The prefix is &lt;i&gt;always&lt;/i&gt; treated as a directory; it is not possible to use it to prepend characters to the entries in the archive.   Archives of public repositories may be streamed by any authenticated or anonymous user. Streaming archives for non-public repositories requires an &lt;i&gt;authenticated user&lt;/i&gt; with at least &lt;b&gt;REPO_READ&lt;/b&gt; permission.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetArchiveRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | Paths to include in the streamed archive; may be repeated to include multiple paths (optional)
    path: path_example,
    // string | A filename to include the \"Content-Disposition\" header (optional)
    filename: filename_example,
    // string | The commit to stream an archive of; if not supplied, an archive of the default branch is streamed (optional)
    at: at_example,
    // string | A prefix to apply to all entries in the streamed archive; if the supplied prefix does not end with a trailing /, one will be added automatically (optional)
    prefix: prefix_example,
    // string | The format to stream the archive in; must be one of: zip, tar, tar.gz or tgz (optional)
    format: format_example,
  } satisfies GetArchiveRequest;

  try {
    const data = await api.getArchive(body);
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
| **path** | `string` | Paths to include in the streamed archive; may be repeated to include multiple paths | [Optional] [Defaults to `undefined`] |
| **filename** | `string` | A filename to include the \&quot;Content-Disposition\&quot; header | [Optional] [Defaults to `undefined`] |
| **at** | `string` | The commit to stream an archive of; if not supplied, an archive of the default branch is streamed | [Optional] [Defaults to `undefined`] |
| **prefix** | `string` | A prefix to apply to all entries in the streamed archive; if the supplied prefix does not end with a trailing /, one will be added automatically | [Optional] [Defaults to `undefined`] |
| **format** | `string` | The format to stream the archive in; must be one of: zip, tar, tar.gz or tgz | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`, `application/x-tar`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | An archive or the requested commit, in zip, tar or gzipped-tar format. |  -  |
| **400** | The requested format is not supported. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist or does not contain the at commit. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachment

> getAttachment(projectKey, attachmentId, repositorySlug, userAgent, range)

Get an attachment

Retrieve the attachment.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository that is associated to the attachment.  Range requests (see IETF RFC7233) are supported. However only a single range issupported. If multiple ranges are passed the ranges will be ignored and the entire content will be returned in the response.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetAttachmentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the attachment ID
    attachmentId: attachmentId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string (optional)
    userAgent: userAgent_example,
    // string (optional)
    range: range_example,
  } satisfies GetAttachmentRequest;

  try {
    const data = await api.getAttachment(body);
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
| **attachmentId** | `string` | the attachment ID | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **userAgent** | `string` |  | [Optional] [Defaults to `undefined`] |
| **range** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **200** | the attachment |  -  |
| **206** | the requested range of bytes from the attachment |  -  |
| **401** | the user is currently not authenticated |  -  |
| **404** | The attachment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentMetadata

> RestAttachmentMetadata getAttachmentMetadata(projectKey, attachmentId, repositorySlug)

Get attachment metadata

Retrieve the attachment metadata.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository that is associated to the attachment that has the attachment metadata.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetAttachmentMetadataRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the attachment ID
    attachmentId: attachmentId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetAttachmentMetadataRequest;

  try {
    const data = await api.getAttachmentMetadata(body);
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
| **attachmentId** | `string` | the attachment ID | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

### Return type

[**RestAttachmentMetadata**](RestAttachmentMetadata.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The attachment metadata |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the attachment metadata |  -  |
| **404** | The attachment or the attachment metadata does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAutoDeclineSettings1

> RestAutoDeclineSettings getAutoDeclineSettings1(projectKey, repositorySlug)

Get auto decline settings

Retrieves the auto decline settings for the supplied repository. Project settings will be returned if no explicit settings have been set for the repository. In the case that there are no project settings, the default settings will be returned.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetAutoDeclineSettings1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetAutoDeclineSettings1Request;

  try {
    const data = await api.getAutoDeclineSettings1(body);
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

[**RestAutoDeclineSettings**](RestAutoDeclineSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The auto decline settings |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the auto decline settings. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBranches

> GetBranches200Response getBranches(projectKey, repositorySlug, boostMatches, context, orderBy, details, filterText, base, start, limit)

Find branches

Retrieve the branches matching the supplied &lt;strong&gt;filterText&lt;/strong&gt; param.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetBranchesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // boolean | Controls whether exact and prefix matches will be boosted to the top (optional)
    boostMatches: true,
    // string (optional)
    context: context_example,
    // 'ALPHABETICAL' | 'MODIFICATION' | Ordering of refs either ALPHABETICAL (by name) or MODIFICATION (last updated) (optional)
    orderBy: orderBy_example,
    // boolean | Whether to retrieve plugin-provided metadata about each branch (optional)
    details: true,
    // string | The text to match on (optional)
    filterText: filterText_example,
    // string | Base branch or tag to compare each branch to (for the metadata providers that uses that information (optional)
    base: base_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetBranchesRequest;

  try {
    const data = await api.getBranches(body);
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
| **boostMatches** | `boolean` | Controls whether exact and prefix matches will be boosted to the top | [Optional] [Defaults to `undefined`] |
| **context** | `string` |  | [Optional] [Defaults to `undefined`] |
| **orderBy** | `ALPHABETICAL`, `MODIFICATION` | Ordering of refs either ALPHABETICAL (by name) or MODIFICATION (last updated) | [Optional] [Defaults to `undefined`] [Enum: ALPHABETICAL, MODIFICATION] |
| **details** | `boolean` | Whether to retrieve plugin-provided metadata about each branch | [Optional] [Defaults to `undefined`] |
| **filterText** | `string` | The text to match on | [Optional] [Defaults to `undefined`] |
| **base** | `string` | Base branch or tag to compare each branch to (for the metadata providers that uses that information | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetBranches200Response**](GetBranches200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The branches matching the supplied &lt;strong&gt;filterText&lt;/strong&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to read the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChanges

> GetChanges1200Response getChanges(projectKey, commitId, repositorySlug, withComments, since, start, limit)

Get changes in commit

Retrieve a page of changes made in a specified commit.    &lt;strong&gt;Note:&lt;/strong&gt; The implementation will apply a hard cap (&lt;code&gt;page.max.changes&lt;/code&gt;) and it is not possible to request subsequent content when that cap is exceeded.    The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetChangesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The commit to retrieve changes for
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | <code>true</code> to apply comment counts in the changes (the default); otherwise, <code>false</code> to stream changes without comment counts (optional)
    withComments: withComments_example,
    // string | The commit to which <code>until</code> should be compared to produce a page of changes. If not specified the commit\'s first parent is assumed (if one exists) (optional)
    since: since_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetChangesRequest;

  try {
    const data = await api.getChanges(body);
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
| **commitId** | `string` | The commit to retrieve changes for | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **withComments** | `string` | &lt;code&gt;true&lt;/code&gt; to apply comment counts in the changes (the default); otherwise, &lt;code&gt;false&lt;/code&gt; to stream changes without comment counts | [Optional] [Defaults to `undefined`] |
| **since** | `string` | The commit to which &lt;code&gt;until&lt;/code&gt; should be compared to produce a page of changes. If not specified the commit\&#39;s first parent is assumed (if one exists) | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetChanges1200Response**](GetChanges1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of changes |  -  |
| **400** | The until parameter was not supplied |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository or the since or until parameters supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChanges1

> GetChanges1200Response getChanges1(projectKey, repositorySlug, until, since, start, limit)

Get changes made in commit

Retrieve a page of changes made in a specified commit.   &lt;strong&gt;Note:&lt;/strong&gt; The implementation will apply a hard cap ({@code page.max.changes}) and it is not possible to request subsequent content when that cap is exceeded.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetChanges1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The commit to retrieve changes for (optional)
    until: until_example,
    // string | The commit to which <code>until</code> should be compared to produce a page of changes. If not specified the commit\'s first parent is assumed (if one exists) (optional)
    since: since_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetChanges1Request;

  try {
    const data = await api.getChanges1(body);
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
| **until** | `string` | The commit to retrieve changes for | [Optional] [Defaults to `undefined`] |
| **since** | `string` | The commit to which &lt;code&gt;until&lt;/code&gt; should be compared to produce a page of changes. If not specified the commit\&#39;s first parent is assumed (if one exists) | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetChanges1200Response**](GetChanges1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of changes |  -  |
| **400** | The until parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository or the since or until parameters supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComment

> RestComment getComment(projectKey, commentId, commitId, repositorySlug)

Get a commit comment

Retrieves a commit discussion comment.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that the commit is in to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetCommentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve
    commentId: commentId_example,
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies GetCommentRequest;

  try {
    const data = await api.getComment(body);
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
| **commentId** | `string` | The ID of the comment to retrieve | [Defaults to `undefined`] |
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

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
| **401** | The currently authenticated user has insufficient permissions to view the comment |  -  |
| **404** | Unable to find the supplied project, repository, commit or comment. The missing entity will be specified in the error details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComments

> GetComments200Response getComments(projectKey, commitId, repositorySlug, path, since, start, limit)

Search for commit comments

Retrieves the commit discussion comments that match the specified search criteria.  It is possible to retrieve commit discussion comments that are anchored to a range of commits by providing the sinceId that the comments anchored from.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that the commit is in to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetCommentsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The path to the file on which comments were made (optional)
    path: path_example,
    // string | For a merge commit, a parent can be provided to specify which diff the comments are on. For a commit range, a sinceId can be provided to specify where the comments are anchored from. (optional)
    since: since_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetCommentsRequest;

  try {
    const data = await api.getComments(body);
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
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **path** | `string` | The path to the file on which comments were made | [Optional] [Defaults to `undefined`] |
| **since** | `string` | For a merge commit, a parent can be provided to specify which diff the comments are on. For a commit range, a sinceId can be provided to specify where the comments are anchored from. | [Optional] [Defaults to `undefined`] |
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
| **200** | A page of comments that match the search criteria |  -  |
| **400** | The request was malformed. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the comment |  -  |
| **404** | Unable to find the supplied project, repository, or commit. The missing entity will be specified in the error details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommit

> RestCommit getCommit(projectKey, commitId, repositorySlug, path)

Get commit by ID

Retrieve a single commit &lt;i&gt;identified by its ID&lt;/i&gt;. In general, that ID is a SHA1. &lt;u&gt;From 2.11, ref names like \&quot;refs/heads/master\&quot; are no longer accepted by this resource.&lt;/u&gt;  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetCommitRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The commit ID to retrieve
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | An optional path to filter the commit by. If supplied the details returned <i>may not</i> be for the specified commit. Instead, starting from the specified commit, they will be the details for the first commit affecting the specified path. (optional)
    path: path_example,
  } satisfies GetCommitRequest;

  try {
    const data = await api.getCommit(body);
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
| **commitId** | `string` | The commit ID to retrieve | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **path** | `string` | An optional path to filter the commit by. If supplied the details returned &lt;i&gt;may not&lt;/i&gt; be for the specified commit. Instead, starting from the specified commit, they will be the details for the first commit affecting the specified path. | [Optional] [Defaults to `undefined`] |

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
| **200** | A commit |  -  |
| **400** | The supplied commit ID was invalid |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommits

> GetCommits200Response getCommits(projectKey, repositorySlug, avatarScheme, path, withCounts, followRenames, until, avatarSize, since, merges, ignoreMissing, start, limit)

Get commits

Retrieve a page of commits from a given starting commit or \&quot;between\&quot; two commits. If no explicit commit is specified, the tip of the repository\&#39;s default branch is assumed. commits may be identified by branch or tag name or by ID. A path may be supplied to restrict the returned commits to only those which affect that path.   The authenticated user must have &lt;b&gt;REPO_READ&lt;/b&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetCommitsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The desired scheme for the avatar URL. If the parameter is not present URLs will use the same scheme as this request (optional)
    avatarScheme: avatarScheme_example,
    // string | An optional path to filter commits by (optional)
    path: path_example,
    // string | Optionally include the total number of commits and total number of unique authors (optional)
    withCounts: withCounts_example,
    // string | If <code>true</code>, the commit history of the specified file will be followed past renames. Only valid for a path to a single file. (optional)
    followRenames: followRenames_example,
    // string | The commit ID (SHA1) or ref (inclusively) to retrieve commits before (optional)
    until: until_example,
    // string | If present the service adds avatar URLs for commit authors. Should be an integer specifying the desired size in pixels. If the parameter is not present, avatar URLs will not be set (optional)
    avatarSize: avatarSize_example,
    // string | The commit ID or ref (exclusively) to retrieve commits after (optional)
    since: since_example,
    // string | If present, controls how merge commits should be filtered. Can be either <code>exclude</code>, to exclude merge commits, <code>include</code>, to include both merge commits and non-merge commits or <code>only</code>, to only return merge commits. (optional)
    merges: merges_example,
    // string | <code>true</code> to ignore missing commits, <code>false</code> otherwise (optional)
    ignoreMissing: ignoreMissing_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetCommitsRequest;

  try {
    const data = await api.getCommits(body);
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
| **avatarScheme** | `string` | The desired scheme for the avatar URL. If the parameter is not present URLs will use the same scheme as this request | [Optional] [Defaults to `undefined`] |
| **path** | `string` | An optional path to filter commits by | [Optional] [Defaults to `undefined`] |
| **withCounts** | `string` | Optionally include the total number of commits and total number of unique authors | [Optional] [Defaults to `undefined`] |
| **followRenames** | `string` | If &lt;code&gt;true&lt;/code&gt;, the commit history of the specified file will be followed past renames. Only valid for a path to a single file. | [Optional] [Defaults to `undefined`] |
| **until** | `string` | The commit ID (SHA1) or ref (inclusively) to retrieve commits before | [Optional] [Defaults to `undefined`] |
| **avatarSize** | `string` | If present the service adds avatar URLs for commit authors. Should be an integer specifying the desired size in pixels. If the parameter is not present, avatar URLs will not be set | [Optional] [Defaults to `undefined`] |
| **since** | `string` | The commit ID or ref (exclusively) to retrieve commits after | [Optional] [Defaults to `undefined`] |
| **merges** | `string` | If present, controls how merge commits should be filtered. Can be either &lt;code&gt;exclude&lt;/code&gt;, to exclude merge commits, &lt;code&gt;include&lt;/code&gt;, to include both merge commits and non-merge commits or &lt;code&gt;only&lt;/code&gt;, to only return merge commits. | [Optional] [Defaults to `undefined`] |
| **ignoreMissing** | `string` | &lt;code&gt;true&lt;/code&gt; to ignore missing commits, &lt;code&gt;false&lt;/code&gt; otherwise | [Optional] [Defaults to `undefined`] |
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
| **200** | A page of commits |  -  |
| **400** | One of the supplied commit IDs or refs was invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfigurations1

> GetConfigurations200Response getConfigurations1(projectKey, repositorySlug, start, limit)

Get hook scripts

Return a page of hook scripts configured for the specified repository.   This endpoint requires **REPO_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetConfigurations1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetConfigurations1Request;

  try {
    const data = await api.getConfigurations1(body);
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

[**GetConfigurations200Response**](GetConfigurations200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of hook scripts. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContent

> getContent(projectKey, repositorySlug, noContent, at, size, blame, type)

Get file content at revision

Retrieve a page of content for a file path at a specified revision.   Responses from this endpoint vary widely depending on the query parameters. The example JSON is for a request that does not use size, type, blame or noContent.   1. size will return a response like {\&quot;size\&quot;:10000} 2. type will return a response like {\&quot;type\&quot;:\&quot;FILE\&quot;}, where possible values are    \&quot;DIRECTORY\&quot;, \&quot;FILE\&quot; and \&quot;SUBMODULE\&quot; 3. blame &lt;i&gt;without&lt;/i&gt; noContent will include blame for the lines of    content returned on the page 4. blame &lt;i&gt;with&lt;/i&gt; noContent will omit file contents and only return    blame for the requested lines 5. noContent without blame is ignored and does nothing   The various parameters are \&quot;processed\&quot; in the above order. That means ?size&#x3D;true&amp;amp;type&#x3D;truewill return a size response, not a type one; the type parameter will be ignored.   The blame and noContent query parameters are handled differently from size and type. For blame and noContent, the &lt;i&gt;presence&lt;/i&gt; of the parameter implies \&quot;true\&quot; if no value is specified; size and and type both require an explicit&#x3D;true or they\&#39;re treated as \&quot;false\&quot;.   - ?blame is the same as ?blame&#x3D;true - ?blame&amp;amp;noContent is the same as ?blame&#x3D;true&amp;amp;noContent&#x3D;true - ?size is the same as ?size&#x3D;false - ?type is the same as ?type&#x3D;false   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetContentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If blame&amp;noContent only the blame is retrieved instead of the contents (optional)
    noContent: noContent_example,
    // string | The commit ID or ref to retrieve the content for (optional)
    at: at_example,
    // string | If true only the size will be returned for the file path instead of the contents (optional)
    size: size_example,
    // string | If present and not equal to \'false\', the blame will be returned for the file as well (optional)
    blame: blame_example,
    // string | If true only the type will be returned for the file path instead of the contents (optional)
    type: type_example,
  } satisfies GetContentRequest;

  try {
    const data = await api.getContent(body);
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
| **noContent** | `string` | If blame&amp;amp;noContent only the blame is retrieved instead of the contents | [Optional] [Defaults to `undefined`] |
| **at** | `string` | The commit ID or ref to retrieve the content for | [Optional] [Defaults to `undefined`] |
| **size** | `string` | If true only the size will be returned for the file path instead of the contents | [Optional] [Defaults to `undefined`] |
| **blame** | `string` | If present and not equal to \&#39;false\&#39;, the blame will be returned for the file as well | [Optional] [Defaults to `undefined`] |
| **type** | `string` | If true only the type will be returned for the file path instead of the contents | [Optional] [Defaults to `undefined`] |

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
| **200** | A page of contents from a file. |  -  |
| **400** | The path parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContent1

> getContent1(path, projectKey, repositorySlug, noContent, at, size, blame, type)

Get file content

Retrieve a page of content for a file path at a specified revision.   Responses from this endpoint vary widely depending on the query parameters. The example JSON is for a request that does not use size, type, blame or noContent.   1. size will return a response like {\&quot;size\&quot;:10000} 2. type will return a response like {\&quot;type\&quot;:\&quot;FILE\&quot;}, where possible values are    \&quot;DIRECTORY\&quot;, \&quot;FILE\&quot; and \&quot;SUBMODULE\&quot; 3. blame &lt;i&gt;without&lt;/i&gt; noContent will include blame for the lines of    content returned on the page 4. blame &lt;i&gt;with&lt;/i&gt; noContent will omit file contents and only return    blame for the requested lines 5. noContent without blame is ignored and does nothing   The various parameters are \&quot;processed\&quot; in the above order. That means ?size&#x3D;true&amp;amp;type&#x3D;truewill return a size response, not a type one; the type parameter will be ignored.   The blame and noContent query parameters are handled differently from size and type. For blame and noContent, the &lt;i&gt;presence&lt;/i&gt; of the parameter implies \&quot;true\&quot; if no value is specified; size and and type both require an explicit&#x3D;true or they\&#39;re treated as \&quot;false\&quot;.   - ?blame is the same as ?blame&#x3D;true - ?blame&amp;amp;noContent is the same as ?blame&#x3D;true&amp;amp;noContent&#x3D;true - ?size is the same as ?size&#x3D;false - ?type is the same as ?type&#x3D;false   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetContent1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The file path to retrieve content from
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If blame&amp;noContent only the blame is retrieved instead of the contents (optional)
    noContent: noContent_example,
    // string | The commit ID or ref to retrieve the content for (optional)
    at: at_example,
    // string | If true only the size will be returned for the file path instead of the contents (optional)
    size: size_example,
    // string | If present and not equal to \'false\', the blame will be returned for the file as well (optional)
    blame: blame_example,
    // string | If true only the type will be returned for the file path instead of the contents (optional)
    type: type_example,
  } satisfies GetContent1Request;

  try {
    const data = await api.getContent1(body);
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
| **path** | `string` | The file path to retrieve content from | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **noContent** | `string` | If blame&amp;amp;noContent only the blame is retrieved instead of the contents | [Optional] [Defaults to `undefined`] |
| **at** | `string` | The commit ID or ref to retrieve the content for | [Optional] [Defaults to `undefined`] |
| **size** | `string` | If true only the size will be returned for the file path instead of the contents | [Optional] [Defaults to `undefined`] |
| **blame** | `string` | If present and not equal to \&#39;false\&#39;, the blame will be returned for the file as well | [Optional] [Defaults to `undefined`] |
| **type** | `string` | If true only the type will be returned for the file path instead of the contents | [Optional] [Defaults to `undefined`] |

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
| **200** | A page of contents from a file. |  -  |
| **400** | The path or until parameters were not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDefaultBranch1

> RestBranch getDefaultBranch1(projectKey, repositorySlug)

Get default branch

Retrieves the repository\&#39;s default branch, if it has been created. If the repository is empty, 204 No Content will be returned. For non-empty repositories, if the configured default branch has not yet been created a 404 Not Found will be returned.   This URL is deprecated. Callers should use &lt;code&gt;GET /projects/{key}/repos/{slug}/default-branch&lt;/code&gt; instead, which allows retrieving the &lt;i&gt;configured&lt;/i&gt; default branch even if the ref has not been created yet.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetDefaultBranch1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

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


## getDefaultTasks1

> GetDefaultTasks1200Response getDefaultTasks1(projectKey, repositorySlug, markup, start, limit)

Get a page of default tasks

Retrieves the default tasks for the supplied repository.  The authenticated user must have **REPO_VIEW** permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetDefaultTasks1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | If present or `\"true\"`, includes a markup-rendered description (optional)
    markup: markup_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetDefaultTasks1Request;

  try {
    const data = await api.getDefaultTasks1(body);
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
| **markup** | `string` | If present or &#x60;\&quot;true\&quot;&#x60;, includes a markup-rendered description | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetDefaultTasks1200Response**](GetDefaultTasks1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of default tasks |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete default tasks |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDiffStatsSummary

> any getDiffStatsSummary(path, projectKey, commitId, repositorySlug, srcPath, autoSrcPath, whitespace, since)

Get diff stats summary between revisions

Retrieve the diff stats summary for a commit.  The stats summary include the total number of modified files, added lines, and deleted lines.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetDiffStatsSummaryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The path to the file which should be diffed (optional)
    path: path_example,
    // string | The project key
    projectKey: projectKey_example,
    // string | The commit ID to diff to.
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The source path for the file, if it was copied, moved or renamed (optional)
    srcPath: srcPath_example,
    // string | <code>true</code> to automatically try to find the source path when it\'s not provided, <code>false</code> otherwise. Requires the path to be provided. (optional)
    autoSrcPath: autoSrcPath_example,
    // string | Optional whitespace flag which can be set to ignore-all (optional)
    whitespace: whitespace_example,
    // string | The base revision to diff from. If omitted the parent revision of the commit ID is used (optional)
    since: since_example,
  } satisfies GetDiffStatsSummaryRequest;

  try {
    const data = await api.getDiffStatsSummary(body);
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
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **commitId** | `string` | The commit ID to diff to. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **srcPath** | `string` | The source path for the file, if it was copied, moved or renamed | [Optional] [Defaults to `undefined`] |
| **autoSrcPath** | `string` | &lt;code&gt;true&lt;/code&gt; to automatically try to find the source path when it\&#39;s not provided, &lt;code&gt;false&lt;/code&gt; otherwise. Requires the path to be provided. | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | Optional whitespace flag which can be set to ignore-all | [Optional] [Defaults to `undefined`] |
| **since** | `string` | The base revision to diff from. If omitted the parent revision of the commit ID is used | [Optional] [Defaults to `undefined`] |

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
| **200** | The diff stats summary for a commit. |  -  |
| **400** | The until parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDiffStatsSummary1

> RestDiff getDiffStatsSummary1(path, projectKey, repositorySlug, fromRepo, srcPath, from, to, whitespace)

Retrieve the diff stats summary between commits

Retrieve the diff stats summary of the changes available in the &lt;code&gt;from&lt;/code&gt; commit but not in the &lt;code&gt; to&lt;/code&gt; commit.  If either the &lt;code&gt; from&lt;/code&gt; or &lt;code&gt; to&lt;/code&gt; commit are not specified, they will be replaced by the default branch of their containing repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetDiffStatsSummary1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | the path to the file to diff (optional)
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | an optional parameter specifying the source repository containing the source commit if that commit is not present in the current repository; the repository can be specified by either its ID <em>fromRepo=42</em> or by its project key plus its repo slug separated by a slash: <em>fromRepo=projectKey/repoSlug</em> (optional)
    fromRepo: fromRepo_example,
    // string | source path (optional)
    srcPath: srcPath_example,
    // string | the source commit (can be a partial/full commit ID or qualified/unqualified ref name) (optional)
    from: from_example,
    // string | the target commit (can be a partial/full commit ID or qualified/unqualified ref name) (optional)
    to: to_example,
    // string | an optional whitespace flag which can be set to <code>ignore-all</code> (optional)
    whitespace: whitespace_example,
  } satisfies GetDiffStatsSummary1Request;

  try {
    const data = await api.getDiffStatsSummary1(body);
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
| **path** | `string` | the path to the file to diff (optional) | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **fromRepo** | `string` | an optional parameter specifying the source repository containing the source commit if that commit is not present in the current repository; the repository can be specified by either its ID &lt;em&gt;fromRepo&#x3D;42&lt;/em&gt; or by its project key plus its repo slug separated by a slash: &lt;em&gt;fromRepo&#x3D;projectKey/repoSlug&lt;/em&gt; | [Optional] [Defaults to `undefined`] |
| **srcPath** | `string` | source path | [Optional] [Defaults to `undefined`] |
| **from** | `string` | the source commit (can be a partial/full commit ID or qualified/unqualified ref name) | [Optional] [Defaults to `undefined`] |
| **to** | `string` | the target commit (can be a partial/full commit ID or qualified/unqualified ref name) | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | an optional whitespace flag which can be set to &lt;code&gt;ignore-all&lt;/code&gt; | [Optional] [Defaults to `undefined`] |

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
| **200** | The diff stats summary for the changes. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The source repository,target repository, or commit does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLatestInvocation1

> RestDetailedInvocation getLatestInvocation1(projectKey, webhookId, repositorySlug, event, outcome)

Get last webhook invocation details

Get the latest invocations for a specific webhook.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetLatestInvocation1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the webhook
    webhookId: webhookId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The string ID of a specific event to retrieve the last invocation for. (optional)
    event: event_example,
    // string | The outcome to filter for. Can be SUCCESS, FAILURE, ERROR. None specified means that the all will be considered (optional)
    outcome: outcome_example,
  } satisfies GetLatestInvocation1Request;

  try {
    const data = await api.getLatestInvocation1(body);
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
| **webhookId** | `string` | ID of the webhook | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **event** | `string` | The string ID of a specific event to retrieve the last invocation for. | [Optional] [Defaults to `undefined`] |
| **outcome** | `string` | The outcome to filter for. Can be SUCCESS, FAILURE, ERROR. None specified means that the all will be considered | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDetailedInvocation**](RestDetailedInvocation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A webhook invocation dataset. |  -  |
| **204** | No webhook invocations exist. |  -  |
| **401** | The currently authenticated user has insufficient permissions to get webhook invocations in the repository. |  -  |
| **404** | The specified repository does not exist, or the webhook does not exist in the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMergeBase

> RestCommit getMergeBase(projectKey, commitId, repositorySlug, otherCommitId)

Get the common ancestor between two commits

Returns the best common ancestor between two commits.  If more than one best common ancestor exists, only one will be returned. It is unspecified which will be returned.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetMergeBaseRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The other commit id to calculate the merge-base on (optional)
    otherCommitId: otherCommitId_example,
  } satisfies GetMergeBaseRequest;

  try {
    const data = await api.getMergeBase(body);
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
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **otherCommitId** | `string` | The other commit id to calculate the merge-base on | [Optional] [Defaults to `undefined`] |

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
| **200** | The common ancestor of the two given commits |  -  |
| **204** | No common parent between the two commits exist |  -  |
| **400** | The supplied commit ID(s) was/were invalid |  -  |
| **404** | The project, repository, or commit(s) does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPullRequestSettings1

> RestRepositoryPullRequestSettings getPullRequestSettings1(projectKey, repositorySlug)

Get pull request settings

Retrieve the pull request settings for the context repository.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the context repository to call this resource.   This resource will call all RestFragments that are registered with the key &lt;strong&gt;bitbucket.repository.settings.pullRequests&lt;/strong&gt;. If any fragment fails validations by returning a non-empty Map of errors, then no fragments will execute.   The property keys for the settings that are bundled with the application are   - mergeConfig - the merge strategy configuration for pull requests - requiredApprovers - (Deprecated, please use com.atlassian.bitbucket.server.bundled-hooks.requiredApproversMergeHook instead) the number of approvals required on a pull request for it to be mergeable, or 0 if the merge check is disabled - com.atlassian.bitbucket.server.bundled-hooks.requiredApproversMergeHook - the merge check configuration for required approvers - requiredAllApprovers - whether or not all approvers must approve a pull request for it to be mergeable - requiredAllTasksComplete - whether or not all tasks on a pull request need to be completed for it to be mergeable - requiredSuccessfulBuilds - (Deprecated, please use com.atlassian.bitbucket.server.bitbucket-build.requiredBuildsMergeCheck instead) the number of successful builds on a pull request for it to be mergeable, or 0 if the merge check is disabled - com.atlassian.bitbucket.server.bitbucket-build.requiredBuildsMergeCheck - the merge check configuration for required builds   

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetPullRequestSettings1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetPullRequestSettings1Request;

  try {
    const data = await api.getPullRequestSettings1(body);
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

[**RestRepositoryPullRequestSettings**](RestRepositoryPullRequestSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository pull request settings for the context repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRefChangeActivity

> GetRefChangeActivity200Response getRefChangeActivity(projectKey, repositorySlug, ref, start, limit)

Get ref change activity

Retrieve a page of repository ref change activity.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetRefChangeActivityRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | (optional) exact match for a ref ID to filter ref change activity for (optional)
    ref: ref_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRefChangeActivityRequest;

  try {
    const data = await api.getRefChangeActivity(body);
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
| **ref** | `string` | (optional) exact match for a ref ID to filter ref change activity for | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRefChangeActivity200Response**](GetRefChangeActivity200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of ref change activity. |  -  |
| **401** | The user is currently not authenticated or the user does not have REPO_ADMIN permission. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositories1

> GetRepositoriesRecentlyAccessed200Response getRepositories1(archived, projectname, projectkey, visibility, name, permission, state, start, limit)

Search for repositories

Retrieve a page of repositories based on query parameters that control the search. See the documentation of the parameters for more details.   This resource is anonymously accessible, if anonymous access is enabled.   &lt;b&gt;Note on permissions.&lt;/b&gt; In absence of the &lt;code&gt;permission&lt;/code&gt; query parameter the implicit \&#39;read\&#39; permission is assumed. Please note that this permission is lower than the &lt;tt&gt;REPO_READ&lt;/tt&gt; permission rather than being equal to it. The implicit \&#39;read\&#39; permission for a given repository is assigned to any user that has any of the higher permissions, such as &lt;tt&gt;REPO_READ&lt;/tt&gt;, as well as to anonymous users if the repository is marked as public. The important implication of the above is that an anonymous request to this resource with a permission level &lt;tt&gt;REPO_READ&lt;/tt&gt; is guaranteed to receive an empty list of repositories as a result. For anonymous requests it is therefore recommended to not specify the &lt;tt&gt;permission&lt;/tt&gt; parameter at all.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetRepositories1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | (optional) if specified, this will limit the resulting repository list to ones whose are <tt>ACTIVE</tt>, <tt>ARCHIVED</tt> or <tt>ALL</tt> for both. The match performed is case-insensitive. This filter defaults to <tt>ACTIVE</tt> when not set. <em>Available since 8.0</em> (optional)
    archived: archived_example,
    // string | (optional) if specified, this will limit the resulting repository list to ones whose project\'s name matches this parameter\'s value. The match performed is case-insensitive and any leading and/or trailing whitespace characters on the <code>projectname</code> parameter will be stripped. (optional)
    projectname: projectname_example,
    // string | (optional) if specified, this will limit the resulting repository list to ones whose project\'s key matches this parameter\'s value. The match performed is case-insensitive and any leading  and/or trailing whitespace characters on the <code>projectKey</code> parameter will be stripped. <em>Available since 8.0</em> (optional)
    projectkey: projectkey_example,
    // 'public' | 'private' | (optional) if specified, this will limit the resulting repository list based on the repositories visibility. Valid values are <em>public</em> or <em>private</em>. (optional)
    visibility: visibility_example,
    // string | (optional) if specified, this will limit the resulting repository list to ones whose name matches this parameter\'s value. The match performed is case-insensitive and any leading and/or trailing whitespace characters on the <code>name</code> parameter will be stripped. (optional)
    name: name_example,
    // 'REPO_READ' | 'REPO_WRITE' | 'REPO_ADMIN' | (optional) if specified, it must be a valid repository permission level name and will limit the resulting repository list to ones that the requesting user has the specified permission level to. If not specified, the default implicit \'read\' permission level will be assumed. The currently supported explicit permission values are <tt>REPO_READ</tt>, <tt>REPO_WRITE</tt> and <tt>REPO_ADMIN</tt>. (optional)
    permission: permission_example,
    // 'AVAILABLE' | 'INITIALISING' | 'INITIALISATION_FAILED' | (optional) if specified, it must be a valid repository state name and will limit the resulting repository list to ones that are in the specified state. The currently supported explicit state values are <tt>AVAILABLE</tt>, <tt>INITIALISING</tt> and <tt>INITIALISATION_FAILED</tt>. Filtering by <tt>OFFLINE</tt> repositories is not supported.<br><em>Available since 5.13</em> (optional)
    state: state_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRepositories1Request;

  try {
    const data = await api.getRepositories1(body);
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
| **archived** | `string` | (optional) if specified, this will limit the resulting repository list to ones whose are &lt;tt&gt;ACTIVE&lt;/tt&gt;, &lt;tt&gt;ARCHIVED&lt;/tt&gt; or &lt;tt&gt;ALL&lt;/tt&gt; for both. The match performed is case-insensitive. This filter defaults to &lt;tt&gt;ACTIVE&lt;/tt&gt; when not set. &lt;em&gt;Available since 8.0&lt;/em&gt; | [Optional] [Defaults to `undefined`] |
| **projectname** | `string` | (optional) if specified, this will limit the resulting repository list to ones whose project\&#39;s name matches this parameter\&#39;s value. The match performed is case-insensitive and any leading and/or trailing whitespace characters on the &lt;code&gt;projectname&lt;/code&gt; parameter will be stripped. | [Optional] [Defaults to `undefined`] |
| **projectkey** | `string` | (optional) if specified, this will limit the resulting repository list to ones whose project\&#39;s key matches this parameter\&#39;s value. The match performed is case-insensitive and any leading  and/or trailing whitespace characters on the &lt;code&gt;projectKey&lt;/code&gt; parameter will be stripped. &lt;em&gt;Available since 8.0&lt;/em&gt; | [Optional] [Defaults to `undefined`] |
| **visibility** | `public`, `private` | (optional) if specified, this will limit the resulting repository list based on the repositories visibility. Valid values are &lt;em&gt;public&lt;/em&gt; or &lt;em&gt;private&lt;/em&gt;. | [Optional] [Defaults to `undefined`] [Enum: public, private] |
| **name** | `string` | (optional) if specified, this will limit the resulting repository list to ones whose name matches this parameter\&#39;s value. The match performed is case-insensitive and any leading and/or trailing whitespace characters on the &lt;code&gt;name&lt;/code&gt; parameter will be stripped. | [Optional] [Defaults to `undefined`] |
| **permission** | `REPO_READ`, `REPO_WRITE`, `REPO_ADMIN` | (optional) if specified, it must be a valid repository permission level name and will limit the resulting repository list to ones that the requesting user has the specified permission level to. If not specified, the default implicit \&#39;read\&#39; permission level will be assumed. The currently supported explicit permission values are &lt;tt&gt;REPO_READ&lt;/tt&gt;, &lt;tt&gt;REPO_WRITE&lt;/tt&gt; and &lt;tt&gt;REPO_ADMIN&lt;/tt&gt;. | [Optional] [Defaults to `undefined`] [Enum: REPO_READ, REPO_WRITE, REPO_ADMIN] |
| **state** | `AVAILABLE`, `INITIALISING`, `INITIALISATION_FAILED` | (optional) if specified, it must be a valid repository state name and will limit the resulting repository list to ones that are in the specified state. The currently supported explicit state values are &lt;tt&gt;AVAILABLE&lt;/tt&gt;, &lt;tt&gt;INITIALISING&lt;/tt&gt; and &lt;tt&gt;INITIALISATION_FAILED&lt;/tt&gt;. Filtering by &lt;tt&gt;OFFLINE&lt;/tt&gt; repositories is not supported.&lt;br&gt;&lt;em&gt;Available since 5.13&lt;/em&gt; | [Optional] [Defaults to `undefined`] [Enum: AVAILABLE, INITIALISING, INITIALISATION_FAILED] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRepositoriesRecentlyAccessed200Response**](GetRepositoriesRecentlyAccessed200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of repositories. |  -  |
| **400** | The &lt;code&gt;visibility&lt;/code&gt; parameter contains an invalid value. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoriesRecentlyAccessed

> GetRepositoriesRecentlyAccessed200Response getRepositoriesRecentlyAccessed(permission, start, limit)

Get recently accessed repositories

Retrieve a page of recently accessed repositories for the currently authenticated user.   Repositories are ordered from most recently to least recently accessed. &lt;p&gt;Only authenticated users may call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetRepositoriesRecentlyAccessedRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | (optional) If specified, it must be a valid repository permission level name and will limit the resulting repository list to ones that the requesting user has the specified permission level to. If not specified, the default <code>REPO_READ</code> permission level will be assumed. (optional)
    permission: permission_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRepositoriesRecentlyAccessedRequest;

  try {
    const data = await api.getRepositoriesRecentlyAccessed(body);
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
| **permission** | `string` | (optional) If specified, it must be a valid repository permission level name and will limit the resulting repository list to ones that the requesting user has the specified permission level to. If not specified, the default &lt;code&gt;REPO_READ&lt;/code&gt; permission level will be assumed. | [Optional] [Defaults to `&#39;REPO_READ&#39;`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRepositoriesRecentlyAccessed200Response**](GetRepositoriesRecentlyAccessed200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of recently accessed repositories. |  -  |
| **400** | The permission level is unknown or not related to repository. |  -  |
| **401** | The request is unauthenticated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryHook1

> RestRepositoryHook getRepositoryHook1(projectKey, hookKey, repositorySlug)

Get repository hook

Retrieve a repository hook for this repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetRepositoryHook1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetRepositoryHook1Request;

  try {
    const data = await api.getRepositoryHook1(body);
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
| **hookKey** | `string` | The hook key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestRepositoryHook**](RestRepositoryHook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository hooks with their associated enabled state for the supplied hookKey. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the hook. |  -  |
| **404** | The specified repository hook does not exist for the given repository, or the repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryHooks1

> GetRepositoryHooks1200Response getRepositoryHooks1(projectKey, repositorySlug, type, start, limit)

Get repository hooks

Retrieve a page of repository hooks for this repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetRepositoryHooks1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // 'PRE_RECEIVE' | 'POST_RECEIVE' | The optional type to filter by. (optional)
    type: type_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRepositoryHooks1Request;

  try {
    const data = await api.getRepositoryHooks1(body);
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
| **type** | `PRE_RECEIVE`, `POST_RECEIVE` | The optional type to filter by. | [Optional] [Defaults to `undefined`] [Enum: PRE_RECEIVE, POST_RECEIVE] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRepositoryHooks1200Response**](GetRepositoryHooks1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of repository hooks with their associated enabled state. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the hooks. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRestriction1

> RestRefRestriction getRestriction1(projectKey, id, repositorySlug)

Get a ref restriction

Returns a restriction as specified by a restriction id.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission or higher to call this resource. Only authenticated users may call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetRestriction1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The restriction id.
    id: id_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetRestriction1Request;

  try {
    const data = await api.getRestriction1(body);
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
| **id** | `string` | The restriction id. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestRefRestriction**](RestRefRestriction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing the restriction. |  -  |
| **400** | The request has failed validation. |  -  |
| **401** | The currently authenticated user is not permitted to get restrictions on the provided project |  -  |
| **404** | No restriction exists for the provided ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRestrictions1

> GetRestrictions1200Response getRestrictions1(projectKey, repositorySlug, matcherType, matcherId, type, start, limit)

Search for ref restrictions

Search for restrictions using the supplied parameters.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission or higher to call this resource. Only authenticated users may call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetRestrictions1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // 'BRANCH' | 'PATTERN' | 'MODEL_CATEGORY' | 'MODEL_BRANCH' | Matcher type to filter on (optional)
    matcherType: matcherType_example,
    // string | Matcher id to filter on. Requires the matcherType parameter to be specified also. (optional)
    matcherId: matcherId_example,
    // 'read-only' | 'no-deletes' | 'fast-forward-only' | 'pull-request-only' | 'no-creates' | Types of restrictions to filter on. (optional)
    type: type_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRestrictions1Request;

  try {
    const data = await api.getRestrictions1(body);
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
| **matcherType** | `BRANCH`, `PATTERN`, `MODEL_CATEGORY`, `MODEL_BRANCH` | Matcher type to filter on | [Optional] [Defaults to `undefined`] [Enum: BRANCH, PATTERN, MODEL_CATEGORY, MODEL_BRANCH] |
| **matcherId** | `string` | Matcher id to filter on. Requires the matcherType parameter to be specified also. | [Optional] [Defaults to `undefined`] |
| **type** | `read-only`, `no-deletes`, `fast-forward-only`, `pull-request-only`, `no-creates` | Types of restrictions to filter on. | [Optional] [Defaults to `undefined`] [Enum: read-only, no-deletes, fast-forward-only, pull-request-only, no-creates] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRestrictions1200Response**](GetRestrictions1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A response containing a page of restrictions. |  -  |
| **400** | The request has failed validation. |  -  |
| **401** | The currently authenticated user is not permitted to get restrictions on the provided project |  -  |
| **404** | No restriction exists for the provided ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSettings1

> ExampleSettings getSettings1(projectKey, hookKey, repositorySlug)

Get repository hook settings

Retrieve the settings for a repository hook for this repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetSettings1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetSettings1Request;

  try {
    const data = await api.getSettings1(body);
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
| **hookKey** | `string` | The hook key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**ExampleSettings**](ExampleSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The settings for the hook. |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve the hook settings. |  -  |
| **404** | The specified repository or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatistics1

> any getStatistics1(projectKey, webhookId, repositorySlug, event)

Get webhook statistics

Get the statistics for a specific webhook.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetStatistics1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the webhook
    webhookId: webhookId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The string ID of a specific event to retrieve the last invocation for. May be empty, in which case all events are considered (optional)
    event: event_example,
  } satisfies GetStatistics1Request;

  try {
    const data = await api.getStatistics1(body);
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
| **webhookId** | `string` | ID of the webhook | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **event** | `string` | The string ID of a specific event to retrieve the last invocation for. May be empty, in which case all events are considered | [Optional] [Defaults to `undefined`] |

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
| **200** | A webhook invocation dataset. |  -  |
| **401** | The currently authenticated user has insufficient permissions to get webhook statistics in the repository. |  -  |
| **404** | The specified repository does not exist, or the webhook does not exist in the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatisticsSummary1

> any getStatisticsSummary1(projectKey, webhookId, repositorySlug)

Get webhook statistics summary

Get the statistics summary for a specific webhook.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetStatisticsSummary1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the webhook
    webhookId: webhookId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetStatisticsSummary1Request;

  try {
    const data = await api.getStatisticsSummary1(body);
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
| **webhookId** | `string` | ID of the webhook | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

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
| **200** | A webhook invocation dataset. |  -  |
| **401** | The currently authenticated user has insufficient permissions to get webhook statistics summary in the repository. |  -  |
| **404** | The repository does not exist, or the webhook does not exist in the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatus

> RestRefSyncStatus getStatus(projectKey, repositorySlug, at)

Get synchronization status

Retrieves the synchronization status for the specified repository. In addition to listing refs which cannot be synchronized, if any, the status also provides the timestamp for the most recent synchronization and indicates whether synchronization is available and enabled. If \&quot;?at\&quot; is specified in the URL, the synchronization status for the specified ref is returned, rather than the complete repository status.  The authenticated user must have &lt;b&gt;REPO_READ&lt;/b&gt; permission for the repository, or it must be public if the request is anonymous. Additionally, after synchronization is enabled for a repository, meaning synchronization was available at that time, permission changes and other actions can cause it to become unavailable. Even when synchronization is enabled, if it is no longer available for the repository it will not be performed.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetStatusRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | Retrieves the synchronization status for the specified ref within the repository, rather than for the entire repository (optional)
    at: at_example,
  } satisfies GetStatusRequest;

  try {
    const data = await api.getStatus(body);
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
| **at** | `string` | Retrieves the synchronization status for the specified ref within the repository, rather than for the entire repository | [Optional] [Defaults to `undefined`] |

### Return type

[**RestRefSyncStatus**](RestRefSyncStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Synchronization status for the specified repository, or specific ref within that repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository, or the repository is not public if the request is anonymous. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTag

> RestTag getTag(projectKey, name, repositorySlug)

Get tag

Retrieve a tag in the specified repository.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the context repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetTagRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The name of the tag to be retrieved.
    name: name_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetTagRequest;

  try {
    const data = await api.getTag(body);
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
| **name** | `string` | The name of the tag to be retrieved. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |

### Return type

[**RestTag**](RestTag.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The tag which matches the supplied &lt;strong&gt;name&lt;/strong&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to read the repository. |  -  |
| **404** | The specified tag does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTags

> GetTags200Response getTags(projectKey, repositorySlug, orderBy, filterText, start, limit)

Find tag

Retrieve the tags matching the supplied &lt;strong&gt;filterText&lt;/strong&gt; param.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the context repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetTagsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | Ordering of refs either ALPHABETICAL (by name) or MODIFICATION (last updated) (optional)
    orderBy: orderBy_example,
    // string | The text to match on. (optional)
    filterText: filterText_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetTagsRequest;

  try {
    const data = await api.getTags(body);
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
| **orderBy** | `string` | Ordering of refs either ALPHABETICAL (by name) or MODIFICATION (last updated) | [Optional] [Defaults to `undefined`] |
| **filterText** | `string` | The text to match on. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetTags200Response**](GetTags200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The tags matching the supplied &lt;strong&gt;filterText&lt;/strong&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to read the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhook1

> RestWebhook getWebhook1(projectKey, webhookId, repositorySlug, statistics)

Get webhook

Get a webhook by ID.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { GetWebhook1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the webhook
    webhookId: webhookId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | <code>true</code> if statistics should be provided for the webhook (optional)
    statistics: statistics_example,
  } satisfies GetWebhook1Request;

  try {
    const data = await api.getWebhook1(body);
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
| **webhookId** | `string` | ID of the webhook | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **statistics** | `string` | &lt;code&gt;true&lt;/code&gt; if statistics should be provided for the webhook | [Optional] [Defaults to `undefined`] |

### Return type

[**RestWebhook**](RestWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A webhook. |  -  |
| **401** | The currently authenticated user has insufficient permissions to get a webhook in the repository. |  -  |
| **404** | The repository does not exist, or the webhook does not exist in the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## react

> RestUserReaction react(projectKey, commentId, commitId, emoticon, repositorySlug)

React to a comment

Add an emoticon reaction to a comment

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { ReactRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The comment id
    commentId: commentId_example,
    // string | The commit id
    commitId: commitId_example,
    // string | The emoticon to add
    emoticon: emoticon_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies ReactRequest;

  try {
    const data = await api.react(body);
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
| **commentId** | `string` | The comment id | [Defaults to `undefined`] |
| **commitId** | `string` | The commit id | [Defaults to `undefined`] |
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


## removeConfiguration1

> removeConfiguration1(projectKey, scriptId, repositorySlug)

Remove a hook script

Removes the hook script from the set of hook scripts configured to run in the repository.   This endpoint requires **REPO_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { RemoveConfiguration1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the hook script
    scriptId: scriptId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies RemoveConfiguration1Request;

  try {
    const data = await api.removeConfiguration1(body);
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
| **scriptId** | `string` | The ID of the hook script | [Defaults to `undefined`] |
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
| **204** | The hook script was successfully deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified repository. |  -  |
| **404** | The repository slug or hook script ID supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeLabel

> removeLabel(projectKey, labelName, repositorySlug)

Remove repository label

Remove label that is applied to the given repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { RemoveLabelRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The label to remove
    labelName: labelName_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies RemoveLabelRequest;

  try {
    const data = await api.removeLabel(body);
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
| **labelName** | `string` | The label to remove | [Defaults to `undefined`] |
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
| **204** | An empty response indicating that the label is no longer associated to the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to remove the label. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## saveAttachmentMetadata

> saveAttachmentMetadata(projectKey, attachmentId, repositorySlug, body)

Save attachment metadata

Save attachment metadata.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository that is associated to the attachment that has the attachment metadata.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { SaveAttachmentMetadataRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | the attachment ID
    attachmentId: attachmentId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The attachment metadata can be any valid JSON content (optional)
    body: body_example,
  } satisfies SaveAttachmentMetadataRequest;

  try {
    const data = await api.saveAttachmentMetadata(body);
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
| **attachmentId** | `string` | the attachment ID | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **body** | `string` | The attachment metadata can be any valid JSON content | [Optional] |

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
| **200** | The attachment metadata |  -  |
| **400** | The supplied content is not valid JSON |  -  |
| **401** | The currently authenticated user has insufficient permissions to save theattachment metadata |  -  |
| **404** | The repository or the attachment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchWebhooks

> searchWebhooks(projectKey, repositorySlug, scopeType, event, statistics)

Search webhooks

Search webhooks in this repository and parent project. This endpoint returns a superset of the results returned by the /webhooks endpoint because it allows filtering by project scope too, not just repository webhooks.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { SearchWebhooksRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | Scopes to filter by. This parameter can be specified once e.g. \"scopeType=repository\", or twice e.g. \"scopeType=repository&scopeType=project\", to filter by more than one scope level.  (optional)
    scopeType: scopeType_example,
    // string | List of <code>com.atlassian.webhooks.WebhookEvent</code> ids to filter for (optional)
    event: event_example,
    // boolean | <code>true</code> if statistics should be provided for all found webhooks (optional)
    statistics: true,
  } satisfies SearchWebhooksRequest;

  try {
    const data = await api.searchWebhooks(body);
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
| **scopeType** | `string` | Scopes to filter by. This parameter can be specified once e.g. \&quot;scopeType&#x3D;repository\&quot;, or twice e.g. \&quot;scopeType&#x3D;repository&amp;scopeType&#x3D;project\&quot;, to filter by more than one scope level.  | [Optional] [Defaults to `undefined`] |
| **event** | `string` | List of &lt;code&gt;com.atlassian.webhooks.WebhookEvent&lt;/code&gt; ids to filter for | [Optional] [Defaults to `undefined`] |
| **statistics** | `boolean` | &lt;code&gt;true&lt;/code&gt; if statistics should be provided for all found webhooks | [Optional] [Defaults to `undefined`] |

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
| **200** | A page of webhooks. |  -  |
| **401** | The currently authenticated user has insufficient permissions to find webhooks in the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## set1

> RestAutoMergeRestrictedSettings set1(projectKey, repositorySlug, restAutoMergeSettingsRequest)

Create or update the pull request auto-merge settings

Creates or updates the pull request auto-merge settings for the supplied repository.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { Set1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // RestAutoMergeSettingsRequest | The settings to create or update (optional)
    restAutoMergeSettingsRequest: ...,
  } satisfies Set1Request;

  try {
    const data = await api.set1(body);
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
| **restAutoMergeSettingsRequest** | [RestAutoMergeSettingsRequest](RestAutoMergeSettingsRequest.md) | The settings to create or update | [Optional] |

### Return type

[**RestAutoMergeRestrictedSettings**](RestAutoMergeRestrictedSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The pull request auto-merge settings |  -  |
| **400** | The \&#39;enabled\&#39; field was not provided correctly. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create or update the pull request auto-merge settings. |  -  |
| **403** | The pull request auto-merge settings cannot be modified due to a restriction enforced by the supplied repository\&#39;s project. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setAutoDeclineSettings1

> RestAutoDeclineSettings setAutoDeclineSettings1(projectKey, repositorySlug, restAutoDeclineSettingsRequest)

Create auto decline settings

Creates or updates the auto decline settings for the supplied repository.  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for this repository to call the resource

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { SetAutoDeclineSettings1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // RestAutoDeclineSettingsRequest | The settings to create or update (optional)
    restAutoDeclineSettingsRequest: ...,
  } satisfies SetAutoDeclineSettings1Request;

  try {
    const data = await api.setAutoDeclineSettings1(body);
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
| **restAutoDeclineSettingsRequest** | [RestAutoDeclineSettingsRequest](RestAutoDeclineSettingsRequest.md) | The settings to create or update | [Optional] |

### Return type

[**RestAutoDeclineSettings**](RestAutoDeclineSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The auto decline settings |  -  |
| **400** | inactivityWeeks was not one of 1, 2, 4, 8, or, 12, or the enabled parameter was not included in the request. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create or update the auto decline settings. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setConfiguration1

> RestHookScriptConfig setConfiguration1(projectKey, scriptId, repositorySlug, restHookScriptTriggers)

Create/update a hook script

Creates/updates the hook script configuration for the provided hook script and repository.   This endpoint requires **REPO_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { SetConfiguration1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the hook script
    scriptId: scriptId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestHookScriptTriggers | The hook triggers for which the hook script should be run (optional)
    restHookScriptTriggers: ...,
  } satisfies SetConfiguration1Request;

  try {
    const data = await api.setConfiguration1(body);
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
| **scriptId** | `string` | The ID of the hook script | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restHookScriptTriggers** | [RestHookScriptTriggers](RestHookScriptTriggers.md) | The hook triggers for which the hook script should be run | [Optional] |

### Return type

[**RestHookScriptConfig**](RestHookScriptConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated hook script. |  -  |
| **400** | The hook script was not created/updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the specified repository. |  -  |
| **404** | The repository slug supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDefaultBranch1

> setDefaultBranch1(projectKey, repositorySlug, restBranch)

Update default branch

Update the default branch of a repository.   This URL is deprecated. Callers should use &lt;code&gt;PUT /projects/{key}/repos/{slug}/default-branch&lt;/code&gt; instead.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { SetDefaultBranch1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

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


## setEnabled

> RestRefSyncStatus setEnabled(projectKey, repositorySlug, restRefSyncStatus)

Disable synchronization

Enables or disables synchronization for the specified repository. When synchronization is enabled, branches within the repository are immediately synchronized and the status is updated with the outcome. That initial synchronization is performed before the REST request returns, allowing it to return the updated status.  The authenticated user must have &lt;b&gt;REPO_ADMIN&lt;/b&gt; permission for the specified repository. Anonymous users cannot manage synchronization, even on public repositories. Additionally, synchronization must be available for the specified repository. Synchronization is only available if:  - The repository is a fork, since its origin is used as upstream - The owning user still has access to the fork\&#39;s origin,  if the repository is a &lt;i&gt;personalfork&lt;/i&gt;

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { SetEnabledRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestRefSyncStatus (optional)
    restRefSyncStatus: ...,
  } satisfies SetEnabledRequest;

  try {
    const data = await api.setEnabled(body);
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
| **restRefSyncStatus** | [RestRefSyncStatus](RestRefSyncStatus.md) |  | [Optional] |

### Return type

[**RestRefSyncStatus**](RestRefSyncStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated synchronization status for the repository, after enabling synchronization. 204 NO CONTENT is returned instead after disabling synchronization. |  -  |
| **204** | Synchronization has successfully been disabled. 200 OK, with updated status information, is returned instead after enabling synchronization. |  -  |
| **400** | The JSON payload for the request did not define the \&quot;enabled\&quot; property. |  -  |
| **401** | The currently authenticated user has insufficient permissions to manage synchronization in the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setSettings1

> ExampleSettings setSettings1(projectKey, hookKey, repositorySlug, exampleSettings)

Update repository hook settings

Modify the settings for a repository hook for this repository.   The service will reject any settings which are too large, the current limit is 32KB once serialized.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.   A JSON document can be provided to use as the settings for the hook. These structure and validity of the document is decided by the plugin providing the hook.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { SetSettings1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // ExampleSettings | The raw settings. (optional)
    exampleSettings: ...,
  } satisfies SetSettings1Request;

  try {
    const data = await api.setSettings1(body);
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
| **hookKey** | `string` | The hook key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **exampleSettings** | [ExampleSettings](ExampleSettings.md) | The raw settings. | [Optional] |

### Return type

[**ExampleSettings**](ExampleSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The settings for the hook. |  -  |
| **400** | The settings specified are invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to modify the hook settings. |  -  |
| **404** | The specified repository or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stream

> ExampleFiles stream(projectKey, repositorySlug, at)

Stream files

Streams files from the repository\&#39;s root with the last commit to modify each file. Commit modifications are traversed starting from the &lt;code&gt;at&lt;/code&gt; commit or, if not specified, from the tip of the default branch.  Unless the repository is public, the authenticated user must have &lt;b&gt;REPO_READ&lt;/b&gt; access to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The commit to use as the starting point when listing files and calculating modifications (optional)
    at: at_example,
  } satisfies StreamRequest;

  try {
    const data = await api.stream(body);
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
| **at** | `string` | The commit to use as the starting point when listing files and calculating modifications | [Optional] [Defaults to `undefined`] |

### Return type

[**ExampleFiles**](ExampleFiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A map of files to the last commit that modified them, and the latest commit to the repository (by nature, any commit to a repository modifies its root). |  -  |
| **400** | No &lt;code&gt;at&lt;/code&gt; commit was specified. When streaming modifications, an explicit starting commit must be supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist or does not contain the &lt;code&gt;at&lt;/code&gt; commit. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## stream1

> ExampleFiles stream1(path, projectKey, repositorySlug, at)

Stream files with last modified commit in path

Streams files in the requested &lt;code&gt;path&lt;/code&gt; with the last commit to modify each file. Commit modifications are traversed starting from the &lt;code&gt;at&lt;/code&gt; commit or, if not specified, from the tip of the default branch.  Unless the repository is public, the authenticated user must have &lt;b&gt;REPO_READ&lt;/b&gt; access to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { Stream1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The path within the repository whose files should be streamed
    path: path_example,
    // string | The project key
    projectKey: projectKey_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The commit to use as the starting point when listing files and calculating modifications (optional)
    at: at_example,
  } satisfies Stream1Request;

  try {
    const data = await api.stream1(body);
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
| **path** | `string` | The path within the repository whose files should be streamed | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **at** | `string` | The commit to use as the starting point when listing files and calculating modifications | [Optional] [Defaults to `undefined`] |

### Return type

[**ExampleFiles**](ExampleFiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A map of files to the last commit that modified them, and the latest commit to update the requested path. |  -  |
| **400** | No &lt;code&gt;at&lt;/code&gt; commit was specified. When streaming modifications, an explicit starting commit must be supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist or does not contain the &lt;code&gt;at&lt;/code&gt; commit, or the &lt;code&gt;at&lt;/code&gt; commit does not contain the requested path. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamChanges

> GetChanges1200Response streamChanges(projectKey, repositorySlug, fromRepo, from, to, start, limit)

Compare commits

Gets the file changes available in the &lt;code&gt; from&lt;/code&gt; commit but not in the &lt;code&gt; to&lt;/code&gt; commit.   If either the &lt;code&gt; from&lt;/code&gt; or &lt;code&gt; to&lt;/code&gt; commit are not specified, they will be replaced by the default branch of their containing repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamChangesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | an optional parameter specifying the source repository containing the source commit if that commit is not present in the current repository; the repository can be specified by either its ID <em>fromRepo=42</em> or by its project key plus its repo slug separated by a slash: <em>fromRepo=projectKey/repoSlug</em> (optional)
    fromRepo: fromRepo_example,
    // string | the source commit (can be a partial/full commit ID or qualified/unqualified ref name) (optional)
    from: from_example,
    // string | the target commit (can be a partial/full commit ID or qualified/unqualified ref name) (optional)
    to: to_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies StreamChangesRequest;

  try {
    const data = await api.streamChanges(body);
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
| **fromRepo** | `string` | an optional parameter specifying the source repository containing the source commit if that commit is not present in the current repository; the repository can be specified by either its ID &lt;em&gt;fromRepo&#x3D;42&lt;/em&gt; or by its project key plus its repo slug separated by a slash: &lt;em&gt;fromRepo&#x3D;projectKey/repoSlug&lt;/em&gt; | [Optional] [Defaults to `undefined`] |
| **from** | `string` | the source commit (can be a partial/full commit ID or qualified/unqualified ref name) | [Optional] [Defaults to `undefined`] |
| **to** | `string` | the target commit (can be a partial/full commit ID or qualified/unqualified ref name) | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetChanges1200Response**](GetChanges1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of changes. |  -  |
| **404** | The source repository,target repository, or commit does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamCommits

> GetCommits200Response streamCommits(projectKey, repositorySlug, fromRepo, from, to, start, limit)

Get accessible commits

Gets the commits accessible from the &lt;code&gt;from&lt;/code&gt; commit but not in the &lt;code&gt;to&lt;/code&gt; commit.  If either the &lt;code&gt;from&lt;/code&gt; or &lt;code&gt;to&lt;/code&gt; commit are not specified, they will be replaced by the default branch of their containing repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamCommitsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | an optional parameter specifying the source repository containing the source commit if that commit is not present in the current repository; the repository can be specified by either its ID <em>fromRepo=42</em> or by its project key plus its repo slug separated by a slash: <em>fromRepo=projectKey/repoSlug</em> (optional)
    fromRepo: fromRepo_example,
    // string | the source commit (can be a partial/full commit ID or qualified/unqualified ref name) (optional)
    from: from_example,
    // string | the target commit (can be a partial/full commit ID or qualified/unqualified ref name) (optional)
    to: to_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies StreamCommitsRequest;

  try {
    const data = await api.streamCommits(body);
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
| **fromRepo** | `string` | an optional parameter specifying the source repository containing the source commit if that commit is not present in the current repository; the repository can be specified by either its ID &lt;em&gt;fromRepo&#x3D;42&lt;/em&gt; or by its project key plus its repo slug separated by a slash: &lt;em&gt;fromRepo&#x3D;projectKey/repoSlug&lt;/em&gt; | [Optional] [Defaults to `undefined`] |
| **from** | `string` | the source commit (can be a partial/full commit ID or qualified/unqualified ref name) | [Optional] [Defaults to `undefined`] |
| **to** | `string` | the target commit (can be a partial/full commit ID or qualified/unqualified ref name) | [Optional] [Defaults to `undefined`] |
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
| **200** | A page of commits. |  -  |
| **404** | The source repository,target repository, or commit does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamDiff

> RestDiff streamDiff(commitId, repositorySlug, path, projectKey, srcPath, avatarSize, filter, avatarScheme, contextLines, autoSrcPath, whitespace, withComments, since)

Get diff between revisions

Retrieve the diff between two provided revisions.  To stream a raw text representation of the diff, this endpoint can be called with the request header \&#39;Accept: text/plain\&#39;.   Note:&lt;/strong&gt; This resource is currently &lt;i&gt;not paged&lt;/i&gt;. The server will internally apply a hard cap to the streamed lines, and it is not possible to request subsequent pages if that cap is exceeded. In the event that the cap is reached, the diff will be cut short and one or more {@code truncated} flags will be set to true on the \&quot;segments\&quot;, \&quot;hunks\&quot; and \&quot;diffs\&quot; properties, as well as the top-level object, in the returned JSON response.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamDiffRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // string | The path to the file which should be diffed (optional)
    path: path_example,
    // string | The project key
    projectKey: projectKey_example,
    // string | The source path for the file, if it was copied, moved or renamed (optional)
    srcPath: srcPath_example,
    // string | If present the service adds avatar URLs for comment authors where the provided value specifies the desired avatar size in pixels. Not applicable if streaming raw diff (optional)
    avatarSize: avatarSize_example,
    // string | Text used to filter files and lines (optional). Not applicable if streaming raw diff (optional)
    filter: filter_example,
    // string | The security scheme for avatar URLs. If the scheme is not present then it is inherited from the request. It can be set to \"https\" to force the use of secure URLs. Not applicable if streaming raw diff (optional)
    avatarScheme: avatarScheme_example,
    // string | The number of context lines to include around added/removed lines in the diff.Not applicable if streaming raw diff (optional)
    contextLines: contextLines_example,
    // string | <code>true</code> to automatically try to find the source path when it\'s not provided, <code>false</code> otherwise. Requires the path to be provided. (optional)
    autoSrcPath: autoSrcPath_example,
    // string | Optional whitespace flag which can be set to ignore-all (optional)
    whitespace: whitespace_example,
    // string | <code>true</code> to embed comments in the diff (the default); otherwise <code>false</code> to stream the diff without comments. Not applicable if streaming raw diff (optional)
    withComments: withComments_example,
    // string | The base revision to diff from. If omitted the parent revision of the until revision is used (optional)
    since: since_example,
  } satisfies StreamDiffRequest;

  try {
    const data = await api.streamDiff(body);
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
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **path** | `string` | The path to the file which should be diffed (optional) | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key | [Defaults to `undefined`] |
| **srcPath** | `string` | The source path for the file, if it was copied, moved or renamed | [Optional] [Defaults to `undefined`] |
| **avatarSize** | `string` | If present the service adds avatar URLs for comment authors where the provided value specifies the desired avatar size in pixels. Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |
| **filter** | `string` | Text used to filter files and lines (optional). Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |
| **avatarScheme** | `string` | The security scheme for avatar URLs. If the scheme is not present then it is inherited from the request. It can be set to \&quot;https\&quot; to force the use of secure URLs. Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |
| **contextLines** | `string` | The number of context lines to include around added/removed lines in the diff.Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |
| **autoSrcPath** | `string` | &lt;code&gt;true&lt;/code&gt; to automatically try to find the source path when it\&#39;s not provided, &lt;code&gt;false&lt;/code&gt; otherwise. Requires the path to be provided. | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | Optional whitespace flag which can be set to ignore-all | [Optional] [Defaults to `undefined`] |
| **withComments** | `string` | &lt;code&gt;true&lt;/code&gt; to embed comments in the diff (the default); otherwise &lt;code&gt;false&lt;/code&gt; to stream the diff without comments. Not applicable if streaming raw diff | [Optional] [Defaults to `undefined`] |
| **since** | `string` | The base revision to diff from. If omitted the parent revision of the until revision is used | [Optional] [Defaults to `undefined`] |

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
| **200** | A diff between two revisions. |  -  |
| **400** | The until parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamDiff1

> RestDiff streamDiff1(path, projectKey, repositorySlug, contextLines, fromRepo, srcPath, from, to, whitespace)

Get diff between commits

Gets a diff of the changes available in the &lt;code&gt;from&lt;/code&gt; commit but not in the &lt;code&gt; to&lt;/code&gt; commit.  If either the &lt;code&gt; from&lt;/code&gt; or &lt;code&gt; to&lt;/code&gt; commit are not specified, they will be replaced by the default branch of their containing repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamDiff1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | the path to the file to diff (optional)
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | an optional number of context lines to include around each added or removed lines in the diff (optional)
    contextLines: contextLines_example,
    // string | an optional parameter specifying the source repository containing the source commit if that commit is not present in the current repository; the repository can be specified by either its ID <em>fromRepo=42</em> or by its project key plus its repo slug separated by a slash: <em>fromRepo=projectKey/repoSlug</em> (optional)
    fromRepo: fromRepo_example,
    // string | source path (optional)
    srcPath: srcPath_example,
    // string | the source commit (can be a partial/full commit ID or qualified/unqualified ref name) (optional)
    from: from_example,
    // string | the target commit (can be a partial/full commit ID or qualified/unqualified ref name) (optional)
    to: to_example,
    // string | an optional whitespace flag which can be set to <code>ignore-all</code> (optional)
    whitespace: whitespace_example,
  } satisfies StreamDiff1Request;

  try {
    const data = await api.streamDiff1(body);
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
| **path** | `string` | the path to the file to diff (optional) | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **contextLines** | `string` | an optional number of context lines to include around each added or removed lines in the diff | [Optional] [Defaults to `undefined`] |
| **fromRepo** | `string` | an optional parameter specifying the source repository containing the source commit if that commit is not present in the current repository; the repository can be specified by either its ID &lt;em&gt;fromRepo&#x3D;42&lt;/em&gt; or by its project key plus its repo slug separated by a slash: &lt;em&gt;fromRepo&#x3D;projectKey/repoSlug&lt;/em&gt; | [Optional] [Defaults to `undefined`] |
| **srcPath** | `string` | source path | [Optional] [Defaults to `undefined`] |
| **from** | `string` | the source commit (can be a partial/full commit ID or qualified/unqualified ref name) | [Optional] [Defaults to `undefined`] |
| **to** | `string` | the target commit (can be a partial/full commit ID or qualified/unqualified ref name) | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | an optional whitespace flag which can be set to &lt;code&gt;ignore-all&lt;/code&gt; | [Optional] [Defaults to `undefined`] |

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
| **200** | The diff of the changes. |  -  |
| **404** | The source repository,target repository, or commit does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamFiles

> StreamFiles200Response streamFiles(projectKey, repositorySlug, at, start, limit)

Get files in directory

Retrieve a page of files from particular directory of a repository. The search is done recursively, so all files from any sub-directory of the specified directory will be returned.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamFilesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The commit ID or ref (e.g. a branch or tag) to list the files at. If not specified the default branch will be used instead. (optional)
    at: at_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies StreamFilesRequest;

  try {
    const data = await api.streamFiles(body);
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
| **at** | `string` | The commit ID or ref (e.g. a branch or tag) to list the files at. If not specified the default branch will be used instead. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**StreamFiles200Response**](StreamFiles200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of files. |  -  |
| **400** | The path parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The path requested does not exist at the supplied commit. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamFiles1

> StreamFiles200Response streamFiles1(path, projectKey, repositorySlug, at, start, limit)

Get files in directory

Retrieve a page of files from particular directory of a repository. The search is done recursively, so all files from any sub-directory of the specified directory will be returned.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamFiles1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The directory to list files for.
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The commit ID or ref (e.g. a branch or tag) to list the files at. If not specified the default branch will be used instead. (optional)
    at: at_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies StreamFiles1Request;

  try {
    const data = await api.streamFiles1(body);
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
| **path** | `string` | The directory to list files for. | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **at** | `string` | The commit ID or ref (e.g. a branch or tag) to list the files at. If not specified the default branch will be used instead. | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**StreamFiles200Response**](StreamFiles200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of files. |  -  |
| **400** | The path requested is not a directory at the supplied commit. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The path requested does not exist at the supplied commit. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamPatch

> streamPatch(projectKey, repositorySlug, until, allAncestors, since)

Get patch content at revision

Retrieve the patch content for a repository at a specified revision.   Cache headers are added to the response (only if full commit hashes are used, not in the case of short hashes).   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamPatchRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The target revision from which to generate the patch (required) (optional)
    until: until_example,
    // string | indicates whether or not to generate a patch which includes all the ancestors of the \'until\' revision. If true, the value provided by \'since\' is ignored. (optional)
    allAncestors: allAncestors_example,
    // string | The base revision from which to generate the patch. This is only applicable when \'allAncestors\' is false. If omitted the patch will represent one single commit, the \'until\'. (optional)
    since: since_example,
  } satisfies StreamPatchRequest;

  try {
    const data = await api.streamPatch(body);
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
| **until** | `string` | The target revision from which to generate the patch (required) | [Optional] [Defaults to `undefined`] |
| **allAncestors** | `string` | indicates whether or not to generate a patch which includes all the ancestors of the \&#39;until\&#39; revision. If true, the value provided by \&#39;since\&#39; is ignored. | [Optional] [Defaults to `undefined`] |
| **since** | `string` | The base revision from which to generate the patch. This is only applicable when \&#39;allAncestors\&#39; is false. If omitted the patch will represent one single commit, the \&#39;until\&#39;. | [Optional] [Defaults to `undefined`] |

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
| **200** | The patch contents from a repository. |  -  |
| **400** | The until parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamRaw

> streamRaw(path, projectKey, repositorySlug, at, markup, htmlEscape, includeHeadingId, hardwrap)

Get raw content of a file at revision

Retrieve the raw content for a file path at a specified revision.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamRawRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The file path to retrieve content from
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | A specific commit or ref to retrieve the raw content at, or the default branch if not specified (optional)
    at: at_example,
    // string | If present or \"true\", triggers the raw content to be markup-rendered and returned as HTML; otherwise, if not specified, or any value other than \"true\", the content is streamed without markup (optional)
    markup: markup_example,
    // string | (Optional) true if HTML should be escaped in the input markup, false otherwise. If not specified, the value of the markup.render.html.escape property, which is true by default, will be used (optional)
    htmlEscape: htmlEscape_example,
    // string | (Optional) true if headings should contain an ID based on the heading content. If not specified, the value of the markup.render.headerids property, which is false by default, will be used (optional)
    includeHeadingId: includeHeadingId_example,
    // string | (Optional) Whether the markup implementation should convert newlines to breaks. If not specified, the value of the markup.render.hardwrap property, which is true by default, will be used (optional)
    hardwrap: hardwrap_example,
  } satisfies StreamRawRequest;

  try {
    const data = await api.streamRaw(body);
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
| **path** | `string` | The file path to retrieve content from | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **at** | `string` | A specific commit or ref to retrieve the raw content at, or the default branch if not specified | [Optional] [Defaults to `undefined`] |
| **markup** | `string` | If present or \&quot;true\&quot;, triggers the raw content to be markup-rendered and returned as HTML; otherwise, if not specified, or any value other than \&quot;true\&quot;, the content is streamed without markup | [Optional] [Defaults to `undefined`] |
| **htmlEscape** | `string` | (Optional) true if HTML should be escaped in the input markup, false otherwise. If not specified, the value of the markup.render.html.escape property, which is true by default, will be used | [Optional] [Defaults to `undefined`] |
| **includeHeadingId** | `string` | (Optional) true if headings should contain an ID based on the heading content. If not specified, the value of the markup.render.headerids property, which is false by default, will be used | [Optional] [Defaults to `undefined`] |
| **hardwrap** | `string` | (Optional) Whether the markup implementation should convert newlines to breaks. If not specified, the value of the markup.render.hardwrap property, which is true by default, will be used | [Optional] [Defaults to `undefined`] |

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
| **200** | The raw contents from a file. |  -  |
| **400** | The path parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamRawDiff

> streamRawDiff(projectKey, repositorySlug, contextLines, srcPath, until, whitespace, since)

Get raw diff for path

Stream the raw diff between two provided revisions.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamRawDiffRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The number of context lines to include around added/removed lines in the diff (optional)
    contextLines: contextLines_example,
    // string | The source path for the file, if it was copied, moved or renamed (optional)
    srcPath: srcPath_example,
    // string | The target revision to diff to (required) (optional)
    until: until_example,
    // string | Optional whitespace flag which can be set to <code>ignore-all</code> (optional)
    whitespace: whitespace_example,
    // string | The base revision to diff from. If omitted the parent revision of the until revision is used (optional)
    since: since_example,
  } satisfies StreamRawDiffRequest;

  try {
    const data = await api.streamRawDiff(body);
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
| **contextLines** | `string` | The number of context lines to include around added/removed lines in the diff | [Optional] [Defaults to `undefined`] |
| **srcPath** | `string` | The source path for the file, if it was copied, moved or renamed | [Optional] [Defaults to `undefined`] |
| **until** | `string` | The target revision to diff to (required) | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | Optional whitespace flag which can be set to &lt;code&gt;ignore-all&lt;/code&gt; | [Optional] [Defaults to `undefined`] |
| **since** | `string` | The base revision to diff from. If omitted the parent revision of the until revision is used | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain; qs=0.1`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A raw diff between two revisions. |  -  |
| **400** | The path parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamRawDiff1

> streamRawDiff1(path, projectKey, repositorySlug, contextLines, srcPath, until, whitespace, since)

Get raw diff for path

Stream the raw diff between two provided revisions.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { StreamRawDiff1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The path to the file which should be diffed (required)
    path: path_example,
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The number of context lines to include around added/removed lines in the diff (optional)
    contextLines: contextLines_example,
    // string | The source path for the file, if it was copied, moved or renamed (optional)
    srcPath: srcPath_example,
    // string | The target revision to diff to (required) (optional)
    until: until_example,
    // string | Optional whitespace flag which can be set to <code>ignore-all</code> (optional)
    whitespace: whitespace_example,
    // string | The base revision to diff from. If omitted the parent revision of the until revision is used (optional)
    since: since_example,
  } satisfies StreamRawDiff1Request;

  try {
    const data = await api.streamRawDiff1(body);
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
| **path** | `string` | The path to the file which should be diffed (required) | [Defaults to `undefined`] |
| **projectKey** | `string` | The project key. | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **contextLines** | `string` | The number of context lines to include around added/removed lines in the diff | [Optional] [Defaults to `undefined`] |
| **srcPath** | `string` | The source path for the file, if it was copied, moved or renamed | [Optional] [Defaults to `undefined`] |
| **until** | `string` | The target revision to diff to (required) | [Optional] [Defaults to `undefined`] |
| **whitespace** | `string` | Optional whitespace flag which can be set to &lt;code&gt;ignore-all&lt;/code&gt; | [Optional] [Defaults to `undefined`] |
| **since** | `string` | The base revision to diff from. If omitted the parent revision of the until revision is used | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain; qs=0.1`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A raw diff between two revisions. |  -  |
| **400** | The until parameter was not supplied. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## synchronize

> RestRejectedRef synchronize(projectKey, repositorySlug, restRefSyncRequest)

Manual synchronization

Allows developers to apply a manual operation to bring a ref back in sync with upstream when it becomes out of sync due to conflicting changes. The following actions are supported:  - &lt;tt&gt;MERGE&lt;/tt&gt;: Merges in commits from the upstream ref. After applying this action, the   synchronized ref will be &lt;tt&gt;AHEAD&lt;/tt&gt; (as it still includes commits that do not exist   upstream.    - This action is only supported for &lt;tt&gt;DIVERGED&lt;/tt&gt; refs    - If a \&quot;commitMessage\&quot; is provided in the context, it will be used on the merge commit.      Otherwise a default message is used. - &lt;tt&gt;DISCARD&lt;/tt&gt;: &lt;i&gt;Throws away&lt;/i&gt; local changes in favour of those made upstream. This is a   &lt;i&gt;destructive&lt;/i&gt; operation where commits in the local repository are lost.    - No context entries are supported for this action    - If the upstream ref has been deleted, the local ref is deleted as well    - Otherwise, the local ref is updated to reference the same commit as upstream, even if      the update is not fast-forward (similar to a forced push)   The authenticated user must have &lt;b&gt;REPO_WRITE&lt;/b&gt; permission for the specified repository. Anonymous users cannot synchronize refs, even on public repositories. Additionally, synchronization must be &lt;i&gt;enabled&lt;/i&gt; and &lt;i&gt;available&lt;/i&gt; for the specified repository.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { SynchronizeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestRefSyncRequest (optional)
    restRefSyncRequest: ...,
  } satisfies SynchronizeRequest;

  try {
    const data = await api.synchronize(body);
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
| **restRefSyncRequest** | [RestRefSyncRequest](RestRefSyncRequest.md) |  | [Optional] |

### Return type

[**RestRejectedRef**](RestRejectedRef.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The requested action was successfully performed, and has updated the ref\&#39;s state, but the ref if is still not in sync with upstream. For example, after applying the &lt;tt&gt;MERGE&lt;/tt&gt; action, the ref will still be &lt;tt&gt;AHEAD&lt;/tt&gt; of upstream. If the action brings the ref in sync with upstream, 204 NO CONTENT is returned instead. |  -  |
| **204** | The requested action was successfully performed and the ref is now in sync with upstream. If the action updates the ref but does not bring it in sync with upstream, 200 OK is returned instead. |  -  |
| **400** | The requested synchronization action was not understood. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update refs within the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |
| **409** | Synchronization is not available or enabled for the specified repository, or the ref is already in sync with upstream. |  -  |
| **501** | The requested synchronization action was understood by the server, but the mechanism to apply it has not been implemented. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testWebhook1

> any testWebhook1(projectKey, repositorySlug, webhookId, sslVerificationRequired, url, restWebhookCredentials)

Test webhook

Test connectivity to a specific endpoint.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { TestWebhook1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number (optional)
    webhookId: 56,
    // string | Whether SSL verification is required for the specified webhook URL. Default value is  <code>true</code>. (optional)
    sslVerificationRequired: sslVerificationRequired_example,
    // string | The url in which to connect to (optional)
    url: url_example,
    // RestWebhookCredentials | Basic authentication credentials, if required. (optional)
    restWebhookCredentials: ...,
  } satisfies TestWebhook1Request;

  try {
    const data = await api.testWebhook1(body);
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
| **webhookId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **sslVerificationRequired** | `string` | Whether SSL verification is required for the specified webhook URL. Default value is  &lt;code&gt;true&lt;/code&gt;. | [Optional] [Defaults to `undefined`] |
| **url** | `string` | The url in which to connect to | [Optional] [Defaults to `undefined`] |
| **restWebhookCredentials** | [RestWebhookCredentials](RestWebhookCredentials.md) | Basic authentication credentials, if required. | [Optional] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A webhook. |  -  |
| **401** | The currently authenticated user has insufficient permissions to test a connection. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unReact

> unReact(projectKey, commentId, commitId, emoticon, repositorySlug)

Remove a reaction from comment

Remove an emoticon reaction from a comment

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { UnReactRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The comment id
    commentId: commentId_example,
    // string | The commit id
    commitId: commitId_example,
    // string | The emoticon to remove
    emoticon: emoticon_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies UnReactRequest;

  try {
    const data = await api.unReact(body);
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
| **commentId** | `string` | The comment id | [Defaults to `undefined`] |
| **commitId** | `string` | The commit id | [Defaults to `undefined`] |
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


## unwatch

> unwatch(projectKey, commitId, repositorySlug)

Stop watching commit

Remove the authenticated user as a watcher for the specified commit.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository containing the commit to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { UnwatchRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies UnwatchRequest;

  try {
    const data = await api.unwatch(body);
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
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

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
| **204** | The user is no longer watching the commit. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request. |  -  |
| **404** | The specified project, repository or commit does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unwatch2

> unwatch2(projectKey, repositorySlug)

Stop watching repository

Remove the authenticated user as a watcher for the specified repository.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { Unwatch2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies Unwatch2Request;

  try {
    const data = await api.unwatch2(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The user is no longer watching the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateComment

> RestComment updateComment(projectKey, commentId, commitId, repositorySlug, restComment)

Update a commit comment

Update a comment, with the following restrictions:  - only the author of the comment may update the &lt;i&gt;text&lt;/i&gt; of the comment - only the author of the comment or repository admins and above may update the other   fields of a comment   &lt;strong&gt;Note:&lt;/strong&gt; the supplied supplied JSON object must contain a &lt;code&gt;version&lt;/code&gt; that must match the server\&#39;s version of the comment or the update will fail. To determine the current version of the comment, the comment should be fetched from the server prior to the update. Look for the \&#39;version\&#39; attribute in the returned JSON structure.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository that the commit is in to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { UpdateCommentRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The ID of the comment to retrieve
    commentId: commentId_example,
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
    // RestComment | The comment to update (optional)
    restComment: ...,
  } satisfies UpdateCommentRequest;

  try {
    const data = await api.updateComment(body);
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
| **commentId** | `string` | The ID of the comment to retrieve | [Defaults to `undefined`] |
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |
| **restComment** | [RestComment](RestComment.md) | The comment to update | [Optional] |

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
| **401** | The currently authenticated user has insufficient permissions to view the commit, update the comment or watch the commit. |  -  |
| **404** | Unable to find the supplied project, repository, commit or comment. The missing entity will be specified in the error details. |  -  |
| **409** | The comment version supplied does not match the current version or the repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDefaultTask1

> RestDefaultTask updateDefaultTask1(projectKey, repositorySlug, taskId, restDefaultTaskRequest)

Update a default task

Updates a default task for the supplied repository.  The authenticated user must have **REPO_ADMIN** permission for this repository to call the resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { UpdateDefaultTask1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | The ID of the default task
    taskId: taskId_example,
    // RestDefaultTaskRequest | The task to be updated
    restDefaultTaskRequest: ...,
  } satisfies UpdateDefaultTask1Request;

  try {
    const data = await api.updateDefaultTask1(body);
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
| **taskId** | `string` | The ID of the default task | [Defaults to `undefined`] |
| **restDefaultTaskRequest** | [RestDefaultTaskRequest](RestDefaultTaskRequest.md) | The task to be updated | |

### Return type

[**RestDefaultTask**](RestDefaultTask.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The default task |  -  |
| **400** | One or more of the following error cases occurred (check the error message for more details):    - the provided taskId does not exist- the description is empty- the sourceMatcher or targetMatcher is invalid |  -  |
| **401** | The currently authenticated user has insufficient permissions to add a default task |  -  |
| **404** | The specified repository does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePullRequestSettings1

> RestRepositoryPullRequestSettings updatePullRequestSettings1(projectKey, repositorySlug, restRepositoryPullRequestSettings)

Update pull request settings

Update the pull request settings for the context repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the context repository to call this resource.   This resource will call all RestFragments that are registered with the key &lt;strong&gt;bitbucket.repository.settings.pullRequests&lt;/strong&gt;. If any fragment fails validations by returning a non-empty Map of errors, then no fragments will execute.   Only the settings that should be updated need to be included in the request.   The property keys for the settings that are bundled with the application are   - mergeConfig - the merge strategy configuration for pull requests - requiredApprovers - (Deprecated, please use com.atlassian.bitbucket.server.bundled-hooks.requiredApproversMergeHook instead) the number of approvals required on a pull request for it to be mergeable, or 0 to disable the merge check - com.atlassian.bitbucket.server.bundled-hooks.requiredApproversMergeHook - a json map containing the keys \&#39;enabled\&#39; (a boolean to enable or disable this merge check) and \&#39;count\&#39; (an integer to set the number of required approvals) - requiredAllApprovers - whether or not all approvers must approve a pull request for it to be mergeable - requiredAllTasksComplete - whether or not all tasks on a pull request need to be completed for it to be mergeable - requiredSuccessfulBuilds - (Deprecated, please use com.atlassian.bitbucket.server.bitbucket-build.requiredBuildsMergeCheck instead) the number of successful builds on a pull request for it to be mergeable, or 0 to disable the merge check - com.atlassian.bitbucket.server.bitbucket-build.requiredBuildsMergeCheck - a json map containing the keys \&#39;enabled\&#39; (a boolean to enable or disable this merge check) and \&#39;count\&#39; (an integer to set the number of required builds)   &lt;strong&gt;Merge strategy configuration deletion:&lt;/strong&gt;  An explicitly set pull request merge strategy configuration can be deleted by POSTing a document with an empty \&quot;mergeConfig\&quot; attribute. i.e:    &#x60;&#x60;&#x60;{      \&quot;mergeConfig\&quot;: {      }  }  &#x60;&#x60;&#x60;  Upon completion of this request, the effective configuration will be:   - The configuration set for this repository\&#39;s SCM type as set at the project level, if present, otherwise - the configuration set for this repository\&#39;s SCM type as set at the instance level, if present, otherwise - the default configuration for this repository\&#39;s SCM type   

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { UpdatePullRequestSettings1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestRepositoryPullRequestSettings | The updated settings. (optional)
    restRepositoryPullRequestSettings: ...,
  } satisfies UpdatePullRequestSettings1Request;

  try {
    const data = await api.updatePullRequestSettings1(body);
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
| **restRepositoryPullRequestSettings** | [RestRepositoryPullRequestSettings](RestRepositoryPullRequestSettings.md) | The updated settings. | [Optional] |

### Return type

[**RestRepositoryPullRequestSettings**](RestRepositoryPullRequestSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository pull request settings for the context repository. |  -  |
| **400** | The repository pull request settings were not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWebhook1

> RestWebhook updateWebhook1(projectKey, webhookId, repositorySlug, restWebhook)

Update webhook

Update an existing webhook.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { UpdateWebhook1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | Id of the existing webhook
    webhookId: webhookId_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestWebhook | The representation of the updated values for the webhook (optional)
    restWebhook: ...,
  } satisfies UpdateWebhook1Request;

  try {
    const data = await api.updateWebhook1(body);
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
| **webhookId** | `string` | Id of the existing webhook | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug. | [Defaults to `undefined`] |
| **restWebhook** | [RestWebhook](RestWebhook.md) | The representation of the updated values for the webhook | [Optional] |

### Return type

[**RestWebhook**](RestWebhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A webhook. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update a webhook in this repository. |  -  |
| **404** | The repository does not exist, or the webhook does not exist in the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## watch

> watch(projectKey, commitId, repositorySlug)

Watch commit

Add the authenticated user as a watcher for the specified commit.  The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository containing the commit to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { WatchRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The <i>full ID</i> of the commit within the repository
    commitId: commitId_example,
    // string | The repository slug
    repositorySlug: repositorySlug_example,
  } satisfies WatchRequest;

  try {
    const data = await api.watch(body);
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
| **commitId** | `string` | The &lt;i&gt;full ID&lt;/i&gt; of the commit within the repository | [Defaults to `undefined`] |
| **repositorySlug** | `string` | The repository slug | [Defaults to `undefined`] |

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
| **204** | The user is now watching the commit. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the pull request |  -  |
| **404** | The specified project, repository or commit does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## watch2

> watch2(projectKey, repositorySlug, restRepository)

Watch repository

Add the authenticated user as a watcher for the specified repository.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the repository to call this resource.

### Example

```ts
import {
  Configuration,
  RepositoryApi,
} from 'bitbucket-api';
import type { Watch2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new RepositoryApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestRepository | The repository to watch. (optional)
    restRepository: ...,
  } satisfies Watch2Request;

  try {
    const data = await api.watch2(body);
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
| **restRepository** | [RestRepository](RestRepository.md) | The repository to watch. | [Optional] |

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
| **204** | The user is now watching the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

