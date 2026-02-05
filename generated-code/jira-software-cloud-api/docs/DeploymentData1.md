
# DeploymentData1

Data related to a specific deployment in a specific environment that the deployment is present in. Must specify one of `issueKeys` or `associations`. 

## Properties

Name | Type
------------ | -------------
`deploymentSequenceNumber` | number
`updateSequenceNumber` | number
`issueKeys` | Array&lt;string&gt;
`associations` | [Array&lt;DeploymentDataAssociationsInner&gt;](DeploymentDataAssociationsInner.md)
`displayName` | string
`url` | string
`description` | string
`lastUpdated` | string
`label` | string
`duration` | number
`state` | string
`pipeline` | [Pipeline](Pipeline.md)
`environment` | [Environment](Environment.md)
`commands` | [Array&lt;Command&gt;](Command.md)
`schemaVersion` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


