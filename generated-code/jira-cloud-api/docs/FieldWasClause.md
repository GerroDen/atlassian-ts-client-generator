
# FieldWasClause

A clause that asserts a previous value of a field. For example, `status WAS \"Resolved\" BY currentUser() BEFORE \"2019/02/02\"`. See [WAS](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-WASWAS) for more information about the WAS operator.

## Properties

Name | Type
------------ | -------------
`field` | [JqlQueryField](JqlQueryField.md)
`operand` | [JqlQueryClauseOperand](JqlQueryClauseOperand.md)
`operator` | string
`predicates` | [Array&lt;JqlQueryClauseTimePredicate&gt;](JqlQueryClauseTimePredicate.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


