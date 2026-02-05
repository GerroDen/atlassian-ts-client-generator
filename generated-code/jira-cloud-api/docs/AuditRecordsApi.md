# AuditRecordsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAuditRecords**](AuditRecordsApi.md#getauditrecords) | **GET** /rest/api/3/auditing/record | Get audit records |



## getAuditRecords

> AuditRecords getAuditRecords(offset, limit, filter, from, to)

Get audit records

Returns a list of audit records. The list can be filtered to include items:   *  where each item in &#x60;filter&#x60; has at least one match in any of these fields:           *  &#x60;summary&#x60;      *  &#x60;category&#x60;      *  &#x60;eventSource&#x60;      *  &#x60;objectItem.name&#x60; If the object is a user, account ID is available to filter.      *  &#x60;objectItem.parentName&#x60;      *  &#x60;objectItem.typeName&#x60;      *  &#x60;changedValues.changedFrom&#x60;      *  &#x60;changedValues.changedTo&#x60;      *  &#x60;remoteAddress&#x60;          For example, if &#x60;filter&#x60; contains *man ed*, an audit record containing &#x60;summary\&quot;: \&quot;User added to group\&quot;&#x60; and &#x60;\&quot;category\&quot;: \&quot;group management\&quot;&#x60; is returned.  *  created on or after a date and time.  *  created or or before a date and time.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  AuditRecordsApi,
} from 'jira-cloud-api';
import type { GetAuditRecordsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new AuditRecordsApi(config);

  const body = {
    // number | The number of records to skip before returning the first result. (optional)
    offset: 56,
    // number | The maximum number of results to return. (optional)
    limit: 56,
    // string | The strings to match with audit field content, space separated. (optional)
    filter: filter_example,
    // string | The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned. (optional)
    from: from_example,
    // string | The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned. (optional)
    to: to_example,
  } satisfies GetAuditRecordsRequest;

  try {
    const data = await api.getAuditRecords(body);
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
| **offset** | `number` | The number of records to skip before returning the first result. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of results to return. | [Optional] [Defaults to `1000`] |
| **filter** | `string` | The strings to match with audit field content, space separated. | [Optional] [Defaults to `undefined`] |
| **from** | `string` | The date and time on or after which returned audit records must have been created. If &#x60;to&#x60; is provided &#x60;from&#x60; must be before &#x60;to&#x60; or no audit records are returned. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | The date and time on or before which returned audit results must have been created. If &#x60;from&#x60; is provided &#x60;to&#x60; must be after &#x60;from&#x60; or no audit records are returned. | [Optional] [Defaults to `undefined`] |

### Return type

[**AuditRecords**](AuditRecords.md)

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
| **403** | Returned if:   *  the user does not have the required permissions.  *  all Jira products are on free plans. Audit logs are available when at least one Jira product is on a paid plan. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

