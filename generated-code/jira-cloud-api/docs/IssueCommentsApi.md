# IssueCommentsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addComment**](IssueCommentsApi.md#addcomment) | **POST** /rest/api/3/issue/{issueIdOrKey}/comment | Add comment |
| [**deleteComment**](IssueCommentsApi.md#deletecomment) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/comment/{id} | Delete comment |
| [**getComment**](IssueCommentsApi.md#getcomment) | **GET** /rest/api/3/issue/{issueIdOrKey}/comment/{id} | Get comment |
| [**getComments**](IssueCommentsApi.md#getcomments) | **GET** /rest/api/3/issue/{issueIdOrKey}/comment | Get comments |
| [**getCommentsByIds**](IssueCommentsApi.md#getcommentsbyids) | **POST** /rest/api/3/comment/list | Get comments by IDs |
| [**updateComment**](IssueCommentsApi.md#updatecomment) | **PUT** /rest/api/3/issue/{issueIdOrKey}/comment/{id} | Update comment |



## addComment

> Comment addComment(issueIdOrKey, comment, expand)

Add comment

Adds a comment to an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueCommentsApi,
} from 'jira-cloud-api';
import type { AddCommentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // Comment
    comment: {"body":{"content":[{"content":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit. Duis eu justo eget augue iaculis fermentum. Sed semper quam laoreet nisi egestas at posuere augue semper.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"visibility":{"identifier":"Administrators","type":"role","value":"Administrators"}},
    // string | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. (optional)
    expand: expand_example,
  } satisfies AddCommentRequest;

  try {
    const data = await api.addComment(body);
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
| **comment** | [Comment](Comment.md) |  | |
| **expand** | `string` | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML. | [Optional] [Defaults to `undefined`] |

### Return type

[**Comment**](Comment.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |
| **413** | Returned if the per-issue limit has been breached for one of the following fields:   *  comments  *  attachments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteComment

> deleteComment(issueIdOrKey, id)

Delete comment

Deletes a comment.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or *Delete own comments* to delete comment created by the user,  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueCommentsApi,
} from 'jira-cloud-api';
import type { DeleteCommentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the comment.
    id: id_example,
  } satisfies DeleteCommentRequest;

  try {
    const data = await api.deleteComment(body);
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
| **id** | `string` | The ID of the comment. | [Defaults to `undefined`] |

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
| **400** | Returned if the user does not have permission to delete the comment. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the issue or comment is not found or the user does not have permission to view the issue or comment. |  -  |
| **405** | Returned if an anonymous call is made to the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComment

> Comment getComment(issueIdOrKey, id, expand)

Get comment

Returns a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueCommentsApi,
} from 'jira-cloud-api';
import type { GetCommentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the comment.
    id: id_example,
    // string | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. (optional)
    expand: expand_example,
  } satisfies GetCommentRequest;

  try {
    const data = await api.getComment(body);
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
| **id** | `string` | The ID of the comment. | [Defaults to `undefined`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML. | [Optional] [Defaults to `undefined`] |

### Return type

[**Comment**](Comment.md)

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
| **404** | Returned if the issue or comment is not found or the user does not have permission to view the issue or comment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getComments

> PageOfComments getComments(issueIdOrKey, startAt, maxResults, orderBy, expand)

Get comments

Returns all comments for an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Comments are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueCommentsApi,
} from 'jira-cloud-api';
import type { GetCommentsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // 'created' | '-created' | '+created' | [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date. (optional)
    orderBy: orderBy_example,
    // string | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. (optional)
    expand: expand_example,
  } satisfies GetCommentsRequest;

  try {
    const data = await api.getComments(body);
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
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |
| **orderBy** | `created`, `-created`, `+created` | [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date. | [Optional] [Defaults to `undefined`] [Enum: created, -created, +created] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageOfComments**](PageOfComments.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if &#x60;orderBy&#x60; is set to a value other than *created*. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCommentsByIds

> PageBeanComment getCommentsByIds(issueCommentListRequestBean, expand)

Get comments by IDs

Returns a [paginated](#pagination) list of comments specified by a list of comment IDs.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Comments are returned where the user:   *  has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

```ts
import {
  Configuration,
  IssueCommentsApi,
} from 'jira-cloud-api';
import type { GetCommentsByIdsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentsApi(config);

  const body = {
    // IssueCommentListRequestBean | The list of comment IDs.
    issueCommentListRequestBean: {"ids":[1,2,5,10]},
    // string | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedBody` Returns the comment body rendered in HTML.  *  `properties` Returns the comment\'s properties. (optional)
    expand: expand_example,
  } satisfies GetCommentsByIdsRequest;

  try {
    const data = await api.getCommentsByIds(body);
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
| **issueCommentListRequestBean** | [IssueCommentListRequestBean](IssueCommentListRequestBean.md) | The list of comment IDs. | |
| **expand** | `string` | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;renderedBody&#x60; Returns the comment body rendered in HTML.  *  &#x60;properties&#x60; Returns the comment\&#39;s properties. | [Optional] [Defaults to `undefined`] |

### Return type

[**PageBeanComment**](PageBeanComment.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request contains more than 1000 IDs or is empty. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateComment

> Comment updateComment(issueIdOrKey, id, comment, notifyUsers, overrideEditableFlag, expand)

Update comment

Updates a comment.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit own comments* to update comment created by the user.  *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.  **WARNING:** Child comments inherit visibility from their parent comment. Attempting to update a child comment\&#39;s visibility will result in a 400 (Bad Request) error.

### Example

```ts
import {
  Configuration,
  IssueCommentsApi,
} from 'jira-cloud-api';
import type { UpdateCommentRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueCommentsApi(config);

  const body = {
    // string | The ID or key of the issue.
    issueIdOrKey: issueIdOrKey_example,
    // string | The ID of the comment.
    id: id_example,
    // Comment
    comment: {"body":{"content":[{"content":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit. Duis eu justo eget augue iaculis fermentum. Sed semper quam laoreet nisi egestas at posuere augue semper.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"visibility":{"identifier":"Administrators","type":"role","value":"Administrators"}},
    // boolean | Whether users are notified when a comment is updated. (optional)
    notifyUsers: true,
    // boolean | Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (optional)
    overrideEditableFlag: true,
    // string | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML. (optional)
    expand: expand_example,
  } satisfies UpdateCommentRequest;

  try {
    const data = await api.updateComment(body);
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
| **id** | `string` | The ID of the comment. | [Defaults to `undefined`] |
| **comment** | [Comment](Comment.md) |  | |
| **notifyUsers** | `boolean` | Whether users are notified when a comment is updated. | [Optional] [Defaults to `true`] |
| **overrideEditableFlag** | `boolean` | Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [Optional] [Defaults to `false`] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML. | [Optional] [Defaults to `undefined`] |

### Return type

[**Comment**](Comment.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the user does not have permission to edit the comment or the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the issue or comment is not found or the user does not have permission to view the issue or comment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

