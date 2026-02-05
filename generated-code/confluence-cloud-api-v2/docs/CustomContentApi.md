# CustomContentApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomContent**](CustomContentApi.md#createcustomcontentoperation) | **POST** /custom-content | Create custom content |
| [**deleteCustomContent**](CustomContentApi.md#deletecustomcontent) | **DELETE** /custom-content/{id} | Delete custom content |
| [**getCustomContentById**](CustomContentApi.md#getcustomcontentbyid) | **GET** /custom-content/{id} | Get custom content by id |
| [**getCustomContentByType**](CustomContentApi.md#getcustomcontentbytype) | **GET** /custom-content | Get custom content by type |
| [**getCustomContentByTypeInBlogPost**](CustomContentApi.md#getcustomcontentbytypeinblogpost) | **GET** /blogposts/{id}/custom-content | Get custom content by type in blog post |
| [**getCustomContentByTypeInPage**](CustomContentApi.md#getcustomcontentbytypeinpage) | **GET** /pages/{id}/custom-content | Get custom content by type in page |
| [**getCustomContentByTypeInSpace**](CustomContentApi.md#getcustomcontentbytypeinspace) | **GET** /spaces/{id}/custom-content | Get custom content by type in space |
| [**updateCustomContent**](CustomContentApi.md#updatecustomcontentoperation) | **PUT** /custom-content/{id} | Update custom content |



## createCustomContent

> CreateCustomContent201Response createCustomContent(createCustomContentRequest)

Create custom content

Creates a new custom content in the given space, page, blogpost or other custom content.  Only one of &#x60;spaceId&#x60;, &#x60;pageId&#x60;, &#x60;blogPostId&#x60;, or &#x60;customContentId&#x60; is required in the request body. **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to create custom content in the space.

### Example

```ts
import {
  Configuration,
  CustomContentApi,
} from 'confluence-cloud-api-v2';
import type { CreateCustomContentOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomContentApi(config);

  const body = {
    // CreateCustomContentRequest
    createCustomContentRequest: ...,
  } satisfies CreateCustomContentOperationRequest;

  try {
    const data = await api.createCustomContent(body);
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
| **createCustomContentRequest** | [CreateCustomContentRequest](CreateCustomContentRequest.md) |  | |

### Return type

[**CreateCustomContent201Response**](CreateCustomContent201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returned if the requested custom content is created successfully. |  * location - Relative link to created custom content Example response header format: &#x60;location: &lt;/wiki/api/v2/custom-content/&lt;id&gt;&gt;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the type of custom content is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCustomContent

> deleteCustomContent(id, purge)

Delete custom content

Delete a custom content by id.  Deleting a custom content will either move it to the trash or permanently delete it (purge it), depending on the apiSupport. To permanently delete a **trashed** custom content, the endpoint must be called with the following param &#x60;purge&#x3D;true&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to delete custom content in the space. Permission to administer the space (if attempting to purge).

### Example

```ts
import {
  Configuration,
  CustomContentApi,
} from 'confluence-cloud-api-v2';
import type { DeleteCustomContentRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomContentApi(config);

  const body = {
    // number | The ID of the custom content to be deleted.
    id: 789,
    // boolean | If attempting to purge the custom content. (optional)
    purge: true,
  } satisfies DeleteCustomContentRequest;

  try {
    const data = await api.deleteCustomContent(body);
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
| **id** | `number` | The ID of the custom content to be deleted. | [Defaults to `undefined`] |
| **purge** | `boolean` | If attempting to purge the custom content. | [Optional] [Defaults to `false`] |

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
| **204** | Returned if the custom content was deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the custom content is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentById

> CreateCustomContent201Response getCustomContentById(id, bodyFormat, version, includeLabels, includeProperties, includeOperations, includeVersions, includeVersion, includeCollaborators)

Get custom content by id

Returns a specific piece of custom content.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).

### Example

```ts
import {
  Configuration,
  CustomContentApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomContentApi(config);

  const body = {
    // number | The ID of the custom content to be returned. If you don\'t know the custom content ID, use Get Custom Content by Type and filter the results.
    id: 789,
    // CustomContentBodyRepresentationSingle | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field.  Note: If the custom content body type is `storage`, the `storage` and `atlas_doc_format` body formats are able to be returned. If the custom content body type is `raw`, only the `raw` body format is able to be returned. (optional)
    bodyFormat: ...,
    // number | Allows you to retrieve a previously published version. Specify the previous version\'s number to retrieve its details. (optional)
    version: 56,
    // boolean | Includes labels associated with this custom content in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLabels: true,
    // boolean | Includes content properties associated with this custom content in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
    // boolean | Includes operations associated with this custom content in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes versions associated with this custom content in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeVersions: true,
    // boolean | Includes the current version associated with this custom content in the response. By default this is included and can be omitted by setting the value to `false`. (optional)
    includeVersion: true,
    // boolean | Includes collaborators on the custom content. (optional)
    includeCollaborators: true,
  } satisfies GetCustomContentByIdRequest;

  try {
    const data = await api.getCustomContentById(body);
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
| **id** | `number` | The ID of the custom content to be returned. If you don\&#39;t know the custom content ID, use Get Custom Content by Type and filter the results. | [Defaults to `undefined`] |
| **bodyFormat** | `CustomContentBodyRepresentationSingle` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field.  Note: If the custom content body type is &#x60;storage&#x60;, the &#x60;storage&#x60; and &#x60;atlas_doc_format&#x60; body formats are able to be returned. If the custom content body type is &#x60;raw&#x60;, only the &#x60;raw&#x60; body format is able to be returned. | [Optional] [Defaults to `undefined`] [Enum: raw, storage, atlas_doc_format, view, export_view, anonymous_export_view] |
| **version** | `number` | Allows you to retrieve a previously published version. Specify the previous version\&#39;s number to retrieve its details. | [Optional] [Defaults to `undefined`] |
| **includeLabels** | `boolean` | Includes labels associated with this custom content in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes content properties associated with this custom content in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this custom content in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersions** | `boolean` | Includes versions associated with this custom content in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersion** | `boolean` | Includes the current version associated with this custom content in the response. By default this is included and can be omitted by setting the value to &#x60;false&#x60;. | [Optional] [Defaults to `true`] |
| **includeCollaborators** | `boolean` | Includes collaborators on the custom content. | [Optional] [Defaults to `false`] |

### Return type

[**CreateCustomContent201Response**](CreateCustomContent201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested custom content is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested custom content or the custom content was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentByType

> MultiEntityResultCustomContent getCustomContentByType(type, id, spaceId, sort, cursor, limit, bodyFormat)

Get custom content by type

Returns all custom content for a given type. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).

### Example

```ts
import {
  Configuration,
  CustomContentApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentByTypeRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomContentApi(config);

  const body = {
    // string | The type of custom content being requested. See: https://developer.atlassian.com/cloud/confluence/custom-content/ for additional details on custom content.
    type: type_example,
    // Array<number> | Filter the results based on custom content ids. Multiple custom content ids can be specified as a comma-separated list. (optional)
    id: ...,
    // Array<number> | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. (optional)
    spaceId: ...,
    // CustomContentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // CustomContentBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field.  Note: If the custom content body type is `storage`, the `storage` and `atlas_doc_format` body formats are able to be returned. If the custom content body type is `raw`, only the `raw` body format is able to be returned. (optional)
    bodyFormat: ...,
  } satisfies GetCustomContentByTypeRequest;

  try {
    const data = await api.getCustomContentByType(body);
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
| **type** | `string` | The type of custom content being requested. See: https://developer.atlassian.com/cloud/confluence/custom-content/ for additional details on custom content. | [Defaults to `undefined`] |
| **id** | `Array<number>` | Filter the results based on custom content ids. Multiple custom content ids can be specified as a comma-separated list. | [Optional] |
| **spaceId** | `Array<number>` | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. | [Optional] |
| **sort** | `CustomContentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date, title, -title] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **bodyFormat** | `CustomContentBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field.  Note: If the custom content body type is &#x60;storage&#x60;, the &#x60;storage&#x60; and &#x60;atlas_doc_format&#x60; body formats are able to be returned. If the custom content body type is &#x60;raw&#x60;, only the &#x60;raw&#x60; body format is able to be returned. | [Optional] [Defaults to `undefined`] [Enum: raw, storage, atlas_doc_format] |

### Return type

[**MultiEntityResultCustomContent**](MultiEntityResultCustomContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested custom content is returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/custom-content?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the type of custom content is not found. Note, this is distinct from the type being present, but no instances of the type, which would be a 200 with empty results. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentByTypeInBlogPost

> MultiEntityResultCustomContent getCustomContentByTypeInBlogPost(id, type, sort, cursor, limit, bodyFormat)

Get custom content by type in blog post

Returns all custom content for a given type within a given blogpost. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content (blog post), and the corresponding space.

### Example

```ts
import {
  Configuration,
  CustomContentApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentByTypeInBlogPostRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomContentApi(config);

  const body = {
    // number | The ID of the blog post for which custom content should be returned.
    id: 789,
    // string | The type of custom content being requested. See: https://developer.atlassian.com/cloud/confluence/custom-content/ for additional details on custom content.
    type: type_example,
    // CustomContentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // CustomContentBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field.  Note: If the custom content body type is `storage`, the `storage` and `atlas_doc_format` body formats are able to be returned. If the custom content body type is `raw`, only the `raw` body format is able to be returned. (optional)
    bodyFormat: ...,
  } satisfies GetCustomContentByTypeInBlogPostRequest;

  try {
    const data = await api.getCustomContentByTypeInBlogPost(body);
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
| **id** | `number` | The ID of the blog post for which custom content should be returned. | [Defaults to `undefined`] |
| **type** | `string` | The type of custom content being requested. See: https://developer.atlassian.com/cloud/confluence/custom-content/ for additional details on custom content. | [Defaults to `undefined`] |
| **sort** | `CustomContentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date, title, -title] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **bodyFormat** | `CustomContentBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field.  Note: If the custom content body type is &#x60;storage&#x60;, the &#x60;storage&#x60; and &#x60;atlas_doc_format&#x60; body formats are able to be returned. If the custom content body type is &#x60;raw&#x60;, only the &#x60;raw&#x60; body format is able to be returned. | [Optional] [Defaults to `undefined`] [Enum: raw, storage, atlas_doc_format] |

### Return type

[**MultiEntityResultCustomContent**](MultiEntityResultCustomContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested custom content is returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/blogposts/{id}/custom-content?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the given blog post is not found. Returned if the type of custom content is not found. Note, this is distinct from the type being present, but no instances of the type, which would be a 200 with empty results. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentByTypeInPage

> MultiEntityResultCustomContent getCustomContentByTypeInPage(id, type, sort, cursor, limit, bodyFormat)

Get custom content by type in page

Returns all custom content for a given type within a given page. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content, the container of the custom content (page), and the corresponding space.

### Example

```ts
import {
  Configuration,
  CustomContentApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentByTypeInPageRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomContentApi(config);

  const body = {
    // number | The ID of the page for which custom content should be returned.
    id: 789,
    // string | The type of custom content being requested. See: https://developer.atlassian.com/cloud/confluence/custom-content/ for additional details on custom content.
    type: type_example,
    // CustomContentSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // CustomContentBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field.  Note: If the custom content body type is `storage`, the `storage` and `atlas_doc_format` body formats are able to be returned. If the custom content body type is `raw`, only the `raw` body format is able to be returned. (optional)
    bodyFormat: ...,
  } satisfies GetCustomContentByTypeInPageRequest;

  try {
    const data = await api.getCustomContentByTypeInPage(body);
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
| **id** | `number` | The ID of the page for which custom content should be returned. | [Defaults to `undefined`] |
| **type** | `string` | The type of custom content being requested. See: https://developer.atlassian.com/cloud/confluence/custom-content/ for additional details on custom content. | [Defaults to `undefined`] |
| **sort** | `CustomContentSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date, title, -title] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **bodyFormat** | `CustomContentBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field.  Note: If the custom content body type is &#x60;storage&#x60;, the &#x60;storage&#x60; and &#x60;atlas_doc_format&#x60; body formats are able to be returned. If the custom content body type is &#x60;raw&#x60;, only the &#x60;raw&#x60; body format is able to be returned. | [Optional] [Defaults to `undefined`] [Enum: raw, storage, atlas_doc_format] |

### Return type

[**MultiEntityResultCustomContent**](MultiEntityResultCustomContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested custom content is returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/pages/{id}/custom-content?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the given page is not found. Returned if the type of custom content is not found. Note, this is distinct from the type being present, but no instances of the type, which would be a 200 with empty results. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomContentByTypeInSpace

> MultiEntityResultCustomContent getCustomContentByTypeInSpace(id, type, cursor, limit, bodyFormat)

Get custom content by type in space

Returns all custom content for a given type within a given space. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the custom content and the corresponding space.

### Example

```ts
import {
  Configuration,
  CustomContentApi,
} from 'confluence-cloud-api-v2';
import type { GetCustomContentByTypeInSpaceRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomContentApi(config);

  const body = {
    // number | The ID of the space for which custom content should be returned.
    id: 789,
    // string | The type of custom content being requested. See: https://developer.atlassian.com/cloud/confluence/custom-content/ for additional details on custom content.
    type: type_example,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
    // CustomContentBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field.  Note: If the custom content body type is `storage`, the `storage` and `atlas_doc_format` body formats are able to be returned. If the custom content body type is `raw`, only the `raw` body format is able to be returned. (optional)
    bodyFormat: ...,
  } satisfies GetCustomContentByTypeInSpaceRequest;

  try {
    const data = await api.getCustomContentByTypeInSpace(body);
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
| **id** | `number` | The ID of the space for which custom content should be returned. | [Defaults to `undefined`] |
| **type** | `string` | The type of custom content being requested. See: https://developer.atlassian.com/cloud/confluence/custom-content/ for additional details on custom content. | [Defaults to `undefined`] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |
| **bodyFormat** | `CustomContentBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field.  Note: If the custom content body type is &#x60;storage&#x60;, the &#x60;storage&#x60; and &#x60;atlas_doc_format&#x60; body formats are able to be returned. If the custom content body type is &#x60;raw&#x60;, only the &#x60;raw&#x60; body format is able to be returned. | [Optional] [Defaults to `undefined`] [Enum: raw, storage, atlas_doc_format] |

### Return type

[**MultiEntityResultCustomContent**](MultiEntityResultCustomContent.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested custom content is returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/spaces/{id}/custom-content?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the space is not found. Returned if the type of custom content is not found. Note, this is distinct from the type being present, but no instances of the type, which would be a 200 with empty results. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomContent

> CreateCustomContent201Response updateCustomContent(id, updateCustomContentRequest)

Update custom content

Update a custom content by id. At most one of &#x60;spaceId&#x60;, &#x60;pageId&#x60;, &#x60;blogPostId&#x60;, or &#x60;customContentId&#x60; is allowed in the request body. Note that if &#x60;spaceId&#x60; is specified, it must be the same as the &#x60;spaceId&#x60; used for creating the custom content as moving custom content to a different space is not supported.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page or blogpost and its corresponding space. Permission to update custom content in the space.

### Example

```ts
import {
  Configuration,
  CustomContentApi,
} from 'confluence-cloud-api-v2';
import type { UpdateCustomContentOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new CustomContentApi(config);

  const body = {
    // number | The ID of the custom content to be updated. If you don\'t know the custom content ID, use Get Custom Content by Type and filter the results.
    id: 789,
    // UpdateCustomContentRequest
    updateCustomContentRequest: ...,
  } satisfies UpdateCustomContentOperationRequest;

  try {
    const data = await api.updateCustomContent(body);
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
| **id** | `number` | The ID of the custom content to be updated. If you don\&#39;t know the custom content ID, use Get Custom Content by Type and filter the results. | [Defaults to `undefined`] |
| **updateCustomContentRequest** | [UpdateCustomContentRequest](UpdateCustomContentRequest.md) |  | |

### Return type

[**CreateCustomContent201Response**](CreateCustomContent201Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested custom content is updated successfully. |  * location - Relative link to updated custom content Example response header format: &#x60;location: &lt;/wiki/api/v2/custom-content/&lt;id&gt;&gt;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the type of custom content is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

