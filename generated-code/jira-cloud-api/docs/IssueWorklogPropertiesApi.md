# IssueWorklogPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteWorklogProperty**](IssueWorklogPropertiesApi.md#deleteworklogproperty) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Delete worklog property |
| [**getWorklogProperty**](IssueWorklogPropertiesApi.md#getworklogproperty) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Get worklog property |
| [**getWorklogPropertyKeys**](IssueWorklogPropertiesApi.md#getworklogpropertykeys) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties | Get worklog property keys |
| [**setWorklogProperty**](IssueWorklogPropertiesApi.md#setworklogproperty) | **PUT** /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Set worklog property |



## deleteWorklogProperty

> deleteWorklogProperty(issueIdOrKey, worklogId, propertyKey)

Delete worklog property

Deletes a worklog property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogPropertiesApi,
} from 'jira-cloud-api';
import type { DeleteWorklogPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogPropertiesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the worklog.
    worklogId: worklogId_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
  } satisfies DeleteWorklogPropertyRequest;

  try {
    const data = await api.deleteWorklogProperty(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **worklogId** | `string` | The ID of the worklog. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the property. | [Defaults to `undefined`] |

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
| **204** | Returned if the worklog property is removed. |  -  |
| **400** | Returned if the worklog key or id is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to edit the worklog. |  -  |
| **404** | Returned if:   *  the issue, worklog, or property is not found.  *  the user does not have permission to view the issue or worklog. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorklogProperty

> EntityProperty getWorklogProperty(issueIdOrKey, worklogId, propertyKey)

Get worklog property

Returns the value of a worklog property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogPropertiesApi,
} from 'jira-cloud-api';
import type { GetWorklogPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogPropertiesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the worklog.
    worklogId: worklogId_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
  } satisfies GetWorklogPropertyRequest;

  try {
    const data = await api.getWorklogProperty(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **worklogId** | `string` | The ID of the worklog. | [Defaults to `undefined`] |
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
| **400** | Returned if the worklog ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  the issue, worklog, or property is not found.  *  the user does not have permission to view the issue or worklog. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWorklogPropertyKeys

> PropertyKeys getWorklogPropertyKeys(issueIdOrKey, worklogId)

Get worklog property keys

Returns the keys of all properties for a worklog.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogPropertiesApi,
} from 'jira-cloud-api';
import type { GetWorklogPropertyKeysRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogPropertiesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the worklog.
    worklogId: worklogId_example,
  } satisfies GetWorklogPropertyKeysRequest;

  try {
    const data = await api.getWorklogPropertyKeys(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **worklogId** | `string` | The ID of the worklog. | [Defaults to `undefined`] |

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
| **400** | Returned if the worklog ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  the issue or worklog is not found.  *  the user does not have permission to view the issue or worklog. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setWorklogProperty

> any setWorklogProperty(issueIdOrKey, worklogId, propertyKey, body)

Set worklog property

Sets the value of a worklog property. Use this operation to store custom data against the worklog.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueWorklogPropertiesApi,
} from 'jira-cloud-api';
import type { SetWorklogPropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueWorklogPropertiesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the worklog.
    worklogId: worklogId_example,
    // string | The key of the issue property. The maximum length is 255 characters.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: ...,
  } satisfies SetWorklogPropertyRequest;

  try {
    const data = await api.setWorklogProperty(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **worklogId** | `string` | The ID of the worklog. | [Defaults to `undefined`] |
| **propertyKey** | `string` | The key of the issue property. The maximum length is 255 characters. | [Defaults to `undefined`] |
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
| **200** | Returned if the worklog property is updated. |  -  |
| **201** | Returned if the worklog property is created. |  -  |
| **400** | Returned if the worklog ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to edit the worklog. |  -  |
| **404** | Returned if:   *  the issue or worklog is not found.  *  the user does not have permission to view the issue or worklog. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

