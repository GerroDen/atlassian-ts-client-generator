# IssueRemoteLinksApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrUpdateRemoteIssueLink**](IssueRemoteLinksApi.md#createorupdateremoteissuelink) | **POST** /rest/api/3/issue/{issueIdOrKey}/remotelink | Create or update remote issue link |
| [**deleteRemoteIssueLinkByGlobalId**](IssueRemoteLinksApi.md#deleteremoteissuelinkbyglobalid) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/remotelink | Delete remote issue link by global ID |
| [**deleteRemoteIssueLinkById**](IssueRemoteLinksApi.md#deleteremoteissuelinkbyid) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Delete remote issue link by ID |
| [**getRemoteIssueLinkById**](IssueRemoteLinksApi.md#getremoteissuelinkbyid) | **GET** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Get remote issue link by ID |
| [**getRemoteIssueLinks**](IssueRemoteLinksApi.md#getremoteissuelinks) | **GET** /rest/api/3/issue/{issueIdOrKey}/remotelink | Get remote issue links |
| [**updateRemoteIssueLink**](IssueRemoteLinksApi.md#updateremoteissuelink) | **PUT** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Update remote issue link by ID |



## createOrUpdateRemoteIssueLink

> RemoteIssueLinkIdentifies createOrUpdateRemoteIssueLink(issueIdOrKey, remoteIssueLinkRequest)

Create or update remote issue link

Creates or updates a remote issue link for an issue.  If a &#x60;globalId&#x60; is provided and a remote issue link with that global ID is found it is updated. Any fields without values in the request are set to null. Otherwise, the remote issue link is created.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueRemoteLinksApi,
} from 'jira-cloud-api';
import type { CreateOrUpdateRemoteIssueLinkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueRemoteLinksApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // RemoteIssueLinkRequest
    remoteIssueLinkRequest: {"application":{"name":"My Acme Tracker","type":"com.acme.tracker"},"globalId":"system=http://www.mycompany.com/support&id=1","object":{"icon":{"title":"Support Ticket","url16x16":"http://www.mycompany.com/support/ticket.png"},"status":{"icon":{"link":"http://www.mycompany.com/support?id=1&details=closed","title":"Case Closed","url16x16":"http://www.mycompany.com/support/resolved.png"},"resolved":true},"summary":"Customer support issue","title":"TSTSUP-111","url":"http://www.mycompany.com/support?id=1"},"relationship":"causes"},
  } satisfies CreateOrUpdateRemoteIssueLinkRequest;

  try {
    const data = await api.createOrUpdateRemoteIssueLink(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **remoteIssueLinkRequest** | [RemoteIssueLinkRequest](RemoteIssueLinkRequest.md) |  | |

### Return type

[**RemoteIssueLinkIdentifies**](RemoteIssueLinkIdentifies.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the remote issue link is updated. |  -  |
| **201** | Returned if the remote issue link is created. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to link issues. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRemoteIssueLinkByGlobalId

> deleteRemoteIssueLinkByGlobalId(issueIdOrKey, globalId)

Delete remote issue link by global ID

Deletes the remote issue link from the issue using the link\&#39;s global ID. Where the global ID includes reserved URL characters these must be escaped in the request. For example, pass &#x60;system&#x3D;http://www.mycompany.com/support&amp;id&#x3D;1&#x60; as &#x60;system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1&#x60;.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is implemented, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueRemoteLinksApi,
} from 'jira-cloud-api';
import type { DeleteRemoteIssueLinkByGlobalIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueRemoteLinksApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: 10000,
    // string | The global ID of a remote issue link.
    globalId: system=http://www.mycompany.com/support&id=1,
  } satisfies DeleteRemoteIssueLinkByGlobalIdRequest;

  try {
    const data = await api.deleteRemoteIssueLinkByGlobalId(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **globalId** | `string` | The global ID of a remote issue link. | [Defaults to `undefined`] |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if a global ID isn\&#39;t provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to link issues. |  -  |
| **404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteRemoteIssueLinkById

> deleteRemoteIssueLinkById(issueIdOrKey, linkId)

Delete remote issue link by ID

Deletes a remote issue link from an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects*, *Edit issues*, and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueRemoteLinksApi,
} from 'jira-cloud-api';
import type { DeleteRemoteIssueLinkByIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueRemoteLinksApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: 10000,
    // string | The ID of a remote issue link.
    linkId: 10000,
  } satisfies DeleteRemoteIssueLinkByIdRequest;

  try {
    const data = await api.deleteRemoteIssueLinkById(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **linkId** | `string` | The ID of a remote issue link. | [Defaults to `undefined`] |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if the link ID is invalid or the remote issue link does not belong to the issue. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to link issues. |  -  |
| **404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRemoteIssueLinkById

> RemoteIssueLink getRemoteIssueLinkById(issueIdOrKey, linkId)

Get remote issue link by ID

Returns a remote issue link for an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueRemoteLinksApi,
} from 'jira-cloud-api';
import type { GetRemoteIssueLinkByIdRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueRemoteLinksApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the remote issue link.
    linkId: linkId_example,
  } satisfies GetRemoteIssueLinkByIdRequest;

  try {
    const data = await api.getRemoteIssueLinkById(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **linkId** | `string` | The ID of the remote issue link. | [Defaults to `undefined`] |

### Return type

[**RemoteIssueLink**](RemoteIssueLink.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the link ID is invalid or the remote issue link does not belong to the issue. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if issue linking is disabled. |  -  |
| **404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRemoteIssueLinks

> GetRemoteIssueLinks200Response getRemoteIssueLinks(issueIdOrKey, globalId)

Get remote issue links

Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned. Where a global ID includes reserved URL characters these must be escaped in the request. For example, pass &#x60;system&#x3D;http://www.mycompany.com/support&amp;id&#x3D;1&#x60; as &#x60;system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1&#x60;.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueRemoteLinksApi,
} from 'jira-cloud-api';
import type { GetRemoteIssueLinksRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueRemoteLinksApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: 10000,
    // string | The global ID of the remote issue link. (optional)
    globalId: globalId_example,
  } satisfies GetRemoteIssueLinksRequest;

  try {
    const data = await api.getRemoteIssueLinks(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **globalId** | `string` | The global ID of the remote issue link. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRemoteIssueLinks200Response**](GetRemoteIssueLinks200Response.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. A single RemoteIssueLink will be returned when specifying &#x60;globalId&#x60;, otherwise an array of RemoteIssueLink is returned. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if issue linking is disabled. |  -  |
| **404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |
| **413** | Returned if the per-issue limit for remote links has been breached. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRemoteIssueLink

> any updateRemoteIssueLink(issueIdOrKey, linkId, remoteIssueLinkRequest)

Update remote issue link by ID

Updates a remote issue link for an issue.  Note: Fields without values in the request are set to null.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueRemoteLinksApi,
} from 'jira-cloud-api';
import type { UpdateRemoteIssueLinkRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueRemoteLinksApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: 10000,
    // string | The ID of the remote issue link.
    linkId: 10000,
    // RemoteIssueLinkRequest
    remoteIssueLinkRequest: {"application":{"name":"My Acme Tracker","type":"com.acme.tracker"},"globalId":"system=http://www.mycompany.com/support&id=1","object":{"icon":{"title":"Support Ticket","url16x16":"http://www.mycompany.com/support/ticket.png"},"status":{"icon":{"link":"http://www.mycompany.com/support?id=1&details=closed","title":"Case Closed","url16x16":"http://www.mycompany.com/support/resolved.png"},"resolved":true},"summary":"Customer support issue","title":"TSTSUP-111","url":"http://www.mycompany.com/support?id=1"},"relationship":"causes"},
  } satisfies UpdateRemoteIssueLinkRequest;

  try {
    const data = await api.updateRemoteIssueLink(body);
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
| **issueIdOrKey** | `string` | The ID or key of the issue. | [Defaults to `undefined`] |
| **linkId** | `string` | The ID of the remote issue link. | [Defaults to `undefined`] |
| **remoteIssueLinkRequest** | [RemoteIssueLinkRequest](RemoteIssueLinkRequest.md) |  | |

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
| **204** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  the link ID is invalid.  *  the remote issue link does not belong to the issue.  *  the request body is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have permission to link issues. |  -  |
| **404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

