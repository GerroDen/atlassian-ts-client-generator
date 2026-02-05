# IssueRedactionApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getRedactionStatus**](IssueRedactionApi.md#getredactionstatus) | **GET** /rest/api/3/redact/status/{jobId} | Get redaction status |
| [**redact**](IssueRedactionApi.md#redact) | **POST** /rest/api/3/redact | Redact |



## getRedactionStatus

> RedactionJobStatusResponse getRedactionStatus(jobId)

Get redaction status

Retrieves the current status of a redaction job ID.  The jobStatus will be one of the following:   *  IN\\_PROGRESS - The redaction job is currently in progress  *  COMPLETED - The redaction job has completed successfully.  *  PENDING - The redaction job has not started yet

### Example

```ts
import {
  Configuration,
  IssueRedactionApi,
} from 'jira-cloud-api';
import type { GetRedactionStatusRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueRedactionApi(config);

  const body = {
    // string | Redaction job id
    jobId: jobId_example,
  } satisfies GetRedactionStatusRequest;

  try {
    const data = await api.getRedactionStatus(body);
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
| **jobId** | `string` | Redaction job id | [Defaults to `undefined`] |

### Return type

[**RedactionJobStatusResponse**](RedactionJobStatusResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the job status is successfully retrieved. |  -  |
| **403** | Returned if the AGP subscription is not present. |  -  |
| **404** | Returned if the job id is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## redact

> string redact(bulkRedactionRequest)

Redact

Submit a job to redact issue field data. This will trigger the redaction of the data in the specified fields asynchronously.  The redaction status can be polled using the job id.

### Example

```ts
import {
  Configuration,
  IssueRedactionApi,
} from 'jira-cloud-api';
import type { RedactRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueRedactionApi(config);

  const body = {
    // BulkRedactionRequest | List of redaction requests
    bulkRedactionRequest: ...,
  } satisfies RedactRequest;

  try {
    const data = await api.redact(body);
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
| **bulkRedactionRequest** | [BulkRedactionRequest](BulkRedactionRequest.md) | List of redaction requests | |

### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returned if the job submission is successful. The response contains the job id. |  -  |
| **400** | Returned if the redaction request is invalid. |  -  |
| **401** | Returned if the user / app is not authorised to redact data |  -  |
| **403** | Returned if the AGP subscription is not present. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

