# BlogPostApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBlogPost**](BlogPostApi.md#createblogpostoperation) | **POST** /blogposts | Create blog post |
| [**deleteBlogPost**](BlogPostApi.md#deleteblogpost) | **DELETE** /blogposts/{id} | Delete blog post |
| [**getBlogPostById**](BlogPostApi.md#getblogpostbyid) | **GET** /blogposts/{id} | Get blog post by id |
| [**getBlogPosts**](BlogPostApi.md#getblogposts) | **GET** /blogposts | Get blog posts |
| [**getBlogPostsInSpace**](BlogPostApi.md#getblogpostsinspace) | **GET** /spaces/{id}/blogposts | Get blog posts in space |
| [**getLabelBlogPosts**](BlogPostApi.md#getlabelblogposts) | **GET** /labels/{id}/blogposts | Get blog posts for label |
| [**updateBlogPost**](BlogPostApi.md#updateblogpostoperation) | **PUT** /blogposts/{id} | Update blog post |



## createBlogPost

> CreateBlogPost200Response createBlogPost(createBlogPostRequest, _private)

Create blog post

Creates a new blog post in the space specified by the spaceId.  By default this will create the blog post as a non-draft, unless the status is specified as draft. If creating a non-draft, the title must not be empty.  Currently only supports the storage representation specified in the body.representation enums below

### Example

```ts
import {
  Configuration,
  BlogPostApi,
} from 'confluence-cloud-api-v2';
import type { CreateBlogPostOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BlogPostApi(config);

  const body = {
    // CreateBlogPostRequest
    createBlogPostRequest: ...,
    // boolean | The blog post will be private. Only the user who creates this blog post will have permission to view and edit one. (optional)
    _private: true,
  } satisfies CreateBlogPostOperationRequest;

  try {
    const data = await api.createBlogPost(body);
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
| **createBlogPostRequest** | [CreateBlogPostRequest](CreateBlogPostRequest.md) |  | |
| **_private** | `boolean` | The blog post will be private. Only the user who creates this blog post will have permission to view and edit one. | [Optional] [Defaults to `false`] |

### Return type

[**CreateBlogPost200Response**](CreateBlogPost200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the blog post was created successfully. |  -  |
| **400** | Returned if invalid values were passed in for any of the enums, a REQUIRED parameter was missing, or if the given title is a duplicate in the space |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request |  -  |
| **404** | Returned if: - The provided space does not exist - The user does not have permissions to view the space - The user does not have the needed permissions to create a blog post in the provided space |  -  |
| **413** | Returned if the request is too large in size (over 5 MB) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBlogPost

> deleteBlogPost(id, purge, draft)

Delete blog post

Delete a blog post by id.  By default this will delete blog posts that are non-drafts. To delete a blog post that is a draft, the endpoint must be called on a  draft with the following param &#x60;draft&#x3D;true&#x60;. Discarded drafts are not sent to the trash and are permanently deleted.  Deleting a blog post that is not a draft moves the blog post to the trash, where it can be restored later. To permanently delete a blog post (or \&quot;purge\&quot; it), the endpoint must be called on a **trashed** blog post with the following param &#x60;purge&#x3D;true&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the blog post and its corresponding space. Permission to delete blog posts in the space. Permission to administer the space (if attempting to purge).

### Example

```ts
import {
  Configuration,
  BlogPostApi,
} from 'confluence-cloud-api-v2';
import type { DeleteBlogPostRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BlogPostApi(config);

  const body = {
    // number | The ID of the blog post to be deleted.
    id: 789,
    // boolean | If attempting to purge the blog post. (optional)
    purge: true,
    // boolean | If attempting to delete a blog post that is a draft. (optional)
    draft: true,
  } satisfies DeleteBlogPostRequest;

  try {
    const data = await api.deleteBlogPost(body);
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
| **id** | `number` | The ID of the blog post to be deleted. | [Defaults to `undefined`] |
| **purge** | `boolean` | If attempting to purge the blog post. | [Optional] [Defaults to `false`] |
| **draft** | `boolean` | If attempting to delete a blog post that is a draft. | [Optional] [Defaults to `false`] |

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
| **204** | Returned if the blog post was successfully deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided blog post does not exist - The user does not have permissions to view the blog post - The user does not have the needed permissions to delete a blog post in the space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPostById

> CreateBlogPost200Response getBlogPostById(id, bodyFormat, getDraft, status, version, includeLabels, includeProperties, includeOperations, includeLikes, includeVersions, includeVersion, includeFavoritedByCurrentUserStatus, includeWebresources, includeCollaborators)

Get blog post by id

Returns a specific blog post.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  BlogPostApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BlogPostApi(config);

  const body = {
    // number | The ID of the blog post to be returned. If you don\'t know the blog post ID, use Get blog posts and filter the results.
    id: 789,
    // PrimaryBodyRepresentationSingle | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // boolean | Retrieve the draft version of this blog post. (optional)
    getDraft: true,
    // Array<'current' | 'trashed' | 'deleted' | 'historical' | 'draft'> | Filter the blog post being retrieved by its status. (optional)
    status: ...,
    // number | Allows you to retrieve a previously published version. Specify the previous version\'s number to retrieve its details. (optional)
    version: 56,
    // boolean | Includes labels associated with this blog post in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLabels: true,
    // boolean | Includes content properties associated with this blog post in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
    // boolean | Includes operations associated with this blog post in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes likes associated with this blog post in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLikes: true,
    // boolean | Includes versions associated with this blog post in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeVersions: true,
    // boolean | Includes the current version associated with this blog post in the response. By default this is included and can be omitted by setting the value to `false`. (optional)
    includeVersion: true,
    // boolean | Includes whether this blog post has been favorited by the current user. (optional)
    includeFavoritedByCurrentUserStatus: true,
    // boolean | Includes web resources that can be used to render blog post content on a client. (optional)
    includeWebresources: true,
    // boolean | Includes collaborators on the blog post. (optional)
    includeCollaborators: true,
  } satisfies GetBlogPostByIdRequest;

  try {
    const data = await api.getBlogPostById(body);
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
| **id** | `number` | The ID of the blog post to be returned. If you don\&#39;t know the blog post ID, use Get blog posts and filter the results. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentationSingle` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format, view, export_view, anonymous_export_view, styled_view, editor] |
| **getDraft** | `boolean` | Retrieve the draft version of this blog post. | [Optional] [Defaults to `false`] |
| **status** | `current`, `trashed`, `deleted`, `historical`, `draft` | Filter the blog post being retrieved by its status. | [Optional] [Enum: current, trashed, deleted, historical, draft] |
| **version** | `number` | Allows you to retrieve a previously published version. Specify the previous version\&#39;s number to retrieve its details. | [Optional] [Defaults to `undefined`] |
| **includeLabels** | `boolean` | Includes labels associated with this blog post in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes content properties associated with this blog post in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this blog post in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeLikes** | `boolean` | Includes likes associated with this blog post in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersions** | `boolean` | Includes versions associated with this blog post in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersion** | `boolean` | Includes the current version associated with this blog post in the response. By default this is included and can be omitted by setting the value to &#x60;false&#x60;. | [Optional] [Defaults to `true`] |
| **includeFavoritedByCurrentUserStatus** | `boolean` | Includes whether this blog post has been favorited by the current user. | [Optional] [Defaults to `false`] |
| **includeWebresources** | `boolean` | Includes web resources that can be used to render blog post content on a client. | [Optional] [Defaults to `false`] |
| **includeCollaborators** | `boolean` | Includes collaborators on the blog post. | [Optional] [Defaults to `false`] |

### Return type

[**CreateBlogPost200Response**](CreateBlogPost200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested blog post is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPosts

> MultiEntityResultBlogPost getBlogPosts(id, spaceId, sort, status, title, bodyFormat, cursor, limit)

Get blog posts

Returns all blog posts. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only blog posts that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  BlogPostApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BlogPostApi(config);

  const body = {
    // Array<number> | Filter the results based on blog post ids. Multiple blog post ids can be specified as a comma-separated list. (optional)
    id: ...,
    // Array<number> | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. (optional)
    spaceId: ...,
    // BlogPostSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // Array<'current' | 'deleted' | 'trashed'> | Filter the results to blog posts based on their status. By default, `current` is used. (optional)
    status: ...,
    // string | Filter the results to blog posts based on their title. (optional)
    title: title_example,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of blog posts per result to return. If more results exist, use the `Link` response header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetBlogPostsRequest;

  try {
    const data = await api.getBlogPosts(body);
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
| **id** | `Array<number>` | Filter the results based on blog post ids. Multiple blog post ids can be specified as a comma-separated list. | [Optional] |
| **spaceId** | `Array<number>` | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. | [Optional] |
| **sort** | `BlogPostSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date] |
| **status** | `current`, `deleted`, `trashed` | Filter the results to blog posts based on their status. By default, &#x60;current&#x60; is used. | [Optional] [Enum: current, deleted, trashed] |
| **title** | `string` | Filter the results to blog posts based on their title. | [Optional] [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of blog posts per result to return. If more results exist, use the &#x60;Link&#x60; response header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultBlogPost**](MultiEntityResultBlogPost.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested blog posts are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/blogposts?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPostsInSpace

> MultiEntityResultBlogPost getBlogPostsInSpace(id, sort, status, title, bodyFormat, cursor, limit)

Get blog posts in space

Returns all blog posts in a space. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and view the space. Only blog posts that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  BlogPostApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostsInSpaceRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BlogPostApi(config);

  const body = {
    // number | The ID of the space for which blog posts should be returned.
    id: 789,
    // BlogPostSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // Array<'current' | 'deleted' | 'trashed'> | Filter the results to blog posts based on their status. By default, `current` is used. (optional)
    status: ...,
    // string | Filter the results to blog posts based on their title. (optional)
    title: title_example,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of blog posts per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetBlogPostsInSpaceRequest;

  try {
    const data = await api.getBlogPostsInSpace(body);
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
| **id** | `number` | The ID of the space for which blog posts should be returned. | [Defaults to `undefined`] |
| **sort** | `BlogPostSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date] |
| **status** | `current`, `deleted`, `trashed` | Filter the results to blog posts based on their status. By default, &#x60;current&#x60; is used. | [Optional] [Enum: current, deleted, trashed] |
| **title** | `string` | Filter the results to blog posts based on their title. | [Optional] [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of blog posts per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultBlogPost**](MultiEntityResultBlogPost.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested blog posts are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/spaces/&lt;id&gt;/blogposts?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLabelBlogPosts

> MultiEntityResultBlogPost getLabelBlogPosts(id, spaceId, bodyFormat, sort, cursor, limit)

Get blog posts for label

Returns the blogposts of specified label. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  BlogPostApi,
} from 'confluence-cloud-api-v2';
import type { GetLabelBlogPostsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BlogPostApi(config);

  const body = {
    // number | The ID of the label for which blog posts should be returned.
    id: 789,
    // Array<number> | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. (optional)
    spaceId: ...,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // BlogPostSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of blog posts per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetLabelBlogPostsRequest;

  try {
    const data = await api.getLabelBlogPosts(body);
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
| **id** | `number` | The ID of the label for which blog posts should be returned. | [Defaults to `undefined`] |
| **spaceId** | `Array<number>` | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. | [Optional] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **sort** | `BlogPostSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of blog posts per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultBlogPost**](MultiEntityResultBlogPost.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested blog posts for specified label were successfully fetched. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/labels/&lt;id&gt;/blogposts?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested label or label was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateBlogPost

> CreateBlogPost200Response updateBlogPost(id, updateBlogPostRequest)

Update blog post

Update a blog post by id.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the blog post and its corresponding space. Permission to update blog posts in the space.

### Example

```ts
import {
  Configuration,
  BlogPostApi,
} from 'confluence-cloud-api-v2';
import type { UpdateBlogPostOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new BlogPostApi(config);

  const body = {
    // number | The ID of the blog post to be updated. If you don\'t know the blog post ID, use Get Blog Posts and filter the results.
    id: 789,
    // UpdateBlogPostRequest
    updateBlogPostRequest: ...,
  } satisfies UpdateBlogPostOperationRequest;

  try {
    const data = await api.updateBlogPost(body);
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
| **id** | `number` | The ID of the blog post to be updated. If you don\&#39;t know the blog post ID, use Get Blog Posts and filter the results. | [Defaults to `undefined`] |
| **updateBlogPostRequest** | [UpdateBlogPostRequest](UpdateBlogPostRequest.md) |  | |

### Return type

[**CreateBlogPost200Response**](CreateBlogPost200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested blog post is successfully updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided blog post does not exist - The user does not have permissions to view the blog post - The user does not have the needed permissions to update a blog post in the space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

