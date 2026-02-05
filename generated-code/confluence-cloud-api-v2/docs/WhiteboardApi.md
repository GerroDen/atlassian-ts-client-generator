# WhiteboardApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWhiteboard**](WhiteboardApi.md#createwhiteboardoperation) | **POST** /whiteboards | Create whiteboard |
| [**deleteWhiteboard**](WhiteboardApi.md#deletewhiteboard) | **DELETE** /whiteboards/{id} | Delete whiteboard |
| [**getWhiteboardById**](WhiteboardApi.md#getwhiteboardbyid) | **GET** /whiteboards/{id} | Get whiteboard by id |



## createWhiteboard

> CreateWhiteboard200Response createWhiteboard(createWhiteboardRequest, _private)

Create whiteboard

Creates a whiteboard in the space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space. Permission to create a whiteboard in the space.

### Example

```ts
import {
  Configuration,
  WhiteboardApi,
} from 'confluence-cloud-api-v2';
import type { CreateWhiteboardOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new WhiteboardApi(config);

  const body = {
    // CreateWhiteboardRequest
    createWhiteboardRequest: ...,
    // boolean | The whiteboard will be private. Only the user who creates this whiteboard will have permission to view and edit one. (optional)
    _private: true,
  } satisfies CreateWhiteboardOperationRequest;

  try {
    const data = await api.createWhiteboard(body);
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
| **createWhiteboardRequest** | [CreateWhiteboardRequest](CreateWhiteboardRequest.md) |  | |
| **_private** | `boolean` | The whiteboard will be private. Only the user who creates this whiteboard will have permission to view and edit one. | [Optional] [Defaults to `false`] |

### Return type

[**CreateWhiteboard200Response**](CreateWhiteboard200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the whiteboard was successfully created. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The space does not exist - The user does not have permissions to view the space - The user does not have the needed permissions to create a whiteboard in the provided space |  -  |
| **413** | Returned if the request is too large in size (over 5 MB). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWhiteboard

> deleteWhiteboard(id)

Delete whiteboard

Delete a whiteboard by id.  Deleting a whiteboard moves the whiteboard to the trash, where it can be restored later  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the whiteboard and its corresponding space. Permission to delete whiteboards in the space.

### Example

```ts
import {
  Configuration,
  WhiteboardApi,
} from 'confluence-cloud-api-v2';
import type { DeleteWhiteboardRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new WhiteboardApi(config);

  const body = {
    // number | The ID of the whiteboard to be deleted.
    id: 789,
  } satisfies DeleteWhiteboardRequest;

  try {
    const data = await api.deleteWhiteboard(body);
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
| **id** | `number` | The ID of the whiteboard to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the whiteboard was successfully deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided whiteboard does not exist - The user does not have permissions to view the whiteboard - The user does not have the needed permissions to delete a whiteboard in the space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWhiteboardById

> CreateWhiteboard200Response getWhiteboardById(id, includeCollaborators, includeDirectChildren, includeOperations, includeProperties)

Get whiteboard by id

Returns a specific whiteboard.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the whiteboard and its corresponding space.

### Example

```ts
import {
  Configuration,
  WhiteboardApi,
} from 'confluence-cloud-api-v2';
import type { GetWhiteboardByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new WhiteboardApi(config);

  const body = {
    // number | The ID of the whiteboard to be returned
    id: 789,
    // boolean | Includes collaborators on the whiteboard. (optional)
    includeCollaborators: true,
    // boolean | Includes direct children of the whiteboard, as defined in the `ChildrenResponse` object. (optional)
    includeDirectChildren: true,
    // boolean | Includes operations associated with this whiteboard in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes content properties associated with this whiteboard in the response. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
  } satisfies GetWhiteboardByIdRequest;

  try {
    const data = await api.getWhiteboardById(body);
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
| **id** | `number` | The ID of the whiteboard to be returned | [Defaults to `undefined`] |
| **includeCollaborators** | `boolean` | Includes collaborators on the whiteboard. | [Optional] [Defaults to `false`] |
| **includeDirectChildren** | `boolean` | Includes direct children of the whiteboard, as defined in the &#x60;ChildrenResponse&#x60; object. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this whiteboard in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes content properties associated with this whiteboard in the response. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |

### Return type

[**CreateWhiteboard200Response**](CreateWhiteboard200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested whiteboard is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested whiteboard or the whiteboard was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

