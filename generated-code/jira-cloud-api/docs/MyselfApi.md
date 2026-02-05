# MyselfApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCurrentUser**](MyselfApi.md#getcurrentuser) | **GET** /rest/api/3/myself | Get current user |
| [**getLocale**](MyselfApi.md#getlocale) | **GET** /rest/api/3/mypreferences/locale | Get locale |
| [**getPreference**](MyselfApi.md#getpreference) | **GET** /rest/api/3/mypreferences | Get preference |
| [**removePreference**](MyselfApi.md#removepreference) | **DELETE** /rest/api/3/mypreferences | Delete preference |
| [**setLocale**](MyselfApi.md#setlocale) | **PUT** /rest/api/3/mypreferences/locale | Set locale |
| [**setPreference**](MyselfApi.md#setpreference) | **PUT** /rest/api/3/mypreferences | Set preference |



## getCurrentUser

> User getCurrentUser(expand)

Get current user

Returns details for the current user.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  MyselfApi,
} from 'jira-cloud-api';
import type { GetCurrentUserRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new MyselfApi(config);

  const body = {
    // string | Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` Returns all groups, including nested groups, the user belongs to.  *  `applicationRoles` Returns the application roles the user is assigned to. (optional)
    expand: expand_example,
  } satisfies GetCurrentUserRequest;

  try {
    const data = await api.getCurrentUser(body);
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
| **expand** | `string` | Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;groups&#x60; Returns all groups, including nested groups, the user belongs to.  *  &#x60;applicationRoles&#x60; Returns the application roles the user is assigned to. | [Optional] [Defaults to `undefined`] |

### Return type

[**User**](User.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLocale

> Locale getLocale()

Get locale

Returns the locale for the user.  If the user has no language preference set (which is the default setting) or this resource is accessed anonymous, the browser locale detected by Jira is returned. Jira detects the browser locale using the *Accept-Language* header in the request. However, if this doesn\&#39;t match a locale available Jira, the site default locale is returned.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  MyselfApi,
} from 'jira-cloud-api';
import type { GetLocaleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new MyselfApi(config);

  try {
    const data = await api.getLocale();
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

[**Locale**](Locale.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPreference

> string getPreference(key)

Get preference

Returns the value of a preference of the current user.  Note that these keys are deprecated:   *  *jira.user.locale* The locale of the user. By default this is not set and the user takes the locale of the instance.  *  *jira.user.timezone* The time zone of the user. By default this is not set and the user takes the timezone of the instance.  These system preferences keys will be deprecated by 15/07/2024. You can still retrieve these keys, but it will not have any impact on Notification behaviour.   *  *user.notifications.watcher* Whether the user gets notified when they are watcher.  *  *user.notifications.assignee* Whether the user gets notified when they are assignee.  *  *user.notifications.reporter* Whether the user gets notified when they are reporter.  *  *user.notifications.mentions* Whether the user gets notified when they are mentions.  Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  MyselfApi,
} from 'jira-cloud-api';
import type { GetPreferenceRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new MyselfApi(config);

  const body = {
    // string | The key of the preference.
    key: key_example,
  } satisfies GetPreferenceRequest;

  try {
    const data = await api.getPreference(body);
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
| **key** | `string` | The key of the preference. | [Defaults to `undefined`] |

### Return type

**string**

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
| **404** | Returned if the key is not provided or not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removePreference

> removePreference(key)

Delete preference

Deletes a preference of the user, which restores the default value of system defined settings.  Note that these keys are deprecated:   *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale.  *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone.  Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  MyselfApi,
} from 'jira-cloud-api';
import type { RemovePreferenceRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new MyselfApi(config);

  const body = {
    // string | The key of the preference.
    key: key_example,
  } satisfies RemovePreferenceRequest;

  try {
    const data = await api.removePreference(body);
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
| **key** | `string` | The key of the preference. | [Defaults to `undefined`] |

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
| **404** | Returned if the key is not provided or not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setLocale

> any setLocale(locale)

Set locale

Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead.  Sets the locale of the user. The locale must be one supported by the instance of Jira.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  MyselfApi,
} from 'jira-cloud-api';
import type { SetLocaleRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new MyselfApi(config);

  const body = {
    // Locale | The locale defined in a LocaleBean.
    locale: {"locale":"en_US"},
  } satisfies SetLocaleRequest;

  try {
    const data = await api.setLocale(body);
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
| **locale** | [Locale](Locale.md) | The locale defined in a LocaleBean. | |

### Return type

**any**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setPreference

> any setPreference(key, body)

Set preference

Creates a preference for the user or updates a preference\&#39;s value by sending a plain text string. For example, &#x60;false&#x60;. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:   *  *user.notifications.mimetype* The mime type used in notifications sent to the user. Defaults to &#x60;html&#x60;.  *  *user.default.share.private* Whether new [ filters](https://confluence.atlassian.com/x/eQiiLQ) are set to private. Defaults to &#x60;true&#x60;.  *  *user.keyboard.shortcuts.disabled* Whether keyboard shortcuts are disabled. Defaults to &#x60;false&#x60;.  *  *user.autowatch.disabled* Whether the user automatically watches issues they create or add a comment to. By default, not set: the user takes the instance autowatch setting.  *  *user.notifiy.own.changes* Whether the user gets notified of their own changes.  Note that these keys are deprecated:   *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale.  *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone.  These system preferences keys will be deprecated by 15/07/2024. You can still use these keys to create arbitrary preferences, but it will not have any impact on Notification behaviour.   *  *user.notifications.watcher* Whether the user gets notified when they are watcher.  *  *user.notifications.assignee* Whether the user gets notified when they are assignee.  *  *user.notifications.reporter* Whether the user gets notified when they are reporter.  *  *user.notifications.mentions* Whether the user gets notified when they are mentions.  Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  MyselfApi,
} from 'jira-cloud-api';
import type { SetPreferenceRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new MyselfApi(config);

  const body = {
    // string | The key of the preference. The maximum length is 255 characters.
    key: key_example,
    // string | The value of the preference as a plain text string. The maximum length is 255 characters.
    body: body_example,
  } satisfies SetPreferenceRequest;

  try {
    const data = await api.setPreference(body);
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
| **key** | `string` | The key of the preference. The maximum length is 255 characters. | [Defaults to `undefined`] |
| **body** | `string` | The value of the preference as a plain text string. The maximum length is 255 characters. | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`, `text/plain`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the key or value is not provided or invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

