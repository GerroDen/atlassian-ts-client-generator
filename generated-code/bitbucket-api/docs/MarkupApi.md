# MarkupApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**preview**](MarkupApi.md#preview) | **POST** /api/latest/markup/preview | Preview markdown render |



## preview

> RestMarkup preview(htmlEscape, urlMode, includeHeadingId, hardwrap, body)

Preview markdown render

Preview generated HTML for the given markdown content.  Only authenticated users may call this resource.

### Example

```ts
import {
  Configuration,
  MarkupApi,
} from 'bitbucket-api';
import type { PreviewRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new MarkupApi();

  const body = {
    // string | (Optional) true if HTML should be escaped in the input markup, false otherwise. (optional)
    htmlEscape: htmlEscape_example,
    // string | (Optional) The mode to use when building URLs. One of: ABSOLUTE, RELATIVE or, CONFIGURED. By default this is RELATIVE. (optional)
    urlMode: urlMode_example,
    // string | (Optional) true if headers should contain an ID based on the heading content. (optional)
    includeHeadingId: includeHeadingId_example,
    // string | (Optional) Whether the markup implementation should convert newlines to breaks. By default this is false which reflects the standard markdown specification. (optional)
    hardwrap: hardwrap_example,
    // string (optional)
    body: body_example,
  } satisfies PreviewRequest;

  try {
    const data = await api.preview(body);
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
| **htmlEscape** | `string` | (Optional) true if HTML should be escaped in the input markup, false otherwise. | [Optional] [Defaults to `undefined`] |
| **urlMode** | `string` | (Optional) The mode to use when building URLs. One of: ABSOLUTE, RELATIVE or, CONFIGURED. By default this is RELATIVE. | [Optional] [Defaults to `undefined`] |
| **includeHeadingId** | `string` | (Optional) true if headers should contain an ID based on the heading content. | [Optional] [Defaults to `undefined`] |
| **hardwrap** | `string` | (Optional) Whether the markup implementation should convert newlines to breaks. By default this is false which reflects the standard markdown specification. | [Optional] [Defaults to `undefined`] |
| **body** | `string` |  | [Optional] |

### Return type

[**RestMarkup**](RestMarkup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The rendered markdown. |  -  |
| **400** | The markdown was invalid. |  -  |
| **401** | The currently authenticated user has insufficient permissions preview rendered markdown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

