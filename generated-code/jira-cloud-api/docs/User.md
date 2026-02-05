
# User

A user with details as permitted by the user\'s Atlassian Account privacy settings. However, be aware of these exceptions:   *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, `displayName` provides an indication and other parameters have default values or are blank (for example, email is blank).  *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, `accountId` returns *unknown* and all other parameters have fallback values.  *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.

## Properties

Name | Type
------------ | -------------
`accountId` | string
`accountType` | string
`active` | boolean
`appType` | string
`applicationRoles` | [SimpleListWrapperApplicationRole](SimpleListWrapperApplicationRole.md)
`avatarUrls` | [AvatarUrlsBean](AvatarUrlsBean.md)
`displayName` | string
`emailAddress` | string
`expand` | string
`groups` | [SimpleListWrapperGroupName](SimpleListWrapperGroupName.md)
`guest` | boolean
`key` | string
`locale` | string
`name` | string
`self` | string
`timeZone` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


