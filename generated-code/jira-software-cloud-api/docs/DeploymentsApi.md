# DeploymentsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteDeploymentByKey**](DeploymentsApi.md#deletedeploymentbykey) | **DELETE** /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber} | Delete a deployment by key |
| [**deleteDeploymentsByProperty**](DeploymentsApi.md#deletedeploymentsbyproperty) | **DELETE** /rest/deployments/0.1/bulkByProperties | Delete deployments by Property |
| [**getDeploymentByKey**](DeploymentsApi.md#getdeploymentbykey) | **GET** /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber} | Get a deployment by key |
| [**getDeploymentGatingStatusByKey**](DeploymentsApi.md#getdeploymentgatingstatusbykey) | **GET** /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber}/gating-status | Get deployment gating status by key |
| [**submitDeployments**](DeploymentsApi.md#submitdeployments) | **POST** /rest/deployments/0.1/bulk | Submit deployment data |



## deleteDeploymentByKey

> deleteDeploymentByKey(authorization, pipelineId, environmentId, deploymentSequenceNumber, updateSequenceNumber)

Delete a deployment by key

Delete the currently stored deployment data for the given &#x60;pipelineId&#x60;, &#x60;environmentId&#x60; and &#x60;deploymentSequenceNumber&#x60; combination.  Deletion is performed asynchronously. The &#x60;getDeploymentByKey&#x60; operation can be used to confirm that data has been deleted successfully (if needed). 

### Example

```ts
import {
  Configuration,
  DeploymentsApi,
} from 'jira-software-cloud-api';
import type { DeleteDeploymentByKeyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DeploymentsApi(config);

  const body = {
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraDeploymentInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
    authorization: authorization_example,
    // string | The ID of the deployment\'s pipeline. 
    pipelineId: pipelineId_example,
    // string | The ID of the deployment\'s environment. 
    environmentId: environmentId_example,
    // number | The deployment\'s deploymentSequenceNumber. 
    deploymentSequenceNumber: 789,
    // number | This parameter usage is no longer supported.  An optional `_updateSequenceNumber` to use to control deletion.  Only stored data with an `updateSequenceNumber` less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  (optional)
    updateSequenceNumber: 789,
  } satisfies DeleteDeploymentByKeyRequest;

  try {
    const data = await api.deleteDeploymentByKey(body);
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
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define &#x60;jiraDeploymentInfoProvider&#x60; module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.  | [Defaults to `undefined`] |
| **pipelineId** | `string` | The ID of the deployment\&#39;s pipeline.  | [Defaults to `undefined`] |
| **environmentId** | `string` | The ID of the deployment\&#39;s environment.  | [Defaults to `undefined`] |
| **deploymentSequenceNumber** | `number` | The deployment\&#39;s deploymentSequenceNumber.  | [Defaults to `undefined`] |
| **updateSequenceNumber** | `number` | This parameter usage is no longer supported.  An optional &#x60;_updateSequenceNumber&#x60; to use to control deletion.  Only stored data with an &#x60;updateSequenceNumber&#x60; less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Delete has been accepted. Data will eventually be removed from Jira if it exists.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraDeploymentInfoProvider&#x60; module, or the app does not define the \&#39;DELETE\&#39; scope.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDeploymentsByProperty

> deleteDeploymentsByProperty(authorization, updateSequenceNumber)

Delete deployments by Property

Bulk delete all deployments that match the given request.  One or more query params must be supplied to specify the Properties to delete by. Optional param &#x60;_updateSequenceNumber&#x60; is no longer supported. If more than one Property is provided, data will be deleted that matches ALL of the Properties (i.e. treated as AND). See the documentation for the &#x60;submitDeployments&#x60; operation for more details.  Example operation: DELETE /bulkByProperties?accountId&#x3D;account-123&amp;createdBy&#x3D;user-456  Deletion is performed asynchronously. The &#x60;getDeploymentByKey&#x60; operation can be used to confirm that data has been deleted successfully (if needed). 

### Example

```ts
import {
  Configuration,
  DeploymentsApi,
} from 'jira-software-cloud-api';
import type { DeleteDeploymentsByPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DeploymentsApi(config);

  const body = {
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraDeploymentInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
    authorization: authorization_example,
    // number | This parameter usage is no longer supported.  An optional `updateSequenceNumber` to use to control deletion.  Only stored data with an `updateSequenceNumber` less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  If not provided, all stored data that matches the request will be deleted.  (optional)
    updateSequenceNumber: 789,
  } satisfies DeleteDeploymentsByPropertyRequest;

  try {
    const data = await api.deleteDeploymentsByProperty(body);
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
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define &#x60;jiraDeploymentInfoProvider&#x60; module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.  | [Defaults to `undefined`] |
| **updateSequenceNumber** | `number` | This parameter usage is no longer supported.  An optional &#x60;updateSequenceNumber&#x60; to use to control deletion.  Only stored data with an &#x60;updateSequenceNumber&#x60; less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  If not provided, all stored data that matches the request will be deleted.  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Delete accepted. Data will eventually be removed from Jira.  |  -  |
| **400** | Request has incorrect format (e.g. missing at least one Property param).  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraDeploymentInfoProvider&#x60; module, or the app does not define the \&#39;DELETE\&#39; scope for Connect apps.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentByKey

> DeploymentData1 getDeploymentByKey(authorization, pipelineId, environmentId, deploymentSequenceNumber)

Get a deployment by key

Retrieve the currently stored deployment data for the given &#x60;pipelineId&#x60;, &#x60;environmentId&#x60; and &#x60;deploymentSequenceNumber&#x60; combination.  The result will be what is currently stored, ignoring any pending updates or deletes. 

### Example

```ts
import {
  Configuration,
  DeploymentsApi,
} from 'jira-software-cloud-api';
import type { GetDeploymentByKeyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DeploymentsApi(config);

  const body = {
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraDeploymentInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
    authorization: authorization_example,
    // string | The ID of the deployment\'s pipeline. 
    pipelineId: pipelineId_example,
    // string | The ID of the deployment\'s environment. 
    environmentId: environmentId_example,
    // number | The deployment\'s deploymentSequenceNumber. 
    deploymentSequenceNumber: 789,
  } satisfies GetDeploymentByKeyRequest;

  try {
    const data = await api.getDeploymentByKey(body);
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
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define &#x60;jiraDeploymentInfoProvider&#x60; module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.  | [Defaults to `undefined`] |
| **pipelineId** | `string` | The ID of the deployment\&#39;s pipeline.  | [Defaults to `undefined`] |
| **environmentId** | `string` | The ID of the deployment\&#39;s environment.  | [Defaults to `undefined`] |
| **deploymentSequenceNumber** | `number` | The deployment\&#39;s deploymentSequenceNumber.  | [Defaults to `undefined`] |

### Return type

[**DeploymentData1**](DeploymentData1.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The deployment data currently stored for the given ID.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraDeploymentInfoProvider&#x60; module,  or the app does not define the \&#39;READ\&#39; scope.  |  -  |
| **404** | No data found for the given deployment ID.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeploymentGatingStatusByKey

> SubmitDeploymentsResponse1 getDeploymentGatingStatusByKey(pipelineId, environmentId, deploymentSequenceNumber)

Get deployment gating status by key

Retrieve the  Deployment gating status for the given &#x60;pipelineId + environmentId + deploymentSequenceNumber&#x60; combination. Only apps that define the &#x60;jiraDeploymentInfoProvider&#x60; module can access this resource. This resource requires the \&#39;READ\&#39; scope. 

### Example

```ts
import {
  Configuration,
  DeploymentsApi,
} from 'jira-software-cloud-api';
import type { GetDeploymentGatingStatusByKeyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DeploymentsApi(config);

  const body = {
    // string | The ID of the Deployment\'s pipeline. 
    pipelineId: pipelineId_example,
    // string | The ID of the Deployment\'s environment. 
    environmentId: environmentId_example,
    // number | The Deployment\'s deploymentSequenceNumber. 
    deploymentSequenceNumber: 789,
  } satisfies GetDeploymentGatingStatusByKeyRequest;

  try {
    const data = await api.getDeploymentGatingStatusByKey(body);
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
| **pipelineId** | `string` | The ID of the Deployment\&#39;s pipeline.  | [Defaults to `undefined`] |
| **environmentId** | `string` | The ID of the Deployment\&#39;s environment.  | [Defaults to `undefined`] |
| **deploymentSequenceNumber** | `number` | The Deployment\&#39;s deploymentSequenceNumber.  | [Defaults to `undefined`] |

### Return type

[**SubmitDeploymentsResponse1**](SubmitDeploymentsResponse1.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The current gating status for the given Deployment  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraDeploymentInfoProvider&#x60; module,  |  -  |
| **404** | No data found for the given deployment ID.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitDeployments

> SubmitDeploymentsResponse submitDeployments(authorization, submitDeploymentRequest)

Submit deployment data

Update / insert deployment data.  Deployments are identified by the combination of &#x60;pipelineId&#x60;, &#x60;environmentId&#x60; and &#x60;deploymentSequenceNumber&#x60;, and existing deployment data for the same deployment will be replaced if it exists and the &#x60;updateSequenceNumber&#x60; of existing data is less than the incoming data.  Submissions are processed asynchronously. Submitted data will eventually be available in Jira. Most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The &#x60;getDeploymentByKey&#x60; operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple deployments being submitted in one request, each is validated individually prior to submission. Details of which deployments failed submission (if any) are available in the response object. 

### Example

```ts
import {
  Configuration,
  DeploymentsApi,
} from 'jira-software-cloud-api';
import type { SubmitDeploymentsRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DeploymentsApi(config);

  const body = {
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define `jiraDeploymentInfoProvider` module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. 
    authorization: authorization_example,
    // SubmitDeploymentRequest | Deployment data to submit. 
    submitDeploymentRequest: ...,
  } satisfies SubmitDeploymentsRequest;

  try {
    const data = await api.submitDeployments(body);
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
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira.  If the Connect JWT token corresponds to an app that does not define &#x60;jiraDeploymentInfoProvider&#x60; module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.  | [Defaults to `undefined`] |
| **submitDeploymentRequest** | [SubmitDeploymentRequest](SubmitDeploymentRequest.md) | Deployment data to submit.  | |

### Return type

[**SubmitDeploymentsResponse**](SubmitDeploymentsResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Submission accepted. Each submitted deployment that is of a valid format will eventually be available in Jira.  Details of which deployments were submitted and which failed submission (due to data format problems etc.) are available in the response object.  |  -  |
| **400** | Request has incorrect format.  Note that in the case of an individual deployment having an invalid format (rather than the request as a whole) the response for the request will be a 202 and details of the invalid deployment will be contained in the response object.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraDeploymentInfoProvider&#x60; module, or the app does not define the \&#39;WRITE\&#39; scope.  |  -  |
| **413** | Data is too large. Submit fewer deployments in each payload.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

