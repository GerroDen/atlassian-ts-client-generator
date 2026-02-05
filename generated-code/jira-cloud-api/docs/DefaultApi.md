# DefaultApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWorklogsByIssueIdAndWorklogId**](DefaultApi.md#getworklogsbyissueidandworklogid) | **POST** /rest/internal/api/latest/worklog/bulk | Get worklogs by issue id and worklog id |



## getWorklogsByIssueIdAndWorklogId

> BulkWorklogKeyResponseBean getWorklogsByIssueIdAndWorklogId(bulkWorklogKeyRequestBean)

Get worklogs by issue id and worklog id

Returns worklog details for a list of issue ID and worklog ID pairs.  This is an internal API for bulk fetching worklogs by their issue and worklog IDs. Worklogs that don\&#39;t exist will be filtered out from the response.  The returned list of worklogs is limited to 1000 items.  **[Permissions](#permissions) required:** This is an internal service-to-service API that requires ASAP authentication. No user permission checks are performed as this bypasses normal user context.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'jira-cloud-api';
import type { GetWorklogsByIssueIdAndWorklogIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new DefaultApi(config);

  const body = {
    // BulkWorklogKeyRequestBean | A JSON object containing a list of issue ID and worklog ID pairs.
    bulkWorklogKeyRequestBean: ...,
  } satisfies GetWorklogsByIssueIdAndWorklogIdRequest;

  try {
    const data = await api.getWorklogsByIssueIdAndWorklogId(body);
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
| **bulkWorklogKeyRequestBean** | [BulkWorklogKeyRequestBean](BulkWorklogKeyRequestBean.md) | A JSON object containing a list of issue ID and worklog ID pairs. | |

### Return type

[**BulkWorklogKeyResponseBean**](BulkWorklogKeyResponseBean.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request contains more than 1000 worklog pairs, is empty, or has invalid format. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **500** | Returned if there is an internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

