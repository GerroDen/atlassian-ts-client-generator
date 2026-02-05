# AnnouncementBannerApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBanner**](AnnouncementBannerApi.md#getbanner) | **GET** /rest/api/3/announcementBanner | Get announcement banner configuration |
| [**setBanner**](AnnouncementBannerApi.md#setbanner) | **PUT** /rest/api/3/announcementBanner | Update announcement banner configuration |



## getBanner

> AnnouncementBannerConfiguration getBanner()

Get announcement banner configuration

Returns the current announcement banner configuration.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  AnnouncementBannerApi,
} from 'jira-cloud-api';
import type { GetBannerRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AnnouncementBannerApi(config);

  try {
    const data = await api.getBanner();
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

[**AnnouncementBannerConfiguration**](AnnouncementBannerConfiguration.md)

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


## setBanner

> any setBanner(announcementBannerConfigurationUpdate)

Update announcement banner configuration

Updates the announcement banner configuration.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  AnnouncementBannerApi,
} from 'jira-cloud-api';
import type { SetBannerRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AnnouncementBannerApi(config);

  const body = {
    // AnnouncementBannerConfigurationUpdate
    announcementBannerConfigurationUpdate: {"isDismissible":false,"isEnabled":true,"message":"This is a public, enabled, non-dismissible banner, set using the API","visibility":"public"},
  } satisfies SetBannerRequest;

  try {
    const data = await api.setBanner(body);
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
| **announcementBannerConfigurationUpdate** | [AnnouncementBannerConfigurationUpdate](AnnouncementBannerConfigurationUpdate.md) |  | |

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
| **400** | Returned if an invalid parameter is passed. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

