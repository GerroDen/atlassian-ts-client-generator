# ProjectVersionsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createRelatedWork**](ProjectVersionsApi.md#createrelatedwork) | **POST** /rest/api/3/version/{id}/relatedwork | Create related work |
| [**createVersion**](ProjectVersionsApi.md#createversion) | **POST** /rest/api/3/version | Create version |
| [**deleteAndReplaceVersion**](ProjectVersionsApi.md#deleteandreplaceversion) | **POST** /rest/api/3/version/{id}/removeAndSwap | Delete and replace version |
| [**deleteRelatedWork**](ProjectVersionsApi.md#deleterelatedwork) | **DELETE** /rest/api/3/version/{versionId}/relatedwork/{relatedWorkId} | Delete related work |
| [**deleteVersion**](ProjectVersionsApi.md#deleteversion) | **DELETE** /rest/api/3/version/{id} | Delete version |
| [**getProjectVersions**](ProjectVersionsApi.md#getprojectversions) | **GET** /rest/api/3/project/{projectIdOrKey}/versions | Get project versions |
| [**getProjectVersionsPaginated**](ProjectVersionsApi.md#getprojectversionspaginated) | **GET** /rest/api/3/project/{projectIdOrKey}/version | Get project versions paginated |
| [**getRelatedWork**](ProjectVersionsApi.md#getrelatedwork) | **GET** /rest/api/3/version/{id}/relatedwork | Get related work |
| [**getVersion**](ProjectVersionsApi.md#getversion) | **GET** /rest/api/3/version/{id} | Get version |
| [**getVersionRelatedIssues**](ProjectVersionsApi.md#getversionrelatedissues) | **GET** /rest/api/3/version/{id}/relatedIssueCounts | Get version\&#39;s related issues count |
| [**getVersionUnresolvedIssues**](ProjectVersionsApi.md#getversionunresolvedissues) | **GET** /rest/api/3/version/{id}/unresolvedIssueCount | Get version\&#39;s unresolved issues count |
| [**mergeVersions**](ProjectVersionsApi.md#mergeversions) | **PUT** /rest/api/3/version/{id}/mergeto/{moveIssuesTo} | Merge versions |
| [**moveVersion**](ProjectVersionsApi.md#moveversion) | **POST** /rest/api/3/version/{id}/move | Move version |
| [**updateRelatedWork**](ProjectVersionsApi.md#updaterelatedwork) | **PUT** /rest/api/3/version/{id}/relatedwork | Update related work |
| [**updateVersion**](ProjectVersionsApi.md#updateversion) | **PUT** /rest/api/3/version/{id} | Update version |



## createRelatedWork

> VersionRelatedWork createRelatedWork(id, versionRelatedWork)

Create related work

Creates a related work for the given version. You can only create a generic link type of related works via this API. relatedWorkId will be auto-generated UUID, that does not need to be provided.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Resolve issues:* and *Edit issues* [Managing project permissions](https://confluence.atlassian.com/adminjiraserver/managing-project-permissions-938847145.html) for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { CreateRelatedWorkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string
    id: id_example,
    // VersionRelatedWork
    versionRelatedWork: {"category":"Design","title":"Design link","url":"https://www.atlassian.com"},
  } satisfies CreateRelatedWorkRequest;

  try {
    const data = await api.createRelatedWork(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **versionRelatedWork** | [VersionRelatedWork](VersionRelatedWork.md) |  | |

### Return type

[**VersionRelatedWork**](VersionRelatedWork.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the version is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createVersion

> Version createVersion(version)

Create version

Creates a project version.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the version is added to.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { CreateVersionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // Version
    version: {"archived":false,"description":"An excellent version","name":"New Version 1","projectId":10000,"releaseDate":"2010-07-06","released":true},
  } satisfies CreateVersionRequest;

  try {
    const data = await api.createVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **version** | [Version](Version.md) |  | |

### Return type

[**Version**](Version.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  the project is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAndReplaceVersion

> any deleteAndReplaceVersion(id, deleteAndReplaceVersionBean)

Delete and replace version

Deletes a project version.  Alternative versions can be provided to update issues that use the deleted version in &#x60;fixVersion&#x60;, &#x60;affectedVersion&#x60;, or any version picker custom fields. If alternatives are not provided, occurrences of &#x60;fixVersion&#x60;, &#x60;affectedVersion&#x60;, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { DeleteAndReplaceVersionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version.
    id: id_example,
    // DeleteAndReplaceVersionBean
    deleteAndReplaceVersionBean: ...,
  } satisfies DeleteAndReplaceVersionRequest;

  try {
    const data = await api.deleteAndReplaceVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version. | [Defaults to `undefined`] |
| **deleteAndReplaceVersionBean** | [DeleteAndReplaceVersionBean](DeleteAndReplaceVersionBean.md) |  | |

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
| **204** | Returned if the version is deleted. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  the version to delete is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRelatedWork

> deleteRelatedWork(versionId, relatedWorkId)

Delete related work

Deletes the given related work for the given version.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Resolve issues:* and *Edit issues* [Managing project permissions](https://confluence.atlassian.com/adminjiraserver/managing-project-permissions-938847145.html) for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { DeleteRelatedWorkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version that the target related work belongs to.
    versionId: versionId_example,
    // string | The ID of the related work to delete.
    relatedWorkId: relatedWorkId_example,
  } satisfies DeleteRelatedWorkRequest;

  try {
    const data = await api.deleteRelatedWork(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **versionId** | `string` | The ID of the version that the target related work belongs to. | [Defaults to `undefined`] |
| **relatedWorkId** | `string` | The ID of the related work to delete. | [Defaults to `undefined`] |

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
| **204** | Returned if the related work is deleted. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if  the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the version/related work is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteVersion

> deleteVersion(id, moveFixIssuesTo, moveAffectedIssuesTo)

Delete version

Deletes a project version.  Deprecated, use [ Delete and replace version](#api-rest-api-3-version-id-removeAndSwap-post) that supports swapping version values in custom fields, in addition to the swapping for &#x60;fixVersion&#x60; and &#x60;affectedVersion&#x60; provided in this resource.  Alternative versions can be provided to update issues that use the deleted version in &#x60;fixVersion&#x60; or &#x60;affectedVersion&#x60;. If alternatives are not provided, occurrences of &#x60;fixVersion&#x60; and &#x60;affectedVersion&#x60; that contain the deleted version are cleared.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { DeleteVersionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version.
    id: id_example,
    // string | The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. (optional)
    moveFixIssuesTo: moveFixIssuesTo_example,
    // string | The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. (optional)
    moveAffectedIssuesTo: moveAffectedIssuesTo_example,
  } satisfies DeleteVersionRequest;

  try {
    const data = await api.deleteVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version. | [Defaults to `undefined`] |
| **moveFixIssuesTo** | `string` | The ID of the version to update &#x60;fixVersion&#x60; to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. | [Optional] [Defaults to `undefined`] |
| **moveAffectedIssuesTo** | `string` | The ID of the version to update &#x60;affectedVersion&#x60; to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. | [Optional] [Defaults to `undefined`] |

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
| **204** | Returned if the version is deleted. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if:   *  the authentication credentials are incorrect.  *  the user does not have the required permissions. |  -  |
| **404** | Returned if the version is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectVersions

> Array&lt;Version&gt; getProjectVersions(projectIdOrKey, expand)

Get project versions

Returns all versions in a project. The response is not paginated. Use [Get project versions paginated](#api-rest-api-3-project-projectIdOrKey-version-get) if you want to get the versions in a project with pagination.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { GetProjectVersionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version. (optional)
    expand: expand_example,
  } satisfies GetProjectVersionsRequest;

  try {
    const data = await api.getProjectVersions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;operations&#x60;, which returns actions that can be performed on the version. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Version&gt;**](Version.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **404** | Returned if the project is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectVersionsPaginated

> PageBeanVersion getProjectVersionsPaginated(projectIdOrKey, startAt, maxResults, orderBy, query, status, expand)

Get project versions paginated

Returns a [paginated](#pagination) list of all versions in a project. See the [Get project versions](#api-rest-api-3-project-projectIdOrKey-versions-get) resource if you want to get a full list of versions without pagination.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { GetProjectVersionsPaginatedRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // 'description' | '-description' | '+description' | 'name' | '-name' | '+name' | 'releaseDate' | '-releaseDate' | '+releaseDate' | 'sequence' | '-sequence' | '+sequence' | 'startDate' | '-startDate' | '+startDate' | [Order](#ordering) the results by a field:   *  `description` Sorts by version description.  *  `name` Sorts by version name.  *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.  *  `sequence` Sorts by the order of appearance in the user interface.  *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last. (optional)
    orderBy: orderBy_example,
    // string | Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive). (optional)
    query: query_example,
    // string | A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`. (optional)
    status: status_example,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `issuesstatus` Returns the number of issues in each status category for each version.  *  `operations` Returns actions that can be performed on the specified version.  *  `driver` Returns the Atlassian account ID of the version driver.  *  `approvers` Returns a list containing the approvers for this version. (optional)
    expand: expand_example,
  } satisfies GetProjectVersionsPaginatedRequest;

  try {
    const data = await api.getProjectVersionsPaginated(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **orderBy** | `description`, `-description`, `+description`, `name`, `-name`, `+name`, `releaseDate`, `-releaseDate`, `+releaseDate`, `sequence`, `-sequence`, `+sequence`, `startDate`, `-startDate`, `+startDate` | [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by version description.  *  &#x60;name&#x60; Sorts by version name.  *  &#x60;releaseDate&#x60; Sorts by release date, starting with the oldest date. Versions with no release date are listed last.  *  &#x60;sequence&#x60; Sorts by the order of appearance in the user interface.  *  &#x60;startDate&#x60; Sorts by start date, starting with the oldest date. Versions with no start date are listed last. | [Optional] [Defaults to `undefined`] [Enum: description, -description, +description, name, -name, +name, releaseDate, -releaseDate, +releaseDate, sequence, -sequence, +sequence, startDate, -startDate, +startDate] |
| **query** | `string` | Filter the results using a literal string. Versions with matching &#x60;name&#x60; or &#x60;description&#x60; are returned (case insensitive). | [Optional] [Defaults to `undefined`] |
| **status** | `string` | A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are &#x60;released&#x60;, &#x60;unreleased&#x60;, and &#x60;archived&#x60;. | [Optional] [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;issuesstatus&#x60; Returns the number of issues in each status category for each version.  *  &#x60;operations&#x60; Returns actions that can be performed on the specified version.  *  &#x60;driver&#x60; Returns the Atlassian account ID of the version driver.  *  &#x60;approvers&#x60; Returns a list containing the approvers for this version. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanVersion**](PageBeanVersion.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **404** | Returned if the project is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRelatedWork

> Array&lt;VersionRelatedWork&gt; getRelatedWork(id)

Get related work

Returns related work items for the given version id.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { GetRelatedWorkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version.
    id: id_example,
  } satisfies GetRelatedWorkRequest;

  try {
    const data = await api.getRelatedWork(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version. | [Defaults to `undefined`] |

### Return type

[**Array&lt;VersionRelatedWork&gt;**](VersionRelatedWork.md)

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
| **404** | Returned if the version is not found or the user does not have the necessary permission. |  -  |
| **500** | Returned if reading related work fails |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVersion

> Version getVersion(id, expand)

Get version

Returns a project version.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { GetVersionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version.
    id: id_example,
    // string | Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.  *  `driver` Returns the Atlassian account ID of the version driver.  *  `approvers` Returns a list containing the Atlassian account IDs of approvers for this version. (optional)
    expand: expand_example,
  } satisfies GetVersionRequest;

  try {
    const data = await api.getVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version. | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;operations&#x60; Returns the list of operations available for this version.  *  &#x60;issuesstatus&#x60; Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.  *  &#x60;driver&#x60; Returns the Atlassian account ID of the version driver.  *  &#x60;approvers&#x60; Returns a list containing the Atlassian account IDs of approvers for this version. | [Optional] [Defaults to `undefined`] |

### Return type

[**Version**](Version.md)

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
| **404** | Returned if the version is not found or the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVersionRelatedIssues

> VersionIssueCounts getVersionRelatedIssues(id)

Get version\&#39;s related issues count

Returns the following counts for a version:   *  Number of issues where the &#x60;fixVersion&#x60; is set to the version.  *  Number of issues where the &#x60;affectedVersion&#x60; is set to the version.  *  Number of issues where a version custom field is set to the version.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { GetVersionRelatedIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version.
    id: id_example,
  } satisfies GetVersionRelatedIssuesRequest;

  try {
    const data = await api.getVersionRelatedIssues(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version. | [Defaults to `undefined`] |

### Return type

[**VersionIssueCounts**](VersionIssueCounts.md)

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
| **404** | Returned if:   *  the version is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVersionUnresolvedIssues

> VersionUnresolvedIssuesCount getVersionUnresolvedIssues(id)

Get version\&#39;s unresolved issues count

Returns counts of the issues and unresolved issues for the project version.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { GetVersionUnresolvedIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version.
    id: id_example,
  } satisfies GetVersionUnresolvedIssuesRequest;

  try {
    const data = await api.getVersionUnresolvedIssues(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version. | [Defaults to `undefined`] |

### Return type

[**VersionUnresolvedIssuesCount**](VersionUnresolvedIssuesCount.md)

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
| **404** | Returned if:   *  the version is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mergeVersions

> any mergeVersions(id, moveIssuesTo)

Merge versions

Merges two project versions. The merge is completed by deleting the version specified in &#x60;id&#x60; and replacing any occurrences of its ID in &#x60;fixVersion&#x60; with the version ID specified in &#x60;moveIssuesTo&#x60;.  Consider using [ Delete and replace version](#api-rest-api-3-version-id-removeAndSwap-post) instead. This resource supports swapping version values in &#x60;fixVersion&#x60;, &#x60;affectedVersion&#x60;, and custom fields.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { MergeVersionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version to delete.
    id: id_example,
    // string | The ID of the version to merge into.
    moveIssuesTo: moveIssuesTo_example,
  } satisfies MergeVersionsRequest;

  try {
    const data = await api.mergeVersions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version to delete. | [Defaults to `undefined`] |
| **moveIssuesTo** | `string` | The ID of the version to merge into. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the version is deleted. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if:   *  the authentication credentials are incorrect or missing.  *  the user does not have the required permissions. |  -  |
| **404** | Returned if the version to be deleted or the version to merge to are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveVersion

> Version moveVersion(id, versionMoveBean)

Move version

Modifies the version\&#39;s sequence within the project, which affects the display order of the versions in Jira.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { MoveVersionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version to be moved.
    id: id_example,
    // VersionMoveBean
    versionMoveBean: {"after":"https://your-domain.atlassian.net/rest/api/~ver~/version/10000"},
  } satisfies MoveVersionRequest;

  try {
    const data = await api.moveVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version to be moved. | [Defaults to `undefined`] |
| **versionMoveBean** | [VersionMoveBean](VersionMoveBean.md) |  | |

### Return type

[**Version**](Version.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  no body parameters are provided.  *  &#x60;after&#x60; and &#x60;position&#x60; are provided.  *  &#x60;position&#x60; is invalid. |  -  |
| **401** | Returned if:   *  the authentication credentials are incorrect or missing  *  the user does not have the required commissions. |  -  |
| **404** | Returned if the version or move after version are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRelatedWork

> VersionRelatedWork updateRelatedWork(id, versionRelatedWork)

Update related work

Updates the given related work. You can only update generic link related works via Rest APIs. Any archived version related works can\&#39;t be edited.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Resolve issues:* and *Edit issues* [Managing project permissions](https://confluence.atlassian.com/adminjiraserver/managing-project-permissions-938847145.html) for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { UpdateRelatedWorkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version to update the related work on. For the related work id, pass it to the input JSON.
    id: id_example,
    // VersionRelatedWork
    versionRelatedWork: {"category":"Design","relatedWorkId":"fabcdef6-7878-1234-beaf-43211234abcd","title":"Design link","url":"https://www.atlassian.com"},
  } satisfies UpdateRelatedWorkRequest;

  try {
    const data = await api.updateRelatedWork(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version to update the related work on. For the related work id, pass it to the input JSON. | [Defaults to `undefined`] |
| **versionRelatedWork** | [VersionRelatedWork](VersionRelatedWork.md) |  | |

### Return type

[**VersionRelatedWork**](VersionRelatedWork.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful together with updated related work. |  -  |
| **400** | Returned if the request data is invalid |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have the required permissions. |  -  |
| **404** | Returned if the version or the related work is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateVersion

> Version updateVersion(id, version)

Update version

Updates a project version.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.

### Example

```ts
import {
  Configuration,
  ProjectVersionsApi,
} from 'jira-cloud-api';
import type { UpdateVersionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectVersionsApi(config);

  const body = {
    // string | The ID of the version.
    id: id_example,
    // Version
    version: {"archived":false,"description":"An excellent version","id":"10000","name":"New Version 1","overdue":true,"projectId":10000,"releaseDate":"2010-07-06","released":true,"self":"https://your-domain.atlassian.net/rest/api/~ver~/version/10000","userReleaseDate":"6/Jul/2010"},
  } satisfies UpdateVersionRequest;

  try {
    const data = await api.updateVersion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | The ID of the version. | [Defaults to `undefined`] |
| **version** | [Version](Version.md) |  | |

### Return type

[**Version**](Version.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  the request is invalid.  *  the user does not have the required permissions. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if the version is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

