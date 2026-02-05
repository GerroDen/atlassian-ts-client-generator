# DeploymentApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBuildQueue**](DeploymentApi.md#getbuildqueue) | **GET** /api/latest/queue/deployment |  |
| [**getPossibleResults**](DeploymentApi.md#getpossibleresults) | **GET** /api/latest/deploy/preview/possibleResults |  |
| [**getVersionName**](DeploymentApi.md#getversionname) | **GET** /api/latest/deploy/preview/versionName |  |
| [**getVersionPreview**](DeploymentApi.md#getversionpreview) | **GET** /api/latest/deploy/preview/version |  |
| [**getVersionPreview1**](DeploymentApi.md#getversionpreview1) | **GET** /api/latest/deploy/preview/result |  |
| [**removeDeploymentFromQueue**](DeploymentApi.md#removedeploymentfromqueue) | **DELETE** /api/latest/queue/deployment/{deploymentResultId} |  |
| [**startDeployment**](DeploymentApi.md#startdeployment) | **POST** /api/latest/queue/deployment |  |



## getBuildQueue

> RestQueuedDeployments getBuildQueue(expand)



Provide list of deployment results scheduled for execution and waiting in queue.

### Example

```ts
import {
  Configuration,
  DeploymentApi,
} from 'bamboo-api';
import type { GetBuildQueueRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DeploymentApi();

  const body = {
    // string | expands deployment result queue items on request. Possible value: queuedDeployments (optional)
    expand: expand_example,
  } satisfies GetBuildQueueRequest;

  try {
    const data = await api.getBuildQueue(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **expand** | `string` | expands deployment result queue items on request. Possible value: queuedDeployments | [Optional] [Defaults to `undefined`] |

### Return type

[**RestQueuedDeployments**](RestQueuedDeployments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPossibleResults

> getPossibleResults(planKey, deploymentProjectId)



Get possible deployment results.

### Example

```ts
import {
  Configuration,
  DeploymentApi,
} from 'bamboo-api';
import type { GetPossibleResultsRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DeploymentApi();

  const body = {
    // string | Plan key
    planKey: planKey_example,
    // string | Deployment project id (optional)
    deploymentProjectId: deploymentProjectId_example,
  } satisfies GetPossibleResultsRequest;

  try {
    const data = await api.getPossibleResults(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **planKey** | `string` | Plan key | [Defaults to `undefined`] |
| **deploymentProjectId** | `string` | Deployment project id | [Optional] [Defaults to `undefined`] |

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
| **200** | Possible results. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVersionName

> any getVersionName(deploymentProjectId, resultKey)



Get version name.

### Example

```ts
import {
  Configuration,
  DeploymentApi,
} from 'bamboo-api';
import type { GetVersionNameRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DeploymentApi();

  const body = {
    // number | Deployment project id
    deploymentProjectId: 789,
    // string | Result key (optional)
    resultKey: resultKey_example,
  } satisfies GetVersionNameRequest;

  try {
    const data = await api.getVersionName(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentProjectId** | `number` | Deployment project id | [Defaults to `undefined`] |
| **resultKey** | `string` | Result key | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Version name |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVersionPreview

> VersionPreview getVersionPreview(previousVersionId, versionId, deploymentProjectId, versionName)



Get a preview of the deployment version.

### Example

```ts
import {
  Configuration,
  DeploymentApi,
} from 'bamboo-api';
import type { GetVersionPreviewRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DeploymentApi();

  const body = {
    // string | Previous version id (optional)
    previousVersionId: previousVersionId_example,
    // string | Deployment version id (optional)
    versionId: versionId_example,
    // string | Deployment project id (optional)
    deploymentProjectId: deploymentProjectId_example,
    // string | Deployment version name (optional)
    versionName: versionName_example,
  } satisfies GetVersionPreviewRequest;

  try {
    const data = await api.getVersionPreview(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **previousVersionId** | `string` | Previous version id | [Optional] [Defaults to `undefined`] |
| **versionId** | `string` | Deployment version id | [Optional] [Defaults to `undefined`] |
| **deploymentProjectId** | `string` | Deployment project id | [Optional] [Defaults to `undefined`] |
| **versionName** | `string` | Deployment version name | [Optional] [Defaults to `undefined`] |

### Return type

[**VersionPreview**](VersionPreview.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment version preview. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVersionPreview1

> VersionPreview getVersionPreview1(previousVersionId, deploymentProjectId, planKey, resultKey, buildNumber)



Get a preview of the deployment version.

### Example

```ts
import {
  Configuration,
  DeploymentApi,
} from 'bamboo-api';
import type { GetVersionPreview1Request } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DeploymentApi();

  const body = {
    // string | Previous version id (optional)
    previousVersionId: previousVersionId_example,
    // string | Deployment project id (optional)
    deploymentProjectId: deploymentProjectId_example,
    // string | Plan key (optional)
    planKey: planKey_example,
    // string | Result key (optional)
    resultKey: resultKey_example,
    // string | Build number (optional)
    buildNumber: buildNumber_example,
  } satisfies GetVersionPreview1Request;

  try {
    const data = await api.getVersionPreview1(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **previousVersionId** | `string` | Previous version id | [Optional] [Defaults to `undefined`] |
| **deploymentProjectId** | `string` | Deployment project id | [Optional] [Defaults to `undefined`] |
| **planKey** | `string` | Plan key | [Optional] [Defaults to `undefined`] |
| **resultKey** | `string` | Result key | [Optional] [Defaults to `undefined`] |
| **buildNumber** | `string` | Build number | [Optional] [Defaults to `undefined`] |

### Return type

[**VersionPreview**](VersionPreview.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Preview of the deployment version |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeDeploymentFromQueue

> removeDeploymentFromQueue(deploymentResultId)



Remove deployment result from queue.

### Example

```ts
import {
  Configuration,
  DeploymentApi,
} from 'bamboo-api';
import type { RemoveDeploymentFromQueueRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DeploymentApi();

  const body = {
    // number | id of deployment result in queue
    deploymentResultId: 789,
  } satisfies RemoveDeploymentFromQueueRequest;

  try {
    const data = await api.removeDeploymentFromQueue(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deploymentResultId** | `number` | id of deployment result in queue | [Defaults to `undefined`] |

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
| **204** | Successfully removed deployment result from queue |  -  |
| **400** | Deployment already finished and can\&#39;t be removed from queue |  -  |
| **403** | User don\&#39;t have permission to delete deployment from queue |  -  |
| **404** | Can\&#39;t find deployment result by deploymentResultId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startDeployment

> RestQueuedDeployment startDeployment(versionId, environmentId, verboseLogging)



Trigger deployment for deployment environment and version.

### Example

```ts
import {
  Configuration,
  DeploymentApi,
} from 'bamboo-api';
import type { StartDeploymentRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new DeploymentApi();

  const body = {
    // string | Version (release) id
    versionId: versionId_example,
    // string | Deployment environment id
    environmentId: environmentId_example,
    // string | Runs deployments with verbose logs (optional)
    verboseLogging: verboseLogging_example,
  } satisfies StartDeploymentRequest;

  try {
    const data = await api.startDeployment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **versionId** | `string` | Version (release) id | [Defaults to `undefined`] |
| **environmentId** | `string` | Deployment environment id | [Defaults to `undefined`] |
| **verboseLogging** | `string` | Runs deployments with verbose logs | [Optional] [Defaults to `undefined`] |

### Return type

[**RestQueuedDeployment**](RestQueuedDeployment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trigger deployment for environment and version |  -  |
| **400** | Validation error occurred or deployment can\&#39;t be triggered |  -  |
| **403** | User don\&#39;t have permissions to trigger deployment to given environment |  -  |
| **404** | Environment or version are not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

