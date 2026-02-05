# IssueTypePropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteIssueTypeProperty**](IssueTypePropertiesApi.md#deleteissuetypeproperty) | **DELETE** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Delete issue type property |
| [**getIssueTypeProperty**](IssueTypePropertiesApi.md#getissuetypeproperty) | **GET** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Get issue type property |
| [**getIssueTypePropertyKeys**](IssueTypePropertiesApi.md#getissuetypepropertykeys) | **GET** /rest/api/3/issuetype/{issueTypeId}/properties | Get issue type property keys |
| [**setIssueTypeProperty**](IssueTypePropertiesApi.md#setissuetypeproperty) | **PUT** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Set issue type property |



## deleteIssueTypeProperty

> deleteIssueTypeProperty(issueTypeId, propertyKey)

Delete issue type property

Deletes the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypePropertiesApi,
} from 'jira-cloud-api';
import type { DeleteIssueTypePropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypePropertiesApi(config);

  const body = {
    // string | The ID of the issue type.
    issueTypeId: issueTypeId_example,
    // string | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
    propertyKey: propertyKey_example,
  } satisfies DeleteIssueTypePropertyRequest;

  try {
    const data = await api.deleteIssueTypeProperty(body);
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
| **issueTypeId** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. | [Defaults to `undefined`] |

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
| **204** | Returned if the issue type property is deleted. |  -  |
| **400** | Returned if the issue type ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the issue type or property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueTypeProperty

> EntityProperty getIssueTypeProperty(issueTypeId, propertyKey)

Get issue type property

Returns the key and value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the details of any issue type.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the details of any issue types associated with the projects the user has permission to browse.

### Example

```ts
import {
  Configuration,
  IssueTypePropertiesApi,
} from 'jira-cloud-api';
import type { GetIssueTypePropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypePropertiesApi(config);

  const body = {
    // string | The ID of the issue type.
    issueTypeId: issueTypeId_example,
    // string | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
    propertyKey: propertyKey_example,
  } satisfies GetIssueTypePropertyRequest;

  try {
    const data = await api.getIssueTypeProperty(body);
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
| **issueTypeId** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. | [Defaults to `undefined`] |

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
| **400** | Returned if the issue type ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the issue type or property is not found or the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueTypePropertyKeys

> PropertyKeys getIssueTypePropertyKeys(issueTypeId)

Get issue type property keys

Returns all the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys of the issue type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the property keys of any issue type.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the property keys of any issue types associated with the projects the user has permission to browse.

### Example

```ts
import {
  Configuration,
  IssueTypePropertiesApi,
} from 'jira-cloud-api';
import type { GetIssueTypePropertyKeysRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypePropertiesApi(config);

  const body = {
    // string | The ID of the issue type.
    issueTypeId: issueTypeId_example,
  } satisfies GetIssueTypePropertyKeysRequest;

  try {
    const data = await api.getIssueTypePropertyKeys(body);
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
| **issueTypeId** | `string` | The ID of the issue type. | [Defaults to `undefined`] |

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
| **400** | Returned if the issue type ID is invalid. |  -  |
| **404** | Returned if:   *  the issue type is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setIssueTypeProperty

> any setIssueTypeProperty(issueTypeId, propertyKey, body)

Set issue type property

Creates or updates the value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). Use this resource to store and update data against an issue type.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueTypePropertiesApi,
} from 'jira-cloud-api';
import type { SetIssueTypePropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueTypePropertiesApi(config);

  const body = {
    // string | The ID of the issue type.
    issueTypeId: issueTypeId_example,
    // string | The key of the issue type property. The maximum length is 255 characters.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: {"number":5,"string":"string-value"},
  } satisfies SetIssueTypePropertyRequest;

  try {
    const data = await api.setIssueTypeProperty(body);
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
| **issueTypeId** | `string` | The ID of the issue type. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the issue type property. The maximum length is 255 characters. | [Defaults to `undefined`] |
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
| **200** | Returned if the issue type property is updated. |  -  |
| **201** | Returned if the issue type property is created. |  -  |
| **400** | Returned if:   *  the issue type ID is invalid.  *  a property value is not provided.  *  the property value JSON content is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to modify the issue type. |  -  |
| **404** | Returned if:   *  the issue type is not found.  *  the user does not have the permission view the issue type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

