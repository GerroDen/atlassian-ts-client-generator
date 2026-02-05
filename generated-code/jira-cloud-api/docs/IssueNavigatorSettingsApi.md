# IssueNavigatorSettingsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getIssueNavigatorDefaultColumns**](IssueNavigatorSettingsApi.md#getissuenavigatordefaultcolumns) | **GET** /rest/api/3/settings/columns | Get issue navigator default columns |
| [**setIssueNavigatorDefaultColumns**](IssueNavigatorSettingsApi.md#setissuenavigatordefaultcolumns) | **PUT** /rest/api/3/settings/columns | Set issue navigator default columns |



## getIssueNavigatorDefaultColumns

> Array&lt;ColumnItem&gt; getIssueNavigatorDefaultColumns()

Get issue navigator default columns

Returns the default issue navigator columns.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueNavigatorSettingsApi,
} from 'jira-cloud-api';
import type { GetIssueNavigatorDefaultColumnsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNavigatorSettingsApi(config);

  try {
    const data = await api.getIssueNavigatorDefaultColumns();
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

[**Array&lt;ColumnItem&gt;**](ColumnItem.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setIssueNavigatorDefaultColumns

> setIssueNavigatorDefaultColumns(columnRequestBody)

Set issue navigator default columns

Sets the default issue navigator columns.  The &#x60;columns&#x60; parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple columns, pass multiple &#x60;columns&#x60; parameters. For example, in curl:  &#x60;curl -X PUT -d columns&#x3D;summary -d columns&#x3D;description https://your-domain.atlassian.net/rest/api/3/settings/columns&#x60;  If no column details are sent, then all default columns are removed.  A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue columns using [Get fields](#api-rest-api-3-field-get).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueNavigatorSettingsApi,
} from 'jira-cloud-api';
import type { SetIssueNavigatorDefaultColumnsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNavigatorSettingsApi(config);

  const body = {
    // ColumnRequestBody | A navigable field value.
    columnRequestBody: ...,
  } satisfies SetIssueNavigatorDefaultColumnsRequest;

  try {
    const data = await api.setIssueNavigatorDefaultColumns(body);
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
| **columnRequestBody** | [ColumnRequestBody](ColumnRequestBody.md) | A navigable field value. | |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if invalid parameters are passed. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if a navigable field value is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

