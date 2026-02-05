# DefaultApi

All URIs are relative to *http://example.com:7990/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPullRequestCount**](DefaultApi.md#getpullrequestcount) | **GET** /api/latest/inbox/pull-requests/count | Get total number of pull requests in inbox |
| [**getPullRequests2**](DefaultApi.md#getpullrequests2) | **GET** /api/latest/inbox/pull-requests | Get pull requests in inbox |



## getPullRequestCount

> getPullRequestCount()

Get total number of pull requests in inbox

Returns the total number of pull requests in the user\&#39;s inbox

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bitbucket-api';
import type { GetPullRequestCountRequest } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.getPullRequestCount();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPullRequests2

> getPullRequests2(role, limit, start)

Get pull requests in inbox

Returns a page of pull requests in the user\&#39;s inbox.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'bitbucket-api';
import type { GetPullRequests2Request } from 'bitbucket-api';

async function example() {
  console.log("🚀 Testing bitbucket-api SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    role: role_example,
    // number (optional)
    limit: 56,
    // number (optional)
    start: 56,
  } satisfies GetPullRequests2Request;

  try {
    const data = await api.getPullRequests2(body);
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
| **role** | `string` |  | [Optional] [Defaults to `&#39;reviewer&#39;`] |
| **limit** | `number` |  | [Optional] [Defaults to `25`] |
| **start** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

