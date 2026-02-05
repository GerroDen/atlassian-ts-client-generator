
# JexpJqlIssues

The JQL specifying the issues available in the evaluated Jira expression under the `issues` context variable. Not all issues returned by the JQL query are loaded, only those described by the `startAt` and `maxResults` properties. To determine whether it is necessary to iterate to ensure all the issues returned by the JQL query are evaluated, inspect `meta.issues.jql.count` in the response.

## Properties

Name | Type
------------ | -------------
`maxResults` | number
`query` | string
`startAt` | number
`validation` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


