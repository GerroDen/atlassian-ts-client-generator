# BuildNumberApi

All URIs are relative to *http://example.com:8085/rest*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bumpBuildNumber**](BuildNumberApi.md#bumpbuildnumber) | **PUT** /api/latest/buildNumber/{projectKey}-{buildKey}/bump |  |
| [**getNextBuildNumber**](BuildNumberApi.md#getnextbuildnumber) | **GET** /api/latest/buildNumber/{projectKey}-{buildKey} |  |



## bumpBuildNumber

> bumpBuildNumber(projectKey, buildKey, nextBuildNumber)



Bump the next build number for a given plan or plan branch to the specified value.

### Example

```ts
import {
  Configuration,
  BuildNumberApi,
} from 'bamboo-api';
import type { BumpBuildNumberRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildNumberApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Build key
    buildKey: buildKey_example,
    // NextBuildNumber | Next build number
    nextBuildNumber: ...,
  } satisfies BumpBuildNumberRequest;

  try {
    const data = await api.bumpBuildNumber(body);
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
| **projectKey** | `string` | Project key | [Defaults to `undefined`] |
| **buildKey** | `string` | Build key | [Defaults to `undefined`] |
| **nextBuildNumber** | [NextBuildNumber](NextBuildNumber.md) | Next build number | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Build number bumped successfully |  -  |
| **400** | Failed to bump build number |  -  |
| **403** | User doesn\&#39;t have write permission for the plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNextBuildNumber

> NextBuildNumber getNextBuildNumber(projectKey, buildKey)



Retrieve the next build number for a given plan or plan branch.

### Example

```ts
import {
  Configuration,
  BuildNumberApi,
} from 'bamboo-api';
import type { GetNextBuildNumberRequest } from 'bamboo-api';

async function example() {
  console.log("🚀 Testing bamboo-api SDK...");
  const api = new BuildNumberApi();

  const body = {
    // string | Project key
    projectKey: projectKey_example,
    // string | Build key
    buildKey: buildKey_example,
  } satisfies GetNextBuildNumberRequest;

  try {
    const data = await api.getNextBuildNumber(body);
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
| **projectKey** | `string` | Project key | [Defaults to `undefined`] |
| **buildKey** | `string` | Build key | [Defaults to `undefined`] |

### Return type

[**NextBuildNumber**](NextBuildNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Next build number retrieved successfully |  -  |
| **403** | User doesn\&#39;t have read permission for the plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

