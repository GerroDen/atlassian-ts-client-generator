
# ChainResultsSummary


## Properties

Name | Type
------------ | -------------
`active` | boolean
`artifactLinksThatExist` | [Array&lt;ArtifactLink&gt;](ArtifactLink.md)
`buildAgentId` | number
`buildAgentType` | string
`buildCancelledDate` | string
`buildCompletedDate` | string
`buildDate` | string
`buildKey` | string
`buildNumber` | number
`buildResultKey` | string
`buildState` | string
`buildTime` | string
`changesListSummary` | string
`commits` | [Array&lt;Commit&gt;](Commit.md)
`continuable` | boolean
`customBuild` | boolean
`customBuildData` | object
`deltaState` | string
`duration` | number
`durationDescription` | string
`failed` | boolean
`failedJobResults` | [Array&lt;BuildResultsSummary&gt;](BuildResultsSummary.md)
`finalized` | boolean
`finished` | boolean
`fixedInResult` | number
`fixingJiraIssues` | [Set&lt;LinkedJiraIssue&gt;](LinkedJiraIssue.md)
`formatVersion` | number
`fullPlanName` | string
`id` | number
`immutableChain` | [ImmutableChain](ImmutableChain.md)
`immutablePlan` | [ImmutableChain](ImmutableChain.md)
`inProgress` | boolean
`jiraIssueKeys` | Set&lt;string&gt;
`jiraIssues` | [Set&lt;LinkedJiraIssue&gt;](LinkedJiraIssue.md)
`labelNames` | Array&lt;string&gt;
`lifeCycleState` | string
`logSize` | number
`manuallyOverriddenVariables` | [Array&lt;VariableSubstitution&gt;](VariableSubstitution.md)
`markedForDeletion` | boolean
`mergeResult` | [MergeResultSummary](MergeResultSummary.md)
`notBuilt` | boolean
`notRunYet` | boolean
`onceOff` | boolean
`orderedJobResultSummaries` | [Array&lt;ResultsSummary&gt;](ResultsSummary.md)
`pending` | boolean
`planIfExists` | [ImmutableChain](ImmutableChain.md)
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
`restartable` | boolean
`shortReasonSummary` | string
`specsResult` | boolean
`stageResults` | [Array&lt;ChainStageResult&gt;](ChainStageResult.md)
`statDate` | string
`subscriptions` | [Array&lt;ConsumedSubscription&gt;](ConsumedSubscription.md)
`substitutedVariables` | [Array&lt;VariableSubstitution&gt;](VariableSubstitution.md)
`substitutedVariablesEncrypted` | [Array&lt;VariableSubstitution&gt;](VariableSubstitution.md)
`successful` | boolean
`testResultsSummary` | [TestResultsSummary](TestResultsSummary.md)
`testSummary` | string
`timeToFix` | number
`totalJobCount` | number
`triggerReason` | [TriggerReason](TriggerReason.md)
`uniqueAuthors` | [Set&lt;Author&gt;](Author.md)
`variableContextBaselineId` | number
`variableContextLogs` | [Array&lt;VariableContextSnapshot&gt;](VariableContextSnapshot.md)
`variableContextLogsEncrypted` | [Array&lt;VariableContextSnapshot&gt;](VariableContextSnapshot.md)
`waiting` | boolean


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


