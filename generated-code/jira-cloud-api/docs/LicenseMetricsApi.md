# LicenseMetricsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getApproximateApplicationLicenseCount**](LicenseMetricsApi.md#getapproximateapplicationlicensecount) | **GET** /rest/api/3/license/approximateLicenseCount/product/{applicationKey} | Get approximate application license count |
| [**getApproximateLicenseCount**](LicenseMetricsApi.md#getapproximatelicensecount) | **GET** /rest/api/3/license/approximateLicenseCount | Get approximate license count |
| [**getLicense**](LicenseMetricsApi.md#getlicense) | **GET** /rest/api/3/instance/license | Get license |



## getApproximateApplicationLicenseCount

> LicenseMetric getApproximateApplicationLicenseCount(applicationKey)

Get approximate application license count

Returns the total approximate number of user accounts for a single Jira license. Note that this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  LicenseMetricsApi,
} from 'jira-cloud-api';
import type { GetApproximateApplicationLicenseCountRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new LicenseMetricsApi(config);

  const body = {
    // 'jira-core' | 'jira-product-discovery' | 'jira-software' | 'jira-servicedesk' | The ID of the application, represents a specific version of Jira.
    applicationKey: applicationKey_example,
  } satisfies GetApproximateApplicationLicenseCountRequest;

  try {
    const data = await api.getApproximateApplicationLicenseCount(body);
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
| **applicationKey** | `jira-core`, `jira-product-discovery`, `jira-software`, `jira-servicedesk` | The ID of the application, represents a specific version of Jira. | [Defaults to `undefined`] [Enum: jira-core, jira-product-discovery, jira-software, jira-servicedesk] |

### Return type

[**LicenseMetric**](LicenseMetric.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApproximateLicenseCount

> LicenseMetric getApproximateLicenseCount()

Get approximate license count

Returns the approximate number of user accounts across all Jira licenses. Note that this information is cached with a 7-day lifecycle and could be stale at the time of call.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  LicenseMetricsApi,
} from 'jira-cloud-api';
import type { GetApproximateLicenseCountRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new LicenseMetricsApi(config);

  try {
    const data = await api.getApproximateLicenseCount();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LicenseMetric**](LicenseMetric.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLicense

> License getLicense()

Get license

Returns licensing information about the Jira instance.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  LicenseMetricsApi,
} from 'jira-cloud-api';
import type { GetLicenseRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new LicenseMetricsApi(config);

  try {
    const data = await api.getLicense();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**License**](License.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

