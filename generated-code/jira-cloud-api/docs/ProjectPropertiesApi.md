# ProjectPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteProjectProperty**](ProjectPropertiesApi.md#deleteprojectproperty) | **DELETE** /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey} | Delete project property |
| [**getProjectProperty**](ProjectPropertiesApi.md#getprojectproperty) | **GET** /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey} | Get project property |
| [**getProjectPropertyKeys**](ProjectPropertiesApi.md#getprojectpropertykeys) | **GET** /rest/api/3/project/{projectIdOrKey}/properties | Get project property keys |
| [**setProjectProperty**](ProjectPropertiesApi.md#setprojectproperty) | **PUT** /rest/api/3/project/{projectIdOrKey}/properties/{propertyKey} | Set project property |



## deleteProjectProperty

> deleteProjectProperty(projectIdOrKey, propertyKey)

Delete project property

Deletes the [property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) from a project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.

### Example

```ts
import {
  Configuration,
  ProjectPropertiesApi,
} from 'jira-cloud-api';
import type { DeleteProjectPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectPropertiesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // string | The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
    propertyKey: propertyKey_example,
  } satisfies DeleteProjectPropertyRequest;

  try {
    const data = await api.deleteProjectProperty(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **propertyKey** | `string` | The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys. | [Defaults to `undefined`] |

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
| **204** | Returned if the project property is deleted. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have permission to administer the project. |  -  |
| **404** | Returned if the project or property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectProperty

> EntityProperty getProjectProperty(projectIdOrKey, propertyKey)

Get project property

Returns the value of a [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.

### Example

```ts
import {
  Configuration,
  ProjectPropertiesApi,
} from 'jira-cloud-api';
import type { GetProjectPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectPropertiesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // string | The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
    propertyKey: propertyKey_example,
  } satisfies GetProjectPropertyRequest;

  try {
    const data = await api.getProjectProperty(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **propertyKey** | `string` | The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have permission to view the project. |  -  |
| **404** | Returned if the project or property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectPropertyKeys

> PropertyKeys getProjectPropertyKeys(projectIdOrKey)

Get project property keys

Returns all [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys for the project.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

```ts
import {
  Configuration,
  ProjectPropertiesApi,
} from 'jira-cloud-api';
import type { GetProjectPropertyKeysRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectPropertiesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
  } satisfies GetProjectPropertyKeysRequest;

  try {
    const data = await api.getProjectPropertyKeys(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |

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
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have permission to view the project. |  -  |
| **404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setProjectProperty

> any setProjectProperty(projectIdOrKey, propertyKey, body)

Set project property

Sets the value of the [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). You can use project properties to store custom data against the project.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the property is created.

### Example

```ts
import {
  Configuration,
  ProjectPropertiesApi,
} from 'jira-cloud-api';
import type { SetProjectPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ProjectPropertiesApi(config);

  const body = {
    // string | The project ID or project key (case sensitive).
    projectIdOrKey: projectIdOrKey_example,
    // string | The key of the project property. The maximum length is 255 characters.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: {"number":5,"string":"string-value"},
  } satisfies SetProjectPropertyRequest;

  try {
    const data = await api.setProjectProperty(body);
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
| **projectIdOrKey** | `string` | The project ID or project key (case sensitive). | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the project property. The maximum length is 255 characters. | [Defaults to `undefined`] |
| **body** | `any` | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes. | |

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
| **200** | Returned if the project property is updated. |  -  |
| **201** | Returned if the project property is created. |  -  |
| **400** | Returned if the project key or id is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the user does not have permission to administer the project. |  -  |
| **404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

