# TeamsInPlanApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAtlassianTeam**](TeamsInPlanApi.md#addatlassianteamoperation) | **POST** /rest/api/3/plans/plan/{planId}/team/atlassian | Add Atlassian team to plan |
| [**createPlanOnlyTeam**](TeamsInPlanApi.md#createplanonlyteamoperation) | **POST** /rest/api/3/plans/plan/{planId}/team/planonly | Create plan-only team |
| [**deletePlanOnlyTeam**](TeamsInPlanApi.md#deleteplanonlyteam) | **DELETE** /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId} | Delete plan-only team |
| [**getAtlassianTeam**](TeamsInPlanApi.md#getatlassianteam) | **GET** /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId} | Get Atlassian team in plan |
| [**getPlanOnlyTeam**](TeamsInPlanApi.md#getplanonlyteam) | **GET** /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId} | Get plan-only team |
| [**getTeams**](TeamsInPlanApi.md#getteams) | **GET** /rest/api/3/plans/plan/{planId}/team | Get teams in plan paginated |
| [**removeAtlassianTeam**](TeamsInPlanApi.md#removeatlassianteam) | **DELETE** /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId} | Remove Atlassian team from plan |
| [**updateAtlassianTeam**](TeamsInPlanApi.md#updateatlassianteam) | **PUT** /rest/api/3/plans/plan/{planId}/team/atlassian/{atlassianTeamId} | Update Atlassian team in plan |
| [**updatePlanOnlyTeam**](TeamsInPlanApi.md#updateplanonlyteam) | **PUT** /rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId} | Update plan-only team |



## addAtlassianTeam

> any addAtlassianTeam(planId, addAtlassianTeamRequest)

Add Atlassian team to plan

Adds an existing Atlassian team to a plan and configures their plannning settings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { AddAtlassianTeamOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // AddAtlassianTeamRequest
    addAtlassianTeamRequest: {"capacity":200,"id":"AtlassianTeamId","issueSourceId":0,"planningStyle":"Scrum","sprintLength":2},
  } satisfies AddAtlassianTeamOperationRequest;

  try {
    const data = await api.addAtlassianTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **addAtlassianTeamRequest** | [AddAtlassianTeamRequest](AddAtlassianTeamRequest.md) |  | |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan or Atlassian team is not found. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPlanOnlyTeam

> number createPlanOnlyTeam(planId, createPlanOnlyTeamRequest)

Create plan-only team

Creates a plan-only team and configures their planning settings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { CreatePlanOnlyTeamOperationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // CreatePlanOnlyTeamRequest
    createPlanOnlyTeamRequest: {"capacity":200,"issueSourceId":0,"memberAccountIds":["member1AccountId","member2AccountId"],"name":"Team1","planningStyle":"Scrum","sprintLength":2},
  } satisfies CreatePlanOnlyTeamOperationRequest;

  try {
    const data = await api.createPlanOnlyTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **createPlanOnlyTeamRequest** | [CreatePlanOnlyTeamRequest](CreatePlanOnlyTeamRequest.md) |  | |

### Return type

**number**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan is not found. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePlanOnlyTeam

> any deletePlanOnlyTeam(planId, planOnlyTeamId)

Delete plan-only team

Deletes a plan-only team and their planning settings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { DeletePlanOnlyTeamRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // number | The ID of the plan-only team.
    planOnlyTeamId: 789,
  } satisfies DeletePlanOnlyTeamRequest;

  try {
    const data = await api.deletePlanOnlyTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **planOnlyTeamId** | `number` | The ID of the plan-only team. | [Defaults to `undefined`] |

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
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan or plan-only team is not found, or the plan-only team is not associated with the plan. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAtlassianTeam

> GetAtlassianTeamResponse getAtlassianTeam(planId, atlassianTeamId)

Get Atlassian team in plan

Returns planning settings for an Atlassian team in a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { GetAtlassianTeamRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // string | The ID of the Atlassian team.
    atlassianTeamId: atlassianTeamId_example,
  } satisfies GetAtlassianTeamRequest;

  try {
    const data = await api.getAtlassianTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **atlassianTeamId** | `string` | The ID of the Atlassian team. | [Defaults to `undefined`] |

### Return type

[**GetAtlassianTeamResponse**](GetAtlassianTeamResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan or Atlassian team is not found, or the Atlassian team is not associated with the plan. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanOnlyTeam

> GetPlanOnlyTeamResponse getPlanOnlyTeam(planId, planOnlyTeamId)

Get plan-only team

Returns planning settings for a plan-only team.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { GetPlanOnlyTeamRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // number | The ID of the plan-only team.
    planOnlyTeamId: 789,
  } satisfies GetPlanOnlyTeamRequest;

  try {
    const data = await api.getPlanOnlyTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **planOnlyTeamId** | `number` | The ID of the plan-only team. | [Defaults to `undefined`] |

### Return type

[**GetPlanOnlyTeamResponse**](GetPlanOnlyTeamResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan or plan-only team is not found, or the plan-only team is not associated with the plan. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTeams

> PageWithCursorGetTeamResponseForPage getTeams(planId, cursor, maxResults)

Get teams in plan paginated

Returns a [paginated](#pagination) list of plan-only and Atlassian teams in a plan.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { GetTeamsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // string | The cursor to start from. If not provided, the first page will be returned. (optional)
    cursor: cursor_example,
    // number | The maximum number of plan teams to return per page. The maximum value is 50. The default value is 50. (optional)
    maxResults: 56,
  } satisfies GetTeamsRequest;

  try {
    const data = await api.getTeams(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **cursor** | `string` | The cursor to start from. If not provided, the first page will be returned. | [Optional] [Defaults to `&#39;&#39;`] |
| **maxResults** | `number` | The maximum number of plan teams to return per page. The maximum value is 50. The default value is 50. | [Optional] [Defaults to `50`] |

### Return type

[**PageWithCursorGetTeamResponseForPage**](PageWithCursorGetTeamResponseForPage.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeAtlassianTeam

> any removeAtlassianTeam(planId, atlassianTeamId)

Remove Atlassian team from plan

Removes an Atlassian team from a plan and deletes their planning settings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { RemoveAtlassianTeamRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // string | The ID of the Atlassian team.
    atlassianTeamId: atlassianTeamId_example,
  } satisfies RemoveAtlassianTeamRequest;

  try {
    const data = await api.removeAtlassianTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **atlassianTeamId** | `string` | The ID of the Atlassian team. | [Defaults to `undefined`] |

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
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan or Atlassian team is not found, or the Atlassian team is not associated with the plan. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAtlassianTeam

> any updateAtlassianTeam(planId, atlassianTeamId, body)

Update Atlassian team in plan

Updates any of the following planning settings of an Atlassian team in a plan using [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902).   *  planningStyle  *  issueSourceId  *  sprintLength  *  capacity  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *Note that \&quot;add\&quot; operations do not respect array indexes in target locations. Call the \&quot;Get Atlassian team in plan\&quot; endpoint to find out the order of array elements.*

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { UpdateAtlassianTeamRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // string | The ID of the Atlassian team.
    atlassianTeamId: atlassianTeamId_example,
    // object
    body: [{"op": "replace", "path": "/planningStyle", "value": "Kanban"}]
,
  } satisfies UpdateAtlassianTeamRequest;

  try {
    const data = await api.updateAtlassianTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **atlassianTeamId** | `string` | The ID of the Atlassian team. | [Defaults to `undefined`] |
| **body** | `object` |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan or Atlassian team is not found, or the Atlassian team is not associated with the plan. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePlanOnlyTeam

> any updatePlanOnlyTeam(planId, planOnlyTeamId, body)

Update plan-only team

Updates any of the following planning settings of a plan-only team using [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902).   *  name  *  planningStyle  *  issueSourceId  *  sprintLength  *  capacity  *  memberAccountIds  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *Note that \&quot;add\&quot; operations do not respect array indexes in target locations. Call the \&quot;Get plan-only team\&quot; endpoint to find out the order of array elements.*

### Example

```ts
import {
  Configuration,
  TeamsInPlanApi,
} from 'jira-cloud-api';
import type { UpdatePlanOnlyTeamRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TeamsInPlanApi(config);

  const body = {
    // number | The ID of the plan.
    planId: 789,
    // number | The ID of the plan-only team.
    planOnlyTeamId: 789,
    // object
    body: [{"op": "replace", "path": "/planningStyle", "value": "Kanban"}]
,
  } satisfies UpdatePlanOnlyTeamRequest;

  try {
    const data = await api.updatePlanOnlyTeam(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planId** | `number` | The ID of the plan. | [Defaults to `undefined`] |
| **planOnlyTeamId** | `number` | The ID of the plan-only team. | [Defaults to `undefined`] |
| **body** | `object` |  | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the site has no premium edition of Jira or if the user does not have the Administer Jira global permission. |  -  |
| **404** | Returned if the plan or plan-only team is not found, or the plan-only team is not associated with the plan. |  -  |
| **409** | Returned if the plan is not active. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

