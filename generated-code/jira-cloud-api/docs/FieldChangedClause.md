
# FieldChangedClause

A clause that asserts whether a field was changed. For example, `status CHANGED AFTER startOfMonth(-1M)`.See [CHANGED](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for more information about the CHANGED operator.

## Properties

Name | Type
------------ | -------------
`field` | [JqlQueryField](JqlQueryField.md)
`operator` | string
`predicates` | [Array&lt;JqlQueryClauseTimePredicate&gt;](JqlQueryClauseTimePredicate.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


