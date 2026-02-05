# AnalyticsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getViewers**](AnalyticsApi.md#getviewers) | **GET** /wiki/rest/api/analytics/content/{contentId}/viewers | Get viewers |
| [**getViews**](AnalyticsApi.md#getviews) | **GET** /wiki/rest/api/analytics/content/{contentId}/views | Get views |



## getViewers

> GetViewers200Response getViewers(contentId, fromDate)

Get viewers

Get the total number of distinct viewers a piece of content has.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from 'confluence-cloud-api-v1';
import type { GetViewersRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | The ID of the content to get the viewers for.
    contentId: contentId_example,
    // string | The number of views for the content since the date. (optional)
    fromDate: 2021-03-21T00:00:00.000Z,
  } satisfies GetViewersRequest;

  try {
    const data = await api.getViewers(body);
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
| **contentId** | `string` | The ID of the content to get the viewers for. | [Defaults to `undefined`] |
| **fromDate** | `string` | The number of views for the content since the date. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetViewers200Response**](GetViewers200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the total number of distinct viewers for the content. |  -  |
| **400** | Returned if client input is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the authentication credentials are missing from the request. |  -  |
| **404** | Returned if; - There is no content with the given ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getViews

> GetViews200Response getViews(contentId, fromDate)

Get views

Get the total number of views a piece of content has.

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from 'confluence-cloud-api-v1';
import type { GetViewsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string | The ID of the content to get the views for.
    contentId: contentId_example,
    // string | The number of views for the content since the date. (optional)
    fromDate: 2021-03-21T00:00:00.000Z,
  } satisfies GetViewsRequest;

  try {
    const data = await api.getViews(body);
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
| **contentId** | `string` | The ID of the content to get the views for. | [Defaults to `undefined`] |
| **fromDate** | `string` | The number of views for the content since the date. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetViews200Response**](GetViews200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the total number of views for the content. |  -  |
| **400** | Returned if client input is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **403** | Returned if the authentication credentials are missing from the request. |  -  |
| **404** | Returned if; - There is no content with the given ID. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

