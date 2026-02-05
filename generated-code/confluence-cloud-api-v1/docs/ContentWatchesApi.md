# ContentWatchesApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addContentWatcher**](ContentWatchesApi.md#addcontentwatcher) | **POST** /wiki/rest/api/user/watch/content/{contentId} | Add content watcher |
| [**addLabelWatcher**](ContentWatchesApi.md#addlabelwatcher) | **POST** /wiki/rest/api/user/watch/label/{labelName} | Add label watcher |
| [**addSpaceWatcher**](ContentWatchesApi.md#addspacewatcher) | **POST** /wiki/rest/api/user/watch/space/{spaceKey} | Add space watcher |
| [**getContentWatchStatus**](ContentWatchesApi.md#getcontentwatchstatus) | **GET** /wiki/rest/api/user/watch/content/{contentId} | Get content watch status |
| [**getWatchersForSpace**](ContentWatchesApi.md#getwatchersforspace) | **GET** /wiki/rest/api/space/{spaceKey}/watch | Get space watchers |
| [**getWatchesForPage**](ContentWatchesApi.md#getwatchesforpage) | **GET** /wiki/rest/api/content/{id}/notification/child-created | Get watches for page |
| [**getWatchesForSpace**](ContentWatchesApi.md#getwatchesforspace) | **GET** /wiki/rest/api/content/{id}/notification/created | Get watches for space |
| [**isWatchingLabel**](ContentWatchesApi.md#iswatchinglabel) | **GET** /wiki/rest/api/user/watch/label/{labelName} | Get label watch status |
| [**isWatchingSpace**](ContentWatchesApi.md#iswatchingspace) | **GET** /wiki/rest/api/user/watch/space/{spaceKey} | Get space watch status |
| [**removeContentWatcher**](ContentWatchesApi.md#removecontentwatcher) | **DELETE** /wiki/rest/api/user/watch/content/{contentId} | Remove content watcher |
| [**removeLabelWatcher**](ContentWatchesApi.md#removelabelwatcher) | **DELETE** /wiki/rest/api/user/watch/label/{labelName} | Remove label watcher |
| [**removeSpaceWatch**](ContentWatchesApi.md#removespacewatch) | **DELETE** /wiki/rest/api/user/watch/space/{spaceKey} | Remove space watch |



## addContentWatcher

> addContentWatcher(contentId, key, username, accountId)

Add content watcher

Adds a user as a watcher to a piece of content. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a request, as this operation has XSRF protection.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { AddContentWatcherRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The ID of the content to add the watcher to.
    contentId: contentId_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies AddContentWatcherRequest;

  try {
    const data = await api.addContentWatcher(body);
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
| **contentId** | `string` | The ID of the content to add the watcher to. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the watcher was successfully created. No response body is returned. |  -  |
| **403** | Returned if;  - The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified. - The calling user does not have permission to view the content. - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No content exists for the specified &#x60;contentId&#x60;. |  -  |
| **404** | Returned if no &#x60;contentId&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addLabelWatcher

> addLabelWatcher(xAtlassianToken, labelName, key, username, accountId)

Add label watcher

Adds a user as a watcher to a label. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a request, as this operation has XSRF protection.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { AddLabelWatcherRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | Note, you must add header when making a request, as this operation has XSRF protection.
    xAtlassianToken: xAtlassianToken_example,
    // string | The name of the label to add the watcher to.
    labelName: labelName_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies AddLabelWatcherRequest;

  try {
    const data = await api.addLabelWatcher(body);
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
| **xAtlassianToken** | `string` | Note, you must add header when making a request, as this operation has XSRF protection. | [Defaults to `&#39;no-check&#39;`] |
| **labelName** | `string` | The name of the label to add the watcher to. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the watcher was successfully created. No response body is returned. |  -  |
| **403** | Returned if;  - The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified. - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No label exists for the specified &#x60;labelName&#x60;. |  -  |
| **404** | Returned if no &#x60;labelName&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addSpaceWatcher

> addSpaceWatcher(xAtlassianToken, spaceKey, key, username, accountId)

Add space watcher

Adds a user as a watcher to a space. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a request, as this operation has XSRF protection.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { AddSpaceWatcherRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | Note, you must add header when making a request, as this operation has XSRF protection.
    xAtlassianToken: xAtlassianToken_example,
    // string | The key of the space to add the watcher to.
    spaceKey: spaceKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies AddSpaceWatcherRequest;

  try {
    const data = await api.addSpaceWatcher(body);
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
| **xAtlassianToken** | `string` | Note, you must add header when making a request, as this operation has XSRF protection. | [Defaults to `&#39;no-check&#39;`] |
| **spaceKey** | `string` | The key of the space to add the watcher to. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the watcher was successfully created. No response body is returned. |  -  |
| **403** | Returned if;  - The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified. - The calling user does not have permission to view the space. - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No space exists for the specified &#x60;spaceKey&#x60;. |  -  |
| **404** | Returned if no &#x60;spaceKey&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentWatchStatus

> UserWatch getContentWatchStatus(contentId, key, username, accountId)

Get content watch status

Returns whether a user is watching a piece of content. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { GetContentWatchStatusRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The ID of the content to be queried for whether the specified user is watching it.
    contentId: contentId_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies GetContentWatchStatusRequest;

  try {
    const data = await api.getContentWatchStatus(body);
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
| **contentId** | `string` | The ID of the content to be queried for whether the specified user is watching it. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**UserWatch**](UserWatch.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested watch status is returned. |  -  |
| **403** | Returned if;  - The calling user does not have permission to view the content. - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No content exists for the specified &#x60;contentId&#x60;. |  -  |
| **404** | Returned if no &#x60;contentId&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWatchersForSpace

> SpaceWatchArray getWatchersForSpace(spaceKey, start, limit)

Get space watchers

Returns a list of watchers of a space

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { GetWatchersForSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The key of the space to get watchers.
    spaceKey: spaceKey_example,
    // string | The start point of the collection to return. (optional)
    start: start_example,
    // string | The limit of the number of items to return, this may be restricted by fixed system limits. (optional)
    limit: limit_example,
  } satisfies GetWatchersForSpaceRequest;

  try {
    const data = await api.getWatchersForSpace(body);
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
| **spaceKey** | `string` | The key of the space to get watchers. | [Defaults to `undefined`] |
| **start** | `string` | The start point of the collection to return. | [Optional] [Defaults to `undefined`] |
| **limit** | `string` | The limit of the number of items to return, this may be restricted by fixed system limits. | [Optional] [Defaults to `undefined`] |

### Return type

[**SpaceWatchArray**](SpaceWatchArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if watchers list is returned. |  -  |
| **404** | Returned if there is no space with the given key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWatchesForPage

> WatchArray getWatchesForPage(id, start, limit)

Get watches for page

Returns the watches for a page. A user that watches a page will receive receive notifications when the page is updated.  If you want to manage watches for a page, use the following &#x60;user&#x60; methods:  - [Get content watch status for user](#api-user-watch-content-contentId-get) - [Add content watch](#api-user-watch-content-contentId-post) - [Remove content watch](#api-user-watch-content-contentId-delete)  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { GetWatchesForPageRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The ID of the content to be queried for its watches.
    id: id_example,
    // number | The starting index of the returned watches. (optional)
    start: 56,
    // number | The maximum number of watches to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetWatchesForPageRequest;

  try {
    const data = await api.getWatchesForPage(body);
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
| **id** | `string` | The ID of the content to be queried for its watches. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned watches. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of watches to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `200`] |

### Return type

[**WatchArray**](WatchArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested watches are returned. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWatchesForSpace

> SpaceWatchArray getWatchesForSpace(id, start, limit)

Get watches for space

Returns all space watches for the space that the content is in. A user that watches a space will receive receive notifications when any content in the space is updated.  If you want to manage watches for a space, use the following &#x60;user&#x60; methods:  - [Get space watch status for user](#api-user-watch-space-spaceKey-get) - [Add space watch](#api-user-watch-space-spaceKey-post) - [Remove space watch](#api-user-watch-space-spaceKey-delete)  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { GetWatchesForSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The ID of the content to be queried for its watches.
    id: id_example,
    // number | The starting index of the returned watches. (optional)
    start: 56,
    // number | The maximum number of watches to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetWatchesForSpaceRequest;

  try {
    const data = await api.getWatchesForSpace(body);
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
| **id** | `string` | The ID of the content to be queried for its watches. | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned watches. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of watches to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `200`] |

### Return type

[**SpaceWatchArray**](SpaceWatchArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested watches are returned. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## isWatchingLabel

> UserWatch isWatchingLabel(labelName, key, username, accountId)

Get label watch status

Returns whether a user is watching a label. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { IsWatchingLabelRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The name of the label to be queried for whether the specified user is watching it.
    labelName: labelName_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies IsWatchingLabelRequest;

  try {
    const data = await api.isWatchingLabel(body);
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
| **labelName** | `string` | The name of the label to be queried for whether the specified user is watching it. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**UserWatch**](UserWatch.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested watch status is returned. |  -  |
| **403** | Returned if;  - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No label exists for the specified &#x60;labelName&#x60;. |  -  |
| **404** | Returned if no &#x60;labelName&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## isWatchingSpace

> UserWatch isWatchingSpace(spaceKey, key, username, accountId)

Get space watch status

Returns whether a user is watching a space. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { IsWatchingSpaceRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The key of the space to be queried for whether the specified user is watching it.
    spaceKey: spaceKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies IsWatchingSpaceRequest;

  try {
    const data = await api.isWatchingSpace(body);
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
| **spaceKey** | `string` | The key of the space to be queried for whether the specified user is watching it. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**UserWatch**](UserWatch.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested watch status is returned. |  -  |
| **403** | Returned if;  - The calling user does not have permission to view the space. - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No space exists for the specified &#x60;spaceKey&#x60;. |  -  |
| **404** | Returned if no &#x60;spaceKey&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeContentWatcher

> removeContentWatcher(xAtlassianToken, contentId, key, username, accountId)

Remove content watcher

Removes a user as a watcher from a piece of content. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { RemoveContentWatcherRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | Note, you must add header when making a request, as this operation has XSRF protection.
    xAtlassianToken: xAtlassianToken_example,
    // string | The ID of the content to remove the watcher from.
    contentId: contentId_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies RemoveContentWatcherRequest;

  try {
    const data = await api.removeContentWatcher(body);
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
| **xAtlassianToken** | `string` | Note, you must add header when making a request, as this operation has XSRF protection. | [Defaults to `&#39;no-check&#39;`] |
| **contentId** | `string` | The ID of the content to remove the watcher from. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the watcher was successfully deleted. No response body is returned. |  -  |
| **403** | Returned if;  - The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified. - The calling user does not have permission to view the content. - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No content exists for the specified &#x60;contentId&#x60;. |  -  |
| **404** | Returned if no &#x60;contentId&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeLabelWatcher

> removeLabelWatcher(labelName, key, username, accountId)

Remove label watcher

Removes a user as a watcher from a label. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { RemoveLabelWatcherRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The name of the label to remove the watcher from.
    labelName: labelName_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies RemoveLabelWatcherRequest;

  try {
    const data = await api.removeLabelWatcher(body);
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
| **labelName** | `string` | The name of the label to remove the watcher from. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the watcher was successfully deleted. No response body is returned. |  -  |
| **403** | Returned if;  - The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified. - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No label exists for the specified &#x60;labelName&#x60;. |  -  |
| **404** | Returned if no &#x60;labelName&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeSpaceWatch

> removeSpaceWatch(spaceKey, key, username, accountId)

Remove space watch

Removes a user as a watcher from a space. Choose the user by doing one of the following:  - Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user. - Do not specify a user: The currently logged-in user will be used.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Confluence Administrator\&#39; global permission if specifying a user, otherwise permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  ContentWatchesApi,
} from 'confluence-cloud-api-v1';
import type { RemoveSpaceWatchRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentWatchesApi(config);

  const body = {
    // string | The key of the space to remove the watcher from.
    spaceKey: spaceKey_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    key: key_example,
    // string | This parameter is no longer available and will be removed from the documentation soon. Use `accountId` instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, `384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192`. (optional)
    accountId: accountId_example,
  } satisfies RemoveSpaceWatchRequest;

  try {
    const data = await api.removeSpaceWatch(body);
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
| **spaceKey** | `string` | The key of the space to remove the watcher from. | [Defaults to `undefined`] |
| **key** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available and will be removed from the documentation soon. Use &#x60;accountId&#x60; instead. See the [deprecation notice](/cloud/confluence/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | The account ID of the user. The accountId uniquely identifies the user across all Atlassian products. For example, &#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the watcher was successfully deleted. No response body is returned. |  -  |
| **403** | Returned if;  - The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified. - The calling user does not have permission to view the space. - A user is specified via a query parameter and the calling user is not a Confluence administrator. - No space exists for the specified &#x60;spaceKey&#x60;. |  -  |
| **404** | Returned if no &#x60;spaceKey&#x60; is specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

