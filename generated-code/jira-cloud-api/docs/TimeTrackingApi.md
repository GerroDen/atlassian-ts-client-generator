# TimeTrackingApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAvailableTimeTrackingImplementations**](TimeTrackingApi.md#getavailabletimetrackingimplementations) | **GET** /rest/api/3/configuration/timetracking/list | Get all time tracking providers |
| [**getSelectedTimeTrackingImplementation**](TimeTrackingApi.md#getselectedtimetrackingimplementation) | **GET** /rest/api/3/configuration/timetracking | Get selected time tracking provider |
| [**getSharedTimeTrackingConfiguration**](TimeTrackingApi.md#getsharedtimetrackingconfiguration) | **GET** /rest/api/3/configuration/timetracking/options | Get time tracking settings |
| [**selectTimeTrackingImplementation**](TimeTrackingApi.md#selecttimetrackingimplementation) | **PUT** /rest/api/3/configuration/timetracking | Select time tracking provider |
| [**setSharedTimeTrackingConfiguration**](TimeTrackingApi.md#setsharedtimetrackingconfiguration) | **PUT** /rest/api/3/configuration/timetracking/options | Set time tracking settings |



## getAvailableTimeTrackingImplementations

> Array&lt;TimeTrackingProvider&gt; getAvailableTimeTrackingImplementations()

Get all time tracking providers

Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the [ Time Tracking Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TimeTrackingApi,
} from 'jira-cloud-api';
import type { GetAvailableTimeTrackingImplementationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TimeTrackingApi(config);

  try {
    const data = await api.getAvailableTimeTrackingImplementations();
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

[**Array&lt;TimeTrackingProvider&gt;**](TimeTrackingProvider.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSelectedTimeTrackingImplementation

> TimeTrackingProvider getSelectedTimeTrackingImplementation()

Get selected time tracking provider

Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TimeTrackingApi,
} from 'jira-cloud-api';
import type { GetSelectedTimeTrackingImplementationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TimeTrackingApi(config);

  try {
    const data = await api.getSelectedTimeTrackingImplementation();
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

[**TimeTrackingProvider**](TimeTrackingProvider.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful and time tracking is enabled. |  -  |
| **204** | Returned if the request is successful but time tracking is disabled. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSharedTimeTrackingConfiguration

> TimeTrackingConfiguration getSharedTimeTrackingConfiguration()

Get time tracking settings

Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TimeTrackingApi,
} from 'jira-cloud-api';
import type { GetSharedTimeTrackingConfigurationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TimeTrackingApi(config);

  try {
    const data = await api.getSharedTimeTrackingConfiguration();
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

[**TimeTrackingConfiguration**](TimeTrackingConfiguration.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## selectTimeTrackingImplementation

> any selectTimeTrackingImplementation(timeTrackingProvider)

Select time tracking provider

Selects a time tracking provider.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TimeTrackingApi,
} from 'jira-cloud-api';
import type { SelectTimeTrackingImplementationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TimeTrackingApi(config);

  const body = {
    // TimeTrackingProvider
    timeTrackingProvider: {"key":"Jira"},
  } satisfies SelectTimeTrackingImplementationRequest;

  try {
    const data = await api.selectTimeTrackingImplementation(body);
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
| **timeTrackingProvider** | [TimeTrackingProvider](TimeTrackingProvider.md) |  | |

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
| **400** | Returned if the time tracking provider is not found. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setSharedTimeTrackingConfiguration

> TimeTrackingConfiguration setSharedTimeTrackingConfiguration(timeTrackingConfiguration)

Set time tracking settings

Sets the time tracking settings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  TimeTrackingApi,
} from 'jira-cloud-api';
import type { SetSharedTimeTrackingConfigurationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new TimeTrackingApi(config);

  const body = {
    // TimeTrackingConfiguration
    timeTrackingConfiguration: {"defaultUnit":"hour","timeFormat":"pretty","workingDaysPerWeek":5.5,"workingHoursPerDay":7.6},
  } satisfies SetSharedTimeTrackingConfigurationRequest;

  try {
    const data = await api.setSharedTimeTrackingConfiguration(body);
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
| **timeTrackingConfiguration** | [TimeTrackingConfiguration](TimeTrackingConfiguration.md) |  | |

### Return type

[**TimeTrackingConfiguration**](TimeTrackingConfiguration.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request object is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

