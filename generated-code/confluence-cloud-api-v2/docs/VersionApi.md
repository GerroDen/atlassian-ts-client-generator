# VersionApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAttachmentVersionDetails**](VersionApi.md#getattachmentversiondetails) | **GET** /attachments/{attachment-id}/versions/{version-number} | Get version details for attachment version |
| [**getAttachmentVersions**](VersionApi.md#getattachmentversions) | **GET** /attachments/{id}/versions | Get attachment versions |
| [**getBlogPostVersionDetails**](VersionApi.md#getblogpostversiondetails) | **GET** /blogposts/{blogpost-id}/versions/{version-number} | Get version details for blog post version |
| [**getBlogPostVersions**](VersionApi.md#getblogpostversions) | **GET** /blogposts/{id}/versions | Get blog post versions |
| [**getCustomContentVersionDetails**](VersionApi.md#getcustomcontentversiondetails) | **GET** /custom-content/{custom-content-id}/versions/{version-number} | Get version details for custom content version |
| [**getCustomContentVersions**](VersionApi.md#getcustomcontentversions) | **GET** /custom-content/{custom-content-id}/versions | Get custom content versions |
| [**getFooterCommentVersionDetails**](VersionApi.md#getfootercommentversiondetails) | **GET** /footer-comments/{id}/versions/{version-number} | Get version details for footer comment version |
| [**getFooterCommentVersions**](VersionApi.md#getfootercommentversions) | **GET** /footer-comments/{id}/versions | Get footer comment versions |
| [**getInlineCommentVersionDetails**](VersionApi.md#getinlinecommentversiondetails) | **GET** /inline-comments/{id}/versions/{version-number} | Get version details for inline comment version |
| [**getInlineCommentVersions**](VersionApi.md#getinlinecommentversions) | **GET** /inline-comments/{id}/versions | Get inline comment versions |
| [**getPageVersionDetails**](VersionApi.md#getpageversiondetails) | **GET** /pages/{page-id}/versions/{version-number} | Get version details for page version |
| [**getPageVersions**](VersionApi.md#getpageversions) | **GET** /pages/{id}/versions | Get page versions |



## getAttachmentVersionDetails

> DetailedVersion getAttachmentVersionDetails(attachmentId, versionNumber)

Get version details for attachment version

Retrieves version details for the specified attachment and version number.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the attachment.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetAttachmentVersionDetailsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // string | The ID of the attachment for which version details should be returned.
    attachmentId: attachmentId_example,
    // number | The version number of the attachment to be returned.
    versionNumber: 789,
  } satisfies GetAttachmentVersionDetailsRequest;

  try {
    const data = await api.getAttachmentVersionDetails(body);
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
| **attachmentId** | `string` | The ID of the attachment for which version details should be returned. | [Defaults to `undefined`] |
| **versionNumber** | `number` | The version number of the attachment to be returned. | [Defaults to `undefined`] |

### Return type

[**DetailedVersion**](DetailedVersion.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested version details are successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified attachment, the attachment was not found, or the version number does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentVersions

> MultiEntityResultVersion getAttachmentVersions(id, cursor, limit, sort)

Get attachment versions

Returns the versions of specific attachment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the attachment and its corresponding space.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetAttachmentVersionsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // string | The ID of the attachment to be queried for its versions. If you don\'t know the attachment ID, use Get attachments and filter the results.
    id: id_example,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of versions per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // VersionSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetAttachmentVersionsRequest;

  try {
    const data = await api.getAttachmentVersions(body);
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
| **id** | `string` | The ID of the attachment to be queried for its versions. If you don\&#39;t know the attachment ID, use Get attachments and filter the results. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of versions per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `VersionSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: modified-date, -modified-date] |

### Return type

[**MultiEntityResultVersion**](MultiEntityResultVersion.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested attachment versions are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/attachments/&lt;id&gt;/versions?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPostVersionDetails

> DetailedVersion getBlogPostVersionDetails(blogpostId, versionNumber)

Get version details for blog post version

Retrieves version details for the specified blog post and version number.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the blog post.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostVersionDetailsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the blog post for which version details should be returned.
    blogpostId: 789,
    // number | The version number of the blog post to be returned.
    versionNumber: 789,
  } satisfies GetBlogPostVersionDetailsRequest;

  try {
    const data = await api.getBlogPostVersionDetails(body);
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
| **blogpostId** | `number` | The ID of the blog post for which version details should be returned. | [Defaults to `undefined`] |
| **versionNumber** | `number` | The version number of the blog post to be returned. | [Defaults to `undefined`] |

### Return type

[**DetailedVersion**](DetailedVersion.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested version details are successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified blog post, the blog post was not found, or the version number does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogPostVersions

> MultiEntityResultVersion1 getBlogPostVersions(id, bodyFormat, cursor, limit, sort)

Get blog post versions

Returns the versions of specific blog post.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogPostVersionsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the blog post to be queried for its versions. If you don\'t know the blog post ID, use Get blog posts and filter the results.
    id: 789,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of versions per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // VersionSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetBlogPostVersionsRequest;

  try {
    const data = await api.getBlogPostVersions(body);
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
| **id** | `number` | The ID of the blog post to be queried for its versions. If you don\&#39;t know the blog post ID, use Get blog posts and filter the results. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of versions per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `VersionSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: modified-date, -modified-date] |

### Return type

[**MultiEntityResultVersion1**](MultiEntityResultVersion1.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested blog post versions are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/blogposts/&lt;id&gt;/versions?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentVersionDetails

> DetailedVersion getCustomContentVersionDetails(customContentId, versionNumber)

Get version details for custom content version

Retrieves version details for the specified custom content and version number.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentVersionDetailsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the custom content for which version details should be returned.
    customContentId: 789,
    // number | The version number of the custom content to be returned.
    versionNumber: 789,
  } satisfies GetCustomContentVersionDetailsRequest;

  try {
    const data = await api.getCustomContentVersionDetails(body);
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
| **customContentId** | `number` | The ID of the custom content for which version details should be returned. | [Defaults to `undefined`] |
| **versionNumber** | `number` | The version number of the custom content to be returned. | [Defaults to `undefined`] |

### Return type

[**DetailedVersion**](DetailedVersion.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested version details are successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified custom content, the custom content was not found, or the version number does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentVersions

> MultiEntityResultVersion3 getCustomContentVersions(customContentId, bodyFormat, cursor, limit, sort)

Get custom content versions

Returns the versions of specific custom content.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content and its corresponding page and space.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentVersionsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the custom content to be queried for its versions. If you don\'t know the custom content ID, use Get custom-content by type and filter the results.
    customContentId: 789,
    // CustomContentBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field.  Note: If the custom content body type is `storage`, the `storage` and `atlas_doc_format` body formats are able to be returned. If the custom content body type is `raw`, only the `raw` body format is able to be returned. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of versions per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // VersionSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetCustomContentVersionsRequest;

  try {
    const data = await api.getCustomContentVersions(body);
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
| **customContentId** | `number` | The ID of the custom content to be queried for its versions. If you don\&#39;t know the custom content ID, use Get custom-content by type and filter the results. | [Defaults to `undefined`] |
| **bodyFormat** | `CustomContentBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field.  Note: If the custom content body type is &#x60;storage&#x60;, the &#x60;storage&#x60; and &#x60;atlas_doc_format&#x60; body formats are able to be returned. If the custom content body type is &#x60;raw&#x60;, only the &#x60;raw&#x60; body format is able to be returned. | [Optional] [Defaults to `undefined`] [Enum: raw, storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of versions per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `VersionSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: modified-date, -modified-date] |

### Return type

[**MultiEntityResultVersion3**](MultiEntityResultVersion3.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested custom content versions are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/custom-content/&lt;id&gt;/versions?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested custom content or the custom content was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFooterCommentVersionDetails

> DetailedVersion getFooterCommentVersionDetails(id, versionNumber)

Get version details for footer comment version

Retrieves version details for the specified footer comment version.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetFooterCommentVersionDetailsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the footer comment for which version details should be returned.
    id: 789,
    // number | The version number of the footer comment to be returned.
    versionNumber: 789,
  } satisfies GetFooterCommentVersionDetailsRequest;

  try {
    const data = await api.getFooterCommentVersionDetails(body);
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
| **id** | `number` | The ID of the footer comment for which version details should be returned. | [Defaults to `undefined`] |
| **versionNumber** | `number` | The version number of the footer comment to be returned. | [Defaults to `undefined`] |

### Return type

[**DetailedVersion**](DetailedVersion.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested version details are successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or blog post, the footer comment was not found, or the version number does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFooterCommentVersions

> MultiEntityResultVersion4 getFooterCommentVersions(id, bodyFormat, cursor, limit, sort)

Get footer comment versions

Retrieves the versions of the specified footer comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetFooterCommentVersionsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the footer comment for which versions should be returned
    id: 789,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of versions per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // VersionSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetFooterCommentVersionsRequest;

  try {
    const data = await api.getFooterCommentVersions(body);
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
| **id** | `number` | The ID of the footer comment for which versions should be returned | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of versions per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `VersionSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: modified-date, -modified-date] |

### Return type

[**MultiEntityResultVersion4**](MultiEntityResultVersion4.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested footer comment versions are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/footer-comments/&lt;id&gt;/versions?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or blog post, the footer comment was not found, or the version number does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInlineCommentVersionDetails

> DetailedVersion getInlineCommentVersionDetails(id, versionNumber)

Get version details for inline comment version

Retrieves version details for the specified inline comment version.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetInlineCommentVersionDetailsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the inline comment for which version details should be returned.
    id: 789,
    // number | The version number of the inline comment to be returned.
    versionNumber: 789,
  } satisfies GetInlineCommentVersionDetailsRequest;

  try {
    const data = await api.getInlineCommentVersionDetails(body);
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
| **id** | `number` | The ID of the inline comment for which version details should be returned. | [Defaults to `undefined`] |
| **versionNumber** | `number` | The version number of the inline comment to be returned. | [Defaults to `undefined`] |

### Return type

[**DetailedVersion**](DetailedVersion.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested version details are successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or blog post, the inline comment was not found, or the version number does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInlineCommentVersions

> MultiEntityResultVersion4 getInlineCommentVersions(id, bodyFormat, cursor, limit, sort)

Get inline comment versions

Retrieves the versions of the specified inline comment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetInlineCommentVersionsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the inline comment for which versions should be returned
    id: 789,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of versions per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // VersionSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetInlineCommentVersionsRequest;

  try {
    const data = await api.getInlineCommentVersions(body);
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
| **id** | `number` | The ID of the inline comment for which versions should be returned | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of versions per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `VersionSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: modified-date, -modified-date] |

### Return type

[**MultiEntityResultVersion4**](MultiEntityResultVersion4.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested inline comment versions are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/inline-comments/&lt;id&gt;/versions?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page or blog post, the inline comment was not found, or the version number does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageVersionDetails

> DetailedVersion getPageVersionDetails(pageId, versionNumber)

Get version details for page version

Retrieves version details for the specified page and version number.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetPageVersionDetailsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the page for which version details should be returned.
    pageId: 789,
    // number | The version number of the page to be returned.
    versionNumber: 789,
  } satisfies GetPageVersionDetailsRequest;

  try {
    const data = await api.getPageVersionDetails(body);
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
| **pageId** | `number` | The ID of the page for which version details should be returned. | [Defaults to `undefined`] |
| **versionNumber** | `number` | The version number of the page to be returned. | [Defaults to `undefined`] |

### Return type

[**DetailedVersion**](DetailedVersion.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested version details are successfully retrieved. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified page, the page was not found, or the version number does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageVersions

> MultiEntityResultVersion2 getPageVersions(id, bodyFormat, cursor, limit, sort)

Get page versions

Returns the versions of specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'confluence-cloud-api-v2';
import type { GetPageVersionsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new VersionApi(config);

  const body = {
    // number | The ID of the page to be queried for its versions. If you don\'t know the page ID, use Get pages and filter the results.
    id: 789,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of versions per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // VersionSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
  } satisfies GetPageVersionsRequest;

  try {
    const data = await api.getPageVersions(body);
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
| **id** | `number` | The ID of the page to be queried for its versions. If you don\&#39;t know the page ID, use Get pages and filter the results. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of versions per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **sort** | `VersionSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: modified-date, -modified-date] |

### Return type

[**MultiEntityResultVersion2**](MultiEntityResultVersion2.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested page versions are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/pages/&lt;id&gt;/versions?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

