# JQLApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAutoComplete**](JQLApi.md#getautocomplete) | **GET** /rest/api/3/jql/autocompletedata | Get field reference data (GET) |
| [**getAutoCompletePost**](JQLApi.md#getautocompletepost) | **POST** /rest/api/3/jql/autocompletedata | Get field reference data (POST) |
| [**getFieldAutoCompleteForQueryString**](JQLApi.md#getfieldautocompleteforquerystring) | **GET** /rest/api/3/jql/autocompletedata/suggestions | Get field auto complete suggestions |
| [**migrateQueries**](JQLApi.md#migratequeries) | **POST** /rest/api/3/jql/pdcleaner | Convert user identifiers to account IDs in JQL queries |
| [**parseJqlQueries**](JQLApi.md#parsejqlqueries) | **POST** /rest/api/3/jql/parse | Parse JQL query |
| [**sanitiseJqlQueries**](JQLApi.md#sanitisejqlqueries) | **POST** /rest/api/3/jql/sanitize | Sanitize JQL queries |



## getAutoComplete

> JQLReferenceData getAutoComplete()

Get field reference data (GET)

Returns reference data for JQL searches. This is a downloadable version of the documentation provided in [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ) and [Advanced searching - functions reference](https://confluence.atlassian.com/x/hgORLQ), along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.  To filter visible field details by project or collapse non-unique fields by field type then [Get field reference data (POST)](#api-rest-api-3-jql-autocompletedata-post) can be used.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  JQLApi,
} from 'jira-cloud-api';
import type { GetAutoCompleteRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLApi(config);

  try {
    const data = await api.getAutoComplete();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**JQLReferenceData**](JQLReferenceData.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAutoCompletePost

> JQLReferenceData getAutoCompletePost(searchAutoCompleteFilter)

Get field reference data (POST)

Returns reference data for JQL searches. This is a downloadable version of the documentation provided in [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ) and [Advanced searching - functions reference](https://confluence.atlassian.com/x/hgORLQ), along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.  This operation can filter the custom fields returned by project. Invalid project IDs in &#x60;projectIds&#x60; are ignored. System fields are always returned.  It can also return the collapsed field for custom fields. Collapsed fields enable searches to be performed across all fields with the same name and of the same field type. For example, the collapsed field &#x60;Component - Component[Dropdown]&#x60; enables dropdown fields &#x60;Component - cf[10061]&#x60; and &#x60;Component - cf[10062]&#x60; to be searched simultaneously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  JQLApi,
} from 'jira-cloud-api';
import type { GetAutoCompletePostRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLApi(config);

  const body = {
    // SearchAutoCompleteFilter
    searchAutoCompleteFilter: {"includeCollapsedFields":true,"projectIds":[10000,10001,10002]},
  } satisfies GetAutoCompletePostRequest;

  try {
    const data = await api.getAutoCompletePost(body);
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
| **searchAutoCompleteFilter** | [SearchAutoCompleteFilter](SearchAutoCompleteFilter.md) |  | |

### Return type

[**JQLReferenceData**](JQLReferenceData.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is not valid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFieldAutoCompleteForQueryString

> AutoCompleteSuggestions getFieldAutoCompleteForQueryString(fieldName, fieldValue, predicateName, predicateValue)

Get field auto complete suggestions

Returns the JQL search auto complete suggestions for a field.  Suggestions can be obtained by providing:   *  &#x60;fieldName&#x60; to get a list of all values for the field.  *  &#x60;fieldName&#x60; and &#x60;fieldValue&#x60; to get a list of values containing the text in &#x60;fieldValue&#x60;.  *  &#x60;fieldName&#x60; and &#x60;predicateName&#x60; to get a list of all predicate values for the field.  *  &#x60;fieldName&#x60;, &#x60;predicateName&#x60;, and &#x60;predicateValue&#x60; to get a list of predicate values containing the text in &#x60;predicateValue&#x60;.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  JQLApi,
} from 'jira-cloud-api';
import type { GetFieldAutoCompleteForQueryStringRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLApi(config);

  const body = {
    // string | The name of the field. (optional)
    fieldName: reporter,
    // string | The partial field item name entered by the user. (optional)
    fieldValue: fieldValue_example,
    // string | The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*. (optional)
    predicateName: predicateName_example,
    // string | The partial predicate item name entered by the user. (optional)
    predicateValue: predicateValue_example,
  } satisfies GetFieldAutoCompleteForQueryStringRequest;

  try {
    const data = await api.getFieldAutoCompleteForQueryString(body);
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
| **fieldName** | `string` | The name of the field. | [Optional] [Defaults to `undefined`] |
| **fieldValue** | `string` | The partial field item name entered by the user. | [Optional] [Defaults to `undefined`] |
| **predicateName** | `string` | The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*. | [Optional] [Defaults to `undefined`] |
| **predicateValue** | `string` | The partial predicate item name entered by the user. | [Optional] [Defaults to `undefined`] |

### Return type

[**AutoCompleteSuggestions**](AutoCompleteSuggestions.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if an invalid combination of parameters is passed. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## migrateQueries

> ConvertedJQLQueries migrateQueries(jQLPersonalDataMigrationRequest)

Convert user identifiers to account IDs in JQL queries

Converts one or more JQL queries with user identifiers (username or user key) to equivalent JQL queries with account IDs.  You may wish to use this operation if your system stores JQL queries and you want to make them GDPR-compliant. For more information about GDPR-related changes, see the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/).  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

```ts
import {
  Configuration,
  JQLApi,
} from 'jira-cloud-api';
import type { MigrateQueriesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLApi(config);

  const body = {
    // JQLPersonalDataMigrationRequest
    jQLPersonalDataMigrationRequest: {"queryStrings":["assignee = mia","issuetype = Bug AND assignee in (mia) AND reporter in (alana) order by lastViewed DESC"]},
  } satisfies MigrateQueriesRequest;

  try {
    const data = await api.migrateQueries(body);
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
| **jQLPersonalDataMigrationRequest** | [JQLPersonalDataMigrationRequest](JQLPersonalDataMigrationRequest.md) |  | |

### Return type

[**ConvertedJQLQueries**](ConvertedJQLQueries.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. Note that the JQL queries are returned in the same order that they were passed. |  -  |
| **400** | Returned if at least one of the queries cannot be converted. For example, the JQL has invalid operators or invalid keywords, or the users in the query cannot be found. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## parseJqlQueries

> ParsedJqlQueries parseJqlQueries(validation, jqlQueriesToParse)

Parse JQL query

Parses and validates JQL queries.  Validation is performed in context of the current user.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

```ts
import {
  Configuration,
  JQLApi,
} from 'jira-cloud-api';
import type { ParseJqlQueriesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLApi(config);

  const body = {
    // 'strict' | 'warn' | 'none' | How to validate the JQL query and treat the validation results. Validation options include:   *  `strict` Returns all errors. If validation fails, the query structure is not returned.  *  `warn` Returns all errors. If validation fails but the JQL query is correctly formed, the query structure is returned.  *  `none` No validation is performed. If JQL query is correctly formed, the query structure is returned.
    validation: validation_example,
    // JqlQueriesToParse
    jqlQueriesToParse: {"queries":["summary ~ test AND (labels in (urgent, blocker) OR lastCommentedBy = currentUser()) AND status CHANGED AFTER startOfMonth(-1M) ORDER BY updated DESC","issue.property[\"spaces here\"].value in (\"Service requests\", Incidents)","invalid query","summary = test","summary in test","project = INVALID","universe = 42"]},
  } satisfies ParseJqlQueriesRequest;

  try {
    const data = await api.parseJqlQueries(body);
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
| **validation** | `strict`, `warn`, `none` | How to validate the JQL query and treat the validation results. Validation options include:   *  &#x60;strict&#x60; Returns all errors. If validation fails, the query structure is not returned.  *  &#x60;warn&#x60; Returns all errors. If validation fails but the JQL query is correctly formed, the query structure is returned.  *  &#x60;none&#x60; No validation is performed. If JQL query is correctly formed, the query structure is returned. | [Defaults to `&#39;strict&#39;`] [Enum: strict, warn, none] |
| **jqlQueriesToParse** | [JqlQueriesToParse](JqlQueriesToParse.md) |  | |

### Return type

[**ParsedJqlQueries**](ParsedJqlQueries.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sanitiseJqlQueries

> SanitizedJqlQueries sanitiseJqlQueries(jqlQueriesToSanitize)

Sanitize JQL queries

Sanitizes one or more JQL queries by converting readable details into IDs where a user doesn\&#39;t have permission to view the entity.  For example, if the query contains the clause *project &#x3D; \&#39;Secret project\&#39;*, and a user does not have browse permission for the project \&quot;Secret project\&quot;, the sanitized query replaces the clause with *project &#x3D; 12345\&quot;* (where 12345 is the ID of the project). If a user has the required permission, the clause is not sanitized. If the account ID is null, sanitizing is performed for an anonymous user.  Note that sanitization doesn\&#39;t make the queries GDPR-compliant, because it doesn\&#39;t remove user identifiers (username or user key). If you need to make queries GDPR-compliant, use [Convert user identifiers to account IDs in JQL queries](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-jql/#api-rest-api-3-jql-sanitize-post).  Before sanitization each JQL query is parsed. The queries are returned in the same order that they were passed.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

```ts
import {
  Configuration,
  JQLApi,
} from 'jira-cloud-api';
import type { SanitiseJqlQueriesRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JQLApi(config);

  const body = {
    // JqlQueriesToSanitize
    jqlQueriesToSanitize: {"queries":[{"query":"project = 'Sample project'"},{"accountId":"5b10ac8d82e05b22cc7d4ef5","query":"project = 'Sample project'"},{"accountId":"cda2aa1395ac195d951b3387","query":"project = 'Sample project'"},{"accountId":"5b10ac8d82e05b22cc7d4ef5","query":"invalid query"}]},
  } satisfies SanitiseJqlQueriesRequest;

  try {
    const data = await api.sanitiseJqlQueries(body);
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
| **jqlQueriesToSanitize** | [JqlQueriesToSanitize](JqlQueriesToSanitize.md) |  | |

### Return type

[**SanitizedJqlQueries**](SanitizedJqlQueries.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | Returned if the request is invalid. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

