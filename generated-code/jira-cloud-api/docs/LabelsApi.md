# LabelsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllLabels**](LabelsApi.md#getalllabels) | **GET** /rest/api/3/label | Get all labels |



## getAllLabels

> PageBeanString getAllLabels(startAt, maxResults)

Get all labels

Returns a [paginated](#pagination) list of labels.

### Example

```ts
import {
  Configuration,
  LabelsApi,
} from 'jira-cloud-api';
import type { GetAllLabelsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new LabelsApi(config);

  const body = {
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies GetAllLabelsRequest;

  try {
    const data = await api.getAllLabels(body);
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
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `1000`] |

### Return type

[**PageBeanString**](PageBeanString.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

