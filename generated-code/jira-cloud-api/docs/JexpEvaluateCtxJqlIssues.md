
# JexpEvaluateCtxJqlIssues

The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. Not all issues returned by the JQL query are loaded, only those described by the `nextPageToken` and `maxResults` properties. This bean will be replacing JexpJqlIssues bean as part of new `evaluate` endpoint

## Properties

Name | Type
------------ | -------------
`maxResults` | number
`nextPageToken` | string
`query` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


