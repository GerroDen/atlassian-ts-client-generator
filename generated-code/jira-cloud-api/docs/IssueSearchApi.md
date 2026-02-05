# IssueSearchApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**countIssues**](IssueSearchApi.md#countissues) | **POST** /rest/api/3/search/approximate-count | Count issues using JQL |
| [**getIssuePickerResource**](IssueSearchApi.md#getissuepickerresource) | **GET** /rest/api/3/issue/picker | Get issue picker suggestions |
| [**matchIssues**](IssueSearchApi.md#matchissues) | **POST** /rest/api/3/jql/match | Check issues against JQL |
| [**searchAndReconsileIssuesUsingJql**](IssueSearchApi.md#searchandreconsileissuesusingjql) | **GET** /rest/api/3/search/jql | Search for issues using JQL enhanced search (GET) |
| [**searchAndReconsileIssuesUsingJqlPost**](IssueSearchApi.md#searchandreconsileissuesusingjqlpost) | **POST** /rest/api/3/search/jql | Search for issues using JQL enhanced search (POST) |
| [**searchForIssuesUsingJql**](IssueSearchApi.md#searchforissuesusingjql) | **GET** /rest/api/3/search | Currently being removed. Search for issues using JQL (GET) |
| [**searchForIssuesUsingJqlPost**](IssueSearchApi.md#searchforissuesusingjqlpost) | **POST** /rest/api/3/search | Currently being removed. Search for issues using JQL (POST) |



## countIssues

> JQLCountResultsBean countIssues(jQLCountRequestBean)

Count issues using JQL

Provide an estimated count of the issues that match the [JQL](https://confluence.atlassian.com/x/egORLQ). Recent updates might not be immediately visible in the returned output. This endpoint requires JQL to be bounded.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Issues are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueSearchApi,
} from 'jira-cloud-api';
import type { CountIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSearchApi(config);

  const body = {
    // JQLCountRequestBean | A JSON object containing the search request.
    jQLCountRequestBean: {"jql":"project = HSP"},
  } satisfies CountIssuesRequest;

  try {
    const data = await api.countIssues(body);
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
| **jQLCountRequestBean** | [JQLCountRequestBean](JQLCountRequestBean.md) | A JSON object containing the search request. | |

### Return type

[**JQLCountResultsBean**](JQLCountResultsBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the JQL query cannot be parsed. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIssuePickerResource

> IssuePickerSuggestions getIssuePickerResource(query, currentJQL, currentIssueKey, currentProjectId, showSubTasks, showSubTaskParent)

Get issue picker suggestions

Returns lists of issues matching a query string. Use this resource to provide auto-completion suggestions when the user is looking for an issue using a word or string.  This operation returns two lists:   *  &#x60;History Search&#x60; which includes issues from the user\&#39;s history of created, edited, or viewed issues that contain the string in the &#x60;query&#x60; parameter.  *  &#x60;Current Search&#x60; which includes issues that match the JQL expression in &#x60;currentJQL&#x60; and contain the string in the &#x60;query&#x60; parameter.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  IssueSearchApi,
} from 'jira-cloud-api';
import type { GetIssuePickerResourceRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSearchApi(config);

  const body = {
    // string | A string to match against text fields in the issue such as title, description, or comments. (optional)
    query: query,
    // string | A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead. (optional)
    currentJQL: currentJQL_example,
    // string | The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query. (optional)
    currentIssueKey: currentIssueKey_example,
    // string | The ID of a project that suggested issues must belong to. (optional)
    currentProjectId: currentProjectId_example,
    // boolean | Indicate whether to include subtasks in the suggestions list. (optional)
    showSubTasks: true,
    // boolean | When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query. (optional)
    showSubTaskParent: true,
  } satisfies GetIssuePickerResourceRequest;

  try {
    const data = await api.getIssuePickerResource(body);
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
| **query** | `string` | A string to match against text fields in the issue such as title, description, or comments. | [Optional] [Defaults to `undefined`] |
| **currentJQL** | `string` | A JQL query defining a list of issues to search for the query term. Note that &#x60;username&#x60; and &#x60;userkey&#x60; cannot be used as search terms for this parameter, due to privacy reasons. Use &#x60;accountId&#x60; instead. | [Optional] [Defaults to `undefined`] |
| **currentIssueKey** | `string` | The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query. | [Optional] [Defaults to `undefined`] |
| **currentProjectId** | `string` | The ID of a project that suggested issues must belong to. | [Optional] [Defaults to `undefined`] |
| **showSubTasks** | `boolean` | Indicate whether to include subtasks in the suggestions list. | [Optional] [Defaults to `undefined`] |
| **showSubTaskParent** | `boolean` | When &#x60;currentIssueKey&#x60; is a subtask, whether to include the parent issue in the suggestions if it matches the query. | [Optional] [Defaults to `undefined`] |

### Return type

[**IssuePickerSuggestions**](IssuePickerSuggestions.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## matchIssues

> IssueMatches matchIssues(issuesAndJQLQueries)

Check issues against JQL

Checks whether one or more issues would be returned by one or more JQL queries.  **[Permissions](#permissions) required:** None, however, issues are only matched against JQL queries where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueSearchApi,
} from 'jira-cloud-api';
import type { MatchIssuesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSearchApi(config);

  const body = {
    // IssuesAndJQLQueries
    issuesAndJQLQueries: {"issueIds":[10001,1000,10042],"jqls":["project = FOO","issuetype = Bug","summary ~ \"some text\" AND project in (FOO, BAR)"]},
  } satisfies MatchIssuesRequest;

  try {
    const data = await api.matchIssues(body);
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
| **issuesAndJQLQueries** | [IssuesAndJQLQueries](IssuesAndJQLQueries.md) |  | |

### Return type

[**IssueMatches**](IssueMatches.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if &#x60;jqls&#x60; exceeds the maximum number of JQL queries or &#x60;issueIds&#x60; exceeds the maximum number of issue IDs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAndReconsileIssuesUsingJql

> SearchAndReconcileResults searchAndReconsileIssuesUsingJql(jql, nextPageToken, maxResults, fields, expand, properties, fieldsByKeys, failFast, reconcileIssues)

Search for issues using JQL enhanced search (GET)

Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ). Recent updates might not be immediately visible in the returned search results. If you need [read-after-write](https://developer.atlassian.com/cloud/jira/platform/search-and-reconcile/) consistency, you can utilize the &#x60;reconcileIssues&#x60; parameter to ensure stronger consistency assurances. This operation can be accessed anonymously.  If the JQL query expression is too large to be encoded as a query parameter, use the [POST](#api-rest-api-3-search-post) version of this resource.  **[Permissions](#permissions) required:** Issues are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueSearchApi,
} from 'jira-cloud-api';
import type { SearchAndReconsileIssuesUsingJqlRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSearchApi(config);

  const body = {
    // string | A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.   *  Example of an unbounded query: `order by key desc`.  *  Example of a bounded query: `assignee = currentUser() order by key`.  Additionally, `orderBy` clause can contain a maximum of 7 fields. (optional)
    jql: project = HSP,
    // string | The token for a page to fetch that is not the first page. The first page has a `nextPageToken` of `null`. Use the `nextPageToken` to fetch the next page of issues.  Note: The `nextPageToken` field is **not included** in the response for the last page, indicating there is no next page. (optional)
    nextPageToken: <string>,
    // number | The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields or properties are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. It returns max 5000 issues. (optional)
    maxResults: 114,
    // Array<string> | A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  `id` Returns only issue IDs.  *  Any issue field, prefixed with a minus to exclude.  The default is `id`.  Examples:   *  `summary,comment` Returns only the summary and comments fields only.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  Multiple `fields` parameters can be included in a request.  Note: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. (optional)
    fields: ...,
    // string | Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a comma-delimited string of values. The expand options are:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field\'s value, with the highest numbered item representing the most recent version.  Examples: `\"names,changelog\"` Returns the display name of each field as well as a list of recent updates to an issue. (optional)
    expand: <string>,
    // Array<string> | A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list. (optional)
    properties: ...,
    // boolean | Reference fields by their key (rather than ID). The default is `false`. (optional)
    fieldsByKeys: true,
    // boolean | Fail this request early if we can\'t retrieve all field data. (optional)
    failFast: true,
    // Array<number> | Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids. This list of ids should be consistent with each paginated request across different pages. (optional)
    reconcileIssues: ...,
  } satisfies SearchAndReconsileIssuesUsingJqlRequest;

  try {
    const data = await api.searchAndReconsileIssuesUsingJql(body);
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
| **jql** | `string` | A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.   *  Example of an unbounded query: &#x60;order by key desc&#x60;.  *  Example of a bounded query: &#x60;assignee &#x3D; currentUser() order by key&#x60;.  Additionally, &#x60;orderBy&#x60; clause can contain a maximum of 7 fields. | [Optional] [Defaults to `undefined`] |
| **nextPageToken** | `string` | The token for a page to fetch that is not the first page. The first page has a &#x60;nextPageToken&#x60; of &#x60;null&#x60;. Use the &#x60;nextPageToken&#x60; to fetch the next page of issues.  Note: The &#x60;nextPageToken&#x60; field is **not included** in the response for the last page, indicating there is no next page. | [Optional] [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields or properties are requested. The greatest number of items returned per page is achieved when requesting &#x60;id&#x60; or &#x60;key&#x60; only. It returns max 5000 issues. | [Optional] [Defaults to `50`] |
| **fields** | `Array<string>` | A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;*all&#x60; Returns all fields.  *  &#x60;*navigable&#x60; Returns navigable fields.  *  &#x60;id&#x60; Returns only issue IDs.  *  Any issue field, prefixed with a minus to exclude.  The default is &#x60;id&#x60;.  Examples:   *  &#x60;summary,comment&#x60; Returns only the summary and comments fields only.  *  &#x60;-description&#x60; Returns all navigable (default) fields except description.  *  &#x60;*all,-comment&#x60; Returns all fields except comments.  Multiple &#x60;fields&#x60; parameters can be included in a request.  Note: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. | [Optional] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where &#x60;expand&#x60; is specified, &#x60;expand&#x60; is defined as a comma-delimited string of values. The expand options are:   *  &#x60;renderedFields&#x60; Returns field values rendered in HTML format.  *  &#x60;names&#x60; Returns the display name of each field.  *  &#x60;schema&#x60; Returns the schema describing a field type.  *  &#x60;transitions&#x60; Returns all possible transitions for the issue.  *  &#x60;operations&#x60; Returns all possible operations for the issue.  *  &#x60;editmeta&#x60; Returns information about how each field can be edited.  *  &#x60;changelog&#x60; Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  &#x60;versionedRepresentations&#x60; Instead of &#x60;fields&#x60;, returns &#x60;versionedRepresentations&#x60; a JSON array containing each version of a field\&#39;s value, with the highest numbered item representing the most recent version.  Examples: &#x60;\&quot;names,changelog\&quot;&#x60; Returns the display name of each field as well as a list of recent updates to an issue. | [Optional] [Defaults to `undefined`] |
| **properties** | `Array<string>` | A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list. | [Optional] |
| **fieldsByKeys** | `boolean` | Reference fields by their key (rather than ID). The default is &#x60;false&#x60;. | [Optional] [Defaults to `false`] |
| **failFast** | `boolean` | Fail this request early if we can\&#39;t retrieve all field data. | [Optional] [Defaults to `false`] |
| **reconcileIssues** | `Array<number>` | Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids. This list of ids should be consistent with each paginated request across different pages. | [Optional] |

### Return type

[**SearchAndReconcileResults**](SearchAndReconcileResults.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the search request is invalid |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchAndReconsileIssuesUsingJqlPost

> SearchAndReconcileResults searchAndReconsileIssuesUsingJqlPost(searchAndReconcileRequestBean)

Search for issues using JQL enhanced search (POST)

Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ). Recent updates might not be immediately visible in the returned search results. If you need [read-after-write](https://developer.atlassian.com/cloud/jira/platform/search-and-reconcile/) consistency, you can utilize the &#x60;reconcileIssues&#x60; parameter to ensure stronger consistency assurances. This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Issues are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueSearchApi,
} from 'jira-cloud-api';
import type { SearchAndReconsileIssuesUsingJqlPostRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSearchApi(config);

  const body = {
    // SearchAndReconcileRequestBean
    searchAndReconcileRequestBean: ...,
  } satisfies SearchAndReconsileIssuesUsingJqlPostRequest;

  try {
    const data = await api.searchAndReconsileIssuesUsingJqlPost(body);
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
| **searchAndReconcileRequestBean** | [SearchAndReconcileRequestBean](SearchAndReconcileRequestBean.md) |  | |

### Return type

[**SearchAndReconcileResults**](SearchAndReconcileResults.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the search request is invalid |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchForIssuesUsingJql

> SearchResults searchForIssuesUsingJql(jql, startAt, maxResults, validateQuery, fields, expand, properties, fieldsByKeys, failFast)

Currently being removed. Search for issues using JQL (GET)

Endpoint is currently being removed. [More details](https://developer.atlassian.com/changelog/#CHANGE-2046)  Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ).  If the JQL query expression is too large to be encoded as a query parameter, use the [POST](#api-rest-api-3-search-post) version of this resource.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Issues are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueSearchApi,
} from 'jira-cloud-api';
import type { SearchForIssuesUsingJqlRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSearchApi(config);

  const body = {
    // string | The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:   *  If no JQL expression is provided, all issues are returned.  *  `username` and `userkey` cannot be used as search terms due to privacy reasons. Use `accountId` instead.  *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required. (optional)
    jql: project = HSP,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields or properties are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. (optional)
    maxResults: 56,
    // 'strict' | 'warn' | 'none' | 'true' | 'false' | Determines how to validate the JQL query and treat the validation results. Supported values are:   *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).  *  `warn` Returns all errors as warnings.  *  `none` No validation is performed.  *  `true` *Deprecated* A legacy synonym for `strict`.  *  `false` *Deprecated* A legacy synonym for `warn`.  Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value. (optional)
    validateQuery: validateQuery_example,
    // Array<string> | A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  This parameter may be specified multiple times. For example, `fields=field1,field2&fields=field3`.  Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. (optional)
    fields: ...,
    // string | Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field\'s value, with the highest numbered item representing the most recent version. (optional)
    expand: expand_example,
    // Array<string> | A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified. (optional)
    properties: ...,
    // boolean | Reference fields by their key (rather than ID). (optional)
    fieldsByKeys: true,
    // boolean | Whether to fail the request quickly in case of an error while loading fields for an issue. For `failFast=true`, if one field fails, the entire operation fails. For `failFast=false`, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s). (optional)
    failFast: true,
  } satisfies SearchForIssuesUsingJqlRequest;

  try {
    const data = await api.searchForIssuesUsingJql(body);
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
| **jql** | `string` | The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:   *  If no JQL expression is provided, all issues are returned.  *  &#x60;username&#x60; and &#x60;userkey&#x60; cannot be used as search terms due to privacy reasons. Use &#x60;accountId&#x60; instead.  *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields or properties are requested. The greatest number of items returned per page is achieved when requesting &#x60;id&#x60; or &#x60;key&#x60; only. | [Optional] [Defaults to `50`] |
| **validateQuery** | `strict`, `warn`, `none`, `true`, `false` | Determines how to validate the JQL query and treat the validation results. Supported values are:   *  &#x60;strict&#x60; Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).  *  &#x60;warn&#x60; Returns all errors as warnings.  *  &#x60;none&#x60; No validation is performed.  *  &#x60;true&#x60; *Deprecated* A legacy synonym for &#x60;strict&#x60;.  *  &#x60;false&#x60; *Deprecated* A legacy synonym for &#x60;warn&#x60;.  Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the &#x60;validateQuery&#x60; value. | [Optional] [Defaults to `&#39;strict&#39;`] [Enum: strict, warn, none, true, false] |
| **fields** | `Array<string>` | A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;*all&#x60; Returns all fields.  *  &#x60;*navigable&#x60; Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  &#x60;summary,comment&#x60; Returns only the summary and comments fields.  *  &#x60;-description&#x60; Returns all navigable (default) fields except description.  *  &#x60;*all,-comment&#x60; Returns all fields except comments.  This parameter may be specified multiple times. For example, &#x60;fields&#x3D;field1,field2&amp;fields&#x3D;field3&#x60;.  Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. | [Optional] |
| **expand** | `string` | Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;renderedFields&#x60; Returns field values rendered in HTML format.  *  &#x60;names&#x60; Returns the display name of each field.  *  &#x60;schema&#x60; Returns the schema describing a field type.  *  &#x60;transitions&#x60; Returns all possible transitions for the issue.  *  &#x60;operations&#x60; Returns all possible operations for the issue.  *  &#x60;editmeta&#x60; Returns information about how each field can be edited.  *  &#x60;changelog&#x60; Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  &#x60;versionedRepresentations&#x60; Instead of &#x60;fields&#x60;, returns &#x60;versionedRepresentations&#x60; a JSON array containing each version of a field\&#39;s value, with the highest numbered item representing the most recent version. | [Optional] [Defaults to `undefined`] |
| **properties** | `Array<string>` | A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, &#x60;properties&#x3D;prop1,prop2&amp;properties&#x3D;prop3&#x60;. A maximum of 5 issue property keys can be specified. | [Optional] |
| **fieldsByKeys** | `boolean` | Reference fields by their key (rather than ID). | [Optional] [Defaults to `false`] |
| **failFast** | `boolean` | Whether to fail the request quickly in case of an error while loading fields for an issue. For &#x60;failFast&#x3D;true&#x60;, if one field fails, the entire operation fails. For &#x60;failFast&#x3D;false&#x60;, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s). | [Optional] [Defaults to `false`] |

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the JQL query is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchForIssuesUsingJqlPost

> SearchResults searchForIssuesUsingJqlPost(searchRequestBean)

Currently being removed. Search for issues using JQL (POST)

Endpoint is currently being removed. [More details](https://developer.atlassian.com/changelog/#CHANGE-2046)  Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ).  There is a [GET](#api-rest-api-3-search-get) version of this resource that can be used for smaller JQL query expressions.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Issues are included in the response where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

```ts
import {
  Configuration,
  IssueSearchApi,
} from 'jira-cloud-api';
import type { SearchForIssuesUsingJqlPostRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new IssueSearchApi(config);

  const body = {
    // SearchRequestBean | A JSON object containing the search request.
    searchRequestBean: {"expand":["names","schema","operations"],"fields":["summary","status","assignee"],"fieldsByKeys":false,"jql":"project = HSP","maxResults":15,"startAt":0},
  } satisfies SearchForIssuesUsingJqlPostRequest;

  try {
    const data = await api.searchForIssuesUsingJqlPost(body);
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
| **searchRequestBean** | [SearchRequestBean](SearchRequestBean.md) | A JSON object containing the search request. | |

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the JQL query is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

