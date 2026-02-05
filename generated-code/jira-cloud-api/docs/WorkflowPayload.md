
# WorkflowPayload

The payload for creating workflow, see https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflows/\\#api-rest-api-3-workflows-create-post

## Properties

Name | Type
------------ | -------------
`description` | string
`loopedTransitionContainerLayout` | [WorkflowStatusLayoutPayload](WorkflowStatusLayoutPayload.md)
`name` | string
`onConflict` | string
`pcri` | [ProjectCreateResourceIdentifier](ProjectCreateResourceIdentifier.md)
`startPointLayout` | [WorkflowStatusLayoutPayload](WorkflowStatusLayoutPayload.md)
`statuses` | [Array&lt;WorkflowStatusPayload&gt;](WorkflowStatusPayload.md)
`transitions` | [Array&lt;TransitionPayload&gt;](TransitionPayload.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


