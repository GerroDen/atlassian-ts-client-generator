# KnowledgebaseApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getArticles**](KnowledgebaseApi.md#getarticles) | **GET** /rest/servicedeskapi/knowledgebase/article | Get articles |



## getArticles

> PagedDTOArticleDTO getArticles(query, highlight, start, limit, cursor, prev)

Get articles

Returns articles which match the given query string across all service desks.  **[Permissions](#permissions) required**: Permission to access the [customer portal](https://confluence.atlassian.com/servicedeskcloud/configuring-the-customer-portal-732528918.html).

### Example

```ts
import {
  Configuration,
  KnowledgebaseApi,
} from 'jira-cloud-service-management-api';
import type { GetArticlesRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new KnowledgebaseApi(config);

  const body = {
    // string | The string used to filter the articles (required).
    query: query_example,
    // boolean | If set to true matching query term in the title and excerpt will be highlighted using the `@@@hl@@@term@@@endhl@@@` syntax. Default: false.
    highlight: true,
    // number | (Deprecated) The starting index of the returned objects. Base index: 0. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. (optional)
    limit: 56,
    // string | Pointer to a set of search results, returned as part of the next or prev URL from the previous search call. (optional)
    cursor: cursor_example,
    // boolean | Should navigate to the previous page. Defaulted to false. Set to true as part of prev URL from the previous search call. (optional)
    prev: true,
  } satisfies GetArticlesRequest;

  try {
    const data = await api.getArticles(body);
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
| **query** | `string` | The string used to filter the articles (required). | [Defaults to `undefined`] |
| **highlight** | `boolean` | If set to true matching query term in the title and excerpt will be highlighted using the &#x60;@@@hl@@@term@@@endhl@@@&#x60; syntax. Default: false. | [Defaults to `false`] |
| **start** | `number` | (Deprecated) The starting index of the returned objects. Base index: 0. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Pointer to a set of search results, returned as part of the next or prev URL from the previous search call. | [Optional] [Defaults to `undefined`] |
| **prev** | `boolean` | Should navigate to the previous page. Defaulted to false. Set to true as part of prev URL from the previous search call. | [Optional] [Defaults to `false`] |

### Return type

[**PagedDTOArticleDTO**](PagedDTOArticleDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the articles, on the specified page of the results. |  -  |
| **400** | Returned if the request is invalid. For example: missing query parameter. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **403** | Returned if the user does not have permission to complete this request. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

