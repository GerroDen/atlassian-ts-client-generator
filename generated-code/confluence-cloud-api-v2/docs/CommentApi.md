# CommentApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFooterComment**](CommentApi.md#createfootercomment) | **POST** /footer-comments | Create footer comment |
| [**createInlineComment**](CommentApi.md#createinlinecomment) | **POST** /inline-comments | Create inline comment |
| [**deleteFooterComment**](CommentApi.md#deletefootercomment) | **DELETE** /footer-comments/{comment-id} | Delete footer comment |
| [**deleteInlineComment**](CommentApi.md#deleteinlinecomment) | **DELETE** /inline-comments/{comment-id} | Delete inline comment |
| [**getAttachmentComments**](CommentApi.md#getattachmentcomments) | **GET** /attachments/{id}/footer-comments | Get attachment comments |
| [**getBlogPostFooterComments**](CommentApi.md#getblogpostfootercomments) | **GET** /blogposts/{id}/footer-comments | Get footer comments for blog post |
| [**getBlogPostInlineComments**](CommentApi.md#getblogpostinlinecomments) | **GET** /blogposts/{id}/inline-comments | Get inline comments for blog post |
| [**getCustomContentComments**](CommentApi.md#getcustomcontentcomments) | **GET** /custom-content/{id}/footer-comments | Get custom content comments |
| [**getFooterCommentById**](CommentApi.md#getfootercommentbyid) | **GET** /footer-comments/{comment-id} | Get footer comment by id |
| [**getFooterCommentChildren**](CommentApi.md#getfootercommentchildren) | **GET** /footer-comments/{id}/children | Get children footer comments |
| [**getFooterComments**](CommentApi.md#getfootercomments) | **GET** /footer-comments | Get footer comments |
| [**getInlineCommentById**](CommentApi.md#getinlinecommentbyid) | **GET** /inline-comments/{comment-id} | Get inline comment by id |
| [**getInlineCommentChildren**](CommentApi.md#getinlinecommentchildren) | **GET** /inline-comments/{id}/children | Get children inline comments |
| [**getInlineComments**](CommentApi.md#getinlinecomments) | **GET** /inline-comments | Get inline comments |
| [**getPageFooterComments**](CommentApi.md#getpagefootercomments) | **GET** /pages/{id}/footer-comments | Get footer comments for page |
| [**getPageInlineComments**](CommentApi.md#getpageinlinecomments) | **GET** /pages/{id}/inline-comments | Get inline comments for page |
| [**updateFooterComment**](CommentApi.md#updatefootercommentoperation) | **PUT** /footer-comments/{comment-id} | Update footer comment |
| [**updateInlineComment**](CommentApi.md#updateinlinecomment) | **PUT** /inline-comments/{comment-id} | Update inline comment |



## createFooterComment

> CreateFooterComment201Response createFooterComment(createFooterCommentModel)

Create footer comment

Create a footer comment.  The footer comment can be made against several locations:  - at the top level (specifying pageId or blogPostId in the request body) - as a reply (specifying parentCommentId in the request body) - against an attachment (note: this is different than the comments added via the attachment properties page on the UI, which are referred to as version comments) - against a custom content  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { CreateFooterCommentRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // CreateFooterCommentModel | The footer comment to be created
    createFooterCommentModel: ...,
  } satisfies CreateFooterCommentRequest;

  try {
    const data = await api.createFooterComment(body);
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
| **createFooterCommentModel** | [CreateFooterCommentModel](CreateFooterCommentModel.md) | The footer comment to be created | |

### Return type

[**CreateFooterComment201Response**](CreateFooterComment201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the footer comment is created. |  * location - Returns the URL at which the created footer comment is retrievable.  <br>  |
| **400** | Returned if an invalid request is provided |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The page, blog post, parent comment, or attachment was not found - The calling user does not have permission to view the parent page/blog post - The user is forbidden from creating a comment tied to a resource they are allowed to view |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createInlineComment

> CreateInlineComment201Response createInlineComment(createInlineCommentModel)

Create inline comment

Create an inline comment. This can be at the top level (specifying pageId or blogPostId in the request body) or as a reply (specifying parentCommentId in the request body). Note the inlineCommentProperties object in the request body is used to select the text the inline comment should be tied to. This is what determines the text  highlighting when viewing a page in Confluence.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { CreateInlineCommentRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // CreateInlineCommentModel | The inline comment to be created
    createInlineCommentModel: ...,
  } satisfies CreateInlineCommentRequest;

  try {
    const data = await api.createInlineComment(body);
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
| **createInlineCommentModel** | [CreateInlineCommentModel](CreateInlineCommentModel.md) | The inline comment to be created | |

### Return type

[**CreateInlineComment201Response**](CreateInlineComment201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the inline comment is created. |  * location - Returns the URL at which the created inline comment is retrievable.  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The page/blog post was not found - The calling user does not have permission to view the parent page/blog post - The user is forbidden from creating a comment tied to a resource they are allowed to view |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFooterComment

> deleteFooterComment(commentId)

Delete footer comment

Deletes a footer comment. This is a permanent deletion and cannot be reverted.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to delete comments in the space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { DeleteFooterCommentRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the comment to be retrieved.
    commentId: 789,
  } satisfies DeleteFooterCommentRequest;

  try {
    const data = await api.deleteFooterComment(body);
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
| **commentId** | `number` | The ID of the comment to be retrieved. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the footer comment is deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The comment was not found - The calling user does not have permission to view the comment - The user is forbidden from deleting a comment tied to a resource they are allowed to view |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteInlineComment

> deleteInlineComment(commentId)

Delete inline comment

Deletes an inline comment. This is a permanent deletion and cannot be reverted.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to delete comments in the space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { DeleteInlineCommentRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the comment to be deleted.
    commentId: 789,
  } satisfies DeleteInlineCommentRequest;

  try {
    const data = await api.deleteInlineComment(body);
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
| **commentId** | `number` | The ID of the comment to be deleted. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Returned if the inline comment is deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The comment was not found - The calling user does not have permission to view the comment - The user is forbidden from deleting a comment tied to a resource they are allowed to view |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentComments

> MultiEntityResultAttachmentCommentModel getAttachmentComments(id, bodyFormat, cursor, limit, sort, version)

Get attachment comments

Returns the comments of the specific attachment. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the attachment and its corresponding containers.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetAttachmentCommentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // string | The ID of the attachment for which comments should be returned.
    id: id_example,
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // number | Version number of the attachment to retrieve comments for. If no version provided, retrieves comments for the latest version. (optional)
    version: 789,
  } satisfies GetAttachmentCommentsRequest;

  try {
    const data = await api.getAttachmentComments(body);
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
| **id** | `string` | The ID of the attachment for which comments should be returned. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **version** | `number` | Version number of the attachment to retrieve comments for. If no version provided, retrieves comments for the latest version. | [Optional] [Defaults to `undefined`] |

### Return type

[**MultiEntityResultAttachmentCommentModel**](MultiEntityResultAttachmentCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the attachment comments were successfully retrieved |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/attachments/&lt;id&gt;/comments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the attachment or associated containers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPostFooterComments

> MultiEntityResultBlogPostCommentModel getBlogPostFooterComments(id, bodyFormat, status, sort, cursor, limit)

Get footer comments for blog post

Returns the root footer comments of specific blog post. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostFooterCommentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the blog post for which footer comments should be returned.
    id: 789,
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // Array<'current' | 'deleted' | 'trashed' | 'historical' | 'draft'> | Filter the footer comment being retrieved by its status. (optional)
    status: ...,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of footer comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetBlogPostFooterCommentsRequest;

  try {
    const data = await api.getBlogPostFooterComments(body);
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
| **id** | `number` | The ID of the blog post for which footer comments should be returned. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **status** | `current`, `deleted`, `trashed`, `historical`, `draft` | Filter the footer comment being retrieved by its status. | [Optional] [Enum: current, deleted, trashed, historical, draft] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of footer comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultBlogPostCommentModel**](MultiEntityResultBlogPostCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested footer comments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/blogposts/&lt;id&gt;/footer-comments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPostInlineComments

> MultiEntityResultBlogPostInlineCommentModel getBlogPostInlineComments(id, bodyFormat, status, resolutionStatus, sort, cursor, limit)

Get inline comments for blog post

Returns the root inline comments of specific blog post. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostInlineCommentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the blog post for which inline comments should be returned.
    id: 789,
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // Array<'current' | 'deleted' | 'trashed' | 'historical' | 'draft'> | Filter the inline comment being retrieved by its status. (optional)
    status: ...,
    // Array<'resolved' | 'open' | 'dangling' | 'reopened'> | Filter the inline comment being retrieved by its resolution status. (optional)
    resolutionStatus: ...,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of inline comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetBlogPostInlineCommentsRequest;

  try {
    const data = await api.getBlogPostInlineComments(body);
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
| **id** | `number` | The ID of the blog post for which inline comments should be returned. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **status** | `current`, `deleted`, `trashed`, `historical`, `draft` | Filter the inline comment being retrieved by its status. | [Optional] [Enum: current, deleted, trashed, historical, draft] |
| **resolutionStatus** | `resolved`, `open`, `dangling`, `reopened` | Filter the inline comment being retrieved by its resolution status. | [Optional] [Enum: resolved, open, dangling, reopened] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of inline comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultBlogPostInlineCommentModel**](MultiEntityResultBlogPostInlineCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested inline comments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/blogposts/&lt;id&gt;/inline-comments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentComments

> MultiEntityResultCustomContentCommentModel getCustomContentComments(id, bodyFormat, cursor, limit, sort)

Get custom content comments

Returns the comments of the specific custom content. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content and its corresponding containers.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentCommentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the custom content for which comments should be returned.
    id: 789,
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetCustomContentCommentsRequest;

  try {
    const data = await api.getCustomContentComments(body);
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
| **id** | `number` | The ID of the custom content for which comments should be returned. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |

### Return type

[**MultiEntityResultCustomContentCommentModel**](MultiEntityResultCustomContentCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the custom content comments were successfully retrieved |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/custom-content/&lt;id&gt;/footer-comments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the custom content or associated containers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFooterCommentById

> CreateFooterComment201Response getFooterCommentById(commentId, bodyFormat, version, includeProperties, includeOperations, includeLikes, includeVersions, includeVersion)

Get footer comment by id

Retrieves a footer comment by id  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the container and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetFooterCommentByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the comment to be retrieved.
    commentId: 789,
    // PrimaryBodyRepresentationSingle | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // number | Allows you to retrieve a previously published version. Specify the previous version\'s number to retrieve its details. (optional)
    version: 56,
    // boolean | Includes content properties associated with this footer comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
    // boolean | Includes operations associated with this footer comment in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes likes associated with this footer comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLikes: true,
    // boolean | Includes versions associated with this footer comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeVersions: true,
    // boolean | Includes the current version associated with this footer comment in the response. By default this is included and can be omitted by setting the value to `false`. (optional)
    includeVersion: true,
  } satisfies GetFooterCommentByIdRequest;

  try {
    const data = await api.getFooterCommentById(body);
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
| **commentId** | `number` | The ID of the comment to be retrieved. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentationSingle` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format, view, export_view, anonymous_export_view, styled_view, editor] |
| **version** | `number` | Allows you to retrieve a previously published version. Specify the previous version\&#39;s number to retrieve its details. | [Optional] [Defaults to `undefined`] |
| **includeProperties** | `boolean` | Includes content properties associated with this footer comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this footer comment in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeLikes** | `boolean` | Includes likes associated with this footer comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersions** | `boolean` | Includes versions associated with this footer comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersion** | `boolean` | Includes the current version associated with this footer comment in the response. By default this is included and can be omitted by setting the value to &#x60;false&#x60;. | [Optional] [Defaults to `true`] |

### Return type

[**CreateFooterComment201Response**](CreateFooterComment201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the footer comment is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the comment or the comment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFooterCommentChildren

> MultiEntityResultChildrenCommentModel getFooterCommentChildren(id, bodyFormat, sort, cursor, limit)

Get children footer comments

Returns the children footer comments of specific comment. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetFooterCommentChildrenRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the parent comment for which footer comment children should be returned.
    id: 789,
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of footer comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetFooterCommentChildrenRequest;

  try {
    const data = await api.getFooterCommentChildren(body);
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
| **id** | `number` | The ID of the parent comment for which footer comment children should be returned. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of footer comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultChildrenCommentModel**](MultiEntityResultChildrenCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested footer comments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/footer-comments/&lt;id&gt;/children?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the parent page/blog post or the page/blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFooterComments

> MultiEntityResultFooterCommentModel getFooterComments(bodyFormat, sort, cursor, limit)

Get footer comments

Returns all footer comments. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the container and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetFooterCommentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of footer comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetFooterCommentsRequest;

  try {
    const data = await api.getFooterComments(body);
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
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of footer comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultFooterCommentModel**](MultiEntityResultFooterCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested footer comments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/footer-comments/&lt;id&gt;/children?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInlineCommentById

> CreateInlineComment201Response getInlineCommentById(commentId, bodyFormat, version, includeProperties, includeOperations, includeLikes, includeVersions, includeVersion)

Get inline comment by id

Retrieves an inline comment by id  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetInlineCommentByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the comment to be retrieved.
    commentId: 789,
    // PrimaryBodyRepresentationSingle | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // number | Allows you to retrieve a previously published version. Specify the previous version\'s number to retrieve its details. (optional)
    version: 56,
    // boolean | Includes content properties associated with this inline comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
    // boolean | Includes operations associated with this inline comment in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes likes associated with this inline comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLikes: true,
    // boolean | Includes versions associated with this inline comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeVersions: true,
    // boolean | Includes the current version associated with this inline comment in the response. By default this is included and can be omitted by setting the value to `false`. (optional)
    includeVersion: true,
  } satisfies GetInlineCommentByIdRequest;

  try {
    const data = await api.getInlineCommentById(body);
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
| **commentId** | `number` | The ID of the comment to be retrieved. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentationSingle` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format, view, export_view, anonymous_export_view, styled_view, editor] |
| **version** | `number` | Allows you to retrieve a previously published version. Specify the previous version\&#39;s number to retrieve its details. | [Optional] [Defaults to `undefined`] |
| **includeProperties** | `boolean` | Includes content properties associated with this inline comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this inline comment in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeLikes** | `boolean` | Includes likes associated with this inline comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersions** | `boolean` | Includes versions associated with this inline comment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersion** | `boolean` | Includes the current version associated with this inline comment in the response. By default this is included and can be omitted by setting the value to &#x60;false&#x60;. | [Optional] [Defaults to `true`] |

### Return type

[**CreateInlineComment201Response**](CreateInlineComment201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the inline comment is successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the comment or the comment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInlineCommentChildren

> MultiEntityResultInlineCommentChildrenModel getInlineCommentChildren(id, bodyFormat, sort, cursor, limit)

Get children inline comments

Returns the children inline comments of specific comment. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetInlineCommentChildrenRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the parent comment for which inline comment children should be returned.
    id: 789,
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of footer comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetInlineCommentChildrenRequest;

  try {
    const data = await api.getInlineCommentChildren(body);
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
| **id** | `number` | The ID of the parent comment for which inline comment children should be returned. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of footer comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultInlineCommentChildrenModel**](MultiEntityResultInlineCommentChildrenModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested footer comments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/inline-comments/&lt;id&gt;/children?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the parent page/blog post or the page/blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInlineComments

> MultiEntityResultInlineCommentModel getInlineComments(bodyFormat, sort, cursor, limit)

Get inline comments

Returns all inline comments. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetInlineCommentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of footer comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetInlineCommentsRequest;

  try {
    const data = await api.getInlineComments(body);
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
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of footer comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultInlineCommentModel**](MultiEntityResultInlineCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested inline comments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/inline-comments/&lt;id&gt;/children?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageFooterComments

> MultiEntityResultPageCommentModel getPageFooterComments(id, bodyFormat, status, sort, cursor, limit)

Get footer comments for page

Returns the root footer comments of specific page. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetPageFooterCommentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the page for which footer comments should be returned.
    id: 789,
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // Array<'current' | 'archived' | 'trashed' | 'deleted' | 'historical' | 'draft'> | Filter the footer comment being retrieved by its status. (optional)
    status: ...,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of footer comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetPageFooterCommentsRequest;

  try {
    const data = await api.getPageFooterComments(body);
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
| **id** | `number` | The ID of the page for which footer comments should be returned. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **status** | `current`, `archived`, `trashed`, `deleted`, `historical`, `draft` | Filter the footer comment being retrieved by its status. | [Optional] [Enum: current, archived, trashed, deleted, historical, draft] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of footer comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultPageCommentModel**](MultiEntityResultPageCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested footer comments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/pages/&lt;id&gt;/footer-comments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageInlineComments

> MultiEntityResultPageInlineCommentModel getPageInlineComments(id, bodyFormat, status, resolutionStatus, sort, cursor, limit)

Get inline comments for page

Returns the root inline comments of specific page. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { GetPageInlineCommentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the page for which inline comments should be returned.
    id: 789,
    // PrimaryBodyRepresentation | The content format type to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // Array<'current' | 'archived' | 'trashed' | 'deleted' | 'historical' | 'draft'> | Filter the inline comment being retrieved by its status. (optional)
    status: ...,
    // Array<'resolved' | 'open' | 'dangling' | 'reopened'> | Filter the inline comment being retrieved by its resolution status. (optional)
    resolutionStatus: ...,
    // CommentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of inline comments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetPageInlineCommentsRequest;

  try {
    const data = await api.getPageInlineComments(body);
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
| **id** | `number` | The ID of the page for which inline comments should be returned. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format type to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **status** | `current`, `archived`, `trashed`, `deleted`, `historical`, `draft` | Filter the inline comment being retrieved by its status. | [Optional] [Enum: current, archived, trashed, deleted, historical, draft] |
| **resolutionStatus** | `resolved`, `open`, `dangling`, `reopened` | Filter the inline comment being retrieved by its resolution status. | [Optional] [Enum: resolved, open, dangling, reopened] |
| **sort** | `CommentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of inline comments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultPageInlineCommentModel**](MultiEntityResultPageInlineCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested inline comments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/pages/&lt;id&gt;/inline-comments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFooterComment

> FooterCommentModel updateFooterComment(commentId, updateFooterCommentRequest)

Update footer comment

Update a footer comment. This can be used to update the body text of a comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { UpdateFooterCommentOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the comment to be retrieved.
    commentId: 789,
    // UpdateFooterCommentRequest | The footer comment to be created
    updateFooterCommentRequest: ...,
  } satisfies UpdateFooterCommentOperationRequest;

  try {
    const data = await api.updateFooterComment(body);
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
| **commentId** | `number` | The ID of the comment to be retrieved. | [Defaults to `undefined`] |
| **updateFooterCommentRequest** | [UpdateFooterCommentRequest](UpdateFooterCommentRequest.md) | The footer comment to be created | |

### Return type

[**FooterCommentModel**](FooterCommentModel.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the footer comment is updated successfully |  -  |
| **400** | Returned if an invalid request is provided |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The comment was not found - The calling user does not have permission to view the comment - The user is forbidden from updating a comment tied to a resource they are allowed to view |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateInlineComment

> CreateInlineComment201Response updateInlineComment(commentId, updateInlineCommentModel)

Update inline comment

Update an inline comment. This can be used to update the body text of a comment and/or to resolve the comment  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.

### Example

```ts
import {
  Configuration,
  CommentApi,
} from 'confluence-cloud-api-v2';
import type { UpdateInlineCommentRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CommentApi(config);

  const body = {
    // number | The ID of the comment to be retrieved.
    commentId: 789,
    // UpdateInlineCommentModel | The inline comment to be updated
    updateInlineCommentModel: ...,
  } satisfies UpdateInlineCommentRequest;

  try {
    const data = await api.updateInlineComment(body);
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
| **commentId** | `number` | The ID of the comment to be retrieved. | [Defaults to `undefined`] |
| **updateInlineCommentModel** | [UpdateInlineCommentModel](UpdateInlineCommentModel.md) | The inline comment to be updated | |

### Return type

[**CreateInlineComment201Response**](CreateInlineComment201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the inline comment is updated successfully. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The comment was not found - The calling user does not have permission to view the comment - The user is forbidden from updating a comment tied to a resource they are allowed to view |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

