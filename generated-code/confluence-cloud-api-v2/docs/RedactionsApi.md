# RedactionsApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postRedactBlog**](RedactionsApi.md#postredactblog) | **POST** /blogposts/{id}/redact | Redact Content in a Confluence Blog Post |
| [**postRedactPage**](RedactionsApi.md#postredactpageoperation) | **POST** /pages/{id}/redact | Redact Content in a Confluence Page |



## postRedactBlog

> RedactionResponse postRedactBlog(id, postRedactPageRequest)

Redact Content in a Confluence Blog Post

Redacts sensitive content in a Confluence blog post by replacing specified text ranges with redaction markers.  Each redaction in the response includes a unique UUID for restoration (except code block redactions).  The response metadata items maintain the same order as the input redaction pointers, and completely  overlapping redactions are merged into a single redaction with one UUID.  **Note**: This endpoint requires **Atlassian Guard Premium**. 

### Example

```ts
import {
  Configuration,
  RedactionsApi,
} from 'confluence-cloud-api-v2';
import type { PostRedactBlogRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RedactionsApi(config);

  const body = {
    // number | The ID of the blog post to redact content from.
    id: 789,
    // PostRedactPageRequest (optional)
    postRedactPageRequest: ...,
  } satisfies PostRedactBlogRequest;

  try {
    const data = await api.postRedactBlog(body);
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
| **id** | `number` | The ID of the blog post to redact content from. | [Defaults to `undefined`] |
| **postRedactPageRequest** | [PostRedactPageRequest](PostRedactPageRequest.md) |  | [Optional] |

### Return type

[**RedactionResponse**](RedactionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Redaction Accepted. The response contains details about the redactions that were applied. |  -  |
| **400** | Invalid request. This can be thrown if  - createdAt field is out of date - JSON pointers are invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postRedactPage

> RedactionResponse postRedactPage(id, postRedactPageRequest)

Redact Content in a Confluence Page

Redacts sensitive content in a Confluence page by replacing specified text ranges with redaction markers.  Each redaction in the response includes a unique UUID for restoration (except code block redactions).  The response metadata items maintain the same order as the input redaction pointers, and completely  overlapping redactions are merged into a single redaction with one UUID.  **Note**: This endpoint requires **Atlassian Guard Premium**. 

### Example

```ts
import {
  Configuration,
  RedactionsApi,
} from 'confluence-cloud-api-v2';
import type { PostRedactPageOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RedactionsApi(config);

  const body = {
    // number | The ID of the page to redact content from.
    id: 789,
    // PostRedactPageRequest (optional)
    postRedactPageRequest: ...,
  } satisfies PostRedactPageOperationRequest;

  try {
    const data = await api.postRedactPage(body);
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
| **id** | `number` | The ID of the page to redact content from. | [Defaults to `undefined`] |
| **postRedactPageRequest** | [PostRedactPageRequest](PostRedactPageRequest.md) |  | [Optional] |

### Return type

[**RedactionResponse**](RedactionResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Redaction Accepted. The response contains details about the redactions that were applied. |  -  |
| **400** | Invalid request. This can be thrown if  - createdAt field is out of date - JSON pointers are invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

