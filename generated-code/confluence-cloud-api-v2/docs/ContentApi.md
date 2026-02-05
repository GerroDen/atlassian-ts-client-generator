# ContentApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**convertContentIdsToContentTypes**](ContentApi.md#convertcontentidstocontenttypesoperation) | **POST** /content/convert-ids-to-types | Convert content ids to content types |



## convertContentIdsToContentTypes

> ContentIdToContentTypeResponse convertContentIdsToContentTypes(convertContentIdsToContentTypesRequest)

Convert content ids to content types

Converts a list of content ids into their associated content types. This is useful for users migrating from v1 to v2 who may have stored just content ids without their associated type. This will return types as they should be used in v2. Notably, this will return &#x60;inline-comment&#x60; for inline comments and &#x60;footer-comment&#x60; for footer comments, which is distinct from them both being represented by &#x60;comment&#x60; in v1.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the requested content. Any content that the user does not have permission to view or does not exist will map to &#x60;null&#x60; in the response.

### Example

```ts
import {
  Configuration,
  ContentApi,
} from 'confluence-cloud-api-v2';
import type { ConvertContentIdsToContentTypesOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentApi(config);

  const body = {
    // ConvertContentIdsToContentTypesRequest
    convertContentIdsToContentTypesRequest: ...,
  } satisfies ConvertContentIdsToContentTypesOperationRequest;

  try {
    const data = await api.convertContentIdsToContentTypes(body);
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
| **convertContentIdsToContentTypesRequest** | [ConvertContentIdsToContentTypesRequest](ConvertContentIdsToContentTypesRequest.md) |  | |

### Return type

[**ContentIdToContentTypeResponse**](ContentIdToContentTypeResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content ids are successfully converted to their content types |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

