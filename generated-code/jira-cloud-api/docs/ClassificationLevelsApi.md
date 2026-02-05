# ClassificationLevelsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllUserDataClassificationLevels**](ClassificationLevelsApi.md#getalluserdataclassificationlevels) | **GET** /rest/api/3/classification-levels | Get all classification levels |



## getAllUserDataClassificationLevels

> DataClassificationLevelsBean getAllUserDataClassificationLevels(status, orderBy)

Get all classification levels

Returns all classification levels.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  ClassificationLevelsApi,
} from 'jira-cloud-api';
import type { GetAllUserDataClassificationLevelsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new ClassificationLevelsApi(config);

  const body = {
    // Set<'PUBLISHED' | 'ARCHIVED' | 'DRAFT'> | Optional set of statuses to filter by. (optional)
    status: ...,
    // 'rank' | '-rank' | '+rank' | Ordering of the results by a given field. If not provided, values will not be sorted. (optional)
    orderBy: orderBy_example,
  } satisfies GetAllUserDataClassificationLevelsRequest;

  try {
    const data = await api.getAllUserDataClassificationLevels(body);
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
| **status** | `PUBLISHED`, `ARCHIVED`, `DRAFT` | Optional set of statuses to filter by. | [Optional] [Enum: PUBLISHED, ARCHIVED, DRAFT] |
| **orderBy** | `rank`, `-rank`, `+rank` | Ordering of the results by a given field. If not provided, values will not be sorted. | [Optional] [Defaults to `undefined`] [Enum: rank, -rank, +rank] |

### Return type

[**DataClassificationLevelsBean**](DataClassificationLevelsBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

