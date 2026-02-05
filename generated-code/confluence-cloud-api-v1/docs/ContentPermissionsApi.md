# ContentPermissionsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkContentPermission**](ContentPermissionsApi.md#checkcontentpermission) | **POST** /wiki/rest/api/content/{id}/permission/check | Check content permissions |



## checkContentPermission

> PermissionCheckResponse checkContentPermission(id, body)

Check content permissions

Check if a user or a group can perform an operation to the specified content. The &#x60;operation&#x60; to check must be provided. The user’s account ID or the ID of the group can be provided in the &#x60;subject&#x60; to check permissions against a specified user or group. The following permission checks are done to make sure that the user or group has the proper access:  - site permissions - space permissions - content restrictions  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission) if checking permission for self, otherwise \&#39;Confluence Administrator\&#39; global permission is required.

### Example

```ts
import {
  Configuration,
  ContentPermissionsApi,
} from 'confluence-cloud-api-v1';
import type { CheckContentPermissionRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentPermissionsApi(config);

  const body = {
    // string | The ID of the content to check permissions against.
    id: id_example,
    // ContentPermissionRequest | The content permission request.
    body: ...,
  } satisfies CheckContentPermissionRequest;

  try {
    const data = await api.checkContentPermission(body);
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
| **id** | `string` | The ID of the content to check permissions against. | [Defaults to `undefined`] |
| **body** | [ContentPermissionRequest](ContentPermissionRequest.md) | The content permission request. | |

### Return type

[**PermissionCheckResponse**](PermissionCheckResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the permission check completed successfully |  -  |
| **400** | Returned if;  - If any of the required fields are missing. - If specified &#x60;subject&#x60; or &#x60;operation&#x60; is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have permission perform the check. |  -  |
| **404** | Returned if there is no content with the given ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

