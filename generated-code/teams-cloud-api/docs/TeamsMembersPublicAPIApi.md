# TeamsMembersPublicAPIApi

All URIs are relative to *https://api.atlassian.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addMembers**](TeamsMembersPublicAPIApi.md#addmembers) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/members/add | Add a set of membership(s). |
| [**fetchMembers**](TeamsMembersPublicAPIApi.md#fetchmembers) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/members | Fetch a set of membership(s). |
| [**removeMembers**](TeamsMembersPublicAPIApi.md#removemembers) | **POST** /public/teams/v1/org/{orgId}/teams/{teamId}/members/remove | Remove a set of membership(s). |



## addMembers

> PublicApiMembershipAddResponse addMembers(orgId, teamId, publicApiMembershipAddPayload)

Add a set of membership(s).

The account IDs specified will be added to the team.

### Example

```ts
import {
  Configuration,
  TeamsMembersPublicAPIApi,
} from 'teams-cloud-api';
import type { AddMembersRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsMembersPublicAPIApi();

  const body = {
    // string | The ID of the organisation of the team you are adding members to.
    orgId: orgId_example,
    // string | The ID of the team you are adding members to.
    teamId: teamId_example,
    // PublicApiMembershipAddPayload | A set of account IDs to add as members.
    publicApiMembershipAddPayload: ...,
  } satisfies AddMembersRequest;

  try {
    const data = await api.addMembers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation of the team you are adding members to. | [Defaults to `undefined`] |
| **teamId** | `string` | The ID of the team you are adding members to. | [Defaults to `undefined`] |
| **publicApiMembershipAddPayload** | [PublicApiMembershipAddPayload](PublicApiMembershipAddPayload.md) | A set of account IDs to add as members. | |

### Return type

[**PublicApiMembershipAddResponse**](PublicApiMembershipAddResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team members were added successfully, at least partially. See the \&#39;members\&#39; field of the response for any successful additions, and the \&#39;errors\&#39; field of the response for any failed additions. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |
| **410** | The team has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## fetchMembers

> PublicApiFetchResponsePublicApiMembershipAccountId fetchMembers(orgId, teamId, siteId, publicApiMembershipFetchPayload)

Fetch a set of membership(s).

Returns a set of account IDs who are members of the team, alongside a pagination cursor to retrieve the next page (if available).

### Example

```ts
import {
  Configuration,
  TeamsMembersPublicAPIApi,
} from 'teams-cloud-api';
import type { FetchMembersRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsMembersPublicAPIApi();

  const body = {
    // string | The ID of the organisation of the team you are fetching members for.
    orgId: orgId_example,
    // string | The ID of the team you are fetching members for.
    teamId: teamId_example,
    // string | [Optional] The ID of the site you are fetching members for. [Deprecated] We have deprecated the empty siteId since it only works for org-scoped teams and teams are moving to unit-scope. It\'s recommended to always provide a valid siteId to ensure this operation continues to work in the future. (optional)
    siteId: siteId_example,
    // PublicApiMembershipFetchPayload | Optional Relay-style pagination controls. Can be omitted if empty. (optional)
    publicApiMembershipFetchPayload: ...,
  } satisfies FetchMembersRequest;

  try {
    const data = await api.fetchMembers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation of the team you are fetching members for. | [Defaults to `undefined`] |
| **teamId** | `string` | The ID of the team you are fetching members for. | [Defaults to `undefined`] |
| **siteId** | `string` | [Optional] The ID of the site you are fetching members for. [Deprecated] We have deprecated the empty siteId since it only works for org-scoped teams and teams are moving to unit-scope. It\&#39;s recommended to always provide a valid siteId to ensure this operation continues to work in the future. | [Optional] [Defaults to `undefined`] |
| **publicApiMembershipFetchPayload** | [PublicApiMembershipFetchPayload](PublicApiMembershipFetchPayload.md) | Optional Relay-style pagination controls. Can be omitted if empty. | [Optional] |

### Return type

[**PublicApiFetchResponsePublicApiMembershipAccountId**](PublicApiFetchResponsePublicApiMembershipAccountId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team members were fetched successfully. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |
| **410** | The team has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeMembers

> PublicApiMembershipRemoveResponse removeMembers(orgId, teamId, publicApiMembershipRemovePayload)

Remove a set of membership(s).

The account IDs specified will be removed from the team.

### Example

```ts
import {
  Configuration,
  TeamsMembersPublicAPIApi,
} from 'teams-cloud-api';
import type { RemoveMembersRequest } from 'teams-cloud-api';

async function example() {
  console.log("🚀 Testing teams-cloud-api SDK...");
  const api = new TeamsMembersPublicAPIApi();

  const body = {
    // string | The ID of the organisation of the team you are removing members from.
    orgId: orgId_example,
    // string | The ID of the team you are removing members from.
    teamId: teamId_example,
    // PublicApiMembershipRemovePayload | A set of account IDs to remove as members.
    publicApiMembershipRemovePayload: ...,
  } satisfies RemoveMembersRequest;

  try {
    const data = await api.removeMembers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orgId** | `string` | The ID of the organisation of the team you are removing members from. | [Defaults to `undefined`] |
| **teamId** | `string` | The ID of the team you are removing members from. | [Defaults to `undefined`] |
| **publicApiMembershipRemovePayload** | [PublicApiMembershipRemovePayload](PublicApiMembershipRemovePayload.md) | A set of account IDs to remove as members. | |

### Return type

[**PublicApiMembershipRemoveResponse**](PublicApiMembershipRemoveResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Team members were removed successfully, at least partially. See the \&#39;errors\&#39; field of the response for any failed removals. |  -  |
| **400** | One or more values that were provided were invalid. |  -  |
| **403** | Forbidden. |  -  |
| **404** | The team cannot be found. |  -  |
| **410** | The team has been deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

