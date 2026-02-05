# ContentChildrenAndDescendantsApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**copyPage**](ContentChildrenAndDescendantsApi.md#copypageoperation) | **POST** /wiki/rest/api/content/{id}/copy | Copy single page |
| [**copyPageHierarchy**](ContentChildrenAndDescendantsApi.md#copypagehierarchyoperation) | **POST** /wiki/rest/api/content/{id}/pagehierarchy/copy | Copy page hierarchy |
| [**getContentDescendants**](ContentChildrenAndDescendantsApi.md#getcontentdescendants) | **GET** /wiki/rest/api/content/{id}/descendant | Get content descendants |
| [**getDescendantsOfType**](ContentChildrenAndDescendantsApi.md#getdescendantsoftype) | **GET** /wiki/rest/api/content/{id}/descendant/{type} | Get content descendants by type |
| [**movePage**](ContentChildrenAndDescendantsApi.md#movepage) | **PUT** /wiki/rest/api/content/{pageId}/move/{position}/{targetId} | Move a page to a new location relative to a target page |



## copyPage

> Content copyPage(id, request, expand)

Copy single page

Copies a single page and its associated properties, permissions, attachments, and custom contents.  The &#x60;id&#x60; path parameter refers to the content ID of the page to copy. The target of the page to be copied  is defined using the &#x60;destination&#x60; in the request body and can be one of the following types.    - &#x60;space&#x60;: page will be copied to the specified space as a root page on the space   - &#x60;parent_page&#x60;: page will be copied as a child of the specified parent page   - &#x60;parent_content&#x60;: page will be copied as a child of the specified parent content   - &#x60;existing_page&#x60;: page will be copied and replace the specified page  By default, the following objects are expanded: &#x60;space&#x60;, &#x60;history&#x60;, &#x60;version&#x60;.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;Add\&#39; permission for the space that the content will be copied in and permission to update the content if copying to an &#x60;existing_page&#x60;.

### Example

```ts
import {
  Configuration,
  ContentChildrenAndDescendantsApi,
} from 'confluence-cloud-api-v1';
import type { CopyPageOperationRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentChildrenAndDescendantsApi(config);

  const body = {
    // string
    id: id_example,
    // CopyPageRequest | Request object from json post body
    request: ...,
    // Array<string> | A multi-value parameter indicating which properties of the content to expand. Maximum sub-expansions allowed is `8`.  - `childTypes.all` returns whether the content has attachments, comments, or child pages/whiteboards. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `childTypes.whiteboard` returns whether the content has child whiteboards. - `childTypes.database` returns whether the content has child databases. - `childTypes.embed` returns whether the content has child embeds (smartlinks). - `childTypes.folder` returns whether the content has child folder. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favorite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` this property is only used by Atlassian. - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.whiteboard` returns whiteboards that are descendants at the level immediately below the content. - `children.database` returns databases that are descendants at the level immediately below the content. - `children.embed` returns embeds (smartlinks) that are descendants at the level immediately below the content. - `children.folder` returns folders that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn\'t remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups because deleting a group doesn\'t remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent content, if the content is a page or whiteboard. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `body.storage` returns the body of content in storage format. - `body.view` returns the body of content in view format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.whiteboard` returns whiteboards that are descendants at any level below the content. - `descendants.database` returns databases that are descendants at any level below the content. - `descendants.embed` returns embeds (smartlinks) that are descendants at any level below the content. - `descendants.folder` returns folders that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment. (optional)
    expand: ...,
  } satisfies CopyPageOperationRequest;

  try {
    const data = await api.copyPage(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **request** | [CopyPageRequest](CopyPageRequest.md) | Request object from json post body | |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the content to expand. Maximum sub-expansions allowed is &#x60;8&#x60;.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages/whiteboards. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;childTypes.whiteboard&#x60; returns whether the content has child whiteboards. - &#x60;childTypes.database&#x60; returns whether the content has child databases. - &#x60;childTypes.embed&#x60; returns whether the content has child embeds (smartlinks). - &#x60;childTypes.folder&#x60; returns whether the content has child folder. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favorite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; this property is only used by Atlassian. - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.whiteboard&#x60; returns whiteboards that are descendants at the level immediately below the content. - &#x60;children.database&#x60; returns databases that are descendants at the level immediately below the content. - &#x60;children.embed&#x60; returns embeds (smartlinks) that are descendants at the level immediately below the content. - &#x60;children.folder&#x60; returns folders that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn\&#39;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups because deleting a group doesn\&#39;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent content, if the content is a page or whiteboard. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;body.storage&#x60; returns the body of content in storage format. - &#x60;body.view&#x60; returns the body of content in view format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.whiteboard&#x60; returns whiteboards that are descendants at any level below the content. - &#x60;descendants.database&#x60; returns databases that are descendants at any level below the content. - &#x60;descendants.embed&#x60; returns embeds (smartlinks) that are descendants at any level below the content. - &#x60;descendants.folder&#x60; returns folders that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [Optional] |

### Return type

[**Content**](Content.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json;charset=UTF-8`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the content is copied. |  -  |
| **400** | Returned if;  - destination or any of its fields are not specified. - destination.type is invalid. - sub-expansions limit exceeds. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing from the request. |  -  |
| **403** | Returned if the user does not have permission to create content at destination. |  -  |
| **404** | Returned if;  - the original page doesn\&#39;t exist. - the destination page doesn’t exist. - the destination space doesn’t exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## copyPageHierarchy

> LongTask copyPageHierarchy(id, request)

Copy page hierarchy

Copy page hierarchy allows the copying of an entire hierarchy of pages and their associated properties, permissions and attachments.  The id path parameter refers to the content id of the page to copy, and the new parent of this copied page is defined using the destinationPageId in the request body.  The titleOptions object defines the rules of renaming page titles during the copy;  for example, search and replace can be used in conjunction to rewrite the copied page titles.   Response example:  &lt;pre&gt;&lt;code&gt;  {       \&quot;id\&quot; : \&quot;1180606\&quot;,       \&quot;links\&quot; : {            \&quot;status\&quot; : \&quot;/rest/api/longtask/1180606\&quot;       }  }  &lt;/code&gt;&lt;/pre&gt;  Use the /longtask/&lt;taskId&gt; REST API to get the copy task status.

### Example

```ts
import {
  Configuration,
  ContentChildrenAndDescendantsApi,
} from 'confluence-cloud-api-v1';
import type { CopyPageHierarchyOperationRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentChildrenAndDescendantsApi(config);

  const body = {
    // string
    id: id_example,
    // CopyPageHierarchyRequest | Request object from json post body
    request: ...,
  } satisfies CopyPageHierarchyOperationRequest;

  try {
    const data = await api.copyPageHierarchy(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **request** | [CopyPageHierarchyRequest](CopyPageHierarchyRequest.md) | Request object from json post body | |

### Return type

[**LongTask**](LongTask.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Returns a full JSON representation of a long running task |  -  |
| **400** | Returned if the title prefix is invalid (e.g. is empty, creates a conflict) |  -  |
| **403** | Returned if the user does not have permission to create content at source and destination |  -  |
| **404** | Returned if original page or destination page does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getContentDescendants

> ContentChildren getContentDescendants(id, expand)

Get content descendants

Returns a map of the descendants of a piece of content. This is similar to [Get content children](#api-content-id-child-get), except that this method returns child pages at all levels, rather than just the direct child pages.  A piece of content has different types of descendants, depending on its type:  - &#x60;page&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;whiteboard&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;database&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;embed&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;folder&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;blogpost&#x60;: descendant is &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;attachment&#x60;: descendant is &#x60;comment&#x60; - &#x60;comment&#x60;: descendant is &#x60;attachment&#x60;  The map will always include all descendant types that are valid for the content. However, if the content has no instances of a descendant type, the map will contain an empty array for that descendant type.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;View\&#39; permission for the space, and permission to view the content if it is a page.

### Example

```ts
import {
  Configuration,
  ContentChildrenAndDescendantsApi,
} from 'confluence-cloud-api-v1';
import type { GetContentDescendantsRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentChildrenAndDescendantsApi(config);

  const body = {
    // string | The ID of the content to be queried for its descendants.
    id: id_example,
    // Array<'attachment' | 'comment' | 'page'> | A multi-value parameter indicating which properties of the children to expand, where:  - `attachment` returns all attachments for the content. - `comments` returns all comments for the content. - `page` returns all child pages of the content. - `whiteboard` returns all child whiteboards of the content. - `database` returns all child databases of the content. - `embed` returns all child embeds of the content. - `folder` returns all child folders of the content. (optional)
    expand: ...,
  } satisfies GetContentDescendantsRequest;

  try {
    const data = await api.getContentDescendants(body);
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
| **id** | `string` | The ID of the content to be queried for its descendants. | [Defaults to `undefined`] |
| **expand** | `attachment`, `comment`, `page` | A multi-value parameter indicating which properties of the children to expand, where:  - &#x60;attachment&#x60; returns all attachments for the content. - &#x60;comments&#x60; returns all comments for the content. - &#x60;page&#x60; returns all child pages of the content. - &#x60;whiteboard&#x60; returns all child whiteboards of the content. - &#x60;database&#x60; returns all child databases of the content. - &#x60;embed&#x60; returns all child embeds of the content. - &#x60;folder&#x60; returns all child folders of the content. | [Optional] [Enum: attachment, comment, page] |

### Return type

[**ContentChildren**](ContentChildren.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested descendants are returned. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDescendantsOfType

> ContentArray getDescendantsOfType(id, type, depth, expand, start, limit)

Get content descendants by type

Returns all descendants of a given type, for a piece of content. This is similar to [Get content children by type](#api-content-id-child-type-get), except that this method returns child pages at all levels, rather than just the direct child pages.  A piece of content has different types of descendants, depending on its type:  - &#x60;page&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;whiteboard&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;database&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;embed&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;folder&#x60;: descendant is &#x60;page&#x60;, &#x60;whiteboard&#x60;, &#x60;database&#x60;, &#x60;embed&#x60;, &#x60;folder&#x60;, &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;blogpost&#x60;: descendant is &#x60;comment&#x60;, &#x60;attachment&#x60; - &#x60;attachment&#x60;: descendant is &#x60;comment&#x60; - &#x60;comment&#x60;: descendant is &#x60;attachment&#x60;  Custom content types that are provided by apps can also be returned.  If the expand query parameter is used with the &#x60;body.export_view&#x60; and/or &#x60;body.styled_view&#x60; properties, then the query limit parameter will be restricted to a maximum value of 25.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: \&#39;View\&#39; permission for the space, and permission to view the content if it is a page.

### Example

```ts
import {
  Configuration,
  ContentChildrenAndDescendantsApi,
} from 'confluence-cloud-api-v1';
import type { GetDescendantsOfTypeRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentChildrenAndDescendantsApi(config);

  const body = {
    // string | The ID of the content to be queried for its descendants.
    id: id_example,
    // 'page' | 'comment' | 'attachment' | The type of descendants to return.
    type: type_example,
    // 'all' | 'root' | '<any positive integer argument in the range of 1 and 100>' | Filter the results to descendants upto a desired level of the content. Note, the maximum value supported is 100. root level of the content means immediate (level 1) descendants of the type requested. all represents returning all descendants of the type requested. (optional)
    depth: depth_example,
    // Array<string> | A multi-value parameter indicating which properties of the content to expand.  - `childTypes.all` returns whether the content has attachments, comments, or child pages/whiteboards. Use this if you only need to check whether the content has children of a particular type. - `childTypes.attachment` returns whether the content has attachments. - `childTypes.comment` returns whether the content has comments. - `childTypes.page` returns whether the content has child pages. - `childTypes.whiteboard` returns whether the content has child whiteboards. - `childTypes.database` returns whether the content has child databases. - `childTypes.embed` returns whether the content has child embeds (smartlinks). - `childTypes.folder` returns whether the content has child folders. - `container` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - `metadata.currentuser` returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favorite. - `metadata.properties` returns content properties that have been set via the Confluence REST API. - `metadata.labels` returns the labels that have been added to the content. - `metadata.frontend` this property is only used by Atlassian. - `operations` returns the operations for the content, which are used when setting permissions. - `children.page` returns pages that are descendants at the level immediately below the content. - `children.whiteboard` returns whiteboards that are descendants at the level immediately below the content. - `children.database` returns databases that are descendants at the level immediately below the content. - `children.embed` returns embeds (smartlinks) that are descendants at the level immediately below the content. - `children.folder` returns folders that are descendants at the level immediately below the content. - `children.attachment` returns all attachments for the content. - `children.comment` returns all comments on the content. - `restrictions.read.restrictions.user` returns the users that have permission to read the content. - `restrictions.read.restrictions.group` returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn\'t remove associated restrictions. - `restrictions.update.restrictions.user` returns the users that have permission to update the content. - `restrictions.update.restrictions.group` returns the groups that have permission to update the content. Note that this may return deleted groups because deleting a group doesn\'t remove associated restrictions. - `history` returns the history of the content, including the date it was created. - `history.lastUpdated` returns information about the most recent update of the content, including who updated it and when it was updated. - `history.previousVersion` returns information about the update prior to the current content update. - `history.contributors` returns all of the users who have contributed to the content. - `history.nextVersion` returns information about the update after to the current content update. - `ancestors` returns the parent content, if the content is a page or whiteboard. - `body` returns the body of the content in different formats, including the editor format, view format, and export format. - `body.storage` returns the body of content in storage format. - `body.view` returns the body of content in view format. - `version` returns information about the most recent update of the content, including who updated it and when it was updated. - `descendants.page` returns pages that are descendants at any level below the content. - `descendants.whiteboard` returns whiteboards that are descendants at any level below the content. - `descendants.database` returns databases that are descendants at any level below the content. - `descendants.embed` returns embeds (smartlinks) that are descendants at any level below the content. - `descendants.folder` returns folders that are descendants at any level below the content. - `descendants.attachment` returns all attachments for the content, same as `children.attachment`. - `descendants.comment` returns all comments on the content, same as `children.comment`. - `space` returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - `extensions.inlineProperties` returns inline comment-specific properties. - `extensions.resolution` returns the resolution status of each comment. (optional)
    expand: ...,
    // number | The starting index of the returned content. (optional)
    start: 56,
    // number | The maximum number of content to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
  } satisfies GetDescendantsOfTypeRequest;

  try {
    const data = await api.getDescendantsOfType(body);
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
| **id** | `string` | The ID of the content to be queried for its descendants. | [Defaults to `undefined`] |
| **type** | `page`, `comment`, `attachment` | The type of descendants to return. | [Defaults to `undefined`] [Enum: page, comment, attachment] |
| **depth** | `all`, `root`, `<any positive integer argument in the range of 1 and 100>` | Filter the results to descendants upto a desired level of the content. Note, the maximum value supported is 100. root level of the content means immediate (level 1) descendants of the type requested. all represents returning all descendants of the type requested. | [Optional] [Defaults to `&#39;all&#39;`] [Enum: all, root, <any positive integer argument in the range of 1 and 100>] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the content to expand.  - &#x60;childTypes.all&#x60; returns whether the content has attachments, comments, or child pages/whiteboards. Use this if you only need to check whether the content has children of a particular type. - &#x60;childTypes.attachment&#x60; returns whether the content has attachments. - &#x60;childTypes.comment&#x60; returns whether the content has comments. - &#x60;childTypes.page&#x60; returns whether the content has child pages. - &#x60;childTypes.whiteboard&#x60; returns whether the content has child whiteboards. - &#x60;childTypes.database&#x60; returns whether the content has child databases. - &#x60;childTypes.embed&#x60; returns whether the content has child embeds (smartlinks). - &#x60;childTypes.folder&#x60; returns whether the content has child folders. - &#x60;container&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get). - &#x60;metadata.currentuser&#x60; returns information about the current user in relation to the content, including when they last viewed it, modified it, contributed to it, or added it as a favorite. - &#x60;metadata.properties&#x60; returns content properties that have been set via the Confluence REST API. - &#x60;metadata.labels&#x60; returns the labels that have been added to the content. - &#x60;metadata.frontend&#x60; this property is only used by Atlassian. - &#x60;operations&#x60; returns the operations for the content, which are used when setting permissions. - &#x60;children.page&#x60; returns pages that are descendants at the level immediately below the content. - &#x60;children.whiteboard&#x60; returns whiteboards that are descendants at the level immediately below the content. - &#x60;children.database&#x60; returns databases that are descendants at the level immediately below the content. - &#x60;children.embed&#x60; returns embeds (smartlinks) that are descendants at the level immediately below the content. - &#x60;children.folder&#x60; returns folders that are descendants at the level immediately below the content. - &#x60;children.attachment&#x60; returns all attachments for the content. - &#x60;children.comment&#x60; returns all comments on the content. - &#x60;restrictions.read.restrictions.user&#x60; returns the users that have permission to read the content. - &#x60;restrictions.read.restrictions.group&#x60; returns the groups that have permission to read the content. Note that this may return deleted groups, because deleting a group doesn\&#39;t remove associated restrictions. - &#x60;restrictions.update.restrictions.user&#x60; returns the users that have permission to update the content. - &#x60;restrictions.update.restrictions.group&#x60; returns the groups that have permission to update the content. Note that this may return deleted groups because deleting a group doesn\&#39;t remove associated restrictions. - &#x60;history&#x60; returns the history of the content, including the date it was created. - &#x60;history.lastUpdated&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;history.previousVersion&#x60; returns information about the update prior to the current content update. - &#x60;history.contributors&#x60; returns all of the users who have contributed to the content. - &#x60;history.nextVersion&#x60; returns information about the update after to the current content update. - &#x60;ancestors&#x60; returns the parent content, if the content is a page or whiteboard. - &#x60;body&#x60; returns the body of the content in different formats, including the editor format, view format, and export format. - &#x60;body.storage&#x60; returns the body of content in storage format. - &#x60;body.view&#x60; returns the body of content in view format. - &#x60;version&#x60; returns information about the most recent update of the content, including who updated it and when it was updated. - &#x60;descendants.page&#x60; returns pages that are descendants at any level below the content. - &#x60;descendants.whiteboard&#x60; returns whiteboards that are descendants at any level below the content. - &#x60;descendants.database&#x60; returns databases that are descendants at any level below the content. - &#x60;descendants.embed&#x60; returns embeds (smartlinks) that are descendants at any level below the content. - &#x60;descendants.folder&#x60; returns folders that are descendants at any level below the content. - &#x60;descendants.attachment&#x60; returns all attachments for the content, same as &#x60;children.attachment&#x60;. - &#x60;descendants.comment&#x60; returns all comments on the content, same as &#x60;children.comment&#x60;. - &#x60;space&#x60; returns the space that the content is in. This is the same as the information returned by [Get space](#api-space-spaceKey-get).  In addition, the following comment-specific expansions can be used: - &#x60;extensions.inlineProperties&#x60; returns inline comment-specific properties. - &#x60;extensions.resolution&#x60; returns the resolution status of each comment. | [Optional] |
| **start** | `number` | The starting index of the returned content. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of content to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `25`] |

### Return type

[**ContentArray**](ContentArray.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested content is returned. |  -  |
| **400** | Returned if;  - Any of the required request params are missing. - The request is invalid such as negative start param, a format besides int32 for limit etc. |  -  |
| **404** | Returned if;  - There is no content with the given ID. - The calling user does not have permission to view the content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## movePage

> MovePage200Response movePage(pageId, position, targetId)

Move a page to a new location relative to a target page

Move a page to a new location relative to a target page:  * &#x60;before&#x60; - move the page under the same parent as the target, before the target in the list of children * &#x60;after&#x60; - move the page under the same parent as the target, after the target in the list of children * &#x60;append&#x60; - move the page to be a child of the target  Caution: This API can move pages to the top level of a space. Top-level pages are difficult to find in the UI because they do not show up in the page tree display. To avoid this, never use &#x60;before&#x60; or &#x60;after&#x60; positions when the &#x60;targetId&#x60; is a top-level page.

### Example

```ts
import {
  Configuration,
  ContentChildrenAndDescendantsApi,
} from 'confluence-cloud-api-v1';
import type { MovePageRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentChildrenAndDescendantsApi(config);

  const body = {
    // string | The ID of the page to be moved
    pageId: pageId_example,
    // 'before' | 'after' | 'append' | The position to move the page to relative to the target page: * `before` - move the page under the same parent as the target, before the target in the list of children * `after` - move the page under the same parent as the target, after the target in the list of children * `append` - move the page to be a child of the target
    position: position_example,
    // string | The ID of the target page for this operation
    targetId: targetId_example,
  } satisfies MovePageRequest;

  try {
    const data = await api.movePage(body);
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
| **pageId** | `string` | The ID of the page to be moved | [Defaults to `undefined`] |
| **position** | `before`, `after`, `append` | The position to move the page to relative to the target page: * &#x60;before&#x60; - move the page under the same parent as the target, before the target in the list of children * &#x60;after&#x60; - move the page under the same parent as the target, after the target in the list of children * &#x60;append&#x60; - move the page to be a child of the target | [Defaults to `undefined`] [Enum: before, after, append] |
| **targetId** | `string` | The ID of the target page for this operation | [Defaults to `undefined`] |

### Return type

[**MovePage200Response**](MovePage200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page was successfully moved |  -  |
| **400** | Returned if;  - A page already exists in the target space with the same name.   User is advised to rename page before moving. - The move would create a parent-child loop (page becomes a descendant and ancestor of itself) - The page has permission restrictions that the user does not have permission to create in the target space.   User is advised to remove restrictions before moving. |  -  |
| **403** | Returned if;  - User does not have permission to remove page from current space - User does not have permission to create a page in target space |  -  |
| **404** | Returned if;  - The id or targetId refer to non-existent pages |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

