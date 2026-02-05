# IssuePropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bulkDeleteIssueProperty**](IssuePropertiesApi.md#bulkdeleteissueproperty) | **DELETE** /rest/api/3/issue/properties/{propertyKey} | Bulk delete issue property |
| [**bulkSetIssuePropertiesByIssue**](IssuePropertiesApi.md#bulksetissuepropertiesbyissue) | **POST** /rest/api/3/issue/properties/multi | Bulk set issue properties by issue |
| [**bulkSetIssueProperty**](IssuePropertiesApi.md#bulksetissueproperty) | **PUT** /rest/api/3/issue/properties/{propertyKey} | Bulk set issue property |
| [**bulkSetIssuesPropertiesList**](IssuePropertiesApi.md#bulksetissuespropertieslist) | **POST** /rest/api/3/issue/properties | Bulk set issues properties by list |
| [**deleteIssueProperty**](IssuePropertiesApi.md#deleteissueproperty) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey} | Delete issue property |
| [**getIssueProperty**](IssuePropertiesApi.md#getissueproperty) | **GET** /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey} | Get issue property |
| [**getIssuePropertyKeys**](IssuePropertiesApi.md#getissuepropertykeys) | **GET** /rest/api/3/issue/{issueIdOrKey}/properties | Get issue property keys |
| [**setIssueProperty**](IssuePropertiesApi.md#setissueproperty) | **PUT** /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey} | Set issue property |



## bulkDeleteIssueProperty

> bulkDeleteIssueProperty(propertyKey, issueFilterForBulkPropertyDelete)

Bulk delete issue property

Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.  The criteria the filter used to identify eligible issues are:   *  &#x60;entityIds&#x60; Only issues from this list are eligible.  *  &#x60;currentValue&#x60; Only issues with the property set to this value are eligible.  If both criteria is specified, they are joined with the logical *AND*: only issues that satisfy both criteria are considered eligible.  If no filter criteria are specified, all the issues visible to the user and where the user has the EDIT\\_ISSUES permission for the issue are considered eligible.  This operation is:   *  transactional, either the property is deleted from all eligible issues or, when errors occur, no properties are deleted.  *  [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* [ project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.

### Example

```ts
import {
  Configuration,
  IssuePropertiesApi,
} from 'jira-cloud-api';
import type { BulkDeleteIssuePropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePropertiesApi(config);

  const body = {
    // string | The key of the property.
    propertyKey: propertyKey_example,
    // IssueFilterForBulkPropertyDelete
    issueFilterForBulkPropertyDelete: {"currentValue":"deprecated value","entityIds":[10100,100010]},
  } satisfies BulkDeleteIssuePropertyRequest;

  try {
    const data = await api.bulkDeleteIssueProperty(body);
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
| **issueFilterForBulkPropertyDelete** | [IssueFilterForBulkPropertyDelete](IssueFilterForBulkPropertyDelete.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkSetIssuePropertiesByIssue

> bulkSetIssuePropertiesByIssue(multiIssueEntityProperties)

Bulk set issue properties by issue

Sets or updates entity property values on issues. Up to 10 entity properties can be specified for each issue and up to 100 issues included in the request.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON.  This operation is:   *  [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  *  non-transactional. Updating some entities may fail. Such information will available in the task result.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuePropertiesApi,
} from 'jira-cloud-api';
import type { BulkSetIssuePropertiesByIssueRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePropertiesApi(config);

  const body = {
    // MultiIssueEntityProperties | Details of the issue properties to be set or updated. Note that if an issue is not found, it is ignored.
    multiIssueEntityProperties: {"issues":[{"issueID":1000,"properties":{"myProperty":{"owner":"admin","weight":100}}},{"issueID":1001,"properties":{"myOtherProperty":{"cost":150,"transportation":"car"}}}]},
  } satisfies BulkSetIssuePropertiesByIssueRequest;

  try {
    const data = await api.bulkSetIssuePropertiesByIssue(body);
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
| **multiIssueEntityProperties** | [MultiIssueEntityProperties](MultiIssueEntityProperties.md) | Details of the issue properties to be set or updated. Note that if an issue is not found, it is ignored. | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the operation is successful. |  -  |
| **400** | Return if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Return if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkSetIssueProperty

> bulkSetIssueProperty(propertyKey, bulkIssuePropertyUpdateRequest)

Bulk set issue property

Sets a property value on multiple issues.  The value set can be a constant or determined by a [Jira expression](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/). Expressions must be computable with constant complexity when applied to a set of issues. Expressions must also comply with the [restrictions](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions) that apply to all Jira expressions.  The issues to be updated can be specified by a filter.  The filter identifies issues eligible for update using these criteria:   *  &#x60;entityIds&#x60; Only issues from this list are eligible.  *  &#x60;currentValue&#x60; Only issues with the property set to this value are eligible.  *  &#x60;hasProperty&#x60;:           *  If *true*, only issues with the property are eligible.      *  If *false*, only issues without the property are eligible.  If more than one criteria is specified, they are joined with the logical *AND*: only issues that satisfy all criteria are eligible.  If an invalid combination of criteria is provided, an error is returned. For example, specifying a &#x60;currentValue&#x60; and &#x60;hasProperty&#x60; as *false* would not match any issues (because without the property the property cannot have a value).  The filter is optional. Without the filter all the issues visible to the user and where the user has the EDIT\\_ISSUES permission for the issue are considered eligible.  This operation is:   *  transactional, either all eligible issues are updated or, when errors occur, none are updated.  *  [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.

### Example

```ts
import {
  Configuration,
  IssuePropertiesApi,
} from 'jira-cloud-api';
import type { BulkSetIssuePropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePropertiesApi(config);

  const body = {
    // string | The key of the property. The maximum length is 255 characters.
    propertyKey: propertyKey_example,
    // BulkIssuePropertyUpdateRequest
    bulkIssuePropertyUpdateRequest: {"filter":{"currentValue":{"owner":"admin","weight":50},"entityIds":[10100,100010],"hasProperty":true},"value":{"owner":"admin","weight":100}},
  } satisfies BulkSetIssuePropertyRequest;

  try {
    const data = await api.bulkSetIssueProperty(body);
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
| **propertyKey** | `string` | The key of the property. The maximum length is 255 characters. | [Defaults to `undefined`] |
| **bulkIssuePropertyUpdateRequest** | [BulkIssuePropertyUpdateRequest](BulkIssuePropertyUpdateRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bulkSetIssuesPropertiesList

> bulkSetIssuesPropertiesList(issueEntityProperties)

Bulk set issues properties by list

Sets or updates a list of entity property values on issues. A list of up to 10 entity properties can be specified along with up to 10,000 issues on which to set or update that list of entity properties.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON. The maximum length of single issue property value is 32768 characters. This operation can be accessed anonymously.  This operation is:   *  transactional, either all properties are updated in all eligible issues or, when errors occur, no properties are updated.  *  [asynchronous](#async). Follow the &#x60;location&#x60; link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuePropertiesApi,
} from 'jira-cloud-api';
import type { BulkSetIssuesPropertiesListRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePropertiesApi(config);

  const body = {
    // IssueEntityProperties | Issue properties to be set or updated with values.
    issueEntityProperties: ...,
  } satisfies BulkSetIssuesPropertiesListRequest;

  try {
    const data = await api.bulkSetIssuesPropertiesList(body);
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
| **issueEntityProperties** | [IssueEntityProperties](IssueEntityProperties.md) | Issue properties to be set or updated with values. | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **303** | Returned if the operation is successful. |  -  |
| **400** | Return if the request is invalid or the user does not have the necessary permission. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIssueProperty

> deleteIssueProperty(issueIdOrKey, propertyKey)

Delete issue property

Deletes an issue\&#39;s property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuePropertiesApi,
} from 'jira-cloud-api';
import type { DeleteIssuePropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePropertiesApi(config);

  const body = {
    // string | The key or ID of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
  } satisfies DeleteIssuePropertyRequest;

  try {
    const data = await api.deleteIssueProperty(body);
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
| **issueIdOrKey** | `string` | The key or ID of the issue. | [Defaults to `undefined`] |
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
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the issue or property is not found, or the user does not have permission to edit the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueProperty

> EntityProperty getIssueProperty(issueIdOrKey, propertyKey)

Get issue property

Returns the key and value of an issue\&#39;s property.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuePropertiesApi,
} from 'jira-cloud-api';
import type { GetIssuePropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePropertiesApi(config);

  const body = {
    // string | The key or ID of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The key of the property.
    propertyKey: propertyKey_example,
  } satisfies GetIssuePropertyRequest;

  try {
    const data = await api.getIssueProperty(body);
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
| **issueIdOrKey** | `string` | The key or ID of the issue. | [Defaults to `undefined`] |
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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the issue or property is not found or the user does not have permission to see the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuePropertyKeys

> PropertyKeys getIssuePropertyKeys(issueIdOrKey)

Get issue property keys

Returns the URLs and keys of an issue\&#39;s properties.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Property details are only returned where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuePropertiesApi,
} from 'jira-cloud-api';
import type { GetIssuePropertyKeysRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePropertiesApi(config);

  const body = {
    // string | The key or ID of the issue.
    issueIdOrKey: issueIdOrKey_example,
  } satisfies GetIssuePropertyKeysRequest;

  try {
    const data = await api.getIssuePropertyKeys(body);
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
| **issueIdOrKey** | `string` | The key or ID of the issue. | [Defaults to `undefined`] |

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
| **404** | Returned if the issue is not found or the user does not have permissions to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setIssueProperty

> any setIssueProperty(issueIdOrKey, propertyKey, body)

Set issue property

Sets the value of an issue\&#39;s property. Use this resource to store custom data against an issue.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssuePropertiesApi,
} from 'jira-cloud-api';
import type { SetIssuePropertyRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssuePropertiesApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The key of the issue property. The maximum length is 255 characters.
    propertyKey: propertyKey_example,
    // any | The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
    body: ...,
  } satisfies SetIssuePropertyRequest;

  try {
    const data = await api.setIssueProperty(body);
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
| **200** | Returned if the issue property is updated. |  -  |
| **201** | Returned if the issue property is created. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to edit the issue. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

