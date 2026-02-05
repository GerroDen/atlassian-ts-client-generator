# IssueSecurityLevelApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getIssueSecurityLevel**](IssueSecurityLevelApi.md#getissuesecuritylevel) | **GET** /rest/api/3/securitylevel/{id} | Get issue security level |
| [**getIssueSecurityLevelMembers**](IssueSecurityLevelApi.md#getissuesecuritylevelmembers) | **GET** /rest/api/3/issuesecurityschemes/{issueSecuritySchemeId}/members | Get issue security level members by issue security scheme |



## getIssueSecurityLevel

> SecurityLevel getIssueSecurityLevel(id)

Get issue security level

Returns details of an issue security level.  Use [Get issue security scheme](#api-rest-api-3-issuesecurityschemes-id-get) to obtain the IDs of issue security levels associated with the issue security scheme.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  IssueSecurityLevelApi,
} from 'jira-cloud-api';
import type { GetIssueSecurityLevelRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecurityLevelApi(config);

  const body = {
    // string | The ID of the issue security level.
    id: id_example,
  } satisfies GetIssueSecurityLevelRequest;

  try {
    const data = await api.getIssueSecurityLevel(body);
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
| **id** | `string` | The ID of the issue security level. | [Defaults to `undefined`] |

### Return type

[**SecurityLevel**](SecurityLevel.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if the issue security level is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueSecurityLevelMembers

> PageBeanIssueSecurityLevelMember getIssueSecurityLevelMembers(issueSecuritySchemeId, startAt, maxResults, issueSecurityLevelId, expand)

Get issue security level members by issue security scheme

Returns issue security level members.  Only issue security level members in context of classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  IssueSecurityLevelApi,
} from 'jira-cloud-api';
import type { GetIssueSecurityLevelMembersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSecurityLevelApi(config);

  const body = {
    // number | The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
    issueSecuritySchemeId: 789,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // Set<string> | The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`. (optional)
    issueSecurityLevelId: ...,
    // string | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission. (optional)
    expand: expand_example,
  } satisfies GetIssueSecurityLevelMembersRequest;

  try {
    const data = await api.getIssueSecurityLevelMembers(body);
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
| **issueSecuritySchemeId** | `number` | The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **issueSecurityLevelId** | `Set<string>` | The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: &#x60;issueSecurityLevelId&#x3D;10000&amp;issueSecurityLevelId&#x3D;10001&#x60;. | [Optional] |
| **expand** | `string` | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanIssueSecurityLevelMember**](PageBeanIssueSecurityLevelMember.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if no issue security level members are found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

