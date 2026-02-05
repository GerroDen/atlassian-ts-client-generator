# IssueCustomFieldConfigurationAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCustomFieldConfiguration**](IssueCustomFieldConfigurationAppsApi.md#getcustomfieldconfiguration) | **GET** /rest/api/3/app/field/{fieldIdOrKey}/context/configuration | Get custom field configurations |
| [**getCustomFieldsConfigurations**](IssueCustomFieldConfigurationAppsApi.md#getcustomfieldsconfigurations) | **POST** /rest/api/3/app/field/context/configuration/list | Bulk get custom field configurations |
| [**updateCustomFieldConfiguration**](IssueCustomFieldConfigurationAppsApi.md#updatecustomfieldconfiguration) | **PUT** /rest/api/3/app/field/{fieldIdOrKey}/context/configuration | Update custom field configurations |



## getCustomFieldConfiguration

> PageBeanContextualConfiguration getCustomFieldConfiguration(fieldIdOrKey, id, fieldContextId, issueId, projectKeyOrId, issueTypeId, startAt, maxResults)

Get custom field configurations

Returns a [paginated](#pagination) list of configurations for a custom field of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  &#x60;id&#x60;.  *  &#x60;fieldContextId&#x60;.  *  &#x60;issueId&#x60;.  *  &#x60;projectKeyOrId&#x60; and &#x60;issueTypeId&#x60;.  Otherwise, all configurations are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that provided the custom field type.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldConfigurationAppsApi,
} from 'jira-cloud-api';
import type { GetCustomFieldConfigurationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldConfigurationAppsApi(config);

  const body = {
    // string | The ID or key of the custom field, for example `customfield_10000`.
    fieldIdOrKey: fieldIdOrKey_example,
    // Set<number> | The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can\'t be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`. (optional)
    id: ...,
    // Set<number> | The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can\'t be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`. (optional)
    fieldContextId: ...,
    // number | The ID of the issue to filter results by. If the issue doesn\'t exist, an empty list is returned. Can\'t be provided with `projectKeyOrId`, or `issueTypeId`. (optional)
    issueId: 789,
    // string | The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can\'t be provided with `issueId`. (optional)
    projectKeyOrId: projectKeyOrId_example,
    // string | The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can\'t be provided with `issueId`. (optional)
    issueTypeId: issueTypeId_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetCustomFieldConfigurationRequest;

  try {
    const data = await api.getCustomFieldConfiguration(body);
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
| **fieldIdOrKey** | `string` | The ID or key of the custom field, for example &#x60;customfield_10000&#x60;. | [Defaults to `undefined`] |
| **id** | `Set<number>` | The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. Can\&#39;t be provided with &#x60;fieldContextId&#x60;, &#x60;issueId&#x60;, &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [Optional] |
| **fieldContextId** | `Set<number>` | The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: &#x60;fieldContextId&#x3D;10000&amp;fieldContextId&#x3D;10001&#x60;. Can\&#39;t be provided with &#x60;id&#x60;, &#x60;issueId&#x60;, &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [Optional] |
| **issueId** | `number` | The ID of the issue to filter results by. If the issue doesn\&#39;t exist, an empty list is returned. Can\&#39;t be provided with &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [Optional] [Defaults to `undefined`] |
| **projectKeyOrId** | `string` | The ID or key of the project to filter results by. Must be provided with &#x60;issueTypeId&#x60;. Can\&#39;t be provided with &#x60;issueId&#x60;. | [Optional] [Defaults to `undefined`] |
| **issueTypeId** | `string` | The ID of the issue type to filter results by. Must be provided with &#x60;projectKeyOrId&#x60;. Can\&#39;t be provided with &#x60;issueId&#x60;. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |

### Return type

[**PageBeanContextualConfiguration**](PageBeanContextualConfiguration.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field. |  -  |
| **404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomFieldsConfigurations

> PageBeanBulkContextualConfiguration getCustomFieldsConfigurations(configurationsListParameters, id, fieldContextId, issueId, projectKeyOrId, issueTypeId, startAt, maxResults)

Bulk get custom field configurations

Returns a [paginated](#pagination) list of configurations for list of custom fields of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  &#x60;id&#x60;.  *  &#x60;fieldContextId&#x60;.  *  &#x60;issueId&#x60;.  *  &#x60;projectKeyOrId&#x60; and &#x60;issueTypeId&#x60;.  Otherwise, all configurations for the provided list of custom fields are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that provided the custom field type.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldConfigurationAppsApi,
} from 'jira-cloud-api';
import type { GetCustomFieldsConfigurationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldConfigurationAppsApi(config);

  const body = {
    // ConfigurationsListParameters
    configurationsListParameters: {"fieldIdsOrKeys":["customfield_10035","customfield_10036"]},
    // Set<number> | The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can\'t be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`. (optional)
    id: ...,
    // Set<number> | The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can\'t be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`. (optional)
    fieldContextId: ...,
    // number | The ID of the issue to filter results by. If the issue doesn\'t exist, an empty list is returned. Can\'t be provided with `projectKeyOrId`, or `issueTypeId`. (optional)
    issueId: 789,
    // string | The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can\'t be provided with `issueId`. (optional)
    projectKeyOrId: projectKeyOrId_example,
    // string | The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can\'t be provided with `issueId`. (optional)
    issueTypeId: issueTypeId_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetCustomFieldsConfigurationsRequest;

  try {
    const data = await api.getCustomFieldsConfigurations(body);
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
| **configurationsListParameters** | [ConfigurationsListParameters](ConfigurationsListParameters.md) |  | |
| **id** | `Set<number>` | The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. Can\&#39;t be provided with &#x60;fieldContextId&#x60;, &#x60;issueId&#x60;, &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [Optional] |
| **fieldContextId** | `Set<number>` | The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: &#x60;fieldContextId&#x3D;10000&amp;fieldContextId&#x3D;10001&#x60;. Can\&#39;t be provided with &#x60;id&#x60;, &#x60;issueId&#x60;, &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [Optional] |
| **issueId** | `number` | The ID of the issue to filter results by. If the issue doesn\&#39;t exist, an empty list is returned. Can\&#39;t be provided with &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [Optional] [Defaults to `undefined`] |
| **projectKeyOrId** | `string` | The ID or key of the project to filter results by. Must be provided with &#x60;issueTypeId&#x60;. Can\&#39;t be provided with &#x60;issueId&#x60;. | [Optional] [Defaults to `undefined`] |
| **issueTypeId** | `string` | The ID of the issue type to filter results by. Must be provided with &#x60;projectKeyOrId&#x60;. Can\&#39;t be provided with &#x60;issueId&#x60;. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |

### Return type

[**PageBeanBulkContextualConfiguration**](PageBeanBulkContextualConfiguration.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field. |  -  |
| **404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomFieldConfiguration

> any updateCustomFieldConfiguration(fieldIdOrKey, customFieldConfigurations)

Update custom field configurations

Update the configuration for contexts of a custom field of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field type.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldConfigurationAppsApi,
} from 'jira-cloud-api';
import type { UpdateCustomFieldConfigurationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldConfigurationAppsApi(config);

  const body = {
    // string | The ID or key of the custom field, for example `customfield_10000`.
    fieldIdOrKey: fieldIdOrKey_example,
    // CustomFieldConfigurations
    customFieldConfigurations: {"configurations":[{"id":"10000"},{"configuration":{"maxValue":10000,"minValue":0},"id":"10001","schema":{"properties":{"amount":{"type":"number"},"currency":{"type":"string"}},"required":["amount","currency"]}}]},
  } satisfies UpdateCustomFieldConfigurationRequest;

  try {
    const data = await api.updateCustomFieldConfiguration(body);
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
| **fieldIdOrKey** | `string` | The ID or key of the custom field, for example &#x60;customfield_10000&#x60;. | [Defaults to `undefined`] |
| **customFieldConfigurations** | [CustomFieldConfigurations](CustomFieldConfigurations.md) |  | |

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
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field. |  -  |
| **404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

