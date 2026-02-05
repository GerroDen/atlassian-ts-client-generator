# IssueLinksApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteIssueLink**](IssueLinksApi.md#deleteissuelink) | **DELETE** /rest/api/3/issueLink/{linkId} | Delete issue link |
| [**getIssueLink**](IssueLinksApi.md#getissuelink) | **GET** /rest/api/3/issueLink/{linkId} | Get issue link |
| [**linkIssues**](IssueLinksApi.md#linkissues) | **POST** /rest/api/3/issueLink | Create issue link |



## deleteIssueLink

> deleteIssueLink(linkId)

Delete issue link

Deletes an issue link.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  Browse project [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the issues in the link.  *  *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one of the projects containing issues in the link.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, permission to view both of the issues.

### Example

```ts
import {
  Configuration,
  IssueLinksApi,
} from 'jira-cloud-api';
import type { DeleteIssueLinkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueLinksApi(config);

  const body = {
    // string | The ID of the issue link.
    linkId: linkId_example,
  } satisfies DeleteIssueLinkRequest;

  try {
    const data = await api.deleteIssueLink(body);
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
| **linkId** | `string` | The ID of the issue link. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 200 response |  -  |
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the issue link ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  issue linking is disabled.  *  the issue link is not found.  *  the user doesn\&#39;t have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssueLink

> IssueLink getIssueLink(linkId)

Get issue link

Returns an issue link.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse project* [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the linked issues.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, permission to view both of the issues.

### Example

```ts
import {
  Configuration,
  IssueLinksApi,
} from 'jira-cloud-api';
import type { GetIssueLinkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueLinksApi(config);

  const body = {
    // string | The ID of the issue link.
    linkId: linkId_example,
  } satisfies GetIssueLinkRequest;

  try {
    const data = await api.getIssueLink(body);
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
| **linkId** | `string` | The ID of the issue link. | [Defaults to `undefined`] |

### Return type

[**IssueLink**](IssueLink.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the issue link ID is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  issue linking is disabled.  *  the issue link is not found.  *  the user doesn\&#39;t have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## linkIssues

> any linkIssues(linkIssueRequestJsonBean)

Create issue link

Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have [Issue Linking](https://confluence.atlassian.com/x/yoXKM) enabled.  This resource returns nothing on the creation of an issue link. To obtain the ID of the issue link, use &#x60;https://your-domain.atlassian.net/rest/api/3/issue/[linked issue key]?fields&#x3D;issuelinks&#x60;.  If the link request duplicates a link, the response indicates that the issue link was created. If the request included a comment, the comment is added.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse project* [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the issues to be linked,  *  *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) on the project containing the from (outward) issue,  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueLinksApi,
} from 'jira-cloud-api';
import type { LinkIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueLinksApi(config);

  const body = {
    // LinkIssueRequestJsonBean | The issue link request.
    linkIssueRequestJsonBean: {"comment":{"body":{"content":[{"content":[{"text":"Linked related issue!","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"visibility":{"identifier":"276f955c-63d7-42c8-9520-92d01dca0625","type":"group","value":"jira-software-users"}},"inwardIssue":{"key":"HSP-1"},"outwardIssue":{"key":"MKY-1"},"type":{"name":"Duplicate"}},
  } satisfies LinkIssuesRequest;

  try {
    const data = await api.linkIssues(body);
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
| **linkIssueRequestJsonBean** | [LinkIssueRequestJsonBean](LinkIssueRequestJsonBean.md) | The issue link request. | |

### Return type

**any**

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the comment is not created. The response contains an error message indicating why the comment wasn\&#39;t created. The issue link is also not created. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if:   *  issue linking is disabled.  *  the user cannot view one or both of the issues. For example, the user doesn\&#39;t have *Browse project* project permission for a project containing one of the issues.  *  the user does not have *link issues* project permission.  *  either of the link issues are not found.  *  the issue link type is not found. |  -  |
| **413** | Returned if the per-issue limit for issue links has been breached. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

