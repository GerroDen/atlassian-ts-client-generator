# IssueCustomFieldValuesAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**updateCustomFieldValue**](IssueCustomFieldValuesAppsApi.md#updatecustomfieldvalue) | **PUT** /rest/api/3/app/field/{fieldIdOrKey}/value | Update custom field value |
| [**updateMultipleCustomFieldValues**](IssueCustomFieldValuesAppsApi.md#updatemultiplecustomfieldvalues) | **POST** /rest/api/3/app/field/value | Update custom fields |



## updateCustomFieldValue

> any updateCustomFieldValue(fieldIdOrKey, customFieldValueUpdateDetails, generateChangelog)

Update custom field value

Updates the value of a custom field on one or more issues.  Apps can only perform this operation on [custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/) and [custom field types](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) declared in their own manifests.  **[Permissions](#permissions) required:** Only the app that owns the custom field or custom field type can update its values with this operation.  The new &#x60;write:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldValuesAppsApi,
} from 'jira-cloud-api';
import type { UpdateCustomFieldValueRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldValuesAppsApi(config);

  const body = {
    // string | The ID or key of the custom field. For example, `customfield_10010`.
    fieldIdOrKey: fieldIdOrKey_example,
    // CustomFieldValueUpdateDetails
    customFieldValueUpdateDetails: {"updates":[{"issueIds":[10010],"value":"new value"}]},
    // boolean | Whether to generate a changelog for this update. (optional)
    generateChangelog: true,
  } satisfies UpdateCustomFieldValueRequest;

  try {
    const data = await api.updateCustomFieldValue(body);
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
| **fieldIdOrKey** | `string` | The ID or key of the custom field. For example, &#x60;customfield_10010&#x60;. | [Defaults to `undefined`] |
| **customFieldValueUpdateDetails** | [CustomFieldValueUpdateDetails](CustomFieldValueUpdateDetails.md) |  | |
| **generateChangelog** | `boolean` | Whether to generate a changelog for this update. | [Optional] [Defaults to `true`] |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the request is not authenticated as the app that provided the field. |  -  |
| **404** | Returned if the field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMultipleCustomFieldValues

> any updateMultipleCustomFieldValues(multipleCustomFieldValuesUpdateDetails, generateChangelog)

Update custom fields

Updates the value of one or more custom fields on one or more issues. Combinations of custom field and issue should be unique within the request.  Apps can only perform this operation on [custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/) and [custom field types](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) declared in their own manifests.  **[Permissions](#permissions) required:** Only the app that owns the custom field or custom field type can update its values with this operation.  The new &#x60;write:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  IssueCustomFieldValuesAppsApi,
} from 'jira-cloud-api';
import type { UpdateMultipleCustomFieldValuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCustomFieldValuesAppsApi(config);

  const body = {
    // MultipleCustomFieldValuesUpdateDetails
    multipleCustomFieldValuesUpdateDetails: {"updates":[{"customField":"customfield_10010","issueIds":[10010,10011],"value":"new value"},{"customField":"customfield_10011","issueIds":[10010],"value":1000}]},
    // boolean | Whether to generate a changelog for this update. (optional)
    generateChangelog: true,
  } satisfies UpdateMultipleCustomFieldValuesRequest;

  try {
    const data = await api.updateMultipleCustomFieldValues(body);
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
| **multipleCustomFieldValuesUpdateDetails** | [MultipleCustomFieldValuesUpdateDetails](MultipleCustomFieldValuesUpdateDetails.md) |  | |
| **generateChangelog** | `boolean` | Whether to generate a changelog for this update. | [Optional] [Defaults to `true`] |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **403** | Returned if the request is not authenticated as the app that provided all the fields. |  -  |
| **404** | Returned if any field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

