
# TransitionPayload

The payload for creating a transition in a workflow. Can be DIRECTED, GLOBAL, SELF-LOOPED, GLOBAL LOOPED

## Properties

Name | Type
------------ | -------------
`actions` | [Array&lt;RulePayload&gt;](RulePayload.md)
`conditions` | [ConditionGroupPayload](ConditionGroupPayload.md)
`customIssueEventId` | string
`description` | string
`from` | [Array&lt;FromLayoutPayload&gt;](FromLayoutPayload.md)
`id` | number
`name` | string
`properties` | { [key: string]: string; }
`to` | [ToLayoutPayload](ToLayoutPayload.md)
`transitionScreen` | [RulePayload](RulePayload.md)
`triggers` | [Array&lt;RulePayload&gt;](RulePayload.md)
`type` | string
`validators` | [Array&lt;RulePayload&gt;](RulePayload.md)


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


