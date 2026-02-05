
# MappingsByIssueTypeOverride

The mappings for migrating issues from old statuses to new statuses when switching from one workflow scheme to another. This field is required if any statuses in the current project\'s workflows would no longer exist in the target workflow scheme. Each mapping defines how to update issues from an old status to the corresponding new status in the issue’s new workflow.

## Properties

Name | Type
------------ | -------------
`issueTypeId` | string
`statusMappings` | [Array&lt;WorkflowAssociationStatusMapping&gt;](WorkflowAssociationStatusMapping.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


