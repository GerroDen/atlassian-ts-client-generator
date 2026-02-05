# IssueNotificationSchemesApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addNotifications**](IssueNotificationSchemesApi.md#addnotifications) | **PUT** /rest/api/3/notificationscheme/{id}/notification | Add notifications to notification scheme |
| [**createNotificationScheme**](IssueNotificationSchemesApi.md#createnotificationscheme) | **POST** /rest/api/3/notificationscheme | Create notification scheme |
| [**deleteNotificationScheme**](IssueNotificationSchemesApi.md#deletenotificationscheme) | **DELETE** /rest/api/3/notificationscheme/{notificationSchemeId} | Delete notification scheme |
| [**getNotificationScheme**](IssueNotificationSchemesApi.md#getnotificationscheme) | **GET** /rest/api/3/notificationscheme/{id} | Get notification scheme |
| [**getNotificationSchemeToProjectMappings**](IssueNotificationSchemesApi.md#getnotificationschemetoprojectmappings) | **GET** /rest/api/3/notificationscheme/project | Get projects using notification schemes paginated |
| [**getNotificationSchemes**](IssueNotificationSchemesApi.md#getnotificationschemes) | **GET** /rest/api/3/notificationscheme | Get notification schemes paginated |
| [**removeNotificationFromNotificationScheme**](IssueNotificationSchemesApi.md#removenotificationfromnotificationscheme) | **DELETE** /rest/api/3/notificationscheme/{notificationSchemeId}/notification/{notificationId} | Remove notification from notification scheme |
| [**updateNotificationScheme**](IssueNotificationSchemesApi.md#updatenotificationscheme) | **PUT** /rest/api/3/notificationscheme/{id} | Update notification scheme |



## addNotifications

> any addNotifications(id, addNotificationsDetails)

Add notifications to notification scheme

Adds notifications to a notification scheme. You can add up to 1000 notifications per request.  *Deprecated: The notification type &#x60;EmailAddress&#x60; is no longer supported in Cloud. Refer to the [changelog](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-1031) for more details.*  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueNotificationSchemesApi,
} from 'jira-cloud-api';
import type { AddNotificationsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNotificationSchemesApi(config);

  const body = {
    // string | The ID of the notification scheme.
    id: id_example,
    // AddNotificationsDetails
    addNotificationsDetails: {"notificationSchemeEvents":[{"event":{"id":"1"},"notifications":[{"notificationType":"Group","parameter":"jira-administrators"}]}]},
  } satisfies AddNotificationsRequest;

  try {
    const data = await api.addNotifications(body);
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
| **id** | `string` | The ID of the notification scheme. | [Defaults to `undefined`] |
| **addNotificationsDetails** | [AddNotificationsDetails](AddNotificationsDetails.md) |  | |

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
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the notification scheme isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createNotificationScheme

> NotificationSchemeId createNotificationScheme(createNotificationSchemeDetails)

Create notification scheme

Creates a notification scheme with notifications. You can create up to 1000 notifications per request.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueNotificationSchemesApi,
} from 'jira-cloud-api';
import type { CreateNotificationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNotificationSchemesApi(config);

  const body = {
    // CreateNotificationSchemeDetails
    createNotificationSchemeDetails: {"description":"My new scheme description","name":"My new notification scheme","notificationSchemeEvents":[{"event":{"id":"1"},"notifications":[{"notificationType":"Group","parameter":"jira-administrators"}]}]},
  } satisfies CreateNotificationSchemeRequest;

  try {
    const data = await api.createNotificationScheme(body);
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
| **createNotificationSchemeDetails** | [CreateNotificationSchemeDetails](CreateNotificationSchemeDetails.md) |  | |

### Return type

[**NotificationSchemeId**](NotificationSchemeId.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteNotificationScheme

> any deleteNotificationScheme(notificationSchemeId)

Delete notification scheme

Deletes a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueNotificationSchemesApi,
} from 'jira-cloud-api';
import type { DeleteNotificationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNotificationSchemesApi(config);

  const body = {
    // string | The ID of the notification scheme.
    notificationSchemeId: notificationSchemeId_example,
  } satisfies DeleteNotificationSchemeRequest;

  try {
    const data = await api.deleteNotificationScheme(body);
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
| **notificationSchemeId** | `string` | The ID of the notification scheme. | [Defaults to `undefined`] |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the notification scheme isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNotificationScheme

> NotificationScheme getNotificationScheme(id, expand)

Get notification scheme

Returns a [notification scheme](https://confluence.atlassian.com/x/8YdKLg), including the list of events and the recipients who will receive notifications for those events.  **[Permissions](#permissions) required:** Permission to access Jira, however, the user must have permission to administer at least one project associated with the notification scheme.

### Example

```ts
import {
  Configuration,
  IssueNotificationSchemesApi,
} from 'jira-cloud-api';
import type { GetNotificationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNotificationSchemesApi(config);

  const body = {
    // number | The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs.
    id: 789,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information  *  `field` Returns information about any custom fields assigned to receive an event  *  `group` Returns information about any groups assigned to receive an event  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information  *  `projectRole` Returns information about any project roles assigned to receive an event  *  `user` Returns information about any users assigned to receive an event (optional)
    expand: expand_example,
  } satisfies GetNotificationSchemeRequest;

  try {
    const data = await api.getNotificationScheme(body);
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
| **id** | `number` | The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs. | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;all&#x60; Returns all expandable information  *  &#x60;field&#x60; Returns information about any custom fields assigned to receive an event  *  &#x60;group&#x60; Returns information about any groups assigned to receive an event  *  &#x60;notificationSchemeEvents&#x60; Returns a list of event associations. This list is returned for all expandable information  *  &#x60;projectRole&#x60; Returns information about any project roles assigned to receive an event  *  &#x60;user&#x60; Returns information about any users assigned to receive an event | [Optional] [Defaults to `undefined`] |

### Return type

[**NotificationScheme**](NotificationScheme.md)

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
| **404** | Returned if the notification scheme is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNotificationSchemeToProjectMappings

> PageBeanNotificationSchemeAndProjectMappingJsonBean getNotificationSchemeToProjectMappings(startAt, maxResults, notificationSchemeId, projectId)

Get projects using notification schemes paginated

Returns a [paginated](#pagination) mapping of project that have notification scheme assigned. You can provide either one or multiple notification scheme IDs or project IDs to filter by. If you don\&#39;t provide any, this will return a list of all mappings. Note that only company-managed (classic) projects are supported. This is because team-managed projects don\&#39;t have a concept of a default notification scheme. The mappings are ordered by projectId.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  IssueNotificationSchemesApi,
} from 'jira-cloud-api';
import type { GetNotificationSchemeToProjectMappingsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNotificationSchemesApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Set<string> | The list of notifications scheme IDs to be filtered out (optional)
    notificationSchemeId: ...,
    // Set<string> | The list of project IDs to be filtered out (optional)
    projectId: ...,
  } satisfies GetNotificationSchemeToProjectMappingsRequest;

  try {
    const data = await api.getNotificationSchemeToProjectMappings(body);
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
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **notificationSchemeId** | `Set<string>` | The list of notifications scheme IDs to be filtered out | [Optional] |
| **projectId** | `Set<string>` | The list of project IDs to be filtered out | [Optional] |

### Return type

[**PageBeanNotificationSchemeAndProjectMappingJsonBean**](PageBeanNotificationSchemeAndProjectMappingJsonBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if search criteria are invalid, strings vs numbers for projectId, notificationSchemeId, startAt and maxResult |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNotificationSchemes

> PageBeanNotificationScheme getNotificationSchemes(startAt, maxResults, id, projectId, onlyDefault, expand)

Get notification schemes paginated

Returns a [paginated](#pagination) list of [notification schemes](https://confluence.atlassian.com/x/8YdKLg) ordered by the display name.  *Note that you should allow for events without recipients to appear in responses.*  **[Permissions](#permissions) required:** Permission to access Jira, however, the user must have permission to administer at least one project associated with a notification scheme for it to be returned.

### Example

```ts
import {
  Configuration,
  IssueNotificationSchemesApi,
} from 'jira-cloud-api';
import type { GetNotificationSchemesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNotificationSchemesApi(config);

  const body = {
    // string | The index of the first item to return in a page of results (page offset). (optional)
    startAt: startAt_example,
    // string | The maximum number of items to return per page. (optional)
    maxResults: maxResults_example,
    // Set<string> | The list of notification schemes IDs to be filtered by (optional)
    id: ...,
    // Set<string> | The list of projects IDs to be filtered by (optional)
    projectId: ...,
    // boolean | When set to true, returns only the default notification scheme. If you provide project IDs not associated with the default, returns an empty page. The default value is false. (optional)
    onlyDefault: true,
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information  *  `field` Returns information about any custom fields assigned to receive an event  *  `group` Returns information about any groups assigned to receive an event  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information  *  `projectRole` Returns information about any project roles assigned to receive an event  *  `user` Returns information about any users assigned to receive an event (optional)
    expand: expand_example,
  } satisfies GetNotificationSchemesRequest;

  try {
    const data = await api.getNotificationSchemes(body);
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
| **startAt** | `string` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `&#39;0&#39;`] |
| **maxResults** | `string` | The maximum number of items to return per page. | [Optional] [Defaults to `&#39;50&#39;`] |
| **id** | `Set<string>` | The list of notification schemes IDs to be filtered by | [Optional] |
| **projectId** | `Set<string>` | The list of projects IDs to be filtered by | [Optional] |
| **onlyDefault** | `boolean` | When set to true, returns only the default notification scheme. If you provide project IDs not associated with the default, returns an empty page. The default value is false. | [Optional] [Defaults to `false`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;all&#x60; Returns all expandable information  *  &#x60;field&#x60; Returns information about any custom fields assigned to receive an event  *  &#x60;group&#x60; Returns information about any groups assigned to receive an event  *  &#x60;notificationSchemeEvents&#x60; Returns a list of event associations. This list is returned for all expandable information  *  &#x60;projectRole&#x60; Returns information about any project roles assigned to receive an event  *  &#x60;user&#x60; Returns information about any users assigned to receive an event | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanNotificationScheme**](PageBeanNotificationScheme.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. Only returns notification schemes that the user has permission to access. An empty list is returned if the user lacks permission to access all notification schemes. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeNotificationFromNotificationScheme

> any removeNotificationFromNotificationScheme(notificationSchemeId, notificationId)

Remove notification from notification scheme

Removes a notification from a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueNotificationSchemesApi,
} from 'jira-cloud-api';
import type { RemoveNotificationFromNotificationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNotificationSchemesApi(config);

  const body = {
    // string | The ID of the notification scheme.
    notificationSchemeId: notificationSchemeId_example,
    // string | The ID of the notification.
    notificationId: notificationId_example,
  } satisfies RemoveNotificationFromNotificationSchemeRequest;

  try {
    const data = await api.removeNotificationFromNotificationScheme(body);
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
| **notificationSchemeId** | `string` | The ID of the notification scheme. | [Defaults to `undefined`] |
| **notificationId** | `string` | The ID of the notification. | [Defaults to `undefined`] |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if either the notification scheme or notification isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateNotificationScheme

> any updateNotificationScheme(id, updateNotificationSchemeDetails)

Update notification scheme

Updates a notification scheme.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueNotificationSchemesApi,
} from 'jira-cloud-api';
import type { UpdateNotificationSchemeRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueNotificationSchemesApi(config);

  const body = {
    // string | The ID of the notification scheme.
    id: id_example,
    // UpdateNotificationSchemeDetails
    updateNotificationSchemeDetails: {"description":"My updated notification scheme description","name":"My updated notification scheme"},
  } satisfies UpdateNotificationSchemeRequest;

  try {
    const data = await api.updateNotificationScheme(body);
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
| **id** | `string` | The ID of the notification scheme. | [Defaults to `undefined`] |
| **updateNotificationSchemeDetails** | [UpdateNotificationSchemeDetails](UpdateNotificationSchemeDetails.md) |  | |

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
| **400** | Returned if the request isn\&#39;t valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user doesn\&#39;t have the necessary permission. |  -  |
| **404** | Returned if the notification scheme isn\&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

