# InfoApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInfo**](InfoApi.md#getinfo) | **GET** /rest/servicedeskapi/info | Get info |



## getInfo

> SoftwareInfoDTO getInfo()

Get info

This method retrieves information about the Jira Service Management instance such as software version, builds, and related links.  **[Permissions](#permissions) required**: None, the user does not need to be logged in.

### Example

```ts
import {
  Configuration,
  InfoApi,
} from 'jira-cloud-service-management-api';
import type { GetInfoRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new InfoApi(config);

  try {
    const data = await api.getInfo();
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

[**SoftwareInfoDTO**](SoftwareInfoDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the runtime information for the Jira Service Management instance. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

