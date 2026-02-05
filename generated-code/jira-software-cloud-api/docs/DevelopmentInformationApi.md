# DevelopmentInformationApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteByProperties**](DevelopmentInformationApi.md#deletebyproperties) | **DELETE** /rest/devinfo/0.10/bulkByProperties | Delete development information by properties |
| [**deleteEntity**](DevelopmentInformationApi.md#deleteentity) | **DELETE** /rest/devinfo/0.10/repository/{repositoryId}/{entityType}/{entityId} | Delete development information entity |
| [**deleteRepository**](DevelopmentInformationApi.md#deleterepository) | **DELETE** /rest/devinfo/0.10/repository/{repositoryId} | Delete repository |
| [**existsByProperties**](DevelopmentInformationApi.md#existsbyproperties) | **GET** /rest/devinfo/0.10/existsByProperties | Check if data exists for the supplied properties |
| [**getRepository**](DevelopmentInformationApi.md#getrepository) | **GET** /rest/devinfo/0.10/repository/{repositoryId} | Get repository |
| [**storeDevelopmentInformation**](DevelopmentInformationApi.md#storedevelopmentinformation) | **POST** /rest/devinfo/0.10/bulk | Store development information |



## deleteByProperties

> deleteByProperties(authorization, updateSequenceId)

Delete development information by properties

Deletes development information entities which have all the provided properties. Repositories which have properties that match ALL of the properties (i.e. treated as an AND), and all their related development information (such as commits, branches and pull requests), will be deleted. For example if request is &#x60;DELETE bulk?accountId&#x3D;123&amp;projectId&#x3D;ABC&#x60; entities which have properties &#x60;accountId&#x3D;123&#x60; and &#x60;projectId&#x3D;ABC&#x60; will be deleted. Optional param &#x60;_updateSequenceId&#x60; is no longer supported. Deletion is performed asynchronously: specified entities will eventually be removed from Jira. 

### Example

```ts
import {
  Configuration,
  DevelopmentInformationApi,
} from 'jira-software-cloud-api';
import type { DeleteByPropertiesRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DevelopmentInformationApi(config);

  const body = {
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.
    authorization: authorization_example,
    // number | An optional property to use to control deletion. Only stored data with an updateSequenceId less than or equal to that provided will be deleted. This can be used to help ensure submit/delete requests are applied correctly if they are issued close together.  (optional)
    updateSequenceId: 789,
  } satisfies DeleteByPropertiesRequest;

  try {
    const data = await api.deleteByProperties(body);
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
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. | [Defaults to `undefined`] |
| **updateSequenceId** | `number` | An optional property to use to control deletion. Only stored data with an updateSequenceId less than or equal to that provided will be deleted. This can be used to help ensure submit/delete requests are applied correctly if they are issued close together.  | [Optional] [Defaults to `undefined`] |

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
| **400** | Request has incorrect format. It will fail in the following cases: If no query properties are specified. If &#x60;_updateSequenceId&#x60; is not a numeric value. If multiple values of the same property key are specified. Deleting data for many property values, for the same property key, requires multiple requests to this resource.  |  -  |
| **401** | Missing a JWT token, or token is invalid. |  -  |
| **403** | The JWT token used does not correspond to an app that defines the jiraDevelopmentTool module, or the app does not define the \&#39;DELETE\&#39; scope |  -  |
| **429** | API rate limit has been exceeded. |  -  |
| **500** | An unknown error has occurred. |  -  |
| **503** | Service is unavailable due to maintenance or other reasons. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteEntity

> deleteEntity(repositoryId, entityType, entityId, authorization, updateSequenceId)

Delete development information entity

Deletes particular development information entity. Deletion is performed asynchronously.

### Example

```ts
import {
  Configuration,
  DevelopmentInformationApi,
} from 'jira-software-cloud-api';
import type { DeleteEntityRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DevelopmentInformationApi(config);

  const body = {
    // string
    repositoryId: repositoryId_example,
    // 'commit' | 'branch' | 'pull_request'
    entityType: entityType_example,
    // string
    entityId: entityId_example,
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.
    authorization: authorization_example,
    // number | An optional property to use to control deletion. Only stored data with an updateSequenceId less than or equal to that provided will be deleted. This can be used to help ensure submit/delete requests are applied correctly if they are issued close together.  (optional)
    updateSequenceId: 789,
  } satisfies DeleteEntityRequest;

  try {
    const data = await api.deleteEntity(body);
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
| **repositoryId** | `string` |  | [Defaults to `undefined`] |
| **entityType** | `commit`, `branch`, `pull_request` |  | [Defaults to `undefined`] [Enum: commit, branch, pull_request] |
| **entityId** | `string` |  | [Defaults to `undefined`] |
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. | [Defaults to `undefined`] |
| **updateSequenceId** | `number` | An optional property to use to control deletion. Only stored data with an updateSequenceId less than or equal to that provided will be deleted. This can be used to help ensure submit/delete requests are applied correctly if they are issued close together.  | [Optional] [Defaults to `undefined`] |

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
| **202** | Delete request has been accepted. Data will eventually be removed from Jira if it exists. |  -  |
| **400** | Wrong entity type specified |  -  |
| **401** | Missing a JWT token, or token is invalid. |  -  |
| **403** | The JWT token used does not correspond to an app that defines the jiraDevelopmentTool module, or the app does not define the \&#39;DELETE\&#39; scope |  -  |
| **429** | API rate limit has been exceeded. |  -  |
| **500** | An unknown error has occurred. |  -  |
| **503** | Service is unavailable due to maintenance or other reasons. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRepository

> deleteRepository(repositoryId, authorization, updateSequenceId)

Delete repository

Deletes the repository data stored by the given ID and all related development information entities. Deletion is performed asynchronously.

### Example

```ts
import {
  Configuration,
  DevelopmentInformationApi,
} from 'jira-software-cloud-api';
import type { DeleteRepositoryRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DevelopmentInformationApi(config);

  const body = {
    // string | The ID of repository to delete
    repositoryId: repositoryId_example,
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.
    authorization: authorization_example,
    // number | An optional property to use to control deletion. Only stored data with an updateSequenceId less than or equal to that provided will be deleted. This can be used to help ensure submit/delete requests are applied correctly if they are issued close together.  (optional)
    updateSequenceId: 789,
  } satisfies DeleteRepositoryRequest;

  try {
    const data = await api.deleteRepository(body);
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
| **repositoryId** | `string` | The ID of repository to delete | [Defaults to `undefined`] |
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. | [Defaults to `undefined`] |
| **updateSequenceId** | `number` | An optional property to use to control deletion. Only stored data with an updateSequenceId less than or equal to that provided will be deleted. This can be used to help ensure submit/delete requests are applied correctly if they are issued close together.  | [Optional] [Defaults to `undefined`] |

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
| **202** | Delete request has been accepted. Data will eventually be removed from Jira if it exists. |  -  |
| **401** | Missing a JWT token, or token is invalid. |  -  |
| **403** | The JWT token used does not correspond to an app that defines the jiraDevelopmentTool module, or the app does not define the \&#39;DELETE\&#39; scope |  -  |
| **429** | API rate limit has been exceeded. |  -  |
| **500** | An unknown error has occurred. |  -  |
| **503** | Service is unavailable due to maintenance or other reasons. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## existsByProperties

> ExistsForPropertiesResponse existsByProperties(authorization, updateSequenceId)

Check if data exists for the supplied properties

Checks if repositories which have all the provided properties exists. For example, if request is &#x60;GET existsByProperties?accountId&#x3D;123&amp;projectId&#x3D;ABC&#x60; then result will be positive only if there is at least one repository with both properties &#x60;accountId&#x3D;123&#x60; and &#x60;projectId&#x3D;ABC&#x60;. Special property &#x60;_updateSequenceId&#x60; can be used to filter all entities with updateSequenceId less or equal than the value specified. In addition to the optional &#x60;_updateSequenceId&#x60;, one or more query params must be supplied to specify properties to search by. 

### Example

```ts
import {
  Configuration,
  DevelopmentInformationApi,
} from 'jira-software-cloud-api';
import type { ExistsByPropertiesRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DevelopmentInformationApi(config);

  const body = {
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.
    authorization: authorization_example,
    // number | An optional property. Filters out entities and repositories which have updateSequenceId greater than specified.  (optional)
    updateSequenceId: 789,
  } satisfies ExistsByPropertiesRequest;

  try {
    const data = await api.existsByProperties(body);
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
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. | [Defaults to `undefined`] |
| **updateSequenceId** | `number` | An optional property. Filters out entities and repositories which have updateSequenceId greater than specified.  | [Optional] [Defaults to `undefined`] |

### Return type

[**ExistsForPropertiesResponse**](ExistsForPropertiesResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns whether data exists for the specified properties.  |  -  |
| **400** | Request has incorrect format. It will fail in the following cases: If no query properties are specified. If &#x60;_updateSequenceId&#x60; is not a numeric value. If multiple values of the same property key are specified.  |  -  |
| **401** | Missing a JWT token, or token is invalid. |  -  |
| **403** | The JWT token used does not correspond to an app that defines the jiraDevelopmentTool module, or the app does not define the \&#39;READ\&#39; scope |  -  |
| **429** | API rate limit has been exceeded. |  -  |
| **500** | An unknown error has occurred. |  -  |
| **503** | Service is unavailable due to maintenance or other reasons. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRepository

> Repository getRepository(repositoryId, authorization)

Get repository

For the specified repository ID, retrieves the repository and the most recent 400 development information entities. The result will be what is currently stored, ignoring any pending updates or deletes.

### Example

```ts
import {
  Configuration,
  DevelopmentInformationApi,
} from 'jira-software-cloud-api';
import type { GetRepositoryRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DevelopmentInformationApi(config);

  const body = {
    // string | The ID of repository to fetch
    repositoryId: repositoryId_example,
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.
    authorization: authorization_example,
  } satisfies GetRepositoryRequest;

  try {
    const data = await api.getRepository(body);
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
| **repositoryId** | `string` | The ID of repository to fetch | [Defaults to `undefined`] |
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. | [Defaults to `undefined`] |

### Return type

[**Repository**](Repository.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The repository data currently stored for the given ID. |  -  |
| **401** | Missing a JWT token, or token is invalid. |  -  |
| **403** | The JWT token used does not correspond to an app that defines the jiraDevelopmentTool module, or the app does not define the \&#39;READ\&#39; scope |  -  |
| **404** | No data found for the given repository ID. |  -  |
| **429** | API rate limit has been exceeded. |  -  |
| **500** | An unknown error has occurred. |  -  |
| **503** | Service is unavailable due to maintenance or other reasons. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## storeDevelopmentInformation

> StoreDevinfoResult storeDevelopmentInformation(authorization, devInformation)

Store development information

Stores development information provided in the request to make it available when viewing issues in Jira. Existing repository and entity data for the same ID will be replaced if the updateSequenceId of existing data is less than the incoming data. Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times.

### Example

```ts
import {
  Configuration,
  DevelopmentInformationApi,
} from 'jira-software-cloud-api';
import type { StoreDevelopmentInformationRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DevelopmentInformationApi(config);

  const body = {
    // string | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations.
    authorization: authorization_example,
    // DevInformation | Request object, which contains development information
    devInformation: ...,
  } satisfies StoreDevelopmentInformationRequest;

  try {
    const data = await api.storeDevelopmentInformation(body);
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
| **authorization** | `string` | All requests must be signed with either a Connect JWT token or OAuth token for an on-premise integration that corresponds to an app installed in Jira. If the JWT token corresponds to a Connect app that does not define the jiraDevelopmentTool module it will be rejected with a 403. See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details about Connect JWT tokens. See https://developer.atlassian.com/cloud/jira/software/integrate-jsw-cloud-with-onpremises-tools/ for details about on-premise integrations. | [Defaults to `undefined`] |
| **devInformation** | [DevInformation](DevInformation.md) | Request object, which contains development information | |

### Return type

[**StoreDevinfoResult**](StoreDevinfoResult.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Submission accepted. Each submitted repository and entity that is of a valid format will be eventually available in Jira. |  -  |
| **400** | Request has incorrect format. It will fail in the following cases: If no repositories or development information entities were provided, or  more than 5 properties were submitted, or there are one or more properties with leading underscore \&#39;_\&#39; symbol in their keys. |  -  |
| **401** | Missing a JWT token, or token is invalid. |  -  |
| **403** | The JWT token used does not correspond to an app that defines the jiraDevelopmentTool module, or the app does not define the \&#39;WRITE\&#39; scope |  -  |
| **413** | Data is too large. Submit fewer devinfo entities in each payload. |  -  |
| **429** | API rate limit has been exceeded. |  * X-RateLimit-Remaining - The number of remaining possible requests in current rate limit window. <br>  * X-RateLimit-Reset - The date in ISO 8601 format when the rate limit values will be next reset. <br>  * X-RateLimit-Limit - The maximum possible requests in a window of one minute. <br>  * Retry-After - The number of seconds to wait before making a follow-up request. <br>  |
| **500** | An unknown error has occurred. |  -  |
| **503** | Service is unavailable due to maintenance or other reasons. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

