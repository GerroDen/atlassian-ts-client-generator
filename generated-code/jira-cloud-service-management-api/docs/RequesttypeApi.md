# RequesttypeApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllRequestTypes**](RequesttypeApi.md#getallrequesttypes) | **GET** /rest/servicedeskapi/requesttype | Get all request types |



## getAllRequestTypes

> PagedDTORequestTypeDTO getAllRequestTypes(searchQuery, serviceDeskId, start, limit, expand, includeHiddenRequestTypesInSearch, restrictionStatus)

Get all request types

This method returns all customer request types used in the Jira Service Management instance, optionally filtered by a query string.  Use [servicedeskapi/servicedesk/\\{serviceDeskId\\}/requesttype](#api-servicedesk-serviceDeskId-requesttype-get) to find the customer request types supported by a specific service desk.  The returned list of customer request types can be filtered using the &#x60;searchQuery&#x60; parameter. The parameter is matched against the customer request types\&#39; &#x60;name&#x60; or &#x60;description&#x60;. For example, searching for \&quot;Install\&quot;, \&quot;Inst\&quot;, \&quot;Equi\&quot;, or \&quot;Equipment\&quot; will match a customer request type with the *name* \&quot;Equipment Installation Request\&quot;.  **Note:** This API by default will filter out request types hidden in the portal (i.e. request types without groups and request types where a user doesn\&#39;t have permission) when &#x60;searchQuery&#x60; is provided, unless &#x60;includeHiddenRequestTypesInSearch&#x60; is set to true. Restricted request types will not be returned for those who aren\&#39;t admins.  **[Permissions](#permissions) required**: Any

### Example

```ts
import {
  Configuration,
  RequesttypeApi,
} from 'jira-cloud-service-management-api';
import type { GetAllRequestTypesRequest } from 'jira-cloud-service-management-api';

async function example() {
  console.log("🚀 Testing jira-cloud-service-management-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RequesttypeApi(config);

  const body = {
    // string | String to be used to filter the results. (optional)
    searchQuery: searchQuery_example,
    // Array<number> | Filter the request types by service desk Ids provided. Multiple values of the query parameter are supported. For example, `serviceDeskId=1&serviceDeskId=2` will return request types only for service desks 1 and 2. (optional)
    serviceDeskId: ...,
    // number | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. (optional)
    start: 56,
    // number | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. (optional)
    limit: 56,
    // Array<string> (optional)
    expand: ...,
    // boolean | Whether to include hidden request types when searching with `searchQuery`. (optional)
    includeHiddenRequestTypesInSearch: true,
    // string | Request type restriction status (`open` or `restricted`) used to filter the results. (optional)
    restrictionStatus: restrictionStatus_example,
  } satisfies GetAllRequestTypesRequest;

  try {
    const data = await api.getAllRequestTypes(body);
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
| **searchQuery** | `string` | String to be used to filter the results. | [Optional] [Defaults to `undefined`] |
| **serviceDeskId** | `Array<number>` | Filter the request types by service desk Ids provided. Multiple values of the query parameter are supported. For example, &#x60;serviceDeskId&#x3D;1&amp;serviceDeskId&#x3D;2&#x60; will return request types only for service desks 1 and 2. | [Optional] |
| **start** | `number` | The starting index of the returned objects. Base index: 0. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | The maximum number of items to return per page. Default: 50. See the [Pagination](#pagination) section for more details. | [Optional] [Defaults to `undefined`] |
| **expand** | `Array<string>` |  | [Optional] |
| **includeHiddenRequestTypesInSearch** | `boolean` | Whether to include hidden request types when searching with &#x60;searchQuery&#x60;. | [Optional] [Defaults to `false`] |
| **restrictionStatus** | `string` | Request type restriction status (&#x60;open&#x60; or &#x60;restricted&#x60;) used to filter the results. | [Optional] [Defaults to `undefined`] |

### Return type

[**PagedDTORequestTypeDTO**](PagedDTORequestTypeDTO.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the request types, on the specified page of the results. |  -  |
| **401** | Returned if the user is not logged in. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

