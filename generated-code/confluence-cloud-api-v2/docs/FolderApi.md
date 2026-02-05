# FolderApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFolder**](FolderApi.md#createfolderoperation) | **POST** /folders | Create folder |
| [**deleteFolder**](FolderApi.md#deletefolder) | **DELETE** /folders/{id} | Delete folder |
| [**getFolderById**](FolderApi.md#getfolderbyid) | **GET** /folders/{id} | Get folder by id |



## createFolder

> CreateFolder200Response createFolder(createFolderRequest)

Create folder

Creates a folder in the space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space. Permission to create a folder in the space.

### Example

```ts
import {
  Configuration,
  FolderApi,
} from 'confluence-cloud-api-v2';
import type { CreateFolderOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FolderApi(config);

  const body = {
    // CreateFolderRequest
    createFolderRequest: ...,
  } satisfies CreateFolderOperationRequest;

  try {
    const data = await api.createFolder(body);
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
| **createFolderRequest** | [CreateFolderRequest](CreateFolderRequest.md) |  | |

### Return type

[**CreateFolder200Response**](CreateFolder200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the folder was successfully created in the content tree. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The space does not exist - The user does not have permissions to view the space - The user does not have the needed permissions to create a folder in the provided space |  -  |
| **413** | Returned if the request is too large in size (over 5 MB). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFolder

> deleteFolder(id)

Delete folder

Delete a folder by id.  Deleting a folder moves the folder to the trash, where it can be restored later  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the folder and its corresponding space. Permission to delete folders in the space.

### Example

```ts
import {
  Configuration,
  FolderApi,
} from 'confluence-cloud-api-v2';
import type { DeleteFolderRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FolderApi(config);

  const body = {
    // number | The ID of the folder to be deleted.
    id: 789,
  } satisfies DeleteFolderRequest;

  try {
    const data = await api.deleteFolder(body);
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
| **id** | `number` | The ID of the folder to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the folder was successfully deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided folder does not exist - The user does not have permissions to view the folder - The user does not have the needed permissions to delete folder in the space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFolderById

> CreateFolder200Response getFolderById(id, includeCollaborators, includeDirectChildren, includeOperations, includeProperties)

Get folder by id

Returns a specific folder.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the folder and its corresponding space.

### Example

```ts
import {
  Configuration,
  FolderApi,
} from 'confluence-cloud-api-v2';
import type { GetFolderByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new FolderApi(config);

  const body = {
    // number | The ID of the folder to be returned.
    id: 789,
    // boolean | Includes collaborators on the folder. (optional)
    includeCollaborators: true,
    // boolean | Includes direct children of the folder, as defined in the `ChildrenResponse` object. (optional)
    includeDirectChildren: true,
    // boolean | Includes operations associated with this folder in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes content properties associated with this folder in the response. The number of results will be limited to 50 and sorted in the default sort order. A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
  } satisfies GetFolderByIdRequest;

  try {
    const data = await api.getFolderById(body);
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
| **id** | `number` | The ID of the folder to be returned. | [Defaults to `undefined`] |
| **includeCollaborators** | `boolean` | Includes collaborators on the folder. | [Optional] [Defaults to `false`] |
| **includeDirectChildren** | `boolean` | Includes direct children of the folder, as defined in the &#x60;ChildrenResponse&#x60; object. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this folder in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes content properties associated with this folder in the response. The number of results will be limited to 50 and sorted in the default sort order. A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |

### Return type

[**CreateFolder200Response**](CreateFolder200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested folder is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested folder or the folder was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

