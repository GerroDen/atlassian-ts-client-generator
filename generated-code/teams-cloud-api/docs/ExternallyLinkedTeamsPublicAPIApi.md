# ExternallyLinkedTeamsPublicAPIApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createExternalLinkedTeam**](ExternallyLinkedTeamsPublicAPIApi.md#createexternallinkedteam) | **POST** /public/teams/v1/org/{orgId}/teams/external | Create an external linked team. |
| [**linkTeamToExternalSource**](ExternallyLinkedTeamsPublicAPIApi.md#linkteamtoexternalsource) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/external/link | Link an existing team to an external reference. |



## createExternalLinkedTeam

> PublicApiTeamResponse createExternalLinkedTeam(orgId, publicApiExternalTeamCreationPayload)

Create an external linked team.

Creates an external linked team, and membership will be synced with the external reference.

### Example

```ts
import {
  Configuration,
  ExternallyLinkedTeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { CreateExternalLinkedTeamRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new ExternallyLinkedTeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the team is to be created under.
    orgId: orgId_example,
    // PublicApiExternalTeamCreationPayload | Details of the team to be created.
    publicApiExternalTeamCreationPayload: ...,
  } satisfies CreateExternalLinkedTeamRequest;

  try {
    const data = await api.createExternalLinkedTeam(body);
    console.log(data);
  } catch (error) {
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
| **publicApiExternalTeamCreationPayload** | [PublicApiExternalTeamCreationPayload](PublicApiExternalTeamCreationPayload.md) | Details of the team to be created. | |

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
| **201** | Team created successfully. The details of the team are in the response, including the team ID, which can be used to reference the team for other operations. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## linkTeamToExternalSource

> linkTeamToExternalSource(orgId, teamId, publicApiLinkTeamToExternalSourcePayload)

Link an existing team to an external reference.

Links an existing team to an external reference, and membership and team name will be synced with the external reference.

### Example

```ts
import {
  Configuration,
  ExternallyLinkedTeamsPublicAPIApi,
} from 'teams-cloud-api';
import type { LinkTeamToExternalSourceRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new ExternallyLinkedTeamsPublicAPIApi();

  const body = {
    // string | The ID of the organisation the team and external reference to be linked belongs to.
    orgId: orgId_example,
    // string | The ID of the team to be linked.
    teamId: teamId_example,
    // PublicApiLinkTeamToExternalSourcePayload
    publicApiLinkTeamToExternalSourcePayload: ...,
  } satisfies LinkTeamToExternalSourceRequest;

  try {
    const data = await api.linkTeamToExternalSource(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation the team and external reference to be linked belongs to. | [Defaults to `undefined`] |
| **teamId** | `string` | The ID of the team to be linked. | [Defaults to `undefined`] |
| **publicApiLinkTeamToExternalSourcePayload** | [PublicApiLinkTeamToExternalSourcePayload](PublicApiLinkTeamToExternalSourcePayload.md) |  | |

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
| **204** | Team linked to external reference successfully. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

