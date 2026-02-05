# SearchApi

All URIs are relative to *http://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**searchByCQL**](SearchApi.md#searchbycql) | **GET** /wiki/rest/api/search | Search content |
| [**searchUser**](SearchApi.md#searchuser) | **GET** /wiki/rest/api/search/user | Search users |



## searchByCQL

> SearchPageResponseSearchResult searchByCQL(cql, cqlcontext, cursor, next, prev, limit, start, includeArchivedSpaces, excludeCurrentSpaces, excerpt, sitePermissionTypeFilter, u, expand)

Search content

Searches for content using the [Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).  **Note that CQL input queries submitted through the &#x60;/wiki/rest/api/search&#x60; endpoint no longer support user-specific fields like &#x60;user&#x60;, &#x60;user.fullname&#x60;, &#x60;user.accountid&#x60;, and &#x60;user.userkey&#x60;.**  See this [deprecation notice](https://developer.atlassian.com/cloud/confluence/deprecation-notice-search-api/) for more details.  Example initial call: &#x60;&#x60;&#x60; /wiki/rest/api/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25 &#x60;&#x60;&#x60;  Example response: &#x60;&#x60;&#x60; {   \&quot;results\&quot;: [     { ... },     { ... },     ...     { ... }   ],   \&quot;limit\&quot;: 25,   \&quot;size\&quot;: 25,   ...   \&quot;_links\&quot;: {     \&quot;base\&quot;: \&quot;&lt;url&gt;\&quot;,     \&quot;context\&quot;: \&quot;&lt;url&gt;\&quot;,     \&quot;next\&quot;: \&quot;/rest/api/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25&amp;cursor&#x3D;raNDoMsTRiNg\&quot;,     \&quot;self\&quot;: \&quot;&lt;url&gt;\&quot;   } } &#x60;&#x60;&#x60;  When additional results are available, returns &#x60;next&#x60; and &#x60;prev&#x60; URLs to retrieve them in subsequent calls. The URLs each contain a cursor that points to the appropriate set of results. Use &#x60;limit&#x60; to specify the number of results returned in each call.  Example subsequent call (taken from example response): &#x60;&#x60;&#x60; /wiki/rest/api/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25&amp;cursor&#x3D;raNDoMsTRiNg &#x60;&#x60;&#x60; The response to this will have a &#x60;prev&#x60; URL similar to the &#x60;next&#x60; in the example response.  If the expand query parameter is used with the &#x60;body.export_view&#x60; and/or &#x60;body.styled_view&#x60; properties, then the query limit parameter will be restricted to a maximum value of 25.  **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: Permission to view the entities. Note, only entities that the user has permission to view will be returned.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'confluence-cloud-api-v1';
import type { SearchByCQLRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SearchApi(config);

  const body = {
    // string | The CQL query to be used for the search. See [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/) for instructions on how to build a CQL query.
    cql: cql_example,
    // string | The space, content, and content status to execute the search against.  - `spaceKey` Key of the space to search against. Optional. - `contentId` ID of the content to search against. Optional. Must be in the space specified by `spaceKey`. - `contentStatuses` Content statuses to search against. Optional.  Specify these values in an object. For example, `cqlcontext={%22spaceKey%22:%22TEST%22, %22contentId%22:%22123%22}` (optional)
    cqlcontext: cqlcontext_example,
    // string | Pointer to a set of search results, returned as part of the `next` or `prev` URL from the previous search call. (optional)
    cursor: cursor_example,
    // boolean (optional)
    next: true,
    // boolean (optional)
    prev: true,
    // number | The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
    // number | The start point of the collection to return (optional)
    start: 56,
    // boolean | Whether to include content from archived spaces in the results. (optional)
    includeArchivedSpaces: true,
    // boolean | Whether to exclude current spaces and only show archived spaces. (optional)
    excludeCurrentSpaces: true,
    // 'highlight' | 'indexed' | 'none' | 'highlight_unescaped' | 'indexed_unescaped' | The excerpt strategy to apply to the result (optional)
    excerpt: excerpt_example,
    // 'all' | 'externalCollaborator' | 'none' | Filters users by permission type. Use `none` to default to licensed users, `externalCollaborator` for external/guest users, and `all` to include all permission types. (optional)
    sitePermissionTypeFilter: sitePermissionTypeFilter_example,
    // number (optional)
    u: 789,
    // Array<string> (optional)
    expand: ...,
  } satisfies SearchByCQLRequest;

  try {
    const data = await api.searchByCQL(body);
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
| **cql** | `string` | The CQL query to be used for the search. See [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/) for instructions on how to build a CQL query. | [Defaults to `undefined`] |
| **cqlcontext** | `string` | The space, content, and content status to execute the search against.  - &#x60;spaceKey&#x60; Key of the space to search against. Optional. - &#x60;contentId&#x60; ID of the content to search against. Optional. Must be in the space specified by &#x60;spaceKey&#x60;. - &#x60;contentStatuses&#x60; Content statuses to search against. Optional.  Specify these values in an object. For example, &#x60;cqlcontext&#x3D;{%22spaceKey%22:%22TEST%22, %22contentId%22:%22123%22}&#x60; | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Pointer to a set of search results, returned as part of the &#x60;next&#x60; or &#x60;prev&#x60; URL from the previous search call. | [Optional] [Defaults to `undefined`] |
| **next** | `boolean` |  | [Optional] [Defaults to `false`] |
| **prev** | `boolean` |  | [Optional] [Defaults to `false`] |
| **limit** | `number` | The maximum number of content objects to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `25`] |
| **start** | `number` | The start point of the collection to return | [Optional] [Defaults to `0`] |
| **includeArchivedSpaces** | `boolean` | Whether to include content from archived spaces in the results. | [Optional] [Defaults to `false`] |
| **excludeCurrentSpaces** | `boolean` | Whether to exclude current spaces and only show archived spaces. | [Optional] [Defaults to `false`] |
| **excerpt** | `highlight`, `indexed`, `none`, `highlight_unescaped`, `indexed_unescaped` | The excerpt strategy to apply to the result | [Optional] [Defaults to `&#39;highlight&#39;`] [Enum: highlight, indexed, none, highlight_unescaped, indexed_unescaped] |
| **sitePermissionTypeFilter** | `all`, `externalCollaborator`, `none` | Filters users by permission type. Use &#x60;none&#x60; to default to licensed users, &#x60;externalCollaborator&#x60; for external/guest users, and &#x60;all&#x60; to include all permission types. | [Optional] [Defaults to `&#39;none&#39;`] [Enum: all, externalCollaborator, none] |
| **u** | `number` |  | [Optional] [Defaults to `undefined`] |
| **expand** | `Array<string>` |  | [Optional] |

### Return type

[**SearchPageResponseSearchResult**](SearchPageResponseSearchResult.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested results are returned. |  -  |
| **400** | Returned if the CQL query cannot be parsed. |  -  |
| **403** | Returned if the calling user does not have permission to access Confluence. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchUser

> SearchPageResponseSearchResult searchUser(cql, start, limit, expand, sitePermissionTypeFilter)

Search users

Searches for users using user-specific queries from the [Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).  Note that CQL input queries submitted through the &#x60;/wiki/rest/api/search/user&#x60; endpoint only support user-specific fields like &#x60;user&#x60;, &#x60;user.fullname&#x60;, &#x60;user.accountid&#x60;, and &#x60;user.userkey&#x60;.  Note that some user fields may be set to null depending on the user\&#39;s privacy settings. These are: email, profilePicture, displayName, and timeZone.

### Example

```ts
import {
  Configuration,
  SearchApi,
} from 'confluence-cloud-api-v1';
import type { SearchUserRequest } from 'confluence-cloud-api-v1';

async function example() {
  console.log("🚀 Testing confluence-cloud-api-v1 SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // To configure OAuth2 access token for authorization: oAuthDefinitions accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SearchApi(config);

  const body = {
    // string | The CQL query to be used for the search. See [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/) for instructions on how to build a CQL query.  Example queries:           cql=type=user will return up to 10k users           cql=user=\"1234\" will return user with accountId \"1234\"           You can also use IN, NOT IN, != operators           cql=user IN (\"12\", \"34\") will return users with accountids \"12\" and \"34\"           cql=user.fullname~jo will return users with nickname/full name starting with \"jo\"           cql=user.accountid=\"123\" will return user with accountId \"123\"
    cql: cql_example,
    // number | The starting index of the returned users. (optional)
    start: 56,
    // number | The maximum number of user objects to return per page. Note, this may be restricted by fixed system limits. (optional)
    limit: 56,
    // Array<string> | A multi-value parameter indicating which properties of the user to expand.  - `operations` returns the operations for the user, which are used when setting permissions. - `personalSpace` returns the personal space of the user. (optional)
    expand: ...,
    // 'all' | 'externalCollaborator' | 'none' | Filters users by permission type. Use `none` to default to licensed users, `externalCollaborator` for external/guest users, and `all` to include all permission types. (optional)
    sitePermissionTypeFilter: sitePermissionTypeFilter_example,
  } satisfies SearchUserRequest;

  try {
    const data = await api.searchUser(body);
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
| **cql** | `string` | The CQL query to be used for the search. See [Advanced Searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/) for instructions on how to build a CQL query.  Example queries:           cql&#x3D;type&#x3D;user will return up to 10k users           cql&#x3D;user&#x3D;\&quot;1234\&quot; will return user with accountId \&quot;1234\&quot;           You can also use IN, NOT IN, !&#x3D; operators           cql&#x3D;user IN (\&quot;12\&quot;, \&quot;34\&quot;) will return users with accountids \&quot;12\&quot; and \&quot;34\&quot;           cql&#x3D;user.fullname~jo will return users with nickname/full name starting with \&quot;jo\&quot;           cql&#x3D;user.accountid&#x3D;\&quot;123\&quot; will return user with accountId \&quot;123\&quot; | [Defaults to `undefined`] |
| **start** | `number` | The starting index of the returned users. | [Optional] [Defaults to `0`] |
| **limit** | `number` | The maximum number of user objects to return per page. Note, this may be restricted by fixed system limits. | [Optional] [Defaults to `25`] |
| **expand** | `Array<string>` | A multi-value parameter indicating which properties of the user to expand.  - &#x60;operations&#x60; returns the operations for the user, which are used when setting permissions. - &#x60;personalSpace&#x60; returns the personal space of the user. | [Optional] |
| **sitePermissionTypeFilter** | `all`, `externalCollaborator`, `none` | Filters users by permission type. Use &#x60;none&#x60; to default to licensed users, &#x60;externalCollaborator&#x60; for external/guest users, and &#x60;all&#x60; to include all permission types. | [Optional] [Defaults to `&#39;none&#39;`] [Enum: all, externalCollaborator, none] |

### Return type

[**SearchPageResponseSearchResult**](SearchPageResponseSearchResult.md)

### Authorization

[basicAuth](../README.md#basicAuth), [oAuthDefinitions accessCode](../README.md#oAuthDefinitions-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the requested results are returned. |  -  |
| **400** | Returned if the CQL query cannot be parsed. |  -  |
| **403** | Returned if the calling user does not have permission to access Confluence. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

