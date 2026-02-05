# ProjectApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addDefaultTask**](ProjectApi.md#adddefaulttask) | **POST** /default-tasks/latest/projects/{projectKey}/tasks | Add a default task |
| [**create3**](ProjectApi.md#create3) | **POST** /api/latest/projects/{projectKey}/settings-restriction | Enforce project restriction |
| [**createProject**](ProjectApi.md#createproject) | **POST** /api/latest/projects | Create a new project |
| [**createRepository**](ProjectApi.md#createrepository) | **POST** /api/latest/projects/{projectKey}/repos | Create repository |
| [**createRestrictions**](ProjectApi.md#createrestrictions) | **POST** /branch-permissions/latest/projects/{projectKey}/restrictions | Create multiple ref restrictions |
| [**createWebhook**](ProjectApi.md#createwebhook) | **POST** /api/latest/projects/{projectKey}/webhooks | Create webhook |
| [**delete4**](ProjectApi.md#delete4) | **DELETE** /api/latest/projects/{projectKey}/settings/auto-merge | Delete pull request auto-merge settings |
| [**delete9**](ProjectApi.md#delete9) | **DELETE** /api/latest/projects/{projectKey}/settings-restriction | Stop enforcing project restriction |
| [**deleteAllDefaultTasks**](ProjectApi.md#deletealldefaulttasks) | **DELETE** /default-tasks/latest/projects/{projectKey}/tasks | Deletes all default tasks for the project |
| [**deleteAutoDeclineSettings**](ProjectApi.md#deleteautodeclinesettings) | **DELETE** /api/latest/projects/{projectKey}/settings/auto-decline | Delete auto decline settings |
| [**deleteDefaultTask**](ProjectApi.md#deletedefaulttask) | **DELETE** /default-tasks/latest/projects/{projectKey}/tasks/{taskId} | Delete a specific default task |
| [**deleteProject**](ProjectApi.md#deleteproject) | **DELETE** /api/latest/projects/{projectKey} | Delete project |
| [**deleteRepository**](ProjectApi.md#deleterepository) | **DELETE** /api/latest/projects/{projectKey}/repos/{repositorySlug} | Delete repository |
| [**deleteRestriction**](ProjectApi.md#deleterestriction) | **DELETE** /branch-permissions/latest/projects/{projectKey}/restrictions/{id} | Delete a ref restriction |
| [**deleteWebhook**](ProjectApi.md#deletewebhook) | **DELETE** /api/latest/projects/{projectKey}/webhooks/{webhookId} | Delete webhook |
| [**disableHook**](ProjectApi.md#disablehook) | **DELETE** /api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled | Disable repository hook |
| [**enableHook**](ProjectApi.md#enablehook) | **PUT** /api/latest/projects/{projectKey}/settings/hooks/{hookKey}/enabled | Enable repository hook |
| [**findWebhooks**](ProjectApi.md#findwebhooks) | **GET** /api/latest/projects/{projectKey}/webhooks | Find webhooks |
| [**forkRepository**](ProjectApi.md#forkrepository) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug} | Fork repository |
| [**get4**](ProjectApi.md#get4) | **GET** /api/latest/projects/{projectKey}/settings/auto-merge | Get pull request auto-merge settings |
| [**get7**](ProjectApi.md#get7) | **GET** /api/latest/projects/{projectKey}/settings-restriction | Get enforcing project setting |
| [**getAll**](ProjectApi.md#getall) | **GET** /api/latest/projects/{projectKey}/settings-restriction/all | Get all enforcing project settings |
| [**getAutoDeclineSettings**](ProjectApi.md#getautodeclinesettings) | **GET** /api/latest/projects/{projectKey}/settings/auto-decline | Get auto decline settings |
| [**getAvatar**](ProjectApi.md#getavatar) | **GET** /api/latest/hooks/{hookKey}/avatar | Get project avatar |
| [**getConfigurations**](ProjectApi.md#getconfigurations) | **GET** /api/latest/projects/{projectKey}/hook-scripts | Get configured hook scripts |
| [**getDefaultBranch2**](ProjectApi.md#getdefaultbranch2) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch | Get repository default branch |
| [**getDefaultTasks**](ProjectApi.md#getdefaulttasks) | **GET** /default-tasks/latest/projects/{projectKey}/tasks | Get a page of default tasks |
| [**getForkedRepositories**](ProjectApi.md#getforkedrepositories) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/forks | Get repository forks |
| [**getGroupsWithAnyPermission1**](ProjectApi.md#getgroupswithanypermission1) | **GET** /api/latest/projects/{projectKey}/permissions/groups | Get groups with permission to project |
| [**getGroupsWithoutAnyPermission1**](ProjectApi.md#getgroupswithoutanypermission1) | **GET** /api/latest/projects/{projectKey}/permissions/groups/none | Get groups without project permission |
| [**getLatestInvocation**](ProjectApi.md#getlatestinvocation) | **GET** /api/latest/projects/{projectKey}/webhooks/{webhookId}/latest | Get last webhook invocation details |
| [**getProject**](ProjectApi.md#getproject) | **GET** /api/latest/projects/{projectKey} | Get a project |
| [**getProjectAvatar**](ProjectApi.md#getprojectavatar) | **GET** /api/latest/projects/{projectKey}/avatar.png | Get avatar for project |
| [**getProjects**](ProjectApi.md#getprojects) | **GET** /api/latest/projects | Get projects |
| [**getPullRequestSettings**](ProjectApi.md#getpullrequestsettings) | **GET** /api/latest/projects/{projectKey}/settings/pull-requests/{scmId} | Get merge strategy |
| [**getRelatedRepositories**](ProjectApi.md#getrelatedrepositories) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/related | Get related repository |
| [**getRepositories**](ProjectApi.md#getrepositories) | **GET** /api/latest/projects/{projectKey}/repos | Get repositories for project |
| [**getRepository**](ProjectApi.md#getrepository) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug} | Get repository |
| [**getRepositoryHook**](ProjectApi.md#getrepositoryhook) | **GET** /api/latest/projects/{projectKey}/settings/hooks/{hookKey} | Get a repository hook |
| [**getRepositoryHooks**](ProjectApi.md#getrepositoryhooks) | **GET** /api/latest/projects/{projectKey}/settings/hooks | Get repository hooks |
| [**getRestriction**](ProjectApi.md#getrestriction) | **GET** /branch-permissions/latest/projects/{projectKey}/restrictions/{id} | Get a ref restriction |
| [**getRestrictions**](ProjectApi.md#getrestrictions) | **GET** /branch-permissions/latest/projects/{projectKey}/restrictions | Search for ref restrictions |
| [**getSettings**](ProjectApi.md#getsettings) | **GET** /api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings | Get repository hook settings |
| [**getStatistics**](ProjectApi.md#getstatistics) | **GET** /api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics | Get webhook statistics |
| [**getStatisticsSummary**](ProjectApi.md#getstatisticssummary) | **GET** /api/latest/projects/{projectKey}/webhooks/{webhookId}/statistics/summary | Get webhook statistics summary |
| [**getUsersWithAnyPermission1**](ProjectApi.md#getuserswithanypermission1) | **GET** /api/latest/projects/{projectKey}/permissions/users | Get users with permission to project |
| [**getUsersWithoutPermission**](ProjectApi.md#getuserswithoutpermission) | **GET** /api/latest/projects/{projectKey}/permissions/users/none | Get users without project permission |
| [**getWebhook**](ProjectApi.md#getwebhook) | **GET** /api/latest/projects/{projectKey}/webhooks/{webhookId} | Get webhook |
| [**hasAllUserPermission**](ProjectApi.md#hasalluserpermission) | **GET** /api/latest/projects/{projectKey}/permissions/{permission}/all | Check default project permission |
| [**modifyAllUserPermission**](ProjectApi.md#modifyalluserpermission) | **POST** /api/latest/projects/{projectKey}/permissions/{permission}/all | Grant project permission |
| [**removeConfiguration**](ProjectApi.md#removeconfiguration) | **DELETE** /api/latest/projects/{projectKey}/hook-scripts/{scriptId} | Remove a hook script |
| [**retryCreateRepository**](ProjectApi.md#retrycreaterepository) | **POST** /api/latest/projects/{projectKey}/repos/{repositorySlug}/recreate | Retry repository creation |
| [**revokePermissions**](ProjectApi.md#revokepermissions) | **DELETE** /api/latest/projects/{projectKey}/permissions | Revoke project permissions |
| [**revokePermissionsForGroup1**](ProjectApi.md#revokepermissionsforgroup1) | **DELETE** /api/latest/projects/{projectKey}/permissions/groups | Revoke group project permission |
| [**revokePermissionsForUser1**](ProjectApi.md#revokepermissionsforuser1) | **DELETE** /api/latest/projects/{projectKey}/permissions/users | Revoke user project permission |
| [**searchPermissions**](ProjectApi.md#searchpermissions) | **GET** /api/latest/projects/{projectKey}/permissions/search | Search project permissions |
| [**set**](ProjectApi.md#set) | **PUT** /api/latest/projects/{projectKey}/settings/auto-merge | Create or update the pull request auto-merge settings |
| [**setAutoDeclineSettings**](ProjectApi.md#setautodeclinesettings) | **PUT** /api/latest/projects/{projectKey}/settings/auto-decline | Create/Update auto decline settings |
| [**setConfiguration**](ProjectApi.md#setconfiguration) | **PUT** /api/latest/projects/{projectKey}/hook-scripts/{scriptId} | Create/update a hook script |
| [**setDefaultBranch2**](ProjectApi.md#setdefaultbranch2) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug}/default-branch | Update default branch for repository |
| [**setPermissionForGroups1**](ProjectApi.md#setpermissionforgroups1) | **PUT** /api/latest/projects/{projectKey}/permissions/groups | Update group project permission |
| [**setPermissionForUsers1**](ProjectApi.md#setpermissionforusers1) | **PUT** /api/latest/projects/{projectKey}/permissions/users | Update user project permission |
| [**setSettings**](ProjectApi.md#setsettings) | **PUT** /api/latest/projects/{projectKey}/settings/hooks/{hookKey}/settings | Update repository hook settings |
| [**streamContributing**](ProjectApi.md#streamcontributing) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/contributing | Get repository contributing guidelines |
| [**streamLicense**](ProjectApi.md#streamlicense) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/license | Get repository license |
| [**streamReadme**](ProjectApi.md#streamreadme) | **GET** /api/latest/projects/{projectKey}/repos/{repositorySlug}/readme | Get repository readme |
| [**testWebhook**](ProjectApi.md#testwebhook) | **POST** /api/latest/projects/{projectKey}/webhooks/test | Test webhook |
| [**updateDefaultTask**](ProjectApi.md#updatedefaulttask) | **PUT** /default-tasks/latest/projects/{projectKey}/tasks/{taskId} | Update a default task |
| [**updateProject**](ProjectApi.md#updateproject) | **PUT** /api/latest/projects/{projectKey} | Update project |
| [**updatePullRequestSettings**](ProjectApi.md#updatepullrequestsettings) | **POST** /api/latest/projects/{projectKey}/settings/pull-requests/{scmId} | Update merge strategy |
| [**updateRepository**](ProjectApi.md#updaterepository) | **PUT** /api/latest/projects/{projectKey}/repos/{repositorySlug} | Update repository |
| [**updateWebhook**](ProjectApi.md#updatewebhook) | **PUT** /api/latest/projects/{projectKey}/webhooks/{webhookId} | Update webhook |
| [**uploadAvatar**](ProjectApi.md#uploadavatar) | **POST** /api/latest/projects/{projectKey}/avatar.png | Update project avatar |



## addDefaultTask

> RestDefaultTask addDefaultTask(projectKey, restDefaultTaskRequest)

Add a default task

Creates a default task for the project.  The authenticated user must have **PROJECT_ADMIN** permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { AddDefaultTaskRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestDefaultTaskRequest | The task to be added
    restDefaultTaskRequest: ...,
  } satisfies AddDefaultTaskRequest;

  try {
    const data = await api.addDefaultTask(body);
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
| **404** | The specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## create3

> RestProjectSettingsRestriction create3(projectKey, restProjectSettingsRestrictionRequest)

Enforce project restriction

Create a new project settings restriction for the given project.  The authenticated user must have **PROJECT_ADMIN** permission for the target project to create a settings restriction.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { Create3Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestProjectSettingsRestrictionRequest | The project settings restriction to create
    restProjectSettingsRestrictionRequest: ...,
  } satisfies Create3Request;

  try {
    const data = await api.create3(body);
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
| **restProjectSettingsRestrictionRequest** | [RestProjectSettingsRestrictionRequest](RestProjectSettingsRestrictionRequest.md) | The project settings restriction to create | |

### Return type

[**RestProjectSettingsRestriction**](RestProjectSettingsRestriction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The settings restriction was successfully created |  -  |
| **400** | The settings restriction was not created because the request was invalid. Possible issues include:  - The namespace was not provided, or longer than 255 characters - The featureKey was not provided, or longer than 255 characters - The provided componentKey was fewer than 2 characters, or longer than 255 characters |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a settings restriction |  -  |
| **404** | The specified project does not exist |  -  |
| **409** | A settings restriction with the same namespace, featureKey and componentKey already exists on this project |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createProject

> RestProject createProject(restProject)

Create a new project

Create a new project.   To include a custom avatar for the project, the project definition should contain an additional attribute with the key &lt;code&gt;avatar&lt;/code&gt; and the value a data URI containing Base64-encoded image data. The URI should be in the following format: &lt;pre&gt;    data:(content type, e.g. image/png);base64,(data) &lt;/pre&gt;If the data is not Base64-encoded, or if a character set is defined in the URI, or the URI is otherwise invalid, &lt;em&gt;project creation will fail&lt;/em&gt;.   The authenticated user must have &lt;strong&gt;PROJECT_CREATE&lt;/strong&gt; permission to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { CreateProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // RestProject | The project. (optional)
    restProject: ...,
  } satisfies CreateProjectRequest;

  try {
    const data = await api.createProject(body);
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
| **restProject** | [RestProject](RestProject.md) | The project. | [Optional] |

### Return type

[**RestProject**](RestProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created project. |  -  |
| **400** | The currently authenticated user has insufficient permissions to update the project. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a project. |  -  |
| **409** | The project key or name is already in use. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRepository

> RestRepository createRepository(projectKey, restRepository)

Create repository

Create a new repository. Requires an existing project in which this repository will be created. The only parameters which will be used are name and scmId.   The authenticated user must have &lt;strong&gt;REPO_CREATE&lt;/strong&gt; permission or higher, for the context project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { CreateRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestRepository | The repository (optional)
    restRepository: ...,
  } satisfies CreateRepositoryRequest;

  try {
    const data = await api.createRepository(body);
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
| **restRepository** | [RestRepository](RestRepository.md) | The repository | [Optional] |

### Return type

[**RestRepository**](RestRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created repository. |  -  |
| **400** | The repository was not created due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a repository. |  -  |
| **409** | A repository with same name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRestrictions

> RestRefRestriction createRestrictions(projectKey, restRestrictionRequest)

Create multiple ref restrictions

Allows creating multiple restrictions at once.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { CreateRestrictionsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // Array<RestRestrictionRequest> | The request containing a list of the details of the restrictions to create. (optional)
    restRestrictionRequest: ...,
  } satisfies CreateRestrictionsRequest;

  try {
    const data = await api.createRestrictions(body);
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


## createWebhook

> RestWebhook createWebhook(projectKey, restWebhook)

Create webhook

Create a webhook for the project specified via the URL.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { CreateWebhookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestWebhook | The webhook to be created for this project. (optional)
    restWebhook: ...,
  } satisfies CreateWebhookRequest;

  try {
    const data = await api.createWebhook(body);
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
| **restWebhook** | [RestWebhook](RestWebhook.md) | The webhook to be created for this project. | [Optional] |

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
| **401** | The currently authenticated user has insufficient permissions to create webhooks in the project. |  -  |
| **404** | The project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete4

> delete4(projectKey)

Delete pull request auto-merge settings

Deletes pull request auto-merge settings for the supplied project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { Delete4Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
  } satisfies Delete4Request;

  try {
    const data = await api.delete4(body);
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
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## delete9

> delete9(projectKey, namespace, featureKey, componentKey)

Stop enforcing project restriction

Delete a specified project settings restriction.  If a restriction does not exist for the specified project, namespace, featureKey, and componentKey, the request will be ignored and a 204 response will be returned.  The authenticated user must have **PROJECT_ADMIN** permission for the target project to delete a settings restriction.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { Delete9Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | A namespace used to identify the provider of the feature
    namespace: namespace_example,
    // string | A key to uniquely identify the feature within the provided namespace
    featureKey: featureKey_example,
    // string | A key to uniquely identify individually restrictable subcomponents of a feature within the provided feature key and namespace (optional)
    componentKey: componentKey_example,
  } satisfies Delete9Request;

  try {
    const data = await api.delete9(body);
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
| **namespace** | `string` | A namespace used to identify the provider of the feature | [Defaults to `undefined`] |
| **featureKey** | `string` | A key to uniquely identify the feature within the provided namespace | [Defaults to `undefined`] |
| **componentKey** | `string` | A key to uniquely identify individually restrictable subcomponents of a feature within the provided feature key and namespace | [Optional] [Defaults to `undefined`] |

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
| **204** | The specified settings restriction was successfully deleted or there were no existing restrictions that match the specified criteria. |  -  |
| **400** | The settings restriction was not deleted because the request was invalid. Possible issues include:  - The namespace was not provided, or longer than 255 characters - The featureKey was not provided, or longer than 255 characters - The provided componentKey was fewer than 2 characters, or longer than 255 characters |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete a settings restriction |  -  |
| **404** | The specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAllDefaultTasks

> deleteAllDefaultTasks(projectKey)

Deletes all default tasks for the project

Delete all the default tasks for the supplied project  The authenticated user must have **PROJECT_ADMIN** permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { DeleteAllDefaultTasksRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
  } satisfies DeleteAllDefaultTasksRequest;

  try {
    const data = await api.deleteAllDefaultTasks(body);
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
| **404** | The specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAutoDeclineSettings

> deleteAutoDeclineSettings(projectKey)

Delete auto decline settings

Delete auto decline settings for the supplied project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { DeleteAutoDeclineSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
  } satisfies DeleteAutoDeclineSettingsRequest;

  try {
    const data = await api.deleteAutoDeclineSettings(body);
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
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDefaultTask

> deleteDefaultTask(projectKey, taskId)

Delete a specific default task

Delete a specific default task for a project.  The authenticated user must have **PROJECT_ADMIN** permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { DeleteDefaultTaskRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the default task
    taskId: taskId_example,
  } satisfies DeleteDefaultTaskRequest;

  try {
    const data = await api.deleteDefaultTask(body);
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
| **404** | The specified project or task does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProject

> deleteProject(projectKey)

Delete project

Delete the project matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt;.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { DeleteProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
  } satisfies DeleteProjectRequest;

  try {
    const data = await api.deleteProject(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | The project matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt; was deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the project. |  -  |
| **404** | The specified project does not exist. |  -  |
| **409** | The project can not be deleted as it contains repositories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRepository

> deleteRepository(projectKey, repositorySlug)

Delete repository

Schedule the repository matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt; and &lt;strong&gt;repositorySlug&lt;/strong&gt; to be deleted.   The authenticated user must have sufficient permissions specified by the repository delete policy to call this resource. The default permission required is &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { DeleteRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies DeleteRepositoryRequest;

  try {
    const data = await api.deleteRepository(body);
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
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | The repository has been scheduled for deletion. |  -  |
| **204** | No repository matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt; and &lt;strong&gt;repositorySlug&lt;/strong&gt; was found. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete the repository. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRestriction

> deleteRestriction(projectKey, id)

Delete a ref restriction

Deletes a restriction as specified by a restriction id.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission or higher to call this resource. Only authenticated users may call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { DeleteRestrictionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The restriction id.
    id: id_example,
  } satisfies DeleteRestrictionRequest;

  try {
    const data = await api.deleteRestriction(body);
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


## deleteWebhook

> deleteWebhook(projectKey, webhookId)

Delete webhook

Delete a webhook for the project specified via the URL.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { DeleteWebhookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the webhook to be deleted.
    webhookId: webhookId_example,
  } satisfies DeleteWebhookRequest;

  try {
    const data = await api.deleteWebhook(body);
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
| **204** | The webhook for the project has been deleted. |  -  |
| **401** | The currently authenticated user has insufficient permissions to delete webhooks in the project. |  -  |
| **404** | The specified project does not exist, or webhook does not exist in this project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disableHook

> RestRepositoryHook disableHook(projectKey, hookKey)

Disable repository hook

Disable a repository hook for this project.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { DisableHookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
  } satisfies DisableHookRequest;

  try {
    const data = await api.disableHook(body);
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
| **404** | The specified project or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## enableHook

> RestRepositoryHook enableHook(projectKey, hookKey, contentLength)

Enable repository hook

Enable a repository hook for this project and optionally apply new configuration.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.   A JSON document may be provided to use as the settings for the hook. These structure and validity of the document is decided by the plugin providing the hook.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { EnableHookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
    // number | The content length. (optional)
    contentLength: 789,
  } satisfies EnableHookRequest;

  try {
    const data = await api.enableHook(body);
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
| **contentLength** | `number` | The content length. | [Optional] [Defaults to `undefined`] |

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
| **400** | The settings specified are invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions to enable the hook. |  -  |
| **404** | The specified project or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findWebhooks

> findWebhooks(projectKey, event, statistics)

Find webhooks

Find webhooks in this project.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { FindWebhooksRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | List of <code>com.atlassian.webhooks.WebhookEvent</code> IDs to filter for (optional)
    event: event_example,
    // boolean | <code>true</code> if statistics should be provided for all found webhooks (optional)
    statistics: true,
  } satisfies FindWebhooksRequest;

  try {
    const data = await api.findWebhooks(body);
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
| **401** | The currently authenticated user has insufficient permissions to find webhooks in the project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## forkRepository

> RestRepository forkRepository(projectKey, repositorySlug, restRepository)

Fork repository

Create a new repository forked from an existing repository.   The JSON body for this &lt;code&gt;POST&lt;/code&gt; is not required to contain &lt;i&gt;any&lt;/i&gt; properties. Even the name may be omitted. The following properties will be used, if provided:   - &lt;code&gt;\&quot;name\&quot;:\&quot;Fork name\&quot;&lt;/code&gt; - Specifies the forked repository\&#39;s name    - Defaults to the name of the origin repository if not specified - &lt;code&gt;\&quot;defaultBranch\&quot;:\&quot;main\&quot;&lt;/code&gt; - Specifies the forked repository\&#39;s default branch   - Defaults to the origin repository\&#39;s default branch if not specified - &lt;code&gt;\&quot;project\&quot;:{\&quot;key\&quot;:\&quot;TARGET_KEY\&quot;}&lt;/code&gt; - Specifies the forked repository\&#39;s target project by key   - Defaults to the current user\&#39;s personal project if not specified   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository and &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; on the target project to call this resource. Note that users &lt;i&gt;always&lt;/i&gt; have &lt;b&gt;PROJECT_ADMIN&lt;/b&gt; permission on their personal projects.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { ForkRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestRepository | The rest fork. (optional)
    restRepository: ...,
  } satisfies ForkRepositoryRequest;

  try {
    const data = await api.forkRepository(body);
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
| **restRepository** | [RestRepository](RestRepository.md) | The rest fork. | [Optional] |

### Return type

[**RestRepository**](RestRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The newly created fork. |  -  |
| **400** | A validation error prevented the fork from being created. Possible validation errors include: The name or slug for the fork collides with another repository in the target project; an SCM type was specified in the JSON body; a project was specified in the JSON body without a \&quot;key\&quot; property. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a fork. |  -  |
| **404** | The specified repository does not exist, or, if a target project was specified, the target project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get4

> RestAutoMergeRestrictedSettings get4(projectKey)

Get pull request auto-merge settings

Retrieves the pull request auto-merge settings for the supplied project. Default settings will be returned if no explicit settings have been set for the project  The authenticated user must have &lt;strong&gt;PROJECT_VIEW&lt;/strong&gt; permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { Get4Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
  } satisfies Get4Request;

  try {
    const data = await api.get4(body);
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
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## get7

> RestProjectSettingsRestriction get7(projectKey, namespace, featureKey, componentKey)

Get enforcing project setting

Get a specified project settings restriction for the given namespace, feature key and component key. Note that not providing the component key will **not** return restrictions for the namespace and feature key with a component key set.  The authenticated user must have **PROJECT_VIEW** permission for the target project to retrieve a settings restriction.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { Get7Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The namespace used to identify the provider of the feature
    namespace: namespace_example,
    // string | The feature key to uniquely identify the feature within the provided namespace
    featureKey: featureKey_example,
    // string | The component key to uniquely identify individually restrictable subcomponents of a feature within the provided feature key and namespace (optional)
    componentKey: componentKey_example,
  } satisfies Get7Request;

  try {
    const data = await api.get7(body);
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
| **namespace** | `string` | The namespace used to identify the provider of the feature | [Defaults to `undefined`] |
| **featureKey** | `string` | The feature key to uniquely identify the feature within the provided namespace | [Defaults to `undefined`] |
| **componentKey** | `string` | The component key to uniquely identify individually restrictable subcomponents of a feature within the provided feature key and namespace | [Optional] [Defaults to `undefined`] |

### Return type

[**RestProjectSettingsRestriction**](RestProjectSettingsRestriction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The settings restriction associated with the provided namespace and feature key |  -  |
| **400** | The settings restriction could not be retrieved because the provided parameters were invalid. Possible issues include:  - The namespace was not provided, or longer than 255 characters - The featureKey was not provided, or longer than 255 characters - The provided componentKey was fewer than 2 characters, or longer than 255 characters |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve a settings restriction |  -  |
| **404** | The specified project, or settings restriction does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAll

> GetAll200Response getAll(projectKey, namespace, featureKey, start, limit)

Get all enforcing project settings

Get all project settings restrictions for the given namespace and feature key, including those with a component key set.  The authenticated user must have **PROJECT_VIEW** permission for the target project to retrieve a settings restrictions.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetAllRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | A namespace used to identify the provider of the feature
    namespace: namespace_example,
    // string | A key to uniquely identify the feature within the provided namespace
    featureKey: featureKey_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetAllRequest;

  try {
    const data = await api.getAll(body);
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
| **namespace** | `string` | A namespace used to identify the provider of the feature | [Defaults to `undefined`] |
| **featureKey** | `string` | A key to uniquely identify the feature within the provided namespace | [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAll200Response**](GetAll200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of settings restrictions associated with the provided namespace and feature key |  -  |
| **400** | The settings restrictions could not be retrieved because the provided parameters were invalid. Possible issues include:  - The namespace was not provided, or longer than 255 characters - The featureKey was not provided, or longer than 255 characters |  -  |
| **401** | The currently authenticated user has insufficient permissions to retrieve project settings restrictions |  -  |
| **404** | The specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAutoDeclineSettings

> RestAutoDeclineSettings getAutoDeclineSettings(projectKey)

Get auto decline settings

Retrieves the auto decline settings for the supplied project. Default settings are returned if no explicit settings have been set for the project.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetAutoDeclineSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
  } satisfies GetAutoDeclineSettingsRequest;

  try {
    const data = await api.getAutoDeclineSettings(body);
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
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAvatar

> getAvatar(hookKey, version)

Get project avatar

Retrieve the avatar for the project matching the supplied &lt;strong&gt;moduleKey&lt;/strong&gt;.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetAvatarRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The complete module key of the hook module.
    hookKey: hookKey_example,
    // string | (optional) Version used for HTTP caching only - any non-blank version will result in a large max-age Cache-Control header. Note that this does not affect the Last-Modified header. (optional)
    version: version_example,
  } satisfies GetAvatarRequest;

  try {
    const data = await api.getAvatar(body);
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
| **hookKey** | `string` | The complete module key of the hook module. | [Defaults to `undefined`] |
| **version** | `string` | (optional) Version used for HTTP caching only - any non-blank version will result in a large max-age Cache-Control header. Note that this does not affect the Last-Modified header. | [Optional] [Defaults to `undefined`] |

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
| **200** | The avatar of the project matching the supplied &lt;strong&gt;moduleKey&lt;/strong&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConfigurations

> GetConfigurations200Response getConfigurations(projectKey, start, limit)

Get configured hook scripts

Return a page of hook scripts configured for the specified project.   This endpoint requires **PROJECT_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetConfigurationsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetConfigurationsRequest;

  try {
    const data = await api.getConfigurations(body);
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
| **401** | The currently authenticated user has insufficient permissions to view the specified project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDefaultBranch2

> RestMinimalRef getDefaultBranch2(projectKey, repositorySlug)

Get repository default branch

Retrieves the repository\&#39;s &lt;i&gt;configured&lt;/i&gt; default branch.   Every repository has a &lt;i&gt;configured&lt;/i&gt; default branch, but that branch may not actually &lt;i&gt;exist&lt;/i&gt; in the repository. For example, a newly-created repository will have a configured default branch even though no branches have been pushed yet.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetDefaultBranch2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetDefaultBranch2Request;

  try {
    const data = await api.getDefaultBranch2(body);
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

[**RestMinimalRef**](RestMinimalRef.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The configured default branch for the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to read the repository. |  -  |
| **404** | The specified repository does not exist, or its configured default branch does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDefaultTasks

> GetDefaultTasks1200Response getDefaultTasks(projectKey, markup, start, limit)

Get a page of default tasks

Retrieves the default tasks for the supplied project.  The authenticated user must have **PROJECT_VIEW** permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetDefaultTasksRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | If present or \"true\", includes a markup-rendered description (optional)
    markup: markup_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetDefaultTasksRequest;

  try {
    const data = await api.getDefaultTasks(body);
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
| **markup** | `string` | If present or \&quot;true\&quot;, includes a markup-rendered description | [Optional] [Defaults to `undefined`] |
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
| **404** | The specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForkedRepositories

> GetRepositoriesRecentlyAccessed200Response getForkedRepositories(projectKey, repositorySlug, start, limit)

Get repository forks

Retrieve repositories which have been forked from this one. Unlike #getRelatedRepositories(Repository, PageRequest) related repositories, this only looks at a given repository\&#39;s direct forks. If those forks have themselves been the origin of more forks, such \&quot;grandchildren\&quot; repositories will not be retrieved.   Only repositories to which the authenticated user has &lt;b&gt;REPO_READ&lt;/b&gt; permission will be included, even if other repositories have been forked from this one.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetForkedRepositoriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetForkedRepositoriesRequest;

  try {
    const data = await api.getForkedRepositories(body);
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

[**GetRepositoriesRecentlyAccessed200Response**](GetRepositoriesRecentlyAccessed200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of repositories related to the request repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the request repository. |  -  |
| **404** | The request repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupsWithAnyPermission1

> GetGroupsWithAnyPermission200Response getGroupsWithAnyPermission1(projectKey, filter, start, limit)

Get groups with permission to project

Retrieve a page of groups that have been granted at least one permission for the specified project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetGroupsWithAnyPermission1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | If specified only group names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetGroupsWithAnyPermission1Request;

  try {
    const data = await api.getGroupsWithAnyPermission1(body);
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
| **filter** | `string` | If specified only group names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroupsWithAnyPermission200Response**](GetGroupsWithAnyPermission200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of groups and their highest permissions for the specified project. |  -  |
| **401** | The currently authenticated user is not a project administrator for the specified project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getGroupsWithoutAnyPermission1

> GetGroups1200Response getGroupsWithoutAnyPermission1(projectKey, filter, start, limit)

Get groups without project permission

Retrieve a page of groups that have no granted permissions for the specified project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetGroupsWithoutAnyPermission1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | If specified only group names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetGroupsWithoutAnyPermission1Request;

  try {
    const data = await api.getGroupsWithoutAnyPermission1(body);
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
| **filter** | `string` | If specified only group names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGroups1200Response**](GetGroups1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | A page of groups that have not been granted any permissions for the specifiedproject. |  -  |
| **401** | The currently authenticated user is not a project administrator for thespecified project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLatestInvocation

> RestDetailedInvocation getLatestInvocation(projectKey, webhookId, event, outcome)

Get last webhook invocation details

Get the latest invocations for a specific webhook.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetLatestInvocationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the webhook
    webhookId: webhookId_example,
    // string | The string ID of a specific event to retrieve the last invocation for. (optional)
    event: event_example,
    // string | The outcome to filter for. Can be SUCCESS, FAILURE, ERROR. None specified means that the all will be considered (optional)
    outcome: outcome_example,
  } satisfies GetLatestInvocationRequest;

  try {
    const data = await api.getLatestInvocation(body);
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
| **401** | The currently authenticated user has insufficient permissions to get webhook invocations in the project. |  -  |
| **404** | The specified project does not exist, or the webhook does not exist in the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProject

> RestProject getProject(projectKey)

Get a project

Retrieve the project matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt;.   The authenticated user must have &lt;strong&gt;PROJECT_VIEW&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
  } satisfies GetProjectRequest;

  try {
    const data = await api.getProject(body);
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

[**RestProject**](RestProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The project matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectAvatar

> getProjectAvatar(projectKey, s)

Get avatar for project

Retrieve the avatar for the project matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt;.   The authenticated user must have &lt;strong&gt;PROJECT_VIEW&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetProjectAvatarRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The desired size of the image. The server will return an image as close as possible to the specified size. (optional)
    s: s_example,
  } satisfies GetProjectAvatarRequest;

  try {
    const data = await api.getProjectAvatar(body);
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
| **s** | `string` | The desired size of the image. The server will return an image as close as possible to the specified size. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/png`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The avatar of the project matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to view the project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjects

> GetProjects200Response getProjects(name, permission, start, limit)

Get projects

Retrieve a page of projects.   Only projects for which the authenticated user has the &lt;strong&gt;PROJECT_VIEW&lt;/strong&gt; permission will be returned.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetProjectsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | Name to filter by. (optional)
    name: name_example,
    // string | Permission to filter by (optional)
    permission: permission_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetProjectsRequest;

  try {
    const data = await api.getProjects(body);
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
| **name** | `string` | Name to filter by. | [Optional] [Defaults to `undefined`] |
| **permission** | `string` | Permission to filter by | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetProjects200Response**](GetProjects200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of projects. |  -  |
| **400** | The permission level is unknown or not related to projects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPullRequestSettings

> RestPullRequestSettings getPullRequestSettings(projectKey, scmId)

Get merge strategy

Retrieve the merge strategy configuration for this project and SCM.   The authenticated user must have &lt;strong&gt;PROJECT_READ&lt;/strong&gt; permission for the context repository to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetPullRequestSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The SCM to get strategies for.
    scmId: scmId_example,
  } satisfies GetPullRequestSettingsRequest;

  try {
    const data = await api.getPullRequestSettings(body);
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
| **scmId** | `string` | The SCM to get strategies for. | [Defaults to `undefined`] |

### Return type

[**RestPullRequestSettings**](RestPullRequestSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The merge configuration of the request project. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the request repository. |  -  |
| **404** | The request repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRelatedRepositories

> GetRepositoriesRecentlyAccessed200Response getRelatedRepositories(projectKey, repositorySlug, start, limit)

Get related repository

Retrieve repositories which are related to this one. Related repositories are from the same Repository#getHierarchyId() hierarchy as this repository.   Only repositories to which the authenticated user has &lt;b&gt;REPO_READ&lt;/b&gt; permission will be included, even if more repositories are part of this repository\&#39;s hierarchy.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetRelatedRepositoriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRelatedRepositoriesRequest;

  try {
    const data = await api.getRelatedRepositories(body);
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

[**GetRepositoriesRecentlyAccessed200Response**](GetRepositoriesRecentlyAccessed200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of repositories related to the request repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the request repository. |  -  |
| **404** | The request repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositories

> GetRepositoriesRecentlyAccessed200Response getRepositories(projectKey, start, limit)

Get repositories for project

Retrieve repositories from the project corresponding to the supplied &lt;strong&gt;projectKey&lt;/strong&gt;.   The authenticated user must have &lt;strong&gt;PROJECT_READ&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetRepositoriesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRepositoriesRequest;

  try {
    const data = await api.getRepositories(body);
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

[**GetRepositoriesRecentlyAccessed200Response**](GetRepositoriesRecentlyAccessed200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repositories matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the specified project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepository

> RestRepository getRepository(projectKey, repositorySlug)

Get repository

Retrieve the repository matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt; and &lt;strong&gt;repositorySlug&lt;/strong&gt;.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies GetRepositoryRequest;

  try {
    const data = await api.getRepository(body);
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

[**RestRepository**](RestRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository which matches the supplied &lt;strong&gt;projectKey&lt;/strong&gt; and &lt;strong&gt;repositorySlug&lt;/strong&gt;. |  -  |
| **401** | The currently authenticated user has insufficient permissions to see the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryHook

> RestRepositoryHook getRepositoryHook(projectKey, hookKey)

Get a repository hook

Retrieve a repository hook for this project.   The authenticated user must have &lt;strong&gt;PROJECT_READ&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetRepositoryHookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
  } satisfies GetRepositoryHookRequest;

  try {
    const data = await api.getRepositoryHook(body);
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
| **200** | Returns the repository hooks with their associated enabled state for the supplied hookKey. |  -  |
| **401** | The currently authenticated user has insufficient permissions to enable the hook. |  -  |
| **404** | The specified repository hook does not exist for the given project, or the project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryHooks

> GetRepositoryHooks1200Response getRepositoryHooks(projectKey, type, start, limit)

Get repository hooks

Retrieve a page of repository hooks for this project.   The authenticated user must have &lt;strong&gt;PROJECT_READ&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetRepositoryHooksRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // 'PRE_RECEIVE' | 'POST_RECEIVE' | The optional type to filter by. (optional)
    type: type_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetRepositoryHooksRequest;

  try {
    const data = await api.getRepositoryHooks(body);
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
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRestriction

> RestRefRestriction getRestriction(projectKey, id)

Get a ref restriction

Returns a restriction as specified by a restriction id.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission or higher to call this resource. Only authenticated users may call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetRestrictionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The restriction id.
    id: id_example,
  } satisfies GetRestrictionRequest;

  try {
    const data = await api.getRestriction(body);
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


## getRestrictions

> GetRestrictions1200Response getRestrictions(projectKey, matcherType, matcherId, type, start, limit)

Search for ref restrictions

Search for restrictions using the supplied parameters.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission or higher to call this resource. Only authenticated users may call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetRestrictionsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
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
  } satisfies GetRestrictionsRequest;

  try {
    const data = await api.getRestrictions(body);
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


## getSettings

> ExampleSettings getSettings(projectKey, hookKey)

Get repository hook settings

Retrieve the settings for a repository hook for this project.   The authenticated user must have &lt;strong&gt;PROJECT_READ&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The hook key.
    hookKey: hookKey_example,
  } satisfies GetSettingsRequest;

  try {
    const data = await api.getSettings(body);
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
| **404** | The specified project or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatistics

> any getStatistics(projectKey, webhookId, event)

Get webhook statistics

Get the statistics for a specific webhook.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetStatisticsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the webhook
    webhookId: webhookId_example,
    // string | The string ID of a specific event to retrieve the last invocation for. May be empty, in which case all events are considered (optional)
    event: event_example,
  } satisfies GetStatisticsRequest;

  try {
    const data = await api.getStatistics(body);
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
| **401** | The currently authenticated user has insufficient permissions to get webhook statistics in the project. |  -  |
| **404** | The specified project does not exist, or the webhook does not exist in the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStatisticsSummary

> any getStatisticsSummary(projectKey, webhookId)

Get webhook statistics summary

Get the statistics summary for a specific webhook.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetStatisticsSummaryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the webhook
    webhookId: webhookId_example,
  } satisfies GetStatisticsSummaryRequest;

  try {
    const data = await api.getStatisticsSummary(body);
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
| **204** | No webhook invocations exist. |  -  |
| **401** | The currently authenticated user has insufficient permissions to get webhook statistics summary in the project. |  -  |
| **404** | The project does not exist, or the webhook does not exist in the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsersWithAnyPermission1

> GetUsersWithAnyPermission1200Response getUsersWithAnyPermission1(projectKey, filter, start, limit)

Get users with permission to project

Retrieve a page of users that have been granted at least one permission for the specified project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetUsersWithAnyPermission1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | If specified only user names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetUsersWithAnyPermission1Request;

  try {
    const data = await api.getUsersWithAnyPermission1(body);
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
| **filter** | `string` | If specified only user names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUsersWithAnyPermission1200Response**](GetUsersWithAnyPermission1200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of users and their highest permissions for the specified project. |  -  |
| **401** | The currently authenticated user is not a project administrator for thespecified project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsersWithoutPermission

> GetUsersWithoutAnyPermission200Response getUsersWithoutPermission(projectKey, filter, start, limit)

Get users without project permission

Retrieve a page of &lt;i&gt;licensed&lt;/i&gt; users that have no granted permissions for the specified project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetUsersWithoutPermissionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | If specified only user names containing the supplied string will be returned (optional)
    filter: filter_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetUsersWithoutPermissionRequest;

  try {
    const data = await api.getUsersWithoutPermission(body);
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
| **filter** | `string` | If specified only user names containing the supplied string will be returned | [Optional] [Defaults to `undefined`] |
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
| **200** | A page of users that have not been granted any permissions for the specified project |  -  |
| **401** | The currently authenticated user is not a project administrator for thespecified project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhook

> RestWebhook getWebhook(projectKey, webhookId, statistics)

Get webhook

Get a webhook by ID.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { GetWebhookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | ID of the webhook
    webhookId: webhookId_example,
    // string | <code>true</code> if statistics should be provided for the webhook (optional)
    statistics: statistics_example,
  } satisfies GetWebhookRequest;

  try {
    const data = await api.getWebhook(body);
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
| **401** | The currently authenticated user has insufficient permissions to get a webhook in the project. |  -  |
| **404** | The project does not exist, or the webhook does not exist in the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## hasAllUserPermission

> RestPermitted hasAllUserPermission(projectKey, permission)

Check default project permission

Check whether the specified permission is the default permission (granted to all users) for a project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { HasAllUserPermissionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The permission to grant. Available project permissions are:  - PROJECT_READ - PROJECT_WRITE - PROJECT_ADMIN   
    permission: permission_example,
  } satisfies HasAllUserPermissionRequest;

  try {
    const data = await api.hasAllUserPermission(body);
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
| **permission** | `string` | The permission to grant. Available project permissions are:  - PROJECT_READ - PROJECT_WRITE - PROJECT_ADMIN    | [Defaults to `undefined`] |

### Return type

[**RestPermitted**](RestPermitted.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A simple entity indicating whether the specified permission is the defaultpermission for this project. |  -  |
| **400** | The request was malformed or the specified permission does not exist. |  -  |
| **401** | The currently authenticated user is not an administrator for the specifiedspecified project. |  -  |
| **403** | The action was disallowed as it would reduce the currently authenticated user\&#39;spermission level. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modifyAllUserPermission

> modifyAllUserPermission(projectKey, permission, allow)

Grant project permission

Grant or revoke a project permission to all users, i.e. set the default permission.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { ModifyAllUserPermissionRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The permission to grant. Available project permissions are:  - PROJECT_READ - PROJECT_WRITE - PROJECT_ADMIN   
    permission: permission_example,
    // string | <em>true</em> to grant the specified permission to all users, or <em>false</em> to revoke it (optional)
    allow: allow_example,
  } satisfies ModifyAllUserPermissionRequest;

  try {
    const data = await api.modifyAllUserPermission(body);
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
| **permission** | `string` | The permission to grant. Available project permissions are:  - PROJECT_READ - PROJECT_WRITE - PROJECT_ADMIN    | [Defaults to `undefined`] |
| **allow** | `string` | &lt;em&gt;true&lt;/em&gt; to grant the specified permission to all users, or &lt;em&gt;false&lt;/em&gt; to revoke it | [Optional] [Defaults to `undefined`] |

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
| **204** | The requested permission was successfully granted or revoked. |  -  |
| **400** | The request was malformed or the specified permission does not exist. |  -  |
| **401** | The currently authenticated user is not an administrator for the specified project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeConfiguration

> removeConfiguration(projectKey, scriptId)

Remove a hook script

Removes the hook script from the set of hook scripts configured to run in all repositories under the project.   This endpoint requires **PROJECT_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { RemoveConfigurationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the hook script
    scriptId: scriptId_example,
  } satisfies RemoveConfigurationRequest;

  try {
    const data = await api.removeConfiguration(body);
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
| **401** | The currently authenticated user has insufficient permissions to view the specified project. |  -  |
| **404** | The project key or hook script ID supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## retryCreateRepository

> RestRepository retryCreateRepository(projectKey, repositorySlug)

Retry repository creation

If a create or fork operation fails, calling this method will clean up the broken repository and try again. The repository must be in an INITIALISATION_FAILED state.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { RetryCreateRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
  } satisfies RetryCreateRepositoryRequest;

  try {
    const data = await api.retryCreateRepository(body);
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

[**RestRepository**](RestRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The newly created repository. |  -  |
| **400** | The repository was not created due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create a repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissions

> revokePermissions(projectKey, user, group)

Revoke project permissions

Revoke all permissions for the specified project for the given groups and users.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.  In addition, a user may not revoke a group\&#39;s permission if their own permission would be revoked as a result, nor may they revoke their own permission unless they have a global permission that already implies that permission.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { RevokePermissionsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The names of the users (optional)
    user: user_example,
    // string | The names of the groups (optional)
    group: group_example,
  } satisfies RevokePermissionsRequest;

  try {
    const data = await api.revokePermissions(body);
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
| **user** | `string` | The names of the users | [Optional] [Defaults to `undefined`] |
| **group** | `string` | The names of the groups | [Optional] [Defaults to `undefined`] |

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
| **204** | All project permissions were revoked from the users and groups for the specified project. |  -  |
| **400** | No permissions were revoked because the request was invalid. No users or groups were provided. |  -  |
| **401** | The currently authenticated user is not an administrator for the specifiedspecified project. |  -  |
| **404** | The specified project does not exist, or one or more of the users or groups provided does not exist. |  -  |
| **409** | The action was disallowed as it would revoke the currently authenticated user\&#39;s permission on the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissionsForGroup1

> revokePermissionsForGroup1(projectKey, name)

Revoke group project permission

 Revoke all permissions for the specified project for a group.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.  In addition, a user may not revoke a group\&#39;s permissions if it will reduce their own permission level.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { RevokePermissionsForGroup1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The name of the group (optional)
    name: name_example,
  } satisfies RevokePermissionsForGroup1Request;

  try {
    const data = await api.revokePermissionsForGroup1(body);
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
| **name** | `string` | The name of the group | [Optional] [Defaults to `undefined`] |

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
| **204** | All project permissions were revoked from the group for the specified project. |  -  |
| **401** | The currently authenticated user is not an administrator for the specifiedspecified project. |  -  |
| **404** | The specified project does not exist. |  -  |
| **409** |  The action was disallowed as it would reduce the currently authenticated user\&#39;spermission level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokePermissionsForUser1

> revokePermissionsForUser1(projectKey, name)

Revoke user project permission

Revoke all permissions for the specified project for a user.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.  In addition, a user may not revoke their own project permissions if they do not have a higher global permission.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { RevokePermissionsForUser1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The name of the user (optional)
    name: name_example,
  } satisfies RevokePermissionsForUser1Request;

  try {
    const data = await api.revokePermissionsForUser1(body);
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
| **name** | `string` | The name of the user | [Optional] [Defaults to `undefined`] |

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
| **204** | All project permissions were revoked from the user for the specified project. |  -  |
| **401** | The currently authenticated user is not an administrator for the specifiedspecified project. |  -  |
| **404** | The specified project does not exist. |  -  |
| **409** |  The action was disallowed as it would reduce the currently authenticated user\&#39;spermission level. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchPermissions

> searchPermissions(projectKey, permission, filterText, type)

Search project permissions

Search direct and implied permissions of principals (users and groups). This endpoint returns a superset of the results returned by the /users and /groups endpoints because it allows filtering by global permissions too.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { SearchPermissionsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | Permissions to filter by. See the [permissions documentation](https://confluence.atlassian.com/display/BitbucketServer/Using+project+permissions)for a detailed explanation of what each permission entails. This parameter can be specified multiple times to filter by more than one permission, and can contain global and project permissions.   (optional)
    permission: permission_example,
    // string | Name of the user or group to filter the name of (optional)
    filterText: filterText_example,
    // string | Type of entity (user or group)Valid entity types are:  - USER- GROUP (optional)
    type: type_example,
  } satisfies SearchPermissionsRequest;

  try {
    const data = await api.searchPermissions(body);
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
| **permission** | `string` | Permissions to filter by. See the [permissions documentation](https://confluence.atlassian.com/display/BitbucketServer/Using+project+permissions)for a detailed explanation of what each permission entails. This parameter can be specified multiple times to filter by more than one permission, and can contain global and project permissions.   | [Optional] [Defaults to `undefined`] |
| **filterText** | `string` | Name of the user or group to filter the name of | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Type of entity (user or group)Valid entity types are:  - USER- GROUP | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## set

> RestAutoMergeRestrictedSettings set(projectKey, restAutoMergeProjectSettingsRequest)

Create or update the pull request auto-merge settings

Creates or updates the pull request auto-merge settings for the supplied project, and applies the restriction action specified in the request.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { SetRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // RestAutoMergeProjectSettingsRequest | The settings to create or update (optional)
    restAutoMergeProjectSettingsRequest: ...,
  } satisfies SetRequest;

  try {
    const data = await api.set(body);
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
| **restAutoMergeProjectSettingsRequest** | [RestAutoMergeProjectSettingsRequest](RestAutoMergeProjectSettingsRequest.md) | The settings to create or update | [Optional] |

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
| **400** | The \&#39;enabled\&#39; and \&#39;restrictionAction\&#39; fields were not provided correctly. |  -  |
| **401** | The currently authenticated user has insufficient permissions to create or update the pull request auto-merge settings. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setAutoDeclineSettings

> RestAutoDeclineSettings setAutoDeclineSettings(projectKey, restAutoDeclineSettingsRequest)

Create/Update auto decline settings

Creates or updates the auto decline settings for the supplied project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { SetAutoDeclineSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // RestAutoDeclineSettingsRequest | The settings to create or update (optional)
    restAutoDeclineSettingsRequest: ...,
  } satisfies SetAutoDeclineSettingsRequest;

  try {
    const data = await api.setAutoDeclineSettings(body);
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
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setConfiguration

> RestHookScriptConfig setConfiguration(projectKey, scriptId, restHookScriptTriggers)

Create/update a hook script

Creates/updates the hook script configuration for the provided hook script and project.   This endpoint requires **PROJECT_ADMIN** permission.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { SetConfigurationRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the hook script
    scriptId: scriptId_example,
    // RestHookScriptTriggers | The hook triggers for which the hook script should be run (optional)
    restHookScriptTriggers: ...,
  } satisfies SetConfigurationRequest;

  try {
    const data = await api.setConfiguration(body);
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
| **401** | The currently authenticated user has insufficient permissions to view the specified project. |  -  |
| **404** | The project key supplied does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setDefaultBranch2

> setDefaultBranch2(projectKey, repositorySlug, restBranch)

Update default branch for repository

Update the default branch of a repository.   The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { SetDefaultBranch2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestBranch | The branch to set as default (optional)
    restBranch: ...,
  } satisfies SetDefaultBranch2Request;

  try {
    const data = await api.setDefaultBranch2(body);
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
| **204** | The default branch was updated. |  -  |
| **401** | The authenticated user does not have permission to modify the default branch. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPermissionForGroups1

> setPermissionForGroups1(projectKey, name, permission)

Update group project permission

Promote or demote a group\&#39;s permission level for the specified project.  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource. In addition, a user may not demote a group\&#39;s permission level if theirown permission level would be reduced as a result.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { SetPermissionForGroups1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The names of the groups (optional)
    name: name_example,
    // string | The permission to grant.See the [permissions documentation](https://confluence.atlassian.com/display/BitbucketServer/Using+project+permissions)for a detailed explanation of what each permission entails. Available project permissions are:  - PROJECT_READ - PROJECT_WRITE - PROJECT_ADMIN    (optional)
    permission: permission_example,
  } satisfies SetPermissionForGroups1Request;

  try {
    const data = await api.setPermissionForGroups1(body);
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
| **name** | `string` | The names of the groups | [Optional] [Defaults to `undefined`] |
| **permission** | `string` | The permission to grant.See the [permissions documentation](https://confluence.atlassian.com/display/BitbucketServer/Using+project+permissions)for a detailed explanation of what each permission entails. Available project permissions are:  - PROJECT_READ - PROJECT_WRITE - PROJECT_ADMIN    | [Optional] [Defaults to `undefined`] |

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
| **204** | The requested permission was granted. |  -  |
| **400** | The request was malformed or the specified permission does not exist. |  -  |
| **401** | The currently authenticated user is not an administrator for the specifiedspecified project. |  -  |
| **403** | The action was disallowed as it would reduce the currently authenticated user\&#39;spermission level. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPermissionForUsers1

> setPermissionForUsers1(projectKey, name, permission)

Update user project permission

Promote or demote a user\&#39;s permission level for the specified project.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project or a higher global permission to call this resource. In addition, a user may not reduce their own permission level unless they have a global permission that already implies that permission.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { SetPermissionForUsers1Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key
    projectKey: projectKey_example,
    // string | The names of the users (optional)
    name: name_example,
    // string | The permission to grant.See the [permissions documentation](https://confluence.atlassian.com/display/BitbucketServer/Using+project+permissions)for a detailed explanation of what each permission entails. Available project permissions are:  - PROJECT_READ - PROJECT_WRITE - PROJECT_ADMIN    (optional)
    permission: permission_example,
  } satisfies SetPermissionForUsers1Request;

  try {
    const data = await api.setPermissionForUsers1(body);
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
| **name** | `string` | The names of the users | [Optional] [Defaults to `undefined`] |
| **permission** | `string` | The permission to grant.See the [permissions documentation](https://confluence.atlassian.com/display/BitbucketServer/Using+project+permissions)for a detailed explanation of what each permission entails. Available project permissions are:  - PROJECT_READ - PROJECT_WRITE - PROJECT_ADMIN    | [Optional] [Defaults to `undefined`] |

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
| **204** | The requested permission was granted. |  -  |
| **400** | The request was malformed or the specified permission does not exist. |  -  |
| **401** | The currently authenticated user is not an administrator for the specifiedspecified project. |  -  |
| **403** | The action was disallowed as it would reduce the currently authenticated user\&#39;spermission level. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setSettings

> ExampleSettings setSettings(projectKey, hookKey, exampleSettings)

Update repository hook settings

Modify the settings for a repository hook for this project.   The service will reject any settings which are too large, the current limit is 32KB once serialized.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.   A JSON document can be provided to use as the settings for the hook. These structure and validity of the document is decided by the plugin providing the hook.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { SetSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The complete module key of the hook module.
    hookKey: hookKey_example,
    // ExampleSettings | The raw settings. (optional)
    exampleSettings: ...,
  } satisfies SetSettingsRequest;

  try {
    const data = await api.setSettings(body);
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
| **hookKey** | `string` | The complete module key of the hook module. | [Defaults to `undefined`] |
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
| **404** | The specified project or hook does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamContributing

> streamContributing(projectKey, repositorySlug, at, markup, htmlEscape, includeHeadingId, hardwrap)

Get repository contributing guidelines

Retrieves the contributing guidelines for the repository, if they\&#39;ve been defined.   This checks the repository for a CONTRIBUTING file, optionally with an md or txt extension, and, if found, streams it. By default, the &lt;i&gt;raw content&lt;/i&gt; of the file is streamed. Appending &lt;code&gt;?markup&lt;/code&gt; to the URL will stream an HTML-rendered version instead.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { StreamContributingRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | A specific commit or ref to retrieve the guidelines at, or the default branch if not specified (optional)
    at: at_example,
    // string | If present or <code>\"true\"</code>, triggers the raw content to be markup-rendered and returned as HTML; otherwise, if not specified, or any value other than <code>\"true\"</code>, the content is streamed without markup (optional)
    markup: markup_example,
    // string | (Optional) true if HTML should be escaped in the input markup, false otherwise. If not specified, the value of the <code>markup.render.html.escape</code> property, which is <code>true</code> by default, will be used (optional)
    htmlEscape: htmlEscape_example,
    // string | (Optional) true if headings should contain an ID based on the heading content. If not specified, the value of the <code>markup.render.headerids</code> property, which is false by default, will be used (optional)
    includeHeadingId: includeHeadingId_example,
    // string | (Optional) Whether the markup implementation should convert newlines to breaks. If not specified, the value of the <code>markup.render.hardwrap</code> property, which is <code>true</code> by default, will be used (optional)
    hardwrap: hardwrap_example,
  } satisfies StreamContributingRequest;

  try {
    const data = await api.streamContributing(body);
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
| **at** | `string` | A specific commit or ref to retrieve the guidelines at, or the default branch if not specified | [Optional] [Defaults to `undefined`] |
| **markup** | `string` | If present or &lt;code&gt;\&quot;true\&quot;&lt;/code&gt;, triggers the raw content to be markup-rendered and returned as HTML; otherwise, if not specified, or any value other than &lt;code&gt;\&quot;true\&quot;&lt;/code&gt;, the content is streamed without markup | [Optional] [Defaults to `undefined`] |
| **htmlEscape** | `string` | (Optional) true if HTML should be escaped in the input markup, false otherwise. If not specified, the value of the &lt;code&gt;markup.render.html.escape&lt;/code&gt; property, which is &lt;code&gt;true&lt;/code&gt; by default, will be used | [Optional] [Defaults to `undefined`] |
| **includeHeadingId** | `string` | (Optional) true if headings should contain an ID based on the heading content. If not specified, the value of the &lt;code&gt;markup.render.headerids&lt;/code&gt; property, which is false by default, will be used | [Optional] [Defaults to `undefined`] |
| **hardwrap** | `string` | (Optional) Whether the markup implementation should convert newlines to breaks. If not specified, the value of the &lt;code&gt;markup.render.hardwrap&lt;/code&gt; property, which is &lt;code&gt;true&lt;/code&gt; by default, will be used | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The contributing guidelines for the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to read the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamLicense

> streamLicense(projectKey, repositorySlug, at, markup, htmlEscape, includeHeadingId, hardwrap)

Get repository license

Retrieves the license for the repository, if it\&#39;s been defined.   This checks the repository for a &lt;pre&gt;LICENSE&lt;/pre&gt; file, optionally with an &lt;pre&gt;md&lt;/pre&gt; or &lt;pre&gt;txt&lt;/pre&gt;extension, and, if found, streams it. By default, the &lt;i&gt;raw content&lt;/i&gt; of the file is streamed. Appending &lt;pre&gt;?markup&lt;/pre&gt; to the URL will stream an HTML-rendered version instead.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { StreamLicenseRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | A specific commit or ref to retrieve the guidelines at, or the default branch if not specified (optional)
    at: at_example,
    // string | If present or <code>\"true\"</code>, triggers the raw content to be markup-rendered and returned as HTML; otherwise, if not specified, or any value other than <code>\"true\"</code>, the content is streamed without markup (optional)
    markup: markup_example,
    // string | (Optional) true if HTML should be escaped in the input markup, false otherwise. If not specified, the value of the <code>markup.render.html.escape</code> property, which is <code>true</code> by default, will be used (optional)
    htmlEscape: htmlEscape_example,
    // string | (Optional) true if headings should contain an ID based on the heading content. If not specified, the value of the <code>markup.render.headerids</code> property, which is false by default, will be used (optional)
    includeHeadingId: includeHeadingId_example,
    // string | (Optional) Whether the markup implementation should convert newlines to breaks. If not specified, the value of the <code>markup.render.hardwrap</code> property, which is <code>true</code> by default, will be used (optional)
    hardwrap: hardwrap_example,
  } satisfies StreamLicenseRequest;

  try {
    const data = await api.streamLicense(body);
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
| **at** | `string` | A specific commit or ref to retrieve the guidelines at, or the default branch if not specified | [Optional] [Defaults to `undefined`] |
| **markup** | `string` | If present or &lt;code&gt;\&quot;true\&quot;&lt;/code&gt;, triggers the raw content to be markup-rendered and returned as HTML; otherwise, if not specified, or any value other than &lt;code&gt;\&quot;true\&quot;&lt;/code&gt;, the content is streamed without markup | [Optional] [Defaults to `undefined`] |
| **htmlEscape** | `string` | (Optional) true if HTML should be escaped in the input markup, false otherwise. If not specified, the value of the &lt;code&gt;markup.render.html.escape&lt;/code&gt; property, which is &lt;code&gt;true&lt;/code&gt; by default, will be used | [Optional] [Defaults to `undefined`] |
| **includeHeadingId** | `string` | (Optional) true if headings should contain an ID based on the heading content. If not specified, the value of the &lt;code&gt;markup.render.headerids&lt;/code&gt; property, which is false by default, will be used | [Optional] [Defaults to `undefined`] |
| **hardwrap** | `string` | (Optional) Whether the markup implementation should convert newlines to breaks. If not specified, the value of the &lt;code&gt;markup.render.hardwrap&lt;/code&gt; property, which is &lt;code&gt;true&lt;/code&gt; by default, will be used | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The license for the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to read the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamReadme

> streamReadme(projectKey, repositorySlug, at, markup, htmlEscape, includeHeadingId, hardwrap)

Get repository readme

Retrieves the README for the repository, if it\&#39;s been defined.   This checks the repository for a &lt;pre&gt;README&lt;/pre&gt; file, optionally with an &lt;pre&gt;md&lt;/pre&gt; or &lt;pre&gt;txt&lt;/pre&gt;extension, and, if found, streams it. By default, the &lt;i&gt;raw content&lt;/i&gt; of the file is streamed. Appending &lt;pre&gt;?markup&lt;/pre&gt; to the URL will stream an HTML-rendered version instead. Note that, when streaming HTML, relative URLs in the README will not work if applied relative to this URL.   The authenticated user must have &lt;strong&gt;REPO_READ&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { StreamReadmeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // string | A specific commit or ref to retrieve the guidelines at, or the default branch if not specified (optional)
    at: at_example,
    // string | If present or <code>\"true\"</code>, triggers the raw content to be markup-rendered and returned as HTML; otherwise, if not specified, or any value other than <code>\"true\"</code>, the content is streamed without markup (optional)
    markup: markup_example,
    // string | (Optional) true if HTML should be escaped in the input markup, false otherwise. If not specified, the value of the <code>markup.render.html.escape</code> property, which is <code>true</code> by default, will be used (optional)
    htmlEscape: htmlEscape_example,
    // string | (Optional) true if headings should contain an ID based on the heading content. If not specified, the value of the <code>markup.render.headerids</code> property, which is false by default, will be used (optional)
    includeHeadingId: includeHeadingId_example,
    // string | (Optional) Whether the markup implementation should convert newlines to breaks. If not specified, the value of the <code>markup.render.hardwrap</code> property, which is <code>true</code> by default, will be used (optional)
    hardwrap: hardwrap_example,
  } satisfies StreamReadmeRequest;

  try {
    const data = await api.streamReadme(body);
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
| **at** | `string` | A specific commit or ref to retrieve the guidelines at, or the default branch if not specified | [Optional] [Defaults to `undefined`] |
| **markup** | `string` | If present or &lt;code&gt;\&quot;true\&quot;&lt;/code&gt;, triggers the raw content to be markup-rendered and returned as HTML; otherwise, if not specified, or any value other than &lt;code&gt;\&quot;true\&quot;&lt;/code&gt;, the content is streamed without markup | [Optional] [Defaults to `undefined`] |
| **htmlEscape** | `string` | (Optional) true if HTML should be escaped in the input markup, false otherwise. If not specified, the value of the &lt;code&gt;markup.render.html.escape&lt;/code&gt; property, which is &lt;code&gt;true&lt;/code&gt; by default, will be used | [Optional] [Defaults to `undefined`] |
| **includeHeadingId** | `string` | (Optional) true if headings should contain an ID based on the heading content. If not specified, the value of the &lt;code&gt;markup.render.headerids&lt;/code&gt; property, which is false by default, will be used | [Optional] [Defaults to `undefined`] |
| **hardwrap** | `string` | (Optional) Whether the markup implementation should convert newlines to breaks. If not specified, the value of the &lt;code&gt;markup.render.hardwrap&lt;/code&gt; property, which is &lt;code&gt;true&lt;/code&gt; by default, will be used | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The README for the repository. |  -  |
| **401** | The currently authenticated user has insufficient permissions to read the repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testWebhook

> any testWebhook(projectKey, webhookId, sslVerificationRequired, url, restWebhookCredentials)

Test webhook

Test connectivity to a specific endpoint.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { TestWebhookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // number (optional)
    webhookId: 56,
    // boolean (optional)
    sslVerificationRequired: true,
    // string | The url in which to connect to (optional)
    url: url_example,
    // RestWebhookCredentials | Basic authentication credentials, if required. (optional)
    restWebhookCredentials: ...,
  } satisfies TestWebhookRequest;

  try {
    const data = await api.testWebhook(body);
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
| **webhookId** | `number` |  | [Optional] [Defaults to `undefined`] |
| **sslVerificationRequired** | `boolean` |  | [Optional] [Defaults to `true`] |
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
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateDefaultTask

> RestDefaultTask updateDefaultTask(projectKey, taskId, restDefaultTaskRequest)

Update a default task

Updates a default task for the supplied project.  The authenticated user must have **PROJECT_ADMIN** permission for this project to call the resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { UpdateDefaultTaskRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The ID of the default task
    taskId: taskId_example,
    // RestDefaultTaskRequest | The task to be updated
    restDefaultTaskRequest: ...,
  } satisfies UpdateDefaultTaskRequest;

  try {
    const data = await api.updateDefaultTask(body);
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
| **404** | The specified project does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateProject

> RestProject updateProject(projectKey, restProject)

Update project

Update the project matching the &lt;strong&gt;projectKey&lt;/strong&gt; supplied in the resource path.   To include a custom avatar for the updated project, the project definition should contain an additional attribute with the key &lt;code&gt;avatar&lt;/code&gt; and the value a data URI containing Base64-encoded image data. The URI should be in the following format:  &#x60;&#x60;&#x60;    data:(content type, e.g. image/png);base64,(data)&#x60;&#x60;&#x60;  If the data is not Base64-encoded, or if a character set is defined in the URI, or the URI is otherwise invalid, &lt;em&gt;project creation will fail&lt;/em&gt;.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { UpdateProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // RestProject | Project parameters to update. (optional)
    restProject: ...,
  } satisfies UpdateProjectRequest;

  try {
    const data = await api.updateProject(body);
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
| **restProject** | [RestProject](RestProject.md) | Project parameters to update. | [Optional] |

### Return type

[**RestProject**](RestProject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated project. The project\&#39;s key &lt;strong&gt;was not&lt;/strong&gt; updated. |  -  |
| **201** | The updated project. The project\&#39;s key &lt;strong&gt;was&lt;/strong&gt; updated. |  -  |
| **400** | The project was not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePullRequestSettings

> RestPullRequestSettings updatePullRequestSettings(projectKey, scmId, restPullRequestSettings)

Update merge strategy

Update the pull request merge strategy configuration for this project and SCM.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the context repository to call this resource.   Only the strategies provided will be enabled, the default must be set and included in the set of strategies.   An explicitly set pull request merge strategy configuration can be deleted by POSTing a document with an empty \&quot;mergeConfig\&quot; attribute. i.e:  &lt;pre&gt;{      \&quot;mergeConfig\&quot;: {}  }  &lt;/pre&gt;  Upon completion of this request, the effective configuration will be the configuration explicitly set for the SCM, or if no such explicit configuration is set then the default configuration will be used.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { UpdatePullRequestSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The SCM to get strategies for.
    scmId: scmId_example,
    // RestPullRequestSettings | The settings. (optional)
    restPullRequestSettings: ...,
  } satisfies UpdatePullRequestSettingsRequest;

  try {
    const data = await api.updatePullRequestSettings(body);
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
| **scmId** | `string` | The SCM to get strategies for. | [Defaults to `undefined`] |
| **restPullRequestSettings** | [RestPullRequestSettings](RestPullRequestSettings.md) | The settings. | [Optional] |

### Return type

[**RestPullRequestSettings**](RestPullRequestSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The merge configuration of the request project. |  -  |
| **400** | The repository pull request merge strategies were not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to administrate the specified repository. |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRepository

> RestRepository updateRepository(projectKey, repositorySlug, restRepository)

Update repository

Update the repository matching the &lt;strong&gt;repositorySlug&lt;/strong&gt; supplied in the resource path.   The repository\&#39;s slug is derived from its name. If the name changes the slug may also change.   This resource can be used to change the repository\&#39;s default branch by specifying a new default branch in the request. For example: &lt;code&gt;\&quot;defaultBranch\&quot;:\&quot;main\&quot;&lt;/code&gt;  This resource can be used to move the repository to a different project by specifying a new project in the request. For example: &lt;code&gt;\&quot;project\&quot;:{\&quot;key\&quot;:\&quot;NEW_KEY\&quot;}&lt;/code&gt;  The authenticated user must have &lt;strong&gt;REPO_ADMIN&lt;/strong&gt; permission for the specified repository to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { UpdateRepositoryRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | The repository slug.
    repositorySlug: repositorySlug_example,
    // RestRepository | The updated repository. (optional)
    restRepository: ...,
  } satisfies UpdateRepositoryRequest;

  try {
    const data = await api.updateRepository(body);
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
| **restRepository** | [RestRepository](RestRepository.md) | The updated repository. | [Optional] |

### Return type

[**RestRepository**](RestRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The updated repository. |  -  |
| **400** | The repository was not updated due to a validation error. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update a repository. |  -  |
| **403** | Cannot archive repository because it has open pull requests. |  -  |
| **404** | The specified repository does not exist. |  -  |
| **409** | A repository with the same name as the target already exists, or the repository is archived. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWebhook

> RestWebhook updateWebhook(projectKey, webhookId, restWebhook)

Update webhook

Update an existing webhook.   The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { UpdateWebhookRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // string | Id of the existing webhook
    webhookId: webhookId_example,
    // RestWebhook | The representation of the updated values for the webhook (optional)
    restWebhook: ...,
  } satisfies UpdateWebhookRequest;

  try {
    const data = await api.updateWebhook(body);
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
| **401** | The currently authenticated user has insufficient permissions to update a webhook in this project. |  -  |
| **404** | The project does not exist, or the webhook does not exist in the project. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadAvatar

> uploadAvatar(projectKey, avatar)

Update project avatar

Update the avatar for the project matching the supplied &lt;strong&gt;projectKey&lt;/strong&gt;.   This resource accepts POST multipart form data, containing a single image in a form-field named \&#39;avatar\&#39;.   There are configurable server limits on both the dimensions (1024x1024 pixels by default) and uploaded file size (1MB by default). Several different image formats are supported, but &lt;strong&gt;PNG&lt;/strong&gt; and &lt;strong&gt;JPEG&lt;/strong&gt; are preferred due to the file size limit.   This resource has Cross-Site Request Forgery (XSRF) protection. To allow the request to pass the XSRF check the caller needs to send an &lt;code&gt;X-Atlassian-Token&lt;/code&gt; HTTP header with the value &lt;code&gt;no-check&lt;/code&gt;.   An example &lt;a href&#x3D;\&quot;http://curl.haxx.se/\&quot;&gt;curl&lt;/a&gt; request to upload an image name \&#39;avatar.png\&#39; would be: &#x60;&#x60;&#x60;curl -X POST -u username:password -H \&quot;X-Atlassian-Token: no-check\&quot; http://example.com/rest/api/1.0/projects/STASH/avatar.png -F avatar&#x3D;@avatar.png &#x60;&#x60;&#x60;  The authenticated user must have &lt;strong&gt;PROJECT_ADMIN&lt;/strong&gt; permission for the specified project to call this resource.

### Example

```ts
import {
  Configuration,
  ProjectApi,
} from 'bitbucket-api';
import type { UploadAvatarRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new ProjectApi();

  const body = {
    // string | The project key.
    projectKey: projectKey_example,
    // Blob | The avatar file to upload. (optional)
    avatar: BINARY_DATA_HERE,
  } satisfies UploadAvatarRequest;

  try {
    const data = await api.uploadAvatar(body);
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
| **avatar** | `Blob` | The avatar file to upload. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The avatar was uploaded successfully. |  -  |
| **401** | The currently authenticated user has insufficient permissions to update the project. |  -  |
| **404** | The specified project does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

