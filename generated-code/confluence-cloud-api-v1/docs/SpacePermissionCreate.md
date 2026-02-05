
# SpacePermissionCreate

This object represents a permission for given space. Permissions consist of at least one operation object with an accompanying subjects object.  The following combinations of `operation` and `targetType` values are valid for the `operation` object:    - \'create\': \'page\', \'blogpost\', \'comment\', \'attachment\'   - \'read\': \'space\'   - \'delete\': \'page\', \'blogpost\', \'comment\', \'attachment\'   - \'export\': \'space\'   - \'administer\': \'space\'

## Properties

Name | Type
------------ | -------------
`subjects` | [SpacePermissionCreateSubjects](SpacePermissionCreateSubjects.md)
`operation` | [OperationCheckResult](OperationCheckResult.md)
`anonymousAccess` | boolean
`unlicensedAccess` | boolean


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


