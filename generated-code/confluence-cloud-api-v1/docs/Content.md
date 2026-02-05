
# Content

Base object for all content types.

## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`status` | string
`title` | string
`space` | [Space](Space.md)
`history` | [ContentHistory](ContentHistory.md)
`version` | [Version](Version.md)
`ancestors` | [Array&lt;Content&gt;](Content.md)
`operations` | [Array&lt;OperationCheckResult&gt;](OperationCheckResult.md)
`children` | [ContentChildren](ContentChildren.md)
`childTypes` | [ContentChildType](ContentChildType.md)
`descendants` | [ContentChildren](ContentChildren.md)
`container` | { [key: string]: any; }
`body` | [ContentBody](ContentBody.md)
`restrictions` | [ContentRestrictions](ContentRestrictions.md)
`metadata` | [ContentMetadata](ContentMetadata.md)
`macroRenderedOutput` | { [key: string]: object; }
`extensions` | object
`expandable` | [ContentExpandable](ContentExpandable.md)
`links` | [{ [key: string]: GenericLinksValue; }](GenericLinksValue.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


