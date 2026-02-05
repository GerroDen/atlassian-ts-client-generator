# AppPropertiesApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteForgeAppProperty**](AppPropertiesApi.md#deleteforgeappproperty) | **DELETE** /app/properties/{propertyKey} | Deletes a Forge app property. |
| [**getForgeAppProperties**](AppPropertiesApi.md#getforgeappproperties) | **GET** /app/properties | Get Forge app properties. |
| [**getForgeAppProperty**](AppPropertiesApi.md#getforgeappproperty) | **GET** /app/properties/{propertyKey} | Get a Forge app property by key. |
| [**putForgeAppProperty**](AppPropertiesApi.md#putforgeappproperty) | **PUT** /app/properties/{propertyKey} | Create or update a Forge app property. |



## deleteForgeAppProperty

> deleteForgeAppProperty(propertyKey)

Deletes a Forge app property.

Deletes a Forge app property. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { DeleteForgeAppPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the property
    propertyKey: propertyKey_example,
  } satisfies DeleteForgeAppPropertyRequest;

  try {
    const data = await api.deleteForgeAppProperty(body);
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
| **propertyKey** | `string` | The key of the property | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Property deleted. |  -  |
| **400** | Property key longer than 127 characters |  -  |
| **401** | The request did not originate from the Forge app. |  -  |
| **403** | Returned when the request is forbidden due to one of the following: - The request attempts impersonation. Only requests made using &#x60;asApp()&#x60; are allowed. - The Forge app is not installed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForgeAppProperties

> MultiEntityResultAppProperty getForgeAppProperties(cursor, limit)

Get Forge app properties.

Gets Forge app properties. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetForgeAppPropertiesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | Used for pagination, this opaque cursor represents the last returned property key. It will be included in the response body as the next link. Use this key to request the next set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of app properties per result to return. If more results exist, use the last returned property key from the Link field in the response body as a cursor to retrieve the next set of results. (optional)
    limit: 56,
  } satisfies GetForgeAppPropertiesRequest;

  try {
    const data = await api.getForgeAppProperties(body);
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
| **cursor** | `string` | Used for pagination, this opaque cursor represents the last returned property key. It will be included in the response body as the next link. Use this key to request the next set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of app properties per result to return. If more results exist, use the last returned property key from the Link field in the response body as a cursor to retrieve the next set of results. | [Optional] [Defaults to `50`] |

### Return type

[**MultiEntityResultAppProperty**](MultiEntityResultAppProperty.md)

### Authorization

[oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Forge app properties returned on success. |  -  |
| **401** | The request did not originate from the Forge app. |  -  |
| **403** | Returned when the request is forbidden due to one of the following: - The request attempts impersonation. Only requests made using &#x60;asApp()&#x60; are allowed. - The Forge app is not installed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForgeAppProperty

> GetForgeAppProperty200Response getForgeAppProperty(propertyKey)

Get a Forge app property by key.

Gets a Forge app property by property key. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { GetForgeAppPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the property
    propertyKey: propertyKey_example,
  } satisfies GetForgeAppPropertyRequest;

  try {
    const data = await api.getForgeAppProperty(body);
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
| **propertyKey** | `string` | The key of the property | [Defaults to `undefined`] |

### Return type

[**GetForgeAppProperty200Response**](GetForgeAppProperty200Response.md)

### Authorization

[oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | App property returned on success. |  -  |
| **400** | Property key longer than 127 characters. |  -  |
| **401** | The request did not originate from the Forge app. |  -  |
| **403** | Returned when the request is forbidden due to one of the following: - The request attempts impersonation. Only requests made using &#x60;asApp()&#x60; are allowed. - The Forge app is not installed. |  -  |
| **404** | App property not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putForgeAppProperty

> putForgeAppProperty(propertyKey, body)

Create or update a Forge app property.

Creates or updates a Forge app property. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'confluence-cloud-api-v2';
import type { PutForgeAppPropertyRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the property
    propertyKey: propertyKey_example,
    // object
    body: Object,
  } satisfies PutForgeAppPropertyRequest;

  try {
    const data = await api.putForgeAppProperty(body);
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
| **propertyKey** | `string` | The key of the property | [Defaults to `undefined`] |
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

[oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Property updated. |  -  |
| **201** | Property created. |  -  |
| **400** | Property key longer than 127 characters, or request made with invalid JSON. |  -  |
| **401** | The request did not originate from the Forge app. |  -  |
| **403** | Returned when the request is forbidden due to one of the following: - The request attempts impersonation. Only requests made using &#x60;asApp()&#x60; are allowed. - The Forge app is not installed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

