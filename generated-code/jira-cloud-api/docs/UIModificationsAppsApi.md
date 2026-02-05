# UIModificationsAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUiModification**](UIModificationsAppsApi.md#createuimodification) | **POST** /rest/api/3/uiModifications | Create UI modification |
| [**deleteUiModification**](UIModificationsAppsApi.md#deleteuimodification) | **DELETE** /rest/api/3/uiModifications/{uiModificationId} | Delete UI modification |
| [**getUiModifications**](UIModificationsAppsApi.md#getuimodifications) | **GET** /rest/api/3/uiModifications | Get UI modifications |
| [**updateUiModification**](UIModificationsAppsApi.md#updateuimodification) | **PUT** /rest/api/3/uiModifications/{uiModificationId} | Update UI modification |



## createUiModification

> UiModificationIdentifiers createUiModification(createUiModificationDetails)

Create UI modification

Creates a UI modification. UI modification can only be created by Forge apps.  Each app can define up to 3000 UI modifications. Each UI modification can define up to 1000 contexts. The same context can be assigned to maximum 100 UI modifications.  **Context types:**   *  **Jira contexts:** For Jira view types, use &#x60;projectId&#x60; and &#x60;issueTypeId&#x60;. One field can act as a wildcard. Supported Jira views:           *  &#x60;GIC&#x60; \\- Jira global issue create      *  &#x60;IssueView&#x60; \\- Jira issue view      *  &#x60;IssueTransition&#x60; \\- Jira issue transition  *  **Jira Service Management contexts:** For Jira Service Management view types, use &#x60;portalId&#x60; and &#x60;requestTypeId&#x60;. Wildcards are not supported. Supported JSM views:           *  &#x60;JSMRequestCreate&#x60; \\- Jira Service Management request create portal view  **[Permissions](#permissions) required:**   *  *None* if the UI modification is created without contexts.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.  The new &#x60;write:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  UIModificationsAppsApi,
} from 'jira-cloud-api';
import type { CreateUiModificationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UIModificationsAppsApi(config);

  const body = {
    // CreateUiModificationDetails | Details of the UI modification.
    createUiModificationDetails: {"contexts":[{"issueTypeId":"10000","projectId":"10000","viewType":"GIC"},{"issueTypeId":"10001","projectId":"10000","viewType":"IssueView"},{"issueTypeId":"10002","projectId":"10000","viewType":"IssueTransition"},{"issueTypeId":"10003","projectId":"10000","viewType":null},{"issueTypeId":null,"portalId":"1","projectId":null,"requestTypeId":"10","viewType":"JSMRequestCreate"}],"data":"{field: 'Story Points', config: {hidden: false}}","description":"Reveals Story Points field when any Sprint is selected.","name":"Reveal Story Points"},
  } satisfies CreateUiModificationRequest;

  try {
    const data = await api.createUiModification(body);
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
| **createUiModificationDetails** | [CreateUiModificationDetails](CreateUiModificationDetails.md) | Details of the UI modification. | |

### Return type

[**UiModificationIdentifiers**](UiModificationIdentifiers.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the UI modification is created. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the request is not from a Forge app. |  -  |
| **404** | Returned if a project, issue type, portal, or request type in the context are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUiModification

> any deleteUiModification(uiModificationId)

Delete UI modification

Deletes a UI modification. All the contexts that belong to the UI modification are deleted too. UI modification can only be deleted by Forge apps.  **[Permissions](#permissions) required:** None.  The new &#x60;write:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  UIModificationsAppsApi,
} from 'jira-cloud-api';
import type { DeleteUiModificationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UIModificationsAppsApi(config);

  const body = {
    // string | The ID of the UI modification.
    uiModificationId: uiModificationId_example,
  } satisfies DeleteUiModificationRequest;

  try {
    const data = await api.deleteUiModification(body);
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
| **uiModificationId** | `string` | The ID of the UI modification. | [Defaults to `undefined`] |

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
| **204** | Returned if the UI modification is deleted. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the request is not from a Forge app. |  -  |
| **404** | Returned if the UI modification is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUiModifications

> PageBeanUiModificationDetails getUiModifications(startAt, maxResults, expand)

Get UI modifications

Gets UI modifications. UI modifications can only be retrieved by Forge apps.  **[Permissions](#permissions) required:** None.  The new &#x60;read:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  UIModificationsAppsApi,
} from 'jira-cloud-api';
import type { GetUiModificationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UIModificationsAppsApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // string | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `data` Returns UI modification data.  *  `contexts` Returns UI modification contexts. (optional)
    expand: expand_example,
  } satisfies GetUiModificationsRequest;

  try {
    const data = await api.getUiModifications(body);
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
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **expand** | `string` | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;data&#x60; Returns UI modification data.  *  &#x60;contexts&#x60; Returns UI modification contexts. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanUiModificationDetails**](PageBeanUiModificationDetails.md)

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the request is not from a Forge app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUiModification

> any updateUiModification(uiModificationId, updateUiModificationDetails)

Update UI modification

Updates a UI modification. UI modification can only be updated by Forge apps.  Each UI modification can define up to 1000 contexts. The same context can be assigned to maximum 100 UI modifications.  **Context types:**   *  **Jira contexts:** For Jira view types, use &#x60;projectId&#x60; and &#x60;issueTypeId&#x60;. One field can act as a wildcard. Supported Jira views:           *  &#x60;GIC&#x60; \\- Jira global issue create      *  &#x60;IssueView&#x60; \\- Jira issue view      *  &#x60;IssueTransition&#x60; \\- Jira issue transition  *  **Jira Service Management contexts:** For Jira Service Management view types, use &#x60;portalId&#x60; and &#x60;requestTypeId&#x60;. Wildcards are not supported. Supported JSM views:           *  &#x60;JSMRequestCreate&#x60; \\- Jira Service Management request create portal view  **[Permissions](#permissions) required:**   *  *None* if the UI modification is created without contexts.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.  The new &#x60;write:app-data:jira&#x60; OAuth scope is 100% optional now, and not using it won\&#39;t break your app. However, we recommend adding it to your app\&#39;s scope list because we will eventually make it mandatory.

### Example

```ts
import {
  Configuration,
  UIModificationsAppsApi,
} from 'jira-cloud-api';
import type { UpdateUiModificationRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UIModificationsAppsApi(config);

  const body = {
    // string | The ID of the UI modification.
    uiModificationId: uiModificationId_example,
    // UpdateUiModificationDetails | Details of the UI modification.
    updateUiModificationDetails: {"contexts":[{"issueTypeId":"10000","projectId":"10000","viewType":"GIC"},{"issueTypeId":"10001","projectId":"10000","viewType":"IssueView"},{"issueTypeId":"10002","projectId":"10000","viewType":"IssueTransition"},{"issueTypeId":null,"portalId":"5","projectId":null,"requestTypeId":"100","viewType":"JSMRequestCreate"}],"data":"{field: 'Story Points', config: {hidden: true}}","name":"Updated Reveal Story Points"},
  } satisfies UpdateUiModificationRequest;

  try {
    const data = await api.updateUiModification(body);
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
| **uiModificationId** | `string` | The ID of the UI modification. | [Defaults to `undefined`] |
| **updateUiModificationDetails** | [UpdateUiModificationDetails](UpdateUiModificationDetails.md) | Details of the UI modification. | |

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
| **204** | Returned if the UI modification is updated. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the request is not from a Forge app. |  -  |
| **404** | Returned if the UI modification, a project, issue type, portal, or request type in the context are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

