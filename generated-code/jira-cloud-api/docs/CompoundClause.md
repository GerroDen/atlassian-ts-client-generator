
# CompoundClause

A JQL query clause that consists of nested clauses. For example, `(labels in (urgent, blocker) OR lastCommentedBy = currentUser()). Note that, where nesting is not defined, the parser nests JQL clauses based on the operator precedence. For example, \"A OR B AND C\" is parsed as \"(A OR B) AND C\". See Setting the precedence of operators for more information about precedence in JQL queries.`

## Properties

Name | Type
------------ | -------------
`clauses` | [Array&lt;JqlQueryClause&gt;](JqlQueryClause.md)
`operator` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


