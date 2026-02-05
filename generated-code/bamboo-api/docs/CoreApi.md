# CoreApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAgentAssignmentForEnvironment**](CoreApi.md#addagentassignmentforenvironment) | **POST** /api/latest/deploy/environment/{environmentId}/agent-assignment |  |
| [**addAgentAssignmentForJob**](CoreApi.md#addagentassignmentforjob) | **POST** /api/latest/config/job/{jobKey}/agent-assignment |  |
| [**addRequirementForEnvironment**](CoreApi.md#addrequirementforenvironment) | **POST** /api/latest/deploy/environment/{environmentId}/requirement |  |
| [**createEnvironmentVariable**](CoreApi.md#createenvironmentvariable) | **POST** /api/latest/deploy/environment/{environmentId}/variable |  |
| [**deleteEnvironmentVariable**](CoreApi.md#deleteenvironmentvariable) | **DELETE** /api/latest/deploy/environment/{environmentId}/variable/{variableName} |  |
| [**findAssignedAgentsByEnvironment**](CoreApi.md#findassignedagentsbyenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/agent-assignment |  |
| [**findAssignedAgentsByJob**](CoreApi.md#findassignedagentsbyjob) | **GET** /api/latest/config/job/{jobKey}/agent-assignment |  |
| [**findPossibleAgentsForEnvironment**](CoreApi.md#findpossibleagentsforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/possible-agent-assignment |  |
| [**findPossibleAgentsForJob**](CoreApi.md#findpossibleagentsforjob) | **GET** /api/latest/config/job/{jobKey}/agent-assignment/possible-agent-assignment |  |
| [**getAgentMatchesForEnvironment**](CoreApi.md#getagentmatchesforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/requirement/summary |  |
| [**getAllEnvironmentVariables**](CoreApi.md#getallenvironmentvariables) | **GET** /api/latest/deploy/environment/{environmentId}/variables |  |
| [**getDeploymentResultList**](CoreApi.md#getdeploymentresultlist) | **GET** /api/latest/deploy/environment/{environmentId}/results |  |
| [**getDetailedAgentMatchesForEnvironment**](CoreApi.md#getdetailedagentmatchesforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/requirement/detailedSummary |  |
| [**getDockerPipelinesConfiguration**](CoreApi.md#getdockerpipelinesconfiguration) | **GET** /api/latest/deploy/environment/{environmentId}/docker |  |
| [**getEnvironment**](CoreApi.md#getenvironment) | **GET** /api/latest/deploy/environment/{environmentId} |  |
| [**getEnvironmentVariable**](CoreApi.md#getenvironmentvariable) | **GET** /api/latest/deploy/environment/{environmentId}/variable/{variableName} |  |
| [**getEnvironmentsExecutableByAgent**](CoreApi.md#getenvironmentsexecutablebyagent) | **GET** /api/latest/deploy/environment/agent/{agentId} |  |
| [**getEnvironmentsExecutableByElasticConfiguration**](CoreApi.md#getenvironmentsexecutablebyelasticconfiguration) | **GET** /api/latest/deploy/environment/elasticImageConfiguration/{configurationId} |  |
| [**getEnvironmentsExecutableByEphemeralAgentTemplate**](CoreApi.md#getenvironmentsexecutablebyephemeralagenttemplate) | **GET** /api/latest/deploy/environment/ephemeral/{templateId} |  |
| [**getRequirementForEnvironment**](CoreApi.md#getrequirementforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/requirement/{requirementId} |  |
| [**getRequirementsForEnvironment**](CoreApi.md#getrequirementsforenvironment) | **GET** /api/latest/deploy/environment/{environmentId}/requirement |  |
| [**moveEnvironment**](CoreApi.md#moveenvironment) | **POST** /api/latest/deploy/environment/{environmentId}/move/{position}/{relativeEnvironmentId} |  |
| [**removeAgentAssignmentFromEnvironment**](CoreApi.md#removeagentassignmentfromenvironment) | **DELETE** /api/latest/deploy/environment/{environmentId}/agent-assignment/{executorKey} |  |
| [**removeAgentAssignmentFromJob**](CoreApi.md#removeagentassignmentfromjob) | **DELETE** /api/latest/config/job/{jobKey}/agent-assignment/{executorKey} |  |
| [**removeRequirementFromEnvironment**](CoreApi.md#removerequirementfromenvironment) | **DELETE** /api/latest/deploy/environment/{environmentId}/requirement/{requirementId} |  |
| [**saveDockerPipelinesConfiguration**](CoreApi.md#savedockerpipelinesconfiguration) | **PUT** /api/latest/deploy/environment/{environmentId}/docker |  |
| [**updateEnvironmentPrerequisites**](CoreApi.md#updateenvironmentprerequisites) | **PUT** /api/latest/deploy/environment/{environmentId}/prerequisites |  |
| [**updateEnvironmentVariable**](CoreApi.md#updateenvironmentvariable) | **PUT** /api/latest/deploy/environment/{environmentId}/variable/{variableName} |  |
| [**updateRequirementForEnvironment**](CoreApi.md#updaterequirementforenvironment) | **PUT** /api/latest/deploy/environment/{environmentId}/requirement/{requirementId} |  |



## addAgentAssignmentForEnvironment

> RestAgentAssignmentExecutorDetails addAgentAssignmentForEnvironment(environmentId, body)



Add agent assignment for environment. agentAssignmentKey is a map with one key-value: name - agentAssignmentKey.  agentAssignmentKey is parsed by ExecutorKey.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { AddAgentAssignmentForEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // string | A map with \'name\' key which reference agent assignment key as \'value\' (optional)
    body: body_example,
  } satisfies AddAgentAssignmentForEnvironmentRequest;

  try {
    const data = await api.addAgentAssignmentForEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **body** | `string` | A map with \&#39;name\&#39; key which reference agent assignment key as \&#39;value\&#39; | [Optional] |

### Return type

[**RestAgentAssignmentExecutorDetails**](RestAgentAssignmentExecutorDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns new agent assignments for the given environment. |  -  |
| **400** | If validation fails |  -  |
| **403** | If the user has no permissions for updating an agent assignment, which translates into no WRITE permissions to edit the configuration of the environment |  -  |
| **404** | If the environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addAgentAssignmentForJob

> RestAgentAssignmentExecutorDetails addAgentAssignmentForJob(jobKey, body)



Add agent assignment for job. agentAssignmentKey is a map with one key-value: name - agentAssignmentKey.  agentAssignmentKey is parsed by ExecutorKey.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { AddAgentAssignmentForJobRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | job key
    jobKey: jobKey_example,
    // string | A map with \'name\' key which reference agent assignment key as \'value\' (optional)
    body: body_example,
  } satisfies AddAgentAssignmentForJobRequest;

  try {
    const data = await api.addAgentAssignmentForJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobKey** | `string` | job key | [Defaults to `undefined`] |
| **body** | `string` | A map with \&#39;name\&#39; key which reference agent assignment key as \&#39;value\&#39; | [Optional] |

### Return type

[**RestAgentAssignmentExecutorDetails**](RestAgentAssignmentExecutorDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns new agent assignments for the given job. |  -  |
| **400** | If validation fails |  -  |
| **403** | If the user has no permissions for updating an agent assignment, which translates into no WRITE permissions to edit the configuration of the job |  -  |
| **404** | If the job is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addRequirementForEnvironment

> RestRequirement addRequirementForEnvironment(environmentId, restRequirement)



Adds a requirement for a given environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { AddRequirementForEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // RestRequirement | A representation of the requirement (optional)
    restRequirement: ...,
  } satisfies AddRequirementForEnvironmentRequest;

  try {
    const data = await api.addRequirementForEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **restRequirement** | [RestRequirement](RestRequirement.md) | A representation of the requirement | [Optional] |

### Return type

[**RestRequirement**](RestRequirement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The created requirement |  -  |
| **403** | If the user has no permissions to add a requirement to an environment, which translates into no WRITE permissions to edit the configuration of the environment it belongs to. |  -  |
| **404** | If the environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createEnvironmentVariable

> RestVariableDefinitionContext createEnvironmentVariable(environmentId, restVariable)



Create the environment variable.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { CreateEnvironmentVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // RestVariable | The new variable. (optional)
    restVariable: ...,
  } satisfies CreateEnvironmentVariableRequest;

  try {
    const data = await api.createEnvironmentVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **restVariable** | [RestVariable](RestVariable.md) | The new variable. | [Optional] |

### Return type

[**RestVariableDefinitionContext**](RestVariableDefinitionContext.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Variable has been created successfully |  -  |
| **400** | Invalid variable or already exists |  -  |
| **401** | Authentication required |  -  |
| **403** | User has no permission to edit specified environment |  -  |
| **404** | Specified environment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteEnvironmentVariable

> deleteEnvironmentVariable(variableName, environmentId)



Delete the environment variable.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { DeleteEnvironmentVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | variable name
    variableName: variableName_example,
    // string | environment id
    environmentId: environmentId_example,
  } satisfies DeleteEnvironmentVariableRequest;

  try {
    const data = await api.deleteEnvironmentVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **variableName** | `string` | variable name | [Defaults to `undefined`] |
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

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
| **204** | Variable has been deleted successfully |  -  |
| **401** | Authentication required |  -  |
| **403** | User has no permission to delete specified environment |  -  |
| **404** | Specified environment or variable does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAssignedAgentsByEnvironment

> Array&lt;RestAgentAssignmentExecutorDetails&gt; findAssignedAgentsByEnvironment(environmentId)



Get a list of agents/images assigned to given environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { FindAssignedAgentsByEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
  } satisfies FindAssignedAgentsByEnvironmentRequest;

  try {
    const data = await api.findAssignedAgentsByEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestAgentAssignmentExecutorDetails&gt;**](RestAgentAssignmentExecutorDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns list of assigned agents |  -  |
| **403** | If the user has no permissions for updating an agent assignment, which translates into no WRITE permissions to edit the configuration of the environment |  -  |
| **404** | If the environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAssignedAgentsByJob

> Array&lt;RestAgentAssignmentExecutorDetails&gt; findAssignedAgentsByJob(jobKey)



Get a list of agents/images assigned to given job.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { FindAssignedAgentsByJobRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | job key
    jobKey: jobKey_example,
  } satisfies FindAssignedAgentsByJobRequest;

  try {
    const data = await api.findAssignedAgentsByJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobKey** | `string` | job key | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestAgentAssignmentExecutorDetails&gt;**](RestAgentAssignmentExecutorDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns list of assigned agents |  -  |
| **403** | If the user has no permissions for updating an agent assignment, which translates into no WRITE permissions to edit the configuration of the job |  -  |
| **404** | If the job key is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findPossibleAgentsForEnvironment

> findPossibleAgentsForEnvironment(environmentId, maxResult, searchTerm, startIndex)



Get a list of agents/images/templates which can be dedicated for given environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { FindPossibleAgentsForEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // number | Maximum count of elements (optional)
    maxResult: 56,
    // string | Part of the agent or image name to filter response. Use empty value to receive all agents/images/templates. (optional)
    searchTerm: searchTerm_example,
    // number | Start index of elements (optional)
    startIndex: 56,
  } satisfies FindPossibleAgentsForEnvironmentRequest;

  try {
    const data = await api.findPossibleAgentsForEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of elements | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | Part of the agent or image name to filter response. Use empty value to receive all agents/images/templates. | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of elements | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns possible agents for environment. |  -  |
| **403** | If the user has no permissions for updating an agent assignment, which translates into no WRITE permissions to edit the configuration of the environment |  -  |
| **404** | If the environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findPossibleAgentsForJob

> findPossibleAgentsForJob(jobKey, maxResult, searchTerm, startIndex)



Get a list of agents/images/templates which can be dedicated for given job.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { FindPossibleAgentsForJobRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | job key
    jobKey: jobKey_example,
    // number | Maximum count of agents (optional)
    maxResult: 56,
    // string | Part of the agent/image/template name to filter response. Use empty value to receive all agents/images/templates. (optional)
    searchTerm: searchTerm_example,
    // number | Start index of agents (optional)
    startIndex: 56,
  } satisfies FindPossibleAgentsForJobRequest;

  try {
    const data = await api.findPossibleAgentsForJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jobKey** | `string` | job key | [Defaults to `undefined`] |
| **maxResult** | `number` | Maximum count of agents | [Optional] [Defaults to `undefined`] |
| **searchTerm** | `string` | Part of the agent/image/template name to filter response. Use empty value to receive all agents/images/templates. | [Optional] [Defaults to `undefined`] |
| **startIndex** | `number` | Start index of agents | [Optional] [Defaults to `undefined`] |

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
| **200** | Returns possible agents for job. |  -  |
| **403** | If the user has no permissions for updating an agent assignment, which translates into no WRITE permissions to edit the configuration of the job |  -  |
| **404** | If the job is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAgentMatchesForEnvironment

> RestAgentSummary getAgentMatchesForEnvironment(environmentId)



Gets a summary of the agents that are capable of running an environment, based of its requirements.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetAgentMatchesForEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
  } satisfies GetAgentMatchesForEnvironmentRequest;

  try {
    const data = await api.getAgentMatchesForEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

### Return type

[**RestAgentSummary**](RestAgentSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A summary of the agents that can run an environment |  -  |
| **403** | If the user does not have permissions to get information about the environment. |  -  |
| **404** | If the specified environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllEnvironmentVariables

> getAllEnvironmentVariables(environmentId)



Get a list of environment variables.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetAllEnvironmentVariablesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
  } satisfies GetAllEnvironmentVariablesRequest;

  try {
    const data = await api.getAllEnvironmentVariables(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

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
| **200** | List of variables for the given environment id |  -  |
| **401** | Authentication required |  -  |
| **403** | Returned when user has no permission to view configuration of specified environment |  -  |
| **404** | Returned when specified environment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentResultList

> RestDeploymentResultList getDeploymentResultList(environmentId, expand)



Get a list of versions deployed to the environment. Sorted by started date: newest first.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetDeploymentResultListRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // string | Expands deployment versions. Possible values are: results (optional)
    expand: expand_example,
  } satisfies GetDeploymentResultListRequest;

  try {
    const data = await api.getDeploymentResultList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **expand** | `string` | Expands deployment versions. Possible values are: results | [Optional] [Defaults to `undefined`] |

### Return type

[**RestDeploymentResultList**](RestDeploymentResultList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns list of deployment results. |  -  |
| **403** | Returns when user don\&#39;t have VIEW permission for environment |  -  |
| **404** | If the environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDetailedAgentMatchesForEnvironment

> RestAgentSummary getDetailedAgentMatchesForEnvironment(environmentId)



Gets a detailed summary of the agents that are capable of running an environment, based of its requirements.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetDetailedAgentMatchesForEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
  } satisfies GetDetailedAgentMatchesForEnvironmentRequest;

  try {
    const data = await api.getDetailedAgentMatchesForEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

### Return type

[**RestAgentSummary**](RestAgentSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A summary of the agents that can run an environment |  -  |
| **403** | If the user does not have permissions to get information about the environment. |  -  |
| **404** | If the specified environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDockerPipelinesConfiguration

> RestDockerPipelineConfiguration getDockerPipelinesConfiguration(environmentId)



Get Docker configuration for given environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetDockerPipelinesConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
  } satisfies GetDockerPipelinesConfigurationRequest;

  try {
    const data = await api.getDockerPipelinesConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

### Return type

[**RestDockerPipelineConfiguration**](RestDockerPipelineConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns Docker Pipeline configuration for given environment |  -  |
| **400** | If validation fails |  -  |
| **403** | If the user has no edit permissions |  -  |
| **404** | If the environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEnvironment

> RestEnvironmentWithConfigCounts getEnvironment(environmentId)



Get a summary of a single environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
  } satisfies GetEnvironmentRequest;

  try {
    const data = await api.getEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

### Return type

[**RestEnvironmentWithConfigCounts**](RestEnvironmentWithConfigCounts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Environment with the given id |  -  |
| **403** | User don\&#39;t have VIEW permission for environment |  -  |
| **404** | Environment with given id has not been found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEnvironmentVariable

> RestVariable getEnvironmentVariable(variableName, environmentId)



Get the environment variable by its name.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetEnvironmentVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | variable name
    variableName: variableName_example,
    // string | environment id
    environmentId: environmentId_example,
  } satisfies GetEnvironmentVariableRequest;

  try {
    const data = await api.getEnvironmentVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **variableName** | `string` | variable name | [Defaults to `undefined`] |
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

### Return type

[**RestVariable**](RestVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Environment variable with the given name |  -  |
| **401** | Authentication required |  -  |
| **403** | Returned when user has no permission to view configuration of specified environment |  -  |
| **404** | Returned when specified environment/variable does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEnvironmentsExecutableByAgent

> GetEnvironmentsExecutableByAgent200Response getEnvironmentsExecutableByAgent(agentId, filter, limit, start)



Provide a paginated list of minimal information about environments executable by a given agent.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetEnvironmentsExecutableByAgentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | id of an agent the environment requirements are checked against
    agentId: agentId_example,
    // string | string the environments and deployment projects will be filtered by (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetEnvironmentsExecutableByAgentRequest;

  try {
    const data = await api.getEnvironmentsExecutableByAgent(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentId** | `string` | id of an agent the environment requirements are checked against | [Defaults to `undefined`] |
| **filter** | `string` | string the environments and deployment projects will be filtered by | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEnvironmentsExecutableByAgent200Response**](GetEnvironmentsExecutableByAgent200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated deployment project\&#39;s and environment\&#39;s ids and names |  -  |
| **404** | Agent with given id has not been found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEnvironmentsExecutableByElasticConfiguration

> GetEnvironmentsExecutableByAgent200Response getEnvironmentsExecutableByElasticConfiguration(configurationId, filter, limit, start)



Provide a paginated list of minimal information about environments executable by a given elastic image configuration.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetEnvironmentsExecutableByElasticConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | Id of elastic image configuration the environment requirements are checked against
    configurationId: configurationId_example,
    // string | String the environments and deployment projects will be filtered by (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetEnvironmentsExecutableByElasticConfigurationRequest;

  try {
    const data = await api.getEnvironmentsExecutableByElasticConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **configurationId** | `string` | Id of elastic image configuration the environment requirements are checked against | [Defaults to `undefined`] |
| **filter** | `string` | String the environments and deployment projects will be filtered by | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEnvironmentsExecutableByAgent200Response**](GetEnvironmentsExecutableByAgent200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated deployment project\&#39;s and environment\&#39;s ids and names |  -  |
| **400** | Elastic Bamboo is not enabled or required parameter is not provided |  -  |
| **404** | Image with given id has not been found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEnvironmentsExecutableByEphemeralAgentTemplate

> GetEnvironmentsExecutableByAgent200Response getEnvironmentsExecutableByEphemeralAgentTemplate(templateId, filter, limit, start)



Provide a paginated list of minimal information about environments executable by a given ephemeral agent template.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetEnvironmentsExecutableByEphemeralAgentTemplateRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | Id of ephemeral agent template the environment requirements are checked against
    templateId: templateId_example,
    // string | String the environments and deployment projects will be filtered by (optional)
    filter: filter_example,
    // number | Page request size (optional)
    limit: 56,
    // number | Page request start index (optional)
    start: 56,
  } satisfies GetEnvironmentsExecutableByEphemeralAgentTemplateRequest;

  try {
    const data = await api.getEnvironmentsExecutableByEphemeralAgentTemplate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **templateId** | `string` | Id of ephemeral agent template the environment requirements are checked against | [Defaults to `undefined`] |
| **filter** | `string` | String the environments and deployment projects will be filtered by | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page request size | [Optional] [Defaults to `undefined`] |
| **start** | `number` | Page request start index | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEnvironmentsExecutableByAgent200Response**](GetEnvironmentsExecutableByAgent200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated deployment project\&#39;s and environment\&#39;s ids and names |  -  |
| **400** | Ephemeral agents feature is not enabled or required parameter is not provided |  -  |
| **404** | Template with given id has not been found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequirementForEnvironment

> RestRequirement getRequirementForEnvironment(environmentId, requirementId)



Gets the details of a requirement for a given environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetRequirementForEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // string | unique identifier of the requirement to get details of
    requirementId: requirementId_example,
  } satisfies GetRequirementForEnvironmentRequest;

  try {
    const data = await api.getRequirementForEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **requirementId** | `string` | unique identifier of the requirement to get details of | [Defaults to `undefined`] |

### Return type

[**RestRequirement**](RestRequirement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of a requirements |  -  |
| **403** | If the user lack permissions for retrieving details about the environment, which translates into WRITE permissions to view and edit the environment. |  -  |
| **404** | If the specified environment id is not found or the requirement id does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequirementsForEnvironment

> Array&lt;RestRequirement&gt; getRequirementsForEnvironment(environmentId)



Gets all the requirements of an environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { GetRequirementsForEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
  } satisfies GetRequirementsForEnvironmentRequest;

  try {
    const data = await api.getRequirementsForEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |

### Return type

[**Array&lt;RestRequirement&gt;**](RestRequirement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of a requirements |  -  |
| **403** | If the user lack permissions for retrieving details about the environment structure, which translates into WRITE permissions to view and edit the environment configuration. |  -  |
| **404** | If the specified environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveEnvironment

> moveEnvironment(environmentId, relativeEnvironmentId, position)



Change environment position within deployment project.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { MoveEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // string | environment id which referenced environment should be placed before or after
    relativeEnvironmentId: relativeEnvironmentId_example,
    // string | position; possible values: AFTER or BEFORE
    position: position_example,
  } satisfies MoveEnvironmentRequest;

  try {
    const data = await api.moveEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **relativeEnvironmentId** | `string` | environment id which referenced environment should be placed before or after | [Defaults to `undefined`] |
| **position** | `string` | position; possible values: AFTER or BEFORE | [Defaults to `undefined`] |

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
| **204** | Environment position has been changed. |  -  |
| **403** | Returned when user has no Edit permission to deployment project or environment |  -  |
| **404** | Returned when environment or relative environment was not found or not visible to user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeAgentAssignmentFromEnvironment

> removeAgentAssignmentFromEnvironment(environmentId, executorKey)



Remove agent/image from list of dedicated executors for given environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { RemoveAgentAssignmentFromEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // string | key is parsed by ExecutorKey
    executorKey: executorKey_example,
  } satisfies RemoveAgentAssignmentFromEnvironmentRequest;

  try {
    const data = await api.removeAgentAssignmentFromEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **executorKey** | `string` | key is parsed by ExecutorKey | [Defaults to `undefined`] |

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
| **204** | Agent assignment has been removed successfully. |  -  |
| **400** | If validation fails |  -  |
| **403** | If the user has no permissions for updating an agent assignment, which translates into no WRITE permissions to edit the configuration of the environment |  -  |
| **404** | If the environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeAgentAssignmentFromJob

> removeAgentAssignmentFromJob(executorKey, jobKey)



Remove agent/image from list of dedicated executors for given job.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { RemoveAgentAssignmentFromJobRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | key is parsed by ExecutorKey
    executorKey: executorKey_example,
    // string | job key
    jobKey: jobKey_example,
  } satisfies RemoveAgentAssignmentFromJobRequest;

  try {
    const data = await api.removeAgentAssignmentFromJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **executorKey** | `string` | key is parsed by ExecutorKey | [Defaults to `undefined`] |
| **jobKey** | `string` | job key | [Defaults to `undefined`] |

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
| **204** | Agent assignment has been removed successfully. |  -  |
| **400** | If validation fails |  -  |
| **403** | If the user has no permissions for updating an agent assignment, which translates into no WRITE permissions to edit the configuration of the job |  -  |
| **404** | If the job is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeRequirementFromEnvironment

> removeRequirementFromEnvironment(environmentId, requirementId)



Removes a requirement for an environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { RemoveRequirementFromEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // string | unique identifier of the requirement to delete
    requirementId: requirementId_example,
  } satisfies RemoveRequirementFromEnvironmentRequest;

  try {
    const data = await api.removeRequirementFromEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **requirementId** | `string` | unique identifier of the requirement to delete | [Defaults to `undefined`] |

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
| **204** | The environment\&#39;s requirement has been deleted successfully |  -  |
| **403** | If the user lacks permissions to remove an environment requirement, which translates into no WRITE permissions to edit the environment |  -  |
| **404** | If the environment id is not found, or the requirement it does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## saveDockerPipelinesConfiguration

> saveDockerPipelinesConfiguration(environmentId, restDockerPipelineConfiguration)



Save Docker configuration for given environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { SaveDockerPipelinesConfigurationRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // RestDockerPipelineConfiguration | Docker pipelines configuration (optional)
    restDockerPipelineConfiguration: ...,
  } satisfies SaveDockerPipelinesConfigurationRequest;

  try {
    const data = await api.saveDockerPipelinesConfiguration(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **restDockerPipelineConfiguration** | [RestDockerPipelineConfiguration](RestDockerPipelineConfiguration.md) | Docker pipelines configuration | [Optional] |

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
| **204** | Docker Pipeline configuration saved |  -  |
| **400** | If validation fails |  -  |
| **403** | If the user has no edit permissions |  -  |
| **404** | If the environment id is not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateEnvironmentPrerequisites

> updateEnvironmentPrerequisites(environmentId, restEnvironmentPrerequisites)



Updates the environment prerequisites.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { UpdateEnvironmentPrerequisitesRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // RestEnvironmentPrerequisites | The new environment prerequisites. (optional)
    restEnvironmentPrerequisites: ...,
  } satisfies UpdateEnvironmentPrerequisitesRequest;

  try {
    const data = await api.updateEnvironmentPrerequisites(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **restEnvironmentPrerequisites** | [RestEnvironmentPrerequisites](RestEnvironmentPrerequisites.md) | The new environment prerequisites. | [Optional] |

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
| **204** | Environment prerequisites has been updated successfully |  -  |
| **401** | Authentication required |  -  |
| **403** | User has no permission to edit environment settings |  -  |
| **404** | Specified environment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateEnvironmentVariable

> RestVariableDefinitionContext updateEnvironmentVariable(variableName, environmentId, restVariable)



Update the environment variable.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { UpdateEnvironmentVariableRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | variable name
    variableName: variableName_example,
    // string | environment id
    environmentId: environmentId_example,
    // RestVariable | The updated variable. (optional)
    restVariable: ...,
  } satisfies UpdateEnvironmentVariableRequest;

  try {
    const data = await api.updateEnvironmentVariable(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **variableName** | `string` | variable name | [Defaults to `undefined`] |
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **restVariable** | [RestVariable](RestVariable.md) | The updated variable. | [Optional] |

### Return type

[**RestVariableDefinitionContext**](RestVariableDefinitionContext.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Variable has been updated successfully |  -  |
| **400** | Invalid variable or does not exists - use POST method to add a new variable. |  -  |
| **401** | Authentication required |  -  |
| **403** | User has no permission to edit specified environment |  -  |
| **404** | Specified environment does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRequirementForEnvironment

> RestRequirement updateRequirementForEnvironment(environmentId, requirementId, restRequirement)



Updates a requirement for a given environment.

### Example

```ts
import {
  Configuration,
  CoreApi,
} from 'bamboo-api';
import type { UpdateRequirementForEnvironmentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new CoreApi();

  const body = {
    // string | environment id
    environmentId: environmentId_example,
    // string | unique identifier of the requirement to update
    requirementId: requirementId_example,
    // RestRequirement | A representation of the requirement (optional)
    restRequirement: ...,
  } satisfies UpdateRequirementForEnvironmentRequest;

  try {
    const data = await api.updateRequirementForEnvironment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **environmentId** | `string` | environment id | [Defaults to `undefined`] |
| **requirementId** | `string` | unique identifier of the requirement to update | [Defaults to `undefined`] |
| **restRequirement** | [RestRequirement](RestRequirement.md) | A representation of the requirement | [Optional] |

### Return type

[**RestRequirement**](RestRequirement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The updated requirement |  -  |
| **403** | If the user has no permissions for updating a requirement, which translates into no WRITE permissions to edit the configuration of the environment it belongs to |  -  |
| **404** | If the environment id is not found, or the requirement id does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

