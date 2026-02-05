# ScreenTabFieldsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addScreenTabField**](ScreenTabFieldsApi.md#addscreentabfield) | **POST** /rest/api/3/screens/{screenId}/tabs/{tabId}/fields | Add screen tab field |
| [**getAllScreenTabFields**](ScreenTabFieldsApi.md#getallscreentabfields) | **GET** /rest/api/3/screens/{screenId}/tabs/{tabId}/fields | Get all screen tab fields |
| [**moveScreenTabField**](ScreenTabFieldsApi.md#movescreentabfield) | **POST** /rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}/move | Move screen tab field |
| [**removeScreenTabField**](ScreenTabFieldsApi.md#removescreentabfield) | **DELETE** /rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id} | Remove screen tab field |



## addScreenTabField

> ScreenableField addScreenTabField(screenId, tabId, addFieldBean)

Add screen tab field

Adds a field to a screen tab.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenTabFieldsApi,
} from 'jira-cloud-api';
import type { AddScreenTabFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabFieldsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // number | The ID of the screen tab.
    tabId: 789,
    // AddFieldBean
    addFieldBean: {"fieldId":"summary"},
  } satisfies AddScreenTabFieldRequest;

  try {
    const data = await api.addScreenTabField(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **tabId** | `number` | The ID of the screen tab. | [Defaults to `undefined`] |
| **addFieldBean** | [AddFieldBean](AddFieldBean.md) |  | |

### Return type

[**ScreenableField**](ScreenableField.md)

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
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen, screen tab, or field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAllScreenTabFields

> Array&lt;ScreenableField&gt; getAllScreenTabFields(screenId, tabId, projectKey)

Get all screen tab fields

Returns all fields for a screen tab.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.

### Example

```ts
import {
  Configuration,
  ScreenTabFieldsApi,
} from 'jira-cloud-api';
import type { GetAllScreenTabFieldsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabFieldsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // number | The ID of the screen tab.
    tabId: 789,
    // string | The key of the project. (optional)
    projectKey: projectKey_example,
  } satisfies GetAllScreenTabFieldsRequest;

  try {
    const data = await api.getAllScreenTabFields(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **tabId** | `number` | The ID of the screen tab. | [Defaults to `undefined`] |
| **projectKey** | `string` | The key of the project. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;ScreenableField&gt;**](ScreenableField.md)

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
| **404** | Returned if the screen or screen tab is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## moveScreenTabField

> any moveScreenTabField(screenId, tabId, id, moveFieldBean)

Move screen tab field

Moves a screen tab field.  If &#x60;after&#x60; and &#x60;position&#x60; are provided in the request, &#x60;position&#x60; is ignored.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenTabFieldsApi,
} from 'jira-cloud-api';
import type { MoveScreenTabFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabFieldsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // number | The ID of the screen tab.
    tabId: 789,
    // string | The ID of the field.
    id: id_example,
    // MoveFieldBean
    moveFieldBean: ...,
  } satisfies MoveScreenTabFieldRequest;

  try {
    const data = await api.moveScreenTabField(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **tabId** | `number` | The ID of the screen tab. | [Defaults to `undefined`] |
| **id** | `string` | The ID of the field. | [Defaults to `undefined`] |
| **moveFieldBean** | [MoveFieldBean](MoveFieldBean.md) |  | |

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
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen, screen tab, or field is not found or the field can\&#39;t be moved to the requested position. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeScreenTabField

> removeScreenTabField(screenId, tabId, id)

Remove screen tab field

Removes a field from a screen tab.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  ScreenTabFieldsApi,
} from 'jira-cloud-api';
import type { RemoveScreenTabFieldRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ScreenTabFieldsApi(config);

  const body = {
    // number | The ID of the screen.
    screenId: 789,
    // number | The ID of the screen tab.
    tabId: 789,
    // string | The ID of the field.
    id: id_example,
  } satisfies RemoveScreenTabFieldRequest;

  try {
    const data = await api.removeScreenTabField(body);
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
| **screenId** | `number` | The ID of the screen. | [Defaults to `undefined`] |
| **tabId** | `number` | The ID of the screen tab. | [Defaults to `undefined`] |
| **id** | `string` | The ID of the field. | [Defaults to `undefined`] |

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
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the screen, screen tab, or field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

