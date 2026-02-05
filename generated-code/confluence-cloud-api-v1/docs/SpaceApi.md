# SpaceApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPrivateSpace**](SpaceApi.md#createprivatespace) | **POST** /wiki/rest/api/space/_private | Create private space |
| [**createSpace**](SpaceApi.md#createspace) | **POST** /wiki/rest/api/space | Create space |
| [**deleteSpace**](SpaceApi.md#deletespace) | **DELETE** /wiki/rest/api/space/{spaceKey} | Delete space |
| [**updateSpace**](SpaceApi.md#updatespace) | **PUT** /wiki/rest/api/space/{spaceKey} | Update space |



## createPrivateSpace

> Space createPrivateSpace(spacePrivateCreate)

Create private space

Creates a new space that is only visible to the creator. This method is the same as the [Create space](#api-space-post) method with permissions set to the current user only. Note, currently you cannot set space labels when creating a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Create Space(s)\&#39; global permission.

### Example

```ts
import {
  Configuration,
  SpaceApi,
} from 'confluence-cloud-api-v1';
import type { CreatePrivateSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceApi(config);

  const body = {
    // SpaceCreate | The space to be created.
    spacePrivateCreate: ...,
  } satisfies CreatePrivateSpaceRequest;

  try {
    const data = await api.createPrivateSpace(body);
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
| **spacePrivateCreate** | [SpaceCreate](SpaceCreate.md) | The space to be created. | |

### Return type

[**Space**](Space.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the space is created. |  -  |
| **400** | Returned if any of the following is true:  - The request is invalid. - The space already exists. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have permission to create a space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSpace

> Space createSpace(body)

Create space

Creates a new space. Note, currently you cannot set space labels when creating a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Create Space(s)\&#39; global permission.

### Example

```ts
import {
  Configuration,
  SpaceApi,
} from 'confluence-cloud-api-v1';
import type { CreateSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceApi(config);

  const body = {
    // SpaceCreate | The space to be created.
    body: ...,
  } satisfies CreateSpaceRequest;

  try {
    const data = await api.createSpace(body);
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
| **body** | [SpaceCreate](SpaceCreate.md) | The space to be created. | |

### Return type

[**Space**](Space.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the space is created. |  -  |
| **400** | Returned if any of the following is true:  - The request is invalid. - The space already exists. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the callig user does not have permission to create a space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSpace

> LongTask deleteSpace(spaceKey)

Delete space

Permanently deletes a space without sending it to the trash. Note, the space will be deleted in a long running task. Therefore, the space may not be deleted yet when this method has returned. Clients should poll the status link that is returned in the response until the task completes.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpaceApi,
} from 'confluence-cloud-api-v1';
import type { DeleteSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceApi(config);

  const body = {
    // string | The key of the space to delete.
    spaceKey: spaceKey_example,
  } satisfies DeleteSpaceRequest;

  try {
    const data = await api.deleteSpace(body);
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
| **spaceKey** | `string` | The key of the space to delete. | [Defaults to `undefined`] |

### Return type

[**LongTask**](LongTask.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returns a pointer to the status of the space deletion task. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if any of the following is true:  - There is no space with the given key. - The calling user does not have permission to delete the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSpace

> Space updateSpace(spaceKey, body)

Update space

Updates the name, description, or homepage of a space.  -   For security reasons, permissions cannot be updated via the API and must be changed via the user interface instead. -   Currently you cannot set space labels when updating a space.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpaceApi,
} from 'confluence-cloud-api-v1';
import type { UpdateSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpaceApi(config);

  const body = {
    // string | The key of the space to update.
    spaceKey: spaceKey_example,
    // SpaceUpdate | The updated space.
    body: ...,
  } satisfies UpdateSpaceRequest;

  try {
    const data = await api.updateSpace(body);
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
| **spaceKey** | `string` | The key of the space to update. | [Defaults to `undefined`] |
| **body** | [SpaceUpdate](SpaceUpdate.md) | The updated space. | |

### Return type

[**Space**](Space.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the space is updated. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if any of the following is true:  - There is no space with the given key - The calling user does not have permission to update the space. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

