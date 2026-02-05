# SpacePropertiesApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSpaceProperty**](SpacePropertiesApi.md#createspaceproperty) | **POST** /spaces/{space-id}/properties | Create space property in space |
| [**deleteSpacePropertyById**](SpacePropertiesApi.md#deletespacepropertybyid) | **DELETE** /spaces/{space-id}/properties/{property-id} | Delete space property by id |
| [**getSpaceProperties**](SpacePropertiesApi.md#getspaceproperties) | **GET** /spaces/{space-id}/properties | Get space properties in space |
| [**getSpacePropertyById**](SpacePropertiesApi.md#getspacepropertybyid) | **GET** /spaces/{space-id}/properties/{property-id} | Get space property by id |
| [**updateSpacePropertyById**](SpacePropertiesApi.md#updatespacepropertybyid) | **PUT** /spaces/{space-id}/properties/{property-id} | Update space property by id |



## createSpaceProperty

> SpaceProperty createSpaceProperty(spaceId, spacePropertyCreateRequest)

Create space property in space

Creates a new space property.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpacePropertiesApi,
} from 'confluence-cloud-api-v2';
import type { CreateSpacePropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePropertiesApi(config);

  const body = {
    // number | The ID of the space for which space properties should be returned.
    spaceId: 789,
    // SpacePropertyCreateRequest | The space property to be created
    spacePropertyCreateRequest: ...,
  } satisfies CreateSpacePropertyRequest;

  try {
    const data = await api.createSpaceProperty(body);
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
| **spaceId** | `number` | The ID of the space for which space properties should be returned. | [Defaults to `undefined`] |
| **spacePropertyCreateRequest** | [SpacePropertyCreateRequest](SpacePropertyCreateRequest.md) | The space property to be created | |

### Return type

[**SpaceProperty**](SpaceProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the space property was created successfully. |  * location -  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSpacePropertyById

> deleteSpacePropertyById(spaceId, propertyId)

Delete space property by id

Deletes a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpacePropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteSpacePropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePropertiesApi(config);

  const body = {
    // number | The ID of the space the property belongs to.
    spaceId: 789,
    // number | The ID of the property to be deleted.
    propertyId: 789,
  } satisfies DeleteSpacePropertyByIdRequest;

  try {
    const data = await api.deleteSpacePropertyById(body);
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
| **spaceId** | `number` | The ID of the space the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be deleted. | [Defaults to `undefined`] |

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
| **204** | Returned if the space property was deleted successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpaceProperties

> MultiEntityResultSpaceProperty getSpaceProperties(spaceId, key, cursor, limit)

Get space properties in space

Returns all properties for the given space. Space properties are a key-value storage associated with a space. The limit parameter specifies the maximum number of results returned in a single response. Use the &#x60;link&#x60; response header to paginate through additional results.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and \&#39;View\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpacePropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetSpacePropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePropertiesApi(config);

  const body = {
    // number | The ID of the space for which space properties should be returned.
    spaceId: 789,
    // string | The key of the space property to retrieve. This should be used when a user knows the key of their property, but needs to retrieve the id for use in other methods. (optional)
    key: key_example,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetSpacePropertiesRequest;

  try {
    const data = await api.getSpaceProperties(body);
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
| **spaceId** | `number` | The ID of the space for which space properties should be returned. | [Defaults to `undefined`] |
| **key** | `string` | The key of the space property to retrieve. This should be used when a user knows the key of their property, but needs to retrieve the id for use in other methods. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultSpaceProperty**](MultiEntityResultSpaceProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested space properties are returned. &#x60;results&#x60; may be empty if no results were found. |  * Link -  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSpacePropertyById

> SpaceProperty getSpacePropertyById(spaceId, propertyId)

Get space property by id

Retrieve a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and \&#39;View\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpacePropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetSpacePropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePropertiesApi(config);

  const body = {
    // number | The ID of the space the property belongs to.
    spaceId: 789,
    // number | The ID of the property to be retrieved.
    propertyId: 789,
  } satisfies GetSpacePropertyByIdRequest;

  try {
    const data = await api.getSpacePropertyById(body);
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
| **spaceId** | `number` | The ID of the space the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be retrieved. | [Defaults to `undefined`] |

### Return type

[**SpaceProperty**](SpaceProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the space property was retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSpacePropertyById

> SpaceProperty updateSpacePropertyById(spaceId, propertyId, spacePropertyUpdateRequest)

Update space property by id

Update a space property by its id.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and \&#39;Admin\&#39; permission for the space.

### Example

```ts
import {
  Configuration,
  SpacePropertiesApi,
} from 'confluence-cloud-api-v2';
import type { UpdateSpacePropertyByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SpacePropertiesApi(config);

  const body = {
    // number | The ID of the space the property belongs to.
    spaceId: 789,
    // number | The ID of the property to be updated.
    propertyId: 789,
    // SpacePropertyUpdateRequest | The space property to be updated.
    spacePropertyUpdateRequest: ...,
  } satisfies UpdateSpacePropertyByIdRequest;

  try {
    const data = await api.updateSpacePropertyById(body);
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
| **spaceId** | `number` | The ID of the space the property belongs to. | [Defaults to `undefined`] |
| **propertyId** | `number` | The ID of the property to be updated. | [Defaults to `undefined`] |
| **spacePropertyUpdateRequest** | [SpacePropertyUpdateRequest](SpacePropertyUpdateRequest.md) | The space property to be updated. | |

### Return type

[**SpaceProperty**](SpaceProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the space property was updated successfully. |  * location -  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

