# ThemesApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGlobalTheme**](ThemesApi.md#getglobaltheme) | **GET** /wiki/rest/api/settings/theme/selected | Get global theme |
| [**getSpaceTheme**](ThemesApi.md#getspacetheme) | **GET** /wiki/rest/api/space/{spaceKey}/theme | Get space theme |
| [**getTheme**](ThemesApi.md#gettheme) | **GET** /wiki/rest/api/settings/theme/{themeKey} | Get theme |
| [**getThemes**](ThemesApi.md#getthemes) | **GET** /wiki/rest/api/settings/theme | Get themes |
| [**resetSpaceTheme**](ThemesApi.md#resetspacetheme) | **DELETE** /wiki/rest/api/space/{spaceKey}/theme | Reset space theme |
| [**setSpaceTheme**](ThemesApi.md#setspacetheme) | **PUT** /wiki/rest/api/space/{spaceKey}/theme | Set space theme |



## getGlobalTheme

> Theme getGlobalTheme()

Get global theme

Returns the globally assigned theme.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example

```ts
import {
  Configuration,
  ThemesApi,
} from 'confluence-cloud-api-v1';
import type { GetGlobalThemeRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ThemesApi(config);

  try {
    const data = await api.getGlobalTheme();
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

[**Theme**](Theme.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the global theme is returned. |  -  |
| **404** | Returned if Confluence does not have a global theme assigned, i.e. the default theme is used. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaceTheme

> Theme getSpaceTheme(spaceKey)

Get space theme

Returns the theme selected for a space, if one is set. If no space theme is set, this means that the space is inheriting the global look and feel settings.  **[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘View’ permission for the space.

### Example

```ts
import {
  Configuration,
  ThemesApi,
} from 'confluence-cloud-api-v1';
import type { GetSpaceThemeRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ThemesApi(config);

  const body = {
    // string | The key of the space to be queried for its theme.
    spaceKey: spaceKey_example,
  } satisfies GetSpaceThemeRequest;

  try {
    const data = await api.getSpaceTheme(body);
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
| **spaceKey** | `string` | The key of the space to be queried for its theme. | [Defaults to `undefined`] |

### Return type

[**Theme**](Theme.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested theme is returned. |  -  |
| **404** | Returned if any of the following is true:  - There is no space with the given key. - The space does not have a theme assigned to it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTheme

> Theme getTheme(themeKey)

Get theme

Returns a theme. This includes information about the theme name, description, and icon.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example

```ts
import {
  Configuration,
  ThemesApi,
} from 'confluence-cloud-api-v1';
import type { GetThemeRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ThemesApi(config);

  const body = {
    // string | The key of the theme to be returned.
    themeKey: themeKey_example,
  } satisfies GetThemeRequest;

  try {
    const data = await api.getTheme(body);
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
| **themeKey** | `string` | The key of the theme to be returned. | [Defaults to `undefined`] |

### Return type

[**Theme**](Theme.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested theme is returned. |  -  |
| **404** | Returned if there is no theme with the given key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getThemes

> ThemeArray getThemes(start, limit)

Get themes

Returns all themes, not including the default theme.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None

### Example

```ts
import {
  Configuration,
  ThemesApi,
} from 'confluence-cloud-api-v1';
import type { GetThemesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ThemesApi(config);

  const body = {
    // number | The starting index of the returned themes. (optional)
    start: 56,
    // number | The maximum number of themes to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetThemesRequest;

  try {
    const data = await api.getThemes(body);
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
| **start** | `number` | The starting index of the returned themes. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of themes to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `100`] |

### Return type

[**ThemeArray**](ThemeArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested themes are returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resetSpaceTheme

> resetSpaceTheme(spaceKey)

Reset space theme

Resets the space theme. This means that the space will inherit the global look and feel settings  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  ThemesApi,
} from 'confluence-cloud-api-v1';
import type { ResetSpaceThemeRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ThemesApi(config);

  const body = {
    // string | The key of the space to reset the theme for.
    spaceKey: spaceKey_example,
  } satisfies ResetSpaceThemeRequest;

  try {
    const data = await api.resetSpaceTheme(body);
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
| **spaceKey** | `string` | The key of the space to reset the theme for. | [Defaults to `undefined`] |

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
| **204** | Returned if the theme was reset for the space. |  -  |
| **404** | Returned if there is no space with the given key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setSpaceTheme

> Theme setSpaceTheme(spaceKey, body)

Set space theme

Sets the theme for a space. Note, if you want to reset the space theme to the default Confluence theme, use the \&#39;Reset space theme\&#39; method instead of this method.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  ThemesApi,
} from 'confluence-cloud-api-v1';
import type { SetSpaceThemeRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ThemesApi(config);

  const body = {
    // string | The key of the space to set the theme for.
    spaceKey: spaceKey_example,
    // ThemeUpdate
    body: ...,
  } satisfies SetSpaceThemeRequest;

  try {
    const data = await api.setSpaceTheme(body);
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
| **spaceKey** | `string` | The key of the space to set the theme for. | [Defaults to `undefined`] |
| **body** | [ThemeUpdate](ThemeUpdate.md) |  | |

### Return type

[**Theme**](Theme.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the theme was set for the space. |  -  |
| **403** | Returned if the theme key is invalid. |  -  |
| **404** | Returned if there is no space with the given key. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

