# AttachmentApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteAttachment**](AttachmentApi.md#deleteattachment) | **DELETE** /attachments/{id} | Delete attachment |
| [**getAttachmentById**](AttachmentApi.md#getattachmentbyid) | **GET** /attachments/{id} | Get attachment by id |
| [**getAttachments**](AttachmentApi.md#getattachments) | **GET** /attachments | Get attachments |
| [**getBlogpostAttachments**](AttachmentApi.md#getblogpostattachments) | **GET** /blogposts/{id}/attachments | Get attachments for blog post |
| [**getCustomContentAttachments**](AttachmentApi.md#getcustomcontentattachments) | **GET** /custom-content/{id}/attachments | Get attachments for custom content |
| [**getLabelAttachments**](AttachmentApi.md#getlabelattachments) | **GET** /labels/{id}/attachments | Get attachments for label |
| [**getPageAttachments**](AttachmentApi.md#getpageattachments) | **GET** /pages/{id}/attachments | Get attachments for page |



## deleteAttachment

> deleteAttachment(id, purge)

Delete attachment

Delete an attachment by id.  Deleting an attachment moves the attachment to the trash, where it can be restored later. To permanently delete an attachment (or \&quot;purge\&quot; it), the endpoint must be called on a **trashed** attachment with the following param &#x60;purge&#x3D;true&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the container of the attachment. Permission to delete attachments in the space. Permission to administer the space (if attempting to purge).

### Example

```ts
import {
  Configuration,
  AttachmentApi,
} from 'confluence-cloud-api-v2';
import type { DeleteAttachmentRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttachmentApi(config);

  const body = {
    // number | The ID of the attachment to be deleted.
    id: 789,
    // boolean | If attempting to purge the attachment. (optional)
    purge: true,
  } satisfies DeleteAttachmentRequest;

  try {
    const data = await api.deleteAttachment(body);
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
| **id** | `number` | The ID of the attachment to be deleted. | [Defaults to `undefined`] |
| **purge** | `boolean` | If attempting to purge the attachment. | [Optional] [Defaults to `false`] |

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
| **204** | Returned if the attachment was successfully deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided attachment does not exist - The user does not have permissions to view the container of the attachment - The user does not have the needed permissions to delete an attachment in the space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachmentById

> GetAttachmentById200Response getAttachmentById(id, version, includeLabels, includeProperties, includeOperations, includeVersions, includeVersion, includeCollaborators)

Get attachment by id

Returns a specific attachment.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the attachment\&#39;s container.

### Example

```ts
import {
  Configuration,
  AttachmentApi,
} from 'confluence-cloud-api-v2';
import type { GetAttachmentByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttachmentApi(config);

  const body = {
    // string | The ID of the attachment to be returned. If you don\'t know the attachment\'s ID, use Get attachments for page/blogpost/custom content.
    id: id_example,
    // number | Allows you to retrieve a previously published version. Specify the previous version\'s number to retrieve its details. (optional)
    version: 56,
    // boolean | Includes labels associated with this attachment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLabels: true,
    // boolean | Includes content properties associated with this attachment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
    // boolean | Includes operations associated with this attachment in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes versions associated with this attachment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeVersions: true,
    // boolean | Includes the current version associated with this attachment in the response. By default this is included and can be omitted by setting the value to `false`. (optional)
    includeVersion: true,
    // boolean | Includes collaborators on the attachment. (optional)
    includeCollaborators: true,
  } satisfies GetAttachmentByIdRequest;

  try {
    const data = await api.getAttachmentById(body);
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
| **id** | `string` | The ID of the attachment to be returned. If you don\&#39;t know the attachment\&#39;s ID, use Get attachments for page/blogpost/custom content. | [Defaults to `undefined`] |
| **version** | `number` | Allows you to retrieve a previously published version. Specify the previous version\&#39;s number to retrieve its details. | [Optional] [Defaults to `undefined`] |
| **includeLabels** | `boolean` | Includes labels associated with this attachment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes content properties associated with this attachment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this attachment in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersions** | `boolean` | Includes versions associated with this attachment in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersion** | `boolean` | Includes the current version associated with this attachment in the response. By default this is included and can be omitted by setting the value to &#x60;false&#x60;. | [Optional] [Defaults to `true`] |
| **includeCollaborators** | `boolean` | Includes collaborators on the attachment. | [Optional] [Defaults to `false`] |

### Return type

[**GetAttachmentById200Response**](GetAttachmentById200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested attachment is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested attachment or the attachment was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttachments

> MultiEntityResultAttachment getAttachments(sort, cursor, status, mediaType, filename, limit)

Get attachments

Returns all attachments. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the container of the attachment.

### Example

```ts
import {
  Configuration,
  AttachmentApi,
} from 'confluence-cloud-api-v2';
import type { GetAttachmentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttachmentApi(config);

  const body = {
    // AttachmentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // Array<'current' | 'archived' | 'trashed'> | Filter the results to attachments based on their status. By default, `current` and `archived` are used. (optional)
    status: ...,
    // string | Filters on the mediaType of attachments. Only one may be specified. (optional)
    mediaType: mediaType_example,
    // string | Filters on the file-name of attachments. Only one may be specified. (optional)
    filename: filename_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetAttachmentsRequest;

  try {
    const data = await api.getAttachments(body);
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
| **sort** | `AttachmentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **status** | `current`, `archived`, `trashed` | Filter the results to attachments based on their status. By default, &#x60;current&#x60; and &#x60;archived&#x60; are used. | [Optional] [Enum: current, archived, trashed] |
| **mediaType** | `string` | Filters on the mediaType of attachments. Only one may be specified. | [Optional] [Defaults to `undefined`] |
| **filename** | `string` | Filters on the file-name of attachments. Only one may be specified. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `50`] |

### Return type

[**MultiEntityResultAttachment**](MultiEntityResultAttachment.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested attachments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information.  Example response header format: &#x60;Link: &lt;/wiki/api/v2/attachments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBlogpostAttachments

> MultiEntityResultAttachment getBlogpostAttachments(id, sort, cursor, status, mediaType, filename, limit)

Get attachments for blog post

Returns the attachments of specific blog post. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the blog post and its corresponding space.

### Example

```ts
import {
  Configuration,
  AttachmentApi,
} from 'confluence-cloud-api-v2';
import type { GetBlogpostAttachmentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttachmentApi(config);

  const body = {
    // number | The ID of the blog post for which attachments should be returned.
    id: 789,
    // AttachmentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // Array<'current' | 'archived' | 'trashed'> | Filter the results to attachments based on their status. By default, `current` and `archived` are used. (optional)
    status: ...,
    // string | Filters on the mediaType of attachments. Only one may be specified. (optional)
    mediaType: mediaType_example,
    // string | Filters on the file-name of attachments. Only one may be specified. (optional)
    filename: filename_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetBlogpostAttachmentsRequest;

  try {
    const data = await api.getBlogpostAttachments(body);
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
| **id** | `number` | The ID of the blog post for which attachments should be returned. | [Defaults to `undefined`] |
| **sort** | `AttachmentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **status** | `current`, `archived`, `trashed` | Filter the results to attachments based on their status. By default, &#x60;current&#x60; and &#x60;archived&#x60; are used. | [Optional] [Enum: current, archived, trashed] |
| **mediaType** | `string` | Filters on the mediaType of attachments. Only one may be specified. | [Optional] [Defaults to `undefined`] |
| **filename** | `string` | Filters on the file-name of attachments. Only one may be specified. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `50`] |

### Return type

[**MultiEntityResultAttachment**](MultiEntityResultAttachment.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested attachments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/blogposts/&lt;id&gt;/attachments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested blog post or the blog post was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentAttachments

> MultiEntityResultAttachment getCustomContentAttachments(id, sort, cursor, status, mediaType, filename, limit)

Get attachments for custom content

Returns the attachments of specific custom content. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the custom content and its corresponding space.

### Example

```ts
import {
  Configuration,
  AttachmentApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentAttachmentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttachmentApi(config);

  const body = {
    // number | The ID of the custom content for which attachments should be returned.
    id: 789,
    // AttachmentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // Array<'current' | 'archived' | 'trashed'> | Filter the results to attachments based on their status. By default, `current` and `archived` are used. (optional)
    status: ...,
    // string | Filters on the mediaType of attachments. Only one may be specified. (optional)
    mediaType: mediaType_example,
    // string | Filters on the file-name of attachments. Only one may be specified. (optional)
    filename: filename_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetCustomContentAttachmentsRequest;

  try {
    const data = await api.getCustomContentAttachments(body);
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
| **id** | `number` | The ID of the custom content for which attachments should be returned. | [Defaults to `undefined`] |
| **sort** | `AttachmentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **status** | `current`, `archived`, `trashed` | Filter the results to attachments based on their status. By default, &#x60;current&#x60; and &#x60;archived&#x60; are used. | [Optional] [Enum: current, archived, trashed] |
| **mediaType** | `string` | Filters on the mediaType of attachments. Only one may be specified. | [Optional] [Defaults to `undefined`] |
| **filename** | `string` | Filters on the file-name of attachments. Only one may be specified. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `50`] |

### Return type

[**MultiEntityResultAttachment**](MultiEntityResultAttachment.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested attachments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/custom-content/&lt;id&gt;/attachments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested custom content or the custom content was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLabelAttachments

> MultiEntityResultAttachment getLabelAttachments(id, sort, cursor, limit)

Get attachments for label

Returns the attachments of specified label. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the attachment and its corresponding space.

### Example

```ts
import {
  Configuration,
  AttachmentApi,
} from 'confluence-cloud-api-v2';
import type { GetLabelAttachmentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttachmentApi(config);

  const body = {
    // number | The ID of the label for which attachments should be returned.
    id: 789,
    // AttachmentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetLabelAttachmentsRequest;

  try {
    const data = await api.getLabelAttachments(body);
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
| **id** | `number` | The ID of the label for which attachments should be returned. | [Defaults to `undefined`] |
| **sort** | `AttachmentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultAttachment**](MultiEntityResultAttachment.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested attachments for specified label were successfully fetched. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/labels/&lt;id&gt;/attachment?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested label or label was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageAttachments

> MultiEntityResultAttachment getPageAttachments(id, sort, cursor, status, mediaType, filename, limit)

Get attachments for page

Returns the attachments of specific page. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  AttachmentApi,
} from 'confluence-cloud-api-v2';
import type { GetPageAttachmentsRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttachmentApi(config);

  const body = {
    // number | The ID of the page for which attachments should be returned.
    id: 789,
    // AttachmentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // Array<'current' | 'archived' | 'trashed'> | Filter the results to attachments based on their status. By default, `current` and `archived` are used. (optional)
    status: ...,
    // string | Filters on the mediaType of attachments. Only one may be specified. (optional)
    mediaType: mediaType_example,
    // string | Filters on the file-name of attachments. Only one may be specified. (optional)
    filename: filename_example,
    // number | Maximum number of attachments per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetPageAttachmentsRequest;

  try {
    const data = await api.getPageAttachments(body);
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
| **id** | `number` | The ID of the page for which attachments should be returned. | [Defaults to `undefined`] |
| **sort** | `AttachmentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: created-date, -created-date, modified-date, -modified-date] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **status** | `current`, `archived`, `trashed` | Filter the results to attachments based on their status. By default, &#x60;current&#x60; and &#x60;archived&#x60; are used. | [Optional] [Enum: current, archived, trashed] |
| **mediaType** | `string` | Filters on the mediaType of attachments. Only one may be specified. | [Optional] [Defaults to `undefined`] |
| **filename** | `string` | Filters on the file-name of attachments. Only one may be specified. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of attachments per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `50`] |

### Return type

[**MultiEntityResultAttachment**](MultiEntityResultAttachment.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested attachments are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/pages/&lt;id&gt;/attachments?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

