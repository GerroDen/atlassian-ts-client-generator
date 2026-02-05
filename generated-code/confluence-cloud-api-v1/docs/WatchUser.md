
# WatchUser

This essentially the same as the `User` object, but no `_links` property and no `_expandable` property (therefore, different required fields).

## Properties

Name | Type
------------ | -------------
`type` | string
`username` | string
`userKey` | string
`accountId` | string
`profilePicture` | [Icon](Icon.md)
`displayName` | string
`timeZone` | string
`operations` | [Array&lt;OperationCheckResult&gt;](OperationCheckResult.md)
`externalCollaborator` | boolean
`isGuest` | boolean
`isExternalCollaborator` | boolean
`details` | [UserDetails](UserDetails.md)
`accountType` | string
`email` | string
`publicName` | string
`personalSpace` | object


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


