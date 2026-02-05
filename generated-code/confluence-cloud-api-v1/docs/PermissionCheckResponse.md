
# PermissionCheckResponse

This object represents the response for the content permission check API. If the user or group does not have permissions, the following errors may be returned:  - Group does not have permission to the space - Group does not have permission to the content - User is not allowed to use Confluence - User does not have permission to the space - User does not have permission to the content - Anonymous users are not allowed to use Confluence - Anonymous user does not have permission to the space - Anonymous user does not have permission to the content

## Properties

Name | Type
------------ | -------------
`hasPermission` | boolean
`errors` | [Array&lt;Message&gt;](Message.md)
`links` | [{ [key: string]: GenericLinksValue; }](GenericLinksValue.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


