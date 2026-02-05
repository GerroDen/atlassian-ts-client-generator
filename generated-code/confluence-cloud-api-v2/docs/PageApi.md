# PageApi

All URIs are relative to *https://no-default/wiki/api/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPage**](PageApi.md#createpageoperation) | **POST** /pages | Create page |
| [**deletePage**](PageApi.md#deletepage) | **DELETE** /pages/{id} | Delete page |
| [**getLabelPages**](PageApi.md#getlabelpages) | **GET** /labels/{id}/pages | Get pages for label |
| [**getPageById**](PageApi.md#getpagebyid) | **GET** /pages/{id} | Get page by id |
| [**getPages**](PageApi.md#getpages) | **GET** /pages | Get pages |
| [**getPagesInSpace**](PageApi.md#getpagesinspace) | **GET** /spaces/{id}/pages | Get pages in space |
| [**updatePage**](PageApi.md#updatepageoperation) | **PUT** /pages/{id} | Update page |
| [**updatePageTitle**](PageApi.md#updatepagetitleoperation) | **PUT** /pages/{id}/title | Update page title |



## createPage

> CreatePage200Response createPage(createPageRequest, embedded, _private, rootLevel)

Create page

Creates a page in the space.  Pages are created as published by default unless specified as a draft in the status field. If creating a published page, the title must be specified.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the corresponding space. Permission to create a page in the space.

### Example

```ts
import {
  Configuration,
  PageApi,
} from 'confluence-cloud-api-v2';
import type { CreatePageOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PageApi(config);

  const body = {
    // CreatePageRequest
    createPageRequest: ...,
    // boolean | Tag the content as embedded and content will be created in NCS. (optional)
    embedded: true,
    // boolean | The page will be private. Only the user who creates this page will have permission to view and edit one. (optional)
    _private: true,
    // boolean | The page will be created at the root level of the space (outside the space homepage tree). If true, then a  value may not be supplied for the `parentId` body parameter. (optional)
    rootLevel: true,
  } satisfies CreatePageOperationRequest;

  try {
    const data = await api.createPage(body);
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
| **createPageRequest** | [CreatePageRequest](CreatePageRequest.md) |  | |
| **embedded** | `boolean` | Tag the content as embedded and content will be created in NCS. | [Optional] [Defaults to `false`] |
| **_private** | `boolean` | The page will be private. Only the user who creates this page will have permission to view and edit one. | [Optional] [Defaults to `false`] |
| **rootLevel** | `boolean` | The page will be created at the root level of the space (outside the space homepage tree). If true, then a  value may not be supplied for the &#x60;parentId&#x60; body parameter. | [Optional] [Defaults to `false`] |

### Return type

[**CreatePage200Response**](CreatePage200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the page was successfully created. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The space does not exist - The user does not have permissions to view the space - The user does not have the needed permissions to create a page in the provided space |  -  |
| **413** | Returned if the request is too large in size (over 5 MB). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePage

> deletePage(id, purge, draft)

Delete page

Delete a page by id.  By default this will delete pages that are non-drafts. To delete a page that is a draft, the endpoint must be called on a  draft with the following param &#x60;draft&#x3D;true&#x60;. Discarded drafts are not sent to the trash and are permanently deleted.  Deleting a page moves the page to the trash, where it can be restored later. To permanently delete a page (or \&quot;purge\&quot; it), the endpoint must be called on a **trashed** page with the following param &#x60;purge&#x3D;true&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space. Permission to delete pages in the space. Permission to administer the space (if attempting to purge).

### Example

```ts
import {
  Configuration,
  PageApi,
} from 'confluence-cloud-api-v2';
import type { DeletePageRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PageApi(config);

  const body = {
    // number | The ID of the page to be deleted.
    id: 789,
    // boolean | If attempting to purge the page. (optional)
    purge: true,
    // boolean | If attempting to delete a page that is a draft. (optional)
    draft: true,
  } satisfies DeletePageRequest;

  try {
    const data = await api.deletePage(body);
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
| **id** | `number` | The ID of the page to be deleted. | [Defaults to `undefined`] |
| **purge** | `boolean` | If attempting to purge the page. | [Optional] [Defaults to `false`] |
| **draft** | `boolean` | If attempting to delete a page that is a draft. | [Optional] [Defaults to `false`] |

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
| **204** | Returned if the page was successfully deleted. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided page does not exist - The user does not have permissions to view the page - The user does not have the needed permissions to delete a page in the space |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLabelPages

> MultiEntityResultPage getLabelPages(id, spaceId, bodyFormat, sort, cursor, limit)

Get pages for label

Returns the pages of specified label. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the content of the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  PageApi,
} from 'confluence-cloud-api-v2';
import type { GetLabelPagesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PageApi(config);

  const body = {
    // number | The ID of the label for which pages should be returned.
    id: 789,
    // Array<number> | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. (optional)
    spaceId: ...,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // PageSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetLabelPagesRequest;

  try {
    const data = await api.getLabelPages(body);
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
| **id** | `number` | The ID of the label for which pages should be returned. | [Defaults to `undefined`] |
| **spaceId** | `Array<number>` | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. | [Optional] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **sort** | `PageSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date, title, -title] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultPage**](MultiEntityResultPage.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested pages for specified label were successfully fetched. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/labels/&lt;id&gt;/pages?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested label or label was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPageById

> CreatePage200Response getPageById(id, bodyFormat, getDraft, status, version, includeLabels, includeProperties, includeOperations, includeLikes, includeVersions, includeVersion, includeFavoritedByCurrentUserStatus, includeWebresources, includeCollaborators, includeDirectChildren)

Get page by id

Returns a specific page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space.

### Example

```ts
import {
  Configuration,
  PageApi,
} from 'confluence-cloud-api-v2';
import type { GetPageByIdRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PageApi(config);

  const body = {
    // number | The ID of the page to be returned. If you don\'t know the page ID, use Get pages and filter the results.
    id: 789,
    // PrimaryBodyRepresentationSingle | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // boolean | Retrieve the draft version of this page. (optional)
    getDraft: true,
    // Array<'current' | 'archived' | 'trashed' | 'deleted' | 'historical' | 'draft'> | Filter the page being retrieved by its status. (optional)
    status: ...,
    // number | Allows you to retrieve a previously published version. Specify the previous version\'s number to retrieve its details. (optional)
    version: 56,
    // boolean | Includes labels associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLabels: true,
    // boolean | Includes content properties associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeProperties: true,
    // boolean | Includes operations associated with this page in the response, as defined in the `Operation` object. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeOperations: true,
    // boolean | Includes likes associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeLikes: true,
    // boolean | Includes versions associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.  A `meta` and `_links` property will be present to indicate if more results are available and a link to retrieve the rest of the results. (optional)
    includeVersions: true,
    // boolean | Includes the current version associated with this page in the response. By default this is included and can be omitted by setting the value to `false`. (optional)
    includeVersion: true,
    // boolean | Includes whether this page has been favorited by the current user. (optional)
    includeFavoritedByCurrentUserStatus: true,
    // boolean | Includes web resources that can be used to render page content on a client. (optional)
    includeWebresources: true,
    // boolean | Includes collaborators on the page. (optional)
    includeCollaborators: true,
    // boolean | Includes direct children of the page, as defined in the `ChildrenResponse` object. (optional)
    includeDirectChildren: true,
  } satisfies GetPageByIdRequest;

  try {
    const data = await api.getPageById(body);
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
| **id** | `number` | The ID of the page to be returned. If you don\&#39;t know the page ID, use Get pages and filter the results. | [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentationSingle` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format, view, export_view, anonymous_export_view, styled_view, editor] |
| **getDraft** | `boolean` | Retrieve the draft version of this page. | [Optional] [Defaults to `false`] |
| **status** | `current`, `archived`, `trashed`, `deleted`, `historical`, `draft` | Filter the page being retrieved by its status. | [Optional] [Enum: current, archived, trashed, deleted, historical, draft] |
| **version** | `number` | Allows you to retrieve a previously published version. Specify the previous version\&#39;s number to retrieve its details. | [Optional] [Defaults to `undefined`] |
| **includeLabels** | `boolean` | Includes labels associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeProperties** | `boolean` | Includes content properties associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeOperations** | `boolean` | Includes operations associated with this page in the response, as defined in the &#x60;Operation&#x60; object. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeLikes** | `boolean` | Includes likes associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersions** | `boolean` | Includes versions associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.  A &#x60;meta&#x60; and &#x60;_links&#x60; property will be present to indicate if more results are available and a link to retrieve the rest of the results. | [Optional] [Defaults to `false`] |
| **includeVersion** | `boolean` | Includes the current version associated with this page in the response. By default this is included and can be omitted by setting the value to &#x60;false&#x60;. | [Optional] [Defaults to `true`] |
| **includeFavoritedByCurrentUserStatus** | `boolean` | Includes whether this page has been favorited by the current user. | [Optional] [Defaults to `false`] |
| **includeWebresources** | `boolean` | Includes web resources that can be used to render page content on a client. | [Optional] [Defaults to `false`] |
| **includeCollaborators** | `boolean` | Includes collaborators on the page. | [Optional] [Defaults to `false`] |
| **includeDirectChildren** | `boolean` | Includes direct children of the page, as defined in the &#x60;ChildrenResponse&#x60; object. | [Optional] [Defaults to `false`] |

### Return type

[**CreatePage200Response**](CreatePage200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested page is returned. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the requested page or the page was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPages

> MultiEntityResultPage getPages(id, spaceId, sort, status, title, bodyFormat, subtype, cursor, limit)

Get pages

Returns all pages. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission). Only pages that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  PageApi,
} from 'confluence-cloud-api-v2';
import type { GetPagesRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PageApi(config);

  const body = {
    // Array<number> | Filter the results based on page ids. Multiple page ids can be specified as a comma-separated list. (optional)
    id: ...,
    // Array<number> | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. (optional)
    spaceId: ...,
    // PageSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // Array<'current' | 'archived' | 'deleted' | 'trashed'> | Filter the results to pages based on their status. By default, `current` and `archived` are used. (optional)
    status: ...,
    // string | Filter the results to pages based on their title. (optional)
    title: title_example,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // 'live' | 'page' | Filter the results to pages based on their subtype. (optional)
    subtype: subtype_example,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetPagesRequest;

  try {
    const data = await api.getPages(body);
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
| **id** | `Array<number>` | Filter the results based on page ids. Multiple page ids can be specified as a comma-separated list. | [Optional] |
| **spaceId** | `Array<number>` | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list. | [Optional] |
| **sort** | `PageSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date, title, -title] |
| **status** | `current`, `archived`, `deleted`, `trashed` | Filter the results to pages based on their status. By default, &#x60;current&#x60; and &#x60;archived&#x60; are used. | [Optional] [Enum: current, archived, deleted, trashed] |
| **title** | `string` | Filter the results to pages based on their title. | [Optional] [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **subtype** | `live`, `page` | Filter the results to pages based on their subtype. | [Optional] [Defaults to `undefined`] [Enum: live, page] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultPage**](MultiEntityResultPage.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested pages are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/pages?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPagesInSpace

> MultiEntityResultPage getPagesInSpace(id, depth, sort, status, title, bodyFormat, cursor, limit)

Get pages in space

Returns all pages in a space. The number of results is limited by the &#x60;limit&#x60; parameter and additional results (if available) will be available through the &#x60;next&#x60; URL present in the &#x60;Link&#x60; response header.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to access the Confluence site (\&#39;Can use\&#39; global permission) and \&#39;View\&#39; permission for the space. Only pages that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  PageApi,
} from 'confluence-cloud-api-v2';
import type { GetPagesInSpaceRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PageApi(config);

  const body = {
    // number | The ID of the space for which pages should be returned.
    id: 789,
    // 'all' | 'root' | Filter the results to pages at the root level of the space or to all pages in the space. (optional)
    depth: depth_example,
    // PageSortOrder | Used to sort the result by a particular field. (optional)
    sort: ...,
    // Array<'current' | 'archived' | 'deleted' | 'trashed'> | Filter the results to pages based on their status. By default, `current` and `archived` are used. (optional)
    status: ...,
    // string | Filter the results to pages based on their title. (optional)
    title: title_example,
    // PrimaryBodyRepresentation | The content format types to be returned in the `body` field of the response. If available, the representation will be available under a response field of the same name under the `body` field. (optional)
    bodyFormat: ...,
    // string | Used for pagination, this opaque cursor will be returned in the `next` URL in the `Link` response header. Use the relative URL in the `Link` header to retrieve the `next` set of results. (optional)
    cursor: cursor_example,
    // number | Maximum number of pages per result to return. If more results exist, use the `Link` header to retrieve a relative URL that will return the next set of results. (optional)
    limit: 56,
  } satisfies GetPagesInSpaceRequest;

  try {
    const data = await api.getPagesInSpace(body);
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
| **id** | `number` | The ID of the space for which pages should be returned. | [Defaults to `undefined`] |
| **depth** | `all`, `root` | Filter the results to pages at the root level of the space or to all pages in the space. | [Optional] [Defaults to `&#39;all&#39;`] [Enum: all, root] |
| **sort** | `PageSortOrder` | Used to sort the result by a particular field. | [Optional] [Defaults to `undefined`] [Enum: id, -id, created-date, -created-date, modified-date, -modified-date, title, -title] |
| **status** | `current`, `archived`, `deleted`, `trashed` | Filter the results to pages based on their status. By default, &#x60;current&#x60; and &#x60;archived&#x60; are used. | [Optional] [Enum: current, archived, deleted, trashed] |
| **title** | `string` | Filter the results to pages based on their title. | [Optional] [Defaults to `undefined`] |
| **bodyFormat** | `PrimaryBodyRepresentation` | The content format types to be returned in the &#x60;body&#x60; field of the response. If available, the representation will be available under a response field of the same name under the &#x60;body&#x60; field. | [Optional] [Defaults to `undefined`] [Enum: storage, atlas_doc_format] |
| **cursor** | `string` | Used for pagination, this opaque cursor will be returned in the &#x60;next&#x60; URL in the &#x60;Link&#x60; response header. Use the relative URL in the &#x60;Link&#x60; header to retrieve the &#x60;next&#x60; set of results. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of pages per result to return. If more results exist, use the &#x60;Link&#x60; header to retrieve a relative URL that will return the next set of results. | [Optional] [Defaults to `25`] |

### Return type

[**MultiEntityResultPage**](MultiEntityResultPage.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested pages are returned. |  * Link - This header contains URL(s) within angle brackets and a relation description for each URL, describing how the provided URL relates to the incoming request\&#39;s URL. For example, rel&#x3D;\&quot;next\&quot; would be the URL necessary to get the next page of information. Example response header format: &#x60;Link: &lt;/wiki/api/v2/spaces/&lt;id&gt;/pages?cursor&#x3D;&lt;opaque cursor token&gt;&gt;; rel&#x3D;\&quot;next\&quot;, &lt;https://site.atlassian.net/wiki&gt;; rel&#x3D;\&quot;base\&quot;&#x60;  <br>  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if the calling user does not have permission to view the specified space or the space was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePage

> CreatePage200Response updatePage(id, updatePageRequest)

Update page

Update a page by id.  When the \&quot;current\&quot; version is updated, the provided body content is considered as the latest version. This latest body content will be attempted to be merged into the draft version through a content reconciliation algorithm. If two versions are significantly diverged,  the latest provided content may entirely override what was previously in the draft.   **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space. Permission to update pages in the space.

### Example

```ts
import {
  Configuration,
  PageApi,
} from 'confluence-cloud-api-v2';
import type { UpdatePageOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PageApi(config);

  const body = {
    // number | The ID of the page to be updated. If you don\'t know the page ID, use Get Pages and filter the results.
    id: 789,
    // UpdatePageRequest
    updatePageRequest: ...,
  } satisfies UpdatePageOperationRequest;

  try {
    const data = await api.updatePage(body);
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
| **id** | `number` | The ID of the page to be updated. If you don\&#39;t know the page ID, use Get Pages and filter the results. | [Defaults to `undefined`] |
| **updatePageRequest** | [UpdatePageRequest](UpdatePageRequest.md) |  | |

### Return type

[**CreatePage200Response**](CreatePage200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested page is successfully updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided page does not exist - The user does not have permissions to view the page - The user does not have the needed permissions to update a page in the space - The user provides a parentId for a page that does not exist or they do not have permission to view - There are no spaces associated with the given spaceId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updatePageTitle

> CreatePage200Response updatePageTitle(id, updatePageTitleRequest)

Update page title

Updates the title of a specified page.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the page and its corresponding space. Permission to update pages in the space.

### Example

```ts
import {
  Configuration,
  PageApi,
} from 'confluence-cloud-api-v2';
import type { UpdatePageTitleOperationRequest } from 'confluence-cloud-api-v2';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v2 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new PageApi(config);

  const body = {
    // number | The ID of the page to be updated. If you don\'t know the page ID, use Get Pages and filter the results
    id: 789,
    // UpdatePageTitleRequest
    updatePageTitleRequest: ...,
  } satisfies UpdatePageTitleOperationRequest;

  try {
    const data = await api.updatePageTitle(body);
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
| **id** | `number` | The ID of the page to be updated. If you don\&#39;t know the page ID, use Get Pages and filter the results | [Defaults to `undefined`] |
| **updatePageTitleRequest** | [UpdatePageTitleRequest](UpdatePageTitleRequest.md) |  | |

### Return type

[**CreatePage200Response**](CreatePage200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested page is successfully updated. |  -  |
| **400** | Returned if an invalid request is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **404** | Returned if: - The provided page does not exist - The user does not have permissions to view the page - The user does not have the needed permissions to update a page in the space - The user provides a parentId for a page that does not exist or they do not have permission to view - There are no spaces associated with the given spaceId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

