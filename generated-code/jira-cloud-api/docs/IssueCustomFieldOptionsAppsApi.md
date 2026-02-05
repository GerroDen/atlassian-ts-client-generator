# IssueCustomFieldOptionsAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createIssueFieldOption**](IssueCustomFieldOptionsAppsApi.md#createissuefieldoption) | **POST** /rest/api/3/field/{fieldKey}/option | Create issue field option |
| [**deleteIssueFieldOption**](IssueCustomFieldOptionsAppsApi.md#deleteissuefieldoption) | **DELETE** /rest/api/3/field/{fieldKey}/option/{optionId} | Delete issue field option |
| [**getAllIssueFieldOptions**](IssueCustomFieldOptionsAppsApi.md#getallissuefieldoptions) | **GET** /rest/api/3/field/{fieldKey}/option | Get all issue field options |
| [**getIssueFieldOption**](IssueCustomFieldOptionsAppsApi.md#getissuefieldoption) | **GET** /rest/api/3/field/{fieldKey}/option/{optionId} | Get issue field option |
| [**getSelectableIssueFieldOptions**](IssueCustomFieldOptionsAppsApi.md#getselectableissuefieldoptions) | **GET** /rest/api/3/field/{fieldKey}/option/suggestions/edit | Get selectable issue field options |
| [**getVisibleIssueFieldOptions**](IssueCustomFieldOptionsAppsApi.md#getvisibleissuefieldoptions) | **GET** /rest/api/3/field/{fieldKey}/option/suggestions/search | Get visible issue field options |
| [**replaceIssueFieldOption**](IssueCustomFieldOptionsAppsApi.md#replaceissuefieldoption) | **DELETE** /rest/api/3/field/{fieldKey}/option/{optionId}/issue | Replace issue field option |
| [**updateIssueFieldOption**](IssueCustomFieldOptionsAppsApi.md#updateissuefieldoption) | **PUT** /rest/api/3/field/{fieldKey}/option/{optionId} | Update issue field option |



## createIssueFieldOption

> IssueFieldOption createIssueFieldOption(fieldKey, issueFieldOptionCreateBean)

Create issue field option

Creates an option for a select list issue field.  Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.  Each field can have a maximum of 10000 options, and each option can have a maximum of 10000 scopes.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsAppsApi,
} from 'jira-cloud-api';
import type { CreateIssueFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsAppsApi(config);

  const body = {
    // string | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app\'s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    fieldKey: fieldKey_example,
    // IssueFieldOptionCreateBean
    issueFieldOptionCreateBean: {"config":{"attributes":[],"scope":{"global":{},"projects":[],"projects2":[{"attributes":["notSelectable"],"id":1001},{"attributes":["notSelectable"],"id":1002}]}},"properties":{"description":"The team's description","founded":"2016-06-06","leader":{"email":"lname@example.com","name":"Leader Name"},"members":42},"value":"Team 1"},
  } satisfies CreateIssueFieldOptionRequest;

  try {
    const data = await api.createIssueFieldOption(body);
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
| **fieldKey** | `string` | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app\&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | [Defaults to `undefined`] |
| **issueFieldOptionCreateBean** | [IssueFieldOptionCreateBean](IssueFieldOptionCreateBean.md) |  | |

### Return type

[**IssueFieldOption**](IssueFieldOption.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the option is invalid. |  -  |
| **403** | Returned if the request is not authenticated as a Jira administrator or the app that provided the field. |  -  |
| **404** | Returned if the field is not found or does not support options. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteIssueFieldOption

> any deleteIssueFieldOption(fieldKey, optionId)

Delete issue field option

Deletes an option from a select list issue field.  Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsAppsApi,
} from 'jira-cloud-api';
import type { DeleteIssueFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsAppsApi(config);

  const body = {
    // string | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app\'s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    fieldKey: fieldKey_example,
    // number | The ID of the option to be deleted.
    optionId: 789,
  } satisfies DeleteIssueFieldOptionRequest;

  try {
    const data = await api.deleteIssueFieldOption(body);
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
| **fieldKey** | `string` | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app\&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | [Defaults to `undefined`] |
| **optionId** | `number` | The ID of the option to be deleted. | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the field option is deleted. |  -  |
| **403** | Returned if the request is not authenticated as a Jira administrator or the app that provided the field. |  -  |
| **404** | Returned if the field or option is not found. |  -  |
| **409** | Returned if the option is selected for the field in any issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllIssueFieldOptions

> PageBeanIssueFieldOption getAllIssueFieldOptions(fieldKey, startAt, maxResults)

Get all issue field options

Returns a [paginated](#pagination) list of all the options of a select list issue field. A select list issue field is a type of [issue field](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field/) that enables a user to select a value from a list of options.  Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsAppsApi,
} from 'jira-cloud-api';
import type { GetAllIssueFieldOptionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsAppsApi(config);

  const body = {
    // string | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app\'s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    fieldKey: fieldKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetAllIssueFieldOptionsRequest;

  try {
    const data = await api.getAllIssueFieldOptions(body);
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
| **fieldKey** | `string` | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app\&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**PageBeanIssueFieldOption**](PageBeanIssueFieldOption.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the field is not found or does not support options. |  -  |
| **403** | Returned if the request is not authenticated as a Jira administrator or the app that provided the field. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueFieldOption

> IssueFieldOption getIssueFieldOption(fieldKey, optionId)

Get issue field option

Returns an option from a select list issue field.  Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsAppsApi,
} from 'jira-cloud-api';
import type { GetIssueFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsAppsApi(config);

  const body = {
    // string | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app\'s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    fieldKey: fieldKey_example,
    // number | The ID of the option to be returned.
    optionId: 789,
  } satisfies GetIssueFieldOptionRequest;

  try {
    const data = await api.getIssueFieldOption(body);
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
| **fieldKey** | `string` | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app\&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | [Defaults to `undefined`] |
| **optionId** | `number` | The ID of the option to be returned. | [Defaults to `undefined`] |

### Return type

[**IssueFieldOption**](IssueFieldOption.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested option is returned. |  -  |
| **400** | Returned if the field is not found or does not support options. |  -  |
| **403** | Returned if the request is not authenticated as a Jira administrator or the app that provided the field. |  -  |
| **404** | Returned if the option is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSelectableIssueFieldOptions

> PageBeanIssueFieldOption getSelectableIssueFieldOptions(fieldKey, startAt, maxResults, projectId)

Get selectable issue field options

Returns a [paginated](#pagination) list of options for a select list issue field that can be viewed and selected by the user.  Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsAppsApi,
} from 'jira-cloud-api';
import type { GetSelectableIssueFieldOptionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsAppsApi(config);

  const body = {
    // string | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app\'s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    fieldKey: fieldKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // number | Filters the results to options that are only available in the specified project. (optional)
    projectId: 789,
  } satisfies GetSelectableIssueFieldOptionsRequest;

  try {
    const data = await api.getSelectableIssueFieldOptions(body);
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
| **fieldKey** | `string` | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app\&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **projectId** | `number` | Filters the results to options that are only available in the specified project. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanIssueFieldOption**](PageBeanIssueFieldOption.md)

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
| **404** | Returned if the field is not found or does not support options. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVisibleIssueFieldOptions

> PageBeanIssueFieldOption getVisibleIssueFieldOptions(fieldKey, startAt, maxResults, projectId)

Get visible issue field options

Returns a [paginated](#pagination) list of options for a select list issue field that can be viewed by the user.  Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsAppsApi,
} from 'jira-cloud-api';
import type { GetVisibleIssueFieldOptionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsAppsApi(config);

  const body = {
    // string | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app\'s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    fieldKey: fieldKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // number | Filters the results to options that are only available in the specified project. (optional)
    projectId: 789,
  } satisfies GetVisibleIssueFieldOptionsRequest;

  try {
    const data = await api.getVisibleIssueFieldOptions(body);
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
| **fieldKey** | `string` | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app\&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **projectId** | `number` | Filters the results to options that are only available in the specified project. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanIssueFieldOption**](PageBeanIssueFieldOption.md)

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
| **404** | Returned if the field is not found or does not support options. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## replaceIssueFieldOption

> replaceIssueFieldOption(fieldKey, optionId, replaceWith, jql, overrideScreenSecurity, overrideEditableFlag)

Replace issue field option

Deselects an issue-field select-list option from all issues where it is selected. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.  Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can override the screen security configuration using &#x60;overrideScreenSecurity&#x60; and &#x60;overrideEditableFlag&#x60;.  This is an [asynchronous operation](#async). The response object contains a link to the long-running task.  Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsAppsApi,
} from 'jira-cloud-api';
import type { ReplaceIssueFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsAppsApi(config);

  const body = {
    // string | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app\'s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    fieldKey: fieldKey_example,
    // number | The ID of the option to be deselected.
    optionId: 789,
    // number | The ID of the option that will replace the currently selected option. (optional)
    replaceWith: 789,
    // string | A JQL query that specifies the issues to be updated. For example, *project=10000*. (optional)
    jql: jql_example,
    // boolean | Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with admin permission. (optional)
    overrideScreenSecurity: true,
    // boolean | Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideEditableFlag: true,
  } satisfies ReplaceIssueFieldOptionRequest;

  try {
    const data = await api.replaceIssueFieldOption(body);
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
| **fieldKey** | `string` | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app\&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | [Defaults to `undefined`] |
| **optionId** | `number` | The ID of the option to be deselected. | [Defaults to `undefined`] |
| **replaceWith** | `number` | The ID of the option that will replace the currently selected option. | [Optional] [Defaults to `undefined`] |
| **jql** | `string` | A JQL query that specifies the issues to be updated. For example, *project&#x3D;10000*. | [Optional] [Defaults to `undefined`] |
| **overrideScreenSecurity** | `boolean` | Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with admin permission. | [Optional] [Defaults to `false`] |
| **overrideEditableFlag** | `boolean` | Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |

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
| **303** | Returned if the long-running task to deselect the option is started. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the field is not found or does not support options, or the options to be replaced are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateIssueFieldOption

> IssueFieldOption updateIssueFieldOption(fieldKey, optionId, issueFieldOption)

Update issue field option

Updates or creates an option for a select list issue field. This operation requires that the option ID is provided when creating an option, therefore, the option ID needs to be specified as a path and body parameter. The option ID provided in the path and body must be identical.  Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldOptionsAppsApi,
} from 'jira-cloud-api';
import type { UpdateIssueFieldOptionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldOptionsAppsApi(config);

  const body = {
    // string | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app\'s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    fieldKey: fieldKey_example,
    // number | The ID of the option to be updated.
    optionId: 789,
    // IssueFieldOption
    issueFieldOption: {"config":{"attributes":[],"scope":{"global":{},"projects":[],"projects2":[{"attributes":["notSelectable"],"id":1001},{"attributes":["notSelectable"],"id":1002}]}},"id":1,"properties":{"description":"The team's description","founded":"2016-06-06","leader":{"email":"lname@example.com","name":"Leader Name"},"members":42},"value":"Team 1"},
  } satisfies UpdateIssueFieldOptionRequest;

  try {
    const data = await api.updateIssueFieldOption(body);
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
| **fieldKey** | `string` | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app\&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | [Defaults to `undefined`] |
| **optionId** | `number` | The ID of the option to be updated. | [Defaults to `undefined`] |
| **issueFieldOption** | [IssueFieldOption](IssueFieldOption.md) |  | |

### Return type

[**IssueFieldOption**](IssueFieldOption.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the option is updated or created. |  -  |
| **400** | Returned if the option is invalid, or the *ID* in the request object does not match the *optionId* parameter. |  -  |
| **403** | Returned if the request is not authenticated as a Jira administrator or the app that provided the field. |  -  |
| **404** | Returned if field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

