# AppPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addonPropertiesResourceDeleteAddonPropertyDelete**](AppPropertiesApi.md#addonpropertiesresourcedeleteaddonpropertydelete) | **DELETE** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Delete app property |
| [**addonPropertiesResourceGetAddonPropertiesGet**](AppPropertiesApi.md#addonpropertiesresourcegetaddonpropertiesget) | **GET** /rest/atlassian-connect/1/addons/{addonKey}/properties | Get app properties |
| [**addonPropertiesResourceGetAddonPropertyGet**](AppPropertiesApi.md#addonpropertiesresourcegetaddonpropertyget) | **GET** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Get app property |
| [**addonPropertiesResourcePutAddonPropertyPut**](AppPropertiesApi.md#addonpropertiesresourceputaddonpropertyput) | **PUT** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Set app property |
| [**deleteForgeAppProperty**](AppPropertiesApi.md#deleteforgeappproperty) | **DELETE** /rest/forge/1/app/properties/{propertyKey} | Delete app property (Forge) |
| [**getForgeAppProperty**](AppPropertiesApi.md#getforgeappproperty) | **GET** /rest/forge/1/app/properties/{propertyKey} | Get app property (Forge) |
| [**getForgeAppPropertyKeys**](AppPropertiesApi.md#getforgeapppropertykeys) | **GET** /rest/forge/1/app/properties | Get app property keys (Forge) |
| [**putForgeAppProperty**](AppPropertiesApi.md#putforgeappproperty) | **PUT** /rest/forge/1/app/properties/{propertyKey} | Set app property (Forge) |



## addonPropertiesResourceDeleteAddonPropertyDelete

> addonPropertiesResourceDeleteAddonPropertyDelete(addonKey, propertyKey)

Delete app property

Deletes an app\&#39;s property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches &#x60;addonKey&#x60; can make this request. Additionally, Forge apps can access Connect app properties (stored against the same &#x60;app.connect.key&#x60;).

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'jira-cloud-api';
import type { AddonPropertiesResourceDeleteAddonPropertyDeleteRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the app, as defined in its descriptor.
    addonKey: addonKey_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
  } satisfies AddonPropertiesResourceDeleteAddonPropertyDeleteRequest;

  try {
    const data = await api.addonPropertiesResourceDeleteAddonPropertyDelete(body);
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
| **addonKey** | `string` | The key of the app, as defined in its descriptor. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the property key is longer than 127 characters. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the property is not found or doesn\&#39;t belong to the app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addonPropertiesResourceGetAddonPropertiesGet

> PropertyKeys addonPropertiesResourceGetAddonPropertiesGet(addonKey)

Get app properties

Gets all the properties of an app.  **[Permissions](#permissions) required:** Only a Connect app whose key matches &#x60;addonKey&#x60; can make this request. Additionally, Forge apps can access Connect app properties (stored against the same &#x60;app.connect.key&#x60;).

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'jira-cloud-api';
import type { AddonPropertiesResourceGetAddonPropertiesGetRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the app, as defined in its descriptor.
    addonKey: addonKey_example,
  } satisfies AddonPropertiesResourceGetAddonPropertiesGetRequest;

  try {
    const data = await api.addonPropertiesResourceGetAddonPropertiesGet(body);
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
| **addonKey** | `string` | The key of the app, as defined in its descriptor. | [Defaults to `undefined`] |

### Return type

[**PropertyKeys**](PropertyKeys.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addonPropertiesResourceGetAddonPropertyGet

> EntityProperty addonPropertiesResourceGetAddonPropertyGet(addonKey, propertyKey)

Get app property

Returns the key and value of an app\&#39;s property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches &#x60;addonKey&#x60; can make this request. Additionally, Forge apps can access Connect app properties (stored against the same &#x60;app.connect.key&#x60;).

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'jira-cloud-api';
import type { AddonPropertiesResourceGetAddonPropertyGetRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the app, as defined in its descriptor.
    addonKey: addonKey_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
  } satisfies AddonPropertiesResourceGetAddonPropertyGetRequest;

  try {
    const data = await api.addonPropertiesResourceGetAddonPropertyGet(body);
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
| **addonKey** | `string` | The key of the app, as defined in its descriptor. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the property key is longer than 127 characters. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the property is not found or doesn\&#39;t belong to the app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addonPropertiesResourcePutAddonPropertyPut

> OperationMessage addonPropertiesResourcePutAddonPropertyPut(addonKey, propertyKey, body)

Set app property

Sets the value of an app\&#39;s property. Use this resource to store custom data for your app.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** Only a Connect app whose key matches &#x60;addonKey&#x60; can make this request. Additionally, Forge apps can access Connect app properties (stored against the same &#x60;app.connect.key&#x60;).

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'jira-cloud-api';
import type { AddonPropertiesResourcePutAddonPropertyPutRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the app, as defined in its descriptor.
    addonKey: addonKey_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
    // any
    body: ...,
  } satisfies AddonPropertiesResourcePutAddonPropertyPutRequest;

  try {
    const data = await api.addonPropertiesResourcePutAddonPropertyPut(body);
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
| **addonKey** | `string` | The key of the app, as defined in its descriptor. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |
| **body** | `any` |  | |

### Return type

[**OperationMessage**](OperationMessage.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the property is updated. |  -  |
| **201** | Returned is the property is created. |  -  |
| **400** | Returned if:   * the property key is longer than 127 characters.   * the value is not valid JSON.   * the value is longer than 32768 characters. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteForgeAppProperty

> deleteForgeAppProperty(propertyKey)

Delete app property (Forge)

Deletes a Forge app\&#39;s property.  **[Permissions](#permissions) required:** Only Forge apps can make this request. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestjira/#method-signature)** requests from Forge.  The new &#x60;write:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'jira-cloud-api';
import type { DeleteForgeAppPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the property.
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
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the property key is longer than 127 characters. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the request isn\&#39;t made directly by an app or if it\&#39;s an impersonated request. |  -  |
| **404** | Returned if the property isn\&#39;t found or doesn\&#39;t belong to the app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForgeAppProperty

> GetForgeAppProperty200Response getForgeAppProperty(propertyKey)

Get app property (Forge)

Returns the value of a Forge app\&#39;s property.  **[Permissions](#permissions) required:** Only Forge apps can make this request. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestjira/#method-signature)** requests from Forge.

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'jira-cloud-api';
import type { GetForgeAppPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the property.
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
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |

### Return type

[**GetForgeAppProperty200Response**](GetForgeAppProperty200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the property key is longer than 127 characters. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the request isn\&#39;t made directly by an app or if it\&#39;s an impersonated request. |  -  |
| **404** | Returned if the property isn\&#39;t found or doesn\&#39;t belong to the app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getForgeAppPropertyKeys

> GetForgeAppPropertyKeys200Response getForgeAppPropertyKeys()

Get app property keys (Forge)

Returns all property keys for the Forge app.  **[Permissions](#permissions) required:** Only Forge apps can make this request. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestjira/#method-signature)** requests from Forge.

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'jira-cloud-api';
import type { GetForgeAppPropertyKeysRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppPropertiesApi(config);

  try {
    const data = await api.getForgeAppPropertyKeys();
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

[**GetForgeAppPropertyKeys200Response**](GetForgeAppPropertyKeys200Response.md)

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
| **403** | Returned if the request isn\&#39;t made directly by an app or if it\&#39;s an impersonated request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putForgeAppProperty

> OperationMessage putForgeAppProperty(propertyKey, body)

Set app property (Forge)

Sets the value of a Forge app\&#39;s property. These values can be retrieved in [Jira expressions](/cloud/jira/platform/jira-expressions/) through the &#x60;app&#x60; [context variable](/cloud/jira/platform/jira-expressions/#context-variables). They are also available in [entity property display conditions](/platform/forge/manifest-reference/display-conditions/entity-property-conditions/).  For other use cases, use the [Storage API](/platform/forge/runtime-reference/storage-api/).  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** Only Forge apps can make this request. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestjira/#method-signature)** requests from Forge.  The new &#x60;write:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  AppPropertiesApi,
} from 'jira-cloud-api';
import type { PutForgeAppPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AppPropertiesApi(config);

  const body = {
    // string | The key of the property.
    propertyKey: propertyKey_example,
    // any
    body: ...,
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
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |
| **body** | `any` |  | |

### Return type

[**OperationMessage**](OperationMessage.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the property is updated. |  -  |
| **201** | Returned is the property is created. |  -  |
| **400** | Returned if:   * the property key is longer than 127 characters.   * the value isn\&#39;t valid JSON.   * the value is longer than 32768 characters. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the request isn\&#39;t made directly by an app or if it\&#39;s an impersonated request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

