# TeamsPublicAPIApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**archiveTeams**](TeamsPublicAPIApi.md#archiveteams) | **POST** /public/teams/v1/org/{orgId}/teams/archive | Archive teams in bulk. |
| [**createTeam**](TeamsPublicAPIApi.md#createteam) | **POST** /public/teams/v1/org/{orgId}/teams/ | Create a team. |
| [**deleteTeam**](TeamsPublicAPIApi.md#deleteteam) | **DELETE** /public/teams/v1/org/{orgId}/teams/{teamId} | Delete a team. |
| [**getTeam**](TeamsPublicAPIApi.md#getteam) | **GET** /public/teams/v1/org/{orgId}/teams/{teamId} | Get a single team. |
| [**queryTeams**](TeamsPublicAPIApi.md#queryteams) | **GET** /public/teams/v1/org/{orgId}/teams | Get a list of teams. |
| [**restoreTeam**](TeamsPublicAPIApi.md#restoreteam) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/restore | Restore a single soft-deleted team |
| [**unarchiveTeams**](TeamsPublicAPIApi.md#unarchiveteams) | **POST** /public/teams/v1/org/{orgId}/teams/unarchive | Unarchive teams in bulk. |
| [**updateTeam**](TeamsPublicAPIApi.md#updateteam) | **PATCH** /public/teams/v1/org/{orgId}/teams/{teamId} | Modify a team. |
| [**uploadAndSetTeamCoverPhoto**](TeamsPublicAPIApi.md#uploadandsetteamcoverphoto) | **PUT** /public/teams/v1/{teamId}/cover-photo | Upload a team cover photo |



## archiveTeams

> PublicApiBulkOperationResponse archiveTeams(orgId, publicApiBulkOperationRequest)

Archive teams in bulk.

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { ArchiveTeamsRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation that owns the teams to archive.
    orgId: orgId_example,
    // PublicApiBulkOperationRequest | The list of team IDs to archive. All IDs must belong to the organisation specified in the path.
    publicApiBulkOperationRequest: ...,
  } satisfies ArchiveTeamsRequest;

  try {
    const data = await api.archiveTeams(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation that owns the teams to archive. | [Defaults to `undefined`] |
| **publicApiBulkOperationRequest** | [PublicApiBulkOperationRequest](PublicApiBulkOperationRequest.md) | The list of team IDs to archive. All IDs must belong to the organisation specified in the path. | |

### Return type

[**PublicApiBulkOperationResponse**](PublicApiBulkOperationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bulk archive processed. Completed team IDs appear in \&#39;successfulTeamIds\&#39;; any failures are listed in \&#39;errors\&#39;. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTeam

> PublicApiTeamResponseWithMembers createTeam(orgId, publicApiTeamCreationPayload)

Create a team.

Creates a team, and adds the requesting user as the initial member.

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { CreateTeamRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the team is to be created under.
    orgId: orgId_example,
    // PublicApiTeamCreationPayload | Details of the team to be created.
    publicApiTeamCreationPayload: ...,
  } satisfies CreateTeamRequest;

  try {
    const data = await api.createTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation the team is to be created under. | [Defaults to `undefined`] |
| **publicApiTeamCreationPayload** | [PublicApiTeamCreationPayload](PublicApiTeamCreationPayload.md) | Details of the team to be created. | |

### Return type

[**PublicApiTeamResponseWithMembers**](PublicApiTeamResponseWithMembers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Team created successfully. The details of the team are in the response, including the team ID, which can be used to reference the team for other operations. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTeam

> deleteTeam(orgId, teamId)

Delete a team.

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { DeleteTeamRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the team is to be deleted from.
    orgId: orgId_example,
    // string | The ID of the team to be deleted.
    teamId: teamId_example,
  } satisfies DeleteTeamRequest;

  try {
    const data = await api.deleteTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation the team is to be deleted from. | [Defaults to `undefined`] |
| **teamId** | `string` | The ID of the team to be deleted. | [Defaults to `undefined`] |

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
| **204** | Team deleted successfully. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |
| **410** | The team has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeam

> PublicApiTeamResponse getTeam(orgId, teamId, siteId)

Get a single team.

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { GetTeamRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the team is to be retrieved from.
    orgId: orgId_example,
    // string | The ID of the team to be retrieved.
    teamId: teamId_example,
    // string | [Optional] The ID of the site to retrieve teams which are site scoped. Please note that if the org is site-scoped, teams will not be included in response if siteId is not provided. [Deprecated] We have deprecated the empty siteId since it only works for org-scoped teams and teams are moving to unit-scope. It\'s recommended to always provide a valid siteId to ensure this operation continues to work in the future. (optional)
    siteId: siteId_example,
  } satisfies GetTeamRequest;

  try {
    const data = await api.getTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation the team is to be retrieved from. | [Defaults to `undefined`] |
| **teamId** | `string` | The ID of the team to be retrieved. | [Defaults to `undefined`] |
| **siteId** | `string` | [Optional] The ID of the site to retrieve teams which are site scoped. Please note that if the org is site-scoped, teams will not be included in response if siteId is not provided. [Deprecated] We have deprecated the empty siteId since it only works for org-scoped teams and teams are moving to unit-scope. It\&#39;s recommended to always provide a valid siteId to ensure this operation continues to work in the future. | [Optional] [Defaults to `undefined`] |

### Return type

[**PublicApiTeamResponse**](PublicApiTeamResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team retrieved successfully. The details of the team are in the response. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |
| **410** | The team has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## queryTeams

> PublicApiTeamPaginationResult queryTeams(orgId, siteId, size, cursor)

Get a list of teams.

This returns a list of all teams contained under an organization. This may be used as an option to export teams data within your organization.

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { QueryTeamsRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the teams are to be retrieved from.
    orgId: orgId_example,
    // string | [Optional] The ID of the site to retrieve teams which are site scoped. Please note that if the org is site-scoped, teams will not be included in response if siteId is not provided. [Deprecated] We have deprecated the empty siteId since it only works for org-scoped teams and teams are moving to unit-scope. It\'s recommended to always provide a valid siteId to ensure this operation continues to work in the future. (optional)
    siteId: siteId_example,
    // number | The page size for the number of teams to return (max 300) (optional)
    size: 56,
    // string | An optional cursor token. Leave off for the first request. (optional)
    cursor: cursor_example,
  } satisfies QueryTeamsRequest;

  try {
    const data = await api.queryTeams(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation the teams are to be retrieved from. | [Defaults to `undefined`] |
| **siteId** | `string` | [Optional] The ID of the site to retrieve teams which are site scoped. Please note that if the org is site-scoped, teams will not be included in response if siteId is not provided. [Deprecated] We have deprecated the empty siteId since it only works for org-scoped teams and teams are moving to unit-scope. It\&#39;s recommended to always provide a valid siteId to ensure this operation continues to work in the future. | [Optional] [Defaults to `undefined`] |
| **size** | `number` | The page size for the number of teams to return (max 300) | [Optional] [Defaults to `50`] |
| **cursor** | `string` | An optional cursor token. Leave off for the first request. | [Optional] [Defaults to `undefined`] |

### Return type

[**PublicApiTeamPaginationResult**](PublicApiTeamPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Teams retrieved successfully. The details of the team are in the response. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## restoreTeam

> restoreTeam(orgId, teamId)

Restore a single soft-deleted team

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { RestoreTeamRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the team belongs to
    orgId: orgId_example,
    // string | The ID of the team to restore
    teamId: teamId_example,
  } satisfies RestoreTeamRequest;

  try {
    const data = await api.restoreTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation the team belongs to | [Defaults to `undefined`] |
| **teamId** | `string` | The ID of the team to restore | [Defaults to `undefined`] |

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
| **204** | Team restored successfully. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unarchiveTeams

> PublicApiBulkOperationResponse unarchiveTeams(orgId, publicApiBulkOperationRequest)

Unarchive teams in bulk.

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { UnarchiveTeamsRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation that owns the teams to unarchive.
    orgId: orgId_example,
    // PublicApiBulkOperationRequest | The list of team IDs to archive. All IDs must belong to the organisation specified in the path.
    publicApiBulkOperationRequest: ...,
  } satisfies UnarchiveTeamsRequest;

  try {
    const data = await api.unarchiveTeams(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation that owns the teams to unarchive. | [Defaults to `undefined`] |
| **publicApiBulkOperationRequest** | [PublicApiBulkOperationRequest](PublicApiBulkOperationRequest.md) | The list of team IDs to archive. All IDs must belong to the organisation specified in the path. | |

### Return type

[**PublicApiBulkOperationResponse**](PublicApiBulkOperationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bulk unarchive processed. Completed team IDs appear in \&#39;successfulTeamIds\&#39;; any failures are listed in \&#39;errors\&#39;. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTeam

> PublicApiTeamResponse updateTeam(orgId, teamId, publicApiTeamUpdatePayload)

Modify a team.

This will only update the fields that get passed in and leave the rest as unmodified.

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { UpdateTeamRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the team to be updated belongs to.
    orgId: orgId_example,
    // string | The ID of the team to be updated.
    teamId: teamId_example,
    // PublicApiTeamUpdatePayload | Details the team is to be updated with.
    publicApiTeamUpdatePayload: ...,
  } satisfies UpdateTeamRequest;

  try {
    const data = await api.updateTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation the team to be updated belongs to. | [Defaults to `undefined`] |
| **teamId** | `string` | The ID of the team to be updated. | [Defaults to `undefined`] |
| **publicApiTeamUpdatePayload** | [PublicApiTeamUpdatePayload](PublicApiTeamUpdatePayload.md) | Details the team is to be updated with. | |

### Return type

[**PublicApiTeamResponse**](PublicApiTeamResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team updated successfully. The updated details of the team are in the response. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |
| **410** | The team has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadAndSetTeamCoverPhoto

> uploadAndSetTeamCoverPhoto(teamId, file)

Upload a team cover photo

This updates the cover photo of the team. The cover photo must be a valid image file.

### Example

```ts
import {
  Configuration,
  TeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { UploadAndSetTeamCoverPhotoRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsPublicAPIApi();

  const body = {
    // string | The ID of the team to be updated.
    teamId: teamId_example,
    // Blob
    file: BINARY_DATA_HERE,
  } satisfies UploadAndSetTeamCoverPhotoRequest;

  try {
    const data = await api.uploadAndSetTeamCoverPhoto(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **teamId** | `string` | The ID of the team to be updated. | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Team cover photo uploaded successfully. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |
| **410** | The team has been deleted. |  -  |
| **413** | Cover photo is too large. |  -  |
| **415** | Cover photo is not a valid image file. |  -  |
| **422** | Team cover photo cannot be uploaded in FedRAMP boundary. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

