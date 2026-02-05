
# ImmutableResultsSummary


## Properties

Name | Type
------------ | -------------
`active` | boolean
`artifactLinks` | [Array&lt;ArtifactLink&gt;](ArtifactLink.md)
`artifactLinksThatExist` | [Array&lt;ArtifactLink&gt;](ArtifactLink.md)
`buildAgentId` | number
`buildAgentType` | string
`buildCancelledDate` | string
`buildCompletedDate` | string
`buildDate` | string
`buildNumber` | number
`buildState` | string
`buildTime` | string
`changesListSummary` | string
`commits` | [Array&lt;Commit&gt;](Commit.md)
`customBuild` | boolean
`customBuildData` | object
`deltaState` | string
`duration` | number
`durationDescription` | string
`failed` | boolean
`finalized` | boolean
`finished` | boolean
`fixingJiraIssues` | [Set&lt;LinkedJiraIssue&gt;](LinkedJiraIssue.md)
`fullPlanName` | string
`id` | number
`immutableChain` | [ImmutableChain](ImmutableChain.md)
`immutablePlan` | [ImmutablePlan](ImmutablePlan.md)
`inProgress` | boolean
`jiraIssueKeys` | Set&lt;string&gt;
`jiraIssues` | [Set&lt;LinkedJiraIssue&gt;](LinkedJiraIssue.md)
`labelNames` | Array&lt;string&gt;
`lifeCycleState` | string
`logSize` | number
`manuallyOverriddenVariables` | [Array&lt;VariableSubstitution&gt;](VariableSubstitution.md)
`notBuilt` | boolean
`notRunYet` | boolean
`onceOff` | boolean
`pending` | boolean
`planIfExists` | [ImmutablePlan](ImmutablePlan.md)
`planKey` | [PlanKey](PlanKey.md)
`planName` | string
`planResultKey` | [PlanResultKey](PlanResultKey.md)
`processingDuration` | number
`processingDurationDescription` | string
`queueTime` | string
`queued` | boolean
`reasonSummary` | string
`rebuild` | boolean
`relatedJiraIssues` | [Set&lt;LinkedJiraIssue&gt;](LinkedJiraIssue.md)
`relativeBuildDate` | string
`relativeBuildStartedDate` | string
`relativeQueueDate` | string
`repositoryChangesets` | [Array&lt;RepositoryChangeset&gt;](RepositoryChangeset.md)
`restartCount` | number
`shortReasonSummary` | string
`statDate` | string
`subscriptions` | [Array&lt;ConsumedSubscription&gt;](ConsumedSubscription.md)
`substitutedVariables` | [Array&lt;VariableSubstitution&gt;](VariableSubstitution.md)
`successful` | boolean
`testResultsSummary` | [TestResultsSummary](TestResultsSummary.md)
`testSummary` | string
`timeToFix` | number
`triggerReason` | [TriggerReason](TriggerReason.md)
`uniqueAuthors` | [Set&lt;Author&gt;](Author.md)
`variableContextLogs` | [Array&lt;VariableContextSnapshot&gt;](VariableContextSnapshot.md)
`waiting` | boolean


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


