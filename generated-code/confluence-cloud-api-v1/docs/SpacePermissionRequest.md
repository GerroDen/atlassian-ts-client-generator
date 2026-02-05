
# SpacePermissionRequest

This object represents the request for the single space permission. Permissions consist of one operation object with an accompanying subjects object.  The following combinations of `operation.key` and `operation.target` values are valid for the `operation` object: ``` bash \'create\': \'page\', \'blogpost\', \'comment\', \'attachment\' \'read\': \'space\' \'delete\': \'page\', \'blogpost\', \'comment\', \'attachment\', \'space\' \'export\': \'space\' \'administer\': \'space\' \'archive\': \'page\' \'restrict_content\': \'space\' ```  For example, to enable Delete Own permission, set the `operation` object to the following: ``` \"operation\": {     \"key\": \"delete\",     \"target\": \"space\" } ``` To enable Add/Delete Restrictions permissions, set the `operation` object to the following: ``` \"operation\": {     \"key\": \"restrict_content\",     \"target\": \"space\" } ```

## Properties

Name | Type
------------ | -------------
`subject` | [PermissionSubject](PermissionSubject.md)
`operation` | [SpacePermissionV2Operation](SpacePermissionV2Operation.md)
`links` | [{ [key: string]: GenericLinksValue; }](GenericLinksValue.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


