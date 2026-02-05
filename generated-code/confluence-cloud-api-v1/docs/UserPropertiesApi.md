# UserPropertiesApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserProperty**](UserPropertiesApi.md#createuserproperty) | **POST** /wiki/rest/api/user/{userId}/property/{key} | Create user property by key |
| [**deleteUserProperty**](UserPropertiesApi.md#deleteuserproperty) | **DELETE** /wiki/rest/api/user/{userId}/property/{key} | Delete user property |
| [**getUserProperties**](UserPropertiesApi.md#getuserproperties) | **GET** /wiki/rest/api/user/{userId}/property | Get user properties |
| [**getUserProperty**](UserPropertiesApi.md#getuserproperty) | **GET** /wiki/rest/api/user/{userId}/property/{key} | Get user property |
| [**updateUserProperty**](UserPropertiesApi.md#updateuserproperty) | **PUT** /wiki/rest/api/user/{userId}/property/{key} | Update user property |



## createUserProperty

> createUserProperty(userId, key, body)

Create user property by key

Creates a property for a user. For more information  about user properties, see [Confluence entity properties] (https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). &#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.  &#x60;Note:&#x60; the number of properties which could be created per app in a tenant for each user might be restricted by fixed system limits. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'confluence-cloud-api-v1';
import type { CreateUserPropertyRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192
    userId: userId_example,
    // string | The key of the user property.
    key: key_example,
    // UserPropertyCreate | The user property to be created.
    body: ...,
  } satisfies CreateUserPropertyRequest;

  try {
    const data = await api.createUserProperty(body);
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
| **userId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192 | [Defaults to `undefined`] |
| **key** | `string` | The key of the user property. | [Defaults to `undefined`] |
| **body** | [UserPropertyCreate](UserPropertyCreate.md) | The user property to be created. | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the user property is created. |  -  |
| **400** | Returned if;  - The key is too long. - The value is empty. - The value is too long. - Request has malformed syntax or userId is not a valid user id. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have the correct permissions. |  -  |
| **404** | Returned if there is no user with the given user id. |  -  |
| **409** | Returned if the key already exists for the user. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUserProperty

> deleteUserProperty(userId, key)

Delete user property

Deletes a property for the given user. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). &#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'confluence-cloud-api-v1';
import type { DeleteUserPropertyRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192
    userId: userId_example,
    // string | The key of the user property.
    key: key_example,
  } satisfies DeleteUserPropertyRequest;

  try {
    const data = await api.deleteUserProperty(body);
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
| **userId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192 | [Defaults to `undefined`] |
| **key** | `string` | The key of the user property. | [Defaults to `undefined`] |

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
| **204** | Returned if the user property is deleted. |  -  |
| **400** | Returned if;  - The key is too long. - Request has malformed syntax or userId is not a valid user id. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have the correct permissions. |  -  |
| **404** | Returned if;  - There is no user property with the given key - There is no user with the given user id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserProperties

> UserPropertyKeyArray getUserProperties(userId, start, limit)

Get user properties

Returns the properties for a user as list of property keys. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). &#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'confluence-cloud-api-v1';
import type { GetUserPropertiesRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The account ID of the user to be queried for its properties.
    userId: userId_example,
    // number | The starting index of the returned properties. (optional)
    start: 56,
    // number | The maximum number of properties to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetUserPropertiesRequest;

  try {
    const data = await api.getUserProperties(body);
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
| **userId** | `string` | The account ID of the user to be queried for its properties. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned properties. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of properties to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `5`] |

### Return type

[**UserPropertyKeyArray**](UserPropertyKeyArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested properties are returned. |  -  |
| **400** | Returned if request has malformed syntax or userId is not a valid user id. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have the correct permissions. |  -  |
| **404** | Returned if there is no user with the given user ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserProperty

> UserProperty getUserProperty(userId, key)

Get user property

Returns the property corresponding to &#x60;key&#x60; for a user. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). &#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'confluence-cloud-api-v1';
import type { GetUserPropertyRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The account ID of the user to be queried for its properties.
    userId: userId_example,
    // string | The key of the user property.
    key: key_example,
  } satisfies GetUserPropertyRequest;

  try {
    const data = await api.getUserProperty(body);
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
| **userId** | `string` | The account ID of the user to be queried for its properties. | [Defaults to `undefined`] |
| **key** | `string` | The key of the user property. | [Defaults to `undefined`] |

### Return type

[**UserProperty**](UserProperty.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested properties are returned. |  -  |
| **400** | Returned if;  - The key is too long. - Request has malformed syntax or userId is not a valid user id. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have the correct permissions. |  -  |
| **404** | Returned if;  - There is no user with the given user ID - There is no user property with the given key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUserProperty

> updateUserProperty(userId, key, body)

Update user property

Updates a property for the given user. Note, you cannot update the key of a user property, only the value. For more information about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/). &#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'confluence-cloud-api-v1';
import type { UpdateUserPropertyRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192
    userId: userId_example,
    // string | The key of the user property.
    key: key_example,
    // UserPropertyUpdate | The user property to be updated.
    body: ...,
  } satisfies UpdateUserPropertyRequest;

  try {
    const data = await api.updateUserProperty(body);
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
| **userId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192 | [Defaults to `undefined`] |
| **key** | `string` | The key of the user property. | [Defaults to `undefined`] |
| **body** | [UserPropertyUpdate](UserPropertyUpdate.md) | The user property to be updated. | |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the user property is updated. |  -  |
| **400** | Returned if;  - The key is too long. - The value is empty. - The value is too long. - Request has malformed syntax or userId is not a valid user id. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have the correct permissions. |  -  |
| **404** | Returned if;  - There is no user property with the given key. - There is no user with the given user id. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

