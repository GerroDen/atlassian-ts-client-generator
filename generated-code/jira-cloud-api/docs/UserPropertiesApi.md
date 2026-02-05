# UserPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteUserProperty**](UserPropertiesApi.md#deleteuserproperty) | **DELETE** /rest/api/3/user/properties/{propertyKey} | Delete user property |
| [**getUserProperty**](UserPropertiesApi.md#getuserproperty) | **GET** /rest/api/3/user/properties/{propertyKey} | Get user property |
| [**getUserPropertyKeys**](UserPropertiesApi.md#getuserpropertykeys) | **GET** /rest/api/3/user/properties | Get user property keys |
| [**setUserProperty**](UserPropertiesApi.md#setuserproperty) | **PUT** /rest/api/3/user/properties/{propertyKey} | Set user property |



## deleteUserProperty

> deleteUserProperty(propertyKey, accountId, userKey, username)

Delete user property

Deletes a property from a user.  Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to delete a property from any user.  *  Access to Jira, to delete a property from the calling user\&#39;s record.

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'jira-cloud-api';
import type { DeleteUserPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The key of the user\'s property.
    propertyKey: propertyKey_example,
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    userKey: userKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
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
| **propertyKey** | `string` | The key of the user\&#39;s property. | [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |
| **userKey** | `string` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the user property is deleted. |  -  |
| **400** | Returned if &#x60;accountId&#x60; is missing. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
| **404** | Returned if the user or the property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserProperty

> EntityProperty getUserProperty(propertyKey, accountId, userKey, username)

Get user property

Returns the value of a user\&#39;s property. If no property key is provided [Get user property keys](#api-rest-api-3-user-properties-get) is called.  Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get a property from any user.  *  Access to Jira, to get a property from the calling user\&#39;s record.

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'jira-cloud-api';
import type { GetUserPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The key of the user\'s property.
    propertyKey: propertyKey_example,
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    userKey: userKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
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
| **propertyKey** | `string` | The key of the user\&#39;s property. | [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |
| **userKey** | `string` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

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
| **400** | Returned if &#x60;accountId&#x60; is missing. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
| **404** | Returned if the user is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserPropertyKeys

> PropertyKeys getUserPropertyKeys(accountId, userKey, username)

Get user property keys

Returns the keys of all properties for a user.  Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to access the property keys on any user.  *  Access to Jira, to access the calling user\&#39;s property keys.

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'jira-cloud-api';
import type { GetUserPropertyKeysRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    userKey: userKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
  } satisfies GetUserPropertyKeysRequest;

  try {
    const data = await api.getUserPropertyKeys(body);
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
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |
| **userKey** | `string` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

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
| **400** | Returned if &#x60;accountId&#x60; is missing. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
| **404** | Returned if the user is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setUserProperty

> any setUserProperty(propertyKey, body, accountId, userKey, username)

Set user property

Sets the value of a user\&#39;s property. Use this resource to store custom data against a user.  Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set a property on any user.  *  Access to Jira, to set a property on the calling user\&#39;s record.

### Example

```ts
import {
  Configuration,
  UserPropertiesApi,
} from 'jira-cloud-api';
import type { SetUserPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserPropertiesApi(config);

  const body = {
    // string | The key of the user\'s property. The maximum length is 255 characters.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: ...,
    // string | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    accountId: 5b10ac8d82e05b22cc7d4ef5,
    // string | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    userKey: userKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
  } satisfies SetUserPropertyRequest;

  try {
    const data = await api.setUserProperty(body);
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
| **propertyKey** | `string` | The key of the user\&#39;s property. The maximum length is 255 characters. | [Defaults to `undefined`] |
| **body** | `any` | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes. | |
| **accountId** | `string` | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [Optional] [Defaults to `undefined`] |
| **userKey** | `string` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the user property is updated. |  -  |
| **201** | Returned if the user property is created. |  -  |
| **400** | Returned if &#x60;accountId&#x60; is missing. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
| **404** | Returned if the user is not found. |  -  |
| **405** | Returned if the property key is not specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

