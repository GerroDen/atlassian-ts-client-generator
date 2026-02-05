# SecurityInformationApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteLinkedWorkspaces**](SecurityInformationApi.md#deletelinkedworkspaces) | **DELETE** /rest/security/1.0/linkedWorkspaces/bulk | Delete linked Security Workspaces |
| [**deleteVulnerabilitiesByProperty**](SecurityInformationApi.md#deletevulnerabilitiesbyproperty) | **DELETE** /rest/security/1.0/bulkByProperties | Delete Vulnerabilities by Property |
| [**deleteVulnerabilityById**](SecurityInformationApi.md#deletevulnerabilitybyid) | **DELETE** /rest/security/1.0/vulnerability/{vulnerabilityId} | Delete a Vulnerability by ID |
| [**getLinkedWorkspaceById**](SecurityInformationApi.md#getlinkedworkspacebyid) | **GET** /rest/security/1.0/linkedWorkspaces/{workspaceId} | Get a linked Security Workspace by ID |
| [**getLinkedWorkspaces**](SecurityInformationApi.md#getlinkedworkspaces) | **GET** /rest/security/1.0/linkedWorkspaces | Get linked Security Workspaces |
| [**getVulnerabilityById**](SecurityInformationApi.md#getvulnerabilitybyid) | **GET** /rest/security/1.0/vulnerability/{vulnerabilityId} | Get a Vulnerability by ID |
| [**submitVulnerabilities**](SecurityInformationApi.md#submitvulnerabilitiesoperation) | **POST** /rest/security/1.0/bulk | Submit Vulnerability data |
| [**submitWorkspaces**](SecurityInformationApi.md#submitworkspaces) | **POST** /rest/security/1.0/linkedWorkspaces/bulk | Submit Security Workspaces to link |



## deleteLinkedWorkspaces

> deleteLinkedWorkspaces(authorization)

Delete linked Security Workspaces

Bulk delete all linked Security Workspaces that match the given request.  Only Connect apps that define the &#x60;jiraSecurityInfoProvider&#x60; module can access this resource. This resource requires the \&#39;DELETE\&#39; scope for Connect apps.  e.g. DELETE /bulk?workspaceIds&#x3D;111-222-333,444-555-666 

### Example

```ts
import {
  Configuration,
  SecurityInformationApi,
} from 'jira-software-cloud-api';
import type { DeleteLinkedWorkspacesRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new SecurityInformationApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read [understanding jwt](https://developer.atlassian.com/blog/2015/01/understanding-jwt/) for more details. 
    authorization: authorization_example,
  } satisfies DeleteLinkedWorkspacesRequest;

  try {
    const data = await api.deleteLinkedWorkspaces(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read [understanding jwt](https://developer.atlassian.com/blog/2015/01/understanding-jwt/) for more details.  | [Defaults to `undefined`] |

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
| **202** | Delete accepted. Workspaces and related data will eventually be removed from Jira.  |  -  |
| **400** | Request has incorrect format.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraSecurityInfoProvider&#x60; module, or the app does not define the \&#39;DELETE\&#39; scope.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteVulnerabilitiesByProperty

> deleteVulnerabilitiesByProperty(authorization)

Delete Vulnerabilities by Property

Bulk delete all Vulnerabilities that match the given request.  One or more query params must be supplied to specify Properties to delete by. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND). Read the POST bulk endpoint documentation for more details.  e.g. DELETE /bulkByProperties?accountId&#x3D;account-123&amp;createdBy&#x3D;user-456  Deletion is performed asynchronously. The GET vulnerability endpoint can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the &#x60;jiraSecurityInfoProvider&#x60; module can access this resource. This resource requires the \&#39;DELETE\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  SecurityInformationApi,
} from 'jira-software-cloud-api';
import type { DeleteVulnerabilitiesByPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new SecurityInformationApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
    authorization: authorization_example,
  } satisfies DeleteVulnerabilitiesByPropertyRequest;

  try {
    const data = await api.deleteVulnerabilitiesByProperty(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/).  | [Defaults to `undefined`] |

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
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraSecurityInfoProvider&#x60; module, or the app does not define the \&#39;DELETE\&#39; scope.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteVulnerabilityById

> deleteVulnerabilityById(authorization, vulnerabilityId)

Delete a Vulnerability by ID

Delete the Vulnerability data currently stored for the given ID.  Deletion is performed asynchronously. The GET vulnerability endpoint can be used to confirm that data has been deleted successfully (if needed).  Only Connect apps that define the &#x60;jiraSecurityInfoProvider&#x60; module can access this resource. This resource requires the \&#39;DELETE\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  SecurityInformationApi,
} from 'jira-software-cloud-api';
import type { DeleteVulnerabilityByIdRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new SecurityInformationApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
    authorization: authorization_example,
    // string | The ID of the Vulnerability to delete. 
    vulnerabilityId: vulnerabilityId_example,
  } satisfies DeleteVulnerabilityByIdRequest;

  try {
    const data = await api.deleteVulnerabilityById(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/).  | [Defaults to `undefined`] |
| **vulnerabilityId** | `string` | The ID of the Vulnerability to delete.  | [Defaults to `undefined`] |

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
| **202** | Delete has been accepted. If the data exists, it will eventually be removed from Jira.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraSecurityInfoProvider&#x60; module, or the app does not define the \&#39;DELETE\&#39; scope.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLinkedWorkspaceById

> SecurityWorkspaceResponse getLinkedWorkspaceById(authorization, workspaceId)

Get a linked Security Workspace by ID

Retrieve a specific Security Workspace linked to the Jira site for the given workspace ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the &#x60;jiraSecurityInfoProvider&#x60; module can access this resource. This resource requires the \&#39;READ\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  SecurityInformationApi,
} from 'jira-software-cloud-api';
import type { GetLinkedWorkspaceByIdRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new SecurityInformationApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
    authorization: authorization_example,
    // string | The ID of the workspace to fetch. 
    workspaceId: workspaceId_example,
  } satisfies GetLinkedWorkspaceByIdRequest;

  try {
    const data = await api.getLinkedWorkspaceById(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/).  | [Defaults to `undefined`] |
| **workspaceId** | `string` | The ID of the workspace to fetch.  | [Defaults to `undefined`] |

### Return type

[**SecurityWorkspaceResponse**](SecurityWorkspaceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Security Workspace information stored for the given ID.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraSecurityInfoProvider&#x60; module, or the app does not define the \&#39;READ\&#39; scope.  |  -  |
| **404** | No data found for the given workspace ID.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLinkedWorkspaces

> SecurityWorkspaceIds getLinkedWorkspaces(authorization)

Get linked Security Workspaces

Retrieve all Security Workspaces linked with the Jira site.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the &#x60;jiraSecurityInfoProvider&#x60; module can access this resource. This resource requires the \&#39;READ\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  SecurityInformationApi,
} from 'jira-software-cloud-api';
import type { GetLinkedWorkspacesRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new SecurityInformationApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
    authorization: authorization_example,
  } satisfies GetLinkedWorkspacesRequest;

  try {
    const data = await api.getLinkedWorkspaces(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/).  | [Defaults to `undefined`] |

### Return type

[**SecurityWorkspaceIds**](SecurityWorkspaceIds.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all stored workspace IDs.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraSecurityInfoProvider&#x60; module, or the app does not define the \&#39;READ\&#39; scope.  |  -  |
| **404** | No data found for the given workspace ID.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVulnerabilityById

> VulnerabilityDetails getVulnerabilityById(authorization, vulnerabilityId)

Get a Vulnerability by ID

Retrieve the currently stored Vulnerability data for the given ID.  The result will be what is currently stored, ignoring any pending updates or deletes.  Only Connect apps that define the &#x60;jiraSecurityInfoProvider&#x60; module can access this resource. This resource requires the \&#39;READ\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  SecurityInformationApi,
} from 'jira-software-cloud-api';
import type { GetVulnerabilityByIdRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new SecurityInformationApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
    authorization: authorization_example,
    // string | The ID of the Vulnerability to fetch. 
    vulnerabilityId: vulnerabilityId_example,
  } satisfies GetVulnerabilityByIdRequest;

  try {
    const data = await api.getVulnerabilityById(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/).  | [Defaults to `undefined`] |
| **vulnerabilityId** | `string` | The ID of the Vulnerability to fetch.  | [Defaults to `undefined`] |

### Return type

[**VulnerabilityDetails**](VulnerabilityDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Vulnerability data currently stored for the given ID.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraSecurityInfoProvider&#x60; module, or the app does not define the \&#39;READ\&#39; scope.  |  -  |
| **404** | No data found for the given Vulnerability ID.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitVulnerabilities

> SubmitVulnerabilitiesResponse submitVulnerabilities(authorization, submitVulnerabilitiesRequest)

Submit Vulnerability data

Update / Insert Vulnerability data.  Vulnerabilities are identified by their ID, any existing Vulnerability data with the same ID will be replaced if it exists and the updateSequenceNumber of the existing data is less than the incoming data.  Submissions are performed asynchronously. Most updates are available within a short period of time but may take some time during peak load and/or maintenance times. The GET vulnerability endpoint can be used to confirm that data has been stored successfully (if needed).  In the case of multiple Vulnerabilities being submitted in one request, each is validated individually prior to submission. Details of Vulnerabilities that failed submission (if any) are available in the response object.  A maximum of 1000 vulnerabilities can be submitted in one request.  Only Connect apps that define the &#x60;jiraSecurityInfoProvider&#x60; module can access this resource. This resource requires the \&#39;WRITE\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  SecurityInformationApi,
} from 'jira-software-cloud-api';
import type { SubmitVulnerabilitiesOperationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new SecurityInformationApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/). 
    authorization: authorization_example,
    // SubmitVulnerabilitiesRequest | Vulnerability data to submit. 
    submitVulnerabilitiesRequest: ...,
  } satisfies SubmitVulnerabilitiesOperationRequest;

  try {
    const data = await api.submitVulnerabilities(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read more about JWT [here](https://developer.atlassian.com/blog/2015/01/understanding-jwt/).  | [Defaults to `undefined`] |
| **submitVulnerabilitiesRequest** | [SubmitVulnerabilitiesRequest](SubmitVulnerabilitiesRequest.md) | Vulnerability data to submit.  | |

### Return type

[**SubmitVulnerabilitiesResponse**](SubmitVulnerabilitiesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Submission accepted. Each Vulnerability submitted in a valid format will eventually be available in Jira.  Details of any Vulnerabilities that were submitted but failed submission (due to data format problems, etc.) are available in the response object.  |  -  |
| **400** | Request has incorrect format.  Note that in the case of an individual Vulnerability having an invalid format (rather than the request as a whole) the response for the request will be a 202 and details of the invalid Vulnerability will be contained in the response object.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraSecurityInfoProvider&#x60; module, or the app does not define the \&#39;WRITE\&#39; scope.  |  -  |
| **413** | Data is too large. Submit fewer Vulnerabilities in each payload.  |  -  |
| **429** | API rate limit has been exceeded.  |  * X-RateLimit-Remaining - The number of remaining possible requests in current rate limit window. <br>  * X-RateLimit-Reset - The date in ISO 8601 format when the rate limit values will be next reset. <br>  * X-RateLimit-Limit - The maximum possible requests in a window of one minute. <br>  * Retry-After - The number of seconds to wait before making a follow-up request. <br>  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitWorkspaces

> submitWorkspaces(authorization, submitSecurityWorkspacesRequest)

Submit Security Workspaces to link

Insert Security Workspace IDs to establish a relationship between them and the Jira site the app is installed on. If a relationship between the workspace ID and Jira already exists then the workspace ID will be ignored and Jira will process the rest of the entries.  Only Connect apps that define the &#x60;jiraSecurityInfoProvider&#x60; module can access this resource. This resource requires the \&#39;WRITE\&#39; scope for Connect apps. 

### Example

```ts
import {
  Configuration,
  SecurityInformationApi,
} from 'jira-software-cloud-api';
import type { SubmitWorkspacesRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const api = new SecurityInformationApi();

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read [understanding jwt](https://developer.atlassian.com/blog/2015/01/understanding-jwt/) for more details. 
    authorization: authorization_example,
    // SubmitSecurityWorkspacesRequest | Security Workspace IDs to submit. 
    submitSecurityWorkspacesRequest: ...,
  } satisfies SubmitWorkspacesRequest;

  try {
    const data = await api.submitWorkspaces(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define the Security Information module it will be rejected with a 403.  Read [understanding jwt](https://developer.atlassian.com/blog/2015/01/understanding-jwt/) for more details.  | [Defaults to `undefined`] |
| **submitSecurityWorkspacesRequest** | [SubmitSecurityWorkspacesRequest](SubmitSecurityWorkspacesRequest.md) | Security Workspace IDs to submit.  | |

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
| **202** | Submission accepted. Each submitted Security Workspace ID will be linked to Jira.  |  -  |
| **400** | Request has incorrect format.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the &#x60;jiraSecurityInfoProvider&#x60; module, or the app does not define the \&#39;WRITE\&#39; scope.  |  -  |
| **413** | Set of Ids is too large. Submit fewer Ids in each payload.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

