# SettingsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getLookAndFeelSettings**](SettingsApi.md#getlookandfeelsettings) | **GET** /wiki/rest/api/settings/lookandfeel | Get look and feel settings |
| [**getSystemInfo**](SettingsApi.md#getsysteminfo) | **GET** /wiki/rest/api/settings/systemInfo | Get system info |
| [**resetLookAndFeelSettings**](SettingsApi.md#resetlookandfeelsettings) | **DELETE** /wiki/rest/api/settings/lookandfeel/custom | Reset look and feel settings |
| [**updateLookAndFeel**](SettingsApi.md#updatelookandfeel) | **PUT** /wiki/rest/api/settings/lookandfeel | Select look and feel settings |
| [**updateLookAndFeelSettings**](SettingsApi.md#updatelookandfeelsettings) | **POST** /wiki/rest/api/settings/lookandfeel/custom | Update look and feel settings |



## getLookAndFeelSettings

> LookAndFeelSettings getLookAndFeelSettings(spaceKey)

Get look and feel settings

Returns the look and feel settings for the site or a single space. This includes attributes such as the color scheme, padding, and border radius.  The look and feel settings for a space can be inherited from the global look and feel settings or provided by a theme.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from 'confluence-cloud-api-v1';
import type { GetLookAndFeelSettingsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // string | The key of the space for which the look and feel settings will be returned. If this is not set, only the global look and feel settings are returned. (optional)
    spaceKey: spaceKey_example,
  } satisfies GetLookAndFeelSettingsRequest;

  try {
    const data = await api.getLookAndFeelSettings(body);
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
| **spaceKey** | `string` | The key of the space for which the look and feel settings will be returned. If this is not set, only the global look and feel settings are returned. | [Optional] [Defaults to `undefined`] |

### Return type

[**LookAndFeelSettings**](LookAndFeelSettings.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested look and feel settings are returned. |  -  |
| **400** | Returned if &#x60;spaceKey&#x60; is invalid. |  -  |
| **404** | Returned if there is no space with the given &#x60;spaceKey&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSystemInfo

> SystemInfoEntity getSystemInfo()

Get system info

Returns the system information for the Confluence Cloud tenant. This information is used by Atlassian.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from 'confluence-cloud-api-v1';
import type { GetSystemInfoRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SettingsApi(config);

  try {
    const data = await api.getSystemInfo();
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

[**SystemInfoEntity**](SystemInfoEntity.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the system information for the Confluence Cloud tenant is returned. |  -  |
| **403** | Returned when the user does not have permission to view the system information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resetLookAndFeelSettings

> resetLookAndFeelSettings(spaceKey)

Reset look and feel settings

Resets the custom look and feel settings for the site or a single space. This changes the values of the custom settings to be the same as the default settings. It does not change which settings (default or custom) are selected. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from 'confluence-cloud-api-v1';
import type { ResetLookAndFeelSettingsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // string | The key of the space for which the look and feel settings will be reset. If this is not set, the global look and feel settings will be reset. (optional)
    spaceKey: spaceKey_example,
  } satisfies ResetLookAndFeelSettingsRequest;

  try {
    const data = await api.resetLookAndFeelSettings(body);
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
| **spaceKey** | `string` | The key of the space for which the look and feel settings will be reset. If this is not set, the global look and feel settings will be reset. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the look and feel settings have been reset. |  -  |
| **400** | Returned if &#x60;spaceKey&#x60; is invalid. |  -  |
| **403** | Returned if the calling user doesn\&#39;t have permission to reset the look and feel. |  -  |
| **404** | Returned if there is no space with the given &#x60;spaceKey&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateLookAndFeel

> LookAndFeelSelection updateLookAndFeel(body)

Select look and feel settings

Sets the look and feel settings to the default (global) settings, the custom settings, or the current theme\&#39;s settings for a space. The custom and theme settings can only be selected if there is already a theme set for a space. Note, the default space settings are inherited from the current global settings.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from 'confluence-cloud-api-v1';
import type { UpdateLookAndFeelRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // LookAndFeelSelection | The look and feel type to be set.
    body: ...,
  } satisfies UpdateLookAndFeelRequest;

  try {
    const data = await api.updateLookAndFeel(body);
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
| **body** | [LookAndFeelSelection](LookAndFeelSelection.md) | The look and feel type to be set. | |

### Return type

[**LookAndFeelSelection**](LookAndFeelSelection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the look and feel settings were set. |  -  |
| **400** | Returned if;  - &#x60;spaceKey&#x60; is invalid. - &#x60;lookAndFeelType&#x60; is invalid. |  -  |
| **403** | Returned if the calling user doesn\&#39;t have permission to edit the look and feel settings. |  -  |
| **404** | Returned if there is no space with the given &#x60;spaceKey&#x60;. |  -  |
| **409** | Returned if &#x60;lookAndFeelType&#x60; is set to \&#39;custom\&#39; or \&#39;theme\&#39;, and a theme is not currently set for the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateLookAndFeelSettings

> LookAndFeelWithLinks updateLookAndFeelSettings(body, spaceKey)

Update look and feel settings

Updates the look and feel settings for the site or for a single space. If custom settings exist, they are updated. If no custom settings exist, then a set of custom settings is created.  Note, if a theme is selected for a space, the space look and feel settings are provided by the theme and cannot be overridden.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from 'confluence-cloud-api-v1';
import type { UpdateLookAndFeelSettingsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // LookAndFeel | The updated settings. All values for the settings must be included, regardless of whether they are being changed.  One way to create the request body is to copy the settings from the response body of [Get look and feel settings](#api-settings-lookandfeel-get) and modify it as needed.
    body: ...,
    // string | The key of the space for which the look and feel settings will be updated. If this is not set, the global look and feel settings will be updated. (optional)
    spaceKey: spaceKey_example,
  } satisfies UpdateLookAndFeelSettingsRequest;

  try {
    const data = await api.updateLookAndFeelSettings(body);
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
| **body** | [LookAndFeel](LookAndFeel.md) | The updated settings. All values for the settings must be included, regardless of whether they are being changed.  One way to create the request body is to copy the settings from the response body of [Get look and feel settings](#api-settings-lookandfeel-get) and modify it as needed. | |
| **spaceKey** | `string` | The key of the space for which the look and feel settings will be updated. If this is not set, the global look and feel settings will be updated. | [Optional] [Defaults to `undefined`] |

### Return type

[**LookAndFeelWithLinks**](LookAndFeelWithLinks.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the look and feel settings are updated. |  -  |
| **400** | Returned if;  - The &#x60;spaceKey&#x60; is invalid - The request body contains invalid data. |  -  |
| **403** | Returned if the calling user doesn\&#39;t have permission to edit the look and feel settings. |  -  |
| **404** | Returned if there is no space with the given &#x60;spaceKey&#x60;. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

