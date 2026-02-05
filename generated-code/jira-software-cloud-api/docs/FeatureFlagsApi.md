# FeatureFlagsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteFeatureFlagById**](FeatureFlagsApi.md#deletefeatureflagbyid) | **DELETE** /rest/featureflags/0.1/flag/{featureFlagId} | Delete a Feature Flag by ID |
| [**deleteFeatureFlagsByProperty**](FeatureFlagsApi.md#deletefeatureflagsbyproperty) | **DELETE** /rest/featureflags/0.1/bulkByProperties | Delete Feature Flags by Property |
| [**getFeatureFlagById**](FeatureFlagsApi.md#getfeatureflagbyid) | **GET** /rest/featureflags/0.1/flag/{featureFlagId} | Get a Feature Flag by ID |
| [**submitFeatureFlags**](FeatureFlagsApi.md#submitfeatureflags) | **POST** /rest/featureflags/0.1/bulk | Submit Feature Flag data |



## deleteFeatureFlagById

> deleteFeatureFlagById(authorization, featureFlagId, updateSequenceId)

Delete a Feature Flag by ID

Delete the Feature Flag data currently stored for the given ID.  Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed). 

### Example

```ts
import {
  Configuration,
  FeatureFlagsApi,
} from 'jira-software-cloud-api';
import type { DeleteFeatureFlagByIdRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FeatureFlagsApi(config);

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Feature Flags module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details. 
    authorization: authorization_example,
    // string | The ID of the Feature Flag to delete. 
    featureFlagId: featureFlagId_example,
    // number | This parameter usage is no longer supported.  An optional `_updateSequenceId` to use to control deletion.  Only stored data with an `updateSequenceId` less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  (optional)
    updateSequenceId: 789,
  } satisfies DeleteFeatureFlagByIdRequest;

  try {
    const data = await api.deleteFeatureFlagById(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Feature Flags module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details.  | [Defaults to `undefined`] |
| **featureFlagId** | `string` | The ID of the Feature Flag to delete.  | [Defaults to `undefined`] |
| **updateSequenceId** | `number` | This parameter usage is no longer supported.  An optional &#x60;_updateSequenceId&#x60; to use to control deletion.  Only stored data with an &#x60;updateSequenceId&#x60; less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  | [Optional] [Defaults to `undefined`] |

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
| **403** | The JWT token used does not correspond to an app that defines the Feature Flags module, or the app does not define the \&#39;DELETE\&#39; scope.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFeatureFlagsByProperty

> deleteFeatureFlagsByProperty(authorization, updateSequenceId)

Delete Feature Flags by Property

Bulk delete all Feature Flags that match the given request.  One or more query params must be supplied to specify Properties to delete by. Optional param &#x60;_updateSequenceId&#x60; is no longer supported. If more than one Property is provided, data will be deleted that matches ALL of the Properties (e.g. treated as an AND). See the documentation for the submitFeatureFlags operation for more details.  e.g. DELETE /bulkByProperties?accountId&#x3D;account-123&amp;createdBy&#x3D;user-456  Deletion is performed asynchronously. The getFeatureFlagById operation can be used to confirm that data has been deleted successfully (if needed). 

### Example

```ts
import {
  Configuration,
  FeatureFlagsApi,
} from 'jira-software-cloud-api';
import type { DeleteFeatureFlagsByPropertyRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FeatureFlagsApi(config);

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Feature Flags module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details. 
    authorization: authorization_example,
    // number | This parameter usage is no longer supported.  An optional `_updateSequenceId` to use to control deletion.  Only stored data with an `updateSequenceId` less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  If not provided, all stored data that matches the request will be deleted.  (optional)
    updateSequenceId: 789,
  } satisfies DeleteFeatureFlagsByPropertyRequest;

  try {
    const data = await api.deleteFeatureFlagsByProperty(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Feature Flags module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details.  | [Defaults to `undefined`] |
| **updateSequenceId** | `number` | This parameter usage is no longer supported.  An optional &#x60;_updateSequenceId&#x60; to use to control deletion.  Only stored data with an &#x60;updateSequenceId&#x60; less than or equal to that provided will be deleted. This can be used help ensure submit/delete requests are applied correctly if issued close together.  If not provided, all stored data that matches the request will be deleted.  | [Optional] [Defaults to `undefined`] |

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
| **403** | The JWT token used does not correspond to an app that defines the Feature Flags module, or the app does not define the \&#39;DELETE\&#39; scope.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFeatureFlagById

> FeatureFlagData getFeatureFlagById(authorization, featureFlagId)

Get a Feature Flag by ID

Retrieve the currently stored Feature Flag data for the given ID.  The result will be what is currently stored, ignoring any pending updates or deletes. 

### Example

```ts
import {
  Configuration,
  FeatureFlagsApi,
} from 'jira-software-cloud-api';
import type { GetFeatureFlagByIdRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FeatureFlagsApi(config);

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Feature Flags module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details. 
    authorization: authorization_example,
    // string | The ID of the Feature Flag to fetch. 
    featureFlagId: featureFlagId_example,
  } satisfies GetFeatureFlagByIdRequest;

  try {
    const data = await api.getFeatureFlagById(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Feature Flags module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details.  | [Defaults to `undefined`] |
| **featureFlagId** | `string` | The ID of the Feature Flag to fetch.  | [Defaults to `undefined`] |

### Return type

[**FeatureFlagData**](FeatureFlagData.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The Feature Flag data currently stored for the given ID.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the Feature Flags module, or the app does not define the \&#39;READ\&#39; scope.  |  -  |
| **404** | No data found for the given Feature Flag ID.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitFeatureFlags

> SubmitFeatureFlagsResponse submitFeatureFlags(authorization, submitFeatureFlagRequest)

Submit Feature Flag data

Update / insert Feature Flag data.  Feature Flags are identified by their ID, and existing Feature Flag data for the same ID will be replaced if it exists and the updateSequenceId of existing data is less than the incoming data.  Submissions are performed asynchronously. Submitted data will eventually be available in Jira; most updates are available within a short period of time, but may take some time during peak load and/or maintenance times. The getFeatureFlagById operation can be used to confirm that data has been stored successfully (if needed).  In the case of multiple Feature Flags being submitted in one request, each is validated individually prior to submission. Details of which Feature Flags failed submission (if any) are available in the response object. 

### Example

```ts
import {
  Configuration,
  FeatureFlagsApi,
} from 'jira-software-cloud-api';
import type { SubmitFeatureFlagsRequest } from 'jira-software-cloud-api';

async function example() {
  console.log("🚀 Testing jira-software-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FeatureFlagsApi(config);

  const body = {
    // string | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Feature Flags module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details. 
    authorization: authorization_example,
    // SubmitFeatureFlagRequest | Feature Flag data to submit. 
    submitFeatureFlagRequest: ...,
  } satisfies SubmitFeatureFlagsRequest;

  try {
    const data = await api.submitFeatureFlags(body);
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
| **authorization** | `string` | All requests must be signed with a Connect JWT token that corresponds to the Provider app installed in Jira.  If the JWT token corresponds to an app that does not define Feature Flags module it will be rejected with a 403.  See https://developer.atlassian.com/blog/2015/01/understanding-jwt/ for more details.  | [Defaults to `undefined`] |
| **submitFeatureFlagRequest** | [SubmitFeatureFlagRequest](SubmitFeatureFlagRequest.md) | Feature Flag data to submit.  | |

### Return type

[**SubmitFeatureFlagsResponse**](SubmitFeatureFlagsResponse.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Submission accepted. Each submitted Feature Flag that is of a valid format will be eventually available in Jira.  Details of which Feature Flags were submitted and which failed submission (due to data format problems etc.) are available in the response object.  |  -  |
| **400** | Request has incorrect format.  Note that in the case of an individual Feature Flag having an invalid format (rather than the request as a whole) the response for the request will be a 202 and details of the invalid Feature Flag will be contained in the response object.  |  -  |
| **401** | Missing a JWT token, or token is invalid.  |  -  |
| **403** | The JWT token used does not correspond to an app that defines the Feature Flags module, or the app does not define the \&#39;WRITE\&#39; scope.  |  -  |
| **413** | Data is too large. Submit fewer Feature Flags in each payload.  |  -  |
| **429** | API rate limit has been exceeded.  |  -  |
| **503** | Service is unavailable due to maintenance or other reasons.  |  -  |
| **0** | An unknown error has occurred.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

