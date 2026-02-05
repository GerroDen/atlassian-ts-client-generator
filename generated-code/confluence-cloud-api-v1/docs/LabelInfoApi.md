# LabelInfoApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllLabelContent**](LabelInfoApi.md#getalllabelcontent) | **GET** /wiki/rest/api/label | Get label information |



## getAllLabelContent

> LabelDetails getAllLabelContent(name, type, start, limit)

Get label information

Returns label information and a list of contents associated with the label.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only contents that the user is permitted to view is returned.

### Example

```ts
import {
  Configuration,
  LabelInfoApi,
} from 'confluence-cloud-api-v1';
import type { GetAllLabelContentRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new LabelInfoApi(config);

  const body = {
    // string | Name of the label to query.
    name: name_example,
    // 'page' | 'blogpost' | 'attachment' | 'page_template' | The type of contents that are to be returned. (optional)
    type: type_example,
    // number | The starting offset for the results. (optional)
    start: 56,
    // number | The number of results to be returned. (optional)
    limit: 56,
  } satisfies GetAllLabelContentRequest;

  try {
    const data = await api.getAllLabelContent(body);
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
| **name** | `string` | Name of the label to query. | [Defaults to `undefined`] |
| **type** | `page`, `blogpost`, `attachment`, `page_template` | The type of contents that are to be returned. | [Optional] [Defaults to `undefined`] [Enum: page, blogpost, attachment, page_template] |
| **start** | `number` | The starting offset for the results. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The number of results to be returned. | [Optional] [Defaults to `200`] |

### Return type

[**LabelDetails**](LabelDetails.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the query fetches zero or more results. |  -  |
| **400** | Returned if no label name is provide or if content type provided in the query is invalid. |  -  |
| **403** | Returned if the calling user does not have permission to view any content including label info. |  -  |
| **404** | Returned if the lable name is invalid or if no label is found for a given label. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

