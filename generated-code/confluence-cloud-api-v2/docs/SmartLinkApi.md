# SmartLinkApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSmartLink**](SmartLinkApi.md#createsmartlinkoperation) | **POST** /embeds | Create Smart Link in the content tree |
| [**deleteSmartLink**](SmartLinkApi.md#deletesmartlink) | **DELETE** /embeds/{id} | Delete Smart Link in the content tree |
| [**getSmartLinkById**](SmartLinkApi.md#getsmartlinkbyid) | **GET** /embeds/{id} | Get Smart Link in the content tree by id |



## createSmartLink

> CreateSmartLink200Response createSmartLink(createSmartLinkRequest)

Create Smart Link in the content tree

Creates a Smart Link in the content tree in the space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space. Permission to create a Smart Link in the content tree in the space.

### Example

```ts
import {
  Configuration,
  SmartLinkApi,
} from 'confluence-cloud-api-v2';
import type { CreateSmartLinkOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SmartLinkApi(config);

  const body = {
    // CreateSmartLinkRequest
    createSmartLinkRequest: ...,
  } satisfies CreateSmartLinkOperationRequest;

  try {
    const data = await api.createSmartLink(body);
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
| **createSmartLinkRequest** | [CreateSmartLinkRequest](CreateSmartLinkRequest.md) |  | |

### Return type

[**CreateSmartLink200Response**](CreateSmartLink200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the Smart Link was successfully created in the content tree. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The space does not exist - The user does not have permissions to view the space - The user does not have the needed permissions to create a Smart Link in the content tree in the provided space |  -  |
| **413** | Returned if the request is too large in size (over 5 MB). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSmartLink

> deleteSmartLink(id)

Delete Smart Link in the content tree

Delete a Smart Link in the content tree by id.  Deleting a Smart Link in the content tree moves the Smart Link to the trash, where it can be restored later  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the Smart Link in the content tree and its corresponding space. Permission to delete Smart Links in the content tree in the space.

### Example

```ts
import {
  Configuration,
  SmartLinkApi,
} from 'confluence-cloud-api-v2';
import type { DeleteSmartLinkRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SmartLinkApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree to be deleted.
    id: 789,
  } satisfies DeleteSmartLinkRequest;

  try {
    const data = await api.deleteSmartLink(body);
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
| **id** | `number` | The ID of the Smart Link in the content tree to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the Smart Link in the content tree was successfully deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided Smart Link in the content tree does not exist - The user does not have permissions to view the Smart Link in the content tree - The user does not have the needed permissions to delete a Smart Link in the content tree in the space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSmartLinkById

> CreateSmartLink200Response getSmartLinkById(id, includeCollaborators, includeDirectChildren, includeOperations, includeProperties)

Get Smart Link in the content tree by id

Returns a specific Smart Link in the content tree.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the Smart Link in the content tree and its corresponding space.

### Example

```ts
import {
  Configuration,
  SmartLinkApi,
} from 'confluence-cloud-api-v2';
import type { GetSmartLinkByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SmartLinkApi(config);

  const body = {
    // number | The ID of the Smart Link in the content tree to be returned.
    id: 789,
    // boolean | Includes collaborators on the Smart Link. (optional)
    includeCollaborators: true,
    // boolean | Includes direct children of the Smart Link, as defined in the `ChildrenResponse` object. (optional)
    includeDirectChildren: true,
    // boolean | Includes operations associated with this Smart Link in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes content properties associated with this Smart Link in the response. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
  } satisfies GetSmartLinkByIdRequest;

  try {
    const data = await api.getSmartLinkById(body);
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
| **id** | `number` | The ID of the Smart Link in the content tree to be returned. | [Defaults to `undefined`] |
| **includeCollaborators** | `boolean` | Includes collaborators on the Smart Link. | [Optional] [Defaults to `false`] |
| **includeDirectChildren** | `boolean` | Includes direct children of the Smart Link, as defined in the &#x60;ChildrenResponse&#x60; object. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this Smart Link in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes content properties associated with this Smart Link in the response. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |

### Return type

[**CreateSmartLink200Response**](CreateSmartLink200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested Smart Link in the content tree is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested Smart Link in the content tree or the Smart Link was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

