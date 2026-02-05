# MirroringUpstreamApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**accept**](MirroringUpstreamApi.md#accept) | **POST** /mirroring/latest/requests/{mirroringRequestId}/accept | Accept a mirroring request |
| [**analyticsSettings**](MirroringUpstreamApi.md#analyticssettings) | **GET** /mirroring/latest/analyticsSettings | Get analytics settings from upstream |
| [**authenticate**](MirroringUpstreamApi.md#authenticate) | **POST** /mirroring/latest/authenticate | Authenticate on behalf of a user |
| [**deleteMirroringRequest**](MirroringUpstreamApi.md#deletemirroringrequest) | **DELETE** /mirroring/latest/requests/{mirroringRequestId} | Delete a mirroring request |
| [**deletePreferredMirrorId**](MirroringUpstreamApi.md#deletepreferredmirrorid) | **DELETE** /mirroring/latest/account/settings/preferred-mirror | Remove preferred mirror |
| [**getAllContentHashes**](MirroringUpstreamApi.md#getallcontenthashes) | **GET** /mirroring/latest/repos | Get content hashes for repositories |
| [**getAllReposForProject**](MirroringUpstreamApi.md#getallreposforproject) | **GET** /mirroring/latest/projects/{projectId}/repos | Get hashes for repositories in project |
| [**getContentHashById**](MirroringUpstreamApi.md#getcontenthashbyid) | **GET** /mirroring/latest/repos/{repoId} | Get content hash for a repository |
| [**getMirror**](MirroringUpstreamApi.md#getmirror) | **GET** /mirroring/latest/mirrorServers/{mirrorId} | Get mirror by ID |
| [**getMirroringRequest**](MirroringUpstreamApi.md#getmirroringrequest) | **GET** /mirroring/latest/requests/{mirroringRequestId} | Get a mirroring request |
| [**getPreferredMirrorId**](MirroringUpstreamApi.md#getpreferredmirrorid) | **GET** /mirroring/latest/account/settings/preferred-mirror | Get preferred mirror |
| [**getProjectById**](MirroringUpstreamApi.md#getprojectbyid) | **GET** /mirroring/latest/projects/{projectId} | Get project |
| [**getRepositoryMirrors**](MirroringUpstreamApi.md#getrepositorymirrors) | **GET** /mirroring/latest/repos/{repoId}/mirrors | Get mirrors for repository |
| [**listMirrors**](MirroringUpstreamApi.md#listmirrors) | **GET** /mirroring/latest/mirrorServers | Get all mirrors |
| [**listRequests**](MirroringUpstreamApi.md#listrequests) | **GET** /mirroring/latest/requests | Get mirroring requests |
| [**publishEvent**](MirroringUpstreamApi.md#publishevent) | **POST** /mirroring/latest/mirrorServers/{mirrorId}/events | Publish RepositoryMirrorEvent |
| [**register**](MirroringUpstreamApi.md#register) | **POST** /mirroring/latest/requests | Create a mirroring request |
| [**reject**](MirroringUpstreamApi.md#reject) | **POST** /mirroring/latest/requests/{mirroringRequestId}/reject | Reject a mirroring request |
| [**remove**](MirroringUpstreamApi.md#remove) | **DELETE** /mirroring/latest/mirrorServers/{mirrorId} | Delete mirror by ID |
| [**setPreferredMirrorId**](MirroringUpstreamApi.md#setpreferredmirrorid) | **POST** /mirroring/latest/account/settings/preferred-mirror | Set preferred mirror |
| [**upgrade**](MirroringUpstreamApi.md#upgrade) | **PUT** /mirroring/latest/mirrorServers/{mirrorId} | Upgrade mirror server |



## accept

> RestMirrorServer accept(mirroringRequestId)

Accept a mirroring request

Accepts a mirroring request

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { AcceptRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the request to accept
    mirroringRequestId: mirroringRequestId_example,
  } satisfies AcceptRequest;

  try {
    const data = await api.accept(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mirroringRequestId** | `string` | the ID of the request to accept | [Defaults to `undefined`] |

### Return type

[**RestMirrorServer**](RestMirrorServer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The accepted mirror server |  -  |
| **409** | The request could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## analyticsSettings

> RestAnalyticsSettings analyticsSettings()

Get analytics settings from upstream

Gets the analytics settings from the mirroring upstream

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { AnalyticsSettingsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  try {
    const data = await api.analyticsSettings();
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

[**RestAnalyticsSettings**](RestAnalyticsSettings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The analytics settings from upstream |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authenticate

> RestApplicationUserWithPermissions authenticate(restAuthenticationRequest)

Authenticate on behalf of a user

Authenticates on behalf of a user. Used by mirrors to check the credentials supplied to them by users. If successful a user and their effective permissions are returned as follows -  * For SSH credentials - all the effective user permissions are returned. * For all other credentials - the highest global permission is returned along with highest repository permission if repository ID is also provided in the request.  Currently only username/password, bearer token and SSH credentials are supported.

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { AuthenticateRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // RestAuthenticationRequest (optional)
    restAuthenticationRequest: ...,
  } satisfies AuthenticateRequest;

  try {
    const data = await api.authenticate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restAuthenticationRequest** | [RestAuthenticationRequest](RestAuthenticationRequest.md) |  | [Optional] |

### Return type

[**RestApplicationUserWithPermissions**](RestApplicationUserWithPermissions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The user for the supplied credentials and their effective permissions}. |  -  |
| **400** | If the supplied credentials are incomplete or not understood. |  -  |
| **401** |  The currently authenticated user is not permitted to authenticate on behalf of users or authentication with the supplied user credentials failed for some reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMirroringRequest

> deleteMirroringRequest(mirroringRequestId)

Delete a mirroring request

Deletes a mirroring request

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { DeleteMirroringRequestRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the mirroring request to delete
    mirroringRequestId: mirroringRequestId_example,
  } satisfies DeleteMirroringRequestRequest;

  try {
    const data = await api.deleteMirroringRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mirroringRequestId** | `string` | the ID of the mirroring request to delete | [Defaults to `undefined`] |

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
| **204** | The request was deleted |  -  |
| **409** | The request could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePreferredMirrorId

> deletePreferredMirrorId()

Remove preferred mirror

Removes the current user\&#39;s preferred mirror

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { DeletePreferredMirrorIdRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  try {
    const data = await api.deletePreferredMirrorId();
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
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | an empty response indicating that the user setting has been updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllContentHashes

> EnrichedRepository getAllContentHashes(includeDefaultBranch)

Get content hashes for repositories

Returns a page of repositories enriched with a content hash and default branch

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { GetAllContentHashesRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // 'true' | 'false' | includes defaultBranchId for each repository in the response, if <code>true</code>. Default value is <code>false</code>. (optional)
    includeDefaultBranch: includeDefaultBranch_example,
  } satisfies GetAllContentHashesRequest;

  try {
    const data = await api.getAllContentHashes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **includeDefaultBranch** | `true`, `false` | includes defaultBranchId for each repository in the response, if &lt;code&gt;true&lt;/code&gt;. Default value is &lt;code&gt;false&lt;/code&gt;. | [Optional] [Defaults to `&#39;false&#39;`] [Enum: true, false] |

### Return type

[**EnrichedRepository**](EnrichedRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of repositories with content hashes and default branch |  -  |
| **409** | Mirroring is not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllReposForProject

> GetAllReposForProject200Response getAllReposForProject(projectId, includeDefaultBranch, start, limit)

Get hashes for repositories in project

Returns a page of repositories for a given project, enriched with a content hash

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { GetAllReposForProjectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the id of the requested project
    projectId: projectId_example,
    // 'true' | 'false' | includes defaultBranchId in the response, if <code>true</code>. Default value is <code>false</code> (optional)
    includeDefaultBranch: includeDefaultBranch_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies GetAllReposForProjectRequest;

  try {
    const data = await api.getAllReposForProject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | `string` | the id of the requested project | [Defaults to `undefined`] |
| **includeDefaultBranch** | `true`, `false` | includes defaultBranchId in the response, if &lt;code&gt;true&lt;/code&gt;. Default value is &lt;code&gt;false&lt;/code&gt; | [Optional] [Defaults to `&#39;false&#39;`] [Enum: true, false] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllReposForProject200Response**](GetAllReposForProject200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of repositories with content hashes |  -  |
| **409** | Mirroring is not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentHashById

> EnrichedRepository getContentHashById(repoId, includeDefaultBranch)

Get content hash for a repository

Returns a repository enriched with a content hash and default branch

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { GetContentHashByIdRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the requested repository
    repoId: repoId_example,
    // boolean (optional)
    includeDefaultBranch: true,
  } satisfies GetContentHashByIdRequest;

  try {
    const data = await api.getContentHashById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repoId** | `string` | the ID of the requested repository | [Defaults to `undefined`] |
| **includeDefaultBranch** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**EnrichedRepository**](EnrichedRepository.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository with the specified repoId |  -  |
| **404** | Repository not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMirror

> RestMirrorServer getMirror(mirrorId)

Get mirror by ID

Returns the mirror specified by a mirror ID

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { GetMirrorRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the mirror ID
    mirrorId: mirrorId_example,
  } satisfies GetMirrorRequest;

  try {
    const data = await api.getMirror(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mirrorId** | `string` | the mirror ID | [Defaults to `undefined`] |

### Return type

[**RestMirrorServer**](RestMirrorServer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the mirror |  -  |
| **404** | The mirror could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMirroringRequest

> RestMirroringRequest getMirroringRequest(mirroringRequestId)

Get a mirroring request

Retrieves a mirroring request

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { GetMirroringRequestRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the mirroring request to retrieve
    mirroringRequestId: mirroringRequestId_example,
  } satisfies GetMirroringRequestRequest;

  try {
    const data = await api.getMirroringRequest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mirroringRequestId** | `string` | the ID of the mirroring request to retrieve | [Defaults to `undefined`] |

### Return type

[**RestMirroringRequest**](RestMirroringRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The mirroring request |  -  |
| **409** | The request could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPreferredMirrorId

> RestMirrorServer getPreferredMirrorId()

Get preferred mirror

Retrieves the current user\&#39;s preferred mirror server

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { GetPreferredMirrorIdRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  try {
    const data = await api.getPreferredMirrorId();
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

[**RestMirrorServer**](RestMirrorServer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the preferred mirror server |  -  |
| **404** | The user\&#39;s preferred mirror server could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectById

> RestProject getProjectById(projectId)

Get project

Returns the requested project using its primary key ID.&lt;br&gt; Since 6.7

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { GetProjectByIdRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the requested project
    projectId: projectId_example,
  } satisfies GetProjectByIdRequest;

  try {
    const data = await api.getProjectById(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | `string` | the ID of the requested project | [Defaults to `undefined`] |

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
| **200** | The project with the specified ID |  -  |
| **404** | Project not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepositoryMirrors

> RestMirroredRepositoryDescriptor getRepositoryMirrors(repoId, preAuthorized)

Get mirrors for repository

Returns a page of mirrors for a repository. This resource will return &lt;strong&gt;all mirrors&lt;/strong&gt; along with authorized links to the mirror\&#39;s repository REST resource. To determine if a repository is available on the mirror, the returned URL needs to be called.

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { GetRepositoryMirrorsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the requested repository
    repoId: repoId_example,
    // boolean (optional)
    preAuthorized: true,
  } satisfies GetRepositoryMirrorsRequest;

  try {
    const data = await api.getRepositoryMirrors(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **repoId** | `string` | the ID of the requested repository | [Defaults to `undefined`] |
| **preAuthorized** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**RestMirroredRepositoryDescriptor**](RestMirroredRepositoryDescriptor.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The mirrored repository descriptor |  -  |
| **409** | Mirroring is not available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listMirrors

> ListMirrors200Response listMirrors(start, limit)

Get all mirrors

Returns a list of mirrors

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { ListMirrorsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies ListMirrorsRequest;

  try {
    const data = await api.listMirrors(body);
    console.log(data);
  } catch (error) {
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

[**ListMirrors200Response**](ListMirrors200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | a page of mirrors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRequests

> ListRequests200Response listRequests(state, start, limit)

Get mirroring requests

Retrieves a mirroring request

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { ListRequestsRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // 'PENDING' | 'ACCEPTED' | 'REJECTED' | (optional) the request state to filter on (optional)
    state: state_example,
    // number | Start number for the page (inclusive). If not passed, first page is assumed. (optional)
    start: 0,
    // number | Number of items to return. If not passed, a page size of 25 is used. (optional)
    limit: 25,
  } satisfies ListRequestsRequest;

  try {
    const data = await api.listRequests(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **state** | `PENDING`, `ACCEPTED`, `REJECTED` | (optional) the request state to filter on | [Optional] [Defaults to `undefined`] [Enum: PENDING, ACCEPTED, REJECTED] |
| **start** | `number` | Start number for the page (inclusive). If not passed, first page is assumed. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return. If not passed, a page size of 25 is used. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListRequests200Response**](ListRequests200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of mirroring requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publishEvent

> publishEvent(mirrorId, restRepositoryMirrorEvent)

Publish RepositoryMirrorEvent

Publishes a RepositoryMirrorEvent on the event queue.

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { PublishEventRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the server id of the mirror that raised this event
    mirrorId: mirrorId_example,
    // RestRepositoryMirrorEvent (optional)
    restRepositoryMirrorEvent: ...,
  } satisfies PublishEventRequest;

  try {
    const data = await api.publishEvent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mirrorId** | `string` | the server id of the mirror that raised this event | [Defaults to `undefined`] |
| **restRepositoryMirrorEvent** | [RestRepositoryMirrorEvent](RestRepositoryMirrorEvent.md) |  | [Optional] |

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
| **204** | The event was successfully placed on the queue |  -  |
| **404** | The specified repository does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## register

> RestMirroringRequest register(restMirroringRequest)

Create a mirroring request

Creates a new mirroring request

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { RegisterRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // RestMirroringRequest (optional)
    restMirroringRequest: ...,
  } satisfies RegisterRequest;

  try {
    const data = await api.register(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **restMirroringRequest** | [RestMirroringRequest](RestMirroringRequest.md) |  | [Optional] |

### Return type

[**RestMirroringRequest**](RestMirroringRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created mirroring request |  -  |
| **409** | The request was invalid or missing |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reject

> RestMirrorServer reject(mirroringRequestId)

Reject a mirroring request

Rejects a mirroring request

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { RejectRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the request to reject
    mirroringRequestId: mirroringRequestId_example,
  } satisfies RejectRequest;

  try {
    const data = await api.reject(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mirroringRequestId** | `string` | the ID of the request to reject | [Defaults to `undefined`] |

### Return type

[**RestMirrorServer**](RestMirrorServer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The rejected mirror server |  -  |
| **409** | The request could not be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## remove

> remove(mirrorId)

Delete mirror by ID

Removes a mirror, disabling all access and notifications for the mirror server in question

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { RemoveRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the mirror to remove
    mirrorId: mirrorId_example,
  } satisfies RemoveRequest;

  try {
    const data = await api.remove(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mirrorId** | `string` | the ID of the mirror to remove | [Defaults to `undefined`] |

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
| **204** | an empty response indicating that the mirror has been removed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPreferredMirrorId

> setPreferredMirrorId(body)

Set preferred mirror

Sets the mirror specified by a mirror ID as the current user\&#39;s preferred mirror

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { SetPreferredMirrorIdRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the mirror ID (optional)
    body: body_example,
  } satisfies SetPreferredMirrorIdRequest;

  try {
    const data = await api.setPreferredMirrorId(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | `string` | the mirror ID | [Optional] |

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
| **204** | an empty response indicating that the user setting has been updated |  -  |
| **404** | The mirror could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## upgrade

> RestMirrorServer upgrade(mirrorId, restMirrorUpgradeRequest)

Upgrade mirror server

Upgrades the mirror server in question with the provided details.This endpoint can only be called by the mirror instance or system administrators&lt;br&gt;Since 5.8

### Example

```ts
import {
  Configuration,
  MirroringUpstreamApi,
} from 'bitbucket-api';
import type { UpgradeRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MirroringUpstreamApi();

  const body = {
    // string | the ID of the mirror to upgrade
    mirrorId: mirrorId_example,
    // RestMirrorUpgradeRequest (optional)
    restMirrorUpgradeRequest: ...,
  } satisfies UpgradeRequest;

  try {
    const data = await api.upgrade(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mirrorId** | `string` | the ID of the mirror to upgrade | [Defaults to `undefined`] |
| **restMirrorUpgradeRequest** | [RestMirrorUpgradeRequest](RestMirrorUpgradeRequest.md) |  | [Optional] |

### Return type

[**RestMirrorServer**](RestMirrorServer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | the mirror |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

