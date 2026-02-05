# DataPoliciesApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDataPolicyMetadata**](DataPoliciesApi.md#getdatapolicymetadata) | **GET** /data-policies/metadata | Get data policy metadata for the workspace |
| [**getDataPolicySpaces**](DataPoliciesApi.md#getdatapolicyspaces) | **GET** /data-policies/spaces | Get spaces with data policies |



## getDataPolicyMetadata

> DataPolicyMetadata getDataPolicyMetadata()

Get data policy metadata for the workspace

Returns data policy metadata for the workspace.  **[Permissions](#permissions) required:** Only apps can make this request. Permission to access the Confluence site (\&#39;Can use\&#39; global permission).

### Example

```ts
import {
  Configuration,
  DataPoliciesApi,
} from 'confluence-cloud-api-v2';
import type { GetDataPolicyMetadataRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DataPoliciesApi(config);

  try {
    const data = await api.getDataPolicyMetadata();
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

[**DataPolicyMetadata**](DataPolicyMetadata.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDataPolicySpaces

> MultiEntityResultDataPolicySpace getDataPolicySpaces(ids, keys, sort, cursor, limit)

Get spaces with data policies

Returns all spaces. The results will be sorted by id ascending. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Only apps can make this request. Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only spaces that the app has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  DataPoliciesApi,
} from 'confluence-cloud-api-v2';
import type { GetDataPolicySpacesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DataPoliciesApi(config);

  const body = {
    // Array<number> | Filter the results to spaces based on their IDs. Multiple IDs can be specified as a comma-separated list. (optional)
    ids: ...,
    // Array<string> | Filter the results to spaces based on their keys. Multiple keys can be specified as a comma-separated list. (optional)
    keys: ...,
    // SpaceSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of spaces per result to return. If more results exist, use the `Link` response header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetDataPolicySpacesRequest;

  try {
    const data = await api.getDataPolicySpaces(body);
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
| **ids** | `Array<number>` | Filter the results to spaces based on their IDs. Multiple IDs can be specified as a comma-separated list. | [Optional] |
| **keys** | `Array<string>` | Filter the results to spaces based on their keys. Multiple keys can be specified as a comma-separated list. | [Optional] |
| **sort** | `SpaceSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, key, -key, name, -name] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of spaces per result to return. If more results exist, use the &#x60;Link&#x60; response header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultDataPolicySpace**](MultiEntityResultDataPolicySpace.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested spaces are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL.  For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/spaces?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

