# ResourceApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAgentAssignment**](ResourceApi.md#addagentassignment) | **POST** /api/latest/agent/assignment |  |
| [**createAccessToken**](ResourceApi.md#createaccesstokenoperation) | **POST** /api/latest/access-token |  |
| [**getAgentAssignments**](ResourceApi.md#getagentassignments) | **GET** /api/latest/agent/assignment |  |
| [**getUserTokens**](ResourceApi.md#getusertokens) | **GET** /api/latest/access-token |  |
| [**removeAssignment**](ResourceApi.md#removeassignment) | **DELETE** /api/latest/agent/assignment |  |
| [**revokeToken**](ResourceApi.md#revoketoken) | **DELETE** /api/latest/access-token/{tokenId} |  |
| [**searchEntityForAgent**](ResourceApi.md#searchentityforagent) | **GET** /api/latest/agent/assignment/search |  |



## addAgentAssignment

> RestDedicatedAgent addAgentAssignment(executorType, executorId, entityId, assignmentType)



Dedicate agent, elastic image or ephemeral template.

### Example

```ts
import {
  Configuration,
  ResourceApi,
} from 'bamboo-api';
import type { AddAgentAssignmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new ResourceApi();

  const body = {
    // 'AGENT' | 'IMAGE' | 'EPHEMERAL' | Executor type (optional)
    executorType: executorType_example,
    // number | id of the agent or elastic image (optional)
    executorId: 789,
    // number | identifier of project, plan, job, deployment project or environment (optional)
    entityId: 789,
    // string | should be PROJECT, PLAN, JOB, ENVIRONMENT, DEPLOYMENT_PROJECT (optional)
    assignmentType: assignmentType_example,
  } satisfies AddAgentAssignmentRequest;

  try {
    const data = await api.addAgentAssignment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **executorType** | `AGENT`, `IMAGE`, `EPHEMERAL` | Executor type | [Optional] [Defaults to `undefined`] [Enum: AGENT, IMAGE, EPHEMERAL] |
| **executorId** | `number` | id of the agent or elastic image | [Optional] [Defaults to `undefined`] |
| **entityId** | `number` | identifier of project, plan, job, deployment project or environment | [Optional] [Defaults to `undefined`] |
| **assignmentType** | `string` | should be PROJECT, PLAN, JOB, ENVIRONMENT, DEPLOYMENT_PROJECT | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDedicatedAgent**](RestDedicatedAgent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of agent\&#39;s assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAccessToken

> RestAccessToken createAccessToken(createAccessTokenRequest)



Create a new access token for the current user.

### Example

```ts
import {
  Configuration,
  ResourceApi,
} from 'bamboo-api';
import type { CreateAccessTokenOperationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new ResourceApi();

  const body = {
    // CreateAccessTokenRequest | request for a token - name is a required field
    createAccessTokenRequest: ...,
  } satisfies CreateAccessTokenOperationRequest;

  try {
    const data = await api.createAccessToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createAccessTokenRequest** | [CreateAccessTokenRequest](CreateAccessTokenRequest.md) | request for a token - name is a required field | |

### Return type

[**RestAccessToken**](RestAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New access tokens with rawToken field value. |  -  |
| **400** | Token count limit exceeded, token with same name already exists, general error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentAssignments

> Array&lt;RestDedicatedAgent&gt; getAgentAssignments(executorType, executorId)



Get agent\&#39;s assignment.

### Example

```ts
import {
  Configuration,
  ResourceApi,
} from 'bamboo-api';
import type { GetAgentAssignmentsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new ResourceApi();

  const body = {
    // 'AGENT' | 'IMAGE' | 'EPHEMERAL' | Executor type (optional)
    executorType: executorType_example,
    // number | id of the agent or elastic image (optional)
    executorId: 789,
  } satisfies GetAgentAssignmentsRequest;

  try {
    const data = await api.getAgentAssignments(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **executorType** | `AGENT`, `IMAGE`, `EPHEMERAL` | Executor type | [Optional] [Defaults to `undefined`] [Enum: AGENT, IMAGE, EPHEMERAL] |
| **executorId** | `number` | id of the agent or elastic image | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;RestDedicatedAgent&gt;**](RestDedicatedAgent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of agent\&#39;s assignments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTokens

> GetUserTokens200Response getUserTokens(limit, start)



Retrieve a page of user\&#39;s access tokens.

### Example

```ts
import {
  Configuration,
  ResourceApi,
} from 'bamboo-api';
import type { GetUserTokensRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new ResourceApi();

  const body = {
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetUserTokensRequest;

  try {
    const data = await api.getUserTokens(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **limit** | `number` | Page request size | [Optional] [Defaults to `25`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUserTokens200Response**](GetUserTokens200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A page of access tokens. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeAssignment

> removeAssignment(executorType, executorId, entityId, assignmentType)



Remove agent\&#39;s assignment.

### Example

```ts
import {
  Configuration,
  ResourceApi,
} from 'bamboo-api';
import type { RemoveAssignmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new ResourceApi();

  const body = {
    // 'AGENT' | 'IMAGE' | 'EPHEMERAL' | Executor type (optional)
    executorType: executorType_example,
    // number | id of the agent or elastic image (optional)
    executorId: 789,
    // number | identifier of project, plan, job, deployment project or environment (optional)
    entityId: 789,
    // string | should be PROJECT, PLAN, JOB, ENVIRONMENT, DEPLOYMENT_PROJECT (optional)
    assignmentType: assignmentType_example,
  } satisfies RemoveAssignmentRequest;

  try {
    const data = await api.removeAssignment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **executorType** | `AGENT`, `IMAGE`, `EPHEMERAL` | Executor type | [Optional] [Defaults to `undefined`] [Enum: AGENT, IMAGE, EPHEMERAL] |
| **executorId** | `number` | id of the agent or elastic image | [Optional] [Defaults to `undefined`] |
| **entityId** | `number` | identifier of project, plan, job, deployment project or environment | [Optional] [Defaults to `undefined`] |
| **assignmentType** | `string` | should be PROJECT, PLAN, JOB, ENVIRONMENT, DEPLOYMENT_PROJECT | [Optional] [Defaults to `undefined`] |

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
| **204** | successful removal of agent assignment |  -  |
| **400** | can\&#39;t parse executorType or executableType |  -  |
| **401** | user has insufficient permissions for the request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## revokeToken

> revokeToken(tokenId)



Revoke current user\&#39;s access token.

### Example

```ts
import {
  Configuration,
  ResourceApi,
} from 'bamboo-api';
import type { RevokeTokenRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new ResourceApi();

  const body = {
    // string | id of the token
    tokenId: tokenId_example,
  } satisfies RevokeTokenRequest;

  try {
    const data = await api.revokeToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenId** | `string` | id of the token | [Defaults to `undefined`] |

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
| **204** | When token has been successfully revoked. |  -  |
| **400** | User doesn\&#39;t own provided token. The response will hold additional information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchEntityForAgent

> SearchResultsList searchEntityForAgent(maxResult, executorType, searchTerm, executorId, entityType, startIndex, assignmentType)



Search for assignments in specified entity\&#39;s agents

### Example

```ts
import {
  Configuration,
  ResourceApi,
} from 'bamboo-api';
import type { SearchEntityForAgentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new ResourceApi();

  const body = {
    // number | Maximum count of records (optional)
    maxResult: 56,
    // 'AGENT' | 'IMAGE' | 'EPHEMERAL' | Executor type (optional)
    executorType: executorType_example,
    // string | term to search for (optional)
    searchTerm: searchTerm_example,
    // number | id of the agent or elastic image (optional)
    executorId: 789,
    // string (optional)
    entityType: entityType_example,
    // number | Start index of records (optional)
    startIndex: 56,
    // string | should be PROJECT, PLAN, JOB, ENVIRONMENT, DEPLOYMENT_PROJECT (optional)
    assignmentType: assignmentType_example,
  } satisfies SearchEntityForAgentRequest;

  try {
    const data = await api.searchEntityForAgent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **maxResult** | `number` | Maximum count of records | [Optional] [Defaults to `undefined`] |
| **executorType** | `AGENT`, `IMAGE`, `EPHEMERAL` | Executor type | [Optional] [Defaults to `undefined`] [Enum: AGENT, IMAGE, EPHEMERAL] |
| **searchTerm** | `string` | term to search for | [Optional] [Defaults to `undefined`] |
| **executorId** | `number` | id of the agent or elastic image | [Optional] [Defaults to `undefined`] |
| **entityType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of records | [Optional] [Defaults to `undefined`] |
| **assignmentType** | `string` | should be PROJECT, PLAN, JOB, ENVIRONMENT, DEPLOYMENT_PROJECT | [Optional] [Defaults to `undefined`] |

### Return type

[**SearchResultsList**](SearchResultsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of search results |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

