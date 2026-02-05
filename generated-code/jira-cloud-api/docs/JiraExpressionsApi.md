# JiraExpressionsApi

All URIs are relative to *https://your-domain.atlassian.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyseExpression**](JiraExpressionsApi.md#analyseexpression) | **POST** /rest/api/3/expression/analyse | Analyse Jira expression |
| [**evaluateJSISJiraExpression**](JiraExpressionsApi.md#evaluatejsisjiraexpression) | **POST** /rest/api/3/expression/evaluate | Evaluate Jira expression using enhanced search API |
| [**evaluateJiraExpression**](JiraExpressionsApi.md#evaluatejiraexpression) | **POST** /rest/api/3/expression/eval | Currently being removed. Evaluate Jira expression |



## analyseExpression

> JiraExpressionsAnalysis analyseExpression(jiraExpressionForAnalysis, check)

Analyse Jira expression

Analyses and validates Jira expressions.  As an experimental feature, this operation can also attempt to type-check the expressions.  Learn more about Jira expressions in the [documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/).  **[Permissions](#permissions) required**: None.

### Example

```ts
import {
  Configuration,
  JiraExpressionsApi,
} from 'jira-cloud-api';
import type { AnalyseExpressionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JiraExpressionsApi(config);

  const body = {
    // JiraExpressionForAnalysis | The Jira expressions to analyse.
    jiraExpressionForAnalysis: {"contextVariables":{"listOfStrings":"List<String>","record":"{ a: Number, b: String }","value":"User"},"expressions":["issues.map(issue => issue.properties['property_key'])"]},
    // 'syntax' | 'type' | 'complexity' | The check to perform:   *  `syntax` Each expression\'s syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression\'s length.  *  `type` EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don\'t exist or passing the wrong number of arguments to functions. Also performs the syntax check.  *  `complexity` EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute. (optional)
    check: check_example,
  } satisfies AnalyseExpressionRequest;

  try {
    const data = await api.analyseExpression(body);
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
| **jiraExpressionForAnalysis** | [JiraExpressionForAnalysis](JiraExpressionForAnalysis.md) | The Jira expressions to analyse. | |
| **check** | `syntax`, `type`, `complexity` | The check to perform:   *  &#x60;syntax&#x60; Each expression\&#39;s syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression\&#39;s length.  *  &#x60;type&#x60; EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don\&#39;t exist or passing the wrong number of arguments to functions. Also performs the syntax check.  *  &#x60;complexity&#x60; EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute. | [Optional] [Defaults to `&#39;syntax&#39;`] [Enum: syntax, type, complexity] |

### Return type

[**JiraExpressionsAnalysis**](JiraExpressionsAnalysis.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the request is successful. |  -  |
| **400** | 400 response |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | 404 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## evaluateJSISJiraExpression

> JExpEvaluateJiraExpressionResultBean evaluateJSISJiraExpression(jiraExpressionEvaluateRequestBean, expand)

Evaluate Jira expression using enhanced search API

Evaluates a Jira expression and returns its value. The difference between this and &#x60;eval&#x60; is that this endpoint uses the enhanced search API when evaluating JQL queries. This API is eventually consistent, unlike the strongly consistent &#x60;eval&#x60; API. This allows for better performance and scalability. In addition, this API\&#39;s response for JQL evaluation is based on a scrolling view (backed by a &#x60;nextPageToken&#x60;) instead of a paginated view (backed by &#x60;startAt&#x60; and &#x60;totalCount&#x60;).  This resource can be used to test Jira expressions that you plan to use elsewhere, or to fetch data in a flexible way. Consult the [Jira expressions documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/) for more details.  #### Context variables ####  The following context variables are available to Jira expressions evaluated by this resource. Their presence depends on various factors; usually you need to manually request them in the context object sent in the payload, but some of them are added automatically under certain conditions.   *  &#x60;user&#x60; ([User](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user)): The current user. Always available and equal to &#x60;null&#x60; if the request is anonymous.  *  &#x60;app&#x60; ([App](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#app)): The [Connect app](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) that made the request. Available only for authenticated requests made by Connect apps (read more here: [Authentication for Connect apps](https://developer.atlassian.com/cloud/jira/platform/security-for-connect-apps/)).  *  &#x60;issue&#x60; ([Issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): The current issue. Available only when the issue is provided in the request context object.  *  &#x60;issues&#x60; ([List](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#list) of [Issues](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): A collection of issues matching a JQL query. Available only when JQL is provided in the request context object.  *  &#x60;project&#x60; ([Project](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#project)): The current project. Available only when the project is provided in the request context object.  *  &#x60;sprint&#x60; ([Sprint](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#sprint)): The current sprint. Available only when the sprint is provided in the request context object.  *  &#x60;board&#x60; ([Board](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#board)): The current board. Available only when the board is provided in the request context object.  *  &#x60;serviceDesk&#x60; ([ServiceDesk](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#servicedesk)): The current service desk. Available only when the service desk is provided in the request context object.  *  &#x60;customerRequest&#x60; ([CustomerRequest](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#customerrequest)): The current customer request. Available only when the customer request is provided in the request context object.  In addition, you can pass custom context variables along with their types. You can then access them from the Jira expression by key. You can use the following variables in a custom context:   *  &#x60;user&#x60;: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.  *  &#x60;issue&#x60;: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.  *  &#x60;json&#x60;: A JSON object containing custom content.  *  &#x60;list&#x60;: A JSON list of &#x60;user&#x60;, &#x60;issue&#x60;, or &#x60;json&#x60; variable types.  This operation can be accessed anonymously.  **[Permissions](#permissions) required**: None. However, an expression may return different results for different users depending on their permissions. For example, different users may see different comments on the same issue.   Permission to access Jira Software is required to access Jira Software context variables (&#x60;board&#x60; and &#x60;sprint&#x60;) or fields (for example, &#x60;issue.sprint&#x60;).

### Example

```ts
import {
  Configuration,
  JiraExpressionsApi,
} from 'jira-cloud-api';
import type { EvaluateJSISJiraExpressionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JiraExpressionsApi(config);

  const body = {
    // JiraExpressionEvaluateRequestBean | The Jira expression and the evaluation context.
    jiraExpressionEvaluateRequestBean: {"context":{"board":10100,"custom":{"config":{"type":"json","value":{"userId":"10002"}},"issuesList":[{"key":"ACJIRA-1471","type":"issue"},{"id":100001,"type":"issue"}],"myUser":{"accountId":"100001","type":"user"},"nullField":{"type":"json"}},"customerRequest":1450,"issue":{"key":"ACJIRA-1470"},"issues":{"jql":{"maxResults":100,"nextPageToken":"EgQIlMIC","query":"project = HSP"}},"project":{"key":"ACJIRA"},"serviceDesk":10023,"sprint":10001},"expression":"{ key: issue.key, type: issue.issueType.name, links: issue.links.map(link => link.linkedIssue.id), listCustomVariable: issuesList.includes(issue), customVariables: myUser.accountId == config.userId}"},
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. (optional)
    expand: expand_example,
  } satisfies EvaluateJSISJiraExpressionRequest;

  try {
    const data = await api.evaluateJSISJiraExpression(body);
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
| **jiraExpressionEvaluateRequestBean** | [JiraExpressionEvaluateRequestBean](JiraExpressionEvaluateRequestBean.md) | The Jira expression and the evaluation context. | |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;meta.complexity&#x60; that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. | [Optional] [Defaults to `undefined`] |

### Return type

[**JExpEvaluateJiraExpressionResultBean**](JExpEvaluateJiraExpressionResultBean.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the evaluation results in a value. The result is a JSON primitive value, list, or object. |  -  |
| **400** | Returned if:   *  the request is invalid, that is:           *  invalid data is provided, such as a request including issue ID and key.      *  the expression is invalid and can not be parsed.  *  evaluation fails at runtime. This may happen for various reasons. For example, accessing a property on a null object (such as the expression &#x60;issue.id&#x60; where &#x60;issue&#x60; is &#x60;null&#x60;). In this case an error message is provided.  *  If jql is unbounded or empty.  *  If nextPageToken is invalid |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if any object provided in the request context is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## evaluateJiraExpression

> JiraExpressionResult evaluateJiraExpression(jiraExpressionEvalRequestBean, expand)

Currently being removed. Evaluate Jira expression

Endpoint is currently being removed. [More details](https://developer.atlassian.com/changelog/#CHANGE-2046)  Evaluates a Jira expression and returns its value.  This resource can be used to test Jira expressions that you plan to use elsewhere, or to fetch data in a flexible way. Consult the [Jira expressions documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/) for more details.  #### Context variables ####  The following context variables are available to Jira expressions evaluated by this resource. Their presence depends on various factors; usually you need to manually request them in the context object sent in the payload, but some of them are added automatically under certain conditions.   *  &#x60;user&#x60; ([User](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user)): The current user. Always available and equal to &#x60;null&#x60; if the request is anonymous.  *  &#x60;app&#x60; ([App](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#app)): The [Connect app](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) that made the request. Available only for authenticated requests made by Connect Apps (read more here: [Authentication for Connect apps](https://developer.atlassian.com/cloud/jira/platform/security-for-connect-apps/)).  *  &#x60;issue&#x60; ([Issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): The current issue. Available only when the issue is provided in the request context object.  *  &#x60;issues&#x60; ([List](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#list) of [Issues](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): A collection of issues matching a JQL query. Available only when JQL is provided in the request context object.  *  &#x60;project&#x60; ([Project](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#project)): The current project. Available only when the project is provided in the request context object.  *  &#x60;sprint&#x60; ([Sprint](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#sprint)): The current sprint. Available only when the sprint is provided in the request context object.  *  &#x60;board&#x60; ([Board](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#board)): The current board. Available only when the board is provided in the request context object.  *  &#x60;serviceDesk&#x60; ([ServiceDesk](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#servicedesk)): The current service desk. Available only when the service desk is provided in the request context object.  *  &#x60;customerRequest&#x60; ([CustomerRequest](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#customerrequest)): The current customer request. Available only when the customer request is provided in the request context object.  Also, custom context variables can be passed in the request with their types. Those variables can be accessed by key in the Jira expression. These variable types are available for use in a custom context:   *  &#x60;user&#x60;: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.  *  &#x60;issue&#x60;: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.  *  &#x60;json&#x60;: A JSON object containing custom content.  *  &#x60;list&#x60;: A JSON list of &#x60;user&#x60;, &#x60;issue&#x60;, or &#x60;json&#x60; variable types.  This operation can be accessed anonymously.  **[Permissions](#permissions) required**: None. However, an expression may return different results for different users depending on their permissions. For example, different users may see different comments on the same issue.   Permission to access Jira Software is required to access Jira Software context variables (&#x60;board&#x60; and &#x60;sprint&#x60;) or fields (for example, &#x60;issue.sprint&#x60;).

### Example

```ts
import {
  Configuration,
  JiraExpressionsApi,
} from 'jira-cloud-api';
import type { EvaluateJiraExpressionRequest } from 'jira-cloud-api';

async function example() {
  console.log("🚀 Testing jira-cloud-api SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
    // To configure HTTP basic authorization: basicAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
  });
  const api = new JiraExpressionsApi(config);

  const body = {
    // JiraExpressionEvalRequestBean | The Jira expression and the evaluation context.
    jiraExpressionEvalRequestBean: {"context":{"board":10100,"custom":{"config":{"type":"json","value":{"userId":"10002"}},"issuesList":[{"key":"ACJIRA-1471","type":"issue"},{"id":100001,"type":"issue"}],"myUser":{"accountId":"100001","type":"user"},"nullField":{"type":"json"}},"customerRequest":1450,"issue":{"key":"ACJIRA-1470"},"issues":{"jql":{"maxResults":100,"query":"project = HSP","startAt":0,"validation":"strict"}},"project":{"key":"ACJIRA"},"serviceDesk":10023,"sprint":10001},"expression":"{ key: issue.key, type: issue.issueType.name, links: issue.links.map(link => link.linkedIssue.id), listCustomVariable: issuesList.includes(issue), customVariables: myUser.accountId == config.userId}"},
    // string | Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. (optional)
    expand: expand_example,
  } satisfies EvaluateJiraExpressionRequest;

  try {
    const data = await api.evaluateJiraExpression(body);
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
| **jiraExpressionEvalRequestBean** | [JiraExpressionEvalRequestBean](JiraExpressionEvalRequestBean.md) | The Jira expression and the evaluation context. | |
| **expand** | `string` | Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;meta.complexity&#x60; that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. | [Optional] [Defaults to `undefined`] |

### Return type

[**JiraExpressionResult**](JiraExpressionResult.md)

### Authorization

[OAuth2 accessCode](../README.md#OAuth2-accessCode), [basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returned if the evaluation results in a value. The result is a JSON primitive value, list, or object. |  -  |
| **400** | Returned if:   *  the request is invalid, that is:           *  invalid data is provided, such as a request including issue ID and key.      *  the expression is invalid and can not be parsed.  *  evaluation fails at runtime. This may happen for various reasons. For example, accessing a property on a null object (such as the expression &#x60;issue.id&#x60; where &#x60;issue&#x60; is &#x60;null&#x60;). In this case an error message is provided. |  -  |
| **401** | Returned if the authentication credentials are incorrect or missing. |  -  |
| **404** | Returned if any object provided in the request context is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

