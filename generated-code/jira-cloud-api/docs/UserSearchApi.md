# UserSearchApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findAssignableUsers**](UserSearchApi.md#findassignableusers) | **GET** /rest/api/3/user/assignable/search | Find users assignable to issues |
| [**findBulkAssignableUsers**](UserSearchApi.md#findbulkassignableusers) | **GET** /rest/api/3/user/assignable/multiProjectSearch | Find users assignable to projects |
| [**findUserKeysByQuery**](UserSearchApi.md#finduserkeysbyquery) | **GET** /rest/api/3/user/search/query/key | Find user keys by query |
| [**findUsers**](UserSearchApi.md#findusers) | **GET** /rest/api/3/user/search | Find users |
| [**findUsersByQuery**](UserSearchApi.md#findusersbyquery) | **GET** /rest/api/3/user/search/query | Find users by query |
| [**findUsersForPicker**](UserSearchApi.md#findusersforpicker) | **GET** /rest/api/3/user/picker | Find users for picker |
| [**findUsersWithAllPermissions**](UserSearchApi.md#finduserswithallpermissions) | **GET** /rest/api/3/user/permission/search | Find users with permissions |
| [**findUsersWithBrowsePermission**](UserSearchApi.md#finduserswithbrowsepermission) | **GET** /rest/api/3/user/viewissue/search | Find users with browse permission |



## findAssignableUsers

> Array&lt;User&gt; findAssignableUsers(query, sessionId, username, accountId, project, issueKey, issueId, startAt, maxResults, actionDescriptorId, recommend, accountType, appType)

Find users assignable to issues

Returns a list of users that can be assigned to an issue. Use this operation to find the list of users who can be assigned to:   *  a new issue, by providing the &#x60;projectKeyOrId&#x60;.  *  an updated issue, by providing the &#x60;issueKey&#x60; or &#x60;issueId&#x60;.  *  to an issue during a transition (workflow action), by providing the &#x60;issueKey&#x60; or &#x60;issueId&#x60; and the transition id in &#x60;actionDescriptorId&#x60;. You can obtain the IDs of an issue\&#39;s valid transitions using the &#x60;transitions&#x60; option in the &#x60;expand&#x60; parameter of [ Get issue](#api-rest-api-3-issue-issueIdOrKey-get).  In all these cases, you can pass an account ID to determine if a user can be assigned to an issue. The user is returned in the response if they can be assigned to the issue or issue transition.  This operation takes the users in the range defined by &#x60;startAt&#x60; and &#x60;maxResults&#x60;, up to the thousandth user, and then returns only the users from that range that can be assigned the issue. This means the operation usually returns fewer users than specified in &#x60;maxResults&#x60;. To get all the users who can be assigned the issue, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.  Privacy controls are applied to the response based on the users\&#39; preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Assign issues* [project permission](https://confluence.atlassian.com/x/yodKLg)

### Example

```ts
import {
  Configuration,
  UserSearchApi,
} from 'jira-cloud-api';
import type { FindAssignableUsersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserSearchApi(config);

  const body = {
    // string | A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute\'s value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `username` or `accountId` is specified. (optional)
    query: query,
    // string | The sessionId of this request. SessionId is the same until the assignee is set. (optional)
    sessionId: sessionId_example,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. (optional)
    accountId: accountId_example,
    // string | The project ID or project key (case sensitive). Required, unless `issueKey` or `issueId` is specified. (optional)
    project: project_example,
    // string | The key of the issue. Required, unless `issueId` or `project` is specified. (optional)
    issueKey: issueKey_example,
    // string | The ID of the issue. Required, unless `issueKey` or `project` is specified. (optional)
    issueId: issueId_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue. (optional)
    maxResults: 56,
    // number | The ID of the transition. (optional)
    actionDescriptorId: 56,
    // boolean (optional)
    recommend: true,
    // Array<string> (optional)
    accountType: ...,
    // Array<string> (optional)
    appType: ...,
  } satisfies FindAssignableUsersRequest;

  try {
    const data = await api.findAssignableUsers(body);
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
| **query** | `string` | A query string that is matched against user attributes, such as &#x60;displayName&#x60;, and &#x60;emailAddress&#x60;, to find relevant users. The string can match the prefix of the attribute\&#39;s value. For example, *query&#x3D;john* matches a user with a &#x60;displayName&#x60; of *John Smith* and a user with an &#x60;emailAddress&#x60; of *johnson@example.com*. Required, unless &#x60;username&#x60; or &#x60;accountId&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **sessionId** | `string` | The sessionId of this request. SessionId is the same until the assignee is set. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | A query string that is matched exactly against user &#x60;accountId&#x60;. Required, unless &#x60;query&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **project** | `string` | The project ID or project key (case sensitive). Required, unless &#x60;issueKey&#x60; or &#x60;issueId&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **issueKey** | `string` | The key of the issue. Required, unless &#x60;issueId&#x60; or &#x60;project&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **issueId** | `string` | The ID of the issue. Required, unless &#x60;issueKey&#x60; or &#x60;project&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue. | [Optional] [Defaults to `50`] |
| **actionDescriptorId** | `number` | The ID of the transition. | [Optional] [Defaults to `undefined`] |
| **recommend** | `boolean` |  | [Optional] [Defaults to `false`] |
| **accountType** | `Array<string>` |  | [Optional] |
| **appType** | `Array<string>` |  | [Optional] |

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  None of &#x60;issueKey&#x60;, &#x60;issueId&#x60; or &#x60;project&#x60; is present.  *  &#x60;issueId&#x60; parameter is not valid.  *  &#x60;query&#x60; or &#x60;accountId&#x60; is missing.  *  &#x60;query&#x60; and &#x60;accountId&#x60; are provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the project, issue, or transition is not found. |  -  |
| **429** | Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira\&#39;s normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findBulkAssignableUsers

> Array&lt;User&gt; findBulkAssignableUsers(projectKeys, query, username, accountId, startAt, maxResults)

Find users assignable to projects

Returns a list of users who can be assigned issues in one or more projects. The list may be restricted to users whose attributes match a string.  This operation takes the users in the range defined by &#x60;startAt&#x60; and &#x60;maxResults&#x60;, up to the thousandth user, and then returns only the users from that range that can be assigned issues in the projects. This means the operation usually returns fewer users than specified in &#x60;maxResults&#x60;. To get all the users who can be assigned issues in the projects, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.  Privacy controls are applied to the response based on the users\&#39; preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for each project specified in &#x60;projectKeys&#x60;.

### Example

```ts
import {
  Configuration,
  UserSearchApi,
} from 'jira-cloud-api';
import type { FindBulkAssignableUsersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserSearchApi(config);

  const body = {
    // string | A list of project keys (case sensitive). This parameter accepts a comma-separated list.
    projectKeys: projectKeys_example,
    // string | A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute\'s value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. (optional)
    query: query,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. (optional)
    accountId: accountId_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies FindBulkAssignableUsersRequest;

  try {
    const data = await api.findBulkAssignableUsers(body);
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
| **projectKeys** | `string` | A list of project keys (case sensitive). This parameter accepts a comma-separated list. | [Defaults to `undefined`] |
| **query** | `string` | A query string that is matched against user attributes, such as &#x60;displayName&#x60; and &#x60;emailAddress&#x60;, to find relevant users. The string can match the prefix of the attribute\&#39;s value. For example, *query&#x3D;john* matches a user with a &#x60;displayName&#x60; of *John Smith* and a user with an &#x60;emailAddress&#x60; of *johnson@example.com*. Required, unless &#x60;accountId&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | A query string that is matched exactly against user &#x60;accountId&#x60;. Required, unless &#x60;query&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;projectKeys&#x60; is missing.  *  &#x60;query&#x60; or &#x60;accountId&#x60; is missing.  *  &#x60;query&#x60; and &#x60;accountId&#x60; are provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if one or more of the projects is not found. |  -  |
| **429** | Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira\&#39;s normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUserKeysByQuery

> PageBeanUserKey findUserKeysByQuery(query, startAt, maxResult)

Find user keys by query

Finds users with a structured query and returns a [paginated](#pagination) list of user keys.  This operation takes the users in the range defined by &#x60;startAt&#x60; and &#x60;maxResults&#x60;, up to the thousandth user, and then returns only the users from that range that match the structured query. This means the operation usually returns fewer users than specified in &#x60;maxResults&#x60;. To get all the users who match the structured query, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).  The query statements are:   *  &#x60;is assignee of PROJ&#x60; Returns the users that are assignees of at least one issue in project *PROJ*.  *  &#x60;is assignee of (PROJ-1, PROJ-2)&#x60; Returns users that are assignees on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is reporter of (PROJ-1, PROJ-2)&#x60; Returns users that are reporters on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is watcher of (PROJ-1, PROJ-2)&#x60; Returns users that are watchers on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is voter of (PROJ-1, PROJ-2)&#x60; Returns users that are voters on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is commenter of (PROJ-1, PROJ-2)&#x60; Returns users that have posted a comment on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is transitioner of (PROJ-1, PROJ-2)&#x60; Returns users that have performed a transition on issues *PROJ-1* or *PROJ-2*.  *  &#x60;[propertyKey].entity.property.path is \&quot;property value\&quot;&#x60; Returns users with the entity property value. For example, if user property &#x60;location&#x60; is set to value &#x60;{\&quot;office\&quot;: {\&quot;country\&quot;: \&quot;AU\&quot;, \&quot;city\&quot;: \&quot;Sydney\&quot;}}&#x60;, then it\&#39;s possible to use &#x60;[location].office.city is \&quot;Sydney\&quot;&#x60; to match the user.  The list of issues can be extended as needed, as in *(PROJ-1, PROJ-2, ... PROJ-n)*. Statements can be combined using the &#x60;AND&#x60; and &#x60;OR&#x60; operators to form more complex queries. For example:  &#x60;is assignee of PROJ AND [propertyKey].entity.property.path is \&quot;property value\&quot;&#x60;

### Example

```ts
import {
  Configuration,
  UserSearchApi,
} from 'jira-cloud-api';
import type { FindUserKeysByQueryRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserSearchApi(config);

  const body = {
    // string | The search query.
    query: query_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResult: 56,
  } satisfies FindUserKeysByQueryRequest;

  try {
    const data = await api.findUserKeysByQuery(body);
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
| **query** | `string` | The search query. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResult** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |

### Return type

[**PageBeanUserKey**](PageBeanUserKey.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the query is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **408** | Returned if the search is timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsers

> Array&lt;User&gt; findUsers(query, username, accountId, startAt, maxResults, property)

Find users

Returns a list of active users that match the search string and property.  This operation first applies a filter to match the search string and property, and then takes the filtered users in the range defined by &#x60;startAt&#x60; and &#x60;maxResults&#x60;, up to the thousandth user. To get all the users who match the search string and property, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.  This operation can be accessed anonymously.  Privacy controls are applied to the response based on the users\&#39; preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls or calls by users without the required permission return empty search results.

### Example

```ts
import {
  Configuration,
  UserSearchApi,
} from 'jira-cloud-api';
import type { FindUsersRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserSearchApi(config);

  const body = {
    // string | A query string that is matched against user attributes ( `displayName`, and `emailAddress`) to find relevant users. The string can match the prefix of the attribute\'s value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` or `property` is specified. (optional)
    query: query,
    // string (optional)
    username: username_example,
    // string | A query string that is matched exactly against a user `accountId`. Required, unless `query` or `property` is specified. (optional)
    accountId: accountId_example,
    // number | The index of the first item to return in a page of filtered results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
    // string | A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of `nested` from `{\"something\":{\"nested\":1,\"other\":2}}` use `thepropertykey.something.nested=1`. Required, unless `accountId` or `query` is specified. (optional)
    property: property_example,
  } satisfies FindUsersRequest;

  try {
    const data = await api.findUsers(body);
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
| **query** | `string` | A query string that is matched against user attributes ( &#x60;displayName&#x60;, and &#x60;emailAddress&#x60;) to find relevant users. The string can match the prefix of the attribute\&#39;s value. For example, *query&#x3D;john* matches a user with a &#x60;displayName&#x60; of *John Smith* and a user with an &#x60;emailAddress&#x60; of *johnson@example.com*. Required, unless &#x60;accountId&#x60; or &#x60;property&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **username** | `string` |  | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | A query string that is matched exactly against a user &#x60;accountId&#x60;. Required, unless &#x60;query&#x60; or &#x60;property&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of filtered results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |
| **property** | `string` | A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (&#x3D;) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of &#x60;nested&#x60; from &#x60;{\&quot;something\&quot;:{\&quot;nested\&quot;:1,\&quot;other\&quot;:2}}&#x60; use &#x60;thepropertykey.something.nested&#x3D;1&#x60;. Required, unless &#x60;accountId&#x60; or &#x60;query&#x60; is specified. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;accountId&#x60;, &#x60;query&#x60; or &#x60;property&#x60; is missing.  *  &#x60;query&#x60; and &#x60;accountId&#x60; are provided.  *  &#x60;property&#x60; parameter is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **429** | Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira\&#39;s normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsersByQuery

> PageBeanUser findUsersByQuery(query, startAt, maxResults)

Find users by query

Finds users with a structured query and returns a [paginated](#pagination) list of user details.  This operation takes the users in the range defined by &#x60;startAt&#x60; and &#x60;maxResults&#x60;, up to the thousandth user, and then returns only the users from that range that match the structured query. This means the operation usually returns fewer users than specified in &#x60;maxResults&#x60;. To get all the users who match the structured query, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).  The query statements are:   *  &#x60;is assignee of PROJ&#x60; Returns the users that are assignees of at least one issue in project *PROJ*.  *  &#x60;is assignee of (PROJ-1, PROJ-2)&#x60; Returns users that are assignees on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is reporter of (PROJ-1, PROJ-2)&#x60; Returns users that are reporters on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is watcher of (PROJ-1, PROJ-2)&#x60; Returns users that are watchers on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is voter of (PROJ-1, PROJ-2)&#x60; Returns users that are voters on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is commenter of (PROJ-1, PROJ-2)&#x60; Returns users that have posted a comment on the issues *PROJ-1* or *PROJ-2*.  *  &#x60;is transitioner of (PROJ-1, PROJ-2)&#x60; Returns users that have performed a transition on issues *PROJ-1* or *PROJ-2*.  *  &#x60;[propertyKey].entity.property.path is \&quot;property value\&quot;&#x60; Returns users with the entity property value. For example, if user property &#x60;location&#x60; is set to value &#x60;{\&quot;office\&quot;: {\&quot;country\&quot;: \&quot;AU\&quot;, \&quot;city\&quot;: \&quot;Sydney\&quot;}}&#x60;, then it\&#39;s possible to use &#x60;[location].office.city is \&quot;Sydney\&quot;&#x60; to match the user.  The list of issues can be extended as needed, as in *(PROJ-1, PROJ-2, ... PROJ-n)*. Statements can be combined using the &#x60;AND&#x60; and &#x60;OR&#x60; operators to form more complex queries. For example:  &#x60;is assignee of PROJ AND [propertyKey].entity.property.path is \&quot;property value\&quot;&#x60;

### Example

```ts
import {
  Configuration,
  UserSearchApi,
} from 'jira-cloud-api';
import type { FindUsersByQueryRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserSearchApi(config);

  const body = {
    // string | The search query.
    query: query_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 789,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies FindUsersByQueryRequest;

  try {
    const data = await api.findUsersByQuery(body);
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
| **query** | `string` | The search query. | [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `100`] |

### Return type

[**PageBeanUser**](PageBeanUser.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the query is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **408** | Returned if the search is timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsersForPicker

> FoundUsers findUsersForPicker(query, maxResults, showAvatar, exclude, excludeAccountIds, avatarSize, excludeConnectUsers)

Find users for picker

Returns a list of users whose attributes match the query term. The returned object includes the &#x60;html&#x60; field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results.  This operation takes the users in the range defined by &#x60;maxResults&#x60;, up to the thousandth user, and then returns only the users from that range that match the query term. This means the operation usually returns fewer users than specified in &#x60;maxResults&#x60;. To get all the users who match the query term, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.  Privacy controls are applied to the response based on the users\&#39; preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls and calls by users without the required permission return search results for an exact name match only.

### Example

```ts
import {
  Configuration,
  UserSearchApi,
} from 'jira-cloud-api';
import type { FindUsersForPickerRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserSearchApi(config);

  const body = {
    // string | A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute\'s value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*.
    query: query_example,
    // number | The maximum number of items to return. The total number of matched users is returned in `total`. (optional)
    maxResults: 56,
    // boolean | Include the URI to the user\'s avatar. (optional)
    showAvatar: true,
    // Array<string> | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    exclude: ...,
    // Array<string> | A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, `excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5`. Cannot be provided with `exclude`. (optional)
    excludeAccountIds: ...,
    // string (optional)
    avatarSize: avatarSize_example,
    // boolean (optional)
    excludeConnectUsers: true,
  } satisfies FindUsersForPickerRequest;

  try {
    const data = await api.findUsersForPicker(body);
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
| **query** | `string` | A query string that is matched against user attributes, such as &#x60;displayName&#x60;, and &#x60;emailAddress&#x60;, to find relevant users. The string can match the prefix of the attribute\&#39;s value. For example, *query&#x3D;john* matches a user with a &#x60;displayName&#x60; of *John Smith* and a user with an &#x60;emailAddress&#x60; of *johnson@example.com*. | [Defaults to `undefined`] |
| **maxResults** | `number` | The maximum number of items to return. The total number of matched users is returned in &#x60;total&#x60;. | [Optional] [Defaults to `50`] |
| **showAvatar** | `boolean` | Include the URI to the user\&#39;s avatar. | [Optional] [Defaults to `false`] |
| **exclude** | `Array<string>` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] |
| **excludeAccountIds** | `Array<string>` | A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, &#x60;excludeAccountIds&#x3D;5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&amp;excludeAccountIds&#x3D;5b10ac8d82e05b22cc7d4ef5&#x60;. Cannot be provided with &#x60;exclude&#x60;. | [Optional] |
| **avatarSize** | `string` |  | [Optional] [Defaults to `undefined`] |
| **excludeConnectUsers** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**FoundUsers**](FoundUsers.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if &#x60;exclude&#x60; and &#x60;excludeAccountIds&#x60; are provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **429** | Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira\&#39;s normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsersWithAllPermissions

> Array&lt;User&gt; findUsersWithAllPermissions(permissions, query, username, accountId, issueKey, projectKey, startAt, maxResults)

Find users with permissions

Returns a list of users who fulfill these criteria:   *  their user attributes match a search string.  *  they have a set of permissions for a project or issue.  If no search string is provided, a list of all users with the permissions is returned.  This operation takes the users in the range defined by &#x60;startAt&#x60; and &#x60;maxResults&#x60;, up to the thousandth user, and then returns only the users from that range that match the search string and have permission for the project or issue. This means the operation usually returns fewer users than specified in &#x60;maxResults&#x60;. To get all the users who match the search string and have permission for the project or issue, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.  Privacy controls are applied to the response based on the users\&#39; preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get users for any project.  *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project, to get users for that project.

### Example

```ts
import {
  Configuration,
  UserSearchApi,
} from 'jira-cloud-api';
import type { FindUsersWithAllPermissionsRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserSearchApi(config);

  const body = {
    // string | A comma separated list of permissions. Permissions can be specified as any:   *  permission returned by [Get all permissions](#api-rest-api-3-permissions-get).  *  custom project permission added by Connect apps.  *  (deprecated) one of the following:           *  ASSIGNABLE\\_USER      *  ASSIGN\\_ISSUE      *  ATTACHMENT\\_DELETE\\_ALL      *  ATTACHMENT\\_DELETE\\_OWN      *  BROWSE      *  CLOSE\\_ISSUE      *  COMMENT\\_DELETE\\_ALL      *  COMMENT\\_DELETE\\_OWN      *  COMMENT\\_EDIT\\_ALL      *  COMMENT\\_EDIT\\_OWN      *  COMMENT\\_ISSUE      *  CREATE\\_ATTACHMENT      *  CREATE\\_ISSUE      *  DELETE\\_ISSUE      *  EDIT\\_ISSUE      *  LINK\\_ISSUE      *  MANAGE\\_WATCHER\\_LIST      *  MODIFY\\_REPORTER      *  MOVE\\_ISSUE      *  PROJECT\\_ADMIN      *  RESOLVE\\_ISSUE      *  SCHEDULE\\_ISSUE      *  SET\\_ISSUE\\_SECURITY      *  TRANSITION\\_ISSUE      *  VIEW\\_VERSION\\_CONTROL      *  VIEW\\_VOTERS\\_AND\\_WATCHERS      *  VIEW\\_WORKFLOW\\_READONLY      *  WORKLOG\\_DELETE\\_ALL      *  WORKLOG\\_DELETE\\_OWN      *  WORKLOG\\_EDIT\\_ALL      *  WORKLOG\\_EDIT\\_OWN      *  WORK\\_ISSUE
    permissions: permissions_example,
    // string | A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute\'s value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. (optional)
    query: query,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. (optional)
    accountId: accountId_example,
    // string | The issue key for the issue. (optional)
    issueKey: issueKey_example,
    // string | The project key for the project (case sensitive). (optional)
    projectKey: projectKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies FindUsersWithAllPermissionsRequest;

  try {
    const data = await api.findUsersWithAllPermissions(body);
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
| **permissions** | `string` | A comma separated list of permissions. Permissions can be specified as any:   *  permission returned by [Get all permissions](#api-rest-api-3-permissions-get).  *  custom project permission added by Connect apps.  *  (deprecated) one of the following:           *  ASSIGNABLE\\_USER      *  ASSIGN\\_ISSUE      *  ATTACHMENT\\_DELETE\\_ALL      *  ATTACHMENT\\_DELETE\\_OWN      *  BROWSE      *  CLOSE\\_ISSUE      *  COMMENT\\_DELETE\\_ALL      *  COMMENT\\_DELETE\\_OWN      *  COMMENT\\_EDIT\\_ALL      *  COMMENT\\_EDIT\\_OWN      *  COMMENT\\_ISSUE      *  CREATE\\_ATTACHMENT      *  CREATE\\_ISSUE      *  DELETE\\_ISSUE      *  EDIT\\_ISSUE      *  LINK\\_ISSUE      *  MANAGE\\_WATCHER\\_LIST      *  MODIFY\\_REPORTER      *  MOVE\\_ISSUE      *  PROJECT\\_ADMIN      *  RESOLVE\\_ISSUE      *  SCHEDULE\\_ISSUE      *  SET\\_ISSUE\\_SECURITY      *  TRANSITION\\_ISSUE      *  VIEW\\_VERSION\\_CONTROL      *  VIEW\\_VOTERS\\_AND\\_WATCHERS      *  VIEW\\_WORKFLOW\\_READONLY      *  WORKLOG\\_DELETE\\_ALL      *  WORKLOG\\_DELETE\\_OWN      *  WORKLOG\\_EDIT\\_ALL      *  WORKLOG\\_EDIT\\_OWN      *  WORK\\_ISSUE | [Defaults to `undefined`] |
| **query** | `string` | A query string that is matched against user attributes, such as &#x60;displayName&#x60; and &#x60;emailAddress&#x60;, to find relevant users. The string can match the prefix of the attribute\&#39;s value. For example, *query&#x3D;john* matches a user with a &#x60;displayName&#x60; of *John Smith* and a user with an &#x60;emailAddress&#x60; of *johnson@example.com*. Required, unless &#x60;accountId&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | A query string that is matched exactly against user &#x60;accountId&#x60;. Required, unless &#x60;query&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **issueKey** | `string` | The issue key for the issue. | [Optional] [Defaults to `undefined`] |
| **projectKey** | `string` | The project key for the project (case sensitive). | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;issueKey&#x60; or &#x60;projectKey&#x60; is missing.  *  &#x60;query&#x60; or &#x60;accountId&#x60; is missing.  *  &#x60;query&#x60; and &#x60;accountId&#x60; are provided.  *  &#x60;permissions&#x60; is empty or contains an invalid entry. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |
| **404** | Returned if the issue or project is not found. |  -  |
| **429** | Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira\&#39;s normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findUsersWithBrowsePermission

> Array&lt;User&gt; findUsersWithBrowsePermission(query, username, accountId, issueKey, projectKey, startAt, maxResults)

Find users with browse permission

Returns a list of users who fulfill these criteria:   *  their user attributes match a search string.  *  they have permission to browse issues.  Use this resource to find users who can browse:   *  an issue, by providing the &#x60;issueKey&#x60;.  *  any issue in a project, by providing the &#x60;projectKey&#x60;.  This operation takes the users in the range defined by &#x60;startAt&#x60; and &#x60;maxResults&#x60;, up to the thousandth user, and then returns only the users from that range that match the search string and have permission to browse issues. This means the operation usually returns fewer users than specified in &#x60;maxResults&#x60;. To get all the users who match the search string and have permission to browse issues, use [Get all users](#api-rest-api-3-users-search-get) and filter the records in your code.  Privacy controls are applied to the response based on the users\&#39; preferences. This could mean, for example, that the user\&#39;s email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls and calls by users without the required permission return empty search results.

### Example

```ts
import {
  Configuration,
  UserSearchApi,
} from 'jira-cloud-api';
import type { FindUsersWithBrowsePermissionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new UserSearchApi(config);

  const body = {
    // string | A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute\'s value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified. (optional)
    query: query,
    // string | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username: username_example,
    // string | A query string that is matched exactly against user `accountId`. Required, unless `query` is specified. (optional)
    accountId: accountId_example,
    // string | The issue key for the issue. Required, unless `projectKey` is specified. (optional)
    issueKey: issueKey_example,
    // string | The project key for the project (case sensitive). Required, unless `issueKey` is specified. (optional)
    projectKey: projectKey_example,
    // number | The index of the first item to return in a page of results (page offset). (optional)
    startAt: 56,
    // number | The maximum number of items to return per page. (optional)
    maxResults: 56,
  } satisfies FindUsersWithBrowsePermissionRequest;

  try {
    const data = await api.findUsersWithBrowsePermission(body);
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
| **query** | `string` | A query string that is matched against user attributes, such as &#x60;displayName&#x60; and &#x60;emailAddress&#x60;, to find relevant users. The string can match the prefix of the attribute\&#39;s value. For example, *query&#x3D;john* matches a user with a &#x60;displayName&#x60; of *John Smith* and a user with an &#x60;emailAddress&#x60; of *johnson@example.com*. Required, unless &#x60;accountId&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **username** | `string` | This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [Optional] [Defaults to `undefined`] |
| **accountId** | `string` | A query string that is matched exactly against user &#x60;accountId&#x60;. Required, unless &#x60;query&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **issueKey** | `string` | The issue key for the issue. Required, unless &#x60;projectKey&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **projectKey** | `string` | The project key for the project (case sensitive). Required, unless &#x60;issueKey&#x60; is specified. | [Optional] [Defaults to `undefined`] |
| **startAt** | `number` | The index of the first item to return in a page of results (page offset). | [Optional] [Defaults to `0`] |
| **maxResults** | `number` | The maximum number of items to return per page. | [Optional] [Defaults to `50`] |

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if:   *  &#x60;issueKey&#x60; or &#x60;projectKey&#x60; is missing.  *  &#x60;query&#x60; or &#x60;accountId&#x60; is missing.  *  &#x60;query&#x60; and &#x60;accountId&#x60; are provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if the issue or project is not found. |  -  |
| **429** | Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira\&#39;s normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

