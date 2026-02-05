# SpaceSettingsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSpaceSettings**](SpaceSettingsApi.md#getspacesettings) | **GET** /wiki/rest/api/space/{spaceKey}/settings | Get space settings |
| [**updateSpaceSettings**](SpaceSettingsApi.md#updatespacesettings) | **PUT** /wiki/rest/api/space/{spaceKey}/settings | Update space settings |



## getSpaceSettings

> SpaceSettings getSpaceSettings(spaceKey)

Get space settings

Returns the settings of a space. Currently only the &#x60;routeOverrideEnabled&#x60; setting can be returned.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;View\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpaceSettingsApi,
} from 'confluence-cloud-api-v1';
import type { GetSpaceSettingsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceSettingsApi(config);

  const body = {
    // string | The key of the space to be queried for its settings.
    spaceKey: spaceKey_example,
  } satisfies GetSpaceSettingsRequest;

  try {
    const data = await api.getSpaceSettings(body);
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
| **spaceKey** | `string` | The key of the space to be queried for its settings. | [Defaults to `undefined`] |

### Return type

[**SpaceSettings**](SpaceSettings.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the space settings are returned. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if;  - There is no space with the given key. - The calling user does not have permission to view the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSpaceSettings

> SpaceSettings updateSpaceSettings(spaceKey, spaceSettingsUpdate)

Update space settings

Updates the settings for a space. Currently only the &#x60;routeOverrideEnabled&#x60; setting can be updated.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpaceSettingsApi,
} from 'confluence-cloud-api-v1';
import type { UpdateSpaceSettingsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceSettingsApi(config);

  const body = {
    // string | The key of the space whose settings will be updated.
    spaceKey: spaceKey_example,
    // SpaceSettingsUpdate | The space settings to update.
    spaceSettingsUpdate: ...,
  } satisfies UpdateSpaceSettingsRequest;

  try {
    const data = await api.updateSpaceSettings(body);
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
| **spaceKey** | `string` | The key of the space whose settings will be updated. | [Defaults to `undefined`] |
| **spaceSettingsUpdate** | [SpaceSettingsUpdate](SpaceSettingsUpdate.md) | The space settings to update. | |

### Return type

[**SpaceSettings**](SpaceSettings.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if space settings are updated. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if;  - There is no space with the given key. - The calling user does not have permission to update the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

