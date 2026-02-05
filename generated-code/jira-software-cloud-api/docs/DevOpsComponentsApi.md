# DevOpsComponentsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteComponentById**](DevOpsComponentsApi.md#deletecomponentbyid) | **DELETE** /rest/devopscomponents/1.0/devopscomponents/{componentId} | Delete a Component by ID |
| [**deleteComponentsByProperty**](DevOpsComponentsApi.md#deletecomponentsbyproperty) | **DELETE** /rest/devopscomponents/1.0/bulkByProperties | Delete DevOps Components by Property |
| [**getComponentById**](DevOpsComponentsApi.md#getcomponentbyid) | **GET** /rest/devopscomponents/1.0/devopscomponents/{componentId} | Get a Component by ID |
| [**submitComponents**](DevOpsComponentsApi.md#submitcomponents) | **POST** /rest/devopscomponents/1.0/bulk | Submit DevOps Components |



## deleteComponentById

> deleteComponentById(authorization, componentId)

Delete a Component by ID

Delete the Component data currently stored for the given ID.  Deletion is performed asynchronously. The getComponentById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the &#x60;jiraDevOpsComponentProvider&#x60; module can access this resource. This resource requires the \&#39;DELETE\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  DevOpsComponentsApi,
} from 'jira-software-cloud-api';
import type { DeleteComponentByIdRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new DevOpsComponentsApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Operations Information module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details. 
    authorization: authorization_example,
    // string | The ID of the Component to delete. 
    componentId: componentId_example,
  } satisfies DeleteComponentByIdRequest;

  try {
    const data = await api.deleteComponentById(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Operations Information module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details.  | [Defaults to `undefined`] |
| **componentId** | `string` | The ID of the Component to delete.  | [Defaults to `undefined`] |

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
| **202** | Delete has been accepted. Data will eventually be removed from Jira if it exists.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the Operations Information module, or the app does not define the \&#39;DELETE\&#39; scope.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteComponentsByProperty

> deleteComponentsByProperty(authorization)

Delete DevOps Components by Property

Bulk delete all Components that match the given request.  One or more query params must be supplied to specify Properties to delete by. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND). See the documentation for the submitComponents operation for more details.  e.g. DELETE /bulkByProperties?accountId&#x3D;account-123&amp;createdBy&#x3D;user-456  Deletion is performed asynchronously. The getComponentById operation can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the &#x60;jiraDevOpsComponentProvider&#x60; module can access this resource. This resource requires the \&#39;DELETE\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  DevOpsComponentsApi,
} from 'jira-software-cloud-api';
import type { DeleteComponentsByPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new DevOpsComponentsApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Operations Information module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details. 
    authorization: authorization_example,
  } satisfies DeleteComponentsByPropertyRequest;

  try {
    const data = await api.deleteComponentsByProperty(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Operations Information module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details.  | [Defaults to `undefined`] |

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
| **202** | Delete accepted. Data will eventually be removed from Jira.  |  -  |
| **400** | Request has incorrect format (e.g. missing at least one Property param).  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the Operations Information module, or the app does not define the \&#39;DELETE\&#39; scope.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComponentById

> GetComponentById200Response getComponentById(authorization, componentId)

Get a Component by ID

Retrieve the currently stored Component data for the given ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the &#x60;jiraDevOpsComponentProvider&#x60; module can access this resource. This resource requires the \&#39;READ\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  DevOpsComponentsApi,
} from 'jira-software-cloud-api';
import type { GetComponentByIdRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new DevOpsComponentsApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Operations Information module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details. 
    authorization: authorization_example,
    // string | The ID of the Component to fetch. 
    componentId: componentId_example,
  } satisfies GetComponentByIdRequest;

  try {
    const data = await api.getComponentById(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Operations Information module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details.  | [Defaults to `undefined`] |
| **componentId** | `string` | The ID of the Component to fetch.  | [Defaults to `undefined`] |

### Return type

[**GetComponentById200Response**](GetComponentById200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Component data currently stored for the given ID.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the Operations Information module, or the app does not define the \&#39;READ\&#39; scope.  |  -  |
| **404** | No data found for the given Component ID.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitComponents

> SubmitDevopsComponentsResponse submitComponents(authorization, submitDevopsComponentsRequest)

Submit DevOps Components

Update / insert DevOps Component data.  Components are identified by their ID, and existing Component data for the same ID will be replaced if it exists and the updateSequenceNumber of existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The getComponentById operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple Components being submitted in one request, each is validated individually prior to submission. Details of which Components failed submission (if any) are available in the response object.  A maximum of 1000 components can be submitted in one request.  Only Connect apps that define the &#x60;jiraDevOpsComponentProvider&#x60; module can access this resource. This resource requires the \&#39;WRITE\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  DevOpsComponentsApi,
} from 'jira-software-cloud-api';
import type { SubmitComponentsRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new DevOpsComponentsApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the DevOps Information module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details. 
    authorization: authorization_example,
    // SubmitDevopsComponentsRequest | DevOps Component data to submit. 
    submitDevopsComponentsRequest: ...,
  } satisfies SubmitComponentsRequest;

  try {
    const data = await api.submitComponents(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the DevOps Information module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details.  | [Defaults to `undefined`] |
| **submitDevopsComponentsRequest** | [SubmitDevopsComponentsRequest](SubmitDevopsComponentsRequest.md) | DevOps Component data to submit.  | |

### Return type

[**SubmitDevopsComponentsResponse**](SubmitDevopsComponentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Submission accepted. Each submitted Component that is of a valid format will be eventually available in Jira. Details of which Components were submitted and which failed submission (due to data format problems etc.) are available in the response object.  |  -  |
| **400** | Request has incorrect format.  Note that in the case of an individual Component having an invalid format (rather than the request as a whole) the response for the request will be a 202 and details of the invalid Component will be contained in the response object.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the Operations Information module, or the app does not define the \&#39;WRITE\&#39; scope.  |  -  |
| **413** | Data is too large. Submit fewer Components in each payload.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

