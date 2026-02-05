# WebhooksApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteWebhookById**](WebhooksApi.md#deletewebhookbyid) | **DELETE** /rest/api/3/webhook | Delete webhooks by ID |
| [**getDynamicWebhooksForApp**](WebhooksApi.md#getdynamicwebhooksforapp) | **GET** /rest/api/3/webhook | Get dynamic webhooks for app |
| [**getFailedWebhooks**](WebhooksApi.md#getfailedwebhooks) | **GET** /rest/api/3/webhook/failed | Get failed webhooks |
| [**refreshWebhooks**](WebhooksApi.md#refreshwebhooks) | **PUT** /rest/api/3/webhook/refresh | Extend webhook life |
| [**registerDynamicWebhooks**](WebhooksApi.md#registerdynamicwebhooks) | **POST** /rest/api/3/webhook | Register dynamic webhooks |



## deleteWebhookById

> deleteWebhookById(containerForWebhookIDs)

Delete webhooks by ID

Removes webhooks by ID. Only webhooks registered by the calling app are removed. If webhooks created by other apps are specified, they are ignored.  **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'jira-cloud-api';
import type { DeleteWebhookByIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WebhooksApi(config);

  const body = {
    // ContainerForWebhookIDs
    containerForWebhookIDs: {"webhookIds":[10000,10001,10042]},
  } satisfies DeleteWebhookByIdRequest;

  try {
    const data = await api.deleteWebhookById(body);
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
| **containerForWebhookIDs** | [ContainerForWebhookIDs](ContainerForWebhookIDs.md) |  | |

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
| **202** | Returned if the request is successful. |  -  |
| **400** | Returned if the list of webhook IDs is missing. |  -  |
| **403** | Returned if the caller isn\&#39;t an app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDynamicWebhooksForApp

> PageBeanWebhook getDynamicWebhooksForApp(startAt, maxResults)

Get dynamic webhooks for app

Returns a [paginated](#pagination) list of the webhooks registered by the calling app.  **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'jira-cloud-api';
import type { GetDynamicWebhooksForAppRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WebhooksApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetDynamicWebhooksForAppRequest;

  try {
    const data = await api.getDynamicWebhooksForApp(body);
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
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |

### Return type

[**PageBeanWebhook**](PageBeanWebhook.md)

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
| **403** | Returned if the caller isn\&#39;t an app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFailedWebhooks

> FailedWebhooks getFailedWebhooks(maxResults, after)

Get failed webhooks

Returns webhooks that have recently failed to be delivered to the requesting app after the maximum number of retries.  After 72 hours the failure may no longer be returned by this operation.  The oldest failure is returned first.  This method uses a cursor-based pagination. To request the next page use the failure time of the last webhook on the list as the &#x60;failedAfter&#x60; value or use the URL provided in &#x60;next&#x60;.  **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) can use this operation.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'jira-cloud-api';
import type { GetFailedWebhooksRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WebhooksApi(config);

  const body = {
    // number | The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page. (optional)
    maxResults: 56,
    // number | The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch. (optional)
    after: 789,
  } satisfies GetFailedWebhooksRequest;

  try {
    const data = await api.getFailedWebhooks(body);
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
| **maxResults** | `number` | The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page. | [Optional] [Defaults to `undefined`] |
| **after** | `number` | The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch. | [Optional] [Defaults to `undefined`] |

### Return type

[**FailedWebhooks**](FailedWebhooks.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | 400 response |  -  |
| **403** | Returned if the caller is not a Connect app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshWebhooks

> WebhooksExpirationDate refreshWebhooks(containerForWebhookIDs)

Extend webhook life

Extends the life of webhook. Webhooks registered through the REST API expire after 30 days. Call this operation to keep them alive.  Unrecognized webhook IDs (those that are not found or belong to other apps) are ignored.  **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'jira-cloud-api';
import type { RefreshWebhooksRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WebhooksApi(config);

  const body = {
    // ContainerForWebhookIDs
    containerForWebhookIDs: {"webhookIds":[10000,10001,10042]},
  } satisfies RefreshWebhooksRequest;

  try {
    const data = await api.refreshWebhooks(body);
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
| **containerForWebhookIDs** | [ContainerForWebhookIDs](ContainerForWebhookIDs.md) |  | |

### Return type

[**WebhooksExpirationDate**](WebhooksExpirationDate.md)

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
| **403** | Returned if the caller isn\&#39;t an app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerDynamicWebhooks

> ContainerForRegisteredWebhooks registerDynamicWebhooks(webhookRegistrationDetails)

Register dynamic webhooks

Registers webhooks.  **NOTE:** for non-public OAuth apps, webhooks are delivered only if there is a match between the app owner and the user who registered a dynamic webhook.  **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'jira-cloud-api';
import type { RegisterDynamicWebhooksRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new WebhooksApi(config);

  const body = {
    // WebhookRegistrationDetails
    webhookRegistrationDetails: {"url":"https://your-app.example.com/webhook-received","webhooks":[{"events":["jira:issue_created","jira:issue_updated"],"fieldIdsFilter":["summary","customfield_10029"],"jqlFilter":"project = PROJ"},{"events":["jira:issue_deleted"],"jqlFilter":"project IN (PROJ, EXP) AND status = done"},{"events":["issue_property_set"],"issuePropertyKeysFilter":["my-issue-property-key"],"jqlFilter":"project = PROJ"}]},
  } satisfies RegisterDynamicWebhooksRequest;

  try {
    const data = await api.registerDynamicWebhooks(body);
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
| **webhookRegistrationDetails** | [WebhookRegistrationDetails](WebhookRegistrationDetails.md) |  | |

### Return type

[**ContainerForRegisteredWebhooks**](ContainerForRegisteredWebhooks.md)

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
| **403** | Returned if the caller isn\&#39;t an app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

